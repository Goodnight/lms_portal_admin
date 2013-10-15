package com.telecom.lms.portal.admin.control.trainplan;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import com.telecom.lms.core.bo.Collection;
import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.basic.SysCodeBo;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.core.bo.train.TrainClassCon;
import com.telecom.lms.core.bo.train.TrainClassTeacherBo;
import com.telecom.lms.core.bo.train.TrainPlanBo;
import com.telecom.lms.core.bo.train.TrainPlanCon;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.StringTool;
import com.telecom.lms.sdk.service.auth.OrganizationService;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.basic.SysCodeService;
import com.telecom.lms.sdk.service.imp.notice.NoticeService;
import com.telecom.lms.sdk.service.train.TrainClassService;
import com.telecom.lms.sdk.service.train.TrainClassTeacherService;
import com.telecom.lms.sdk.service.train.TrainPlanService;
import com.telecom.lms.sdk.service.train.TrainTypeService;
import com.telecom.lms.sdk.util.DateTool;

@Controller
@RequestMapping("/trainplan")
public class TrainPlanCtr {
	
	@Autowired TrainPlanService trainPlanService;
	@Autowired CommonService commonService;
	@Autowired TrainClassService trainClassService;
	@Autowired TrainTypeService tpService;
	@Autowired UserInfoService userInfoService;
	@Autowired SysCodeService sysCodeService;
	@Autowired TrainClassTeacherService teacherService;
	@Autowired OrganizationService orgService;
	@Autowired NoticeService noticeService;
	
	/**
	 * 培训计划列表首页
	 */
	
	//培训计划首页
    @RequestMapping(value = "trainPlanList.html",method = RequestMethod.GET) //symbol=1
	public ModelAndView turnIndex(HttpServletRequest req,HttpServletResponse res,ModelMap model){
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
    	Map<String, String> con = new HashMap<String, String>();
    	con.put("uid", user.getUid());
    	OrganizationBo ob = userInfoService.getManageOrg(con);
    	model.put("orgDepOriId", ob.getOrgId());
    	return new ModelAndView("trainplan/trainPlanList",model);
	}
    
    //省审核市首页
    @RequestMapping(value = "checkTrainPlan.html",method = RequestMethod.GET) //symbol=2
	public ModelAndView turnCheck(HttpServletRequest req,HttpServletResponse res,ModelMap model){
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
    	Map<String, String> con = new HashMap<String, String>();
    	con.put("uid", user.getUid());
    	OrganizationBo ob = userInfoService.getManageOrg(con);
    	model.put("orgDepOriId", ob.getOrgId());
    	return new ModelAndView("trainplan/checkTrainPlan",model);
	}
    
    //查看上级首页
    @RequestMapping(value = "upTrainPlan.html",method = RequestMethod.GET) //symbol=3
	public ModelAndView turnUp(HttpServletRequest req,HttpServletResponse res,ModelMap model){
    	UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
    	Map<String, String> con = new HashMap<String, String>();
    	con.put("uid", user.getUid());
    	OrganizationBo ob = userInfoService.getManageOrg(con);
    	model.put("orgDepOriId", ob.getUpId());
    	return new ModelAndView("trainplan/upTrainPlan",model);
	}
		
	//跳转新建培训计划页面
	@RequestMapping(value="newTrainPlan.html",method=RequestMethod.GET)
	public ModelAndView turn(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String nowYear = DateTool.getNowShort().substring(0, 4); //取诸如2013-03-25的前4位,即当前日期年份
		model.put("nowYear", nowYear);
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		model.put("user", user);
		return new ModelAndView("trainplan/newTrainPlan", model);
	}
	
	//跳转培训计划详情页面
	@RequestMapping(value="trainPlanInfo.html",method=RequestMethod.GET)
	public ModelAndView turnOver(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String id = req.getParameter("id");
		String status = req.getParameter("status");
		TrainPlanBo p = trainPlanService.getTrainPlan(id);
		model.put("p",p);
		model.put("status", status);
		return new ModelAndView("trainplan/trainPlanInfo", model);
	}
	
