package com.telecom.lms.portal.admin.control;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.myctu.platform.gateway.agent.invoker.ServiceInvoker;
import com.myctu.platform.gateway.agent.invoker.ServiceInvokerException;
import com.myctu.platform.gateway.agent.message.ServiceMessageReplyBuffer;
import com.myctu.platform.protocol.message.common.ReplyBody;
import com.myctu.platform.protocol.transform.json.JacksonSupport;
import com.myctu.platform.resource.agent.signature.ResourceSignatureProcessor;
import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.basic.TagGroupBo;
import com.telecom.lms.core.bo.basic.TagLibraryBo;
import com.telecom.lms.core.bo.resources.CoursewareBo;
import com.telecom.lms.core.bo.resources.DocBo;
import com.telecom.lms.core.bo.resources.ResBaseBo;
import com.telecom.lms.core.bo.reward.ScoreDepBo;
import com.telecom.lms.core.bo.reward.ScoreDepCostBo;
import com.telecom.lms.core.bo.reward.ScoreDepGainBo;
import com.telecom.lms.core.bo.reward.ScoreUserBo;
import com.telecom.lms.core.bo.reward.ScoreUserCostBo;
import com.telecom.lms.core.bo.reward.ScoreUserGainBo;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.portal.admin.util.SessionConstants;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.basic.TagGroupService;
import com.telecom.lms.sdk.service.basic.TagLibraryService;
import com.telecom.lms.sdk.service.down.resource.DownLoadResourceManageService;
import com.telecom.lms.sdk.service.resources.CoursewareService;
import com.telecom.lms.sdk.service.resources.DocService;
import com.telecom.lms.sdk.service.resources.KnowledgeCategoryService;
import com.telecom.lms.sdk.service.resources.ResBaseService;
import com.telecom.lms.sdk.service.resources.VideoService;
import com.telecom.lms.sdk.service.reward.ScoreDepCostService;
import com.telecom.lms.sdk.service.reward.ScoreDepGainService;
import com.telecom.lms.sdk.service.reward.ScoreDepService;
import com.telecom.lms.sdk.service.reward.ScoreUserCostService;
import com.telecom.lms.sdk.service.reward.ScoreUserGainService;
import com.telecom.lms.sdk.service.reward.ScoreUserService;
import com.telecom.lms.sdk.service.train.TrainClassService;
import com.telecom.lms.sdk.service.train.TrainClassStudentService;
import com.telecom.lms.sdk.service.train.TrainPlanService;
import com.telecom.lms.sdk.service.train.TrainResourseService;

@Controller
@RequestMapping("/list")
public class ListCtr extends HttpServlet {
	@Autowired
	TrainClassService trainClassService;
	@Autowired
	CoursewareService coursewareService;
	@Autowired
	DocService docService;
	@Autowired
	TrainResourseService trainResourseService;
	@Autowired
	TrainPlanService trainPlanService;
	@Autowired
	KnowledgeCategoryService knowledgeCategoryService;
	@Autowired
	OrganizationService organizationService;
	@Autowired
	DownLoadResourceManageService downLoadResourceManageService;

	private static final String DEFAULT_DOCTYPE = "0";
	private static String algorithm = "Blowfish/ECB/ZeroBytePadding";
	private static final long DEFAULT_DOWNLOAD_EXPIRE = 1000 * 60 * 60 * 24 * 365 * 100;

	private static final long serialVersionUID = 7469039770976979672L;

	private static final String task_name = "publish.course";

	private static final String RESOURCE_ID = "resource_id";

	private static final String RESOURCE_URL = "index_url";

	@Autowired
	TrainClassStudentService studentService;
	@Autowired
	VideoService videoService;

	@Autowired
	ScoreUserService scoreUserService;
	@Autowired
	ScoreUserGainService scoreUserGainService;
	@Autowired
	ScoreUserCostService scoreUserCostService;
	@Autowired
	ScoreDepService scoreDepService;
	@Autowired
	ScoreDepCostService scoreDepCostService;
	@Autowired
	ScoreDepGainService scoreDepGainService;
	@Autowired
	TagLibraryService tagLibraryService;
	@Autowired
	CommonService commonService;
	@Autowired
	ResBaseService resBaseService;
	@Autowired
	TagGroupService tagGroupService;
	@Autowired
	OrganizationService orgService;
	private static Logger logger = LoggerFactory.getLogger(ListCtr.class);

