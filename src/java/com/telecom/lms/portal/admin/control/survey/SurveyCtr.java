package com.telecom.lms.portal.admin.control.survey;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.core.bo.survey.SurveyBo;
import com.telecom.lms.core.bo.survey.SurveyCategoryBo;
import com.telecom.lms.core.bo.survey.SurveyCategoryCon;
import com.telecom.lms.core.bo.survey.SurveyCon;
import com.telecom.lms.core.bo.survey.SurveyItemBo;
import com.telecom.lms.core.bo.survey.SurveyItemCon;
import com.telecom.lms.core.bo.survey.SurveyItemResCon;
import com.telecom.lms.core.bo.survey.SurveyReplyBo;
import com.telecom.lms.core.bo.survey.SurveyReportCollectBo;
import com.telecom.lms.core.bo.survey.SurveyReportCollectCon;
import com.telecom.lms.core.bo.survey.aim.SurveyAimBo;
import com.telecom.lms.core.bo.survey.aim.SurveyAimCon;
import com.telecom.lms.core.bo.survey.allow.SurveyAllowUserBo;
import com.telecom.lms.core.bo.survey.allow.SurveyAllowUserCon;
import com.telecom.lms.core.bo.survey.report.SurveyReportHistogramBo;
import com.telecom.lms.core.bo.survey.report.SurveyReportRankBo;
import com.telecom.lms.core.bo.survey.report.SurveyReportScheduleBo;
import com.telecom.lms.core.bo.survey.tp.SurveyTpBo;
import com.telecom.lms.core.bo.surveyreport.SurveyReportCategoryBo;
import com.telecom.lms.core.bo.surveyreport.SurveyReportInfoBo;
import com.telecom.lms.core.bo.surveyreport.SurveyReportItemBo;
import com.telecom.lms.core.controller.trainevaluate.EvaluateReportInfoController;
import com.telecom.lms.core.model.trainevaluate.SurveyReportInfoSearchForm;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.portal.admin.util.SessionConstants;
import com.telecom.lms.portal.admin.util.StringTool;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.down.survey.DownLoadSurveyService;
import com.telecom.lms.sdk.service.down.trainevaluate.DownLoadEvaluateReportService;
import com.telecom.lms.sdk.service.imp.ImportSurveyTpService;
import com.telecom.lms.sdk.service.imp.notice.NoticeSurveyService;
import com.telecom.lms.sdk.service.survey.SurveyAimService;
import com.telecom.lms.sdk.service.survey.SurveyAllowUserService;
import com.telecom.lms.sdk.service.survey.SurveyCategoryService;
import com.telecom.lms.sdk.service.survey.SurveyItemResService;
import com.telecom.lms.sdk.service.survey.SurveyItemService;
import com.telecom.lms.sdk.service.survey.SurveyReplyService;
import com.telecom.lms.sdk.service.survey.SurveyReportCollectService;
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
import com.telecom.lms.sdk.util.FileInfoUtil;

@Controller
@RequestMapping("/survey")
public class SurveyCtr {
	@Autowired
	SurveyService suService;
	@Autowired
	SurveyReplyService surveyReplyService;
	@Autowired
	SurveyAimService aimService;
	@Autowired
	SurveyAllowUserService allowService;
	@Autowired
	SurveyTpService tpService;
	@Autowired
	TrainClassService tcService;
	@Autowired
	ImportSurveyTpService importSurveyTpService;
	@Autowired
	SurveyReportService surveyReportService;
	@Autowired
	UserInfoService userInfoService;
	@Autowired
	DownLoadSurveyService downLoadSurveyService;
	@Autowired
	SurveyReportCollectService surveyReportCollectService;

	@Autowired
	NoticeSurveyService noticeSurveyService;

	@Resource
	EvaluateReportInfoController evaluateReportInfoController;
	@Autowired
	DownLoadEvaluateReportService downLoadEvaluateReportService;

	@Autowired
	private SurveyCategoryService icService;

	@Autowired
	private SurveyItemResService iirService;
	@Autowired
	private SurveyItemService iiService;

	private final static String TYPE_GAUGE = "3";// 量规

	private @Value("#{lmsapi.timestamp}")
	String timestamp;

	/**
	 * 跳转评估报告页面
	 */
	@RequestMapping("turnToSurveyReport.html")
	public String turnToSurveyReport(HttpServletRequest request, ModelMap model) {
		String surveyId = request.getParameter("surveyId");
		String surveyType = request.getParameter("surveyType");
		model.put("surveyId", surveyId);
		model.put("surveyType", surveyType);

		Map<String, String> con = new HashMap<String, String>();
		con.put("surveyId", surveyId);
		SurveyReportCollectBo src = surveyReportCollectService.getSurveyReportCollect(con);
		model.put("src", src); //通过所属评估的ID查询该评估报告

		String participantsNum = request.getParameter("participantsNum");
		String userNum = request.getParameter("userNum");
		model.put("participantsNum", participantsNum); //参与人数
		model.put("userNum", userNum); //总人数

		Map<String, String> scon = new HashMap<String, String>();
		scon.put("sid", surveyId);
		scon.put("timestamp", timestamp);
		SurveyReportInfoBo survey = surveyReportService.getSurveyReportCollectInfo(scon);
		model.put("survey", survey); //评估下大类及问题统计
		return "survey/surveyReport";
	}

