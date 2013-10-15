/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-4 - 下午5:44:27
 */
package com.telecom.lms.core.service.trainresource;

import java.util.List;

import com.telecom.lms.core.bo.resources.CaseBo;
import com.telecom.lms.core.model.trainresource.CaseResourceInfoSearchForm;

/**
 * @since 2013-9-4
 * @author zhangpengsh@gmail.com
 * 
 */
public interface CaseResourceInfoService {

	List<CaseBo> find(CaseResourceInfoSearchForm form);

	Integer count(CaseResourceInfoSearchForm form);
}
