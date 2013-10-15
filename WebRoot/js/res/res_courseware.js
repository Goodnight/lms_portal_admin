var positionIds;
$(function() {
	// 加载列表
	selectBottonClick(1);
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

$("#name").focus(function() {
	var ms = $(this).val();
	if (ms == "输入课程名称") {
		$(this).val("");
	}
});
$("#name").blur(function() {
	var ms = $(this).val();
	if (ms == "") {
		$(this).val("输入课程名称");
	}
});

var index;
// 切换列表与图文列表
$(".changeshow a").click(function() {
	index = $(this).index();
	if (index == 1) {
		$(".changeshow").addClass("changeshowdown");
		toCoursewarePic(1);
	} else {
		$(".changeshow").removeClass("changeshowdown");

		selectBottonClick(1);

	}
})

// 批量删除
$("#btn_delete").click(function() {
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if (param == null || param == "") {
		$.dialog.alert("请选择删除项！");
		return;
	}

	// 当前用户可以删除的记录是记录的机构属于用户的机构,其它情况不允许删除.
	var deleteRecord = true;
	$("input:checkbox[name=groupTypeId]:checked").each(function() {
		if ("false" == $("#contain" + $(this).val()).val()) {
			deleteRecord = false;
		}
	});
	if (!deleteRecord) {
		$.dialog.alert("删除失败，需要删除的记录不在您的所属机构范围内!");
		return;
	}

	// 已发布资源不允许删除.
	var flag = false;
	$("input:checkbox[name=groupTypeId]:checked").each(function() {
		if ("已发布" == $("#label" + $(this).val()).html()) {
			flag = true;
		}
	});
	if (flag) {
		$.dialog.alert("删除失败，已发布资源不允许删除!");
		return;
	}

	// 删除失败，该课程下已有学员
	var flag2 = false;
	$("input:checkbox[name=groupTypeId]:checked").each(function() {
		if ("0" != $("#learning" + $(this).val()).html()) {
			flag2 = true;
		}
	});
	if (flag2) {
		$.dialog.alert("删除失败，该课程下已有学员!");
		return;
	}

	if (confirm('确定要删除吗 ？')) {
		if (param == null || param == "") {
			$.dialog.alert("请选择删除项！");
		} else {
			$.ajax({
				url : "deleteCourseware.html",
				type : "POST",
				data : param,
				dataType : "json",
				success : function(data) {
					if (data == null) {
						$.dialog.alert("请选择删除项！");
					} else {
						alert("ok");
						if (index == 1) {
							toCoursewarePic(1);
						} else {
							selectBottonClick(1);
						}
					}
				}
			});
		}
	}
});

// 选择岗位搜索
var Doom;
function doublechoice(dom) {
	var nn = $(dom).parent().prev().find(".jstree-checked");
	var oText = [];
	var newId = [];
	var newName = [];
	var oldId = [];
	var oSource = $(Doom).parent().prev().html();
	if (oSource != "请选择") {
		var sourcechild = $(Doom).parent().prev().children();
		for (i = 0; i < sourcechild.length; i++) {
			oldId[i] = $(sourcechild).eq(i).attr("id");
		}
	}

	for (i = 0; i < nn.length; i++) {
		var ww = 8;
		var key = $(nn).eq(i).attr("id");
		for (j = 0; j < oldId.length; j++) {
			if (key == oldId[j]) {
				ww = 0;
			}
		}
		if (ww != 0) {
			oText.push($(nn).eq(i).attr("name"));
			newId.push(key);
			newName.push($(nn).eq(i).attr("name"));
		}
	}

	if (oSource != "请选择") {
		for (i = 0; i < oText.length; i++) {
			// initCheckTree( id, selectedIds, openIds,dataType)
			newName[i] = newName[i].replace(/\s+/g, "");
			$(Doom).parent().prev().append(
					'<input type="hidden" name="dep_ids" value="' + newId[i]
							+ '"/><label class="speciallabel" id="' + newId[i]
							+ '">' + oText[i]
							+ '<a href="javascript:;" class="ml6"><img src="'
							+ basepath
							+ '/images/deletegreen.gif" /></a></label>');
			$(Doom).parent().prev().append(
					'<input type="hidden" name="dep_Names" value="'
							+ newName[i] + '"/>');
		}
	} else {
		$(Doom).parent().prev().html("");
		for (i = 0; i < oText.length; i++) {
			newName[i] = newName[i].replace(/\s+/g, "");
			$(Doom).parent().prev().append(
					'<input type="hidden" name="dep_ids" value="' + newId[i]
							+ '"/><label class="speciallabel" id="' + newId[i]
							+ '">' + oText[i]
							+ '<a href="javascript:;" class="ml6"><img src="'
							+ basepath
							+ '/images/deletegreen.gif" /></a></label>');
			$(Doom).parent().prev().append(
					'<input type="hidden" name="dep_Names" value="'
							+ newName[i] + '"/>');
		}
	}
}

// 高级搜索条件：基准岗位树点击事件
$(document)
		.ready(
				function() {
					$(".chooseEth")
							.click(
									function() {
										Doom = $(this);
										$(".blackall").show();
										$(function() {
											$("#org_jstree1")
													.jstree(
															{
																"plugins" : [
																		"themes",
																		"json_data",
																		"ui" ],
																"json_data" : {
																	"ajax" : {
																		"url" : basepath
																				+ "/list/pos4jstree.html",
																		"cache" : false,
																		"data" : function(
																				n) {
																			return {
																				"operation" : "",
																				"id" : n.attr ? n
																						.attr("id")
																						: 0,
																				"name" : n.attr ? n
																						.attr("name")
																						: 0
																			};
																		}
																	}
																},
																"types" : {
																	"pos" : {
																		"valid_children" : "none",
																		"icon" : {
																			"image" : basepath
																					+ "/images/file.png"
																		}
																	}
																},
																"core" : {
																	"initially_open" : rootPosition
																}
															})
													.bind(
															"select_node.jstree",
															function(e, data) {
																var id = data.rslt.obj
																		.attr("id");
																var name = data.rslt.obj
																		.attr("name");
																var type = data.rslt.obj
																		.attr("type");
																if (id <= 10) { // 判断是否是根节点"所有岗位",如果是所有岗位，则忽略此查询条件，但是页面中的"name"框仍显示出"所有岗位"文本内容.
																	id = "";
																}
																$("#eth_id")
																		.val(id);
																ethClick(type,
																		id,
																		name);
															});

										});
										$(".treewindow").show();
										$('.treewindow').animate({
											right : 0
										}, 200);

									});
					$(".treewindowsure").click(function() {
						// doublechoice(this);
						// simplechoice(this);
						var mm = $(this).parent().parent().width();
						if (mm < 239) {
							$(this).parent().parent().animate({
								right : -239
							}, 200, function() {
								$(".blackall").hide();
							});
						} else {
							$(this).parent().parent().animate({
								right : -mm - 5
							}, 200, function() {
								$(".blackall").hide();
							});
						}

					});
					$(".treewindowback").click(function() {
						var mm = $(this).parent().parent().width();
						if (mm < 239) {
							$(this).parent().parent().animate({
								right : -239
							}, 200, function() {
								$(".blackall").hide();
							});
						} else {
							$(this).parent().parent().animate({
								right : -mm - 5
							}, 200, function() {
								$(".blackall").hide();
							});
						}
					});
					$(".speciallabel a").live("click", function() {
						$(this).parent().remove();
					});
					$("#objectstring .ml12,.objectstring a").live("click",
							function() {
								$(this).parent().remove();
							});
					$("#newpersonbutton")
							.live(
									"click",
									function() {
										var oTable = $(this).parent().prev()
												.find(".datatable").find(
														"tbody").find("tr");
										if (oTable) {
											for (i = 0; i < oTable.length; i++) {
												var oText = $(oTable).eq(i)
														.children().eq(3)
														.text();
												$("#newpersonco")
														.children()
														.eq(0)
														.append(
																'<label class="speciallabel">'
																		+ oText
																		+ '<a href="javascript:;" class="ml6"><img src="../../images/deletegreen.gif" /></a></label>');
											}
										}
									});
				});

// 选择单个知识分类显示到文本框
function ethClick(type, id, name) {
	$("#ethId").val(id);
	$("#ethName").val(name);
}

// 导出
function exportList(i) {

	var query = "";
	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}

	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
	}

	if (ispub != "" && ispub != null) {
		query += "&ispub=" + ispub;
	}

	var ethName = $("#ethName").val();
	if (ethName == null || ethName == "") {
		positionIds = "";
	} else if (ethName != null && ethName != "") {
		positionIds = $("#eth_id").val();
	}
	if (positionIds != "" && positionIds != null) {
		query += "&positionIds=" + positionIds;
	}

	if (jh != "" && jh != null) {
		query += "&elite=" + jh;
	}

	if (couTy != "" && couTy != null) {
		query += "&coursewareType=" + couTy;
	}

	if (createDt != "" && createDt != null) {
		query += "&order=" + createDt;
	}

	if (desc != "" && desc != null) {
		query += "&sort=" + desc;
	}

	var name = $("#name").val();
	if (name == "输入课程名称") {
		name = "";
	}

	query += "&name=" + name;
	var sn = $("#sn").val();
	query += "&sn=" + sn;
	var property = $("#propertyId").val();
	if (property == "所有课件") {
		property = "";
	}
	query += "&property=" + property;
	var tag = $("#tag").val();
	if (tag != "" || tag != null) {
		query += "&tag=" + tag;
	}
	var startTime = $("#search_start_date").val();
	if (startTime != "") {
		query += "&startTime=" + startTime;
	}
	var endTime = $("#search_end_date").val();
	if (endTime != "") {
		query += "&endTime=" + endTime;
	}
	var status = $("#status").val();
	if (status == "请选择") {
		status = "";
	}
	query += "&status=" + status;

	var coursewareType = $("#coursewareType").val();
	query += "&coursewareType=" + coursewareType;

	var isChildOrg = $("input:radio[name=isSub]:checked")[0].value;
	query += "&isChildOrg=" + isChildOrg;

	var url = basepath + "/list/exportCoursewareList.html?r=" + Math.random();
	$("#query_form").attr("action",encodeURI(url+query));
	$("#query_form").attr("method","post");
	$("#query_form").submit();

}
function getCookie(name)        
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return unescape(arr[2]); return null;

}
// 高级搜索
function selectBottonClick(i) {
	$("#list_trainclass").removeClass("hidden");
	$("#list_trainclass").attr("display", "block");
	$("#list_trainclass").css("display", "block");
	$("#list_courswarePic").addClass("hidden");
	$("#list_courswarePic").attr("display", "none");
	$("#list_courswarePic").css("display", "none");
	$.dialog.tips('数据加载中...', 600, 'loading.gif');
	var max = $("#list_trainclass .page_max").val() ? $(
			"#list_trainclass .page_max").val() : 10;
	var query = "";
	if (orgId == "" || orgId == null) 
	{	
		
		 var orgIds=getCookie("jstree_select").split("#");
		 orgId=orgIds[1];
	   
	}
	query += "&orgId=" + orgId;
	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
	}

	if (ispub != "" && ispub != null) {
		query += "&ispub=" + ispub;
	}

	var ethName = $("#ethName").val();
	if (ethName == null || ethName == "") {
		positionIds = "";
	} else if (ethName != null && ethName != "") {
		positionIds = $("#eth_id").val();
	}
	if (positionIds != "" && positionIds != null) {
		query += "&positionIds=" + positionIds;
	}

	if (jh != "" && jh != null) {
		query += "&elite=" + jh;
	}

	if (couTy != "" && couTy != null) {
		query += "&coursewareType=" + couTy;
	}

	if (createDt != "" && createDt != null) {
		query += "&order=" + createDt;
	}

	if (desc != "" && desc != null) {
		query += "&sort=" + desc;
	}

	var name = $("#name").val();
	if (name == "输入课程名称") {
		name = "";
	}

	query += "&name=" + name;
	var sn = $("#sn").val();
	query += "&sn=" + sn;
	var property = $("#propertyId").val();
	if (property == "所有课件") {
		property = "";
	}
	query += "&property=" + property;
	var tag = $("#tag").val();
	if (tag != "" || tag != null) {
		query += "&tag=" + tag;
	}
	var startTime = $("#search_start_date").val();
	if (startTime != "") {
		query += "&startTime=" + startTime;
	}
	var endTime = $("#search_end_date").val();
	if (endTime != "") {
		query += "&endTime=" + endTime;
	}
	var status = $("#status").val();
	if (status == "请选择") {
		status = "";
	}
	query += "&status=" + status;

	var coursewareType = $("#coursewareType").val();
	query += "&coursewareType=" + coursewareType;

	var isChildOrg = $("input:radio[name=isSub]:checked")[0].value;
	query += "&isChildOrg=" + isChildOrg;

	var url = basepath
			+ "/list/toCoursewareList.html?pagefn=selectBottonClick&page=" + i
			+ "&max=" + max + "&r=" + Math.random();
	$("#list_trainclass").load(encodeURI(url + query), function() {
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
		$("#list_trainclass .page_max").change(function() {
			selectBottonClick(1);
		});
	});

}

