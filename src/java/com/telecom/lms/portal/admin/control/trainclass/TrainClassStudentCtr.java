/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-26 - 下午5:31:35
 */
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
import com.telecom.lms.core.bo.train.TrainClassStudentBo;
import com.telecom.lms.core.controller.trainclass.TrainClassStudentInfoController;
import com.telecom.lms.core.model.trainclass.TrainClassStudentInfoSearchForm;
import com.telecom.lms.sdk.service.down.trainclass.DownLoadTrainClassStudentService;
import com.telecom.lms.sdk.util.FileInfoUtil;

/**
 * @since 2013-9-26
 * @author zhangpengsh@gmail.com
 * 
 */
@Controller
@RequestMapping("/trainclassstudent")
public class TrainClassStudentCtr {
	
	private static final Logger log = LoggerFactory.getLogger(TrainClassStudentCtr.class);

	private @Value("#{export.trainClassStudent_exportLimit}")
	Integer limit;

	private @Value("#{export.trainClassStudent_exportMax}")
	Integer max;
	
	@Autowired
	DownLoadTrainClassStudentService trainClassStudentService;
	
	@Resource
	TrainClassStudentInfoController trainClassStudentInfoController;

	@RequestMapping(value = "exportCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportCount(HttpServletRequest request, HttpServletResponse response) {

		TrainClassStudentInfoSearchForm form = this.queryExport(request);

		int count = trainClassStudentInfoController.searchCount(form);

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

		TrainClassStudentInfoSearchForm form = this.queryExport(request);
		form.setMax(limit);

		int count = Integer.parseInt(request.getParameter("count"));

		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = FileInfoUtil.getFileInfo(address, "trainClassStudent");

		for (int i = 0; i <= count / limit; i++) {
			form.setPage(i * limit);
			List<TrainClassStudentBo> trainClassStudentBos = trainClassStudentInfoController.searchList(form);
			trainClassStudentService.exportResult(fileInfo, i * limit, trainClassStudentBos);
		}
		return fileInfo.getName();
	}
	
	private TrainClassStudentInfoSearchForm queryExport(HttpServletRequest request){
		
		TrainClassStudentInfoSearchForm form = new TrainClassStudentInfoSearchForm();
		form.setTrainClassId(request.getParameter("tcid"));
		form.setUseName(request.getParameter("name"));
		form.setUseSn(request.getParameter("sn"));
		form.setDepId(request.getParameter("depid"));
		form.setApplyWay(request.getParameter("applyway"));
		form.setMobile(request.getParameter("mobile"));
		
		return form;
	}
}
