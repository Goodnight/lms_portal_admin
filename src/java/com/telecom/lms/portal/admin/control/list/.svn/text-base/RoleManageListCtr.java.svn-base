package com.telecom.lms.portal.admin.control.list;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.JSNode;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.core.bo.auth.*;
import com.telecom.lms.sdk.service.auth.*;
@Controller
@RequestMapping("/list")

public class RoleManageListCtr{
	
	@Autowired RoleService roleService;
	@Autowired RolePermitService rolePermitService;
	@Autowired CommonService commonService;
	@Autowired UserRolesService userRolesService;
	@Autowired MenuService menuService;
	
	/**
	 * 角色管理首页列表显示以及复合条件搜索
	 */
    @RequestMapping(value = "auth/roleManageList.html",method = RequestMethod.GET)
    public ModelAndView roleManageList(HttpServletRequest req,HttpServletResponse res,ModelMap model){
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
    	model.put("user", user);
		Map<String,String> con = new HashMap<String, String>();		
		String type = req.getParameter("type");
		String name = req.getParameter("name");
		//String orgDepId = req.getParameter("orgDepId");
		
		//con.put("orgId", orgDepId);
		//con.put("isSub", "1");
		con.put("type", type);
		con.put("name", name);
		con.put("page",PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		
		Collection<RoleBo> roleManageList = roleService.getRoles4Page(con);
		model.put("roleManageList", roleManageList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return new ModelAndView("list/auth/roleManageList",model);  	
    }
    
	/**
	 * 获得JSTree系统菜单数据
	 */
	@RequestMapping(value="menu4jstree.html")
	@ResponseBody
	public List<JSNode> getMenu4JSTree(HttpServletRequest request){
		String id = request.getParameter("id");
		List<JSNode> nodes = commonService.getMenuByUpid(id);
		return nodes;
	}
    
    /**
     * 动态加载新建权限分配列表
     */
    @RequestMapping(value = "auth/newRoleAuthority.html",method = RequestMethod.GET)
    public ModelAndView newRoleAuthority(HttpServletRequest req,HttpServletResponse res,ModelMap model){	   		
		String mId = req.getParameter("mId");
		MenuBo menu = menuService.getMenu(mId);
		model.put("menu", menu);
		return new ModelAndView("list/auth/newRoleAuthority",model);  	
    }
    
    /**
     * 动态加载权限分配列表
     */
    @RequestMapping(value = "auth/roleAuthority.html",method = RequestMethod.GET)
    public ModelAndView roleAuthotiry(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		Map<String,String> con = new HashMap<String, String>();
		String flag = "";
		String mId = req.getParameter("mId");
		String rId = req.getParameter("rId");
		if(null != rId && rId != ""){
			con.put("rId", rId);
		}
		if(null != mId && mId != ""){
			con.put("mId", mId);
		}
		List<RolePermitBo> roleAuthorityList = rolePermitService.getRolePermits(con);
		if(!roleAuthorityList.isEmpty()){                       //已具有菜单权限,flag=1
			flag = "1";
			model.put("roleAuthorityList", roleAuthorityList);
			model.put("flag", flag);
		}
		else{
			if(null == mId){
				mId = "4028ce8139f6421b0139f6cc655d000a";
			}
			MenuBo menu = menuService.getMenu(mId);             //未具有,flag=0
			model.put("menu", menu);
			model.put("mId", mId);
			model.put("rId", rId);
			flag = "0";
			model.put("flag", flag);
		}
		return new ModelAndView("list/auth/roleAuthority",model);  	
    }
    
    /**
     * 加载查看角色用户列表
     */
    @RequestMapping(value = "auth/checkAuthUser.html",method = RequestMethod.GET)
    public ModelAndView checkAuthUser(HttpServletRequest req,HttpServletResponse res,ModelMap model){	   	
		Map<String,String> con = new HashMap<String, String>();
		String rId = req.getParameter("rId");
		String sn = req.getParameter("sn");
		String name = req.getParameter("name");
		String orgid = req.getParameter("orgid");
		String page = req.getParameter("page");
		String max = req.getParameter("max");
		
		con.put("page", page);
		con.put("max", max);
		con.put("orgId", orgid);
		con.put("uname", name);
		con.put("usn", sn);
		con.put("roleId", rId);
		
		Collection<UserRolesBo> urbList = userRolesService.getUserRoless4Page(con);
		model.put("urbList", urbList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return new ModelAndView("list/auth/checkAuthUser",model);  	
    }
}