	/**
	 * 保存评估报告中:问题总结&经验不足内容
	 */
	@RequestMapping(value = "saveSurveyReport.html", method = RequestMethod.POST)
	public String saveSurveyReport(HttpServletRequest request, ModelMap model) {
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		String surveyId = request.getParameter("surveyId"); //该报告所属评估ID
		String summary = request.getParameter("summary"); //开放式问题总结
		String experience = request.getParameter("experience"); //本次培训中的经验与不足
		SurveyReportCollectCon con = new SurveyReportCollectCon();
		con.setSurveyId(surveyId);
		con.setSummary(summary);
		con.setExperience(experience);
		String flag = request.getParameter("flag");
		if ("1".equals(flag)) { //flag为1时表示新建
			con.setCreater_id(user.getUid());
			con.setCreate_date(DateTool.getNowShort());
		}
		if ("0".equals(flag)) { //flag为0时表示修改
			String srcId = request.getParameter("srcId");
			con.setSrcId(srcId); //修改时需保存主键Id
			con.setUpdater_id(user.getUid());
			con.setUpdate_date(DateTool.getNowShort());
		}
		con.setIsDel(0);
		surveyReportCollectService.saveOrUpdateSurveyReportCollect(con);

		String surveyType = request.getParameter("surveyType"); //该报告所属评估TYPE
		if ("1".equals(surveyType)) {
			return "survey/response_index"; //反应层评估
		} else if ("2".equals(surveyType)) {
			return "survey/behavior_index"; //行为层评估
		} else if ("3".equals(surveyType)) {
			return "survey/lpi_index"; //LPI测评
		} else if ("4".equals(surveyType)) {
			return "survey/comprehensive_index"; //综合评估
		} else {
			return "";
		}
	}

	/**
	 * 导出培训评估导入结果模板
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "exportSurveyResultTemplet.html", method = RequestMethod.GET)
	public void exportSurveyResultTemplet(HttpServletRequest request, HttpServletResponse response) {

		String surveyId = request.getParameter("surveyId");
		Map<String, String> surveyItemCon = new HashMap<String, String>();
		surveyItemCon.put("surveyId", surveyId);
		List<SurveyItemBo> surveyItemBos = iiService.exportSurveyItemListSid(surveyItemCon);
		Map<String, String> surveyAllowUserCon = new HashMap<String, String>();
		surveyAllowUserCon.put("surveyId", surveyId);
		List<UserInfoBo> userInfoBos = allowService.getUserInfoList(surveyAllowUserCon);
		downLoadSurveyService.downSurveyResultTemplet(response, surveyItemBos, userInfoBos);
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

	@RequestMapping("index.html")
	public String index(HttpServletRequest request, ModelMap model) {
		String type = request.getParameter("type");
		if ("1".equals(type)) {
			//反应层评估
			return "survey/response_index";
		} else if ("3".equals(type)) {
			return "survey/lpi_index";
		} else if ("4".equals(type)) {
			//综合评估
			return "survey/comprehensive_index";
		} else if ("2".equals(type)) {
			return "survey/behavior_index";
		} else {
			return "";
		}
	}

	/**
	 * 跳转结果明细-简答题详细
	 */
	@RequestMapping(value = "remarkList.html")
	public String remarkList(HttpServletRequest request, ModelMap model) {
		String siId = request.getParameter("siId");
		String type = request.getParameter("type");
		String page = request.getParameter("page");
		String max = request.getParameter("max");
		Collection<SurveyReplyBo> remarkDetail = surveyReplyService.getSurveyItems(siId, page, max);
		model.put("remarkDetail", remarkDetail);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		if (type.equals("1")) {
			return "survey/list/remarkList";
		} else {
			return "survey/list/collectList";
		}

	}

	@RequestMapping("list.html")
	public String list(HttpServletRequest request, ModelMap model) {
		String orgid = request.getParameter("orgid");
		String type = request.getParameter("type");
		String topic = request.getParameter("topic");
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
		Collection<SurveyBo> list = suService.getSurveys(p);
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		if ("1".equals(type)) {
			return "survey/response_list";
		}
		if ("2".equals(type)) {
			return "survey/behavior_list";
		} else if ("3".equals(type)) {
			return "survey/lpi_list";
		} else if ("4".equals(type)) {
			return "survey/comprehensive_list";
		} else {
			return "";
		}
	}

