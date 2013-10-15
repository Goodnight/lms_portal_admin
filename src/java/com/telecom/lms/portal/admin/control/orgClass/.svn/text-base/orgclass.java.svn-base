package com.telecom.lms.portal.admin.control.orgClass;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.position.PositionCourseBo;
import com.telecom.lms.core.bo.position.PositionCourseCon;
import com.telecom.lms.core.bo.position.PositionIntroBo;
import com.telecom.lms.core.bo.position.PositionIntroCon;
import com.telecom.lms.core.bo.resources.CoursewareBo;
import com.telecom.lms.portal.admin.service.ConfigInfo;
import com.telecom.lms.sdk.service.basic.SysParamService;
import com.telecom.lms.sdk.service.position.PositionCourseService;
import com.telecom.lms.sdk.service.position.PositionIntroService;
import com.telecom.lms.sdk.service.resources.CoursewareService;

@Controller
@RequestMapping("/orgC")
public class orgclass {
	@Autowired SysParamService sysParamService;
	@Autowired PositionIntroService positionIntroService;
	@Autowired CoursewareService coursewareService;
	@Autowired PositionCourseService positionCourseService;
	@Autowired ConfigInfo cfg;

	// 岗位体系首页
	@RequestMapping(value = "orgPos.html", method = RequestMethod.GET)
	public ModelAndView getOrgPos(HttpServletRequest req,
			HttpServletResponse res, ModelMap model) {
		List<SysParamBo> gainPosList = sysParamService.getPositionColumn();
		model.put("gainPosList", gainPosList);
		model.put("ueditorUrlPath", cfg.getUeditorUrlPath());
		req.getSession().setAttribute("ueditorImageUploadPath",
				cfg.getUeditorImageUploadPath());
		req.getSession().setAttribute("ueditorImageUploadPathPrefix",
				cfg.getUeditorImageUploadPathPrefix());
		try {
			String firstId = gainPosList.get(0).getSpId();
			model.put("firstId", firstId);
		} catch (Exception e) {
		}
		return new ModelAndView("orgClass/orgPos", model);
	}

	// 查看岗位课程
	@RequestMapping(value = "getPosForCoum.html", method = RequestMethod.GET)
	@ResponseBody
	public PositionIntroBo getPosForCoum(HttpServletRequest request,
			ModelMap model) {
		String orgId = request.getParameter("orgId");
		String gainPosId = request.getParameter("gainPosId");
		PositionIntroBo positionIntroBo = positionIntroService
				.getPositionIntro(null, orgId, gainPosId);
		model.put("positionIntroBo", positionIntroBo);
		System.out.println(positionIntroBo.getIntro());

		return positionIntroBo;
	}

	// 预览岗位课程
	@RequestMapping(value = "getPosForCourse.html", method = RequestMethod.POST)
	@ResponseBody
	public String getPosForCourse(HttpServletRequest request, ModelMap model) {
		String introPos = request.getParameter("textco");
		String snsTxt = request.getParameter("snsTxt");
	    return transformURl(snsTxt, introPos);
	
	}

	public String transformURl(String snsTxt, String introPos) {
		String[] sn_new = null;
		String[] sn_exist = null;
		String couSn = "";
		try {
			// 将字符串中{}里的字符串全部截取出来
			String[] sn = StringUtils.substringsBetween(snsTxt, "{", "}");
			String p = "";
			for (String po : sn) {
				p += po + ",";
			}
			Map<String, String> con = new HashMap<String, String>();
			con.put("sns", p);
			List<CoursewareBo> cList = coursewareService.getCoursewares(con);
			String d = "";
			try {
				for (CoursewareBo coursewareBo : cList) {
					d += coursewareBo.getRes().getSn() + ",";
				}
				String ddd = d.substring(0, d.length() - 1);
				// 得到匹配到的课程编号
				sn_exist = ddd.split(",");
			} catch (Exception e) {
				// TODO: handle exception
			}
			sn_new = new String[sn_exist.length];
			for (int i = 0; i < sn_exist.length; i++) {
				for (CoursewareBo coursewareBo : cList) {
					if (coursewareBo.getRes().getSn().equals(sn_exist[i])) {
						sn_new[i] = "<a target='_blank' href='"
								+ cfg.getPosCourseForStuUrl() + "?rbId="
								+ coursewareBo.getRes().getRbId() + "'>"
								+ sn_exist[i] + "</a>";
					}
				}
			}
			couSn = StringUtils.replaceEach(introPos, sn_exist, sn_new);
			return couSn;

		} catch (Exception e) {
			return null;
		}
	}
	   

