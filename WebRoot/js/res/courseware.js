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
	if (ms == "����γ�����") {
		$(this).val("");
	}
});
$("#name").blur(function() {
	var ms = $(this).val();
	if (ms == "") {
		$(this).val("����γ�����");
	}
});

var index;
// �л��б���ͼ���б�
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

	// ɾ��ʧ�ܣ��ÿγ�������ѧԱ
	var flag2 = false;
	$("input:checkbox[name=groupTypeId]:checked").each(function() {
		if ("0" != $("#learning" + $(this).val()).html()) {
			flag2 = true;
		}
	});
	if (flag2) {
		$.dialog.alert("ɾ��ʧ�ܣ��ÿγ�������ѧԱ!");
		return;
	}

	if (confirm('ȷ��Ҫɾ���� ��')) {
		if (param == null || param == "") {
			$.dialog.alert("��ѡ��ɾ���");
		} else {
			$.ajax({
				url : "deleteCourseware.html",
				type : "POST",
				data : param,
				dataType : "json",
				success : function(data) {
					if (data == null) {
						$.dialog.alert("��ѡ��ɾ���");
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

// �߼�������������׼��λ������¼�
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
																if (id <= 10) { // �ж��Ƿ��Ǹ��ڵ�"���и�λ",��������и�λ������Դ˲�ѯ����������ҳ���е�"name"������ʾ��"���и�λ"�ı�����.
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

// ѡ�񵥸�֪ʶ������ʾ���ı���
function ethClick(type, id, name) {
	$("#ethId").val(id);
	$("#ethName").val(name);
}

// ����
function export_courseware() {

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
	if (name == "����γ�����") {
		name = "";
	}

	query += "&name=" + name;
	var sn = $("#sn").val();
	query += "&sn=" + sn;
	var property = $("#propertyId").val();
	if (property == "���пμ�") {
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
	if (status == "��ѡ��") {
		status = "";
	}
	query += "&status=" + status;

	var coursewareType = $("#coursewareType").val();
	query += "&coursewareType=" + coursewareType;

	var isChildOrg = $("input:radio[name=isSub]:checked")[0].value;
	query += "&isChildOrg=" + isChildOrg;
	
	var isChildKno = $("input:radio[name=isSubs]:checked")[0].value;
	query += "&isChildKnowledge=" + isChildKno;

	loadingDataStart();
	var countUrl = basepath + "/courseware/exportCount.html?r="+Math.random();
	var listUrl = basepath + "/courseware/exportList.html?r="+Math.random();
	postData(encodeURI(countUrl+query),encodeURI(listUrl+query));
}

// �߼�����
function selectBottonClick(i) {
	$("#list_trainclass").removeClass("hidden");
	$("#list_trainclass").attr("display", "block");
	$("#list_trainclass").css("display", "block");
	$("#list_courswarePic").addClass("hidden");
	$("#list_courswarePic").attr("display", "none");
	$("#list_courswarePic").css("display", "none");
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
	if (name == "����γ�����") {
		name = "";
	}

	query += "&name=" + name;
	var sn = $("#sn").val();
	query += "&sn=" + sn;
	var property = $("#propertyId").val();
	if (property == "���пμ�") {
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
	if (status == "��ѡ��") {
		status = "";
	}
	query += "&status=" + status;
	
	var coursewareType = $("#coursewareType").val();
	query += "&coursewareType=" + coursewareType;

	var isChildKno = $("input:radio[name=isSubs]:checked")[0].value;
	query += "&isChildKnowledge=" + isChildKno;
	
	var isChildOrg = $("input:radio[name=isSub]:checked")[0].value;
	query += "&isChildOrg=" + isChildOrg;
	
	//��������Ĭ�ϲ鿴
	query += "&noticeOrgId=" + $("#noticeOrgId").val();
	query += "&noticeStatus=" + $("#noticeStatus").val();
	
	//�߼���ѯ�����ô��������ѯ����
	if(query.length>=103){
		$("#noticeOrgId").val("");
		$("#noticeStatus").val("");
	}
	
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
		$.dialog.tips('���ݼ������', 1, 'tips.gif');
		$(".cls_checkbox").uniform();
		$("#list_trainclass .page_max").change(function() {
			selectBottonClick(1);
		});
	});

}

// �γ�ͼ�ĸ߼�����
function toCoursewarePic(i) {
	$("#list_trainclass").attr("display", "none");
	$("#list_trainclass").css("display", "none");
	$("#list_courswarePic").removeClass("hidden");
	$("#list_courswarePic").attr("display", "block");
	$("#list_courswarePic").css("display", "block");
	$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
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
	if (name == "����γ�����") {
		name = "";
	}

	query += "&name=" + name;
	var sn = $("#sn").val();
	query += "&sn=" + sn;
	var property = $("#propertyId").val();
	if (property == "���пμ�") {
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
	if (status == "��ѡ��") {
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
		$.dialog.tips('���ݼ������', 1, 'tips.gif');
		$(".cls_checkbox").uniform();
		$("#list_courswarePic .page_max").change(function() {
			toCoursewarePic(1);
		});
	});
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

// ���ſγ̵���¼�
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
						alert("��Դ���ڽ�ѹ�������Ժ�Ԥ��!");
					}
					if (status != "2" && status != "3" && status != "4"
							&& status != "" && status != null) {
						alert("���Ų��ɹ�");
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

// ����߼�����
$("#btn_selCourseware").click(function() {

	if (index == 1) {
		toCoursewarePic(1);

	} else {
		selectBottonClick(1);

	}
});

// ����߼�����
$("#btn_selAllCours").click(function() {
	if (index == 1) {

		toCoursewarePic(1);
	} else {
		selectBottonClick(1);
	}
});

// ���������γ�
var jh;
function seachJHClick(i, obj) {
	var query = "";
	if($(obj).attr("id") != undefined){
		jh = $(obj).attr("id");
	}
	query += "&elite=" + jh;

	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
	}

	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}

	var name = $("#name").val();
	if (name == "����γ�����") {
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
		$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
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
			$.dialog.tips('���ݼ������', 1, 'tips.gif');
			$(".cls_checkbox").uniform();
			$("#list_courswarePic .page_max").change(function() {
				seachJHClick(1, this);
			});
		});
	} else {
		$("#list_coursewarePic").toggleClass("hidden");
		$("#list_coursewarePic").attr("display", "none");
		$("#list_coursewarePic").css("display", "none");
		$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
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
			$.dialog.tips('���ݼ������', 1, 'tips.gif');
			$(".cls_checkbox").uniform();
			$("#list_trainclass .page_max").change(function() {
				seachJHClick(1, this);
			});
		});
	}
}

// �������������γ�
var couTy;
function seachTypeClick(i, obj) {
	var query = "";
	if($(obj).attr("id") != undefined){
		couTy = $(obj).attr("id");
	}
	
	query += "&coursewareType=" + couTy;

	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
	}

	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}

	var name = $("#name").val();
	if (name == "����γ�����") {
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
		$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
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
			$.dialog.tips('���ݼ������', 1, 'tips.gif');
			$(".cls_checkbox").uniform();
			$("#list_courswarePic .page_max").change(function() {
				seachTypeClick(1, this);
			});
		});
	} else {
		$("#list_coursewarePic").toggleClass("hidden");
		$("#list_coursewarePic").attr("display", "none");
		$("#list_coursewarePic").css("display", "none");
		$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
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
			$.dialog.tips('���ݼ������', 1, 'tips.gif');
			$(".cls_checkbox").uniform();
			$("#list_trainclass .page_max").change(function() {
				seachTypeClick(1, this);
			});
		});
	}
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
				nw.location = "tosaveCoursewareDetails.html?knoId=" + knoId;
			}
		});
	}
});

