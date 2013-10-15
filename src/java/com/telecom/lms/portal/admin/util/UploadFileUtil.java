package com.telecom.lms.portal.admin.util;

import java.io.File;

import javax.servlet.http.HttpServletRequest;

import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.sdk.util.FileInfoUtil;


public class UploadFileUtil {

	public static File getUploadFile(HttpServletRequest request,String prefix) throws Exception{
		
		String loadDataPath = FileTool.BASEPATH + "/upload/";
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		CommonsMultipartFile cFile = (CommonsMultipartFile) multipartRequest.getFile("resume_file");// 获取上传文件
		FileInfo fileInfo = FileInfoUtil.getFileInfo(loadDataPath, prefix);
		File uploadedFile = new File(fileInfo.getPath());
		if (null != cFile && !cFile.isEmpty()) {
			// 上传文件
			FileCopyUtils.copy(cFile.getBytes(), uploadedFile);
		}
		return uploadedFile;
	}
}
