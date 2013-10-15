package com.telecom.lms.portal.admin.control.demand;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.demand.DmdItemBo;
import com.telecom.lms.core.bo.demand.DmdPersonBo;
import com.telecom.lms.core.bo.demand.DmdPersonCon;
import com.telecom.lms.core.bo.demand.DmdPersonItemBo;
import com.telecom.lms.core.bo.demand.DmdPersonItemCon;
import com.telecom.lms.core.bo.demand.DmdTopicBo;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.demand.DmdItemService;
import com.telecom.lms.sdk.service.demand.DmdPersonService;
import com.telecom.lms.sdk.service.demand.DmdTopicService;
import com.telecom.lms.sdk.service.demand.param.DmdItemParam;
import com.telecom.lms.sdk.service.demand.param.DmdPersonParam;
import com.telecom.lms.sdk.service.demand.param.DmdTopicParam;
import com.telecom.lms.sdk.service.survey.SurveyReplyService;
import com.telecom.lms.sdk.util.DateTool;

/**
 * 培训个人需求
 * @author yanlei
 *
 */
@Controller
@RequestMapping("demand")
public class DemandPersonCtr {
	@Autowired
	private DmdPersonService dpService;
	@Autowired
	private DmdItemService diService;
	@Autowired
	private DmdTopicService dtService;
	@Autowired
	private UserInfoService userInfoService;
	
	@RequestMapping(value="demandPersonList.html",method=RequestMethod.GET)
	public String getOutTrainClass(HttpServletRequest request, ModelMap model){
		String page_fn = request.getParameter("pagefn");
		String name = request.getParameter("name");
		String sn = request.getParameter("sn");
		String year = request.getParameter("year");
		String dep_id = request.getParameter("dep_id");
		String urgentLevel = request.getParameter("urgentLevel");
		String category = request.getParameter("category");
		String page = request.getParameter("page")==null?"1":request.getParameter("page");
		String max = request.getParameter("max")==null?"10":request.getParameter("max");
		Collection<DmdPersonBo> dmdPersonList = new Collection<DmdPersonBo>();
		DmdPersonParam ddp = new DmdPersonParam();
		ddp.setUname(name);
		ddp.setUid(sn);
		ddp.setOrgDepId(dep_id);
		ddp.setUrgentLevel(urgentLevel);
		ddp.setYear(year);
		ddp.setCategory(category);
		ddp.setIsSub("1"); //默认包含下级查询
		ddp.setMax(max);
		ddp.setPage(page);
		dmdPersonList = dpService.getDmdPersons4Page(ddp);
		model.put("dmdPersonList", dmdPersonList);
		model.put("page_fn", page_fn);
		return "demand/demandPersonList";
	}
	@RequestMapping(value = "demandPersonIndex.html",method = RequestMethod.GET)
	public ModelAndView index(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		DmdTopicParam dtp1 = new DmdTopicParam();
		dtp1.setMax(null);
		dtp1.setPage(null);
		List<DmdTopicBo> listTopic =  dtService.getDmdTopics(dtp1);
		model.put("dmdTopicList", listTopic);
		
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
    	Map<String, String> con = new HashMap<String, String>();
    	con.put("uid", user.getUid());
    	OrganizationBo ob = userInfoService.getManageOrg(con);
    	model.put("orgDepOriId", ob.getOrgId());
		return new ModelAndView("demand/demandPersonIndex1",model);
	}
	 /**
     * 跳转新建需求调查
     */
    @RequestMapping(value = "demandPersonNew.html",method = RequestMethod.GET)
    public ModelAndView newNeedInquiry(HttpServletRequest req,HttpServletResponse res,ModelMap model){
       	String dpid = req.getParameter("dpId");
       	DmdPersonBo dtb =new DmdPersonBo();
    	if(null!=dpid){
    		DmdPersonParam dtp = new DmdPersonParam();
    		dtp.setId(dpid);
    		dtb = dpService.getDmdPerson(dtp);
    		model.put("dmdPerson", dtb);
    	}else{
    		dtb.setDpis(new ArrayList<DmdPersonItemBo>());
    		model.put("dmdPerson",dtb);
    	}
    	
    	DmdItemParam dtp = new DmdItemParam();
    	dtp.setStatus("1");
    	dtp.setMax(null);
		dtp.setPage(null);
		List<DmdItemBo> list = diService.getDmdItems(dtp);
    	model.put("dmdItemList", list);
    	
    	DmdTopicParam dtp1 = new DmdTopicParam();
		dtp1.setMax(null);
		dtp1.setPage(null);
		List<DmdTopicBo> listTopic =  dtService.getDmdTopics(dtp1);
		model.put("dmdTopicList", listTopic);
    	model.put("dpId", dpid);
    	String[] listSize = new String[list.size()-dtb.getDpis().size()];
    	
    	model.put("listSize", listSize);
    	return new ModelAndView("demand/demandPersonNew",model);
    }
    