	//跳转审核培训计划详情页面
	@RequestMapping(value="viewCheckTrainPlan.html",method=RequestMethod.GET)
	public ModelAndView viewCheck(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String id = req.getParameter("id");
		TrainPlanBo p = trainPlanService.getTrainPlan(id);
		model.put("p",p);
		return new ModelAndView("trainplan/viewCheckTrainPlan", model);
	}
	
	//跳转上级培训计划详情页面
	@RequestMapping(value="viewUpTrainPlan.html",method=RequestMethod.GET)
	public ModelAndView viewUp(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String id = req.getParameter("id");
		TrainPlanBo p = trainPlanService.getTrainPlan(id);
		model.put("p",p);
		return new ModelAndView("trainplan/viewUpTrainPlan", model);
	}
	
	//省审核市跳转查看培训班页面
	@RequestMapping(value="viewCheckClass.html",method=RequestMethod.GET)
	public ModelAndView checkClass(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		model.put("userRight",user);
		String id = req.getParameter("id");
		TrainPlanBo p = trainPlanService.getTrainPlan(id);
		model.put("p",p);
		return new ModelAndView("trainplan/viewCheckClass", model);
	}
	
	//查看上级跳转查看培训班页面
	@RequestMapping(value="viewUpClass.html",method=RequestMethod.GET)
	public ModelAndView upClass(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String id = req.getParameter("id");
		TrainPlanBo p = trainPlanService.getTrainPlan(id);
		model.put("p",p);
		return new ModelAndView("trainplan/viewUpClass", model);
	}
	
	//培训计划跳转查看培训班页面
	@RequestMapping(value="viewPlanClass.html",method=RequestMethod.GET)
	public ModelAndView planClass(HttpServletRequest req,HttpServletResponse res,String tcid,ModelMap model){	
		String id = req.getParameter("id");
		TrainPlanBo p = trainPlanService.getTrainPlan(id);
		model.put("p", p);
		String ban = req.getParameter("ban");
		if(!"".equals(ban)&&null!=ban){
			model.put("ban", ban);
		}
		String symbol = req.getParameter("symbol");
		if(!"".equals(symbol)&&null!=symbol){
			model.put("symbol", symbol);
		}
				
		//tcid为空新建，不为空修改
		if(tcid!=null){
			TrainClassBo trainClass = trainClassService.getTrainClass(tcid);
			model.put("trainClass", trainClass);
		}else{
			model.put("trainClass", new TrainClassBo());
		}
		
		return new ModelAndView("trainplan/viewPlanClass",model);
	}
	
	//跳转培训计划中添加培训班
	@RequestMapping(value="addTrainClass.html",method=RequestMethod.GET)
	public ModelAndView addTrainClass(HttpServletRequest req,HttpServletResponse res,String tcid,ModelMap model){
		String id = req.getParameter("id");
		TrainPlanBo p = trainPlanService.getTrainPlan(id);
		model.put("p",p);
		//tcid为空新建，不为空修改
		if(tcid!=null){
			TrainClassBo trainClass = trainClassService.getTrainClass(tcid);
			model.put("trainClass", trainClass);
		}else{
			model.put("trainClass", new TrainClassBo());
		}
		
		//获得参数列表
		//获得参数列表
		List<SysParamBo> wayList = tpService.getTrainWay();//getList("way");
		List<SysParamBo> levelList = tpService.getTrainLevel();//getList("level");
		List<SysParamBo> trainObjectTypeList = tpService.getTrainObjectType();//getList("objectType");
		List<SysParamBo> chargeWayList = tpService.getTrainChargeWay();// getList("chargeWay");
		
		model.put("chargeWayList", chargeWayList);
		model.put("wayList", wayList);
		model.put("levelList", levelList);
		model.put("trainObjectTypeList", trainObjectTypeList);
		return new ModelAndView("trainplan/addTrainClass",model);
	}
	