// 课程图文高级搜索
function toCoursewarePic(i) {
	$("#list_trainclass").attr("display", "none");
	$("#list_trainclass").css("display", "none");
	$("#list_courswarePic").removeClass("hidden");
	$("#list_courswarePic").attr("display", "block");
	$("#list_courswarePic").css("display", "block");
	$.dialog.tips('数据加载中...', 600, 'loading.gif');
	var max = $("#list_courswarePic .page_max").val() ? $(
			"#list_courswarePic .page_max").val() : 10;
	$("#list_trainclass").toggleClass("hidden");
	$("#list_coursewarePic").removeClass("hidden");
	var query = "";
	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}

	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
	}

	if (ispub != "" && ispub != null) {
		query += "&ispub=" + ispub;
	}

	var ethName = $("#ethName").val();
	if (ethName == null || ethName == "") {
		positionIds = "";
	} else if (ethName != null && ethName != "") {
		positionIds = $("#eth_id").val();
	}
	if (positionIds != "" && positionIds != null) {
		query += "&positionIds=" + positionIds;
	}

	if (jh != "" && jh != null) {
		query += "&elite=" + jh;
	}

	if (couTy != "" && couTy != null) {
		query += "&coursewareType=" + couTy;
	}

	if (createDt != "" && createDt != null) {
		query += "&order=" + createDt;
	}

	if (desc != "" && desc != null) {
		query += "&sort=" + desc;
	}

	var name = $("#name").val();
	if (name == "输入课程名称") {
		name = "";
	}

	query += "&name=" + name;
	var sn = $("#sn").val();
	query += "&sn=" + sn;
	var property = $("#propertyId").val();
	if (property == "所有课件") {
		property = "";
	}
	query += "&property=" + property;
	var tag = $("#tag").val();
	if (tag != "" || tag != null) {
		query += "&tag=" + tag;
	}
	var startTime = $("#search_start_date").val();
	if (startTime != "") {
		query += "&startTime=" + startTime;
	}
	var endTime = $("#search_end_date").val();
	if (endTime != "") {
		query += "&endTime=" + endTime;
	}
	var status = $("#status").val();
	if (status == "请选择") {
		status = "";
	}
	query += "&status=" + status;

	var coursewareType = $("#coursewareType").val();
	query += "&coursewareType=" + coursewareType;

	var isChildOrg = $("input:radio[name=isSub]:checked")[0].value;
	query += "&isChildOrg=" + isChildOrg;

	var url = basepath
			+ "/list/toCoursewarePicList.html?pagefn=toCoursewarePic&page=" + i
			+ "&max=" + max + "&r=" + Math.random();
	$("#list_courswarePic").load(encodeURI(url + query), function() {
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
		$("#list_courswarePic .page_max").change(function() {
			toCoursewarePic(1);
		});
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

// 播放课程点击事件
function clickshpw(obj) {
	outCode = $(obj).attr("class");
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

// 点击高级搜索
$("#btn_selCourseware").click(function() {

	if (index == 1) {
		toCoursewarePic(1);

	} else {
		selectBottonClick(1);

	}
});

// 点击高级搜索
$("#btn_selAllCours").click(function() {
	if (index == 1) {

		toCoursewarePic(1);
	} else {
		selectBottonClick(1);
	}
});

// 搜索精华课程
var jh;
function seachJHClick(i, obj) {
	var query = "";
	jh = $(obj).attr("id");
	query += "&elite=" + jh;

	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
	}

	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}

	var name = $("#name").val();
	if (name == "输入课程名称") {
		name = "";
	}
	query += "&name=" + name;

	if (couTy != "" && couTy != null) {
		query += "&coursewareType=" + couTy;
	}

	if (createDt != "" && createDt != null) {
		query += "&order=" + createDt;
	}

	if (desc != "" && desc != null) {
		query += "&sort=" + desc;
	}

	if (index == 1) {
		$("#list_trainclass").attr("display", "none");
		$("#list_trainclass").css("display", "none");
		$.dialog.tips('数据加载中...', 600, 'loading.gif');
		var max = $("#list_courswarePic .page_max").val() ? $(
				"#list_courswarePic .page_max").val() : 10;
		var url = basepath
				+ "/list/toCoursewarePicList.html?pagefn=toCoursewarePic&page="
				+ i + "&max=" + max + "&r=" + Math.random();
		$("#list_courswarePic").load(encodeURI(url + query), function() {
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
			$("#list_courswarePic .page_max").change(function() {
				seachJHClick(1, this);
			});
		});
	} else {
		$("#list_coursewarePic").toggleClass("hidden");
		$("#list_coursewarePic").attr("display", "none");
		$("#list_coursewarePic").css("display", "none");
		$.dialog.tips('数据加载中...', 600, 'loading.gif');
		var max = $("#list_trainclass .page_max").val() ? $(
				"#list_trainclass .page_max").val() : 10;
		var url = basepath
				+ "/list/toCoursewareList.html?pagefn=selectBottonClick&page="
				+ i + "&max=" + max + "&r=" + Math.random();
		$("#list_trainclass").load(encodeURI(url + query), function() {
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
			$("#list_trainclass .page_max").change(function() {
				seachJHClick(1, this);
			});
		});
	}
}

// 根据类型搜索课程
var couTy;
function seachTypeClick(i, obj) {
	var query = "";
	couTy = $(obj).attr("id");
	query += "&coursewareType=" + couTy;

	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
	}

	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}

	var name = $("#name").val();
	if (name == "输入课程名称") {
		name = "";
	}
	query += "&name=" + name;

	if (jh != "" && jh != null) {
		query += "&elite=" + jh;
	}

	if (createDt != "" && createDt != null) {
		query += "&order=" + createDt;
	}

	if (desc != "" && desc != null) {
		query += "&sort=" + desc;
	}

	if (index == 1) {
		$("#list_trainclass").attr("display", "none");
		$("#list_trainclass").css("display", "none");
		$.dialog.tips('数据加载中...', 600, 'loading.gif');
		var max = $("#list_courswarePic .page_max").val() ? $(
				"#list_courswarePic .page_max").val() : 10;
		var url = basepath
				+ "/list/toCoursewarePicList.html?pagefn=toCoursewarePic&page="
				+ i + "&max=" + max + "&r=" + Math.random();
		$("#list_courswarePic").load(encodeURI(url + query), function() {
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
			$("#list_courswarePic .page_max").change(function() {
				seachTypeClick(1, this);
			});
		});
	} else {
		$("#list_coursewarePic").toggleClass("hidden");
		$("#list_coursewarePic").attr("display", "none");
		$("#list_coursewarePic").css("display", "none");
		$.dialog.tips('数据加载中...', 600, 'loading.gif');
		var max = $("#list_trainclass .page_max").val() ? $(
				"#list_trainclass .page_max").val() : 10;
		var url = basepath
				+ "/list/toCoursewareList.html?pagefn=selectBottonClick&page="
				+ i + "&max=" + max + "&r=" + Math.random();
		$("#list_trainclass").load(encodeURI(url + query), function() {
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
			$("#list_trainclass .page_max").change(function() {
				seachTypeClick(1, this);
			});
		});
	}
}