	// 保存岗位课程体系，如果选中的栏目是课程体系，找到文本框输入的内容找到{}里面的编号，对课程
	// 编号进行匹配，匹配到的课程转换为超链接
	@RequestMapping(value = "savaOrgPos.html", method = RequestMethod.POST)
	@ResponseBody
	public String updateScoreUserCostForNo(PositionIntroCon positionIntroCon,
			HttpServletRequest request, ModelMap model) {
		String orgId = request.getParameter("orgId");
		String gainPosId = request.getParameter("gainPosId");
		String introPos = request.getParameter("introPos");
		String snsTxt = request.getParameter("snsTxt");
		String cIdS = "";
		String couCIdS = "";
		String couSn = "";
		PositionIntroBo positionIntroBo = positionIntroService
				.getPositionIntro(null, orgId, gainPosId);
		String[] sn_exist = null;
		String[] sn_new = null;
		if (gainPosId.equals("ff8080813bd3a52b013bd6ba55350001")) {
			try {
				// 将字符串中{}里的字符串全部截取出来
				String[] sn = StringUtils.substringsBetween(snsTxt, "{", "}");
				String p = "";
				for (String po : sn) {
					p += po + ",";
				}
				Map<String, String> con = new HashMap<String, String>();
				con.put("sns", p);
				List<CoursewareBo> cList = coursewareService.getCoursewares(con);
				
				String d = "";
				try {
					for (CoursewareBo coursewareBo : cList) {
						String cId = coursewareBo.getcId();
						cIdS += cId + ",";
						d += coursewareBo.getRes().getSn() + ",";
					}
					String ddd = d.substring(0, d.length() - 1);
					// 得到匹配到的课程编号
					sn_exist = ddd.split(",");
					couCIdS = cIdS.substring(0, cIdS.length() - 1);

				} catch (Exception e) {
					// TODO: handle exception
				}
				PositionCourseCon positionCourseCon = new PositionCourseCon();
				positionCourseCon.setPosition_id(orgId);
				positionCourseCon.setCourse_id(couCIdS);
				positionCourseCon.setBindType(0);
				
				Map<String, String> conn = new HashMap<String, String>();
				con.put("Position_id", orgId);
				List<PositionCourseBo> courseBo = positionCourseService.getPositionCourses(conn);
				
				if(courseBo != null){
					for (PositionCourseBo positionCourseBo : courseBo) {
						positionCourseService.removeAllPositionCourse(positionCourseBo.getPcId());
					}
				}
				
				positionCourseService.saveOrUpdatePositionCourseAll(positionCourseCon);

				sn_new = new String[sn_exist.length];

				for (int i = 0; i < sn_exist.length; i++) {
					for (CoursewareBo coursewareBo : cList) {
						if (coursewareBo.getRes().getSn().equals(sn_exist[i])) {
							sn_new[i] = "<a target='_blank' href='"
									+ cfg.getPosCourseForStuUrl() + "?rbId="
									+ coursewareBo.getRes().getRbId() + "'>"
									+ sn_exist[i] + "</a>";
						}
					}
				}
				couSn = StringUtils.replaceEach(introPos, sn_exist, sn_new);
			} catch (Exception e) {
			}
			if (positionIntroBo != null) {
				positionIntroCon.setPiId(positionIntroBo.getPiId());
			}
			positionIntroCon.setPosition_id(orgId);
			positionIntroCon.setColumn_id(gainPosId);
			positionIntroCon.setIntro(introPos);
			if (couSn == null || "".equals(couSn.trim())) {
				couSn = introPos;
			}
			String dd = this.replaceBraces(couSn);
			positionIntroCon.setIntroView(dd);
			positionIntroService.saveOrUpdatePositionIntro(positionIntroCon);
		}

		else if (!gainPosId.equals("ff8080813bd3a52b013bd6ba55350001")) {
			if (positionIntroBo != null) {
				positionIntroCon.setPiId(positionIntroBo.getPiId());
			}
			positionIntroCon.setPosition_id(orgId);
			positionIntroCon.setColumn_id(gainPosId);
			positionIntroCon.setIntro(introPos);
			positionIntroCon.setIntroView(introPos);
			positionIntroService.saveOrUpdatePositionIntro(positionIntroCon);
		}
		return null;
	}

	/**
	 * 将字符串arg中的左右大括号替换为空字符.
	 * 
	 * @param arg
	 *            需要替换的字符串.
	 * @return 返回替换之后的字符串.
	 */
	private String replaceBraces(String arg) {
		if (arg == null || "".equals(arg.trim())) {
			return arg;
		}
		String d = arg.replace("{", "");
		String result = d.replace("}", "");
		return result;
	}

}
