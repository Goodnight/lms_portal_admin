package com.telecom.lms.portal.admin.control.list;
import java.net.URLDecoder;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.auth.param.UserInfoParam;
import com.telecom.lms.sdk.service.down.basedata.DownLoadUserService;
import com.telecom.lms.sdk.util.DateTool;

@Controller
@RequestMapping("/list")
public class UserListCtr {
	
	private static final Logger log = LoggerFactory.getLogger(UserListCtr.class);

	
	@Autowired UserInfoService userService;

	@Autowired DownLoadUserService downLoadUserService;
	@RequestMapping(value="demandUserList1.html",method=RequestMethod.GET)
	public String getUserL(HttpServletRequest request, ModelMap model){
		UserInfoParam con = new UserInfoParam();
		String uid = request.getParameter("uid");
		con.setId(uid);
		UserInfoBo user = userService.getUserInfo(con);
		model.put("user", user);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "/demand/user_list";
	}
	@RequestMapping(value="demandUserList.html",method=RequestMethod.GET)
	public String getUs(HttpServletRequest request, ModelMap model){
		//Collection<UserInfoBo> list = this.query(request, "user_list");
		Map<String, String> con = new HashMap<String, String>();
		con.put("manager_id", "ff808081387aa04001387b78cbbd0016");
	

		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "/demand/user_list";
	}
	@RequestMapping(value="user.html",params="from=user_list",method=RequestMethod.GET)
	public String getUser(HttpServletRequest request, ModelMap model){
		Collection<UserInfoBo> list = this.query(request, "user_list");
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/auth/user_list";
	}
	
	@RequestMapping(value="user.html",params="from=common",method=RequestMethod.GET)
	public String getUserCommon(HttpServletRequest request, ModelMap model){
		Collection<UserInfoBo> list = this.query(request, "common");
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/auth/user_list_common";
	}
	
	//岗位培训需求增加人员
	@RequestMapping(value="user.html",params="from=demand",method=RequestMethod.GET)
	public String getUserCommonDemand(HttpServletRequest request, ModelMap model){
		UserInfoParam con = new UserInfoParam();
		Collection<UserInfoBo> list1 = new Collection<UserInfoBo>();
		String orgId = request.getParameter("orgId");
		String name = request.getParameter("name");
		String sn = request.getParameter("sn");
		con.setOrgId(orgId);
		con.setName(name);
		con.setSn(sn);
		con.setPage(PagerTool.getPageNo(request));
		con.setMax(PagerTool.getPageSize(request));
		list1 = userService.getUserInfos4Page(con);
		model.put("list", list1);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/auth/user_list_common";
	}
	
	@RequestMapping(value="user.html",params="from=common_radio",method=RequestMethod.GET)
	public String getUserCommonRadio(HttpServletRequest request, ModelMap model){
		Collection<UserInfoBo> list = this.query(request, "common");
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/auth/user_list_common_radio";
	}
	
	@RequestMapping(value="tempuser.html")
	public String getTempUser(HttpServletRequest request, ModelMap model){
		Collection<UserInfoBo> list = this.query(request, "tempuser");
		for(UserInfoBo u : list.getData()){
			Date now = new Date();
			if(!StringUtils.isBlank(u.getExpire_date())){
				if(now.getTime() - DateTool.toDate(u.getExpire_date()).getTime()>0){
					u.setStatus(0);
				}else{
					u.setStatus(1);
				}
			}else{
				u.setStatus(0);
			}
		}
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/auth/tempuser_list";
	}
	
	
	/**
	 * 
	 */
	@RequestMapping(value="exportTempUsersCount.html",method=RequestMethod.POST)
	@ResponseBody
	public String exportTempUsersCount(HttpServletRequest request,ModelMap model){
		UserInfoParam userInfoParam = this.queryExport(request, "tempuser");
		Return returnMessage = userService.getExportCount(userInfoParam);
		return returnMessage.getCode();
	}
	
	/**
	 * 
	 */
	@RequestMapping(value="exportTempUsers.html",method=RequestMethod.POST)
	public void exportTempUsers(HttpServletRequest request,HttpServletResponse response, ModelMap model){
		UserInfoParam userInfoParam = this.queryExport(request, "tempuser");
		List<UserInfoBo> list = userService.getExportList(userInfoParam);
		downLoadUserService.downTempUserResult(response,list);
	}
	
	
	
