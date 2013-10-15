/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-13 - 下午3:53:08
 */
package com.telecom.lms.core.service.trainevaluate.impl;

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

import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.survey.SurveyItemBo;
import com.telecom.lms.core.bo.survey.SurveyReplyBo;
import com.telecom.lms.core.bo.surveyreport.SurveyReportCategoryBo;
import com.telecom.lms.core.bo.surveyreport.SurveyReportInfoBo;
import com.telecom.lms.core.bo.surveyreport.SurveyReportItemBo;
import com.telecom.lms.core.bo.surveyreport.SurveyReportItemResBo;
import com.telecom.lms.core.model.trainevaluate.SurveyReportInfoSearchForm;
import com.telecom.lms.core.service.trainevaluate.EvaluateReportInfoService;

/**
 * @since 2013-9-13
 * @author zhangpengsh@gmail.com
 */
@Service
@Transactional
public class EvaluateReportInfoServiceImpl implements EvaluateReportInfoService {

	@Resource(name = "lmsJdbcTemplate")
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<SurveyReportItemBo> statisticsResult(SurveyReportInfoSearchForm form) {

		SurveyReportInfoBo surveyReportInfoBo = findSurveyReportInfo(form);
		List<SurveyReportCategoryBo> surveyReportCategoryBos = findSurveyReportCategory(surveyReportInfoBo.getsId());
		List<SurveyReportItemBo> surveyReportItemBos = findSurveyReportItem(surveyReportCategoryBos, form);
		List<SurveyReportItemResBo> surveyReportItemResBos = findSurveyReportItemRes(surveyReportItemBos);
		List<SurveyReplyBo> surveyReplyBos = findSurveyReply(surveyReportItemBos);
		List<SurveyReportItemBo> list = arrangeReportItemData(surveyReportItemBos,
			surveyReportItemResBos,
			surveyReplyBos);
		return list;
	}

	@Override
	public List<SurveyReportCategoryBo> statisticsAvgScore(SurveyReportInfoSearchForm form) {

		SurveyReportInfoBo surveyReportInfoBo = findSurveyReportInfo(form);
		List<SurveyReportCategoryBo> surveyReportCategoryBos = findSurveyReportCategory(surveyReportInfoBo.getsId());
		List<SurveyReportItemBo> surveyReportItemBos = findSurveyReportItem(surveyReportCategoryBos, form);
		List<SurveyReportCategoryBo> list = arrangeReportCategoryData(surveyReportCategoryBos, surveyReportItemBos);
		return list;
	}

	public void arrangeReportReply(SurveyReportItemBo surveyReportItemBo, List<SurveyReplyBo> surveyReplyBos) {

		if (null == surveyReplyBos || surveyReplyBos.isEmpty()) {
			return;
		}
		List<SurveyReplyBo> list = new ArrayList<SurveyReplyBo>();
		for (int i = 0; i < surveyReplyBos.size(); i++) {

			if (surveyReportItemBo.getItem_siId().equals(surveyReplyBos.get(i).getItem().getSiId())) {
				list.add(surveyReplyBos.get(i));
				surveyReplyBos.remove(i);
				i--;
			}
		}
		surveyReportItemBo.setSurveyReplyBos(list);
	}

	public void arrangeReportItemResData(SurveyReportItemBo surveyReportItemBo,
			List<SurveyReportItemResBo> surveyReportItemResBos) {

		if (null == surveyReportItemResBos || surveyReportItemResBos.isEmpty()) {
			return;
		}
		List<SurveyReportItemResBo> list = new ArrayList<SurveyReportItemResBo>();
		for (int i = 0; i < surveyReportItemResBos.size(); i++) {

			if (surveyReportItemBo.getSiId().equals(surveyReportItemResBos.get(i).getReportItem_siId())) {
				list.add(surveyReportItemResBos.get(i));
				surveyReportItemResBos.remove(i);
				i--;
			}
		}
		surveyReportItemBo.setReportItemRes(list);
	}

	public List<SurveyReportItemBo> arrangeReportItemData(List<SurveyReportItemBo> surveyReportItemBos,
			List<SurveyReportItemResBo> surveyReportItemResBos,
			List<SurveyReplyBo> surveyReplyBos) {

		if (null == surveyReportItemBos || surveyReportItemBos.isEmpty()) {
			return null;
		}

		List<SurveyReportItemBo> reportItemBos = new ArrayList<SurveyReportItemBo>();
		for (SurveyReportItemBo surveyReportItemBo : surveyReportItemBos) {

			if (surveyReportItemBo.getType() != 4) {
				arrangeReportItemResData(surveyReportItemBo, surveyReportItemResBos);
				reportItemBos.add(surveyReportItemBo);
			} else {
				arrangeReportReply(surveyReportItemBo, surveyReplyBos);
				reportItemBos.add(surveyReportItemBo);
			}
		}
		return reportItemBos;
	}

