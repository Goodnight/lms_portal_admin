$(function() {

	// 加载列表
	// page(1);

	// 加载人员列表
	$(".chooseperson")
			.click(
					function() {
						var url = basepath
								+ "/dialog/user.html?&rq=ajax&from=choose&html_name=search_principle_name&html_id=search_principle_id&r="
								+ Math.random();
						$("#dialog_content").load(url);
						$("#dialog,#dialog .blackall,#dialog .newwindow")
								.show();
					});

	// 删除培训班
	$("#btn_delete").click(function() {
		var ids = $("input:checkbox[name=cid]:checked");
		if (ids.length > 0) {
			$.dialog.confirm("确定要删除选项吗？", function() {
				var param = "";
				for (i = 0; i < ids.length; i++) {
					// 通过delete属性判断是否可以删除
					if ($(ids[i]).attr("delete") == "1") {
						param += "&cid=" + $(ids[i]).val();
					} else {
						$.dialog.alert("选中内容包含已经实施或完成的选项！");
						return;
					}
				}
				if (param == "") {
					return;
				}
				$.ajax({
					url : "delete.html",
					type : "POST",
					data : param + "&rq=ajax&rqtp=json",
					dataType : "json",
					success : function(data) {
						checkLogin(data);
						if (data == null) {
							$.dialog.tips("删除出错", 2, "tips.gif");
						} else {
							$.dialog.tips("删除成功", 2, "tips.gif");
							page(1);
						}
					},
					error : function() {
						$.dialog.tips("删除出错", 2, "tips.gif");
					}
				});
			}, function() {

			});
		} else {
			$.dialog.alert("请选择删除项！");
		}
	});

	$("input[name=isSub]").click(function() {
		page(1);
	});

	// 高级搜索
	$(".searchbutton").click(function() {
		page(1);
	});

	$(".class_name_input").focus(function() {
		var ms = $(this).val();
		if (ms == "输入培训班的名称") {
			$(this).val("");
		}
	});

	$("#search_principle_name").blur(function() {
		if ($(this).val() == "") {
			$("#search_principle_id").val("");
		}
	});

	$(".cleanchoose").click(function() {
		$("#search_principle_name").val("");
		$("#search_principle_id").val("");
	});

	$(".class_name_input").blur(function() {
		var ms = $(this).val();
		if (ms == "") {
			$(this).val("输入培训班的名称");
		}
	});

	// 查询日期
	$("#search_start_date").datepicker({
		showOn : "button",
		changeMonth : true,
		buttonImage : basepath + "/images/calendar.gif",
		buttonImageOnly : true,
		dateFormat : "yy-mm-dd",
		onSelect : function(dt) {
			$("#search_end_date").datepicker("option", "minDate", dt);
		}
	});

	$("#search_end_date").datepicker({
		showOn : "button",
		changeMonth : true,
		buttonImage : basepath + "/images/calendar.gif",
		buttonImageOnly : true,
		dateFormat : "yy-mm-dd",
		onSelect : function(dt) {
			$("#search_start_date").datepicker("option", "maxDate", dt);
		}
	});

	// 新建培训班
	$(".cls_new_class").click(function() {
		var orgid = $("#search_orgid").val();
		window.open("information.html?orgid=" + orgid, "_blank");
	});
});

function orgClick(type, id, name) {
	$("#search_orgid").val(id);
	page(1);
	setNav(name);
}

/**
 * 更新导航
 */
function setNav(name) {
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>" + name + "</li>");
}

/**
 * 分页
 */
