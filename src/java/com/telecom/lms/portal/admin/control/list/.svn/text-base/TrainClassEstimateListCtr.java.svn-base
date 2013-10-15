package com.telecom.lms.portal.admin.control.list;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.survey.aim.SurveyAimBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.survey.SurveyAimService;

@Controller
@RequestMapping("/list")
public class TrainClassEstimateListCtr{
	@Autowired SurveyAimService aimService;
	
	@RequestMapping(value="trainclassestimate.html")
	public String list(HttpServletRequest request, ModelMap model){
		Collection<SurveyAimBo> list = this.query(request,null);
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		if(request.getParameter("type").equals("1")){	
			return "list/estimate/trainclass_response";
		}else{
			return "list/estimate/trainclass_behaviour";
		}
	}
	
	public Collection<SurveyAimBo> query(HttpServletRequest request, String queryType) {
		Collection<SurveyAimBo> list = null;
		String esType = request.getParameter("type");
		String tcid = request.getParameter("tcid");
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(request));
		con.put("max", PagerTool.getPageSize(request));
		con.put("type", "1");
		con.put("surveyType",esType);
		con.put("objectId", tcid);
		//LMSWD-3668
		con.put("upId", tcid);
		list = aimService.getSurveyAims(con);
		return list;
	}
}
