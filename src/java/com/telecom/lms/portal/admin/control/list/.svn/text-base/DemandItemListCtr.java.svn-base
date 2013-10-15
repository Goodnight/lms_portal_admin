package com.telecom.lms.portal.admin.control.list;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.demand.DmdItemBo;
import com.telecom.lms.sdk.service.demand.DmdItemService;
import com.telecom.lms.sdk.service.demand.param.DmdItemParam;

@Controller
@RequestMapping("list")
public class DemandItemListCtr {
	
	@Autowired DmdItemService dtService;
	
	@RequestMapping(value="demandItemList.html",method=RequestMethod.GET)
	public String getOutTrainClass(HttpServletRequest request, ModelMap model,DmdItemParam dtp){
		String page_fn = request.getParameter("pagefn");
		String dep_id = request.getParameter("dep_id");
		//String isChildDep = request.getParameter("isChildDep");
		String page = request.getParameter("page")==null?"1":request.getParameter("page");
		String max = request.getParameter("max")==null?"10":request.getParameter("max");
		String startDt =request.getParameter("startDt");
		String endDt = request.getParameter("endDt");
		Collection<DmdItemBo> dmdItemList = new Collection<DmdItemBo>();
		dtp.setMax(max);
		dtp.setPage(page);
		dtp.setOrgDepId(dep_id);
		dtp.setIsSub("1");
		dtp.setStartDt(startDt);
		dtp.setEndDt(endDt);
		dmdItemList = dtService.getDmdItems4Page(dtp);
		model.put("dmdItemList", dmdItemList);
		model.put("page_fn", page_fn);
		return "list/demand/demandItemList";
	}
}
