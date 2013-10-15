/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-2 - 上午10:10:37
 */
package com.telecom.lms.core.service.trainresource.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.model.ExecuteInfo;
import com.telecom.lms.core.bo.resources.DocBo;
import com.telecom.lms.core.bo.resources.ResBaseBo;
import com.telecom.lms.core.bo.resources.ResExtraBo;
import com.telecom.lms.core.bo.resources.ResStatBo;
import com.telecom.lms.core.model.trainresource.DocumentResourceInfoSearchForm;
import com.telecom.lms.core.service.trainresource.DocumentResourceInfoService;
import com.telecom.lms.sdk.util.DateInfoUtil;

/**
 * @since 2013-9-2
 * @author zhangpengsh@gmail.com
 */
@Service
@Transactional
public class DocumentResourceInfoServiceImpl implements DocumentResourceInfoService {

	@Resource(name = "lmsJdbcTemplate")
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<DocBo> find(DocumentResourceInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select rb.sn as rbsn , rb.name as rbname , auorg.namePath as namePath , auuser.name as username ");
		sql.append(" , rb.isPub as ispub , rd.isDownload as isDownload , re.aim as aim , re.content as content , re.remark as remark ");
		sql.append(" , rb.elite as elite , rb.status as status ");
		sql.append(" , rs.view as view , rs.download as download , rs.share as share , rs.comment as comment ");
		sql.append(" from res_docs as rd ");
		sql.append(" inner join res_base as rb on rd.res_rbId = rb.rbId ");
		sql.append(" left join res_extra as re on rb.rbId = re.res_rbId ");
		sql.append(" left join res_stat as rs on rb.rbId = rs.res_rbId ");
		sql.append(" left join au_userinfo as auuser on rb.creater_uid = auuser.uid ");
		sql.append(" inner join au_organization as auorg on rb.org_orgId = auorg.orgId ");

		sql.append(" inner join res_cate as rc on rb.rbId = rc.res_rbId ");
		if (null != form.getKnowledgeLeftPriority() && null != form.getKnowledgeRightPriority()) {
			sql.append(" inner join res_kc as rk on rc.category_kcId = rk.kcId ");
		}
		if (StringUtils.isNotBlank(form.getPost())) {
			sql.append(" inner join position_doc as pd on rd.dId = pd.doc_dId ");
			//			sql.append(" inner join au_position as aupost on pd.position_pId = aupost.pId ");
		}
		ExecuteInfo executeInfo = executeSql(form);
		sql.append(executeInfo.getSql());
		List<Object> list = executeInfo.getList();

		String regular = "asc";
		if (StringUtils.isNotBlank(form.getRegular())) {
			regular = form.getRegular();
		}

		if (StringUtils.isBlank(form.getOrder())) {

			sql.append(" order by rb.createDt desc ");
		} else {
			sql.append(" order by rs." + form.getOrder() + " " + regular);
		}

		if (null != form.getPage() && null != form.getMax()) {
			sql.append(" limit ? , ? ");
			list.add(form.getPage());
			list.add(form.getMax());
		}

		return jdbcTemplate.query(sql.toString(), list.toArray(), new DocumentResourceRowMapper());
	}

	class DocumentResourceRowMapper implements RowMapper<DocBo> {

		@Override
		public DocBo mapRow(ResultSet rs, int rowNumber) throws SQLException {

			DocBo docBo = new DocBo();
			docBo.setIsDownload(rs.getInt("isDownload"));

			ResBaseBo resBaseBo = new ResBaseBo();
			resBaseBo.setSn(rs.getString("rbsn"));
			resBaseBo.setName(rs.getString("rbname"));
			resBaseBo.setIsPub(rs.getInt("ispub"));
			resBaseBo.setElite(rs.getInt("elite"));
			resBaseBo.setStatus(rs.getInt("status"));

			OrganizationBo organizationBo = new OrganizationBo();
			organizationBo.setNamepath(rs.getString("namePath"));
			resBaseBo.setOrg(organizationBo);

			UserInfoBo userInfoBo = new UserInfoBo();
			userInfoBo.setName(rs.getString("username"));
			resBaseBo.setCreater(userInfoBo);

			ResExtraBo resExtraBo = new ResExtraBo();
			resExtraBo.setAim(rs.getString("aim"));
			resExtraBo.setContent(rs.getString("content"));
			resExtraBo.setRemark(rs.getString("remark"));
			resBaseBo.setExtraInfo(resExtraBo);

			ResStatBo resStatBo = new ResStatBo();
			resStatBo.setView(rs.getInt("view"));
			resStatBo.setDownload(rs.getInt("download"));
			resStatBo.setShare(rs.getInt("share"));
			resStatBo.setComment(rs.getInt("comment"));
			resBaseBo.setStat(resStatBo);

			docBo.setRes(resBaseBo);

			return docBo;
		}
	}

