package com.telecom.lms.portal.admin.control;

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
import com.telecom.lms.core.bo.auth.RoleBo;
import com.telecom.lms.core.bo.auth.RoleCon;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.auth.UserRolesBo;
import com.telecom.lms.core.bo.auth.UserRolesCon;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.resources.KnowledgePointBo;
import com.telecom.lms.core.bo.survey.SurveyReplyBo;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.sdk.service.auth.MenuService;
import com.telecom.lms.sdk.service.auth.RolePermitService;
import com.telecom.lms.sdk.service.auth.RoleService;
import com.telecom.lms.sdk.service.auth.UserRolesService;
import com.telecom.lms.sdk.service.basic.SysParamService;
import com.telecom.lms.sdk.service.resources.CoursewareService;
import com.telecom.lms.sdk.service.resources.DocService;
import com.telecom.lms.sdk.service.resources.KnowledgeCategoryService;
import com.telecom.lms.sdk.service.resources.KnowledgePointService;
import com.telecom.lms.sdk.service.survey.SurveyReplyService;
import com.telecom.lms.sdk.service.train.TrainPlanService;
import com.telecom.lms.sdk.service.train.TrainResourseService;

/**
 * 培训班弹窗中内容的请求处理
 * 
 * @author SJTU
 */

@Controller
@RequestMapping("/dialog")
public class DialogCtr {
	@Autowired
	TrainResourseService trainResourseService;
	@Autowired
	CoursewareService coursewareService;
	@Autowired
	DocService docService;
	@Autowired
	TrainPlanService trainPlanService;
	@Autowired
	RoleService roleService;
	@Autowired
	CommonService commonService;
	@Autowired
	MenuService menuService;
	@Autowired
	RolePermitService rolePermitService;
	@Autowired
	UserRolesService userRolesService;
	@Autowired
	SysParamService sysParamService;
	@Autowired
	KnowledgePointService knowledgePointService;
	@Autowired
	KnowledgeCategoryService knowledgeCategoryService;
	@Autowired
	SurveyReplyService surveyReplyService;

	@RequestMapping(value = "user.html")
	public String user(HttpServletRequest request, ModelMap model) {
		String page = request.getParameter("page");
		model.put("page", page);
		OrganizationBo organizationBo = (OrganizationBo) request.getSession().getAttribute("defaultOrg");
		model.put("oriOrgDepId", organizationBo.getOrgId());
		return "dialog/auth/user_list";
	}

	// 培训需求调查结果明细-简单题答案详情弹窗
	@RequestMapping(value = "surveyRemarkDetail.html")
	public String surveyRemarkDetail(HttpServletRequest request, ModelMap model) {
		String siId = request.getParameter("siId");
		model.put("siId", siId);
		return "dialog/survey/surveyRemarkDetail";
	}
	
	
	// 培训需求调查结果明细-简单题答案详情弹窗
	@RequestMapping(value = "surveyRemarkCollect.html")
	public String surveyRemarkCollect(HttpServletRequest request, ModelMap model) {
		String siId = request.getParameter("siId");
		model.put("siId", siId);
		return "dialog/survey/surveyRemarkCollect";
	}
	
	

	// 培训需求调查结果明细-简单题答案详情弹窗
	@RequestMapping(value = "inquiryRemarkDetail.html")
	public String remarkDetail(HttpServletRequest request, ModelMap model) {
		String siId = request.getParameter("siId");
		model.put("siId", siId);
		return "dialog/inquiry/inquiryRemarkDetail";
	}

	// 培训需求调查结果汇总 20130321 by LTC
	@RequestMapping(value = "inquiryRemarkAll.html")
	public String remarkAll(HttpServletRequest request, ModelMap model) {
		String siId = request.getParameter("siId");
		Collection<SurveyReplyBo> remarkAll = surveyReplyService.getSurveyItems(siId, "1", "1000"); //最大显示1000条
		model.put("remarkAll", remarkAll);
		return "dialog/inquiry/inquiryRemarkAll";
	}

	// 会议安排人员使用的小号弹窗(多选)
	@RequestMapping(value = "user_small.html")
	public String user_small(HttpServletRequest request, ModelMap model) {
		String page = request.getParameter("page");
		model.put("page", page);
		return "dialog/auth/user_list_small";
	}

	// 移交管理员使用单选弹窗
	@RequestMapping(value = "userAuth.html")
	public String user_small_auth(HttpServletRequest request, ModelMap model) {
		String urId = request.getParameter("urId");
		model.put("urId", urId);
		return "dialog/auth/user_list_radio_auth";
	}

