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
import com.telecom.lms.core.bo.auth.PositionBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.demand.DmdItemBo;
import com.telecom.lms.core.bo.demand.DmdPostBo;
import com.telecom.lms.core.bo.demand.DmdPostCon;
import com.telecom.lms.core.bo.demand.DmdPostItemBo;
import com.telecom.lms.core.bo.demand.DmdPostItemCon;
import com.telecom.lms.core.bo.demand.DmdTopicBo;
import com.telecom.lms.sdk.plugin.utils.StringTool;
import com.telecom.lms.sdk.service.auth.PositionService;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.demand.DmdItemService;
import com.telecom.lms.sdk.service.demand.DmdPostService;
import com.telecom.lms.sdk.service.demand.DmdTopicService;
import com.telecom.lms.sdk.service.demand.param.DmdItemParam;
import com.telecom.lms.sdk.service.demand.param.DmdPostParam;
import com.telecom.lms.sdk.service.demand.param.DmdTopicParam;
import com.telecom.lms.sdk.util.DateTool;

/**
 * 培训岗位需求
 * @author yanlei
 *
 */
@Controller
@RequestMapping("demand")
public class DemandPostCtr {
	@Autowired
	private DmdPostService dpService;
	@Autowired
	private DmdItemService diService;
	@Autowired
	private DmdTopicService dtService;

	@Autowired
	private UserInfoService userInfoService;
	@Autowired
	private PositionService pService;
	@RequestMapping(value="demandUserList.html",method=RequestMethod.GET)
	
	public String getUserL(HttpServletRequest request, ModelMap model){
		Map<String, String> con = new HashMap<String, String>();
		String page_fn = request.getParameter("pagefn");
		String manager_id = request.getParameter("manager_id");
		String page = request.getParameter("page")==null?"1":request.getParameter("page");
		String max = request.getParameter("max")==null?"10":request.getParameter("max");
		con.put("manager_id", manager_id);

		model.put("page_fn", page_fn);
		return "/dialog/auth/user_list_multi";
	}
	
	//首页列表
	@RequestMapping(value="demandPostList.html",method=RequestMethod.GET)
	public String getOutTrainClass(HttpServletRequest request, ModelMap model){
		String page_fn = request.getParameter("pagefn");
		String name = request.getParameter("name");
		String startDt = request.getParameter("startDt");
		String endDt = request.getParameter("endDt");
		String post_id = request.getParameter("post_id");
		String topic_id = request.getParameter("topic_id");
		String urgentLevel = request.getParameter("urgentLevel");
		String orgDepId = request.getParameter("orgDepId");
		
		String page = request.getParameter("page")==null?"1":request.getParameter("page");
		String max = request.getParameter("max")==null?"10":request.getParameter("max");
		Collection<DmdPostBo> dmdPostList = new Collection<DmdPostBo>();
		DmdPostParam ddp = new DmdPostParam();
		ddp.setUrgentLevel(urgentLevel);
		ddp.setYear(topic_id);
		ddp.setOrgDepId(orgDepId);
		ddp.setLineManagerName(name);
		ddp.setPositionId(post_id);
		ddp.setStartTime(startDt);
		ddp.setEndTime(endDt);
		ddp.setMax(max);
		ddp.setPage(page);
		dmdPostList = dpService.getDmdPosts4Page(ddp);
		model.put("dmdPostList", dmdPostList);
		model.put("page_fn", page_fn);
		return "demand/demandPostList";
	}
	
