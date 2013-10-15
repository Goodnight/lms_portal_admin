package com.telecom.lms.portal.admin.control.inquiry;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.survey.tp.SurveyTpBo;
import com.telecom.lms.core.bo.survey.tp.SurveyTpCategoryBo;
import com.telecom.lms.core.bo.survey.tp.SurveyTpCategoryCon;
import com.telecom.lms.core.bo.survey.tp.SurveyTpCon;
import com.telecom.lms.core.bo.survey.tp.SurveyTpItemBo;
import com.telecom.lms.core.bo.survey.tp.SurveyTpItemCon;
import com.telecom.lms.core.bo.survey.tp.SurveyTpItemResCon;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.survey.SurveyTpCategoryService;
import com.telecom.lms.sdk.service.survey.SurveyTpItemResService;
import com.telecom.lms.sdk.service.survey.SurveyTpItemService;
import com.telecom.lms.sdk.service.survey.SurveyTpService;
import com.telecom.lms.sdk.service.survey.param.SurveyTpCategoryParam;
import com.telecom.lms.sdk.service.survey.param.SurveyTpItemParam;
import com.telecom.lms.sdk.service.survey.param.SurveyTpItemResParam;
import com.telecom.lms.sdk.service.survey.param.SurveyTpParam;
import com.telecom.lms.sdk.util.DateTool;

/**
 * 培训需求调查
 * 
 * @author yanlei
 * 
 */
@Controller
@RequestMapping("/inquiry")
public class InquiryTpCtr {
	@Autowired
	private SurveyTpService itService;
	@Autowired
	private SurveyTpCategoryService itcService;
	@Autowired
	private SurveyTpItemResService itirService;
	@Autowired
	private SurveyTpItemService itiService;
	@Autowired
	private UserInfoService userInfoService;

	private final static String TYPE_RADIO = "1";// 单选
	private final static String TYPE_CHOICE = "2";// 多选
	private final static String TYPE_GAUGE = "3";// 量规
	private final static String TYPE_QA = "4";// 问答

	@RequestMapping(value = "inquiryTpList.html", method = RequestMethod.GET)
	public String getOutTrainClass(HttpServletRequest request, ModelMap model) {
    	UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");  //获得当前用户所辖范围ID
    	Map<String, String> con = new HashMap<String, String>();
    	con.put("uid", user.getUid());
    	OrganizationBo ob = userInfoService.getManageOrg(con);
    	model.put("userOrgId", ob.getOrgId());
    	
		String page_fn = request.getParameter("pagefn");
		String status = request.getParameter("status");
		String name = request.getParameter("name");
		String creatDt = request.getParameter("creatDt");
		String page = request.getParameter("page") == null ? "1" : request.getParameter("page");
		String max = request.getParameter("max") == null ? "10" : request.getParameter("max");
		Collection<SurveyTpBo> inquiryTpList = new Collection<SurveyTpBo>();
		String surveyType = request.getParameter("surveyType");
		model.put("surveyType", surveyType);
		SurveyTpParam ddp = new SurveyTpParam();
		ddp.setCreateDt(creatDt);
		ddp.setName(name);
		ddp.setType(surveyType);
		if (!"".equals(status)) {
			ddp.setStatus(status);
		}
		ddp.setMax(max);
		ddp.setPage(page);
		inquiryTpList = itService.getSurveyTps(ddp);
		model.put("inquiryTpList", inquiryTpList);
		model.put("page_fn", page_fn);
		return "inquiry/inquiryTpList";
	}

	/**
	 * 跳转培训需求调查首页
	 */
	@RequestMapping(value = "inquiryTpIndex.html", method = RequestMethod.GET)
	public ModelAndView turnIndex(HttpServletRequest req,
			HttpServletResponse res, ModelMap model) {
		String surveyType = req.getParameter("surveyType");
		model.put("surveyType", surveyType);
		return new ModelAndView("inquiry/inquiryTpIndex1", model);
	}

