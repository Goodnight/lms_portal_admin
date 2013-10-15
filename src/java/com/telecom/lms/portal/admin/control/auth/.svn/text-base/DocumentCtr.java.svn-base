package com.telecom.lms.portal.admin.control.auth;

import java.text.ParseException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.learn.LearnStatsBo;
import com.telecom.lms.core.bo.learn.LearnStatsCount;
import com.telecom.lms.core.bo.resources.VideoBo;
import com.telecom.lms.core.bo.statistic.TrainClassUserStatistic;
import com.telecom.lms.core.bo.survey.allow.SurveyAllowUserBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.learn.LearnStatsService;
import com.telecom.lms.sdk.service.resources.VideoUserService;
import com.telecom.lms.sdk.service.reward.ScoreUserCostService;
import com.telecom.lms.sdk.service.reward.ScoreUserGainService;
import com.telecom.lms.sdk.service.survey.SurveyAllowUserService;
import com.telecom.lms.sdk.service.train.TrainClassStudentService;


@Controller
@RequestMapping("/documents")
public class DocumentCtr {
	
	@Autowired SurveyAllowUserService surveyAllowUserService;
	@Autowired ScoreUserGainService scoreUserGainService;
	@Autowired ScoreUserCostService scoreUserCostService;
	@Autowired VideoUserService videoUserService;
	@Autowired LearnStatsService learnStatsService;
	@Autowired TrainClassStudentService trainClassStudentService;
	
	/**
	 * 调查评估列表
	 */
	@RequestMapping(value="documetForEstimateList.html",method=RequestMethod.GET)
	public ModelAndView documetForEstimateList(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		
		String userId = req.getParameter("uid");
		Map<String, String> con = new HashMap<String, String>();
		String topic = req.getParameter("topic");		
		//年份
		String year = req.getParameter("year");
		//用户ID
		con.put("userId",userId);
		con.put("topic", topic);
		con.put("year", year);
		con.put("status", "2"); //仅显示已发布的调查 20130328 by LTC
		String pagefn = req.getParameter("pagefn");
		model.put("pagefn", pagefn);
		con.put(PagerTool.PAGE_NO, PagerTool.getPageNo(req));
		con.put(PagerTool.PAGE_SIZE, PagerTool.getPageSize(req));
		Collection<SurveyAllowUserBo> list = surveyAllowUserService.getSurveyAllowUsers4Page(con);
		model.put("list", list);
		Integer countOne = 0;
		Integer countTwo = 0;
		Integer countThree = 0;
		Integer countFore = 0;
		Integer countFife = 0;
		if(list!=null&&list.getData()!=null&&list.getData().size()>0){
			if(list.getData().get(0).getCount()!=null&&list.getData().get(0).getCount().length()>0){
				String[] countAll= null;
				countAll = list.getData().get(0).getCount().split("/");
				countOne = Integer.parseInt(countAll[0]); 
				countTwo = Integer.parseInt(countAll[1]); 
				countThree = Integer.parseInt(countAll[2]); 
				countFore = Integer.parseInt(countAll[4]); 
				countFife = Integer.parseInt(countAll[3]); 
			}
			
		}	
		
		//在后天中得到页面中相关次数，不会随着查询条件分页的改变而改变
		Map<String, String> conT = new HashMap<String, String>();
		conT.put("userId",userId);
		conT.put("status", "2"); //仅显示已发布的调查 20130328 by LTC
		Collection<SurveyAllowUserBo> listT = surveyAllowUserService.getSurveyAllowUsers4Page(conT);
		
		model.put("countOne", countOne);
		model.put("countTwo", countTwo);
		model.put("countThree", countThree);
		model.put("countFore", countFore);
		model.put("countFife", countFife);
		model.put("listT", listT);
		return new ModelAndView("list/auth/user_estimate_list",model);
	}
	
	
	/**
	 * 视频列表
	 */
	@RequestMapping(value="documetForVideoList.html",method=RequestMethod.GET)
	public ModelAndView documetForVideoList(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String userId = req.getParameter("uid");
		Map<String,String> con = new HashMap<String, String>();
		String year = req.getParameter("year");
		con.put("userId", userId);
		con.put("status", "1");
		con.put(PagerTool.PAGE_NO, PagerTool.getPageNo(req));
		con.put(PagerTool.PAGE_SIZE, PagerTool.getPageSize(req));
		String pagefn = req.getParameter("pagefn");
		model.put("pagefn", pagefn);
		con.put("year", year);
		Collection<VideoBo> videoList = videoUserService.getVideos4Page(con);
		model.put("videoList", videoList);
		//model.put("videoListCount", videoList.getData().size()); 无需从此处获取列表项个数,可直接在页面通过${videoList.page.records }获取
		return new ModelAndView("list/auth/user_docvideo_list",model);
	}
	
	
	
