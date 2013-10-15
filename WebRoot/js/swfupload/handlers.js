var formChecker = null;
function swfUploadLoaded() {
	
	var btnSubmit = document.getElementById("btnSubmit");

	btnSubmit.onclick = doSubmit;
	
	validateForm();
}

function validateForm() {

	var isValid = false; 
	if($("#filepath").val() == ""){
		isValid = true;
	}
	$("#btnSubmit").attr("disabled",isValid);
}

// Called by the submit button to start the upload
function doSubmit(e) {
	if (formChecker != null) {
		clearInterval(formChecker);
		formChecker = null;
	}

	e = e || window.event;
	if (e.stopPropagation) {
		e.stopPropagation();
	}
	e.cancelBubble = true;

	try {
		swfu.startUpload();
	} catch (ex) {

	}
	return false;
}

// Called by the queue complete handler to submit the form
function uploadDone() {
	try {

		alert('save ---------');
	} catch (ex) {
		alert("Error submitting form");
	}
}

function fileDialogStart() {
	var txtFileName = document.getElementById("filepath");
	txtFileName.value = "";

	this.cancelUpload();
}

function fileQueueError(file, errorCode, message) {
	try {
		// Handle this error separately because we don't want to create a
		// FileProgress element for it.
		switch (errorCode) {
		case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
			alert("You have attempted to queue too many files.\n"
					+ (message === 0 ? "You have reached the upload limit."
							: "You may select "
									+ (message > 1 ? "up to " + message
											+ " files." : "one file.")));
			return;
		case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
			alert("您选择的文件过大，请重新选择");
			this.debug("Error Code: File too big, File name: " + file.name
					+ ", File size: " + file.size + ", Message: " + message);
			return;
		case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
			alert("无法上传空文件");
			this.debug("Error Code: Zero byte file, File name: " + file.name
					+ ", File size: " + file.size + ", Message: " + message);
			return;
		case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
			alert("您选择的文件类型无法上传 ，请重新选择");
			this.debug("Error Code: Invalid File Type, File name: " + file.name
					+ ", File size: " + file.size + ", Message: " + message);
			return;
		default:
			alert("未知错误 ，您可稍后再次尝试");
			this.debug("Error Code: " + errorCode + ", File name: " + file.name
					+ ", File size: " + file.size + ", Message: " + message);
			return;
		}
	} catch (e) {
	}
}

function fileQueued(file) {
	try {
		var txtFileName = document.getElementById("filepath");
		txtFileName.value = file.name;
	} catch (e) {
	}

}
function fileDialogComplete(numFilesSelected, numFilesQueued) {
	
	validateForm();
}

function uploadStart(file) {
	
	try {
	
		$("#dialogImport,#success,#fail").each(function(i, o){
			$(this).css('visibility', 'hidden');
		});
		$("#dialogResult,#loadingImport").show();
	} catch (e) {
		alert(e);
	}
	
}

function uploadProgress(file, bytesLoaded, bytesTotal) {

	try {
		
	} catch (ex) {
		this.debug(ex);
	}
}

function uploadSuccess(file, serverData) {

	try {
		var json = eval('(' + unescape(serverData) + ')');
		$("#loadingImport").hide();
		$(".totalCount").text(json.totalCount);
		$(".successCount").text(json.successCount);
		if (json.failCount == 0) {
			$("#success").show();
			$("#success").css('visibility', 'visible');
		} else if (json.failCount != 0) {
			$("#errorFile").attr("href",
					basepath + "/download/" + json.excelName);
			$("#fail").show();
			$("#fail").css('visibility', 'visible');
		}
	} catch (ex) {
		this.debug(ex);
	}
}

function uploadComplete(file) {
	try {
		
		var txtFileName = document.getElementById("filepath");
		txtFileName.value = "";
		validateForm();
	} catch (e) {
	}
}

function uploadError(file, errorCode, message) {
	try {

		if (errorCode === SWFUpload.UPLOAD_ERROR.FILE_CANCELLED) {
			// Don't show cancelled error boxes
			return;
		}

		var txtFileName = document.getElementById("filepath");
		txtFileName.value = "";
		validateForm();
		// Handle this error separately because we don't want to create a
		// FileProgress element for it.
		switch (errorCode) {
		case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:
			alert("There was a configuration error.  You will not be able to upload a resume at this time.");
			this.debug("Error Code: No backend file, File name: " + file.name
					+ ", Message: " + message);
			return;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
			alert("You may only upload 1 file.");
			this.debug("Error Code: Upload Limit Exceeded, File name: "
					+ file.name + ", File size: " + file.size + ", Message: "
					+ message);
			return;
		case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
		case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
			break;
		default:
			alert("An error occurred in the upload. Try again later.");
			this.debug("Error Code: " + errorCode + ", File name: " + file.name
					+ ", File size: " + file.size + ", Message: " + message);
			return;
		}

		switch (errorCode) {
		case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
			progress.setStatus("Upload Error");
			this.debug("Error Code: HTTP Error, File name: " + file.name
					+ ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
			progress.setStatus("Upload Failed.");
			this.debug("Error Code: Upload Failed, File name: " + file.name
					+ ", File size: " + file.size + ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.IO_ERROR:
			progress.setStatus("Server (IO) Error");
			this.debug("Error Code: IO Error, File name: " + file.name
					+ ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
			progress.setStatus("Security Error");
			this.debug("Error Code: Security Error, File name: " + file.name
					+ ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
			progress.setStatus("Upload Cancelled");
			this.debug("Error Code: Upload Cancelled, File name: " + file.name
					+ ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
			progress.setStatus("Upload Stopped");
			this.debug("Error Code: Upload Stopped, File name: " + file.name
					+ ", Message: " + message);
			break;
		}
	} catch (ex) {
	}
}
