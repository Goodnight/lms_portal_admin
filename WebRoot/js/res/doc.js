var positionIds;
$(function() {
	// �����б�

	// ��ѯ����
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
	if (ms == "�����ĵ�����") {
		$(this).val("");
	}
});
$("#name").blur(function() {
	var ms = $(this).val();
	if (ms == "") {
		$(this).val("�����ĵ�����");
	}
});

var index;
// �л�ͼƬ
$(".changeshow a").click(function() {
	index = $(this).index();
	if (index == 1) {
		$(".changeshow").addClass("changeshowdown");
	} else {
		$(".changeshow").removeClass("changeshowdown");
	}
})

function searchBottonClick(i) {
	var max = $("#list_trainclass .page_max").val() ? $(
			"#list_trainclass .page_max").val() : 10;
	var query = "";
	var name = $("#name").val();
	if (name == "�����ĵ�����") {
		name = "";
	}
	query += "&name=" + name;
	var url = basepath + "/list/toDocList.html?pagefn=page&page=" + i + "&max="
			+ max + "&r=" + Math.random();
	$("#list_trainclass").load(encodeURI(url + query), function() {
		$(".cls_chooseall").click(function() {
			if ($(this).attr("checked")) {
				$(".cls_chooseitem").attr("checked", true);
			} else {
				$(".cls_chooseitem").attr("checked", false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_trainclass .page_max").change(function() {
			searchBottonClick(1);
		});
	});
}

// ����ɾ��
$("#btn_delete").click(function() {
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));

	if (param == null || param == "") {
		$.dialog.alert("��ѡ��ɾ���");
		return;
	}

	// ��ǰ�û�����ɾ���ļ�¼�Ǽ�¼�Ļ��������û��Ļ���,�������������ɾ��.
	var deleteRecord = true;
	$("input:checkbox[name=groupTypeId]:checked").each(function() {
		if ("false" == $("#contain" + $(this).val()).val()) {
			deleteRecord = false;
		}
	});
	if (!deleteRecord) {
		$.dialog.alert("ɾ��ʧ�ܣ���Ҫɾ���ļ�¼������������������Χ��!");
		return;
	}

	// �ѷ�����Դ������ɾ��.
	var flag = false;
	var flags = false;
	$("input:checkbox[name=groupTypeId]:checked").each(function() {
		if ("�ѷ���" == $("#label" + $(this).val()).html()) {
			flag = true;
		}
		// ���ύ��Դ������ɾ��.
		if ("���ύ" == $("#label" + $(this).val()).html()) {
			flags = true;
		}
	});
	if (flag) {
		$.dialog.alert("ɾ��ʧ�ܣ��ѷ�����Դ������ɾ��!");
		return;
	}
	if (flags) {
		$.dialog.alert("ɾ��ʧ�ܣ����ύ��Դ������ɾ��!");
		return;
	}
	
	if (confirm('ȷ��Ҫɾ���� ��')) {
		if (param == null || param == "") {
			$.dialog.alert("��ѡ��ɾ���");
		} else {
			$.ajax({
				url : "deleteDoc.html",
				type : "POST",
				data : param,
				dataType : "json",
				success : function(data) {
					if (data == null) {
						alert("����ѡ��һ��");
					} else {
						alert("OK");
						if (index == 1) {
							toDocPic(1);
						} else {
							selectBottonClick(1);
						}
					}
				}
			});
		}
	}

});

// ѡ���λ����
var Doom;
function doublechoice(dom) {
	var nn = $(dom).parent().prev().find(".jstree-checked");
	var oText = [];
	var newId = [];
	var newName = [];
	var oldId = [];
	var oSource = $(Doom).parent().prev().html();
	if (oSource != "��ѡ��") {
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

	if (oSource != "��ѡ��") {
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

// ��λ������¼�
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

// ѡ�񵥸�֪ʶ������ʾ���ı���
function ethClick(type, id, name) {
	$("#ethId").val(id);
	$("#ethName").val(name);
}

// �߼�����
function selectBottonClick(i) {
	$("#list_trainclass").removeClass("hidden");
	$("#list_trainclass").attr("display", "block");
	$("#list_trainclass").css("display", "block");
	$("#list_docPic").addClass("hidden");
	$("#list_docPic").attr("display", "none");
	$("#list_docPic").css("display", "none");
	$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
	var max = $("#list_trainclass .page_max").val() ? $(
			"#list_trainclass .page_max").val() : 10;
	var query = "";
	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}

	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
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

	if (view != "" && view != null) {
		query += "&order=" + view;
	}

	if (desc != "" && desc != null) {
		query += "&sort=" + desc;
	}

	var name = $("#name").val();
	if (name == "�����ĵ�����") {
		name = "";
	}
	query += "&name=" + name;
	var sn = $("#sn").val();
	query += "&sn=" + sn;
	var startTime = $("#search_start_date").val();
	query += "&startTime=" + startTime;
	var endTime = $("#search_end_date").val();
	query += "&endTime=" + endTime;
	var tag = $("#tag").val();
	query += "&tag=" + tag;
	var status = $("#status").val();
	if (status == "��ѡ��") {
		status = "";
	}
	query += "&status=" + status;

	var isChildOrg = $("input:radio[name=isSub]:checked")[0].value;
	query += "&isChildOrg=" + isChildOrg;
	
	var isChildKno = $("input:radio[name=isSubs]:checked")[0].value;
	query += "&isChildKnowledge=" + isChildKno;

	var url = basepath + "/list/toDocList.html?pagefn=selectBottonClick&page="
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
		$.dialog.tips('���ݼ������', 1, 'tips.gif');
		$(".cls_checkbox").uniform();
		$("#list_trainclass .page_max").change(function() {
			selectBottonClick(1);
		});
	});
}

