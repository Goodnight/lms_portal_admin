package com.telecom.lms.portal.admin.control.resource;

import java.io.File;
import java.io.IOException;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
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
import com.telecom.lms.core.bo.basic.SysCodeBo;
import com.telecom.lms.core.bo.basic.TagLibraryBo;
import com.telecom.lms.core.bo.resources.DocBo;
import com.telecom.lms.core.bo.resources.DocCon;
import com.telecom.lms.core.bo.resources.KnowledgeCategoryBo;
import com.telecom.lms.core.bo.resources.ResBaseBo;
import com.telecom.lms.core.bo.resources.ResCategoryBo;
import com.telecom.lms.core.bo.resources.ResDataBo;
import com.telecom.lms.core.bo.resources.ResPicBo;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.core.bo.train.TrainResourceCon;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.service.ConfigInfo;
import com.telecom.lms.portal.admin.util.StringTool;
import com.telecom.lms.sdk.plugin.service.resource.ResourceInfoService;
import com.telecom.lms.sdk.plugin.service.resource.ResouseTaskService;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.basic.SysCodeService;
import com.telecom.lms.sdk.service.basic.TagLibraryService;
import com.telecom.lms.sdk.service.imp.notice.NoticeService;
import com.telecom.lms.sdk.service.resources.CoursewareService;
import com.telecom.lms.sdk.service.resources.DocService;
import com.telecom.lms.sdk.service.resources.KnowledgeCategoryService;
import com.telecom.lms.sdk.service.resources.ResBaseService;
import com.telecom.lms.sdk.service.resources.ResCategoryService;
import com.telecom.lms.sdk.service.resources.ResDataService;
import com.telecom.lms.sdk.service.resources.ResPicService;
import com.telecom.lms.sdk.service.train.TrainClassService;
import com.telecom.lms.sdk.service.train.TrainResourseService;
import com.telecom.lms.sdk.util.DateTool;

@Controller
@RequestMapping("/case")
public class CaseDocCtr{

	
	private static final String DEFAULT_PAGESIZE = "20";
	private static final String DEFAULT_DOCTYPE = "1";
	public static final String SRCRESTYPE = "DC";
	public static final String DESTTYPE = "CW";
	private static String algorithm = "Blowfish/ECB/ZeroBytePadding";
	private static final long DEFAULT_DOWNLOAD_EXPIRE = 1000 * 60 * 60 * 24 * 365 * 100;

	
	private static final long serialVersionUID = 7469039770976979672L;

	private static final String task_name = "convert.swf.document";

    private static final String RESOURCE_ID = "resource_id";
	
	private static final String RESOURCE_URL = "index_url";
	@Autowired DocService docService;
	@Autowired CoursewareService coursewareService;
	@Autowired CommonService commonService;
	@Autowired KnowledgeCategoryService knowledgeCategoryService;
	@Autowired TagLibraryService tagLibraryService;
	@Autowired ResBaseService resBaseService;
	@Autowired ResPicService resPicService;
	@Autowired TrainResourseService trainResourceService;
	@Autowired ResDataService resDataService;
	@Autowired OrganizationService organizationService;
	@Autowired UserInfoService userInfoService;
	@Autowired ResCategoryService resCateSrv;
	@Autowired SysCodeService sysCodeService;
	@Autowired ResouseTaskService resouseTaskService;
	@Autowired ResourceInfoService resourceInfoService;
	@Autowired TrainClassService tcService;
	//得到resourceAgentUrl配置的系统参数
	@Autowired ConfigInfo cfg;
	@Autowired NoticeService noticeService;
	
