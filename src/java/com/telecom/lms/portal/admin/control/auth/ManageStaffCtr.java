package com.telecom.lms.portal.admin.control.auth;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
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
import com.telecom.lms.core.bo.auth.UserAdminAuthCon;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.auth.UserInfoCon;
import com.telecom.lms.core.bo.auth.UserPermitCon;
import com.telecom.lms.core.bo.auth.UserRolesBo;
import com.telecom.lms.core.bo.auth.UserRolesCon;
import com.telecom.lms.core.bo.auth.UserScopeCon;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.StringTool;
import com.telecom.lms.sdk.service.auth.RolePermitService;
import com.telecom.lms.sdk.service.auth.RoleService;
import com.telecom.lms.sdk.service.auth.UserAdminAuthService;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.auth.UserRolesService;
import com.telecom.lms.sdk.service.auth.UserScopeService;
import com.telecom.lms.sdk.util.DateTool;
@Controller
@RequestMapping("/auth")
public class ManageStaffCtr{
	@Autowired CommonService commonService;
	@Autowired UserRolesService userRolesService;
	@Autowired UserInfoService userInfoService;
	@Autowired UserScopeService userScopeService;
	@Autowired RoleService roleService;
	@Autowired RolePermitService rolePermitService;
	@Autowired UserAdminAuthService userAdminAuthService;
	
	/**
	 * 管理人员列表首页
	 */
    @RequestMapping(value = "manageStaffList.html",method = RequestMethod.GET)
	public ModelAndView manageStaffList(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		List<RoleBo> roleList = getList(null);
		model.put("roleList", roleList);
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
    	Map<String, String> con = new HashMap<String, String>();
    	con.put("uid", user.getUid());
    	OrganizationBo ob = userInfoService.getManageOrg(con);
    	model.put("orgDepOriId", ob.getOrgId());
		return new ModelAndView("auth/manageStaffList",model);
    }
    
    /**
     * 保存修改管理范围
     */
    @RequestMapping(value = "saveUserOrg.html",method = RequestMethod.POST)
    @ResponseBody
    public Return saveUserOrg(HttpServletRequest req,HttpServletResponse res,ModelMap model){
    	String user_id = req.getParameter("user_id");
    	String org_id[] = req.getParameterValues("org_id"); //机构id已通过,拼接
    	
    	///////20130307判断重复部门Id//////////////////
    	Map<String, String> ocon = new HashMap<String, String>();
    	ocon.put("uid", user_id);
    	OrganizationBo ob = userInfoService.getManageOrg(ocon);
    	String defaultOrgId = ob.getOrgId(); //用户默认所属部门
    	if(org_id!=null&&org_id.length>0)
    	{
    		String operateOrgId = StringTool.getString(org_id, StringTool.SPLIT_COMMA); //选择分配的部门序列
    		if(operateOrgId.indexOf(defaultOrgId) == -1){ //不为子串直接保存
            	UserScopeCon con = new UserScopeCon();
            	con.setUser_id(user_id);
            	con.setOrg_id(operateOrgId);
            	Return re = userScopeService.newUserScope(con);
            	return re;
        	}
        	else{
        		operateOrgId = operateOrgId.replaceAll(defaultOrgId+",", ""); //当为子串时用空串将重复部分加一个逗号替换掉
        		UserScopeCon con = new UserScopeCon();
            	con.setUser_id(user_id);
            	con.setOrg_id(operateOrgId);
            	Return re = userScopeService.newUserScope(con);
            	return re;
        	}
    	}
    	else
    	{
    		//LuChao Add 当没有选择任何管辖范围时
    		UserScopeCon con = new UserScopeCon();
        	con.setUser_id(user_id);
    		Return re = userScopeService.removeUserScope(con);
        	return re;
    	}
    }
    
