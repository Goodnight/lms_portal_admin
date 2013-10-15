package com.telecom.lms.portal.admin.control.list;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.resources.DocBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.resources.DocService;

@Controller
@RequestMapping("/list")
public class DocListCtr{
	@Autowired DocService docService;
	
	@RequestMapping(value="doc.html",params="from=tcdialog1",method=RequestMethod.GET)
	public String query1(HttpServletRequest request, ModelMap model){
		Collection<DocBo> list = query(request, "");
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/resource/doc/tc_dialog_doc";
	}

	public Collection<DocBo> query(HttpServletRequest request, String type) {
		String name = request.getParameter("name");
		String sn = request.getParameter("sn");
		String orgDepId = request.getParameter("orgDepId");
		String isSub = request.getParameter("isSub");
		String knowledgeId = request.getParameter("knowledgeId");
		String isChildKnowledge = request.getParameter("isChildKnowledge");
		String tag = request.getParameter("tag");
		String startDt = request.getParameter("startDt");
		String endDt = request.getParameter("endDt");
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(request));
		con.put("max", PagerTool.getPageSize(request));
		con.put("name", name);
		con.put("sn", sn);
		con.put("orgDepId", orgDepId);
		con.put("isSub", isSub);
		con.put("knowledgeId", knowledgeId);
		con.put("isChildKnowledge", isChildKnowledge);
		con.put("tag", tag);
		con.put("startDt", startDt);
		con.put("endDt", endDt);
		con.put("isPub", "1");
		con.put("status", "1");
		Collection<DocBo> docList = docService.getDocs4Page(con);
		return docList;
	}
	
}
