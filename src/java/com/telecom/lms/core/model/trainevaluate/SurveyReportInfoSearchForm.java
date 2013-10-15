/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-13 - 下午4:08:35
 */
package com.telecom.lms.core.model.trainevaluate;

/**
 * @since 2013-9-13
 * @author zhangpengsh@gmail.com
 */
public class SurveyReportInfoSearchForm {

	String surveyId;
	String userId;
	String type;
	String relation;

	public String getSurveyId() {
		return surveyId;
	}

	public void setSurveyId(String surveyId) {
		this.surveyId = surveyId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getRelation() {
		return relation;
	}

	public void setRelation(String relation) {
		this.relation = relation;
	}

}