	//保存培训计划中的培训班信息
	@RequestMapping(value="saveTrainClass.html",method=RequestMethod.POST)
	public ModelAndView saveTrainClass(HttpServletRequest req,ModelMap model){
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		SysCodeBo sn = sysCodeService.getSysCodeTrainClass(); //20130407修改计划中培训班编号自动生成 by LTC
		TrainClassCon tc = new TrainClassCon();
		String id = req.getParameter("id");
		String name = req.getParameter("name");
		//String season = req.getParameter("season");
		//String sn = req.getParameter("sn");
		String class_level = req.getParameter("class_level");
		String class_way = req.getParameter("class_way");
		String trainObjectTypeId = req.getParameter("trainObjectTypeId");
		String address = req.getParameter("address");
		String class_dep = req.getParameter("class_dep");
		String[] principals = req.getParameterValues("principal");
		String[] principal_names = req.getParameterValues("principal_name");
		String start_date = req.getParameter("start_date");
		String end_date = req.getParameter("end_date");
		String charge_way = req.getParameter("charge_way");
		String content = req.getParameter("content");
		String purpose = req.getParameter("planPurpose");
		String trainObeject = req.getParameter("trainObeject");
		String _expectStartQuarter = req.getParameter("expectStartQuarter");
		if(_expectStartQuarter!= "" && _expectStartQuarter != null){
			int expectStartQuarter = Integer.parseInt(_expectStartQuarter);
			tc.setExpectStartQuarter(expectStartQuarter);
		}
		else{
			tc.setExpectStartQuarter(1); //保存预期季度缺省设为一季度
		}
		tc.setClass_plan(id);
		tc.setName(name);
		tc.setSn(this.generateSn(user.getType(), class_dep)+"-"+sn.getMaxSerial()); //20130407修改计划中培训班编号自动生成 by LTC
		tc.setType(2); //计划内培训班
		tc.setClass_level(class_level);
		tc.setClass_way(class_way);
		tc.setTrainObjectTypeId(trainObjectTypeId);
		tc.setAddress(address);
		tc.setClass_dep(class_dep);
		if(null!=principals&&principals.length>0){
			tc.setClass_principal(StringTool.getString(principals, StringTool.SPLIT_COMMA));
			tc.setClass_principal_name(StringTool.getString(principal_names, StringTool.SPLIT_COMMA));
		}
		tc.setStart_date(start_date);
		tc.setEnd_date(end_date);
		tc.setCharge_way(charge_way);
		tc.setContent(content);
		tc.setPurpose(purpose);
		tc.setTrainObject(trainObeject);
		tc.setStatus(4);
		String _timesNum = req.getParameter("timesNum");
		if(_timesNum != "" && _timesNum != null){
			int timesNum = Integer.parseInt(_timesNum);
			tc.setTimesNum(timesNum);
		}
		String _trainDuration = req.getParameter("trainDuration");
		if(_trainDuration!= "" && _trainDuration != null){
			float trainDuration = Float.parseFloat(_trainDuration);
			tc.setTrainDuration(trainDuration);
		}
		String _attendNum = req.getParameter("attendNum");
		if(_attendNum!= "" && _attendNum != null){
			int attendNum = Integer.parseInt(_attendNum);
			tc.setAttendNum(attendNum);
		}
        String _budget_train = req.getParameter("budget_train");
        if(_budget_train == "" || _budget_train == null){
        	double budget_train = 0;
        	tc.setBudget_train(budget_train);
        }
        if(_budget_train != "" && _budget_train != null){
        	double budget_train = Float.parseFloat(_budget_train);
        	tc.setBudget_train(budget_train);
        }
        String _budget_board = req.getParameter("budget_board");
        if(_budget_board == "" || _budget_board == null){
        	double budget_board = 0;
        	tc.setBudget_board(budget_board);
        }
        if(_budget_board != "" && _budget_board != null){
        	double budget_board = Float.parseFloat(_budget_board);
        	tc.setBudget_board(budget_board);
        }
        trainClassService.saveAndUpdateTrainClass(tc);
		return new ModelAndView("redirect:viewPlanClass.html?id="+id,model);
	}
	
