package com.telecom.lms.portal.admin.control.trainclass;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.telecom.lms.core.bo.model.ExportInfoBo;
import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.core.bo.train.TrainClassStudentBo;
import com.telecom.lms.core.controller.trainclass.DispatchTrainClassInfoController;
import com.telecom.lms.core.model.trainclass.TrainClassStudentInfoSearchForm;
import com.telecom.lms.sdk.service.down.trainclass.DownLoadDispatchTrainClassService;
import com.telecom.lms.sdk.util.OtherUtil;

@Controller
@RequestMapping("/dispatchtrainclass")
public class DispatchTrainClassCtr {

	private @Value("#{export.dispatchTrainClassStudent_exportLimit}")
	Integer limit;

	private @Value("#{export.dispatchTrainClassStudent_exportMax}")
	Integer max;

	@Resource
	DispatchTrainClassInfoController dispatchTrainClassInfoController;

	@Autowired
	DownLoadDispatchTrainClassService downLoadDispatchTrainClassService;

	@RequestMapping(value = "exportStudentCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportCoursewareCount(HttpServletRequest request, HttpServletResponse response) {

		TrainClassStudentInfoSearchForm form = this.queryStudentExport(request);
		Integer count = dispatchTrainClassInfoController.searchStudentCount(form);

		System.out.println("##################           " + count);
		ExportInfoBo exportInfoBo = new ExportInfoBo();
		exportInfoBo.setCount(count);
		if (count > max) {
			exportInfoBo.setFlag("confirm");
		}
		return exportInfoBo;
	}

	@RequestMapping(value = "exportStudentList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportCoursewarList(HttpServletRequest request, HttpServletResponse response) {

		TrainClassStudentInfoSearchForm form = this.queryStudentExport(request);
		form.setMax(limit);

		Integer count = Integer.parseInt(request.getParameter("count"));
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = OtherUtil.getExportPath(address, "dispatchTrainClass");

		for (int i = 0; i <= count / limit; i++) {
			form.setPage(i * limit);
			List<TrainClassStudentBo> list = dispatchTrainClassInfoController.searchStudentList(form);
			downLoadDispatchTrainClassService.exportDispatchTrainClassStudentResult(fileInfo, i * limit, list);
		}
		return fileInfo.getName();
	}

	public TrainClassStudentInfoSearchForm queryStudentExport(HttpServletRequest request) {

		TrainClassStudentInfoSearchForm form = new TrainClassStudentInfoSearchForm();
		form.setTrainClassId(request.getParameter("tcid"));
		form.setUseSn(request.getParameter("user_sn"));
		form.setUseName(request.getParameter("user_name"));
		return form;
	}
}
