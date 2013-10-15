package com.telecom.lms.portal.admin.control.trainclass;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.annotation.Resource;
import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.basic.DiplomaBo;
import com.telecom.lms.core.bo.basic.DiplomaCon;
import com.telecom.lms.core.bo.basic.SysCodeBo;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.model.ExportInfoBo;
import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.core.bo.statistic.TrainClassStudentStatistic;
import com.telecom.lms.core.bo.survey.BehaviorBo;
import com.telecom.lms.core.bo.survey.BehaviorCon;
import com.telecom.lms.core.bo.survey.SurveyBo;
import com.telecom.lms.core.bo.survey.SurveyCon;
import com.telecom.lms.core.bo.survey.aim.SurveyAimCon;
import com.telecom.lms.core.bo.train.StudentEnrolInfoBo;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.core.bo.train.TrainClassCheckinBo;
import com.telecom.lms.core.bo.train.TrainClassCheckinCon;
import com.telecom.lms.core.bo.train.TrainClassCon;
import com.telecom.lms.core.bo.train.TrainClassDepartmentBo;
import com.telecom.lms.core.bo.train.TrainClassDepartmentCon;
import com.telecom.lms.core.bo.train.TrainClassDiplomaBo;
import com.telecom.lms.core.bo.train.TrainClassDiplomaCon;
import com.telecom.lms.core.bo.train.TrainClassFacilityBo;
import com.telecom.lms.core.bo.train.TrainClassFacilityCon;
import com.telecom.lms.core.bo.train.TrainClassForumCon;
import com.telecom.lms.core.bo.train.TrainClassImprovePlanBo;
import com.telecom.lms.core.bo.train.TrainClassStudentBo;
import com.telecom.lms.core.bo.train.TrainClassStudentCon;
import com.telecom.lms.core.bo.train.TrainClassTeacherBo;
import com.telecom.lms.core.bo.train.TrainResourceCon;
import com.telecom.lms.core.controller.basedata.OrganizationInfoController;
import com.telecom.lms.core.controller.trainclass.TrainClassInfoController;
import com.telecom.lms.core.model.basedata.OrganizationInfoSearchForm;
import com.telecom.lms.core.model.trainclass.TrainClassInfoSearchForm;
import com.telecom.lms.portal.admin.service.ConfigInfo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.portal.admin.util.StringTool;
import com.telecom.lms.sdk.plugin.model.exam.ExamArrange;
import com.telecom.lms.sdk.plugin.service.exam.ExamService;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.basic.DiplomaService;
import com.telecom.lms.sdk.service.basic.SysCodeService;
import com.telecom.lms.sdk.service.down.trainclass.DownLoadOutTrainInfoService;
import com.telecom.lms.sdk.service.down.trainclass.DownLoadTrainCheckinService;
import com.telecom.lms.sdk.service.down.trainclass.DownLoadTrainClassService;
import com.telecom.lms.sdk.service.down.trainclass.DownLoadTrainFaceManageService;
import com.telecom.lms.sdk.service.down.trainclass.DownLoadTrainInventoryService;
import com.telecom.lms.sdk.service.imp.notice.NoticeService;
import com.telecom.lms.sdk.service.survey.BehaviorService;
import com.telecom.lms.sdk.service.survey.SurveyAimService;
import com.telecom.lms.sdk.service.survey.SurveyReportService;
import com.telecom.lms.sdk.service.survey.SurveyService;
import com.telecom.lms.sdk.service.survey.param.SurveyParam;
import com.telecom.lms.sdk.service.train.StudentEnrolInfoService;
import com.telecom.lms.sdk.service.train.TrainClassCheckinService;
import com.telecom.lms.sdk.service.train.TrainClassDepartmentService;
import com.telecom.lms.sdk.service.train.TrainClassDiplomaService;
import com.telecom.lms.sdk.service.train.TrainClassFacilityService;
import com.telecom.lms.sdk.service.train.TrainClassForumService;
import com.telecom.lms.sdk.service.train.TrainClassImprovePlanService;
import com.telecom.lms.sdk.service.train.TrainClassService;
import com.telecom.lms.sdk.service.train.TrainClassStudentService;
import com.telecom.lms.sdk.service.train.TrainClassTeacherService;
import com.telecom.lms.sdk.service.train.TrainResourseService;
import com.telecom.lms.sdk.service.train.TrainTypeService;
import com.telecom.lms.sdk.service.train.param.TrainClassInfoParam;
import com.telecom.lms.sdk.util.DateInfoUtil;
import com.telecom.lms.sdk.util.DateTool;
import com.telecom.lms.sdk.util.FileInfoUtil;
import com.telecom.lms.sdk.util.OtherUtil;

@Controller
@RequestMapping("/trainclass")
public class TrainClassCtr {
	
	private static final Logger log = LoggerFactory.getLogger(TrainClassCtr.class);
	
	private @Value("#{lmsapi.filePath}")
	String uploadPath;
	@Autowired
	TrainClassService trainClassService;
	@Autowired
	TrainClassStudentService studentService;
	@Autowired
	TrainClassCheckinService checkinService;
	@Autowired
	TrainResourseService trainResourseService;
	@Autowired
	TrainClassDepartmentService trainclassDepService;
	@Autowired
	TrainTypeService tpService;
	@Autowired
	SurveyAimService aimService;
	@Autowired
	SurveyService surveyService;
	@Autowired
	BehaviorService beService;
	@Autowired
	TrainClassForumService forumService;
	@Autowired
	TrainClassCheckinService checkService;
	@Autowired
	TrainClassFacilityService faciService;
	@Autowired
	DiplomaService diService;
	@Autowired
	TrainClassDiplomaService tcDiService;
	@Autowired
	SysCodeService codeService;
	@Autowired
	OrganizationService orgService;
	@Autowired
	TrainClassImprovePlanService trainClassImprovePlanService;
	@Autowired
	TrainClassTeacherService teacherService;
	@Autowired
	ConfigInfo config;
	@Autowired
	SurveyReportService surveyReportService;
	@Autowired
	DownLoadTrainCheckinService downLoadTrainCheckinService;

	@Autowired
	UserInfoService usService;

	@Autowired
	DownLoadTrainFaceManageService downLoadTrainFaceManageService;

	@Autowired
	DownLoadOutTrainInfoService downLoadOutTrainInfoService;

	@Autowired
	DownLoadTrainInventoryService downLoadTrainInventoryService;

	@Autowired
	DownLoadTrainClassService downLoadTrainClassService;

	@Autowired
	StudentEnrolInfoService enrolService;

	@Autowired
	NoticeService noticeService;

	@Resource
	OrganizationInfoController organizationInfoController;

	@Resource
	TrainClassInfoController trainClassInfoController;

	@Autowired
	ExamService eSrv;

	private @Value("#{export.trainClass_exportLimit}")
	Integer limit;

	private @Value("#{export.trainClass_exportMax}")
	Integer max;

	@RequestMapping(value = "exportCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportCount(HttpServletRequest request, HttpServletResponse response) {

		TrainClassInfoSearchForm form = this.queryExport(request);

		int count = trainClassInfoController.searchCountGeneral(form);

		log.debug("export count is : {} ", count);
		ExportInfoBo exportInfoBo = new ExportInfoBo();
		exportInfoBo.setCount(count);
		if (count > max) {
			exportInfoBo.setFlag("confirm");
		}
		return exportInfoBo;
	}

	@RequestMapping(value = "exportList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportList(HttpServletRequest request, HttpServletResponse response) {

		TrainClassInfoSearchForm form = this.queryExport(request);
		form.setMax(limit);

		int count = Integer.parseInt(request.getParameter("count"));

		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = FileInfoUtil.getFileInfo(address, "generalTrainClass");

		for (int i = 0; i <= count / limit; i++) {
			form.setPage(i * limit);
			List<TrainClassBo> trainClassBos = trainClassInfoController.searchGeneralList(form);
			downLoadTrainClassService.exportGeneralResult(fileInfo, i * limit, trainClassBos);
		}
		return fileInfo.getName();
	}