// 点击新建按钮跳转页面
$("#btn_add").live("click", function(){
	var param = knoId;
	if (param == "0" || param == "" || param == null){
		alert("请选择一个知识分类！");
	}
	else{
		$.ajax({
			type : "POST",
			data : param,
			dataType : "json",
			complete : function(data) {
				var nw = window.open("about:blank", "");
				nw.location = basepath+"/courseware/tosaveCoursewareDetails.html?knoId=" + knoId;
			}
		});
	}
});

// 排序
var createDt;
function sj(i, obj) {
	var query = "";
	createDt = $(obj).attr("id");
	query += "&order=" + createDt;

	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
	}

	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}

	var name = $("#name").val();
	if (name == "输入课程名称") {
		name = "";
	}
	query += "&name=" + name;

	if (jh != "" && jh != null) {
		query += "&elite=" + jh;
	}

	if (couTy != "" && couTy != null) {
		query += "&coursewareType=" + couTy;
	}

	if (desc != "" && desc != null) {
		query += "&sort=" + desc;
	}

	if (index == 1) {
		$("#list_trainclass").attr("display", "none");
		$("#list_trainclass").css("display", "none");
		$.dialog.tips('数据加载中...', 600, 'loading.gif');
		var max = $("#list_courswarePic .page_max").val() ? $(
				"#list_courswarePic .page_max").val() : 10;
		var url = basepath
				+ "/list/toCoursewarePicList.html?pagefn=toCoursewarePic&page="
				+ i + "&max=" + max + "&r=" + Math.random();
		$("#list_courswarePic").load(encodeURI(url + query), function() {
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
			$("#list_courswarePic .page_max").change(function() {
				sj(1, this);
			});
		});
	} else {
		$("#list_coursewarePic").toggleClass("hidden");
		$("#list_coursewarePic").attr("display", "none");
		$("#list_coursewarePic").css("display", "none");
		$.dialog.tips('数据加载中...', 600, 'loading.gif');
		var max = $("#list_trainclass .page_max").val() ? $(
				"#list_trainclass .page_max").val() : 10;
		var url = basepath
				+ "/list/toCoursewareList.html?pagefn=selectBottonClick&page="
				+ i + "&max=" + max + "&r=" + Math.random();
		$("#list_trainclass").load(encodeURI(url + query), function() {
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
			$("#list_trainclass .page_max").change(function() {
				sj(1, this);
			});
		});
	}
}