    /**
     * 保存修改权限模块
     */
    @RequestMapping(value = "saveUserMenu.html",method = RequestMethod.POST)
    @ResponseBody
    public Return saveUserMenu(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		String user_id = req.getParameter("user_id");
		String menu_ids[] = req.getParameterValues("menu_ids"); //菜单id已通过,拼接
		UserPermitCon con = new UserPermitCon();
		con.setCreate_id(user.getUid());
		con.setMenu_ids(StringTool.getString(menu_ids, StringTool.SPLIT_COMMA));
		con.setUser_id(user_id);
		Return re = userScopeService.newUserPermit(con);
    	return re;
    }

    /**
     * 角色人员管理首页
     */
    @RequestMapping(value = "roleStaffList",method = RequestMethod.GET)
	public ModelAndView roleStaffList(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String rId = req.getParameter("rId");
		if(rId != "" && rId != null){
			RoleBo rb = roleService.getRole(rId);
			model.put("rb", rb);
		}
		else{
			model.put("rb", new RoleBo());
		}
		return new ModelAndView("auth/roleStaffList",model);
    }
    
    /**
     * 权限移除
     */
	@RequestMapping(value="deleteStaff.html",method=RequestMethod.POST)
	@ResponseBody
	public Return deleteLineManager(HttpServletRequest req,HttpServletResponse res,@RequestParam("index") String ids){
		Return re = userAdminAuthService.removeAllUserAdminAuth(ids);
		return re;
	}
	
	/**
     * 移交权限
     */
	@RequestMapping(value="saveStaff.html",method=RequestMethod.POST)
	@ResponseBody
	public Return saveManager(HttpServletRequest request){
		try{
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user"); 
		String urId = request.getParameter("urId");
//		UserRolesBo urb = userRolesService.getUserRoles(urId);
//		String roleId = urb.getRole().getrId();   //当前管理员角色
 		String userId = request.getParameter("userId"); //移交目标用户
//		String authorizePersonId = user.getUid();  //授权人
//		Calendar ca = Calendar.getInstance();
//		int year = ca.get(Calendar.YEAR);
//		int month = ca.get(Calendar.MONTH)+1;
//		int day = ca.get(Calendar.DATE);
//		String authorizedTime = year+"-"+month+"-"+day;  //授权时间
//		int status = 1; //有效状态
		
//		UserRolesCon con = new UserRolesCon();
//		con.setUrId(urId);
//		con.setRoleId(roleId);
//		con.setUserIds(userId);
//		con.setAuthorizePersonId(authorizePersonId);
//		con.setAuthorizedTime(authorizedTime);
//		con.setStatus(status);
		
		UserAdminAuthCon con = new UserAdminAuthCon();
		con.setAdmin_id(urId);
		con.setFromAdmin_id(user.getUid());
		con.setAuthorizePerson_id(user.getUid());
		GregorianCalendar gc = new GregorianCalendar();
		Date now = gc.getTime();
		SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		con.setAuthorized_time(format.format(now));
		con.setStatus(1);
		con.setTo_user_id(userId);
		Return re = userAdminAuthService.transfer(con);
		return re;
		}
		catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}
	
	/**
	 * 新增管理员
	 */
	@RequestMapping(value="newManageStaff.html",method=RequestMethod.GET)
	public ModelAndView newManageStaff(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		model.put("user", user);
    	Map<String, String> con = new HashMap<String, String>();
    	con.put("uid", user.getUid());
    	OrganizationBo ob = userInfoService.getManageOrg(con);
    	model.put("orgRoleId", ob.getOrgId());
		return new ModelAndView("auth/newManageStaff",model);
	}
	
