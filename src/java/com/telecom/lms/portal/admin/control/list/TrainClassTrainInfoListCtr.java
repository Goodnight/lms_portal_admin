package com.telecom.lms.portal.admin.control.list;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.core.bo.train.TrainClassCheckinBo;
import com.telecom.lms.core.bo.train.TrainClassFacilityBo;
import com.telecom.lms.core.bo.train.TrainClassStudentBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.train.TrainClassCheckinService;
import com.telecom.lms.sdk.service.train.TrainClassFacilityService;
import com.telecom.lms.sdk.service.train.TrainClassService;
import com.telecom.lms.sdk.service.train.TrainClassStudentService;
import com.telecom.lms.sdk.service.train.TrainTypeService;

@Controller
@RequestMapping("/list")
public class TrainClassTrainInfoListCtr {
	@Autowired TrainClassCheckinService checkInService;
	@Autowired TrainClassStudentService stuService;
	@Autowired TrainClassService tcService;
	
	/**
	 * 新建考勤列表
	 */
	@RequestMapping("trainclass/newcheckin.html")
	public String listNewCheckin(HttpServletRequest request,ModelMap model){
		String tcid = request.getParameter("tcid");
		String checkinDate = request.getParameter("checkinDate");
		String sn = request.getParameter("user_sn");
		String username = request.getParameter("user_name");
		
		HashMap<String,String> con = new HashMap<String,String>();
		con.put("train_class_id", tcid);
		con.put("exam_status", "1");
		con.put("sn", sn);
		con.put("name", username);
		Collection<TrainClassStudentBo> stuList = stuService.getTrainClassStudents(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		model.put("stuList", stuList);
		
		HashMap<String,String> con2 = new HashMap<String,String>();
		con2.put("tc_id", tcid);
		con2.put("checkin_date", checkinDate);
		con2.put("sn", sn);
		con2.put("name", username);
		List<TrainClassCheckinBo> checkList = checkInService.getTrainClassCheckins(con2);
		model.put("checkList", checkList);
		
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/newcheckin";
	}
	
	/**
	 * 考勤列表
	 */
	@RequestMapping("trainclass/checkin.html")
	public String listCheckIn(HttpServletRequest request,ModelMap model){
		String tcid = request.getParameter("tcid");
		String sn = request.getParameter("sn");
		String name = request.getParameter("name");
		String applyWay = request.getParameter("applyWay");
		String hasImprove = request.getParameter("hasImprove");
		String status = request.getParameter("status");
		HashMap<String,String> con = new HashMap<String,String>();
		con.put("sn", sn);
		con.put("name", name);
		con.put("applyWay", applyWay);
		con.put("hasImprove", hasImprove);
		con.put("train_class_id", tcid);
		con.put("status", status);
		con.put("exam_status", "1");
		Collection<TrainClassStudentBo> list = stuService.getTrainClassStudents(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		model.put("list", list);
		model.put("tcId", tcid);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/checkin";
	}
	
	/**
	 * 费用列表
	 */
	@RequestMapping("trainclass/budget.html")
	public String listBudget(HttpServletRequest request, ModelMap model){
		String tcid = request.getParameter("tcid");
		String user_sn = request.getParameter("user_sn");
		String user_name = request.getParameter("user_name");
		TrainClassBo tc = tcService.getTrainClass(tcid);
		HashMap<String,String> con = new HashMap<String,String>();
		con.put("train_class_id", tcid);
		con.put("exam_status", "1");
		con.put("sn", user_sn);
		con.put("name", user_name);
		Collection<TrainClassStudentBo> list = stuService.getTrainClassStudents(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		model.put("list", list);
		model.put("tc", tc);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/budget";
	}
	
	/**
	 * 外派培训班信息
	 */
	@RequestMapping("outtrainclass/info.html")
	public String listOuttrainclassInfo(HttpServletRequest request, ModelMap model){
		String tcid = request.getParameter("tcid");
		String user_sn = request.getParameter("user_sn");
		String user_name = request.getParameter("user_name");
		TrainClassBo tc = tcService.getTrainClass(tcid);
		HashMap<String,String> con = new HashMap<String,String>();
		con.put("train_class_id", tcid);
		con.put("exam_status", "1");
		con.put("sn", user_sn);
		con.put("name", user_name);
		Collection<TrainClassStudentBo> list = stuService.getTrainClassStudents(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		model.put("list", list);
		model.put("tc", tc);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/outtrainclass_info";
	}
	
}
