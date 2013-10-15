/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-8-28 - 下午5:08:20
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

import com.telecom.lms.core.bo.model.ExportInfoBo;
import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.core.bo.resources.ResBaseBo;
import com.telecom.lms.core.controller.trainresource.TrainResourceInfoController;
import com.telecom.lms.core.model.trainresource.TrainResourceInfoSearchForm;
import com.telecom.lms.sdk.service.down.trainresource.DownLoadTrainResourceService;
import com.telecom.lms.sdk.util.FileInfoUtil;

/**
 * @since 2013-8-28
 * @author zhangpengsh@gmail.com
 */
@Controller
@RequestMapping("/trainresource")
public class TrainResourceCtr {
	
	private static final Logger logger = LoggerFactory.getLogger(TrainResourceCtr.class);

	@Autowired
	private DownLoadTrainResourceService downLoadResourceService;

	@Resource
	private TrainResourceInfoController trainResourceInfoController;

	private @Value("#{export.trainResource_exportLimit}")
	Integer limit;

	private @Value("#{export.trainResource_exportMax}")
	Integer max;

	@RequestMapping(value = "exportList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportList(HttpServletRequest request, HttpServletResponse response) {

		TrainResourceInfoSearchForm form = queryExport(request);
		form.setMax(limit);
		Integer count = Integer.parseInt(request.getParameter("count"));
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = FileInfoUtil.getFileInfo(address, "trainResource");

		for (int i = 0; i <= count / limit; i++) {
			form.setPage(i * limit);
			List<ResBaseBo> list = trainResourceInfoController.searchList(form);
			downLoadResourceService.exportResult(fileInfo, i * limit, list);
		}
		return fileInfo.getName();
	}

	public TrainResourceInfoSearchForm queryExport(HttpServletRequest request) {

		String sn = request.getParameter("sn");
		String resName = request.getParameter("name");
		String type = request.getParameter("type");
		String begTime = request.getParameter("startDt");
		String endTime = request.getParameter("endDt");
		String knowledgeId = request.getParameter("knoId");
		String orgId = request.getParameter("orgId");
		String elite = request.getParameter("elite");
		String history = request.getParameter("history");

		TrainResourceInfoSearchForm form = new TrainResourceInfoSearchForm();
		if (StringUtils.isNotBlank(elite)) {
			form.setElite(1);
		}
		if (StringUtils.isNotBlank(history)) {
			form.setHistory(1);
		}
		form.setSn(sn);
		form.setName(resName);
		if (StringUtils.isNotBlank(type)) {
			form.setType(Integer.parseInt(type));
		}
		form.setStartTime(begTime);
		form.setEndTime(endTime);
		if (StringUtils.isNotBlank(orgId)) {
			form.setOrgId(orgId);
		}
		if (StringUtils.isNotBlank(knowledgeId) && !"0".equals(knowledgeId)) {
			form.setKnowledgeId(knowledgeId);
		}
		return form;
	}

	@RequestMapping(value = "exportCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportCount(HttpServletRequest request, HttpServletResponse response) {

		TrainResourceInfoSearchForm form = queryExport(request);
		Integer count = trainResourceInfoController.searchCount(form);
		logger.debug("export count is : {} ",count);
		ExportInfoBo exportInfoBo = new ExportInfoBo();
		exportInfoBo.setCount(count);
		if (count > max) {
			exportInfoBo.setFlag("confirm");
		}
		return exportInfoBo;
	}
}