	/**
	 * 模板预览
	 */
	@RequestMapping(value = "inquiryTpItemList.html", method = RequestMethod.GET)
	public ModelAndView inquiryTpItemList(HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		String stId = req.getParameter("stId");
		SurveyTpCategoryParam where = new SurveyTpCategoryParam();
		String surveyType = req.getParameter("surveyType");
		model.put("surveyType", surveyType);
		
		where.setTemplateId(stId);
		List<SurveyTpCategoryBo> list = itcService.getSurveyTpCategorys(where);
		model.put("list", list);
		
		SurveyTpParam where1 = new SurveyTpParam();
		where1.setId(stId);
		SurveyTpBo itb = itService.getSurveyTp(where1);
		model.put("itb", itb);
		
		return new ModelAndView("inquiry/inquiryTpItemList", model);
	}

	/**
	 * 跳转培训需求调查问题
	 */
	@RequestMapping(value = "inquiryTpAllItemList.html", method = RequestMethod.GET)
	public ModelAndView inquiryTpAllItemList(HttpServletRequest req,
			HttpServletResponse res, ModelMap model) {
		String surveyType = req.getParameter("surveyType");
		model.put("surveyType", surveyType);
		String stId = req.getParameter("stId");
		SurveyTpCategoryParam where = new SurveyTpCategoryParam();
		where.setTemplateId(stId);
		List<SurveyTpCategoryBo> list = itcService.getSurveyTpCategorys(where);
		SurveyTpParam where1 = new SurveyTpParam();
		where1.setId(stId);
		SurveyTpBo itb = itService.getSurveyTp(where1);
		model.put("itb", itb);
		model.put("listInfo", list);
		model.put("stId", stId);
		return new ModelAndView("inquiry/inquiryTpItemSnInfo", model);
	}

	/**
	 * 跳转培训需求调查问题
	 */
	@RequestMapping(value = "inquiryTpAllItem.html", method = RequestMethod.GET)
	public ModelAndView inquiryTpAllItemt(HttpServletRequest req,
			HttpServletResponse res, ModelMap model) {
		String page_fn = req.getParameter("pagefn");
		String page = req.getParameter("page") == null ? "1" : req
				.getParameter("page");
		String max = req.getParameter("max") == null ? "10" : req
				.getParameter("max");
		String stId = req.getParameter("stId");
		String surveyType = req.getParameter("surveyType");
		model.put("surveyType", surveyType);
		SurveyTpItemParam where = new SurveyTpItemParam();
		where.setTemplateId(stId);
		where.setMax(max);
		where.setPage(page);
		Collection<SurveyTpItemBo> list = itiService.getSurveyTpItems(where);
		for (SurveyTpItemBo bo : list.getData()) {
			System.out.println(bo.getSn());
		}
		model.put("list", list);
		model.put("page_fn", page_fn);
		return new ModelAndView("inquiry/inquiryTpAllItem", model);
	}

	/**
	 * 跳转新建需求调查模版
	 */
	@RequestMapping(value = "inquiryTpNew.html", method = RequestMethod.GET)
	public ModelAndView newInquiry(HttpServletRequest req,
			HttpServletResponse res, ModelMap model) {
		String surveyType = req.getParameter("surveyType");
		model.put("surveyType", surveyType);
		return new ModelAndView("inquiry/inquiryTpNew", model);
	}

	/**
	 * 跳转修改需求调查模版
	 */
	@RequestMapping(value = "inquiryTpUpdate.html", method = RequestMethod.GET)
	public ModelAndView updateInquiry(HttpServletRequest req,
			HttpServletResponse res, ModelMap model) {
		String stId = req.getParameter("stId");
		String surveyType = req.getParameter("surveyType");
		model.put("surveyType", surveyType);
		SurveyTpParam where = new SurveyTpParam();
		where.setId(stId);
		SurveyTpBo itb = itService.getSurveyTp(where);
		model.put("itb", itb);
		model.put("stId", stId);
		return new ModelAndView("inquiry/inquiryTpUpdate", model);
	}

