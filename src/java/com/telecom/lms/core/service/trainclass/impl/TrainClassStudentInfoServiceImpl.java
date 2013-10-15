package com.telecom.lms.core.service.trainclass.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.model.ExecuteInfo;
import com.telecom.lms.core.bo.train.TrainClassStudentBo;
import com.telecom.lms.core.model.trainclass.TrainClassStudentInfoSearchForm;
import com.telecom.lms.core.service.trainclass.TrainClassStudentInfoService;

@Service
@Transactional
public class TrainClassStudentInfoServiceImpl implements TrainClassStudentInfoService {

	@Resource(name = "lmsJdbcTemplate")
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<TrainClassStudentBo> find2(TrainClassStudentInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select tcs.student_uid as userId,auuser.sn as userSn,auuser.name as userName ");
		sql.append(" ,tcs.score as tcsScore , tcs.examLevel as tcsExamLevel , tcs.extraTrain as tcsExtraTrain ");
		sql.append(" ,tcs.budgetTrain as tcsBudgetTrain , tcs.budgetBoard as tcsBudgetBoard , tcs.budgetOther as tcsBudgetOther ");
		sql.append(" from train_class_student as tcs ");
		sql.append(" inner join au_userinfo as auuser on tcs.student_uid = auuser.uid ");
		sql.append(" where 1=1 ");

		List<Object> list = new ArrayList<Object>();
		if (StringUtils.isNotBlank(form.getTrainClassId())) {
			sql.append(" and tcs.tc_tcId = ? ");
			list.add(form.getTrainClassId());
		}
		if (StringUtils.isNotBlank(form.getUseSn())) {
			sql.append(" and auuser.sn = ? ");
			list.add(form.getUseSn());
		}
		if (StringUtils.isNotBlank(form.getUseName())) {
			sql.append(" and auuser.name like ? ");
			list.add("%" + form.getUseName() + "%");
		}
		if (null != form.getPage() && null != form.getMax()) {
			sql.append(" limit ?,? ");
			list.add(form.getPage());
			list.add(form.getMax());
		}
		return jdbcTemplate.query(sql.toString(), list.toArray(), new TrainClassStudentRowMapper2());
	}

	class TrainClassStudentRowMapper2 implements RowMapper<TrainClassStudentBo> {

		@Override
		public TrainClassStudentBo mapRow(ResultSet rs, int rowNumber) throws SQLException {

			TrainClassStudentBo trainClassStudentBo = new TrainClassStudentBo();

			UserInfoBo userInfoBo = new UserInfoBo();
			userInfoBo.setUid(rs.getString("userId"));
			userInfoBo.setSn(rs.getString("userSn"));
			userInfoBo.setName(rs.getString("userName"));
			trainClassStudentBo.setStudent(userInfoBo);
			trainClassStudentBo.setScore(rs.getFloat("tcsScore"));
			trainClassStudentBo.setExamLevel(rs.getString("tcsExamLevel"));
			trainClassStudentBo.setBudgetTrain(rs.getFloat("tcsBudgetTrain"));
			trainClassStudentBo.setBudgetBoard(rs.getFloat("tcsBudgetBoard"));
			trainClassStudentBo.setBudgetOther(rs.getFloat("tcsBudgetOther"));
			trainClassStudentBo.setExtraTrain(rs.getInt("tcsExtraTrain"));

			return trainClassStudentBo;
		}
	}

	@Override
	public Integer count2(TrainClassStudentInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select count(tcs.student_uid) from train_class_student as tcs ");
		sql.append(" inner join au_userinfo as auuser on tcs.student_uid = auuser.uid ");
		sql.append(" where 1=1 ");

		List<Object> list = new ArrayList<Object>();
		if (StringUtils.isNotBlank(form.getTrainClassId())) {
			sql.append(" and tcs.tc_tcId = ? ");
			list.add(form.getTrainClassId());
		}
		if (StringUtils.isNotBlank(form.getUseSn())) {
			sql.append(" and auuser.sn = ? ");
			list.add(form.getUseSn());
		}
		if (StringUtils.isNotBlank(form.getUseName())) {
			sql.append(" and auuser.name like ? ");
			list.add("%" + form.getUseName() + "%");
		}
		if (null != form.getPage() && null != form.getMax()) {
			sql.append(" limit ?,? ");
			list.add(form.getPage());
			list.add(form.getMax());
		}
		return jdbcTemplate.queryForInt(sql.toString(), list.toArray());
	}

