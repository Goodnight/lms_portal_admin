package com.telecom.lms.portal.admin.control.trainclass;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.train.TrainClassTeacherBo;
import com.telecom.lms.core.bo.train.TrainClassTeacherCon;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.train.TrainClassTeacherService;

@Controller
@RequestMapping("/teacher")
public class TeacherCtr {
	@Autowired TrainClassTeacherService teacherService;
	
	@RequestMapping("new.html")
	public String toNew(HttpServletRequest request, ModelMap model){
		
		return "";
	}
	
	@RequestMapping(value="save.html",method=RequestMethod.POST)
	public String save(TrainClassTeacherCon con){
		
		return "";
	}
	
	@RequestMapping(value="delete.html",method=RequestMethod.POST)
	public Return delete(HttpServletRequest request){
		
		return null;
	}
	
	@RequestMapping(value="list.html",params="from=common")
	public String list(HttpServletRequest request, ModelMap model){
		
		return "";
	}
	
	@RequestMapping(value="list.html",params="from=common_radio")
	public String list4ChooseDialog(HttpServletRequest request, ModelMap model){
		Collection<TrainClassTeacherBo> list = teacherService.getTrainClassTeachers(null, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "";
	}
}