var desc;
function zd(i, obj) {
	var query = "";
	desc = $(obj).attr("id");
	query += "&sort=" + desc;

	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
	}

	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}

	var name = $("#name").val();
	if (name == "输入课程名称") {
		name = "";
	}
	query += "&name=" + name;

	if (jh != "" && jh != null) {
		query += "&elite=" + jh;
	}

	if (couTy != "" && couTy != null) {
		query += "&coursewareType=" + couTy;
	}

	if (createDt != "" && createDt != null) {
		query += "&order=" + createDt;
	}

	if (index == 1) {
		$("#list_trainclass").attr("display", "none");
		$("#list_trainclass").css("display", "none");
		$.dialog.tips('数据加载中...', 600, 'loading.gif');
		var max = $("#list_courswarePic .page_max").val() ? $(
				"#list_courswarePic .page_max").val() : 10;
		var url = basepath
				+ "/list/toCoursewarePicList.html?pagefn=toCoursewarePic&page="
				+ i + "&max=" + max + "&r=" + Math.random();
		$("#list_courswarePic").load(encodeURI(url + query), function() {
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
			$("#list_courswarePic .page_max").change(function() {
				zd(1, this);
			});
		});
	} else {
		$("#list_coursewarePic").toggleClass("hidden");
		$("#list_coursewarePic").attr("display", "none");
		$("#list_coursewarePic").css("display", "none");
		$.dialog.tips('数据加载中...', 600, 'loading.gif');
		var max = $("#list_trainclass .page_max").val() ? $(
				"#list_trainclass .page_max").val() : 10;
		var url = basepath
				+ "/list/toCoursewareList.html?pagefn=selectBottonClick&page="
				+ i + "&max=" + max + "&r=" + Math.random();

		$("#list_trainclass").load(encodeURI(url + query), function() {
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
			$("#list_trainclass .page_max").change(function() {
				zd(1, this);
			});
		});
	}
}

