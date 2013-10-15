/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-23 - 上午10:08:04
 */
package com.telecom.lms.core.service.trainclass.impl;

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
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.model.ExecuteInfo;
import com.telecom.lms.core.bo.train.TrainClassApplyOrgBo;
import com.telecom.lms.core.bo.train.TrainClassBo;
import com.telecom.lms.core.bo.train.TrainClassTeacherBo;
import com.telecom.lms.core.model.trainclass.TrainClassInfoSearchForm;
import com.telecom.lms.core.service.trainclass.TrainClassInfoService;
import com.telecom.lms.sdk.util.DateInfoUtil;

/**
 * @since 2013-9-23
 * @author zhangpengsh@gmail.com
 */
@Service
@Transactional
public class TrainClassInfoServiceImpl implements TrainClassInfoService {

	private static final Logger log = LoggerFactory.getLogger(TrainClassInfoServiceImpl.class);

	@Resource(name = "lmsJdbcTemplate")
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<TrainClassTeacherBo> findTeacherByIds(List<TrainClassBo> trainClassBos) {

		StringBuilder sql = new StringBuilder();
		List<Object> list = new ArrayList<Object>();
		sql.append(" select tct.tclass_tcId as tclasstcid , auuser.name as username from train_class_teacher as tct ");
		sql.append(" inner join au_userinfo as auuser on tct.teacher_uid = auuser.uid ");
		sql.append(" where tct.tclass_tcId = ? ");
		list.add(trainClassBos.get(0).getTcId());
		for (int i = 1; i < trainClassBos.size(); i++) {
			sql.append(" or tct.tclass_tcId = ? ");
			list.add(trainClassBos.get(i).getTcId());
		}
		sql.append(" order by tct.tclass_tcId asc ");
		return jdbcTemplate.query(sql.toString(), list.toArray(), new TrainClassTeacherRowMapper());
	}

	class TrainClassTeacherRowMapper implements RowMapper<TrainClassTeacherBo> {

		@Override
		public TrainClassTeacherBo mapRow(ResultSet rs, int rowNumber) {

			TrainClassTeacherBo trainClassTeacherBo = new TrainClassTeacherBo();
			try {
				TrainClassBo trainClassBo = new TrainClassBo();
				trainClassBo.setTcId(rs.getString("tclasstcid"));
				trainClassTeacherBo.setTclass(trainClassBo);

				UserInfoBo userInfoBo = new UserInfoBo();
				userInfoBo.setName(rs.getString("username"));
				trainClassTeacherBo.setTeacher(userInfoBo);

			} catch (Exception e) {
				log.error("export error row is {}: ", rowNumber, e);
			}
			return trainClassTeacherBo;
		}
	}

	@Override
	public List<TrainClassApplyOrgBo> findOrganizationByApplyIds(List<TrainClassBo> trainClassBos) {

		StringBuilder sql = new StringBuilder();
		List<Object> list = new ArrayList<Object>();
		sql.append(" select tcao.class_id as classid , auorg.name as orgname from train_class_apply_org as tcao ");
		sql.append(" inner join au_organization as auorg on tcao.org_id = auorg.orgId ");
		sql.append(" where tcao.class_id = ? ");
		list.add(trainClassBos.get(0).getApply_id());
		for (int i = 1; i < trainClassBos.size(); i++) {
			sql.append(" or tcao.class_id = ? ");
			list.add(trainClassBos.get(i).getApply_id());
		}
		sql.append(" order by tcao.class_id asc ");
		return jdbcTemplate.query(sql.toString(), list.toArray(), new TrainClassApplyOrgRowMapper());
	}

	class TrainClassApplyOrgRowMapper implements RowMapper<TrainClassApplyOrgBo> {

		@Override
		public TrainClassApplyOrgBo mapRow(ResultSet rs, int rowNumber) {

			TrainClassApplyOrgBo trainClassApplyOrgBo = new TrainClassApplyOrgBo();
			try {
				TrainClassBo trainClassBo = new TrainClassBo();
				trainClassBo.setApply_id(rs.getString("classid"));
				trainClassApplyOrgBo.setTrainClassBo(trainClassBo);

				OrganizationBo organizationBo = new OrganizationBo();
				organizationBo.setName(rs.getString("orgname"));
				trainClassApplyOrgBo.setOrganizationBo(organizationBo);
			} catch (Exception e) {
				log.error("export error row is {}: ", rowNumber, e);
			}
			return trainClassApplyOrgBo;
		}
	}