	public TrainClassInfoSearchForm queryExport(HttpServletRequest request) {

		String orgId = request.getParameter("orgid");
		String isSub = request.getParameter("isSub");
		
		TrainClassInfoSearchForm form = new TrainClassInfoSearchForm();
		form.setName(request.getParameter("name"));
		form.setWay(request.getParameter("way"));
		form.setLevel_id(request.getParameter("level"));
		form.setPrincipal(request.getParameter("principal"));
		
		if (StringUtils.isNotBlank(orgId) && !"undefined".equals(orgId)) {
			queryOrgExport(orgId, isSub, form);
		}
		
		
		String hasResponse = request.getParameter("hasResponse");
		if (StringUtils.isNotBlank(hasResponse)) {
			form.setHasResponse(Integer.parseInt(hasResponse));
		}
		String hasBehavior = request.getParameter("hasBehavior");
		if (StringUtils.isNotBlank(hasBehavior)) {
			form.setHasBehavior(Integer.parseInt(hasBehavior));
		}

		String start_date = request.getParameter("start_date");
		if (StringUtils.isBlank(start_date)) {
			form.setStart_date(DateInfoUtil.getYearStartDate());
		} else {
			form.setStart_date(start_date);
		}

		String end_date = request.getParameter("end_date");
		if (StringUtils.isBlank(end_date)) {
			form.setEnd_date(DateInfoUtil.getYearEndDate());
		} else {
			form.setEnd_date(end_date);
		}
		String status = request.getParameter("status");
		if (StringUtils.isNotBlank(status)) {
			form.setStatus(Integer.parseInt(status));
		}
		String type = request.getParameter("type");
		if (StringUtils.isNotBlank(type)) {
			form.setType(Integer.parseInt(type));
		} else {
			form.setIsPlan(1);
		}
		return form;
	}

	private void queryOrgExport(String orgId, String isChildOrg, TrainClassInfoSearchForm form) {

		if (StringUtils.isBlank(isChildOrg) || "1".equals(isChildOrg)) {
			OrganizationInfoSearchForm organizationInfoSearchForm = new OrganizationInfoSearchForm();
			organizationInfoSearchForm.setId(orgId);
			OrganizationBo organizationBo = organizationInfoController.get(organizationInfoSearchForm);
			form.setLeftPriority(organizationBo.getLeftPriority());
			form.setRightPriority(organizationBo.getRightPriority());
		} else {
			form.setOrgId(orgId);
		}
	}

	/**
	 * 培训班首页
	 */
	@RequestMapping(value = "index.html", method = RequestMethod.GET)
	public String inquiryClass(ModelMap model) {
		List<SysParamBo> wayList = tpService.getTrainWay();// getList("way");
		List<SysParamBo> levelList = tpService.getTrainLevel();// getList("level");
		model.put("wayList", wayList);
		model.put("levelList", levelList);
		return "train/index";
	}

	/**
	 * 批量删除培训班
	 */
	@RequestMapping(value = "delete.html", method = RequestMethod.POST)
	@ResponseBody
	public Return deleteClassByItems(HttpServletRequest req, HttpServletResponse res, @RequestParam("cid") String[] ids) {
		Return re = trainClassService.removeTrainClassAll(ids);
		return re;
	}

	/**
	 * 跳转到培训班基本信息页面 请求参数 tcid(可选)
	 */
	@RequestMapping(value = "information.html", method = RequestMethod.GET)
	public String toInformation(@RequestParam(required = false) String tcid, HttpServletRequest request, ModelMap model) {

		// 获得参数列表
		List<SysParamBo> wayList = tpService.getTrainWay();// getList("way");
		List<SysParamBo> trainTypeList = tpService.getTrainObjectType();
		List<SysParamBo> levelList = tpService.getTrainLevel();// getList("level");
		List<SysParamBo> trainObjectTypeList = tpService.getTrainObjectType();// getList("objectType");
		List<SysParamBo> addressTypeList = tpService.getTrainAddressType();// getList("addressType");
		List<SysParamBo> trainContentTypeList = tpService.getTrainContentType();// getList("contentType");
		List<SysParamBo> chargeWayList = tpService.getTrainChargeWay();// getList("chargeWay");
		model.put("wayList", wayList);
		model.put("trainTypeList", trainTypeList);
		model.put("levelList", levelList);
		model.put("trainObjectTypeList", trainObjectTypeList);
		model.put("addressTypeList", addressTypeList);
		model.put("trainContentTypeList", trainContentTypeList);
		model.put("chargeWayList", chargeWayList);

		// tcid为空是新建，不为空为修改
		if (tcid != null) {
			String loadRelate = request.getParameter("loadRelate");

			TrainClassBo trainClass = trainClassService.getTrainClass(tcid);
			if (StringUtils.isNotBlank(loadRelate)) {
				trainClass.setTcId(null);
				trainClass.setRelatedTcId(tcid);
			}
			if (StringUtils.isNotBlank(trainClass.getRelatedTcId())) {
				TrainClassBo relateClass = trainClassService.getTrainClass(trainClass.getRelatedTcId());
				model.put("relateClass", relateClass);
			}
			HashMap<String, String> con = new HashMap<String, String>();
			con.put("train_class_id", tcid);
			con.put("type", "2");
			List<TrainClassTeacherBo> principleList = teacherService.getTrainClassTeacherList(con);
			model.put("principleList", principleList);
			con.put("type", "1");
			List<TrainClassTeacherBo> teacherList = teacherService.getTrainClassTeacherList(con);
			model.put("teacherList", teacherList);
			model.put("trainClass", trainClass);

			model.put("tcid", tcid);
		} else {
			String orgid = request.getParameter("orgid");
			TrainClassBo trainClass = new TrainClassBo();
			if (StringUtils.isNotBlank(orgid)) {
				OrganizationBo dep = orgService.getOrganization(orgid);
				trainClass.setDep(dep);
			}
			model.put("trainClass", trainClass);
		}
		return "train/information";
	}

	/**
	 * 选择计划中的培训班对话框
	 */
	@RequestMapping(value = "dialog/planedclass.html", method = RequestMethod.GET)
	public String getTrainPlanList(HttpServletRequest request, ModelMap model) {
		return "dialog/trainclass/planedClassDialog";
	}

	/**
	 * 选择分期的培训班
	 */
	@RequestMapping(value = "dialog/relatedclass.html", method = RequestMethod.GET)
	public String getRelatedClass(HttpServletRequest request, ModelMap model) {
		return "dialog/trainclass/relatedClassDialog";
	}

	/**
	 * 选择机构下培训班
	 */
	@RequestMapping(value = "dialog/orgclass.html", method = RequestMethod.GET)
	public String getOrgClass(HttpServletRequest request, ModelMap model) {
		return "dialog/trainclass/orgClassDialog";
	}

	/**
	 * 保存培训班基本信息 如果培训班状态为实施或者完成，则跳回基本信息页面
	 */
	@RequestMapping(value = "doSaveClass.html", method = RequestMethod.POST)
	public String saveInformation(TrainClassCon con, HttpServletRequest request, ModelMap model) {
		if (StringUtils.isBlank(con.getTcId())) {
			// 新建培训班
			UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
			String gsn = this.generateSn(user.getType(), con.getClass_dep());
			con.setSn(isTraincode(gsn + "-"));
			con.setStatus(1);
			con.setType(0);
			con.setCreate_date(DateTool.getNowShort());
			con.setCreater_id(user.getUid());
			if (StringUtils.isBlank(con.getRelatedTcId())) {
				con.setRelatedTcId("1");
			}
		}
		String[] principals = request.getParameterValues("principal");
		String[] principal_names = request.getParameterValues("principal_name");
		String[] trainers = request.getParameterValues("trainer");
		String[] trainer_names = request.getParameterValues("trainer_name");
		String[] apply_deps = request.getParameterValues("apply_dep");
		String[] apply_dep_names = request.getParameterValues("apply_dep_name");
		if (null != principals && principals.length > 0) {
			con.setClass_principal(StringTool.getString(principals, StringTool.SPLIT_COMMA));
			con.setClass_principal_name(StringTool.getString(principal_names, StringTool.SPLIT_COMMA));
		}
		if (null != trainers && trainers.length > 0) {
			con.setClass_trainer(StringTool.getString(trainers, StringTool.SPLIT_COMMA));
			con.setClass_trainer_name(StringTool.getString(trainer_names, StringTool.SPLIT_COMMA));
		}
		if (null != apply_deps && apply_deps.length > 0) {
			con.setApply_dep(StringTool.getString(apply_deps, StringTool.SPLIT_COMMA));
			con.setApply_dep_name(StringTool.getString(apply_dep_names, StringTool.SPLIT_COMMA));
		}

		Return re = trainClassService.saveAndUpdateTrainClass(con);
		System.out.println(re.toString());
		if (StringUtils.isBlank(con.getTcId())) {
			con.setTcId(re.getCode());
		}
		return "redirect:course.html?tcid=" + con.getTcId();
	}

	/**
	 * 培训班编号生成器(附带SN重复验证)
	 * 
	 * @return
	 */
	private String isTraincode(String gsn) {
		DecimalFormat df = new DecimalFormat("0000");
		String cwCode = gsn;
		SysCodeBo sysCodeBo = codeService.getSysCodeTrainClass();
		String j = df.format(Integer.parseInt(sysCodeBo.getMaxSerial().toString())); //lms.syscode.get方法中已实现自增加一的操作.
		cwCode = cwCode + j;

		TrainClassInfoParam t = new TrainClassInfoParam();

		t.setSn(cwCode);
		Integer count = trainClassService.count(t);

		if (count != null && count > 0) {
			cwCode = isTraincode(gsn);
		}
		return cwCode;
	}

