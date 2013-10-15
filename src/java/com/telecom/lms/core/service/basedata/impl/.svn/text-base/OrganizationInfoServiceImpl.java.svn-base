/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-8-30 - 下午4:01:21
 */
package com.telecom.lms.core.service.basedata.impl;

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
import com.telecom.lms.core.model.basedata.OrganizationInfoSearchForm;
import com.telecom.lms.core.service.basedata.OrganizationInfoService;

/**
 * @since 2013-8-30
 * @author zhangpengsh@gmail.com
 */
@Service
@Transactional
public class OrganizationInfoServiceImpl implements OrganizationInfoService {
	
	private static final Logger log = LoggerFactory.getLogger(OrganizationInfoServiceImpl.class);

	@Resource(name = "lmsJdbcTemplate")
	private JdbcTemplate jdbcTemplate;

	@Override
	public OrganizationBo get(OrganizationInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select auorg.orgId as orgid , auorg.name as orgname , auorg.left_p as orgleftp , auorg.right_p as orgrightp from au_organization as auorg where 1=1 ");

		List<Object> list = new ArrayList<Object>();
		if (StringUtils.isNotBlank(form.getId())) {
			sql.append(" and auorg.orgId = ? ");
			list.add(form.getId());
		}

		return jdbcTemplate.queryForObject(sql.toString(), list.toArray(), new OrganizationRowMapper());
	}

	class OrganizationRowMapper implements RowMapper<OrganizationBo> {

		@Override
		public OrganizationBo mapRow(ResultSet rs, int rowNumber){
			
			OrganizationBo organizationBo = new OrganizationBo();
			try {
				organizationBo.setOrgId(rs.getString("orgid"));
				organizationBo.setName(rs.getString("orgname"));
				organizationBo.setLeftPriority(rs.getInt("orgleftp"));
				organizationBo.setRightPriority(rs.getInt("orgrightp"));
			} catch (Exception e) {
				log.error("export error row is {}: ", rowNumber, e);
			}
			
			return organizationBo;
		}
	}

	
	
}
