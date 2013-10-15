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
import com.telecom.lms.core.bo.train.CourseStatsBo;
import com.telecom.lms.core.bo.train.StudentStatsBo;
import com.telecom.lms.core.controller.trainclass.LearnStatsInfoController;
import com.telecom.lms.core.model.trainclass.LearnStatsInfoSearchForm;
import com.telecom.lms.core.model.trainclass.TrainClassStudentInfoSearchForm;
import com.telecom.lms.sdk.service.down.trainclass.DownLoadLearnStatsService;
import com.telecom.lms.sdk.service.learn.LearnStatsService;
import com.telecom.lms.sdk.service.learn.param.LearnStatsInfoParam;
import com.telecom.lms.sdk.util.OtherUtil;

@Controller
@RequestMapping("/learnstats")
public class LearnStatsCtr {

	@Autowired
	DownLoadLearnStatsService downLoadLearnStatsServicel;

	@Autowired
	LearnStatsService learnStatsService;

	@Resource
	LearnStatsInfoController learnStatsInfoController;

	private @Value("#{export.learnStats_exportLimit}")
	Integer limit;

	private @Value("#{export.learnStats_exportMax}")
	Integer max;

	@RequestMapping(value = "exportCoursewareCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportCoursewareCount(HttpServletRequest request, HttpServletResponse response) {

		LearnStatsInfoSearchForm form = this.queryCoursewayExport(request);
		Integer count = learnStatsInfoController.searchCourseCount(form);

		System.out.println("##################           " + count);
		ExportInfoBo exportInfoBo = new ExportInfoBo();
		exportInfoBo.setCount(count);
		if (count > max) {
			exportInfoBo.setFlag("confirm");
		}
		return exportInfoBo;
	}

	@RequestMapping(value = "exportCoursewareList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportCoursewarList(HttpServletRequest request, HttpServletResponse response) {

		LearnStatsInfoSearchForm learnStatsInfoSearchForm = this.queryCoursewayExport(request);
		learnStatsInfoSearchForm.setMax(limit);

		TrainClassStudentInfoSearchForm trainClassStudentInfoSearchForm = queryStudent(request);

		Integer count = Integer.parseInt(request.getParameter("count"));
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = OtherUtil.getExportPath(address, "coursewareLearnStats");

		for (int i = 0; i <= count / limit; i++) {
			learnStatsInfoSearchForm.setPage(i * limit);
			List<CourseStatsBo> courseStatsBos = learnStatsInfoController.getCourseLearnStats(learnStatsInfoSearchForm,
				trainClassStudentInfoSearchForm);
			downLoadLearnStatsServicel.exportCourseLearnStatsResult(fileInfo, i * limit, courseStatsBos);
		}
		return fileInfo.getName();
	}

	@RequestMapping(value = "exportCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportCount(HttpServletRequest request, HttpServletResponse response) {

		LearnStatsInfoParam learnStatsInfoParam = this.queryUserExport(request);

		Integer count = learnStatsService.count(learnStatsInfoParam);

		System.out.println("count########################" + count);
		ExportInfoBo exportInfoBo = new ExportInfoBo();
		exportInfoBo.setCount(count);
		if (count > max) {
			exportInfoBo.setFlag("confirm");
		}
		return exportInfoBo;
	}

	/**
	 * 培训班中的人员学习统计列表
	 */
	@RequestMapping(value = "exportList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportList(HttpServletRequest request) {

		LearnStatsInfoParam learnStatsInfoParam = this.queryUserExport(request);
		learnStatsInfoParam.setMax(limit);

		Integer count = Integer.parseInt(request.getParameter("count"));
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = OtherUtil.getExportPath(address, "userLearnStats");

		for (int i = 1; i <= count / limit + 1; i++) {
			learnStatsInfoParam.setPage(i);
			List<StudentStatsBo> studentStatsBos = learnStatsService.find(learnStatsInfoParam);
			downLoadLearnStatsServicel.exportUserLearnStatsResult(fileInfo, (i - 1) * limit, studentStatsBos);
		}
		return fileInfo.getName();
	}

	public LearnStatsInfoSearchForm queryCoursewayExport(HttpServletRequest request) {

		LearnStatsInfoSearchForm form = new LearnStatsInfoSearchForm();
		form.setTrainClassId(request.getParameter("tcid"));
		form.setLogo(1);
		form.setType("1");
		form.setResourceStatus(1);
		return form;
	}

	public TrainClassStudentInfoSearchForm queryStudent(HttpServletRequest request) {

		TrainClassStudentInfoSearchForm form = new TrainClassStudentInfoSearchForm();
		form.setTrainClassId(request.getParameter("tcid"));
		return form;
	}

	public LearnStatsInfoParam queryUserExport(HttpServletRequest request) {

		String sn = request.getParameter("sn");
		String name = request.getParameter("name");
		String depid = request.getParameter("depid");
		String tcid = request.getParameter("tcid");

		LearnStatsInfoParam learnStatsInfoParam = new LearnStatsInfoParam();
		learnStatsInfoParam.setSn(sn);
		learnStatsInfoParam.setName(name);
		learnStatsInfoParam.setDep_id(depid);
		learnStatsInfoParam.setTcid(tcid);
		return learnStatsInfoParam;
	}
}
