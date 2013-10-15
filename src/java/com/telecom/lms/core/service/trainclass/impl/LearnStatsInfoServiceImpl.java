/**
 * project : lms_portal_admin
 * user created : ZhangJie
 * date created : 2013-8-14 - 上午9:43:37
 */
package com.telecom.lms.core.service.trainclass.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.telecom.lms.core.bo.learn.LearnStatsBo;
import com.telecom.lms.core.bo.resources.CoursewareBo;
import com.telecom.lms.core.bo.resources.ResBaseBo;
import com.telecom.lms.core.model.trainclass.LearnStatsInfoSearchForm;
import com.telecom.lms.core.service.trainclass.LearnStatsInfoService;

/**
 * @since 2013-8-14
 * @author ZhangJie
 */
@Service
@Transactional
public class LearnStatsInfoServiceImpl implements LearnStatsInfoService {

	@Resource(name = "lmsJdbcTemplate")
	private JdbcTemplate jdbcTemplate;

	private String type = "";

	@Override
	public List<LearnStatsBo> find(LearnStatsInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select rb.sn as sn, rb.sn as name ,rc.cId as rcId , ls.percent as percent , ls.duration as duration from learn_stats as ls ");
		if (null != form.getType() && "1".equals(form.getType())) {
			sql.append(" inner join res_cw as rc on ls.course_cId = rc.cId ");
			sql.append(" inner join res_base as rb on rc.res_rbId = rb.rbId ");
		}
		type = form.getType();
		sql.append(" inner join train_resource as tr on rc.cId = tr.resCw_cId ");
		sql.append(" inner join train_class as tc on tr.tClass_tcId = tc.tcId ");
		sql.append(" where 1=1 ");

		List<Object> list = new ArrayList<Object>();
		if (null != form.getResourceStatus()) {
			sql.append(" and rb.status = ? ");
			list.add(form.getResourceStatus());
		}
		if (null != form.getTrainClassId()) {
			sql.append(" and tc.tcId = ? ");
			list.add(form.getTrainClassId());
		}
		if (form.getUserId().length > 0) {
			sql.append(" and (");
			sql.append(" ls.user_uid = ? ");
			list.add(form.getUserId()[0]);
			for (int i = 1; i < form.getUserId().length; i++) {
				sql.append(" or ls.user_uid = ? ");
				list.add(form.getUserId()[i]);
			}
			sql.append(" )");
		}
		return jdbcTemplate.query(sql.toString(), list.toArray(), new LearnStatsRowMapper());
	}

	class LearnStatsRowMapper implements RowMapper<LearnStatsBo> {

		@Override
		public LearnStatsBo mapRow(ResultSet rs, int rowNumber) throws SQLException {

			LearnStatsBo learnStatsBo = new LearnStatsBo();

			ResBaseBo resBaseBo = new ResBaseBo();
			resBaseBo.setSn(rs.getString("sn"));
			resBaseBo.setName(rs.getString("name"));

			if (null != type && "1".equals(type)) {
				CoursewareBo coursewareBo = new CoursewareBo();
				coursewareBo.setcId(rs.getString("rcId"));
				coursewareBo.setRes(resBaseBo);
				learnStatsBo.setCourse(coursewareBo);
			}

			learnStatsBo.setPercent(rs.getFloat("percent"));
			learnStatsBo.setDuration(rs.getLong("duration"));

			return learnStatsBo;
		}
	}

}
