package com.telecom.lms.portal.admin.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.telecom.lms.core.bo.auth.MenuBo;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.PositionBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.position.Position4OrgBo;
import com.telecom.lms.core.bo.resources.KnowledgeCategoryBo;
import com.telecom.lms.portal.admin.util.JSNode;
import com.telecom.lms.portal.admin.util.JSNodeAttr;
import com.telecom.lms.portal.admin.util.JSNodeTool;
import com.telecom.lms.portal.admin.util.Node;
import com.telecom.lms.portal.admin.util.NodeTool;
import com.telecom.lms.sdk.service.auth.MenuService;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.auth.PositionService;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.position.Position4OrgService;
import com.telecom.lms.sdk.service.resources.KnowledgeCategoryService;

@Service
public class CommonService {

	@Autowired OrganizationService orgServcie;
	@Autowired PositionService posService;
	@Autowired KnowledgeCategoryService knowledgeCategoryService;
	@Autowired MenuService menuService;
	@Autowired UserInfoService userService;
	@Autowired Position4OrgService p4oService;
	private @Value("#{lmsapi.orgRootUpId}")String  orgRootUpId;
	private @Value("#{lmsapi.orgRootId}")String  orgRootId;
	private @Value("#{lmsapi.pos4provinceRootId}")String pos4provinceRootId;
	private @Value("#{lmsapi.pos4groupRootId}")String pos4groupRootId;
	private @Value("#{lmsapi.bbsUrl}")String bbsUrl;
	
	/**
	 * 获得所有的公司和部门
	 * @param pid
	 * @param user
	 * @return
	 */
	public List<JSNode> getOrgDep(String pid){
		Map<String,String> query = new HashMap<String, String>();
		List<JSNode> rawNodes = new ArrayList<JSNode>();
		if(JSNode.ORG_ROOT_ID.equals(pid)){
			pid = orgRootUpId;
		}
		query.put("upId", pid);
		List<OrganizationBo> orgList = orgServcie.getOrganizations(query);
		rawNodes.addAll(JSNodeTool.transferOrg(orgList));
		return  rawNodes;
	}
	
	/**
	 * 获得JSTree的公司和部门数据
	 * @param pid
	 * @param user 用户信息
	 * @return
	 */
	public List<JSNode> getOrgDepByUpId(String pid){
		Map<String,String> query = new HashMap<String, String>();
		List<JSNode> rawNodes = new ArrayList<JSNode>();
		if(pid !=null && !pid.equals("")){
			query.put("upId", pid);
			List<OrganizationBo> orgList = orgServcie.getOrganizations(query);
			rawNodes.addAll(JSNodeTool.transferOrg(orgList));
		}
		return  rawNodes;
	}
	
	/**
	 * 查看机构树
	 * @return
	 */
	public List<JSNode> getOrg(String pid){
		Map<String,String> query = new HashMap<String, String>();
		if("0".equals(pid)){
			pid = orgRootUpId;
		}else{
			query.put("type", "0");
		}
		query.put("upId", pid);
		List<JSNode> rawNodes = new ArrayList<JSNode>();
		List<OrganizationBo> orgList = orgServcie.getOrganizations(query);
		rawNodes.addAll(JSNodeTool.transferOrg(orgList));
		return  rawNodes;
	}
	
	/**
	 * 查看部门树
	 * @return
	 */
	public List<JSNode> getDep(String pid){
		Map<String,String> query = new HashMap<String, String>();
		if("0".equals(pid)){
			pid = orgRootUpId;
		}else{
			query.put("type", "1");
		}
		query.put("upId", pid);
		List<JSNode> rawNodes = new ArrayList<JSNode>();
		List<OrganizationBo> orgList = orgServcie.getOrganizations(query);
		rawNodes.addAll(JSNodeTool.transferOrg(orgList));
		return  rawNodes;
	}
	