	//下载"中国电信网上大学案例模板.doc"
	 @RequestMapping(value="downloadCaseDocTemplate.html",method=RequestMethod.GET)
	  public void downloadCaseDocTemplate(HttpServletResponse response) throws Exception {
			response.setContentType("application/msword;charset=UTF-8");
			File caseDocTemplate = this.getDictionaryFile();
			long fileLength = caseDocTemplate.length();
			response.setHeader("Content-disposition", "attachment; filename="
					+ new String("中国电信网上大学案例模板.doc".getBytes("GBK"), "ISO8859-1"));
			response.setHeader("Content-Length", String.valueOf(fileLength));
			FileUtils.copyFile(caseDocTemplate, response.getOutputStream());
		}
    
    private File getDictionaryFile() throws IOException {
    	return new ClassPathResource("template/caseDocTemplate.doc").getFile();
    }
   
    

  //查询所有资源案例（分页查询）
    @RequestMapping(value="caseDocList.html",method=RequestMethod.GET)
    public ModelAndView getCaseDocList(HttpServletRequest req,HttpServletResponse res,ModelMap model){
 		//跳转资源案例主页面
 	    return new ModelAndView("resource/caseDoc", model);
   }
    
   
 //查询资源案例详情`
   @RequestMapping(value="caseDocDetails.html",method=RequestMethod.GET)
	public ModelAndView getCaseDocDetails(@RequestParam("dId") String dId,@RequestParam("rpId") String rpId,HttpServletRequest req,
			HttpServletResponse res,
			ModelMap model){
	   			String history = req.getParameter("his");
	   			boolean isBool =true; //判断精华资源和历史资源时候显示修改按钮
			 //取得该课程的创建机构
				ResBaseBo resBase = resBaseService.getResBase(rpId);
	   		
				DocBo caseDoc = null;
				if(dId!=null&!"".equals(dId)){
					caseDoc = docService.getDoc(dId);
				}else{
					isBool=false;
					Map<String,String> con_ = new HashMap<String,String>();
					con_.put("sn", resBase.getSn());
					con_.put("name", resBase.getName());
					con_.put("docType", "1");
					if(history!=null&&history.equals("1")){
						con_.put("isHistory", "7");
					}
					List<DocBo> docList = docService.getDocs(con_);
					if(docList!=null&&docList.size()>0){
						caseDoc = docList.get(0);
					}
				}
			String orgIdPath = resBase.getOrg().getIdPath();
			model.put("orgIdPath", orgIdPath);
			try{
			//取得案例的附件，老数据有的没有，所以需要处理异常
			String b = caseDoc.getData().get(0).getOutCode();
			model.put("b", b);
			}
			catch (Exception e) {
				
			}
			try{
				//得到知识分类
				Map<String, String> conKno = new HashMap<String, String>();
				conKno.put("res_id", caseDoc.getRes().getRbId());
				//拼接多个知识分类成为namepath
				 List list = new ArrayList(); 
				 String str="";
				 String pos = "";
			Collection<ResCategoryBo> cKList = resCateSrv.getResCategorySelect(conKno,null,null);
			for(ResCategoryBo c : cKList.getData())
			{
			KnowledgeCategoryBo kno = c.getCategory();
			KnowledgeCategoryBo knoUpName = knowledgeCategoryService.getKnowledgeCategory(kno.getUpId());
			String KnoName = kno.getName()+"/"+knoUpName.getName();
			list.add(KnoName);
			}
			//多个知识分类用，隔开
			for(int i = 0; i < list.size(); i++)
	        {
	        	 str+=list.get(i)+"，  ";	
	        }
	        pos = str.substring(0,str.length()-3); 
	        model.put("pos", pos);
			}
			catch (Exception e) {
				
			}
			model.put("caseDoc", caseDoc);
			model.put("dId", dId);
			model.put("rpId", rpId);
			model.put("isBool", isBool);
		return new ModelAndView("resource/caseDocDetails", model);
	}
   //跳转新增资源案例页面
   @RequestMapping(value="tosaveCaseDocDetails.html",method=RequestMethod.GET)
	public ModelAndView toSaveCaseDocDetails(@RequestParam(required=false) String dId,@RequestParam(required=false) String rpId,HttpServletRequest request,ModelMap model){
	   //拿到资源案例首页上选择好的知识分类，把知识分类id,name放到新建页面上
	   String knoNamePath = "";
	   try{
		   //处理异常
		   String knoId = request.getParameter("knoId");
		   knoNamePath = knowledgeCategoryService.getKnowledgeCategory(knoId).getNamePath();
		   if(knoNamePath == "" || knoNamePath == null)
		   {
			   knoNamePath = knowledgeCategoryService.getKnowledgeCategory(knoId).getName();
		   }
		   model.put("knoId", knoId);
		   model.put("knoNamePath", knoNamePath);
		   }
		   catch (Exception e) {
			// TODO: handle exception
		}
	   if(dId!=null){
		   DocBo caseDoc = docService.getDoc(dId);
			model.put("caseDoc", caseDoc);
			model.put("dId", dId);
			Map<String, String> conKno = new HashMap<String, String>();
			conKno.put("res_id", caseDoc.getRes().getRbId());
			   try{
			   ResCategoryBo resCategoryBo = resCateSrv.getResCategorySelect(conKno,null,null).getData().get(0);
			   model.put("docCategoryBo", resCategoryBo);
			   }
			   catch (Exception e) {
				// TODO: handle exception
			}
			 try {
					String rSIdd = caseDoc.getData().get(0).getResId();
					model.put("rSIdd", rSIdd);
					//得到案例上传好的案例文件outCode
					String caseUpCode = caseDoc.getData().get(0).getOutCode();
					model.put("caseUpCode", caseUpCode);
					//资源数据未使用.  2013-5-7注释  
 //					ResourceInfo caseDocResourceInfo = this.resourceInfoService.getResourceInfo(caseUpCode);
//					model.put("caseDocResourceInfo", caseDocResourceInfo);
					
					String rdId = caseDoc.getData().get(0).getRdId();
					model.put("rdId", rdId);
				} catch (Exception e) {
					// TODO: handle exception
				}
	   }else{
			model.put("caseDoc", new DocBo());
		}
	   model.put("dId", dId);
	   model.put("rpId", rpId);
	  
	   //获取培训班id,用作跳转
	   String tcid = request.getParameter("tcid");
	   if(StringUtils.isNotBlank(tcid)){
		   TrainClassBo tc = tcService.getTrainClass(tcid);
		   model.put("tc", tc);
	   }
	   model.put("agentUrl", cfg.getResourceAgentUrl());
	   HttpSession session = request.getSession();
	   session.setAttribute("agentUrl", cfg.getResourceAgentUrl());
	   //存放下载地址
	   model.put("donwlodResourseURL", cfg.getDonwlodResourseURL());
	   model.put("downloadCaseDocTemplateURL", cfg.getDownloadCaseDocTemplateURL());
		return new ModelAndView("resource/saveCaseDocDetails", model);
	}
   
   
   //根据选择的知识分类显出标签
   @RequestMapping(value="selectTagForCaseDoc.html",method=RequestMethod.GET)
	public ModelAndView selectTagForCaseDoc(HttpServletRequest req,ModelMap model){
	   String kcId = req.getParameter("kcId");
	   Map<String, String> con = new HashMap<String, String>();
	   con.put("knowledgeId", kcId);
	   //显示标签，要求显示热度最大的前3个
	   con.put("max", "3");
	   con.put("order", "usge");
	   con.put("sort", "desc");
	   Collection<TagLibraryBo> tagList = tagLibraryService.getTagLibrarys4Page(con);
	   model.put("tagList",tagList);
		return new ModelAndView("resource/selectTagByCaseDoc", model);
	}
   
   
   //修改新增案例
   @RequestMapping(value="doSaveCaseDocDetails.html",method=RequestMethod.POST)
	public String doSaveCaseDocDetails(DocCon con,HttpServletRequest req,ModelMap model){
		String[] dep_ids = req.getParameterValues("dep_ids"); // 新增岗位ID.
		String[] dep_Names = req.getParameterValues("dep_Names");// 新增岗位名称.
		if (dep_ids != null)
      	 	con.setPositionIds(dep_ids.toString());
		if (dep_Names != null) 
	   	    con.setPositionNames(dep_Names.toString());
	   
	   
	   //获得培训班id，用于从培训班中创建文档
	   String tcid = req.getParameter("tcid");
	   
	   String d = req.getParameter("sn");
	   String caseSn = req.getParameter("dId");
	   UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user"); 
	    String createrId = req.getParameter("createrId");
	        //得到创建时间
	        String createDt = req.getParameter("createDt");
	        GregorianCalendar gc = new GregorianCalendar();
		    Date now = gc.getTime();
		    SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		    //假如是新建操作，设置案例的创建时间
		    if(caseSn == null || caseSn == "")
			{
			con.setCreate_date(format.format(now));
			con.setCreater_id(user.getUid());
			con.setStatus(0);
			con.setHistory(0);
			con.setElite(0);
			}
		    //假如是修改操作，设置案例的修改时间
		    else if(caseSn != null && caseSn != "")
			{
			con.setUpdate_date(format.format(now));
			con.setUpdater_id(user.getUid());
			}
			con.setDocType(1);
			//保存岗位
			try{ 
				this.setDepIds(con, req);
			} catch (Exception e) {
			}
			//取得页面中选择好的知识分类ID，保存下来
	        String kno_id = req.getParameter("kno_id");
	        con.setKnowledgeId(kno_id);
	        //假如新增操作，保存案例的编号规则，修改操作则不做此操作
	        if(caseSn == "" || caseSn == null)
	        {
	        	KnowledgeCategoryBo k = knowledgeCategoryService.getKnowledgeCategory(kno_id);
	    		String knoSn = k.getSn();
	    		SysCodeBo sysCodeBo = sysCodeService.getSysCodeCaseDoc();
	    		DecimalFormat df = new DecimalFormat("0000");
	    	 	String j = df.format(Integer.parseInt(sysCodeBo.getMaxSerial().toString())+1);
	    	 	String caseDocSn = "DC-" + StringTool.getKnoSnStr(knoSn) + "-SN" + j;
	    	 	con.setSn(caseDocSn);
	        }
	        
	    String resourceId = "";
	    
	    //如果是从培训班新建，则状态默认已发布
	    if(StringUtils.isNotEmpty(tcid)){
			con.setStatus(1);
	    }
	    Return re = docService.newDoc(con);
	    
	    //生成待办事项
	    if(user.getOrg().getLevel()==3){
	    	noticeService.noticeResource(user.getOrg().getOrgId());
	    }
	    
	    String next = req.getParameter("_next");
		String back = req.getParameter("_back");
		String outCode = req.getParameter("outCode");
		String uplodSrc = req.getParameter("uplodSrc");
		String dID = req.getParameter("dId");
		
           if(re!=null){
        	   //保存案例上传的图片
			if(outCode!=null && outCode != ""){
				ResPicBo cpc = new ResPicBo();
				cpc.setOutCode(outCode);
				if(dID != "" && dID != null)
	   			{
				DocBo doc = docService.getDoc(dID);
				cpc.setResId(doc.getRes().getRbId());
				if(doc.getRes().getPic() != null)
				{
				cpc.setRpId(doc.getRes().getPic().getRpId());
				}
	   			}
				//如果是新建案例，则要保存资源ID
				if(dID == "" || dID == null){
				String resBaseId = (String) re.getContent();
				cpc.setResId(resBaseId);
				}
				resPicService.newResPic(cpc);	
			}
		}
     		//保存案例上传的文件
           if(uplodSrc!=null && uplodSrc != ""){
   			ResDataBo cda = new ResDataBo();
   			cda.setOutCode(uplodSrc);
   			if(dID != "" && dID != null)
   			{
   			DocBo doc = docService.getDoc(dID);
   			cda.setResId(doc.getRes().getRbId());
   			if(doc.getData() != null)
   			{
   			try{
   			String rdId = doc.getData().get(0).getRdId();
   			cda.setRdId(rdId);
   			}
   			catch (Exception e) {
			}
   			}
   			}
   			if(dID == "" || dID == null){
   				String resBaseId = (String) re.getContent();
   	   			cda.setResId(resBaseId);
   			}
   			cda.setType(0);
   			resDataService.newResData(cda);	
   			
   			resourceId= cda.getOutCode();
			resouseTaskService.catalog(task_name, resourceId);
   		   }

        //判断是否有培训班id，跳转到培训班课程设置页面
		if(StringUtils.isNotBlank(tcid)){
			if(re!=null&&re.getCode()!=null){
				TrainResourceCon tr = new TrainResourceCon();
				tr.settClass_id(tcid);
				tr.setResDoc_id(re.getCode());
				tr.setCreateDt(new Date());
				tr.setOperator_id(user.getUid());
				trainResourceService.saveAndUpdateTrainResourceDoc(tr);
			}
			return "redirect:/trainclass/course.html?&tag=doc&tcid="+tcid;
		}
		
		if(next!=null && !next.equals("")){
			return "redirect:caseDocList.html?closeSelf=true";
		}else if(back!=null && !back.equals("")){
			return "redirect:caseDocList.html?closeSelf=true";
		}else{
			DocBo docc = docService.getDoc(con.getdId());
			String dId = docc.getdId();
			model.put("dId", dId);
			model.put("doc", docc);
			return "redirect:caseDocList.html?closeSelf=true";
		}
		
	}
   /**
    * 设置适用岗位信息，
    * @param con
    * @param req
    */
   private void setDepIds(DocCon con,HttpServletRequest req) {
	   String[] dep_ids = req.getParameterValues("dep_ids");  //新增岗位ID.
		String[] dep_Names = req.getParameterValues("dep_Names");//新增岗位名称.
		String str="";
		String pos = "";
		String strName = "";
		String posName = "";
		if(dep_ids != null) {
			for(int i = 0; i < dep_ids.length; i++) {
				if (dep_ids[i] != null && !"".equals(dep_ids[i])) {
					str+=dep_ids[i]+",";	
				}
			}
		}
		String[] positionIdArray = req.getParameterValues("positionIds");  //修改岗位ID.
      if (positionIdArray != null) {
			for (String s : positionIdArray) {
				if (s != null && !"".equals(s)) {
					str += (s + ",");
				}
			}
		}
      if (dep_ids != null || positionIdArray != null) {
      	 pos = str.substring(0,str.length()-1); 
      	 con.setPositionIds(pos);
      }
		
		if(dep_Names != null) {
			for(int i = 1; i < dep_Names.length; i++)  {
				if (dep_Names[i] != null && !"".equals(dep_Names[i])) {
					if(i!=dep_Names.length-1) {
						strName+=dep_Names[i]+",";	
					} else {
						strName+=dep_Names[i];
					}
				}
			}
 	    }
		String[] positionNameArray = req.getParameterValues("positionNames");//修改岗位名称.
		if (positionNameArray != null) {
			for (int i = 1; i < positionNameArray.length; i++) {
				if (positionIdArray[i] != null && !"".equals(positionIdArray[i])) {
					if(i!=positionNameArray.length-1) {
						strName+=positionNameArray[i]+",";	
					} else {
						strName+=positionNameArray[i];
					}
				}
			}
		}
		if (dep_Names != null || positionNameArray != null) {
			posName = strName; 
	   	    con.setPositionNames(posName);
	   	    con.setApplyObject(posName);
		}
   }
    //批量删除资源案例
	@RequestMapping(value="deleteCaseDoc.html",method=RequestMethod.POST)
	@ResponseBody
	public Return deleteCaseDocByItems(HttpServletRequest req,HttpServletResponse res,@RequestParam("groupTypeId") String items){

		Return ret = docService.removeDocs(items);
		if(ret != null){}
		return ret;
	}
	
