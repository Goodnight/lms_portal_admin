package com.telecom.lms.portal.admin.control.inquiry;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
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
import com.telecom.lms.core.bo.survey.SurveyAttendanceBo;
import com.telecom.lms.core.bo.survey.SurveyBo;
import com.telecom.lms.core.bo.survey.SurveyCategoryBo;
import com.telecom.lms.core.bo.survey.SurveyCategoryCon;
import com.telecom.lms.core.bo.survey.SurveyCon;
import com.telecom.lms.core.bo.survey.SurveyItemBo;
import com.telecom.lms.core.bo.survey.SurveyItemCon;
import com.telecom.lms.core.bo.survey.SurveyItemResCon;
import com.telecom.lms.core.bo.survey.SurveyReplyBo;
import com.telecom.lms.core.bo.survey.allow.SurveyAllowClassBo;
import com.telecom.lms.core.bo.survey.allow.SurveyAllowClassCon;
import com.telecom.lms.core.bo.survey.allow.SurveyAllowDepBo;
import com.telecom.lms.core.bo.survey.allow.SurveyAllowDepCon;
import com.telecom.lms.core.bo.survey.allow.SurveyAllowUserBo;
import com.telecom.lms.core.bo.survey.allow.SurveyAllowUserCon;
import com.telecom.lms.core.bo.survey.tp.SurveyTpBo;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.imp.notice.NoticeSurveyService;
import com.telecom.lms.sdk.service.survey.SurveyAllowClassService;
import com.telecom.lms.sdk.service.survey.SurveyAllowDepService;
import com.telecom.lms.sdk.service.survey.SurveyAllowUserService;
import com.telecom.lms.sdk.service.survey.SurveyAttendanceService;
import com.telecom.lms.sdk.service.survey.SurveyCategoryService;
import com.telecom.lms.sdk.service.survey.SurveyItemResService;
import com.telecom.lms.sdk.service.survey.SurveyItemService;
import com.telecom.lms.sdk.service.survey.SurveyReplyService;
import com.telecom.lms.sdk.service.survey.SurveyReportService;
import com.telecom.lms.sdk.service.survey.SurveyService;
import com.telecom.lms.sdk.service.survey.SurveyTpService;
import com.telecom.lms.sdk.service.survey.param.SurveyCategoryParam;
import com.telecom.lms.sdk.service.survey.param.SurveyItemParam;
import com.telecom.lms.sdk.service.survey.param.SurveyItemResParam;
import com.telecom.lms.sdk.service.survey.param.SurveyParam;
import com.telecom.lms.sdk.service.survey.param.SurveyTpParam;
import com.telecom.lms.sdk.service.train.TrainClassService;
import com.telecom.lms.sdk.util.DateTool;

/**
 * 培训需求调查
 * 
 * @author yanlei
 * 
 */
@Controller
@RequestMapping("/inquiry")
public class InquiryCtr {
	@Autowired
	private SurveyService iService;
	@Autowired
	SurveyReportService surveyReportService;
	@Autowired
	private SurveyTpService itService;
	@Autowired
	private SurveyAllowDepService iadService;
	@Autowired
	private SurveyAllowUserService iauService;
	@Autowired
	private SurveyAllowClassService iacService;
	@Autowired
	TrainClassService trainClassService;
	@Autowired
	private SurveyCategoryService icService;
	@Autowired
	private SurveyItemService iiService;
	@Autowired
	private SurveyItemResService iirService;
	@Autowired
	private SurveyAttendanceService saService;
	@Autowired
	private SurveyReplyService surveyReplyService;
	@Autowired
	private UserInfoService userInfoService;
	private final static String TYPE_GAUGE = "3";// 量规
	
	@Autowired
	NoticeSurveyService noticeSurveyService;

	/**
	 * 跳转培训需求调查首页
	 */
	@RequestMapping(value = "inquiryIndex.html", method = RequestMethod.GET)
	public ModelAndView turnIndex(HttpServletRequest req,
			HttpServletResponse res, ModelMap model) {
		
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
    	Map<String, String> con = new HashMap<String, String>();
    	con.put("uid", user.getUid());
    	OrganizationBo ob = userInfoService.getManageOrg(con);
    	model.put("orgDepOriId", ob.getOrgId());
		return new ModelAndView("inquiry/inquiryIndex1", model);
	}

	/**
	 * 跳转新建需求调查模版
	 */
	@RequestMapping(value = "inquiryNew.html", method = RequestMethod.GET)
	public ModelAndView newInquiry(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		model.put("flag", "0"); //flag=0为新建
		return new ModelAndView("inquiry/inquiryNew1", model);
	}

