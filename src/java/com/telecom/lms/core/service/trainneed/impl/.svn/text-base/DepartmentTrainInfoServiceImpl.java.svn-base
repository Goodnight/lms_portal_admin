package com.telecom.lms.core.service.trainneed.impl;

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
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.demand.DmdDepBo;
import com.telecom.lms.core.bo.demand.DmdDepItemBo;
import com.telecom.lms.core.bo.demand.DmdItemBo;
import com.telecom.lms.core.bo.demand.DmdTopicBo;
import com.telecom.lms.core.model.trainneed.DepartmentTrainInfoSearchForm;
import com.telecom.lms.core.service.trainneed.DepartmentTrainInfoService;


@Service
@Transactional
public class DepartmentTrainInfoServiceImpl implements DepartmentTrainInfoService {

	@Resource(name = "lmsJdbcTemplate")
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<DmdDepBo> find(DepartmentTrainInfoSearchForm form) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select dt.year as year ,auorg.name as orgname , di.name as diname  , sys.name as sysname , auuser.name as username , dd.personNums as personnums");
		sql.append(" from dmd_dep as dd ");
		sql.append(" inner join dmd_topic as dt on dd.topic_dtId = dt.dtId ");
		sql.append(" left join au_userinfo as auuser on dd.creater_uid = auuser.uid ");
		sql.append(" inner join bs_sysparams as sys on dd.type_spId = sys.spId ");
		sql.append(" inner join au_organization as auorg on dd.dep_orgId = auorg.orgId ");
		sql.append(" left join dmd_dep_item as ddi on dd.dpId = ddi.dmd_dpId ");
		sql.append(" left join dmd_item as di on ddi.dmdItem_dtId = di.dtId ");
		sql.append(" where 1=1 ");

		List<Object> list = new ArrayList<Object>();
		if (null != form.getYear()) {
			sql.append(" and dt.year = ? ");
			list.add(form.getYear());
		}
		if (StringUtils.isNotBlank(form.getType())) {
			sql.append(" and dd.type_spId = ? ");
			list.add(form.getType());
		}

		if (StringUtils.isNotBlank(form.getOrgId())) {
			if (null == form.getIsSub() || form.getIsSub() == 1) {
				sql.append(" and auorg.idPath like ? ");
				list.add("%/" + form.getOrgId() + "%");
			} else {
				sql.append(" and auorg.orgId = ? ");
				list.add(form.getOrgId());
			}
		}
		if (StringUtils.isNotBlank(form.getContent())) {
			sql.append(" and di.dtId = ? ");
			list.add(form.getContent());
		}
		

		sql.append(" order by dd.createTm desc ");
		
		if(null != form.getPage() && null != form.getMax()){
			sql.append(" limit ?,? ");
			list.add(form.getPage());
			list.add(form.getMax());
		}

		return jdbcTemplate.query(sql.toString(), list.toArray(), new DmdDepRowMapper());
	}

	class DmdDepRowMapper implements RowMapper<DmdDepBo> {

		@Override
		public DmdDepBo mapRow(ResultSet rs, int rowNumber) throws SQLException {

			DmdDepBo dmdDepBo = new DmdDepBo();

			DmdTopicBo dmdTopicBo = new DmdTopicBo();
			dmdTopicBo.setYear(rs.getInt("year"));
			dmdDepBo.setTopic(dmdTopicBo);

			OrganizationBo organizationBo = new OrganizationBo();
			organizationBo.setName(rs.getString("orgname"));
			dmdDepBo.setDep(organizationBo);

			if(StringUtils.isNotBlank(rs.getString("diname"))){
				DmdDepItemBo dmdDepItemBo = new DmdDepItemBo();
				DmdItemBo dmdItemBo = new DmdItemBo();
				dmdItemBo.setName(rs.getString("diname"));
				dmdDepItemBo.setDmdItem(dmdItemBo);
				List<DmdDepItemBo> dmdDepItemBos = new ArrayList<DmdDepItemBo>();
				dmdDepItemBos.add(dmdDepItemBo);
				dmdDepBo.setDdis(dmdDepItemBos);
			}

			SysParamBo sysTypeBo = new SysParamBo();
			sysTypeBo.setName(rs.getString("sysname"));
			dmdDepBo.setType(sysTypeBo);

			UserInfoBo userInfoBo = new UserInfoBo();
			userInfoBo.setName(rs.getString("username"));
			dmdDepBo.setCreater(userInfoBo);
			dmdDepBo.setPersonNums(rs.getInt("personnums"));

			return dmdDepBo;
		}
	}

	@Override
	public Integer count(DepartmentTrainInfoSearchForm form) {

		StringBuffer sql = new StringBuffer();
		sql.append(" select count(dpId)");
		sql.append(" from dmd_dep as dd ");
		sql.append(" inner join dmd_topic as dt on dd.topic_dtId = dt.dtId ");
		sql.append(" inner join au_organization as auorg on dd.dep_orgId = auorg.orgId ");
		sql.append(" left join dmd_dep_item as ddi on dd.dpId = ddi.dmd_dpId ");
		sql.append(" where 1=1 ");

		List<Object> list = new ArrayList<Object>();
		if (null != form.getYear()) {
			sql.append(" and dt.year = ? ");
			list.add(form.getYear());
		}
		if (StringUtils.isNotBlank(form.getType())) {
			sql.append(" and dd.type_spId = ? ");
			list.add(form.getType());
		}

		if (StringUtils.isNotBlank(form.getOrgId())) {
			if (null == form.getIsSub() || form.getIsSub() == 1) {
				sql.append(" and auorg.idPath like ? ");
				list.add("%/" + form.getOrgId() + "%");
			} else {
				sql.append(" and auorg.orgId = ? ");
				list.add(form.getOrgId());
			}
		}
		if (StringUtils.isNotBlank(form.getContent())) {
			sql.append(" and ddi.dmdItem_dtId = ? ");
			list.add(form.getContent());
		}

		return jdbcTemplate.queryForInt(sql.toString(), list.toArray());
	}

}