	/**
	 * 打开选择模板的对话框
	 */
	@RequestMapping("dialog/choose/template.html")
	public String tpDialog(HttpServletRequest request, ModelMap model) {
		String html_id = request.getParameter("html_id");
		String html_name = request.getParameter("html_name");
		model.put("html_id", html_id);
		model.put("html_name", html_name);
		return "survey/template_dialog";
	}

	/**
	 * 用于对话框的模板选择列表
	 */
	@RequestMapping(value = "dialog/list/template.html")
	public String chooseTpList(HttpServletRequest request, ModelMap model) {
		SurveyTpParam where = new SurveyTpParam();
		where.setType("2");
		where.setStatus("2");
		where.setName(request.getParameter("tp_name"));
		if (null != request.getParameter("tp_type") && request.getParameter("tp_type") != "") {
			where.setType(request.getParameter("tp_type"));
		}
		where.setPage(PagerTool.getPageNo(request));
		where.setMax(PagerTool.getPageSize(request));
		Collection<SurveyTpBo> list = tpService.getSurveyTps(where);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "survey/template_choose_list";
	}

	@RequestMapping("new.html")
	public String tonew(HttpServletRequest request, ModelMap model) {
		String type = request.getParameter("type");
		String sid = request.getParameter("sid");
		//LMSWD-1401 by LTC 20130509
		String symbol = request.getParameter("symbol");
		if (null != symbol && symbol != "") {
			model.put("symbol", symbol);
		}
		if (!StringUtils.isBlank(sid)) {
			SurveyParam p = new SurveyParam();
			p.setId(sid);
			SurveyBo su = suService.getSurvey(p);
			model.put("su", su);
			//查询是否跟培训班关联
			Map<String, String> con = new HashMap<String, String>();
			con.put("surveyID", sid);
			List<SurveyAimBo> list = aimService.getSurveyAimList(con);
			if (list != null && list.size() > 0) {
				model.put("trainClassName", list.get(0).getObjectName());
			}
		}
		if ("1".equals(type)) {
			return "survey/response_new";
		} else if ("3".equals(type)) {
			return "survey/lpi_new2";
		} else if ("4".equals(type)) {
			return "survey/comprehensive_new";
		} else {
			return "";
		}
	}

	@RequestMapping(value = "save.html", method = RequestMethod.POST)
	public String save(SurveyCon su, HttpServletRequest request, ModelMap model) {
		HttpSession session = request.getSession();
		OrganizationBo org = (OrganizationBo) session.getAttribute(SessionConstants.SESSION_DEFAULT_ORG);
		String sid = request.getParameter("sId");
		String tcid = request.getParameter("tcid");
		String tcName = request.getParameter("trainClassName");//培训班名称
		String symbol = request.getParameter("symbol");
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		su.setCreate_date(DateTool.getNowShort());
		su.setCreater_id(user.getUid());
		su.setIsGenerateExam(0);
		su.setTrainClassId(tcid);
		String status = request.getParameter("status"); //不改变发布状态
		if (null != status && status != "") {
			int _status = Integer.parseInt(status);
			su.setStatus(_status);
		} else {
			su.setStatus(1); //新建默认为未发布
		}
		/**** 此培训班ID作为upId是区分是否是在培训内新建的评估|LMSWD-3469|by LuChao ****/
		su.setUpId(su.getUpId());

		if (org != null) {
			su.setDefault_org_id(org.getOrgId());
		}
		if (sid != null) {
		}
		String nameJudge = su.getTopic();
		su.setTopic(nameJudge);
		su.setsId(sid);
		Return repeat = suService.getVildateName(su);
		if (repeat.getCode().equals("0")) {
			Return re = suService.newSurvey(su);
			if (re.getCode() != null && tcid != null && !tcid.equals("")) {
				SurveyAimCon cla = new SurveyAimCon();
				cla.setObjectId(tcid);
				if (null != tcName) {
					cla.setObjectName(tcName);
				}
				cla.setSurvey_id(re.getCode());
				cla.setType(1);
				aimService.save(cla);
			}
			return "redirect:setting.html?type=" + su.getType() + "&sid=" + re.getCode() + "&symbol=" + symbol
					+ "&upId=" + su.getUpId();
		} else {
			return "redirect:errorforsurvey.html?type=" + su.getType() + "&sid=" + sid + "&symbol=" + symbol;
		}
	}

	/**
	 * 评估名称重复
	 * 
	 * @param req
	 * @param model
	 * @return
	 */
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

	//打开选择培训班对话框
	@RequestMapping("dialog/trainclass.html")
	public String chooseClass(HttpServletRequest request, ModelMap model) {
		String html_id = request.getParameter("html_id");
		String html_name = request.getParameter("html_name");
		model.put("html_id", html_id);
		model.put("html_name", html_name);
		return "survey/trainclass_radio";
	}