	@Override
	public List<TrainClassStudentBo> find(TrainClassStudentInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select auuser.sn as usersn , auuser.name as username , auorg.namePath as orgnamepath ");
		sql.append(" , tcs.applyWay as applyway , auuser.mobile as mobile , auuser.email as email ");
		sql.append(" from train_class_student as tcs ");
		sql.append(" inner join au_userinfo as auuser on tcs.student_uid = auuser.uid ");
		sql.append(" inner join au_organization as auorg on auuser.org_orgId = auorg.orgId ");
		ExecuteInfo executeInfo = executeSql(form);
		sql.append(executeInfo.getSql());
		List<Object> list = executeInfo.getList();

		if (null != form.getPage() && null != form.getMax()) {
			sql.append(" limit ? , ? ");
			list.add(form.getPage());
			list.add(form.getMax());
		}
		return jdbcTemplate.query(sql.toString(), list.toArray(), new TrainClassStudentRowMapper());
	}

	@Override
	public int count(TrainClassStudentInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select count(auuser.uid) ");
		sql.append(" from train_class_student as tcs ");
		sql.append(" inner join au_userinfo as auuser on tcs.student_uid = auuser.uid ");
		sql.append(" inner join au_organization as auorg on auuser.org_orgId = auorg.orgId ");
		ExecuteInfo executeInfo = executeSql(form);
		sql.append(executeInfo.getSql());
		return jdbcTemplate.queryForInt(sql.toString(), executeInfo.getList().toArray());
	}

	private ExecuteInfo executeSql(TrainClassStudentInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		List<Object> list = new ArrayList<Object>();
		sql.append(" where 1=1 ");
		if (StringUtils.isNotBlank(form.getTrainClassId())) {
			sql.append(" and tcs.tc_tcId = ? ");
			list.add(form.getTrainClassId());
		}
		if (StringUtils.isNotBlank(form.getUseSn())) {
			sql.append(" and auuser.sn = ? ");
			list.add(form.getUseSn());
		}
		if (StringUtils.isNotBlank(form.getUseName())) {
			sql.append(" and auuser.name like ? ");
			list.add("%" + form.getUseName() + "%");
		}
		if (StringUtils.isNotBlank(form.getDepId())) {
			sql.append(" and auorg.orgId = ? ");
			list.add(form.getDepId());
		}
		if (StringUtils.isNotBlank(form.getMobile())) {
			sql.append(" and auuser.mobile = ? ");
			list.add(form.getMobile());
		}
		if (StringUtils.isNotBlank(form.getApplyWay())) {
			sql.append(" and tcs.applyWay = ? ");
			list.add(Integer.parseInt(form.getApplyWay()));
		}

		return new ExecuteInfo(sql.toString(), list);
	}

	class TrainClassStudentRowMapper implements RowMapper<TrainClassStudentBo> {

		@Override
		public TrainClassStudentBo mapRow(ResultSet rs, int rowNumber) throws SQLException {

			TrainClassStudentBo trainClassStudentBo = new TrainClassStudentBo();
			trainClassStudentBo.setApplyWay(rs.getInt("applyway"));

			UserInfoBo userInfoBo = new UserInfoBo();
			userInfoBo.setSn(rs.getString("usersn"));
			userInfoBo.setName(rs.getString("username"));
			userInfoBo.setMobile(rs.getString("mobile"));
			userInfoBo.setEmail(rs.getString("email"));

			OrganizationBo organizationBo = new OrganizationBo();
			organizationBo.setNamepath(rs.getString("orgnamepath"));
			userInfoBo.setOrg(organizationBo);

			trainClassStudentBo.setStudent(userInfoBo);
			return trainClassStudentBo;
		}
	}

}
