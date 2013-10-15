/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-23 - 上午9:53:12
 */
package com.telecom.lms.core.model.trainclass;

/**
 * @since 2013-9-23
 * @author zhangpengsh@gmail.com
 */
public class TrainClassInfoSearchForm {

	String name;
	String way;
	String principal;
	Integer status;
	String start_date;
	String end_date;
	Integer type;
	Integer isPlan;
	String level_id;
	Integer hasResponse;
	Integer hasBehavior;
	String orgId;
	Integer leftPriority;
	Integer rightPriority;
	Integer isSub;
	String plan_id;

	Integer page;
	Integer max;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getWay() {
		return way;
	}

	public void setWay(String way) {
		this.way = way;
	}

	public String getPrincipal() {
		return principal;
	}

	public void setPrincipal(String principal) {
		this.principal = principal;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getStart_date() {
		return start_date;
	}

	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}

	public String getEnd_date() {
		return end_date;
	}

	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public Integer getIsPlan() {
		return isPlan;
	}

	public void setIsPlan(Integer isPlan) {
		this.isPlan = isPlan;
	}

	public String getLevel_id() {
		return level_id;
	}

	public void setLevel_id(String level_id) {
		this.level_id = level_id;
	}

	public Integer getHasResponse() {
		return hasResponse;
	}

	public void setHasResponse(Integer hasResponse) {
		this.hasResponse = hasResponse;
	}

	public Integer getHasBehavior() {
		return hasBehavior;
	}

	public void setHasBehavior(Integer hasBehavior) {
		this.hasBehavior = hasBehavior;
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

	public Integer getIsSub() {
		return isSub;
	}

	public void setIsSub(Integer isSub) {
		this.isSub = isSub;
	}

	public String getPlan_id() {
		return plan_id;
	}

	public void setPlan_id(String plan_id) {
		this.plan_id = plan_id;
	}

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

	//	String sn;
	//	String dep_id;
	//	Integer ifOnline;
	//	String dep_contain;
	//	Integer logo;
	//	String orgDepId;
	//
	//	String plan_id;
	//	String isDel;
	//	String plan_name;
	//	
	//	String types;
	//	Integer attendNum;
	//	String address;
	//	String relateClass;

}
