package com.telecom.lms.portal.admin.control.list;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.resources.CoursewareBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.portal.admin.util.SessionConstants;
import com.telecom.lms.sdk.service.resources.CoursewareService;

@Controller
@RequestMapping("/list")
public class CoursewareListCtr{
	@Autowired CoursewareService coursewareService;
	
	@RequestMapping(value="courseware.html",params="from=tcdialog1")
	public String query1(HttpServletRequest request, ModelMap model){
		Collection<CoursewareBo> list = this.query(request, "");
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/resource/courseware/tc_dialog_cw";
	}
	
	public Collection<CoursewareBo> query(HttpServletRequest request, String type){
		OrganizationBo manageOrg = (OrganizationBo) request.getSession().getAttribute(SessionConstants.SESSION_DEFAULT_ORG);
		String cwtype = request.getParameter("cwtype");
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
		con.put("coursewareType", cwtype);
		con.put("name", name);
		con.put("sn", sn);
		con.put("orgDepId", orgDepId);
		if(manageOrg!=null){
			con.put("manageOrg", manageOrg.getOrgId());
		}
		con.put("isSub", isSub);
		con.put("knowledgeId", knowledgeId);
		con.put("isChildKnowledge", isChildKnowledge);
		con.put("tag", tag);
		con.put("startDt", startDt);
		con.put("endDt", endDt);
	//	con.put("isPub", "1");
		con.put("status", "1");
		Collection<CoursewareBo> list = coursewareService.getCoursewares4SelectPage(con);
		return list;
	}
}
