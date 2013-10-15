<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

<script type="text/javascript">
$(function(){
	$('#filepath').ace_file_input({
		no_file:"",
		btn_choose:'浏览',
		btn_change:'更换',
		droppable:false,
		onchange:null,
		thumbnail:false //| true | large
		//whitelist:'gif|png|jpg|jpeg'
		//blacklist:'exe|php'
		//onchange:''
		//
	});
});

	var importType = "";
	var batch_number = "";

	function fileupload() {
		var type = $("#importType").val();
		if ($("#filepath").val() == "") {
			$.dialog.alert("请重新选择文件上传").title('提示');
			return false;
		} else if (type == "trainDiplomaLevel") {
			if ($("input[name=diploma_id]:checked").val() == undefined) {
				$.dialog.alert("请选择证书").title('提示');
				return false;
			}
		}
		$.dialog.tips('正在导入，请稍候...', 90000, 'loading.gif').lock();
		var queryString = $('#form1').formSerialize();

		if (type == "trainDiplomaLevel") {
			queryString = queryString + "&objId="
					+ $("input[name=diploma_id]:checked").val();
		}

		//alert(queryString);
		$.ajaxFileUpload({
			url : "${basepath }/upload/importData.html?" + queryString,
			secureuri : false,
			fileElementId : 'filepath',
			dataType : "json",
			success : function(data, status) {

				importType = data.importType;
				batch_number = data.batch_number;

				if (importType == "trainUser" || importType == "outTrainUser"
						|| importType == "trainFaceCourse"
						|| importType == "trainPlan"
						|| importType == "surveyUser"
						|| importType == "userManage"
						|| importType == "evaluate"||importType == "inquiry"||importType == "surveyEvaluate"||importType == "surveyInquiry"
						|| importType == "departmentTrain"
					    || importType == "responseUser"||importType == "comprehensiveUser"
					    || importType == "meetingUser"
					    || importType == "responseResult" || importType == "comprehensiveResult" || importType == "inquiryResult"){
					$("#closed_icon").addClass("closed_confirm");
					$("#closed_button").addClass("closed_confirm");
				} else {
					$("#closed_icon").addClass("closed_upload");
					$("#closed_button").addClass("closed_upload");
				}
				if (importType == "evaluate"||importType == "inquiry"||importType == "surveyEvaluate"||importType == "surveyInquiry") {

					$("#surveyTotalCount").text(data.surveyTotalCount);
					$("#categoryTotalCount").text(data.categoryTotalCount);
					$("#itemTotalCount").text(data.itemTotalCount);
					$("#survey").show();
				} else {
					$("#totalCount").text(data.totalCount);
					$("#successCount").text(data.successCount);
					$("#other").show();
				}
				$("#errorMessage").text("");
				if (data.code == "success") {
					$.dialog.tips('数据导入成功', 1, 'success.gif');
					$("#releaseco,.blackall").show();
				} else if (data.code == "fail") {
					var errorMessage = "";
					for ( var i = 0; i < data.list.length; i++) {

						var pageMessage = "";
						if (importType == "inquiry" || importType == "evaluate" || importType == "surveyEvaluate" || importType == "surveyInquiry") {
							pageMessage = "<td width='100'>第"
									+ data.list[i].page + "页</td>";
						}

						if (data.list[i].flag == "1") {
							errorMessage += "<tr class='gradeA odd'>"
									+ pageMessage + "<td width='100'>第"
									+ data.list[i].row + "行</td><td>第"
									+ data.list[i].column
									+ "列</td><td>信息错误，请重新填写</td></tr>";
						} else {
							errorMessage += "<tr class='gradeA odd'>"
									+ pageMessage + "<td width='100'>第"
									+ data.list[i].row + "行</td><td>错误信息："
									+ data.list[i].column + "</td><td>具体信息为："
									+ data.list[i].object + "</td></tr>";
						}
					}
					$("#errorMessage").html(errorMessage);
					$.dialog.tips('数据导入错误', 1, 'tips.gif');
					$("#releaseco,.blackall").show();
				} else{
					$.dialog.tips('请上传下载的模板文件', 3, 'error.gif');
				}
			},
			error : function(data, status, e) {
				$.dialog.tips('数据导入错误', 3, 'error.gif');
			}
		});
	}

	$(".closed_upload").live("click", function() {
		$("#releaseco").hide();
		$(".blackall").hide();
		upload();
	});

	$(".closed_confirm").live("click",function() {
		$("#releaseco").hide();
		$(".blackall").hide();
		$.dialog.confirm("你确定要保留本次导入成功的数据？", function() {
			upload();
		}, function() {
			$.post("${basepath }/upload/deleteData.html?importType="
					+ importType + "&batch_number=" + batch_number, "",
						upload);
		});
	});
	
	

	function upload() {
		
		if (importType == "trainUser") {
			init();
		} else if(importType == "outTrainUser") {
			page(1);
		} else if (importType == "trainFaceCourse") {
			init();
		} else if (importType == "trainCheckin") {
			page(1);
		} else if (importType == "trainDiplomaLevel") {
			init();
		} else if (importType == "trainFaceManage") {
			searchBudget(1);
		} else if (importType == "trainPlan") {
			page(1);
		} else if (importType == "blocEthnicGroup"
				|| importType == "blocPosition"
				|| importType == "standardEthnicGroup"
				|| importType == "standardPosition") {
			location.reload();
		} else if (importType == "userManage") {
			page(1);
		} else if(importType == "evaluate"||importType == "inquiry"){
			page(1);
		} else if(importType == "departmentTrain"){
			page(1);
		} else if(importType == "meetingUser"){
			page(1);
		} else if(importType == "outTrainUserInfo"){
			var tcid = $("#objId").val();
			var url = basepath + "/trainclass/out/showinfo.html?tcid="+tcid;
			$("#dialog_content").load(url);
			$("#dialog .blackall").show();
			$("#dialog,#dialog .blackall,#dialog .newwindow").show();
		} else if(importType == "responseResult"||importType == "comprehensiveResult"||importType == "inquiryResult"){
			page(1);
		} else if(importType == "responseUser"||importType == "comprehensiveUser"){
			page(1);
		}
	}
