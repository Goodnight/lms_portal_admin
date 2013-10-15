/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-8-28 - 下午5:03:15
 */
package com.telecom.lms.core.controller.trainresource;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.resources.ResBaseBo;
import com.telecom.lms.core.model.trainresource.TrainResourceInfoSearchForm;
import com.telecom.lms.core.service.trainresource.TrainResourceInfoService;

/**
 * @since 2013-8-28
 * @author zhangpengsh@gmail.com
 * 
 */
@Controller
public class TrainResourceInfoController {

	@Resource
	private TrainResourceInfoService trainResourceInfoService;
	
	public List<ResBaseBo> searchList(TrainResourceInfoSearchForm form){
		
		return trainResourceInfoService.find(form);
	}

	public Integer searchCount(TrainResourceInfoSearchForm form){
		
		return trainResourceInfoService.count(form);
	}
}
