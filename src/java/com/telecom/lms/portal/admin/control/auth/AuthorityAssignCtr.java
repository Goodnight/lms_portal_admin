package com.telecom.lms.portal.admin.control.auth;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.telecom.lms.core.bo.auth.*;
import com.telecom.lms.sdk.service.auth.*;

@Controller
@RequestMapping("/auth")
public class AuthorityAssignCtr{
	@Autowired RolePermitService rolePermitService;
	//@Autowired CommonService commonService;
	
	/**
	 * 权限分配首页
	 */
	@RequestMapping(value = "authorityAssign.html",method = RequestMethod.GET)
	public ModelAndView authorityAssign(HttpServletRequest req,HttpServletResponse res,String rpId,ModelMap model){
		//Node node = commonService.queryOrgForTree();
		//model.put("node", node);
		//urId为空则新建，不为空修改
		if(rpId != null){
			RolePermitBo rp = rolePermitService.getRolePermit(rpId);
			model.put("rp", rp);
		}
		else{
			model.put("rp", new RolePermitBo());
		}
		return new ModelAndView("auth/authorityAssign",model);
	}
	
	//分配权限
	@RequestMapping(value = "authorityAllocation.html",method = RequestMethod.GET)
	public ModelAndView systemAdmin(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		//Node node = commonService.queryOrgForTree();
		//model.put("node", node);
		String rpId = req.getParameter("rpId");
		RolePermitBo rp = rolePermitService.getRolePermit(rpId);
		model.put("rp", rp);
		return new ModelAndView("auth/authorityAllocation",model);
	}
}
