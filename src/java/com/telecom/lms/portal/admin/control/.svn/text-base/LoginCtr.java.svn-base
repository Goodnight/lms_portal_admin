package com.telecom.lms.portal.admin.control;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.telecom.lms.core.bo.auth.MenuBo;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.PositionBo;
import com.telecom.lms.core.bo.auth.RolePermitBo;
import com.telecom.lms.core.bo.auth.UserAdminAuthBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.auth.UserInfoCon;
import com.telecom.lms.core.bo.auth.UserRolesBo;
import com.telecom.lms.core.bo.auth.UserRolesCon;
import com.telecom.lms.portal.admin.service.ConfigInfo;
import com.telecom.lms.portal.admin.service.LoginService;
import com.telecom.lms.portal.admin.util.JSNode;
import com.telecom.lms.portal.admin.util.SessionConstants;
import com.telecom.lms.portal.admin.util.StringTool;
import com.telecom.lms.sdk.plugin.service.auth.UserInfoPluginService;
import com.telecom.lms.sdk.service.auth.BaseInfoService;
import com.telecom.lms.sdk.service.auth.MenuService;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.auth.PositionService;
import com.telecom.lms.sdk.service.auth.RolePermitService;
import com.telecom.lms.sdk.service.auth.UserAdminAuthService;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.auth.UserRolesService;
import com.telecom.lms.sdk.service.auth.UserScopeService;
import com.telecom.lms.sdk.service.resources.KnowledgeCategoryService;
import edu.yale.its.tp.cas.client.filter.CASFilter;

@Controller
@RequestMapping("/")
public class LoginCtr {
	private static Logger log = LoggerFactory.getLogger(LoginCtr.class);
	@Autowired LoginService loginService;
	@Autowired UserInfoPluginService ufpService;
	@Autowired UserScopeService userScopeService;
	@Autowired BaseInfoService biService;
	@Autowired UserRolesService userRolesService;
	@Autowired RolePermitService permitService;
	@Autowired KnowledgeCategoryService knowledgeCategoryService;
	@Autowired OrganizationService orgServcie;
	@Autowired PositionService positionService;
	@Autowired UserInfoService userService;
	@Autowired MenuService menuService;
	@Autowired ConfigInfo configInfo;
	@Autowired UserAdminAuthService adminAuthService;
	private final  String  SYSTEM_MAINTENANCE="1";//说明系统在维护中不能操作
	
	/**
	 * 在session中设置用户id、用户名以及用户所在部门id和部门名称
	 * @param username 用户名
	 * @param password	密码
	 * @param request
	 * @param model
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	@RequestMapping(value="login.html",method=RequestMethod.POST)
	public String login(String username, String password,HttpServletRequest request, ModelMap model) throws Exception {
		UserInfoBo user = loginService.getUser(username, password);
		return commonLogin(user.getUid(), user, request);
	}
	@RequestMapping(value="singlelogin.html")
	public String sslogin(String username, String password,HttpServletRequest request, ModelMap model) throws Exception{
		HttpSession session = request.getSession();
		String uid = (String)session.getAttribute(CASFilter.CAS_FILTER_USER); //获取用户id
		
		if(configInfo.getIsSystemMaintenance().equals(SYSTEM_MAINTENANCE)){
			model.put("instruction", configInfo.getInstruction());
			return "error/systemMaintenance";
		}
		//获得用户失败
		if(StringUtils.isBlank(uid)){
			log.error("sso uid 是空");
			return "error/sso";
		}
		/*查看用户是否已经存在*/
		UserInfoBo user1 = loginService.getUserById(uid);
		
