package com.telecom.lms.portal.admin.control.meeting;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.meet.*;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.meet.*;
import com.telecom.lms.sdk.service.train.TrainClassService;
import com.telecom.lms.sdk.util.DateTool;

@Controller
@RequestMapping("/meetingManage")
public class MeetingManageCtr{
	
	@Autowired MeetingAttendService meetingAttendService;
	@Autowired MeetingService meetingService;
	@Autowired TrainClassService trainClassService;
	@Autowired CommonService commonService;
	@Autowired UserInfoService userInfoService;
	
	/** 
	 * 会议管理列表首页
	 */
    @RequestMapping(value = "meetingManageList.html",method = RequestMethod.GET)
	public ModelAndView turnIndex(HttpServletRequest req,HttpServletResponse res,String mId,ModelMap model){
		//mId为空新建，不为空修改
		if(mId!=null){
			MeetingBo mb = meetingService.getMeeting(mId);
			model.put("mb", mb);
		}else{
			model.put("mb", new MeetingBo());
		}
		
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
    	Map<String, String> con = new HashMap<String, String>();
    	con.put("uid", user.getUid());
    	OrganizationBo ob = userInfoService.getManageOrg(con);
    	model.put("orgDepOriId", ob.getOrgId());
		return new ModelAndView("meetingManage/meetingManageList",model);
	}
    
    /**
     * 批量删除会议列表内容
     */
	@RequestMapping(value = "deleteMeeting.html",method = RequestMethod.POST)
	@ResponseBody
	public Return deleteMeeting(HttpServletRequest req,HttpServletResponse res,@RequestParam("mId") String ids){
		Return re = meetingService.removeAllMeeting(ids);
		return re;
	}
	
	/**
	 * 跳转新建会议列表页面
	 */
	@RequestMapping(value = "newMeeting.html",method = RequestMethod.GET)
	public ModelAndView newMeeting(HttpServletRequest req,HttpServletResponse res,String mId,ModelMap model){
		//mId为空新建，不为空修改
		if(mId!=null){
			MeetingBo mb = meetingService.getMeeting(mId);
			model.put("mb", mb);
		}else{
			model.put("mb", new MeetingBo());
		}
		return new ModelAndView("meetingManage/newMeeting",model);
	}
    
    /**
     * 保存会议内容
     */
    @RequestMapping(value = "saveMeeting.html",method = RequestMethod.POST)
    public ModelAndView saveMeeting(HttpServletRequest req,ModelMap model){
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
    	MeetingCon mc = new MeetingCon();
    	String name = req.getParameter("name");
    	String start_date = req.getParameter("start_date");
    	String end_date = req.getParameter("end_date");
    	String start_hour = req.getParameter("start_hour");
    	String start_minute = req.getParameter("start_minute");
    	String start_second = req.getParameter("start_second");
    	String end_hour = req.getParameter("end_hour");
    	String end_minute = req.getParameter("end_minute");
    	String end_second = req.getParameter("end_second");
    	String master_name = req.getParameter("master_name");
    	String teacher_name = req.getParameter("teacher_name");
    	String remarks = req.getParameter("remarks");
    	String _maxAttend = req.getParameter("maxAttend");
    	if(_maxAttend == "" || _maxAttend == null){
    		 int maxAttend = 0;
    		 mc.setMaxAttend(maxAttend);
    	}
    	if(_maxAttend != "" && _maxAttend != null){
    		int maxAttend = Integer.parseInt(_maxAttend);
    		mc.setMaxAttend(maxAttend);
    	}

    	mc.setName(name);
    	mc.setStart_date(start_date);
    	mc.setEnd_date(end_date);
    	mc.setStart_hour(start_hour);
    	mc.setStart_minute(start_minute);
    	mc.setStart_second(start_second);
    	mc.setEnd_hour(end_hour);
    	mc.setEnd_minute(end_minute);
    	mc.setEnd_second(end_second);
    	mc.setMaster_id(master_name);
    	mc.setTeacher_id(teacher_name);
    	mc.setRemarks(remarks);
    	mc.setStatus(0);
    	mc.setCreater_id(user.getUid());
    	mc.setCreate_date(DateTool.getNowShort());  //保存当前日期
    	
    	Return re = meetingService.newMeeting(mc);
    	mc.setmId(re.getCode());
    	return new ModelAndView("redirect:turnStaff.html?mId="+mc.getmId(),model);
    }
    
