package com.telecom.lms.portal.admin.control.demand;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
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
import org.springframework.web.servlet.ModelAndView;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.demand.DmdDepBo;
import com.telecom.lms.core.bo.demand.DmdDepCon;
import com.telecom.lms.core.bo.demand.DmdDepItemCon;
import com.telecom.lms.core.bo.demand.DmdItemBo;
import com.telecom.lms.core.bo.demand.DmdTopicBo;
import com.telecom.lms.core.bo.model.ExportInfoBo;
import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.core.controller.trainneed.DepartmentTrainInfoController;
import com.telecom.lms.core.model.trainneed.DepartmentTrainInfoSearchForm;
import com.telecom.lms.portal.admin.control.auth.UserCtr;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.basic.SysParamService;
import com.telecom.lms.sdk.service.demand.DmdDepService;
import com.telecom.lms.sdk.service.demand.DmdItemService;
import com.telecom.lms.sdk.service.demand.DmdTopicService;
import com.telecom.lms.sdk.service.demand.param.DmdDepParam;
import com.telecom.lms.sdk.service.demand.param.DmdItemParam;
import com.telecom.lms.sdk.service.demand.param.DmdTopicParam;
import com.telecom.lms.sdk.service.down.trainneed.DownLoadDepartmentTrainService;
import com.telecom.lms.sdk.util.DateTool;
import com.telecom.lms.sdk.util.FileInfoUtil;

/**
 * 培训部门需求
 * 
 * @author yanlei
 */
@Controller
@RequestMapping("/demand")
public class DemandCtr {
	
	private static final Logger log = LoggerFactory.getLogger(DemandCtr.class);
	
	@Autowired
	private DmdDepService ddService;
	@Autowired
	private DmdItemService diService;
	@Autowired
	private DmdTopicService dtService;
	@Autowired
	private SysParamService spService;
	@Autowired
	private OrganizationService organizationService;
	@Autowired
	private UserInfoService userInfoService;
	@Autowired
	private DownLoadDepartmentTrainService downLoadDepartmentTrainService;
	@Resource
	private DepartmentTrainInfoController departmentTrainInfoController;
	
	private @Value("#{export.departmentTrain_exportLimit}")
	Integer limit;

	private @Value("#{export.departmentTrain_exportMax}")
	Integer max;

	/**
	 * 导出部门培训需求
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "exportList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportList(HttpServletRequest request, HttpServletResponse response) {

		DepartmentTrainInfoSearchForm form = queryExport(request);
		form.setMax(limit);
		int count = Integer.parseInt(request.getParameter("count"));
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = FileInfoUtil.getFileInfo(address, "departmentTrain");

		for (int i = 0; i <= count / limit; i++) {
			form.setPage(i * limit);
			List<DmdDepBo> list = departmentTrainInfoController.searchList(form);
			downLoadDepartmentTrainService.exportDepartmentTrainResult(fileInfo, i * limit, list);
		}
		return fileInfo.getName();
		
	}

	public DepartmentTrainInfoSearchForm queryExport(HttpServletRequest request) {

		String typeId = request.getParameter("type");
		String year = request.getParameter("year");
		String item_id = request.getParameter("item_id");
		String isChildDep = request.getParameter("isChildDep");
		String dep_id = request.getParameter("dep_id");
		DepartmentTrainInfoSearchForm form = new DepartmentTrainInfoSearchForm();
		if (StringUtils.isNotBlank(year)) {
			form.setYear(Integer.parseInt(year));
		}
		form.setType(typeId);
		form.setContent(item_id);
		if (StringUtils.isNotBlank(isChildDep)) {
			form.setIsSub(Integer.parseInt(isChildDep));
		}
		form.setOrgId(dep_id);
		return form;
	}

	@RequestMapping(value = "exportCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportCount(HttpServletRequest request, HttpServletResponse response) {

		DepartmentTrainInfoSearchForm form = queryExport(request);
		int count = departmentTrainInfoController.searchCount(form);
		log.debug("export count is : {} ", count);
		ExportInfoBo exportInfoBo = new ExportInfoBo();
		exportInfoBo.setCount(count);
		if (count > max) {
			exportInfoBo.setFlag("confirm");
		}
		return exportInfoBo;
	}

	/**
	 * 部门培训需求分页
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "demandDepList.html", method = RequestMethod.GET)
	public String getOutTrainClass(HttpServletRequest request, ModelMap model) {
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		model.put("user", user);
		String page_fn = request.getParameter("pagefn");
		String typeId = request.getParameter("type");
		String year = request.getParameter("year");
		String item_id = request.getParameter("item_id");
		String isChildDep = request.getParameter("isChildDep");
		String dep_id = request.getParameter("dep_id");
		String depOrOrgType = request.getParameter("depOrOrgType");
		String page = request.getParameter("page") == null ? "1" : request.getParameter("page");
		String max = request.getParameter("max") == null ? "10" : request.getParameter("max");
		Collection<DmdDepBo> dmdDepList = new Collection<DmdDepBo>();
		DmdDepParam ddp = new DmdDepParam();
		ddp.setTypeId(typeId);
		ddp.setItemId(item_id);
		ddp.setYear(year);
		ddp.setIsSub(isChildDep);
		ddp.setOrgDepId(dep_id);
		ddp.setLogo(depOrOrgType);
		ddp.setMax(max);
		ddp.setPage(page);
		dmdDepList = ddService.getDmdDeps4Page(ddp);
		model.put("dmdDepList", dmdDepList);
		model.put("page_fn", page_fn);
		return "demand/demandDepList";
	}

	/**
	 * 跳转部门培训需求首页
	 */
	@RequestMapping(value = "demandDepIndex.html", method = RequestMethod.GET)
	public ModelAndView turnIndex(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//新建完成后，返回页面中需要在部门树中自动展开新建页面中保存的部门
		String oriDepId = req.getParameter("oriDepId");
		if (null != oriDepId && !"".equals(oriDepId)) {
			model.put("oriDepId", oriDepId);
		}
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		Map<String, String> con = new HashMap<String, String>();
		con.put("uid", user.getUid());
		OrganizationBo ob = userInfoService.getManageOrg(con);
		model.put("orgDepOriId", ob.getOrgId());

		DmdItemParam dtp = new DmdItemParam();
		dtp.setStatus("1");
		dtp.setMax(null);
		dtp.setPage(null);
		List<DmdItemBo> list = diService.getDmdItems(dtp);
		model.put("dmdItemList", list);

		List<SysParamBo> listT = spService.getDmdDepTypes();
		model.put("list", listT);

		DmdTopicParam dtp1 = new DmdTopicParam();
		dtp1.setMax(null);
		dtp1.setPage(null);
		List<DmdTopicBo> listTopic = dtService.getDmdTopics(dtp1);
		model.put("dmdTopicList", listTopic);
		return new ModelAndView("demand/demandDepIndex", model);
	}

