/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-23 - 下午4:14:24
 */
package com.telecom.lms.core.controller.trainclass;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.train.TrainClassApplyOrgBo;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.core.bo.train.TrainClassTeacherBo;
import com.telecom.lms.core.model.trainclass.TrainClassInfoSearchForm;
import com.telecom.lms.core.service.trainclass.TrainClassInfoService;

/**
 * @since 2013-9-23
 * @author zhangpengsh@gmail.com
 */
@Controller
public class TrainClassInfoController {

	@Resource
	private TrainClassInfoService trainClassInfoService;
	
	public int searchCountPlan(TrainClassInfoSearchForm form){
		
		return trainClassInfoService.countPlan(form);
	}
	
	public List<TrainClassBo> searchPlanList(TrainClassInfoSearchForm form) {
		
		List<TrainClassBo> trainClassBos = trainClassInfoService.findPlan(form);
		if (null == trainClassBos || trainClassBos.isEmpty()) {
			return null;
		}
		
		Map<String, String> userMap = findTeacherByIds(trainClassBos);
		List<TrainClassBo> list = new ArrayList<TrainClassBo>();
		for (TrainClassBo trainClassBo : trainClassBos) {

			String usernames = userMap.get(trainClassBo.getTcId());
			trainClassBo.setPrincipalsName(usernames);
			list.add(trainClassBo);
		}
		return list;
	}
	

	public int searchCountGeneral(TrainClassInfoSearchForm form) {

		return trainClassInfoService.countGeneral(form);
	}

	public List<TrainClassBo> searchGeneralList(TrainClassInfoSearchForm form) {

		List<TrainClassBo> trainClassBos = trainClassInfoService.findGeneral(form);
		if (null == trainClassBos || trainClassBos.isEmpty()) {
			return null;
		}

		Map<String, String> orgMap = findOrganizationByApplyIds(trainClassBos);
		Map<String, String> userMap = findTeacherByIds(trainClassBos);
		List<TrainClassBo> list = new ArrayList<TrainClassBo>();
		for (TrainClassBo trainClassBo : trainClassBos) {

			String orgnames = orgMap.get(trainClassBo.getApply_id());
			String usernames = userMap.get(trainClassBo.getTcId());
			trainClassBo.setApplyDepName(orgnames);
			trainClassBo.setPrincipalsName(usernames);
			list.add(trainClassBo);
		}
		return list;
	}

	public Map<String, String> findTeacherByIds(List<TrainClassBo> trainClassBos) {

		List<TrainClassTeacherBo> list = trainClassInfoService.findTeacherByIds(trainClassBos);
		Map<String, String> map = new HashMap<String, String>();
		for (TrainClassTeacherBo trainClassTeacherBo : list) {

			TrainClassBo trainClassBo = trainClassTeacherBo.getTclass();
			UserInfoBo userInfoBo = trainClassTeacherBo.getTeacher();
			if (map.containsKey(trainClassBo.getTcId())) {
				String orgname = map.get(trainClassBo.getTcId());
				map.put(trainClassBo.getTcId(), orgname + "," + userInfoBo.getName());
			} else {
				map.put(trainClassBo.getTcId(), userInfoBo.getName());
			}
		}
		return map;
	}

	public Map<String, String> findOrganizationByApplyIds(List<TrainClassBo> trainClassBos) {

		List<TrainClassApplyOrgBo> list = trainClassInfoService.findOrganizationByApplyIds(trainClassBos);
		Map<String, String> map = new HashMap<String, String>();
		for (TrainClassApplyOrgBo trainClassApplyOrgBo : list) {

			TrainClassBo trainClassBo = trainClassApplyOrgBo.getTrainClassBo();
			OrganizationBo organizationBo = trainClassApplyOrgBo.getOrganizationBo();
			if (map.containsKey(trainClassBo.getApply_id())) {
				String orgname = map.get(trainClassBo.getApply_id());
				map.put(trainClassBo.getApply_id(), orgname + "," + organizationBo.getName());
			} else {
				map.put(trainClassBo.getApply_id(), organizationBo.getName());
			}
		}
		return map;
	}
}