	//跳转培训计划中修改培训班
	@RequestMapping(value="modifyTrainClass.html",method=RequestMethod.GET)
	public ModelAndView modifyClass(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String tcId = req.getParameter("tcId");
		TrainClassBo trainClass = trainClassService.getTrainClass(tcId);
		model.put("trainClass",trainClass);
		String tpId = req.getParameter("tpId");
		if(tpId!=null){
			TrainPlanBo p = trainPlanService.getTrainPlan(tpId);
			model.put("p", p);
		}else{
			model.put("p", new TrainPlanBo());
		}
		
		//获得参数列表
		List<SysParamBo> wayList = tpService.getTrainWay();//getList("way");
		List<SysParamBo> levelList = tpService.getTrainLevel();//getList("level");
		List<SysParamBo> trainObjectTypeList = tpService.getTrainObjectType();//getList("objectType");
		List<SysParamBo> chargeWayList = tpService.getTrainChargeWay();// getList("chargeWay");
		
		model.put("chargeWayList", chargeWayList);
		model.put("wayList", wayList);
		model.put("levelList", levelList);
		model.put("trainObjectTypeList", trainObjectTypeList);		
		////20130325增加单独用来查找班主任的接口 by LTC/////////////
		HashMap<String,String> con = new HashMap<String, String>();
		con.put("train_class_id", tcId);
		con.put("type", "2");
		List<TrainClassTeacherBo> principleList = teacherService.getTrainClassTeacherList(con);
		model.put("principleList", principleList);
		return new ModelAndView("trainplan/modifyTrainClass",model);
	}
	
	//保存培训计划中修改后的培训班信息
	@RequestMapping(value="saveChangedTrainClass.html",method=RequestMethod.POST)
	public ModelAndView saveChangedTrainClass(HttpServletRequest req,ModelMap model){
		String sn = req.getParameter("sn"); //修改时不用重新调用编号的生成  //sysCodeService.getSysCodeTrainClass(); //20130407修改计划中培训班编号自动生成 by LTC
		String id = req.getParameter("id");
		String tcId = req.getParameter("tcId");		
		TrainClassCon tc = new TrainClassCon();
		String name = req.getParameter("name");
		//String season = req.getParameter("season");
		String class_level = req.getParameter("class_level");
		String class_way = req.getParameter("class_way");
		String trainObjectTypeId = req.getParameter("trainObjectTypeId");
		String address = req.getParameter("address");
		String class_dep = req.getParameter("class_dep");
		String[] principals = req.getParameterValues("principal");
		String[] principal_names = req.getParameterValues("principal_name");
		String start_date = req.getParameter("start_date");
		String end_date = req.getParameter("end_date");
		String charge_way = req.getParameter("charge_way");
		String trainObeject = req.getParameter("trainObeject");
		String content = req.getParameter("content");
		String purpose = req.getParameter("planPurpose");
		String _expectStartQuarter = req.getParameter("expectStartQuarter");
		if(_expectStartQuarter!= "" && _expectStartQuarter != null){
			int expectStartQuarter = Integer.parseInt(_expectStartQuarter);
			tc.setExpectStartQuarter(expectStartQuarter);
		}
		else{
			tc.setExpectStartQuarter(1); //保存预期季度缺省设为一季度
		}
		tc.setTcId(tcId);
		tc.setClass_plan(id);
		tc.setType(2); //计划内培训班
		tc.setName(name);
		tc.setSn(sn); //20130418 修改时编号无需重复生成 by LTC
		tc.setClass_level(class_level);
		tc.setClass_way(class_way);
		tc.setTrainObjectTypeId(trainObjectTypeId);
		tc.setAddress(address);
		tc.setClass_dep(class_dep);
		if(null!=principals&&principals.length>0){
			tc.setClass_principal(StringTool.getString(principals, StringTool.SPLIT_COMMA));
			tc.setClass_principal_name(StringTool.getString(principal_names, StringTool.SPLIT_COMMA));
		}
		tc.setStart_date(start_date);
		tc.setEnd_date(end_date);
		tc.setCharge_way(charge_way);
		tc.setContent(content);
		tc.setPurpose(purpose);
		tc.setTrainObject(trainObeject);
		tc.setStatus(4);
		String _timesNum = req.getParameter("timesNum");
		if(_timesNum != "" && _timesNum != null){
			int timesNum = Integer.parseInt(_timesNum);
			tc.setTimesNum(timesNum);
		}
		String _trainDuration = req.getParameter("trainDuration");
		if(_trainDuration!= "" && _trainDuration != null){
			float trainDuration = Float.parseFloat(_trainDuration);
			tc.setTrainDuration(trainDuration);
		}
		String _attendNum = req.getParameter("attendNum");
		if(_attendNum!= "" && _attendNum != null){
			int attendNum = Integer.parseInt(_attendNum);
			tc.setAttendNum(attendNum);
		}
        String _budget_train = req.getParameter("budget_train");
        if(_budget_train == "" || _budget_train == null){
        	double budget_train = 0;
        	tc.setBudget_train(budget_train);
        }
        if(_budget_train != "" && _budget_train != null){
        	double budget_train = Float.parseFloat(_budget_train);
        	tc.setBudget_train(budget_train);
        }
        String _budget_board = req.getParameter("budget_board");
        if(_budget_board == "" || _budget_board == null){
        	double budget_board = 0;
        	tc.setBudget_board(budget_board);
        }
        if(_budget_board != "" && _budget_board != null){
        	double budget_board = Float.parseFloat(_budget_board);
        	tc.setBudget_board(budget_board);
        }
        trainClassService.saveAndUpdateTrainClass(tc);
		return new ModelAndView("redirect:viewPlanClass.html?id="+id,model);
	}
	
