package com.telecom.lms.portal.admin.control.resource;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import com.telecom.lms.core.bo.auth.PositionBo;
import com.telecom.lms.core.bo.basic.TagGroupBo;
import com.telecom.lms.core.bo.basic.TagLibraryBo;
import com.telecom.lms.core.bo.basic.TagLibraryCon;
import com.telecom.lms.core.bo.resources.CoursewareBo;
import com.telecom.lms.core.bo.resources.DocCon;
import com.telecom.lms.core.bo.resources.KnowledgeCategoryBo;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.core.bo.train.TrainPlanBo;
import com.telecom.lms.portal.admin.control.ListCtr;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.sdk.service.basic.TagGroupService;
import com.telecom.lms.sdk.service.basic.TagLibraryService;
import com.telecom.lms.sdk.service.resources.KnowledgeCategoryService;
import com.telecom.lms.sdk.service.train.TrainClassService;
import com.telecom.lms.sdk.service.train.TrainPlanService;

@Controller
@RequestMapping("/tag")
public class TagCtr {
	
	private static final String DEFAULT_PAGESIZE = "20";
	public static Integer sn = 1;
	@Autowired TagLibraryService tagLibraryService;
	@Autowired TagGroupService tagGroupService;
	@Autowired TrainClassService trainClassService;
	@Autowired TrainPlanService trainPlanService;
	@Autowired KnowledgeCategoryService knowledgeCategoryService;

	/**
	 * 标签首页
	 */
	@RequestMapping(value="tagList.html",method=RequestMethod.GET)
	public ModelAndView tagList(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		Collection<TagGroupBo> tagGroupList = tagGroupService.getTagGroups4Page(null);
		model.put("tagGroupList", tagGroupList);
		return new ModelAndView("resource/tagList", model);
	}
	
	//跳转新增标签库页面
	@RequestMapping(value="toAddTag.html",method=RequestMethod.GET)
	public ModelAndView toAddTag(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		Collection<TagGroupBo> tagGroupList = tagGroupService.getTagGroups4Page(null);
		model.put("tagGroupList", tagGroupList);
		return new ModelAndView("resource/toAddTag", model);
	}
	
	//新增标签库
	   @RequestMapping(value="doSaveTag.html",method=RequestMethod.POST)
		public String doSaveTag(TagLibraryCon con,HttpServletRequest req,ModelMap model){
		   //得到标签名字
		   String tagnames = req.getParameter("tagnames");
		   con.setTagname(tagnames);
		   con.setCreateType(0);
		   con.setUsge(0);
		   
		   GregorianCalendar gc = new GregorianCalendar();
		   Date now = gc.getTime();
		   //保存创建时间为当前时间
		   SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		   con.setCreateDt(format.format(now));
		   Return re = tagLibraryService.newTagLibraryAll(con);
		    String next = req.getParameter("_next");
			if(next!=null && !next.equals("")){
				return "redirect:tagList.html";
			}else{
				TagLibraryBo tag = tagLibraryService.getTagLibrary(con.getTagId());
				model.put("tag", tag);
				return "redirect:tagList.html";
			}
			
		}
	   
	   //批量删除标签库
		@RequestMapping(value="deleteTag.html",method=RequestMethod.POST)
		@ResponseBody
		public Return deleteTagByItems(HttpServletRequest req,HttpServletResponse res,@RequestParam("groupTypeId") String items){

			Return ret = tagLibraryService.removeTagLibrarys(items);
			if(ret != null){}
			return ret;
		}
		
		  //移动标签库
		   @RequestMapping(value="moveTag.html",method=RequestMethod.POST)
		   @ResponseBody
		   public Return move(HttpServletRequest request, ModelMap model){
			   String tagId = request.getParameter("tagId");
			   String tagGroupId = request.getParameter("tagGroupId");
			   TagLibraryCon con = new TagLibraryCon();
			   con.setTagId(tagId);
			   con.setTagGroupId(tagGroupId);
			   Return re = tagLibraryService.newTagLibrary(con);
			   return re;
		   }
		   
		   @RequestMapping(value="toSelectTagGroup.html",method=RequestMethod.GET)
			public String toSelectTagGroup(HttpServletRequest req,HttpServletResponse res,ModelMap model){
				Collection<TagGroupBo> tagGroupList = tagGroupService.getTagGroups4Page(null);
				model.put("tagGroupList", tagGroupList);
				return null;
			}
		   
			/**
			 * 修改标签
			 */
			   @RequestMapping(value="updateDoc.html",method=RequestMethod.POST)
			   @ResponseBody
			   public Return updateStatus(TagLibraryCon tag, HttpServletRequest request){
					Return re = tagLibraryService.newTagLibrary(tag);
					return re;
				}
}
