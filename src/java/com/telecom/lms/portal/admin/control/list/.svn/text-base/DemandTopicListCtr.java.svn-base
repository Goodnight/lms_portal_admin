package com.telecom.lms.portal.admin.control.list;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.demand.DmdTopicBo;
import com.telecom.lms.sdk.service.demand.DmdTopicService;
import com.telecom.lms.sdk.service.demand.param.DmdTopicParam;

@Controller
@RequestMapping("list")
public class DemandTopicListCtr {
	
	@Autowired DmdTopicService dtService;
	
	@RequestMapping(value="demandTopicList.html",method=RequestMethod.GET)
	public String getOutTrainClass(HttpServletRequest request, ModelMap model){
		String page_fn = request.getParameter("pagefn");
		//String dep_id = request.getParameter("dep_id");
		//String isChildDep = request.getParameter("isChildDep");
		String page = request.getParameter("page")==null?"1":request.getParameter("page");
		String max = request.getParameter("max")==null?"10":request.getParameter("max");
		Collection<DmdTopicBo> dmdTopicList = new Collection<DmdTopicBo>();
		DmdTopicParam dtp = new DmdTopicParam();
		//dtp.setOrgDepId(dep_id);
		dtp.setMax(max);
		dtp.setPage(page);
		//dtp.setIsSub(isChildDep);
		dtp.setLogo("1");
		dmdTopicList = dtService.getDmdTopics4Page(dtp);
		
		//DTPJ增加查询范围保证统一性 20130315 by LTC
		DmdTopicParam dtpj = new DmdTopicParam();
		Collection<DmdTopicBo> dmdTopicListJudge = new Collection<DmdTopicBo>();
		dtpj.setPage("1");
		dtpj.setMax("100");
		dmdTopicListJudge = dtService.getDmdTopics4Page(dtpj);
		String flag = "0";
		for(DmdTopicBo db :dmdTopicListJudge.getData()){
			if("1".equals(db.getStatus()+"")){
				flag="1";
				break;
			}
		}
		model.put("dmdTopicList", dmdTopicList);
		model.put("page_fn", page_fn);
		model.put("flag", flag);
		return "list/demand/demandTopicList";
	}
}
