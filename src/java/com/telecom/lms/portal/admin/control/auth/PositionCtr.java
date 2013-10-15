package com.telecom.lms.portal.admin.control.auth;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import com.telecom.lms.core.bo.auth.PositionBo;
import com.telecom.lms.core.bo.auth.PositionCon;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.model.ExportInfoBo;
import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.StringTool;
import com.telecom.lms.sdk.service.auth.PositionService;
import com.telecom.lms.sdk.service.auth.param.PositionParam;
import com.telecom.lms.sdk.service.basic.SysParamService;
import com.telecom.lms.sdk.service.down.basedata.DownLoadPositionServcie;
import com.telecom.lms.sdk.util.OtherUtil;

@Controller
@RequestMapping("/position")
public class PositionCtr {
	@Autowired
	PositionService positionService;
	@Autowired
	SysParamService spService;
	@Autowired
	CommonService commonService;
	@Autowired
	DownLoadPositionServcie downLoadPositionServcie;
	private String[] gradeNames = { "初级", "中级", "高级", "资深", "专家" };

	private @Value("#{export.position_exportLimit}")
	Integer limit;

	private @Value("#{export.position_exportMax}")
	Integer max;

	@RequestMapping("manage.html")
	public String manage(HttpServletRequest request, ModelMap model) {

		return "auth/position_manage";
	}

	@RequestMapping(value = "exportEthnicGroupCount.html", method = RequestMethod.POST)
	@ResponseBody
	public ExportInfoBo exportEthnicGroupCount(HttpServletRequest request, HttpServletResponse response) {

		String poId = request.getParameter("poId");
		PositionBo positionBo = positionService.getPosition(poId);

		PositionParam positionParam = new PositionParam();
		positionParam.setIdPath(positionBo.getIdPath());
		positionParam.setType(-1);
		positionParam.setIsDel(0);

		ExportInfoBo exportInfoBo = new ExportInfoBo();
		Integer count = positionService.count(positionParam);
		exportInfoBo.setCount(count);
		if (count > max) {
			exportInfoBo.setFlag("confirm");
		}
		return exportInfoBo;
	}

	@RequestMapping(value = "exportEthnicGroupList.html", method = RequestMethod.POST)
	@ResponseBody
	public String exportEthnicGroupList(HttpServletRequest request, HttpServletResponse response) {

		String poId = request.getParameter("poId");
		Integer count = Integer.parseInt(request.getParameter("count"));

		PositionBo positionBo = positionService.getPosition(poId);
		
		PositionParam positionParam = new PositionParam();
		positionParam.setIdPath(positionBo.getIdPath());
		positionParam.setType(-1);
		positionParam.setIsDel(0);
		positionParam.setMax(String.valueOf(limit));

		String address = request.getSession().getServletContext().getRealPath("/") + "download/";
		FileInfo fileInfo = OtherUtil.getExportPath(address, "standarPosition");

		for (int i = 1; i <= count / limit + 1; i++) {

			positionParam.setPage(String.valueOf(i));
			List<PositionBo> positionBos = positionService.find(positionParam);
			downLoadPositionServcie.exportStandardEthnicGroupResult(fileInfo, (i - 1) * limit, positionBos);
		}
		return fileInfo.getName();
	}

	@RequestMapping(value = "exportStandardPositionList.html", method = RequestMethod.GET)
	public void exportStandardPositionList(HttpServletRequest request, HttpServletResponse response) {

		String poId = request.getParameter("poId");
		Map<String, String> con = new HashMap<String, String>();
		con.put("poId", poId);
		List<PositionBo> list = positionService.exportStandardPositionList(con);
		downLoadPositionServcie.exportStandardPositionTemplet(response, list);
	}

