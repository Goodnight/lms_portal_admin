package com.telecom.lms.portal.admin.control.list;

import java.util.HashMap;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.train.TrainClassStudentBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.train.TrainClassStudentService;

/**
 * 查询培训班学生的列表
 * @author Xuxing
 */
@Controller
@RequestMapping("/list")
public class TrainClassStudentListCtr{
	public static final String STUDENT_TYPE_ALL = "all";
	public static final String STUDENT_TYPE_APPROVING = "approving";
	public static final String STUDENT_TYPE_UPCLASS = "upclass";
	@Autowired TrainClassStudentService studentService;

	/**
	 * 查询培训班所有的学生
	 */
	@RequestMapping(value="student.html",params="from=all")
	public String getAlldStudent(HttpServletRequest request, ModelMap model){
		Collection<TrainClassStudentBo> list = this.query(request,STUDENT_TYPE_ALL);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/trainclass/allstudent";
	}
	
	/**
	 * 外派培训班学生
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="student.html",params="from=out")
	public String getOutStudent(HttpServletRequest request, ModelMap model){
		Collection<TrainClassStudentBo> list = this.query(request,STUDENT_TYPE_ALL);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/trainclass/outstudent";
	}
	
	/**
	 * 查询培训班正在审核的学生
	 */
	@RequestMapping(value="student.html",params="from=approving")
	public String getApprovingStudent(HttpServletRequest request, ModelMap model){
		Collection<TrainClassStudentBo> list = this.query(request,STUDENT_TYPE_APPROVING);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/trainclass/approvingstudent";
	}
	
	/**
	 * 查询部门在培训班中的学员
	 */
	@RequestMapping(value="student.html",params="from=upclass")
	public String getDepStudent(HttpServletRequest request, ModelMap model){
		Collection<TrainClassStudentBo> list = this.query(request,STUDENT_TYPE_UPCLASS);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/trainclass/uptrainclass_student4dialog";
	}

	public Collection<TrainClassStudentBo> query(HttpServletRequest request, String type) {
		String tcid = request.getParameter("tcid");
		String name = request.getParameter("name");
		String sn = request.getParameter("sn");
		String depid = request.getParameter("depid");
		String applyway = request.getParameter("applyway");
		String mobile = request.getParameter("mobile");
		HashMap<String,String> con = new HashMap<String,String>();
		con.put("train_class_id", tcid);
		if(STUDENT_TYPE_ALL.equals(type)){
			con.put("sn", sn);
			con.put("name", name);
			con.put("dep_id", depid);
			con.put("applyWay", applyway);
			con.put("exam_status", "1");
			con.put("mobile_code", mobile);
			
		}
		if(STUDENT_TYPE_APPROVING.equals(type)){
			con.put("exam_status", "0");
			con.put("applyWay", "0");
		}
		if(STUDENT_TYPE_UPCLASS.equals(type)){
			con.put("applyWay", "3");
//			con.put("dep_id", depid);
		}
		Collection<TrainClassStudentBo> list = studentService.getTrainClassStudents(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		return list;
	}
	
	
}
