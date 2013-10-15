var error_code = 0;
var ctu_swf_uploader_errors = {
	"app_id" : 1,
	"domain" : 2,
	"creator" : 3,
	"resource_type" : 4,
	"course_title" : 5,
	"course_code" : 6,
	"course_time" : 7,
	"document_title" : 8,
	"document_code" : 9,
	"case_title" : 10,
	"case_code" : 11
}

var ctu_swf_uploader = function(_settings, path, getUploadParams, uploadSuccess) {
	if (_settings == null) {
		_settings = {};
	}

	var swfUpload = new SWFUpload({
		flash_url : path + "/swfupload.swf",
		upload_url : path + "/service/swfupload",
		file_size_limit : _settings.file_size_limit,
		file_types : _settings.file_types,
		file_post_name : _settings.file_post_name,
		file_types_description : _settings.file_types_description,
		file_upload_limit : _settings.file_upload_limit,
		file_queue_limit : _settings.file_queue_limit,
		custom_settings : _settings.custom_settings,
		debug : false,// 是否显示调试的textarea

		// Button settings
		button_image_url : _settings.button_image_url,
		button_width : _settings.button_width,
		button_height : _settings.button_height,
		button_placeholder_id : _settings.button_placeholder_id,
		button_window_mode : "transparent",
		button_text : _settings.button_text,
		button_text_style : _settings.button_text_style,
		button_text_left_padding : _settings.button_text_left_padding,
		button_text_top_padding : _settings.button_text_top_padding,
		// The event handler functions are defined in handlers.js
		swfupload_preload_handler : preLoad,
		swfupload_load_failed_handler : loadFailed,
		file_queued_handler : fileQueued,
		file_queue_error_handler : fileQueueError,
		file_dialog_complete_handler : fileDialogComplete,
		upload_start_handler : function(file) {
			var upload_params = getUploadParams();
			error_code = validate(upload_params);
			if (error_code == 0) {
				swfUpload.setPostParams(upload_params);
				return true;
			}
			return false;
		},
		upload_progress_handler : uploadProgress,
		upload_error_handler : uploadError,
		upload_success_handler : function(file, serverData) {
			try {
				var progress = new FileProgress(file,
						this.customSettings.progressTarget);
				progress.setComplete();
				var json = eval('(' + unescape(serverData) + ')');
				if (json.error == null) {
					progress.setStatus("上传成功");
					uploadSuccess(file, json);
				} else {
					progress.setStatus("上传失败");
				}
				progress.toggleCancel(false);
			} catch (ex) {
				this.debug(ex);
			}
		},
		upload_complete_handler : uploadComplete,
		queue_complete_handler : queueComplete
	});
	swfUpload.stopped = false;
	function isBlank(value) {
		return (value == null || value == "")
	}

	function validate(upload_params) {
		var resource_type = upload_params.resource_type;
		if (isBlank(upload_params.app_id)) {
			return ctu_swf_uploader_errors['app_id'];
		}
		if (isBlank(upload_params.domain)) {
			return ctu_swf_uploader_errors['domain'];
		}
		if (isBlank(upload_params.creator)) {
			return ctu_swf_uploader_errors['creator'];
		}
		if (isBlank(upload_params.resource_type)) {
			return ctu_swf_uploader_errors['resource_type'];
		}
		// 各类型字段不为空判断
		// switch (resource_type) {
		// case "1":
		// if (isBlank(upload_params.course_title)) {
		// return ctu_swf_uploader_errors['course_title'];
		// }
		// if (isBlank(upload_params.course_code)) {
		// return ctu_swf_uploader_errors['course_code'];
		// }
		// if (isBlank(upload_params.course_time)) {
		// return ctu_swf_uploader_errors['course_time'];
		// }
		// return 0;
		// case "2":
		// if (isBlank(upload_params.course_title)) {
		// return ctu_swf_uploader_errors['course_title'];
		// }
		// if (isBlank(upload_params.course_code)) {
		// return ctu_swf_uploader_errors['course_code'];
		// }
		// if (isBlank(upload_params.course_time)) {
		// return ctu_swf_uploader_errors['course_time'];
		// }
		// return 0;
		// case "3":
		// if (isBlank(upload_params.course_title)) {
		// return ctu_swf_uploader_errors['course_title'];
		// }
		// if (isBlank(upload_params.course_code)) {
		// return ctu_swf_uploader_errors['course_code'];
		// }
		// if (isBlank(upload_params.course_time)) {
		// return ctu_swf_uploader_errors['course_time'];
		// }
		// return 0;
		// case "4":
		// if (isBlank(upload_params.document_title)) {
		// return ctu_swf_uploader_errors['document_title'];
		// }
		// if (isBlank(upload_params.document_code)) {
		// return ctu_swf_uploader_errors['document_code'];
		// }
		// return 0;
		// case "5":
		// if (isBlank(upload_params.case_title)) {
		// return ctu_swf_uploader_errors['case_title'];
		// }
		// if (isBlank(upload_params.document_title)) {
		// return ctu_swf_uploader_errors['document_title'];
		// }
		// return 0;
		// default:
		// return 0;
		// }
		return 0;
	}
	function errorMessage(file, message) {
		var progress = new FileProgress(file,
				swfUpload.customSettings.progressTarget);
		progress.setError();
		progress.setStatus(message);
	}
	function validateError(file, error_code) {
		switch (error_code) {
		case 1:
			errorMessage(file, "app_id can not be null");
			break;
		case 2:
			errorMessage(file, "domain can not be null");
			break;
		case 3:
			errorMessage(file, "creator can not be null");
			break;
		case 4:
			errorMessage(file, "resource_type can not be null");
			break;
		case 5:
			errorMessage(file, "course_title can not be null");
			break;
		case 6:
			errorMessage(file, "course_code can not be null");
			break;
		case 7:
			errorMessage(file, "course_time can not be null");
			break;
		case 8:
			errorMessage(file, "document_title can not be null");
			break;
		case 9:
			errorMessage(file, "document_code can not be null");
			break;
		case 10:
			errorMessage(file, "case_title can not be null");
			break;
		case 11:
			errorMessage(file, "case_code can not be null");
			break;
		default:
			break;
		}
	}
	this.cancel = function() {
		if (swfUpload) {
			swfUpload.cancelUpload(null, true);
		}
	}
};
