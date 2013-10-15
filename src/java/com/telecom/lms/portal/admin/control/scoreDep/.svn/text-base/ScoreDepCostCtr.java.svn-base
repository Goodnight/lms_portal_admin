package com.telecom.lms.portal.admin.control.scoreDep;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.reward.ScoreDepCostBo;
import com.telecom.lms.core.bo.reward.ScoreDepCostCon;
import com.telecom.lms.core.bo.reward.ScoreDepCostUsersCon;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.reward.ScoreDepCostService;
import com.telecom.lms.sdk.service.reward.ScoreDepCostUsersService;
import com.telecom.lms.sdk.service.train.TrainTypeService;

@Controller
@RequestMapping("/rewardScoreDepCost")
public class ScoreDepCostCtr {

	@Autowired
	ScoreDepCostService scoreDepCostService;
	@Autowired
	ScoreDepCostUsersService scoreDepCostUsersService;
	@Autowired
	TrainTypeService trainTypeService;
	@Autowired
	OrganizationService organizationService;

	/**
	 * 指定部门使用积分列表
	 */
	@RequestMapping(value = "scoreDepCostList.html", method = RequestMethod.GET)
	public ModelAndView inquiryScoreDepCost(@RequestParam("depId") String depId,
			HttpServletRequest req,
			HttpServletResponse res,
			ModelMap model) {
		model.put("depId", depId);
		return new ModelAndView("scoreDep/scoreDepCostList", model);
	}

	/**
	 * 部门积分申请兑换列表
	 */
	@RequestMapping(value = "scoreDepCostApplyList.html", method = RequestMethod.GET)
	public ModelAndView inquiryScoreDepApplyCost(@RequestParam("depId") String depId,
			HttpServletRequest req,
			HttpServletResponse res,
			ModelMap model) {
		model.put("depId", depId);

		OrganizationBo o = organizationService.getOrganization(depId);
		String orgName = o.getName();
		model.put("orgName", orgName);
		return new ModelAndView("scoreDep/scoreDepCostApply", model);
	}

	//跳转部门积分申请
	@RequestMapping(value = "toAddCostScoreDep.html", method = RequestMethod.GET)
	public ModelAndView toScoreDepUsed(@RequestParam(required = false) String depId,
			@RequestParam("orgName") String orgName,
			ModelMap model) {

		List<SysParamBo> gainTypeList = trainTypeService.getGainType();
		List<SysParamBo> rewardCostList = trainTypeService.getRewardCostType();
		model.put("depId", depId);
		model.put("orgName", orgName);
		model.put("gainTypeList", gainTypeList);
		model.put("rewardCostList", rewardCostList);
		return new ModelAndView("scoreDep/addCostScoreDep", model);
	}

	//添加部门申请使用积分
	@RequestMapping(value = "doAddScoreDepCost.html", method = RequestMethod.POST)
	public String doAddScoreDepCost(ScoreDepCostCon con, HttpServletRequest req, ModelMap model) {

		String depId = req.getParameter("depId");
		String[] userIds = req.getParameterValues("userIds");
		
		String user_id = req.getParameter("user_id");//debug:gaoxinlong
		con.setAuditor_id(user_id); //debug:gaoxinlong	

		con.setDep_id(depId);
		con.setStauts(0);

		Return re = scoreDepCostService.saveAndUpdateScoreDepCost(con);
		ScoreDepCostUsersCon tpb = new ScoreDepCostUsersCon();
		tpb.setDepCost_id(re.getCode());
		if (userIds != null) {
			String user_Ids = "";
				for (int i = 0; i < userIds.length; i++) {
					if (userIds[i] != null && !"".equals(userIds[i])) {
						user_Ids += userIds[i] + ",";
					}
				}
			
			tpb.setUser_id(user_Ids);
			scoreDepCostUsersService.saveAndUpdateScoreDepCostUserAll(tpb);
		}

		String next = req.getParameter("_next");
		String back = req.getParameter("_back");

		if (next != null && !next.equals("")) {
			return "redirect:scoreDepCostApplyList.html?depId=" + depId;
		} else if (back != null && !back.equals("")) {
			return "redirect:scoreDepCostApplyList.html?depId=" + depId;
		} else {
			ScoreDepCostBo sc = scoreDepCostService.getScoreDepCost(con.getSdcId());

			model.put("sc", sc);
			return "forward:toAddCostScoreDep.html";
		}
	}