</script>


<div class="newwindow hide" id="leadinco">
	<div class="taR">
		<a href="javascript:;"><img class="png_bg closed"
			src="${basepath }/images/close.png" width="40" height="40" /> </a>
	</div>
	<div class="ngreyborder changeblue2 mt20">
		<h2 class="png_bg">导入模板</h2>
		<div class="basic_information w90p row-fluid">
			<div class="pt20">	
			<div class="span2">导入模板： </div>
			<div class="span3">
				<div  class="mt06">
					<input id="filepath" class="span1" name="filepath" type="file" />
				</div>
				
			</div>
			<div class="span7"><a id="downLoad"
					name="downLoad" class="ml30">下载导入模板 <img
					src="${basepath }/images/download.png" width="16" height="16"
					class="vm" />
				</a><font class="ml30" color="#FF0000">(模板仅支持07版excel)</font></div>
				 
			</div>
			<div class="m10 taR ">
				<input type="button" onclick="fileupload()"
					class="btn btn-small btn-info step windowbutton" value="确定" />
			</div>
		</div>
	</div>
</div>


<div class="newwindow hide" id="releaseco">
	<div class="taR">
		<a href="javascript:;"><img class="png_bg closed"
			src="${basepath }/images/close.png" width="40" height="40"
			id="closed_icon" /></a>
	</div>
	<div class="ngreyborder changeblue2 mt20">
		<h2 class="png_bg">导入结果</h2>
		<div class="scroll h400">
			<div class="ml30 mt40 hidden" id="survey">
				成功导入<span style="color: #00F" class="m10"><font
					id="surveyTotalCount"></font></span>条模板，成功导入<span style="color: #00F"
					class="m10"><font id="categoryTotalCount"></font></span>条大类，成功导入<span
					style="color: #00F" class="m10"><font id="itemTotalCount"></font></span>条问题
			</div>
			<div class="ml30 mt40 hidden" id="other">
				共导入数据<span style="color: #00F" class="m10"><font
					id="totalCount"></font></span>条，成功导入数据<span style="color: #00F"
					class="m10"><font id="successCount"></font></span>条
			</div>
			<div class="dataTables_wrapper mt10" style="padding-bottom: 0">
				<table class="datatable" width="100%">
					<tbody id="errorMessage">
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<div align="right" class="mr10">
		<p>
			<input id="closed_button" name="" type="button"
				class="back m10" value="关闭" />
		</p>
	</div>
</div>