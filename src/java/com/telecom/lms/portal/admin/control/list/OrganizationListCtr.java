package com.telecom.lms.portal.admin.control.list;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.JSNode;
import com.telecom.lms.portal.admin.util.JSNodeTool;
import com.telecom.lms.portal.admin.util.Node;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.down.basedata.DownLoadOrganizationServcie;

/**
 * 查询部门的列表
 * @author Xuxing
 *
 */
@Controller
@RequestMapping("/list")
public class OrganizationListCtr {
	@Autowired OrganizationService orgService;
	@Autowired CommonService commonServcie;
	@Autowired
	DownLoadOrganizationServcie downLoadOrganizationServcie;
	
	@RequestMapping(value="exportOrganizationList",method=RequestMethod.POST)
	@ResponseBody
	public String exportList(HttpServletRequest request , HttpServletResponse response){
		
		Map<String, String> con = new HashMap<String, String>();
		con.put("orgId", request.getParameter("orgId"));
		List<OrganizationBo> list = orgService.exportList(con);
		String address = request.getSession().getServletContext().getRealPath("/")+"download/";
		return downLoadOrganizationServcie.downOrganizationTemplet(address, list);
	}
	
	/**
	 * 获得JSTree公司数据
	 * type: 1:管辖范围内的机构树
	 * 			2:机构树
	 * 			3:部门树
	 */
	@RequestMapping(value="org4jstree.html")
	@ResponseBody
	public List<JSNode> getOrg4JSTree(HttpServletRequest request){
		String id = request.getParameter("id");
		if(id.equals("-1"))id="0";
		String type = request.getParameter("type");
		List<JSNode> nodes = new ArrayList<JSNode>();
		if(StringUtils.isBlank(type) || "1".equals(type)){
			OrganizationBo org = (OrganizationBo) request.getSession().getAttribute("defaultOrg");
			if(id.equals("0")){
				List<OrganizationBo> orgList = new ArrayList<OrganizationBo>();
				orgList.add(org);
				nodes.addAll(JSNodeTool.transferOrg(orgList));
			}else{
				nodes = commonServcie.getOrgDepByUpId(id);
			}
		}else if("2".equals(type)){
			nodes = commonServcie.getOrg(id);
		}else if("3".equals(type)){
			nodes = commonServcie.getDep(id);
		}else if("4".equals(type)){
			nodes = commonServcie.getOrgDep(id);
		}
		return nodes;
	}
	
	@RequestMapping(value="organization.html",params="t=json",method=RequestMethod.GET)
	@ResponseBody
	public List<Node> getDepartment(HttpServletRequest request){
		String pid = request.getParameter("pid");
		List<Node> nodes = null;//commonServcie.getOrgListOnly(pid);
		return nodes;
	}
	
	@RequestMapping(value="notlogin/organization.html",params="t=json",method=RequestMethod.GET)
	@ResponseBody
	public List<Node> getDepartmentByPid(HttpServletRequest request){
		String pid = request.getParameter("pid");
		List<Node> nodes = null;//commonServcie.getOrgListOnly(pid);
		return nodes;
	}
	
	@RequestMapping(value="department.html",params="t=json",method=RequestMethod.GET)
	@ResponseBody
	public List<Node> getDepartmentNode(){
		List<Node> nodes =null;// commonServcie.getOrgList();
		return nodes;
	}
	
	@RequestMapping(value="department.html",params="from=assigndepnum")
	public String getDepartment(HttpServletRequest request, ModelMap model){
		String orgid = request.getParameter("orgid");
		HashMap<String,String> con = new HashMap<String, String>();
		con.put("orgid", orgid);
		con.put("page", PagerTool.getPageNo(request));
		con.put("max", PagerTool.getPageSize(request));
		Collection<OrganizationBo> list = orgService.getOrganizations4Page(con);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/trainclass/list4assigndepnum";
	}
	
	
	

}
