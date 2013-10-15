/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-23 - 下午4:14:24
 */
package com.telecom.lms.core.controller.trainclass;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.train.TrainClassStudentBo;
import com.telecom.lms.core.model.trainclass.TrainClassStudentInfoSearchForm;
import com.telecom.lms.core.service.trainclass.TrainClassStudentInfoService;

/**
 * @since 2013-9-23
 * @author zhangpengsh@gmail.com
 */
@Controller
public class TrainClassStudentInfoController {

	@Resource
	private TrainClassStudentInfoService trainClassStudentInfoService;
	
	public int searchCount(TrainClassStudentInfoSearchForm form){
		
		return trainClassStudentInfoService.count(form);
	}
	
	public List<TrainClassStudentBo> searchList(TrainClassStudentInfoSearchForm form) {
		
		return trainClassStudentInfoService.find(form);
	}
}