	@Override
	public List<TrainClassBo> findGeneral(TrainClassInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select tc.tcId as tcid , tc.sn as tcsn , tc.name as tcname , way.name as wayname , auorg.name as orgname , auorg.namePath as namepath ");
		sql.append(" , level.name as levelname , addresstype.name as addresstypename , traincontenttype.name as traincontenttypename");
		sql.append(" , apply.ifOnline as ifonline , apply.isAllowAudit as isallowaudit , apply.startDt as applystartdt , apply.endDt as applyenddt ");
		sql.append(" , tc.publishDt as publishdt , tc.startDt as tcstartdt , tc.endDt as tcenddt , tc.attendNum as attendnum ");
		sql.append(" , tc.purpose as purpose , tc.content as content , chargeway.name as chargewayname , apply.budgetTrain as budgettrain ");
		sql.append(" , apply.budgetBoard as budgetboard , apply.budget_total as budgettotal , apply.tcaId as applyid ");

		//		sql.append(" , tc.address as address , tc.trainDuration as trainduration , tc.trainObject as trainobject ");
		//		sql.append(" , trainobjecttype.name as trainobjecttypename");

		//		,traintype.name as traintypename , tc.timesNum as timesnum 
		//		tc.expectStartQuarter as expectStartQuarter 

		sql.append(" from train_class as tc ");
		if (StringUtils.isNotBlank(form.getPrincipal())) {
			sql.append(" inner join train_class_teacher as tct on tc.tcId = tct.tclass_tcId ");
		}
		sql.append(" inner join au_organization as auorg on tc.dep_orgId = auorg.orgId ");
		sql.append(" left join bs_sysparams as way on tc.way_spId = way.spId ");
		sql.append(" left join bs_sysparams as level on tc.level_spId = level.spId ");
		sql.append(" left join bs_sysparams as addresstype on tc.addressType_spId = addresstype.spId ");
		sql.append(" left join bs_sysparams as traincontenttype on tc.trainContentType_spId = traincontenttype.spId ");
		sql.append(" left join train_class_apply as apply on tc.tcId = apply.tclass_tcId ");
		sql.append(" left join bs_sysparams as chargeway on apply.chargeWay_spId = chargeway.spId ");

		//		sql.append(" inner join bs_sysparams as traintype on tc.trainType_spId = traintype.spId ");
		//		sql.append(" inner join bs_sysparams as trainobjecttype on tc.trainObjectType_spId = trainobjecttype.spId ");

		ExecuteInfo executeInfo = executeGeneralSql(form);
		sql.append(executeInfo.getSql());
		List<Object> list = executeInfo.getList();

		sql.append(" order by tc.createDt desc ");
		if (null != form.getPage() && null != form.getMax()) {
			sql.append(" limit ? , ? ");
			list.add(form.getPage());
			list.add(form.getMax());
		}
		return jdbcTemplate.query(sql.toString(), list.toArray(), new GeneralTrainClassRowMapper());
	}

	class GeneralTrainClassRowMapper implements RowMapper<TrainClassBo> {

		@Override
		public TrainClassBo mapRow(ResultSet rs, int rowNumber) {

			TrainClassBo trainClassBo = new TrainClassBo();
			try {
				trainClassBo.setTcId(rs.getString("tcid"));
				trainClassBo.setSn(rs.getString("tcsn"));
				trainClassBo.setName(rs.getString("tcname"));
				trainClassBo.setIf_online(rs.getInt("ifonline"));
				trainClassBo.setIsAllowAudit(rs.getInt("isallowaudit"));
				trainClassBo.setApply_start_date(DateInfoUtil.formatDate(DateInfoUtil.DAYTYPE,
					rs.getDate("applystartdt")));
				trainClassBo.setApply_end_date(DateInfoUtil.formatDate(DateInfoUtil.DAYTYPE, rs.getDate("applyenddt")));
				trainClassBo.setPublish_date(DateInfoUtil.formatDate(DateInfoUtil.DAYTYPE, rs.getDate("publishdt")));
				trainClassBo.setStart_date(DateInfoUtil.formatDate(DateInfoUtil.DAYTYPE, rs.getDate("tcstartdt")));
				trainClassBo.setEnd_date(DateInfoUtil.formatDate(DateInfoUtil.DAYTYPE, rs.getDate("tcenddt")));
				trainClassBo.setAttendNum(rs.getInt("attendnum"));
				trainClassBo.setPurpose(rs.getString("purpose"));
				trainClassBo.setContent(rs.getString("content"));
				trainClassBo.setBudget_train(rs.getDouble("budgettrain"));
				trainClassBo.setBudget_board(rs.getDouble("budgetboard"));
				trainClassBo.setBudget_total(rs.getDouble("budgettotal"));

				SysParamBo chargeWay = new SysParamBo();
				chargeWay.setName(rs.getString("chargewayname"));
				trainClassBo.setCharge_way(chargeWay);

				SysParamBo way = new SysParamBo();
				way.setName(rs.getString("wayname"));
				trainClassBo.setWay(way);

				OrganizationBo organizationBo = new OrganizationBo();
				organizationBo.setNamepath(rs.getString("namepath"));
				trainClassBo.setDep(organizationBo);

				SysParamBo level = new SysParamBo();
				level.setName(rs.getString("levelname"));
				trainClassBo.setLevel(level);

				SysParamBo addressType = new SysParamBo();
				addressType.setName(rs.getString("addresstypename"));
				trainClassBo.setAddressType(addressType);

				SysParamBo trainContentType = new SysParamBo();
				trainContentType.setName(rs.getString("traincontenttypename"));
				trainClassBo.setTrainContentType(trainContentType);

				trainClassBo.setApply_id(rs.getString("applyid"));

			} catch (Exception e) {
				log.error("export error row is : {} ", rowNumber, e);
			}
			return trainClassBo;
		}
	}

