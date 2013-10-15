package com.telecom.lms.portal.admin.control.list;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.Node;
import com.telecom.lms.portal.admin.util.PagerTool;

import com.telecom.lms.core.bo.auth.*;
import com.telecom.lms.sdk.service.auth.*;
import com.telecom.lms.sdk.service.auth.param.UserInfoParam;
@Controller
@RequestMapping("/list")

public class manageStaffListCtr{
	@Autowired UserRolesService userRolesService;
	@Autowired RoleService roleService;
	@Autowired CommonService commonService;
	@Autowired UserAdminAuthService userAdminAuthService;
	
	/**
	 * 管理人员首页
	 */
    @RequestMapping(value = "auth/manageStaffList.html",method = RequestMethod.GET)
    public ModelAndView manageStaffList(HttpServletRequest req,HttpServletResponse res,ModelMap model){	   	
//		Map<String,String> con = new HashMap<String, String>();
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		model.put("user", user);
		///////////////////////////////////////////////////////
		String sign = req.getParameter("sign");
		String orgDepId = req.getParameter("orgDepId");
		String roleId = req.getParameter("roleId");
		String sn = req.getParameter("sn");
		String name = req.getParameter("name");
		String authorizePerson = req.getParameter("authorizePerson");
		String startTime = req.getParameter("startTime");
		String endTime = req.getParameter("endTime");
		Map<String, String> con = new HashMap<String, String>();
		
		con.put("orgDepId", orgDepId);
			
//		con.put("logo", "0");
		con.put("rolename", roleId);  //根据需求, 这里roleId其实携带的是按角色名称查询
		con.put("usn", sn);
		con.put("uname", name);
		con.put("authorizePersonId", authorizePerson);
		con.put("startTime", startTime);
		con.put("endTime", endTime);
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("isSub", "1");
		
		
		
		Collection<UserAdminAuthBo> manageStaffList = userAdminAuthService.getUserAdminAuthForPage(con, PagerTool.getPageNo(req), PagerTool.getPageSize(req));	
		model.put("manageStaffList", manageStaffList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		
		//循环角色
		List<UserRolesBo> roleList = getUserRoless();
		model.put("roleList", roleList);
    	return new ModelAndView("list/auth/manageStaffList",model);
    }
    
    /**
     * 角色人员管理列表
     */
    @RequestMapping(value = "auth/roleStaffList.html",method = RequestMethod.GET)
    public ModelAndView roleStaffList(HttpServletRequest req,HttpServletResponse res,ModelMap model){	   	
		Map<String,String> con = new HashMap<String, String>();		
		///////////////////////////////////////////////////////
		String sn = req.getParameter("sn");
		String name = req.getParameter("name");
		String roleId = req.getParameter("roleId");

		con.put("sn", sn);
		con.put("name", name);
		con.put("roleId", roleId);
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		
		Collection<UserRolesBo> roleStaffList = userRolesService.getUserRoless4Page(con);	
		model.put("roleStaffList", roleStaffList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
    	return new ModelAndView("list/auth/roleStaffList",model);
    }
    
	private List<UserRolesBo> getUserRoless(){
		List<UserRolesBo> list = new ArrayList<UserRolesBo>();
		list = userRolesService.getUserRoless(null);
		return list;
	}
}
