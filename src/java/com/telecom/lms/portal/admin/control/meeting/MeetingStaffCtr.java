package com.telecom.lms.portal.admin.control.meeting;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import com.telecom.lms.sdk.service.meet.MeetingAttendService;
import com.telecom.lms.sdk.service.meet.MeetingService;
@Controller
@RequestMapping("/dialog")

public class MeetingStaffCtr{
	
	@Autowired MeetingAttendService meetingAttendService;
	@Autowired MeetingService meetingService;
	
	@RequestMapping(value = "meetingManage/selectStaff.html",method = RequestMethod.GET)
	 public ModelAndView meetingStaffList(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		return new ModelAndView("dialog/meetingManage/selectStaff",model);
	}
}