function export_doc() {

	var query = "";
	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}

	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
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

	if (view != "" && view != null) {
		query += "&order=" + view;
	}

	if (desc != "" && desc != null) {
		query += "&sort=" + desc;
	}

	var name = $("#name").val();
	if (name == "�����ĵ�����") {
		name = "";
	}
	query += "&name=" + name;
	var sn = $("#sn").val();
	query += "&sn=" + sn;
	var startTime = $("#search_start_date").val();
	query += "&startTime=" + startTime;
	var endTime = $("#search_end_date").val();
	query += "&endTime=" + endTime;
	var tag = $("#tag").val();
	query += "&tag=" + tag;
	var status = $("#status").val();
	if (status == "��ѡ��") {
		status = "";
	}
	query += "&status=" + status;
	var isChildOrg = $("input:radio[name=isSub]:checked")[0].value;
	query += "&isChildOrg=" + isChildOrg;
	
	var isChildKno = $("input:radio[name=isSubs]:checked")[0].value;
	query += "&isChildKnowledge=" + isChildKno;
	
	loadingDataStart();
	var countUrl = basepath + "/doc/exportCount.html?r="+Math.random();
	var listUrl = basepath + "/doc/exportList.html?r="+Math.random();
	postData(encodeURI(countUrl+query),encodeURI(listUrl+query));
}

// ͼ�ĸ߼�����
function toDocPic(i) {
	$("#list_trainclass").attr("display", "none");
	$("#list_trainclass").css("display", "none");
	$("#list_docPic").removeClass("hidden");
	$("#list_docPic").attr("display", "block");
	$("#list_docPic").css("display", "block");
	$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
	var max = $("#list_docPic .page_max").val() ? $("#list_docPic .page_max")
			.val() : 10;
	$("#list_trainclass").toggleClass("hidden");
	$("#list_docPic").removeClass("hidden");
	var query = "";
	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}

	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
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

	if (view != "" && view != null) {
		query += "&order=" + view;
	}

	if (desc != "" && desc != null) {
		query += "&sort=" + desc;
	}

	var name = $("#name").val();
	if (name == "�����ĵ�����") {
		name = "";
	}
	query += "&name=" + name;
	var sn = $("#sn").val();
	query += "&sn=" + sn;
	var startTime = $("#search_start_date").val();
	query += "&startTime=" + startTime;
	var endTime = $("#search_end_date").val();
	query += "&endTime=" + endTime;
	var tag = $("#tag").val();
	query += "&tag=" + tag;
	var status = $("#status").val();
	if (status == "��ѡ��") {
		status = "";
	}
	query += "&status=" + status;

	var isChildOrg = $("input:radio[name=isSub]:checked")[0].value;
	query += "&isChildOrg=" + isChildOrg;

	var url = basepath + "/list/toDocPicList.html?pagefn=toDocPic&page=" + i
			+ "&max=" + max + "&r=" + Math.random();
	$("#list_docPic").load(encodeURI(url + query), function() {
		$(".cls_chooseall").click(function() {
			if ($(this).attr("checked")) {
				$(".cls_chooseitem").attr("checked", true);
			} else {
				$(".cls_chooseitem").attr("checked", false);
			}
			$.uniform.update();
		});
		$.dialog.tips('���ݼ������', 1, 'tips.gif');
		$(".cls_checkbox").uniform();
		$("#list_docPic .page_max").change(function() {

			toDocPic(1);
		});
	});
}