	//批量删除资源案例图文
	@RequestMapping(value="deleteCaseDocPic.html",method=RequestMethod.POST)
	@ResponseBody
	public Return deleteCaseDocPicByItems(HttpServletRequest req,HttpServletResponse res,@RequestParam("groupTypeId") String items){

		Return re = docService.removeDocs(items);
		if(re != null){}
		return re;
	}
	
	//设置精品课程
	@RequestMapping(value="doSaveCaseDocRes.html",method=RequestMethod.POST)
	@ResponseBody
		public Return doSaveCaseDocRes(@RequestParam("groupTypeId") String dId,HttpServletRequest req,ModelMap model){
		//String dId = req.getParameter("groupTypeId");
		//判断选择好的案例不是精品不是历史，是公开的则操作
		Return result = new Return("success");//操作对于页面显示来说总是成功的.
		if (dId != null) {
			String[] cIdArray = dId.split(",");
			for (String s : cIdArray) {
				if (s != null && !"".equals(s.trim())) {
					try {
						DocCon con = new DocCon();
						DocBo c = docService.getDoc(s);
						if ((c.getRes().getElite() == null || c.getRes().getElite() == 0) && c.getRes().getIsPub() == 1) {
							con.setdId(s);
							con.setElite(1);
							//此处设为精华资源时添加设置时间，以做student精品资源排序只用 by Luchao LMSWD-3633
							con.setElite_date(DateTool.getNormal());
							
							docService.newDoc(con);
						}
					} catch (Exception e) {
						//logger.error(e.getMessage());
						continue;
					}
				}
			}
		}
		return result;
		}
	
