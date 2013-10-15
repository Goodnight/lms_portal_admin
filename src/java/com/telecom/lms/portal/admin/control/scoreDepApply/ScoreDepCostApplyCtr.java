package com.telecom.lms.portal.admin.control.scoreDepApply;

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

import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.reward.ScoreDepCostBo;
import com.telecom.lms.core.bo.reward.ScoreDepCostCon;
import com.telecom.lms.core.bo.reward.ScoreDepGainCon;
import com.telecom.lms.sdk.service.reward.ScoreDepCostService;


@Controller
@RequestMapping("/rewardScoreDepApplyCost")

public class ScoreDepCostApplyCtr {
	
	@Autowired ScoreDepCostService scoreDepCostService;
	/**
	 * 部门使用积分列表
	 */
	@RequestMapping(value="scoreDepCostApplyList.html",method=RequestMethod.GET)
	public ModelAndView inquiryScoreDepCostApply(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		
		return new ModelAndView("scoreDep/scoreDepCostApplyList", model);
	}
	
	//新增部门申请兑换积分
	   @RequestMapping(value="doSaveScoreDepGain.html",method=RequestMethod.POST)
		public String doSaveCoursewareDetails(ScoreDepCostCon con,HttpServletRequest req,ModelMap model){
		    String s = req.getParameter("depId");
		    con.setDep_id(s);
		    Return re = scoreDepCostService.saveAndUpdateScoreDepCost(con);
		    ScoreDepCostBo scoreDepCostBo = scoreDepCostService.getScoreDepCost(con.getSdcId());
			return "redirect:scoreDepCostApplyList.html";
			}
	
	
			
		}


