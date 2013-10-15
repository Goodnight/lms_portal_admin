/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-23 - 上午10:05:35
 */
package com.telecom.lms.core.service.trainclass;

import java.util.List;

import com.telecom.lms.core.bo.train.TrainClassApplyOrgBo;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.core.bo.train.TrainClassTeacherBo;
import com.telecom.lms.core.model.trainclass.TrainClassInfoSearchForm;

/**
 * @since 2013-9-23
 * @author zhangpengsh@gmail.com
 */
public interface TrainClassInfoService {

	List<TrainClassBo> findGeneral(TrainClassInfoSearchForm form);

	int countGeneral(TrainClassInfoSearchForm form);
	
	List<TrainClassBo> findPlan(TrainClassInfoSearchForm form);

	int countPlan(TrainClassInfoSearchForm form);
	
	List<TrainClassApplyOrgBo> findOrganizationByApplyIds(List<TrainClassBo> trainClassBos);
	
	List<TrainClassTeacherBo> findTeacherByIds(List<TrainClassBo> trainClassBos);
}
