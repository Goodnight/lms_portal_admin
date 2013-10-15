/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-10-8 - 下午4:54:35
 */
package com.telecom.lms.portal.admin.control.survey;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
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
import com.telecom.lms.core.bo.survey.allow.SurveyAllowUserBo;
import com.telecom.lms.core.controller.trainevaluate.SurveyAllowUserInfoController;
import com.telecom.lms.core.model.trainevaluate.SurveyAllowUserInfoSearchForm;
import com.telecom.lms.sdk.service.down.trainevaluate.DownLoadSurveyAllowUserService;
import com.telecom.lms.sdk.util.FileInfoUtil;

/**
 * @since 2013-10-8
 * @author zhangpengsh@gmail.com
 * 
 */
@Controller
@RequestMapping("/surveyallowuser")
public class SurveyAllowUserCtr {
	
	private static final Logger log = LoggerFactory.getLogger(SurveyAllowUserCtr.class);
	
	private @Value("#{export.surveyAllowUser_exportLimit}")
	Integer limit;

	private @Value("#{export.surveyAllowUser_exportMax}")
	Integer max;
	
	@Resource
	SurveyAllowUserInfoController allowUserInfoController;
	
	@Autowired
	DownLoadSurveyAllowUserService downLoadSurveyAllowUserService;
	
	@RequestMapping(value = "exportCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportCount(HttpServletRequest request, HttpServletResponse response) {

		SurveyAllowUserInfoSearchForm form = this.queryExport(request);

		int count = allowUserInfoController.searchCount(form);
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

		SurveyAllowUserInfoSearchForm form = this.queryExport(request);
		int count = Integer.parseInt(request.getParameter("count"));

		form.setMax(limit);
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = FileInfoUtil.getFileInfo(address, "surveyAllowUser");

		for (int i = 0; i <= count / limit; i++) {
			form.setPage(i * limit);
			List<SurveyAllowUserBo> surveyAllowUserBos = allowUserInfoController.searchList(form);
			downLoadSurveyAllowUserService.exportResult(fileInfo, i * limit, surveyAllowUserBos);
		}
		return fileInfo.getName();
	}

	public SurveyAllowUserInfoSearchForm queryExport(HttpServletRequest request) {

		SurveyAllowUserInfoSearchForm form = new SurveyAllowUserInfoSearchForm();

		String status = request.getParameter("status");
		if(StringUtils.isNotBlank(status)){
			form.setIsAttend(Integer.parseInt(status));
		}
		form.setSurveyId(request.getParameter("sId"));
		return form;
	}
}
