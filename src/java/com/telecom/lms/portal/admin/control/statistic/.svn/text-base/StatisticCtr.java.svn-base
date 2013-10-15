package com.telecom.lms.portal.admin.control.statistic;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.telecom.lms.core.bo.PageBo;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.report.ReportType;
import com.telecom.lms.sdk.service.train.TrainTypeService;

/**
 * 培训班统计
 * 
 * @author SJTU
 * 
 */
@Controller
@RequestMapping("/statistic")
public class StatisticCtr {

	@Autowired
	TrainTypeService tpService;

	@Resource(name = "jdbcTemplate")
	private JdbcTemplate staticJdbcTemplate;

	/*-----------------------------------------员工学习统计--------------------------------*/
	/**
	 * 员工学习统计
	 */
	@RequestMapping("user.html")
	public String toUser(HttpServletRequest request, ModelMap model) {
		UserInfoBo user = (UserInfoBo) request.getSession()
				.getAttribute("user");
		PageBo pager = new PageBo();
		int max = 10;
		int page = 1;
		if (request.getParameter("max") != null) {
			max = Integer.parseInt(request.getParameter("max"));
		}
		if (request.getParameter("page") != null) {
			page = Integer.parseInt(request.getParameter("page"));
		}
		String countsql = "select count(*) from report_job where type='"
				+ ReportType.user_learn + "' and creator_uid='" + user.getUid()+"'";
		Long records = staticJdbcTemplate.queryForLong(countsql);
		Integer count = (int) ((records) / max) + 1;
		pager.setCount(count);
		pager.setNo(page);
		pager.setRecords(records);
		pager.setSize(max);

		String sql = "select * from report_job where type='"
				+ ReportType.user_learn
				+ "' and creator_uid=? order by createTm desc limit ?,?";
		Object[] params = new Object[] { user.getUid(), (page - 1) * max, max };
		List rows = staticJdbcTemplate.queryForList(sql, params);

		model.put("rows", rows);
		model.put("pager", pager);
		model.put("page_fn", "page");
		model.put("username", user.getName());

		return "statistic/user";
	}

	/**
	 * 员工学习报表
	 */
	@RequestMapping("userreport.html")
	public String userReport(HttpServletRequest request) {

		return "statistic/userreport";
	}

	/**
	 * 用户课程报表
	 */
	@RequestMapping("usercourse.html")
	public String userclass(HttpServletRequest request) {

		return "statistic/usercourse";
	}