	/**
	 * 新建模板保存
	 */
	@RequestMapping(value = "saveInquiryTp.html", method = RequestMethod.POST)
	public ModelAndView saveTp(HttpServletRequest req, ModelMap model, SurveyTpCon itc) {
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		String surveyType = req.getParameter("surveyType");
		model.put("surveyType", surveyType);
		if("2".equals(surveyType))
		{
			String TPtype=req.getParameter("TPtype");
			model.put("TPtype", TPtype);
			itc.setType(new Integer(TPtype));
		}
		else{itc.setType(new Integer(surveyType));}
		itc.setStatus(1);
		itc.setCreate_date(DateTool.getNowShort());
		itc.setCreater_id(user.getUid());
		//////////20130314判断是否模板名称重复////////////
		String nameJudge = itc.getName(); //获得保存时填的名称
		Collection<SurveyTpBo> inquiryTpList = new Collection<SurveyTpBo>();
		SurveyTpParam ddp = new SurveyTpParam();
		ddp.setMax("1000");
		ddp.setPage("1");
		inquiryTpList = itService.getSurveyTps(ddp);
		boolean flag = true;
		for(SurveyTpBo st:inquiryTpList.getData()){
			if(st.getName().equals(nameJudge) || st.getName() == nameJudge){
				flag = false; //当出现重名标志位置假
			}
		}
		if(flag){ //未出现重名可以进行保存
			Return re = itService.newSurveyTp(itc);
			if (null != re.getCode()) {
				if ("fail".equals(re.getCode())) {
					return new ModelAndView("redirect:inquiryTpNew.html?surveyType=" + surveyType,null);
				}
			}
			model.put("stId", re.getCode());
			return new ModelAndView("inquiry/inquiryTpNewItem", model);
		}
		else{
			return new ModelAndView("redirect:errorForTemplate.html?type=new&surveyType="+surveyType, model);
		}	
	}

	/**
	 * 修改模板保存
	 */
	@RequestMapping(value = "updateInquiryTp.html", method = RequestMethod.POST)
	public ModelAndView updateTp(HttpServletRequest req, ModelMap model, SurveyTpCon itc) {
		// String stId=req.getParameter("stId");
		String surveyType = req.getParameter("surveyType");
		model.put("surveyType", surveyType);
		if("2".equals(surveyType))
		{
			String TPtype=req.getParameter("TPtype");
			model.put("TPtype", TPtype);
			itc.setType(new Integer(TPtype));
		}
		else{itc.setType(new Integer(surveyType));}
		
		//////////20130314判断是否模板名称重复 by LTC////////////
		String nameJudge = itc.getName(); //获得保存时填的名称
		String oriName = req.getParameter("oriName");//获得该模板的原始名称
		Collection<SurveyTpBo> inquiryTpList = new Collection<SurveyTpBo>();
		SurveyTpParam ddp = new SurveyTpParam();
		ddp.setMax("1000");
		ddp.setPage("1");
		inquiryTpList = itService.getSurveyTps(ddp);
		boolean flag = true;
		for(SurveyTpBo st:inquiryTpList.getData()){
			if(st.getName().equals(nameJudge) || st.getName() == nameJudge){
				flag = false; //当出现重名标志位置假
				if(st.getName().equals(oriName) || st.getName() == oriName){
					flag = true; //修改时补充判断,若造成重名的原因是未修改模板名称,即与该模板的原始名称相同,则将标志位重置真, 注意此处逻辑一定是当前的判断
				}
			}
		}
		if(flag){ //未出现重名可以进行保存
			itService.newSurveyTp(itc);
			return new ModelAndView("redirect:inquiryTpNewItem.html?stId="+ itc.getStId(), model);
		}
		else{
			return new ModelAndView("redirect:errorForTemplate.html?type=update&surveyType="+surveyType+"&stId="+itc.getStId(), model);
		}
	}
	
	/**
	 * 模板名称重复
	 * @param req
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "errorForTemplate.html", method = RequestMethod.GET)
	public ModelAndView errorForTemplate(HttpServletRequest req, ModelMap model) {
		String type = req.getParameter("type"); //新建type=new修改type=update
		model.put("type", type);
		String surveyType = req.getParameter("surveyType");
		model.put("surveyType", surveyType);
		String stId = req.getParameter("stId");
		model.put("stId", stId);
		return new ModelAndView("inquiry/errorForTemplate", model);
	}

	/**
	 * 跳转新建需求调查模版小项
	 */
	@RequestMapping(value = "inquiryTpNewItem.html", method = RequestMethod.GET)
	public ModelAndView newInquiryTpItem(HttpServletRequest req,
			HttpServletResponse res, ModelMap model) {
		String stId = req.getParameter("stId");
		String surveyType = req.getParameter("surveyType");
		model.put("surveyType", surveyType);
		SurveyTpCategoryParam where = new SurveyTpCategoryParam();
		where.setTemplateId(stId);
		List<SurveyTpCategoryBo> list = itcService.getSurveyTpCategorys(where);
		
		SurveyTpParam where1 = new SurveyTpParam();
		where1.setId(stId);
		SurveyTpBo itb = itService.getSurveyTp(where1);
		
		
		model.put("itb", itb);
		model.put("list", list);
		model.put("stId", stId);
		return new ModelAndView("inquiry/inquiryTpNewItem", model);
	}

