package com.telecom.lms.portal.admin.control.reward;
//积分奖励管理
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.reward.ScoreUserGainBo;
import com.telecom.lms.core.bo.reward.ScoreUserGainCon;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.auth.param.UserInfoParam;
import com.telecom.lms.sdk.service.imp.ImportScoreUserGainService;
import com.telecom.lms.sdk.service.reward.ScoreUserGainService;
import com.telecom.lms.sdk.service.train.TrainTypeService;

@Controller
@RequestMapping("/rewardScoreUserGain")
public class ScoreUserGainCtr {

	@Autowired ScoreUserGainService scoreUserGainService;
	@Autowired ImportScoreUserGainService importScoreUserGainService;
	@Autowired TrainTypeService tpService;
	@Autowired UserInfoService userInfoService;
	private @Value("#{lmsapi.filePath}")String filePath ;
	

	/**
	 * 个人积分奖励首页
	 */
	@RequestMapping(value="scoreUserGainList.html",method=RequestMethod.GET)
	public ModelAndView inquiryScoreUserGain(@RequestParam("uid") String uid,HttpServletRequest req,HttpServletResponse res,ModelMap model){
		model.put("uid", uid);
		List<SysParamBo> gainList = tpService.getGainStatus();
		model.put("gainList", gainList);
		return new ModelAndView("scoreUser/rewardPointsList", model);
	}
	
	/**
	 * 个人积分奖励积分申请详情
	 */
	   @RequestMapping(value="toScoreUserGainById.html",method=RequestMethod.GET)
	   public ModelAndView getScoreUserGainById(@RequestParam("sugId") String sugId,@RequestParam("uid") String uid,ModelMap model){
		   ScoreUserGainBo scoreUserGain = scoreUserGainService.getScoreUserGain(sugId);
		   model.put("scoreUserGain", scoreUserGain);
		   model.put("sugId", sugId);
		   model.put("uid", uid);
		   UserInfoParam p = new UserInfoParam();
		   p.setId(uid);
		   UserInfoBo user = userInfoService.getUserInfo(p);
		   String userName = user.getName();
		   model.put("userName", userName);
		   if(scoreUserGain.getGainCategory().getSpId().equals("402882f03878d25a013878e884530002") || scoreUserGain.getGainCategory().getSpId().equals("402882f03878d25a013878e885ca0005"))
		   {
		   return new ModelAndView("scoreUser/scorePoints", model);
		   }
		   else
		   {
		   return new ModelAndView("scoreUser/rewardsPointsApplication", model);
		   }
	  }
	   
	 //修改个人奖励积分审批状态
	   @RequestMapping(value="doSaveScoreUserC.html",method=RequestMethod.POST)
		public String doSaveScoreUserC(ScoreUserGainCon con,HttpServletRequest req,ModelMap model){
	
		   con.setGain_type_id("1");
		   con.setStauts(1);
		  
		   Return re = scoreUserGainService.saveAndUpdateScoreUserGain(con);
		   String next = req.getParameter("_next");
			String back = req.getParameter("_back");
			
			if(next!=null && !next.equals("")){
				return "redirect:../rewardScoreUser/scoreUserApplyCostList.html";
			}else if(back!=null && !back.equals("")){
				return "redirect:../rewardScoreUser/scoreUserApplyCostList.html";
			}else{
				ScoreUserGainBo score = scoreUserGainService.getScoreUserGain(con.getUser_id());
				model.put("score", score);
				return "forward:scoreUserGainList.html";
			}
			
		}
	   
	   //跳转导入页面
	   @RequestMapping(value="toUplodScoreUserGain.html",method=RequestMethod.GET)
		public ModelAndView toUplodScoreUserGain(HttpServletRequest req,HttpServletResponse res,ModelMap model){
			
			return new ModelAndView("scoreUser/showFire", model);
		}
	   
	   //导入积分
	   @RequestMapping(value="doUplodScoreGain.html",method=RequestMethod.POST)
		public String doUplodScoreGain(HttpServletRequest req,ModelMap model,@RequestParam("file") MultipartFile file) throws IOException{
		   if(!file.isEmpty()){
	
		   UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user"); 
		   String filePaths = req.getRealPath("/")+filePath  + file.getOriginalFilename();

		   InputStream in = file.getInputStream();
			FileOutputStream fs = new FileOutputStream(filePaths);  
			byte[] buffer = new byte[1024 * 1024];  
			int bytesum = 0;  
			int byteread = 0;  
			while ((byteread = in.read(buffer)) != -1) {  
				 bytesum += byteread;  
				 fs.write(buffer, 0, byteread);  
				 fs.flush();  
			 }  
			fs.close();  
			 in.close();
			Return re = importScoreUserGainService.imp(filePaths, user.getUid());
			   String reult = "";
			   if(re.getCode().equals("success"))
			   {
				   reult = "导入成功";
			   }
			   else
			   {
				   reult = "导入失败";
			   }
			   
		   }
		   String next = req.getParameter("_next");
			if(next!=null && !next.equals("")){
				return "redirect:scoreUserGainList.html";
			}
			return "redirect:scoreUserGainList.html";
			
		}
}
