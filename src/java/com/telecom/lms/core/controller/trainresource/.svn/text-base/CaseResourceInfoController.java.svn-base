/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-4 - 下午5:44:07
 */
package com.telecom.lms.core.controller.trainresource;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.resources.CaseBo;
import com.telecom.lms.core.model.trainresource.CaseResourceInfoSearchForm;
import com.telecom.lms.core.service.trainresource.CaseResourceInfoService;

/**
 * @since 2013-9-4
 * @author zhangpengsh@gmail.com
 * 
 */
@Controller
public class CaseResourceInfoController {

	@Resource
	private CaseResourceInfoService caseResourceInfoService;
	
	public List<CaseBo> searchList(CaseResourceInfoSearchForm form){
		
		return caseResourceInfoService.find(form);
	}

	public Integer searchCount(CaseResourceInfoSearchForm form){
		
		return caseResourceInfoService.count(form);
	}
}