	/**
	 * 批量删除培训模版
	 */
	@RequestMapping(value = "deleteInquiryTp.html", params = "method=remove", method = RequestMethod.POST)
	@ResponseBody
	public String deleteDmdDeps(HttpServletRequest req, HttpServletResponse res, @RequestParam("itIds") String ids) {
		SurveyTpParam dtp = new SurveyTpParam();
		String deletStr = ids.substring(0, ids.length()-1);
		dtp.setId(deletStr);
		Return re = itService.removeSurveyTps(dtp);
		return (String) re.getContent();
	}

	/**
	 * 保存新建后的需求调查信息
	 */
	@RequestMapping(value = "saveInquiryTpItemOver.html", method = RequestMethod.POST)
	public ModelAndView saveTpItemed(HttpServletRequest req, ModelMap model) {
		String stId = req.getParameter("stId");
		String categoryName = req.getParameter("categoryName");
		String categoryId = req.getParameter("categoryId");
		String cateNullId = req.getParameter("cateNullId");
		String question = req.getParameter("question");
		String type = req.getParameter("type");
		String[] answer = req.getParameterValues("answer");
		String[] answer2 = req.getParameterValues("answer2");
		String[] score = req.getParameterValues("score");
		String optionCount = req.getParameter("optionCount");
		String surveyType = req.getParameter("surveyType");
		model.put("surveyType", surveyType);
		if(null != question && !"".equals(question) ){     //空值不进行保存

		SurveyTpCategoryParam where = new SurveyTpCategoryParam();
		where.setTemplateId(stId);
		List<SurveyTpCategoryBo> list = itcService.getSurveyTpCategorys(where);
		/* 大类 */
		SurveyTpCategoryCon itcc = new SurveyTpCategoryCon();
		itcc.setName(categoryName);
		itcc.setTemplateId(stId);
		itcc.setSn((list.size() + 7));
		/* 问题 */
		SurveyTpItemCon itic = new SurveyTpItemCon();
		if ("".equals(categoryId)&&("".equals(cateNullId)||!"".equals(categoryName))) {
			Return reItcc = itcService.newSurveyTpCategory(itcc);
			itic.setCategoryId(reItcc.getCode());
			SurveyTpCategoryBo itcb = new SurveyTpCategoryBo();
			itcb.setName(categoryName);
			itcb.setStcId(reItcc.getCode());
		} else {
			itic.setCategoryId(categoryId);
		}
		if(!"".equals(cateNullId)&&"".equals(categoryId)&&"".equals(categoryName))
		{
			itic.setCategoryId(cateNullId);
		}
		if (null == optionCount || "".equals(optionCount)) {
			itic.setOptionCount(0);
		} else {
			itic.setOptionCount(new Integer(optionCount));
		}

		itic.setQuestion(question);
		itic.setType(new Integer(type));
		itic.setSn(100);
		
		Return reItic = itiService.newSurveyTpItem(itic);
		/* 预设答案 */
		if (TYPE_GAUGE.equals(type)) {
			for (int i = 0; i < answer2.length; i++) {
				if (!"".equals(answer2[i])) {
					SurveyTpItemResCon itirc = new SurveyTpItemResCon();
					itirc.setAnswer(answer2[i]);
					itirc.setItemId(reItic.getCode());
					itirc.setScore(new Integer(score[i]));
					itirc.setSn(i);
					itirService.newSurveyTpItemRes(itirc);
				}
			}
		} else {
			for (int i = 0; i < answer.length; i++) {
				if (!"".equals(answer[i])) {
					SurveyTpItemResCon itirc = new SurveyTpItemResCon();
					itirc.setAnswer(answer[i]);
					itirc.setItemId(reItic.getCode());
					itirc.setSn(i);
					itirService.newSurveyTpItemRes(itirc);
				}
			}
		}
	}

		return new ModelAndView("redirect:inquiryTpIndex.html?surveyType="+surveyType, model);
}