	@RequestMapping(value = "setting.html")
	public String setting(HttpServletRequest request, ModelMap model) {
		String type = request.getParameter("type");
		String sid = request.getParameter("sid");
		String symbol = request.getParameter("symbol");
		model.put("sid", sid);
		model.put("symbol", symbol);

		//LMSWD-3469
		String upId = request.getParameter("upId");
		model.put("upId", upId);

		if ("1".equals(type)) {
			return "survey/response_setting";
		} else if ("3".equals(type)) {
			return "survey/lpi_setting";
		} else if ("4".equals(type)) {
			return "survey/comprehensive_setting";
		} else {
			return "";
		}
	}

	@RequestMapping(value = "ajax/update.html", method = RequestMethod.POST)
	@ResponseBody
	public Return update(SurveyCon survey) {

		/* 发布之后进行通知提醒 */
		if (survey.getStatus() == 2) {
			/* 管理员通知提醒 */
			Map<String, String> con = new HashMap<String, String>();
			con.put("surveyId", survey.getsId());
			con.put("type", "2");
			noticeSurveyService.noticeSurvey(con);
		} else {
			/* 删除提醒 */
			noticeSurveyService.removeNoticeByBusinessId(survey.getsId());
		}

		Return re = suService.newSurvey(survey);
		return re;
	}

	@RequestMapping(value = "delete.html", method = RequestMethod.POST)
	@ResponseBody
	public Return delete(HttpServletRequest request, ModelMap model) {
		String[] ids = request.getParameterValues("id");
		SurveyParam p = new SurveyParam();
		p.setId(StringTool.getString(ids, StringTool.SPLIT_COMMA));
		SurveyCon sc = new SurveyCon();
		sc.setsId(p.getId());
		surveyReportService.deleteCacheBySurveyId(sc);
		Return re = suService.removeSurveys(p);
		return re;
	}

	@RequestMapping("aimuser/list.html")
	public String listAimUser(HttpServletRequest request, ModelMap model) {
		String sid = request.getParameter("sid");
		String user_sn = request.getParameter("user_sn");
		String user_name = request.getParameter("user_name");
		Map<String, String> con = new HashMap<String, String>();
		con.put(PagerTool.PAGE_NO, PagerTool.getPageNo(request));
		con.put(PagerTool.PAGE_SIZE, PagerTool.getPageSize(request));
		con.put("surveyID", sid);
		con.put("type", "0");
		con.put("objectSn", user_sn);
		con.put("objectName", user_name);
		Collection<SurveyAimBo> list = aimService.getUserAimList(con);
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		//		if("1".equals(type)){
		//			return "survey/response_aimuser_list";
		//		}else if("2".equals(type)){
		//			return "survey/behavior_aimuser_list";
		//		}else if("3".equals(type)){
		//			return "survey/lpi_aimuser_list";
		//		}else if("4".equals(type)){
		//			return "survey/comprehensive_aimuser_list";
		//		}else{
		//			return "";
		//		}
		return "survey/behavior_aimuser_list";
	}

	@RequestMapping(value = "aimuser/add.html", method = RequestMethod.POST)
	@ResponseBody
	public Return addAimUser(HttpServletRequest request, ModelMap model) {
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		Return re = new Return();
		String sid = request.getParameter("pid");
		String[] ids = request.getParameterValues("id");
		String[] names = request.getParameterValues("name");
		String[] sns = request.getParameterValues("sn");
		SurveyAllowUserCon all = null;
		for (int i = 0; i < ids.length; i++) {
			SurveyAimCon u = new SurveyAimCon();
			u.setSurvey_id(sid);
			u.setObjectId(ids[i]);
			u.setObjectName(names[i]);
			u.setType(0);
			u.setObjectSn(sns[i]);
			re = aimService.saveOrUpdate(u);
			/*** 添加自身为评估对象时，student端也可以看到*LuChao add ***/
			all = new SurveyAllowUserCon();
			all.setSurveyId(sid);
			if (re != null && re.getCode() != null) {
				all.setSurveyAimId(re.getCode());
			}
			all.setCreaterId(user.getUid());
			all.setUserId(ids[i]);
			all.setUserName(names[i]);
			all.setIsAttend(0);
			all.setRelation(4);
			allowService.newSurveyAllowUser(all);

		}
		return re;
	}

	@RequestMapping(value = "aimuser/delete.html", method = RequestMethod.POST)
	@ResponseBody
	public Return deleteAimUser(HttpServletRequest request, ModelMap model) {
		String[] ids = request.getParameterValues("auid");
		Map<String, String> con = new HashMap<String, String>();
		con.put("ids", StringTool.getString(ids, StringTool.SPLIT_COMMA));
		Map<String, String> con_u = new HashMap<String, String>();
		SurveyParam p = new SurveyParam();
		for (int j = 0; j < ids.length; j++) {
			p.setId(ids[j]);
			con_u.put("saId", p.getId());
			con_u.put(PagerTool.PAGE_SIZE, "1000");
			Collection<SurveyAllowUserBo> list = allowService.getSurveyAllowUsers4Page(con_u);
			for (int i = 0; i < list.getPage().getRecords(); i++) {
				String sauid = list.getData().get(i).getSauId();
				allowService.removeSurveyAllowUsers(sauid);
			}
		}
		Return re = aimService.removeSurveyAim(con);
		return re;
	}

