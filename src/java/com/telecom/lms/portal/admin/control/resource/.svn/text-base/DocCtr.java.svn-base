package com.telecom.lms.portal.admin.control.resource;

import java.io.IOException;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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
import org.springframework.web.servlet.ModelAndView;

import com.myctu.platform.gateway.agent.invoker.ServiceInvoker;
import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.basic.SysCodeBo;
import com.telecom.lms.core.bo.basic.TagLibraryBo;
import com.telecom.lms.core.bo.model.ExportInfoBo;
import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.core.bo.resources.DocBo;
import com.telecom.lms.core.bo.resources.DocCon;
import com.telecom.lms.core.bo.resources.KnowledgeCategoryBo;
import com.telecom.lms.core.bo.resources.ResBaseBo;
import com.telecom.lms.core.bo.resources.ResCategoryBo;
import com.telecom.lms.core.bo.resources.ResDataBo;
import com.telecom.lms.core.bo.resources.ResPicBo;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.core.bo.train.TrainResourceCon;
import com.telecom.lms.core.controller.basedata.OrganizationInfoController;
import com.telecom.lms.core.controller.trainresource.DocumentResourceInfoController;
import com.telecom.lms.core.controller.trainresource.KnowledgeCategoryInfoController;
import com.telecom.lms.core.model.basedata.OrganizationInfoSearchForm;
import com.telecom.lms.core.model.trainresource.DocumentResourceInfoSearchForm;
import com.telecom.lms.core.model.trainresource.KnowledgeCategoryInfoSearchForm;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.service.ConfigInfo;
import com.telecom.lms.portal.admin.util.StringTool;
import com.telecom.lms.sdk.plugin.service.resource.ResourceInfoService;
import com.telecom.lms.sdk.plugin.service.resource.ResouseTaskService;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.basic.SysCodeService;
import com.telecom.lms.sdk.service.basic.SysParamService;
import com.telecom.lms.sdk.service.basic.TagLibraryService;
import com.telecom.lms.sdk.service.down.trainresource.DownLoadDocumentResourceService;
import com.telecom.lms.sdk.service.imp.notice.NoticeService;
import com.telecom.lms.sdk.service.resources.CoursewareService;
import com.telecom.lms.sdk.service.resources.DocService;
import com.telecom.lms.sdk.service.resources.KnowledgeCategoryService;
import com.telecom.lms.sdk.service.resources.ResBaseService;
import com.telecom.lms.sdk.service.resources.ResCategoryService;
import com.telecom.lms.sdk.service.resources.ResDataService;
import com.telecom.lms.sdk.service.resources.ResPicService;
import com.telecom.lms.sdk.service.train.TrainClassService;
import com.telecom.lms.sdk.service.train.TrainResourseService;
import com.telecom.lms.sdk.util.DateTool;
import com.telecom.lms.sdk.util.FileInfoUtil;

@Controller
@RequestMapping("/doc")
public class DocCtr {

	private static final String DEFAULT_PAGESIZE = "20";
	private static final String DEFAULT_DOCTYPE = "0";
	public static final String SRCRESTYPE = "DC";
	public static final String DESTTYPE = "CW";
	private static String algorithm = "Blowfish/ECB/ZeroBytePadding";
	private static final long DEFAULT_DOWNLOAD_EXPIRE = 1000 * 60 * 60 * 24 * 365 * 100;

	private static final long serialVersionUID = 7469039770976979672L;

	private static final String task_name = "convert.swf.document";

	private static final String RESOURCE_ID = "resource_id";

	private static final String RESOURCE_URL = "index_url";
	
	private static final Logger logger = LoggerFactory.getLogger(DocCtr.class);
	
	@Autowired
	DocService docService;
	@Autowired
	CoursewareService coursewareService;
	@Autowired
	CommonService commonService;
	@Autowired
	KnowledgeCategoryService knowledgeCategoryService;
	@Autowired
	SysParamService sysParamService;
	@Autowired
	TagLibraryService tagLibraryService;
	@Autowired
	ResPicService resPicService;
	@Autowired
	ResBaseService resBaseService;
	@Autowired
	TrainResourseService trainResourceService;
	@Autowired
	ResDataService resDataService;
	@Autowired
	OrganizationService organizationService;
	@Autowired
	UserInfoService userInfoService;
	@Autowired
	ResCategoryService resCateSrv;
	@Autowired
	SysCodeService sysCodeService;
	@Autowired
	ResouseTaskService resouseTaskService;
	@Autowired
	ResourceInfoService resourceInfoService;
	@Autowired
	TrainClassService tcService;
	// 得到resourceAgentUrl配置的系统参数
	@Autowired
	ConfigInfo cfg;
	@Autowired
	NoticeService noticeService;

