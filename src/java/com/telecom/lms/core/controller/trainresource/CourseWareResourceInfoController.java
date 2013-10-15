/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-4 - 下午5:44:07
 */
package com.telecom.lms.core.controller.trainresource;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.resources.CoursewareBo;
import com.telecom.lms.core.model.trainresource.CourseWareResourceInfoSearchForm;
import com.telecom.lms.core.service.trainresource.CourseWareResourceInfoService;

/**
 * @since 2013-9-4
 * @author zhangpengsh@gmail.com
 * 
 */
@Controller
public class CourseWareResourceInfoController {

	@Resource
	private CourseWareResourceInfoService courseWareResourceInfoService;
	
	public List<CoursewareBo> searchList(CourseWareResourceInfoSearchForm form){
		
		return courseWareResourceInfoService.find(form);
	}

	public Integer searchCount(CourseWareResourceInfoSearchForm form){
		
		return courseWareResourceInfoService.count(form);
	}
}