	//产生计划中培训班的编号
	private String generateSn(Integer userType,String orgid){
		OrganizationBo applyOrg = orgService.getOrganization(orgid);
		
		String[] idpath = applyOrg.getIdPath().split("/"); 
		int typeStatru = 0;
		String sname = "";
		for (int i = 0;i<idpath.length;i++) {
			if(idpath[i].equals("9002")){
				if(i==idpath.length-1){
					typeStatru =1;
				}else{
					if(orgService.getOrganization(idpath[i+1]).getType()==1){
						typeStatru = 1;
					}else{
						if((i+1)==idpath.length-1){
							typeStatru = 2;
						}else{
						if(orgService.getOrganization(idpath[i+2]).getType()==1 ){
							applyOrg.setShortName(orgService.getOrganization(idpath[i+1]).getShortName());
								typeStatru = 2;
							}else{
								applyOrg.setShortName(orgService.getOrganization(idpath[i+1]).getShortName());
								sname = orgService.getOrganization(idpath[i+2]).getShortName();
								typeStatru =3;
							}
					}
					}
			}
		}
	}
		
		
		StringBuffer sn = new StringBuffer();
		if(typeStatru == 1){
			//集团
			sn.append("JT");
		}else if(typeStatru == 2){
			//省
			if(StringUtils.isNotBlank(applyOrg.getShortName())){
				sn.append(applyOrg.getShortName());
			}else{
				sn.append("AA");
			}
		}else if(typeStatru == 3){
			
			//省
			
			if(StringUtils.isNotBlank(applyOrg.getShortName())){
				sn.append(applyOrg.getShortName());
			}else{
				sn.append("AA");
			}
			
			
			sn.append("-");
			//市
			
			//OrganizationBo org = orgService.getOrganization(applyOrg.getUpId());
			
			if(sname!=null){
				sn.append(StringUtils.isNotBlank(sname)?sname:"BB");
			}else{
				sn.append("BB");
			}
			
			//sn.append("-");
			//sn.append(StringUtils.isNotBlank(applyOrg.getShortName())?applyOrg.getShortName():"CC");
		}
		sn.append("-");
		sn.append(DateTool.getShortDate());
		return sn.toString();
	}
	
	//批量删除培训计划中的培训班
	@RequestMapping(value="deleteTrainClass.html",method=RequestMethod.POST)
	@ResponseBody
	public Return deleteTrainClass(HttpServletRequest req,HttpServletResponse res,@RequestParam("groupTypeId") String[] ids){
		Return re = trainClassService.removeTrainClassAll(ids);
		return re;
	}
		
	//跳转修改培训计划页面
	@RequestMapping(value="modifyTrainPlan.html",method=RequestMethod.GET)
	public ModelAndView turnModify(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String id = req.getParameter("id");
		TrainPlanBo p = trainPlanService.getTrainPlan(id);
		model.put("p",p);
		String nowYear = DateTool.getNowShort().substring(0, 4); //取诸如2013-03-25的前4位,即当前日期年份
		model.put("nowYear", nowYear);
		return new ModelAndView("trainplan/modifyTrainPlan", model);
	}
	
