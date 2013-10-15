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


import com.telecom.lms.core.bo.meet.*;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.meet.*;
@Controller
@RequestMapping("/list")

public class MeetingListCtr{
	
	@Autowired MeetingAttendService meetingAttendService;
	@Autowired MeetingService meetingService;
	
    /**
     * 会议管理首页分页显示并按复合条件进行查询
     */
    @RequestMapping(value = "meetingManage/meetingManageList.html",method = RequestMethod.GET)
    public ModelAndView meetingManageList(HttpServletRequest req,HttpServletResponse res,ModelMap model){	
    	
    	String mt_name = req.getParameter("name");
    	String mt_pub = req.getParameter("status");
    	String start_date = req.getParameter("start_date");
    	String end_date = req.getParameter("end_date");
		String orgDepId = req.getParameter("orgDepId");
    	String master_id = req.getParameter("master_id");
    	String max = req.getParameter("max");
    	String isSub = req.getParameter("isSub");
    	
		Map<String,String> con = new HashMap<String, String>();
    	con.put("name", mt_name);
    	con.put("status", mt_pub);
    	con.put("start_date",start_date);
    	con.put("end_date", end_date);
		con.put("orgDepId", orgDepId);
		con.put("isSub", isSub);
    	con.put("master_id", master_id);
    	con.put("max", max);
		
		Collection<MeetingBo> meetingManageList = meetingService.getMeetingSelect(con, PagerTool.getPageNo(req), PagerTool.getPageSize(req));		
		model.put("meetingManageList", meetingManageList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		model.put("pageNo", PagerTool.getPageNo(req)); //20130407 改变发布状态在本页刷新 by LTC
    	return new ModelAndView("list/meetingManage/meetingManageList",model);
    }
    
	/**
	 * 安排人员页面分页及查询
	 */
    @RequestMapping(value = "meetingManage/meetingStaffList.html",method = RequestMethod.GET)
    public ModelAndView meetingStaffList(HttpServletRequest req,HttpServletResponse res,ModelMap model){	
    	
    	String staffSn = req.getParameter("sn");
    	String staffName = req.getParameter("name");
    	String depId = req.getParameter("dep_id");
    	String mId = req.getParameter("page_mId");

		Map<String,String> con = new HashMap<String, String>();
    	con.put("sn", staffSn);
    	con.put("name", staffName);
    	con.put("dep_id", depId);
    	con.put("meeting_id", mId);
		
		Collection<MeetingAttendBo> meetingStaffList = meetingAttendService.getMeetingAttendSelect(con, PagerTool.getPageNo(req), PagerTool.getPageSize(req)); 
		model.put("meetingStaffList", meetingStaffList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		model.put("maxA", meetingStaffList.getData().size());
    	return new ModelAndView("list/meetingManage/meetingStaffList",model);
    }
      
}