	/**
	 * 获得批量新增角色列表
	 */
	@RequestMapping(value="obtainRoleList.html",method=RequestMethod.GET)
	public ModelAndView obtainRoleList(HttpServletRequest req,ModelMap model){
		Map<String, String> con = new HashMap<String, String>();
		//LMSWD-2638 权限管理--管理人员列表，管理员需要可以看到所有角色 by LTC 20130517
		String orgRoleId = req.getParameter("orgRoleId");		
		con.put("orgId", orgRoleId);
		List<RoleBo> roleList = roleService.getRoles(con);
		model.put("roleList", roleList);
		return new ModelAndView("auth/addRoles",model);
	}
	
	
	/**
	 * 维护管理员
	 */
	@RequestMapping(value="modifyManageStaff.html",method=RequestMethod.GET)
	public ModelAndView modifyManageStaff(HttpServletRequest req,ModelMap model){
		String urId = req.getParameter("urId");
		if(urId != "" && urId != null){
			UserRolesBo ur = userRolesService.getUserRoles(urId);
			model.put("ur", ur);
		}
		else{
			UserRolesBo ur = new UserRolesBo();
			model.put("ur", ur);
		}		
		
		String rId = req.getParameter("rId"); 
		if(rId != "" && rId != null){
			RoleBo rb = roleService.getRole(rId);
			model.put("rb", rb);
		}
		else{
			model.put("rb", new RoleBo());
		}
		
		List<RoleBo> roleList = getList(rId);
		model.put("roleList", roleList);
		return new ModelAndView("auth/modifyManageStaff",model);
	}

	private List<RoleBo> getList(String rId){
		List<RoleBo> list = new ArrayList<RoleBo>();;
		if(rId == null || "".equals(rId)){
			list = roleService.getRoles(null);
		}else{
			list.add(roleService.getRole(rId));
		}
		return list;
	}
	
	/**
	 * 管理人员列表-删除人员
	 */
	@RequestMapping(value = "deleteUser.html", params = "method=remove", method = RequestMethod.POST)
	@ResponseBody
	public String deleteUser(HttpServletRequest req, @RequestParam("Ids") String ids,@RequestParam("rId") String rId){
		Return re = userRolesService.removeRoleUser(rId, ids);
		return (String) re.getContent();
	}
	
	/**
	 * 管理人员列表-删除部门
	 
	@RequestMapping(value = "deleteDep.html", params = "method=remove", method = RequestMethod.POST)
	@ResponseBody
	public String deleteDep(HttpServletRequest req, @RequestParam("Ids") String ids, @RequestParam("rId") String rId) {
		Return re = roleScopeService.removeRoleDepartment(rId, ids);
		return (String) re.getContent();
	}
	**/
	
	/**
	 * 管理人员列表 - 保存所辖范围
	 */
	@RequestMapping(value = "saveType.html", params = "method=save", method = RequestMethod.POST)
	@ResponseBody
	public String saveType(HttpServletRequest req, @RequestParam("uid") String uid, @RequestParam("depId") String depId) {
		UserInfoCon con = new UserInfoCon();
		con.setUid(uid);
		int type = 1;
		if(depId != null && !"".equals(depId)){
			type = Integer.parseInt(depId);
		}
		con.setType(type);
		Return re = userInfoService.updateUserInfo(con);
		return (String) re.getContent();
	}
	
	/**
	 * 管理人员列表 - 保存用户角色
	 */
	@RequestMapping(value = "saveRole.html", params = "method=save", method = RequestMethod.POST)
	@ResponseBody
	public String saveRole(HttpServletRequest req, @RequestParam("urId") String urId, @RequestParam("rId") String rId) {
		UserRolesCon con = new UserRolesCon();
		con.setUrId(urId);
		con.setRoleId(rId);
		Return re = userRolesService.newUserRoles(con);
		return (String) re.getContent();
	}
	
