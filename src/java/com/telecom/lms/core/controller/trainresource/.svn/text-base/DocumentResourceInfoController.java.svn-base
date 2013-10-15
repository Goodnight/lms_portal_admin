/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-4 - 上午10:58:59
 */
package com.telecom.lms.core.controller.trainresource;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.resources.DocBo;
import com.telecom.lms.core.model.trainresource.DocumentResourceInfoSearchForm;
import com.telecom.lms.core.service.trainresource.DocumentResourceInfoService;

/**
 * @since 2013-9-4
 * @author zhangpengsh@gmail.com
 * 
 */
@Controller
public class DocumentResourceInfoController {
	
	@Resource
	private DocumentResourceInfoService documentResourceInfoService;
	
	public List<DocBo> searchList(DocumentResourceInfoSearchForm form){
		
		return documentResourceInfoService.find(form);
	}

	public Integer searchCount(DocumentResourceInfoSearchForm form){
		
		return documentResourceInfoService.count(form);
	}
}
