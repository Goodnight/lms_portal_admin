/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-10-8 - 下午3:08:02
 */
package com.telecom.lms.core.model.trainevaluate;

/**
 * @since 2013-10-8
 * @author zhangpengsh@gmail.com
 * 
 */
public class SurveyAllowUserInfoSearchForm {
	
	Integer isAttend;
	String surveyId;
	
	Integer max;
	Integer page;
	public Integer getIsAttend() {
		return isAttend;
	}
	public void setIsAttend(Integer isAttend) {
		this.isAttend = isAttend;
	}
	public String getSurveyId() {
		return surveyId;
	}
	public void setSurveyId(String surveyId) {
		this.surveyId = surveyId;
	}
	public Integer getMax() {
		return max;
	}
	public void setMax(Integer max) {
		this.max = max;
	}
	public Integer getPage() {
		return page;
	}
	public void setPage(Integer page) {
		this.page = page;
	}

}
