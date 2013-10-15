package com.telecom.lms.portal.admin.control.resource;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.print.Doc;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
import com.telecom.lms.core.bo.resources.CoursewareBo;
import com.telecom.lms.core.bo.resources.DocBo;
import com.telecom.lms.core.bo.resources.DocCon;
import com.telecom.lms.core.bo.resources.KnowledgeCategoryBo;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.Node;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.resources.CoursewareService;
import com.telecom.lms.sdk.service.resources.DocService;
import com.telecom.lms.sdk.service.resources.KnowledgeCategoryService;
import com.telecom.lms.sdk.service.resources.ResBaseService;

@Controller
@RequestMapping("/libraryRes")
public class LibraryResCtr {
	
	@Autowired CommonService commonService;
	@Autowired ResBaseService resBaseService;
	@Autowired OrganizationService organizationService;
	@Autowired KnowledgeCategoryService knowledgeCategoryService;

//查询所有精品资源（分页查询）
   @RequestMapping(value="libraryResList.html",method=RequestMethod.GET)
   public ModelAndView getCaseDocList(HttpServletRequest req,HttpServletResponse res,ModelMap model){

	    return new ModelAndView("resource/libraryResList", model);
  }
   
   //批量移除精华资源
	@RequestMapping(value="deleteLibraryRes.html",method=RequestMethod.POST)
	@ResponseBody
	public Return deleteLibraryResItems(HttpServletRequest req,HttpServletResponse res,@RequestParam("groupTypeId") String items){
		
		Return re = resBaseService.deleteElites(items);
		if(re != null){}
		return re;
	}
	
	 //批量删除精华资源
	@RequestMapping(value="deleteAllLibraryRes.html",method=RequestMethod.POST)
	@ResponseBody
	public Return deleteAllLibraryResItems(HttpServletRequest req,HttpServletResponse res,@RequestParam("groupTypeId") String items){
		
		Return re = resBaseService.removeResBases(items);
		if(re != null){}
		return re;
	}
	
	//根据岗位Id得到岗位的全名字
	   @RequestMapping(value="toShowAllOrg.html",method=RequestMethod.GET)
	   @ResponseBody
		public String toShowAllOrg(HttpServletRequest req,ModelMap model,HttpServletResponse response) throws IOException{
		    
		    String orgId = req.getParameter("orgId");
		    String orgName = organizationService.getOrganizationNamepath(orgId);
			return orgName;
		}
	   
	 //悬浮根据岗位Id得到岗位的全名字
	   @RequestMapping(value="toShowAllOrgName.html",method=RequestMethod.GET)
	   @ResponseBody
		public String toShowAllOrgName(HttpServletRequest req,ModelMap model,HttpServletResponse response) throws IOException{
		    String orgId = req.getParameter("orgId");
		    String str="";
			String pos = "";
			List list = new ArrayList(); 
			//得到选择的OrgId,拼接成namePath
	    	OrganizationBo organizationBo = organizationService.getOrganization(orgId);
	    	String orgIdPath = organizationBo.getIdPath();
	    	String[] strArray = null;   
			strArray = orgIdPath.split("/"); 
			for(String id : strArray)
			{
			String orgName = organizationService.getOrganization(id).getName();
			list.add(orgName);
			}
			list.remove(0);
			for(int i = 0; i < list.size(); i++)
	        {
	        	 str+=list.get(i)+"/";	
	        }
			pos = str.substring(0,str.length()-1);
			if(pos !="12345")
		    {
			return pos;
		    }
			return null;
		}
 
}