	/**
	 * 跳转新建部门培训需求
	 */
	@RequestMapping(value = "demandDepNew.html", method = RequestMethod.GET)
	public ModelAndView newNeedInquiry(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//首页左侧机构数所选内容
		String orgDepId = req.getParameter("orgDepId");
		if (null != orgDepId && !"".equals(orgDepId)) {
			OrganizationBo orgDep = organizationService.getOrganization(orgDepId);
			model.put("orgDepId", orgDep.getOrgId());
			model.put("orgDepName", orgDep.getName());
		}
		String dpid = req.getParameter("dpId");
		String ddiId = req.getParameter("ddiId");
		if (null != dpid) {
			DmdDepParam dtp = new DmdDepParam();
			dtp.setId(dpid);
			DmdDepBo dtb = ddService.getDmdDep(dtp);
			model.put("dmdDep", dtb);
		} else {
			DmdDepBo dtb = new DmdDepBo();
			//dtb.setDdis();
			model.put("dmdDep", dtb);
		}

		DmdItemParam dtp = new DmdItemParam();
		dtp.setStatus("1");
		dtp.setMax(null);
		dtp.setPage(null);
		List<DmdItemBo> list = diService.getDmdItems(dtp);
		model.put("dmdItemList", list);

		List<SysParamBo> listT = spService.getDmdDepTypes();
		model.put("list", listT);

		DmdTopicParam dtp1 = new DmdTopicParam();
		dtp1.setStatus("1");
		dtp1.setMax(null);
		dtp1.setPage(null);
		List<DmdTopicBo> listTopic = dtService.getDmdTopics(dtp1);
		if (listTopic.size() != 0) {
			model.put("topic_id", listTopic.get(0).getDtId());
			model.put("year", listTopic.get(0).getYear());
		}
		model.put("listTopic", listTopic);
		model.put("dpId", dpid);
		model.put("ddiId", ddiId);
		return new ModelAndView("demand/demandDepNew1", model);
	}

