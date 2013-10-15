/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-10-8 - 下午2:57:16
 */
package com.telecom.lms.core.service.trainevaluate;

import java.util.List;

import com.telecom.lms.core.bo.survey.allow.SurveyAllowUserBo;
import com.telecom.lms.core.model.trainevaluate.SurveyAllowUserInfoSearchForm;

/**
 * @since 2013-10-8
 * @author zhangpengsh@gmail.com
 * 
 */
public interface SurveyAllowUserInfoService {
	
	List<SurveyAllowUserBo> find(SurveyAllowUserInfoSearchForm form);

	int count(SurveyAllowUserInfoSearchForm form);
}
