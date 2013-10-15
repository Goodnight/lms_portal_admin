package com.telecom.lms.portal.admin.control.scoreDep;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
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

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.reward.ScoreDepBo;
import com.telecom.lms.core.bo.reward.ScoreDepCon;
import com.telecom.lms.core.bo.reward.ScoreDepCostBo;
import com.telecom.lms.core.bo.reward.ScoreDepCostCon;
import com.telecom.lms.core.bo.reward.ScoreDepGainBo;
import com.telecom.lms.core.bo.reward.ScoreDepGainCon;
import com.telecom.lms.core.bo.reward.ScoreUserCostBo;
import com.telecom.lms.core.bo.reward.ScoreUserCostCon;
import com.telecom.lms.core.bo.reward.common.ScoreGainCon;
import com.telecom.lms.core.bo.survey.tp.SurveyTpBo;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.Node;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.portal.admin.util.SessionConstants;
import com.telecom.lms.sdk.plugin.model.auth.Organization;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.reward.ScoreDepCostService;
import com.telecom.lms.sdk.service.reward.ScoreDepGainService;
import com.telecom.lms.sdk.service.reward.ScoreDepService;
import com.telecom.lms.sdk.service.train.TrainTypeService;

@Controller
@RequestMapping("/rewardScoreDep")
public class ScoreDepCtr {

	@Autowired
	ScoreDepService scoreDepService;
	@Autowired
	ScoreDepGainService scoreDepGainService;
	@Autowired
	ScoreDepCostService scoreDepCostService;
	@Autowired
	CommonService commonService;
	@Autowired
	TrainTypeService trainTypeService;
	@Autowired
	OrganizationService organizationService;

	/**
	 * 部门积分管理列表
	 */
	@RequestMapping(value = "scoreDepList.html", method = RequestMethod.GET)
	public ModelAndView inquiryScoreDep(HttpServletRequest req,
			HttpServletResponse res, ModelMap model) {
//		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		OrganizationBo organizationBo=  (OrganizationBo) req.getSession().getAttribute(SessionConstants.SESSION_DEFAULT_ORG);
		String depId = organizationBo.getOrgId();
		model.put("depId", depId);
		return new ModelAndView("scoreDep/scoreDepList", model);
	}

	/**
	 * 指定部门基础积分列表
	 */
	@RequestMapping(value = "scoreDepBaseList.html", method = RequestMethod.GET)
	public ModelAndView baseScoreDep(@RequestParam("depId") String depId,
			HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		model.put("depId", depId);
		return new ModelAndView("scoreDep/scoreDepBaseList", model);
	}

	// 跳转分配积分列表
	@RequestMapping(value = "toSaveScoreDep.html", method = RequestMethod.GET)
	public ModelAndView toSaveScoreDep(
			@RequestParam(required = false) String depId, ModelMap model) {
		List<SysParamBo> gainTypeList = trainTypeService.getGainType();
		model.put("depId", depId);
		model.put("gainTypeList", gainTypeList);
		return new ModelAndView("scoreDep/saveScoreDepGain", model);
	}