	@RequestMapping(value = "allowuser/dialog.html")
	public String allowUserDialog(HttpServletRequest request, ModelMap model) {
		String auid = request.getParameter("auid");
		String sid = request.getParameter("sid");
		model.put("auid", auid);
		model.put("sid", sid);
		return "survey/allowuser_dialog";
	}

	@RequestMapping("allowuser/list.html")
	public String listAllowUser(HttpServletRequest request, ModelMap model) {
		String id = request.getParameter("id");
		String type = request.getParameter("type");
		String user_sn = request.getParameter("user_sn");
		String user_name = request.getParameter("user_name");
		String user_mobile = request.getParameter("user_mobile");
		Map<String, String> con = new HashMap<String, String>();
		if ("1".equals(type) || "4".equals(type)) {
			con.put("surveyId", id);
		} else if ("2".equals(type) || "3".equals(type)) {
			con.put("saId", id);//评估 对象id
		} else {
		}
		con.put("user_sn", user_sn);
		con.put("user_name", user_name);
		con.put("mobile", user_mobile);
		con.put(PagerTool.PAGE_NO, PagerTool.getPageNo(request));
		con.put(PagerTool.PAGE_SIZE, PagerTool.getPageSize(request));
		Collection<SurveyAllowUserBo> list = allowService.getSurveyAllowUsers4Page(con);
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		if ("1".equals(type) || "4".equals(type)) {
			return "survey/response_allowuser_list";
		} else if ("2".equals(type) || "3".equals(type)) {
			return "survey/allowuser_list";
		} else {
			return "";
		}
	}

	@RequestMapping(value = "allowuser/add.html", method = RequestMethod.POST)
	@ResponseBody
	public Return addAllowUser(HttpServletRequest request, ModelMap model) {
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		Return re = new Return();
		String pid = request.getParameter("pid");
		String saId = request.getParameter("auId");//评估对象id
		String[] ids = request.getParameterValues("id");
		String type = request.getParameter("type");
		String sid = request.getParameter("sid");
		String[] names = request.getParameterValues("name");
		for (int i = 0; i < ids.length; i++) {
			SurveyAllowUserCon u = new SurveyAllowUserCon();
			if ("1".equals(type) || "4".equals(type)) {
				//反应层和综合评估设置为评估的参与人员
				u.setSurveyId(pid);
				Map<String, String> con = new HashMap<String, String>();
				con.put("surveyID", pid);
				con.put("type", "1");
				List<SurveyAimBo> list = aimService.getSurveyAimList(con);
				if (list != null)
					if (list.size() > 0) {
						if (list.get(0).getSaId() != null)
							u.setSurveyAimId(list.get(0).getSaId());
					}
			} else if ("2".equals(type) || "3".equals(type)) {
				//行为层和LPI设置为指定人的评估人
				u.setSurveyId(sid);
				u.setSurveyAimId(saId);
				u.setCreaterId(user.getUid());
			}
			u.setUserId(ids[i]);
			u.setUserName(names[i]);
			u.setCreaterId(user.getUid());
			u.setIsAttend(0);
			re = allowService.newSurveyAllowUser(u);
		}
		/* 管理员通知提醒 */
		Map<String, String> con = new HashMap<String, String>();
		con.put("surveyId", pid);
		con.put("type", "2");
		noticeSurveyService.noticeSurvey(con);
		return re;
	}

	@RequestMapping(value = "allowuser/update.html", method = RequestMethod.POST)
	public Return updateAllowuser(HttpServletRequest request, ModelMap model) {
		String sauid = request.getParameter("sauid");
		String rel = request.getParameter("rel");
		SurveyAllowUserCon allowUser = new SurveyAllowUserCon();
		allowUser.setSauId(sauid);
		allowUser.setRelation(Integer.parseInt(rel));
		return allowService.newSurveyAllowUser(allowUser);
	}

	@RequestMapping(value = "allowuser/delete.html", method = RequestMethod.POST)
	@ResponseBody
	public Return deleteAllowUser(HttpServletRequest request, ModelMap model) {
		String[] ids = request.getParameterValues("auid");
		String pid = request.getParameter("pid");
		Return re = allowService.removeSurveyAllowUsers(StringTool.getString(ids, StringTool.SPLIT_COMMA));
		/* 管理员通知提醒 */
		Map<String, String> con = new HashMap<String, String>();
		con.put("surveyId", pid);
		con.put("type", "2");
		noticeSurveyService.noticeSurvey(con);
		return re;
	}

