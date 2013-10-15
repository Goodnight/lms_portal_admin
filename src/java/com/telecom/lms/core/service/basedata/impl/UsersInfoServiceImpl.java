/**
 * project : lms_portal_admin
 * user created : zhangpengsh@gmail.com
 * date created : 2013-9-18 - 下午3:59:39
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
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.basic.SysParamBo;
import com.telecom.lms.core.bo.model.ExecuteInfo;
import com.telecom.lms.core.bo.position.Position4OrgBo;
import com.telecom.lms.core.model.basedata.UserInfoSearchForm;
import com.telecom.lms.core.service.basedata.UsersInfoService;
import com.telecom.lms.sdk.util.DateInfoUtil;

/**
 * @since 2013-9-18
 * @author zhangpengsh@gmail.com
 */
@Service
@Transactional
public class UsersInfoServiceImpl implements UsersInfoService {

	private static final Logger log = LoggerFactory.getLogger(UsersInfoServiceImpl.class);

	@Resource(name = "lmsJdbcTemplate")
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<UserInfoBo> find(UserInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select auuser.sn as usersn , auuser.name as username , auuser.gender as usergender , auorg.sn as orgsn ");
		sql.append(" , folk.name as folkname , political.name as politicalname , jobtype.name as jobtypename , empnature.name as empnaturename ");
		sql.append(" , job.name as jobname , techGrade.name as techgradename , post.name as postname , education.academy as academy ");
		sql.append(" , education.professional as professional , educationsys.name as educationsysname , degree.name as degreename ");
		sql.append(" , auuser.birthday as birthday , auuser.workDt as workdt , certificatetype.name as certificatetypename");
		sql.append(" , auuser.certificateCode as certificatecode , auuser.contact as contact , auuser.mobile as mobile , auuser.email as email");
		sql.append(" , auuser.expireDt as expiredt , auuser.status as status , auuser.remark as remark");
		sql.append(" from au_userinfo as auuser ");
		sql.append(" inner join au_organization as auorg on auuser.org_orgId = auorg.orgId ");
		sql.append(" left join bs_sysparams as folk on auuser.folk_spId = folk.spId  ");
		sql.append(" left join bs_sysparams as political on auuser.political_spId = political.spId ");
		sql.append(" left join bs_sysparams as jobtype on auuser.jobType_spId = jobtype.spId ");
		sql.append(" left join bs_sysparams as empnature on auuser.empNature_spId = empnature.spId ");
		sql.append(" left join bs_sysparams as job on auuser.job_spId = job.spId ");
		sql.append(" left join bs_sysparams as techGrade on auuser.techGrade_spId = techGrade.spId ");
		sql.append(" left join position4org as post on auuser.post_poId = post.poId ");
		sql.append(" left join au_educationinfo as education on auuser.uid = education.user_uid");
		sql.append(" left join bs_sysparams as educationsys on education.education_spId = educationsys.spId ");
		sql.append(" left join bs_sysparams as degree on education.degree_spId = degree.spId ");
		sql.append(" left join bs_sysparams as certificatetype on auuser.certificateType_spId = certificatetype.spId ");

		ExecuteInfo executeInfo = executeSql(form);
		sql.append(executeInfo.getSql());
		List<Object> list = executeInfo.getList();

		if (null != form.getPage() && null != form.getMax()) {
			sql.append(" limit ? , ? ");
			list.add(form.getPage());
			list.add(form.getMax());
		}
		return jdbcTemplate.query(sql.toString(), list.toArray(), new UserInfoRowMapper());
	}

	class UserInfoRowMapper implements RowMapper<UserInfoBo> {

