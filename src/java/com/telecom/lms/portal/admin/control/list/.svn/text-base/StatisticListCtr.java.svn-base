package com.telecom.lms.portal.admin.control.list;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.learn.LearnStatsBo;
import com.telecom.lms.core.bo.statistic.CoursewareStatistic;
import com.telecom.lms.core.bo.statistic.OrgCourseStatistic;
import com.telecom.lms.core.bo.statistic.OrgDocStatistic;
import com.telecom.lms.core.bo.statistic.OrgTrainClassStatistic;
import com.telecom.lms.core.bo.statistic.TrainClassStatistic;
import com.telecom.lms.core.bo.statistic.TrainPlanStatistic;
import com.telecom.lms.core.bo.statistic.UserStatistic;
import com.telecom.lms.core.bo.train.CourseStatsBo;
import com.telecom.lms.core.bo.train.StudentStatsBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.learn.LearnStatsService;
import com.telecom.lms.sdk.service.resources.CoursewareService;
import com.telecom.lms.sdk.service.train.TrainClassService;
import com.telecom.lms.sdk.service.train.TrainClassStudentService;
import com.telecom.lms.sdk.service.train.TrainPlanService;
import com.telecom.lms.sdk.service.train.TrainResourseService;

@Controller
@RequestMapping("/list/statistic")
public class StatisticListCtr {
	@Autowired UserInfoService userService;
	@Autowired TrainClassService trainclassService;
	@Autowired OrganizationService orgService;
	@Autowired TrainPlanService trainplanService;
	@Autowired CoursewareService courseService;
	@Autowired TrainClassStudentService studentService;
	@Autowired TrainResourseService resourceService;
	@Autowired LearnStatsService lsSrv;
	
	/**
	 * 人员学习情况列表
	 */
	@RequestMapping("user.html")
	public String getUserReport(HttpServletRequest request, ModelMap model){
		HashMap<String, String> con = new HashMap<String, String>();
		String userIds = request.getParameter("userIds");
		String depIds = request.getParameter("depIds");
		String classIds = request.getParameter("classIds");
		String knoId = request.getParameter("knoId");
		
		con.put("userIds", userIds);
		con.put("depIds", depIds);
		con.put("classIds", classIds);
		con.put("knoId", knoId);
		
		Collection<UserStatistic> list = userService.getUserStatistic(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/statistic/user";
	}
	
	/**
	 * 课程学习情况列表
	 */
	@RequestMapping("course.html")
	public String getCourseReport(HttpServletRequest request, ModelMap model){
		HashMap<String, String> con = new HashMap<String, String>();
		String userIds = request.getParameter("userIds");
		String depIds = request.getParameter("depIds");
		String classIds = request.getParameter("classIds");
		String knoId = request.getParameter("knoId");
		
		con.put("userIds", userIds);
		con.put("depIds", depIds);
		con.put("classIds", classIds);
		con.put("knoId", knoId);
		
		con.put(PagerTool.PAGE_NO, PagerTool.getPageNo(request));
		con.put(PagerTool.PAGE_SIZE, PagerTool.getPageSize(request));
		
		Collection<CoursewareStatistic> list = courseService.getCoursewaresStatistic(con);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/statistic/course";
	}
	
	/**
	 * 机构学习情况列表
	 */
	@RequestMapping(value="org.html")
	public String getOrgCourseReport(HttpServletRequest request, ModelMap model){
		String type = request.getParameter("reportType");
		HashMap<String, String> con = new HashMap<String, String>();
		con.put(PagerTool.PAGE_NO, PagerTool.getPageNo(request));
		con.put(PagerTool.PAGE_SIZE, PagerTool.getPageSize(request));
		
		if(type.equals("course")){
			List<OrgCourseStatistic> list = orgService.getOrgCourseStatistic(null);
			model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
			model.put("list", list);
			return "list/statistic/org_course";
		}else if(type.equals("doc")){
			List<OrgDocStatistic> list = orgService.getDocStatistic(null);
			model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
			model.put("list", list);
			return "list/statistic/org_doc";
		}else if(type.equals("case")){
			List<OrgDocStatistic> list = orgService.getDocStatistic(null);
			model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
			model.put("list", list);
			return "list/statistic/org_case";
		}else if(type.equals("trainclass")){
			List<OrgTrainClassStatistic> list = orgService.getTrianClassStatistic(null);
			model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
			model.put("list", list);
			return "list/statistic/org_trainclass";
		}else{
			
			return "";
		}
	}
	
	/**
	 * 培训班统计列表
	 */
	@RequestMapping("trainclass.html")
	public  String getTrainClassReport(HttpServletRequest request, ModelMap model){
		Collection<TrainClassStatistic> list = trainclassService.getTrainClassStatistic(null, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/statistic/trainclass";
	}
	
	/**
	 * 培训计划统计列表
	 */
	@RequestMapping("trainplan.html")
	public String getTrainPlanReport(HttpServletRequest request, ModelMap model){
		HashMap<String, String> con = new HashMap<String, String>();
		String name = request.getParameter("name");
    	String year = request.getParameter("year");
    	String planType = request.getParameter("planType");
    	con.put("name", name);
    	con.put("year", year);
     	con.put("planType",planType);
		Collection<TrainPlanStatistic> list = trainplanService.getTrainPlanStatistic(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/statistic/trainplan";
	}
	
	/**
	 * 培训班中的人员学习统计列表
	 */
	@RequestMapping("trainclass/student.html")
	public String getTrainClassStudent(HttpServletRequest request, ModelMap model){
		String sn = request.getParameter("sn");
		String name = request.getParameter("name");
		String depid = request.getParameter("depid");
		String tcid = request.getParameter("tcid");
		HashMap<String, String> con = new HashMap<String, String>();
		con.put("sn", sn);
		con.put("name", name);
		con.put("dep_id", depid);
		con.put("tcid", tcid);
		
		Collection<StudentStatsBo> list = lsSrv.getStudentStats(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/statistic/trainclass/student";
	}
	
	/**
	 * 培训班中的课程学习情况
	 */
	@RequestMapping("trainclass/course.html")
	public String getTrainClassCourse(HttpServletRequest request, ModelMap model){
		String tcid = request.getParameter("tcid");
		HashMap<String, String> con = new HashMap<String, String>();
		con.put("tcid", tcid);
		Collection<CourseStatsBo> list = lsSrv.getCourseStats(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/statistic/trainclass/course";
	}
	
	
	/**
	 * 培训班中人员学习课程总数
	 */
	@RequestMapping("trainclass/number.html")
	public String getTrainClassNumber(HttpServletRequest request, ModelMap model){
		String tcId = request.getParameter("tcId");
		String sn = request.getParameter("sn");
		String op = request.getParameter("op");
		String url = "list/trainclass/trainclass_num_list";
		HashMap<String, String> con = new HashMap<String, String>();
		con.put("tcid", tcId);
		con.put("sn", sn);
		if(op!=null && "1".equals(op)){
			con.put("op", op);
			url = "list/trainclass/trainclass_num_lists";
		}else if(op!=null && "2".equals(op)){
			con.put("op", op);
			url = "list/trainclass/trainclass_num_cours";
		}
		Collection<LearnStatsBo> list = lsSrv.getCourseStatsNumber(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return url;
	}
}
