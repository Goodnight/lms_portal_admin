package com.telecom.lms.portal.admin.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.telecom.lms.core.bo.auth.MenuBo;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.PositionBo;
import com.telecom.lms.core.bo.position.Position4OrgBo;
import com.telecom.lms.core.bo.resources.KnowledgeCategoryBo;

public class JSNodeTool {

	public static List<JSNode> transferOrg(List<OrganizationBo> orgList) {
		List<JSNode> list = new ArrayList<JSNode>();
		for (OrganizationBo bo : orgList) {
			JSNode node = new JSNode();
			node.setData(bo.getName());
			node.getAttr().setName(bo.getName());
			node.getAttr().setId(bo.getOrgId());
			node.getAttr().setShortName(bo.getShortName());
			node.getAttr().setNamePath(!StringUtils.isBlank(bo.getNamepath()) ? bo.getNamepath().substring(1) : "");
			node.getAttr().setIdPath(bo.getIdPath());
			node.getAttr().setType((bo.getType() == null || bo.getType() == 0) ? JSNode.TYPE_ORG : JSNode.TYPE_DEP);
			node.getAttr().setRel((bo.getType() == null || bo.getType() == 0) ? JSNode.TYPE_ORG : JSNode.TYPE_DEP);
			node.setState(bo.getLeaf() == null || !bo.getLeaf() ? "closed" : "");
			if (bo.getLevel() != null) {
				node.getAttr().setLevel(bo.getLevel());
			}
			node.getAttr().setId(bo.getOrgId());
			list.add(node);
		}
		return list;
	}

	public static List<JSNode> transferPosition4Org(List<Position4OrgBo> pList) {
		List<JSNode> list = new ArrayList<JSNode>();
		for (Position4OrgBo p : pList) {
			JSNode node = new JSNode();
			node.setData(p.getName());
			node.getAttr().setName(p.getName());
			node.getAttr().setId(p.getPoId());
			node.getAttr().setIdPath(p.getIdPath());
			node.setState(p.getLeaf() == null || !p.getLeaf() ? "closed" : "");
			node.getAttr().setRel(p.getLeaf() == null || !p.getLeaf() ? JSNode.TYPE_ETH : JSNode.TYPE_POS);
			node.getAttr().setType(p.getLeaf() == null || !p.getLeaf() ? JSNode.TYPE_ETH : JSNode.TYPE_POS);
			node.getAttr().setPosition(p.getSortNo());
			list.add(node);
		}
		return list;
	}

	/**
	 * 转换省岗位和岗位层级
	 */
	public static List<JSNode> transferPosition4OrgLevel(List<Position4OrgBo> pList) {
		Map<String, JSNode> map = new HashMap<String, JSNode>();
		List<JSNode> list = new ArrayList<JSNode>();
		for (Position4OrgBo p : pList) {
			JSNode node = new JSNode();
			if (p.getLeaf() && p.getLevel() != null) {
				node.setData(p.getLevel().getName());
				node.getAttr().setName(p.getLevel().getName());
				node.getAttr().setType("level");
				node.getAttr().setId(p.getUpId() + StringTool.SPLIT_COMMA + p.getLevel().getSpId());
				node.getAttr().setPosition(p.getSortNo());
				map.put(p.getLevel().getSpId(), node);
			} else {
				node.setData(p.getName());
				node.getAttr().setName(p.getName());
				node.getAttr().setId(p.getPoId());
				node.getAttr().setIdPath(p.getIdPath());
				node.setState(p.getLeaf() == null || !p.getLeaf() ? "closed" : "");
				node.getAttr().setRel(p.getLeaf() == null || !p.getLeaf() ? JSNode.TYPE_ETH : JSNode.TYPE_POS);
				node.getAttr().setType(p.getLeaf() == null || !p.getLeaf() ? JSNode.TYPE_ETH : JSNode.TYPE_POS);
				node.getAttr().setPosition(p.getSortNo());
				list.add(node);
			}
		}
		Iterator<String> it = map.keySet().iterator();
		while (it.hasNext()) {
			list.add(map.get(it.next()));
		}
		return list;
	}