	// 新增部门基础积分
	@RequestMapping(value = "doSaveScoreDep.html", method = RequestMethod.POST)
	public String doSaveScoreDep(ScoreDepGainCon con, HttpServletRequest req,
			ModelMap model) {
		String[] dep_ids = req.getParameterValues("dep_ids"); //新增岗位ID.
		String orgIds = "";
		String orgNames="";
		Map<String,String>con_dp=new HashMap<String,String>();
		//获取当前年份
		Calendar cal = Calendar.getInstance();
		int year_1 = cal.get(Calendar.YEAR);
		String year=String.valueOf(year_1);
		con_dp.put("year", year);
		con_dp.put("type", "0");
		if(dep_ids!=null){
			for (int i=0;i<dep_ids.length;i++)
			{
				if (dep_ids[i] != null && !"".equals(dep_ids[i])) {
					con_dp.put("dep_id", dep_ids[i]);
					Collection<ScoreDepGainBo> ScoreGainlist=new Collection<ScoreDepGainBo>();
					ScoreGainlist=scoreDepGainService.getScoreDepGains(con_dp, PagerTool.getPageNo(req),PagerTool.getPageSize(req));
					if(ScoreGainlist.getPage().getRecords()==0)
					{
						orgIds += dep_ids[i] + ",";
					}
					else
					{
						orgNames+=dep_ids[i]+",";
						//return "redirect:errorforscoreGain.html?orgNames="+orgNames ;
					}
				}
			}
			if(!orgNames.equals(""))
			{
				return "redirect:errorforscoreGain.html?orgNames="+orgNames ;
			}
		}
		con.setDep_id(orgIds);
		GregorianCalendar gc = new GregorianCalendar();
		Date now = gc.getTime();
		gc.add(GregorianCalendar.YEAR, 2);
		Date end = gc.getTime();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		con.setGain_time(format.format(now));
		con.setEnd_time(format.format(end));
		con.setType(0);
		con.setStauts(1);
		con.setGain_type_id("ff808081385bcac601385bd010f00073");
		UserInfoBo userd = (UserInfoBo) req.getSession().getAttribute("user");
		String userId = userd.getUid();
		con.setAssigner_id(userId);
		Return re = scoreDepGainService.saveAndUpdateScoreDepGainAll(con);
		String next = req.getParameter("_next");
		String back = req.getParameter("_back");
		if (next != null && !next.equals("")) {
			return "redirect:scoreDepList.html";
		} else if (back != null && !back.equals("")) {
			return "redirect:scoreDepList.html";
		} else {
			return "forward:saveScoreDepGain";
		}
	}
	@RequestMapping(value = "errorforscoreGain.html", method = RequestMethod.GET)
	public ModelAndView errorForTemplate(HttpServletRequest req, ModelMap model) {
		String orgNames = req.getParameter("orgNames"); 
		String Names="";
		String[] str = orgNames.split(",");
		for(int i=0;i<str.length;i++)
		{
			OrganizationBo o = organizationService.getOrganization(str[i]);
			Names+=o.getName()+"、";
		}
		model.put("Names", Names.substring(0, Names.length()-1));
		return new ModelAndView("scoreDep/errorForGain", model);
	}
	// 新增部门奖励积分
	@RequestMapping(value = "doSaveScoreDepGain.html", method = RequestMethod.POST)
	public String doSaveScoreDepGain(ScoreDepGainCon con,
			HttpServletRequest req, ModelMap model) {
		String[] dep_ids = req.getParameterValues("dep_ids"); //新增岗位ID.
		String orgIds = "";
		if (dep_ids != null) {
			for (int i = 0; i < dep_ids.length; i++) {
				if (dep_ids[i] != null && !"".equals(dep_ids[i])) {
					orgIds += dep_ids[i] + ",";
				}
			}
		}
//		   String dep_ids = req.getParameter("dep_id");
//		   String dep_id=req.getParameter("dep_idGain");
//		     if( "".equals(dep_ids)||dep_ids==null){
//		    	   dep_ids=dep_id;		    	 
//		     }	                      
		con.setDep_id(orgIds);
		con.setStauts(1);
		con.setType(1);
		con.setGain_type_id("ff808081385bcac601385bd010f00073");
		GregorianCalendar gc = new GregorianCalendar();
		Date now = gc.getTime();
		gc.add(GregorianCalendar.YEAR, 2);
		Date end = gc.getTime();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		con.setGain_time(format.format(now));
		con.setEnd_time(format.format(end));
		Return re = scoreDepGainService.saveAndUpdateScoreDepGainAll(con);
		String next = req.getParameter("_next");
		String back = req.getParameter("_back");
		if (next != null && !next.equals("")) {
			return "redirect:scoreDepList.html";
		} else if (back != null && !back.equals("")) {
			return "redirect:scoreDepList.html";
		} else {
			ScoreDepGainBo sc = scoreDepGainService.getScoreDepGain(con
					.getSdgId());
			model.put("sc", sc);
			return "forward:saveScoreDepGain";
		}
	}

	// 跳转积分维护
	@RequestMapping(value = "toScoreDepUsed.html", method = RequestMethod.GET)
	public ModelAndView toScoreDepUsed(
			@RequestParam(required = false) String depId,
			@RequestParam(required = false) String depName, ModelMap model) {

		List<SysParamBo> gainTypeList = trainTypeService.getGainType();
		List<SysParamBo> rewardCostList = trainTypeService.getRewardCostType();
		OrganizationBo organizationBo = organizationService.getOrganization(depId);
		String orgName = organizationBo.getName();
		model.put("depId", depId);
		model.put("depName", orgName);
		model.put("gainTypeList", gainTypeList);
		model.put("rewardCostList", rewardCostList);
		return new ModelAndView("scoreDep/scoreDepUsed", model);
	}

	// 新增部门使用积分
	@RequestMapping(value = "doSaveScoreDepCost.html", method = RequestMethod.POST)
	public String doSaveScoreDepCost(ScoreDepCostCon con,
			HttpServletRequest req, ModelMap model) {
     
       String user_id=req.getParameter("user_id");   // debug:gaoxinlong        
       con.setAuditor_id(user_id);                   //debug:gaoxinlong
       con.setStauts(1);
		Return re = scoreDepCostService.saveAndUpdateScoreDepCost(con);
		String next = req.getParameter("_next");
		String back = req.getParameter("_back");
		if (next != null && !next.equals("")) {
			return "redirect:scoreDepList.html";
		} else if (back != null && !back.equals("")) {
			return "redirect:scoreDepList.html";
		} else {
			ScoreDepCostBo sc = scoreDepCostService.getScoreDepCost(con
					.getSdcId());
			model.put("sc", sc);
			return "forward:saveScoreDepGain";
		}
	}

	// 根据岗位Id得到岗位的全名字
	@RequestMapping(value = "toShowAllOrg.html", method = RequestMethod.GET)
	@ResponseBody
	public String toShowAllOrg(HttpServletRequest req, ModelMap model,
			HttpServletResponse response) throws IOException {

		String orgId = req.getParameter("orgId");
		String orgName = organizationService.getOrganizationNamepath(orgId);
		return orgName;
	}

}
