package com.telecom.lms.portal.admin.control.resource;

import java.text.DecimalFormat;
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

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.basic.TagGroupBo;
import com.telecom.lms.core.bo.basic.TagLibraryBo;
import com.telecom.lms.core.bo.resources.KnowledgeCategoryBo;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.JSNode;
import com.telecom.lms.sdk.service.basic.TagGroupService;
import com.telecom.lms.sdk.service.basic.TagLibraryService;
import com.telecom.lms.sdk.service.resources.KnowledgeCategoryService;

@Controller
@RequestMapping("/knowledge")
public class KnowledgeCategoryCtr {
	
	@Autowired KnowledgeCategoryService knowledgeCategoryService;
	@Autowired CommonService commonService;
	@Autowired TagLibraryService tagLibraryService;
	@Autowired TagGroupService tagGroupService;

   //查询所有知识分类
   @RequestMapping(value="knowledgeCategoryList.html",method=RequestMethod.GET)
   public ModelAndView getKnowledgeCategoryList(HttpServletRequest req,HttpServletResponse res,ModelMap model){
       String idpaths = req.getParameter("idpaths");
       model.put("idpaths", idpaths);
	   //跳转知识分类首页
	    return new ModelAndView("resource/knowledgeCategoryList", model);
  }
   
   /**
	 * 获得JSTree知识分类
	 */
	@RequestMapping(value="knowledge4jstree.html")
	@ResponseBody
	public List<JSNode> getKnowledge4JSTree(HttpServletRequest request){
		String id = request.getParameter("id");
		List<JSNode> nodes = commonService.getKnowldegeJsTree(id);
		return nodes;
	}
   
   
    //查询知识分类详情
 	@RequestMapping(value="detail.html")
	public String knowledgeDetail(HttpServletRequest request, ModelMap model){
 		Map<String, String> conKno = new HashMap<String, String>();
		conKno.put("upId", "0");
		try{
		Collection<KnowledgeCategoryBo> knoList = knowledgeCategoryService.getKnowledgeCategorys4Page(conKno);
		if(knoList.getData().size()>0)
		{
		String knoId = knoList.getData().get(0).getKcId();
		
		
		String kcId = request.getParameter("kcId")==null?"knoId":request.getParameter("kcId");
		
		KnowledgeCategoryBo kno = new KnowledgeCategoryBo();
		kno = knowledgeCategoryService.getKnowledgeCategory(kcId);
		model.put("kno", kno);
		//截取知识分类Namepath,不显示第一级
		try{
		String knoNamePath = kno.getNamePath().substring(1,kno.getNamePath().length());
		model.put("knoNamePath", knoNamePath);
		}
		catch (Exception e) {
		}
		String upId = kno.getUpId();
		KnowledgeCategoryBo k = knowledgeCategoryService.getKnowledgeCategory(upId);
		model.put("upId", upId);
		}
		}
		catch (Exception e) {
			
		}
		return "knowledge/organization_detail";
	}
 	
