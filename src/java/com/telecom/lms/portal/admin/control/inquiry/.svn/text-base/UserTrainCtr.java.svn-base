/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-10-11 - 下午3:09:53
 */
package com.telecom.lms.portal.admin.control.inquiry;

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

import com.telecom.lms.core.bo.demand.DmdPersonBo;
import com.telecom.lms.core.bo.model.ExportInfoBo;
import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.core.controller.trainneed.UserTrainInfoController;
import com.telecom.lms.core.model.trainneed.UserTrainInfoSearchForm;
import com.telecom.lms.sdk.service.down.trainneed.DownLoadUserTrainService;
import com.telecom.lms.sdk.util.FileInfoUtil;

/**
 * @since 2013-10-11
 * @author zhangpengsh@gmail.com
 */
@Controller
@RequestMapping("/usertrain")
public class UserTrainCtr {

	private static final Logger log = LoggerFactory.getLogger(UserTrainCtr.class);

	private @Value("#{export.userTrain_exportLimit}")
	Integer limit;

	private @Value("#{export.userTrain_exportMax}")
	Integer max;

	@Resource
	UserTrainInfoController userTrainInfoController;
	
	@Autowired
	DownLoadUserTrainService downLoadUserTrainService;

	@RequestMapping(value = "exportCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportCount(HttpServletRequest request, HttpServletResponse response) {

		UserTrainInfoSearchForm form = this.queryExport(request);

		int count = userTrainInfoController.searchCount(form);
		log.debug("export count is : {} ", count);
		ExportInfoBo exportInfoBo = new ExportInfoBo();
		exportInfoBo.setCount(count);
		if (count > max) {
			exportInfoBo.setFlag("confirm");
		}
		return exportInfoBo;
	}

	@RequestMapping(value = "exportList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportList(HttpServletRequest request, HttpServletResponse response) {

		UserTrainInfoSearchForm form = this.queryExport(request);
		int count = Integer.parseInt(request.getParameter("count"));

		form.setMax(limit);
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = FileInfoUtil.getFileInfo(address, "userTrain");

		for (int i = 0; i <= count / limit; i++) {
			form.setPage(i * limit);
			List<DmdPersonBo> dmdPersonBos = userTrainInfoController.searchList(form);
			downLoadUserTrainService.exportResult(fileInfo, i * limit, dmdPersonBos);
		}
		return fileInfo.getName();
	}

	public UserTrainInfoSearchForm queryExport(HttpServletRequest request) {

		UserTrainInfoSearchForm form = new UserTrainInfoSearchForm();
		form.setUserName(request.getParameter("name"));
		form.setUserSn(request.getParameter("sn"));
		String year = request.getParameter("year");
		if (StringUtils.isNotBlank(year)) {
			form.setYear(Integer.parseInt(year));
		}
		form.setOrgId(request.getParameter("dep_id"));
		String urgentLevel = request.getParameter("urgentLevel");
		if (StringUtils.isNotBlank(urgentLevel)) {
			form.setUrgentLevel(Integer.parseInt(urgentLevel));
		}
		String category = request.getParameter("category");
		if (StringUtils.isNotBlank(category)) {
			form.setCategory(Integer.parseInt(category));
		}
		return form;
	}
}