	/**
	 * 保存新建后的需求调查信息
	 */
	@RequestMapping(value = "saveInquiryTpItem.html", method = RequestMethod.POST)
	public ModelAndView saveTpItem(HttpServletRequest req, ModelMap model) {
		String stId = req.getParameter("stId");
		String categoryName = req.getParameter("categoryName");
		String categoryId = req.getParameter("categoryId");
		String cateNullId = req.getParameter("cateNullId");//当然不选大类时，取此空名大类。以将所有小题归类
		String question = req.getParameter("question");
		String type = req.getParameter("type");
		String[] answer = req.getParameterValues("answer");
		String[] answer2 = req.getParameterValues("answer2");
		String[] score = req.getParameterValues("score");
		String optionCount = req.getParameter("optionCount");
		String surveyType = req.getParameter("surveyType");
		model.put("surveyType", surveyType);

		SurveyTpCategoryParam where = new SurveyTpCategoryParam();
		where.setTemplateId(stId);
		List<SurveyTpCategoryBo> list = itcService.getSurveyTpCategorys(where);
		/* 大类 */
		SurveyTpCategoryCon itcc = new SurveyTpCategoryCon();
		itcc.setName(categoryName);
		itcc.setTemplateId(stId);
		itcc.setSn((list.size() + 7));
		/* 问题 */
		SurveyTpItemCon itic = new SurveyTpItemCon();
		if ("".equals(categoryId)&&("".equals(cateNullId)||!"".equals(categoryName))) {
			Return reItcc = itcService.newSurveyTpCategory(itcc);
			itic.setCategoryId(reItcc.getCode());
			SurveyTpCategoryBo itcb = new SurveyTpCategoryBo();
			itcb.setName(categoryName);
			itcb.setStcId(reItcc.getCode());
		} else {
			itic.setCategoryId(categoryId);
		}
		if(!"".equals(cateNullId)&&"".equals(categoryId)&&"".equals(categoryName))
		{
			itic.setCategoryId(cateNullId);
		}
		if (null == optionCount || "".equals(optionCount)) {
			itic.setOptionCount(0);
		} else {
			itic.setOptionCount(new Integer(optionCount));
		}

		itic.setQuestion(question);
		itic.setType(new Integer(type));
		itic.setSn(100);
		Return reItic = itiService.newSurveyTpItem(itic);
		/* 预设答案 */
		if (TYPE_GAUGE.equals(type)) {
			for (int i = 0; i < answer2.length; i++) {
				if (!"".equals(answer2[i])) {
					SurveyTpItemResCon itirc = new SurveyTpItemResCon();
					itirc.setAnswer(answer2[i]);
					itirc.setItemId(reItic.getCode());
					itirc.setScore(new Integer(score[i]));
					itirc.setSn(i);
					itirService.newSurveyTpItemRes(itirc);
				}
			}
		} else {
			for (int i = 0; i < answer.length; i++) {
				if (!"".equals(answer[i])) {
					SurveyTpItemResCon itirc = new SurveyTpItemResCon();
					itirc.setAnswer(answer[i]);
					itirc.setItemId(reItic.getCode());
					itirc.setSn(i);
					itirService.newSurveyTpItemRes(itirc);
				}
			}
		}
		model.put("stId", stId);
		list = itcService.getSurveyTpCategorys(where);
		model.put("list", list);
		return new ModelAndView("inquiry/inquiryTpNewItem", model);
	}

