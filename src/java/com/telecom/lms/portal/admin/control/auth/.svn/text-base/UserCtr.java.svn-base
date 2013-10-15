package com.telecom.lms.portal.admin.control.auth;

import java.io.File;
import java.io.IOException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
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
import org.springframework.web.bind.annotation.ResponseBody;

import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.RolePermitBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.auth.UserInfoCon;
import com.telecom.lms.core.bo.auth.UserPermitCon;
import com.telecom.lms.core.bo.basic.ConstantsSystem;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.model.ExcelReturn;
import com.telecom.lms.core.bo.model.ExportInfoBo;
import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.core.controller.basedata.OrganizationInfoController;
import com.telecom.lms.core.controller.basedata.UserInfoController;
import com.telecom.lms.core.model.basedata.OrganizationInfoSearchForm;
import com.telecom.lms.core.model.basedata.UserInfoSearchForm;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.DownLoadFileUtil;
import com.telecom.lms.portal.admin.util.JSONWriter;
import com.telecom.lms.portal.admin.util.SessionConstants;
import com.telecom.lms.portal.admin.util.StringTool;
import com.telecom.lms.portal.admin.util.UploadFileUtil;
import com.telecom.lms.sdk.base.GenerateSnTool;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.auth.RolePermitService;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.auth.UserRolesService;
import com.telecom.lms.sdk.service.auth.UserScopeService;
import com.telecom.lms.sdk.service.auth.param.UserInfoParam;
import com.telecom.lms.sdk.service.basic.SysParamService;
import com.telecom.lms.sdk.service.down.basedata.DownLoadUserService;
import com.telecom.lms.sdk.service.imp.basedata.ImportUserService;
import com.telecom.lms.sdk.service.position.Position4OrgService;
import com.telecom.lms.sdk.util.FileInfoUtil;

@Controller
@RequestMapping("/user")
public class UserCtr {

	private static final Logger log = LoggerFactory.getLogger(UserCtr.class);

	@Autowired
	UserInfoService userService;
	@Autowired
	CommonService commonService;
	@Autowired
	SysParamService spService;
	@Autowired
	OrganizationService orgService;
	@Autowired
	UserRolesService userRoleService;
	@Autowired
	RolePermitService rolePermitService;
	@Autowired
	UserScopeService userScopeService;
	@Autowired
	GenerateSnTool genSnService;
	@Autowired
	Position4OrgService position4OrgService;
	@Autowired
	DownLoadUserService downLoadUserService;

	@Autowired
	ImportUserService importUserService;

	@Resource
	UserInfoController userInfoController;

	@Resource
	OrganizationInfoController organizationInfoController;

	private @Value("#{export.user_exportLimit}")
	Integer limit;

	private @Value("#{export.user_exportMax}")
	Integer max;

	private @Value("#{import.user_saveBatchNum}")
	Integer saveBatchNum;

	private @Value("#{import.user_searchOrgBatchNum}")
	Integer searchOrgBatchNum;

	private @Value("#{import.user_searchUserBatchNum}")
	Integer searchUserBatchNum;

	private static final String PREFIX = "user";

	@SuppressWarnings("unchecked")
	@RequestMapping(value = "importAddList.html", method = RequestMethod.POST)
	public void importAddList(HttpServletRequest request, HttpServletResponse response) throws Exception {

		File uploadedFile = null;
		try {

			uploadedFile = UploadFileUtil.getUploadFile(request, PREFIX);

			List<OrganizationBo> list = ((List<OrganizationBo>) request.getSession()
				.getAttribute(SessionConstants.SESSION_MANAGE_ORG_LIST));

			ExcelReturn excelReturn = importUserService.importAddOfficialUser(uploadedFile.getPath(),
				list,
				saveBatchNum,
				searchOrgBatchNum);

			DownLoadFileUtil.getDownLoadFile(request, PREFIX, excelReturn);

			JSONWriter.write(response, excelReturn);
		} catch (Exception e) {
			log.error(PREFIX + " upload import to error", e);
			throw e;
		} finally {
			if (null != uploadedFile) {
				uploadedFile.delete();
			}
		}

	}

