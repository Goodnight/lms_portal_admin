/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-5 - 下午3:20:41
 */
package com.telecom.lms.portal.admin.control.resource;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.model.ExportInfoBo;
import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.core.bo.resources.CaseBo;
import com.telecom.lms.core.bo.resources.KnowledgeCategoryBo;
import com.telecom.lms.core.controller.basedata.OrganizationInfoController;
import com.telecom.lms.core.controller.trainresource.CaseResourceInfoController;
import com.telecom.lms.core.controller.trainresource.KnowledgeCategoryInfoController;
import com.telecom.lms.core.model.basedata.OrganizationInfoSearchForm;
import com.telecom.lms.core.model.trainresource.CaseResourceInfoSearchForm;
import com.telecom.lms.core.model.trainresource.KnowledgeCategoryInfoSearchForm;
import com.telecom.lms.sdk.service.down.trainresource.DownLoadCaseResourceService;
import com.telecom.lms.sdk.util.FileInfoUtil;

/**
 * @since 2013-9-5
 * @author zhangpengsh@gmail.com
 */
@Controller
@RequestMapping("/case")
public class CaseCtr {

	private static final Logger logger = LoggerFactory.getLogger(CaseCtr.class);

	@Resource
	KnowledgeCategoryInfoController knowledgeCategoryInfoController;

	@Resource
	OrganizationInfoController organizationInfoController;

	@Resource
	CaseResourceInfoController caseResourceInfoController;

	@Autowired
	DownLoadCaseResourceService downLoadCaseResourceService;

	private @Value("#{export.caseResource_exportLimit}")
	Integer limit;

	private @Value("#{export.caseResource_exportMax}")
	Integer max;

	@RequestMapping(value = "exportList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportList(HttpServletRequest request, HttpServletResponse response) {

		CaseResourceInfoSearchForm form = queryExport(request);
		form.setMax(limit);

		Integer count = Integer.parseInt(request.getParameter("count"));
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = FileInfoUtil.getFileInfo(address, "caseResource");

		for (int i = 0; i <= count / limit; i++) {
			form.setPage(i * limit);
			List<CaseBo> list = caseResourceInfoController.searchList(form);
			downLoadCaseResourceService.exportResult(fileInfo, i * limit, list);
		}
		return fileInfo.getName();
	}

	@RequestMapping(value = "exportCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportCount(HttpServletRequest request, HttpServletResponse response) {

		CaseResourceInfoSearchForm form = queryExport(request);
		Integer count = caseResourceInfoController.searchCount(form);
		logger.debug("export count is : {} ",count);
		ExportInfoBo exportInfoBo = new ExportInfoBo();
		exportInfoBo.setCount(count);
		if (count > max) {
			exportInfoBo.setFlag("confirm");
		}
		return exportInfoBo;
	}

	private CaseResourceInfoSearchForm queryExport(HttpServletRequest request) {

		CaseResourceInfoSearchForm form = new CaseResourceInfoSearchForm();
		form.setOrder(request.getParameter("order"));
		form.setRegular(request.getParameter("sort"));
		form.setName(request.getParameter("name"));
		form.setSn(request.getParameter("sn"));
		form.setTag(request.getParameter("tag"));
		form.setStartTime(request.getParameter("startTime"));
		form.setEndTime(request.getParameter("endTime"));
		form.setStatus(request.getParameter("status"));
		form.setPost(request.getParameter("positionIds"));
		String isChildOrg = request.getParameter("isChildOrg");
		String isChildKnowledge = request.getParameter("isChildKnowledge");
		form.setElite(request.getParameter("elite"));

		String orgId = request.getParameter("orgId");
		if (StringUtils.isNotBlank(orgId) && !"undefined".equals(orgId)) {

			queryOrgExport(orgId, isChildOrg, form);
		}

		String knoId = request.getParameter("knoId");
		if (StringUtils.isNotBlank(knoId) && !"0".equals(knoId.trim()) && !"undefined".equals(knoId.trim())) {

			queryKnowledgeExport(knoId, isChildKnowledge, form);
		}
		return form;
	}

	private void queryOrgExport(String orgId, String isChildOrg, CaseResourceInfoSearchForm form) {

		if (StringUtils.isBlank(isChildOrg) || "1".equals(isChildOrg)) {
			OrganizationInfoSearchForm organizationInfoSearchForm = new OrganizationInfoSearchForm();
			organizationInfoSearchForm.setId(orgId);
			OrganizationBo organizationBo = organizationInfoController.get(organizationInfoSearchForm);
			form.setOrgLeftPriority(organizationBo.getLeftPriority());
			form.setOrgRightPriority(organizationBo.getRightPriority());
		} else {
			form.setOrgId(orgId);
		}
	}
	
    private void queryKnowledgeExport(String knowledgeId, String isChildKnowledge,CaseResourceInfoSearchForm form){
		
		if (StringUtils.isBlank(isChildKnowledge) || "1".equals(isChildKnowledge)) {
			KnowledgeCategoryInfoSearchForm knowledgeCategoryInfoSearchForm = new KnowledgeCategoryInfoSearchForm();
			knowledgeCategoryInfoSearchForm.setId(knowledgeId);
			KnowledgeCategoryBo knowledgeCategoryBo = knowledgeCategoryInfoController.get(knowledgeCategoryInfoSearchForm);
			form.setKnowledgeLeftPriority(knowledgeCategoryBo.getLeftPriority());
			form.setKnowledgeRightPriority(knowledgeCategoryBo.getRightPriority());
		} else {
			form.setKnowledgeId(knowledgeId);
		}
	}
}
