package com.telecom.lms.portal.admin.control.list;

import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.core.bo.train.TrainClassTeacherBo;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.portal.admin.util.SessionConstants;
import com.telecom.lms.sdk.service.train.TrainClassService;
import com.telecom.lms.sdk.service.train.TrainClassTeacherService;
import com.telecom.lms.sdk.service.train.TrainPlanService;

/**
 * 查询培训班列表
 * @author Xuxing
 */
@Controller
@RequestMapping("/list")
public class TrainClassListCtr{
	public static final String TRAINCLASS_TYPE_NORMAL = "normal";
	public static final String TRAINCLASS_TYPE_OUT = "out";
	public static final String TRAINCLASS_TYPE_UP = "up";
	public static final String TRAINCLASS_TYPE_LEADER = "leader";
	public static final String TRAINCLASS_TYPE_PLAN = "plan";
	public static final String TRAINCLASS_TYPE_RELATE = "relate";
	
	@Autowired TrainClassService trainClassService;
	@Autowired TrainPlanService trainPlanService;
	@Autowired TrainClassTeacherService tctService;
	@Autowired CommonService commonService;

	/**
	 * 查询所有培训班
	 */
	@RequestMapping(value="trainclass.html",method=RequestMethod.GET)
	public String getTrainClass(HttpServletRequest request, ModelMap model){
		String bbsUrl = commonService.getBbsUrl(); // 管理员端向学员端讨论区跳转Url
		model.put("bbsUrl", bbsUrl);
		
		Collection<TrainClassBo> list = this.query(request,TRAINCLASS_TYPE_NORMAL);
		model.put("list",list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/trainclasslist";
	}
	
	/**
	 * 查询所有培训班(统计用)
	 */
	@RequestMapping(value="trainclass.html",params="from=stastic",method=RequestMethod.GET)
	public String getstaTrainClass(HttpServletRequest request, ModelMap model){
		String bbsUrl = commonService.getBbsUrl(); // 管理员端向学员端讨论区跳转Url
		model.put("bbsUrl", bbsUrl);
		
		Collection<TrainClassBo> list = this.query(request,TRAINCLASS_TYPE_NORMAL);
		model.put("list",list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/statrainclasslist";
	}
	
	/**
	 * 查询上级培训班
	 */
	@RequestMapping(value="trainclass.html",params="from=up",method=RequestMethod.GET)
	public String getUpTrainClass(HttpServletRequest request, ModelMap model){
		Collection<TrainClassBo> list = this.query(request,TRAINCLASS_TYPE_UP);
		model.put("list",list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/uptrainclasslist";
	}
	
	/**
	 * 查询管理员培训班
	 */
	@RequestMapping(value="trainclass.html",params="from=leader",method=RequestMethod.GET)
	public String getLeaderTrainClass(HttpServletRequest request, ModelMap model){
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute(SessionConstants.SESSION_USER);
		String orgid = request.getParameter("orgid");
		String name = request.getParameter("name");
		String start_date = request.getParameter("start_date");
		String end_date = request.getParameter("end_date");
		HashMap<String,String> con = new HashMap<String, String>();
		con.put("user_id", user.getUid());
		con.put("type", "2");
		con.put("name", name);
		con.put("orgid", orgid);
		con.put("start_date", start_date);
		con.put("end_date", end_date);
		con.put(PagerTool.PAGE_SIZE, PagerTool.getPageSize(request));
		con.put(PagerTool.PAGE_NO, PagerTool.getPageNo(request));
		
		Collection<TrainClassTeacherBo> list = tctService.getTrainClassTeachers(con,PagerTool.getPageNo(request),PagerTool.getPageSize(request));
		model.put("list",list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/leadertrainclasslist";
	}
	
	/**
	 * 查询外派培训班
	 */
	@RequestMapping(value="trainclass.html",params="from=out",method=RequestMethod.GET)
	public String getOutTrainClass(HttpServletRequest request, ModelMap model){
		Collection<TrainClassBo> list = this.query(request,TRAINCLASS_TYPE_OUT);
		model.put("list",list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/outtrainclasslist";
	}
	
	/**
	 * 查询计划中的培训班
	 */
	@RequestMapping(value="trainclass.html",params="from=plan",method=RequestMethod.GET)
	public String getPlanClass(HttpServletRequest request, ModelMap model){
		Collection<TrainClassBo> list = this.query(request,TRAINCLASS_TYPE_PLAN);
		String ban = request.getParameter("ban");
		if(!"".equals(ban)&&null!=ban){
			model.put("ban", ban);
		}
		model.put("list",list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/planclass";
	}
	
	/**
	 * 查询新建培训班中添加培训计划分页
	 */
	@RequestMapping(value="trainclass.html",params="from=plan4dialog",method=RequestMethod.GET)
	public String getPlan4DialogClass(HttpServletRequest request, ModelMap model){
		Collection<TrainClassBo> list = this.query(request,TRAINCLASS_TYPE_PLAN);
		model.put("list",list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/planclass4dialog";
	}
	
	/**
	 * 查询已有可以分期的培训班
	 */
	@RequestMapping(value="trainclass.html",params="from=relate4dialog",method=RequestMethod.GET)
	public String get4Relate(HttpServletRequest request, ModelMap model){
		Collection<TrainClassBo> list = this.query(request,"relate");
		model.put("list",list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/relatedclasslist";
	}
	
	/**
	 * 评估中选择培训班列表
	 */
	@RequestMapping(value="trainclass.html",params="from=survey",method=RequestMethod.GET)
	public String get4Survey(HttpServletRequest request, ModelMap model){
		Collection<TrainClassBo> list = this.query(request,"survey");
		model.put("list",list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/class4survey";
	}

	public Collection<TrainClassBo> query(HttpServletRequest request, String type) {
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute(SessionConstants.SESSION_USER);
		
		Map<String, String> con = new HashMap<String, String>();
		if(request.getParameter("class_Sn")!=null){
			con.put("sn", request.getParameter("class_Sn"));
		}
		if(request.getParameter("name")!=null){
			con.put("name", request.getParameter("name"));
		}
		if(request.getParameter("way")!=null){
			con.put("way", request.getParameter("way"));
		}
		if(request.getParameter("level")!=null){
			con.put("level_id", request.getParameter("level"));
		}
		if(request.getParameter("address")!=null){
			con.put("address", request.getParameter("address"));
		}
		if(request.getParameter("principal")!=null){
			con.put("principal_id", request.getParameter("principal"));
		}
		if(request.getParameter("orgid")!=null){
			con.put("orgDepId", request.getParameter("orgid"));
		}
		if(request.getParameter("start_date")!=null){
			con.put("start_date", request.getParameter("start_date"));
		}
		if(request.getParameter("end_date")!=null){
			con.put("end_date", request.getParameter("end_date"));
		}
		if(request.getParameter("isSub") != null){
			con.put("isSub", request.getParameter("isSub"));
		}
		if(!StringUtils.isBlank(request.getParameter("status"))){
			con.put("status", request.getParameter("status"));
		}
		if(request.getParameter("hasResponse") != null){
			con.put("hasResponse", request.getParameter("hasResponse"));
		}
		if(request.getParameter("hasBehavior") != null){
			con.put("hasBehavior", request.getParameter("hasBehavior"));
		}
		if(request.getParameter("exam")!=null){
			con.put("exam", request.getParameter("exam"));
		}
		//普通培训班
		if(TRAINCLASS_TYPE_NORMAL.equals(type)){
			if(!StringUtils.isBlank(request.getParameter("status"))){
				con.put("status", request.getParameter("status"));
			}
			if(request.getParameter("type")!=null){
				con.put("type", request.getParameter("type"));
			}else{
				con.put("types", "0,2");
			}
			
			/***LMSWD-3066 LuChao add***/
			Calendar localTime = Calendar.getInstance();
			if(request.getParameter("start_date")==null){
				con.put("start_date", localTime.get(Calendar.YEAR)+"-01" + "-01");
			}
			if(request.getParameter("end_date")==null){
				con.put("end_date", localTime.get(Calendar.YEAR)+ "-12" + "-31");
			}
			
			
			
//			con.put("plan", "1");
		}
		//外派培训班
		if(TRAINCLASS_TYPE_OUT.equals(type)){
			con.put("type", "1");
		}
		//上级培训班
		if(TRAINCLASS_TYPE_UP.equals(type)){
			OrganizationBo manageOrg = (OrganizationBo) request.getSession().getAttribute(SessionConstants.SESSION_DEFAULT_ORG);
			String upid = manageOrg.getLevel()<=1?manageOrg.getOrgId():manageOrg.getUpId();
			con.put("orgDepId", user.getOrg().getOrgId());
			con.put("upid", upid);
			con.put("type", "0");
			con.put("isSub", "0");
			Collection<TrainClassBo> list = trainClassService.getUpTrainClassSelect(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));	
			return list;
		}
		if(TRAINCLASS_TYPE_LEADER.equals(type)){

		}
	
		//查看已有培训班
		if(TRAINCLASS_TYPE_RELATE.equals(type)){
		//	con.put("relateClass", "1");
		//	con.put("type", "0");
		}
		
		if(TRAINCLASS_TYPE_PLAN.equals(type)){
			String class_Name = request.getParameter("name");
			String tpid = request.getParameter("tpid");
			String dep_contain = request.getParameter("dep_contain");
			String dep_id = request.getParameter("dep_id");
			
			con.put("name", class_Name);
			con.put("plan_id", tpid);
			con.put("isSub", dep_contain);
			con.put("orgDepId", dep_id);
		}
		Collection<TrainClassBo> list = trainClassService.getTrainClassSelect(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));	
		return list;
	}
	
}