	/**
	 * 评估的结果明细页面
	 */
	@RequestMapping(value = "result.html")
	public String result(HttpServletRequest request, ModelMap model) {
		String sid = request.getParameter("sid");
		String type = request.getParameter("type");
		String pageTitle = null;
		if ("1".equals(type)) {
			pageTitle = "反应层评测结果";
		} else if ("2".equals(type)) {
			pageTitle = "行为层评测结果";
		} else if ("3".equals(type)) {
			pageTitle = "LPI评测结果";
		} else if ("4".equals(type)) {
			pageTitle = "综合评估评测结果";
		} else {
			pageTitle = "";
		}
		SurveyParam p = new SurveyParam();
		p.setId(sid);
		SurveyBo su = suService.getSurvey(p);
		model.put("su", su);
		model.put("pageTitle", pageTitle);
		model.put("surveyType", type);
		return "survey/result";
	}

	/**
	 * 评估结果被评估人列表
	 */
	@RequestMapping(value = "result/list.html")
	public String resultList(HttpServletRequest request, ModelMap model) {
		String sid = request.getParameter("sid");
		Map<String, String> con = new HashMap<String, String>();
		con.put(PagerTool.PAGE_NO, PagerTool.getPageNo(request));
		con.put(PagerTool.PAGE_SIZE, PagerTool.getPageSize(request));
		con.put("surveyID", sid);
		Collection<SurveyAimBo> list = aimService.getUserTargetBySurvey(con);
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "survey/result_list";
	}

	@RequestMapping(value = "result/detail.html")
	public String resultDetails(HttpServletRequest request, ModelMap model) {
		String sid = request.getParameter("sid");
		String objectSn = request.getParameter("objectSn");
		String objectName = request.getParameter("objectName");
		Map<String, String> con = new HashMap<String, String>();
		con.put(PagerTool.PAGE_NO, PagerTool.getPageNo(request));
		con.put(PagerTool.PAGE_SIZE, PagerTool.getPageSize(request));
		con.put("surveyID", sid);
		con.put("objectSn", objectSn);
		con.put("objectName", objectName);
		Collection<SurveyAimBo> list = aimService.getUserTargetBySurvey(con);
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "survey/result_detail";
	}

	/**
	 * 评测结果报表
	 */
	@RequestMapping(value = "exportStatisticsResult.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportReport(HttpServletRequest request, HttpServletResponse response) {

		SurveyReportInfoSearchForm form = exportResultQuery(request);
		List<SurveyReportItemBo> list = evaluateReportInfoController.statisticsResult(form);
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = FileInfoUtil.getFileInfo(address, "statisticsResult");
		downLoadEvaluateReportService.exportStatisticsResult(fileInfo, list);
		return fileInfo.getName();
	}

	@RequestMapping(value = "exportStatisticsAvgScore.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportAvgScore(HttpServletRequest request, HttpServletResponse response) {

		SurveyReportInfoSearchForm form = exportAvgScoreQuery(request);
		List<SurveyReportCategoryBo> list = evaluateReportInfoController.statisticsAvgScore(form);

		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = FileInfoUtil.getFileInfo(address, "statisticsAvgScore");
		downLoadEvaluateReportService.exportStatisticsAvgScore(fileInfo, list);
		return fileInfo.getName();
	}

	private SurveyReportInfoSearchForm exportResultQuery(HttpServletRequest request) {

		SurveyReportInfoSearchForm form = new SurveyReportInfoSearchForm();
		form.setSurveyId(request.getParameter("surveyId"));
		form.setRelation(request.getParameter("relation"));
		form.setUserId(request.getParameter("userid"));
		return form;
	}

	private SurveyReportInfoSearchForm exportAvgScoreQuery(HttpServletRequest request) {

		SurveyReportInfoSearchForm form = new SurveyReportInfoSearchForm();
		form.setSurveyId(request.getParameter("surveyId"));
		form.setRelation(request.getParameter("relation"));
		form.setUserId(request.getParameter("userid"));
		form.setType("4");
		return form;
	}