		@Override
		public UserInfoBo mapRow(ResultSet rs, int rowNumber) {

			UserInfoBo userInfoBo = new UserInfoBo();
			try {

				userInfoBo.setSn(rs.getString("usersn"));
				userInfoBo.setName(rs.getString("username"));
				userInfoBo.setGender(rs.getInt("usergender"));
				userInfoBo.setAcademy(rs.getString("academy"));
				userInfoBo.setProfessional(rs.getString("professional"));
				userInfoBo.setBir(DateInfoUtil.formatDate(DateInfoUtil.DAYTYPE, rs.getDate("birthday")));
				userInfoBo.setWorkDate(DateInfoUtil.formatDate(DateInfoUtil.DAYTYPE, rs.getDate("workdt")));
				userInfoBo.setCertificateCode(rs.getString("certificatecode"));
				userInfoBo.setContact(rs.getString("contact"));
				userInfoBo.setMobile(rs.getString("mobile"));
				userInfoBo.setEmail(rs.getString("email"));
				userInfoBo.setExpire_date(DateInfoUtil.formatDate(DateInfoUtil.DAYTYPE, rs.getDate("expiredt")));
				userInfoBo.setStatus(rs.getInt("status"));
				userInfoBo.setRemake(rs.getString("remark"));

				OrganizationBo organizationBo = new OrganizationBo();
				organizationBo.setSn(rs.getString("orgsn"));
				userInfoBo.setOrg(organizationBo);

				SysParamBo folk = new SysParamBo();
				folk.setName(rs.getString("folkname"));
				userInfoBo.setFolk(folk);

				SysParamBo political = new SysParamBo();
				political.setName(rs.getString("politicalname"));
				userInfoBo.setPolitical(political);

				SysParamBo jobtype = new SysParamBo();
				jobtype.setName(rs.getString("jobtypename"));
				userInfoBo.setJobType(jobtype);

				SysParamBo empnature = new SysParamBo();
				empnature.setName(rs.getString("empnaturename"));
				userInfoBo.setEmpNature(empnature);

				SysParamBo job = new SysParamBo();
				job.setName(rs.getString("jobname"));
				userInfoBo.setJob(job);

				SysParamBo techgrade = new SysParamBo();
				techgrade.setName(rs.getString("techgradename"));
				userInfoBo.setTechGrade(techgrade);

				Position4OrgBo position4OrgBo = new Position4OrgBo();
				position4OrgBo.setName(rs.getString("postname"));
				userInfoBo.setPost(position4OrgBo);

				SysParamBo educationsys = new SysParamBo();
				educationsys.setName(rs.getString("educationsysname"));
				userInfoBo.setEducation(educationsys);

				SysParamBo degree = new SysParamBo();
				degree.setName(rs.getString("degreename"));
				userInfoBo.setDegree(degree);

				SysParamBo certificatetype = new SysParamBo();
				certificatetype.setName(rs.getString("certificatetypename"));
				userInfoBo.setCertificateType(certificatetype);
			} catch (Exception e) {
				log.error("export error row is : {}", rowNumber, e);
			}
			return userInfoBo;
		}
	}

	@Override
	public int count(UserInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		sql.append(" select count(auuser.uid) from au_userinfo as auuser ");
		sql.append(" inner join au_organization as auorg on auuser.org_orgId = auorg.orgId ");
		ExecuteInfo executeInfo = executeSql(form);
		sql.append(executeInfo.getSql());
		return jdbcTemplate.queryForInt(sql.toString(), executeInfo.getList().toArray());
	}

	private ExecuteInfo executeSql(UserInfoSearchForm form) {

		StringBuilder sql = new StringBuilder();
		List<Object> list = new ArrayList<Object>();
		sql.append(" where 1=1 ");
		if (StringUtils.isNotBlank(form.getName())) {
			sql.append(" and auuser.name like ? ");
			list.add("%" + form.getName() + "%");
		}
		if (StringUtils.isNotBlank(form.getSn())) {
			sql.append(" and auuser.sn like ? ");
			list.add("%" + form.getSn() + "%");
		}
		//		if (null != form.getAccountType()) {
		//			sql.append(" and auuser.accountType = ? ");
		//			list.add(form.getAccountType());
		//		}
		//		if (null != form.getEhrStatus()) {
		//			sql.append(" and auuser.ehrStatus = ? ");
		//			list.add(form.getEhrStatus());
		//		}
		if (null != form.getStatus()) {
			sql.append(" and auuser.status = ? ");
			list.add(form.getStatus());
		}
		if (StringUtils.isNotBlank(form.getEmpNatureId())) {
			sql.append(" and auuser.empNature_spId =? ");
			list.add(form.getEmpNatureId());
		}
		//		if (null != form.getTypes()) {
		//			sql.append(" and ( auuser.type = ? ");
		//			list.add(form.getTypes()[0]);
		//			for (int i = 1; i < form.getTypes().length; i++) {
		//				sql.append(" or auuser.type = ? ");
		//				list.add(form.getTypes()[i]);
		//			}
		//			sql.append(" ) ");
		//		} else {
		//			sql.append(" and auuser.type = ? ");
		//			list.add(form.getStart_type());
		//		}
		if (StringUtils.isNotBlank(form.getMobile())) {
			sql.append(" and auuser.mobile like ? ");
			list.add("%" + form.getMobile() + "%");
		}
		if (StringUtils.isNotBlank(form.getEmail())) {
			sql.append(" and auuser.email like ? ");
			list.add("%" + form.getEmail() + "%");
		}
		if (StringUtils.isNotBlank(form.getCertificatecode())) {
			sql.append(" and auuser.certificateCode like ? ");
			list.add("%" + form.getCertificatecode() + "%");
		}
		if (null != form.getIsTemporary()) {
			sql.append(" and auuser.isTemporary = ? ");
			list.add(form.getIsTemporary());
		}
		if (null != form.getLeftPriority() && null != form.getRightPriority()) {
			sql.append(" and auorg.left_p >= ? ");
			sql.append(" and auorg.right_p <= ? ");
			list.add(form.getLeftPriority());
			list.add(form.getRightPriority());
		}
		if (StringUtils.isNotBlank(form.getOrgId())) {
			sql.append(" and auorg.orgId = ? ");
			list.add(form.getOrgId());
		}
		sql.append(" and auuser.isDel = 0 ");
		return new ExecuteInfo(sql.toString(), list);
	}

}