    /**
     * 跳转修改会议内容页面
     */
	@RequestMapping(value = "meetingInfo.html",method = RequestMethod.GET)
	public ModelAndView meetingInfo(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String mId = req.getParameter("mId");
		boolean bool = false;
		//mId为空新建，不为空修改
		if(mId!=null){
			MeetingBo mb = meetingService.getMeeting(mId);
			model.put("mb", mb);
			if(mb.getStatus() == 1)//发布不允许修改
			{
				bool = true;
			}
		}else{
			model.put("mb", new MeetingBo());
		};
		model.put("bool", bool);
		return new ModelAndView("meetingManage/meetingInfo",model);
	}
	
	/**
	 * 修改会议内容
	 */
	 @RequestMapping(value = "saveModifiedMeeting.html",method = RequestMethod.POST)
	    public ModelAndView saveModifiedMeeting(HttpServletRequest req,ModelMap model){
		 	String mId = req.getParameter("mId");
		 	String bool = req.getParameter("bools");
		 	if(bool.equals("true")){
		 		return new ModelAndView("redirect:turnStaff.html?mId="+mId,model);
		 	}
		 	
		 	
	    	String name = req.getParameter("name");
	    	String start_date = req.getParameter("start_date");
	    	String end_date = req.getParameter("end_date");
	    	String start_hour = req.getParameter("start_hour");
	    	String start_minute = req.getParameter("start_minute");
	    	String start_second = req.getParameter("start_second");
	    	String end_hour = req.getParameter("end_hour");
	    	String end_minute = req.getParameter("end_minute");
	    	String end_second = req.getParameter("end_second");
	    	String master_name = req.getParameter("master_name");
	    	String teacher_name = req.getParameter("teacher_name");
	    	String _maxAttend = req.getParameter("maxAttend");
	    	int maxAttend = Integer.parseInt(_maxAttend);
	    	String remarks = req.getParameter("remarks");
	    	
	    	
	    	
	    	
	    	MeetingCon mc = new MeetingCon();
	    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
	    	mc.setmId(mId);
	    	mc.setName(name);
	    	mc.setStart_date(start_date);
	    	mc.setEnd_date(end_date);
	    	mc.setStart_hour(start_hour);
	    	mc.setStart_minute(start_minute);
	    	mc.setStart_second(start_second);
	    	mc.setEnd_hour(end_hour);
	    	mc.setEnd_minute(end_minute);
	    	mc.setEnd_second(end_second);
	    	mc.setMaster_id(master_name);
	    	mc.setTeacher_id(teacher_name);
	    	mc.setMaxAttend(maxAttend);
	    	mc.setRemarks(remarks);
	    	mc.setUpdater_id(user.getUid());
	    	mc.setUpdate_date(DateTool.getShortDate()); //保存当前修改日期
	    	
	    	meetingService.newMeeting(mc);
	    	return new ModelAndView("redirect:turnStaff.html?mId="+mId,model);
	    }
    
    /**
     * 跳转安排人员页面
     */
	@RequestMapping(value = "turnStaff.html",method = RequestMethod.GET)
	public ModelAndView meetingStaff(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String mId = req.getParameter("mId");
		//mId为空新建，不为空修改
		if(mId!=null){
			MeetingBo mb = meetingService.getMeeting(mId);
			model.put("mb", mb);
		}else{
			model.put("mb", new MeetingBo());
		};
		return new ModelAndView("meetingManage/meetingStaff");
	}
	    
    /**
     * 批量删除安排会议内容
     */
	@RequestMapping(value = "deleteStaff.html",method = RequestMethod.POST)
	@ResponseBody
	public Return deleteStaff(HttpServletRequest req,HttpServletResponse res,@RequestParam("maId") String ids){
		Return re = meetingAttendService.removeAllMeeting(ids);
		return re;
	}
	
	/**
	 * 保存会议中的安排人员
	 * @param request
	 * @return
	 */
	@RequestMapping(value="saveStaff.html",method=RequestMethod.POST)
	@ResponseBody
	public Return saveStaff(HttpServletRequest request){
		Return re = new Return();
		String meeting_id = request.getParameter("pid");
		String[] user_id = request.getParameterValues("id");
		
		
		
		for(String id : user_id){
			MeetingAttendCon con = new MeetingAttendCon();
			con.setMeeting_id(meeting_id);
			con.setUser_id(id);
			con.setIsAttend(0);
			re = meetingAttendService.newMeetingAttend(con);
		}
		return re;
	}	
	
	/**
	 * AJAX方式的更新
	 * 用于改变会议的发布状态
	 */
	@RequestMapping(value="ajax/update.html",method=RequestMethod.POST)
	@ResponseBody
	public Return ajaxupdate(MeetingCon con, HttpServletRequest request){
		Return re = meetingService.newMeeting(con);
		return re;
	}
}
