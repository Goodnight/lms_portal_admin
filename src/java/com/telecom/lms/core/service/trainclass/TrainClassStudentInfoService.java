package com.telecom.lms.core.service.trainclass;

import java.util.List;

import com.telecom.lms.core.bo.train.TrainClassStudentBo;
import com.telecom.lms.core.model.trainclass.TrainClassStudentInfoSearchForm;

public interface TrainClassStudentInfoService {

	List<TrainClassStudentBo> find2(TrainClassStudentInfoSearchForm form);

	Integer count2(TrainClassStudentInfoSearchForm form);

	List<TrainClassStudentBo> find(TrainClassStudentInfoSearchForm form);

	int count(TrainClassStudentInfoSearchForm form);
}
