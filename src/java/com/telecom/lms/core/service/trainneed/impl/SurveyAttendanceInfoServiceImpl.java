/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-10-9 - 下午5:41:58
 */
package com.telecom.lms.core.service.trainneed.impl;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.model.ExecuteInfo;
import com.telecom.lms.core.bo.survey.SurveyAttendanceBo;
import com.telecom.lms.core.model.trainneed.SurveyAttendanceInfoSearchForm;
import com.telecom.lms.core.service.trainneed.SurveyAttendanceInfoService;

/**
 * @since 2013-10-9
 * @author zhangpengsh@gmail.com
 * 
 */
@Service
@Transactional
public class SurveyAttendanceInfoServiceImpl implements SurveyAttendanceInfoService {

	private static final Logger log = LoggerFactory.getLogger(SurveyAttendanceInfoServiceImpl.class);

	@Resource(name = "lmsJdbcTemplate")
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public List<SurveyAttendanceBo> find(SurveyAttendanceInfoSearchForm form) {
		
		StringBuilder sql = new StringBuilder();
		sql.append(" select auuser.sn as usersn , auuser.name as username , auorg.namePath as orgnamepath ");
		sql.append(" from survey_attendance as sa ");
		sql.append(" inner join au_userinfo as auuser on sa.user_uid = auuser.uid ");
		sql.append(" inner join au_organization as auorg on auuser.org_orgId = auorg.orgId ");
		
		ExecuteInfo executeInfo = executeSql(form);
		sql.append(executeInfo.getSql());
		List<Object> list = executeInfo.getList();
		
		sql.append(" order by sa.attendTm desc ");
		
		if (null != form.getPage() && null != form.getMax()) {
			sql.append(" limit ? , ? ");
			list.add(form.getPage());
			list.add(form.getMax());
		}
		
		return jdbcTemplate.query(sql.toString(), list.toArray(), new SurveyAttendanceRowMapper());
	}
	
	private ExecuteInfo executeSql(SurveyAttendanceInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		List<Object> list = new ArrayList<Object>();
		sql.append(" where 1=1 ");
		if (StringUtils.isNotBlank(form.getSurveyId())) {
			sql.append(" and sa.survey_sId = ? ");
			list.add(form.getSurveyId());
		}
		return new ExecuteInfo(sql.toString(), list);
	}

	class SurveyAttendanceRowMapper implements RowMapper<SurveyAttendanceBo> {

		@Override
		public SurveyAttendanceBo mapRow(ResultSet rs, int rowNumber) {

			SurveyAttendanceBo surveyAttendanceBo = new SurveyAttendanceBo();
			try {

				UserInfoBo userInfoBo = new UserInfoBo();
				userInfoBo.setSn(rs.getString("usersn"));
				userInfoBo.setName(rs.getString("username"));

				OrganizationBo organizationBo = new OrganizationBo();
				organizationBo.setNamepath(rs.getString("orgnamepath"));
				userInfoBo.setOrg(organizationBo);

				surveyAttendanceBo.setUser(userInfoBo);

			} catch (Exception e) {
				log.error("export error row is {}: ", rowNumber, e);
			}
			return surveyAttendanceBo;
		}
	}


	@Override
	public int count(SurveyAttendanceInfoSearchForm form) {
		
		StringBuilder sql = new StringBuilder();
		sql.append(" select count(sa.saId) from survey_attendance as sa ");
		
		ExecuteInfo executeInfo = executeSql(form);
		sql.append(executeInfo.getSql());
		return jdbcTemplate.queryForInt(sql.toString(), executeInfo.getList().toArray());
	}

}