// 添加精品资源
$("#btn_jh").live("click", function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if (param == null || param == "") {
		$.dialog.alert("请选择要归类为精品资源！");
		return;
	}

	// 精华的不允许再次设置为精华.
	var flag = false;
	$("input:checkbox[name=groupTypeId]:checked").each(function() {
		if ("1" == $("#elite" + $(this).val()).val()) {// 1:精华,0:非精华, 已存在的精华记录.
			flag = true;
		}
	});
	if (flag) {
		$.dialog.alert("设置精华失败，选中记录中存在已经是精华的记录!");
		return;
	}

	if (confirm('确定要归类为精品资源吗 ？')) {
		$.ajax({
			url : "doSaveCoursewareRes.html",
			type : "POST",
			data : param,
			dataType : "json",
			success : function(data) {
				if (data == null) {
					alert("添加失败");
				} else {
					alert("OK");
					if (index == 1) {
						$("#list_trainclass").attr("display", "none");
						$("#list_trainclass").css("display", "none");
						toCoursewarePic(1);
					} else {
						$("#list_coursewarePic").toggleClass("hidden");
						$("#list_coursewarePic").attr("display", "none");
						$("#list_coursewarePic").css("display", "none");
						selectBottonClick(1);
					}
				}
			},
			error : function() {
				alert("非公开课程不能归类为精品资源");
			}
		});
	}
});

