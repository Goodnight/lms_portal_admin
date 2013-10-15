/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-10 - 下午2:55:21
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
import com.telecom.lms.core.bo.model.ExecuteInfo;
import com.telecom.lms.core.bo.resources.KnowledgePointBo;
import com.telecom.lms.core.model.trainresource.KnowledgePointInfoSearchForm;
import com.telecom.lms.core.service.trainresource.KnowledgePointInfoService;

/**
 * @since 2013-9-10
 * @author zhangpengsh@gmail.com
 */
@Service
@Transactional
public class KnowledgePointInfoServiceImpl implements KnowledgePointInfoService {

	@Resource(name = "lmsJdbcTemplate")
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<KnowledgePointBo> find(KnowledgePointInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select rkp.sn as rkpsn , rkp.name as rkpname , org.namePath as orgnamepath ,rkp.snPath as rkpsnpath ,rkp.namePath as rkpnamepath ");
		sql.append(" from res_knowledge_point as rkp ");
		sql.append(" inner join res_kc as rk on rkp.kc_kcId = rk.kcId");
		sql.append(" inner join au_organization as org on rkp.creatCorp_orgId = org.orgId ");
		ExecuteInfo executeInfo = executeSql(form);
		sql.append(executeInfo.getSql());
		List<Object> list = executeInfo.getList();
		if (null != form.getPage() && null != form.getMax()) {
			sql.append(" limit ? , ? ");
			list.add(form.getPage());
			list.add(form.getMax());
		}
		return jdbcTemplate.query(sql.toString(), list.toArray(), new KnowledgePointRowMapper());
	}

	class KnowledgePointRowMapper implements RowMapper<KnowledgePointBo> {

		@Override
		public KnowledgePointBo mapRow(ResultSet rs, int rowNumber) throws SQLException {

			KnowledgePointBo knowledgePointBo = new KnowledgePointBo();
			knowledgePointBo.setSn(rs.getString("rkpsn"));
			knowledgePointBo.setName(rs.getString("rkpname"));
			knowledgePointBo.setSnPath(rs.getString("rkpsnpath"));
			knowledgePointBo.setNamePath(rs.getString("rkpnamepath"));

			OrganizationBo organizationBo = new OrganizationBo();
			organizationBo.setName(rs.getString("orgnamepath"));
			knowledgePointBo.setCreatCorp(organizationBo);
			return knowledgePointBo;
		}
	}

	@Override
	public Integer count(KnowledgePointInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select count(rkp.kpId) from res_knowledge_point as rkp ");
		sql.append(" inner join res_kc as rk on rkp.kc_kcId = rk.kcId");
		sql.append(" inner join au_organization as org on rkp.creatCorp_orgId = org.orgId ");
		ExecuteInfo executeInfo = executeSql(form);
		sql.append(executeInfo.getSql());
		return jdbcTemplate.queryForInt(sql.toString(), executeInfo.getList().toArray());
	}

	private ExecuteInfo executeSql(KnowledgePointInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		List<Object> list = new ArrayList<Object>();
		sql.append(" where 1=1 ");
		if (StringUtils.isNotBlank(form.getName())) {
			sql.append(" and rkp.name like ? ");
			list.add("%" + form.getName() + "%");
		}
		if (StringUtils.isNotBlank(form.getKnowledgePointId())) {
			sql.append(" and rk.idPath like ? ");
			list.add("%" + form.getKnowledgePointId() + "%");
		}
		if (StringUtils.isNotBlank(form.getOrgId())) {
			
			if (StringUtils.isBlank(form.getIsSub()) || "1".equals(form.getIsSub())) {
				sql.append(" and org.idPath like ? ");
				list.add("%" + form.getOrgId() + "%");
			} else {
				sql.append(" and org.orgId = ? ");
				list.add(form.getOrgId());
			}
		}

		return new ExecuteInfo(sql.toString(), list);
	}
}
