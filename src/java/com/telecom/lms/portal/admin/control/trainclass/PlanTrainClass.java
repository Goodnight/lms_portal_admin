package com.telecom.lms.portal.admin.control.trainclass;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.core.controller.trainclass.TrainClassInfoController;
import com.telecom.lms.core.model.trainclass.TrainClassInfoSearchForm;
import com.telecom.lms.sdk.service.down.trainclass.DownLoadTrainClassService;
import com.telecom.lms.sdk.util.FileInfoUtil;

@Controller
@RequestMapping("/plantrainclass")
public class PlanTrainClass {

	private static final Logger log = LoggerFactory.getLogger(PlanTrainClass.class);

	private @Value("#{export.planTrainClass_exportLimit}")
	Integer limit;

	private @Value("#{export.planTrainClass_exportMax}")
	Integer max;

	@Autowired
	DownLoadTrainClassService downLoadTrainClassService;

	@Resource
	TrainClassInfoController trainClassInfoController;

	@RequestMapping(value = "exportCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportCount(HttpServletRequest request, HttpServletResponse response) {

		TrainClassInfoSearchForm form = this.queryExport(request);

		int count = trainClassInfoController.searchCountPlan(form);

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

		TrainClassInfoSearchForm form = this.queryExport(request);
		form.setMax(limit);

		int count = Integer.parseInt(request.getParameter("count"));

		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = FileInfoUtil.getFileInfo(address, "planTrainClass");

		for (int i = 0; i <= count / limit; i++) {
			form.setPage(i * limit);
			List<TrainClassBo> trainClassBos = trainClassInfoController.searchPlanList(form);
			downLoadTrainClassService.exportPlanResult(fileInfo, i * limit, trainClassBos);
		}
		return fileInfo.getName();
	}

	public TrainClassInfoSearchForm queryExport(HttpServletRequest request) {

		TrainClassInfoSearchForm form = new TrainClassInfoSearchForm();
		form.setPlan_id(request.getParameter("plan_id"));
		return form;
	}

}