	@Override
	public int countGeneral(TrainClassInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select count(tc.tcId) from train_class as tc ");
		if (StringUtils.isNotBlank(form.getPrincipal())) {
			sql.append(" inner join train_class_teacher as tct on tc.tcId = tct.tclass_tcId ");
		}
		sql.append(" inner join au_organization as auorg on tc.dep_orgId = auorg.orgId ");
		ExecuteInfo executeInfo = executeGeneralSql(form);
		sql.append(executeInfo.getSql());
		return jdbcTemplate.queryForInt(sql.toString(), executeInfo.getList().toArray());
	}

	private ExecuteInfo executeGeneralSql(TrainClassInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		List<Object> list = new ArrayList<Object>();
		sql.append(" where 1=1 ");
		if (StringUtils.isNotBlank(form.getName())) {
			sql.append(" and tc.name like ? ");
			list.add(form.getName());
		}
		if (StringUtils.isNotBlank(form.getWay())) {
			sql.append(" and tc.way_spId = ? ");
			list.add(form.getWay());
		}
		if (null != form.getStatus()) {
			sql.append(" and tc.status = ? ");
			list.add(form.getStatus());
		}
		if (StringUtils.isNotBlank(form.getPrincipal())) {
			sql.append(" and tct.teacher_uid = ? ");
			sql.append(" and tct.type = 2 ");
			list.add(form.getPrincipal());
		}
		if (StringUtils.isNotBlank(form.getStart_date())) {
			sql.append(" and tc.startDt >= ? ");
			list.add(DateInfoUtil.parseDate(DateInfoUtil.DAYTYPE, form.getStart_date()));
		}
		if (StringUtils.isNotBlank(form.getEnd_date())) {
			sql.append(" and tc.endDt <= ? ");
			list.add(DateInfoUtil.parseDate(DateInfoUtil.DAYTIMETYPE, form.getEnd_date(), "23", "59", "59"));
		}
		if (null != form.getIsPlan()) {
			sql.append(" and tc.type <> ? ");
			list.add(form.getIsPlan());
		}
		if (null != form.getType()) {
			sql.append(" and tc.type = ? ");
			list.add(form.getType());
		}
		if (StringUtils.isNotBlank(form.getLevel_id())) {
			sql.append(" and tc.level_spId = ? ");
			list.add(form.getLevel_id());
		}
		if (null != form.getHasResponse()) {
			sql.append(" and tc.hasResponse = ? ");
			list.add(form.getHasResponse());
		}
		if (null != form.getHasBehavior()) {
			sql.append(" and tc.hasBehavior = ? ");
			list.add(form.getHasBehavior());
		}
		if (null != form.getLeftPriority() && null != form.getRightPriority()) {
			sql.append(" and auorg.left_p >= ? ");
			sql.append(" and auorg.right_p <= ? ");
			list.add(form.getLeftPriority());
			list.add(form.getRightPriority());
		}
		if (StringUtils.isNotBlank(form.getOrgId())) {
			sql.append(" and auorg.orgId = ? ");
			list.add(form.getOrgId());
		}
		sql.append(" and tc.isDel = 0 ");

		return new ExecuteInfo(sql.toString(), list);
	}

	private ExecuteInfo executePlanSql(TrainClassInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		List<Object> list = new ArrayList<Object>();
		sql.append(" where 1=1 ");
		if (StringUtils.isNotBlank(form.getPlan_id())) {
			sql.append(" and tc.plan_tpId = ? ");
			list.add(form.getPlan_id());
		}
		sql.append(" and tc.isDel = 0 ");

		return new ExecuteInfo(sql.toString(), list);
	}