	public static List<JSNode> transferPosition(List<PositionBo> posList) {
		String type="";
		List<JSNode> list = new ArrayList<JSNode>();
		for (PositionBo pos : posList) {
			JSNode node = new JSNode();
			node.setData(pos.getName());
			node.getAttr().setName(pos.getName());
			node.getAttr().setId(pos.getpId());
			node.getAttr().setIdPath(pos.getIdPath());
			node.getAttr().setNamePath(!StringUtils.isBlank(pos.getNamePath()) ? pos.getNamePath().substring(1) : "");
			node.setState(pos.getLeaf()==null||!pos.getLeaf()?"closed":"");
			if(pos.getUpId().equals("-1")){
				
			}
			switch (pos.getType()) {
				case -1:
					type=JSNode.TYPE_ETH;
					break;
				case 0:
					type=JSNode.TYPE_POS;
					break;
				case 1:
					type=JSNode.TYPE_LEVEL;
					break;
				default:
					break;
			}
			node.getAttr().setPosition(pos.getSortNo());
			node.getAttr().setType(type);
			node.getAttr().setRel(pos.getLeaf() == null || !pos.getLeaf() ? JSNode.TYPE_ETH : JSNode.TYPE_POS);
			node.getAttr().setId(pos.getpId());
			list.add(node);
		}
		return list;
	}

	/**
	 * 转换基准岗位和岗位层级
	 */
	public static List<JSNode> transferPositionLevel(List<PositionBo> posList) {
		Map<String, JSNode> map = new HashMap<String, JSNode>();
		String type="";
		List<JSNode> list = new ArrayList<JSNode>();
		for (PositionBo pos : posList) {
			JSNode node = new JSNode();
			if (pos.getLeaf() && pos.getLevel() != null) {
				node.setData(pos.getLevel().getName());
				node.getAttr().setName(pos.getLevel().getName());
				node.getAttr().setType("level");
				node.setState("closed");
				node.getAttr().setId(pos.getUpId() + StringTool.SPLIT_COMMA + pos.getLevel().getSpId());
				map.put(pos.getLevel().getSpId(), node);
			} else {
				node.setData(pos.getName());
				node.getAttr().setName(pos.getName());
				node.getAttr().setId(pos.getpId());
				node.getAttr().setIdPath(pos.getIdPath());
				node.getAttr().setNamePath(!StringUtils.isBlank(pos.getNamePath()) ? pos.getNamePath().substring(1): "");
				node.setState(pos.getLeaf()==null||!pos.getLeaf()?"closed":"");
				switch (pos.getType()) {
					case -1:
						type=JSNode.TYPE_ETH;
						break;
					case 0:
						type=JSNode.TYPE_POS;
						break;
					case 1:
						type=JSNode.TYPE_LEVEL;
						break;
					default:
						break;
				}
				node.getAttr().setPosition(pos.getSortNo());
				node.getAttr().setType(type);
				node.getAttr().setRel(pos.getLeaf() == null || !pos.getLeaf() ? JSNode.TYPE_ETH : JSNode.TYPE_POS);
				node.getAttr().setId(pos.getpId());
				list.add(node);
			}
		}
		Iterator<String> it = map.keySet().iterator();
		while (it.hasNext()) {
			list.add(map.get(it.next()));
		}
		return list;
	}

	public static List<JSNode> transferOKnowledge(List<KnowledgeCategoryBo> knowledgeList) {
		List<JSNode> list = new ArrayList<JSNode>();
		for (KnowledgeCategoryBo bo : knowledgeList) {
			JSNode node = new JSNode();
			node.setData(bo.getName());
			node.getAttr().setName(bo.getName());
			node.getAttr().setId(bo.getKcId());
			node.getAttr().setIdPath(bo.getIdPath());
			node.getAttr().setIdPath(bo.getIdPath());
			node.getAttr().setNamePath(bo.getNamePath());
			node.getAttr().setType(JSNode.TYPE_KNO);
			node.getAttr().setName(bo.getName());
			node.setState(bo.getLeaf() == null || !bo.getLeaf() ? "closed" : "");
			list.add(node);
		}
		return list;
	}

	public static List<JSNode> transferMenu(List<MenuBo> menuList) {
		List<JSNode> list = new ArrayList<JSNode>();
		for (MenuBo bo : menuList) {
			JSNode node = new JSNode();
			node.setData(bo.getName());
			node.getAttr().setName(bo.getName());
			node.getAttr().setId(bo.getmId());
			node.getAttr().setType(JSNode.TYPE_MENU);
			node.getAttr().setName(bo.getName());
			list.add(node);
		}
		return list;
	}

}
