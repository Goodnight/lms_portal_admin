/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-8-28 - 下午2:35:02
 */
package com.telecom.lms.core.service.trainresource.impl;

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
import com.telecom.lms.core.bo.resources.ResBaseBo;
import com.telecom.lms.core.bo.resources.ResStatBo;
import com.telecom.lms.core.model.trainresource.TrainResourceInfoSearchForm;
import com.telecom.lms.core.service.trainresource.TrainResourceInfoService;
import com.telecom.lms.sdk.util.DateInfoUtil;

/**
 * @since 2013-8-28
 * @author zhangpengsh@gmail.com
 */
@Service
@Transactional
public class TrainResourceInfoServiceImpl implements TrainResourceInfoService {

	@Resource(name = "lmsJdbcTemplate")
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<ResBaseBo> find(TrainResourceInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select rb.sn as rbsn , rb.name as rbname , rb.type as rbtype , auorg.name as orgname , auorg.namePath as orgnamepath , rs.share as rsshare , rs.comment as rscomment ");
		sql.append(" from res_base as rb ");
		if (StringUtils.isNotBlank(form.getKnowledgeId())) {
			sql.append(" inner join res_cate as rc on rb.rbId = rc.res_rbId ");
			sql.append(" inner join res_kc as rk on rc.category_kcId = rk.kcId ");
		}

		sql.append(" inner join au_organization as auorg on rb.org_orgId = auorg.orgId ");
		sql.append(" inner join res_stat as rs on rb.rbId = rs.res_rbId ");

		sql.append(" where 1=1 ");
		sql.append(" and rb.isDel = 0 and rb.isPub = 1 ");

		List<Object> list = new ArrayList<Object>();
		if (StringUtils.isNotBlank(form.getKnowledgeId())) {

			sql.append(" and rk.idPath like ? ");
			list.add("%/" + form.getKnowledgeId() + "%");
		}

		if (StringUtils.isNotBlank(form.getOrgId())) {
			sql.append(" and auorg.idPath like ? ");
			list.add("%/" + form.getOrgId() + "%");
		}

		if (StringUtils.isNotBlank(form.getSn())) {
			sql.append(" and rb.sn like ? ");
			list.add("%" + form.getSn() + "%");
		}
		if (StringUtils.isNotBlank(form.getName())) {
			sql.append(" and rb.name like ? ");
			list.add("%" + form.getName() + "%");
		}

		if (null != form.getType()) {
			sql.append(" and rb.type = ? ");
			list.add(form.getType());
		}

		if (StringUtils.isNotBlank(form.getStartTime()) && StringUtils.isNotBlank(form.getEndTime())) {
			sql.append(" and rb.createDt >=  ? and rb.createDt <= ? ");
			list.add(DateInfoUtil.parseDate(DateInfoUtil.DAYTYPE, form.getStartTime()));
			list.add(DateInfoUtil.parseDate(DateInfoUtil.DAYTYPE, form.getEndTime()));
		}

		if (null != form.getElite()) {
			sql.append(" and rb.elite = ? ");
			list.add(form.getElite());
		}
		if (null != form.getHistory()) {
			sql.append(" and rb.history = ? ");
			list.add(form.getHistory());
		}

		sql.append(" order by createDt asc ");

		if (null != form.getPage() && null != form.getMax()) {
			sql.append(" limit ? , ? ");
			list.add(form.getPage());
			list.add(form.getMax());
		}

		return jdbcTemplate.query(sql.toString(), list.toArray(), new ResBaseRowMapper());
	}

	class ResBaseRowMapper implements RowMapper<ResBaseBo> {

		@Override
		public ResBaseBo mapRow(ResultSet rs, int rowNumber) throws SQLException {

			ResBaseBo resBaseBo = new ResBaseBo();
			resBaseBo.setSn(rs.getString("rbsn"));
			resBaseBo.setName(rs.getString("rbname"));
			resBaseBo.setType(rs.getInt("rbtype"));

			OrganizationBo organizationBo = new OrganizationBo();
			organizationBo.setName(rs.getString("orgname"));
			organizationBo.setNamepath(rs.getString("orgnamepath"));
			resBaseBo.setOrg(organizationBo);

			ResStatBo resStatBo = new ResStatBo();
			resStatBo.setShare(rs.getInt("rsshare"));
			resStatBo.setComment(rs.getInt("rscomment"));
			resBaseBo.setStat(resStatBo);

			return resBaseBo;
		}
	}

	@Override
	public Integer count(TrainResourceInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select count(rb.rbId) from res_base as rb ");
		if (StringUtils.isNotBlank(form.getKnowledgeId())) {
			sql.append(" inner join res_cate as rc on rb.rbId = rc.res_rbId ");
			sql.append(" inner join res_kc as rk on rc.category_kcId = rk.kcId ");
		}

		sql.append(" inner join au_organization as auorg on rb.org_orgId = auorg.orgId ");
		sql.append(" inner join res_stat as rs on rb.rbId = rs.res_rbId ");

		sql.append(" where 1=1 ");
		sql.append(" and rb.isDel = 0 and rb.isPub = 1 ");

		List<Object> list = new ArrayList<Object>();
		if (StringUtils.isNotBlank(form.getKnowledgeId())) {

			sql.append(" and rk.idPath like ? ");
			list.add("%/" + form.getKnowledgeId() + "%");
		}

		if (StringUtils.isNotBlank(form.getOrgId())) {
			sql.append(" and auorg.idPath like  ? ");
			list.add("%/" + form.getOrgId() + "%");
		}

		if (StringUtils.isNotBlank(form.getSn())) {
			sql.append(" and rb.sn like ? ");
			list.add("%" + form.getSn() + "%");
		}
		if (StringUtils.isNotBlank(form.getName())) {
			sql.append(" and rb.name like ? ");
			list.add("%" + form.getName() + "%");
		}

		if (null != form.getType()) {
			sql.append(" and rb.type = ? ");
			list.add(form.getType());
		}

		if (StringUtils.isNotBlank(form.getStartTime()) && StringUtils.isNotBlank(form.getEndTime())) {
			sql.append(" and rb.createDt >=  ? and rb.createDt <= ? ");
			list.add(DateInfoUtil.parseDate(DateInfoUtil.DAYTYPE, form.getStartTime()));
			list.add(DateInfoUtil.parseDate(DateInfoUtil.DAYTYPE, form.getEndTime()));
		}

		if (null != form.getElite()) {
			sql.append(" and rb.elite = ? ");
			list.add(form.getElite());
		}
		if (null != form.getHistory()) {
			sql.append(" and rb.history = ? ");
			list.add(form.getHistory());
		}
		return jdbcTemplate.queryForInt(sql.toString(), list.toArray());
	}

}
