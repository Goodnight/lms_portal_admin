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
					url : "${basepath }/upload/importObjectData.html?" + queryString,
					secureuri : false,
					fileElementId : 'filepath',
					dataType : "json",
					success : function(data, status) {
						$("#success,#fail").hide();
						$(".totalCount").text(data.totalCount);
						$(".successCount").text(data.successCount);
						if (data.failCount == 0) {
							$("#releaseco,#success,.blackall").show();
							$.dialog.tips('数据导入成功', 3, 'success.gif');
						} else if (data.failCount != 0) {
							$("#errorFile").attr("href",
									basepath + "/download/" + data.excelName);
							$("#releaseco,#fail,.blackall").show();
							$.dialog.tips('数据导入失败', 3, 'tips.gif');
						} else {
							$.dialog.tips('请上传下载的模板文件', 3, 'error.gif');
						}
					},
					error : function(data, status, e) {
						$.dialog.tips('数据导入错误', 3, 'error.gif');
					}
				});
	}

	$(".closed_upload").live("click", function() {
		page(1);
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
					</a><font class="ml30" color="#FF0000">(模板仅支持07版excel)</font>
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
		<a href="javascript:;"><img class="png_bg closed closed_upload"
			src="${basepath }/images/close.png" width="40" height="40"
			id="closed_icon" /></a>
	</div>
	<div class="ngreyborder changeblue2 mt20">
		<h2 class="png_bg">导入结果</h2>
		<div class="scroll h400">
			<div class="ml30 mt40 hidden" id="success">
				共导入数据<span style="color: #00F" class="m10"><font
					class="totalCount"></font></span>条，成功导入数据<span style="color: #00F"
					class="m10"><font class="successCount"></font></span>条
			</div>
			<div class="ml30 mt40 hidden" id="fail">
				共导入数据<span style="color: #00F" class="m10"><font
					class="totalCount"></font></span>条，成功导入数据<span style="color: #00F"
					class="m10"><font class="successCount"></font></span>条,但导入数据有部分错误，请下载查看错误文件信息:<a
					id="errorFile" href=""><span style="color: #00F" class="m10">下载</span></a>
			</div>
		</div>
	</div>
	<div align="right" class="mr10">
		<p>
			<input id="closed_button" name="" type="button"
				class="back m10 windowbutton closed_upload" value="关闭" />
		</p>
	</div>
</div>