	/**
	 * 所有部门兑换审批积分列表
	 */
	@RequestMapping(value = "scoreDepCostAllApplyList.html", method = RequestMethod.GET)
	public ModelAndView inquiryScoreDepAllApplyCost(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		String depId = req.getParameter("depId");
		model.put("depId", depId);
		return new ModelAndView("scoreDep/scoreDepCostAllApplyList", model);
	}

	/**
	 * 所有部门兑换审批批准
	 */
	@RequestMapping(value = "updateScoreDep.html", method = RequestMethod.POST)
	@ResponseBody
	public String updateScoreDep(HttpServletRequest request, ModelMap model) {
		String[] sdcIds = request.getParameterValues("groupTypeId");
		String depId = request.getParameter("depId");
		System.out.print("部门ID为" + depId);
		String scoreC = request.getParameter("score");
		Integer score = Integer.parseInt(scoreC);
		for (String sdcId : sdcIds) {
			ScoreDepCostCon sc = new ScoreDepCostCon();
			sc.setSdcId(sdcId);
			sc.setStauts(1);
			sc.setDep_id(depId);
			sc.setScore(score);
			scoreDepCostService.saveAndUpdateScoreDepCost(sc);
		}
		return null;
	}

	/**
	 * 所有部门兑换审批不批准
	 */
	@RequestMapping(value = "updateScoreDepForNo.html", method = RequestMethod.POST)
	@ResponseBody
	public String updateScoreDepForNo(HttpServletRequest request, ModelMap model) {
		String[] sdcIds = request.getParameterValues("groupTypeId");
		for (String sdcId : sdcIds) {
			ScoreDepCostCon sc = new ScoreDepCostCon();
			sc.setSdcId(sdcId);
			sc.setStauts(2);
			scoreDepCostService.saveAndUpdateScoreDepCost(sc);
		}
		return null;
	}

	/**
	 * 指定部门兑换审批批准
	 */
	@RequestMapping(value = "updateScoreDepById.html", method = RequestMethod.POST)
	@ResponseBody
	public String updateScoreDepById(HttpServletRequest request, ModelMap model) {
		String depId = request.getParameter("depId");
		String sdcId = request.getParameter("sdcId");
		String scoreBy = request.getParameter("score");
		Integer score = Integer.parseInt(scoreBy);
		ScoreDepCostCon sc = new ScoreDepCostCon();
		sc.setSdcId(sdcId);
		sc.setStauts(1);
		sc.setDep_id(depId);
		sc.setScore(score);
		scoreDepCostService.saveAndUpdateScoreDepCost(sc);
		return null;
	}

	/**
	 * 指定部门兑换审批不批准
	 */
	@RequestMapping(value = "updateScoreDepForNoById.html", method = RequestMethod.POST)
	@ResponseBody
	public String updateScoreDepForNoById(HttpServletRequest request, ModelMap model) {
		String sdcId = request.getParameter("sdcId");
		ScoreDepCostCon sc = new ScoreDepCostCon();
		sc.setSdcId(sdcId);
		sc.setStauts(2);
		scoreDepCostService.saveAndUpdateScoreDepCost(sc);
		return null;
	}

	/**
	 * 查看积分兑换申请详情
	 */
	@RequestMapping(value = "scoreDepCostById.html", method = RequestMethod.GET)
	public ModelAndView inquiryScoreDepCostById(@RequestParam("sdcId") String sdcId,
			@RequestParam("depId") String depId,
			ModelMap model) {
		ScoreDepCostBo scoreDepCost = scoreDepCostService.getScoreDepCost(sdcId);
		model.put("scoreDepCost", scoreDepCost);
		Map<String, String> con = new HashMap<String, String>();
		con.put("sdcId", sdcId);
		con.put("depId", depId);
		return new ModelAndView("scoreDep/scoreDepCostCostById", model);
	}

	//新增基础积分
	@RequestMapping(value = "doSaveScoreDepCost.html", method = RequestMethod.POST)
	public String doSaveCoursewareDetails(ScoreDepCostCon con, HttpServletRequest req, ModelMap model) {
		String depIds = req.getParameter("dep_id");
		String[] depId = depIds.split(",");
		for (int i = 0; i < depId.length; i++) {
			con.setDep_id(depId[i]);
		}
		Return re = scoreDepCostService.saveAndUpdateScoreDepCost(con);
		ScoreDepCostBo scoreDepCost = scoreDepCostService.getScoreDepCost(con.getSdcId());
		model.put("scoreDepCost", scoreDepCost);
		return "redirect:scoreDepCostList.html";
	}
}