// 添加历史资源
$("#btn_ls").live("click", function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if (param == null || param == "") {
		$.dialog.alert("请选择要归类为历史资源！");
		return;
	}

	if (confirm('确定要归类为历史资源吗 ？')) {
		$.ajax({
			url : "doSaveCoursewareResByLs.html",
			type : "POST",
			data : param,
			dataType : "json",
			success : function(data) {
				if (data == null) {
					alert("添加失败");
				} else {
					alert("OK");
					if (index == 1) {
						$("#list_trainclass").attr("display", "none");
						$("#list_trainclass").css("display", "none");
						toCoursewarePic(1);
					} else {
						$("#list_coursewarePic").toggleClass("hidden");
						$("#list_coursewarePic").attr("display", "none");
						$("#list_coursewarePic").css("display", "none");
						selectBottonClick(1);
					}

				}
			},
			error : function() {
				alert("不能归类为历史资源");
			}
		});
	}
});

// 查看状态
$("#show").click(function() {
	if (confirm('确定要发布吗 ？')) {
		$.ajax({
			url : basepath + "doSaveCoursewareResByLs.html",
			type : "POST",
			data : param,
			dataType : "json",
			success : function(data) {
				alert("OK");
				if (index == 1) {
					$("#list_trainclass").attr("display", "none");
					$("#list_trainclass").css("display", "none");
					toCoursewarePic(1);
				} else {
					$("#list_coursewarePic").toggleClass("hidden");
					$("#list_coursewarePic").attr("display", "none");
					$("#list_coursewarePic").css("display", "none");
					selectBottonClick(1);
				}

			}
		});
	}
});