	/**
	 * 评测结果报表
	 */
	@RequestMapping(value = "result/report.html")
	public String resultReport(HttpServletRequest request, ModelMap model) {
		String report = request.getParameter("report");
		String surveyId = request.getParameter("surveyId");
		String relation = request.getParameter("relation");
		String userid = request.getParameter("userid");
		Map<String, String> con = new HashMap<String, String>();
		con.put("relation", relation);
		con.put("sid", surveyId);
		con.put("uid", userid);
		if ("all".equals(report)) {
			List<SurveyReportScheduleBo> surveyReportBos = surveyReportService.getSurveyCategoryReport(con);
			model.put("list", surveyReportBos);
			return "survey/report/all";
		} else if ("column".equals(report)) {
			List<SurveyReportHistogramBo> surveyReportBos = surveyReportService.getSurveyHistogramReport(con);
			model.put("list", surveyReportBos);
			return "survey/report/column";
		} else if ("ranking".equals(report)) {
			List<SurveyReportRankBo> surveyReportBos = surveyReportService.getSurveyRankReport(con);
			model.put("list", surveyReportBos);
			return "survey/report/ranking";
		} else if ("percent".equals(report)) {
			return "survey/report/percent";
		} else if ("detail".equals(report)) {
			List<SurveyCategoryBo> surveyCategoryBos = surveyReportService.getSurveyCategory(con);
			model.put("surveyCategoryList", surveyCategoryBos);
			model.put("userid", userid);
			model.put("surveyId", surveyId);
			model.put("type", 1);
			return "survey/report/detail";
		} else if ("behavior".equals(report) || "response".equals(report) || "comprehensive".equals(report)
				|| "inquiry".equals(report)) {
			con.put("timestamp", timestamp);
			SurveyReportInfoBo reportInfoBo = surveyReportService.getSurveyReportInfo(con);
			model.put("relation", relation);
			model.put("reportInfoBo", reportInfoBo);
			model.put("surveyId", surveyId);
			model.put("report", report);
			model.put("userid", userid);
			return "survey/surveyDetails";
		} else {
			return "";
		}
	}

	@RequestMapping(value = "detail/schedule.html")
	public String detailScheduleReport(HttpServletRequest request, ModelMap model) {

		String type = request.getParameter("type");
		String category = request.getParameter("category");
		String userid = request.getParameter("userid");
		String surveyId = request.getParameter("surveyId");

		Map<String, String> map = new HashMap<String, String>();
		map.put("sid", surveyId);
		List<SurveyCategoryBo> surveyCategoryBos = surveyReportService.getSurveyCategory(map);
		model.put("surveyCategoryList", surveyCategoryBos);
		Map<String, String> con = new HashMap<String, String>();
		con.put("icid", category);
		con.put("uid", userid);
		if ("1".equals(type)) {
			List<SurveyReportScheduleBo> surveyReportBos = surveyReportService.getSurveyItemReport(con);
			model.put("surveyReportBos", surveyReportBos);
		} else {
			List<SurveyReportHistogramBo> surveyHistogramBos = surveyReportService.getSurveyItemHistogram(con);
			model.put("surveyHistogramBos", surveyHistogramBos);
		}
		model.put("userid", userid);
		model.put("icId", category);
		model.put("type", type);
		model.put("surveyId", surveyId);
		return "survey/report/detail";
	}

	@RequestMapping(value = "inquiryAllItemList.html", method = RequestMethod.GET)
	public ModelAndView inquiryAllItemList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		String sId = req.getParameter("sId");
		String type = req.getParameter("type");
		if (sId == null)
			return null;