// ����
var createDt;
function sj(i, obj) {
	var query = "";
	if($(obj).attr("id") != undefined){
		createDt = $(obj).attr("id");
	}
	query += "&order=" + createDt;

	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
	}

	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}

	var name = $("#name").val();
	if (name == "����γ�����") {
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
		$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
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
			$.dialog.tips('���ݼ������', 1, 'tips.gif');
			$(".cls_checkbox").uniform();
			$("#list_courswarePic .page_max").change(function() {
				sj(1, this);
			});
		});
	} else {
		$("#list_coursewarePic").toggleClass("hidden");
		$("#list_coursewarePic").attr("display", "none");
		$("#list_coursewarePic").css("display", "none");
		$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
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
			$.dialog.tips('���ݼ������', 1, 'tips.gif');
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

	if($(obj).attr("id")!= undefined){
		desc = $(obj).attr("id");
	}
	query += "&sort=" + desc;

	if (knoId != "" && knoId != null) {
		query += "&knoId=" + knoId;
	}

	if (orgId != "" && orgId != null) {
		query += "&orgId=" + orgId;
	}

	var name = $("#name").val();
	if (name == "����γ�����") {
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
		$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
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
			$.dialog.tips('���ݼ������', 1, 'tips.gif');
			$(".cls_checkbox").uniform();
			$("#list_courswarePic .page_max").change(function() {
				zd(1, this);
			});
		});
	} else {
		$("#list_coursewarePic").toggleClass("hidden");
		$("#list_coursewarePic").attr("display", "none");
		$("#list_coursewarePic").css("display", "none");
		$.dialog.tips('���ݼ�����...', 600, 'loading.gif');
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
			$.dialog.tips('���ݼ������', 1, 'tips.gif');
			$(".cls_checkbox").uniform();
			$("#list_trainclass .page_max").change(function() {
				zd(1, this);
			});
		});
	}
}