	@SuppressWarnings("unchecked")
	@RequestMapping(value = "importUpdateList", method = RequestMethod.POST)
	public void importUpdateList(HttpServletRequest request, HttpServletResponse response) throws Exception {

		File uploadedFile = null;
		try {

			uploadedFile = UploadFileUtil.getUploadFile(request, PREFIX);
			List<OrganizationBo> list = (List<OrganizationBo>) request.getSession()
				.getAttribute(SessionConstants.SESSION_MANAGE_ORG_LIST);

			ExcelReturn excelReturn = importUserService.importUpdateOfficialUser(uploadedFile.getPath(),
				list,
				saveBatchNum,
				searchOrgBatchNum,
				searchUserBatchNum);

			DownLoadFileUtil.getDownLoadFile(request, PREFIX, excelReturn);
			JSONWriter.write(response, excelReturn);

		} catch (Exception e) {
			log.error(PREFIX + " upload import to error", e);
			throw e;

		} finally {
			if (null != uploadedFile) {
				uploadedFile.delete();
			}
		}
	}

	@RequestMapping(value = "exportCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportCount(HttpServletRequest request, HttpServletResponse response) {

		UserInfoSearchForm form = this.queryExport(request, "user_list");

		int count = userInfoController.searchCount(form);
		log.debug("export count is : {} ", count);
		ExportInfoBo exportInfoBo = new ExportInfoBo();
		exportInfoBo.setCount(count);
		if (count > max) {
			exportInfoBo.setFlag("confirm");
		}
		return exportInfoBo;
	}

	/**
	 * 
	 */
	@RequestMapping(value = "exportList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportList(HttpServletRequest request, HttpServletResponse response) {

		UserInfoSearchForm form = this.queryExport(request, "user_list");
		int count = Integer.parseInt(request.getParameter("count"));

		form.setMax(limit);
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = FileInfoUtil.getFileInfo(address, "user");

		for (int i = 0; i <= count / limit; i++) {
			form.setPage(i * limit);
			List<UserInfoBo> userInfoBos = userInfoController.searchList(form);
			downLoadUserService.exportOfficialResult(fileInfo, i * limit, userInfoBos);
		}
		return fileInfo.getName();
	}