		return commonLogin(uid,user1, request);
	}
	
	/**
	 * 当user1不为空是session中存放user1对象，否则通过uid查询
	 * 设置两个参数主要是用于ssl登录, 本地登录不存在这个问题
	 * @param uid 用户id
	 * @param user1 用户对象
	 * @param request
	 */
	@SuppressWarnings("unchecked")
	private String commonLogin(String uid, UserInfoBo user1, HttpServletRequest request) throws Exception{
		HttpSession session = request.getSession();
		/**
		 * 验证管理端登陆用户是否是某培训班的班主任，因为班主任没有在管理权限表里，所以要先过滤
		 **/
		Long count = userRolesService.isTrainTeacher(uid);
		
		if(count==null||count==0){
			//检查权限变更记录
			Map<String,String> authCon = new HashMap<String, String>();
			authCon.put("uid", uid);
			List<UserAdminAuthBo> authList = adminAuthService.getUserAdminAuths(authCon);
			if(authList==null || authList.isEmpty()){
				session.setAttribute(SessionConstants.SESSION_USER, null);
				session.invalidate();
				return "redirect:/logout";
			}
		}
		
		List<MenuBo> allMenuList = (List<MenuBo>) request.getSession().getServletContext().getAttribute(SessionConstants.CONTEXT_MENU_LIST);
		if(user1==null){
			UserInfoBo  user = ufpService.get(uid);
			//获得用户失败
			if(null == user){
				log.error("不能获得本地用户");
				return "error/sso";
			}
			UserInfoCon uic = new UserInfoCon();
			uic.setUid(user.getUid());
			uic.setName(user.getName());
			uic.setType(2);
			biService.saveUserInfo(uic);
			user = loginService.getUserById(user.getUid());
			
			Calendar ca = Calendar.getInstance();
			int year = ca.get(Calendar.YEAR);
			int month = ca.get(Calendar.MONTH)+1;
			int day = ca.get(Calendar.DATE);
			String date = year+"-"+month+"-"+day;
			//保存or修改用户角色
			UserRolesCon urc = new UserRolesCon();
			urc.setRoleId("ff80808139e9049e0139f7d7e7ab007a");
			urc.setAuthorizedTime(date);
			urc.setAuthorizePersonId(user.getUid());
			urc.setStatus(1);
			urc.setUserIds(user.getUid());
			userRolesService.newUserRoles(urc);
			
			Map<String, String> con = new HashMap<String, String>();
			con.put("uid", user.getUid());
			/**
			 * 判断是不是超级管理员
			 */
			if(configInfo.getSuperUsers().contains(user.getName())){
				//如果是超级管理员则有所有权限
				session.setAttribute(SessionConstants.SESSION_USER_MENU_LIST, allMenuList);
			}else{
				session.setAttribute(SessionConstants.SESSION_USER_MENU_LIST, this.getUserMenuList(user));
			}
			
			StringBuffer sb = new StringBuffer();
			sb.append(user.getOrg().getIdPath());
			session.setAttribute(SessionConstants.SESSION_USER, user);
			session.setAttribute(SessionConstants.SESSION_ROOT_POSITION, getRootPosition());
			//用户管辖机构列表
			List<OrganizationBo> manageOrgList = userService.getManageOrgs(con);
			if(manageOrgList!=null){
				session.setAttribute(SessionConstants.SESSION_MANAGE_ORG_LIST, manageOrgList);
				session.setAttribute(SessionConstants.SESSION_DEFAULT_ORG, manageOrgList.get(0));
				session.setAttribute(SessionConstants.SESSION_ROOT_ORG, manageOrgList!=null?manageOrgList.get(0).getOrgId():null);
			}
			//集团的id
			session.setAttribute("groupOrgId", configInfo.getGroupOrgId());
			String href= request.getParameter("href");
			if(null!=href&&!href.equals("")){
				return "redirect:"+URLDecoder.decode(href, "utf-8");
			}
		}else{
			//获得用户失败
			if(StringUtils.isBlank(user1.getUid())){
				log.error("用户id是空");
				return "error/sso";
			}
			Map<String, String> con = new HashMap<String, String>();
			con.put("uid", user1.getUid());
			/**
			 * 判断是不是超级管理员
			 */
			if(configInfo.getSuperUsers().contains(user1.getName())){
				//如果是超级管理员则有所有权限
				session.setAttribute(SessionConstants.SESSION_USER_MENU_LIST, allMenuList);
			}else{
				session.setAttribute(SessionConstants.SESSION_USER_MENU_LIST, this.getUserMenuList(user1));
			}
			
			session.setAttribute(SessionConstants.SESSION_USER, user1);
			StringBuffer sb = new StringBuffer();
			sb.append(user1.getOrg().getIdPath());
			session.setAttribute("orgPath", getDepPath(sb.toString()));
			session.setAttribute(SessionConstants.SESSION_ROOT_POSITION, getRootPosition().getpId());
			//用户管辖机构列表
			List<OrganizationBo> manageOrgList = userService.getManageOrgs(con);
			if(manageOrgList!=null){
				session.setAttribute(SessionConstants.SESSION_MANAGE_ORG_LIST, manageOrgList);
				session.setAttribute(SessionConstants.SESSION_DEFAULT_ORG, manageOrgList.get(0));
				session.setAttribute(SessionConstants.SESSION_ROOT_ORG, manageOrgList!=null?manageOrgList.get(0).getOrgId():null);
			}
			//集团的id
			session.setAttribute("groupOrgId", configInfo.getGroupOrgId());
			String href= request.getParameter("href");
			if(null!=href&&!href.equals("")){
				return "redirect:"+URLDecoder.decode(href, "utf-8");
			}
		}
		return "redirect:"+configInfo.getIndexURL();
	}
	
	@RequestMapping(value="changeManageOrg.html")
	@ResponseBody
	public String changeManageOrg(HttpServletRequest request){
		String orgId = request.getParameter("orgId");
		OrganizationBo org = orgServcie.getOrganization(orgId);
		request.getSession().setAttribute(SessionConstants.SESSION_DEFAULT_ORG, org);
		return null;
	}
	
	/**
	 * 提示没有权限的页面
	 */
	@RequestMapping(value="permissionDenied.html")
	public String permissionDenied(HttpServletRequest request){
		
		return "error/permissionDenied";
	}
	/**
	 * 提示功能缺失的页面
	 */
	@RequestMapping(value="lossFunction.html")
	public String lossFunction(HttpServletRequest request){
		
		return "error/lossFunction";
	}
	
	/**
	 * 登出
	 */
	@RequestMapping("mylogout.html")
	public String logout(HttpServletRequest request, HttpServletResponse response){
		HttpSession session = request.getSession();
		session.setAttribute(SessionConstants.SESSION_USER, null);
		session.invalidate();
		return "redirect:/logout";
	}
	
	private String getDepPath(String path){
		String[] ids = path.split(StringTool.SPLIT_SLASH);
		String[] newids = new String[ids.length-1];
		System.arraycopy(ids, 0, newids, 0, ids.length-1);
		return StringTool.getArrayString(newids, StringTool.SPLIT_COMMA);
	}
	
	private List<MenuBo> getUserMenuList(UserInfoBo user){
		
		List<MenuBo> menuList = new ArrayList<MenuBo>();
		
		Map<String, String> con = new HashMap<String, String>();
		con.put("uId", user.getUid());
		con.put("forlogin", "1");
		List<UserRolesBo> userRoleList = userRolesService.getUserRoless(con);
		
		if(userRoleList!=null && userRoleList.size()>0){
			for(UserRolesBo ur : userRoleList){
				con.clear();
				con.put("rId", ur.getRole().getrId());
				List<RolePermitBo> permitList = permitService.getRolePermits(con);
				for(RolePermitBo rolePermit : permitList){
					if(!menuList.contains(rolePermit.getMenu())){
						menuList.add(rolePermit.getMenu());
					}
				}
			}
		}
		
//		Map<String,String> con = new HashMap<String, String>();
//		con.put("user_id", user.getUid());
//		List<MenuBo> menuList = menuService.getMenusUsers(con);
		for(int i=0;i<menuList.size();i++){
			MenuBo menu = menuList.get(i);
			if(!StringUtils.isBlank(menu.getAllowUserType())) {
				String[] types = menu.getAllowUserType().split(StringTool.SPLIT_COMMA);
				boolean exist = false;  	//菜单是否指定给特定用户
				for(String type : types){
					if(type.equals(Integer.toString(user.getType()))){
						exist = true;
					}
				}
				if(!exist){
					menuList.remove(i);
					i--;
				}
			}
		}
		return menuList;
	}
	
	/**获得岗位根节点**/
	private PositionBo getRootPosition(){
		Map<String,String> query = new HashMap<String, String>();
		query.put("upId", JSNode.POS_ROOT_ID);
		List<PositionBo> posList = positionService.getPositions4Tree(query);
		if(!posList.isEmpty()){
			return posList.get(0);
		}else{
			return null;
		}
	}
}
