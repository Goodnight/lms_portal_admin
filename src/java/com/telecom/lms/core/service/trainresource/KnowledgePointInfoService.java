/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-10 - 下午2:45:41
 */
package com.telecom.lms.core.service.trainresource;

import java.util.List;

import com.telecom.lms.core.bo.resources.KnowledgePointBo;
import com.telecom.lms.core.model.trainresource.KnowledgePointInfoSearchForm;

/**
 * @since 2013-9-10
 * @author zhangpengsh@gmail.com
 * 
 */
public interface KnowledgePointInfoService {
	
	List<KnowledgePointBo> find(KnowledgePointInfoSearchForm form);

	Integer count(KnowledgePointInfoSearchForm form);
}
