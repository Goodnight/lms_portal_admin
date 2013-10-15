package com.telecom.lms.portal.admin.util;

import javax.servlet.http.HttpServletRequest;

import com.telecom.lms.core.bo.model.ExcelReturn;
import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.sdk.util.FileInfoUtil;
import com.telecom.lms.sdk.util.WriterExcelUtil;

public class DownLoadFileUtil {

	public static void getDownLoadFile(HttpServletRequest request, String prefix, ExcelReturn excelReturn) {

		if (null != excelReturn.getExcelInfoBos() && !excelReturn.getExcelInfoBos().isEmpty()) {
			String address = request.getSession().getServletContext().getRealPath("/") + "download/";
			FileInfo fileInfo = FileInfoUtil.getFileInfo(address, prefix);
			String fileName = WriterExcelUtil.exportExcel(fileInfo, prefix, prefix, 0, excelReturn.getExcelInfoBos())
				.getName();
			excelReturn.setExcelName(fileName);
			excelReturn.setExcelInfoBos(null);
		}
	}
}