	/**
	 * 资源中的在线课程列表
	 */
	@RequestMapping("resource/onlineCourse.html")
	public String getCourseList(HttpServletRequest req, ModelMap model) {
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		Collection<CoursewareBo> onlineList = coursewareService.getCoursewares4Page(con);
		model.put("onlineList", onlineList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return "list/resource_onlineCourse";
	}

	/**
	 * 资源中的文档列表
	 */
	@RequestMapping("resource/doc.html")
	public String getDocList(HttpServletRequest req, ModelMap model) {
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		Collection<DocBo> docList = docService.getDocs4Page(con);
		model.put("docList", docList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return "list/resource_doc";
	}

	@RequestMapping(value = "exportCoursewareList.html", method = RequestMethod.POST)
	public void exportCoursewareList(HttpServletRequest req, HttpServletResponse res, ModelMap model)
			throws IOException, ServiceInvokerException {
		//分页条件
		//取得的排序条件
		String order = req.getParameter("order");
		String sort = req.getParameter("sort");
		//得到选择的知识分类ID
		String knowledgeId = req.getParameter("knoId");
		//得到选择好的机构ID
		String orgId = req.getParameter("orgId");
		//得到选择好的岗位ID
		String positionIds = req.getParameter("positionIds");
		//得到填写好的课程名称
		String name = req.getParameter("name");
		//得到填写好的课程编号
		String sn = req.getParameter("sn");
		//得到填写好的标签
		String tag = req.getParameter("tag");
		//得到选择好的开始时间
		String startTime = req.getParameter("startTime");
		//得到选择好的结束时间
		String endTime = req.getParameter("endTime");
		//得到选择好的课程状态
		String status = req.getParameter("status");
		String property = req.getParameter("property");
		//是否包含子机构
		String isChildOrg = req.getParameter("isChildOrg");
		//精品
		String elite = req.getParameter("elite");
		String coursewareType = req.getParameter("coursewareType") == null ? "0" : req.getParameter("coursewareType");
		//取得登录用户的管理员身份
		OrganizationBo org=	(OrganizationBo) req.getSession().getAttribute(SessionConstants.SESSION_DEFAULT_ORG);
		Map<String, String> con = new HashMap<String, String>();
		con.put("coursewareType", coursewareType);
		con.put("idPath",org.getIdPath());
		if (StringUtils.isNotBlank(order)) {
			con.put("order", order);
		}
		if (StringUtils.isNotBlank(sort)) {
			con.put("sort", sort);
		}
		if (StringUtils.isNotBlank(name)) {
			con.put("name", name);
		}
		//如果知识分类ID为
		if (StringUtils.isNotBlank(knowledgeId) && !"undefined".equals(knowledgeId.trim())
				&& !"0".equals(knowledgeId.trim())) {
			con.put("knowledgeId", knowledgeId);
		}
		//如果机构分类ID为
		if (StringUtils.isNotBlank(orgId) && !"undefined".equals(orgId)) {
			con.put("orgDepId", orgId);
		}
		if (StringUtils.isNotBlank(sn)) {
			con.put("sn", sn);
		}
		if (StringUtils.isNotBlank(tag)) {
			con.put("tag", tag);
		}
		if (StringUtils.isNotBlank(positionIds)) {
			con.put("positionId", positionIds);
		}
		if (StringUtils.isNotBlank(startTime)) {
			con.put("startDt", startTime);
		}
		if (StringUtils.isNotBlank(endTime)) {
			con.put("endDt", endTime);
		}
		if (StringUtils.isNotBlank(status)) {
			con.put("status", status);
		}
		con.put("propertyId", property);
		//注释：是得到是否包含子部门
		con.put("isSub", isChildOrg);
		con.put("coursewareType", coursewareType);
		con.put("history", "0");
		if (StringUtils.isNotBlank(elite)) {
			con.put("elite", elite);
		}
		List<CoursewareBo> list = coursewareService.exportList(con);
		downLoadResourceManageService.downCoursewareResult(res, list);
	}

	//查询所有资源课程（分页查询）
	@RequestMapping(value = "toCoursewareList.html", method = RequestMethod.GET)
	public String getCoursewareList(HttpServletRequest req, HttpServletResponse res, ModelMap model)
			throws IOException, ServiceInvokerException {
		//分页条件
		//取得的排序条件
		String order = req.getParameter("order");
		String sort = req.getParameter("sort");
		//得到选择的知识分类ID
		String knowledgeId = req.getParameter("knoId");
		//得到选择好的机构ID
		String orgId = req.getParameter("orgId");
		//得到选择好的岗位ID
		String positionIds = req.getParameter("positionIds");
		//得到填写好的课程名称
		String name = req.getParameter("name");
		//得到填写好的课程编号
		String bianhao = req.getParameter("sn");
		//得到填写好的标签
		String guanjianzi = req.getParameter("tag");
		//得到选择好的开始时间
		String startTime = req.getParameter("startTime");
		//得到选择好的结束时间
		String endTime = req.getParameter("endTime");
		//得到选择好的课程状态
		String status = req.getParameter("status");
		String property = req.getParameter("property");
		//是否包含子机构
		String isChildOrg = req.getParameter("isChildOrg");
		//是否包含子知识分类
		String isChildKnowledge = req.getParameter("isChildKnowledge");
		//精品
		String elite = req.getParameter("elite");
		String coursewareType = req.getParameter("coursewareType") == null ? "0" : req.getParameter("coursewareType");
		UserInfoBo userd = (UserInfoBo) req.getSession().getAttribute("user");
		OrganizationBo org=	(OrganizationBo) req.getSession().getAttribute(SessionConstants.SESSION_DEFAULT_ORG);
		String user = userd.getUid();
		//取得登录用户的管理员身份
		Integer userType = userd.getType();
		Map<String, String> con = new HashMap<String, String>();

		con.put("idPath",org.getIdPath());
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("coursewareType", coursewareType);
		if (order != null) {
			con.put("order", order);
		}
		if (sort != null) {
			con.put("sort", sort);
		}
		if (name != "") {
			con.put("name", name);
		}
		//如果知识分类ID为
		if (knowledgeId != null && !"undefined".equals(knowledgeId.trim()) && !"".equals(knowledgeId.trim())
				&& !"0".equals(knowledgeId.trim())) {
			con.put("knowledgeId", knowledgeId);
		}
		//如果机构分类ID为
		if (orgId != null && !"".equals(orgId.trim()) && !"undefined".equals(orgId)) {
			con.put("orgDepId", orgId);
		}
		if (bianhao != null && !"".equals(bianhao.trim())) {
			con.put("sn", bianhao);
		}
		if (guanjianzi != null && !"".equals(guanjianzi.trim())) {
			con.put("tag", guanjianzi);
		}
		if (positionIds != null && !"".equals(positionIds.trim())) {
			con.put("positionId", positionIds);
		}
		if (startTime != null && !"".equals(startTime.trim())) {
			con.put("startDt", startTime);
		}
		if (endTime != null) {
			con.put("endDt", endTime);
		}
		if (status != null && !"".equals(status.trim())) {
			con.put("status", status);
		}
		
		//notice 过滤机构和状态信息
		String noticeOrgId = req.getParameter("noticeOrgId");
		String noticeStatus = req.getParameter("noticeStatus");
		if (noticeOrgId != null && !"".equals(noticeOrgId.trim())) {
			con.put("orgDepId", noticeOrgId);
		}
		
		if (noticeStatus != null && !"".equals(noticeStatus.trim())) {
			con.put("status", noticeStatus);
		}

		con.put("propertyId", property);
		con.put("isSub", isChildOrg);
		con.put("isChildKnowledge", isChildKnowledge);
		con.put("coursewareType", coursewareType);
		con.put("history", "0");
		if (elite != null && !"".equals(elite)) {
			con.put("elite", elite);
		}

		String scorm = "scorm"; //SCORM课件,
		String simple = "simple"; //单一入口
		String external = "external";//外链课件
		
		Collection<CoursewareBo> coursewareList = coursewareService.getCoursewares4Page(con);
		model.put("coursewareList", coursewareList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		model.put("scorm", scorm);
		model.put("simple", simple);
		model.put("external", external);
		model.put("user", user);
		model.put("orgId", orgId);
		model.put("userType", userType);
		return "list/res/courseware";
	}

	//分页查询课程图文样式
	@RequestMapping(value = "toCoursewarePicList.html", method = RequestMethod.GET)
	public String getCoursewarePicList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		String order = req.getParameter("order");
		String sort = req.getParameter("sort");
		String knowledgeId = req.getParameter("knoId");
		String orgId = req.getParameter("orgId");
		String positionIds = req.getParameter("positionIds");
		String name = req.getParameter("name");
		String bianhao = req.getParameter("sn");
		String guanjianzi = req.getParameter("tag");
		String startTime = req.getParameter("startTime");
		String endTime = req.getParameter("endTime");
		String status = req.getParameter("status");
		String property = req.getParameter("property");
		String isChildOrg = req.getParameter("isChildOrg");
		String ispub = req.getParameter("ispub");
		String elite = req.getParameter("elite");
		String coursewareType = req.getParameter("coursewareType") == null ? "0" : req.getParameter("coursewareType");
		UserInfoBo userd = (UserInfoBo) req.getSession().getAttribute("user");
		String user = userd.getUid();
		Integer userType = userd.getType();
		String domain = "telecom";
		String resourceId = "";
		String index_url = "";
		String task_id = "";
		String scorm = "scorm";
		String simple = "";
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("coursewareType", coursewareType);
		if (order != null) {
			con.put("order", order);
		}
		if (sort != null) {
			con.put("sort", sort);
		}
		//如果知识分类ID为
		if (knowledgeId != null && !"undefined".equals(knowledgeId.trim()) && !"".equals(knowledgeId.trim())
				&& !"0".equals(knowledgeId.trim())) {
			con.put("knowledgeId", knowledgeId);
		}
		/*
		 * if(knowledgeId != "" || knowledgeId != null || knowledgeId !="undefined") { con.put("knowledgeId",
		 * knowledgeId); }
		 */
		//如果机构分类ID为
		if (orgId != null && !"".equals(orgId.trim()) && !"undefined".equals(orgId)) {
			con.put("orgDepId", orgId);
		}

		if (positionIds != null && !"".equals(positionIds.trim())) {
			con.put("positionId", positionIds);
		}
		con.put("name", name);
		if (bianhao != null && !"".equals(bianhao.trim())) {
			con.put("sn", bianhao);
		}
		con.put("tag", guanjianzi);
		if (startTime != null && !"".equals(startTime.trim())) {
			con.put("startTime", startTime);
		}
		if (endTime != null && !"".equals(endTime.trim())) {
			con.put("endTime", endTime);
		}
		con.put("status", status);
		con.put("propertyId", property);
		con.put("isSub", isChildOrg);
		if (userType != 1) {
			con.put("isPub", ispub);
		}
		//取得登录用户的部门级别
		String userOrgID = userd.getOrg().getOrgId();
		con.put("history", "0");
		con.put("elite", elite);
		Collection<CoursewareBo> coursewareList = coursewareService.getCoursewares4Page(con);
		model.put("coursewareList", coursewareList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		model.put("scorm", scorm);
		model.put("simple", simple);
		model.put("user", user);
		model.put("userType", userType);
		return "list/res/coursewarePic";
	}

	@RequestMapping(value = "exportDocList.html", method = RequestMethod.GET)
	public void exportDocList(HttpServletRequest request, HttpServletResponse response) {

		//分页条件
		//得到选择好的排序方式
		String order = request.getParameter("order");
		String sort = request.getParameter("sort");
		//得到填写好的文档名称
		String name = request.getParameter("name");
		//得到填写好的文档编号
		String bianhao = request.getParameter("sn");
		//得到填写好的标签
		String guanjianzi = request.getParameter("tag");
		//得到选择好的开始时间
		String startTime = request.getParameter("startTime");
		//得到选择好的结束时间
		String endTime = request.getParameter("endTime");
		//得到选择好的状态
		String status = request.getParameter("status");
		String docType = request.getParameter("docType");
		//得到选择好的知识分类
		String knowledgeId = request.getParameter("knoId");
		//得到选择好的机构ID
		String orgId = request.getParameter("orgId");
		//得到选择好的岗位
		String positionIds = request.getParameter("positionIds");
		//是否包含子机构
		String isChildOrg = request.getParameter("isChildOrg");
		//精品
		String elite = request.getParameter("elite");
		UserInfoBo userd = (UserInfoBo) request.getSession().getAttribute("user");
		String user = userd.getUid();
		//得到用户级别
		Integer userType = userd.getType();
		docType = (docType == null || docType.equals("") ? ListCtr.DEFAULT_DOCTYPE : docType);
		Map<String, String> con = new HashMap<String, String>();
		con.put("docType", docType);
		if (StringUtils.isNotBlank(order)) {
			con.put("order", order);
		}
		if (StringUtils.isNotBlank(sort)) {
			con.put("sort", sort);
		}
		//如果知识分类ID为
		if (StringUtils.isNotBlank(knowledgeId) && !"undefined".equals(knowledgeId.trim())
				&& !"0".equals(knowledgeId.trim())) {
			con.put("knowledgeId", knowledgeId);
		}
		/*
		 * if(knowledgeId != "" || knowledgeId != null || knowledgeId !="undefined") { con.put("knowledgeId",
		 * knowledgeId); }
		 */
		//如果机构分类ID为
		if (StringUtils.isNotBlank(orgId) && !"undefined".equals(orgId)) {
			con.put("orgDepId", orgId);
		}
		if (StringUtils.isNotBlank(positionIds)) {
			con.put("positionId", positionIds);
		}
		if (StringUtils.isNotBlank(name)) {
			con.put("name", name);
		}
		if (StringUtils.isNotBlank(bianhao)) {
			con.put("sn", bianhao);
		}
		if (StringUtils.isNotBlank(guanjianzi)) {
			con.put("tag", guanjianzi);
		}
		if (StringUtils.isNotBlank(startTime)) {
			con.put("startDt", startTime);
		}
		if (StringUtils.isNotBlank(endTime)) {
			con.put("endDt", endTime);
		}
		if (StringUtils.isNotBlank(status)) {
			con.put("status", status);
		}
		if (StringUtils.isNotBlank(isChildOrg)) {
			con.put("isSub", isChildOrg);
		}
		if (StringUtils.isNotBlank(elite)) {
			con.put("elite", elite);
		}
		List<DocBo> list = docService.exportDocList(con);
		downLoadResourceManageService.downDocResult(response, list);
	}

	//查询所有文档（分页查询）
	@RequestMapping(value = "toDocList.html", method = RequestMethod.GET)
	public String getDocList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		//得到选择好的排序方式
		String order = req.getParameter("order");
		String sort = req.getParameter("sort");
		//得到填写好的文档名称
		String name = req.getParameter("name");
		//得到填写好的文档编号
		String bianhao = req.getParameter("sn");
		//得到填写好的标签
		String guanjianzi = req.getParameter("tag");
		//得到选择好的开始时间
		String startTime = req.getParameter("startTime");
		//得到选择好的结束时间
		String endTime = req.getParameter("endTime");
		//得到选择好的状态
		String status = req.getParameter("status");
		String docType = req.getParameter("docType");
		//得到选择好的知识分类
		String knowledgeId = req.getParameter("knoId");
		//得到选择好的机构ID
		String orgId = req.getParameter("orgId");
		//得到选择好的岗位
		String positionIds = req.getParameter("positionIds");
		//是否包含子机构
		String isChildOrg = req.getParameter("isChildOrg");
		//是否包含子知识分类
		String isChildKnowledge = req.getParameter("isChildKnowledge");
		//精品
		String elite = req.getParameter("elite");
		UserInfoBo userd = (UserInfoBo) req.getSession().getAttribute("user");
		String user = userd.getUid();
		//得到用户级别
		Integer userType = userd.getType();
		docType = (docType == null || docType.equals("") ? ListCtr.DEFAULT_DOCTYPE : docType);
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("docType", docType);
		if (order != null) {
			con.put("order", order);
		}
		if (sort != null) {
			con.put("sort", sort);
		}
		//如果知识分类ID为
		if (knowledgeId != null && !"undefined".equals(knowledgeId.trim()) && !"".equals(knowledgeId.trim())
				&& !"0".equals(knowledgeId.trim())) {
			con.put("knowledgeId", knowledgeId);
		}
		/*
		 * if(knowledgeId != "" || knowledgeId != null || knowledgeId !="undefined") { con.put("knowledgeId",
		 * knowledgeId); }
		 */
		//如果机构分类ID为
		if (orgId != null && !"".equals(orgId.trim()) && !"undefined".equals(orgId)) {
			con.put("orgDepId", orgId);
		}
		if (positionIds != null && !"".equals(positionIds.trim())) {
			con.put("positionId", positionIds);
		}
		if (name != null) {
			con.put("name", name);
		}
		if (bianhao != null) {
			con.put("sn", bianhao);
		}
		if (guanjianzi != null) {
			con.put("tag", guanjianzi);
		}
		if (startTime != null && !"".equals(startTime.trim())) {
			con.put("startDt", startTime);
		}
		if (endTime != null && !"".equals(endTime.trim())) {
			con.put("endDt", endTime);
		}
		if (status != null) {
			con.put("status", status);
		}
		if (isChildOrg != null) {
			con.put("isSub", isChildOrg);
		}
		if (elite != null) {
			con.put("elite", elite);
		}
		if(isChildKnowledge!= null){
			con.put("isChildKnowledge", isChildKnowledge);
		}
		Collection<DocBo> docList = docService.getDocs4Page(con);

		model.put("docList", docList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		model.put("user", user);
		model.put("userType", userType);
		return "list/res/doc";
	}

	//分页查询文档图文样式
	@RequestMapping(value = "toDocPicList.html", method = RequestMethod.GET)
	public String getDocPicList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		String docType = req.getParameter("docType");
		String order = req.getParameter("order");
		String sort = req.getParameter("sort");
		String knowledgeId = req.getParameter("knoId");
		String orgId = req.getParameter("orgId");
		String positionIds = req.getParameter("positionIds");
		String name = req.getParameter("name");
		String bianhao = req.getParameter("sn");
		String guanjianzi = req.getParameter("tag");
		String startTime = req.getParameter("startTime");
		String endTime = req.getParameter("endTime");
		String status = req.getParameter("status");
		String isChildOrg = req.getParameter("isChildOrg");
		String elite = req.getParameter("elite");
		docType = (docType == null || docType.equals("") ? ListCtr.DEFAULT_DOCTYPE : docType);
		UserInfoBo userd = (UserInfoBo) req.getSession().getAttribute("user");
		String user = userd.getUid();
		Integer userType = userd.getType();
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("docType", docType);
		if (order != null) {
			con.put("order", order);
		}
		if (sort != null) {
			con.put("sort", sort);
		}
		//如果知识分类ID为
		if (knowledgeId != null && !"undefined".equals(knowledgeId.trim()) && !"".equals(knowledgeId.trim())
				&& !"0".equals(knowledgeId.trim())) {
			con.put("knowledgeId", knowledgeId);
		}
		/*
		 * if(knowledgeId != "" || knowledgeId != null || knowledgeId !="undefined") { con.put("knowledgeId",
		 * knowledgeId); }
		 */
		//如果机构分类ID为
		if (orgId != null && !"".equals(orgId.trim()) && !"undefined".equals(orgId)) {
			con.put("orgDepId", orgId);
		}

		if (positionIds != null && !"".equals(positionIds.trim())) {
			con.put("positionId", positionIds);
		}
		con.put("name", name);
		con.put("sn", bianhao);
		con.put("tag", guanjianzi);
		if (startTime != null && !"".equals(startTime.trim())) {
			con.put("startDt", startTime);
		}
		if (endTime != null && !"".equals(endTime.trim())) {
			con.put("endDt", endTime);
		}
		con.put("status", status);
		con.put("isSub", isChildOrg);
		con.put("elite", elite);
		Collection<DocBo> docList = docService.getDocs4Page(con);
		model.put("docList", docList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		model.put("user", user);
		model.put("userType", userType);
		return "list/res/docPic";
	}

	//查询所有资源案例（分页查询）
	@RequestMapping(value = "exportCaseDocList.html", method = RequestMethod.GET)
	public void exportCaseDocList(HttpServletRequest request, HttpServletResponse response) {
		
		//分页条件
		String docType = request.getParameter("docType");
		//得到排序方式
		String order = request.getParameter("order");
		String sort = request.getParameter("sort");
		//得到选择好的知识分类ID
		String knowledgeId = request.getParameter("knoId");
		//得到选择好的机构ID
		String orgId = request.getParameter("orgId");
		//得到选择好的岗位ID
		String positionIds = request.getParameter("positionIds");
		//得到填写好的案例名称
		String name = request.getParameter("name");
		//得到填写好的案例编号
		String bianhao = request.getParameter("sn");
		//得到填写好的关键字
		String guanjianzi = request.getParameter("tag");
		//得到选择好的开始时间
		String startTime = request.getParameter("startTime");
		//得到选择好的结束时间
		String endTime = request.getParameter("endTime");
		//得到选择好的案例状态
		//String status = req.getParameter("status")==null?"1":req.getParameter("status");
		String status = request.getParameter("status");
		//是否包含子机构
		String isChildOrg = request.getParameter("isChildOrg");
		//精品
		String elite = request.getParameter("elite");
		UserInfoBo userd = (UserInfoBo) request.getSession().getAttribute("user");
		String user = userd.getUid();
		//得到登录用户级别
		Integer userType = userd.getType();

		docType = (docType == null || docType.equals("") ? "1" : docType);
		Map<String, String> con = new HashMap<String, String>();
		if (StringUtils.isNotBlank(order)) {
			con.put("order", order);
		}
		if (StringUtils.isNotBlank(sort)) {
			con.put("sort", sort);
		}
		//如果知识分类ID为
		if (StringUtils.isNotBlank(knowledgeId)&&!"undefined".equals(knowledgeId.trim())&& !"0".equals(knowledgeId.trim())) {
			con.put("knowledgeId", knowledgeId);
		}
		/*
		 * if(knowledgeId != "" || knowledgeId != null || knowledgeId !="undefined") { con.put("knowledgeId",
		 * knowledgeId); }
		 */
		//如果机构分类ID为
		if (StringUtils.isNotBlank(orgId)&& !"undefined".equals(orgId)) {
			con.put("orgDepId", orgId);
		}
		con.put("name", name);
		con.put("sn", bianhao);
		con.put("tag", guanjianzi);
		if (StringUtils.isNotBlank(positionIds)) {
			con.put("positionId", positionIds);
		}
		if (StringUtils.isNotBlank(startTime)) {
			con.put("startDt", startTime);
		}
		if (StringUtils.isNotBlank(endTime)) {
			con.put("endDt", endTime);
		}
		con.put("status", status);

		if (StringUtils.isNotBlank(docType)) {
			con.put("docType", docType);
		}
		con.put("isSub", isChildOrg);
		con.put("elite", elite);
		List<DocBo> caseDocList = docService.exportDocList(con);
		downLoadResourceManageService.downCaseDocResult(response, caseDocList);
	}

	//查询所有资源案例（分页查询）
	@RequestMapping(value = "toCaseDocList.html", method = RequestMethod.GET)
	public String getCaseDocList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		String docType = req.getParameter("docType");
		//得到排序方式
		String order = req.getParameter("order");
		String sort = req.getParameter("sort");
		//得到选择好的知识分类ID
		String knowledgeId = req.getParameter("knoId");
		//得到选择好的机构ID
		String orgId = req.getParameter("orgId");
		//得到选择好的岗位ID
		String positionIds = req.getParameter("positionIds");
		//得到填写好的案例名称
		String name = req.getParameter("name");
		//得到填写好的案例编号
		String bianhao = req.getParameter("sn");
		//得到填写好的关键字
		String guanjianzi = req.getParameter("tag");
		//得到选择好的开始时间
		String startTime = req.getParameter("startTime");
		//得到选择好的结束时间
		String endTime = req.getParameter("endTime");
		//得到选择好的案例状态
		//String status = req.getParameter("status")==null?"1":req.getParameter("status");
		String status = req.getParameter("status");
		//是否包含子机构
		String isChildOrg = req.getParameter("isChildOrg");
		//是否包含子知识分类
		String isChildKnowledge = req.getParameter("isChildKnowledge");
		//精品
		String elite = req.getParameter("elite");
		UserInfoBo userd = (UserInfoBo) req.getSession().getAttribute("user");
		String user = userd.getUid();
		//得到登录用户级别
		Integer userType = userd.getType();

		docType = (docType == null || docType.equals("") ? "1" : docType);
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		if (order != null) {
			con.put("order", order);
		}
		if (sort != null) {
			con.put("sort", sort);
		}
		//如果知识分类ID为
		if (knowledgeId != null && !"undefined".equals(knowledgeId.trim()) && !"".equals(knowledgeId.trim())
				&& !"0".equals(knowledgeId.trim())) {
			con.put("knowledgeId", knowledgeId);
		}
		/*
		 * if(knowledgeId != "" || knowledgeId != null || knowledgeId !="undefined") { con.put("knowledgeId",
		 * knowledgeId); }
		 */
		//如果机构分类ID为
		if (orgId != null && !"".equals(orgId.trim()) && !"undefined".equals(orgId)) {
			con.put("orgDepId", orgId);
		}
		con.put("name", name);
		con.put("sn", bianhao);
		con.put("tag", guanjianzi);
		if (positionIds != null && !"".equals(positionIds.trim())) {
			con.put("positionId", positionIds);
		}
		if (startTime != null && !"".equals(startTime.trim())) {
			con.put("startDt", startTime);
		}
		if (endTime != null && !"".equals(endTime.trim())) {
			con.put("endDt", endTime);
		}
		con.put("status", status);

		if (docType != null) {
			con.put("docType", docType);
		}
		con.put("isSub", isChildOrg);
		con.put("isChildKnowledge", isChildKnowledge);
		con.put("elite", elite);
		Collection<DocBo> caseDocList = docService.getDocs4Page(con);

		model.put("caseDocList", caseDocList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		model.put("user", user);
		model.put("userType", userType);
		return "list/res/caseDoc";
	}

	//分页查询资源案例图文样式
	@RequestMapping(value = "toCaseDocPicList.html", method = RequestMethod.GET)
	public String getCaseDocPicList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		String docType = req.getParameter("docType");
		String order = req.getParameter("order");
		String sort = req.getParameter("sort");
		String knowledgeId = req.getParameter("knoId");
		String orgId = req.getParameter("orgId");
		String positionIds = req.getParameter("positionIds");
		String name = req.getParameter("name");
		String bianhao = req.getParameter("sn");
		String guanjianzi = req.getParameter("tag");
		String startTime = req.getParameter("startTime");
		String endTime = req.getParameter("endTime");
		String status = req.getParameter("status") == null ? "1" : req.getParameter("status");
		String isChildOrg = req.getParameter("isChildOrg");
		String elite = req.getParameter("elite");
		docType = (docType == null || docType.equals("") ? "1" : docType);
		UserInfoBo userd = (UserInfoBo) req.getSession().getAttribute("user");
		String user = userd.getUid();
		Integer userType = userd.getType();
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		if (order != null) {
			con.put("order", order);
		}
		if (sort != null) {
			con.put("sort", sort);
		}
		//如果知识分类ID为
		if (knowledgeId != null && !"undefined".equals(knowledgeId.trim()) && !"".equals(knowledgeId.trim())
				&& !"0".equals(knowledgeId.trim())) {
			con.put("knowledgeId", knowledgeId);
		}
		/*
		 * if(knowledgeId != "" || knowledgeId != null || knowledgeId !="undefined") { con.put("knowledgeId",
		 * knowledgeId); }
		 */
		//如果机构分类ID为
		if (orgId != null && !"".equals(orgId.trim()) && !"undefined".equals(orgId)) {
			con.put("orgDepId", orgId);
		}

		if (positionIds != null && !"".equals(positionIds.trim())) {
			con.put("positionId", positionIds);
		}
		con.put("name", name);
		con.put("sn", bianhao);
		con.put("tag", guanjianzi);
		if (startTime != null && !"".equals(startTime.trim())) {
			con.put("startDt", startTime);
		}
		if (endTime != null && !"".equals(endTime.trim())) {
			con.put("endDt", endTime);
		}
		con.put("status", status);
		if (docType != null) {
			con.put("docType", docType);
		}
		con.put("isSub", isChildOrg);
		con.put("elite", elite);
		Collection<DocBo> caseDocList = docService.getDocs4Page(con);
		model.put("caseDocList", caseDocList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		model.put("user", user);
		model.put("userType", userType);
		return "list/res/caseDocPic";
	}

	//查询个人积分列表（分页查询）
	@RequestMapping(value = "toScoreUserList.html", method = RequestMethod.GET)
	public String getScoreUserList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		//得到填写好的名字
		String name = req.getParameter("name");
		//得到选择好的部门ID
		String depId = req.getParameter("depId");
		//得到选择好的机构ID
		String orgId = req.getParameter("orgId");
		//是否包含子机构
		String isChildOrg = req.getParameter("isChildOrg");
		//得到当前登录用户ID
		UserInfoBo userd = (UserInfoBo) req.getSession().getAttribute("user");
		String user = userd.getUid();
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("name", name);
		con.put("dep_id", orgId);
		con.put("isSub", isChildOrg);
		Collection<ScoreUserBo> scoreUserList = scoreUserService.getScoreUsers(con,
			PagerTool.getPageNo(req),
			PagerTool.getPageSize(req));
		model.put("scoreUserList", scoreUserList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return "list/scoreUserList";
	}

	//查询个人奖励积分列表（分页查询）
	@RequestMapping(value = "toScoreUserGainList.html", method = RequestMethod.GET)
	public String getScoreUserGainList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		//得到传过来的用户ID
		String uid = req.getParameter("uid");
		//得到选择好的年份
		String year = req.getParameter("year");
		//得到奖励类别
		String gainType = req.getParameter("gainType");
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("user_id", uid);
		con.put("year", year);
		if (gainType != "" || gainType != null) {
			con.put("gainType", gainType);
		}
		Collection<ScoreUserGainBo> scoreUserGainList = scoreUserGainService.getScoreUserGains(con,
			PagerTool.getPageNo(req),
			PagerTool.getPageSize(req));
		model.put("scoreUserGainList", scoreUserGainList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return "list/scoreUserGainList";
	}

	//查询个人使用积分列表（分页查询）
	@RequestMapping(value = "toScoreUserCostList.html", method = RequestMethod.GET)
	public String getScoreUserCostList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		//得到传过来的用户ID
		String uid = req.getParameter("uid");
		//得到选择好的开始时间
		String begin_time = req.getParameter("begin_time");
		//得到选择好的结束时间
		String end_time = req.getParameter("end_time");
		//得到选择好的使用类型
		String costWay = req.getParameter("costWay_id");
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		if (uid != null && !"".equals(uid.trim())) {
			con.put("user_id", uid);
		}
		con.put("startDate", begin_time);
		con.put("endDate", end_time);
		if (costWay != null && !"".equals(costWay.trim())) {
			con.put("costType", costWay);
		}
		Collection<ScoreUserCostBo> scoreUserCostList = scoreUserCostService.getScoreUserCosts(con,
			PagerTool.getPageNo(req),
			PagerTool.getPageSize(req));
		model.put("scoreUserCostList", scoreUserCostList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return "list/scoreUserCostList";
	}

	//查询个人奖励积分审批列表（分页查询）
	@RequestMapping(value = "score/toScoreUserApplyList.html", method = RequestMethod.GET)
	public String getScoreUserApplyList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		//得到传过来的用户ID
		String uid = req.getParameter("uid");
		//得到选择好的年份
		String year = req.getParameter("year");
		//得到选择好的状态
		String stauts = req.getParameter("stauts");
		//得到奖励类型
		String gainType = req.getParameter("gainType");
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("user_id", uid);
		con.put("year", year);
		con.put("stauts", stauts);
		con.put("gainCategory", gainType);
		Collection<ScoreUserGainBo> scoreUserGainList = scoreUserGainService.getScoreUserGains(con,
			PagerTool.getPageNo(req),
			PagerTool.getPageSize(req));
		model.put("scoreUserGainList", scoreUserGainList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return "list/approvalIntegralApplicationList";
	}

	//查询个人兑换积分审批列表（分页查询）
	@RequestMapping(value = "score/toScoreUserCostApplyList.html", method = RequestMethod.GET)
	public String getScoreUserCostApplyList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		//得到传过来的用户ID
		String uid = req.getParameter("uid");
		//得到选择好的年份
		String year = req.getParameter("year");
		//得到选择好的状态
		String stauts = req.getParameter("stauts");
		//得到选择好的使用类别
		String costWay = req.getParameter("costWay");
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		if (uid != null && !"".equals(uid.trim())) {
			con.put("user_id", uid);
		}
		con.put("year", year);
		con.put("stauts", stauts);
		con.put("costWay", costWay);
		Collection<ScoreUserCostBo> scoreUserCostList = scoreUserCostService.getScoreUserCosts(con,
			PagerTool.getPageNo(req),
			PagerTool.getPageSize(req));
		model.put("scoreUserCostList", scoreUserCostList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return "list/approvalIntegralCostApplicationList";
	}

	//查询部门积分管理列表（分页查询）
	@RequestMapping(value = "toScoreDepList.html", method = RequestMethod.GET)
	public String getScoreDepList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		//得到选择好的年份
		String year = req.getParameter("year");
		//得到穿过来的部门ID
		String depId = req.getParameter("depId");
		//得的名称
		String name = req.getParameter("name");
		String dep_contain = req.getParameter("isChildOrg");
		//得到机构ID
		String orgId = req.getParameter("orgId");
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("year", year);
		con.put("dep_contain", dep_contain);
		con.put("dep_id", orgId);
		con.put("name", name);
		Collection<ScoreDepBo> scoreDepList = scoreDepService.getScoreDeps(con,
			PagerTool.getPageNo(req),
			PagerTool.getPageSize(req));
		try {
			Collection<ScoreDepGainBo> s = scoreDepGainService.getScoreDepGains(null, null, null);
			Collection<ScoreDepCostBo> sc = scoreDepCostService.getScoreDepCosts(null, null, null);
			Long count = s.getPage().getRecords();
			Long co = sc.getPage().getRecords();

			model.put("count", count);
			model.put("co", co);
		} catch (Exception e) {

		}
		model.put("scoreDepList", scoreDepList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return "list/scoreDepList";
	}

	//查询指定部门基础积分列表（分页查询）
	@RequestMapping(value = "toScoreBaseDepList.html", method = RequestMethod.GET)
	public String getToBaseScoreDepList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		String year = req.getParameter("year");
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("year", year);
		String depId = req.getParameter("depId");
		con.put("dep_id", depId);
		con.put("type", "0");
		Collection<ScoreDepGainBo> scoreBaseDepList = scoreDepGainService.getScoreDepGains(con,
			PagerTool.getPageNo(req),
			PagerTool.getPageSize(req));
		model.put("scoreBaseDepList", scoreBaseDepList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return "list/scoreBaseDepList";
	}

	//查询部门使用积分列表（分页查询）
	@RequestMapping(value = "toScoreDepCostList.html", method = RequestMethod.GET)
	public String getScoreDepCostList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		String begin_time = req.getParameter("begin_time");
		String end_time = req.getParameter("end_time");
		String depId = req.getParameter("depId");
		Integer stauts = 1;
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("begin_time", begin_time);
		con.put("dep_id", depId);
		con.put("stauts", stauts.toString());
		con.put("end_time", end_time);
		Collection<ScoreDepCostBo> scoreDepCostList = scoreDepCostService.getScoreDepCosts(con,
			PagerTool.getPageNo(req),
			PagerTool.getPageSize(req));
		model.put("scoreDepCostList", scoreDepCostList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		model.put("depId", depId);
		return "list/scoreDepCostList";
	}

	//查询部门使用积分申请兑换列表（分页查询）
	@RequestMapping(value = "toScoreDepCostApplyList.html", method = RequestMethod.GET)
	public String getScoreDepCostApplyList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		String depId = req.getParameter("depId");
		String year = req.getParameter("year");
		String stauts = req.getParameter("stauts");
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("dep_id", depId);
		con.put("year", year);
		if (stauts != null && !"".equals(stauts.trim())) {
			con.put("stauts", stauts);
		}

		Collection<ScoreDepCostBo> scoreDepCostList = scoreDepCostService.getScoreDepCosts(con,
			PagerTool.getPageNo(req),
			PagerTool.getPageSize(req));
		model.put("scoreDepCostList", scoreDepCostList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		model.put("depId", depId);
		return "list/scoreDepCostApply";
	}

	//查询所有部门兑换积分审批列表（分页查询）
	@RequestMapping(value = "toScoreDepCostAllApplyList.html", method = RequestMethod.GET)
	public String getScoreDepCostAllApplyList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		String stauts = req.getParameter("statusScore");
		String year = req.getParameter("year");
		String depId = req.getParameter("depId");
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("year", year);
		con.put("status", stauts);
		con.put("dep_id", depId);
		Collection<ScoreDepCostBo> scoreDepCostList = scoreDepCostService.getScoreDepCosts(con,
			PagerTool.getPageNo(req),
			PagerTool.getPageSize(req));
		model.put("scoreDepCostList", scoreDepCostList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return "list/scoreDepCostAllApplyList";
	}

	//查询部门积分奖励列表（分页查询）
	@RequestMapping(value = "toScoreDepGainList.html", method = RequestMethod.GET)
	public String getScoreDepApplyList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		String year = req.getParameter("year");
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		String depId = req.getParameter("depId");
		if (depId != null && !"".equals(depId.trim())) {
			con.put("dep_id", depId);
		}
		con.put("year", year);
		Collection<ScoreDepGainBo> scoreDepGainList = scoreDepGainService.getScoreDepGains(con,
			PagerTool.getPageNo(req),
			PagerTool.getPageSize(req));
		model.put("scoreDepGainList", scoreDepGainList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return "list/scoreDepGainList";
	}

	//查询相关部门兑换积分审批列表（分页查询）
	@RequestMapping(value = "toScoreDepCostApplyByIdList.html", method = RequestMethod.GET)
	public String getScoreDepCostByIdApplyList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		String depId = req.getParameter("depId");
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("dep_id", depId);
		Collection<ScoreDepCostBo> scoreDepCostList = scoreDepCostService.getScoreDepCosts(con,
			PagerTool.getPageNo(req),
			PagerTool.getPageSize(req));
		model.put("scoreDepCostList", scoreDepCostList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		System.out.println("scoreDepCostList:" + scoreDepCostList);
		return "list/scoreDepCostByIdApplyList";
	}

	//查询所有精品资源（分页查询）
	@RequestMapping(value = "toLibraryResList.html", method = RequestMethod.GET)
	public String getLibraryResList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		String elite = req.getParameter("elite");
		elite = (elite == null || elite.equals("") ? "1" : elite);
		String resName = req.getParameter("name");
		String rlId = req.getParameter("rlId");
		String type = req.getParameter("type");
		String begTime = req.getParameter("startDt");
		String endTime = req.getParameter("endDt");
		String knowledgeId = req.getParameter("knoId");
		String orgId = req.getParameter("orgId");
		String isChildOrg = req.getParameter("isChildOrg");
		//是否包含子知识分类
		String isChildKnowledge = req.getParameter("isChildKnowledge");
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("type", type);
		con.put("name", resName);
		con.put("sn", rlId);
		con.put("startDt", begTime);
		con.put("endDt", endTime);
		if (knowledgeId != null && !"undefined".equals(knowledgeId.trim()) && !"".equals(knowledgeId.trim())
				&& !"0".equals(knowledgeId.trim())) {
			con.put("knowledgeId", knowledgeId);
		}
		/*
		 * if(knowledgeId != "" || knowledgeId != null || knowledgeId !="undefined") { con.put("knowledgeId",
		 * knowledgeId); }
		 */
		//如果机构分类ID为
		if (orgId != "" || orgId != null || orgId != "undefined") {
			con.put("orgDepId", orgId);
		}
		con.put("elite", elite);
		con.put("isSub", isChildOrg);
		con.put("isChildKnowledge", isChildKnowledge);
		
		//精品设置时间排序
		if(Integer.toString(1).equals(elite))
		{
			con.put("sort_type", Integer.toString(8));
			con.put("sort_order", Integer.toString(0));
		}
		Collection<ResBaseBo> libraryList = resBaseService.getResBases4Page(con);
		model.put("libraryList", libraryList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return "list/res/libraryResList";
	}
	
	
	//查询所有精品资源（分页查询）
		@RequestMapping(value = "exportResources.html", method = RequestMethod.GET)
		public void exportResources (HttpServletRequest request, HttpServletResponse response) {
			//分页条件
			String elite = request.getParameter("elite");
			elite = (elite == null || elite.equals("") ? "1" : elite);
			String resName = request.getParameter("name");
			String rlId = request.getParameter("rlId");
			String type = request.getParameter("type");
			String begTime = request.getParameter("startDt");
			String endTime = request.getParameter("endDt");
			String knowledgeId = request.getParameter("knoId");
			String orgId = request.getParameter("orgId");
			String isChildOrg = request.getParameter("isChildOrg");
			Map<String, String> con = new HashMap<String, String>();
			con.put("type", type);
			con.put("name", resName);
			con.put("sn", rlId);
			con.put("startDt", begTime);
			con.put("endDt", endTime);
			if (StringUtils.isNotBlank(knowledgeId) && !"undefined".equals(knowledgeId.trim())
					&& !"0".equals(knowledgeId.trim())) {
				con.put("knowledgeId", knowledgeId);
			}
			if (StringUtils.isNotBlank(orgId) && orgId != "undefined") {
				con.put("orgDepId", orgId);
			}
			con.put("elite", elite);
			con.put("isSub", isChildOrg);
			List<ResBaseBo> list = resBaseService.exportResources(con);
			downLoadResourceManageService.downResourcesResult(response, list);
		}
	
	

	//查询所有历史资源（分页查询）
	@RequestMapping(value = "toLsResList.html", method = RequestMethod.GET)
	public String getLsResList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		String history = req.getParameter("history");
		history = (history == null || history.equals("") ? "1" : history);
		String resName = req.getParameter("name");
		String rlId = req.getParameter("rlId");
		String type = req.getParameter("type");
		String begTime = req.getParameter("startDt");
		String endTime = req.getParameter("endDt");
		String knowledgeId = req.getParameter("knoId");
		String orgId = req.getParameter("orgId");
		String isChildOrg = req.getParameter("isChildOrg");
		//是否包含子知识分类
		String isChildKnowledge = req.getParameter("isChildKnowledge");
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("type", type);
		con.put("name", resName);
		con.put("sn", rlId);
		con.put("startDt", begTime);
		con.put("endDt", endTime);
		if (knowledgeId != null && !"undefined".equals(knowledgeId.trim()) && !"".equals(knowledgeId.trim())
				&& !"0".equals(knowledgeId.trim())) {
			con.put("knowledgeId", knowledgeId);
		}
		/*
		 * if(knowledgeId != "" || knowledgeId != null || knowledgeId !="undefined") { con.put("knowledgeId",
		 * knowledgeId); }
		 */
		//如果机构分类ID为
		if (orgId != null && !"".equals(orgId.trim()) && !"undefined".equals(orgId)) {
			con.put("orgDepId", orgId);
		}
		con.put("history", history);
		con.put("isSub", isChildOrg);
		con.put("isChildKnowledge", isChildKnowledge);
		Collection<ResBaseBo> lsList = resBaseService.getResBases4Page(con);
		model.put("lsResList", lsList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return "list/res/lsResList";
	}
	
	
	//导出所有历史资源（分页查询）
		@RequestMapping(value = "exportLsResList.html", method = RequestMethod.GET)
		public void exportLsResList(HttpServletRequest request, HttpServletResponse response) {
			//分页条件
			String history = request.getParameter("history");
			history = (history == null || history.equals("") ? "1" : history);
			String resName = request.getParameter("name");
			String rlId = request.getParameter("rlId");
			String type = request.getParameter("type");
			String begTime = request.getParameter("startDt");
			String endTime = request.getParameter("endDt");
			String knowledgeId = request.getParameter("knoId");
			String orgId = request.getParameter("orgId");
			String isChildOrg = request.getParameter("isChildOrg");
			Map<String, String> con = new HashMap<String, String>();
			con.put("type", type);
			con.put("name", resName);
			con.put("sn", rlId);
			con.put("startDt", begTime);
			con.put("endDt", endTime);
			if (knowledgeId != null && !"undefined".equals(knowledgeId.trim()) && !"".equals(knowledgeId.trim())
					&& !"0".equals(knowledgeId.trim())) {
				con.put("knowledgeId", knowledgeId);
			}
			if (orgId != null && !"".equals(orgId.trim()) && !"undefined".equals(orgId)) {
				con.put("orgDepId", orgId);
			}
			con.put("history", history);
			con.put("isSub", isChildOrg);
			List<ResBaseBo> list = resBaseService.exportResources(con);
			downLoadResourceManageService.downResourcesResult(response, list);
		}
	

	//查询所有标签（分页查询）
	@RequestMapping(value = "toTagList.html", method = RequestMethod.GET)
	public String getTagList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//分页条件
		//得到标签名
		String name = req.getParameter("name");
		//得到知识分类ID
		String knowledgeId = req.getParameter("knoId");
		String createType = req.getParameter("createType");
		//得到标签分类
		String tagGroupId = req.getParameter("tagGroupId");
		//得到培训班ID
		String trainClassId = req.getParameter("trainClassId");
		//根据培训计划ID
		String trainPlanId = req.getParameter("trainPlanId");
		Map<String, String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("tagname", name);
		if (knowledgeId != null && !"".equals(knowledgeId.trim())) {
			con.put("knowledgeId", knowledgeId);
		}
		if (createType != null && !"".equals(createType.trim())) {
			con.put("createType", createType);
		}
		if (tagGroupId != null && !"".equals(tagGroupId.trim())) {
			con.put("tagGroupId", tagGroupId);
		}
		if (trainClassId != null && !"".equals(trainClassId.trim())) {
			con.put("trainClassId", trainClassId);
		}
		if (trainPlanId != null && !"".equals(trainPlanId.trim())) {
			con.put("trainPlanId", trainPlanId);
		}
		Collection<TagLibraryBo> tagList = tagLibraryService.getTagLibrarys4Page(con);
		Collection<TagGroupBo> tagGroupList = tagGroupService.getTagGroups4Page(null);
		model.put("tagGroupList", tagGroupList);
		model.put("tagList", tagList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return "list/tagList";
	}

	private String create(String domain, String user, String directory, String index_url) {
		ResourceSignatureProcessor processor = new ResourceSignatureProcessor(domain,
			user,
			directory,
			System.currentTimeMillis() + (1000 * 60 * 60 * 24 * 365));

		processor.sign();
		String sign = processor.getSignature();
		/* /sites/user/sign/index" */
		return String.format("/service/sites/%s/%s/%s", user, sign, index_url);
	}

	@RequestMapping(value = "showU.html", method = RequestMethod.GET)
	private String getState(String task_id, HttpServletRequest req, ModelMap model, HttpServletResponse response)
			throws ServiceInvokerException {
		ServiceMessageReplyBuffer reply = task_getState.invoke(new Object[] { task_id });
		ReplyBody body = reply.getReplyBody(Map.class);
		@SuppressWarnings("unchecked") Map<String, Object> state = (Map<String, Object>) body.getPayload();
		return JacksonSupport.encodeAsString(state);
	}

	@Resource(name = "invoker1.resource.task.submit")
	private ServiceInvoker task_submit;

	@Resource(name = "invoker1.resource.task.getState")
	private ServiceInvoker task_getState;

}
