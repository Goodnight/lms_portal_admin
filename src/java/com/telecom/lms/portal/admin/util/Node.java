package com.telecom.lms.portal.admin.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonProperty;
/**
 * 用于显示树形结构的Bean
 * @author Xuxing
 *
 */
public class Node {
	public static final String TYPE_DEP = "dep";
	public static final String TYPE_ORG = "org";
	public static final String TYPE_ETH = "eth";
	public static final String TYPE_POS = "pos";
	public static final String TYPE_KNO = "kno";
	public static final String TYPE_MENU = "menu";
	public static final String ORG_ROOT_ID = "0";
	public static final String DEP_ROOT_ID = "0";
	public static final String ETH_ROOT_ID = "0";
	public static final String KNO_ROOT_ID = "0";
	public static final String MENU_ROOT_ID = "0";
	@JsonProperty("cid")
	private String id;
	@JsonProperty("parentid")
	private String upId;
	@JsonProperty("name")
	private String name;
	@JsonProperty("parentname")
	private String parentName;
	@JsonProperty("sortid")
	private String sortid;
	@JsonProperty("childkey")
	private String childkey;
	@JsonIgnore
	private Map values = new HashMap();
	private String type;
	@JsonIgnore
	private List<Node> subs = new ArrayList<Node>();
	@JsonIgnore
	private Node parent;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUpId() {
		return upId;
	}
	public void setUpId(String upId) {
		this.upId = upId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public List<Node> getSubs() {
		return subs;
	}
	public void setSubs(List<Node> subs) {
		this.subs = subs;
	}
	public Node getParent() {
		return parent;
	}
	public void setParent(Node parent) {
		this.parent = parent;
	}
	public Map getValues() {
		return values;
	}
	public void setValues(Map values) {
		this.values = values;
	}
	public String getParentName() {
		return parentName;
	}
	public void setParentName(String parentName) {
		this.parentName = parentName;
	}
	public String getSortid() {
		return sortid;
	}
	public void setSortid(String sortid) {
		this.sortid = sortid;
	}
	public String getChildkey() {
		return childkey;
	}
	public void setChildkey(String childkey) {
		this.childkey = childkey;
	}
	
}