	/**
	 * 加入统计计划
	 */
	@RequestMapping("user/addreport.html")
	public String addUserReport(HttpServletRequest request, ModelMap model) {
		UserInfoBo user = (UserInfoBo) request.getSession()
				.getAttribute("user");
		String usertype = request.getParameter("usertype");// 用户类型
		String coursetype = request.getParameter("coursetype");// 课程类型
		String userIds[] = request.getParameterValues("userIds");// 用户id
		String depIds[] = request.getParameterValues("depIds");// 部门id
		String classIds[] = request.getParameterValues("classIds");// 课程id
		String knoId[] = request.getParameterValues("knoId");// 分类id
		String trainclassids[] = request.getParameterValues("trainclassids");// 培训班id
		String suborg = request.getParameter("suborg");// 是否包含子部门
		String subcom = request.getParameter("subcom");// 是否包含子公司
		String islearn = request.getParameter("islearn");// 是否包含非学习
		String sectionType = request.getParameter("sectionType");// 统计方式
		String year = request.getParameter("year");// 年
		String quarter = request.getParameter("quarter");// 季度
		String month = request.getParameter("month");// 月份
		String yearType = request.getParameter("yearType");// 上下半年
		String startDate = request.getParameter("startdate");// 开始时间
		String endDate = request.getParameter("enddate");// 结束时间
		String jobId = UUID.randomUUID().toString().replace("-", "");
		StringBuffer condition = new StringBuffer();
		List<String> batchsql = new ArrayList<String>();

		if (islearn != null && islearn.equals("1")) {
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','islearn','1','','" + jobId + "') ");
		} else {
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','islearn','0','','" + jobId + "') ");
		}
		if (suborg != null && suborg.equals("1")) {
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','suborg','1','','" + jobId + "') ");
		} else {
			if (usertype.equals("1")) {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','suborg','1','','" + jobId + "') ");
			} else {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','suborg','0','','" + jobId + "') ");
			}

		}
		if (subcom != null && subcom.equals("1")) {
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','subcom','1','','" + jobId + "') ");
		} else {
			if (usertype.equals("1")) {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','subcom','1','','" + jobId + "') ");
			} else {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','subcom','0','','" + jobId + "') ");
			}

		}
		OrganizationBo defaultOrg = (OrganizationBo) request.getSession()
				.getAttribute("defaultOrg");
		if (usertype.equals("1")) {
			condition.append("所有员工");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','depIds','"
					+ StringUtils.join(defaultOrg.getOrgId(), "$$")
					+ "','所有员工','" + jobId + "') ");
		} else if (usertype.equals("2")) {
			condition.append("指定员工");
			if (userIds != null && userIds.length > 0) {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','userIds','"
						+ StringUtils.join(userIds, "$$")
						+ "','指定员工','" + jobId + "') ");
			}
			if (depIds != null && depIds.length > 0) {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','depIds','"
						+ StringUtils.join(depIds, "$$")
						+ "','指定员工','" + jobId + "') ");
			}
		} else if (usertype.equals("3")) {
			condition.append("导入员工");
		}
		if (coursetype.equals("1")) {
			condition.append(",所有课程");
		} else if (coursetype.equals("2")) {
			condition.append(",指定课程");
			if (classIds != null && classIds.length > 0) {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','classIds','"
						+ StringUtils.join(classIds, "$$")
						+ "','指定课程','" + jobId + "') ");
			}
			if (knoId != null) {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','knoId','"
						+ StringUtils.join(knoId, "$$")
						+ "','指定课程','" + jobId + "') ");
			}
			if (trainclassids != null) {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','trainclassids','"
						+ StringUtils.join(trainclassids, "$$")
						+ "','指定课程','"
						+ jobId + "') ");
			}
		} else if (coursetype.equals("3")) {
			condition.append(",导入课程");
		}

		batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
				+ UUID.randomUUID().toString().replace("-", "")
				+ "','sectionType','"
				+ sectionType
				+ "','时间范围','"
				+ jobId
				+ "') ");
		if (sectionType.equals("0")) {
			condition.append(",月报," + year + "年度," + month + "月");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','year','" + year + "','年度','" + jobId + "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','month','" + month + "','月份','" + jobId + "') ");
		} else if (sectionType.equals("1")) {
			condition.append(",季报," + year + "年度," + quarter + "季度");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','year','" + year + "','年度','" + jobId + "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','quarter','" + quarter + "','季度','" + jobId + "') ");
		} else if (sectionType.equals("2")) {
			condition.append(",半年报," + year + "年度,"
					+ (yearType.equals("0") ? "上半年度" : "下半年度"));
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','year','" + year + "','年度','" + jobId + "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','yearType','"
					+ yearType
					+ "','上下半年','"
					+ jobId
					+ "') ");
		} else if (sectionType.equals("3")) {
			condition.append(",从" + startDate + "到" + endDate);
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','startDate','"
					+ startDate
					+ "','开始时间','"
					+ jobId
					+ "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','endDate','" + endDate + "','结束时间','" + jobId + "') ");
		}
		int result = staticJdbcTemplate
				.update("insert into report_job (jobId,createTm,status,creator_uid,type,describes) values ('"
						+ jobId
						+ "',now(),'0','"
						+ user.getUid()
						+ "','"
						+ ReportType.user_learn
						+ "','"
						+ condition.toString()
						+ "') ");
		int results[] = staticJdbcTemplate.batchUpdate(batchsql
				.toArray(new String[] {}));

		if (result != 0 && results.length > 0) {
			model.put("success", "1");
		} else {
			model.put("success", "0");
		}

		return "statistic/result";
	}

	/**
	 * 删除统计计划
	 */
	@RequestMapping("user/delreport.html")
	public String delUserReport(HttpServletRequest request, ModelMap model) {
		String jobId[] = request.getParameterValues("jobId");
		int flag = 0;
		for (int i = 0; i < jobId.length; i++) {
			int result = staticJdbcTemplate
					.update("delete from report_con where job_jobId ='"
							+ jobId[i] + "'");
			int result1 = staticJdbcTemplate
					.update("delete from rpt_user_learn where job_jobId ='"
							+ jobId[i] + "'");
			int result2 = staticJdbcTemplate
					.update("delete from report_job where jobId = '" + jobId[i]
							+ "'");
			if (result == 1 && result1 == 1 && result2 == 1) {
				flag = 1;
			}

		}
		if (flag == 1) {
			model.put("success", "1");
		} else {
			model.put("success", "0");
		}
		return "statistic/result";
	}

	/**
	 * 导出报表
	 */
	@RequestMapping("user/exportreport.html")
	public String exportUserReport(HttpServletRequest request) {

		return "statistic/userreport";
	}

	/**
	 * 导出报表详情
	 */
	@RequestMapping("user/exportreportdetail.html")
	public String exportUserReportDetail(HttpServletRequest request) {

		return "statistic/userreport";
	}

	// -----------------------------------------课程学习信息统计--------------------------------
	/**
	 * 课程学习统计
	 */
	@RequestMapping("course.html")
	public String toCourse(HttpServletRequest request, ModelMap model) {
		UserInfoBo user = (UserInfoBo) request.getSession()
				.getAttribute("user");
		PageBo pager = new PageBo();
		int max = 10;
		int page = 1;
		if (request.getParameter("max") != null) {
			max = Integer.parseInt(request.getParameter("max"));
		}
		if (request.getParameter("page") != null) {
			page = Integer.parseInt(request.getParameter("page"));
		}
		String countsql = "select count(*) from report_job where type='"
				+ ReportType.course_learn + "' and creator_uid='"
				+ user.getUid()+"'";
		Long records = staticJdbcTemplate.queryForLong(countsql);
		Integer count = (int) ((records) / max) + 1;
		pager.setCount(count);
		pager.setNo(page);
		pager.setRecords(records);
		pager.setSize(max);

		String sql = "select * from report_job where type='"
				+ ReportType.course_learn
				+ "' and creator_uid=? order by createTm desc limit ?,?";
		Object[] params = new Object[] { user.getUid(), (page - 1) * max, max };
		List rows = staticJdbcTemplate.queryForList(sql, params);

		model.put("rows", rows);
		model.put("pager", pager);
		model.put("page_fn", "page");
		model.put("username", user.getName());
		return "statistic/course";
	}

	/**
	 * 课程学习报表
	 */
	@RequestMapping("coursereport.html")
	public String courseReport(HttpServletRequest request) {

		return "statistic/coursereport";
	}

	/**
	 * 加入统计计划
	 */
	@RequestMapping("course/addreport.html")
	public String addCourseReport(HttpServletRequest request, ModelMap model) {
		UserInfoBo user = (UserInfoBo) request.getSession()
				.getAttribute("user");
		String usertype = request.getParameter("usertype");// 用户类型
		String coursetype = request.getParameter("coursetype");// 课程类型
		String userIds[] = request.getParameterValues("userIds");// 用户id
		String depIds[] = request.getParameterValues("depIds");// 部门id
		String classIds[] = request.getParameterValues("classIds");// 课程id
		String knoId[] = request.getParameterValues("knoId");// 分类id
		String trainclassids[] = request.getParameterValues("trainclassids");// 培训班id
		String suborg = request.getParameter("suborg");// 是否包含子部门
		String subcom = request.getParameter("subcom");// 是否包含子公司
		String islearn = request.getParameter("islearn");// 是否包含非学习
		String sectionType = request.getParameter("sectionType");// 统计方式
		String year = request.getParameter("year");// 年
		String quarter = request.getParameter("quarter");// 季度
		String month = request.getParameter("month");// 月份
		String yearType = request.getParameter("yearType");// 上下半年
		String startDate = request.getParameter("startdate");// 开始时间
		String endDate = request.getParameter("enddate");// 结束时间
		String jobId = UUID.randomUUID().toString().replace("-", "");
		StringBuffer condition = new StringBuffer();
		List<String> batchsql = new ArrayList<String>();

		if (islearn != null && islearn.equals("1")) {
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','islearn','1','','" + jobId + "') ");
		} else {
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','islearn','0','','" + jobId + "') ");
		}
		if (suborg != null && suborg.equals("1")) {
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','suborg','1','','" + jobId + "') ");
		} else {
			if (usertype.equals("1")) {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','suborg','1','','" + jobId + "') ");
			} else {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','suborg','0','','" + jobId + "') ");
			}

		}
		if (subcom != null && subcom.equals("1")) {
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','subcom','1','','" + jobId + "') ");
		} else {
			if (usertype.equals("1")) {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','subcom','1','','" + jobId + "') ");
			} else {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','subcom','0','','" + jobId + "') ");
			}

		}
		OrganizationBo defaultOrg = (OrganizationBo) request.getSession()
				.getAttribute("defaultOrg");
		if (usertype.equals("1")) {
			condition.append("所有员工");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','depIds','"
					+ StringUtils.join(defaultOrg.getOrgId(), "$$")
					+ "','所有员工','" + jobId + "') ");
		} else if (usertype.equals("2")) {
			condition.append("指定员工");
			if (userIds != null && userIds.length > 0) {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','userIds','"
						+ StringUtils.join(userIds, "$$")
						+ "','指定员工','" + jobId + "') ");
			}
			if (depIds != null && depIds.length > 0) {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','depIds','"
						+ StringUtils.join(depIds, "$$")
						+ "','指定员工','" + jobId + "') ");
			}
		} else if (usertype.equals("3")) {
			condition.append("导入员工");
		}
		if (coursetype.equals("1")) {
			condition.append(",所有课程");
		} else if (coursetype.equals("2")) {
			condition.append(",指定课程");
			if (classIds != null && classIds.length > 0) {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','classIds','"
						+ StringUtils.join(classIds, "$$")
						+ "','指定课程','" + jobId + "') ");
			}
			if (knoId != null) {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','knoId','"
						+ StringUtils.join(knoId, "$$")
						+ "','指定课程','" + jobId + "') ");
			}
			if (trainclassids != null) {
				batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
						+ UUID.randomUUID().toString().replace("-", "")
						+ "','trainclassids','"
						+ StringUtils.join(trainclassids, "$$")
						+ "','指定课程','"
						+ jobId + "') ");
			}
		} else if (coursetype.equals("3")) {
			condition.append(",导入课程");
		}

		batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
				+ UUID.randomUUID().toString().replace("-", "")
				+ "','sectionType','"
				+ sectionType
				+ "','时间范围','"
				+ jobId
				+ "') ");
		if (sectionType.equals("0")) {
			condition.append(",月报," + year + "年度," + month + "月");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','year','" + year + "','年度','" + jobId + "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','month','" + month + "','月份','" + jobId + "') ");
		} else if (sectionType.equals("1")) {
			condition.append(",季报," + year + "年度," + quarter + "季度");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','year','" + year + "','年度','" + jobId + "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','quarter','" + quarter + "','季度','" + jobId + "') ");
		} else if (sectionType.equals("2")) {
			condition.append(",半年报," + year + "年度,"
					+ (yearType.equals("0") ? "上半年度" : "下半年度"));
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','year','" + year + "','年度','" + jobId + "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','yearType','"
					+ yearType
					+ "','上下半年','"
					+ jobId
					+ "') ");
		} else if (sectionType.equals("3")) {
			condition.append(",从" + startDate + "到" + endDate);
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','startDate','"
					+ startDate
					+ "','开始时间','"
					+ jobId
					+ "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','endDate','" + endDate + "','结束时间','" + jobId + "') ");
		}
		int result = staticJdbcTemplate
				.update("insert into report_job (jobId,createTm,status,creator_uid,type,describes) values ('"
						+ jobId
						+ "',now(),'0','"
						+ user.getUid()
						+ "','"
						+ ReportType.course_learn
						+ "','"
						+ condition.toString() + "') ");
		int results[] = staticJdbcTemplate.batchUpdate(batchsql
				.toArray(new String[] {}));

		if (result != 0 && results.length > 0) {
			model.put("success", "1");
		} else {
			model.put("success", "0");
		}

		return "statistic/result";
	}

	/**
	 * 删除统计计划
	 */
	@RequestMapping("course/delreport.html")
	public String delCourseReport(HttpServletRequest request, ModelMap model) {
		String jobId[] = request.getParameterValues("jobId");
		int flag = 0;
		for (int i = 0; i < jobId.length; i++) {
			int result = staticJdbcTemplate
					.update("delete from report_con where job_jobId ='"
							+ jobId[i] + "'");

			int result1 = staticJdbcTemplate
					.update("delete from rpt_course_learn where job_jobId ='"
							+ jobId[i] + "'");

			int result2 = staticJdbcTemplate
					.update("delete from report_job where jobId = '" + jobId[i]
							+ "'");
			if (result == 1 && result1 == 1 && result2 == 1) {
				flag = 1;
			}

		}
		if (flag == 1) {
			model.put("success", "1");
		} else {
			model.put("success", "0");
		}
		return "statistic/result";
	}

	/**
	 * 导出报表
	 */
	@RequestMapping("course/exportreport.html")
	public String exportCourseReport(HttpServletRequest request) {

		return "statistic/coursereport";
	}

	// -----------------------------------------机构学习信息统计--------------------------------
	/**
	 * 机构学习信息统计
	 */
	@RequestMapping("org.html")
	public String toOrg(HttpServletRequest request, ModelMap model) {
		UserInfoBo user = (UserInfoBo) request.getSession()
				.getAttribute("user");
		String flag = request.getParameter("flag");
		String orgId = request.getParameter("orgId");
		PageBo pager = new PageBo();
		int max = 10;
		int page = 1;
		if (request.getParameter("max") != null) {
			max = Integer.parseInt(request.getParameter("max"));
		}
		if (request.getParameter("page") != null) {
			page = Integer.parseInt(request.getParameter("page"));
		}
		String countsql = null;

		if (orgId != null) {
			countsql = "select count(*) from report_job where (type='"
					+ ReportType.org_case + "' or type='"
					+ ReportType.org_course + "' or type='"
					+ ReportType.org_doc + "' or type='"
					+ ReportType.org_trainclass + "') and idPath like '%/"
					+ orgId + "%' and creator_uid='" + user.getUid()+"'";
		} else {
			countsql = "select count(*) from report_job where (type='"
					+ ReportType.org_case + "' or type='"
					+ ReportType.org_course + "' or type='"
					+ ReportType.org_doc + "' or type='"
					+ ReportType.org_trainclass + "') and creator_uid='"
					+ user.getUid()+"'";
		}
		Long records = staticJdbcTemplate.queryForLong(countsql);
		Integer count = (int) ((records) / max) + 1;
		pager.setCount(count);
		pager.setNo(page);
		pager.setRecords(records);
		pager.setSize(max);

		String sql = null;
		Object[] params = null;
		if (orgId != null) {
			sql = "select * from report_job where (type='"
					+ ReportType.org_case + "' or type='"
					+ ReportType.org_course + "' or type='"
					+ ReportType.org_doc + "' or type='"
					+ ReportType.org_trainclass
					+ "') and creator_uid=? and idPath like '%/" + orgId
					+ "%' order by type, createTm desc limit ?,?";
			params = new Object[] { user.getUid(), (page - 1) * max, max };
		} else {
			sql = "select * from report_job where (type='"
					+ ReportType.org_case
					+ "' or type='"
					+ ReportType.org_course
					+ "' or type='"
					+ ReportType.org_doc
					+ "' or type='"
					+ ReportType.org_trainclass
					+ "') and creator_uid=? order by type, createTm desc  limit ?,?";
			params = new Object[] { user.getUid(), (page - 1) * max, max };

		}
		List rows = staticJdbcTemplate.queryForList(sql, params);
		System.out.println(flag);
		model.put("rows", rows);
		model.put("pager", pager);
		model.put("orgId", orgId);
		model.put("page_fn", "page");
		model.put("username", user.getName());
		model.put("flag", flag);
		return "statistic/org";
	}

	/**
	 * 机构学习信息统计报表
	 */
	@RequestMapping("orgreport.html")
	public String orgReport(HttpServletRequest request) {
		String type = request.getParameter("reportType");
		if ("course".equals(type)) {
			return "statistic/orgcoursereport";
		} else if ("doc".equals(type)) {
			return "statistic/orgdocreport";
		} else if ("case".equals(type)) {
			return "statistic/orgcasereport";
		} else if ("trainclass".equals(type)) {
			return "statistic/orgtrainclassreport";
		} else {
			return "";
		}

	}

	/**
	 * 加入统计计划
	 */
	@RequestMapping("org/addreport.html")
	public String addOrgReport(HttpServletRequest request, ModelMap model) {
		UserInfoBo user = (UserInfoBo) request.getSession()
				.getAttribute("user");

		String orgId = request.getParameter("orgId");// 机构
		String orgName = request.getParameter("orgName");// 名称
		String idPath = request.getParameter("idPath");// 机构树
		String reporttype = request.getParameter("reporttype");// 类型
		String suborg = request.getParameter("suborg");// 是否包含子机构
		String sectionType = request.getParameter("sectionType");// 统计方式
		String year = request.getParameter("year");// 年
		String quarter = request.getParameter("quarter");// 季度
		String month = request.getParameter("month");// 月份
		String yearType = request.getParameter("yearType");// 上下半年
		String startDate = request.getParameter("startdate");// 开始时间
		String endDate = request.getParameter("enddate");// 结束时间
		String jobId = UUID.randomUUID().toString().replace("-", "");
		StringBuffer condition = new StringBuffer();
		List<String> batchsql = new ArrayList<String>();

		System.out.println(orgId);
		System.out.println(idPath);
		ReportType type = null;
		if (reporttype.equals("1")) {
			type = ReportType.org_course;
		} else if (reporttype.equals("2")) {
			type = ReportType.org_doc;
		} else if (reporttype.equals("3")) {
			type = ReportType.org_case;
		} else if (reporttype.equals("4")) {
			type = ReportType.org_trainclass;
		}
		OrganizationBo defaultOrg = (OrganizationBo) request.getSession()
				.getAttribute("defaultOrg");
		if (orgId != null) {
			condition.append(orgName);
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','depIds','" + orgId + "','','" + jobId + "') ");
		} else {
			condition.append(defaultOrg.getName());
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','depIds','"
					+ defaultOrg.getOrgId()
					+ "','','"
					+ jobId
					+ "') ");
		}
		if (suborg != null && suborg.equals("1")) {
			condition.append(",包含子机构");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','suborg','1','','" + jobId + "') ");
		} else {
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','suborg','0','','" + jobId + "') ");

		}
		batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
				+ UUID.randomUUID().toString().replace("-", "")
				+ "','sectionType','"
				+ sectionType
				+ "','时间范围','"
				+ jobId
				+ "') ");
		if (sectionType.equals("0")) {
			condition.append(",月报," + year + "年度," + month + "月");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','year','" + year + "','年度','" + jobId + "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','month','" + month + "','月份','" + jobId + "') ");
		} else if (sectionType.equals("1")) {
			condition.append(",季报," + year + "年度," + quarter + "季度");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','year','" + year + "','年度','" + jobId + "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','quarter','" + quarter + "','季度','" + jobId + "') ");
		} else if (sectionType.equals("2")) {
			condition.append(",半年报," + year + "年度,"
					+ (yearType.equals("0") ? "上半年度" : "下半年度"));
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','year','" + year + "','年度','" + jobId + "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','yearType','"
					+ yearType
					+ "','上下半年','"
					+ jobId
					+ "') ");
		} else if (sectionType.equals("3")) {
			condition.append(",从" + startDate + "到" + endDate);
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','startDate','"
					+ startDate
					+ "','开始时间','"
					+ jobId
					+ "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','endDate','" + endDate + "','结束时间','" + jobId + "') ");
		}

		int result = staticJdbcTemplate
				.update("insert into report_job (jobId,createTm,status,creator_uid,type,describes,org_orgId,idPath) values ('"
						+ jobId
						+ "',now(),'0','"
						+ user.getUid()
						+ "','"
						+ type
						+ "','"
						+ condition.toString()
						+ "','"
						+ orgId
						+ "','" + idPath + "') ");
		int results[] = staticJdbcTemplate.batchUpdate(batchsql
				.toArray(new String[] {}));

		if (result != 0 && results.length > 0) {
			model.put("success", "1");
		} else {
			model.put("success", "0");
		}

		return "statistic/result";
	}

	/**
	 * 删除统计计划
	 */
	@RequestMapping("org/delreport.html")
	public String delOrgReport(HttpServletRequest request, ModelMap model) {
		String jobId[] = request.getParameterValues("jobId");
		int flag = 0;
		for (int i = 0; i < jobId.length; i++) {
			int result = staticJdbcTemplate
					.update("delete from report_con where job_jobId ='"
							+ jobId[i] + "'");
			staticJdbcTemplate
					.update("delete from rpt_org_trainclass where job_jobId ='"
							+ jobId[i] + "'");
			staticJdbcTemplate
					.update("delete from rpt_org_course where job_jobId ='"
							+ jobId[i] + "'");
			staticJdbcTemplate
					.update("delete from rpt_org_doc where job_jobId ='"
							+ jobId[i] + "'");
			int result1 = staticJdbcTemplate
					.update("delete from report_job where jobId = '" + jobId[i]
							+ "'");
			if (result == 1 && result1 == 1) {
				flag = 1;
			}

		}
		if (flag == 1) {
			model.put("success", "1");
		} else {
			model.put("success", "0");
		}
		return "statistic/result";
	}

	/**
	 * 导出报表
	 */
	@RequestMapping("org/exportreport.html")
	public String exportOrgReport(HttpServletRequest request) {
		String type = request.getParameter("type");
		if ("course".equals(type)) {
			return "statistic/orgcoursereport";
		} else if ("doc".equals(type)) {
			return "statistic/orgdocreport";
		} else if ("case".equals(type)) {
			return "statistic/orgcasereport";
		} else if ("trainclass".equals(type)) {
			return "statistic/orgtrainclassreport";
		} else {
			return "";
		}
	}

	// -----------------------------------------培训班详情统计统计--------------------------------
	/**
	 * 培训班详情统计
	 */
	@RequestMapping("trainclass.html")
	public String toTrainClass(HttpServletRequest request, ModelMap model) {
		List<SysParamBo> wayList = tpService.getTrainWay();// getList("way");
		List<SysParamBo> levelList = tpService.getTrainLevel();// getList("level");
		List<SysParamBo> objectList = tpService.getTrainObjectType();// getList("level");

		for (int i = 0; i < wayList.size(); i++) {
			System.out.println(wayList.get(i).getName());
		}
		UserInfoBo user = (UserInfoBo) request.getSession()
				.getAttribute("user");
		String orgId = request.getParameter("orgId");
		String flag = request.getParameter("flag");
		PageBo pager = new PageBo();
		int max = 10;
		int page = 1;
		if (request.getParameter("max") != null) {
			max = Integer.parseInt(request.getParameter("max"));
		}
		if (request.getParameter("page") != null) {
			page = Integer.parseInt(request.getParameter("page"));
		}
		String countsql = null;

		if (orgId != null) {
			countsql = "select count(*) from report_job where type='"
					+ ReportType.trainclass + "' and idPath like '%/" + orgId
					+ "%' and creator_uid='" + user.getUid()+"'";
		} else {
			countsql = "select count(*) from report_job where type='"
					+ ReportType.trainclass + "' and creator_uid='"
					+ user.getUid()+"'";
		}
		Long records = staticJdbcTemplate.queryForLong(countsql);
		Integer count = (int) ((records) / max) + 1;
		pager.setCount(count);
		pager.setNo(page);
		pager.setRecords(records);
		pager.setSize(max);

		System.out.println(orgId);
		String sql = null;
		Object[] params = null;
		if (orgId != null) {
			sql = "select * from report_job where  type='"
					+ ReportType.trainclass
					+ "' and creator_uid=? and idPath like '%/" + orgId
					+ "%' order by type, createTm desc  limit ?,?";
			params = new Object[] { user.getUid(), (page - 1) * max, max };
		} else {
			sql = "select * from report_job where type='"
					+ ReportType.trainclass
					+ "' and creator_uid=? order by type, createTm desc  limit ?,?";
			params = new Object[] { user.getUid(), (page - 1) * max, max };

		}
		List rows = staticJdbcTemplate.queryForList(sql, params);

		model.put("wayList", wayList);
		model.put("levelList", levelList);
		model.put("objectList", objectList);
		model.put("rows", rows);
		model.put("pager", pager);
		model.put("orgId", orgId);
		model.put("page_fn", "page");
		model.put("username", user.getName());
		model.put("flag",flag);
		return "statistic/trainclass";
	}

	/**
	 * 培训班详情统计报表
	 */
	@RequestMapping("trainclassreport.html")
	public String TrainClassReport(HttpServletRequest request) {

		return "statistic/trainclassreport";
	}

	/**
	 * 培训班人员信息
	 */
	@RequestMapping("trainclassmember.html")
	public String TrainClassMember(HttpServletRequest request) {

		return "statistic/trainclassmember";
	}

	/**
	 * 培训班考试信息
	 */
	@RequestMapping("trainclassexam.html")
	public String TrainClassExam(HttpServletRequest request) {

		return "statistic/trainclassexam";
	}

	/**
	 * 加入统计计划
	 */
	@RequestMapping("trainclass/addreport.html")
	public String addTrainClassReport(HttpServletRequest request, ModelMap model) {
		UserInfoBo user = (UserInfoBo) request.getSession()
				.getAttribute("user");
		String orgId = request.getParameter("orgId");// 机构
		String orgName = request.getParameter("orgName");// 名称
		String idPath = request.getParameter("idPath");// 机构树
		String trainCName = request.getParameter("trainCName");// 培训班名称
		String levelSpid = request.getParameter("levelSpid");// 培训班级别
		String trainTSpId = request.getParameter("trainTSpId");// 培训班类别
		String waySpId = request.getParameter("waySpId");// 培训班方式
		String trainTSpName = request.getParameter("trainTSpName");// 培训班类别名称
		String levelSpName = request.getParameter("levelSpName");// 培训班级别名称
		String waySpName = request.getParameter("waySpName");// 培训班方式名称
		String suborg = request.getParameter("suborg");// 是否包含子机构
		String sectionType = request.getParameter("sectionType");// 统计方式
		String year = request.getParameter("year");// 年
		String quarter = request.getParameter("quarter");// 季度
		String month = request.getParameter("month");// 月份
		String yearType = request.getParameter("yearType");// 上下半年
		String startDate = request.getParameter("startdate");// 开始时间
		String endDate = request.getParameter("enddate");// 结束时间

		String jobId = UUID.randomUUID().toString().replace("-", "");
		StringBuffer condition = new StringBuffer();
		List<String> batchsql = new ArrayList<String>();
		int flag = 1;
		OrganizationBo defaultOrg = (OrganizationBo) request.getSession()
				.getAttribute("defaultOrg");
		if (orgId != null) {
			condition.append(orgName);
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','depIds','" + orgId + "','','" + jobId + "') ");
		} else {
			condition.append(defaultOrg.getName());
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','depIds','"
					+ defaultOrg.getOrgId()
					+ "','','"
					+ jobId
					+ "') ");
		}
		if (suborg != null && suborg.equals("1")) {
			condition.append(",包含子机构");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','suborg','1','','" + jobId + "') ");
		} else {
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','suborg','0','','" + jobId + "') ");

		}
		if (!trainCName.equals("")) {
			condition.append("," + trainCName);
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','trainCName','"
					+ trainCName
					+ "','','"
					+ jobId
					+ "') ");
		} else {
			condition.append(",全部培训班");
		}
		if (levelSpid != null && !("").equals(levelSpid)) {
			condition.append("," + levelSpName);
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','levelSpid','" + levelSpid + "','','" + jobId + "') ");
		} else {
			condition.append(",所有级别");
		}
		if (trainTSpId != null && !("").equals(trainTSpId)) {
			condition.append("," + trainTSpName);
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','trainTSpId','"
					+ trainTSpId
					+ "','','"
					+ jobId
					+ "') ");
		} else {
			condition.append(",所以类别");
		}
		if (waySpId != null && !("").equals(waySpId)) {
			condition.append("," + waySpName);
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','waySpId','" + waySpId + "','','" + jobId + "') ");
		} else {
			condition.append(",所有方式");
		}

		batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
				+ UUID.randomUUID().toString().replace("-", "")
				+ "','sectionType','"
				+ sectionType
				+ "','时间范围','"
				+ jobId
				+ "') ");
		if (sectionType.equals("0")) {
			condition.append(",月报," + year + "年度," + month + "月");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','year','" + year + "','年度','" + jobId + "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','month','" + month + "','月份','" + jobId + "') ");
		} else if (sectionType.equals("1")) {
			condition.append(",季报," + year + "年度," + quarter + "季度");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','year','" + year + "','年度','" + jobId + "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','quarter','" + quarter + "','季度','" + jobId + "') ");
		} else if (sectionType.equals("2")) {
			condition.append(",半年报," + year + "年度,"
					+ (yearType.equals("0") ? "上半年度" : "下半年度"));
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','year','" + year + "','年度','" + jobId + "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','yearType','"
					+ yearType
					+ "','上下半年','"
					+ jobId
					+ "') ");
		} else if (sectionType.equals("3")) {
			condition.append(",从" + startDate + "到" + endDate);
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','startDate','"
					+ startDate
					+ "','开始时间','"
					+ jobId
					+ "') ");
			batchsql.add("insert into report_con (conId,conditionKey,conditionValue,name,job_jobId) values ('"
					+ UUID.randomUUID().toString().replace("-", "")
					+ "','endDate','" + endDate + "','结束时间','" + jobId + "') ");
		}

		if (flag == 1 && !orgId.equals("")) {
			int result = staticJdbcTemplate
					.update("insert into report_job (jobId,createTm,status,creator_uid,type,describes,org_orgId,idPath) values ('"
							+ jobId
							+ "',now(),'0','"
							+ user.getUid()
							+ "','"
							+ ReportType.trainclass
							+ "','"
							+ condition.toString()
							+ "','"
							+ orgId
							+ "','"
							+ idPath + "') ");
			int results[] = staticJdbcTemplate.batchUpdate(batchsql
					.toArray(new String[] {}));
			if (result != 0 && results.length > 0) {
				model.put("success", "1");
			} else {
				model.put("success", "0");
			}
		} else {
			model.put("success", "0");
		}

		return "statistic/result";
	}

	/**
	 * 删除统计计划
	 */
	@RequestMapping("trainclass/delreport.html")
	public String delTrainClassReport(HttpServletRequest request, ModelMap model) {
		String jobId[] = request.getParameterValues("jobId");
		int flag = 0;
		for (int i = 0; i < jobId.length; i++) {
			int result = staticJdbcTemplate
					.update("delete from report_con where job_jobId ='"
							+ jobId[i] + "'");

			int result1 = staticJdbcTemplate
					.update("delete from rpt_train_plan where job_jobId ='"
							+ jobId[i] + "'");
			int result2 = staticJdbcTemplate
					.update("delete from report_job where jobId = '" + jobId[i]
							+ "'");
			if (result == 1 && result1 == 1 && result2 == 1) {
				flag = 1;
			}

		}
		if (flag == 1) {
			model.put("success", "1");
		} else {
			model.put("success", "0");
		}
		return "statistic/result";
	}

	/**
	 * 导出报表
	 */
	@RequestMapping("trainclass/exportreport.html")
	public String exportTrainClassReport(HttpServletRequest request) {

		return "trainclass/trainclassreport";
	}

	// -----------------------------------------培训计划统计--------------------------------
	/**
	 * 培训计划统计
	 */
	@RequestMapping("trainplan.html")
	public String toTrainPlan(HttpServletRequest request, ModelMap model) {
		UserInfoBo user = (UserInfoBo) request.getSession()
				.getAttribute("user");
		OrganizationBo defaultOrg = (OrganizationBo) request.getSession()
				.getAttribute("defaultOrg");
		String flag = request.getParameter("flag");
		PageBo pager = new PageBo();
		int max = 10;
		int page = 1;
		if (request.getParameter("max") != null) {
			max = Integer.parseInt(request.getParameter("max"));
		}
		if (request.getParameter("page") != null) {
			page = Integer.parseInt(request.getParameter("page"));
		}
		String year = request.getParameter("year");
		String name = request.getParameter("name");
		String planType = request.getParameter("planType");
		String orgId = request.getParameter("orgId");
		String suborg = request.getParameter("suborg");

		StringBuffer countsql = new StringBuffer();
		StringBuffer sql = new StringBuffer();
		countsql.append("select count(*) from train_plan tp , au_organization ao where tp.org_orgId=ao.orgId and tp.creater_uid='"
				+ user.getUid() + "'");
		sql.append("select tp.*,ao.name as orgname from train_plan tp , au_organization ao where tp.org_orgId=ao.orgId and tp.creater_uid=?");
		if (year != null && !year.equals("")) {
			countsql.append(" and tp.year=" + year);
			sql.append(" and tp.year=" + year);
		}
		if (name != null && !name.equals("")) {
			countsql.append(" and tp.name like '%" + name + "%'");
			sql.append(" and tp.name like '%" + name + "%'");
		}
		if (planType != null && !planType.equals("")) {
			countsql.append(" and tp.planType =" + planType);
			sql.append(" and tp.planType =" + planType);
		}
		if (orgId != null && !orgId.equals("")) {
			if (suborg != null && suborg.equals("0")) {
				countsql.append(" and tp.org_orgId='" + orgId + "'");
				sql.append(" and tp.org_orgId='" + orgId + "'");
			} else {
				countsql.append(" and ao.idPath like '%/" + orgId + "%'");
				sql.append(" and ao.idPath like '%/" + orgId + "%'");
			}
		} else {
			if (suborg != null && suborg.equals("0")) {
				countsql.append(" and tp.org_orgId='" + defaultOrg.getOrgId()
						+ "'");
				sql.append(" and tp.org_orgId='" + defaultOrg.getOrgId() + "'");
			} else {
				countsql.append(" and ao.idPath like '%/"
						+ defaultOrg.getOrgId() + "%'");
				sql.append(" and ao.idPath like '%/" + defaultOrg.getOrgId()
						+ "%'");
			}
		}

		Long records = staticJdbcTemplate.queryForLong(countsql.toString());
		Integer count = (int) ((records) / max) + 1;
		pager.setCount(count);
		pager.setNo(page);
		pager.setRecords(records);
		pager.setSize(max);

		sql.append(" order by tp.createDt limit ?,?");
		Object[] params = new Object[] { user.getUid(), (page - 1) * max, max };
		List rows = staticJdbcTemplate.queryForList(sql.toString(), params);

		model.put("rows", rows);
		model.put("pager", pager);
		model.put("page_fn", "page");
		model.put("username", user.getName());
		model.put("name", name);
		model.put("year", year);
		model.put("planType", planType);
		model.put("username", user.getName());
		model.put("orgId", orgId);
		model.put("suborg", suborg);
		model.put("flag", flag);
		return "statistic/trainplan";
	}

	/*
	 * 培训计划搜索
	 */
	@RequestMapping("trainplan/searchresult.html")
	public String searchTrainPlan(HttpServletRequest request, ModelMap model) {
		int max = 10;
		int page = 1;
		if (request.getParameter("max") != null) {
			max = Integer.parseInt(request.getParameter("max"));
		}
		if (request.getParameter("page") != null) {
			page = Integer.parseInt(request.getParameter("page"));
		}
		String year = request.getParameter("year");
		String name = request.getParameter("name");
		String planType = request.getParameter("planType");
		String orgId = request.getParameter("orgId");
		String suborg = request.getParameter("suborg");

		System.out.println("suborg" + suborg);

		model.put("page_fn", "page");
		model.put("name", name);
		model.put("year", year);
		model.put("planType", planType);
		model.put("orgId", orgId);
		model.put("suborg", suborg);

		return "statistic/trainplanresult";
	}

	/*
	 * 培训机计划导出
	 */
	@RequestMapping("trainplan/exportreport.html")
	public String exportTrainPlanreport(HttpServletRequest request) {

		return "statistic/trainplan";
	}

}
