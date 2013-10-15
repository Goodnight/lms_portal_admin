package com.telecom.lms.portal.admin.control.survey;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.survey.BehaviorBo;
import com.telecom.lms.core.bo.survey.BehaviorCon;
import com.telecom.lms.core.bo.survey.SurveyBo;
import com.telecom.lms.core.bo.survey.SurveyCon;
import com.telecom.lms.core.bo.survey.aim.SurveyAimCon;
import com.telecom.lms.core.bo.survey.allow.SurveyAllowUserBo;
import com.telecom.lms.core.bo.survey.tp.SurveyTpBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.portal.admin.util.StringTool;
import com.telecom.lms.sdk.service.survey.BehaviorService;
import com.telecom.lms.sdk.service.survey.SurveyAimService;
import com.telecom.lms.sdk.service.survey.SurveyAllowUserService;
import com.telecom.lms.sdk.service.survey.SurveyReportService;
import com.telecom.lms.sdk.service.survey.SurveyService;
import com.telecom.lms.sdk.service.survey.param.SurveyParam;
import com.telecom.lms.sdk.util.DateTool;

@Controller
@RequestMapping("/behavior")
public class BehaviorCtr {
	@Autowired BehaviorService beService;
	@Autowired SurveyAimService aimService;
	@Autowired SurveyReportService srService;
	@Autowired SurveyService sService;
	@Autowired SurveyAllowUserService allowService;

	
	@RequestMapping("index.html")
	public String index(HttpServletRequest request, ModelMap model){
		String type = request.getParameter("type");
		if("2".equals(type)){
			return "survey/behavior_index";
		}else if("3".equals(type)){
			return "survey/lpi_index";
		}else{
			return "";
		}
	}
	
	@RequestMapping("list.html")
	public String list(HttpServletRequest request, ModelMap model){
		String type = request.getParameter("type");
		String topic = request.getParameter("topic");
		String orgid = request.getParameter("orgid");
		String start_date = request.getParameter("start_date");
		String end_date = request.getParameter("end_date");
		SurveyParam p = new SurveyParam();
		p.setOrgDepId(orgid);
		p.setType(type);
		p.setTopic(topic);
		p.setStartDt(start_date);
		p.setEndDt(end_date);
		p.setPage(PagerTool.getPageNo(request));
		p.setMax(PagerTool.getPageSize(request));
		Collection<SurveyBo>list=sService.getSurveys(p);
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "survey/behavior_list";
	}
	
	@RequestMapping("new.html")
	public String tonew(HttpServletRequest request, ModelMap model){
		String type = request.getParameter("type");
		String sid = request.getParameter("sid");
		//LMSWD-1401 by LTC 20130510
		String symbol = request.getParameter("symbol");
		if(null!=symbol && symbol!=""){
			model.put("symbol", symbol);
		}
		if(!StringUtils.isBlank(sid)){
			SurveyParam p = new SurveyParam();
			p.setId(sid);
			BehaviorBo b = beService.getBehavior(p);
			model.put("b", b);
			
			//查询是否跟培训班关联
			Map<String, String> con = new HashMap<String, String>();
			con.put("surveyId", sid);
			/*List<SurveyAimClassBo> list = classService.getSurveyAimClasses(con);
			if(list!=null&&list.size()>0){
				model.put("tc", list.get(0).getTc());
			}*/
			boolean isSameMode =true; 
			if(!(b.getBehavior().get("1").getStId().equals(b.getBehavior().get("2").getStId()))){
				isSameMode= false;
			}else if(!(b.getBehavior().get("1").getStId().equals(b.getBehavior().get("3").getStId()))){
				isSameMode= false;
			}else if(!(b.getBehavior().get("1").getStId().equals(b.getBehavior().get("4").getStId()))){
				isSameMode= false;
			}
			model.put("isSameMode", isSameMode);
		}
		if("2".equals(type)){
			return "survey/behavior_new";
		}else if("3".equals(type)){
			return "survey/lpi_new2";
		}else{
			return "";
		}
	}
	