	 //设置历史课程
	@RequestMapping(value="doSaveCaseDocByLs.html",method=RequestMethod.POST)
	@ResponseBody
		public Return doSaveCaseDocByLs(HttpServletRequest req,ModelMap model){
		DocCon con = new DocCon();
		String dId = req.getParameter("groupTypeId");
		DocBo doc = docService.getDoc(dId);
		//判断选择好的案例还没有归纳为历史则操作
		if(doc.getRes().getElite() == null || doc.getRes().getElite() == 0)
		{
			con.setdId(dId);
			con.setHistory(1);
			Return re = docService.newDoc(con);
			return re;
		}
		return null;

		}
	
	/**
	 * 更改案例状态
	 */
	   @RequestMapping(value="updateCaseDoc.html",method=RequestMethod.POST)
	   @ResponseBody
	   public Return updateStatus(DocCon con, HttpServletRequest request){
		    UserInfoBo userd = (UserInfoBo) request.getSession().getAttribute("user"); 
			String user = userd.getUid();
			con.setUpdater_id(user);
			GregorianCalendar gc = new GregorianCalendar();
			Date now = gc.getTime();
			SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			con.setUpdate_date(format.format(now));
			Return re = docService.newDoc(con);
			return re;
		}
	   
	 //根据岗位Id得到岗位的全名字
	   @RequestMapping(value="toShowAllOrg.html",method=RequestMethod.GET)
	   @ResponseBody
		public String toShowAllOrg(HttpServletRequest req,ModelMap model,HttpServletResponse response) throws IOException{
		   try {
			   String orgId = req.getParameter("orgId");
			    String orgName = organizationService.getOrganizationNamepath(orgId).substring(1);
				return orgName;
		} catch (Exception e) {
		} 
		    return null;
		}
	   
	 //悬浮根据岗位Id得到岗位的全名字
	   @RequestMapping(value="toShowAllOrgName.html",method=RequestMethod.GET)
	   @ResponseBody
		public String toShowAllOrgName(HttpServletRequest req,ModelMap model,HttpServletResponse response) throws IOException{
		    try {
		    	String orgId = req.getParameter("orgId");
		    	String str="";
				String pos = "";
				List list = new ArrayList(); 
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
			} catch (Exception e) {
			}
		    return null;
		}
	  
}