	/**
	 * 跳转新建需求调查模版明细结果
	 */
	@RequestMapping(value = "inquiryDetail.html", method = RequestMethod.GET)
	public ModelAndView inquiryDetail(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		String sId = req.getParameter("sId");
		SurveyParam sb = new SurveyParam();
		sb.setId(sId);		
		SurveyBo survey = iService.getSurvey(sb);
		model.put("survey", survey);
		return new ModelAndView("inquiry/inquiryDetails", model);
	}
	
	/**
	 * 跳转结果明细-简答题详细
	 */
	@RequestMapping(value = "remarkList.html", method = RequestMethod.GET)
	public ModelAndView remarkList(HttpServletRequest request, ModelMap model){
		String siId = request.getParameter("siId");
		String page = request.getParameter("page");
		String max = request.getParameter("max");
		Collection<SurveyReplyBo> remarkDetail = surveyReplyService.getSurveyItems(siId,page,max);
		model.put("remarkDetail", remarkDetail);
		return new ModelAndView("inquiry/list/remarkList", model);
	}

	/**
	 * 模版信息列表
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "inquiryAddTpList.html", method = RequestMethod.GET)
	public String getInquiryTpListInfo(HttpServletRequest request,
			ModelMap model) {
		String page_fn = request.getParameter("pagefn");
		String tlname = request.getParameter("tlname");
		String page = request.getParameter("page") == null ? "1" : request
				.getParameter("page");
		String max = request.getParameter("max") == null ? "10" : request
				.getParameter("max");	
		Collection<SurveyTpBo> inquiryTpList = new Collection<SurveyTpBo>();
		SurveyTpParam where = new SurveyTpParam();
		where.setStatus("2");
		where.setName(tlname);
		where.setMax(max);
		where.setPage(page);
		where.setType("1"); //在此仅显示调查模板不显示评估模板 20130312 By LTC
		inquiryTpList = itService.getSurveyTps(where);
		model.put("inquiryTpList", inquiryTpList);
		model.put("page_fn", page_fn);
		return "inquiry/inquiryAddTpListInfo";
	}

	/**
	 * 保存培训需求调查
	 */
	@RequestMapping(value = "saveInquiry.html", method = RequestMethod.POST)
	public ModelAndView saveInquiry(HttpServletRequest req, HttpServletResponse res, ModelMap model, SurveyCon itc) {
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		OrganizationBo organizationBo = (OrganizationBo) req.getSession().getAttribute("defaultOrg");
		String stId = req.getParameter("stId");
		String sId = req.getParameter("sId");
		String startDate = req.getParameter("startDate");
		String endDate = req.getParameter("endDate");
		String oriName = req.getParameter("oriName"); //获得原有调查需求名称
		if (null != sId && !"".equals(sId)) {
			itc.setsId(sId);
			// iadService.removeInquiryAimDeps(ids)
		}
		itc.setType(0);
		String status = req.getParameter("status"); //不改变发布状态
		if(null!=status && status!=""){
			int _status = Integer.parseInt(status);
			itc.setStatus(_status);
		}
		else{
			itc.setStatus(1); //新建默认为未发布
		}
		itc.setStartDt(startDate);
		itc.setEndDt(endDate);
		itc.setTemplateId(stId);
		itc.setIsGenerateExam(0);
		itc.setUpId("0");
		
		/**判断是否是修改,如果修改，创建人和创建时间、创建机构不做修改  LMSWD-3550 by LuChao**/
		if(sId==null||"".equals(sId)){
			itc.setCreater_id(user.getUid());  //保存创建人id
			itc.setCreate_date(DateTool.getNowShort());  //保存当前日期
			itc.setDefault_org_id(organizationBo.getOrgId());//切换管辖范围从Session中实时获取当前Id 20130319 by LTC
		}
		
		//////////20130314 判断是否存在重名////////////////////
		boolean flag = false;
		if(itc.getTopic().equals(oriName) || itc.getTopic()==oriName){ // 判断Post的名称与原有名称是否相同
			flag = true;
		}
		SurveyParam sp = new SurveyParam();
		sp.setTopic(itc.getTopic());
		long symbol = iService.getSurveySameName(sp);
		if(symbol == 0 || flag){  //无重名情况 或者 Post的名称与原有名称相同也直接保存
			Return re = iService.newSurvey(itc); //培训需求调查基本信息保存完毕
			String[] depIds = req.getParameterValues("depIds");
			String[] userIds = req.getParameterValues("userIds");
			String[] classIds = req.getParameterValues("classIds");
			String[] userNames = req.getParameterValues("userNames");
			if (null != depIds) {
				for (int i = 0; i < depIds.length; i++) {
					SurveyAllowDepCon dep = new SurveyAllowDepCon();
					dep.setSurveyId(re.getCode());
					dep.setDepId(depIds[i]);
					dep.setIsSub(new Integer("0"));
					iadService.newSurveyAllowDep(dep);
				}
			}
			if (null != userIds) {
				int i=0;
				for (String id : userIds) {
					SurveyAllowUserCon dc = new SurveyAllowUserCon();
					dc.setSurveyId(re.getCode());
					dc.setUserId(id);
					dc.setIsAttend(0);
					dc.setWay(0);
					dc.setUserName(userNames[i]);i++;
					iauService.newSurveyAllowUser(dc);
				}
			}
			if (null != classIds) {
				for (String id : classIds) {
					SurveyAllowClassCon dc = new SurveyAllowClassCon();
					dc.setSurveyId(re.getCode());
					dc.setTcId(id);
					dc.setType("1|2|3");
					iacService.newSurveyAllowClass(dc);
				}
			}
			
			if (null != sId && !"".equals(sId)) {
				/*管理员通知提醒*/
				Map<String,String> con = new HashMap<String,String>();
				con.put("surveyId",itc.getsId());
				con.put("type", "5");
				noticeSurveyService.noticeSurvey(con);
			}
			model.put("sId", re.getCode());
			return new ModelAndView("redirect:inquiryIndex.html", model);
		}
		else{  //存在重名情况
			return new ModelAndView("redirect:errorInquiry.html?sId="+sId, model);
		}
		
	}
	
