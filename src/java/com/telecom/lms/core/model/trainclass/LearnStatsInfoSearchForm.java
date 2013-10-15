package com.telecom.lms.core.model.trainclass;

public class LearnStatsInfoSearchForm {

	String[] userId;
	String trainClassId;
	Integer resourceStatus;

	Integer logo;
	String type; //1:课程

	Integer page;
	Integer max;

	public String[] getUserId() {
		return userId;
	}

	public void setUserId(String[] userId) {
		this.userId = userId;
	}

	public String getTrainClassId() {
		return trainClassId;
	}

	public void setTrainClassId(String trainClassId) {
		this.trainClassId = trainClassId;
	}

	public Integer getResourceStatus() {
		return resourceStatus;
	}

	public void setResourceStatus(Integer resourceStatus) {
		this.resourceStatus = resourceStatus;
	}

	public Integer getLogo() {
		return logo;
	}

	public void setLogo(Integer logo) {
		this.logo = logo;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
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

}
