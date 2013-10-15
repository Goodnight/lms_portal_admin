package com.telecom.lms.portal.admin.control.auth;

import java.net.URLDecoder;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.model.ExportInfoBo;
import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.core.bo.position.Position4OrgBo;
import com.telecom.lms.core.bo.position.Position4OrgCon;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.auth.PositionService;
import com.telecom.lms.sdk.service.auth.param.Position4OrgParam;
import com.telecom.lms.sdk.service.basic.SysParamService;
import com.telecom.lms.sdk.service.down.basedata.DownLoadPosition4OrgServcie;
import com.telecom.lms.sdk.service.position.Position4OrgService;
import com.telecom.lms.sdk.util.OtherUtil;

@Controller
@RequestMapping("/position4org")
public class Position4OrgCtr {
	@Autowired
	OrganizationService orgService;
	@Autowired
	PositionService pService;
	@Autowired
	Position4OrgService p4oService;
	@Autowired
	SysParamService spService;
	@Autowired
	CommonService commonService;
	@Autowired
	DownLoadPosition4OrgServcie downLoadPosition4OrgServcie;
	private @Value("#{lmsapi.pos4provinceRootId}")
	String pos4provinceRootId;

	private @Value("#{export.position4Org_exportLimit}")
	Integer limit;
	
	private @Value("#{export.position4Org_exportMax}")
	Integer max;

	/**
	 * 管理集团/省岗位
	 */
	@RequestMapping(value = "manage.html")
	public String manage(HttpServletRequest request, ModelMap model) {
		return "auth/position4org_manage";
	}
	
	
	@RequestMapping(value = "exportEthnicGroupCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportEthnicGroupCount(HttpServletRequest request, HttpServletResponse response) {

		String poId = request.getParameter("poId");
		Position4OrgBo position4OrgBo = p4oService.getPosition4Org(poId);

		Position4OrgParam position4OrgParam = new Position4OrgParam();
		position4OrgParam.setIdPath(position4OrgBo.getIdPath());
		position4OrgParam.setLeaf(false);
		position4OrgParam.setIsDel(0);
		
		Integer count = p4oService.count(position4OrgParam);
		
		ExportInfoBo exportInfoBo = new ExportInfoBo();
		exportInfoBo.setCount(count);
		if (count > max) {
			exportInfoBo.setFlag("confirm");
		}
		return exportInfoBo;
	}
	

	@RequestMapping(value = "exportEthnicGroupList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportBlocEthnicGroupList(HttpServletRequest request, HttpServletResponse response) {

		String poId = request.getParameter("poId");
		Integer count = Integer.parseInt(request.getParameter("count"));
		
		Position4OrgBo position4OrgBo = p4oService.getPosition4Org(poId);

		Position4OrgParam position4OrgParam = new Position4OrgParam();
		position4OrgParam.setIdPath(position4OrgBo.getIdPath());
		position4OrgParam.setLeaf(false);
		position4OrgParam.setIsDel(0);
		position4OrgParam.setMax(String.valueOf(limit));
		
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = OtherUtil.getExportPath(address, "blocEthnicGroup");

		for (int i = 1; i <= count / limit + 1; i++) {
			position4OrgParam.setPage(String.valueOf(i));
			List<Position4OrgBo> position4OrgBos = p4oService.find(position4OrgParam);
			downLoadPosition4OrgServcie.exportBlocEthnicGroupResult(fileInfo, (i - 1) * limit, position4OrgBos);
		}
		return fileInfo.getName();
	}
	
	
	@RequestMapping(value = "exportPositionCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportPositionCount(HttpServletRequest request, HttpServletResponse response) {

		String poId = request.getParameter("poId");
		Position4OrgBo position4OrgBo = p4oService.getPosition4Org(poId);

		Position4OrgParam position4OrgParam = new Position4OrgParam();
		position4OrgParam.setIdPath(position4OrgBo.getIdPath());
		position4OrgParam.setLeaf(true);
		position4OrgParam.setIsDel(0);

		ExportInfoBo exportInfoBo = new ExportInfoBo();
		Integer count = p4oService.count(position4OrgParam);
		exportInfoBo.setCount(count);
		if (count > max) {
			exportInfoBo.setFlag("confirm");
		}
		return exportInfoBo;
	}

	@RequestMapping(value = "exportPositionList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportBlocPositionList(HttpServletRequest request, HttpServletResponse response) {

		String poId = request.getParameter("poId");
		Integer count = Integer.parseInt(request.getParameter("count"));
		
		Position4OrgBo position4OrgBo = p4oService.getPosition4Org(poId);

		Position4OrgParam position4OrgParam = new Position4OrgParam();
		position4OrgParam.setIdPath(position4OrgBo.getIdPath());
		position4OrgParam.setLeaf(true);
		position4OrgParam.setIsDel(0);
		position4OrgParam.setMax(String.valueOf(limit));
		
		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = OtherUtil.getExportPath(address, "blocPosition");

		for (int i = 1; i <= count / limit + 1; i++) {
			position4OrgParam.setPage(String.valueOf(i));
			List<Position4OrgBo> position4OrgBos = p4oService.find(position4OrgParam);
			downLoadPosition4OrgServcie.exportBlocPositionResult(fileInfo, (i - 1) * limit, position4OrgBos);
		}
		return fileInfo.getName();
	}