	@Resource
	DocumentResourceInfoController documentResourceInfoController;
	@Resource
	OrganizationInfoController organizationInfoController;
	@Resource
	KnowledgeCategoryInfoController knowledgeCategoryInfoController;
	@Autowired
	DownLoadDocumentResourceService loadDocumentResourceService;

	private @Value("#{export.documentResource_exportLimit}")
	Integer limit;

	private @Value("#{export.documentResource_exportMax}")
	Integer max;

	@RequestMapping(value = "exportList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportList(HttpServletRequest request, HttpServletResponse response) {

		DocumentResourceInfoSearchForm form = queryExport(request);
		form.setMax(limit);

		Integer count = Integer.parseInt(request.getParameter("count"));
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = FileInfoUtil.getFileInfo(address, "documentResource");

		for (int i = 0; i <= count / limit; i++) {
			form.setPage(i * limit);
			List<DocBo> list = documentResourceInfoController.searchList(form);
			loadDocumentResourceService.exportResult(fileInfo, i * limit, list);
		}
		return fileInfo.getName();
	}

	@RequestMapping(value = "exportCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportCount(HttpServletRequest request, HttpServletResponse response) {

		DocumentResourceInfoSearchForm form = queryExport(request);
		Integer count = documentResourceInfoController.searchCount(form);
		logger.debug("export count is : {} ",count);
		ExportInfoBo exportInfoBo = new ExportInfoBo();
		exportInfoBo.setCount(count);
		if (count > max) {
			exportInfoBo.setFlag("confirm");
		}
		return exportInfoBo;
	}

	private DocumentResourceInfoSearchForm queryExport(HttpServletRequest request) {

		DocumentResourceInfoSearchForm form = new DocumentResourceInfoSearchForm();
		form.setOrder(request.getParameter("order"));
		form.setRegular(request.getParameter("sort"));
		form.setName(request.getParameter("name"));
		form.setSn(request.getParameter("sn"));
		form.setTag(request.getParameter("tag"));
		form.setStartTime(request.getParameter("startTime"));
		form.setEndTime(request.getParameter("endTime"));
		form.setStatus(request.getParameter("status"));
		form.setPost(request.getParameter("positionIds"));
		String isChildOrg = request.getParameter("isChildOrg");
		String isChildKnowledge = request.getParameter("isChildKnowledge");
		form.setElite(request.getParameter("elite"));

		String orgId = request.getParameter("orgId");
		if (StringUtils.isNotBlank(orgId) && !"undefined".equals(orgId)) {

			queryOrgExport(orgId, isChildOrg, form);
		}

		String knoId = request.getParameter("knoId");
		if (StringUtils.isNotBlank(knoId) && !"0".equals(knoId.trim()) && !"undefined".equals(knoId.trim())) {

			queryKnowledgeExport(knoId, isChildKnowledge, form);
		}
		return form;
	}

	private void queryOrgExport(String orgId, String isChildOrg , DocumentResourceInfoSearchForm form) {
		
		if (StringUtils.isBlank(isChildOrg) || "1".equals(isChildOrg)) {
			OrganizationInfoSearchForm organizationInfoSearchForm = new OrganizationInfoSearchForm();
			organizationInfoSearchForm.setId(orgId);
			OrganizationBo organizationBo = organizationInfoController.get(organizationInfoSearchForm);
			form.setOrgLeftPriority(organizationBo.getLeftPriority());
			form.setOrgRightPriority(organizationBo.getRightPriority());
		} else {
			form.setOrgId(orgId);
		}
	}
	