	public List<SurveyReportCategoryBo> arrangeReportCategoryData(List<SurveyReportCategoryBo> surveyReportCategoryBos,
			List<SurveyReportItemBo> surveyReportItemBos) {

		if (null == surveyReportCategoryBos || surveyReportCategoryBos.isEmpty()) {
			return null;
		}
		if (null == surveyReportItemBos || surveyReportItemBos.isEmpty()) {
			return surveyReportCategoryBos;
		}
		List<SurveyReportCategoryBo> reportCategoryBos = new ArrayList<SurveyReportCategoryBo>();
		for (SurveyReportCategoryBo surveyReportCategoryBo : surveyReportCategoryBos) {

			List<SurveyReportItemBo> list = new ArrayList<SurveyReportItemBo>();
			for (int i = 0; i < surveyReportItemBos.size(); i++) {

				if (surveyReportCategoryBo.getIcId().equals(surveyReportItemBos.get(i).getCategory_id())) {
					list.add(surveyReportItemBos.get(i));
					surveyReportItemBos.remove(i);
					i--;
				}
			}
			surveyReportCategoryBo.setReportItems(list);
			reportCategoryBos.add(surveyReportCategoryBo);
		}

		return reportCategoryBos;
	}

	public List<SurveyReplyBo> findSurveyReply(List<SurveyReportItemBo> surveyReportItemBos) {

		List<Object> list = new ArrayList<Object>();
		StringBuilder sql = new StringBuilder();
		sql.append(" select sr.item_siId as itemsiid  , auuser.name as username , sr.remark remark from survey_reply as sr ");
		sql.append(" inner join au_userinfo as auuser on sr.replyer_uid = auuser.uid ");
		sql.append(" where 1=1 and (");
		int j = 0;
		for (int i = 0; i < surveyReportItemBos.size(); i++) {

			if (surveyReportItemBos.get(i).getType() != 4) {
				continue;
			}
			sql.append(" sr.item_siId = ?");
			list.add(surveyReportItemBos.get(i).getItem_siId());
			j = i + 1;
			break;
		}
		for (int i = j; i < surveyReportItemBos.size(); i++) {

			if (surveyReportItemBos.get(i).getType() != 4) {
				continue;
			}
			sql.append(" or sr.item_siId = ?");
			list.add(surveyReportItemBos.get(i).getItem_siId());
		}
		sql.append(" ) ");
		return jdbcTemplate.query(sql.toString(), list.toArray(), new SurveyReplyRowMapper());
	}

	public SurveyReportInfoBo findSurveyReportInfo(SurveyReportInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append("select sId , topic from survey_report_info where survey_sId = ? ");
		List<Object> list = new ArrayList<Object>();
		list.add(form.getSurveyId());
		return jdbcTemplate.queryForObject(sql.toString(), list.toArray(), new SurveyReportInfoRowMapper());
	}

	public List<SurveyReportCategoryBo> findSurveyReportCategory(String reportInfo_sId) {

		if (null == reportInfo_sId || reportInfo_sId.equals("")) {
			return null;
		}
		StringBuilder sql = new StringBuilder();
		sql.append("select icId , number , name , avgFlag , avgScore from survey_report_category where reportInfo_sId = ? order by sn asc ");
		List<Object> list = new ArrayList<Object>();
		list.add(reportInfo_sId);
		return jdbcTemplate.query(sql.toString(), list.toArray(), new SurveyReportCategoryRowMapper());
	}

	public List<SurveyReportItemBo> findSurveyReportItem(List<SurveyReportCategoryBo> surveyReportCategoryBos,
			SurveyReportInfoSearchForm form) {

		if (null == surveyReportCategoryBos || surveyReportCategoryBos.isEmpty()) {
			return null;
		}
		StringBuilder sql = new StringBuilder();
		sql.append(" select siId , number , question , avgScore , type , reportCategory_icId ,item_siId from survey_report_item where (reportCategory_icId = ? ");
		List<Object> list = new ArrayList<Object>();
		list.add(surveyReportCategoryBos.get(0).getIcId());
		for (int i = 1; i < surveyReportCategoryBos.size(); i++) {
			sql.append(" or reportCategory_icId = ? ");
			list.add(surveyReportCategoryBos.get(i).getIcId());
		}
		sql.append(" ) ");
		if (StringUtils.isNotBlank(form.getType())) {
			sql.append(" and type <> ? ");
			list.add(form.getType());
		}
		sql.append(" order by reportCategory_icId , sn asc ");

		return jdbcTemplate.query(sql.toString(), list.toArray(), new SurveyReportItemRowMapper());
	}

