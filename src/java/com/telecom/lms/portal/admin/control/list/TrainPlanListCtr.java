package com.telecom.lms.portal.admin.control.list;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.train.TrainPlanBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.train.TrainPlanService;
@Controller
@RequestMapping("/list")

public class TrainPlanListCtr{
	
	@Autowired TrainPlanService trainPlanService;
    
	/**
     * 培训计划首页分页显示并按复合条件进行查询
     */
	@RequestMapping(value="trainplan.html",params="from=trainplan",method=RequestMethod.GET)
	public ModelAndView trainPlanList(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		String orgDepId = req.getParameter("orgDepId");
		String name = req.getParameter("name");
    	String year = req.getParameter("year");
    	String planType = req.getParameter("planType");
    	String status = req.getParameter("status");
    	String isSub = req.getParameter("isSub");
    	
		Map<String,String> con = new HashMap<String, String>();
		con.put("orgDepId", orgDepId);
    	con.put("name", name);
    	con.put("year", year);
     	con.put("planType",planType);
     	con.put("status", status);
     	con.put("isSub", isSub);
		
		Collection<TrainPlanBo> trainPlanList = trainPlanService.getTrainPlans(con, PagerTool.getPageNo(req), PagerTool.getPageSize(req));
		model.put("trainPlanList", trainPlanList);
		model.put("user", user);
		model.put("pageNo", PagerTool.getPageNo(req)); //20130319 改变发布状态在本页刷新 by LTC
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return new ModelAndView("list/trainplan/trainPlanList",model);
	}
	
	/**
     * 省审核市分页显示并按复合条件进行查询
     */
	@RequestMapping(value="trainplan.html",params="from=check",method=RequestMethod.GET)
	public ModelAndView checkTrainPlanList(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String orgDepId = req.getParameter("orgDepId");
    	String name = req.getParameter("name");
    	String year = req.getParameter("year");
    	
		Map<String,String> con = new HashMap<String, String>();
		con.put("orgDepId", orgDepId);
    	con.put("name", name);
    	con.put("year", year);
    	con.put("planType", "0"); //正式、已提交、包含下级
    	con.put("status", "0");
    	con.put("isSub", "1");
		
		Collection<TrainPlanBo> trainPlanList = trainPlanService.getTrainPlans(con, PagerTool.getPageNo(req), PagerTool.getPageSize(req));
		model.put("trainPlanList", trainPlanList);
		model.put("pageNo", PagerTool.getPageNo(req)); //20130319 改变发布状态在本页刷新 by LTC
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return new ModelAndView("list/trainplan/checkTrainPlanList",model);
	}
	
	/**
     * 查看上级分页显示并按复合条件进行查询
     */
	@RequestMapping(value="trainplan.html",params="from=up",method=RequestMethod.GET)
	public ModelAndView upTrainPlanList(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String orgDepId = req.getParameter("orgDepId");
    	String name = req.getParameter("name");
    	String year = req.getParameter("year");

		Map<String,String> con = new HashMap<String, String>();
		con.put("orgDepId", orgDepId);
    	con.put("name", name);
    	con.put("year", year);
    	con.put("status", "1"); //已发布、不包含下级
    	con.put("isSub", "0");
		
		Collection<TrainPlanBo> trainPlanList = trainPlanService.getTrainPlans(con, PagerTool.getPageNo(req), PagerTool.getPageSize(req));
		model.put("trainPlanList", trainPlanList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return new ModelAndView("list/trainplan/upTrainPlanList",model);
	}
	
	/**
	 * 培训计划中的培训班
	 * @param request
	 * @param model
	 * @return
	 */
	
	@RequestMapping(value="trainplan.html",params="from=trainclass",method=RequestMethod.GET)
	public String queryTrainPlanFromTC(HttpServletRequest request, ModelMap model){
		Collection<TrainPlanBo> trainPlanList = this.query(request, "trainclass");
		model.put("trainPlanList", trainPlanList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainplan/trainplan_trainclass";
	}

	public Collection<TrainPlanBo> query(HttpServletRequest request, String type) {
		Map<String, String> con = new HashMap<String, String>();
		if("".equals(type)){
			
		}
		if("".equals(type)){
			
		}
		if("trainclass".equals(type)){
			
		}
		Collection<TrainPlanBo> trainPlanList = trainPlanService.getTrainPlans(con,PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		return trainPlanList;
	}
}

