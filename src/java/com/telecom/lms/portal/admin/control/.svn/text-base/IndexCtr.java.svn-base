package com.telecom.lms.portal.admin.control;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.telecom.lms.core.bo.auth.MenuBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.notice.NoticeContentBo;
import com.telecom.lms.portal.admin.service.ConfigInfo;
import com.telecom.lms.portal.admin.util.SessionConstants;
import com.telecom.lms.portal.admin.util.CookieUtil;
import com.telecom.lms.sdk.service.imp.notice.NoticeService;

/**
 * 首页/待办事项
 * @author xuxing
 *
 */
@Controller
public class IndexCtr {
	@Autowired NoticeService noticeService;
	@Autowired ConfigInfo configInfo;
	
	@SuppressWarnings("unchecked")
	@RequestMapping("/index.html")
	public String index(HttpServletRequest request, ModelMap model){
		
		//跳转到用户拥有菜单的第一项
		HttpSession session = request.getSession();
		List<MenuBo> menuList = (List<MenuBo>) session.getAttribute(SessionConstants.SESSION_USER_MENU_LIST);
		if(menuList!=null&&menuList.size()>0){
			Collections.sort(menuList);
			MenuBo menu = null;
			for(MenuBo m : menuList){
				if(!m.getUrl().equals("0")){
					menu = m;
					break;
				}
			}
			return "redirect:" + menu.getUrl();
		}
		return "main";
	}
	
	/**
	 * 跳转到学员端
	 */
	@RequestMapping("/tostudent.html")
	@ResponseBody
	public String toStudent(HttpServletResponse response) throws Exception{
		response.sendRedirect(configInfo.getStudentURL());
		return null;
	}
	
	@RequestMapping("/closenotice.html")
	@ResponseBody
	public boolean closenotice(HttpServletRequest request,HttpServletResponse response) {
		String ncId = request.getParameter("ncId");
		if(ncId!=null && !"".equals(ncId)){
			List<String> ncIdList = null;
			try {
				ncIdList = CookieUtil.getCookieSerialize(request, CookieUtil.WEB_NOTICE);
			} catch (Exception e1) {
				e1.printStackTrace();
				return false;
			}
			if(ncIdList==null || ncIdList.size()<=0){
				ncIdList = new ArrayList<String>();
				ncIdList.add(ncId);
			}else{
				if(!ncIdList.contains(ncId)){
					ncIdList.add(ncId);
				}
			}
			try {
				CookieUtil.addCookieSerialize(response, CookieUtil.WEB_NOTICE, ncIdList, CookieUtil._YEAR);
			} catch (Exception e) {
				e.printStackTrace();
				return false;
			}
			return true;
		}else{
			return false;
		}
	}
	
	@RequestMapping("/todolist.html")
	public String todoList(HttpServletRequest request, ModelMap model){
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		Map<String,String> con = new HashMap<String,String>();
		con.put("channel","2");
		con.put("user_id",user.getUid());
		try {
			List<String> closeNcIdList = CookieUtil.getCookieSerialize(request, CookieUtil.WEB_NOTICE);
			if(closeNcIdList!=null && closeNcIdList.size()>0){
				con.put("closeNcIdList", StringUtils.join(closeNcIdList, ","));
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//10:认证&考试9:培训班管理 8:资源管理 7.培训计划6：会议管理 5:培训需求调查,4:行为层评估,3:综合评估,2:反应层评估,1:LPI评估
		List<NoticeContentBo> alllist=noticeService.getnotices(con);
		List<NoticeContentBo> examlist=new ArrayList();//认证&考试
		List<NoticeContentBo> resourcelist=new ArrayList();//资源管理
		List<NoticeContentBo> trainclasslist=new ArrayList();//培训班管理
		List<NoticeContentBo> planlist=new ArrayList();//培训班管理
		List<NoticeContentBo> trainplanlist=new ArrayList();//培训评估
		List<NoticeContentBo> traindemandlist=new ArrayList();//培训需求
		for(int i=0;i<alllist.size();i++){
			switch(alllist.get(i).getModule()){
			case 10:
				examlist.add(alllist.get(i));break;
			case 9:
				trainclasslist.add(alllist.get(i));break;
			case 8:
				resourcelist.add(alllist.get(i));break;
			case 7:
				planlist.add(alllist.get(i));break;
			case 6:
			case 5:
				traindemandlist.add(alllist.get(i));break;
			case 4:
			case 3:
				trainplanlist.add(alllist.get(i));break;
			case 2:
				trainplanlist.add(alllist.get(i));break;
			case 1:
				trainplanlist.add(alllist.get(i));break;
			
			}
		}
		model.put("examlist", examlist);
		model.put("trainclasslist", trainclasslist);
		model.put("planlist", planlist);
		model.put("resourcelist", resourcelist);
		model.put("trainplanlist", trainplanlist);
		model.put("traindemandlist", traindemandlist);
		
		return "todolist";
	}
	
	@RequestMapping("footer.html")
	public String footer(HttpServletRequest request, ModelMap model){
		//20130311首页显示当前版本信息by LTC
		String sysName = configInfo.getSysName();
		String sysType = configInfo.getSysType();
		String version = configInfo.getVersion();
		String copyright = configInfo.getCopyright();
		model.put("sysName", sysName);
		model.put("sysType", sysType);
		model.put("version", version);
		model.put("copyright", copyright);
		return "include/footer";
	}
}