	/**
	 * 在线课程列表
	 * @throws ParseException 
	 */
	@RequestMapping(value="documetForCoursList.html",method=RequestMethod.GET)
	public ModelAndView documetForCoursList(HttpServletRequest req,HttpServletResponse res,ModelMap model) throws ParseException{
		
		String pagefn = req.getParameter("pagefn");
		model.put("pagefn", pagefn);
		String userId = req.getParameter("uid");
		String startDate = req.getParameter("startDate");
		String endDate = req.getParameter("endDate");
		String coursewareType = req.getParameter("coursewareType");
		
		Map<String, String> con = new HashMap<String, String>();
		con.put("user_id", userId);
		if (startDate != null && !"".equals(startDate.trim())) {
			con.put("startDate", startDate);
		}
		if (endDate != null && !"".equals(endDate.trim())) {
			con.put("endDate", org.apache.tools.ant.util.DateUtils.format(DateUtils.add(DateUtils.parseDate(endDate,new String[]{"yyyy-MM-dd"}),java.util.Calendar.DATE,2),"yyyy-MM-dd"));
		}
		//根据课程类型搜索
		con.put("course_type", coursewareType);
		LearnStatsCount learnStatsCount = learnStatsService.getLearnStatsCount(con);
		
		con.put(PagerTool.PAGE_NO, PagerTool.getPageNo(req));
		con.put(PagerTool.PAGE_SIZE, PagerTool.getPageSize(req));
		Collection<LearnStatsBo> resLearnList = learnStatsService.getLearnStatsForPageForSql(con,null,null);
	    model.put("resLearnList", resLearnList);
	    long l = 0;
	    if( resLearnList.getData()!=null)
	    for(LearnStatsBo learnStatsBo : resLearnList.getData())
	    {
	    	learnStatsBo.setHour(learnStatsBo.getDuration()/3600);
	    	learnStatsBo.setMinute(learnStatsBo.getDuration()%3600/60);
	    	learnStatsBo.setSecond(learnStatsBo.getDuration()%3600%60);
	    	l = learnStatsBo.getTotalDuration();
	    }
	   
	    long hour = l/3600;
	    long minute = l%3600/60;
	    long second = l%3600%60;
	    model.put("countHour", hour);
	    model.put("countMinute", minute);
	    model.put("countSecond", second);
	    
	    model.put("learnStatsCount", learnStatsCount);
	    
	    //统计页面中相关的次数，不会随着查询条件，页面的改变而改变
	   /* Map<String, String> conT = new HashMap<String, String>();
		conT.put("user_id", user.getUid());
		Collection<LearnStatsBo> resCourseList = learnStatsService.getLearnStatsForPage(conT,null,null);*/
		model.put("resCourseList", learnStatsCount.getClassCourseNum()+learnStatsCount.getPositionCourseNum()+learnStatsCount.getCourceNum());
		return new ModelAndView("list/auth/user_cours_list",model);
	}
	
	
	
	/**
	 * 培训班列表
	 */
	@RequestMapping(value="documetForClassList.html",method=RequestMethod.GET)
	public ModelAndView documetForClassList(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String userId = req.getParameter("uid");
		Map<String, String> con = new HashMap<String, String>();
		String page = req.getParameter("page");
		String max = req.getParameter("max");
		String year = req.getParameter("year");
		String pagefn = req.getParameter("pagefn");
		String way = req.getParameter("way"); //培训方式:在线/混合/面授
		model.put("pagefn", pagefn);
		con.put("uid", userId);
		con.put("type", "0");
		con.put("year", year);
		con.put("way", way);
		con.put(PagerTool.PAGE_NO, PagerTool.getPageNo(req));
		con.put(PagerTool.PAGE_SIZE, PagerTool.getPageSize(req));
		Collection<TrainClassUserStatistic> classList = trainClassStudentService.getTrainClassUserStatistic(con, null, null);
		model.put("classList", classList);
		String[] countAll = {"0","0","0"};
		if(classList!=null){
			if(classList.getData().size()>0)
			countAll = classList.getData().get(0).getCount().split("/");
		}
		Integer countOnline = 0; //在线
		Integer countMix = 0;    //混合
		Integer countLive = 0;   //面授
		
		if(way==null||"".equals(way)){
			countOnline = Integer.parseInt(countAll[0]); //在线
			countMix = Integer.parseInt(countAll[1]);    //混合
			countLive = Integer.parseInt(countAll[2]);   //面授
		}else if(way!=null&&way.equals("ff808081385bcac601385bcffec80004")){
			countOnline = Integer.parseInt(countAll[0]); //在线   //面授
		}else if(way!=null&&way.equals("ff808081385bcac601385bcffef80006")){
			countMix = Integer.parseInt(countAll[1]);    //混合
		}else if(way!=null&&way.equals("ff808081385bcac601385bcffedf0005")){
			countLive = Integer.parseInt(countAll[2]);   //面授
		}
		
		model.put("countOnline", countOnline);
		model.put("countMix", countMix);
		model.put("countLive", countLive);
		return new ModelAndView("list/auth/user_class_list",model);
	}
	
	
	
	/**
	 * 外派培训班
	 */
	@RequestMapping(value="documetForOutClassList.html",method=RequestMethod.GET)
	public ModelAndView documetForOutClassList(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String userId = req.getParameter("uid");
		Map<String, String> con = new HashMap<String, String>();
		String page = req.getParameter("page");
		String max = req.getParameter("max");
		String year = req.getParameter("year");
		String pagefn = req.getParameter("pagefn");
		model.put("pagefn", pagefn);
		con.put("uid", userId);
		con.put("type", "1");
		con.put(PagerTool.PAGE_NO, PagerTool.getPageNo(req));
		con.put(PagerTool.PAGE_SIZE, PagerTool.getPageSize(req));
		con.put("year", year);
		Collection<TrainClassUserStatistic> outClassList = trainClassStudentService.getTrainClassUserStatistic(con, page, max);
		model.put("outClassList", outClassList);
		model.put("countOutClassList", outClassList.getData().size());
		return new ModelAndView("list/auth/user_outClass_list",model);
	}

}