	/**
	 * 需求新建重名错误信息
	 */
	@RequestMapping(value = "errorInquiry.html", method = RequestMethod.GET)
	public ModelAndView errorInquiry(HttpServletRequest req, ModelMap model) {
		String sId = req.getParameter("sId");
		model.put("sId", sId);
		return new ModelAndView("inquiry/errorInquiry", model);
	}

	/**
	 * 打开安排人员页面
	 */
	@RequestMapping("inquiryAimInfo.html")
	public ModelAndView inquiryAimInfo(@RequestParam String sId,
			HttpServletRequest request, ModelMap model) {

		model.put("sId", sId);
		return new ModelAndView("inquiry/inquiryAim", model);
	}

	/**
	 * 培训需求调查首页列表
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "inquiryList.html", method = RequestMethod.GET)
	public String getInquiryList(HttpServletRequest request, ModelMap model,
			SurveyParam where) {
		String page_fn = request.getParameter("pagefn");
		String page = request.getParameter("page") == null ? "1" : request
				.getParameter("page");
		String max = request.getParameter("max") == null ? "10" : request
				.getParameter("max");
		
		String startDate = request.getParameter("startDate");
		String endDate = request.getParameter("endDate");
		String orgDepId = request.getParameter("orgDepId");
		
		Collection<SurveyBo> inquiryList = new Collection<SurveyBo>();
		where.setMax(max);
		where.setPage(page);
		where.setType("0"); //过滤只显示培训需求调查
		
		where.setStartDt(startDate);
		where.setEndDt(endDate);
		where.setOrgDepId(orgDepId);
		where.setIsSub("1");
		
		inquiryList = iService.getSurveys(where);
		model.put("pageNo", page);//记录当前页码
		model.put("inquiryList", inquiryList);
		model.put("page_fn", page_fn);
		return "inquiry/inquiryList";
	}

	/**
	 * 批量删除培训调查
	 */
	@RequestMapping(value = "deleteInquiry.html", params = "method=remove", method = RequestMethod.POST)
	@ResponseBody
	public String deleteInquiry(HttpServletRequest req, HttpServletResponse res, @RequestParam("iIds") String ids) {
		SurveyParam dtp = new SurveyParam();
		String deletStr;
		if(ids.equals("")||ids.equals(null))
		{
			 deletStr = ids.substring(0, ids.length());
		}
		else
		{
		 deletStr = ids.substring(0, ids.length()-1);
		}
		dtp.setId(deletStr);
		SurveyCon sc = new SurveyCon();
		sc.setsId(dtp.getId());
		surveyReportService.deleteCacheBySurveyId(sc);
		Return re = iService.removeSurveys(dtp);
		return (String) re.getContent();
	}

