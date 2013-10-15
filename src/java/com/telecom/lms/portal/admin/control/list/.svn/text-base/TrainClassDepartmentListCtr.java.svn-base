package com.telecom.lms.portal.admin.control.list;

import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.train.TrainClassDepartmentBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.portal.admin.util.SessionConstants;
import com.telecom.lms.sdk.service.train.TrainClassDepartmentService;

/**
 * 查询参加培训班的指定部门及部门指定人数
 * @author Xuxing
 */
@Controller
@RequestMapping("/list")
public class TrainClassDepartmentListCtr {
	public static final String TRAINCLASS_TYPE_DEPARTMENT = "dep";
	public static final String TRAINCLASS_TYPE_DEPARTMENT_NUM = "num";
	public static final String TRAINCLASS_TYPE_DEPARTMENT_UP = "up";
	@Autowired TrainClassDepartmentService trainclassDepService;
	
	/**
	 * 查询指定部门
	 */
	@RequestMapping(value="trainclassdep.html",params="from=dep",method=RequestMethod.GET)
	public String getAssignedDep(HttpServletRequest request, ModelMap model){
		Collection<TrainClassDepartmentBo> list = this.query(request,TRAINCLASS_TYPE_DEPARTMENT);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/trainclass/assigneddep";
	}
	
	/**
	 * 查询部门指定的人数
	 */
	@RequestMapping(value="trainclassdep.html",params="from=num",method=RequestMethod.GET)
	public String getAssignedDepNum(HttpServletRequest request, ModelMap model){
		Collection<TrainClassDepartmentBo> list = this.query(request,TRAINCLASS_TYPE_DEPARTMENT_NUM);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/trainclass/assignednum";
	}
	
	/**
	 * 查询上级部门指定的人数
	 */
	@RequestMapping(value="trainclassdep.html",params="from=up",method=RequestMethod.GET)
	public String getAssignedDepNumFromUp(HttpServletRequest request, ModelMap model){
		Collection<TrainClassDepartmentBo> list = this.query(request,TRAINCLASS_TYPE_DEPARTMENT_UP);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/trainclass/assignupnumber";
	}
	
	public Collection<TrainClassDepartmentBo> query(HttpServletRequest request,String type) {
		String tcid = request.getParameter("tcid");
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute(SessionConstants.SESSION_USER);
		OrganizationBo orgBo = (OrganizationBo)request.getSession().getAttribute("defaultOrg");
		Map<String,String> con = new HashMap<String,String>();
		con.put("train_class_id", tcid);
		if(request.getParameter("start_date")!=null){
			con.put("start_date", request.getParameter("start_date"));
		}
		if(request.getParameter("end_date")!=null){
			con.put("end_date", request.getParameter("end_date"));
		}
		if(request.getParameter("name")!=null){
			con.put("train_class_name", request.getParameter("name"));
		}
		if(TRAINCLASS_TYPE_DEPARTMENT.equals(type)){
			con.put("status", "0");
		}
		if(TRAINCLASS_TYPE_DEPARTMENT_NUM.equals(type)){
			con.put("status", "1");
		}
		if(TRAINCLASS_TYPE_DEPARTMENT_UP.equals(type)){
			con.put("status", "1");
			con.put("dep_id", orgBo.getOrgId());
		}
		Collection<TrainClassDepartmentBo> list = trainclassDepService.getTrainClassDepartment(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		return list;
	}

}
