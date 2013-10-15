package com.telecom.lms.core.controller.trainclass;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.train.TrainClassStudentBo;
import com.telecom.lms.core.model.trainclass.TrainClassStudentInfoSearchForm;
import com.telecom.lms.core.service.trainclass.TrainClassStudentInfoService;

@Controller
public class DispatchTrainClassInfoController {

	
	@Resource
	private TrainClassStudentInfoService trainClassStudentInfoService;
	
	public Integer searchStudentCount(TrainClassStudentInfoSearchForm form) {

		return trainClassStudentInfoService.count2(form);
	}
	
	public List<TrainClassStudentBo> searchStudentList(TrainClassStudentInfoSearchForm form) {

		return trainClassStudentInfoService.find2(form);
	}
	
}
