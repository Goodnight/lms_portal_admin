package com.telecom.lms.portal.admin.control.scoreDep;
//积分奖励管理
import java.util.HashMap;
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
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.reward.ScoreDepBo;
import com.telecom.lms.core.bo.reward.ScoreDepCon;
import com.telecom.lms.core.bo.reward.ScoreDepCostBo;
import com.telecom.lms.core.bo.reward.ScoreDepCostCon;
import com.telecom.lms.core.bo.reward.ScoreDepGainBo;
import com.telecom.lms.core.bo.reward.ScoreDepGainCon;
import com.telecom.lms.core.bo.reward.ScoreUserCostBo;
import com.telecom.lms.core.bo.reward.ScoreUserGainBo;
import com.telecom.lms.sdk.service.reward.ScoreDepGainService;

@Controller
@RequestMapping("/rewardScoreDepGain")
public class ScoreDepGainCtr {

	@Autowired ScoreDepGainService scoreDepGainService;
	/**
	 * 部门积分奖励
	 */
	@RequestMapping(value="scoreDepGainList.html",method=RequestMethod.GET)
	public ModelAndView inquiryScoreDepGain(@RequestParam("depId") String depId,HttpServletRequest req,HttpServletResponse res,ModelMap model){
		model.put("depId", depId);
		return new ModelAndView("scoreDep/scoreDepGainList", model);
	}
}