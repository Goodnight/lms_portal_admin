package com.telecom.lms.portal.admin.control.demand;

import java.util.HashMap;
import java.util.List;

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
import com.telecom.lms.core.bo.demand.DmdItemBo;
import com.telecom.lms.core.bo.demand.DmdItemCon;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.core.bo.train.TrainClassStudentBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.demand.DmdItemService;
import com.telecom.lms.sdk.service.demand.param.DmdItemParam;
import com.telecom.lms.sdk.util.DateTool;

@Controller
@RequestMapping("/demand")
public class DemandItemCtr {
	@Autowired
	private  DmdItemService diService;
	public static final String DAMANDITEM_TYPE_NORMAL = "normal";
	/**
	 * 跳转培训需求调查首页
	 */
    @RequestMapping(value = "demandItemIndex.html",method = RequestMethod.GET)
	public ModelAndView turnIndex(HttpServletRequest req,HttpServletResponse res,ModelMap model){
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user"); 
    	model.put("user", user);
		return new ModelAndView("demand/demandItemIndex1",model);
	}
    /**
     * 跳转新建需求调查
     */
    @RequestMapping(value = "demandItemNew.html",method = RequestMethod.GET)
    public ModelAndView newNeedInquiry(HttpServletRequest req,HttpServletResponse res,ModelMap model){
    	String id = req.getParameter("id");
    	if(null!=id){
    		DmdItemParam dtp = new DmdItemParam();
    		dtp.setId(id);
    		DmdItemBo  dtb = diService.getDmdItem(dtp);
    		model.put("dmdItem", dtb);
    	}else{
    		model.put("dmdItem", new DmdItemBo());
    	}
    	
    	return new ModelAndView("demand/demandItemNew",model);
    }
    
    /**
     * 保存新建后的需求调查信息
     */
    @RequestMapping(value = "saveItem.html",method = RequestMethod.POST)
    public ModelAndView saveItem(HttpServletRequest req,ModelMap model,DmdItemCon dtc){
    	if("".equals(dtc.getDtId())){
    		dtc.setDtId(null);
    	}
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user"); 
    	String sn_old=req.getParameter("sn_old");
    	if(!sn_old.equals(dtc.getSn()))
    	{
			List<DmdItemBo> list = this.query(req,DAMANDITEM_TYPE_NORMAL);
			if(list!=null && !list.isEmpty()){			
				return new ModelAndView("redirect:errorDemandItem.html",model);	
			}else{
				dtc.setCreater_id(user.getUid());
		    	dtc.setCreateDate(DateTool.getNowShort());
		    	diService.newDmdItem(dtc);
		       	return new ModelAndView("redirect:demandItemIndex.html",model);	
			}	
		}
    	else
    	{
    		dtc.setCreater_id(user.getUid());
	    	dtc.setCreateDate(DateTool.getNowShort());
	    	diService.newDmdItem(dtc);
	       	return new ModelAndView("redirect:demandItemIndex.html",model);	
    	}
    	
    }
    
	/**
	 * 需求需求收集项错误信息
	 */
	@RequestMapping(value = "errorDemandItem.html", method = RequestMethod.GET)
	public ModelAndView errorInquiry(HttpServletRequest req, ModelMap model) {
		return new ModelAndView("demand/errorDemandItem", model);
	}
    
	/**
	 * 批量删除培训班
	 */
	@RequestMapping(value="deleteItem.html",params="method=remove",method=RequestMethod.POST)
	@ResponseBody
	public Return deleteDmdItems(HttpServletRequest req,HttpServletResponse res,@RequestParam("dtIds") String ids){
		DmdItemParam dtp = new DmdItemParam();
		String delIds = ids.substring(0, ids.length()-1);
		dtp.setId(delIds);
		Return re = diService.removeDmdItems(dtp);
		return re;
	}
	
	public List<DmdItemBo> query(HttpServletRequest request, String type) {
		String sn = request.getParameter("sn");		
		DmdItemParam dp= new DmdItemParam();
		dp.setSn(sn);
		List<DmdItemBo> list = diService.getDmdItems(dp);
		return list;
	}
}
