package com.telecom.lms.portal.admin.control.auth;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.imp.basedata.ImportOrganizationService;

@Controller
@RequestMapping("/organization")
public class OrganizationCtr {
	@Autowired OrganizationService orgService;
	@Autowired CommonService commonService;
	@Autowired
	ImportOrganizationService importOrganizationService;
	
	@RequestMapping("manage.html")
	public String manage(HttpServletRequest request, ModelMap model){
		return "auth/organization_manage";
	}
	
	@RequestMapping(value="detail.html")
	public String orgDetail(HttpServletRequest request, ModelMap model){
		String orgid = request.getParameter("orgid");
		OrganizationBo org = new OrganizationBo();
		if(orgid==null || orgid.equals("")){
			org.setOrgId("0");
		}else{
			org = orgService.getOrganization(0,orgid);
			if(org!=null){
			org.setLeaf(orgService.getLeaf(orgid));
			org.setEmployeeTotal(orgService.getTotal_size(orgid));
			}
		}
		model.put("org", org);
		return "auth/organization_detail";
	}
	
	/**
	 * 新建选中公司的下属公司，如果公司列表为空，则上级公司id为0
	 */
	@RequestMapping("new.html")
	public String toNew(HttpServletRequest request, ModelMap model){
		String upId = request.getParameter("upid");
		OrganizationBo org =  new OrganizationBo();
		if(upId.equals("0")){
			org.setOrgId("0");
		}else{
			org = orgService.getOrganization(upId);
		}
		model.put("org", org);
		
		return "auth/organization_new";
	}
	
	@RequestMapping("update.html")
	public String toUpdate(HttpServletRequest request, ModelMap model){
		String orgid = request.getParameter("orgid");
		OrganizationBo org = orgService.getOrganization(0,orgid);
		model.put("org", org);
		OrganizationBo uporg = orgService.getOrganization(org.getUpId());
		model.put("uporg", uporg);
		return "auth/organization_update";
	}
	
	@RequestMapping(value="save.html",method=RequestMethod.POST)
	public String save(OrganizationBo org, HttpServletRequest request, ModelMap model){
		org.setLeaf(org.getLeaf());//LuChao 修改为false
		Return re = orgService.newOrganization2(org);
		//更新上级机构末节点值为false
		OrganizationBo upOrg = new OrganizationBo();
		upOrg.setOrgId(org.getUpId());
		upOrg.setLeaf(false);
		orgService.newOrganization(upOrg);
		String orgid = org.getOrgId();
		if(orgid==null || orgid.equals("")){
			orgid = re.getCode();
		}
		return "redirect:manage.html";
	}
	
	@RequestMapping(value="delete.html",method=RequestMethod.GET)
	@ResponseBody
	public Return delete(HttpServletRequest request){
		String orgid = request.getParameter("orgid");
		Return re= orgService.removeOrganizations(orgid);
		return re;
	}
	@RequestMapping(value="validate.html",method=RequestMethod.GET)
	@ResponseBody
	public boolean validate(HttpServletRequest request){
		boolean bool = true;
		Map<String, String> con = new HashMap<String, String>();
		String sn = request.getParameter("sn");
		con.put("sn", sn);
		List<OrganizationBo> list = orgService.getOrganizations(con);
		if(list!=null&&list.size()>0)
		{
			bool = false;
		}
		return bool;
	}
	
	@RequestMapping(value="CheckName.html",method=RequestMethod.GET)
	@ResponseBody
	public boolean CheckName(HttpServletRequest request){
		boolean bool = true;
		Map<String, String> con = new HashMap<String, String>();
		String name =  java.net.URLDecoder.decode(request.getParameter("name"));
		String upId =request.getParameter("upId");
		String type=request.getParameter("type");
		con.put("name", name);
		con.put("upId", upId);
		con.put("type", type);
		List<OrganizationBo> list = orgService.getOrganizations(con);
		if(list!=null&&list.size()>0)
		{
			bool = false;
		}
		return bool;
	}
}
