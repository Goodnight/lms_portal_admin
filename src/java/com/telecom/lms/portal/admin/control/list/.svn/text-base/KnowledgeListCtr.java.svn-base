package com.telecom.lms.portal.admin.control.list;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.Node;
import com.telecom.lms.sdk.service.resources.KnowledgeCategoryService;

/**
 * 查询部门的列表
 * @author Xuxing
 *
 */
@Controller
@RequestMapping("/list")
public class KnowledgeListCtr{
	@Autowired KnowledgeCategoryService knowledgeCategoryService;
	@Autowired CommonService commonServcie;
	

	@RequestMapping(value="knowledge.html",params="t=json",method=RequestMethod.GET)
	@ResponseBody
	public List<Node> getKnowledgeNode(){
//		List<Node> nodes = commonServcie.getKnowldegeList();
//		return nodes;
		return null;
	}
	
}
