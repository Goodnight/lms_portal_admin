package com.telecom.lms.portal.admin.control.demand;

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
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.demand.DmdTopicBo;
import com.telecom.lms.core.bo.demand.DmdTopicCon;
import com.telecom.lms.sdk.service.demand.DmdTopicService;
import com.telecom.lms.sdk.service.demand.param.DmdTopicParam;
import com.telecom.lms.sdk.util.DateTool;

@Controller
@RequestMapping("/demand")
public class DemandTopicCtr {
	@Autowired
	private  DmdTopicService dtService;
	
	/**
	 * 跳转培训需求调查首页
	 */
    @RequestMapping(value = "demandTopicIndex.html",method = RequestMethod.GET)
	public ModelAndView turnIndex(HttpServletRequest req,HttpServletResponse res,ModelMap model){
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user"); 
    	model.put("user", user);
		return new ModelAndView("demand/demandTopicIndex1",model);
	}
    /**
     * 跳转新建需求调查
     */
    @RequestMapping(value = "demandTopicNew.html",method = RequestMethod.GET)
    public ModelAndView newNeedInquiry(HttpServletRequest req,HttpServletResponse res,ModelMap model){
    	String id = req.getParameter("id");
    	if(null!=id){
    		DmdTopicParam dtp = new DmdTopicParam();
    		dtp.setId(id);
    		DmdTopicBo  dtb = dtService.getDmdTopic(dtp);
    		model.put("isBool", dtb.getStatus()==1?true:false);
    		model.put("dmdTopic", dtb);
    	}else{
    		model.put("dmdTopic", new DmdTopicBo());
    	}
    	
    	return new ModelAndView("demand/demandTopicNew",model);
    }
    
    /**
     * 保存新建后的需求调查信息
     */
    @RequestMapping(value = "saveTopic.html",method = RequestMethod.POST)
    public ModelAndView saveTopic(HttpServletRequest req,ModelMap model,DmdTopicCon dtc){
    	if("".equals(dtc.getDtId())){
    		dtc.setDtId(null);
    	}
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user"); 
    	dtc.setStatus(0);
    	dtc.setCreaterId(user.getUid());
    	dtService.newDmdTopic(dtc);
       	return new ModelAndView("redirect:demandTopicIndex.html",model);
    }
    
	/**
	 * 批量删除培训班
	 */
	@RequestMapping(value="deleteTopic.html",params="method=remove",method=RequestMethod.POST)
	@ResponseBody
	public Return deleteDmdTopics(HttpServletRequest req,HttpServletResponse res,@RequestParam("dtIds") String ids){
		DmdTopicParam dtp = new DmdTopicParam();
		String delIds = ids.substring(0, ids.length()-1);
		dtp.setId(delIds);
		Return re = dtService.removeDmdTopics(dtp);
		return re;
	}
    /**
     * 修改新建后的需求调查信息
     */
    @RequestMapping(value = "updateTopic.html",method = RequestMethod.GET)
    public ModelAndView updateTopic(HttpServletRequest req,ModelMap model,DmdTopicParam dtc){
    	dtService.updateDmdTopicStatus(dtc);
       	return new ModelAndView("redirect:demandTopicIndex.html",model);
    }
	
}