// ����߼�����
$("#btn_selDoc").click(function() {

	if (index == 1) {
		toDocPic(1);
	} else {
		selectBottonClick(1);
	}

});

// ����߼�����
$("#btn_selAllDoc").click(function() {
	if (index == 1) {
		toDocPic(1);
	} else {
		selectBottonClick(1);
	}
});

// ���������γ�
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
	if (name == "�����ĵ�����") {
		name = "";
	}
	query += "&name=" + name;

	if (view != "" && view != null) {
		query += "&order=" + view;
	}

	if (desc != "" && desc != null) {
		query += "&sort=" + desc;
	}

	if (index == 1) {
		$("#list_trainclass").attr("display", "none");
		$("#list_trainclass").css("display", "none");
		$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
		var max = $("#list_docPic .page_max").val() ? $(
				"#list_docPic .page_max").val() : 10;
		var url = basepath + "/list/toDocPicList.html?pagefn=toDocPic&page="
				+ i + "&max=" + max + "&r=" + Math.random();
		$("#list_docPic").load(encodeURI(url + query), function() {
			$(".cls_chooseall").click(function() {
				if ($(this).attr("checked")) {
					$(".cls_chooseitem").attr("checked", true);
				} else {
					$(".cls_chooseitem").attr("checked", false);
				}
				$.uniform.update();
			});
			$.dialog.tips('���ݼ������', 1, 'tips.gif');
			$(".cls_checkbox").uniform();
			$("#list_docPic .page_max").change(function() {
				seachJHClick(1, this);
			});
		});
	} else {
		$("#list_docPic").toggleClass("hidden");
		$("#list_docPic").attr("display", "none");
		$("#list_docPic").css("display", "none");
		$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
		var max = $("#list_trainclass .page_max").val() ? $(
				"#list_trainclass .page_max").val() : 10;
		var url = basepath
				+ "/list/toDocList.html?pagefn=selectBottonClick&page=" + i
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
			$.dialog.tips('���ݼ������', 1, 'tips.gif');
			$(".cls_checkbox").uniform();
			$("#list_trainclass .page_max").change(function() {
				seachJHClick(1, this);
			});
		});
	}
}

// ȫѡ��ѡ
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

// ����½���ť��תҳ��
$("#btn_add").click(function() {
	var param = knoId;
	if (param == "0" || param == "" || param == null) {
		alert("��ѡ��һ��֪ʶ���࣡");
	} else {
		$.ajax({
			type : "POST",
			data : param,
			dataType : "json",
			complete : function(data) {
				var nw = window.open("about:blank", "");
				nw.location = "tosaveDocDetails.html?knoId=" + knoId;
			}
		});
	}
});

// ����
var view;
function ll(i, obj) {
	var query = "";
	view = $(obj).attr("id");
	query += "&order=" + view;

	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
	}

	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}

	var name = $("#name").val();
	if (name == "�����ĵ�����") {
		name = "";
	}
	query += "&name=" + name;

	if (jh != "" && jh != null) {
		query += "&elite=" + jh;
	}

	if (desc != "" && desc != null) {
		query += "&sort=" + desc;
	}

	if (index == 1) {
		$("#list_trainclass").attr("display", "none");
		$("#list_trainclass").css("display", "none");
		$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
		var max = $("#list_docPic .page_max").val() ? $(
				"#list_docPic .page_max").val() : 10;
		var url = basepath + "/list/toDocPicList.html?pagefn=toDocPic&page="
				+ i + "&max=" + max + "&r=" + Math.random();
		$("#list_docPic").load(encodeURI(url + query), function() {
			$(".cls_chooseall").click(function() {
				if ($(this).attr("checked")) {
					$(".cls_chooseitem").attr("checked", true);
				} else {
					$(".cls_chooseitem").attr("checked", false);
				}
				$.uniform.update();
			});
			$.dialog.tips('���ݼ������', 1, 'tips.gif');
			$(".cls_checkbox").uniform();
			$("#list_docPic .page_max").change(function() {
				ll(1, this);
			});
		});
	} else {
		$("#list_docPic").toggleClass("hidden");
		$("#list_docPic").attr("display", "none");
		$("#list_docPic").css("display", "none");
		$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
		var max = $("#list_trainclass .page_max").val() ? $(
				"#list_trainclass .page_max").val() : 10;
		var url = basepath
				+ "/list/toDocList.html?pagefn=selectBottonClick&page=" + i
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
			$.dialog.tips('���ݼ������', 1, 'tips.gif');
			$(".cls_checkbox").uniform();
			$("#list_trainclass .page_max").change(function() {
				ll(1, this);
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
	if (name == "�����ĵ�����") {
		name = "";
	}
	query += "&name=" + name;

	if (jh != "" && jh != null) {
		query += "&elite=" + jh;
	}

	if (view != "" && view != null) {
		query += "&order=" + view;
	}

	if (index == 1) {
		$("#list_trainclass").attr("display", "none");
		$("#list_trainclass").css("display", "none");
		$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
		var max = $("#list_docPic .page_max").val() ? $(
				"#list_docPic .page_max").val() : 10;
		var url = basepath + "/list/toDocPicList.html?pagefn=toDocPic&page="
				+ i + "&max=" + max + "&r=" + Math.random();
		$("#list_docPic").load(encodeURI(url + query), function() {
			$(".cls_chooseall").click(function() {
				if ($(this).attr("checked")) {
					$(".cls_chooseitem").attr("checked", true);
				} else {
					$(".cls_chooseitem").attr("checked", false);
				}
				$.uniform.update();
			});
			$.dialog.tips('���ݼ������', 1, 'tips.gif');
			$(".cls_checkbox").uniform();
			$("#list_docPic .page_max").change(function() {
				zd(1, this);
			});
		});
	} else {
		$("#list_docPic").toggleClass("hidden");
		$("#list_docPic").attr("display", "none");
		$("#list_docPic").css("display", "none");
		$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
		var max = $("#list_trainclass .page_max").val() ? $(
				"#list_trainclass .page_max").val() : 10;
		var url = basepath
				+ "/list/toDocList.html?pagefn=selectBottonClick&page=" + i
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
			$.dialog.tips('���ݼ������', 1, 'tips.gif');
			$(".cls_checkbox").uniform();
			$("#list_trainclass .page_max").change(function() {
				zd(1, this);
			});
		});
	}
}

