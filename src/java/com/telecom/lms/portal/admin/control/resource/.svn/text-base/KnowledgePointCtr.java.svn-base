package com.telecom.lms.portal.admin.control.resource;

import java.io.IOException;
import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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

import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.basic.SysCodeBo;
import com.telecom.lms.core.bo.model.ExportInfoBo;
import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.core.bo.resources.KnowledgeCategoryBo;
import com.telecom.lms.core.bo.resources.KnowledgePointBo;
import com.telecom.lms.core.bo.resources.KnowledgePointCon;
import com.telecom.lms.core.controller.trainresource.KnowledgePointInfoController;
import com.telecom.lms.core.model.trainresource.KnowledgePointInfoSearchForm;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.basic.SysCodeService;
import com.telecom.lms.sdk.service.down.trainresource.DownLoadKnowledgePointService;
import com.telecom.lms.sdk.service.resources.KnowledgeCategoryService;
import com.telecom.lms.sdk.service.resources.KnowledgePointService;
import com.telecom.lms.sdk.util.FileInfoUtil;

@Controller
@RequestMapping("/knowledgePoint")
public class KnowledgePointCtr {

	private static final Logger logger = LoggerFactory.getLogger(KnowledgePointCtr.class);

	@Autowired
	KnowledgePointService knowledgePointService;
	@Autowired
	CommonService commonService;
	@Autowired
	KnowledgeCategoryService knowledgeCategoryService;
	@Autowired
	OrganizationService organizationService;
	@Autowired
	SysCodeService sysCodeService;
	@Autowired
	DownLoadKnowledgePointService downLoadKnowledgePointService;

	private @Value("#{export.knowledgePoint_exportLimit}")
	Integer limit;

	private @Value("#{export.knowledgePoint_exportMax}")
	Integer max;

	@Resource
	KnowledgePointInfoController knowledgePointInfoController;

	@RequestMapping(value = "exportList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportList(HttpServletRequest request, HttpServletResponse response) {

		KnowledgePointInfoSearchForm form = queryExport(request);
		form.setMax(limit);

		Integer count = Integer.parseInt(request.getParameter("count"));
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = FileInfoUtil.getFileInfo(address, "knowledgePoint");

		for (int i = 0; i <= count / limit; i++) {
			form.setPage(i * limit);
			List<KnowledgePointBo> list = knowledgePointInfoController.searchList(form);
			downLoadKnowledgePointService.exportResult(fileInfo, i * limit, list);
		}
		return fileInfo.getName();
	}

	@RequestMapping(value = "exportCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportCount(HttpServletRequest request, HttpServletResponse response) {

		KnowledgePointInfoSearchForm form = queryExport(request);
		Integer count = knowledgePointInfoController.searchCount(form);
		logger.debug("export count is : {} ", count);
		ExportInfoBo exportInfoBo = new ExportInfoBo();
		exportInfoBo.setCount(count);
		if (count > max) {
			exportInfoBo.setFlag("confirm");
		}
		return exportInfoBo;
	}

	private KnowledgePointInfoSearchForm queryExport(HttpServletRequest request) {

		KnowledgePointInfoSearchForm form = new KnowledgePointInfoSearchForm();
		form.setName(request.getParameter("name"));
		form.setIsSub(request.getParameter("isChildOrg"));
		form.setKnowledgePointId(request.getParameter("knoId"));
		form.setOrgId(request.getParameter("orgId"));
		return form;
	}