	//修改培训计划
	@RequestMapping(value="modifyAndSave.html",method=RequestMethod.POST)
	public ModelAndView modifyAndSave(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		TrainPlanCon q = new TrainPlanCon();
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		String year = req.getParameter("year");
        String id = req.getParameter("id");
		TrainPlanBo tpb = trainPlanService.getTrainPlan(id);
		q.setPlanType(tpb.getPlanType());
		q.setSn(tpb.getSn()); //20130320 by LTC 增加培训计划自增序号
		//String sn = req.getParameter("sn");
        String name = req.getParameter("name");
        String _cost = req.getParameter("cost");
        if(_cost == "" || _cost == null){
        	float cost = 0;
        	q.setCost(cost);
        }
        if(_cost != "" && _cost != null){
        	float cost = Float.parseFloat(_cost);
        	q.setCost(cost);
        }
        String start_date = req.getParameter("start_date");
        String end_date = req.getParameter("end_date");
        String remarks = req.getParameter("remarks");
        
        q.setTpId(id);        
        q.setYear(year);
        q.setName(name);
        q.setUpdater_id(user.getUid());    //修改时保存修改人ID
        q.setStart_date(start_date);
        q.setEnd_date(end_date);
        q.setRemarks(remarks);
        q.setUpdate_date(DateTool.getShortDate()); //保存当前修改日期
        trainPlanService.saveAndUpdateTrainPlan(q);
        return new ModelAndView("redirect:trainPlanList.html",model);
}
	
					
	//保存培训计划
	@RequestMapping(value="saveTrainPlan.html",method=RequestMethod.POST)
	public ModelAndView save(HttpServletRequest req,ModelMap model){
		TrainPlanCon p = new TrainPlanCon();
		UserInfoBo user = (UserInfoBo) req.getSession().getAttribute("user");
		OrganizationBo defaultOrg = (OrganizationBo) req.getSession().getAttribute("defaultOrg"); //20130321获得当前登陆用户的管辖范围
		String year = req.getParameter("year");
		String _planType = req.getParameter("planType");
		int planType = 1; //默认为临时培训计划
		if(_planType != "" && _planType != null){
			planType = Integer.parseInt(_planType);
			p.setPlanType(planType);
		}
		String sn = req.getParameter("sn");
        String name = req.getParameter("name");
        String _cost = req.getParameter("cost");
        if(_cost == "" || _cost == null){
        	float cost = 0;
        	p.setCost(cost);
        }
        if(_cost != "" && _cost != null){
        	float cost = Float.parseFloat(_cost);
        	p.setCost(cost);
        }
        String start_date = req.getParameter("start_date");
        String end_date = req.getParameter("end_date");
        String remarks = req.getParameter("remarks");
        String realSn = "PT"+year+sysCodeService.getSysCodeTrainPlan().getMaxSerial();
        
        p.setCreater_id(user.getUid());    //新建时保存创建人ID
        p.setCreate_date(DateTool.getNowShort());  //保存当前日期
        p.setYear(year);
        p.setSn(realSn);
        p.setName(name);
        p.setStart_date(start_date);
        p.setEnd_date(end_date);
        p.setRemarks(remarks);
        p.setStatus(0);    //默认培训计划未发布
        
        ////////////验证每一年只能发布一个正式培训计划 by LTC/////////////
        if(planType == 0){  //当前保存的培训计划为正式计划
            Map<String,String> con = new HashMap<String, String>();
            con.put("year", year);
            /////20130321修改by LTC验证集合需加入当前用户管辖范围下的orgDepId/////////
            con.put("orgDepId", defaultOrg.getOrgId());
            Collection<TrainPlanBo> trainPlanList = trainPlanService.getTrainPlans(con, "1", "1000");
            if(null != trainPlanList){ //通过当前年份查询出的培训计划集合非空则需做判断
                boolean flag = true;
                for(TrainPlanBo tpb:trainPlanList.getData()){  //遍历集合中每一个元素
                	if(tpb.getPlanType() == 0){ //若有正式计划项
                		flag = false; //则置标志位为False
                	}
                }
                if(flag){
                	trainPlanService.saveAndUpdateTrainPlan(p);   //集合中元素皆为临时计划则保存
            		return new ModelAndView("redirect:trainPlanList.html",model);
                }
                else{ //否则提示每年只能新建一个正式的培训计划
                	return new ModelAndView("trainplan/errorReport",model);
                }
            }
            else{ //通过当前年份查询出的培训计划集合为空则直接保存
                trainPlanService.saveAndUpdateTrainPlan(p);
        		return new ModelAndView("redirect:trainPlanList.html",model);
            }
        }
        else{ //当前保存的培训计划为临时则直接保存
            trainPlanService.saveAndUpdateTrainPlan(p);
    		return new ModelAndView("redirect:trainPlanList.html",model);
        }
	}
	
