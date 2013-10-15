package com.telecom.lms.portal.admin.control.list;

import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.JSNode;
import com.telecom.lms.portal.admin.util.JSNodeTool;
import com.telecom.lms.portal.admin.util.StringTool;
import com.telecom.lms.sdk.service.auth.OrganizationService;

@Controller
@RequestMapping("/list")
public class PositionListCtr {
	@Autowired CommonService commonService;
	@Autowired OrganizationService orgService;
	
	/**
	 * JSTree获取基准岗位和族群的数据
	 * @param request
	 * @return
	 */
	@RequestMapping(value="pos4jstree.html")
	@ResponseBody
	public List<JSNode> getPosList4JSTree(HttpServletRequest request){
		try {

			String pid = request.getParameter("id");
			//JSTree默认根节点id为0，岗位表里根节点id为-1
			if(!StringUtils.isBlank(pid)&&pid.equals("0")){
				pid = "-1";
			}
			List<JSNode> list = commonService.getPositionJSTree(pid);
			return list;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/**
	 * JSTree获取基准岗位层级
	 * @param request
	 * @return
	 */
	@RequestMapping(value="postreelevel.html")
	@ResponseBody
	public List<JSNode> getPosLevelList4JSTree(HttpServletRequest request){
		String type = request.getParameter("type");
		String pid = request.getParameter("id");
		//JSTree默认根节点id为0，岗位表里根节点id为-1
		if(!StringUtils.isBlank(pid)&&pid.equals("0")){
			pid = "-1";
		}
		if("level".equals(type)){
			return commonService.getPositionNew(pid.split(StringTool.SPLIT_COMMA)[0], pid.split(StringTool.SPLIT_COMMA)[1]);
		}else{
			return commonService.getPositionLevel(pid);
		}
	}
	
	/**
	 * 获得集团/省岗位树
	 * @param request
	 * @return
	 */
	@RequestMapping(value="pos4org.html")
	@ResponseBody
	public List<JSNode> getPos4org(HttpServletRequest request){
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		String pid = request.getParameter("id");
		String[] orgs = user.getOrg().getIdPath().split("/");
		List<JSNode> list = new ArrayList<JSNode>();
		if(pid.equals("-1") && user.getType() == 1){
	//		pid = "-1";
			list = commonService.getPosition4Org(pid);
		}else if(pid.equals("-1")){
			for(int i=0;i<orgs.length;i++){
				OrganizationBo org = orgService.getOrganization(orgs[i]);
				if(org.getLevel()!=null && user.getType() == org.getLevel()){
					list = commonService.getPosition4Org(pid,org.getOrgId());
					break;
				}
			}
		}else{
			list = commonService.getPosition4Org(pid);
		}
		return list;
	}
	
	/**
	 * 获得集团/省岗位树
	 * @param request
	 * @return
	 */
	@RequestMapping(value="pos4orgtreelevel.html")
	@ResponseBody
	public List<JSNode> getPos4orgLevel(HttpServletRequest request){
		String type = request.getParameter("type");
		UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
		String pid = request.getParameter("id");
		String[] orgs = user.getOrg().getIdPath().split("/");
		List<JSNode> list = new ArrayList<JSNode>();
		if(pid.equals("-1") && user.getType() == 1){
	//		pid = "-1";
			list = commonService.getPosition4OrgLevel(pid);
		}else if(pid.equals("-1")){
			for(int i=0;i<orgs.length;i++){
				OrganizationBo org = orgService.getOrganization(orgs[i]);
				if(org.getLevel()!=null && user.getType() == org.getLevel()){
					list = commonService.getPosition4OrgLevel(pid,org.getOrgId());
					break;
				}
			}
		}else{
			if("level".equals(type)){
				list = commonService.getPosition4orgNew(pid.split(StringTool.SPLIT_COMMA)[0], pid.split(StringTool.SPLIT_COMMA)[1]);
			}else{
				list = commonService.getPosition4OrgLevel(pid);
			}
		}
		return list;
	}
	
	
}
