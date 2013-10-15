package com.telecom.lms.portal.admin.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ConfigInfo {
	
	private @Value("#{config.sysname}")String sysName;
	
	private @Value("#{config.systype}")String sysType;
	
	private @Value("#{config.version}")String version;
	
	private @Value("#{config.copyright}")String copyright;
	
	private @Value("#{config.resourceAgentUrl}")String resourceAgentUrl; //资源上传URL
	
	private @Value("#{config.downloadCaseDocTemplateURL}")String downloadCaseDocTemplateURL;//案例模板URL
	
	private @Value("#{config.posCourseForStuUrl}")String posCourseForStuUrl; //岗位课程跳转学员端课程详情URL
	
	private @Value("#{config.ueditorUrlPath}")String ueditorUrlPath; //岗位体系富文本JS读取URL
	
	private @Value("#{config.ueditorImageUploadPath}")String ueditorImageUploadPath;
	
	private @Value("#{config.ueditorImageUploadPathPrefix}")String ueditorImageUploadPathPrefix;
	
	private @Value("#{config.donwlodResourseURL}")String donwlodResourseURL; //资源下载URL
	
	private @Value("#{config.indexURL}")String indexURL;
	
	private @Value("#{lmsapi.orgRootId}")String groupOrgId;
	
	private @Value("#{config.superUsers}")String superUsers;
	
	private @Value("#{config.isSystemMaintenance}")String isSystemMaintenance;
	private @Value("#{config.instruction}")String instruction;
	/**
	 * 学员端系统的URL
	 */
	private @Value("#{config.studentURL}")String studentURL;
	/**
	 * 考试系统的URL
	 */
	private @Value("#{config.examinationURL}")String examinationURL;
	
	public String getExaminationURL() {
		return examinationURL;
	}

	public void setExaminationURL(String examinationURL) {
		this.examinationURL = examinationURL;
	}

	public String getStudentURL() {
		return studentURL;
	}

	public void setStudentURL(String studentURL) {
		this.studentURL = studentURL;
	}

	public String getUeditorImageUploadPathPrefix() {
		return ueditorImageUploadPathPrefix;
	}

	public void setUeditorImageUploadPathPrefix(String ueditorImageUploadPathPrefix) {
		this.ueditorImageUploadPathPrefix = ueditorImageUploadPathPrefix;
	}

	public String getSuperUsers() {
		return superUsers;
	}

	public void setSuperUsers(String superUsers) {
		this.superUsers = superUsers;
	}

	public String getGroupOrgId() {
		return groupOrgId;
	}

	public void setGroupOrgId(String groupOrgId) {
		this.groupOrgId = groupOrgId;
	}

	public String getIndexURL() {
		return indexURL;
	}

	public void setIndexURL(String indexURL) {
		this.indexURL = indexURL;
	}

	public String getSysName() {
		return sysName;
	}

	public void setSysName(String sysName) {
		this.sysName = sysName;
	}

	public String getSysType() {
		return sysType;
	}

	public void setSysType(String sysType) {
		this.sysType = sysType;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public void setResourceAgentUrl(String resourceAgentUrl) {
		this.resourceAgentUrl = resourceAgentUrl;
	}

	public String getResourceAgentUrl() {
		return resourceAgentUrl;
	}

	public void setPosCourseForStuUrl(String posCourseForStuUrl) {
		this.posCourseForStuUrl = posCourseForStuUrl;
	}

	public String getPosCourseForStuUrl() {
		return posCourseForStuUrl;
	}

	public void setUeditorUrlPath(String ueditorUrlPath) {
		this.ueditorUrlPath = ueditorUrlPath;
	}

	public String getUeditorUrlPath() {
		return ueditorUrlPath;
	}

	public void setDonwlodResourseURL(String donwlodResourseURL) {
		this.donwlodResourseURL = donwlodResourseURL;
	}

	public String getDonwlodResourseURL() {
		return donwlodResourseURL;
	}

	public String getCopyright() {
		return copyright;
	}

	public void setCopyright(String copyright) {
		this.copyright = copyright;
	}

	
	public String getUeditorImageUploadPath() {
		return ueditorImageUploadPath;
	}

	public void setUeditorImageUploadPath(String ueditorImageUploadPath) {
		this.ueditorImageUploadPath = ueditorImageUploadPath;
	}

	public String getIsSystemMaintenance() {
		return isSystemMaintenance;
	}

	public void setIsSystemMaintenance(String isSystemMaintenance) {
		this.isSystemMaintenance = isSystemMaintenance;
	}

	public String getInstruction() {
		return instruction;
	}

	public void setInstruction(String instruction) {
		this.instruction = instruction;
	}

	public String getDownloadCaseDocTemplateURL() {
		return downloadCaseDocTemplateURL;
	}

	public void setDownloadCaseDocTemplateURL(String downloadCaseDocTemplateURL) {
		this.downloadCaseDocTemplateURL = downloadCaseDocTemplateURL;
	}


	
}
