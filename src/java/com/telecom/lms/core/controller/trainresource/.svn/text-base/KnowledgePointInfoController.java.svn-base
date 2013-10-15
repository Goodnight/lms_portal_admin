/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-10 - 下午5:49:38
 */
package com.telecom.lms.core.controller.trainresource;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.resources.KnowledgePointBo;
import com.telecom.lms.core.model.trainresource.KnowledgePointInfoSearchForm;
import com.telecom.lms.core.service.trainresource.KnowledgePointInfoService;

/**
 * @since 2013-9-10
 * @author zhangpengsh@gmail.com
 * 
 */
@Controller
public class KnowledgePointInfoController {
	
	@Resource
	private KnowledgePointInfoService knowledgePointInfoService;
	
	public List<KnowledgePointBo> searchList(KnowledgePointInfoSearchForm form){
		
		return knowledgePointInfoService.find(form);
	}

	public Integer searchCount(KnowledgePointInfoSearchForm form){
		
		return knowledgePointInfoService.count(form);
	}
}
