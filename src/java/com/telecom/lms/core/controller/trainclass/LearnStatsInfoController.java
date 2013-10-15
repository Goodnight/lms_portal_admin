package com.telecom.lms.core.controller.trainclass;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.learn.LearnStatsBo;
import com.telecom.lms.core.bo.resources.CoursewareBo;
import com.telecom.lms.core.bo.resources.ResBaseBo;
import com.telecom.lms.core.bo.train.CourseStatsBo;
import com.telecom.lms.core.bo.train.TrainClassStudentBo;
import com.telecom.lms.core.bo.train.TrainResourceBo;
import com.telecom.lms.core.model.trainclass.LearnStatsInfoSearchForm;
import com.telecom.lms.core.model.trainclass.TrainClassStudentInfoSearchForm;
import com.telecom.lms.core.service.trainclass.LearnStatsInfoService;
import com.telecom.lms.core.service.trainclass.TrainClassStudentInfoService;
import com.telecom.lms.core.service.trainclass.TrainResourceInfoService;

@Controller
public class LearnStatsInfoController {

	@Resource
	private TrainResourceInfoService trainResourceInfoService;

	@Resource
	private LearnStatsInfoService learnStatsInfoService;

	@Resource
	private TrainClassStudentInfoService trainClassStudentInfoService;

	public Integer searchCourseCount(LearnStatsInfoSearchForm form) {

		return trainResourceInfoService.count(form);
	}

	public String[] getUserIdArg(TrainClassStudentInfoSearchForm trainClassStudentInfoSearchForm) {

		List<TrainClassStudentBo> trainClassStudentBos = trainClassStudentInfoService.find2(trainClassStudentInfoSearchForm);
		String[] userId = new String[trainClassStudentBos.size()];
		int i = 0;
		for (TrainClassStudentBo trainClassStudentBo : trainClassStudentBos) {

			UserInfoBo userInfoBo = trainClassStudentBo.getStudent();
			if (null != userInfoBo) {
				userId[i] = userInfoBo.getUid();
				i++;
			}
		}
		return userId;
	}

	public List<CourseStatsBo> getCourseLearnStats(LearnStatsInfoSearchForm learnStatsInfoSearchForm,
			TrainClassStudentInfoSearchForm trainClassStudentInfoSearchForm) {

		List<TrainResourceBo> trainResourceBos = trainResourceInfoService.find(learnStatsInfoSearchForm);

		String[] userId = getUserIdArg(trainClassStudentInfoSearchForm);

		learnStatsInfoSearchForm.setUserId(userId);

		Map<String, CourseStatsBo> map = searchCourseLearnStats(learnStatsInfoSearchForm);
		List<CourseStatsBo> list = new ArrayList<CourseStatsBo>();
		for (TrainResourceBo trainResourceBo : trainResourceBos) {

			CoursewareBo coursewareBo = trainResourceBo.getResCw();
			if (null != coursewareBo) {

				CourseStatsBo courseStatsBo = map.get(coursewareBo.getcId());
				if (null == courseStatsBo) {
					courseStatsBo = new CourseStatsBo();
				}

				ResBaseBo resBaseBo = coursewareBo.getRes();
				if (null != resBaseBo) {
					courseStatsBo.setSn(resBaseBo.getSn());
					courseStatsBo.setName(resBaseBo.getName());
				}
				list.add(courseStatsBo);
			}
		}
		return list;
	}

	public Map<String, CourseStatsBo> searchCourseLearnStats(LearnStatsInfoSearchForm form) {

		List<LearnStatsBo> learnStatsBos = learnStatsInfoService.find(form);
		Map<String, CourseStatsBo> map = new HashMap<String, CourseStatsBo>();
		for (LearnStatsBo learnStatsBo : learnStatsBos) {

			CoursewareBo coursewareBo = learnStatsBo.getCourse();
			if (null != coursewareBo) {

				CourseStatsBo courseStatsBo = map.get(coursewareBo.getcId());
				if (null == courseStatsBo) {
					courseStatsBo = new CourseStatsBo();
				}

				courseStatsBo.setStudents((courseStatsBo.getStudents() == null ? 0 : courseStatsBo.getStudents()) + 1);
				if (null != learnStatsBo.getPercent() && learnStatsBo.getPercent() >= 100) {
					courseStatsBo.setComplete((courseStatsBo.getComplete() == null ? 0 : courseStatsBo.getComplete()) + 1);
				}
				if (null != learnStatsBo.getDuration()) {
					courseStatsBo.setHours((courseStatsBo.getHours() == null ? 0L : courseStatsBo.getHours())
							+ learnStatsBo.getDuration());
				}
				map.put(coursewareBo.getcId(), courseStatsBo);
			}
		}
		return map;
	}
}
