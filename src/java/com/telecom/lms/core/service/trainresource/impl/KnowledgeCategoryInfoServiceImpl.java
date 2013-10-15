/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-8-30 - 下午4:52:05
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

import com.telecom.lms.core.bo.resources.KnowledgeCategoryBo;
import com.telecom.lms.core.model.trainresource.KnowledgeCategoryInfoSearchForm;
import com.telecom.lms.core.service.trainresource.KnowledgeCategoryInfoService;

/**
 * @since 2013-8-30
 * @author zhangpengsh@gmail.com
 */
@Service
@Transactional
public class KnowledgeCategoryInfoServiceImpl implements KnowledgeCategoryInfoService {

	@Resource(name = "lmsJdbcTemplate")
	private JdbcTemplate jdbcTemplate;

	@Override
	public KnowledgeCategoryBo get(KnowledgeCategoryInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append("select kcId , left_p , right_p from res_kc where 1=1 ");

		List<Object> list = new ArrayList<Object>();
		if (StringUtils.isNotBlank(form.getId())) {
			sql.append(" and kcId = ? ");
			list.add(form.getId());
		}
		return jdbcTemplate.queryForObject(sql.toString(), list.toArray(), new KnowledgeCategoryRowMapper());
	}

	class KnowledgeCategoryRowMapper implements RowMapper<KnowledgeCategoryBo> {

		@Override
		public KnowledgeCategoryBo mapRow(ResultSet rs, int rowNumber) throws SQLException {

			KnowledgeCategoryBo knowledgeCategoryBo = new KnowledgeCategoryBo();
			knowledgeCategoryBo.setKcId(rs.getString("kcId"));
			knowledgeCategoryBo.setLeftPriority(rs.getInt("left_p"));
			knowledgeCategoryBo.setRightPriority(rs.getInt("right_p"));
			return knowledgeCategoryBo;
		}
	}
}
