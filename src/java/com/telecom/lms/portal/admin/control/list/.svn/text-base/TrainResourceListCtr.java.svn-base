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
import com.telecom.lms.core.bo.train.TrainResourceBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.train.TrainResourseService;

/**
 * 培训班中的关联资源查询，包括课件、文档、同步课堂
 * @author SJTU
 *
 */
@Controller
@RequestMapping("/list")
public class TrainResourceListCtr{
	public static final String TRAINCLASS_RESOURCE_TYPE_VIDEOCLASS = "videoClass";
	public static final String TRAINCLASS_RESOURCE_TYPE_COURSEWARE = "courseware";
	public static final String TRAINCLASS_RESOURCE_TYPE_DOC = "doc";
	public static final String TRAINCLASS_RESOURCE_TYPE_FACE = "face";
	@Autowired TrainResourseService trService;
	
	/**
	 * 查询培训班中的同步课堂
	 */
	@RequestMapping(value="trainresource/videoclass.html",method=RequestMethod.GET)
	public String getVideoClass(HttpServletRequest request, ModelMap model){
		Collection<TrainResourceBo> list = this.query(request,TRAINCLASS_RESOURCE_TYPE_VIDEOCLASS);
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainresource/videoclass";
	}
	
	/**
	 * 查询培训班中的课件
	 */
	@RequestMapping(value="trainresource/onlinecourse.html",method=RequestMethod.GET)
	public String getCourseware(HttpServletRequest request, ModelMap model){
		Collection<TrainResourceBo> list = this.query(request,TRAINCLASS_RESOURCE_TYPE_COURSEWARE);
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainresource/onlinecourse";
	}
	
	/**
	 * 查询培训班中的文档
	 */
	@RequestMapping(value="trainresource/doc.html",method=RequestMethod.GET)
	public String getDoc(HttpServletRequest request, ModelMap model){
		Collection<TrainResourceBo> list = this.query(request,TRAINCLASS_RESOURCE_TYPE_DOC);
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainresource/doc";
	}

	/**
	 * 查询培训班中的面授课程
	 */
	@RequestMapping("trainresource/face.html")
	public String getFace(HttpServletRequest request, ModelMap model){
		Collection<TrainResourceBo> list = this.query(request,TRAINCLASS_RESOURCE_TYPE_FACE);
		model.put("list", list);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainresource/face";
	}
	
	public Collection<TrainResourceBo> query(HttpServletRequest request, String type) {
		Collection<TrainResourceBo> list = null;
		String tcid = request.getParameter("tcid");
		Map<String,String> con = new HashMap<String, String>();
		con.put("train_class_id", tcid);
		if(TRAINCLASS_RESOURCE_TYPE_VIDEOCLASS.equals(type)){
			list = trService.getTrainResourceVideos(con,PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		}
		if(TRAINCLASS_RESOURCE_TYPE_COURSEWARE.equals(type)){
			String cwtype = request.getParameter("cwtype");
			con.put("coursewareType", cwtype);
			list = trService.getTrainResourceCoursewares(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		}
		if(TRAINCLASS_RESOURCE_TYPE_DOC.equals(type)){
			list = trService.getTrainResourceDocs(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		}
		if(TRAINCLASS_RESOURCE_TYPE_FACE.equals(type)){
			list = trService.getTrainResourceFaceCourses(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		}
		return list;
	}

}