    @RequestMapping(value = "saveDemandPerson.html",method = RequestMethod.POST)
    public ModelAndView saveDemandPerson(HttpServletRequest req,ModelMap model,
    		@RequestParam("dmd_item_ids") String[] dmd_item_ids,
    		@RequestParam("trainContents") String[] trainContents,DmdPersonCon dpc,DmdPersonItemCon dpic){
    	if(null==dpc.getDpId()||"".equals(dpc.getDpId())){
    		dpc.setDpId(null);
    	}
//    	else{
//    		DmdPersonParam dtp = new DmdPersonParam();
//    		dtp.setId(dpc.getDpId());
//    		dpService.removeDmdPersons(dtp);
//    	}
    	dpc.setDpId(null);
    	System.out.println(dmd_item_ids.length);
    	dpc.setCreater_id("1");
    	dpc.setCreateTm("2012-05-13");
    	dpc.setCreate_date(DateTool.getNowShort());  //保存当前日期
    	Return re = dpService.saveDmdPerson(dpc);
    	System.out.println("pk------------------"+re.getCode()+"---"+re.getContent());
    	if(null!=re.getCode()&&!"fail".equals(re.getCode())){
    		for(int i = 0;i<dmd_item_ids.length;i++){
    			if("".equals(dmd_item_ids[i]))
    				continue;
    			if("success".equals(re.getCode())){
        			dpic.setDmd_id(dpc.getDpId());
        		}else{
        			dpic.setDmd_id(re.getCode());
        		}
    			dpic.setDmd_item_id(dmd_item_ids[i]);
    			dpic.setTrainContent(trainContents[i]);
        		Return res = dpService.saveDmdPersonItem(dpic);
    		}
    		
    		//System.out.println("pk------------------"+res.getCode()+"---"+res.getContent());
    	}
       	return new ModelAndView("redirect:demandPersonIndex.html",model);
    }
    /**
	 * 批量删除员工培训需求
	 */
	@RequestMapping(value="deleteDemandPerson.html",params="method=remove",method=RequestMethod.POST)
	@ResponseBody
	public Return deleteDmdDeps(HttpServletRequest req,HttpServletResponse res,@RequestParam("dpuIds") String ids){
		DmdPersonParam dtp = new DmdPersonParam();
		dtp.setId(ids);
		Return re = dpService.removeDmdPersons(dtp);
		return re;
	}
	
	/**
	 * 查看详情
	 */
	@RequestMapping("getDemandInfo.html")
	public String deatilEst(HttpServletRequest request, ModelMap model){
		String dpId = request.getParameter("dpId");
		DmdPersonParam where = new DmdPersonParam();
		where.setId(dpId);
		DmdPersonBo dpb = dpService.getDmdPerson(where);
		model.put("dpb", dpb);
		return "demand/demandPersonInfo";
	}
}
