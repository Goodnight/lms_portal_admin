package com.telecom.lms.portal.admin.control.list;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.auth.RoleBo;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.resources.KnowledgeCategoryBo;
import com.telecom.lms.core.bo.resources.KnowledgePointBo;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.JSNode;
import com.telecom.lms.portal.admin.util.Node;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.down.resource.DownLoadResourceManageService;
import com.telecom.lms.sdk.service.resources.KnowledgeCategoryService;
import com.telecom.lms.sdk.service.resources.KnowledgePointService;

@Controller
@RequestMapping("/list")
public class KnowledgePointListCtr {
	@Autowired
	KnowledgePointService knowledgePointService;
	@Autowired
	KnowledgeCategoryService knowledgeCategoryService;
	@Autowired
	CommonService commonService;
	@Autowired
	DownLoadResourceManageService downLoadResourceManageService;

	/**
	 * 知识点管理首页列表
	 * 
	 * @param req
	 * @param res
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "knowledgePoint/exportknowledgepointlist.html", method = RequestMethod.GET)
	public void exportList(HttpServletRequest request, HttpServletResponse response) {
		
		String kId = request.getParameter("kId");
		Map<String, String> con = new HashMap<String, String>();
		if(StringUtils.isBlank(kId)){
			String knowledgeId = request.getParameter("knoId");
			String orgId = request.getParameter("orgId");
			String name = request.getParameter("name");
			
			if (StringUtils.isNotBlank(orgId)) {
				con.put("orgDepId", orgId);
			}
			String isSub = request.getParameter("isChildOrg");
			con.put("isSub", isSub);
			if (StringUtils.isNotBlank(knowledgeId)) {
				con.put("kc_id", knowledgeId);
			}
			con.put("name", name);
		} else{
			con.put("upId", kId);
		}
		
		List<KnowledgePointBo> list = knowledgePointService.exportList(con);
		downLoadResourceManageService.downLoadKnowledgePoint(response, list);
	}

	/**
	 * 知识点管理首页列表
	 * 
	 * @param req
	 * @param res
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "knowledgePoint/knowledgePointList.html", method = RequestMethod.GET)
	public ModelAndView knowledgePtsIndex(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		Map<String, String> con = new HashMap<String, String>();
		String knowledgeCategory = req.getParameter("knowledgeCategory");
		String knowledgeId = req.getParameter("knoId");
		String orgId = req.getParameter("orgId");
		String name = req.getParameter("name");
		if (orgId != "" || orgId != null) {
			con.put("orgDepId", orgId);
		}
		String isSub = req.getParameter("isChildOrg");
		con.put("isSub", isSub);
		//是否包含子知识分类
		String isChildKnowledge = req.getParameter("isChildKnowledge");
		con.put("isChildKnowledge", isChildKnowledge);
		if (knowledgeId != "" || knowledgeId != null) {
			con.put("kc_id", knowledgeId);
		}
		con.put("page", PagerTool.getPageNo(req));
		con.put("max", PagerTool.getPageSize(req));
		con.put("name", name);
		Collection<KnowledgePointBo> knowledgePointList = knowledgePointService.getKnowledgePoints4Page(con);
		model.put("knowledgePointList", knowledgePointList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		model.put("orgId", orgId);
		return new ModelAndView("list/resource/knowledgePointList", model);
	}

	/**
	 * 查看上一级知识点列表
	 * 
	 * @param req
	 * @param res
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "knowledgePoint/knoPointUpList.html", method = RequestMethod.GET)
	public ModelAndView knoPointUpList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		String knoPoIntId = req.getParameter("kpId");
		KnowledgePointBo knowledgePointBo = knowledgePointService.getKnowledgePoint(knoPoIntId);
		KnowledgePointBo knowledgePointBoTwo = knowledgePointService.getKnowledgePoint(knowledgePointBo.getUpId());
		Map<String, String> con = new HashMap<String, String>();
		con.put("upId", knowledgePointBoTwo.getUpId());
		Collection<KnowledgePointBo> upKnowledgePointList = knowledgePointService.getKnowledgePoints4Page(con);
		model.put("upKnowledgePointList", upKnowledgePointList);
		KnowledgePointBo kpBo = knowledgePointService.getKnowledgePoint(knoPoIntId);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return new ModelAndView("list/resource/upKnowledgePointList", model);
	}

	/**
	 * 查看子知识点列表
	 * 
	 * @param req
	 * @param res
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "knowledgePoint/checkSubList.html", method = RequestMethod.GET)
	public ModelAndView checkSubPts(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		String kpId = req.getParameter("kpId");
		Map<String, String> con = new HashMap<String, String>();
		con.put("upId", kpId);
		Collection<KnowledgePointBo> subKnowledgePointList = knowledgePointService.getKnowledgePoints4Page(con);
		model.put("subKnowledgePointList", subKnowledgePointList);
		KnowledgePointBo kpBo = knowledgePointService.getKnowledgePoint(kpId);
		model.put("kpBo", kpBo);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return new ModelAndView("list/resource/subKnowledgePointList", model);
	}

	/**
	 * 获得JSTree知识分类
	 */
	@RequestMapping(value = "knowledgePoint/knowledge4jstree.html")
	@ResponseBody
	public List<JSNode> getKnowledge4JSTree(HttpServletRequest request) {
		String id = request.getParameter("id");
		List<JSNode> nodes = commonService.getKnowldegeJsTree(id);
		return nodes;
	}

	/**
	 * 动态加载新建知识点页面
	 * 
	 * @param req
	 * @param res
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "knowledgePoint/newKnowledgePts.html", method = RequestMethod.GET)
	public ModelAndView newKnowledgePts(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		//找到知识分类的根节点
		String kcId = req.getParameter("knoId");
		System.out.print("动态加载知识点ID为" + kcId);
		KnowledgeCategoryBo newKnowledgePts = knowledgeCategoryService.getKnowledgeCategory(kcId);
		model.put("newKnowledgePts", newKnowledgePts);
		return new ModelAndView("list/resource/newKnowledgePts", model);
	}
}