	/**
	 * 省岗位详情
	 */
	@RequestMapping(value = "detail.html")
	public String detail(HttpServletRequest request, ModelMap model) {
		boolean update = true;
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		String pid = request.getParameter("pid");
		String type = request.getParameter("type");
		Position4OrgBo p = p4oService.getPosition4Org(0, pid);
		//从统一用户查到参数id，然后从本地库查出名称
		if (p.getLevel() != null) {
			p.setLevel(spService.getById(p.getLevel().getSpId()));
		}
		if (p.getPostID() != null) {
			p.setPostID(spService.getById(p.getPostID().getSpId()));
		}
		if (p.getPosition() != null) {
			p.setPosition(pService.getPosition(p.getPosition().getpId()));
		}
		boolean isLeaf = false;
		if (commonService.getPosition4Org(pid).size() > 0) {
			isLeaf = true;
		}
		model.put("isLeaf", isLeaf);
		model.put("post", p);
		model.put("type", type);
		if (StringUtils.isNotBlank(p.getIdPath()) && user.getType() == 1 && p.getIdPath().contains(pos4provinceRootId)) {
			update = false;
		}
		model.put("update", update);
		return "auth/position4org_detail";
	}

	/**
	 * 新建省岗位详情页面
	 */
	@RequestMapping(value = "new.html")
	public String newPosition4Org(HttpServletRequest request, ModelMap model) {
		List<SysParamBo> postIDList = spService.getPostIDTypes();
		List<SysParamBo> levelList = spService.getPostLevelTypes();
		model.put("postIDList", postIDList);
		model.put("levelList", levelList);

		String type = request.getParameter("type");
		String upid = request.getParameter("upid");
		String orgid = request.getParameter("orgid");
		model.put("type", type);
		model.put("upId", upid);
		model.put("orgId", orgid);
		return "auth/position4org_new";
	}

	/**
	 * 修改省岗位详情页面
	 */
	@RequestMapping(value = "update.html")
	public String update(HttpServletRequest request, ModelMap model) {
		List<SysParamBo> postIDList = spService.getPostIDTypes();
		List<SysParamBo> levelList = spService.getPostLevelTypes();
		model.put("postIDList", postIDList);
		model.put("levelList", levelList);

		String pid = request.getParameter("pid");
		String type = request.getParameter("type");
		Position4OrgBo p = p4oService.getPosition4Org(0, pid);
		if (p.getPosition() != null) {
			p.setPosition(pService.getPosition(p.getPosition().getpId()));
		}
		model.put("post", p);
		model.put("type", type);
		model.put("upId", p.getUpId());
		return "auth/position4org_new";
	}

	/**
	 * 新建和修改省岗位详情
	 */
	@RequestMapping(value = "save.html", method = RequestMethod.POST)
	public String save(Position4OrgCon p, HttpServletRequest request, ModelMap model) {
		//p.setLeaf(true);
		p4oService.saveOrUpdatePosition4Org2(p);
		//如果是新建省岗位，则将上级leaf的值设为false
		Position4OrgCon upPos = new Position4OrgCon();
		upPos.setPoId(p.getUpId());
		upPos.setLeaf(false);
		p4oService.saveOrUpdatePosition4Org(upPos);
		return "redirect:manage.html";
	}

	/**
	 * 删除岗位
	 */
	@RequestMapping(value = "delete.html")
	@ResponseBody
	public String delete(HttpServletRequest request, ModelMap model) {
		String pid = request.getParameter("pid");
		Return re = p4oService.removeAllPosition4Org(pid);
		if (re != null) {
			return re.getCode();
		}
		return null;
	}

	/**
	 * 岗位排序
	 */
	@RequestMapping(value = "move.html")
	@ResponseBody
	public Return move(HttpServletRequest request) {
		String position = request.getParameter("position");
		String pId = request.getParameter("id");
		String upId = request.getParameter("ref");
		String sortNo = request.getParameter("oldPosition");
		p4oService.move_node(pId, upId, sortNo, position);
		return null;
	}

	/**
	 * 验证编号是否相同
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping("validate.html")
	@ResponseBody
	public boolean validate(HttpServletRequest request) {
		String sn = request.getParameter("sn");
		if(StringUtils.isNotBlank(sn)){
			return p4oService.validateSn(sn);
		}
		return false;
		

	}
}
