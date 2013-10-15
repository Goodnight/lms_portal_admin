/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-10-8 - 下午4:37:59
 */
package com.telecom.lms.core.controller.trainevaluate;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.survey.allow.SurveyAllowUserBo;
import com.telecom.lms.core.model.trainevaluate.SurveyAllowUserInfoSearchForm;
import com.telecom.lms.core.service.trainevaluate.SurveyAllowUserInfoService;

/**
 * @since 2013-10-8
 * @author zhangpengsh@gmail.com
 * 
 */
@Controller
public class SurveyAllowUserInfoController {

	@Resource
	private SurveyAllowUserInfoService surveyAllowUserInfoService;
	
	public int searchCount(SurveyAllowUserInfoSearchForm form) {

		return surveyAllowUserInfoService.count(form);
	}
	
	public List<SurveyAllowUserBo> searchList(SurveyAllowUserInfoSearchForm form) {

		return surveyAllowUserInfoService.find(form);
	}
}