	@RequestMapping(value = "postList.html",method = RequestMethod.GET)
	public ModelAndView indexPost(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		return new ModelAndView("demand/post_list",model);
	}
	/**
	 * 查询岗位列表
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="demandPostAllList.html",method=RequestMethod.GET)
	public String getPostAllList(HttpServletRequest request, ModelMap model){
		String page_fn = request.getParameter("pagefn");
		String name = request.getParameter("postName");
		String page = request.getParameter("page")==null?"1":request.getParameter("page");
		String max = request.getParameter("max")==null?"15":request.getParameter("max");
		Collection<PositionBo> postList = new Collection<PositionBo>();
		Map<String, String> con=  new HashMap<String, String>();
		con.put("name", name);
		con.put("page", page);
		con.put("max", max);
		postList = pService.getPositions4Page(con);
		model.put("postList", postList);
		model.put("page_fn", page_fn);
		return "demand/post_list_info";
	}
	//首页
	@RequestMapping(value = "demandPostIndex.html",method = RequestMethod.GET)
	public ModelAndView index(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
    	Map<String, String> con = new HashMap<String, String>();
    	con.put("uid", user.getUid());
    	OrganizationBo ob = userInfoService.getManageOrg(con);
    	model.put("orgDepOriId", ob.getOrgId());
		
		DmdTopicParam dtp1 = new DmdTopicParam();
		dtp1.setMax(null);
		dtp1.setPage(null);
		List<DmdTopicBo> listTopic =  dtService.getDmdTopics(dtp1);
		model.put("dmdTopicList", listTopic);
		return new ModelAndView("demand/demandPostIndex",model);
	}
	
	 /**
     * 跳转新建岗位培训需求
     */
    @RequestMapping(value = "demandPostNew.html",method = RequestMethod.GET)
    public ModelAndView newNeedInquiry(HttpServletRequest req,HttpServletResponse res,ModelMap model){
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
    	model.put("user", user);
    	String dpid = req.getParameter("dpId");
       	DmdPostBo dtb =new DmdPostBo();
    	if(null!=dpid){
    		DmdPostParam dtp = new DmdPostParam();
    		dtp.setId(dpid);
    		dtb = dpService.getDmdPost(dtp);
    		model.put("dmdPost", dtb);	
    	}else{
    		dtb.setDpis(new ArrayList<DmdPostItemBo>());
    		model.put("dmdPost",dtb);	
    	}	
		DmdItemParam dtp = new DmdItemParam();
    	dtp.setMax(null);
		dtp.setPage(null);
		dtp.setStatus("1");   //新建时默认为未发布
		if(null!=dpid){
			dtp.setId(dpid);
		}
		List<DmdItemBo> list = diService.getDmdItems(dtp);
    	model.put("dmdItemList", list);

    	DmdTopicParam dtp1 = new DmdTopicParam();
    	dtp1.setStatus("1");
		dtp1.setMax(null);
		dtp1.setPage(null);
		if(null!=dpid){
			dtp1.setId(dpid);
		}
		List<DmdTopicBo> listTopic =  dtService.getDmdTopics(dtp1);
		model.put("listTopic", listTopic);
    	model.put("dpId", dpid);
    	String[] listSize = new String[list.size()-dtb.getDpis().size()];
    	
    	model.put("listSize", listSize);
    	return new ModelAndView("demand/demandPostNew",model);
    }
    
	 /**
     * 跳转修改岗位培训需求
     */
    @RequestMapping(value = "demandPostNewModify.html",method = RequestMethod.GET)
    public ModelAndView modifyNeedInquiry(HttpServletRequest req,HttpServletResponse res,ModelMap model){
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
    	model.put("user", user);
    	String dpid = req.getParameter("dpId");
       	DmdPostBo dtb =new DmdPostBo();
    	if(null!=dpid){
    		DmdPostParam dtp = new DmdPostParam();
    		dtp.setId(dpid);
    		dtb = dpService.getDmdPost(dtp);
    		model.put("dmdPost", dtb);	
    	}else{
    		dtb.setDpis(new ArrayList<DmdPostItemBo>());
    		model.put("dmdPost",dtb);
    	}	
		DmdItemParam dtp = new DmdItemParam();
    	dtp.setMax(null);
		dtp.setPage(null);
//		dtp.setStatus("1"); //20130322修复,防止使用某个收集项后将其置为无效,导致再次修改岗位培训需求出错 by LTC
		if(null!=dpid){
			dtp.setId(dpid);
		}
		List<DmdItemBo> list = diService.getDmdItems(dtp);
    	model.put("dmdItemList", list);

    	DmdTopicParam dtp1 = new DmdTopicParam();
    	dtp1.setStatus("1");
		dtp1.setMax(null);
		dtp1.setPage(null);
		if(null!=dpid){
			dtp1.setId(dpid);
		}
		List<DmdTopicBo> listTopic =  dtService.getDmdTopics(dtp1);
		model.put("listTopic", listTopic);
    	model.put("dpId", dpid);
    	String[] listSize = new String[list.size()-dtb.getDpis().size()];
    	model.put("listSize", listSize);
    	return new ModelAndView("demand/demandPostNew1",model);
    }
    
