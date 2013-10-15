package com.telecom.lms.core.model.trainclass;

public class TrainResourseInfoSearchForm {

	String trainClassId;
	Integer logo;
	Integer resourseStatus;
	String type; //1:课程
	Integer page;
	Integer max;

	public String getTrainClassId() {
		return trainClassId;
	}

	public void setTrainClassId(String trainClassId) {
		this.trainClassId = trainClassId;
	}

	public Integer getLogo() {
		return logo;
	}

	public void setLogo(Integer logo) {
		this.logo = logo;
	}

	public Integer getResourseStatus() {
		return resourseStatus;
	}

	public void setResourseStatus(Integer resourseStatus) {
		this.resourseStatus = resourseStatus;
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
