/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-10-9 - 下午5:28:27
 */
package com.telecom.lms.portal.admin.control.inquiry;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.telecom.lms.core.bo.model.ExportInfoBo;
import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.core.bo.survey.SurveyAttendanceBo;
import com.telecom.lms.core.controller.trainneed.SurveyAttendanceInfoController;
import com.telecom.lms.core.model.trainneed.SurveyAttendanceInfoSearchForm;
import com.telecom.lms.sdk.service.down.trainneed.DownLoadSurveyAttendanceService;
import com.telecom.lms.sdk.util.FileInfoUtil;

/**
 * @since 2013-10-9
 * @author zhangpengsh@gmail.com
 * 
 */
@Controller
@RequestMapping("/surveyattendance")
public class SurveyAttendanceCtr {

private static final Logger log = LoggerFactory.getLogger(SurveyAttendanceCtr.class);
	
	private @Value("#{export.surveyAttendance_exportLimit}")
	Integer limit;

	private @Value("#{export.surveyAttendance_exportMax}")
	Integer max;
	
	@Resource
	SurveyAttendanceInfoController surveyAttendanceInfoController;
	
	@Autowired
	DownLoadSurveyAttendanceService downLoadSurveyAttendanceService;
	
	@RequestMapping(value = "exportCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportCount(HttpServletRequest request, HttpServletResponse response) {

		SurveyAttendanceInfoSearchForm form = this.queryExport(request);

		int count = surveyAttendanceInfoController.searchCount(form);
		log.debug("export count is : {} ", count);
		ExportInfoBo exportInfoBo = new ExportInfoBo();
		exportInfoBo.setCount(count);
		if (count > max) {
			exportInfoBo.setFlag("confirm");
		}
		return exportInfoBo;
	}

	@RequestMapping(value = "exportList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportList(HttpServletRequest request, HttpServletResponse response) {

		SurveyAttendanceInfoSearchForm form = this.queryExport(request);
		int count = Integer.parseInt(request.getParameter("count"));

		form.setMax(limit);
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = FileInfoUtil.getFileInfo(address, "surveyAllowUser");

		for (int i = 0; i <= count / limit; i++) {
			form.setPage(i * limit);
			List<SurveyAttendanceBo> surveyAttendanceBos = surveyAttendanceInfoController.searchList(form);
			downLoadSurveyAttendanceService.exportResult(fileInfo, i * limit, surveyAttendanceBos);
		}
		return fileInfo.getName();
	}

	public SurveyAttendanceInfoSearchForm queryExport(HttpServletRequest request) {

		SurveyAttendanceInfoSearchForm form = new SurveyAttendanceInfoSearchForm();
		form.setSurveyId(request.getParameter("sId"));
		return form;
	}
}
