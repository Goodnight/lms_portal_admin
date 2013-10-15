/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-10-9 - 下午4:33:57
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
import com.telecom.lms.core.bo.auth.PositionBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.demand.DmdItemBo;
import com.telecom.lms.core.bo.demand.DmdPersonBo;
import com.telecom.lms.core.bo.demand.DmdPersonItemBo;
import com.telecom.lms.core.bo.demand.DmdTopicBo;
import com.telecom.lms.core.bo.model.ExecuteInfo;
import com.telecom.lms.core.model.trainneed.UserTrainInfoSearchForm;
import com.telecom.lms.core.service.trainneed.UserTrainInfoService;

/**
 * @since 2013-10-9
 * @author zhangpengsh@gmail.com
 */
@Service
@Transactional
public class UserTrainInfoServiceImpl implements UserTrainInfoService {

	private static final Logger log = LoggerFactory.getLogger(UserTrainInfoServiceImpl.class);

	@Resource(name = "lmsJdbcTemplate")
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<DmdPersonBo> findPerson(UserTrainInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select dp.dpId as dpid , dt.year as year , auuser.sn as usersn , auuser.name as username ");
		sql.append(" , auorg.namePath as orgnamepath , post.name as postname , dp.urgentLevel as urgentlevel ");
		sql.append(" , dp.businessTrain as businessTrain , dp.professionTrain as professionTrain ");
		sql.append(" from dmd_person as dp ");
		sql.append(" inner join au_userinfo as auuser on dp.creater_uid = auuser.uid ");
		sql.append(" inner join au_organization as auorg on dp.org_orgId = auorg.orgId ");
		sql.append(" inner join dmd_topic as dt on dp.topic_dtId = dt.dtId ");
		sql.append(" left join au_position as post on auuser.benchmarkPost_pId = post.pId ");

		ExecuteInfo executeInfo = executePersonSql(form);
		sql.append(executeInfo.getSql());
		List<Object> list = executeInfo.getList();

		sql.append(" order by dp.createDt desc ");

		if (null != form.getPage() && null != form.getMax()) {
			sql.append(" limit ? , ? ");
			list.add(form.getPage());
			list.add(form.getMax());
		}

		return jdbcTemplate.query(sql.toString(), list.toArray(), new DmdPersonRowMapper());
	}

	class DmdPersonRowMapper implements RowMapper<DmdPersonBo> {

		@Override
		public DmdPersonBo mapRow(ResultSet rs, int rowNumber) {

			DmdPersonBo dmdPersonBo = new DmdPersonBo();
			try {
				dmdPersonBo.setDpId(rs.getString("dpid"));
				dmdPersonBo.setUrgentLevel(rs.getInt("urgentlevel"));
				dmdPersonBo.setBusinessTrain(rs.getString("businessTrain"));
				dmdPersonBo.setProfessionTrain(rs.getString("professionTrain"));

				DmdTopicBo dmdTopicBo = new DmdTopicBo();
				dmdTopicBo.setYear(rs.getInt("year"));
				dmdPersonBo.setTopic(dmdTopicBo);

				UserInfoBo userInfoBo = new UserInfoBo();
				userInfoBo.setSn(rs.getString("usersn"));
				userInfoBo.setName(rs.getString("username"));

				PositionBo positionBo = new PositionBo();
				positionBo.setName(rs.getString("postname"));
				userInfoBo.setBenchmarkPost(positionBo);

				dmdPersonBo.setCreater(userInfoBo);

				OrganizationBo organizationBo = new OrganizationBo();
				organizationBo.setNamepath(rs.getString("orgnamepath"));
				dmdPersonBo.setOrg(organizationBo);

			} catch (Exception e) {
				log.error("export error row is {}: ", rowNumber, e);
			}
			return dmdPersonBo;
		}
	}

