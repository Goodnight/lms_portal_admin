package com.telecom.lms.portal.admin.control.auth;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
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
import com.telecom.lms.core.bo.auth.RoleBo;
import com.telecom.lms.core.bo.auth.RoleCon;
import com.telecom.lms.core.bo.auth.RolePermitCon;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.sdk.service.auth.RolePermitService;
import com.telecom.lms.sdk.service.auth.RoleService;
import com.telecom.lms.sdk.service.auth.UserInfoService;

@Controller
@RequestMapping("/auth")
public class RoleManagement{
	@Autowired RoleService roleService;
	@Autowired CommonService commonService;
	@Autowired RolePermitService rolePermitService;
	@Autowired UserInfoService userInfoService;
	
	/**
	 * 角色管理首页
	 */
	@RequestMapping(value = "roleManagement.html",method = RequestMethod.GET)
	public ModelAndView roleManagement(HttpServletRequest req,HttpServletResponse res,String rId,ModelMap model){
		//rId为空则新建，不为空修改
		if(null!=rId){
			RoleBo rb = roleService.getRole(rId);
			model.put("rb", rb);
		}
		else{
			model.put("rb", new RoleBo());
		}
		Map<String, String> conT = new HashMap<String, String>();
		conT.put("type", "2");
		List<RoleBo> roleList = roleService.getRoles(conT); //List中仅查询出初始角色
		model.put("roleList", roleList);
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		model.put("user", user);
		Map<String, String> con = new HashMap<String, String>();
		if(null!=user.getUid() && user.getUid()!=""){
	    	con.put("uid", user.getUid());
		}
    	OrganizationBo ob = userInfoService.getManageOrg(con);
    	model.put("orgDepOriId", ob.getOrgId());
		return new ModelAndView("auth/roleManagement",model);
	}
	
	//自定义角色
	@RequestMapping(value = "roleDefine.html",method = RequestMethod.GET)
	public ModelAndView roleDefine(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String rId = req.getParameter("rId");
		//rId为空则新建，不为空修改
		if(rId != null){
			RoleBo rb = roleService.getRole(rId);
			model.put("rb", rb);
		}
		else{
			model.put("rb", new RoleBo());
		}
		return new ModelAndView("auth/roleDefine",model);
	}
	
	//自定义角色-权限分配
	@RequestMapping(value = "roleDefineArrange.html",method = RequestMethod.GET)
	public ModelAndView roleDefineArrange(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String rId = req.getParameter("rId");
		//rId为空则新建，不为空修改
		if(rId != null){
			RoleBo rb = roleService.getRole(rId);
			model.put("rb", rb);
		}
		else{
			model.put("rb", new RoleBo());
		}
		return new ModelAndView("auth/roleDefineArrange",model);
	}
	
	//自定义角色新增/修改
	@RequestMapping(value = "modifyRoleDefine.html",method = RequestMethod.POST)
	public Return modifyRoleDefine(HttpServletRequest req,ModelMap model){
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		OrganizationBo organizationBo = (OrganizationBo) req.getSession().getAttribute("defaultOrg");
		RoleCon rc = new RoleCon();
		Calendar ca = Calendar.getInstance();
		int year = ca.get(Calendar.YEAR);
		int month = ca.get(Calendar.MONTH)+1;
		int day = ca.get(Calendar.DATE);
		String date = year+"-"+month+"-"+day;
		String name = req.getParameter("name");
		String sn = req.getParameter("sn");
		String remark = req.getParameter("remark");
		String rId = req.getParameter("rId");
		if(rId != null && rId != ""){
			rc.setrId(rId);
			rc.setUpdateDate(date); //为修改更新修改时间
			rc.setUpdaterId(user.getUid()); //修改人
		}
		else{
			rc.setCreateDate(date); //否则更新创建时间
			rc.setCreaterId(user.getUid()); //创建人
		}
		rc.setSn(sn);
		rc.setName(name);
		rc.setRemark(remark);
		//设置自定义角色为2
		rc.setType(2);
//		rc.setTypeId("ff808081385bcac601385bee6d4201ef");
		rc.setOrgId(organizationBo.getOrgId());
		Return re = roleService.newRole(rc);
		return re;
	}

	 //新增管理员报错处理
	@RequestMapping(value="errorTip.html",method=RequestMethod.GET)
	public ModelAndView errorReport(HttpServletRequest req,ModelMap model){
		String type = req.getParameter("type"); //获得保存类型:用户/角色/机构
		model.put("type", type);
		return new ModelAndView("auth/errorTip",model);
	}
	
	//移除权限
	@RequestMapping(value="deleteRole.html",method=RequestMethod.POST)
	@ResponseBody
	public Return deleteLineManager(HttpServletRequest req,HttpServletResponse res,@RequestParam("index") String ids){
		Return re = roleService.removeRoles(ids);
		return re;
	}
	
	//循环取出数据库中的角色信息
	private List<RoleBo> getList(String typeId){
		List<RoleBo> list = new ArrayList<RoleBo>();
		Map<String,String> con = new HashMap<String, String>();
		con.put("type", typeId);
		List<RoleBo> r = roleService.getRoles(con);
		list.addAll(r);
		return list;
	}
	
    /**
     * 保存修改权限分配列表
     */
    @RequestMapping(value = "saveRoleAuthority.html",method = RequestMethod.POST)
    public Return saveRoleAuthotiry(HttpServletRequest req){	   	
		RolePermitCon rp = new RolePermitCon();		
		String menuId = req.getParameter("menuId");
		String roleId = req.getParameter("roleId");
		String rolePermit = req.getParameter("rolePermit");
		rp.setMenuId(menuId);
		rp.setRoleId(roleId);
		//判断是否存在rolePermitId,若存在则写入,做修改覆盖操作
		if(rolePermit != null && rolePermit != ""){
			rp.setRpId(rolePermit);
		}
		//查看权限
		String _isInquiry = req.getParameter("inquiry");
		if(_isInquiry != null && _isInquiry != ""){
			int isInquiry = Integer.parseInt(_isInquiry);
			rp.setIsInquiry(isInquiry);
		}
		else{
			rp.setIsInquiry(0);
		}
		//增加权限
		String _isAddition = req.getParameter("add");
		if(_isAddition != null && _isAddition != ""){
			int isAddition = Integer.parseInt(_isAddition);
			rp.setIsAddition(isAddition);
		}
		else{
			rp.setIsAddition(0);
		}
		//修改权限
		String _isModify = req.getParameter("modify");
		if(_isModify != null && _isModify != ""){
			int isModify = Integer.parseInt(_isModify);
			rp.setIsModify(isModify);
		}
		else{
			rp.setIsModify(0);
		}
		//删除权限
		String _isDelete = req.getParameter("delete");
		if(_isDelete != null && _isDelete != ""){
			int isDelete = Integer.parseInt(_isDelete);
			rp.setIsDelete(isDelete);
		}
		else{
			rp.setIsDelete(0);
		}
		Return re = rolePermitService.newRolePermit(rp);
		return re;
    }
}