    //保存岗位培训需求
    @RequestMapping(value = "saveDemandPost.html",method = RequestMethod.POST)
    public ModelAndView saveDemandPost(HttpServletRequest req,ModelMap model,
    		@RequestParam("dmd_item_ids") String[] dmd_item_ids,
    		@RequestParam("trainContents") String[] trainContents,DmdPostCon dpc,DmdPostItemCon dpic){
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
    	OrganizationBo organizationBo = (OrganizationBo) req.getSession().getAttribute("defaultOrg");
    	dpc.setDefault_org_id(organizationBo.getOrgId()); //20130320修改保存挂靠在当前管辖范围节点下 by LTC
    	if(null==dpc.getDpId()||"".equals(dpc.getDpId())){
    		dpc.setDpId(null);
    	}else{
    		DmdPostParam dtp = new DmdPostParam();
    		dtp.setId(dpc.getDpId());
    		dpService.removeDmdPosts(dtp);
    	}
    	String[] userIds = req.getParameterValues("userIds");
    	String[] userNames = req.getParameterValues("userNames");
    	String post_id = req.getParameter("post_id");//岗位id
    	String post_name = req.getParameter("post_name");//岗位name
    	String _urgentLevel = req.getParameter("urgentLevel");
    	if(_urgentLevel != null && _urgentLevel != ""){
    		int urgentLevel = Integer.parseInt(_urgentLevel);
    		dpc.setUrgentLevel(urgentLevel);
    	}
    	else{
    		String _originLevel = req.getParameter("originLevel");
    		if(_originLevel != null && _originLevel != ""){
        		int originLevel = Integer.parseInt(_originLevel);
        		dpc.setUrgentLevel(originLevel);
    		}
    		else{
    			dpc.setUrgentLevel(2);   //默认为迫切
    		}
    	}
    	//dpc.setLineManagerId("");
    	dpc.setPositionId(post_id);
    	dpc.setPositionName(post_name);
    	dpc.setDpId(null);
    	dpc.setUserIds(StringTool.getString(userIds, StringTool.SPLIT_COMMA));  //真正完美逗号分隔去除尾部多余
    	dpc.setUserNames(StringTool.getString(userNames, StringTool.SPLIT_COMMA));
    	System.out.println(dmd_item_ids.length);
    	dpc.setCreateTm(DateTool.getNowShort());
    	
    	String createrId = req.getParameter("createrId");
    	if(null!=createrId && !"".equals(createrId)){
    		dpc.setCreater_id(createrId); //原有创建人Id存在则按原有的保存 20130321 by LTC
    	}
    	else{
    		dpc.setCreater_id(user.getUid()); //新建时保存当前创建人Id
    	}
    	dpc.setDefault_org_id(user.getOrg().getOrgId());
    	Return re = dpService.saveDmdPost(dpc);
    	/////////////////////////////////////////////////////
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
        		Return res = dpService.saveDmdPostItem(dpic);
    		}
    		
    		//System.out.println("pk------------------"+res.getCode()+"---"+res.getContent());
    	}
       	return new ModelAndView("redirect:demandPostIndex.html",model);
    }
    /**
	 * 批量删除岗位培训需求
	 */
	@RequestMapping(value="deleteDemandPost.html",params="method=remove",method=RequestMethod.POST)
	@ResponseBody
	public Return deleteDmdDeps(HttpServletRequest req,HttpServletResponse res,@RequestParam("dpuIds") String ids){
		DmdPostParam dtp = new DmdPostParam();
		dtp.setId(ids);
		Return re = dpService.removeDmdPosts(dtp);
		return re;
	}
	 /**
     * 跳转新建岗位培训需求
     */
    @RequestMapping(value = "demandPostInfo.html",method = RequestMethod.GET)
    public ModelAndView inquiryInfo(HttpServletRequest req,HttpServletResponse res,ModelMap model){
    	String dpid = req.getParameter("dpId");
       	DmdPostBo dtb =new DmdPostBo();
    	if(null!=dpid){
    		DmdPostParam dtp = new DmdPostParam();
    		dtp.setId(dpid);
    		dtb = dpService.getDmdPost(dtp);
    		model.put("dmdPost", dtb);
    		
    	}
    	
    	return new ModelAndView("demand/demandPostInfo1",model);
    }
}
