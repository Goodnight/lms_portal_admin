/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-8-30 - 下午3:54:34
 */
package com.telecom.lms.core.model.basedata;

/**
 * @since 2013-8-30
 * @author zhangpengsh@gmail.com
 */
public class OrganizationInfoSearchForm {

	String id;
	Integer leftPriority;
	Integer rightPriority;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Integer getLeftPriority() {
		return leftPriority;
	}

	public void setLeftPriority(Integer leftPriority) {
		this.leftPriority = leftPriority;
	}

	public Integer getRightPriority() {
		return rightPriority;
	}

	public void setRightPriority(Integer rightPriority) {
		this.rightPriority = rightPriority;
	}

}
