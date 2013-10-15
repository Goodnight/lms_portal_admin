package com.telecom.lms.portal.admin.control.trainclass;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.resources.VideoBo;
import com.telecom.lms.core.bo.resources.VideoCon;
import com.telecom.lms.core.bo.resources.VideoUserBo;
import com.telecom.lms.core.bo.resources.VideoUserCon;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.resources.VideoService;
import com.telecom.lms.sdk.service.resources.VideoUserService;
import com.telecom.lms.sdk.service.train.TrainClassService;
import com.telecom.lms.sdk.service.train.TrainResourseService;

/**
 * 同步课堂
 * @author Xuxing
 */
@Controller
@RequestMapping("/videoclass")
public class VideoClassCtr {
	@Autowired VideoService videoService;
	@Autowired TrainResourseService trService;
	@Autowired VideoUserService vuService;
	@Autowired TrainClassService tcService;

	/**
	 * 新建同步课堂
	 */
	@RequestMapping("new.html")
	public String newVideoClass(@RequestParam String tcid, HttpServletRequest req,ModelMap model){
		TrainClassBo tc = tcService.getTrainClass(tcid);
		model.put("tc", tc);
		return "train/videoclass_new";
	}
	
	/**
	 * 跳转到同步课堂详情页
	 */
	@RequestMapping("detail.html")
	public String toVideoClassDetail(HttpServletRequest request, ModelMap model){
		String id = request.getParameter("id");
		VideoBo video = videoService.getVideo(id);
		model.put("video", video);
		return "train/videoclass_detail";
	}
	
	/**
	 * 保存同步课堂,并把同步课堂和培训班做关联
	 */
	@RequestMapping(value="save.html",method=RequestMethod.POST)
	public String saveVideowClass(VideoCon video, HttpServletRequest request,ModelMap model){
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		String bool = request.getParameter("bools");

		String startHour = request.getParameter("startHour");
	    String startMinute = request.getParameter("startMinute");
	    String endHour = request.getParameter("endHour");
	    String endMinute = request.getParameter("endMinute");
	    video.setStartTm(video.getStartTm()+" " +startHour+":"+startMinute+":00");
	    video.setEndTm(video.getEndTm()+" "+endHour+":"+endMinute+":00");
		String tcid = request.getParameter("tcid");
		if("true".equals(bool))
		{
			return "redirect:/trainclass/videoclass.html?tcid="+tcid;
		}
		video.setTrain_class_id(tcid);
		if(StringUtils.isBlank(video.getvId())){
			video.setStatus(0);
			video.setCreaterId(user.getUid());
		}
		videoService.newVideo(video);
		return "redirect:/trainclass/videoclass.html?tcid="+tcid;
	}
	
	/**
	 * AJAX方式的更新
	 * 用于改变同步课堂的状态
	 */
	@RequestMapping(value="ajax/update.html",method=RequestMethod.POST)
	@ResponseBody
	public Return ajaxupdate(VideoCon con, HttpServletRequest request){
		Return re = videoService.newVideo(con);
		return re;
	}
	
	@RequestMapping("toupdate.html")
	public String toUpdate(HttpServletRequest request, ModelMap model){
		boolean bool = false;
		String rvid = request.getParameter("rvid");
		String tcid = request.getParameter("tcid");
		TrainClassBo tc = tcService.getTrainClass(tcid);
		model.put("tc", tc);
		VideoBo video = videoService.getVideo(rvid);
		if(video.getStatus() == 1)//发布不允许修改 LuChao add
		{
			bool = true;
		}
		model.put("video", video);
		model.put("bool", bool);
		return "train/videoclass_new";
	}	
	
	/**
	 * 删除同步课堂
	 * rid是培训资源的id，vid是同步课堂的id
	 */
	@RequestMapping(value="delete.html",method=RequestMethod.POST)
	@ResponseBody
	public Return delete(HttpServletRequest req,ModelMap model){
		String[] rid = req.getParameterValues("rid");
		String[] vid = req.getParameterValues("vid");
		Return re = null;
		for(String id:vid){
			re = videoService.removeVideos(id);			
		}
		for(String id:rid){			
			 re = trService.removeTrainResources(id);
		}
		return re;
	}
	
	/**
	 * 向同步课堂中添加人员
	 */
	@RequestMapping(value="user/add.html",method=RequestMethod.POST)
	@ResponseBody
	public Return addUser(HttpServletRequest request, ModelMap model){
		String pid = request.getParameter("pid");
		String[] ids = request.getParameterValues("id");
		String[] names = request.getParameterValues("name");

		//验证数量
		Integer num = vuService.getUserNum(pid);
		VideoBo video = videoService.getVideo(pid);
		
		if(num!=null && ids!=null){
			if(ids.length > video.getMaxAttend()-num){
				return new Return("checknum","人数超限");
			}
		}
		
		//添加数据
		for(int i=0;i<ids.length;i++){
			VideoUserCon vu = new VideoUserCon();
			vu.setUserId(ids[i]);
			vu.setUserName(names[i]);
			vu.setVideoId(pid);
			vuService.newVideoUser(vu);
		}
		return new Return(Return.CODE_SUCCESS);
	}
	
	/**
	 * 移除同步课堂的学员
	 */
	@RequestMapping(value="user/remove.html",method=RequestMethod.POST)
	@ResponseBody
	public Return removeUser(HttpServletRequest request){
		String vuid = request.getParameter("id");
		Return re = vuService.removeVideoUsers(vuid);
		return re;
	}
	
	/**
	 * 同步课堂的学员列表
	 */
	@RequestMapping("chooseduser/list.html")
	public String userList(HttpServletRequest request,ModelMap model){
		String vid = request.getParameter("vid");
		Map<String,String> con = new HashMap<String, String>();
		con.put("videoId", vid);
		con.put(PagerTool.PAGE_NO, PagerTool.getPageNo(request));
		con.put(PagerTool.PAGE_SIZE, PagerTool.getPageSize(request));
		Collection<VideoUserBo> list = vuService.getUsers4Page(con);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/trainclass/videouser";
	}
}
