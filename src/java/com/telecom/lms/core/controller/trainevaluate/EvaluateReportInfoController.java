/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-13 - 下午3:46:23
 */
package com.telecom.lms.core.controller.trainevaluate;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.surveyreport.SurveyReportCategoryBo;
import com.telecom.lms.core.bo.surveyreport.SurveyReportItemBo;
import com.telecom.lms.core.model.trainevaluate.SurveyReportInfoSearchForm;
import com.telecom.lms.core.service.trainevaluate.EvaluateReportInfoService;

/**
 * @since 2013-9-13
 * @author zhangpengsh@gmail.com
 */
@Controller
public class EvaluateReportInfoController {

	@Resource
	EvaluateReportInfoService evaluateReportInfoService;

	public List<SurveyReportCategoryBo> statisticsAvgScore(SurveyReportInfoSearchForm form) {

		return evaluateReportInfoService.statisticsAvgScore(form);
	}

	public List<SurveyReportItemBo> statisticsResult(SurveyReportInfoSearchForm form) {

		return evaluateReportInfoService.statisticsResult(form);
	}
}
