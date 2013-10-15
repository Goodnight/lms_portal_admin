package com.telecom.lms.portal.admin.control.reward;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.omg.CORBA.DATA_CONVERSION;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.reward.ScoreDepBo;
import com.telecom.lms.core.bo.reward.ScoreDepCostCon;
import com.telecom.lms.core.bo.reward.ScoreUserBo;
import com.telecom.lms.core.bo.reward.ScoreUserCostBo;
import com.telecom.lms.core.bo.reward.ScoreUserCostCon;
import com.telecom.lms.core.bo.reward.ScoreUserGainBo;
import com.telecom.lms.core.bo.reward.ScoreUserGainCon;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.core.bo.train.TrainClassCon;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.Node;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.auth.param.UserInfoParam;
import com.telecom.lms.sdk.service.reward.ScoreDepGainService;
import com.telecom.lms.sdk.service.reward.ScoreDepService;
import com.telecom.lms.sdk.service.reward.ScoreUserCostService;
import com.telecom.lms.sdk.service.reward.ScoreUserGainService;
import com.telecom.lms.sdk.service.reward.ScoreUserService;
import com.telecom.lms.sdk.service.train.TrainTypeService;

@Controller
@RequestMapping("/rewardScoreUser")
public class ScoreUserCtr {

	@Autowired ScoreUserService scoreUserService;
	@Autowired ScoreUserCostService scoreUserCostService;
	@Autowired ScoreUserGainService scoreUserGainService;
	@Autowired CommonService commonService;
	@Autowired TrainTypeService trainTypeService;
	@Autowired UserInfoService userInfoService;
	@Autowired OrganizationService organizationService;
	@Autowired ScoreDepService scoreDepService;
	@Autowired TrainTypeService tpService;
	
	/**
	 * 个人积分首页
	 */
	@RequestMapping(value="scoreUserList.html",method=RequestMethod.GET)
	public ModelAndView inquiryScoreUser(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		
		return new ModelAndView("scoreUser/scoreUserList", model);
	}  
	
	/**
	 * 个人审批积分申请
	 */
	@RequestMapping(value="scoreUserApplyCostList.html",method=RequestMethod.GET)
	public ModelAndView getScoreUserById(@RequestParam("uid") String uid,HttpServletRequest req,HttpServletResponse res,ModelMap model){
		model.put("uid", uid);
		List<SysParamBo> gainList = tpService.getGainType();
		model.put("gainList", gainList);
		return new ModelAndView("scoreUser/approvalIntegralApplication", model);
	}
	
	/**
	 * 个人审批积分兑换
	 */
	@RequestMapping(value="scoreUserByForCostList.html",method=RequestMethod.GET)
	public ModelAndView getScoreUserForCostById(@RequestParam("uid") String uid,HttpServletRequest req,HttpServletResponse res,ModelMap model){
		model.put("uid", uid);
		List<SysParamBo> costList = tpService.getRewardCostType();
		model.put("costList", costList);
		return new ModelAndView("scoreUser/approvalCostApplication", model);
	}
	
	/**
	 * 个人积分维护
	 */
	   @RequestMapping(value="toScoreUserCostById.html",method=RequestMethod.GET)
	   public ModelAndView getScoreUserCostById(@RequestParam("uid") String uid,@RequestParam("sId") String sId,ModelMap model){
		   List<SysParamBo> gainTypeList = trainTypeService.getGainType();
		   List<SysParamBo> rewardCostList = trainTypeService.getRewardCostType();
		   List<SysParamBo> rewardCostRangeTypeList = trainTypeService.getRewardCostRangeType();
		   model.put("uid", uid);
		   
		   //根据指定员工查看个人的积分剩余总值
		   ScoreUserBo scoreUser = scoreUserService.getScoreUser(sId);
		   UserInfoParam p = new UserInfoParam();
		   p.setId(uid);
		   UserInfoBo user = userInfoService.getUserInfo(p);
		   String userName=user.getName();
		   //查看指定用户所在部门 的剩余积分
		   String orgId = user.getOrg().getOrgId();
		   Map<String, String> con = new HashMap<String, String>();
		   con.put("dep_id", orgId);
		   try{
		   Collection<ScoreDepBo> scoreBaseDepList = scoreDepService.getScoreDeps(con, null,null);
		   Integer depTotalUsableScore = scoreBaseDepList.getData().get(0).getTotalUsableScore();
		   model.put("depTotalUsableScore", depTotalUsableScore);
		   }
		   catch (Exception e) {
		}
		   OrganizationBo organizationBo = organizationService.getOrganization(orgId);
		   String orgName = organizationBo.getName();
		   model.put("orgId", orgId);
		   model.put("orgName", orgName);
		   model.put("userName", userName);
		   model.put("gainTypeList", gainTypeList);
		   model.put("rewardCostList", rewardCostList);
		   model.put("rewardCostRangeTypeList", rewardCostRangeTypeList);
		   model.put("scoreUser", scoreUser);
		   model.put("uid", uid);
		   return new ModelAndView("scoreUser/integralMaintenance", model);
	  }
	   