	// 查看角色用户弹窗
	@RequestMapping(value = "checkAuthUser.html")
	public String checkAuthUser(HttpServletRequest request, ModelMap model) {
		String rId = request.getParameter("rId");
		RoleBo rb = roleService.getRole(rId);
		model.put("rb", rb);
		return "dialog/auth/checkAuthUser";
	}

	//新增管理员单选用户弹窗
	@RequestMapping(value = "userRoleRadio.html")
	public String userRoleRadio(HttpServletRequest request, ModelMap model) {
		return "dialog/auth/user_role_radio";
	}

	@RequestMapping(value = "user.html", params = "from=choose")
	public String userWithRadio(HttpServletRequest request, ModelMap model) {
		String html_id = request.getParameter("html_id");
		String html_name = request.getParameter("html_name");
		model.put("html_id", html_id);
		model.put("html_name", html_name);
		return "dialog/auth/user_list_radio";
	}

	// 会议安排人员使用的小号弹窗(单选)
	@RequestMapping(value = "user_small.html", params = "from=choose")
	public String userSmallWithRadio(HttpServletRequest request, ModelMap model) {
		String html_id = request.getParameter("html_id");
		String html_name = request.getParameter("html_name");
		model.put("html_id", html_id);
		model.put("html_name", html_name);
		return "dialog/auth/user_list_radio_small";
	}

	// 多选人员
	@RequestMapping(value = "user.html", params = "from=multi")
	public String multiUserChoose(HttpServletRequest request, ModelMap model) {
		String list = request.getParameter("list");
		String name = request.getParameter("name");
		model.put("list", list);
		model.put("name", name);
		return "dialog/auth/user_list_multi";
	}

	/**
	 * 直线经理分配人员
	 */
	@RequestMapping(value = "assignStaff.html")
	public String assignStaff(HttpServletRequest req, ModelMap model) {
		String page = req.getParameter("page");
		model.put("page", page);
		// String lmId = req.getParameter("lmId");
		return "dialog/auth/user_list";
	}

	/**
	 * 知识点管理 - 新建知识点
	 */
	@RequestMapping(value = "createKnowledgePoint.html")
	public String createKnowledgePts(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		// 找到知识分类的根节点
		String knoId = req.getParameter("knoId");
		model.put("knoId", knoId);
		return "dialog/resource/knowledgePointDialog";
	}

	/**
	 * 知识点管理 - 新建子知识点
	 */
	@RequestMapping(value = "newSubKnowledgePoint.html")
	public ModelAndView newSubKnowledgePts(HttpServletRequest req, ModelMap model) {
		String kpId = req.getParameter("kpId");
		KnowledgePointBo upKp = knowledgePointService.getKnowledgePoint(kpId);
		model.put("upKp", upKp);
		String knoId = upKp.getKc().getKcId();
		model.put("knoId", knoId);
		return new ModelAndView("dialog/resource/subKnowledgePtsDialog", model);
	}

	/**
	 * 系统参数 - 新建系统参数
	 */
	@RequestMapping(value = "createSysParam.html")
	public ModelAndView createSysParam(HttpServletRequest request, ModelMap model) {
		Map<String, String> con = new HashMap<String, String>();
		String spId = request.getParameter("spId");
		if (spId != null && spId != "") { // 进行修改操作
			SysParamBo spb = sysParamService.getType(spId);
			model.put("spb", spb);
		}
		List<SysParamBo> paramList = new ArrayList<SysParamBo>();
		List<SysParamBo> param = sysParamService.getTypes(con);
		paramList.addAll(param);
		model.put("paramList", paramList);
		return new ModelAndView("dialog/systemParam/systemParamDialog", model);
	}