	/**
	 * 保存新建后的需求调查信息
	 */
	@RequestMapping(value = "saveInquiryTpItemAsc.html", method = RequestMethod.POST)
	public ModelAndView saveTpItem(HttpServletRequest req, ModelMap model,
			SurveyTpCon itc) {
		String[] sn = req.getParameterValues("sn");
		String[] ItemIds = req.getParameterValues("itiIds");
		String surveyType = req.getParameter("surveyType");
		model.put("surveyType", surveyType);
		SurveyTpItemCon itic = new SurveyTpItemCon();
		for (int i = 0; i < sn.length; i++) {
			itic.setStiId(ItemIds[i]);
			itic.setSn(new Integer(sn[i]));
			Return reItic = itiService.newSurveyTpItem(itic);
		}
		String stId = req.getParameter("stId");
		SurveyTpCategoryParam where = new SurveyTpCategoryParam();
		where.setTemplateId(stId);
		List<SurveyTpCategoryBo> list = itcService.getSurveyTpCategorys(where);
		model.put("listInfo", list);
		model.put("stId", stId);
		return new ModelAndView("inquiry/inquiryTpItemSnInfo", model);
	}

	/**
	 * 保存和修改培训模版大类
	 */
	@RequestMapping(value = "saveOrUpdateTpCategory.html", params = "method=save", method = RequestMethod.POST)
	@ResponseBody
	public String saveOrUpdateCategory(HttpServletRequest req,
			HttpServletResponse res) {
		String stcId = req.getParameter("stcId");
		String name = req.getParameter("name");

		SurveyTpCategoryCon itcc = new SurveyTpCategoryCon();
		if (null != stcId && !"".equals(stcId)) {
			itcc.setStcId(stcId);
		} else {
			String stId = req.getParameter("stId");
			String sn = req.getParameter("sn");
			itcc.setTemplateId(stId);
			itcc.setSn(new Integer(sn));
		}
		itcc.setName(name);
		Return reItcc = itcService.newSurveyTpCategory(itcc);
		return reItcc.getCode();
	}

	/**
	 * 删除培训模版大类
	 */
	@RequestMapping(value = "deleteTpCategory.html", params = "method=delete", method = RequestMethod.POST)
	@ResponseBody
	public String deleteCategory(HttpServletRequest req, HttpServletResponse res) {
		String stcId = req.getParameter("stcId");
		SurveyTpCategoryParam itcc = new SurveyTpCategoryParam();
		itcc.setId(stcId);
		Return reItcc = itcService.removeSurveyTpCategorys(itcc);
		return reItcc.getCode();
	}