// 下拉改变状态
$(".forsetup").live("click", function() {
	$(this).hide();
	$(this).next().show();
})
// LMSWD-1272 状态切换时，不要“打钩”，直接选择后，就弹出提示“是否改变状态” --begin.
$(".selectStatus").live(
		"change",
		function(t, id) {

			// 如果修改的发布状态为“已发布”，则进行检查，此课程是否关联了有效的课件信息。
			if ("1" == $(this).val()) {
				var publish = "false";
				if ($(this).next().next().next().next().val() != undefined) {
					publish = $(this).next().next().next().next().val();
				} else {
					if ($(this).next().next().next().val() != undefined) {
						publish = $(this).next().next().next().val();
					} else {
						if ($(this).next().next().val() != undefined) {
							publish = $(this).next().next().val();
						}
					}
				}
				if (publish != "true") {
					alert("此课程未关联任何有效的课件信息,不允许发布此课程!");
					return false;
				}
			}

			t = $(this).next().prev().val();
			id = $(this).next().attr("id"); //
			var url = basepath + "/courseware/updateCourseware.html";
			var param = "cId=" + id + "&status=" + t;

			// 检查当前课程资源是否处于正在解压缩状态。
			var outCode = $(this).next().next().val(); // 课程资源id.
			var decompressing = false;
			if (outCode != null && outCode != "") {
				$.ajax({
					url : basepath + "/courseware/toLookCourse.html?outCote="
							+ outCode,
					type : "POST",
					data : outCode,
					dataType : "json",
					success : function(status) {
						if (status != "4" && status != "" && status != null) {
							// alert("播放不成功");
							decompressing = true;
						}
					}
				});
			}
			if (decompressing) {
				alert("资源正在解压缩，不能使用!");
				return false;
			}

			if (confirm('确定要改变发布状态吗 ？')) {
				$.ajax({
					url : url,
					type : "post",
					data : param,
					dataType : "json",
					success : function(msg) {

					},
					error : function() {
					}
				});
				var mm = $(this).next().prev().val();
				if (mm == 0) {
					mm = "未发布";
				}
				if (mm == 1) {
					mm = "已发布";
				}
				if (mm == 2) {
					mm = "已提交";
				}
				if (mm == 3) {
					mm = "省不批准";
				}
				$(this).parent().prev().text(mm);
				$(this).parent().hide();
				$(this).parent().prev().show();
			}

		})

