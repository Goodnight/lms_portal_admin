/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-4 - 下午2:37:48
 */
package com.telecom.lms.core.controller.trainresource;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.resources.KnowledgeCategoryBo;
import com.telecom.lms.core.model.trainresource.KnowledgeCategoryInfoSearchForm;
import com.telecom.lms.core.service.trainresource.KnowledgeCategoryInfoService;

/**
 * @since 2013-9-4
 * @author zhangpengsh@gmail.com
 */
@Controller
public class KnowledgeCategoryInfoController {

	@Resource
	private KnowledgeCategoryInfoService knowledgeCategoryInfoService;

	public KnowledgeCategoryBo get(KnowledgeCategoryInfoSearchForm form){

		return knowledgeCategoryInfoService.get(form);
	}
}