	/**
	 * 管理人员列表 - 新增管理员保存
	 */
	@RequestMapping(value = "saveManageStaff.html",method = RequestMethod.POST)
	public ModelAndView saveManageStaff(HttpServletRequest req, ModelMap model){
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		UserRolesCon con = new UserRolesCon();
		Calendar ca = Calendar.getInstance();
		int year = ca.get(Calendar.YEAR);
		int month = ca.get(Calendar.MONTH)+1;
		int day = ca.get(Calendar.DATE);
		String date = year+"-"+month+"-"+day;
		
		String userIdString = req.getParameter("userId"); //20130304用户新增为单选
		String roleIds[] = req.getParameterValues("roleIds");//角色为多选
		String Ids[] = req.getParameterValues("Ids");//权限为多选
		boolean flag = true; //初始化判断是否进行保存标志位为真
		
		//用户&角色
		if(null == userIdString || "".equals(userIdString)){ //用户输入为空进行报错
			flag = false;
			//跳转报错页面
			return new ModelAndView("redirect:errorReport.html?type=user",model);
		}
		if(null == roleIds && Ids==null){ //角色输入为空进行报错
			flag = false;
			//跳转报错页面
			return new ModelAndView("redirect:errorReport.html?type=role",model);
		}
		if(flag){
			if(roleIds!=null){
			String roleId = StringTool.getString(roleIds, StringTool.SPLIT_COMMA);//20130304角色为多选并以逗号分隔
			con.setUserIds(userIdString);
			con.setRoleId(roleId);
			con.setAuthorizedTime(date);
			con.setAuthorizePersonId(user.getUid());
			con.setStatus(1);
			userRolesService.newUserRolesAll(con); //20130304新的用户角色保存接口
			}
			if(Ids!=null){
				String rId = null;
				RoleCon roleCon = new RoleCon();
				roleCon.setName("");
				roleCon.setSn("");
				roleCon.setType(4);
				Return re = roleService.newRole(roleCon);
				if (re != null && re.getCode()!=null && !re.getCode().equals("fail")) {
					rId = re.getCode();
				}
				UserRolesCon dc = new UserRolesCon();
				dc.setRoleId(rId);
				dc.setUserIds(userIdString);
				dc.setAuthorizePersonId(user.getUid());
				dc.setStatus(1);
				userRolesService.newUserRoles(dc);
				for (String id : Ids) {
					RolePermitCon rp = new RolePermitCon();	
					rp.setMenuId(id);
					rp.setRoleId(rId);
					rp.setIsInquiry(1);
					rp.setIsDelete(0);
					rp.setIsAddition(0);
					rp.setIsModify(0);
					rolePermitService.newRolePermit(rp);
				}
				
			}
			
		}
		
		//级别已做校验
		UserInfoCon uicon = new UserInfoCon();
		String levelType = req.getParameter("levelType");
		int type = 1;
		if(levelType != null && levelType != ""){
			type = Integer.parseInt(levelType);
		}
		uicon.setType(type);
		uicon.setUid(userIdString);
		userInfoService.updateUserInfo(uicon);
	
		
		//部门
		String org_id[] = req.getParameterValues("depIds"); //机构id已通过,拼接
		boolean sign = true;
		if(null == org_id){
			sign = false;
			//跳转报错页面
			return new ModelAndView("redirect:errorReport.html?type=org",model);
		}
		if(sign){
			String orgId = StringTool.getString(org_id, StringTool.SPLIT_COMMA);
	    	UserScopeCon uscon= new UserScopeCon();
	    	uscon.setOrg_id(orgId);
			uscon.setUser_id(userIdString);
			userScopeService.newUserScope(uscon);
		}
		
		if(flag == true && sign == true){           //以上保存均无问题
			UserAdminAuthCon uac = new UserAdminAuthCon();
			uac.setAdmin_id(userIdString);
			uac.setAuthorized_time(date);
			uac.setAuthorizePerson_id(user.getUid());
			uac.setStatus(1);
			userAdminAuthService.saveOrUpdateUserAdminAuth(uac);
		}
		
//		//菜单
//		String menu_ids[] = req.getParameterValues("menuIds"); //菜单id已通过,拼接
//		String inquiryVal[] = req.getParameterValues("inquiryVal"); //批量增删改查
//		String addVal[] = req.getParameterValues("addVal");
//		String modifyVal[] = req.getParameterValues("modifyVal");
//		String delVal[] = req.getParameterValues("delVal");
	
//		UserPermitCon upcon = new UserPermitCon();   //批量保存以逗号分隔Id序列
//		upcon.setCreate_id(user.getUid());
//		upcon.setMenu_ids(StringTool.getString(menu_ids, StringTool.SPLIT_COMMA));
//		upcon.setIsInquiry(StringTool.getString(inquiryVal, StringTool.SPLIT_COMMA));
//		upcon.setIsAddition(StringTool.getString(addVal, StringTool.SPLIT_COMMA));
//		upcon.setIsModify(StringTool.getString(modifyVal, StringTool.SPLIT_COMMA));
//		upcon.setIsDelete(StringTool.getString(delVal, StringTool.SPLIT_COMMA));
//		upcon.setUser_id(StringTool.getString(userIdString, StringTool.SPLIT_COMMA));
		
//		userScopeService.newUserPermitAll(upcon);
		return new ModelAndView("redirect:manageStaffList.html",model);		
	}
	