		/*
		 * boolean bool = false; if (!StringUtils.isBlank(sId)) { SurveyParam p = new SurveyParam(); p.setId(sId);
		 * SurveyBo su = suService.getSurvey(p); if((su.getStatus() == 1&&su.getParticipantsNum()!=0) ||su.getStatus()
		 * == 2){ bool = true; } } model.put("bool", bool);
		 */
		SurveyCategoryParam where = new SurveyCategoryParam();
		where.setSurveyId(sId);
		List<SurveyCategoryBo> list = icService.getSurveyCategorys(where);
		SurveyParam where1 = new SurveyParam();
		where1.setId(sId);
		SurveyBo itb = suService.getSurvey(where1);
		model.put("itb", itb);
		model.put("listInfo", list);
		model.put("sId", sId);
		return new ModelAndView("survey/inquiryItemSnInfo", model);
	}

	/**
	 * 删除培训模版问题
	 */
	@RequestMapping(value = "deleteItemRes.html", params = "method=delete", method = RequestMethod.POST)
	@ResponseBody
	public String deleteItemRes(HttpServletRequest req, HttpServletResponse res) {
		Return re = deleteSuveyReport(req);
		if (re == null || re.getCode() == null) {
			re = new Return("delete");
		}
		/***** 先删结果明细SurveyReportInfo *****/
		if (!"delete".equals(deleteSuveyReport(req).getCode()))
			return Integer.toString(0);

		String iirId = req.getParameter("iirId");
		SurveyItemResParam where = new SurveyItemResParam();
		where.setId(iirId);
		Return reItcc = iirService.removeSurveyItemReses(where);
		return reItcc.getCode();
	}

	/**
	 * 删除培训模版问题
	 */
	@RequestMapping(value = "deleteItem.html", params = "method=delete", method = RequestMethod.POST)
	@ResponseBody
	public String deleteItem(HttpServletRequest req, HttpServletResponse res) {
		Return re = deleteSuveyReport(req);
		if (re == null || re.getCode() == null) {
			re = new Return("delete");
		}
		/***** 先删结果明细SurveyReportInfo *****/
		if (!"delete".equals(deleteSuveyReport(req).getCode()))
			return Integer.toString(0);

		String iiId = req.getParameter("iiId");
		SurveyItemParam where = new SurveyItemParam();
		where.setId(iiId);
		Return reItcc = iiService.removeSurveyItems(where);
		return reItcc.getCode();
	}

	/**
	 * 删除培训模版大类
	 */
	@RequestMapping(value = "deleteCategory.html", params = "method=delete", method = RequestMethod.POST)
	@ResponseBody
	public String deleteCategory(HttpServletRequest req, HttpServletResponse res) {
		Return re = deleteSuveyReport(req);
		if (re == null || re.getCode() == null) {
			re = new Return("delete");
		}
		/***** 先删结果明细SurveyReportInfo *****/
		if (!"delete".equals(deleteSuveyReport(req).getCode()))
			return Integer.toString(0);

		String icId = req.getParameter("icId");
		SurveyCategoryParam itcc = new SurveyCategoryParam();
		itcc.setId(icId);
		Return reItcc = icService.removeSurveyCategorys(itcc);
		return reItcc.getCode();
	}

	/**
	 * 保存和修改培训模版大类
	 */
	@RequestMapping(value = "saveOrUpdateCategory.html", params = "method=save", method = RequestMethod.POST)
	@ResponseBody
	public String saveOrUpdateCategory(HttpServletRequest req, HttpServletResponse res) {
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
	 * 保存新建后的需求调查信息
	 */
	@RequestMapping(value = "saveInquiryItemAsc.html", method = RequestMethod.POST)
	public ModelAndView saveItem(HttpServletRequest req, ModelMap model) {
		String[] sn = req.getParameterValues("sn");
		String[] ItemIds = req.getParameterValues("iiIds");
		String type = req.getParameter("type");
		SurveyItemCon itc = new SurveyItemCon();
		for (int i = 0; i < sn.length; i++) {
			itc.setSiId(ItemIds[i]);
			itc.setSn(new Integer(sn[i]));
			Return reItic = iiService.newSurveyItem(itc);
		}
		String sId = req.getParameter("sId");
		SurveyCategoryParam where = new SurveyCategoryParam();
		where.setSurveyId(sId);
		List<SurveyCategoryBo> list = icService.getSurveyCategorys(where);
		model.put("listInfo", list);
		model.put("type", type);
		model.put("sId", sId);
		return new ModelAndView("survey/inquiryItemSnInfo", model);
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
		itic.setSn(100);
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
				if (answer != null) {
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
	 * 打开指定部门对话框
	 */
	@RequestMapping(value = "surveyPersonList.html", method = RequestMethod.GET)
	public String getInquiryPersonList(@RequestParam String sId, HttpServletRequest request, ModelMap model) {
		model.put("sId", sId);
		SurveyParam sp = new SurveyParam();
		sp.setId(sId);
		SurveyBo sb = suService.getSurvey(sp);
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
	public String getInquiryPersonListInfo(HttpServletRequest request, ModelMap model) {
		String page_fn = request.getParameter("pagefn");
		page_fn = "page2";
		String status = request.getParameter("status");
		String sId = request.getParameter("sId");
		String flagU = request.getParameter("flagU");
		model.put("flagU", flagU);
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
		String flagU = request.getParameter("flagU");
		model.put("flagU", flagU);
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

	/***
	 * delete结果明细方法 评估设置中有删除大类，删除小题都会调用此方法，已删除结果明细 by LuChao
	 ***/
	private Return deleteSuveyReport(HttpServletRequest request) {
		String sId = request.getParameter("sId");
		SurveyCon surveyCon = new SurveyCon();
		surveyCon.setsId(sId);
		return surveyReportService.deleteCacheBySurveyId(surveyCon);
	}
	
	
	/**
	 * 查看结果明细中，某一个答案答题投票的具体人员
	 */
	@RequestMapping(value = "reportRes.html", method = RequestMethod.GET)
	public String queryReportUser(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		String sirId = req.getParameter("sirId");
		String page = req.getParameter("page");
		String max = req.getParameter("max");
		String pagefn = req.getParameter("pagefn");
		Collection<SurveyReplyBo> srBo = surveyReplyService.getSurveyReply(sirId, page, max);
		model.put("srBo", srBo);
		model.put("pagefn", pagefn);
		return "survey/survey_reportUser_list";
	}
	
	/**
	 * 跳转到查看结果明细中，某一个答案答题投票的具体人员
	 */
	@RequestMapping(value = "toReportRes.html", method = RequestMethod.GET)
	public String toReportRes(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		String sirId = req.getParameter("sirId");
		model.put("sirId", sirId);
		return "survey/survey_reportUser";
	}
}