	@Override
	public Integer count(DocumentResourceInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select count(rd.dId) ");
		sql.append(" from res_docs as rd ");
		sql.append(" inner join res_base as rb on rd.res_rbId = rb.rbId ");
		sql.append(" inner join au_organization as auorg on rb.org_orgId = auorg.orgId ");

		sql.append(" inner join res_cate as rc on rb.rbId = rc.res_rbId ");
		if (null != form.getKnowledgeLeftPriority() && null != form.getKnowledgeRightPriority()) {
			sql.append(" inner join res_kc as rk on rc.category_kcId = rk.kcId ");
		}
		if (StringUtils.isNotBlank(form.getPost())) {
			sql.append(" inner join position_doc as pd on rd.dId = pd.doc_dId ");
		}
		ExecuteInfo executeInfo = executeSql(form);
		sql.append(executeInfo.getSql());
		return jdbcTemplate.queryForInt(sql.toString(), executeInfo.getList().toArray());
	}

	private ExecuteInfo executeSql(DocumentResourceInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		List<Object> list = new ArrayList<Object>();
		sql.append(" where 1=1 ");
		if (null != form.getOrgLeftPriority() && null != form.getOrgRightPriority()) {
			sql.append(" and auorg.left_p >= ? ");
			sql.append(" and auorg.right_p <= ? ");
			list.add(form.getOrgLeftPriority());
			list.add(form.getOrgRightPriority());
		}
		if (StringUtils.isNotBlank(form.getOrgId())) {
			sql.append(" and auorg.orgId = ? ");
			list.add(form.getOrgId());
		}
		if (null != form.getKnowledgeLeftPriority() && null != form.getKnowledgeRightPriority()) {
			sql.append(" and rk.left_p >= ? ");
			sql.append(" and rk.right_p <= ? ");
			list.add(form.getKnowledgeLeftPriority());
			list.add(form.getKnowledgeRightPriority());
		}
		if (StringUtils.isNotBlank(form.getKnowledgeId())) {
			sql.append(" and rc.category_kcId = ? ");
			list.add(form.getKnowledgeId());
		}
		if (StringUtils.isNotBlank(form.getName())) {
			sql.append(" and rb.name like ? ");
			list.add("%" + form.getName() + "%");
		}
		if (StringUtils.isNotBlank(form.getSn())) {
			sql.append(" and rb.sn like ? ");
			list.add("%" + form.getSn() + "%");
		}
		if (StringUtils.isNotBlank(form.getStartTime())) {
			sql.append(" and rb.createDt >= ? ");
			list.add(DateInfoUtil.parseDate(DateInfoUtil.DAYTYPE, form.getStartTime()));
		}
		if (StringUtils.isNotBlank(form.getEndTime())) {
			sql.append(" and rb.createDt <= ? ");
			Date endDate = DateInfoUtil.parseDate(DateInfoUtil.DAYTYPE, form.getEndTime());
			list.add(DateInfoUtil.dateOffset(endDate, Calendar.DATE, 1));
		}
		if (StringUtils.isNotBlank(form.getTag())) {
			sql.append(" and rb.tag like ? ");
			list.add("%" + form.getTag() + "%");
		}
		if (StringUtils.isNotBlank(form.getPost())) {
			sql.append(" and pd.position_pId = ? ");
			list.add(form.getPost());
		}
		if (StringUtils.isNotBlank(form.getStatus())) {
			sql.append(" and rb.status = ? ");
			list.add(form.getStatus());
		}
		if (null != form.getElite()) {
			sql.append(" and rb.elite = ? ");
			list.add("1");
		}
		sql.append(" and rb.history = 0 and rb.isDel = 0 and rd.docType = 0 ");
		return new ExecuteInfo(sql.toString(), list);
	}

}
