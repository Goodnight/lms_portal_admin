/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-22 - 上午11:11:32
 */
package com.telecom.lms.core.controller.basedata;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.model.basedata.UserInfoSearchForm;
import com.telecom.lms.core.service.basedata.UsersInfoService;

/**
 * @since 2013-9-22
 * @author zhangpengsh@gmail.com
 * 
 */
@Controller
public class UserInfoController {
	
	@Resource
	private UsersInfoService usersInfoService;
	
	public int searchCount(UserInfoSearchForm form) {

		return usersInfoService.count(form);
	}
	
	public List<UserInfoBo> searchList(UserInfoSearchForm form) {

		return usersInfoService.find(form);
	}
}
