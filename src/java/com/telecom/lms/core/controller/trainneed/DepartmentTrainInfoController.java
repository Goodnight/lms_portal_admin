package com.telecom.lms.core.controller.trainneed;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.demand.DmdDepBo;
import com.telecom.lms.core.model.trainneed.DepartmentTrainInfoSearchForm;
import com.telecom.lms.core.service.trainneed.DepartmentTrainInfoService;

@Controller
public class DepartmentTrainInfoController {

	@Resource
	private DepartmentTrainInfoService departmentTrainInfoService;

	public int searchCount(DepartmentTrainInfoSearchForm form) {

		return departmentTrainInfoService.count(form);
	}

	public List<DmdDepBo> searchList(DepartmentTrainInfoSearchForm form) {

		return departmentTrainInfoService.find(form);
	}
}