	   /**
		 * 所有个人奖励积分审批批准
		 */
		   @RequestMapping(value="updateScoreUserGain.html",method=RequestMethod.POST)
		   @ResponseBody
		   public String updateScoreUserGain(HttpServletRequest request, ModelMap model){
			   String[] sugIds = request.getParameterValues("groupTypeId");
			   for(String sugId : sugIds){
				   ScoreUserGainCon sc = new ScoreUserGainCon();
				   sc.setSugId(sugId);
				   sc.setStauts(1);
				   scoreUserGainService.saveAndUpdateScoreUserGain(sc);
			   }
			  return null;
		   }
		   
		   /**
			 * 所有个人奖励积分审批不批准
			 */
			   @RequestMapping(value="updateScoreUserGainForNo.html",method=RequestMethod.POST)
			   @ResponseBody
			   public String updateScoreUserGainForNo(HttpServletRequest request, ModelMap model){
				   String[] sugIds = request.getParameterValues("groupTypeId");
				   for(String sugId : sugIds){
					   ScoreUserGainCon sc = new ScoreUserGainCon();
					   sc.setSugId(sugId);
					   sc.setStauts(2);
					   scoreUserGainService.saveAndUpdateScoreUserGain(sc);
				   }
				  return null;
			   }
			   
			   /**
				 * 所有个人使用积分审批批准
				 */
				   @RequestMapping(value="updateScoreUserCost.html",method=RequestMethod.POST)
				   @ResponseBody
				   public String updateScoreUserCost(HttpServletRequest request, ModelMap model){
					   String uid = request.getParameter("uid"); 
					   String[] sucIds = request.getParameterValues("groupTypeId");
					   String scId = request.getParameter("scId");
					   Integer score = Integer.parseInt(scId);
					   for(String sucId : sucIds){
						   ScoreUserCostCon sc = new ScoreUserCostCon();
						   sc.setSucId(sucId);
						   sc.setStauts(1);
						   sc.setUser_id(uid);
						   sc.setScore(score);
						   scoreUserCostService.saveAndUpdateScoreUserCost(sc);
					   }
					  return null;
				   }
				   
				   /**
					 * 所有个人使用积分审批不批准
					 */
					   @RequestMapping(value="updateScoreUserCostForNo.html",method=RequestMethod.POST)
					   @ResponseBody
					   public String updateScoreUserCostForNo(HttpServletRequest request, ModelMap model){
						   String[] sucIds = request.getParameterValues("groupTypeId");
						   for(String sucId : sucIds){
							   ScoreUserCostCon sc = new ScoreUserCostCon();
							   sc.setSucId(sucId);
							   sc.setStauts(2);
							   scoreUserCostService.saveAndUpdateScoreUserCost(sc);
						   }
						  return null;
					   }
	   
		//个人积分分配
	@RequestMapping("toScoreUserAvg.html")
	public String toScoreUserAvg(@RequestParam("groupTypeId") String items,ModelMap model){
		List<SysParamBo> gainTypeList = trainTypeService.getGainType();
		Collection<ScoreUserBo> scoreUserList = (Collection<ScoreUserBo>) model.get("scoreUserList");
		model.put("scoreUser", scoreUserList);
		model.put("items", items);
		//分割逗号
		String iDs = items.substring(12, items.length());
		String[] strArray = null;   
	    strArray = iDs.split(","); 
	    List list = new ArrayList(); 
	    String str="";
		String pos = "";
	    for(String uID : strArray)
	    {
	    	 UserInfoParam p = new UserInfoParam();
			   p.setId(uID);
			   UserInfoBo user = userInfoService.getUserInfo(p);
			   String useNames = user.getName();
			   list.add(useNames);
	    }
	    for(int i = 0; i < list.size(); i++)
        {
        	 str+="<label class='speciallabel'>"+list.get(i)+"</label>"+" ";	
        }
        pos = str.substring(0,str.length()-1); 
      //拿到第一个ID
		model.put("iDs", iDs);
        model.put("pos", pos);
	    model.put("items", items);
		model.put("gainTypeList", gainTypeList);
		return "scoreUser/pointsAllocation";
	}
	