function page(i) {
	$.dialog.tips('数据加载中...', 600, 'loading.gif');
	var max = $("#list_trainclass .page_max").val() ? $(
			"#list_trainclass .page_max").val() : 10;
	var orgid = $("#search_orgid").val();
	var isSub = $("input[name=isSub]:checked").val();
	var name = $("#search_name").val();
	var way = $("input[name=search_way]:checked").val();
	var principal = $("#search_principle_id").val();
	var level = $("#search_level").val();
	var status = $("input[name=search_status]:checked").val();
	var start_date = $("#search_start_date").val();
	var end_date = $("#search_end_date").val();
	var type = $("input[name=search_type]:checked").val();
	var response = $("input[name=search_response]:checked").val();
	var behaviour = $("input[name=search_behaviour]:checked").val();
	var exam = $("input[name=search_exam]:checked").val();
	var query = "&isSub=" + isSub;
	if (orgid != "") {
		query += "&orgid=" + orgid;
	}
	if (name != "" && name != "输入培训班的名称") {
		query += "&name=" + name;
	}
	if (way != "") {
		query += "&way=" + way;
	}
	if (principal != "") {
		query += "&principal=" + principal;
	}
	if (level != "") {
		query += "&level=" + level;
	}
	if (status != "" && status != "0") {
		query += "&status=" + status;
	}
	if (start_date != "") {
		query += "&start_date=" + start_date;
	}
	if (end_date != "") {
		query += "&end_date=" + end_date;
	}
	if (type != "") {
		query += "&type=" + type;
	}
	if (response != "") {
		query += "&hasResponse=" + response;
	}
	if (behaviour != "") {
		query += "&hasBehavior=" + behaviour;
	}
	if (exam != "") {
		query += "&exam=" + exam;
	}
	var url = basepath + "/list/trainclass.html?rq=ajax&pagefn=page&page=" + i
			+ "&max=" + max + "&r=" + Math.random();
	url = url + query;
	$("#list_trainclass").load(encodeURI(url + query), function() {
		$.dialog.tips('数据加载完毕', 1, 'tips.gif');
		ishaveexam();
		bindChooseAll("cls_chooseall");
		// 选择每页记录数量
		$("#list_trainclass .page_max").change(function() {
			page(1);
		});
	});
}
function ishaveexam() {
	var ids = $("input:hidden[name=exam]");
	var url = basepath + "/trainclass/isHaveExam.html?tcid=";
	var cids = "";
	for ( var i = 0; i < ids.length; i++) {
		var cid = $(ids[i]).val();
		cids = cids + cid + ",";
	}

	$.get(url + cids, function(result) {
		var arr = eval(result);
		for ( var i = 0; i < arr.length; i++) {
			var id_ = "#" + arr[i].cid;
			if (arr[i].size > 0) {
				$(id_).text("有");
			} else {
				$(id_).text("无");
			}
		}

	});
}

function export_trainclass() {

	var orgid = $("#search_orgid").val();
	var isSub = $("input[name=isSub]:checked").val();
	var name = $("#search_name").val();
	var way = $("input[name=search_way]:checked").val();
	var principal = $("#search_principle_id").val();
	var level = $("#search_level").val();
	var status = $("input[name=search_status]:checked").val();
	var start_date = $("#search_start_date").val();
	var end_date = $("#search_end_date").val();
	var type = $("input[name=search_type]:checked").val();
	var response = $("input[name=search_response]:checked").val();
	var behaviour = $("input[name=search_behaviour]:checked").val();
	var exam = $("input[name=search_exam]:checked").val();
	var query = "&isSub=" + isSub;
	if (orgid != "") {
		query += "&orgid=" + orgid;
	}
	if (name != "" && name != "输入培训班的名称") {
		query += "&name=" + name;
	}
	if (way != "") {
		query += "&way=" + way;
	}
	if (principal != "") {
		query += "&principal=" + principal;
	}
	if (level != "") {
		query += "&level=" + level;
	}
	if (status != "" && status != "0") {
		query += "&status=" + status;
	}
	if (start_date != "") {
		query += "&start_date=" + start_date;
	}
	if (end_date != "") {
		query += "&end_date=" + end_date;
	}
	if (type != "") {
		query += "&type=" + type;
	}
	if (response != "") {
		query += "&hasResponse=" + response;
	}
	if (behaviour != "") {
		query += "&hasBehavior=" + behaviour;
	}
	if (exam != "") {
		query += "&exam=" + exam;
	}
	loadingDataStart();
	var countUrl = basepath + "/trainclass/exportCount.html?r=" + Math.random();
	var listUrl = basepath + "/trainclass/exportList.html?r=" + Math.random();
	postData(encodeURI(countUrl + query), encodeURI(listUrl + query));
}