	@RequestMapping(value="save.html",method=RequestMethod.POST)
	public String save(BehaviorCon b, HttpServletRequest request, ModelMap model){
		String tcid = request.getParameter("tcid");
		String tcName = request.getParameter("tcName");
		String symbol = request.getParameter("symbol");
		String sid = request.getParameter("sId");
		this.setTp(b, request);
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		b.setCreater_id(user.getUid());
		//LMSWD-2471 by LTC 20130510
		b.setTrainClassId(tcid);
		b.setCreate_date(DateTool.getNowShort());
		String status = request.getParameter("status"); //不改变发布状态
		if(null!=status && status!=""){
			int _status = Integer.parseInt(status);
			b.setStatus(_status);
		}
		else{
			b.setStatus(1); //新建默认为未发布
		}	
		/****此培训班ID作为upId是区分是否是在培训内新建的评估|LMSWD-3469|by LuChao****/
		b.setUpId(b.getUpId());
		
		SurveyCon survey=new SurveyCon();
		String nameJudge=b.getTopic();
		survey.setTopic(nameJudge);
		survey.setsId(sid);
		survey.setType(b.getType());
		Return repeat=sService.getVildateName(survey);
		if(repeat.getCode().equals("0"))
		{
			Return re = beService.newBehavior(b);
			if(re.getCode()!=null && tcid!=null){
				SurveyAimCon cla = new SurveyAimCon();
				cla.setObjectId(tcid);
				if(null!=tcName){
					cla.setObjectName(tcName);
				}
				cla.setSurvey_id(re.getCode());
				aimService.saveLpi(cla);
			}
			return "redirect:setting.html?type="+b.getType()+"&sid="+re.getCode() + "&symbol=" + symbol+"&upId=" +b.getUpId();
		}
		else{
			return "redirect:errorforsurvey.html?type=" +b.getType() +"&sid=" +sid + "&symbol=" + symbol;
		}
	}
	@RequestMapping(value = "errorforsurvey.html", method = RequestMethod.GET)
	public ModelAndView errorForTemplate(HttpServletRequest req, ModelMap model) {
		String type = req.getParameter("type"); 
		String sid = req.getParameter("sid");
		String symbol = req.getParameter("symbol");
		model.put("type", type);
		model.put("sid", sid);
		model.put("symbol", symbol);
		return new ModelAndView("survey/errorforsurvey", model);
	}
	@RequestMapping(value="setting.html")
	public String setting(HttpServletRequest request, ModelMap model){
		String type = request.getParameter("type");
		String sid = request.getParameter("sid");
		String symbol = request.getParameter("symbol");
		model.put("symbol", symbol);
		model.put("sid", sid);
		
		
		//LMSWD-3469
		String upId = request.getParameter("upId");
		model.put("upId", upId);
		
		
		if("2".equals(type)){
			return "survey/behavior_setting";
		}else if("3".equals(type)){
			return "survey/lpi_setting";
		}else{
			return "";
		}
	}
	
	@RequestMapping(value="delete.html",method=RequestMethod.POST)
	@ResponseBody
	public Return delete(HttpServletRequest request,ModelMap model){
		String[] ids = request.getParameterValues("id");
		SurveyParam p = new SurveyParam();
		p.setId(StringTool.getString(ids, StringTool.SPLIT_COMMA));
		SurveyCon sc = new SurveyCon();
		sc.setsId(p.getId());
		srService.deleteCacheBySurveyId(sc);
		Return re = sService.removeSurveys(p);
		return re;
	}
	
	@RequestMapping("upload.html")
	public String upload(){
		
		return "filemanage/upload";
	}
	
	private void setTp(BehaviorCon b,HttpServletRequest request){
		String upperTP = request.getParameter("upper_tp");
		String equalTP = request.getParameter("equal_tp");
		String lowerTP = request.getParameter("lower_tp");
		String selfTP = request.getParameter("self_tp");
		String otherTP = request.getParameter("other_tp");
		if(b.getType()==3)//设置统一模板
		{
			equalTP=upperTP;
			lowerTP=upperTP;
			selfTP=upperTP;
			otherTP=upperTP;
		}
		StringBuffer tpids = new StringBuffer();
		StringBuffer logos = new StringBuffer();
		if(!StringUtils.isEmpty(upperTP)){
			tpids.append(upperTP+",");
			logos.append("0,");
		}
		if(!StringUtils.isEmpty(equalTP)){
			tpids.append(equalTP+",");
			logos.append("1,");
		}
		if(!StringUtils.isEmpty(lowerTP)){
			tpids.append(lowerTP+",");
			logos.append("2,");
		}
		if(!StringUtils.isEmpty(selfTP)){
			tpids.append(selfTP+",");
			logos.append("4,");
		}
		if(!StringUtils.isEmpty(otherTP)){
			tpids.append(otherTP+",");
			logos.append("3,");
		}
		b.setTemplateIds(tpids.toString());
		b.setLogos(logos.toString());
	}
	
