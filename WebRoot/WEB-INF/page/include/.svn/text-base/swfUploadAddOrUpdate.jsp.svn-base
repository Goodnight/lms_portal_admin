<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

<script type="text/javascript"
	src="${basepath }/js/swfupload/swfupload.js"></script>
<script type="text/javascript"
	src="${basepath }/js/swfupload/handlers.js"></script>
<script type="text/javascript"
	src="${basepath }/js/swfupload/swfupload.swfobject.js"></script>
<script type="text/javascript"
	src="${basepath }/js/swfupload/fileprogress.js"></script>
<script type="text/javascript">
	var swfu;
	window.onload = function() {
		swfu = new SWFUpload(
				{
					// Backend settings
					upload_url : _URL,
				<%-- 	post_params: {
	                        "ASPSESSID": "<%=request.getSession().getId()%>
	"
					}, --%>
					file_post_name : "resume_file",

					// Flash file settings
					file_size_limit : "1 MB",
					file_types : "*.xlsx", // or you could use something like: "*.doc;*.wpd;*.pdf",
					file_types_description : "All Files",
					file_upload_limit : "0",
					file_queue_limit : "1",

					// Event handler settings
					swfupload_loaded_handler : swfUploadLoaded,

					file_dialog_start_handler : fileDialogStart,
					file_queued_handler : fileQueued,
					file_queue_error_handler : fileQueueError,
					file_dialog_complete_handler : fileDialogComplete,

					upload_start_handler : uploadStart, // I could do some client/JavaScript validation here, but I don't need to.
					upload_progress_handler : uploadProgress,
					upload_error_handler : uploadError,
					upload_success_handler : uploadSuccess,
					upload_complete_handler : uploadComplete,

					// Button Settings
					button_image_url : basepath
							+ "/images/XPButtonNoText_160x22.png",
					button_placeholder_id : "spanButtonPlaceholder",
					button_width : 160,
					button_height : 22,
					button_text : '<span class="button">请选择 <span class="buttonSmall">&nbsp;(1 MB Max)</span></span>',
					button_text_style : '.button { font-family: Helvetica, Arial, sans-serif; font-size: 14pt; } .buttonSmall { font-size: 10pt; }',
					button_text_top_padding : 1,
					button_text_left_padding : 5,

					// Flash Settings
					flash_url : basepath + "/js/swfupload/swfupload.swf",
					// Debug settings
					debug : false
				});

	};
</script>

<div id="dialogImport" style="font-size: 14px; visibility: hidden;">
	<div class="blackall">&nbsp;</div>
	<div class="newwindowImport"
		style="height: auto; padding-bottom: 14px;">
		<div class="taR">
			<a href="javascript:;"><img class="png_bg closeImportDialog"
				src="${basepath }/images/close.png" width="40" height="40" /> </a>
		</div>
		<div class="ngreyborder changeblue2 ">
			<h2 class="png_bg">导入模板</h2>
			<div class="basic_information w90p">
				<form id="form1" enctype="multipart/form-data" method="post">
					<div style="margin-bottom: 10px;">
						选择导入类型： <input checked="checked" class="mr10" type="radio"
							id="isSave" name="isSave" value="true" /> <label
							style="margin-left: -8px;">新建导入</label> <input class="mr10"
							type="radio" id="isSave" name="isSave" value="false" /> <label
							style="margin-left: -8px;">修改导入</label>
					</div>
					<div>
						选择上传文件： <input type="text" id="filepath" disabled="disabled"
							style="border: solid 1px; background-color: #FFFFFF; fontj-size: 13px; padding: 3px;" />
						<div id="spanButtonPlaceholder-Wrap"
							style="display: inline-block; position: relative; top: 4px; left: 4px;">
							<span id="spanButtonPlaceholder"></span>
						</div>
						<a id="downLoad" class="ml30">下载导入模板 <img
							src="${basepath }/images/download.png" width="16" height="16"
							class="vm" /></a>
						<font class="ml30" color="#FF0000">(模板仅支持07版excel)</font>
					</div>
					<div class="m10 taR ">
						<input type="button" class="step windowImportDialog" value="确定"
							id="btnSubmit" />
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<div id="dialogResult" class="hidden">
	<div class="blackall">&nbsp;</div>
	<div class="newwindowResult" id="releaseco">
		<div class="taR">
			<a href="javascript:;"><img class="png_bg closeResultDialog closed_upload"
				src="${basepath }/images/close.png" width="40" height="40"
				id="closed_icon" /></a>
		</div>
		<div class="ngreyborder changeblue2 mt20">
			<h2 class="png_bg">导入结果</h2>
			<div class="scroll h400">
				<div style="text-align: center; margin-top: 60px;"
					id="loadingImport">
					<img class="vm mr10" src="${basepath }/images/loading.gif"
						width="25px" /><span>正在导入中，请稍后</span>
				</div>
				<div class="ml30 mt40 hidden" id="success" style="text-align: center;">
					共导入数据<span style="color: #00F" class="m10"><font
						class="totalCount"></font></span>条，成功导入数据<span style="color: #00F"
						class="m10"><font class="successCount"></font></span>条
				</div>
				<div class="ml30 mt40 hidden" id="fail" style="text-align: center;">
					共导入数据<span style="color: #00F" class="m10"><font
						class="totalCount"></font></span>条，成功导入数据<span style="color: #00F"
						class="m10"><font class="successCount"></font></span>条,但导入数据有部分错误，请下载查看错误文件信息:<a
						id="errorFile" href=""><span style="color: #00F" class="m10">下载</span></a>
				</div>
			</div>
		</div>
		<div align="right" class="mr10">
			<p>
				<input id="closedResultButton" name="" type="button"
					class="back m10 windowResultDialog closed_upload" value="关闭" />
			</p>
		</div>
	</div>
</div>