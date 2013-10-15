/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-10-9 - 下午5:39:54
 */
package com.telecom.lms.core.service.trainneed;

import java.util.List;

import com.telecom.lms.core.bo.survey.SurveyAttendanceBo;
import com.telecom.lms.core.model.trainneed.SurveyAttendanceInfoSearchForm;

/**
 * @since 2013-10-9
 * @author zhangpengsh@gmail.com
 * 
 */
public interface SurveyAttendanceInfoService {
	
	List<SurveyAttendanceBo> find(SurveyAttendanceInfoSearchForm form);

	int count(SurveyAttendanceInfoSearchForm form);
}
