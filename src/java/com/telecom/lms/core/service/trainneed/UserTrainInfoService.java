/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-10-9 - 下午4:33:43
 */
package com.telecom.lms.core.service.trainneed;

import java.util.List;

import com.telecom.lms.core.bo.demand.DmdPersonBo;
import com.telecom.lms.core.bo.demand.DmdPersonItemBo;
import com.telecom.lms.core.model.trainneed.UserTrainInfoSearchForm;

/**
 * @since 2013-10-9
 * @author zhangpengsh@gmail.com
 * 
 */
public interface UserTrainInfoService {
	
	List<DmdPersonBo> findPerson(UserTrainInfoSearchForm form);

	int countPerson(UserTrainInfoSearchForm form);
	
	List<DmdPersonItemBo> findPersonItem(List<DmdPersonBo> dmdPersonBos);
	
//	dmd_person_item
}
