package com.telecom.lms.portal.admin.control.list;

import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.sdk.service.basic.SysParamService;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.PagerTool;

@Controller
@RequestMapping("/list")

public class SystemParamListCtr{
	@Autowired SysParamService sysParamService;
	@Autowired CommonService commonService;
	
	/**
	 * 系统参数首页分页搜索
	 */
    @RequestMapping(value = "systemParam/systemParamList.html",method = RequestMethod.GET)
    public ModelAndView systemParamList(HttpServletRequest req,HttpServletResponse res,ModelMap model){	   	
		Map<String,String> con = new HashMap<String, String>();		
		String param_Type = req.getParameter("param_Type");
		String param_Name = req.getParameter("param_Name");
		con.put("spId", param_Type);
		con.put("name", param_Name);
		//通过当前记录的upId找到上级分类的主键Id从而获得上级分类的名称
		Collection<SysParamBo> paramList = sysParamService.getSysParamPage(con, PagerTool.getPageNo(req), PagerTool.getPageSize(req));
		Map<String,String> map = sysParamService.getMap();
		for(SysParamBo sb :paramList.getData()){
			sb.setTypeName((String)map.get(sb.getUpId()));
		}
		model.put("paramList", paramList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(req));
		return new ModelAndView("list/systemSet/systemParamList",model);  	
    }
}