    private void queryKnowledgeExport(String knowledgeId, String isChildKnowledge,DocumentResourceInfoSearchForm form){
		
		if (StringUtils.isBlank(isChildKnowledge) || "1".equals(isChildKnowledge)) {
			KnowledgeCategoryInfoSearchForm knowledgeCategoryInfoSearchForm = new KnowledgeCategoryInfoSearchForm();
			knowledgeCategoryInfoSearchForm.setId(knowledgeId);
			KnowledgeCategoryBo knowledgeCategoryBo = knowledgeCategoryInfoController.get(knowledgeCategoryInfoSearchForm);
			form.setKnowledgeLeftPriority(knowledgeCategoryBo.getLeftPriority());
			form.setKnowledgeRightPriority(knowledgeCategoryBo.getRightPriority());
		} else {
			form.setKnowledgeId(knowledgeId);
		}
	}

	// 新增文档或案例名称的重复性检查.
	@RequestMapping(value = "checkNameRepeat.html", method = RequestMethod.POST)
	@ResponseBody
	public boolean checkNameRepeat(HttpServletRequest req) {
		Map<String, String> con = new HashMap<String, String>();
		con.put("name", req.getParameter("name"));
		// 文档,案例范围之内名称不允许重复，因此忽略此查询条件.
		// con.put("docType", req.getParameter("docType")); //（0：文档，1：案例）
		List<DocBo> docBoList = this.docService.getDocs(con);
		if (docBoList == null || docBoList.isEmpty()) {
			return false;
		} else {
			return true;
		}

	}

	// 新增课程名称的重复性检查.
	@RequestMapping(value = "checkNameRepeatUpdate.html", method = RequestMethod.POST)
	@ResponseBody
	public boolean checkNameRepeatUpdate(HttpServletRequest req) {
		Map<String, String> con = new HashMap<String, String>();
		con.put("name", req.getParameter("name"));
		con.put("docType", req.getParameter("docType")); // （0：文档，1：案例）
		String id = req.getParameter("id");
		List<DocBo> docBoList = this.docService.getDocs(con);
		if (docBoList == null || docBoList.isEmpty()
				|| (id != null && docBoList.size() == 1 && id.equals(docBoList.iterator().next().getdId()))) {
			return false;
		} else {
			return true;
		}

	}

