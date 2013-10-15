$(function() {
	// 加载列表

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

});

// 预览
function clickshpw(obj) {
	outCode = $(obj).attr("title");
	$
			.ajax({
				url : basepath + "/courseware/toLookCourse.html?outCote="
						+ outCode,
				type : "POST",
				data : outCode,
				dataType : "json",
				success : function(status) {
					if (status == "2" || status == "3") {
						alert("资源正在解压缩，请稍后预览!");
					}
					if (status != "2" && status != "3" && status != "4"
							&& status != "" && status != null) {
						alert("播放不成功");
					}
					if (status == "4" || status == "" || status == null) {
						id = $(obj).attr("id");
						window
								.open(id, "ctu_player",
										"channelmode=yes,fullscreen=yes,location=no,menubar=no,toolbar=no,titlebar=no");
					}
				}
			});
}

// 全选反选
function checkAll(formvalue) {
	var roomids = document.getElementsByName(formvalue);
	for ( var j = 0; j < roomids.length; j++) {
		if (roomids.item(j).checked == false) {
			roomids.item(j).checked = true;

		} else {
			roomids.item(j).checked = false;
		}
	}
	$.uniform.update();
}

/**
 * 分页
 */
function page(i) {
	// 分页调用高级搜索的查询方法.
	selectBottonClick(i);
	/*
	 * var max = $("#list_lsResList .page_max").val()?$("#list_lsResList
	 * .page_max").val():10; var url =
	 * basepath+"/list/toLsResList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	 * $("#list_lsResList").load(encodeURI(url),function(){
	 * $(".cls_chooseall").click(function(){ if($(this).attr("checked")){
	 * $(".cls_chooseitem").attr("checked",true); }else{
	 * $(".cls_chooseitem").attr("checked",false); } $.uniform.update(); });
	 * $(".cls_checkbox").uniform(); //选择每页记录数量 $("#list_lsResList
	 * .page_max").change(function(){ page(1); }); });
	 */
}

// 高级搜索
function selectBottonClick(i) {
	$.dialog.tips('数据加载中...', 600, 'loading.gif');
	var max = $("#list_lsResList .page_max").val() ? $(
			"#list_lsResList .page_max").val() : 10;
	var query = "";
	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}

	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
	}
	var name = $("#name").val();
	query += "&name=" + name;
	var rlId = $("#sn").val();
	query += "&rlId=" + rlId;
	var type = $("#type").val();
	query += "&type=" + type;
	var startDt = $("#search_start_date").val();
	query += "&startDt=" + startDt;
	var endDt = $("#search_end_date").val();
	query += "&endDt=" + endDt;
	var isChildOrg = $("input:radio[name=isSub]:checked")[0].value;
	query += "&isChildOrg=" + isChildOrg;
	var isChildKno = $("input:radio[name=isSubs]:checked")[0].value;
	query += "&isChildKnowledge=" + isChildKno;
	var url = basepath + "/list/toLsResList.html?pagefn=page&page=" + i
			+ "&max=" + max + "&r=" + Math.random();
	$("#list_lsResList").load(encodeURI(url + query), function() {
		$(".cls_chooseall").click(function() {
			if ($(this).attr("checked")) {
				$(".cls_chooseitem").attr("checked", true);
			} else {
				$(".cls_chooseitem").attr("checked", false);
			}
			$.uniform.update();
		});
		$.dialog.tips('数据加载完毕', 1, 'tips.gif');
		$(".cls_checkbox").uniform();
		$("#list_lsResList .page_max").change(function() {
			selectBottonClick(1);
		});
	});
}

function export_list() {
	var query = "&history=1";
	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}
	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
	}
	var name = $("#name").val();
	query += "&name=" + name;
	var sn = $("#sn").val();
	query += "&sn=" + sn;
	var type = $("#type").val();
	query += "&type=" + type;
	var startDt = $("#search_start_date").val();
	query += "&startDt=" + startDt;
	var endDt = $("#search_end_date").val();
	query += "&endDt=" + endDt;

	loadingDataStart();
	var countUrl = basepath + "/trainresource/exportCount.html?r="
			+ Math.random();
	var listUrl = basepath + "/trainresource/exportList.html?r="
			+ Math.random();
	postData(encodeURI(countUrl + query), encodeURI(listUrl + query));
}

// 批量移除
$("#btn_delete").click(function() {
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));

	if (param == null || param.length == 0) {
		$.dialog.alert("请选择移除项！");
		return;
	}

	if (confirm('确定要移出历史资源库吗 ？')) {
		if (param == null) {
			$.dialog.alert("请选择删除项！");
		} else {
			$.ajax({
				url : "deleteLsRes.html",
				type : "POST",
				data : param,
				dataType : "json",
				success : function(data) {
					if (data == null) {
						alert("必须选择一个");
					} else {
						alert("OK");
						selectBottonClick(1);
					}
				}
			});
		}
	}
});

// 批量删除
$("#btn_deleteAll").click(function() {
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));

	if (param == null || param.length == 0) {
		$.dialog.alert("请选择删除项！");
		return;
	}

	if (confirm('确定要删除资源吗 ？')) {
		if (param == null) {
			$.dialog.alert("请选择删除项！");
		} else {
			$.ajax({
				url : "deleteAllLsRes.html",
				type : "POST",
				data : param,
				dataType : "json",
				success : function(data) {
					if (data == null) {
						alert("必须选择一个");
					} else {
						alert("OK");
						selectBottonClick(1);
					}
				}
			});
		}
	}
});

/**
 * 机构树点击事件
 */
var orgId;
var knoId;
function orgClick(type, id, idPath, name, namePath) {
	if (type == "" || type == null) {
		orgId = "";
		knoId = "";
	}
	if (type == "org") {
		orgId = id;
		if (knoId != null && knoId != "" && knoId != "undefined") {
			knoId = knoId;
		}
		setNav(name);
		selectBottonClick(1);
	}
}

// 加载知识分类树，与机构数进行切换
$("#kno_jjjstree").jstree({
	"plugins" : [ "themes", "json_data", "types", "ui" ],
	"json_data" : {
		"ajax" : {
			"url" : basepath + "/knowledge/knowledge4jstree.html",
			"cache" : false,
			"data" : function(n) {
				return {
					"operation" : "",
					"id" : n.attr ? n.attr("id") : "root_0",
					"name" : n.attr ? n.attr("name") : 0,
					"namePath" : n.attr ? n.attr("name") : 0,
					"idPath" : n.attr ? n.attr("idPath") : 0

				};
			}
		}
	},
	"types" : {

		"kno" : {
			"valid_children" : "none",
			"icon" : {
				"image" : basepath + "/images/file.png"
			}
		}

	},
	"core" : {
		"initially_open" : knoRootId
	}
}).bind("select_node.jstree", function(e, data) {
	var id = data.rslt.obj.attr("id");
	var type = data.rslt.obj.attr("type");
	var name = data.rslt.obj.attr("name");
	var namePath = data.rslt.obj.attr("namePath");
	var idPath = data.rslt.obj.attr("idPath");
	knoClick(type, id, idPath, name, namePath);
});

// 知识分类树点击事件
function knoClick(type, id, idPath, name, namePath) {
	if (type == "" || type == null) {
		orgId = "";
		knoId = "";
	}
	if (type == "kno") {
		if (orgId != null && orgId != "") {
			orgId = orgId;
		}
		knoId = id;
		setNav(name);
		selectBottonClick(1);
	}
}

/**
 * 更新导航
 */
function setNav(name) {
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>" + name + "</li>");
}