	/**
	 * 打开指定部门对话框
	 */
	@RequestMapping("assigndep.html")
	public String openAssignDep(@RequestParam String sId,
			HttpServletRequest request, ModelMap model) {

		model.put("sId", sId);
		return "inquiry/assigndep";
	}

	/**
	 * 通过AJAX设置部门
	 * 
	 */
	@RequestMapping(value = "saveDepartment.html", method = RequestMethod.POST)
	@ResponseBody
	public String saveDepartment(HttpServletRequest req, ModelMap model) {
		String sId = req.getParameter("sId");
		String[] ids = req.getParameterValues("id");
		String isSub = req.getParameter("isSub");
		Return re = null;
		for (int i = 0; i < ids.length; i++) {
			SurveyAllowDepCon dep = new SurveyAllowDepCon();
			dep.setSurveyId(sId);
			dep.setDepId(ids[i]);
			dep.setIsSub(new Integer(isSub));
			re = iadService.newSurveyAllowDep(dep);
		}
		return "";
	}

	/**
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "inquiryAimDepList.html", method = RequestMethod.GET)
	public String inquiryAimDepList(HttpServletRequest request, ModelMap model) {
		String page_dep = request.getParameter("page_dep");
		String sId = request.getParameter("sId");
		String page = request.getParameter("page") == null ? "1" : request
				.getParameter("page");
		String max = request.getParameter("max") == null ? "10" : request
				.getParameter("max");
		Collection<SurveyAllowDepBo> list = new Collection<SurveyAllowDepBo>();
		Map<String, String> con = new HashMap<String, String>();
		con.put("max", max);
		con.put("page", page);
		con.put("inquiryId", sId);
		list = iadService.getSurveyAllowDeps4Page(con);
		model.put("list", list);
		model.put("page_dep", page_dep);
		return "inquiry/list/inquiryAimDepList";
	}

	@RequestMapping(value = "saveInquiryAimUser.html", method = RequestMethod.POST)
	@ResponseBody
	public Return save(HttpServletRequest request) {
		Return re = new Return();
		String sId = request.getParameter("pid");
		String[] ids = request.getParameterValues("id");
		for (String id : ids) {
			SurveyAllowUserCon dc = new SurveyAllowUserCon();
			dc.setSurveyId(sId);
			dc.setUserId(id);
			re = iauService.newSurveyAllowUser(dc);
		}
		return re;
	}

	/**
	 * 显示人员信息
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "inquiryAimUserList.html", method = RequestMethod.GET)
	public String inquiryAimUserList(HttpServletRequest request, ModelMap model) {
		String page_user = request.getParameter("page_user");
		String page = request.getParameter("page") == null ? "1" : request
				.getParameter("page");
		String max = request.getParameter("max") == null ? "10" : request
				.getParameter("max");
		Collection<SurveyAllowUserBo> list = new Collection<SurveyAllowUserBo>();
		Map<String, String> con = new HashMap<String, String>();
		con.put("max", max);
		con.put("page", page);
		String sId = request.getParameter("sId");
		con.put("inquiryId", sId);
		list = iauService.getSurveyAllowUsers4Page(con);
		model.put("userList", list);
		model.put("page_user", page_user);
		return "inquiry/list/inquiryAimUserList";
	}

	/**
	 * 打开选择培训班对话框
	 */
	@RequestMapping("getTrainClass.html")
	public String openTrainClass(@RequestParam String sId,HttpServletRequest request, ModelMap model) {
		return "inquiry/inquiryAddTrainClass";
	}

