/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-10-9 - 下午5:31:21
 */
package com.telecom.lms.core.controller.trainneed;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.survey.SurveyAttendanceBo;
import com.telecom.lms.core.model.trainneed.SurveyAttendanceInfoSearchForm;
import com.telecom.lms.core.service.trainneed.SurveyAttendanceInfoService;

/**
 * @since 2013-10-9
 * @author zhangpengsh@gmail.com
 * 
 */
@Controller
public class SurveyAttendanceInfoController {

	@Resource
	private SurveyAttendanceInfoService surveyAttendanceInfoService;
	
	public int searchCount(SurveyAttendanceInfoSearchForm form) {

		return surveyAttendanceInfoService.count(form);
	}
	
	public List<SurveyAttendanceBo> searchList(SurveyAttendanceInfoSearchForm form) {

		return surveyAttendanceInfoService.find(form);
	}
}