	private ExecuteInfo executePersonSql(UserTrainInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		List<Object> list = new ArrayList<Object>();
		sql.append(" where 1=1 ");
		if (null == form.getIsSub() || 1 == form.getIsSub()) {
			sql.append(" and auorg.idPath like ? ");
			list.add("%/" + form.getOrgId() + "%");
		} else {
			sql.append(" and auorg.orgId = ? ");
			list.add(form.getOrgId());
		}
		if (StringUtils.isNotBlank(form.getUserSn())) {
			sql.append(" and auuser.sn like ? ");
			list.add("%" + form.getUserSn() + "%");
		}
		if (StringUtils.isNotBlank(form.getUserName())) {
			sql.append(" and auuser.name like ? ");
			list.add("%" + form.getUserName() + "%");
		}
		if (null != form.getCategory()) {
			sql.append(" and dp.category = ? ");
			list.add(form.getCategory());
		}
		if (null != form.getYear()) {
			sql.append(" and dt.year = ? ");
			list.add(form.getYear());
		}
		if (null != form.getUrgentLevel()) {
			sql.append(" and dp.urgentLevel = ? ");
			list.add(form.getUrgentLevel());
		}
		return new ExecuteInfo(sql.toString(), list);
	}

	@Override
	public int countPerson(UserTrainInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select count(dp.dpId) from dmd_person as dp ");
		sql.append(" inner join au_userinfo as auuser on dp.creater_uid = auuser.uid ");
		sql.append(" inner join au_organization as auorg on dp.org_orgId = auorg.orgId ");
		sql.append(" inner join dmd_topic as dt on dp.topic_dtId = dt.dtId ");

		ExecuteInfo executeInfo = executePersonSql(form);
		sql.append(executeInfo.getSql());
		return jdbcTemplate.queryForInt(sql.toString(), executeInfo.getList().toArray());
	}

	@Override
	public List<DmdPersonItemBo> findPersonItem(List<DmdPersonBo> dmdPersonBos) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select di.name as diname , dpi.trainContent as traincontent , dpi.dmd_dpId as dmddpid ");
		sql.append(" from dmd_person_item as dpi ");
		sql.append(" inner join dmd_item as di on dpi.dmdItem_dtId = di.dtId ");

		ExecuteInfo executeInfo = executePersonItemSql(dmdPersonBos);
		sql.append(executeInfo.getSql());
		sql.append(" order by dpi.dmd_dpId desc ");

		return jdbcTemplate.query(sql.toString(), executeInfo.getList().toArray(), new DmdPersonItemRowMapper());
	}

	class DmdPersonItemRowMapper implements RowMapper<DmdPersonItemBo> {

		@Override
		public DmdPersonItemBo mapRow(ResultSet rs, int rowNumber) {

			DmdPersonItemBo dmdPersonItemBo = new DmdPersonItemBo();
			try {
				DmdItemBo dmdItemBo = new DmdItemBo();
				dmdItemBo.setName(rs.getString("diname"));
				dmdPersonItemBo.setDmdItem(dmdItemBo);

				dmdPersonItemBo.setDmd_dpId(rs.getString("dmddpid"));
				dmdPersonItemBo.setTrainContent(rs.getString("traincontent"));

			} catch (Exception e) {
				log.error("export error row is {}: ", rowNumber, e);
			}
			return dmdPersonItemBo;
		}
	}

	private ExecuteInfo executePersonItemSql(List<DmdPersonBo> dmdPersonBos) {

		StringBuilder sql = new StringBuilder();
		List<Object> list = new ArrayList<Object>();
		sql.append(" where dpi.dmd_dpId = ? ");
		list.add(dmdPersonBos.get(0).getDpId());
		for (int i = 1; i < dmdPersonBos.size(); i++) {
			sql.append(" or dpi.dmd_dpId = ? ");
			list.add(dmdPersonBos.get(i).getDpId());
		}
		return new ExecuteInfo(sql.toString(), list);
	}

}
