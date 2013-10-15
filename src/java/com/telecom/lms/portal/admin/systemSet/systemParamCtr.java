package com.telecom.lms.portal.admin.systemSet;

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

import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.sdk.service.basic.SysParamService;
import com.telecom.lms.portal.admin.service.CommonService;

@Controller
@RequestMapping("/systemParam")
public class systemParamCtr{
	@Autowired SysParamService sysParamService;
	@Autowired CommonService commonService;
	
	/**
	 * 系统参数首页
	 */
	@RequestMapping(value = "systemParamIndex.html",method = RequestMethod.GET)
	public ModelAndView systemParam(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		List<SysParamBo> paramList = getList();
		model.put("paramList", paramList);
		return new ModelAndView("systemSet/systemParam",model);
	}
	
	/**
	 * 新建/修改保存系统参数
	 */
	@RequestMapping(value = "newSystemParam.html",method = RequestMethod.POST)
	@ResponseBody
	public String newSystemParam(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		SysParamBo sys = new SysParamBo();
		String paramName = req.getParameter("paramName");
		String paramType = req.getParameter("paramType");
		String paramId = req.getParameter("paramId");
		sys.setName(paramName);
		sys.setUpId(paramType);
		sys.setType(1);
		if(paramId != null && paramId != ""){
			sys.setSpId(paramId);
		}
		if(paramName != null && paramType != null){
			sysParamService.saveSysParam(sys);
			return "redirect:systemParamIndex.html";
		}
		return "redirect:systemParamIndex.html";
	}
	
	/**
	 * 删除系统参数
	 */
	@RequestMapping(value="deleteSystemParam.html",method=RequestMethod.POST)
	@ResponseBody
	public Return deleteSystemParam(HttpServletRequest req,HttpServletResponse res,@RequestParam("index") String ids){
		Return re = sysParamService.removeSysParam(ids);
		return re;
	}
		
	/**
	 * 循环取出数据库中的系统参数
	 */
	private List<SysParamBo> getList(){
		Map<String,String> con = new HashMap<String, String>();
		List<SysParamBo> paramList = new ArrayList<SysParamBo>();
		List<SysParamBo> param = sysParamService.getTypes(con);
		paramList.addAll(param);
		return paramList;
	}
}
