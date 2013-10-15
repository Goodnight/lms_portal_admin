/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-8-30 - 下午4:32:14
 */
package com.telecom.lms.core.controller.basedata;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.model.basedata.OrganizationInfoSearchForm;
import com.telecom.lms.core.service.basedata.OrganizationInfoService;

/**
 * @since 2013-8-30
 * @author zhangpengsh@gmail.com
 * 
 */
@Controller
public class OrganizationInfoController {
	
	@Resource
	private OrganizationInfoService organizationInfoService;
	
	public OrganizationBo get(OrganizationInfoSearchForm form){
		
		return organizationInfoService.get(form);
	}	

}