	public UserInfoSearchForm queryExport(HttpServletRequest request, String type) {

		String name = request.getParameter("name");
		String status = request.getParameter("status");
		String orgId = request.getParameter("orgid");
		String isChildDep = request.getParameter("ischilddep");
		UserInfoSearchForm form = new UserInfoSearchForm();
		if (StringUtils.isNotBlank(name)) {
			try {
				form.setName(URLDecoder.decode(name, "utf-8"));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		form.setEmail(request.getParameter("mail"));
		form.setCertificatecode(request.getParameter("cate"));
		form.setMobile(request.getParameter("mobile"));
		form.setSn(request.getParameter("sn"));
		if (StringUtils.isNotBlank(status)) {
			form.setStatus(Integer.parseInt(status));
		}
		form.setEmpNatureId(request.getParameter("emp"));
		if (StringUtils.isNotBlank(orgId) && !"undefined".equals(orgId)) {
			queryOrgExport(orgId, isChildDep, form);
		}
		if ("user_list".equals(type)) {
			form.setIsTemporary(0);
		}
		if ("common".equals(type)) {

		}
		if ("tempuser".equals(type)) {
			form.setIsTemporary(1);
		}

		return form;
	}

	private void queryOrgExport(String orgId, String isChildOrg, UserInfoSearchForm form) {

		if (StringUtils.isNotBlank(isChildOrg) && "0".equals(isChildOrg)) {
			OrganizationInfoSearchForm organizationInfoSearchForm = new OrganizationInfoSearchForm();
			organizationInfoSearchForm.setId(orgId);
			OrganizationBo organizationBo = organizationInfoController.get(organizationInfoSearchForm);
			form.setLeftPriority(organizationBo.getLeftPriority());
			form.setRightPriority(organizationBo.getRightPriority());
		} else {
			form.setOrgId(orgId);
		}
	}

	@RequestMapping("list.html")
	public String toList(HttpServletRequest request, ModelMap model) {
		List<SysParamBo> empNatureList = spService.getEmpNatureTypes();
		model.put("empNatureList", empNatureList);
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		Map<String, String> con = new HashMap<String, String>();
		con.put("uid", user.getUid());
		OrganizationBo ob = userService.getManageOrg(con);
		model.put("orgDepOriId", ob.getOrgId());

		/*** LMSWD-3313 无用字段LuChao ****/
		String old_dep = request.getParameter("old_dep");
		model.put("old_dep", old_dep);

		return "auth/user_list";
	}

	public String upload(HttpServletRequest request, ModelMap model) {

		return null;
	}

	/**
	 * 新建或者修改用户信息
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("new.html")
	public String toNew(HttpServletRequest request, ModelMap model) {
		String uid = request.getParameter("uid");
		String depid = request.getParameter("depid");
		List<SysParamBo> folkList = spService.getFolks();
		List<SysParamBo> politicalList = spService.getPoliticals();
		List<SysParamBo> jobList = spService.getJobs();
		List<SysParamBo> certificateTypeList = spService.getCertificateTypes();
		List<SysParamBo> degreeList = spService.getDegrees();
		List<SysParamBo> jobTypeList = spService.getJobTypeTypes();
		List<SysParamBo> empNatureList = spService.getEmpNatureTypes();
		List<SysParamBo> techGradeList = spService.getTechGradeTypes();
		List<SysParamBo> techCategoryList = spService.getTechCategoryTypes();
		List<SysParamBo> educationList = spService.getEducationTypes();
		model.put("politicalList", politicalList);
		model.put("jobList", jobList);
		model.put("certificateTypeList", certificateTypeList);
		model.put("degreeList", degreeList);
		model.put("folkList", folkList);

		model.put("jobTypeList", jobTypeList);
		model.put("empNatureList", empNatureList);
		model.put("techGradeList", techGradeList);
		model.put("techCategoryList", techCategoryList);
		model.put("educationList", educationList);
		model.put("dep", orgService.getOrganization(depid));
		//		model.put("sn", genSnService.getOfficialUserSn()); //进入新建修改页面时不调用编号自增 20130410 by LTC
		UserInfoBo user = null;
		if (!StringUtils.isBlank(uid)) {
			user = userService.getUserInfo(0, uid);
			UserInfoBo u = userService.getUserInfo(1, uid);
			if (u != null) {
				user.setRemake(u.getRemake());
			}
			user.setOrg(orgService.getOrganization(user.getOrg().getOrgId()));
			if (user.getPost() != null) {
				user.setPost(position4OrgService.getPosition4Org(user.getPost().getPoId()));
			}
			if (user.getTechCategory() != null) {
				user.setTechCategory(spService.getById(user.getTechCategory().getSpId()));
			}
		}
		model.put("u", user);
		return "auth/user_new";
	}

	@RequestMapping("validate.html")
	@ResponseBody
	public boolean validate(HttpServletRequest request) {
		String type = request.getParameter("type");
		String value = request.getParameter("value");
		if (type.equals("email")) {
			return userService.validateEmail(value);
		} else if (type.equals("mobile")) {
			return userService.validateMobile(value);
		} else if (type.equals("certificateCode")) {
			return userService.validatecertificateCode(value);
		} else if (type.equals("sn")) {
			return userService.validateSn(value);
		} else {
			return true;
		}
	}

	/**
	 * 变更部门
	 * 
	 * @return
	 */
	@RequestMapping("changedep.html")
	public String toChangeDep(HttpServletRequest request, ModelMap model) {
		String uid = request.getParameter("uid");

		/*** LMSWD-3313 无用字段LuChao ****/
		String old_dep = request.getParameter("old_dep");

		UserInfoBo user = userService.getUserInfo(0, uid);
		user.setOrg(orgService.getOrganization(user.getOrg().getOrgId()));
		model.put("old_dep", old_dep);
		model.put("user", user);
		return "auth/user_change";
	}

	/**
	 * 保存用户的部门变更信息
	 * 
	 * @return
	 */
	@RequestMapping(value = "changedep/save.html", method = RequestMethod.POST)
	public String saveDepChange(UserInfoCon con, HttpServletRequest request, ModelMap model) {
		UserInfoBo user = userService.getUserInfo(0, con.getUid());//获得User对象

		/*** LMSWD-3313 无用字段LuChao ****/
		String old_dep = request.getParameter("old_dep");

		UserInfoCon con2 = bo2con(user);
		con2.setOrgId(con.getOrgId()); //按传入的orgId进行修改
		con2.setPwd("111111");
		userService.newUserInfo2(con2); //执行修改后结果的保存
		model.put("old_dep", old_dep);
		return "redirect:../list.html";
	}

	/**
	 * 修改用户状态
	 */
	@RequestMapping(value = "changestatus.html", method = RequestMethod.POST)
	@ResponseBody
	public Return changeStatus(HttpServletRequest request) {
		String uid = request.getParameter("uid");
		String status = request.getParameter("status");
		UserInfoCon u = new UserInfoCon();
		u.setUid(uid);
		u.setStatus(Integer.parseInt(status));
		return userService.updateStatus(u);
	}

	/**
	 * 锁定岗位
	 * 
	 * @return
	 */
	@RequestMapping(value = "lockpost.html", method = RequestMethod.POST)
	@ResponseBody
	public Return lockPost(UserInfoCon uic) {
		Return re = userService.updateUserInfo(uic);
		return re;
	}

	/**
	 * 保存用户信息
	 * 
	 * @return
	 * @throws IOException
	 * @throws ServletException
	 */
	@RequestMapping(value = "save.html", method = RequestMethod.POST)
	@ResponseBody
	public String save(UserInfoCon con, HttpServletRequest request, HttpServletResponse response, ModelMap model)
			throws IOException, ServletException {
		con.setPwd("111111");
		con.setIsTemporary(0);
		con.setStatus(1);
		String oriSn = request.getParameter("oriSn");
		if (oriSn.equals("") || null == oriSn) { //20130410 by LTC 当新建时编号为空时则调用自动生成
			con.setSn(genSnService.getOfficialUserSn());
		} else {
			con.setSn(oriSn); //当修改时不自增编号,仍使用原编号保存
		}
		Return re = userService.newUserInfo2(con);
		if (re.getCode() == "fail" || re.getCode().equals("fail")) {
			request.setAttribute("error", "error");
			RequestDispatcher view = request.getRequestDispatcher("list.html");
			view.forward(request, response);
			return null;
		}
		response.sendRedirect("list.html");
		return null;
	}

	/**
	 * 重置密码，默认：user.sn
	 */
	@RequestMapping(value = "resetpwd.html", method = RequestMethod.POST)
	@ResponseBody
	public Return resetPwd(HttpServletRequest request) {
		//	UserInfoBo user = (UserInfoBo) request.getSession().getAttribute(SessionConstants.SESSION_USER);
		String uid = request.getParameter("uid");
		String usn = request.getParameter("usn");
		if (StringUtils.isNotBlank(uid) && StringUtils.isNotBlank(usn)) {
			userService.resetPwd(uid, usn);
			return new Return("success");
		}
		return null;
	}

	/**
	 * 重置SN，默认：user.sn
	 */
	@RequestMapping(value = "updateSn.html", method = RequestMethod.POST)
	@ResponseBody
	public Integer updateSn(HttpServletRequest request) {
		String uid = request.getParameter("uid");
		String usn = request.getParameter("usn");
		UserInfoBo user = userService.getUserInfo(1, uid);//获得User对象
		UserInfoCon con2 = bo2con(user);
		boolean bool = true;
		Integer re = 0;
		if (StringUtils.isNotBlank(uid) && StringUtils.isNotBlank(usn)) {
			bool = userService.validateSn(usn);
			if (!bool) {
				con2.setSn(usn);
				userService.updateSn(con2);
				re = 1;
			} else {
				re = 2;//重复SN
			}
		} else {
			re = 0;
		}
		return re;
	}

	/**
	 * 获得技术业务类型的二级分类
	 * 
	 * @return
	 */
	@RequestMapping("getsecondcategory.html")
	@ResponseBody
	public List<SysParamBo> getSecondCategory(HttpServletRequest request) {
		String upid = request.getParameter("upid");
		Map<String, String> con = new HashMap<String, String>();
		con.put("upid", upid);
		List<SysParamBo> list = spService.getSecondTechCategory(con);
		return list;
	}

	@RequestMapping(value = "delete.html", method = RequestMethod.POST)
	@ResponseBody
	public Return delete(String[] id) {
		String ids = StringTool.getString(id, StringTool.SPLIT_COMMA);
		UserInfoParam p = new UserInfoParam();
		p.setId(ids);
		Return re = userService.removeUserInfos(p);
		return re;
	}

	@RequestMapping(value = "temp/delete.html", method = RequestMethod.POST)
	@ResponseBody
	public Return deleteTemp(String[] id) {
		String ids = StringTool.getString(id, StringTool.SPLIT_COMMA);
		UserInfoParam p = new UserInfoParam();
		p.setId(ids);
		Return re = userService.removeUserInfos(p);
		return re;
	}

	@RequestMapping("temp/manage.html")
	public String tempManage() {
		return "auth/tempUserManage";
	}

	@RequestMapping("temp/new.html")
	public String tempNew(HttpServletRequest request, ModelMap model) {
		String uid = request.getParameter("uid");
		UserInfoBo user = null;
		if (StringUtils.isNotBlank(uid)) {
			user = userService.getUserInfo(0, uid);

			Map<String, String> con = new HashMap<String, String>();
			con.put("uid", uid);
			List<RolePermitBo> list = userScopeService.getRolesPermitTemp(con);
			model.put("permitList", list);

		}
		model.put("u", user);
		model.put("sn", genSnService.getTempUserSn());
		return "auth/tempUserNew";
	}

	@RequestMapping(value = "temp/save.html", method = RequestMethod.POST)
	public String saveTempUser(UserInfoCon con, HttpServletRequest request) {
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute(SessionConstants.SESSION_USER);
		con.setPwd("111111");
		con.setStatus(1);
		con.setIsTemporary(1);
		String oriSn = request.getParameter("oriSn");
		if (oriSn.equals("") || null == oriSn) { //20130410 by LTC 当新建时编号为空时则调用自动生成
			con.setSn(genSnService.getOfficialUserSn());
		} else {
			con.setSn(oriSn); //当修改时不自增编号,仍使用原编号保存
		}
		Return re = userService.newUserInfo2(con);
		if (StringUtils.isNotBlank(re.getCode()) || StringUtils.isNotBlank(con.getUid())) {
			String[] menuIds = request.getParameterValues("mid");
			if (menuIds != null && menuIds.length > 0) {
				UserPermitCon upc = new UserPermitCon();
				upc.setUser_id(StringUtils.isBlank(re.getCode()) ? con.getUid() : re.getCode());
				upc.setMenu_ids(StringTool.getString(menuIds, StringTool.SPLIT_COMMA));
				upc.setCreate_id(user.getUid());
				userScopeService.newUserPermit(upc);
			}
		}
		return "redirect:manage.html";
	}

	/**
	 * 将UserInfoBo转换成UserInfoCon
	 * 
	 * @param bo
	 * @return
	 */
	private UserInfoCon bo2con(UserInfoBo bo) {
		UserInfoCon con = new UserInfoCon();
		con.setUid(bo.getUid());
		con.setName(bo.getName());
		con.setSn(bo.getSn());
		con.setGender(bo.getGender());
		if (bo.getFolk() != null) {
			con.setFolkId(bo.getFolk().getSpId());
		}
		if (bo.getPolitical() != null) {
			con.setPoliticalId(bo.getPolitical().getSpId());
		}
		if (bo.getJobType() != null) {
			con.setJobTypeId(bo.getJobType().getSpId());
		}
		if (bo.getJob() != null) {
			con.setJobId(bo.getJob().getSpId());
		}
		if (bo.getEmpNature() != null) {
			con.setEmpNatureId(bo.getEmpNature().getSpId());
		}
		if (bo.getTechCategory() != null) {
			con.setTechCategoryId(bo.getTechCategory().getSpId());
		}
		if (bo.getTechGrade() != null) {
			con.setTechGradeId(bo.getTechGrade().getSpId());
		}
		if (bo.getPost() != null) {
			con.setPostId(bo.getPost().getPoId());
		}
		con.setAcademy(bo.getAcademy());
		con.setProfessional(bo.getProfessional());
		if (bo.getEducation() != null) {
			con.setEducationId(bo.getEducation().getSpId());
		}
		if (bo.getDegree() != null) {
			con.setDegreeId(bo.getDegree().getSpId());
		}
		con.setBir(bo.getBir());
		con.setWorkDate(bo.getWorkDate());
		if (bo.getCertificateType() != null
				&& !bo.getCertificateType().getSpId().equals(ConstantsSystem.ID_PREFIX_CERTIFICATE_TYPE + "0")) {
			con.setCertificateTypeId(bo.getCertificateType().getSpId());
		}
		con.setCertificateCode(bo.getCertificateCode());
		con.setContact(bo.getContact());
		con.setMobile(bo.getMobile());
		con.setEmail(bo.getEmail());
		con.setRemake(bo.getRemake());
		return con;
	}

	@RequestMapping("documetForAll.html")
	public String documetForCours(HttpServletRequest request, ModelMap model) {
		String op = request.getParameter("op");
		String uId = request.getParameter("uid");
		UserInfoBo user = userService.getUserInfo(1, uId);
		model.put("uid", uId);
		model.put("u", user);
		if (op != null) {
			if (op.equals("cours")) {
				return "auth/user_cours";
			} else if (op.equals("class")) {
				return "auth/user_class";
			} else if (op.equals("video")) {
				return "auth/user_docvideo";
			} else if (op.equals("estimate")) {
				return "auth/user_estimate";
			}
		}
		return "auth/user_cours";
	}

}