// �����ǩ�ı���ʽ
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

// ��Ӿ�����Դ
$("#btn_jh").click(function() {
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if (param == null || param == "") {
		$.dialog.alert("��ѡ��Ҫ����Ϊ��Ʒ��Դ��");
		return;
	}

	// �����Ĳ������ٴ�����Ϊ����.
	var flag = false;
	$("input:checkbox[name=groupTypeId]:checked").each(function() {
		if ("1" == $("#elite" + $(this).val()).val()) {// 1:����,0:�Ǿ���, �Ѵ��ڵľ�����¼.
			flag = true;
		}
	});
	if (flag) {
		$.dialog.alert("���þ���ʧ�ܣ�ѡ�м�¼�д����Ѿ��Ǿ����ļ�¼!");
		return;
	}

	if (confirm('ȷ��Ҫ����Ϊ��Ʒ��Դ�� ��')) {
		$.ajax({
			url : "doSaveDocRes.html",
			type : "POST",
			data : param,
			dataType : "json",
			success : function(data) {
				if (data == null) {
					alert("���ʧ��");
				} else {
					alert("OK");
					if (index == 1) {
						$("#list_trainclass").attr("display", "none");
						$("#list_trainclass").css("display", "none");
						toDocPic(1);
					} else {
						$("#list_docPic").toggleClass("hidden");
						$("#list_docPic").attr("display", "none");
						$("#list_docPic").css("display", "none");
						selectBottonClick(1);
					}

				}
			},
			error : function() {
				alert("�ǹ����ĵ����ܹ���Ϊ��Ʒ��Դ");
			}
		});
	}
});

// �����ʷ��Դ
$("#btn_ls").click(function() {
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if (confirm('ȷ��Ҫ����Ϊ��ʷ��Դ�� ��')) {
		$.ajax({
			url : "doSaveDocByLs.html",
			type : "POST",
			data : param,
			dataType : "json",
			success : function(data) {
				if (data == null) {
					alert("���ʧ��");
				} else {
					alert("OK");
					if (index == 1) {
						$("#list_trainclass").attr("display", "none");
						$("#list_trainclass").css("display", "none");
						toDocPic(1);
					} else {
						$("#list_docPic").toggleClass("hidden");
						$("#list_docPic").attr("display", "none");
						$("#list_docPic").css("display", "none");
						selectBottonClick(1);
					}

				}
			},
			error : function() {
				alert("���ܹ���Ϊ��ʷ��Դ");
			}
		});
	}
});

// �����ı�״̬
$(".forsetup").live("click", function() {
	$(this).hide();
	$(this).next().show();
})