	@Override
	public List<TrainClassBo> findPlan(TrainClassInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select tc.tcId as tcid , tc.sn as tcsn , tc.name as tcname , tc.expectStartQuarter as expectstartquarter ");
		sql.append(" , level.name as levelname , way.name as wayname , trainobjecttype.name as trainobjecttypename ");
		sql.append(" , tc.timesNum as timesnum , tc.address as address , tc.trainDuration as trainduration , tc.attendNum as attendnum ");
		sql.append(" , auorg.name as orgname , auorg.namePath as namepath , tc.startDt as tcstartdt , tc.endDt as tcenddt ");
		sql.append(" , chargeway.name as chargewayname , apply.budgetTrain as budgettrain , apply.budgetBoard as budgetboard ");
		sql.append(" , tc.trainObject as trainobject , tc.content as content , tc.purpose as purpose ");
		sql.append(" from train_class as tc ");
		sql.append(" inner join au_organization as auorg on tc.dep_orgId = auorg.orgId ");
		sql.append(" left join bs_sysparams as level on tc.level_spId = level.spId ");
		sql.append(" left join bs_sysparams as way on tc.way_spId = way.spId ");
		sql.append(" left join bs_sysparams as trainobjecttype on tc.trainObjectType_spId = trainobjecttype.spId ");		
		sql.append(" left join train_class_apply as apply on tc.tcId = apply.tclass_tcId ");
		sql.append(" left join bs_sysparams as chargeway on apply.chargeWay_spId = chargeway.spId ");

		ExecuteInfo executeInfo = executePlanSql(form);
		sql.append(executeInfo.getSql());
		List<Object> list = executeInfo.getList();

		sql.append(" order by tc.createDt desc ");
		if (null != form.getPage() && null != form.getMax()) {
			sql.append(" limit ? , ? ");
			list.add(form.getPage());
			list.add(form.getMax());
		}
		return jdbcTemplate.query(sql.toString(), list.toArray(), new PlanTrainClassRowMapper());
	}

	class PlanTrainClassRowMapper implements RowMapper<TrainClassBo> {

		@Override
		public TrainClassBo mapRow(ResultSet rs, int rowNumber) {

			TrainClassBo trainClassBo = new TrainClassBo();
			try {
				trainClassBo.setTcId(rs.getString("tcid"));
				trainClassBo.setSn(rs.getString("tcsn"));
				trainClassBo.setName(rs.getString("tcname"));
				trainClassBo.setExpectStartQuarter(rs.getInt("expectstartquarter"));
				trainClassBo.setTimesNum(rs.getInt("timesnum"));
				trainClassBo.setAddress(rs.getString("address"));
				trainClassBo.setTrainDuration(rs.getFloat("trainduration"));
				trainClassBo.setAttendNum(rs.getInt("attendnum"));
				trainClassBo.setStart_date(DateInfoUtil.formatDate(DateInfoUtil.DAYTYPE, rs.getDate("tcstartdt")));
				trainClassBo.setEnd_date(DateInfoUtil.formatDate(DateInfoUtil.DAYTYPE, rs.getDate("tcenddt")));
				trainClassBo.setBudget_train(rs.getDouble("budgettrain"));
				trainClassBo.setBudget_board(rs.getDouble("budgetboard"));
				trainClassBo.setContent(rs.getString("content"));
				trainClassBo.setPurpose(rs.getString("purpose"));
				trainClassBo.setTrainObject(rs.getString("trainobject"));

				SysParamBo level = new SysParamBo();
				level.setName(rs.getString("levelname"));
				trainClassBo.setLevel(level);

				SysParamBo way = new SysParamBo();
				way.setName(rs.getString("wayname"));
				trainClassBo.setWay(way);

				SysParamBo trainObjectType = new SysParamBo();
				trainObjectType.setName(rs.getString("trainobjecttypename"));
				trainClassBo.setTrainObjectType(trainObjectType);

				OrganizationBo organizationBo = new OrganizationBo();
				organizationBo.setNamepath(rs.getString("namepath"));
				trainClassBo.setDep(organizationBo);

				SysParamBo chargeWay = new SysParamBo();
				chargeWay.setName(rs.getString("chargewayname"));
				trainClassBo.setCharge_way(chargeWay);

			} catch (Exception e) {
				log.error("export error row is : {}", rowNumber, e);
			}
			return trainClassBo;
		}
	}

	@Override
	public int countPlan(TrainClassInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select count(tc.tcId) from train_class as tc ");
		ExecuteInfo executeInfo = executePlanSql(form);
		sql.append(executeInfo.getSql());
		return jdbcTemplate.queryForInt(sql.toString(), executeInfo.getList().toArray());
	}

}
