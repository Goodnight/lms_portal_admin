package com.telecom.lms.portal.admin.control.list;

import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.resources.VideoBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.resources.VideoService;

/**
 * 同步课堂列表
 */
@Controller
@RequestMapping("/list")
public class VideoClassListCtr{
	@Autowired VideoService videoService;

	@RequestMapping(value="videoclass.html",method=RequestMethod.GET)
	public String getVideoClass(HttpServletRequest request, ModelMap model){
		Collection<VideoBo> list = this.query(request,"");
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		model.put("list", list);
		return "list/trainclass/videoclass";
	}

	public Collection<VideoBo> query(HttpServletRequest request,String type) {
		Map<String,String> con = new HashMap<String, String>();
		con.put("page", PagerTool.getPageNo(request));
		con.put("max", PagerTool.getPageSize(request));
		Collection<VideoBo> list = videoService.getVideos4Page(con);
		return list;
	}

}
