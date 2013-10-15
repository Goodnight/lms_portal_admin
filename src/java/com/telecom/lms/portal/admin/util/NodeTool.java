package com.telecom.lms.portal.admin.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.telecom.lms.core.bo.auth.MenuBo;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.PositionBo;
import com.telecom.lms.core.bo.resources.KnowledgeCategoryBo;

/**
 * Node工具类
 * @author xuxing
 *
 */
public class NodeTool {
	
	/**
	 * 设置node的childkey属性，有子节点时childkey的值为1否则为0
	 * @param nodes
	 */
	public static void setChild(List<Node> nodes){
		Map<String,String> upidMap = new HashMap<String,String>();
		for(int i=0;i<nodes.size();i++){
			if(nodes.get(i)!=null&&nodes.get(i).getUpId()!=null){
				upidMap.put(nodes.get(i).getUpId(), "1");
			}
		}
		Set<String> key = upidMap.keySet();
		Iterator<String> it = key.iterator();
		while(it.hasNext()){
			String upid = it.next();
			for(int i=0;i<nodes.size();i++){
				if(nodes.get(i)!=null&&(nodes.get(i).getChildkey()==null||!nodes.get(i).getChildkey().equals("1"))){
					if(nodes.get(i).getId()!=null&&nodes.get(i).getId().equals(upid)){
						nodes.get(i).setChildkey("1");
					}else{
						nodes.get(i).setChildkey("0");
					}
				}
			}
		}
	}
	
	/**
	 * 设置Node的层级关系
	 * @param pid 根id
	 * @param list	机构列表
	 * @return
	 */
	public static List<Node> getNodes(String upid,List<Node> list){
		List<Node> nodes = new ArrayList<Node>();
		if(list!=null){			
			for(int i=0;i<list.size();i++){
				Node node = list.get(i);
				if(node.getUpId() != null && node.getUpId().equals(upid)){
					node.setSubs(getNodes(node.getType()+"_"+node.getId(), list));
					nodes.add( node);
				}
			}
		}
		return nodes;
	}
	
	/**
	 * 将OrganizationBo转换成Node,node的upId是在原来的upId前加上org_前缀
	 * @param orgList
	 * @return
	 */
	public static List<Node> transferOrg(List<OrganizationBo> orgList){
		List<Node> nodes = new ArrayList<Node>();
		if(orgList!=null){			
			for(OrganizationBo org : orgList){
				Node node = new Node();
				node.setId(org.getOrgId());
				node.setName(org.getName());
				node.setType((org.getType()!=null&&org.getType()==0)?Node.TYPE_ORG:Node.TYPE_DEP);
				node.setUpId(org.getUpId());
				nodes.add(node);
			}
		}
		return nodes;
	}
	
	public static List<Node> transferOrgNew(List<OrganizationBo> orgList){
		List<Node> nodes = new ArrayList<Node>();
		if(orgList!=null){			
			for(OrganizationBo org : orgList){
				Node node = new Node();
				node.setId(org.getOrgId());
				node.setName(org.getName());
				node.setType((org.getType()!=null&&org.getType()==0)?Node.TYPE_ORG:Node.TYPE_DEP);
				node.setUpId(org.getUpId());
				nodes.add(node);
			}
		}
		return nodes;
	}
	

	
	

	/**
	 * 将KnowledgeCategoryBo转换成Node
	 * @param ethList
	 * @return
	 */
	public static List<Node> transferKnowledge(List<KnowledgeCategoryBo> knowledgeCategoryList) {
		List<Node> nodes = new ArrayList<Node>();
		if(knowledgeCategoryList!=null){			
			for(KnowledgeCategoryBo k : knowledgeCategoryList){
				Node node = new Node();
				node.setId(k.getKcId());
				node.setName(k.getName());
				node.setType(Node.TYPE_KNO);
				node.setUpId(Node.TYPE_KNO+"_"+k.getUpId());
				nodes.add(node);
			}
		}
		return nodes;
	}
	
	public static List<Node> transferKnowledgeNew(List<KnowledgeCategoryBo> knowledgeCategoryList) {
		List<Node> nodes = new ArrayList<Node>();
		if(knowledgeCategoryList!=null){			
			for(KnowledgeCategoryBo k : knowledgeCategoryList){
				Node node = new Node();
				node.setId(k.getKcId());
				node.setName(k.getName());
				node.setType(Node.TYPE_KNO);
				node.setUpId(k.getUpId());
				nodes.add(node);
			}
		}
		return nodes;
	}
	
	/**
	 * 将MenuBo转换成Node
	 * @param menuList
	 * @return
	 */
	public static List<Node> transferMenu(List<MenuBo> menuList) {
		List<Node> nodes = new ArrayList<Node>();
		if(menuList!=null){			
			for(MenuBo k : menuList){
				Node node = new Node();
				node.setId(k.getmId());
				node.setName(k.getName());
				node.setType(Node.TYPE_MENU);
				node.setUpId(Node.TYPE_MENU+"_"+k.getUpId());
				nodes.add(node);
			}
		}
		return nodes;
	}
	
	public static List<Node> transferMenuNew(List<MenuBo> menuList) {
		List<Node> nodes = new ArrayList<Node>();
		if(menuList!=null){			
			for(MenuBo k : menuList){
				Node node = new Node();
				node.setId(k.getmId());
				node.setName(k.getName());
				node.setType(Node.TYPE_MENU);
				node.setUpId(k.getUpId());
				nodes.add(node);
			}
		}
		return nodes;
	}
	

	

	
	/**
	 * 将PositionBo转换成Node
	 * @param posList
	 * @return
	 */
	public static List<Node> transferPos(List<PositionBo> posList) {
		List<Node> nodes = new ArrayList<Node>();
		if(posList!=null){			
			for(PositionBo pos : posList){
				Node node = new Node();
				node.setId(pos.getpId());
				node.setName(pos.getName());
				node.setType(Node.TYPE_POS);
//  			    node.setUpId(Node.TYPE_ETH+"_"+pos.getEthnic().getEtId());
				nodes.add(node);
			}
		}
		return nodes;
	}
	
	public static List<Node> transferPosNew(List<PositionBo> posList) {
		List<Node> nodes = new ArrayList<Node>();
		if(posList!=null){			
			for(PositionBo pos : posList){
				Node node = new Node();
				node.setId(pos.getpId());
				node.setName(pos.getName());
				node.setType(Node.TYPE_POS);
//				node.setUpId(pos.getEthnic().getEtId());
				nodes.add(node);
			}
		}
		return nodes;
	}
}
