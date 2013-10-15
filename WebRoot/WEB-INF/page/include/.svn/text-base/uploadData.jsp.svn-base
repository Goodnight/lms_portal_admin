<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

<script type="text/javascript">
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

		$.ajaxFileUpload({
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
		<a href="javascript:;"><img class="png_bg closed closed_upload"
			src="${basepath }/images/close.png" width="40" height="40" /> </a>
	</div>
	<div class="ngreyborder changeblue2 mt20">
		<h2 class="png_bg">导入模板</h2>
		<div class="basic_information w90p">
			<div class="pt20">
				导入模板： <input id="filepath" name="filepath" type="file" /> <a
					id="downLoad" name="downLoad" class="ml30">下载导入模板 <img
					src="${basepath }/images/download.png" width="16" height="16"
					class="vm" />
				</a><font class="ml30" color="#FF0000">(模板仅支持07版excel)</font>
			</div>
			<div class="m10 taR ">
				<input type="button" onclick="fileupload()"
					class="step windowbutton" value="确定" />
			</div>
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