	/**
	 * 新增管理员报错处理
	 */
	@RequestMapping(value="errorReport.html",method=RequestMethod.GET)
	public ModelAndView errorReport(HttpServletRequest req,ModelMap model){
		String type = req.getParameter("type"); //获得保存类型:用户/角色/机构
		model.put("type", type);
		return new ModelAndView("auth/errorReport",model);
	}
	
	/**
	 * 管理人员列表 - 菜单模块列修改操作
	 */
	@RequestMapping(value = "changeRoleAuthority.html",method = RequestMethod.POST)
    public ModelAndView changeRoleAuthority(HttpServletRequest req,ModelMap model){	   	
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
		rolePermitService.newRolePermit(rp);
		return new ModelAndView("redirect:manageStaffList.html",model);
    }
	
	/**
	 * 查询出列表机构树rootId
	 */
	@RequestMapping(value = "adminshowtree.html", method = RequestMethod.GET)
	@ResponseBody
	public Return adminshowtree(HttpServletRequest req){
		Map<String, String> con = new HashMap<String, String>();
		String operateuid = req.getParameter("operateuid");
		con.put("uid", operateuid);//根据当前用户Id
		///////////////调用Service////////////////////
		OrganizationBo ob = userInfoService.getManageOrg(con);
		String rootId = ob.getOrgId(); //取管辖范围而不是其上级 20130401 LMSWD-2038@顾梅伊帆确认修改 by LTC
		Return re = new Return();
		re.setContent(rootId);
		return re;
	}	
	
	//管理人员列表首页添加角色弹出框
	@RequestMapping(value="toSelectRole.html",method=RequestMethod.GET)
	public ModelAndView totoSelectRole(HttpServletRequest request, ModelMap model){
		String uId = request.getParameter("uId");
		model.put("uId", uId);
		
    	UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
    	Map<String, String> con = new HashMap<String, String>();
    	con.put("uid", user.getUid());
    	
    	
    	Map<String, String> rcon = new HashMap<String, String>();
		//LMSWD-2638 权限管理--管理人员列表，管理员需要可以看到所有角色 by LTC 20130517
    	OrganizationBo ob = userInfoService.getManageOrg(con); 
    	rcon.put("orgId", ob.getOrgId());
		List<RoleBo> roleList = roleService.getRoles(rcon);  //当前登陆用户可以操作的角色列表
		model.put("roleList", roleList);
		
		Map<String, String> ucon = new HashMap<String, String>();
		ucon.put("uId", uId);
		List<UserRolesBo> roleListOwn = userRolesService.getUserRoless(ucon);  //当前被操作用户所拥有的角色列表
		model.put("roleListOwn", roleListOwn);
		return new ModelAndView("auth/selectRole", model);
	}
	
	//添加管理人员角色
    @RequestMapping(value="doSaveRole.html",method=RequestMethod.POST)
    public String doSaveRole(UserRolesCon userRolesCon,HttpServletRequest req,ModelMap model){
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
	    String uId = req.getParameter("uId");
	    String items[] = req.getParameterValues("groupId");
	    if(items!=null&&items.length>0)
	    {
	    	String str = "";
	    	for(int i=0;i<items.length;i++){
	    		str +=items[i]+",";
	    	}
	    	userRolesCon.setRoleId(str);
	    }
	    else
	    {
	    	userRolesCon.setRoleId(null);
	    }
	    userRolesCon.setUserIds(uId);
	    userRolesCon.setStatus(1);
	    userRolesCon.setAuthorizePersonId(user.getUid());
	    userRolesCon.setAuthorizedTime(DateTool.getNormal());
	    userRolesService.newUserRolesAll(userRolesCon);
	    return "redirect:manageStaffList.html";
	}
}