	public List<SurveyReportItemResBo> findSurveyReportItemRes(List<SurveyReportItemBo> surveyReportItemBos) {

		if (null == surveyReportItemBos || surveyReportItemBos.isEmpty()) {
			return null;
		}
		StringBuilder sql = new StringBuilder();
		List<Object> list = new ArrayList<Object>();
		sql.append(" select sirId , answer , percentage , reportItem_siId  from survey_report_item_res where 1=1 and ( ");
		int j = 0;
		for (int i = 0; i < surveyReportItemBos.size(); i++) {
			if (surveyReportItemBos.get(i).getType() == 4) {
				continue;
			}
			sql.append(" reportItem_siId = ? ");
			list.add(surveyReportItemBos.get(i).getSiId());
			j = i + 1;
			break;
		}
		for (int i = j; i < surveyReportItemBos.size(); i++) {
			if (surveyReportItemBos.get(i).getType() == 4) {
				continue;
			}
			sql.append(" or reportItem_siId = ? ");
			list.add(surveyReportItemBos.get(i).getSiId());
		}
		sql.append(" ) order by reportItem_siId , sn asc ");
		return jdbcTemplate.query(sql.toString(), list.toArray(), new SurveyReportItemResRowMapper());
	}

	class SurveyReplyRowMapper implements RowMapper<SurveyReplyBo> {

		@Override
		public SurveyReplyBo mapRow(ResultSet rs, int rowNumber) throws SQLException {

			SurveyReplyBo surveyReplyBo = new SurveyReplyBo();
			surveyReplyBo.setRemark(rs.getString("remark"));

			SurveyItemBo surveyItemBo = new SurveyItemBo();
			surveyItemBo.setSiId(rs.getString("itemsiid"));
			surveyReplyBo.setItem(surveyItemBo);

			UserInfoBo userInfoBo = new UserInfoBo();
			userInfoBo.setName(rs.getString("username"));
			surveyReplyBo.setReplyer(userInfoBo);

			return surveyReplyBo;
		}
	}

	class SurveyReportItemResRowMapper implements RowMapper<SurveyReportItemResBo> {

		@Override
		public SurveyReportItemResBo mapRow(ResultSet rs, int rowNumber) throws SQLException {

			SurveyReportItemResBo surveyReportItemResBo = new SurveyReportItemResBo();
			surveyReportItemResBo.setSirId(rs.getString("sirId"));
			surveyReportItemResBo.setAnswer(rs.getString("answer"));
			surveyReportItemResBo.setPercentage(rs.getFloat("percentage"));
			surveyReportItemResBo.setReportItem_siId(rs.getString("reportItem_siId"));
			return surveyReportItemResBo;
		}
	}

	class SurveyReportItemRowMapper implements RowMapper<SurveyReportItemBo> {

		@Override
		public SurveyReportItemBo mapRow(ResultSet rs, int rowNumber) throws SQLException {

			SurveyReportItemBo surveyReportItemBo = new SurveyReportItemBo();
			surveyReportItemBo.setSiId(rs.getString("siId"));
			surveyReportItemBo.setNumber(rs.getInt("number"));
			surveyReportItemBo.setQuestion(rs.getString("question"));
			surveyReportItemBo.setAvgScore(rs.getFloat("avgScore"));
			surveyReportItemBo.setType(rs.getInt("type"));
			surveyReportItemBo.setCategory_id(rs.getString("reportCategory_icId"));
			surveyReportItemBo.setItem_siId(rs.getString("item_siId"));
			return surveyReportItemBo;
		}
	}

	class SurveyReportCategoryRowMapper implements RowMapper<SurveyReportCategoryBo> {

		@Override
		public SurveyReportCategoryBo mapRow(ResultSet rs, int rowNumber) throws SQLException {

			SurveyReportCategoryBo surveyReportCategoryBo = new SurveyReportCategoryBo();
			surveyReportCategoryBo.setIcId(rs.getString("icId"));
			surveyReportCategoryBo.setNumber(rs.getString("number"));
			surveyReportCategoryBo.setName(rs.getString("name"));
			surveyReportCategoryBo.setAvgFlag(rs.getString("avgFlag"));
			surveyReportCategoryBo.setAvgScore(rs.getFloat("avgScore"));
			return surveyReportCategoryBo;
		}
	}

	class SurveyReportInfoRowMapper implements RowMapper<SurveyReportInfoBo> {

		@Override
		public SurveyReportInfoBo mapRow(ResultSet rs, int rowNumber) throws SQLException {

			SurveyReportInfoBo surveyReportInfoBo = new SurveyReportInfoBo();
			surveyReportInfoBo.setsId(rs.getString("sId"));
			surveyReportInfoBo.setTopic(rs.getString("topic"));

			return surveyReportInfoBo;
		}
	}

}