	/**
	 * 获得基准岗位树
	 * @param pid
	 * @return
	 */
	public List<JSNode> getPositionJSTree(String pid){
		try {
			Map<String,String> query = new HashMap<String, String>();
			query.put("upId", pid);
			List<PositionBo> posList = posService.getPositions4Tree(query);
			return JSNodeTool.transferPosition(posList);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
		
	/**
	 * 获得JSTree的知识分类数据
	 * @param uId
	 * @return
	 */
	public List<JSNode> getKnowldegeJsTree(String kcId){
		List<JSNode> rawNodes = new ArrayList<JSNode>();
		if(kcId.equals("root_0")){
			JSNode node = new JSNode();
			JSNodeAttr attr = new JSNodeAttr();
			attr.setId("0");
			attr.setName("全部");
			attr.setType(JSNode.TYPE_KNO);
			node.setData("全部");
			node.setAttr(attr);
			rawNodes.add(node);
		}else{
			Map<String,String> query = new HashMap<String, String>();
			if(kcId !=null && !kcId.equals("")){
				query.put("upId", kcId);
				List<KnowledgeCategoryBo> knowledgeList = knowledgeCategoryService.getKnowledgeCategorys(query);
				rawNodes = JSNodeTool.transferOKnowledge(knowledgeList);
			}
		}
		
		return  rawNodes;
	}
	
	/**
	 * 获得JSTree的系统菜单数据
	 * @param pid
	 * @return
	 */
	public List<JSNode> getMenuByUpid(String pid){
		Map<String,String> query = new HashMap<String,String>();
		List<JSNode> rawNodes = null;
		if(pid != null && !"".equals(pid)){
			query.put("upId", pid);
			List<MenuBo> menuList = menuService.getMenus(query);
			rawNodes = JSNodeTool.transferMenu(menuList);
		}
		return rawNodes;
	}
	
	/**
	 * 获得集团/省岗位树
	 * @param pid 岗位父节点
	 * @param orgId	省机构id
	 * @return
	 */
	public List<JSNode> getPosition4Org(String pid) {
		List<Position4OrgBo> list = new ArrayList<Position4OrgBo>();
		if(pid.equals("-1")){
			//如果是集团管理员，则返回集团公司岗位
			list.add(p4oService.getPosition4Org(pos4groupRootId));
			list.add(p4oService.getPosition4Org(pos4provinceRootId));
		}else{
			Map<String,String> con = new HashMap<String, String>();
			con.put("upId", pid);
			list = p4oService.getPosition4Orgs(con);
		}
			
//		}
		return JSNodeTool.transferPosition4Org(list);
	}
	
	/**
	 * 通过upid和层级id查询省岗位
	 * @param pid
	 * @param levelId
	 * @return
	 */
	public List<JSNode> getPosition4orgNew(String pid, String levelId){
		Map<String,String> con = new HashMap<String, String>();
		con.put("upId", pid);
		con.put("levelid", levelId);
		return JSNodeTool.transferPosition4Org( p4oService.getPosition4Orgs(con));
	}
	
	/**
	 * 通过upid和层级id查询基准岗位
	 * @param pid
	 * @param levelId
	 * @return
	 */
	public List<JSNode> getPositionNew(String pid, String levelId){
		Map<String,String> con = new HashMap<String, String>();
		con.put("upId", pid);
		con.put("levelid", levelId);
		return JSNodeTool.transferPosition( posService.getPositions(con));
	}
	
	/**
	 * 获得集团/省岗位树
	 * @param pid 岗位父节点
	 * @param orgId	省机构id
	 * @return
	 */
	public List<JSNode> getPosition4Org(String pid,String orgid) {
		List<Position4OrgBo> list = new ArrayList<Position4OrgBo>();
		if(pid.equals("-1")){
			pid = pos4provinceRootId;
		}
		Map<String,String> con = new HashMap<String, String>();
		con.put("upId", pid);
		if(!StringUtils.isBlank(orgid)){
			con.put("orgid", orgid);
		}
		list = p4oService.getPosition4Orgs(con);
		return JSNodeTool.transferPosition4Org(list);
	}
	
	/**
	 * 查询省岗位层级树
	 */
	public List<JSNode> getPosition4OrgLevel(String pid){
		List<Position4OrgBo> list = new ArrayList<Position4OrgBo>();
		if(pid.equals("-1")){
			//如果是集团管理员，则返回集团公司岗位
			list.add(p4oService.getPosition4Org(pos4groupRootId));
			list.add(p4oService.getPosition4Org(pos4provinceRootId));
		}else{
			Map<String,String> con = new HashMap<String, String>();
			con.put("upId", pid);
			list = p4oService.getPosition4Orgs(con);
		}
		return JSNodeTool.transferPosition4OrgLevel(list);
	}
	
	/**
	 * 查询省岗位层级树
	 */
	public List<JSNode> getPosition4OrgLevel(String pid,String orgid) {
		List<Position4OrgBo> list = new ArrayList<Position4OrgBo>();
		if(pid.equals("-1")){
			pid = pos4provinceRootId;
		}
		Map<String,String> con = new HashMap<String, String>();
		con.put("upId", pid);
		if(!StringUtils.isBlank(orgid)){
			con.put("orgid", orgid);
		}
		list = p4oService.getPosition4Orgs(con);
		return JSNodeTool.transferPosition4OrgLevel(list);
	}
	
	/**
	 * 查询基准岗位层级树
	 */
	public List<JSNode> getPositionLevel(String pid){
		Map<String,String> query = new HashMap<String, String>();
		query.put("upId", pid);
		List<PositionBo> posList = posService.getPositions4Tree(query);
		return JSNodeTool.transferPositionLevel(posList);
	}


	public void setOrgRootId(String orgRootId) {
		this.orgRootId = orgRootId;
	}

	public String getOrgRootId() {
		return orgRootId;
	}

	public void setBbsUrl(String bbsUrl) {
		this.bbsUrl = bbsUrl;
	}

	public String getBbsUrl() {
		return bbsUrl;
	}		

}
