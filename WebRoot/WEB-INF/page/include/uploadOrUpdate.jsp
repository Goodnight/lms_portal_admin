<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

<script type="text/javascript">
	var importType = "";

	$("input[name=isSave]").live("click", function() {
		var isIndex = $("input[name=isSave]").index(this);
		$("input[name=isSave]").next().attr("id", "");
		$("input[name=isSave]").next().attr("name", "");
		$("input[name=isSave]").eq(isIndex).next().attr("id", "filepath");
		$("input[name=isSave]").eq(isIndex).next().attr("name", "filepath");
		var importType = $("#importType").val();
		if (isIndex == 0) {
			if (importType == "updateofficialUser") {
				$("#importType").attr("value", "addofficialUser");
			} else if (importType == "updateOrganization") {
				$("#importType").attr("value", "addOrganization");
			} else if (importType == "updateStandardPosition") {
				$("#importType").attr("value", "addStandardPosition");
			} else if (importType == "updateStandardEthnicGroup") {
				$("#importType").attr("value", "addStandardEthnicGroup");
			} else if (importType == "updateBlocPosition") {
				$("#importType").attr("value", "addBlocPosition");
			} else if (importType == "updateBlocEthnicGroup") {
				$("#importType").attr("value", "addBlocEthnicGroup");
			} else if (importType == "updateTempUser") {
				$("#importType").attr("value", "addTempUser");
			}
		} else {
			if (importType == "addofficialUser") {
				$("#importType").attr("value", "updateofficialUser");
			} else if (importType == "addOrganization") {
				$("#importType").attr("value", "updateOrganization");
			} else if (importType == "addStandardPosition") {
				$("#importType").attr("value", "updateStandardPosition");
			} else if (importType == "addStandardEthnicGroup") {
				$("#importType").attr("value", "updateStandardEthnicGroup");
			} else if (importType == "addBlocPosition") {
				$("#importType").attr("value", "updateBlocPosition");
			} else if (importType == "addBlocEthnicGroup") {
				$("#importType").attr("value", "updateBlocEthnicGroup");
			} else if (importType == "addTempUser") {
				$("#importType").attr("value", "updateTempUser");
			}
		}
	});

	function fileupload() {
		var isSave = $("input[name=isSave]:checked").val();
		if (isSave == "true") {
			if ($("#filepath").val() == "") {
				$.dialog.alert("请重新选择文件上传").title('提示');
				return false;
			}
		} else {
			if ($("#filepath").val() == "") {
				$.dialog.alert("请重新选择文件上传").title('提示');
				return false;
			}
		}
		$.dialog.tips('正在导入，请稍候...', 90000, 'loading.gif').lock();
		var queryString = $('#form1').formSerialize();

		//alert(queryString);
		$
				.ajaxFileUpload({
					url : "${basepath }/upload/importData.html?" + queryString,
					secureuri : false,
					fileElementId : 'filepath',
					dataType : "json",
					success : function(data, status) {
						importType = data.importType;

						$("#closed_icon").addClass("closed_upload");
						$("#closed_button").addClass("closed_upload");

						$("#totalCount").text(data.totalCount);
						$("#successCount").text(data.successCount);
						$("#errorMessage").text("");
						if (data.code == "success") {
							$.dialog.tips('数据导入成功', 1, 'success.gif');
							$("#releaseco,.blackall").show();
						} else if (data.code == "fail") {
							var errorMessage = "";
							for ( var i = 0; i < data.list.length; i++) {

								if (data.list[i].flag == "1") {
									errorMessage += "<tr class='gradeA odd'><td width='100'>第"
											+ data.list[i].row
											+ "行</td><td>第"
											+ data.list[i].column
											+ "列</td><td>信息错误，请重新填写</td></tr>";
								} else {
									errorMessage += "<tr class='gradeA odd'><td width='100'>第"
											+ data.list[i].row
											+ "行</td><td>错误信息："
											+ data.list[i].column
											+ "</td><td>具体信息为："
											+ data.list[i].object
											+ "</td></tr>";
								}
							}
							$("#errorMessage").html(errorMessage);
							$.dialog.tips('数据导入错误', 1, 'tips.gif');
							$("#releaseco,.blackall").show();
						} else {
							$.dialog.tips('请上传下载的模板文件', 3, 'error.gif');
						}
					},
					error : function(data, status, e) {
						$.dialog.tips('数据导入错误', 3, 'error.gif');
					}
				});
	}

	function upload() {
		if (importType == "addofficialUser"
				|| importType == "updateofficialUser") {
			page(1);
		} else if (importType == "addOrganization"
				|| importType == "updateOrganization") {
			location.reload();
		} else if (importType == "blocEthnicGroup"
				|| importType == "blocPosition"
				|| importType == "standardEthnicGroup"
				|| importType == "standardPosition") {
			location.reload();
		} else if (importType == "addTempUser" || importType == "updateTempUser") {
			page(1);
		}
	}

	$(".closed_upload").live("click", function() {
		upload();
	});
</script>

<div class="newwindow hidden" id="leadinco">
	<div class="taR">
		<a href="javascript:;"><img class="png_bg closed"
			src="${basepath }/images/close.png" width="40" height="40" /> </a>
	</div>
	<div class="ngreyborder changeblue2 mt20">
		<h2 class="png_bg">导入模板</h2>
		<div class="basic_information w90p">
			<div class="pt20">
				<div>
					<input checked="checked" class="mr10" type="radio" id="isSave"
						name="isSave" value="true" /> 新建导入： <input id="filepath"
						name="filepath" type="file" class="uploadfile" /> <a href=""
						id="downLoad" name="downLoad" class="ml30">下载导入模板 <img
						src="${basepath }/images/download.png" width="16" height="16"
						class="vm" />
					</a>
					<font class="ml30" color="#FF0000">(模板仅支持07版excel)</font>
				</div>
			</div>
			<div class="mt10">
				<input class="mr10" type="radio" id="isSave" name="isSave"
					value="false" /> 修改导入： <input id="" name="" type="file"
					class="uploadfile" /> </a>
			</div>
		</div>
		<div class="m10 taR ">
			<input type="button" onclick="fileupload()" class="step windowbutton"
				value="确定" />
		</div>
	</div>
</div>
<div class="newwindow hidden" id="releaseco">
	<div class="taR">
		<a href="javascript:;"><img class="png_bg closed"
			src="${basepath }/images/close.png" width="40" height="40"
			id="closed_icon" /></a>
	</div>
	<div class="ngreyborder changeblue2 mt20">
		<h2 class="png_bg">导入结果</h2>
		<div class="scroll h400">
			<div class="ml30 mt40">
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
				class="back m10 leadclose" value="关闭" />
		</p>
	</div>
</div>