	@RequestMapping(value = "detail.html")
	public String detail(HttpServletRequest request, ModelMap model) {
		String pid = request.getParameter("pid");
		String type = request.getParameter("type");
		PositionBo p = positionService.getPosition(0, pid);
		//从统一用户查到参数id，然后从本地库查出名称
		if (p.getLevel() != null) {
			p.setLevel(spService.getById(p.getLevel().getSpId()));
		}
		if (p.getPostID() != null) {
			p.setPostID(spService.getById(p.getPostID().getSpId()));
		}
		boolean isLeaf = false;
		if (commonService.getPositionLevel(pid).size() > 0) {
			isLeaf = true;
		}
		List<PositionBo> postGrades = positionService.getPositionGrade(pid);
		model.put("postGrades", postGrades);
		model.put("post", p);
		model.put("type", type);
		model.put("isLeaf", isLeaf);
		return "auth/position_detail";
	}

	@RequestMapping("new.html")
	public String toNew(HttpServletRequest request, ModelMap model) {
		String upId = request.getParameter("upid");
		String type = request.getParameter("type");
		model.put("upId", upId);
		model.put("type", type);
		model.put("gradeNames", gradeNames);
		List<SysParamBo> postIDList = spService.getPostIDTypes();
		List<SysParamBo> levelList = spService.getPostLevelTypes();
		model.put("postIDList", postIDList);
		model.put("levelList", levelList);
		return "auth/position_new";
	}

	@RequestMapping("update.html")
	public String toUpdate(HttpServletRequest request, ModelMap model) {
		String pid = request.getParameter("pid");
		String type = request.getParameter("type");
		PositionBo post = positionService.getPosition(0, pid);
		List<PositionBo> postGrades = positionService.getPositionGrade(pid);
		model.put("post", post);
		model.put("type", type);
		model.put("postGrades", postGrades);
		model.put("gradeNames", gradeNames);
		List<SysParamBo> postIDList = spService.getPostIDTypes();
		List<SysParamBo> levelList = spService.getPostLevelTypes();
		model.put("postIDList", postIDList);
		model.put("levelList", levelList);
		return "auth/position_new";
	}

	@RequestMapping(value = "save.html", method = RequestMethod.POST)
	public String save(PositionCon con, HttpServletRequest request, ModelMap model) {
		String[] grades = request.getParameterValues("postGrade");
		/**
		 * 判断grades不为空，有岗位等级选中时，upId的leaf为false; 有下级
		 * By LuChao LMSWD-3653
		 */
		if(grades!=null&&grades.length>0){
			con.setLeaf(false);
		}
		Return re = positionService.newPosition2(con);
		
		if (StringUtils.isNotBlank(re.getCode()) && grades != null && grades.length > 0) {
			positionService.newPositionGrade(StringTool.getString(grades, StringTool.SPLIT_COMMA), re.getCode());
		} else if (StringUtils.isNotBlank(re.getCode()) && grades == null) {
			positionService.removePositionGrade(re.getCode());
		}
		return "redirect:manage.html";
	}

	@RequestMapping(value = "delete.html", method = RequestMethod.GET)
	@ResponseBody
	public String delete(HttpServletRequest request) {
		String pid = request.getParameter("pid");
		Return re = positionService.removePositions(pid);
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
	public String move(HttpServletRequest request) {
		String position = request.getParameter("position");
		String pId = request.getParameter("id");
		String upId = request.getParameter("ref");
		String sortNo = request.getParameter("oldPosition");
		positionService.move_node(pId, upId, sortNo, position);
		return null;
	}

	/**
	 * 验证编号是否相同
	 * 
	 * @param request
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	@RequestMapping("validate.html")
	@ResponseBody
	public boolean validate(HttpServletRequest request) throws UnsupportedEncodingException {
		String sn = request.getParameter("sn");
		if (StringUtils.isNotBlank(sn)) {
			return positionService.validateSn(sn);
		}
		String name = request.getParameter("name");
		if (StringUtils.isNotBlank(name)) {
			return positionService.validateName(URLDecoder.decode(name, "UTF-8"));
		}
		return false;
	}
}