// ��Ӿ�Ʒ��Դ
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
			url : "doSaveCoursewareRes.html",
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
				alert("�ǹ����γ̲��ܹ���Ϊ��Ʒ��Դ");
			}
		});
	}
});

// �����ʷ��Դ
$("#btn_ls").click(function() {
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if (param == null || param == "") {
		$.dialog.alert("��ѡ��Ҫ����Ϊ��ʷ��Դ��");
		return;
	}

	if (confirm('ȷ��Ҫ����Ϊ��ʷ��Դ�� ��')) {
		$.ajax({
			url : "doSaveCoursewareResByLs.html",
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
				alert("���ܹ���Ϊ��ʷ��Դ");
			}
		});
	}
});

// �鿴״̬
$("#show").click(function() {
	if (confirm('ȷ��Ҫ������ ��')) {
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

// �����ı�״̬
$(".forsetup").live("click", function() {
	$(this).hide();
	$(this).next().show();
})
// LMSWD-1272 ״̬�л�ʱ����Ҫ���򹳡���ֱ��ѡ��󣬾͵�����ʾ���Ƿ�ı�״̬�� --begin.
$(".selectStatus").live(
		"change",
		function(t, id) {

			// ����޸ĵķ���״̬Ϊ���ѷ�����������м�飬�˿γ��Ƿ��������Ч�Ŀμ���Ϣ��
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
					alert("�˿γ�δ�����κ���Ч�Ŀμ���Ϣ,���������˿γ�!");
					return false;
				}
			}

			t = $(this).next().prev().val();
			id = $(this).next().attr("id"); //
			var url = basepath + "/courseware/updateCourseware.html";
			var param = "cId=" + id + "&status=" + t;

			// ��鵱ǰ�γ���Դ�Ƿ������ڽ�ѹ��״̬��
			var outCode = $(this).next().next().val(); // �γ���Դid.
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
							// alert("���Ų��ɹ�");
							decompressing = true;
						}
					}
				});
			}
			if (decompressing) {
				alert("��Դ���ڽ�ѹ��������ʹ��!");
				return false;
			}

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
	var url = basepath + "/courseware/updateCourseware.html";
	var param = "cId=" + id + "&status=" + t;
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

$("#nX a").click(function() {
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
})

/**
 * ����������¼�
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
		if (knoId != null && knoId != "" && knoId != undefined) {
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

// ����֪ʶ������

$("#kno_jjjstree").jstree({
	"plugins" : [ "themes", "json_data", "types", "ui", "core", "cookies" ],
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
	// Ĭ��չ�����ڵ��µ��ӽڵ�.
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
//	selectBottonClick(1); // ��ѯ���ڵ�"ȫ��"�ķ�ҳ����.
});

// ֪ʶ����������¼�
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
	$("#propertyId").val("");
	$("#tag").val("");
	$("#resProviders").val("");
	$("#suit").val("");
	$("#startTime").val("");
	$("#endTime").val("");
	$("#status").val("");

}
