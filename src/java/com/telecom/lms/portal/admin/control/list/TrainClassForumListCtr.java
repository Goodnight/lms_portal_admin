package com.telecom.lms.portal.admin.control.list;

import java.util.HashMap;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.train.TrainClassForumBo;
import com.telecom.lms.portal.admin.util.PagerTool;
import com.telecom.lms.sdk.service.train.TrainClassForumService;

@RequestMapping("/list")
@Controller
public class TrainClassForumListCtr {
	@Autowired TrainClassForumService forumService;
	
	@RequestMapping("forum/list.html")
	public String list(HttpServletRequest request, ModelMap model){
		String forum_name = request.getParameter("forum_name");
		String create_name = request.getParameter("create_name");
		HashMap<String,String> con = new HashMap<String,String>();
		con.put("name", forum_name);
		con.put("create_name", create_name);
		Collection<TrainClassForumBo> forumList = forumService.getTrainClassForums(con, PagerTool.getPageNo(request), PagerTool.getPageSize(request));
		model.put("list", forumList);
		model.put(PagerTool.PAGER_FN_NAME, PagerTool.getPageFunction(request));
		return "list/trainclass/forum";
	}
}