	/**
	 * 保存和修改培训模版问题
	 */
	@RequestMapping(value = "saveOrUpdateTpItem.html", params = "method=save", method = RequestMethod.POST)
	@ResponseBody
	public Map saveOrUpdateItem(HttpServletRequest req, HttpServletResponse res) {
		SurveyTpItemCon itic = new SurveyTpItemCon();
		String[] answer = req.getParameterValues("answer[]");
		String[] answer2 = req.getParameterValues("answer2[]");
		String[] score = req.getParameterValues("score[]");
		String question = req.getParameter("question");
		String type = req.getParameter("type");
		String stcId = req.getParameter("stcId");

		itic.setQuestion(question);
		itic.setType(new Integer(type));
		itic.setSn(100);
		itic.setCategoryId(stcId);
		List<String> list = new ArrayList<String>();
		Return reItic = itiService.newSurveyTpItem(itic);
		if (null != reItic) {
			/* 预设答案 */
			if (TYPE_GAUGE.equals(type)) {
				for (int i = 0; i < answer2.length; i++) {
					if (null != answer2 && !"".equals(answer2[i])) {
						SurveyTpItemResCon itirc = new SurveyTpItemResCon();
						itirc.setAnswer(answer2[i]);
						itirc.setItemId(reItic.getCode());
						itirc.setScore(new Integer(score[i]));
						itirc.setSn(i);
						Return re = itirService.newSurveyTpItemRes(itirc);
						list.add(re.getCode());
					}
				}
			} else {
				if (null != answer) {
					for (int i = 0; i < answer.length; i++) {
						if (null != answer && !"".equals(answer[i])) {
							SurveyTpItemResCon itirc = new SurveyTpItemResCon();
							itirc.setAnswer(answer[i]);
							itirc.setItemId(reItic.getCode());
							itirc.setSn(i);
							Return re = itirService.newSurveyTpItemRes(itirc);
							list.add(re.getCode());
						}
					}
				}
			}
		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("itemId", reItic.getCode());
		map.put("stirId", list);
		return map;
	}

	/**
	 * 删除培训模版问题
	 */
	@RequestMapping(value = "deleteTpItem.html", params = "method=delete", method = RequestMethod.POST)
	@ResponseBody
	public String deleteItem(HttpServletRequest req, HttpServletResponse res) {
		String stiId = req.getParameter("stiId");
		SurveyTpItemParam where = new SurveyTpItemParam();
		where.setId(stiId);
		Return reItcc = itiService.removeSurveyTpItems(where);
		return reItcc.getCode();
	}

	/**
	 * 保存和修改培训模版问题
	 */
	@RequestMapping(value = "updateTpItem.html", params = "method=update", method = RequestMethod.POST)
	@ResponseBody
	public String updateItem(HttpServletRequest req, HttpServletResponse res) {
		SurveyTpItemCon itic = new SurveyTpItemCon();
		String[] answer = req.getParameterValues("answer[]");
		String[] answer2 = req.getParameterValues("answer2[]");
		String[] score = req.getParameterValues("score[]");
		String[] itirIds = req.getParameterValues("itirIds[]");
		String question = req.getParameter("question");
		String type = req.getParameter("type");
		String stiId = req.getParameter("stiId");

		itic.setStiId(stiId);
		itic.setQuestion(question);
		Return reItic = itiService.newSurveyTpItem(itic);
		if (null != reItic) {
			/* 预设答案 */
			if (TYPE_GAUGE.equals(type)) {
				if (null != answer2) {
					for (int i = 0; i < answer2.length; i++) {
						if (null != answer2 && !"".equals(answer2[i])) {
							SurveyTpItemResCon itirc = new SurveyTpItemResCon();
							if (!"".equals(itirIds[i])) {
								itirc.setStirId(itirIds[i]);
							} else {
								itirc.setItemId(stiId);
								itirc.setSn(i);
							}
							itirc.setAnswer(answer2[i]);
							itirc.setScore(new Integer(score[i]));
							itirService.newSurveyTpItemRes(itirc);
						}
					}
				}
			} else {
				if (null != answer) {
					for (int i = 0; i < answer.length; i++) {
						if (null != answer && !"".equals(answer[i])) {
							SurveyTpItemResCon itirc = new SurveyTpItemResCon();
							if (!"".equals(itirIds[i])) {
								itirc.setStirId(itirIds[i]);
							} else {
								itirc.setItemId(stiId);
								itirc.setSn(i);
							}
							itirc.setAnswer(answer[i]);

							itirService.newSurveyTpItemRes(itirc);
						}
					}
				}
			}
		}
		return "";
	}

	/**
	 * 删除培训模版问题
	 */
	@RequestMapping(value = "deleteTpItemRes.html", params = "method=delete", method = RequestMethod.POST)
	@ResponseBody
	public String deleteItemRes(HttpServletRequest req, HttpServletResponse res) {
		String stirId = req.getParameter("stirId");
		SurveyTpItemResParam where = new SurveyTpItemResParam();
		where.setId(stirId);
		Return reItcc = itirService.removeSurveyTpItemReses(where);
		return reItcc.getCode();
	}

	/**
	 * 更新发布状态
	 */
	@RequestMapping(value = "updateInquiryTpStatus.html", method = RequestMethod.GET)
	public ModelAndView updateTpStatus(HttpServletRequest req, HttpServletResponse res, ModelMap model,
			SurveyTpCon itc) {
		String surveyType = req.getParameter("surveyType");
		model.put("surveyType", surveyType);		
		/////判断是否有设置问题//////////////////
		String stId = itc.getStId();
		////通过当前调查模板id查其下的问题大类list
		SurveyTpCategoryParam scp = new SurveyTpCategoryParam();
		scp.setTemplateId(stId);
		List<SurveyTpCategoryBo> list = itcService.getSurveyTpCategorys(scp);
		////问题大类list非空则进行发布状态的更迭
		if(null != list && !list.isEmpty()){
			itService.newSurveyTp(itc);
		}
		else{
			return new ModelAndView("inquiry/errorTip", model);
		}
		return new ModelAndView("inquiry/inquiryTpIndex1", model);
	}
}