$(".select_setup img").live("click", function(t, id) {
	t = $(this).prev().val();
	id = $(this).attr("id");
	var url = basepath + "/courseware/updateCourseware.html";
	var param = "cId=" + id + "&status=" + t;
	if (confirm('确定要改变发布状态吗 ？')) {
		$.ajax({
			url : url,
			type : "post",
			data : param,
			dataType : "json",
			success : function(msg) {

			},
			error : function() {
			}
		});
		var mm = $(this).prev().val();
		if (mm == 0) {
			mm = "未发布";
		}
		if (mm == 1) {
			mm = "已发布";
		}
		if (mm == 2) {
			mm = "已提交";
		}
		if (mm == 3) {
			mm = "省不批准";
		}
		$(this).parent().prev().text(mm);
		$(this).parent().hide();
		$(this).parent().prev().show();
	}

})
// LMSWD-1272 状态切换时，不要“打钩”，直接选择后，就弹出提示“是否改变状态” --end.

// 点击标签改变样式
$("#pX a").click(function() {
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
})

$("#gZ a").click(function() {
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
})

$("#nR a").click(function() {
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
})

$("#nX a").click(function() {
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
})

/**
 * 机构树点击事件
 */
var orgId;
var knoId;
var ispub;
var orgIdpath;
function orgClick(type, id, idPath, name, namePath) {
	var userOrgId = $("#orgId").val();
	var userId = $("#userId").val();
	var orgIdpath = idPath;
	resetSearch();
	if (type == "" || type == null) {
		orgId = "";
		knoId = "";
		ispub = "";
	}
	if (type == "org") {
		orgId = id;
		if (knoId != null && knoId != "" && knoId != "undefined") {
			knoId = knoId;
		}
		setNav(name);
		if (index == 1) {
			toCoursewarePic(1);
		} else {
			selectBottonClick(1);
		}

	}
	if (userId != "1") {

		if (orgIdpath.indexOf(userOrgId) < 0) {
			ispub = "1";
			$("#btn_dc").attr("display", "none");
			$("#btn_dc").css("display", "none");
			$("#btn_delete").attr("display", "none");
			$("#btn_delete").css("display", "none");
		} else if (orgIdpath.indexOf(userOrgId) >= 0) {
			ispub = "";
			$("#btn_dc").attr("display", "");
			$("#btn_dc").css("display", "");
			$("#btn_delete").attr("display", "");
			$("#btn_delete").css("display", "");
		}
	}
}



// 知识分类树点击事件
function knoClick(type, id, idPath, name, namePath) {
	var userOrgId = $("#orgId").val();
	var userId = $("#userId").val();
	resetSearch();
	if (type == "" || type == null) {
		orgId = "";
		knoId = "";
		ispub = "";
	}
	if (type == "kno") {
		if (orgId != null && orgId != "") {
			orgId = orgId;
		}
		knoId = id;
		ispub = "";
		setNav(name);

		if (index == 1) {
			toCoursewarePic(1);
		} else {
			selectBottonClick(1);
		}

	}
	if (userId != "1") {
		if (orgIdpath.indexOf(userOrgId) < 0) {
			ispub = "1";
			$("#btn_dc").attr("display", "none");
			$("#btn_dc").css("display", "none");
			$("#btn_delete").attr("display", "none");
			$("#btn_delete").css("display", "none");
		} else if (orgIdpath.indexOf(userOrgId) >= 0) {
			ispub = "";
			$("#btn_dc").attr("display", "");
			$("#btn_dc").css("display", "");
			$("#btn_delete").attr("display", "");
			$("#btn_delete").css("display", "");
		}
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

/**
 * 重置查询条件
 */
function resetSearch() {
	$("#search_dep_id").val("");
	$("#name").val("");
	$("#sn").val("");
	$("#propertyId").val("");
	$("#tag").val("");
	$("#resProviders").val("");
	$("#suit").val("");
	$("#startTime").val("");
	$("#endTime").val("");
	$("#status").val("");
}
