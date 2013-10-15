/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-8-30 - 下午3:51:37
 */
package com.telecom.lms.core.service.basedata;

import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.model.basedata.OrganizationInfoSearchForm;

/**
 * @since 2013-8-30
 * @author zhangpengsh@gmail.com
 * 
 */
public interface OrganizationInfoService {
	
	OrganizationBo get(OrganizationInfoSearchForm form);
}
