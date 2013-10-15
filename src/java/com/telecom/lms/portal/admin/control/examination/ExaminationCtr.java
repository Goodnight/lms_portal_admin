package com.telecom.lms.portal.admin.control.examination;

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
import org.springframework.web.servlet.ModelAndView;

import com.telecom.lms.portal.admin.service.ConfigInfo;

/**
 * 考试管理
 * 
 * @author yanlei
 * 
 */
@Controller
@RequestMapping("/examination")
public class ExaminationCtr {
	
	Logger log = LoggerFactory.getLogger(ExaminationCtr.class);
	
	@Autowired ConfigInfo cfg;
	
	/**
	 * 跳转
	 */
	@RequestMapping(value = "examinationIndex.html", method = RequestMethod.GET)
	public ModelAndView index(HttpServletRequest req,
			HttpServletResponse res, ModelMap model) {
		
		String queryString = req.getQueryString();
		String url= StringUtils.substringAfter(queryString, "url=");
		String url2 = url;
		if (StringUtils.contains(url, "|")){
			url = StringUtils.substringBefore(url, "|");
			url2 = StringUtils.substringAfter(queryString, "|");
		}
	
		// release version = url | demo version = url2
		if (!StringUtils.trimToEmpty(cfg.getSysType()).startsWith("rel")) url = url2;
		
		log.info("examinationIndex.html:"+queryString);
		log.info(cfg.getSysType()+"-"+cfg.getVersion());
		log.info("url="+url);
		log.info("url2="+url2);
		
		model.put("url", url);
		
		String menu_sn = req.getParameter("menu_sn");
		model.put("menu_sn", menu_sn);
		return new ModelAndView("examination/examinationIndex", model);

		
		//model.put("menu_sn", );
		
		/*
		String url = req.getParameter("url");
		String CurrentResourceID = req.getParameter("CurrentResourceID");
		String roleID = req.getParameter("roleID");
		model.put("url", url+"&CurrentResourceID="+CurrentResourceID+"&roleID="+roleID);
		return new ModelAndView("examination/examinationIndex", model);
		*/
	}
}
