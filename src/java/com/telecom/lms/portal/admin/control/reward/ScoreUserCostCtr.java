package com.telecom.lms.portal.admin.control.reward;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.reward.ScoreDepBo;
import com.telecom.lms.core.bo.reward.ScoreUserCostBo;
import com.telecom.lms.core.bo.reward.ScoreUserGainBo;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.auth.param.UserInfoParam;
import com.telecom.lms.sdk.service.reward.ScoreUserCostService;
import com.telecom.lms.sdk.service.train.TrainTypeService;

@Controller
@RequestMapping("/rewardScoreUserCost")
public class ScoreUserCostCtr {

	@Autowired ScoreUserCostService scoreUserCostService;
	@Autowired TrainTypeService tpService;
	@Autowired UserInfoService userInfoService;
	@Autowired OrganizationService organizationService;
	
	/**
	 * 个人使用积分
	 */
	@RequestMapping(value="scoreUserCostList.html",method=RequestMethod.GET)
	public ModelAndView inquiryScoreUserCost(@RequestParam("uid") String uid,HttpServletRequest req,HttpServletResponse res,ModelMap model){
		model.put("uid", uid);
		List<SysParamBo> rewardCostList = tpService.getCostType();
		model.put("rewardCostList", rewardCostList);
		return new ModelAndView("scoreUser/useThePoints", model);
	}
	
	/**
	 * 个人积分兑换申请详情
	 */
	   @RequestMapping(value="toScoreUserCostById.html",method=RequestMethod.GET)
	   public ModelAndView getScoreUserCostById(@RequestParam("sucId") String sucId,@RequestParam("uid") String uid,ModelMap model){
		   ScoreUserCostBo scoreUserCost = scoreUserCostService.getScoreUserCost(sucId);
		   model.put("scoreUserCost", scoreUserCost);
		   model.put("sucId", sucId);
		   model.put("uid", uid);
		   UserInfoParam p = new UserInfoParam();
		   p.setId(uid);
		   UserInfoBo user = userInfoService.getUserInfo(p);
		   //查看指定用户所在部门 的剩余积分
		   String orgId = user.getOrg().getOrgId();
		   OrganizationBo organizationBo = organizationService.getOrganization(orgId);
		   String orgName = organizationBo.getName();
		   model.put("orgName", orgName);
		   return new ModelAndView("scoreUser/rewardApplyInformation", model);
	  }
}
