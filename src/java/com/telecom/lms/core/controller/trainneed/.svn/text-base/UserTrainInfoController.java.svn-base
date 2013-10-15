/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-10-11 - 上午10:54:53
 */
package com.telecom.lms.core.controller.trainneed;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.telecom.lms.core.bo.demand.DmdPersonBo;
import com.telecom.lms.core.bo.demand.DmdPersonItemBo;
import com.telecom.lms.core.model.trainneed.UserTrainInfoSearchForm;
import com.telecom.lms.core.service.trainneed.UserTrainInfoService;

/**
 * @since 2013-10-11
 * @author zhangpengsh@gmail.com
 */
@Controller
public class UserTrainInfoController {

	@Resource
	private UserTrainInfoService userTrainInfoService;

	public int searchCount(UserTrainInfoSearchForm form) {

		return userTrainInfoService.countPerson(form);
	}

	public List<DmdPersonBo> searchList(UserTrainInfoSearchForm form) {

		List<DmdPersonBo> list = new ArrayList<DmdPersonBo>();
		List<DmdPersonBo> dmdPersonBos = userTrainInfoService.findPerson(form);
		Map<String, List<DmdPersonItemBo>> map = searchPersonItemList(dmdPersonBos);
		for (DmdPersonBo dmdPersonBo : dmdPersonBos) {
			if (map.containsKey(dmdPersonBo.getDpId())) {
				dmdPersonBo.setDpis(map.get(dmdPersonBo.getDpId()));
			}
			list.add(dmdPersonBo);
		}
		return list;
	}

	private Map<String, List<DmdPersonItemBo>> searchPersonItemList(List<DmdPersonBo> dmdPersonBos) {
		
		if(null == dmdPersonBos || dmdPersonBos.isEmpty()){
			return null;
		}
		Map<String, List<DmdPersonItemBo>> map = new HashMap<String, List<DmdPersonItemBo>>();
		List<DmdPersonItemBo> dmdPersonItemBos = userTrainInfoService.findPersonItem(dmdPersonBos);
		for (DmdPersonItemBo dmdPersonItemBo : dmdPersonItemBos) {

			if (map.containsKey(dmdPersonItemBo.getDmd_dpId())) {
				List<DmdPersonItemBo> list = map.get(dmdPersonItemBo.getDmd_dpId());
				list.add(dmdPersonItemBo);
			} else {
				List<DmdPersonItemBo> list = new ArrayList<DmdPersonItemBo>();
				list.add(dmdPersonItemBo);
				map.put(dmdPersonItemBo.getDmd_dpId(), list);
			}
		}
		return map;
	}
}