	//添加个人积分分配
	   @RequestMapping(value="doSaveScoreUserAvg.html",method=RequestMethod.POST)
		public String doSaveScoreUserAvg(ScoreUserGainCon con,HttpServletRequest request,ModelMap model){
		   GregorianCalendar gc = new GregorianCalendar();
		   Date now = gc.getTime();
		   gc.add(GregorianCalendar.YEAR, 4);
		   Date end = gc.getTime();
		   SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		   String uIDs = request.getParameter("items");
		   String iDs = uIDs.substring(12, uIDs.length());
		   con.setUser_id(iDs);
		   con.setStauts(1);
		    con.setGain_time(format.format(now));
		    con.setEnd_time(format.format(end));
		    con.setGain_type_id("ff808081385bcac601385bd010f00073");
			Return re = scoreUserGainService.saveAndUpdateScoreUserGainAll(con);
			String next = request.getParameter("_next");
			String back = request.getParameter("_back");
			if(next!=null && !next.equals("")){
				return "redirect:scoreUserList.html";
			}else if(back!=null && !back.equals("")){
				return "redirect:scoreUserList.html";
			}else{
				ScoreUserGainBo sc = scoreUserGainService.getScoreUserGain(con.getSugId());
				model.put("sc", sc);
				return "forward:pointsAllocation";
			}
		}
	
	
	
	   //添加积分兑换
	   @RequestMapping(value="doSaveScoreUserCost.html",method=RequestMethod.POST)
		public String doSaveScoreUserCost(ScoreUserCostCon con,HttpServletRequest request,ModelMap model){
		    con.setStauts(1);
		    String uid = request.getParameter("uid");
		    String nam = request.getParameter("iname");
		    String purpose=request.getParameter("purposea");
		    //-------------------------debug：gaoxinlong--------------------------- 
		      Integer	totalScore=	 Integer.parseInt(request.getParameter("totalScore"));
		   
		    	if(totalScore-con.getScore()<0){
                    System.out.println(totalScore+"dd");
                     System.out.println(totalScore-con.getScore());
		    		 return "redirect:scoreUserList.html";
		    	}
		   
		    //--------------------------------------------------------------------
		    con.setUser_id(uid);
		    con.setPurpose(purpose);
		    con.setCostType_id("ff808081385bcac601385bd011670076");
			Return re = scoreUserCostService.saveAndUpdateScoreUserCost(con);
			String next = request.getParameter("_next");
			String back = request.getParameter("_back");
			if(next!=null && !next.equals("")){
				return "redirect:scoreUserList.html";
			}else if(back!=null && !back.equals("")){
				return "redirect:scoreUserList.html";
			}else{
				ScoreUserCostBo sc = scoreUserCostService.getScoreUserCost(con.getSucId());
				model.put("sc", sc);
				return "forward:integralMaintenance";
			}
		}
	   
	   @RequestMapping(value="doSaveScoreUserGain.html",method=RequestMethod.POST)
		public String doSaveScoreUserGain(ScoreUserGainCon con,HttpServletRequest request,ModelMap model){
		   GregorianCalendar gc = new GregorianCalendar();
		   Date now = gc.getTime();
		   gc.add(GregorianCalendar.YEAR, 4);
		   Date end = gc.getTime();
		   SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		    con.setGain_time(format.format(now));
		    con.setEnd_time(format.format(end));
		    con.setStauts(1);
		    con.setGain_type_id("ff808081385bcac601385bd010f00073");
			Return re = scoreUserGainService.saveAndUpdateScoreUserGain(con);
			String next = request.getParameter("_next");
			String back = request.getParameter("_back");
			if(next!=null && !next.equals("")){
				return "redirect:scoreUserList.html";
			}else if(back!=null && !back.equals("")){
				return "redirect:scoreUserList.html";
			}else{
				ScoreUserGainBo sc = scoreUserGainService.getScoreUserGain(con.getSugId());
				model.put("sc", sc);
				return "forward:integralMaintenance";
			}
		}
	   
	 //根据岗位Id得到岗位的全名字
	   @RequestMapping(value="toShowAllOrg.html",method=RequestMethod.GET)
	   @ResponseBody
		public String toShowAllOrg(HttpServletRequest req,ModelMap model,HttpServletResponse response) throws IOException{
		    
		    String orgId = req.getParameter("orgId");
		    String orgName = organizationService.getOrganizationNamepath(orgId);
			return orgName;
		}
	   
	   
}
