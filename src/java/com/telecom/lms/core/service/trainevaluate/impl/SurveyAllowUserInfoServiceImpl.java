/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-10-8 - 下午3:17:45
 */
package com.telecom.lms.core.service.trainevaluate.impl;

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
import com.telecom.lms.core.bo.survey.allow.SurveyAllowUserBo;
import com.telecom.lms.core.model.trainevaluate.SurveyAllowUserInfoSearchForm;
import com.telecom.lms.core.service.trainevaluate.SurveyAllowUserInfoService;

/**
 * @since 2013-10-8
 * @author zhangpengsh@gmail.com
 */
@Service
@Transactional
public class SurveyAllowUserInfoServiceImpl implements SurveyAllowUserInfoService {

	private static final Logger log = LoggerFactory.getLogger(SurveyAllowUserInfoServiceImpl.class);

	@Resource(name = "lmsJdbcTemplate")
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<SurveyAllowUserBo> find(SurveyAllowUserInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select auuser.sn as usersn , auuser.name as username , auorg.namePath as orgnamepath ");
		sql.append(" from survey_allow_user as sau ");
		sql.append(" inner join au_userinfo as auuser on sau.user_uid = auuser.uid ");
		sql.append(" inner join au_organization as auorg on auuser.org_orgId = auorg.orgId ");
		
		ExecuteInfo executeInfo = executeSql(form);
		sql.append(executeInfo.getSql());
		List<Object> list = executeInfo.getList();
		
		if (null != form.getPage() && null != form.getMax()) {
			sql.append(" limit ? , ? ");
			list.add(form.getPage());
			list.add(form.getMax());
		}
		
		return jdbcTemplate.query(sql.toString(), list.toArray(), new SurveyAllowUserRowMapper());
	}
	
	private ExecuteInfo executeSql(SurveyAllowUserInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		List<Object> list = new ArrayList<Object>();
		sql.append(" where 1=1 ");
		if (null != form.getIsAttend()) {
			sql.append(" and sau.isAttend = ? ");
			list.add(form.getIsAttend());
		}
		if (StringUtils.isNotBlank(form.getSurveyId())) {
			sql.append(" and sau.survey_sId = ? ");
			list.add(form.getSurveyId());
		}
		return new ExecuteInfo(sql.toString(), list);
	}

	class SurveyAllowUserRowMapper implements RowMapper<SurveyAllowUserBo> {

		@Override
		public SurveyAllowUserBo mapRow(ResultSet rs, int rowNumber) {

			SurveyAllowUserBo surveyAllowUserBo = new SurveyAllowUserBo();
			try {

				UserInfoBo userInfoBo = new UserInfoBo();
				userInfoBo.setSn(rs.getString("usersn"));
				userInfoBo.setName(rs.getString("username"));

				OrganizationBo organizationBo = new OrganizationBo();
				organizationBo.setNamepath(rs.getString("orgnamepath"));
				userInfoBo.setOrg(organizationBo);

				surveyAllowUserBo.setUser(userInfoBo);

			} catch (Exception e) {
				log.error("export error row is {}: ", rowNumber, e);
			}
			return surveyAllowUserBo;
		}
	}

	@Override
	public int count(SurveyAllowUserInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select count(sau.sauId) from survey_allow_user as sau ");
		
		ExecuteInfo executeInfo = executeSql(form);
		sql.append(executeInfo.getSql());
		return jdbcTemplate.queryForInt(sql.toString(), executeInfo.getList().toArray());
	}

}