	private String generateSn(Integer userType, String orgid) {
		OrganizationBo applyOrg = orgService.getOrganization(orgid);

		String[] idpath = applyOrg.getIdPath().split("/");
		int typeStatru = 0;
		String sname = "";
		for (int i = 0; i < idpath.length; i++) {
			if (idpath[i].equals("9002")) {
				if (i == idpath.length - 1) {
					typeStatru = 1;
				} else {
					if (orgService.getOrganization(idpath[i + 1]).getType() == 1) {
						typeStatru = 1;
					} else {
						if ((i + 1) == idpath.length - 1) {
							typeStatru = 2;
						} else {
							if (orgService.getOrganization(idpath[i + 2]).getType() == 1) {
								applyOrg.setShortName(orgService.getOrganization(idpath[i + 1]).getShortName());
								typeStatru = 2;
							} else {
								applyOrg.setShortName(orgService.getOrganization(idpath[i + 1]).getShortName());
								sname = orgService.getOrganization(idpath[i + 2]).getShortName();
								typeStatru = 3;
							}
						}
					}
				}
			}
		}

		StringBuffer sn = new StringBuffer();
		if (typeStatru == 1) {
			//集团
			sn.append("JT");
		} else if (typeStatru == 2) {
			//省
			if (StringUtils.isNotBlank(applyOrg.getShortName())) {
				sn.append(applyOrg.getShortName());
			} else {
				sn.append("AA");
			}
		} else if (typeStatru == 3) {

			//省
			if (StringUtils.isNotBlank(applyOrg.getShortName())) {
				sn.append(applyOrg.getShortName());
			} else {
				sn.append("AA");
			}

			sn.append("-");
			//市
			//OrganizationBo org = orgService.getOrganization(applyOrg.getUpId());

			if (sname != null) {
				sn.append(StringUtils.isNotBlank(sname) ? sname : "BB");
			} else {
				sn.append("BB");
			}

			//sn.append("-");
			//sn.append(StringUtils.isNotBlank(applyOrg.getShortName())?applyOrg.getShortName():"CC");
		}
		sn.append("-");
		sn.append(DateTool.getShortDate());
		return sn.toString();
	}

	@RequestMapping("checkName.html")
	@ResponseBody
	public Long checkName(HttpServletRequest request) {
		String name = request.getParameter("name");
		String tcid = request.getParameter("tcid");
		return trainClassService.checkName(name, tcid, "normal");
	}

	/**
	 * 跳转课程设置页面 设置显示的标签 tab 请求参数 tcid
	 */
	@RequestMapping(value = "course.html", method = RequestMethod.GET)
	public String toCourseSetting(HttpServletRequest request, ModelMap model) {
		String tag = "online";
		if (null != request.getParameter("tag")) {
			tag = request.getParameter("tag");
		}
		String tcid = request.getParameter("tcid");
		TrainClassBo tc = trainClassService.getTrainClass(tcid);
		model.put("tc", tc);
		if (tcid == null || tcid.equals("")) {
			return "redirect:information.html";
		} else {
			model.put("tcid", tcid);
			model.put("trainClass", tc);
			model.put("tag", tag);
			return "train/course";
		}
	}

	@RequestMapping(value = "addExam.html")
	public void addExam(HttpServletRequest req) {
		String tcId = req.getParameter("tcId");
		if (tcId != null) {
			TrainClassCon tcb = new TrainClassCon();
			tcb.setTcId(tcId);
			//			tcb.set
			trainClassService.saveAndUpdateTrainClass(tcb);
		}
	}

	/**
	 * 向培训班中添加课程和文档
	 */
	@RequestMapping(value = "setCourse.html", params = "method=add", method = RequestMethod.POST)
	@ResponseBody
	public Return addCourse(HttpServletRequest req, ModelMap model) {
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		Return re = new Return();
		TrainResourceCon tr = new TrainResourceCon();
		tr.setCreateDt(new Date());
		tr.setOperator_id(user.getUid());
		String res = req.getParameter("res");
		if (res.equals("online")) {
			String tcid = req.getParameter("tcid");
			String[] ids = req.getParameterValues("id");
			for (String id : ids) {
				tr.settClass_id(tcid);
				tr.setResCw_id(id);
				re = trainResourseService.saveAndUpdateTrainResourceCourseware(tr);
			}
		}
		if (res.equals("doc")) {
			String tcid = req.getParameter("tcid");
			String[] ids = req.getParameterValues("id");
			for (String id : ids) {
				tr.settClass_id(tcid);
				tr.setResDoc_id(id);
				re = trainResourseService.saveAndUpdateTrainResourceDoc(tr);
			}
		}
		if (res.equals("face")) {
			re = trainResourseService.saveAndUpdateTrainResourceFaceCourse(tr);
		}

		return re;
	}

	/**
	 * 移除培训班中的课程和文档
	 */
	@RequestMapping(value = "setCourse.html", params = "method=remove", method = RequestMethod.POST)
	@ResponseBody
	public Return removeCourse(HttpServletRequest req, ModelMap model) {
		Return re = new Return();
		String ids = req.getParameter("trids");
		re = trainResourseService.removeTrainResources(ids);
		return re;
	}

	/**
	 * 跳转人员设置页面
	 */
	@RequestMapping(value = "staffing.html", method = RequestMethod.GET)
	public ModelAndView toStaffing(@RequestParam String tcid, HttpServletRequest req, ModelMap model) {
		TrainClassBo tc = trainClassService.getTrainClass(tcid);
		model.put("tc", tc);
		model.put("tcid", tcid);
		return new ModelAndView("train/staffing", model);
	}