	//关闭培训计划详情页面后跳转
    @RequestMapping(value="turnBack.html",method=RequestMethod.GET)
	public ModelAndView turnback(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		return new ModelAndView("redirect:trainPlanList.html",model);
	}
		

	//批量删除培训计划
	@RequestMapping(value="deleteTrainPlan.html",method=RequestMethod.POST)
	@ResponseBody
	public Return deleteTrainPlan(HttpServletRequest req,HttpServletResponse res,@RequestParam("groupTypeId") String[] ids){
		if(ids!=null){                                                                                     //勾选培训计划不为空
			boolean flag = true;                                                                           //标记位
			for(int i=0;i<ids.length;i++){                                                                 //遍历批量处理
				HashMap<String,String> con = new HashMap<String, String>();   
				con.put("plan_id", ids[i]);                                                                //根据培训计划ID查培训班
				Collection<TrainClassBo> tcList = trainClassService.getTrainClassSelect(con, "1", "1000");
				for(TrainClassBo tc:tcList.getData()){                                                     //遍历Collection中的每个培训班对象
					if(tc.getStatus() == 2||tc.getStatus() == 3 ){                                         //当有培训班为实施或完成
						flag = false;                                                                      //修改标记位
					}
				}
			}
			if(flag){                                                                                      //遍历所有培训计划中的所有培训班后
				Return re = trainPlanService.removeTrainPlan(ids);                                         //标记位仍为TRUE便执行删除操作
				
				//生成待办事项
				noticeService.noticePlan(ids[0]);
				return re;
			}
		}		
		Return ref = new Return();
		ref.setContent("{\"succeed\": false, \"msg\": \"删除失败,有培训班正在实施!\"}");
		return ref;                                                                                       //否则不做操作          
	}
	
	/**
	 * AJAX方式的更新
	 * 用于改变培训计划的状态
	 */
	@RequestMapping(value="ajax/update.html",method=RequestMethod.POST)
	@ResponseBody
	public Return ajaxupdate(TrainPlanCon con, HttpServletRequest request){
		int statusJudge = con.getStatus();
		if(statusJudge != 0){    //当前操作不是将状态修改为"未发布"时,无需验证
			Return re = trainPlanService.saveAndUpdateTrainPlan(con);
			//生成待办事项
			noticeService.noticePlan(con.getTpId());
			
			return re;
		}
		else{
			String tpId = con.getTpId();
			boolean flag = true;                                                                           //标记位                                                               
				HashMap<String,String> tcon = new HashMap<String, String>();   
				tcon.put("plan_id", tpId);                                                                 //根据培训计划ID查培训班
				Collection<TrainClassBo> tcList = trainClassService.getTrainClassSelect(tcon, "1", "1000");
				for(TrainClassBo tc:tcList.getData()){                                                     //遍历Collection中的每个培训班对象
					if(tc.getStatus() == 2||tc.getStatus() == 3 ){                                         //当有培训班为实施或完成
						flag = false;                                                                      //修改标记位
					}
				}
			if(flag){                                                                                     //遍历所有培训计划中的所有培训班后
				Return re = trainPlanService.saveAndUpdateTrainPlan(con);
				//生成待办事项
				noticeService.noticePlan(con.getTpId());
				return re;
			}
			else{
				Return ref = new Return();
				ref.setContent("{\"succeed\": false, \"msg\": \"该培训计划中有处于实施或关闭状态下的培训班,不允许修改为未发布!\"}");
				return ref;
			}
		}			
	}	
}