	// 查询所有文档（分页查询）
	@RequestMapping(value = "docList.html", method = RequestMethod.GET)
	public ModelAndView getDocList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		// 跳转文档首页
		return new ModelAndView("resource/doc", model);
	}

	// 查询文档详情
	@RequestMapping(value = "docDetails.html", method = RequestMethod.GET)
	public ModelAndView getDocDetails(@RequestParam("dId") String dId,
			@RequestParam("rpId") String rpId,
			HttpServletRequest req,
			HttpServletResponse res,
			@RequestParam("sn") String sn,
			ModelMap model) {
		String history = req.getParameter("his");
		boolean isBool =true; //判断精华资源和历史资源时候显示修改按钮
		// 取得课程的机构
		ResBaseBo resBase = resBaseService.getResBase(rpId);
		DocBo doc = null;
		if(dId!=null&!"".equals(dId)){
			doc = docService.getDoc(dId);
		}else{
			isBool=false;
			Map<String,String> con_ = new HashMap<String,String>();
			con_.put("sn", resBase.getSn());
			con_.put("name", resBase.getName());
			con_.put("docType", "0");
			if(history!=null&&history.equals("1")){
				con_.put("isHistory", "7");
			}
			List<DocBo> docList = docService.getDocs(con_);
			doc = docList.get(0);
		}
		
		
		String orgIdPath = resBase.getOrg().getIdPath();
		model.put("orgIdPath", orgIdPath);
		try {
			String b = doc.getData().get(0).getOutCode();
			model.put("b", b);
		} catch (Exception e) {

		}
		// 得到知识分类
		Map<String, String> conKno = new HashMap<String, String>();
		conKno.put("res_id", doc.getRes().getRbId());
		// 拼接多个知识分类
		List list = new ArrayList();
		String str = "";
		String pos = "";
		try {
			Collection<ResCategoryBo> cKList = resCateSrv.getResCategorySelect(conKno, null, null);
			for (ResCategoryBo c : cKList.getData()) {
				KnowledgeCategoryBo kno = c.getCategory();
				KnowledgeCategoryBo knoUpName = knowledgeCategoryService.getKnowledgeCategory(kno.getUpId());
				String KnoName = kno.getName() + "/" + knoUpName.getName();
				list.add(KnoName);
			}
			for (int i = 0; i < list.size(); i++) {
				str += list.get(i) + "，  ";
			}
			pos = str.substring(0, str.length() - 3);
			model.put("pos", pos);
		} catch (Exception e) {

		}
		model.put("doc", doc);
		model.put("dId", dId);
		model.put("rpId", rpId);
		model.put("sn", sn);
		model.put("isBool", isBool);
		return new ModelAndView("resource/docDetails", model);
	}

	// 跳转修改文档页面
	@RequestMapping(value = "tosaveDocDetails.html", method = RequestMethod.GET)
	public ModelAndView toSaveDocDetails(@RequestParam(required = false) String dId,
			@RequestParam(required = false) String rpId,
			@RequestParam(required = false) String sn,
			HttpServletRequest request,
			ModelMap model) {
		String tcid = request.getParameter("tcid");
		if (StringUtils.isNotBlank(tcid)) {
			TrainClassBo tc = tcService.getTrainClass(tcid);
			model.put("tc", tc);
		}
		String knoNamePath = "";
		// 根据文档的知识分类ID，显示出该知识分类的namePath
		try {
			String knoId = request.getParameter("knoId");
			knoNamePath = knowledgeCategoryService.getKnowledgeCategory(knoId).getNamePath();
			if (knoNamePath == "" || knoNamePath == null) {
				knoNamePath = knowledgeCategoryService.getKnowledgeCategory(knoId).getName();
			}
			model.put("knoId", knoId);
			model.put("knoNamePath", knoNamePath);
		} catch (Exception e) {
			// TODO: handle exception
		}
		if (dId != null) {
			DocBo doc = docService.getDoc(dId);
			model.put("doc", doc);
			model.put("dId", dId);
			model.put("sn", sn);
			// 取得文档上传好的文件，网大倒过来的老数据有的没有文档文件，所以要处理异常
			try {
				String b = doc.getData().get(0).getOutCode();
				model.put("b", b);
				// 资源数据未使用. 2013-5-7注释
				// ResourceInfo docResourceInfo =
				// this.resourceInfoService.getResourceInfo(b);
				// model.put("docResourceInfo", docResourceInfo);
			} catch (Exception e) {
			}
			Map<String, String> conKno = new HashMap<String, String>();
			conKno.put("res_id", doc.getRes().getRbId());
			// 显示
			try {
				ResCategoryBo resCategoryBo = resCateSrv.getResCategorySelect(conKno, null, null).getData().get(0);
				model.put("docCategoryBo", resCategoryBo);
			} catch (Exception e) {
				// TODO: handle exception
			}

		} else {
			model.put("doc", new DocBo());
		}
		model.put("dId", dId);
		model.put("rpId", rpId);
		// 存放资源下载地址URL，读取配置文件
		model.put("agentUrl", cfg.getResourceAgentUrl());
		HttpSession session = request.getSession();
		session.setAttribute("agentUrl", cfg.getResourceAgentUrl());
		// 存放下载地址的开头
		model.put("donwlodResourseURL", cfg.getDonwlodResourseURL());
		return new ModelAndView("resource/saveDocDetails", model);
	}

	// 根据选择的知识分类显出标签
	@RequestMapping(value = "selectTagForDoc.html", method = RequestMethod.GET)
	public ModelAndView selectTagForKnowledge(HttpServletRequest req, ModelMap model) {
		String kcId = req.getParameter("kcId");
		Map<String, String> con = new HashMap<String, String>();
		con.put("knowledgeId", kcId);
		// 根据页面上选择好的知识分类，根据知识分类ID，显示该知识分类下绑定的标签，显示热度值最大的前3个
		con.put("max", "3");
		con.put("order", "usge");
		con.put("sort", "desc");
		Collection<TagLibraryBo> tagList = tagLibraryService.getTagLibrarys4Page(con);
		model.put("tagList", tagList);
		return new ModelAndView("resource/selectTagByDoc", model);
	}

	// 修改新增文档
	@RequestMapping(value = "doSaveDocDetails.html", method = RequestMethod.POST)
	public String doSaveDocDetails(DocCon con, HttpServletRequest req, ModelMap model) {
		String[] dep_ids = req.getParameterValues("dep_ids"); // 新增岗位ID.
		String[] dep_Names = req.getParameterValues("dep_Names");// 新增岗位名称.
		String str = null;
		if (dep_ids != null) {
			str = "";
			for (int i = 0; i < dep_ids.length; i++) {
				if (dep_ids[i] != null && !"".equals(dep_ids[i])) {
					str += dep_ids[i] + ",";
				}
			}
			con.setPositionIds(str);
		}

		if (dep_Names != null) {
			str = "";
			for (int i = 0; i < dep_Names.length; i++) {
				if (dep_Names[i] != null && !"".equals(dep_Names[i])) {
					str += dep_Names[i] + ",";
				}
			}
			con.setPositionNames(str);
		}
		// 获得培训班id，用于从培训班中创建文档
		String tcid = req.getParameter("tcid");

		// 得到创建时间
		String docID = req.getParameter("dId");
		GregorianCalendar gc = new GregorianCalendar();
		Date now = gc.getTime();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		// 如果问新建文档，需要保存文档创建时间，创建人，发布状态为0未发布，是否为精品0，是否为历史0
		// if(docID == null || docID == "")
		if (docID == null || "".equals(docID)) {
			con.setCreate_date(format.format(now));
			con.setCreater_id(user.getUid());
			con.setStatus(0);
			con.setHistory(0);
			con.setElite(0);
		}
		// 如果为修改文档操作，则需要保存修改时间为当前时间，修改人为当前登录用户
		// else if(docID != null && docID != "")
		else {
			con.setUpdate_date(format.format(now));
			con.setUpdater_id(user.getUid());
		}
		// 保存文档类型为0，代表上传的是文档
		con.setDocType(0);

		// 保存岗位，根据页面上选择好的岗位，支持多个岗位，取得岗位的ID，名称，用，隔开
		try {
			this.setDepIds(con, req);
		} catch (Exception e) {
			e.printStackTrace();
		}
		// 保存页面上选择好的知识分类
		String kno_id = req.getParameter("kno_id");
		con.setKnowledgeId(kno_id);

		// 如果为新建文档操作，则需要保存文档的编号规则，根据页面上选择好的知识分类，用知识分类编号+SDK提供的流水号进行拼接
		if (docID == "" || docID == null) {
			KnowledgeCategoryBo k = knowledgeCategoryService.getKnowledgeCategory(kno_id);
			String knoSn = k.getSn();
			SysCodeBo sysCodeBo = sysCodeService.getSysCodeDoc();
			String s = sysCodeBo.getMaxSerial().toString();
			DecimalFormat df = new DecimalFormat("0000");
			String j = df.format(Integer.parseInt(sysCodeBo.getMaxSerial().toString()) + 1);
			String docSn = "CS-" + StringTool.getKnoSnStr(knoSn) + "-SN" + j;
			con.setSn(docSn);
		}

		String domain = "telecom";
		String resourceId = "";
		String index_url = "";
		String task_id = "";

		// 如果是从培训班新建，则状态默认已发布
		if (StringUtils.isNotEmpty(tcid)) {
			con.setStatus(1);
		}
		Return re = docService.newDoc(con);

		String next = req.getParameter("_next");
		String back = req.getParameter("_back");
		String outCode = req.getParameter("outCode");
		String uplodSrc = req.getParameter("uplodSrc");
		String dID = req.getParameter("dId");
		if (re != null) {
			// 保存页面上上传好的文档图片
			if (outCode != null && outCode != "") {
				ResPicBo cpc = new ResPicBo();
				cpc.setOutCode(outCode);
				if (dID != "" && dID != null) {
					DocBo doc = docService.getDoc(dID);
					cpc.setResId(doc.getRes().getRbId());
					if (doc.getRes().getPic() != null) {
						cpc.setRpId(doc.getRes().getPic().getRpId());
					}
				}
				if (dID == "" || dID == null) {
					String resBaseId = (String) re.getContent();
					cpc.setResId(resBaseId);
				}
				resPicService.newResPic(cpc);
			}

		}
		// 保存页面上上传好的文档附件
		if (uplodSrc != null && uplodSrc != null) {
			ResDataBo cda = new ResDataBo();
			cda.setOutCode(uplodSrc);
			if (dID != "" && dID != null) {
				DocBo doc = docService.getDoc(dID);
				cda.setResId(doc.getRes().getRbId());
				if (doc.getData() != null) {
					try {
						String rdId = doc.getData().get(0).getRdId();
						cda.setRdId(rdId);
					} catch (Exception e) {
					}
				}
			}
			if (dID == "" || dID == null) {
				String resBaseId = (String) re.getContent();
				cda.setResId(resBaseId);
			}
			cda.setType(0);
			resDataService.newResData(cda);

			try {
				resourceId = cda.getOutCode();
				resouseTaskService.catalog(task_name, resourceId);

			} catch (Exception e) {

			}

		}

		// 判断是否有培训班id，跳转到培训班课程设置页面
		if (StringUtils.isNotBlank(tcid)) {
			if (re != null && re.getCode() != null) {
				TrainResourceCon tr = new TrainResourceCon();
				tr.settClass_id(tcid);
				tr.setResDoc_id(re.getCode());
				tr.setCreateDt(new Date());
				tr.setOperator_id(user.getUid());
				trainResourceService.saveAndUpdateTrainResourceDoc(tr);
			}
			return "redirect:/trainclass/course.html?tag=doc&tcid=" + tcid;
		}

		if (next != null && !next.equals("")) {
			return "redirect:docList.html?closeSelf=true";
		} else if (back != null && !back.equals("")) {
			return "redirect:docList.html?closeSelf=true";
		} else {
			DocBo docc = docService.getDoc(con.getdId());
			String dId = docc.getdId();
			model.put("dId", dId);
			model.put("doc", docc);
			return "redirect:docList.html?closeSelf=true";
		}

	}

	/**
	 * 设置适用岗位信息，
	 * 
	 * @param con
	 * @param req
	 */
	private void setDepIds(DocCon con, HttpServletRequest req) {
		String[] dep_ids = req.getParameterValues("dep_ids"); // 新增岗位ID.
		String[] dep_Names = req.getParameterValues("dep_Names");// 新增岗位名称.
		/*
		 * System.out.println("dep_ids:" + Arrays.toString(dep_ids)); System.out.println("dep_Names:" +
		 * Arrays.toString(dep_Names)); System.out.println("positionIds:" +
		 * Arrays.toString(req.getParameterValues("positionIds"))); System.out.println("positionNames:" +
		 * Arrays.toString(req.getParameterValues("positionNames")));
		 */
		String str = "";
		String pos = "";
		String strName = "";
		String posName = "";
		if (dep_ids != null) {
			for (int i = 0; i < dep_ids.length; i++) {
				if (dep_ids[i] != null && !"".equals(dep_ids[i])) {
					str += dep_ids[i] + ",";
				}
			}
		}
		String[] positionIdArray = req.getParameterValues("positionIds"); // 修改岗位ID.
		if (positionIdArray != null) {
			for (String s : positionIdArray) {
				if (s != null && !"".equals(s)) {
					str += (s + ",");
				}
			}
		}
		if (dep_ids != null || positionIdArray != null) {
			pos = str.substring(0, str.length() - 1);
			con.setPositionIds(pos);
		}

		if (dep_Names != null) {
			for (int i = 1; i < dep_Names.length; i++) {
				if (dep_Names[i] != null && !"".equals(dep_Names[i])) {
					if (i != dep_Names.length - 1) {
						strName += dep_Names[i] + ",";
					} else {
						strName += dep_Names[i];
					}
				}
			}
		}
		String[] positionNameArray = req.getParameterValues("positionNames");// 修改岗位名称.
		if (positionNameArray != null) {
			for (int i = 1; i < positionNameArray.length; i++) {
				if (positionIdArray[i] != null && !"".equals(positionIdArray[i])) {
					if (i != positionNameArray.length - 1) {
						strName += positionNameArray[i] + ",";
					} else {
						strName += positionNameArray[i];
					}
				}
			}
		}
		if (dep_Names != null || positionNameArray != null) {
			posName = strName;
			con.setPositionNames(posName);
			con.setApplyObject(posName);
		}
	}

	// 批量删除资源文档
	@RequestMapping(value = "deleteDoc.html", method = RequestMethod.POST)
	@ResponseBody
	public Return deleteDocByItems(HttpServletRequest req,
			HttpServletResponse res,
			@RequestParam("groupTypeId") String items) {
		Return ret = docService.removeDocs(items);
		if (ret != null) {
			OrganizationBo organizationBo = (OrganizationBo) req.getSession().getAttribute("defaultOrg");
			noticeService.noticeResource(organizationBo.getOrgId());
		}
		return ret;
	}

	// 批量删除资源文档图文
	@RequestMapping(value = "deleteDocPic.html", method = RequestMethod.POST)
	@ResponseBody
	public Return deleteDocPicByItems(HttpServletRequest req,
			HttpServletResponse res,
			@RequestParam("groupTypeId") String items) {

		Return re = docService.removeDocs(items);
		if (re != null) {
		}
		return re;
	}

	// 设置精品课程
	@RequestMapping(value = "doSaveDocRes.html", method = RequestMethod.POST)
	@ResponseBody
	public Return doSaveDocRes(@RequestParam("groupTypeId") String dId, HttpServletRequest req, ModelMap model) {
		Return result = new Return("success");// 操作对于页面显示来说总是成功的.
		if (dId != null) {
			String[] cIdArray = dId.split(",");
			for (String s : cIdArray) {
				if (s != null && !"".equals(s.trim())) {
					try {
						DocCon con = new DocCon();
						DocBo c = docService.getDoc(s);
						if ((c.getRes().getElite() == null || c.getRes().getElite() == 0) && c.getRes().getIsPub() == 1) {
							con.setdId(s);
							con.setElite(1);
							//此处设为精华资源时添加设置时间，以做student精品资源排序只用 by Luchao LMSWD-3633
							con.setElite_date(DateTool.getNormal());
							
							docService.newDoc(con);
						}
					} catch (Exception e) {
						// logger.error(e.getMessage());
						continue;
					}
				}
			}
		}
		return result;
	}

	// 设置历史课程
	@RequestMapping(value = "doSaveDocByLs.html", method = RequestMethod.POST)
	@ResponseBody
	public Return doSaveDocByLs(HttpServletRequest req, ModelMap model) {
		DocCon con = new DocCon();
		String dId = req.getParameter("groupTypeId");
		DocBo doc = docService.getDoc(dId);
		// 如果页面上选择好了一个文档并且该文档还未归纳为历史资源则操作
		if (doc.getRes().getElite() == null || doc.getRes().getElite() == 0) {
			con.setdId(dId);
			con.setHistory(1);
			Return re = docService.newDoc(con);
			return re;
		}
		return null;

	}

	/**
	 * 更改文档状态
	 */
	@RequestMapping(value = "updateDoc.html", method = RequestMethod.POST)
	@ResponseBody
	public Return updateStatus(DocCon con, HttpServletRequest request) {
		UserInfoBo userd = (UserInfoBo) request.getSession().getAttribute("user");
		String user = userd.getUid();
		con.setUpdater_id(user);
		GregorianCalendar gc = new GregorianCalendar();
		Date now = gc.getTime();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		con.setUpdate_date(format.format(now));
		Return re = docService.newDoc(con);
		/* 代办事项通知 */
		OrganizationBo organizationBo = (OrganizationBo) request.getSession().getAttribute("defaultOrg");
		if (userd.getType() == 3) {
			noticeService.noticeResource(organizationBo.getOrgId());
		}
		return re;
	}

	// 根据岗位Id得到岗位的全名字
	@RequestMapping(value = "toShowAllOrg.html", method = RequestMethod.GET)
	@ResponseBody
	public String toShowAllOrg(HttpServletRequest req, ModelMap model, HttpServletResponse response) throws IOException {
		try {
			String orgId = req.getParameter("orgId");
			String orgName = organizationService.getOrganizationNamepath(orgId).substring(1);
			return orgName;
		} catch (Exception e) {
		}
		return null;
	}

	// 悬浮根据岗位Id得到岗位的全名字
	@RequestMapping(value = "toShowAllOrgName.html", method = RequestMethod.GET)
	@ResponseBody
	public String toShowAllOrgName(HttpServletRequest req, ModelMap model, HttpServletResponse response)
			throws IOException {
		try {
			String orgId = req.getParameter("orgId");
			String str = "";
			String pos = "";
			List list = new ArrayList();
			OrganizationBo organizationBo = organizationService.getOrganization(orgId);
			String orgIdPath = organizationBo.getIdPath();
			String[] strArray = null;
			strArray = orgIdPath.split("/");
			for (String id : strArray) {
				String orgName = organizationService.getOrganization(id).getName();
				list.add(orgName);
			}
			list.remove(0);
			for (int i = 0; i < list.size(); i++) {
				str += list.get(i) + "/";
			}
			pos = str.substring(0, str.length() - 1);
			if (pos != "12345") {
				return pos;
			}

		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}

	@Resource(name = "invoker1.resource.task.submit")
	private ServiceInvoker task_submit;
}