// LMSWD-1272 ״̬�л�ʱ����Ҫ���򹳡���ֱ��ѡ��󣬾͵�����ʾ���Ƿ�ı�״̬�� --begin.
$(".selectStatus").live("change", function(t, id) {
	t = $(this).next().prev().val();
	id = $(this).next().attr("id");
	var url = basepath + "/doc/updateDoc.html";
	var param = "dId=" + id + "&status=" + t;
	if (confirm('ȷ��Ҫ�ı䷢��״̬�� ��')) {
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
			mm = "δ����";
		}
		if (mm == 1) {
			mm = "�ѷ���";
		}
		if (mm == 2) {
			mm = "���ύ";
		}
		if (mm == 3) {
			mm = "ʡ����׼";
		}
		$(this).parent().prev().text(mm);
		$(this).parent().hide();
		$(this).parent().prev().show();
	}

})

$(".select_setup img").live("click", function(t, id) {

	t = $(this).prev().val();
	id = $(this).attr("id");
	var url = basepath + "/doc/updateDoc.html";
	var param = "dId=" + id + "&status=" + t;
	if (confirm('ȷ��Ҫ�ı䷢��״̬�� ��')) {
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
			mm = "δ����";
		}
		if (mm == 1) {
			mm = "�ѷ���";
		}
		if (mm == 2) {
			mm = "���ύ";
		}
		if (mm == 3) {
			mm = "ʡ����׼";
		}
		$(this).parent().prev().text(mm);
		$(this).parent().hide();
		$(this).parent().prev().show();
	}

})
// LMSWD-1272 ״̬�л�ʱ����Ҫ���򹳡���ֱ��ѡ��󣬾͵�����ʾ���Ƿ�ı�״̬�� --end.

/**
 * ����������¼�
 */
var orgId;
var knoId;
var orgIdpath;
function orgClick(type, id, idPath, name, namePath) {
	var userOrgId = $("#orgId").val();
	var userId = $("#userId").val();
	var orgIdpath = idPath;
	resetSearch();
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
		if (index == 1) {
			toDocPic(1);
		} else {
			selectBottonClick(1);
		}
	}

	if (userId != "1") {
		if (orgIdpath.indexOf(userOrgId) < 0) {
			$("#btn_dc").attr("display", "none");
			$("#btn_dc").css("display", "none");
			$("#btn_delete").attr("display", "none");
			$("#btn_delete").css("display", "none");
		} else if (orgIdpath.indexOf(userOrgId) >= 0) {
			$("#btn_dc").attr("display", "");
			$("#btn_dc").css("display", "");
			$("#btn_delete").attr("display", "");
			$("#btn_delete").css("display", "");
		}
	}
}

// ����֪ʶ������
$("#kno_jjjstree").jstree({
	"plugins" : [ "themes", "json_data", "types", "ui", "cookies" ],
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
	},
	"ui" : {
		"initially_select" : knoRootId
	// Ĭ��ѡ�и��ڵ�.
	}
}).bind("select_node.jstree", function(e, data) {
	var id = data.rslt.obj.attr("id");
	var type = data.rslt.obj.attr("type");
	var name = data.rslt.obj.attr("name");
	var namePath = data.rslt.obj.attr("namePath");
	var idPath = data.rslt.obj.attr("idPath");
	knoClick(type, id, idPath, name, namePath);
}).bind("init.jstree", function() { // ����֪ʶ�������ĳ�ʼ���¼�����.
	selectBottonClick(1); // ��ѯ���ڵ�"ȫ��"�ķ�ҳ����.
});

// ֪ʶ����������¼�
function knoClick(type, id, idPath, name, namePath) {
	var userOrgId = $("#orgId").val();
	var userId = $("#userId").val();
	resetSearch();
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
		if (index == 1) {
			toDocPic(1);
		} else {
			selectBottonClick(1);
		}
	}
	if (userId != "1") {
		if (orgIdpath.indexOf(userOrgId) < 0) {
			$("#btn_dc").attr("display", "none");
			$("#btn_dc").css("display", "none");
			$("#btn_delete").attr("display", "none");
			$("#btn_delete").css("display", "none");
		} else if (orgIdpath.indexOf(userOrgId) >= 0) {
			$("#btn_dc").attr("display", "");
			$("#btn_dc").css("display", "");
			$("#btn_delete").attr("display", "");
			$("#btn_delete").css("display", "");
		}
	}
}

/**
 * ���µ���
 */
function setNav(name) {
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>" + name + "</li>");
}

/**
 * ���ò�ѯ����
 */
function resetSearch() {
	$("#search_dep_id").val("");
	$("#name").val("");
	$("#sn").val("");
	$("#startTime").val("");
	$("#endTime").val("");
	$("#tag").val("");
	$("#suits").val("");
	$("#status").val("");
}
