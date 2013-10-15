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

import com.telecom.lms.core.bo.resources.CoursewareBo;
import com.telecom.lms.core.bo.resources.ResBaseBo;
import com.telecom.lms.core.bo.train.TrainResourceBo;
import com.telecom.lms.core.model.trainclass.LearnStatsInfoSearchForm;
import com.telecom.lms.core.service.trainclass.TrainResourceInfoService;

@Service
@Transactional
public class TrainResourseInfoServiceImpl implements TrainResourceInfoService {

	@Resource(name = "lmsJdbcTemplate")
	private JdbcTemplate jdbcTemplate;

	private String type = "";

	@Override
	public Integer count(LearnStatsInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select count(rb.sn) from train_resource as tr ");
		sql.append(" inner join train_class as tc on tr.tClass_tcId = tc.tcId ");
		if (null != form.getType() && "1".equals(form.getType())) {
			sql.append(" inner join res_cw as rc on tr.resCw_cId = rc.cId ");
			sql.append(" inner join res_base as rb on rc.res_rbId = rb.rbId ");
		}
		type = form.getType();
		sql.append(" where 1=1 ");

		List<Object> list = new ArrayList<Object>();
		if (null != form.getLogo()) {
			sql.append(" and tr.logo = ? ");
			list.add(form.getLogo());
		}
		if (StringUtils.isNotBlank(form.getTrainClassId())) {
			sql.append(" and tc.tcId = ? ");
			list.add(form.getTrainClassId());
		}
		if (null != form.getResourceStatus()) {
			sql.append(" and rb.status = ? ");
			list.add(form.getResourceStatus());
		}
		return jdbcTemplate.queryForInt(sql.toString(), list.toArray());
	}

	@Override
	public List<TrainResourceBo> find(LearnStatsInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select rc.cId as rcid ,rb.sn as sn ,rb.name as name from train_resource as tr ");
		sql.append(" inner join train_class as tc on tr.tClass_tcId = tc.tcId ");
		if (null != form.getType() && "1".equals(form.getType())) {
			sql.append(" inner join res_cw as rc on tr.resCw_cId = rc.cId ");
			sql.append(" inner join res_base as rb on rc.res_rbId = rb.rbId ");
		}
		type = form.getType();
		sql.append(" where 1=1 ");
		

		List<Object> list = new ArrayList<Object>();
		if (null != form.getLogo()) {
			sql.append(" and tr.logo = ? ");
			list.add(form.getLogo());
		}
		if (StringUtils.isNotBlank(form.getTrainClassId())) {
			sql.append(" and tc.tcId = ? ");
			list.add(form.getTrainClassId());
		}
		if (null != form.getResourceStatus()) {
			sql.append(" and rb.status = ? ");
			list.add(form.getResourceStatus());
		}
		if(null != form.getPage() && null != form.getMax()){
			sql.append(" limit ?,? ");
			list.add(form.getPage());
			list.add(form.getMax());
		}

		List<TrainResourceBo> trainResourceBos = jdbcTemplate.query(sql.toString(),
			list.toArray(),
			new TrainResourceRowMapper());
		return trainResourceBos;
	}

	class TrainResourceRowMapper implements RowMapper<TrainResourceBo> {

		@Override
		public TrainResourceBo mapRow(ResultSet rs, int rowNumber) throws SQLException {

			TrainResourceBo trainResourceBo = new TrainResourceBo();

			ResBaseBo baseBo = new ResBaseBo();
			baseBo.setSn(rs.getString("sn"));
			baseBo.setName(rs.getString("name"));

			if (null != type && "1".equals(type)) {
				CoursewareBo coursewareBo = new CoursewareBo();
				coursewareBo.setcId(rs.getString("rcid"));
				coursewareBo.setRes(baseBo);
				trainResourceBo.setResCw(coursewareBo);
			}
			return trainResourceBo;
		}
	}
}