	/**
	 * 参与人员信息
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "inquiryPersonListInfoIn.html", method = RequestMethod.GET)
	public String getInquiryPersonListInfo(HttpServletRequest request, ModelMap model) {
		String page_fn = request.getParameter("pagefn");
		String status = request.getParameter("status");
		String sId = request.getParameter("sId");
		String page = request.getParameter("page") == null ? "1" : request.getParameter("page");
		String max = request.getParameter("max") == null ? "10" : request.getParameter("max");
		Collection<SurveyAllowUserBo> inquiryPersonListInfo = new Collection<SurveyAllowUserBo>();
		Map<String, String> con = new HashMap<String, String>();
		con.put("max", max);
		con.put("page", page);
		con.put("isAttend", status); //已参与人员status=1
		con.put("surveyId", sId);
		inquiryPersonListInfo = allowService.getSurveyAllowUsers4Page(con);
		model.put("inquiryPersonListInfoIn", inquiryPersonListInfo);
		model.put("page_fn", page_fn);
		return "survey/list/inquiryPersonListInfo2";
	}

	/**
	 * 未参与人员信息
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "inquiryPersonListInfo.html", method = RequestMethod.GET)
	public String getInquiryPersonListInfo1(HttpServletRequest request, ModelMap model) {
		String page_fn = request.getParameter("pagefn");
		String status = request.getParameter("status");
		String sId = request.getParameter("sId");
		String page = request.getParameter("page") == null ? "1" : request.getParameter("page");
		String max = request.getParameter("max") == null ? "10" : request.getParameter("max");
		Collection<SurveyAllowUserBo> inquiryPersonListInfo = new Collection<SurveyAllowUserBo>();
		Map<String, String> con = new HashMap<String, String>();
		con.put("max", max);
		con.put("page", page);
		con.put("isAttend", status); //未参与人员status=0
		con.put("surveyId", sId);
		inquiryPersonListInfo = allowService.getSurveyAllowUsers4Page(con);
		model.put("inquiryPersonListInfo", inquiryPersonListInfo);
		model.put("page_fn", page_fn);
		return "survey/list/inquiryPersonListInfo1";
	}
	/**
	 * 评估参与情况详情页面
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping("viewParticipate.html")
	public String viewParticipate(HttpServletRequest request, ModelMap model) {
		String sId = request.getParameter("sId");
		String flag = request.getParameter("flag");
		SurveyParam sp = new SurveyParam();
		sp.setId(sId);
		//SurveyBo sb = suService.getSurvey(sp);
		model.put("sId", sId);
		//model.put("surveyName", sb.getTopic());
		model.put("flag", flag); //注明为反应层评估or综合评估
		return "survey/viewParticipate";
	}
	
	/**
	 * 获得行为层评估列表设置问题的下属Id
	 */
	@RequestMapping(value = "getBelongIds.html", method = RequestMethod.GET)
	@ResponseBody
	public String[] getBelongIds(HttpServletRequest request, ModelMap model) {
		String sId = request.getParameter("sId");
		SurveyParam sp = new SurveyParam();
		sp.setPage("1");
		sp.setMax("10");
		sp.setType("2"); //行为层评估类型
		sp.setUpId(sId); //将该行为层评估Id作为UpId查询下属的问题模板Id
		
		String upLevelTp = ""; //上级模板Id
		String equalLevelTp = ""; //平级模板Id
		String downLevelTp = ""; //下级模板Id
		String elseTp = ""; //其他模板Id
		String selfTp = ""; //本人模板Id

		Collection<BehaviorBo> belongIdList = beService.getBehaviorList(sp);
		for(BehaviorBo belongId:belongIdList.getData()){
			if(null!=belongId.getLogo() && null!=belongId.getsId() && belongId.getLogo().equals("0")){ //上级
				upLevelTp = belongId.getsId();
			}
			if(null!=belongId.getLogo() && null!=belongId.getsId() && belongId.getLogo().equals("1")){ //平级
				equalLevelTp = belongId.getsId();
			}
			if(null!=belongId.getLogo() && null!=belongId.getsId() && belongId.getLogo().equals("2")){ //下级
				downLevelTp = belongId.getsId();
			}
			if(null!=belongId.getLogo() && null!=belongId.getsId() && belongId.getLogo().equals("3")){ //其他
				elseTp = belongId.getsId();
			}
			if(null!=belongId.getLogo() && null!=belongId.getsId() && belongId.getLogo().equals("4")){ //本人
				selfTp = belongId.getsId();
			}
		}
		String[] belongIds = {"","","","",""};
		belongIds[0] = upLevelTp;
		belongIds[1] = equalLevelTp;
		belongIds[2] = downLevelTp;
		belongIds[3] = elseTp;
		belongIds[4] = selfTp;		
		return belongIds;
	}
}