	/**
	 * 显示已选择的培训班信息
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "inquiryAimTrainClassList.html", method = RequestMethod.GET)
	public String inquiryAimTrainClassList(HttpServletRequest request,
			ModelMap model) {
		String page_trainclass = request.getParameter("page_trainclass");
		String page = request.getParameter("page") == null ? "1" : request
				.getParameter("page");
		String max = request.getParameter("max") == null ? "10" : request
				.getParameter("max");
		Collection<SurveyAllowClassBo> list = new Collection<SurveyAllowClassBo>();
		Map<String, String> con = new HashMap<String, String>();
		con.put("max", max);
		con.put("page", page);
		String sId = request.getParameter("sId");
		con.put("inquiryId", sId);
		list = iacService.getSurveyAllowClasses4Page(con);
		model.put("classList", list);
		model.put("page_trainclass", page_trainclass);
		return "inquiry/list/inquiryAimTrainClassList";
	}

	/**
	 * 显示所有培训班信息
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "inquiryTrainClassList.html", method = RequestMethod.GET)
	public String inquiryTrainClassList(HttpServletRequest request,
			ModelMap model) {
		String pagefn = request.getParameter("pagefn");
		String status = request.getParameter("status");
		String name = request.getParameter("name");
		String depId = request.getParameter("depId");
		String page = request.getParameter("page") == null ? "1" : request
				.getParameter("page");
		String max = request.getParameter("max") == null ? "10" : request
				.getParameter("max");
		Map<String, String> con = new HashMap<String, String>();
		con.put("name", name);
		con.put("status", status);
		con.put("orgDepId", depId);
		Collection<TrainClassBo> list = trainClassService.getTrainClassSelect(
				con, page, max);
		model.put("trainClassList", list);
		model.put("pagefn", pagefn);
		return "inquiry/list/trainClassList";
	}

	@RequestMapping(value = "saveInquiryTrainClass.html", method = RequestMethod.POST)
	@ResponseBody
	public Return saveInquiryTrainClass(HttpServletRequest request) {
		Return re = new Return();
		String sId = request.getParameter("sId");
		String ids = request.getParameter("ids");
		String[] tcids = null;
		if (null != ids) {
			tcids = ids.split(",");
		}
		for (String id : tcids) {
			SurveyAllowClassCon dc = new SurveyAllowClassCon();
			dc.setSurveyId(sId);
			dc.setTcId(id);
			re = iacService.newSurveyAllowClass(dc);
		}
		return re;
	}

	/**
	 * 批量删除培训调查
	 */
	@RequestMapping(value = "deleteInquiryAimDep.html", params = "method=remove", method = RequestMethod.POST)
	@ResponseBody
	public String deleteInquiryDep(HttpServletRequest req,
			HttpServletResponse res, @RequestParam("itIds") String ids) {
		Return re = iadService.removeSurveyAllowDeps(ids);
		return (String) re.getContent();
	}

	/**
	 * 批量删除培训调查
	 */
	@RequestMapping(value = "deleteInquiryAimUser.html", params = "method=remove", method = RequestMethod.POST)
	@ResponseBody
	public String deleteInquiryUser(HttpServletRequest req,
			HttpServletResponse res, @RequestParam("itIds") String ids) {
		Return re = iauService.removeSurveyAllowUsers(ids);
		return (String) re.getContent();
	}

	/**
	 * 批量删除培训调查
	 */
	@RequestMapping(value = "deleteInquiryAimClass.html", params = "method=remove", method = RequestMethod.POST)
	@ResponseBody
	public String deleteInquiryClass(HttpServletRequest req,
			HttpServletResponse res, @RequestParam("itIds") String ids) {
		Return re = iacService.removeSurveyAllowClasses(ids);
		return (String) re.getContent();
	}

	/**
	 * 打开指定部门对话框
	 */
	@RequestMapping(value = "inquiryPersonList.html", method = RequestMethod.GET)
	public String getInquiryPersonList(@RequestParam String sId,HttpServletRequest request, ModelMap model) {
		model.put("sId", sId);
		SurveyParam sp = new SurveyParam();
		sp.setId(sId);
		SurveyBo sb = iService.getSurvey(sp);
		model.put("surveyName", sb.getTopic());
		return "inquiry/inquiryPersonList";
	}