	/**
	 * 跳转修改部门培训需求
	 */
	@RequestMapping(value = "demandDepModify.html", method = RequestMethod.GET)
	public ModelAndView demandDepModify(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		String dpid = req.getParameter("dpId");
		String ddiId = req.getParameter("ddiId");
		if (null != dpid) {
			DmdDepParam dtp = new DmdDepParam();
			dtp.setId(dpid);
			DmdDepBo dtb = ddService.getDmdDep(dtp);
			model.put("dmdDep", dtb);
		} else {
			DmdDepBo dtb = new DmdDepBo();
			//dtb.setDdis();
			model.put("dmdDep", dtb);
		}

		DmdItemParam dtp = new DmdItemParam();
		dtp.setStatus("1");
		dtp.setMax(null);
		dtp.setPage(null);
		List<DmdItemBo> list = diService.getDmdItems(dtp);
		model.put("dmdItemList", list);

		List<SysParamBo> listT = spService.getDmdDepTypes();
		model.put("list", listT);

		DmdTopicParam dtp1 = new DmdTopicParam();
		dtp1.setStatus("1");
		dtp1.setMax(null);
		dtp1.setPage(null);
		List<DmdTopicBo> listTopic = dtService.getDmdTopics(dtp1);
		if (listTopic.size() != 0) {
			model.put("topic_id", listTopic.get(0).getDtId());
			model.put("year", listTopic.get(0).getYear());
		}
		model.put("listTopic", listTopic);
		model.put("dpId", dpid);
		model.put("ddiId", ddiId);

		/////判断对于修改页面内容的操作权限/////
		String flag = req.getParameter("flag");
		if (null != flag && !"".equals(flag)) {
			model.put("flag", flag); //flag=1表示修改 flag=0表示只读
		}
		return new ModelAndView("demand/demandDepNew", model);
	}

	/**
	 * 保存新建后的部门培训需求
	 */
	@RequestMapping(value = "saveDmdDep.html", method = RequestMethod.POST)
	public ModelAndView saveItem(HttpServletRequest req, ModelMap model, DmdDepItemCon ddic, DmdDepCon ddc) {
		if ("".equals(ddc.getDpId())) {
			ddc.setDpId(null);
		}
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		OrganizationBo organizationBo = (OrganizationBo) req.getSession().getAttribute("defaultOrg");
		ddc.setCreater_id(user.getUid());
		ddc.setDefault_org_id(organizationBo.getOrgId()); //20130320修改保存挂靠在当前管辖范围节点下 by LTC
		ddc.setCreateTm(DateTool.getNowShort());
		ddc.setStatus(0); //默认为未完成
		if (null == ddc.getType_id() || "".equals(ddc.getType_id())) { //20130314 修改时不提示选择需求类别
			String type_id_modify = req.getParameter("type_id_modify");
			if (null != type_id_modify && !"".equals(type_id_modify)) {
				ddc.setType_id(type_id_modify);
			} else {
				String oriTypeId = req.getParameter("oriTypeId");
				ddc.setType_id(oriTypeId);
			}
		}
		String oriDepId = ddc.getDep_id();
		if (null == oriDepId || "".equals(oriDepId)) {
			String orgDepIdDefault = req.getParameter("orgDepIdDefault"); //当在新建页面不点击部门树则按之前左侧部门树带进来的DepId保存 20130312 by LTC
			ddc.setDep_id(orgDepIdDefault);
		}//如果这段代码执行则下段IF不会执行
		if (null == ddc.getDep_id() || "".equals(ddc.getDep_id())) { //当部门id为空时默认操作用户所属部门id
			String dmdDepIdModify = req.getParameter("dmdDepIdModify"); //保持原值
			ddc.setDep_id(dmdDepIdModify);
		}
		String remark = ddc.getRemark();
		if (null == remark || remark.equals("")) { //当修改时将备注置空, 保存操作将备注也置空 20130419 by LTC
			ddc.setRemark("");
		}
		Return re = ddService.saveDmdDep(ddc);

		if (!"fail".equals(re.getCode())) {
			if ("success".equals(re.getCode())) {
				ddic.setDmd_id(ddc.getDpId());
			} else {
				ddic.setDmd_id(re.getCode());
			}
			Return res = ddService.saveDmdDepItem(ddic);
		}
		///////20130321当未点击左侧部门筛选树时使用当前用户所辖范围Id做容错处理 by LTC//////
		String defaultOriDepId = oriDepId;
		if (null == defaultOriDepId || "".equals(defaultOriDepId)) {
			defaultOriDepId = organizationBo.getOrgId();
		}
		return new ModelAndView("redirect:demandDepIndex.html?oriDepId=" + defaultOriDepId, model);
	}

	/**
	 * 批量删除部门培训需求
	 */
	@RequestMapping(value = "deleteDemandDep.html", params = "method=remove", method = RequestMethod.POST)
	@ResponseBody
	public String deleteDmdDeps(HttpServletRequest req, HttpServletResponse res, @RequestParam("dpIds") String ids) {
		DmdDepParam dtp = new DmdDepParam();
		dtp.setId(ids);
		Return re = ddService.removeDmdDeps(dtp);
		return (String) re.getContent();
	}
}