	/**
	 * 角色管理 - 自定义角色
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "roleSelfDefine.html")
	public String roleSelfDefine(HttpServletRequest request, ModelMap model) {
		String rId = request.getParameter("rId");
		if (rId != null && rId != "") {
			RoleBo rb = roleService.getRole(rId);
			model.put("rb", rb);
		} else {
			model.put("rb", new RoleBo());
		}
		return "dialog/auth/role_self_define";
	}

	/**
	 * 角色管理 - 权限管理
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "addManage.html")
	@ResponseBody
	public String addManage(HttpServletRequest request, ModelMap model) {
		//LMSWD-2639 by LTC 20130517
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		String uId = request.getParameter("uId");
		Map<String, String> con = new HashMap<String, String>();
		con.put("uId", uId);
		List<UserRolesBo> userRolesBos = userRolesService.getUserRoless(con);
		String rId = null;
		for (UserRolesBo userRolesBo : userRolesBos) {
			if (userRolesBo.getRole().getType() == 4) {
				rId = userRolesBo.getRole().getrId();
			}
		}
		if (rId == null) {
			RoleCon roleCon = new RoleCon();
			roleCon.setName("");
			roleCon.setSn("");
			roleCon.setType(4);
			Return re = roleService.newRole(roleCon);
			if (re != null && re.getCode()!=null && !re.getCode().equals("fail")) {
				rId = re.getCode();
			}
			UserRolesCon dc = new UserRolesCon();
			dc.setRoleId(rId);
			dc.setUserIds(uId);
			dc.setAuthorizePersonId(user.getUid());
			dc.setStatus(1);
			userRolesService.newUserRoles(dc);
		}
		if (rId != null && rId != "") {
			return rId;
		}
		return null;
	}

	/**
	 * 角色管理 - 权限管理
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "authManage.html")
	public String authManage(HttpServletRequest request, ModelMap model) {
		//LMSWD-2639 by LTC 20130517
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		model.put("user", user);
		String rId = request.getParameter("rId");
		if (rId != null && rId != "") { // 当为角色列表查看时
			RoleBo rb = roleService.getRole(rId);
			model.put("rb", rb);
		} else {
			model.put("rb", new RoleBo());
		}

		String type = request.getParameter("type"); // 判断是新建角色时还是新建管理员时的菜单模块权限设置:
													// 1为角色0为管理员
		if (type != null && type != "") {
			model.put("type", type);
		}

		String symbol = request.getParameter("symbol"); // 判断是否为仅具有查看权限而不具有保存修改的权限
		if (null != symbol && !"".equals(symbol)) {
			model.put("symbol", symbol);
		}

		String urId = request.getParameter("urId"); // 当为管理人员列表查看时
		String userId = "";
		String roleId = "";
		if (urId != null && urId != "") {
			UserRolesBo urb = userRolesService.getUserRoles(urId);
			userId = urb.getUser().getUid();
			roleId = urb.getTempRoleId();
		}
		if (userId != null && userId != "") {
			model.put("userId", userId);
		}
		if (roleId != null && roleId != "") {
			model.put("roleId", roleId);
		}
		return "dialog/auth/auth_manage";
	}

	/**
	 * 角色管理 - 查看角色用户
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "userManage.html")
	public String userManage(HttpServletRequest request, ModelMap model) {
		String rId = request.getParameter("rId");
		if (rId != null && rId != "") {
			RoleBo rb = roleService.getRole(rId);
			model.put("rb", rb);
		} else {
			model.put("rb", new RoleBo());
		}
		return "dialog/auth/user_manage";
	}

	/**
	 * 角色管理 - 查看管理员权限信息详情
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "infoDetail.html")
	public String infoDetail(HttpServletRequest request, ModelMap model) {
		String urId = request.getParameter("urId");
		if (urId != null && urId != "") {
			UserRolesBo ur = userRolesService.getUserRoles(urId);
			model.put("ur", ur);
		} else {
			model.put("ur", new UserRolesBo());
		}
		return "dialog/auth/info_detail";
	}

	/**
	 * 选择在线课程对话框
	 */
	@RequestMapping(value = "onlineCourse.html", method = RequestMethod.GET)
	public String getOnlineCourseList(HttpServletRequest request, ModelMap model) {
		String tcid = request.getParameter("tcid");
		String cwtype = request.getParameter("cwtype");
		model.put("tcid", tcid);
		model.put("cwtype", cwtype);
		return "dialog/trainclass/onlineCourseDialog";
	}

	/**
	 * 选择文档列表对话框
	 */
	@RequestMapping(value = "doc.html", method = RequestMethod.GET)
	public String getDocList(HttpServletRequest request, ModelMap model) {
		String tcid = request.getParameter("tcid");
		model.put("tcid", tcid);
		return "dialog/trainclass/docDialog";
	}

	/**
	 * 打开指定人员对话框
	 */
	@RequestMapping("staffing/assignperson.html")
	public String openAssignPerson() {

		return "dialog/trainclass/assignperson";
	}

	/**
	 * 打开导入人员对话框
	 */
	@RequestMapping("staffing/importperson.html")
	public String openImportPerson() {

		return "dialog/trainclass/importperson";
	}