	/**
	 * 通过AJAX获得已参加人员的数量 此方法专为修改培训班时候 修改人数不能小于已参加人数 by LuChao
	 */
	@RequestMapping(value = "getNumAll.html", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Long> getNumAll(@RequestParam String tcid) {
		Map<String, Long> map = new HashMap<String, Long>();

		// 所有参加人员
		HashMap<String, String> con = new HashMap<String, String>();
		con = new HashMap<String, String>();
		con.put("train_class_id", tcid);
		con.put("exam_status", "1");
		Collection<TrainClassStudentBo> list = studentService.getTrainClassStudents(con, null, null);
		map.put("all", list != null ? list.getPage().getRecords() : 0);

		return map;
	}

	/**
	 * 通过AJAX获得人员的数量
	 */
	@RequestMapping(value = "getStudentNum.html", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Long> getStudentNum(@RequestParam String tcid) {
		Map<String, Long> map = new HashMap<String, Long>();

		// 培训班总人数
		TrainClassBo tc = trainClassService.getTrainClass(tcid);
		map.put("classnum", (long) tc.getAttendNum());

		// 所有参加人员
		HashMap<String, String> con = new HashMap<String, String>();
		con = new HashMap<String, String>();
		con.put("train_class_id", tcid);
		con.put("exam_status", "1");
		Collection<TrainClassStudentBo> list = studentService.getTrainClassStudents(con, null, null);
		map.put("all", list != null ? list.getPage().getRecords() : 0);

		// 直接指定
		con = new HashMap<String, String>();
		con.put("train_class_id", tcid);
		con.put("applyWay", "1");
		con.put("exam_status", "1");
		list = studentService.getTrainClassStudents(con, null, null);
		map.put("direct", list != null ? list.getPage().getRecords() : 0);

		// 名额指派
		con = new HashMap<String, String>();
		con.put("train_class_id", tcid);
		con.put("applyWay", "3");
		con.put("exam_status", "1");
		list = studentService.getTrainClassStudents(con, null, null);
		map.put("depnum", list != null ? list.getPage().getRecords() : 0);

		// 指定部门
		con = new HashMap<String, String>();
		con.put("train_class_id", tcid);
		con.put("applyWay", "2");
		con.put("exam_status", "1");
		list = studentService.getTrainClassStudents(con, null, null);
		map.put("dep", list != null ? list.getPage().getRecords() : 0);

		// 通过审批
		con.put("train_class_id", tcid);
		con.put("applyWay", "0");
		con.put("exam_status", "1");
		list = studentService.getTrainClassStudents(con, null, null);
		map.put("approved", list != null ? list.getPage().getRecords() : 0);

		// 待审核
		con = new HashMap<String, String>();
		con.put("train_class_id", tcid);
		con.put("applyWay", "0");
		con.put("exam_status", "0");
		list = studentService.getTrainClassStudents(con, null, null);
		map.put("approving", list != null ? list.getPage().getRecords() : 0);

		return map;
	}

	/**
	 * 通过AJAX设置报名的学员 包含批准type=approve、拒绝type=reject、删除操作type=delete,
	 */
	@RequestMapping(value = "setStudent.html", method = RequestMethod.POST)
	@ResponseBody
	public Return setStudent(HttpServletRequest req, ModelMap model) {
		Return re = null;
		String[] ids = req.getParameterValues("id");
		String type = req.getParameter("type");
		String tcid = req.getParameter("tcid");
		TrainClassStudentCon student = new TrainClassStudentCon();
		if ("approve".equals(type)) {
			TrainClassBo tc = trainClassService.getTrainClass(tcid);
			Map<String, String> con = new HashMap<String, String>();
			con.put("tc_id", tcid);
			TrainClassStudentStatistic sta = studentService.getTrainClassStudentnum(con);
			/** 查询已有学员数量 **/
			long totalNum = sta.getNum1() + sta.getNum2();
			if (tc != null && tc.getAttendNum() - totalNum < ids.length) {
				return new Return("checknum", "人数超限");
			}

			for (int i = 0; i < ids.length; i++) {
				student.setTcsId(ids[i]);
				student.setExamStatus(1);
				re = studentService.saveAndUpdateTrainClassStudent(student);
			}
		} else if ("reject".equals(type)) {
			for (int i = 0; i < ids.length; i++) {
				student.setTcsId(ids[i]);
				student.setExamStatus(2);
				re = studentService.saveAndUpdateTrainClassStudent(student);
			}
		} else if ("delete".equals(type)) {
			re = studentService.removeTrainClassStudent(ids);
		}
		return re;
	}

	@RequestMapping(value = "exportTrainClass.html", method = RequestMethod.GET)
	@ResponseBody
	public void exportTrainClass(HttpServletRequest request, HttpServletResponse response) {

		String plan_id = request.getParameter("plan_id");
		Map<String, String> con = new HashMap<String, String>();
		con.put("plan_id", plan_id);
		List<TrainClassBo> trainClassBos = trainClassService.exportTrainClass(con);
		downLoadTrainClassService.downTrainClassResult(response, trainClassBos);
	}

	/**
	 * 添加培训班中的学员
	 */
	@RequestMapping(value = "addstudent.html", method = RequestMethod.POST)
	@ResponseBody
	public Return addStudent(HttpServletRequest request) {
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		String tcid = request.getParameter("pid");
		// 默认直接指定
		String applyWay = request.getParameter("applyWay") == null ? "1" : request.getParameter("applyWay");
		String tcdid = request.getParameter("tcdid"); // 部门名额指派中，培训班部门id
		String[] ids = request.getParameterValues("id");
		String[] names = request.getParameterValues("name");
		long num = ids.length;
		Return re = new Return();

		/** 查询已有学员数量 **/
		TrainClassBo tc = trainClassService.getTrainClass(tcid);
		// 如果是外派培训班不做人数校验
		if (tc.getType() != 1) {
			if ("3".equals(applyWay)) {
				TrainClassDepartmentBo dep = trainclassDepService.getTrainClassDepartment(tcdid);
				Map<String, String> con = new HashMap<String, String>();
				con.put("tc_id", tcid);
				con.put("org_id", dep.getDep().getOrgId());
				TrainClassStudentStatistic sta = studentService.getTrainClassStudentnum(con);
				if (dep.getNum() == null || dep.getNum() - sta.getNum3() <= 0 || dep.getNum() - sta.getNum3() < num) {
					re.setCode("checknum");
					re.setContent("人数超限");
					return re;
				}
			} else {
				Map<String, String> con = new HashMap<String, String>();
				con.put("tc_id", tcid);
				TrainClassStudentStatistic sta = studentService.getTrainClassStudentnum(con);
				/** 查询已有学员数量 **/

				long totalNum = sta.getNum1() + sta.getNum2();
				if ((tc.getAttendNum() - totalNum <= 0) || tc.getAttendNum() - totalNum < num) {
					re.setCode("checknum");
					re.setContent("人数超限");
					return re;
				}
			}
		}

		for (int i = 0; i < ids.length; i++) {
			TrainClassStudentCon student = new TrainClassStudentCon();
			student.setClass_tc(tcid);
			student.setClass_student(ids[i]);
			student.setClass_student_name(names[i]);
			student.setApplyWay(Integer.parseInt(applyWay));
			student.setExamStatus(1);
			student.setIsExam(0);
			student.setClass_examiner(user.getUid());
			student.setTrain_student_applyTm(DateTool.getNowShort());
			student.setTrain_student_examTm(DateTool.getNowShort());
			student.setStatus("1");
			student.setHasImprove(false);
			re = studentService.saveAndUpdateTrainClassStudent(student);
		}
		return re;
	}

	/**
	 * 通过AJAX设置部门 operation: save为保存 delete为删除；status: dep为指定部门，num为指定部门人数;
	 */
	@RequestMapping(value = "setDepartment.html", method = RequestMethod.POST)
	@ResponseBody
	public Return setDepartment(HttpServletRequest req, ModelMap model) {
		String tcid = req.getParameter("tcid");
		String[] ids = req.getParameterValues("id");
		String[] nums = req.getParameterValues("num");
		String operation = req.getParameter("operation");
		String status = req.getParameter("status");
		Return re = new Return();
		if ("save".equals(operation)) {
			for (int i = 0; i < ids.length; i++) {
				/** 查询已有学员数量 **/
				TrainClassBo tc = trainClassService.getTrainClass(tcid);
				Map<String, String> con = new HashMap<String, String>();
				con.put("tc_id", tcid);
				if ("dep".equals(status)) {
					con.put("org_id", ids[i]);
				}
				con.put("is_pub", "0");
				TrainClassStudentStatistic sta = studentService.getTrainClassStudentnum(con);

				TrainClassDepartmentCon dep = new TrainClassDepartmentCon();
				dep.setTc_id(tcid);
				dep.setDep_id(ids[i]);
				if ("dep".equals(status)) {
					/** 校验学员数量 **/
					long num = sta.getNum4();
					long totalNum = sta.getNum1() + sta.getNum2();
					if ((tc.getAttendNum() - totalNum <= 0) || tc.getAttendNum() - totalNum < num) {
						re.setCode("checknum");
						re.setContent("人数超限");
						break;
					}

					dep.setIsSub(0);
					dep.setStatus(0);
				}
				if ("num".equals(status)) {
					/** 校验学员数量 **/
					long num = Integer.parseInt(nums[i]);
					long totalNum = sta.getNum1() + sta.getNum2();
					if ((tc.getAttendNum() - totalNum <= 0) || tc.getAttendNum() - totalNum < num) {
						re.setCode("checknum");
						re.setContent("人数超限");
						return re;
					}

					dep.setIsSub(1);
					dep.setNum(Integer.parseInt(nums[i]));
					dep.setStatus(1);
				}
				re = trainclassDepService.saveAndUpdateTrainClassDepartment(dep);

				//生成待办事项
				if (dep.getStatus() == 1) {
					noticeService.noticeClassDep(dep.getTc_id(), dep.getDep_id(), dep.getNum());
				}
			}
		} else if ("delete".equals(operation)) {
			for (String id : ids) {
				trainclassDepService.removeTrainClassDepartment(id);
			}
		} else if ("update".equals(operation)) {
			int isSub = Integer.parseInt(req.getParameter("isSub"));
			for (String id : ids) {
				//设为包含子部门，做人数校验
				if (isSub == 1) {
					//查询子部门人数
					TrainClassDepartmentBo tcd = trainclassDepService.getTrainClassDepartment(id);
					long childNum = usService.getChildOrgNum(tcd.getDep().getOrgId());
					//查询已分配总人数和培训班人数限制
					TrainClassBo tc = trainClassService.getTrainClass(tcid);
					Map<String, String> con = new HashMap<String, String>();
					con.put("tc_id", tcid);
					con.put("is_pub", "1");
					TrainClassStudentStatistic sta = studentService.getTrainClassStudentnum(con);
					long totalNum = sta.getNum1() + sta.getNum2();
					//如果人数不足则返回错误
					if (tc.getAttendNum() - totalNum < childNum) {
						re.setCode("checknum");
						re.setContent("人数超限");
						return re;
					}
				}

				TrainClassDepartmentCon dep = new TrainClassDepartmentCon();
				dep.setTcdId(id);
				dep.setIsSub(isSub);
				trainclassDepService.saveAndUpdateTrainClassDepartment(dep);
			}
		}
		return re;
	}

	/**
	 * 通过AJAX设置部门指定的人员
	 */
	@RequestMapping(value = "assigndepperson.html", method = RequestMethod.POST)
	@ResponseBody
	public Return setDepartmentPerson(HttpServletRequest request) {
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		String pid = request.getParameter("");
		String[] ids = request.getParameterValues("id");
		for (String id : ids) {
			TrainClassStudentCon s = new TrainClassStudentCon();
			s.setApplyWay(3);
			s.setClass_tc(pid);
			s.setClass_student(id);
			s.setExamStatus(1);
			s.setIsExam(0);
			s.setClass_examiner(user.getUid());
			s.setTrain_student_applyTm(DateTool.getNowShort());
			s.setTrain_student_examTm(DateTool.getNowShort());
			studentService.saveAndUpdateTrainClassStudent(s);
		}
		return null;
	}

	/**
	 * 跳转同步课堂页面
	 */
	@RequestMapping("videoclass.html")
	public String toVideoClass(HttpServletRequest req, ModelMap model) {
		String tcid = req.getParameter("tcid");
		TrainClassBo tc = trainClassService.getTrainClass(tcid);
		model.put("tc", tc);
		model.put("tcid", tcid);
		return "train/videoclass";
	}

	/**
	 * 打开同步课堂人员选择列表
	 */
	@RequestMapping("dialog/videouser.html")
	public String videoUserDialog(HttpServletRequest request, ModelMap model) {
		String vid = request.getParameter("vid");
		model.put("vid", vid);
		return "dialog/trainclass/video_person";
	}

	/**
	 * 跳转到考试页面
	 */
	@RequestMapping("examination.html")
	public String toExamination(HttpServletRequest request, ModelMap model) {
		String tcid = request.getParameter("tcid");
		TrainClassBo tc = trainClassService.getTrainClass(tcid);
		model.put("tc", tc);
		model.put("tcid", tcid);
		model.put("examURL", config.getExaminationURL());
		return "train/examination";
	}

	/**
	 * 跳转培训评估
	 */
	@RequestMapping("estimate.html")
	public String toEstimate(HttpServletRequest request, ModelMap model) {
		String tag = request.getParameter("tag");
		String tcid = request.getParameter("tcid");
		TrainClassBo tc = trainClassService.getTrainClass(tcid);
		model.put("tc", tc);
		model.put("tcid", tcid);
		model.put("tag", tag);
		return "train/estimate";
	}

	/**
	 * 删除培训班中的评估
	 */
	@RequestMapping(value = "estimate/delete.html", method = RequestMethod.POST)
	@ResponseBody
	public Return deleteSurvey(HttpServletRequest request, ModelMap model) {
		String[] ids = request.getParameterValues("id");
		SurveyParam p = new SurveyParam();
		p.setId(StringTool.getString(ids, StringTool.SPLIT_COMMA));
		SurveyCon sc = new SurveyCon();
		sc.setsId(p.getId());
		surveyReportService.deleteCacheBySurveyId(sc);
		Return re = surveyService.removeSurveys(p);
		return re;
	}

	/**
	 * 评估新建和人员设置
	 */
	@RequestMapping("response/new.html")
	public String newResponse(HttpServletRequest request, ModelMap model) {
		//LMSWD-1401 by LTC 20130510
		String symbol = request.getParameter("symbol"); //symbol:1-已发布 2-未发布有人参与 3-未发布无人参与 
		if (null != symbol && symbol != "") {
			model.put("symbol", symbol);
		}
		String tcid = request.getParameter("tcid");
		String sid = request.getParameter("sid");
		TrainClassBo tc = trainClassService.getTrainClass(tcid);
		model.put("tc", tc);
		if (!StringUtils.isBlank(sid)) {
			SurveyParam p = new SurveyParam();
			p.setId(sid);
			SurveyBo su = surveyService.getSurvey(p);
			model.put("su", su);
		}
		return "train/response_new";
	}

	/**
	 * 评估名称重复
	 * 
	 * @param req
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "response/errorPage.html", method = RequestMethod.GET)
	public ModelAndView errorForTemplate(HttpServletRequest req, ModelMap model) {
		String tcid = req.getParameter("tcid");
		String sid = req.getParameter("sid");
		String symbol = req.getParameter("symbol");
		model.put("tcid", tcid);
		model.put("sid", sid);
		model.put("symbol", symbol);
		return new ModelAndView("train/errorPage", model);
	}

	@RequestMapping(value = "response/save.html", method = RequestMethod.POST)
	public String saveResponse(SurveyCon su, HttpServletRequest request, ModelMap model) {
		String tcid = request.getParameter("tcid");
		String sid = request.getParameter("sId");
		String symbol = request.getParameter("symbol");
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		su.setCreate_date(DateTool.getNowShort());
		su.setCreater_id(user.getUid());
		su.setIsGenerateExam(0);
		su.setStatus(1);
		String nameJudge = su.getTopic();
		su.setTopic(nameJudge);
		su.setsId(sid);
		/**** 此培训班ID作为upId是区分是否是在培训内新建的评估|LMSWD-3469|by LuChao ****/
		su.setUpId(su.getUpId());

		Return repeat = surveyService.getVildateName(su);
		if (repeat.getCode().equals("0")) {
			Return re = surveyService.newSurvey(su);
			TrainClassBo tc = trainClassService.getTrainClass(tcid);
			if (re.getCode() != null && tcid != null) {
				SurveyAimCon cla = new SurveyAimCon();
				cla.setSurvey_id(re.getCode());
				cla.setObjectId(tcid);
				cla.setObjectName(tc.getName());
				cla.setObjectSn(tc.getSn());
				cla.setType(1);//
				aimService.save(cla);
				return "redirect:setting.html?sid=" + re.getCode() + "&tcid=" + tcid + "&symbol=" + symbol + "&upId="
						+ su.getUpId();
			} else {
				return "redirect:train/response/new.html?tcid=" + tcid + "&symbol=" + symbol;
			}
		} else {
			return "redirect:errorPage.html?tcid=" + tcid + "&sid=" + sid + "&symbol=" + symbol;
		}
	}

	@RequestMapping("response/setting.html")
	public String settingResponse(HttpServletRequest request, ModelMap model) {
		String sid = request.getParameter("sid");
		String tcid = request.getParameter("tcid");
		String symbol = request.getParameter("symbol");
		model.put("sid", sid);
		model.put("tcid", tcid);
		model.put("symbol", symbol);

		//LMSWD-3469
		String upId = request.getParameter("upId");
		model.put("upId", upId);

		return "train/response_setting";
	}

	// 新建行为层评估
	@RequestMapping("behavior/new.html")
	public String newBehavior(HttpServletRequest request, ModelMap model) {
		//LMSWD-1401 by LTC 20130510
		String symbol = request.getParameter("symbol"); //symbol:1-已发布 2-未发布有人参与 3-未发布无人参与 
		if (null != symbol && symbol != "") {
			model.put("symbol", symbol);
		}
		String tcid = request.getParameter("tcid");
		String sid = request.getParameter("sid");
		TrainClassBo tc = trainClassService.getTrainClass(tcid);
		model.put("tc", tc);
		if (!StringUtils.isBlank(sid)) {
			SurveyParam p = new SurveyParam();
			p.setId(sid);
			BehaviorBo b = beService.getBehavior(p);
			model.put("b", b);
		}
		return "train/behavior_new";
	}

	@RequestMapping(value = "behavior/save.html", method = RequestMethod.POST)
	public String saveBehavior(BehaviorCon b, HttpServletRequest request, ModelMap model) {
		String tcid = request.getParameter("tcid");
		String symbol = request.getParameter("symbol");//LuChao add
		this.setTp(b, request);
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		if ("3".equals(symbol)) //LuChao add
		{
			b.setStatus(1);
		}
		b.setCreater_id(user.getUid());
		b.setTrainClassId(tcid);
		b.setCreate_date(DateTool.getNowShort());
		/**** 此培训班ID作为upId是区分是否是在培训内新建的评估|LMSWD-3469|by LuChao ****/
		b.setUpId(b.getUpId());

		Return re = beService.newBehavior(b);
		if (re.getCode() != null && tcid != null) {
			SurveyAimCon cla = new SurveyAimCon();
			cla.setObjectId(tcid);
			cla.setSurvey_id(re.getCode());
			aimService.saveLpi(cla);

			return "redirect:setting.html?sid=" + re.getCode() + "&tcid=" + tcid + "&upId=" + b.getUpId();
		} else {
			return "redirect:behavior/new.html?tcid=" + tcid;
		}
	}

	@RequestMapping("behavior/setting.html")
	public String settingBehavior(HttpServletRequest request, ModelMap model) {
		String sid = request.getParameter("sid");
		String tcid = request.getParameter("tcid");
		SurveyParam where = new SurveyParam();
		where.setId(sid);
		SurveyBo bo = surveyService.getSurvey(where);
		model.put("survey", bo);
		model.put("sid", sid);
		model.put("tcid", tcid);

		//LMSWD-3469
		String upId = request.getParameter("upId");
		model.put("upId", upId);

		return "train/behavior_setting";
	}

	/**
	 * 查看上级培训班
	 */
	@RequestMapping("uptrainclass/list.html")
	public String toBossTrainClassList() {

		return "train/uptrainclass_list";
	}

	/**
	 * 分配上级指定的部门名额对话框
	 */
	@RequestMapping(value = "uptrainclass/shownumdialog.html")
	public String toAssignPersonDialog(HttpServletRequest request, ModelMap model) {
		String tdid = request.getParameter("tcdid");
		TrainClassDepartmentBo dep = trainclassDepService.getTrainClassDepartment(tdid);
		model.put("dep", dep);
		return "dialog/trainclass/setstudent";
	}

	/**
	 * 负责人培训班信息
	 */
	@RequestMapping("leadertrainclass/list.html")
	public String toLeaderTrainClassList(ModelMap model) {
		String title = "负责人培训班";
		model.put("title", title);
		return "train/leadertrainclass_list";
	}

	/**
	 * 教师的培训班信息
	 */
	@RequestMapping("teachertrainclass/list.html")
	public String toTeacherTrainClassList(ModelMap model) {
		String title = "讲师培训班";
		model.put("title", title);
		return "train/leadertrainclass_list";
	}

	/**
	 * 外派培训班列表页
	 */
	@RequestMapping("out/list.html")
	public String toList(ModelMap model) {
		List<SysParamBo> levelList = tpService.getOutTrainLevel();
		List<SysParamBo> addressTypeList = tpService.getTrainAddressType();
		model.put("levelList", levelList);
		model.put("addressTypeList", addressTypeList);
		return "train/outtrainclass_list";
	}

	/**
	 * 打开外派培训班的信息弹窗
	 */
	@RequestMapping(value = "out/showinfo.html")
	public String openOutInfo(HttpServletRequest request, ModelMap model) {
		String tcid = request.getParameter("tcid");
		TrainClassBo tc = trainClassService.getTrainClass(tcid);
		model.put("tc", tc);
		return "train/outtrainclass_info";
	}

	/**
	 * 外派培训班新增页
	 */
	@RequestMapping("out/new.html")
	public String toNew(HttpServletRequest request, ModelMap model) {
		List<SysParamBo> levelList = tpService.getOutTrainLevel();
		List<SysParamBo> addressTypeList = tpService.getTrainAddressType();
		model.put("levelList", levelList);
		model.put("addressTypeList", addressTypeList);
		String tcid = request.getParameter("tcid");
		if (!StringUtils.isBlank(tcid)) {
			TrainClassBo tc = trainClassService.getTrainClass(tcid);
			model.put("trainClass", tc);
		}
		return "train/outtrainclass_new";
	}

	/**
	 * 保存外派培训班基本信息
	 */
	@RequestMapping(value = "out/doSaveClass.html", method = RequestMethod.POST)
	public String saveOutTrainClass(TrainClassCon con, HttpServletRequest request, ModelMap model) {
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		SysCodeBo sn = codeService.getSysCodeTrainClass();
		con.setSn(this.generateSn(user.getType(), con.getClass_dep()) + "-" + sn.getMaxSerial());
		con.setStatus(1);
		con.setType(1);
		con.setCreate_date(DateTool.getNowShort());
		con.setCreater_id(user.getUid());
		Return re = trainClassService.saveAndUpdateTrainClass(con);
		if (StringUtils.isBlank(con.getTcId())) {
			return "redirect:setting.html?tcid=" + re.getCode();
		} else {
			return "redirect:setting.html?tcid=" + con.getTcId();
		}
	}

	@RequestMapping("out/setting.html")
	public String outSetting(HttpServletRequest request, ModelMap model) {
		String tcid = request.getParameter("tcid");
		model.put("tcid", tcid);
		return "train/outtrainclass_setting";
	}

	/**
	 * 面授课程管理
	 */
	@RequestMapping("facecourse.html")
	public String toFacecourse(HttpServletRequest request, ModelMap model) {
		String tag = "info";
		if (!StringUtils.isBlank(request.getParameter("tag"))) {
			tag = request.getParameter("tag");
		}
		model.put("tag", tag);
		String tcid = request.getParameter("tcid");
		TrainClassBo tc = trainClassService.getTrainClass(tcid);
		model.put("tc", tc);
		model.put("tcid", tcid);

		Map<String, String> con = new HashMap<String, String>();
		con.put("tcId", tcid);
		List<TrainClassFacilityBo> billList = faciService.getTrainClassFacilitys(con);
		model.put("billList", billList);

		List<SysParamBo> spList = tpService.getTrainClassFacility();
		model.put("spList", spList);
		return "train/facecourse_traininfo";
	}

	@RequestMapping(value = "exportInventoryList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportInventoryList(HttpServletRequest request, HttpServletResponse response) {

		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");

		String tcid = request.getParameter("tcid");
		TrainClassBo trainClassBo = trainClassService.getTrainClass(tcid);

		Map<String, String> con = new HashMap<String, String>();
		con.put("tcId", tcid);
		Map<String, String> facilityCon = faciService.getTrainClassFacilitysMap(con);
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = OtherUtil.getExportPath(address, "trainInventory");
		List<SysParamBo> listSysParam = tpService.getTrainClassFacility();
		downLoadTrainInventoryService.exportTrainInventoryResult(fileInfo,
			0,
			trainClassBo,
			listSysParam,
			facilityCon,
			user.getName());
		return fileInfo.getName();
	}

	/**
	 * 
	 */
	@RequestMapping(value = "exportTrainFaceManageTemplet.html", method = RequestMethod.GET)
	public void exportTrainFaceManageTemplet(HttpServletRequest request, HttpServletResponse response) {

		HashMap<String, String> con = new HashMap<String, String>();
		String train_id = request.getParameter("tcid");
		con.put("train_class_id", train_id);
		List<TrainClassStudentBo> list = studentService.getExportList(con);
		downLoadTrainFaceManageService.downTrainFaceManageTemplet(response, list);

	}

	/**
	 * 
	 */
	@RequestMapping(value = "exportOutTrainUserInfoTemplet.html", method = RequestMethod.GET)
	public void exportOutTrainUserInfoTemplet(HttpServletRequest request, HttpServletResponse response) {

		HashMap<String, String> con = new HashMap<String, String>();
		String train_id = request.getParameter("tcid");
		con.put("train_class_id", train_id);
		List<TrainClassStudentBo> list = studentService.getExportList(con);
		downLoadOutTrainInfoService.downOutTrainInfoTemplet(response, list);

	}

	/**
	 * 
	 */
	@RequestMapping(value = "exportOutTrainUserInfoResult.html", method = RequestMethod.GET)
	public void exportOutTrainUserInfoResult(HttpServletRequest request, HttpServletResponse response) {

		HashMap<String, String> con = new HashMap<String, String>();
		String train_id = request.getParameter("tcid");
		con.put("train_class_id", train_id);
		List<TrainClassStudentBo> list = studentService.getExportList(con);
		downLoadOutTrainInfoService.downOutTrainInfoResult(response, list);

	}

	/**
	 * 
	 */
	@RequestMapping(value = "exportTrainCheckinTemplet.html", method = RequestMethod.GET)
	public void exportTrainCheckinTemplet(HttpServletRequest request, HttpServletResponse response) {

		HashMap<String, String> con = new HashMap<String, String>();
		String train_id = request.getParameter("tcid");
		String userSN = request.getParameter("user_sn");
		String userName = request.getParameter("user_name");
		con.put("train_class_id", train_id);
		con.put("sn", userSN);
		con.put("name", userName);
		List<TrainClassStudentBo> list = studentService.getExportList(con);
		downLoadTrainCheckinService.downTrainCheckinTemplet(response, list);
	}

	@RequestMapping(value = "exportTrainCheckinResult.html", method = RequestMethod.POST)
	public void exportTrainCheckinResult(HttpServletRequest request, HttpServletResponse response) {

		HashMap<String, String> con = new HashMap<String, String>();
		String train_id = request.getParameter("tcid");
		String userSN = request.getParameter("user_sn");
		String userName = request.getParameter("user_name");
		con.put("train_class_id", train_id);
		con.put("sn", userSN);
		con.put("name", userName);
		List<TrainClassStudentBo> listStudent = studentService.getExportList(con);
		List<TrainClassCheckinBo> listCheckin = checkinService.getExportList(con);
		downLoadTrainCheckinService.downTrainCheckinResult(response, listStudent, listCheckin);
	}

	/**
	 * 进入新建考勤情况页面
	 */
	@RequestMapping("checkin/new.html")
	public String toNewCheckIn(HttpServletRequest request, ModelMap model) {
		String tcid = request.getParameter("tcid");
		TrainClassBo tc = trainClassService.getTrainClass(tcid);
		model.put("tc", tc);
		model.put("dateList", DateTool.getDay(tc.getStart_date(), tc.getEnd_date(), 0));
		model.put("tcid", tcid);
		return "train/facecourse_newcheckin";
	}

	/**
	 * 修改学员报到情况
	 */
	@RequestMapping("checkin/changeStatus.html")
	@ResponseBody
	public Return changeEnrolStatus(HttpServletRequest request) {
		String stuid = request.getParameter("stuid");
		String status = request.getParameter("status");
		TrainClassStudentCon stu = new TrainClassStudentCon();
		stu.setTcsId(stuid);
		stu.setStatus(status);
		return studentService.saveAndUpdateTrainClassStudent(stu);
	}

	/**
	 * 保存考勤记录
	 */
	@RequestMapping(value = "checkin/save.html", method = RequestMethod.POST)
	@ResponseBody
	public Return saveCheckin(HttpServletRequest request) {
		String checkinDate = request.getParameter("checkinDate");
		String[] ids = request.getParameterValues("id");
		String[] ones = new String[ids.length];
		String[] twos = new String[ids.length];
		String[] threes = new String[ids.length];
		for (int i = 0; i < ids.length; i++) {
			ones[i] = request.getParameter(ids[i] + "_one");
			twos[i] = request.getParameter(ids[i] + "_two");
			threes[i] = request.getParameter(ids[i] + "_three");
		}
		Return re = new Return();
		TrainClassCheckinCon cc = new TrainClassCheckinCon();
		cc.setStudent_id(StringTool.getString(ids, StringTool.SPLIT_COMMA));
		cc.setTimeSlotOne(StringTool.getString(ones, StringTool.SPLIT_COMMA));
		cc.setTimeSlotTwo(StringTool.getString(twos, StringTool.SPLIT_COMMA));
		cc.setTimeSlotThree(StringTool.getString(threes, StringTool.SPLIT_COMMA));
		cc.setCheckin_date(checkinDate);
		cc.setCheckin_time(DateTool.getNowShort());
		re = checkService.saveAndUpdateTrainClassCheckin(cc);
		return re;
	}

	/**
	 * 保存学员费用记录
	 */
	@RequestMapping(value = "budget/save.html", method = RequestMethod.POST)
	@ResponseBody
	public Return saveBudget(HttpServletRequest request) {
		String[] ids = request.getParameterValues("id");
		String[] scores = request.getParameterValues("score");
		String[] examLevel = request.getParameterValues("examLevel");
		String[] budgetTrains = request.getParameterValues("budgetTrain");
		String[] budgetBoards = request.getParameterValues("budgetBoard");
		String[] budgetOthers = request.getParameterValues("budgetOther");
		String[] extraTrain = request.getParameterValues("extraTrain");
		Return re = new Return();
		for (int i = 0; i < ids.length; i++) {
			TrainClassStudentCon stu = new TrainClassStudentCon();
			stu.setTcsId(ids[i]);
			if (StringUtils.isNotBlank(scores[i])) {
				stu.setScore(Float.parseFloat(scores[i]));
			}
			if (StringUtils.isNotBlank(examLevel[i])) {
				stu.setExamLevel(examLevel[i]);
			}
			if (StringUtils.isNotBlank(budgetTrains[i])) {
				stu.setBudgetTrain(Float.parseFloat(budgetTrains[i]));
			}
			if (StringUtils.isNotBlank(budgetBoards[i])) {
				stu.setBudgetBoard(Float.parseFloat(budgetBoards[i]));
			}
			if (StringUtils.isNotBlank(budgetOthers[i])) {
				stu.setBudgetOther(Float.parseFloat(budgetOthers[i]));
			}
			if(extraTrain!=null&&extraTrain.length>0){
				extr:for(String str:extraTrain){
					if(ids[i].equals(str)){
						stu.setExtraTrain(1);
						break extr;
					}
				}
			}
			re = studentService.saveAndUpdateTrainClassStudent(stu);
		}
		return re;
	}

	/**
	 * 保存清单
	 */
	@RequestMapping(value = "bill/save.html", method = RequestMethod.POST)
	@ResponseBody
	public Return saveBill(HttpServletRequest request) {
		Return re = new Return();
		String tcid = request.getParameter("tcid");
		String[] spIds = request.getParameterValues("spId");
		String[] readys = request.getParameterValues("isComplete");
		if (spIds != null && spIds.length > 0) {
			TrainClassFacilityCon fc = new TrainClassFacilityCon();
			fc.setTc_id(tcid);
			fc.setDetail_spId(StringTool.getString(spIds, StringTool.SPLIT_COMMA));
			fc.setIsComplete(StringTool.getString(readys, StringTool.SPLIT_COMMA));
			re = faciService.saveAndUpdateTrainClassFacility(fc);
		} else {
			Map<String, String> con = new HashMap<String, String>();
			con.put("tcId", tcid);
			re = faciService.remove(con);
		}

		return re;
	}

	/**
	 * 讨论区管理
	 */
	@RequestMapping("bbs.html")
	public String toBBS(HttpServletRequest request, ModelMap model) {
		String tcid = request.getParameter("tcid");
		model.put("tcid", tcid);
		TrainClassBo tc = trainClassService.getTrainClass(tcid);
		model.put("tc", tc);
		return "train/bbs";
	}

	/**
	 * 选择讨论区
	 */
	@RequestMapping("dialog/choosefourm.html")
	public String chooseForum() {

		return "dialog/trainclass/forum";
	}

	/**
	 * 设置讨论区
	 */
	@RequestMapping(value = "forum/setting.html", method = RequestMethod.POST)
	public String setForum(HttpServletRequest request, ModelMap model) {
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		String isAdd = request.getParameter("isAdd");
		String tcid = request.getParameter("tcid");
		if (isAdd.equals("1")) {
			String addWay = request.getParameter("addWay");
			String tcfid = request.getParameter("tcfId");
			String name = request.getParameter("name");
			String status = request.getParameter("status");
			if ("choose".equals(addWay)) {
				TrainClassCon tc = new TrainClassCon();
				tc.setTcId(tcid);
				tc.setTcf_id(tcfid);
				trainClassService.saveAndUpdateTrainClass(tc);
			} else {
				TrainClassForumCon forum = new TrainClassForumCon();
				forum.setName(name);
				forum.setStatus(Integer.parseInt(status));
				forum.setCreator_id(user.getUid());
				forum.setOutCode("123");
				forum.setCreate_time(DateTool.getNormal());
				Return re = forumService.saveAndUpdateTrainClassForum(forum);
				if (forum.getTcfId() == null) {
					TrainClassCon tc = new TrainClassCon();
					tc.setTcId(tcid);
					tc.setTcf_id(re.getCode());
					trainClassService.saveAndUpdateTrainClass(tc);
				}
			}
		}
		return "redirect:/trainclass/statistics.html?tcid=" + tcid;
	}

	/**
	 * 培训统计
	 */
	@RequestMapping("statistics.html")
	public String toStatistics(HttpServletRequest request, ModelMap model) {
		String tcid = request.getParameter("tcid");
		TrainClassBo tc = trainClassService.getTrainClass(tcid);
		model.put("tc", tc);
		model.put("tcid", tcid);
		return "train/statistics";
	}

	/**
	 * 培训证书
	 */
	@RequestMapping("certificate.html")
	public String toCertificate(HttpServletRequest request, ModelMap model) {
		String tcid = request.getParameter("tcid");
		model.put("tcid", tcid);
		TrainClassBo tc = trainClassService.getTrainClass(tcid);
		model.put("tc", tc);
		/** 同步学员 **/
		HashMap<String, String> con = new HashMap<String, String>();
		con.put("train_class_id", tcid);
		con.put("exam_status", "1");
		Collection<TrainClassStudentBo> stuList = studentService.getTrainClassStudents(con, null, null);

		Map<String, String> con2 = new HashMap<String, String>();
		con2.put("trainclass_id", tcid);
		Collection<TrainClassDiplomaBo> dipList = tcDiService.getTrainClassDiplomaForPage(con2, null, null);
		if (stuList.getData() != null) {
			if (dipList.getData() == null) {
				for (int i = 0; i < stuList.getData().size(); i++) {
					TrainClassStudentBo stu = stuList.getData().get(i);
					tcDiService.saveOrUpdateTrainClassDiploma(this.transfer(stu));
				}
			} else {
				for (int i = 0; i < stuList.getData().size(); i++) {
					TrainClassStudentBo stu = stuList.getData().get(i);
					boolean in = false;
					for (int j = 0; j < dipList.getData().size(); j++) {
						TrainClassDiplomaBo dip = dipList.getData().get(j);
						if (stu.getStudent().getUid().equals(dip.getStudent().getUid())) {
							in = true;
							break;
						}
					}
					if (!in) {
						tcDiService.saveOrUpdateTrainClassDiploma(this.transfer(stu));
					}
				}
			}
		}
		/** 同步学员结束 **/

		return "train/certificate";
	}

	/** 把学员导入到证书人员中 **/
	private TrainClassDiplomaCon transfer(TrainClassStudentBo stu) {
		TrainClassDiplomaCon d = new TrainClassDiplomaCon();
		d.setTc_id(stu.getTc().getTcId());
		d.setStudent_id(stu.getStudent().getUid());
		d.setIsVerify(0);
		return d;
	}

	/**
	 * 新建证书
	 */
	@RequestMapping(value = "diploma/save.html", method = RequestMethod.POST)
	public String saveCert(DiplomaCon di,
			HttpServletRequest request,
			ModelMap model,
			@RequestParam("image") MultipartFile image) {
		String tcid = request.getParameter("tcid");
		String valid = request.getParameter("valid");
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		SimpleDateFormat dateformat = new SimpleDateFormat("yyyy/MM/dd/HH");
		/** 构建图片保存的目录 **/
		String pathDir = uploadPath + dateformat.format(new Date());
		/** 得到图片保存目录的真实路径 **/
		String realPathDir = request.getSession().getServletContext().getRealPath(pathDir);
		/** 根据真实路径创建目录 **/
		File logoSaveFile = new File(realPathDir);
		if (!logoSaveFile.exists()) {
			logoSaveFile.mkdirs();
		}
		/** 获取文件的后缀 **/
		String suffix = image.getOriginalFilename().substring(image.getOriginalFilename().lastIndexOf("."));
		/** 使用UUID生成文件名称 **/
		String imageName = UUID.randomUUID().toString() + suffix;// 构建文件名称
		/** 拼成完整的文件保存路径加文件 **/
		String fileName = realPathDir + File.separator + imageName;
		File file = new File(fileName);
		try {
			image.transferTo(file);
			di.setPatternPath(pathDir + "/" + imageName);
			if (valid.equals("1")) {
				di.setEffective_date(di.getEffective_date() + " 00:00:00");
			}
			di.setCreater_id(user.getUid());
			di.setCreate_date(DateTool.getNowShort());
			diService.saveOrUpdateDiploma(di);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "redirect:../certificate.html?tcid=" + tcid;
	}

	/**
	 * 删除证书
	 */
	@RequestMapping(value = "diploma/delete.html", method = RequestMethod.POST)
	@ResponseBody
	public Return remove(HttpServletRequest request) {
		String dipid = request.getParameter("dipId");
		return diService.removeAllDiploma(dipid);
	}

	/**
	 * 查询证书列表
	 */
	@RequestMapping("diploma/list.html")
	public String listDiploma(HttpServletRequest request, ModelMap model) {
		Collection<DiplomaBo> list = diService.getDiplomaForPage(null,
			PagerTool.getPageNo(request),
			PagerTool.getPageSize(request));
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/diploma";
	}

	/**
	 * 查看证书模板
	 */
	@RequestMapping("diploma/view.html")
	@ResponseBody
	public String showDiploma(HttpServletRequest request, HttpServletResponse response) {
		String did = request.getParameter("did");
		DiplomaBo d = diService.getDiploma(did);
		if (d != null) {
			String realPathDir = request.getSession().getServletContext().getRealPath(d.getPatternPath());
			File file = new File(realPathDir);
			if (file.exists()) {
				try {
					BufferedImage image = ImageIO.read(file);
					response.setContentType("");
					ImageIO.write(image, "JPG", response.getOutputStream());
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return null;
	}

	/**
	 * 查看证书发布人员
	 */
	@RequestMapping("diplomauser/list.html")
	public String listDiplomaUser(HttpServletRequest request, ModelMap model) {
		String tcid = request.getParameter("tcid");
		String sn = request.getParameter("sn");
		String username = request.getParameter("username");
		String status = request.getParameter("status");
		Map<String, String> con = new HashMap<String, String>();
		con.put("trainclass_id", tcid);
		con.put("sn", sn);
		con.put("username", username);
		con.put("status", status);
		Collection<TrainClassDiplomaBo> list = tcDiService.getTrainClassDiplomaForPage(con,
			PagerTool.getPageNo(request),
			PagerTool.getPageSize(request));
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/diploma_user";
	}

	/**
	 * 更新证书人员
	 */
	@RequestMapping(value = "diplomauser/update.html", method = RequestMethod.POST)
	@ResponseBody
	public Return updateDipUser(TrainClassDiplomaCon con, HttpServletRequest request, ModelMap model) {
		Return re = new Return();
		if (con.getIsVerify() != null && con.getIsVerify() == 1) {
			con.setVerify_time(DateTool.getNormal());
		} else {
			con.setIsVerify(0);
		}
		//如果选择无证书则取消证书
		if (con.getLevel() == null) {
			re = tcDiService.removeDip(con.getTcpId());
		} else {
			re = tcDiService.saveOrUpdateTrainClassDiploma(con);
		}
		return re;
	}

	/**
	 * 发布证书
	 */
	@RequestMapping(value = "diploma/publish.html", method = RequestMethod.POST)
	@ResponseBody
	public Return publish(HttpServletRequest request) {
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		String[] ids = request.getParameterValues("uid");
		String verify = request.getParameter("verify");
		for (int i = 0; i < ids.length; i++) {
			TrainClassDiplomaCon d = new TrainClassDiplomaCon();
			d.setTcpId(ids[i]);
			d.setIsVerify(Integer.parseInt(verify));
			d.setVerifier_id(user.getUid());
			d.setVerify_time(DateTool.getNormal());
			tcDiService.saveOrUpdateTrainClassDiploma(d);
		}
		return new Return();
	}

	/**
	 * 查看改进计划
	 * 
	 * @param model
	 * @param request
	 */
	@RequestMapping("checkImprovePlan.html")
	public String checkImprovePlan(HttpServletRequest request, ModelMap model) {
		String tcid = request.getParameter("tcid");
		String uid = request.getParameter("uid");
		Map<String, String> con = new HashMap<String, String>();
		con.put("train_class_id", tcid);
		con.put("user_id", uid);
		List<TrainClassImprovePlanBo> list = trainClassImprovePlanService.getTrainClassImprovePlans(con);
		if (list != null && !list.isEmpty()) {
			model.put("improve", list.get(0));
		}
		return "train/improvePlanInfo";
	}

	/**
	 * 是否有考试
	 * 
	 * @param model
	 * @param request
	 */
	@RequestMapping("isHaveExam.html")
	@ResponseBody
	public String isHaveExam(HttpServletRequest request) {
		String tcids = request.getParameter("tcid");
		String[] tcids_ = tcids.split(",");
		String examjson = "[";
		for (int i = 0; i < tcids_.length; i++) {
			if (tcids_[i] != null) {
				List<String> listTE = new ArrayList<String>();
				listTE.add(tcids_[i]);
				List<ExamArrange> list = eSrv.getTrainClassExamInfoList(listTE, "", null, null, "", "", "", "");
				//System.out.println(tcids_[i]);
				int size = 0;
				if (list != null) {
					size = list.size();
				}
				examjson += "{cid:'" + tcids_[i] + "',size:" + size + "}";
				if (i < (tcids_.length - 1)) {
					examjson += ",";
				}
			}
		}
		examjson += "]";
		return examjson;

	}

	/**
	 * 查看报到信息
	 */
	@RequestMapping("studentEnrolInfo.html")
	public String showEnrolInfo(HttpServletRequest request, ModelMap model) {
		String studentid = request.getParameter("studentid");
		Map<String, String> con = new HashMap<String, String>();
		con.put("studentid", studentid);
		List<StudentEnrolInfoBo> list = enrolService.list(con);
		if (list != null && list.size() > 0) {
			model.put("info", list.get(0));
		}
		return "train/studentEnrolInfo";
	}

	private void setTp(BehaviorCon b, HttpServletRequest request) {
		String upperTP = request.getParameter("upper_tp");
		String equalTP = request.getParameter("equal_tp");
		String lowerTP = request.getParameter("lower_tp");
		String selfTP = request.getParameter("self_tp");
		String otherTP = request.getParameter("other_tp");
		StringBuffer tpids = new StringBuffer();
		StringBuffer logos = new StringBuffer();
		if (!StringUtils.isEmpty(upperTP)) {
			tpids.append(upperTP + ",");
			logos.append("0,");
		}
		if (!StringUtils.isEmpty(equalTP)) {
			tpids.append(equalTP + ",");
			logos.append("1,");
		}
		if (!StringUtils.isEmpty(lowerTP)) {
			tpids.append(lowerTP + ",");
			logos.append("2,");
		}
		if (!StringUtils.isEmpty(selfTP)) {
			tpids.append(selfTP + ",");
			logos.append("4,");
		}
		if (!StringUtils.isEmpty(otherTP)) {
			tpids.append(otherTP + ",");
			logos.append("3,");
		}
		b.setTemplateIds(tpids.toString());
		b.setLogos(logos.toString());
	}

	/**
	 * 培训统计课程
	 */
	@RequestMapping("number.html")
	public String number(HttpServletRequest request, ModelMap model) {
		String sn = request.getParameter("sn");
		String tcid = request.getParameter("tcid");
		String op = request.getParameter("op");
		if (op != null || !"".equals(op)) {
			model.put("op", op);
		}
		model.put("sn", sn);
		model.put("tcid", tcid);
		return "list/trainclass/trainclass_number";
	}

}