	/**
	 * 参与人员信息
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "inquiryPersonListInfoIn.html", method = RequestMethod.GET)
	public String getInquiryPersonListInfo(HttpServletRequest request,
			ModelMap model) {
		String page_fn = request.getParameter("pagefn");
		String status = request.getParameter("status");
		String sId = request.getParameter("sId");
		String page = request.getParameter("page") == null ? "1" : request
				.getParameter("page");
		String max = request.getParameter("max") == null ? "10" : request
				.getParameter("max");
/*		Collection<SurveyAllowUserBo> inquiryPersonListInfo = new Collection<SurveyAllowUserBo>();
		Map<String, String> con = new HashMap<String, String>();
		con.put("max", max);
		con.put("page", page);
		con.put("isAttend", status); //已参与人员status=1
		con.put("surveyId", sId);
		inquiryPersonListInfo = iauService.getSurveyAllowUsers4Page(con);
		model.put("inquiryPersonListInfoIn", inquiryPersonListInfo);*/
		Map<String, String> con = new HashMap<String, String>();
		con.put("surveyId", sId);
		con.put("max", max);
		con.put("page", page);
		Collection<SurveyAttendanceBo> list = saService.getSurveyAttendance4Page(con);
		model.put("attend", list);
		model.put("page_fn", page_fn);
		return "inquiry/list/inquiryPersonListInfo2";
	}
	/**
	 * 未参与人员信息
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "inquiryPersonListInfo.html", method = RequestMethod.GET)
	public String getInquiryPersonListInfo1(HttpServletRequest request,
			ModelMap model) {
		String page_fn = request.getParameter("pagefn");
		String status = request.getParameter("status");
		String sId = request.getParameter("sId");
		String page = request.getParameter("page") == null ? "1" : request
				.getParameter("page");
		String max = request.getParameter("max") == null ? "10" : request
				.getParameter("max");
		Collection<SurveyAllowUserBo> inquiryPersonListInfo = new Collection<SurveyAllowUserBo>();
		Map<String, String> con = new HashMap<String, String>();
		con.put("max", max);
		con.put("page", page);
		con.put("isAttend", status);  //未参与人员status=0
		con.put("surveyId", sId); 
		inquiryPersonListInfo = iauService.getSurveyAllowUsers4Page(con);
		model.put("inquiryPersonListInfo", inquiryPersonListInfo);
		model.put("page_fn", page_fn);
		return "inquiry/list/inquiryPersonListInfo1";
	}
	
	/**
	 * 删除未参与人员
	 */
	@RequestMapping(value = "deleteNotAttendedUser.html", params = "method=remove", method = RequestMethod.POST)
	@ResponseBody
	public Return deleteMeeting(HttpServletRequest req,HttpServletResponse res,@RequestParam("userId") String ids){
		Return re = iauService.removeSurveyAllowUsers(ids.substring(0, ids.length()-1)); //去除Id序列最后一个多余的逗号
		return re;
	}
	
	/**
	 * 修改新建后的需求调查信息
	 */
	@RequestMapping(value = "updateInquiryStatus.html", method = RequestMethod.POST)
	public Return updateTpStatus(HttpServletRequest req, ModelMap model,
			SurveyCon itc) {
		if(itc.getStatus()==2){
			/*发布后管理员通知提醒*/
			Map<String,String> con = new HashMap<String,String>();
			con.put("surveyId",itc.getsId());
			con.put("type", "5");
			noticeSurveyService.noticeSurvey(con);
		}else{
			/*删除提醒*/
			noticeSurveyService.removeNoticeByBusinessId(itc.getsId());
		}
		Return re = iService.newSurvey(itc);
		return re;
	}

	/**
	 * 修改新建后的需求调查信息
	 */
	@RequestMapping(value = "updateInquiryIndex.html", method = RequestMethod.GET)
	public ModelAndView updateInquiryIndex(HttpServletRequest req, ModelMap model, @RequestParam String sId) {
		SurveyParam ip = new SurveyParam();
		ip.setId(sId);
		SurveyBo ib = iService.getSurvey(ip);
		model.put("inquiry", ib);
		Map<String, String> con = new HashMap<String, String>();
		con.put("surveyId", sId);
		List<SurveyAllowDepBo> listDep = iadService.getSurveyAllowDeps(con);
		model.put("listDep", listDep);

		List<SurveyAllowClassBo> listClass = iacService
				.getSurveyAllowClasses(con);
		model.put("listClass", listClass);

		con.put("status", "0");
		con.put("way", "0"); //listUser中仅取新建时非通过培训班与部门加入的部分
		List<SurveyAllowUserBo> listUser = iauService.getSurveyAllowUsers(con);
		model.put("listUser", listUser);
		model.put("flag", "1"); //flag=1为修改
		
		////////20130318判断是否允许修改isModify=0代表禁止修改只允许查看 by LTC/////////////////
		String isModify = req.getParameter("isModify");
		if(null!=isModify && !"".equals(isModify)){
			model.put("isModify", isModify);
		}
		///////20130328判断在未发布且有参与人员的情况上允许修改起始、结束时间 by LTC/////////////
		String isDate = req.getParameter("isDate");
		if(null!=isDate && !"".equals(isDate)){
			model.put("isDate", isDate);
		}
		return new ModelAndView("inquiry/inquiryNew1", model);
	}

	@RequestMapping(value = "inquiryAllItemList.html", method = RequestMethod.GET)
	public ModelAndView inquiryAllItemList(HttpServletRequest req,HttpServletResponse res, ModelMap model) {
		String sId = req.getParameter("sId");
		SurveyCategoryParam where = new SurveyCategoryParam();
		where.setSurveyId(sId);
		List<SurveyCategoryBo> list = icService.getSurveyCategorys(where);
		SurveyParam where1 = new SurveyParam();
		where1.setId(sId);
		SurveyBo itb = iService.getSurvey(where1);
		model.put("itb", itb);
		model.put("listInfo", list);
		model.put("sId", sId);
		return new ModelAndView("inquiry/inquiryItemSnInfo", model);
	}

	/**
	 * 培训需求调查问题分页ListCtr
	 */
	@RequestMapping(value = "inquiryAllItem.html", method = RequestMethod.GET)
	public ModelAndView inquiryAllItemt(HttpServletRequest req,
			HttpServletResponse res, ModelMap model) {
		String page_fn = req.getParameter("pagefn");
		String page = req.getParameter("page") == null ? "1" : req
				.getParameter("page");
		String max = req.getParameter("max") == null ? "10" : req
				.getParameter("max");
		String sId = req.getParameter("sId");
		SurveyItemParam where = new SurveyItemParam();
		where.setPaperId(sId);
		where.setMax(max);
		where.setPage(page);
		Collection<SurveyItemBo> list = iiService.getSurveyItems(where);
		
	/*	boolean bool = false;
		if (!StringUtils.isBlank(sId)) {
			SurveyParam p = new SurveyParam();
			p.setId(sId);
			SurveyBo su = iService.getSurvey(p);
			
			if((su.getStatus() == 1&&su.getParticipantsNum()!=0) ||su.getStatus() == 2){
				bool = true;
			}
		}
		model.put("bool", bool);*/
		
		
		model.put("list", list);
		model.put("page_fn", page_fn);
		return new ModelAndView("inquiry/inquiryAllItem", model);
	}

	/**
	 * 保存新建后的需求调查信息
	 */
	@RequestMapping(value = "saveInquiryItemAsc.html", method = RequestMethod.POST)
	public ModelAndView saveItem(HttpServletRequest req, ModelMap model) {
		String[] sn = req.getParameterValues("sn");
		String[] ItemIds = req.getParameterValues("iiIds");
		SurveyItemCon iic = new SurveyItemCon();
		for (int i = 0; i < sn.length; i++) {
			iic.setSiId(ItemIds[i]);
			iic.setSn(new Integer(sn[i]));
			Return reItic = iiService.newSurveyItem(iic);
		}
		String sId = req.getParameter("sId");
		SurveyCategoryParam where = new SurveyCategoryParam();
		where.setSurveyId(sId);
		List<SurveyCategoryBo> list = icService.getSurveyCategorys(where);
		model.put("listInfo", list);
		model.put("sId", sId);
		return new ModelAndView("inquiry/inquiryItemSnInfo", model);
	}

	/**
	 * 保存和修改培训模版大类
	 */
	@RequestMapping(value = "saveOrUpdateCategory.html", params = "method=save", method = RequestMethod.POST)
	@ResponseBody
	public String saveOrUpdateCategory(HttpServletRequest req,
			HttpServletResponse res) {
		String itcId = req.getParameter("icId");
		String name = req.getParameter("name");
		SurveyCategoryCon itcc = new SurveyCategoryCon();
		if (null != itcId && !"".equals(itcId)) {
			itcc.setIcId(itcId);
		} else {
			String sId = req.getParameter("sId");
			String sn = req.getParameter("sn");
			itcc.setPaperId(sId);
			itcc.setSn(new Integer(sn));
		}
		itcc.setName(name);
		Return reItcc = icService.newSurveyCategory(itcc);
		return reItcc.getCode();
	}

	/**
	 * 删除培训模版大类
	 */
	@RequestMapping(value = "deleteCategory.html", params = "method=delete", method = RequestMethod.POST)
	@ResponseBody
	public String deleteCategory(HttpServletRequest req, HttpServletResponse res) {
		String icId = req.getParameter("icId");
		SurveyCategoryParam itcc = new SurveyCategoryParam();
		itcc.setId(icId);
		Return reItcc = icService.removeSurveyCategorys(itcc);
		return reItcc.getCode();
	}

	/**
	 * 保存和修改培训模版问题
	 */
	@RequestMapping(value = "saveOrUpdateItem.html", params = "method=save", method = RequestMethod.POST)
	@ResponseBody
	public Map saveOrUpdateItem(HttpServletRequest req, HttpServletResponse res) {
		SurveyItemCon itic = new SurveyItemCon();
		String[] answer = req.getParameterValues("answer[]");
		String[] answer2 = req.getParameterValues("answer2[]");
		String[] score = req.getParameterValues("score[]");
		String question = req.getParameter("question");
		String type = req.getParameter("type");
		String icId = req.getParameter("icId");

		itic.setQuestion(question);
		itic.setType(new Integer(type));
//		itic.setSn(100);
		itic.setCategoryId(icId);
		List<String> list = new ArrayList<String>();
		Return reItic = iiService.newSurveyItem(itic);
		if (null != reItic) {
			/* 预设答案 */
			if (TYPE_GAUGE.equals(type)) {
				for (int i = 0; i < answer2.length; i++) {
					if (null != answer2 && !"".equals(answer2[i])) {
						SurveyItemResCon iirc = new SurveyItemResCon();
						iirc.setAnswer(answer2[i]);
						iirc.setItemId(reItic.getCode());
						iirc.setScore(new Integer(score[i]));
						iirc.setSn(1);
						iirc.setVote(0);
						Return re = iirService.newSurveyItemRes(iirc);
						list.add(re.getCode());
					}
				}
			} else {
				if(answer!=null){
					for (int i = 0; i < answer.length; i++) {
						if (null != answer && !"".equals(answer[i])) {
							SurveyItemResCon iirc = new SurveyItemResCon();
							iirc.setAnswer(answer[i]);
							iirc.setItemId(reItic.getCode());
							iirc.setSn(1);
							iirc.setVote(0);
							Return re = iirService.newSurveyItemRes(iirc);
							list.add(re.getCode());
						}
					}
				}
				
			}
		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("itemId", reItic.getCode());
		map.put("iirId", list);
		return map;
	}

	/**
	 * 删除培训模版问题
	 */
	@RequestMapping(value = "deleteItem.html", params = "method=delete", method = RequestMethod.POST)
	@ResponseBody
	public String deleteItem(HttpServletRequest req, HttpServletResponse res) {
		String iiId = req.getParameter("iiId");
		SurveyItemParam where = new SurveyItemParam();
		where.setId(iiId);
		Return reItcc = iiService.removeSurveyItems(where);
		return reItcc.getCode();
	}

	/**
	 * 保存和修改培训模版问题
	 */
	@RequestMapping(value = "updateItem.html", params = "method=update", method = RequestMethod.POST)
	@ResponseBody
	public String updateItem(HttpServletRequest req, HttpServletResponse res) {
		SurveyItemCon itic = new SurveyItemCon();
		String[] answer = req.getParameterValues("answer[]");
		String[] answer2 = req.getParameterValues("answer2[]");
		String[] score = req.getParameterValues("score[]");
		String[] iirIds = req.getParameterValues("iirIds[]");
		String question = req.getParameter("question");
		String type = req.getParameter("type");
		String iiId = req.getParameter("iiId");

		itic.setSiId(iiId);
		itic.setQuestion(question);
		Return reItic = iiService.newSurveyItem(itic);
		if (null != reItic) {
			/* 预设答案 */
			if (TYPE_GAUGE.equals(type)) {
				if (null != answer2) {
					for (int i = 0; i < answer2.length; i++) {
						if (null != answer2 && !"".equals(answer2[i])) {
							SurveyItemResCon iirc = new SurveyItemResCon();
							if (!"".equals(iirIds[i])) {
								iirc.setSirId(iirIds[i]);
							} else {
								iirc.setItemId(iiId);
								iirc.setSn(1);
							}
							iirc.setVote(0);
							iirc.setAnswer(answer2[i]);
							iirc.setScore(new Integer(score[i]));
							iirService.newSurveyItemRes(iirc);
						}
					}
				}
			} else {
				if (null != answer) {
					for (int i = 0; i < answer.length; i++) {
						if (null != answer && !"".equals(answer[i])) {
							SurveyItemResCon iirc = new SurveyItemResCon();
							if (!"".equals(iirIds[i])) {
								iirc.setSirId(iirIds[i]);
							} else {
								iirc.setItemId(iiId);
								iirc.setSn(1);
							}
							iirc.setAnswer(answer[i]);
							iirc.setVote(0);
							iirService.newSurveyItemRes(iirc);
						}
					}
				}
			}
		}
		return "";
	}

	/**
	 * 删除培训模版问题
	 */
	@RequestMapping(value = "deleteItemRes.html", params = "method=delete", method = RequestMethod.POST)
	@ResponseBody
	public String deleteItemRes(HttpServletRequest req, HttpServletResponse res) {
		String iirId = req.getParameter("iirId");
		SurveyItemResParam where = new SurveyItemResParam();
		where.setId(iirId);
		Return reItcc = iirService.removeSurveyItemReses(where);
		return reItcc.getCode();
	}
}