	/**
	 * 打开指定部门对话框
	 */
	@RequestMapping("staffing/assigndep.html")
	public String openAssignDep(@RequestParam String tcid, HttpServletRequest request, ModelMap model) {
		model.put("tcid", tcid);
		return "dialog/trainclass/assigndep";
	}

	/**
	 * 打开指定部门人数对话框
	 */
	@RequestMapping("staffing/assigndepnum.html")
	public String openAssignNum(HttpServletRequest request, ModelMap model) {
		String tcid = request.getParameter("tcid");
		model.put("tcid", tcid);
		return "dialog/trainclass/assignnum";
	}

	/**
	 * 同步课堂中指定人员
	 */
	public String openPersonOfVideoclass() {

		return "/dialog/trainclass/video_person";
	}

	// 关联课程
	/**
	 * 资源课程里的关联资源课程对话框
	 */
	@RequestMapping(value = "onlineCoursewareList.html", method = RequestMethod.GET)
	public String getOnlineCourseWareList(HttpServletRequest request, ModelMap model) {
		String cId = request.getParameter("cId");
		model.put("cId", cId);
		return "dialog/onlineCoursewareListDialog";
	}

	/**
	 * 资源课程里的关联资源文档对话框
	 */
	@RequestMapping(value = "onlineDocList.html", method = RequestMethod.GET)
	public String getOnlineDocResousList(HttpServletRequest request, ModelMap model) {
		String cId = request.getParameter("cId");
		model.put("cId", cId);
		return "dialog/onlineDocListDialog";
	}

	/**
	 * 资源课程里的关联资源案例对话框
	 */
	@RequestMapping(value = "onlineCaseDocList.html", method = RequestMethod.GET)
	public String getOnlineCaseDocResousList(HttpServletRequest request, ModelMap model) {
		String cId = request.getParameter("cId");
		model.put("cId", cId);
		return "dialog/onlineCaseDocListDialog";
	}

	// 关联文档
	/**
	 * 资源文档里的关联资源课程对话框
	 */
	@RequestMapping(value = "onlineCoursewareByDocList.html", method = RequestMethod.GET)
	public String getOnlineCourseWareByDocList(HttpServletRequest request, ModelMap model) {
		String rdId = request.getParameter("rdId");
		model.put("rdId", rdId);
		return "dialog/onlineCoursewareByDocListDialog";
	}

	/**
	 * 资源文档里的关联资源文档对话框
	 */
	@RequestMapping(value = "onlineDocByDocList.html", method = RequestMethod.GET)
	public String getOnlineDocResousByDocList(HttpServletRequest request, ModelMap model) {
		String rdId = request.getParameter("rdId");
		model.put("rdId", rdId);
		return "dialog/onlineDocListByDocDialog";
	}

	/**
	 * 资源文档里的关联资源案例对话框
	 */
	@RequestMapping(value = "onlineCaseDocByDocList.html", method = RequestMethod.GET)
	public String getOnlineCaseDocByDocResousList(HttpServletRequest request, ModelMap model) {
		String rdId = request.getParameter("rdId");
		model.put("rdId", rdId);
		return "dialog/onlineCaseDocListByDocDialog";
	}

	// 关联案例
	/**
	 * 资源案例里的关联资源课程对话框
	 */
	@RequestMapping(value = "onlineCoursewareByCaseDocList.html", method = RequestMethod.GET)
	public String getOnlineCourseWareByCaseDocList(HttpServletRequest request, ModelMap model) {
		String rdId = request.getParameter("rdId");
		model.put("rdId", rdId);
		return "dialog/onlineCoursewareByCaseDocListDialog";
	}

	/**
	 * 资源案例里的关联资源文档对话框
	 */
	@RequestMapping(value = "onlineDocByCaseDocList.html", method = RequestMethod.GET)
	public String getOnlineDocResousByCaseDoccList(HttpServletRequest request, ModelMap model) {
		String rdId = request.getParameter("rdId");
		model.put("rdId", rdId);
		return "dialog/onlineDocListByCaseDocDialog";
	}

	/**
	 * 资源案例里的关联资源案例对话框
	 */
	@RequestMapping(value = "onlineCaseDocByCaseDocList.html", method = RequestMethod.GET)
	public String getOnlineCaseDocByCaseDocResousList(HttpServletRequest request, ModelMap model) {
		String rdId = request.getParameter("rdId");
		model.put("rdId", rdId);
		return "dialog/onlineCaseDocListByCaseDocDialog";
	}
}