 	//跳转新增知识分类页面
 	@RequestMapping(value="toAddKnowledge.html",method=RequestMethod.GET)
	public ModelAndView toAddKnowledge(HttpServletRequest request, ModelMap model){
 		String knoUpSn = "";
		String kcId = request.getParameter("kcId");
		if(kcId != null && kcId != "")
		{
		model.put("kcId", kcId);
			
		//得到的知识分类下级的最大编号
		try{
			KnowledgeCategoryBo kno = knowledgeCategoryService.getKnowledgeCategory(kcId);
			String upId = kno.getUpId();
			model.put("kno", kno);
			if(kno.getNamePath()!=null&&!kno.getNamePath().equals("")){
				String knoNamePath = kno.getNamePath().substring(1,kno.getNamePath().length());
				model.put("knoNamePath", knoNamePath);
			}
		KnowledgeCategoryBo knowledgeCategoryBo = knowledgeCategoryService.getKnowledgeCategoryMax(kcId);
		if(knowledgeCategoryBo.getSn() != "" && knowledgeCategoryBo.getSn() != null)
		{
		knoUpSn = knowledgeCategoryBo.getSn();
		}
		//拼接知识分类编号，如果没选择一个知识分类或是选择的是全部，则得到全部下的子节点最大值，
		//如果有编号为Z的知识分类则不让新建，第二级，第三级...知识分类下创建知识分类需要得到当前
		//选择好的知识分类编号，再得到当前节点下的最大编号再+1，如果超过了编号范围则不让新建
		//具体编号规则请看资源编号规则详细说明
		else
		{
		String kcSn = knowledgeCategoryService.getKnowledgeCategory(kcId).getSn();
		List list = new ArrayList();
		String[] strArray = null;   
	    strArray = knoUpSn.split("-"); 
	    for(String id : strArray)
		{
	    	list.add(id);
		}
	    String s = "";
	    String ss = "";
	    for(int i = 0; i < list.size()+2; i++)
	    {
	    	ss+="0";
	    }
	    String p = "A";
	    char[] y = p.toCharArray(); 
	    int x = (int)y[0];
	    char z = (char)(x+1);
	    knoUpSn = kcSn+"-"+ss;
		}
		
		}
		catch (Exception e) {
		}
		}
		
		else
		{
		knoUpSn = knowledgeCategoryService.getKnowledgeCategoryMax("0").getSn();
		}
		
		String sn = "";
		   if(knoUpSn.contains("-"))
		    {
			   sn = knoUpSn.substring(knoUpSn.lastIndexOf("-")+1, knoUpSn.length());
		    }
		   else{
			    sn = knoUpSn;
		   }
		model.put("knoUpSn", knoUpSn);
		String syso = "";
		if(sn.equals("X") || sn.equals("99") || sn.equals("999") || sn.equals("9999") || sn.equals("99999") || sn.equals("999999"))
		{
			syso = "当前节点下子知识分类已达上限，请联系服务中心！";
		}
		model.put("syso", syso);
		return new ModelAndView("knowledge/toAddKnowledge", model);

	}
 	
   
 //新增知识分类
   @RequestMapping(value="doSaveKnowledgeCategory.html",method=RequestMethod.POST)
	public String doSaveKnowledgeCategoryDetails(KnowledgeCategoryBo con,HttpServletRequest req,ModelMap model){
	
//	   List<KnowledgeCategoryBo> knolist = knowledgeCategoryService.getKnowledgeCategorys(null);
//	   if(knolist.size()<=0)
//	   {
//		   con.setUpId("0");
//	   }
	   //拼接编号
	   String knoUpSn = req.getParameter("knoUpSn");
	   String sn = "";
	   if(knoUpSn.contains("-"))
	    {
	   String subUpSn = knoUpSn.substring(knoUpSn.lastIndexOf("-")+1, knoUpSn.length());
	   String subUpSnTwo = knoUpSn.substring(0,knoUpSn.lastIndexOf("-")+1);
	   List list = new ArrayList();
	    String[] strArray = null; 
	    
	    strArray = knoUpSn.split("-"); 
	    for(String id : strArray)
		   {
			list.add(id);
		   }
	    Integer listCout = list.size();
	    DecimalFormat df = new DecimalFormat();
	    //如果新建的为第二级为两位数，第三级为3位数，第四级4位数，全部节点为后来加上的根节点，可忽略该节点
	    //全部下的子节点全为第一级
		if(listCout == 2)
		{
			df = new DecimalFormat("00"); 
		}
		if(listCout == 3)
		{
		df = new DecimalFormat("000");  
		}
		if(listCout == 4)
		{
		df = new DecimalFormat("0000");  
		}
		if(listCout == 5)
		{
		df = new DecimalFormat("00000");  
		}
		if(listCout == 6)
		{
		df = new DecimalFormat("000000");  
		}
		if(listCout == 7)
		{
		df = new DecimalFormat("0000000");  
		}
	   String j = df.format(Integer.parseInt(subUpSn)+1);
       sn = subUpSnTwo+j;
	    }
	   else{
		   char[] y = knoUpSn.toCharArray(); 
		   if (y != null && y.length > 0) { //避免java.lang.ArrayIndexOutOfBoundsException: 0 异常.
			   int x = (int)y[0];
			   char z = (char)(x+1);
			   String o =  String.valueOf(z);
			   sn = o;
		   }
	   }
	   con.setSn(sn);
	   Return re = knowledgeCategoryService.newKnowledgeCategory(con);
	   String next = req.getParameter("_next");
	   String back = req.getParameter("_back");
		if(next!=null && !next.equals("")){
			return "redirect:knowledgeCategoryList.html?kcId="+con.getKcId() + "&operate=add";
		}else if(back!=null && !back.equals("")){
			return "redirect:knowledgeCategoryList.html?operate=add";
		}else{
			KnowledgeCategoryBo knowledge = knowledgeCategoryService.getKnowledgeCategory(con.getKcId());
			String id = knowledge.getKcId();
			model.put("kcId", id);
			model.put("knowledge", knowledge);
			return "forward:knowledgeCategoryList";
		}
		
	}
   
   //跳转修改
	@RequestMapping(value="toUpdate.html",method=RequestMethod.GET)
	public ModelAndView updateKnowledge(HttpServletRequest request, ModelMap model){
		String kcId = request.getParameter("kcId");
		KnowledgeCategoryBo kno = knowledgeCategoryService.getKnowledgeCategory(kcId);
		try {
			String knoNamePath = kno.getNamePath().substring(1,kno.getNamePath().length());
			model.put("knoNamePath", knoNamePath);
		} catch (Exception e) {
			// TODO: handle exception
		}
		model.put("kno", kno);
		model.put("kcId", kcId);
		
		String upId = kno.getUpId();
		KnowledgeCategoryBo k = knowledgeCategoryService.getKnowledgeCategory(upId);
		if(k != null)
		{
		String upName = k.getName();
		model.put("upName", upName);
		}
		return new ModelAndView("knowledge/toUpdateKnowledge", model);
	}
   