	/**
	 * 
	 */
	@RequestMapping(value="exportUserCount.html",method=RequestMethod.POST)
	@ResponseBody
	public String exportDepUsersCount(HttpServletRequest request,ModelMap model){
		UserInfoParam userInfoParam = this.queryExport(request, "user_list");
		Return returnMessage = userService.getExportCount(userInfoParam);
		return returnMessage.getCode();
	}
	
	
	
	
	
	@RequestMapping(value="exportUpdateDepUsers.html",method=RequestMethod.GET)
	public void exportUpdateDepUsers(HttpServletRequest request,HttpServletResponse response, ModelMap model){
		UserInfoParam userInfoParam = new  UserInfoParam();
		userInfoParam.setOrgId(request.getParameter("orgid"));
		userInfoParam.setIsTemporary("0");
		List<UserInfoBo> list = userService.getUpdateList(userInfoParam);
		downLoadUserService.downOfficialUserTemplet(response,list);
	}
	
	/**
	 * 
	 */
	@RequestMapping(value="user.html",params="from=upclass")
	public String getDepUsers(HttpServletRequest request, ModelMap model){
		Collection<UserInfoBo> list = this.query(request, null);
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/auth/user_list4upclassdialog";
	}
	
//	getExportCount
	
	public UserInfoParam queryExport(HttpServletRequest request, String type) {
		String name = request.getParameter("name");
		String sn = request.getParameter("sn");
		String accountType = request.getParameter("type");
		String ehrStatus = request.getParameter("ehr");
		String status = request.getParameter("status");
		String empNatureId = request.getParameter("emp");
		String orgid = request.getParameter("orgid");
		String isChildDep = request.getParameter("ischilddep");
		String mobile = request.getParameter("mobile");
		UserInfoParam p = new UserInfoParam();
		if(null!=name){
			try {
				p.setName(URLDecoder.decode(name, "utf-8"));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		if(StringUtils.isNotBlank(mobile)){
			p.setMobile(mobile);
		}
		if(null!=sn){
			p.setSn(sn);
		}
		if(null!=orgid){
			p.setOrgId(orgid);
		}
		if(null!=accountType){
			p.setAccountType(type);
		}
		if(null!=ehrStatus){
			p.setEhrStatus(ehrStatus);
		}
		if(null!=status){
			p.setStatus(status);
		}
		if(null!=empNatureId){
			p.setEmpNatureId(empNatureId);
		}
		if(null!=isChildDep){
			p.setIsChildDep(isChildDep);
		}
		if("user_list".equals(type)){
			p.setIsTemporary("0");
		}
		if("common".equals(type)){
			
		}
		if("tempuser".equals(type)){
			p.setIsTemporary("1");
		}
		
		return p;
	}
	

	public Collection<UserInfoBo> query(HttpServletRequest request, String type) {
		String name = request.getParameter("name");
		String sn = request.getParameter("sn");
		String accountType = request.getParameter("type");
		String ehrStatus = request.getParameter("ehr");
		String status = request.getParameter("status");
		String empNatureId = request.getParameter("emp");
		String orgid = request.getParameter("orgid");
		String isChildDep = request.getParameter("ischilddep");
		String mobile = request.getParameter("mobile");
		String mail = request.getParameter("mail");//邮箱
		String cate = request.getParameter("cate");//身份证
		UserInfoParam p = new UserInfoParam();
		p.setIsTemporary("0");
		p.setPage(PagerTool.getPageNo(request));
		p.setMax(PagerTool.getPageSize(request));
		if(null!=name){
			try {
				p.setName(URLDecoder.decode(name, "utf-8"));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		if(StringUtils.isNotBlank(mail)){
			p.setEmail(mail);
		}
		if(StringUtils.isNotBlank(cate)){
			p.setCertificatecode(cate);
		}
		if(StringUtils.isNotBlank(mobile)){
			p.setMobile(mobile);
		}
		if(null!=sn){
			p.setSn(sn);
		}
		if(null!=orgid){
			p.setOrgId(orgid);
		}
		if(null!=accountType){
			p.setAccountType(type);
		}
		if(null!=ehrStatus){
			p.setEhrStatus(ehrStatus);
		}
		if(null!=status){
			p.setStatus(status);
		}
		if(null!=empNatureId){
			p.setEmpNatureId(empNatureId);
		}
		if(null!=isChildDep){
			p.setIsChildDep(isChildDep);
		}
		if("user_list".equals(type)){
			
		}
		if("common".equals(type)){
			
		}
		if("tempuser".equals(type)){
			p.setIsTemporary("1");
		}
		Collection<UserInfoBo> list = userService.getUserInfos4Page(p);
		return list;
	}
	
	
}
