/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-18 - 下午3:59:19
 */
package com.telecom.lms.core.service.basedata;

import java.util.List;

import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.model.basedata.UserInfoSearchForm;

/**
 * @since 2013-9-18
 * @author zhangpengsh@gmail.com
 * 
 */
public interface UsersInfoService {

	List<UserInfoBo> find(UserInfoSearchForm form);
	
	int count(UserInfoSearchForm form);
}