   //修改知识分类
   @RequestMapping(value="doUpdateKnowledgeCategory.html",method=RequestMethod.POST)
	public String doUpdateKnowledgeCategoryDetails(KnowledgeCategoryBo kno,HttpServletRequest req,ModelMap model){
	   Return re = knowledgeCategoryService.newKnowledgeCategory(kno);
	   String next = req.getParameter("_next");
	   String back = req.getParameter("_back");
		if(next!=null && !next.equals("")){
			return "redirect:knowledgeCategoryList.html?kcId="+kno.getKcId() + "&operate=update";
		}else if(back!=null && !back.equals("")){
			return "redirect:knowledgeCategoryList.html?operate=update";
		}
		else{
			KnowledgeCategoryBo knowledge = knowledgeCategoryService.getKnowledgeCategory(kno.getKcId());
			String kcId = knowledge.getKcId();
			model.put("kcId", kcId);
			model.put("knowledge", knowledge);
			return "forward:knowledgeCategoryList";
		}
		
	}
   
   //移动知识分类
   @RequestMapping(value="move.html",method=RequestMethod.POST)
   @ResponseBody
   public Return move(HttpServletRequest request, ModelMap model){
	   String kcId = request.getParameter("kcId");
	   String upId = request.getParameter("upId");
	   KnowledgeCategoryBo con = new KnowledgeCategoryBo();
	   con.setKcId(kcId);
	   con.setUpId(upId);
	   Return re = knowledgeCategoryService.newKnowledgeCategory(con);
	   return re;
   }
   
   //批量移动知识分类
   @RequestMapping(value="moveTeamForKnowledge.html",method=RequestMethod.POST)
   @ResponseBody
   public Return moveTeam(HttpServletRequest request, ModelMap model){
	   String[] kcIdOne = request.getParameterValues("kcIdOne");
	   String kcIdTwo = request.getParameter("kcIdTwo");
	   KnowledgeCategoryBo con = new KnowledgeCategoryBo();
	   for(String kcId : kcIdOne){
		   con.setKcId(kcId);
		   con.setUpId(kcIdTwo);
		   knowledgeCategoryService.newKnowledgeCategory(con);
	   }
	  
	  return null;
   }
   
   //删除知识分类
   @RequestMapping(value="delete.html",method=RequestMethod.POST)
   @ResponseBody
	public Return delete(HttpServletRequest request,@RequestParam("kcId") String kcId){
	   Return ret = knowledgeCategoryService.removeKnowledgeCategory(kcId);
	   return ret;
	}
   
	//跳转选择标签页面
	@RequestMapping(value="toSelectTag.html",method=RequestMethod.GET)
	public ModelAndView toSelectTag(HttpServletRequest request, ModelMap model){
		String kcId = request.getParameter("kcId");
		model.put("kcId", kcId);
		Collection<TagLibraryBo> tagList = tagLibraryService.getTagLibrarys4Page(null);
	    model.put("tagList",tagList);
		Collection<TagGroupBo> tagGroupList = tagGroupService.getTagGroups4Page(null);
		model.put("tagGroupList", tagGroupList);
		return new ModelAndView("knowledge/selectTag", model);
	}
	
	 //添加选择标签
	   @RequestMapping(value="addTagForKno.html",method=RequestMethod.POST)
		public String addTagForKno(@RequestParam("groupId") String items,HttpServletRequest req,ModelMap model){
		   String kcId = req.getParameter("kcId");
           String next = req.getParameter("_next");
           KnowledgeCategoryBo kno = knowledgeCategoryService.getKnowledgeCategory(kcId);
           
           model.put("items", items);
           model.put("idpaths", kno.getIdPath());
			if(next!=null && !next.equals("") && items != null){
				knowledgeCategoryService.saveKnowledgeCategoryTags(kcId, items);
				return "redirect:knowledgeCategoryList.html";
			}else{
				return "redirect:knowledgeCategoryList.html";
			}
		}
	   
	   //删除知识分类下的标签
	   @RequestMapping(value="deleteTag.html",method=RequestMethod.POST)
		public String deleteTag(HttpServletRequest request){
		   String kcId = request.getParameter("kcId");
		   String tagId = request.getParameter("tagId");
		   knowledgeCategoryService.removeKnowledgeCategoryTag(kcId, tagId);
		   return "redirect:detail.html?kcId="+kcId;
		}
	   
	 //带参数查询知识分类
	   @RequestMapping(value="getTagForTagList.html",method=RequestMethod.GET)
	   public ModelAndView getTagForTagList(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		   String page_fn = req.getParameter("pagefn");
			String page = req.getParameter("page")==null?"1":req.getParameter("page");
		   String tagname = req.getParameter("tagname");
		   String tagGroupId = req.getParameter("tagGroupId");
		   Map<String, String> con = new HashMap<String, String>();
		   con.put("page", page);
		   
		   if (tagname != null && !"".equals(tagname)) {
			   con.put("tagname", tagname);
		   }
		   
		   if(tagGroupId != null && !"".equals(tagGroupId))
		   {
			con.put("tagGroupId", tagGroupId);
		   }
		   Collection<TagLibraryBo> tagList = tagLibraryService.getTagLibrarys4Page(con);
		    model.put("tagList",tagList);
		   return new ModelAndView("knowledge/tagList", model);
	  }
   
}