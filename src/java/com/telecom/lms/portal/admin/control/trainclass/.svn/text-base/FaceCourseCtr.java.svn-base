package com.telecom.lms.portal.admin.control.trainclass;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.core.bo.train.TrainFaceCourseBo;
import com.telecom.lms.core.bo.train.TrainFaceCourseCon;
import com.telecom.lms.core.bo.train.TrainResourceCon;
import com.telecom.lms.portal.admin.util.StringTool;
import com.telecom.lms.sdk.service.basic.SysCodeService;
import com.telecom.lms.sdk.service.imp.ImportTrainFaceCourseService;
import com.telecom.lms.sdk.service.train.TrainClassService;
import com.telecom.lms.sdk.service.train.TrainFaceCourseService;
import com.telecom.lms.sdk.service.train.TrainResourseService;
import com.telecom.lms.sdk.util.DateTool;


@Controller
@RequestMapping("/facecourse")
public class FaceCourseCtr {
	@Autowired TrainFaceCourseService faceCourseService;
	@Autowired TrainResourseService resService;
	@Autowired TrainClassService tcService;
	
	@Autowired ImportTrainFaceCourseService importTrainFaceCourseService;
	@Autowired SysCodeService codeService;

   @RequestMapping(value="new.html")
   public String newFace(HttpServletRequest request, ModelMap model){
	    String tcid = request.getParameter("tcid");
	    TrainClassBo tc = tcService.getTrainClass(tcid);
	    model.put("tc", tc);
	    return "train/facecourse_new";
  }
   
   @RequestMapping(value="update.html")
   public String updateFace(HttpServletRequest request, ModelMap model){
	   String cid = request.getParameter("cid");
	   String tcid = request.getParameter("tcid");
	   TrainFaceCourseBo f = faceCourseService.getTrainFaceCourse(cid);
	   TrainClassBo tc = tcService.getTrainClass(tcid);
	   model.put("f", f);
	    model.put("tc", tc);
	    if(f.getKcb()!=null){
	    	model.put("knoId",f.getKcb().getKcId());
	 	    model.put("knoNamePath", f.getKcb().getName());
	    }
	   return "train/facecourse_new";
   }
   
   @RequestMapping(value="save.html",method=RequestMethod.POST)
   public String save(TrainFaceCourseCon fc,HttpServletRequest request, ModelMap model){
	   UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
	   String tcid = request.getParameter("tcid");
	   String[] pids = request.getParameterValues("position");
	   if(pids!=null && pids.length>0){
		   fc.setPositionIds(StringTool.getString(pids, StringTool.SPLIT_COMMA));
	   }
	   String startdate = fc.getStartTime();
	   String enddate = fc.getEndTime();
	   String startHour = request.getParameter("startHour");
	   String startMinute = request.getParameter("startMinute");
	   String endHour = request.getParameter("endHour");
	   String endMinute = request.getParameter("endMinute");
	   String kcId = request.getParameter("class_dep"); //获取所选择的知识点的kcId
	   fc.setStartTime(startdate+" " +startHour+":"+startMinute+":00");
	   fc.setEndTime(enddate+" "+endHour+":"+endMinute+":00");
	   if(fc.getClassHour()!=null){
		   fc.setClassHour(fc.getClassHour()*60);//转换成分钟保存
	   }
	   fc.setStatus(1);
	   fc.setSn("fc-"+DateTool.getNowShort()+"-"+codeService.getSysCodeFace().getMaxSerial());
	   fc.setKc_kcId(kcId);
	   Return re = faceCourseService.newTrainFaceCourse(fc);
	   if(re!=null && StringUtils.isBlank(fc.getcId())){
		   TrainResourceCon tr = new TrainResourceCon();
		   tr.setLogo(2);
		   tr.setResFc_id(re.getCode());
		   tr.settClass_id(tcid);
		   tr.setOperator_id(user.getUid());
		   tr.setCreateDt(new Date());
		   resService.saveAndUpdateTrainResourceFaceCourse(tr);
	   }
	   return "redirect:../trainclass/course.html?&tag=face&tcid="+tcid;
   }
 
    //批量删除
	@RequestMapping(value="delete.html",method=RequestMethod.POST)
	@ResponseBody
	public Return deleteCoursewareByItems(HttpServletRequest req,HttpServletResponse res,@RequestParam("ids") String items){
		String[] ids = req.getParameterValues("id");
//		Return re = faceCourseService.removeFaceCourses(StringUtil.getString(ids, StringUtil.SPLIT_COMMA));
		return null;
	}

}