	/**
	 * 知识点管理首页
	 */
	@RequestMapping(value = "knowledgePointIndex.html", method = RequestMethod.GET)
	public ModelAndView getKnowledgeCategoryList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		return new ModelAndView("resource/KnowledgePoint", model);
	}

	//跳转修改知识点页面
	@RequestMapping(value = "toUpdateKnowledgePoint.html", method = RequestMethod.GET)
	public ModelAndView toSaveDocDetails(@RequestParam(required = false) String knoPointId,
			HttpServletRequest request,
			ModelMap model) {
		KnowledgePointBo knowledgePointBo = knowledgePointService.getKnowledgePoint(knoPointId);
		model.put("knowledgePointBo", knowledgePointBo);
		model.put("knoPointId", knoPointId);
		return new ModelAndView("resource/toUpdateKnowledgePoint", model);
	}

	/**
	 * 新建保存知识点
	 */
	@RequestMapping(value = "saveKnowledgePoint.html", method = RequestMethod.POST)
	public ModelAndView saveKnowledgePoint(HttpServletRequest req, ModelMap model) {
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		KnowledgePointCon con = new KnowledgePointCon();
		String knoPtsName = req.getParameter("knoPtsName");
		String knoPtsInfo = req.getParameter("knoPtsInfo");
		String knoCategory = req.getParameter("knoCategory");
		String kp_Id = req.getParameter("kp_Id");
		if (kp_Id != null && kp_Id != "") {
			con.setUpId(kp_Id);
		} else {
			con.setUpId("0");
		}
		con.setKcId(knoCategory);
		con.setName(knoPtsName);
		con.setIntroduction(knoPtsInfo);
		con.setCreatorId(user.getUid());
		//拼接知识点编号规则，得到选择好的知识分类编号+由SDK提供的流水号
		KnowledgeCategoryBo k = knowledgeCategoryService.getKnowledgeCategory(knoCategory);
		String knoSn = k.getSn();
		/*
		 * SysCodeBo sysCodeBo = sysCodeService.getSysCodeKcPoint(); String s = sysCodeBo.getMaxSerial().toString();
		 * DecimalFormat df = new DecimalFormat("0000"); String j =
		 * df.format(Integer.parseInt(sysCodeBo.getMaxSerial().toString())+1); String docSn = "KP-" + knoSn + "-SN" + j;
		 */
		String docSn = isCWcode("KP-" + knoSn + "-SN");
		con.setSn(docSn);
		knowledgePointService.newKnowledgePoint(con);
		return new ModelAndView("redirect:knowledgePointIndex.html", model);
	}

	/**
	 * 课程编号生成器(附带SN重复验证)
	 * 
	 * @return
	 */
	private String isCWcode(String code) {
		DecimalFormat df = new DecimalFormat("0000");
		Map<String, String> con = new HashMap<String, String>();
		String cwCode = code;
		SysCodeBo sysCodeBo = sysCodeService.getSysCodeKcPoint();
		String j = df.format(Integer.parseInt(sysCodeBo.getMaxSerial().toString()) + 1); //lms.syscode.get方法中已实现自增加一的操作.
		cwCode = cwCode + j;

		con.put("sn", cwCode);
		List<KnowledgePointBo> list = knowledgePointService.getKnowledgePoints(con);

		if (list != null && list.size() > 0) {
			cwCode = isCWcode(code);
		}
		return cwCode;
	}

	/**
	 * 修改知识点
	 */
	@RequestMapping(value = "doUpdateKnoPoint.html", method = RequestMethod.POST)
	public String doUpdateKnoPoint(KnowledgePointCon knowledgePointCon, HttpServletRequest req, ModelMap model) {
		String knoPointId = req.getParameter("knoPointId");
		knowledgePointCon.setKpId(knoPointId);
		knowledgePointService.newKnowledgePoint(knowledgePointCon);
		return "redirect:knowledgePointIndex.html";
	}

	/**
	 * 删除知识点
	 */
	@RequestMapping(value = "deleteKnowledgePoint.html", method = RequestMethod.POST)
	@ResponseBody
	public Return deleteKnowledgePoint(HttpServletRequest req,
			HttpServletResponse res,
			@RequestParam("index") String[] ids) {
		if(ids==null||ids.length==0)return null;
		
		for(String id: ids){
			KnowledgePointBo k = knowledgePointService.getKnowledgePoint(id);
			//得到选中知识点的ID
			String kId = k.getKpId();
			//判断选中的知识点是否有下级
			Map<String, String> con = new HashMap<String, String>();
			con.put("upId", kId);
			List<KnowledgePointBo> list = knowledgePointService.getKnowledgePoints(con);
			if (list==null||list.size()==0) {
				knowledgePointService.removeKnowledgePoint(id);
			}else{
				return null;
			}
		}
		return new Return("SUCCESS");
	}

	//根据岗位Id得到岗位的全名字
	@RequestMapping(value = "toShowAllOrg.html", method = RequestMethod.GET)
	@ResponseBody
	public String toShowAllOrg(HttpServletRequest req, ModelMap model, HttpServletResponse response) throws IOException {
		String orgId = req.getParameter("orgId");
		String orgName = organizationService.getOrganizationNamepath(orgId).substring(1);
		return orgName;
	}
}
