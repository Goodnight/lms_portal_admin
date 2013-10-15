/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-18 - 下午3:58:30
 */
package com.telecom.lms.core.model.basedata;

/**
 * @since 2013-9-18
 * @author zhangpengsh@gmail.com
 */
public class UserInfoSearchForm {

	String uids;
	String sn;
	String name;
	
	Integer status;
	String empNatureId;
	String orgId;
	Integer leftPriority;
	Integer rightPriority;
	
	Integer isTemporary;
	String mobile;
	String certificatecode;
	String email;
	
	Integer page;
	Integer max;

	public Integer getPage() {
		return page;
	}

	public void setPage(Integer page) {
		this.page = page;
	}

	public Integer getMax() {
		return max;
	}

	public void setMax(Integer max) {
		this.max = max;
	}

	public String getSn() {
		return sn;
	}

	public void setSn(String sn) {
		this.sn = sn;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getEmpNatureId() {
		return empNatureId;
	}

	public void setEmpNatureId(String empNatureId) {
		this.empNatureId = empNatureId;
	}

	public String getOrgId() {
		return orgId;
	}

	public void setOrgId(String orgId) {
		this.orgId = orgId;
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

	public Integer getIsTemporary() {
		return isTemporary;
	}

	public void setIsTemporary(Integer isTemporary) {
		this.isTemporary = isTemporary;
	}

	public String getUids() {
		return uids;
	}

	public void setUids(String uids) {
		this.uids = uids;
	}

	public String getCertificatecode() {
		return certificatecode;
	}

	public void setCertificatecode(String certificatecode) {
		this.certificatecode = certificatecode;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
