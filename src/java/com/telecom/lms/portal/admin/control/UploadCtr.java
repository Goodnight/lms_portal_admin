package com.telecom.lms.portal.admin.control;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.telecom.lms.core.bo.Return;
import com.telecom.lms.core.bo.ReturnImpl;
import com.telecom.lms.core.bo.auth.OrganizationBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.core.bo.model.ExcelReturn;
import com.telecom.lms.core.bo.model.FileInfo;
import com.telecom.lms.portal.admin.util.FileTool;
import com.telecom.lms.portal.admin.util.SessionConstants;
import com.telecom.lms.sdk.service.auth.UserAdminAuthService;
import com.telecom.lms.sdk.service.demand.DmdDepService;
import com.telecom.lms.sdk.service.imp.ImportSurveyTpService;
import com.telecom.lms.sdk.service.imp.ImportTrainCheckinService;
import com.telecom.lms.sdk.service.imp.ImportTrainDiplomaService;
import com.telecom.lms.sdk.service.imp.ImportTrainFaceCourseService;
import com.telecom.lms.sdk.service.imp.ImportTrainFaceManageService;
import com.telecom.lms.sdk.service.imp.authority.ImportUserManageService;
import com.telecom.lms.sdk.service.imp.basedata.ImportOrganizationService;
import com.telecom.lms.sdk.service.imp.basedata.ImportPosition4OrgService;
import com.telecom.lms.sdk.service.imp.basedata.ImportPositionOrgService;
import com.telecom.lms.sdk.service.imp.basedata.ImportUserService;
import com.telecom.lms.sdk.service.imp.credits.ImportUserCreditsService;
import com.telecom.lms.sdk.service.imp.meetingManage.ImportMeetingUserService;
import com.telecom.lms.sdk.service.imp.survey.ImportDepartmentTrainService;
import com.telecom.lms.sdk.service.imp.survey.ImportSurveyService;
import com.telecom.lms.sdk.service.imp.trainclass.ImportOutTrainUserService;
import com.telecom.lms.sdk.service.imp.trainclass.ImportTrainClassService;
import com.telecom.lms.sdk.service.imp.trainclass.ImportTrainUserService;
import com.telecom.lms.sdk.service.meet.MeetingAttendService;
import com.telecom.lms.sdk.service.survey.SurveyAimService;
import com.telecom.lms.sdk.service.survey.SurveyAllowUserService;
import com.telecom.lms.sdk.service.survey.SurveyReplyService;
import com.telecom.lms.sdk.service.survey.SurveyTpService;
import com.telecom.lms.sdk.service.train.TrainClassService;
import com.telecom.lms.sdk.service.train.TrainClassStudentService;
import com.telecom.lms.sdk.service.train.TrainFaceCourseService;
import com.telecom.lms.sdk.util.DateTool;
import com.telecom.lms.sdk.util.OtherUtil;
import com.telecom.lms.sdk.util.WriterExcelUtil;

/**
 * 培训班弹窗中内容的请求处理
 * 
 * @author SJTU
 */

@Controller
@RequestMapping("/upload")
public class UploadCtr {

	private static final Logger log = LoggerFactory.getLogger(UploadCtr.class);

	@Autowired
	ImportUserManageService importUserManageService;

	@Autowired
	ImportOrganizationService importOrganizationService;

	@Autowired
	ImportSurveyTpService importSurveyTpService;

	@Autowired
	ImportTrainUserService importTrainUserService;

	@Autowired
	ImportTrainFaceCourseService importTrainFaceCourseService;

	@Autowired
	ImportTrainCheckinService importTrainCheckinService;

	@Autowired
	ImportTrainDiplomaService importTrainDiplomaService;

	@Autowired
	ImportPositionOrgService importPositionOrgService;

	@Autowired
	ImportPosition4OrgService importPosition4OrgService;

	@Autowired
	ImportUserService importUserService;

	@Autowired
	ImportUserCreditsService importUserCreditsService;

	@Autowired
	ImportTrainClassService importTrainClassService;

	@Autowired
	ImportTrainFaceManageService importTrainFaceManageService;

	@Autowired
	ImportSurveyService importSurveyUserService;

	@Autowired
	ImportDepartmentTrainService importDepartmentTrainService;

	@Autowired
	ImportMeetingUserService importMeetingUserService;

	@Autowired
	ImportOutTrainUserService importOutTrainUserService;

	@Autowired
	ImportSurveyService importSurveyService;

	@Autowired
	TrainClassStudentService classStudentService;

	@Autowired
	TrainFaceCourseService faceCourseService;

	@Autowired
	TrainClassService trainClassService;

	@Autowired
	SurveyAimService surveyAimService;

	@Autowired
	UserAdminAuthService adminAuthService;

	@Autowired
	DmdDepService dmdDepService;

	@Autowired
	SurveyTpService surveyTpService;

	@Autowired
	MeetingAttendService meetingAttendService;

	@Autowired
	SurveyReplyService surveyReplyService;

	@Autowired
	SurveyAllowUserService allowUserService;

	private @Value("#{lmsapi.orgRootId}")
	String orgRootId;

	private @Value("#{level.userType}")
	String userType;

	private @Value("#{lmsapi.baseBatchNum}")
	Integer baseBatchNum;

	private @Value("#{import.user_searchOrgBatchNum}")
	Integer searchOrgBatchNum;

	private @Value("#{import.user_searchUserBatchNum}")
	Integer searchUserBatchNum;

	private @Value("#{import.trainClass_searchHostOrgBatchNum}")
	Integer searchHostOrgBatchNum;

	private @Value("#{import.trainClass_searchEnterOrgBatchNum}")
	Integer searchEnterOrgBatchNum;

	private @Value("#{import.trainClass_searchHostUserBatchNum}")
	Integer searchHostUserBatchNum;

	@RequestMapping(value = "deleteData.html", method = RequestMethod.POST)
	@ResponseBody
	public Return deleteData(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String importType = request.getParameter("importType");
		String batch_number = request.getParameter("batch_number");
		Return returnMessage = null;
		if ("organization".equals(importType)) {

		} else if ("tempUser".equals(importType)) {

		} else if ("inquiry".equals(importType) || "evaluate".equals(importType) || "surveyEvaluate".equals(importType)
				|| "surveyInquiry".equals(importType)) {
			Map<String, String> con = new HashMap<String, String>();
			con.put("batch_number", batch_number);
			returnMessage = surveyTpService.removeByBatchNumber(con);
		} else if ("trainUser".equals(importType) || "outTrainUser".equals(importType)) {
			Map<String, String> con = new HashMap<String, String>();
			con.put("batch_number", batch_number);
			returnMessage = classStudentService.removeStudent(con);
		} else if ("trainFaceCourse".equals(importType)) {
			Map<String, String> con = new HashMap<String, String>();
			con.put("batch_number", batch_number);
			returnMessage = faceCourseService.removeTrainFaceCourse(con);
		} else if ("trainCheckin".equals(importType)) {

		} else if ("trainDiplomaLevel".equals(importType)) {

		} else if ("position".equals(importType)) {

		} else if ("ethnicGroup".equals(importType)) {

		} else if ("addofficialUser".equals(importType)) {

		} else if ("updateofficialUser".equals(importType)) {

		} else if ("userCredits".equals(importType)) {

		} else if ("trainPlan".equals(importType)) {
			Map<String, String> con = new HashMap<String, String>();
			con.put("batch_number", batch_number);
			returnMessage = trainClassService.removeTrainClass(con);
		} else if ("surveyUser".equals(importType)) {
			Map<String, String> con = new HashMap<String, String>();
			con.put("batch_number", batch_number);
			returnMessage = surveyAimService.batchDelete(con);
		} else if ("userManage".equals(importType)) {
			Map<String, String> con = new HashMap<String, String>();
			con.put("batch_number", batch_number);
			adminAuthService.batchRemove(con);
		} else if ("departmentTrain".equals(importType)) {
			Map<String, String> con = new HashMap<String, String>();
			con.put("batch_number", batch_number);
			dmdDepService.removeByBatchNumber(con);
		} else if ("meetingUser".equals(importType)) {
			Map<String, String> con = new HashMap<String, String>();
			con.put("batch_number", batch_number);
			meetingAttendService.removeByBatchNumber(con);
		} else if ("responseResult".equals(importType) || "comprehensiveResult".equals(importType)
				|| "inquiryResult".equals(importType)) {
			surveyReplyService.removeByBatchNumber(batch_number);
			allowUserService.updateAttendByBatchNumber(batch_number, "0");
		} else if ("responseUser".equals(importType) || "comprehensiveUser".equals(importType)) {
			allowUserService.removeByBatchNumber(batch_number);
		}
		return returnMessage;
	}

	@RequestMapping(value = "importObjectData.html", method = RequestMethod.POST)
	@ResponseBody
	@SuppressWarnings("unchecked")
	public ExcelReturn importObjectData(HttpServletRequest request) {

		String importType = request.getParameter("importType");
		String[] objId = request.getParameterValues("objId");
		String loadDataPath = FileTool.BASEPATH + "/upload/";
		String[] path = OtherUtil.getExcelPath(loadDataPath, "");
		File uploadedFile = new File(path[1]);

		try {

			MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
			CommonsMultipartFile cFile = (CommonsMultipartFile) multipartRequest.getFile("filepath");// 获取上传文件
			ExcelReturn excelReturn = null;
			String fileName = "";

			if (null != cFile && !cFile.isEmpty()) {
				// 上传文件
				FileCopyUtils.copy(cFile.getBytes(), uploadedFile);
				String prefix = "";
				if ("generalTrainClass".equals(importType)) {
					UserInfoBo userInfoBo = (UserInfoBo) request.getSession().getAttribute("user");

					List<OrganizationBo> list = (List<OrganizationBo>) request.getSession()
						.getAttribute(SessionConstants.SESSION_MANAGE_ORG_LIST);
					excelReturn = importTrainClassService.impGeneralTrainClass(uploadedFile.getPath(),
						userInfoBo,
						list,
						searchHostOrgBatchNum,
						searchEnterOrgBatchNum,
						searchHostUserBatchNum);
					prefix = "generalTrainClass";

				} else if ("addofficialUser".equals(importType)) {
					List<OrganizationBo> list = (List<OrganizationBo>) request.getSession()
						.getAttribute(SessionConstants.SESSION_MANAGE_ORG_LIST);
					excelReturn = importUserService.importAddOfficialUser(uploadedFile.getPath(),
						list,
						baseBatchNum,
						searchOrgBatchNum);
					prefix = "user";
				} else if ("updateofficialUser".equals(importType)) {
					List<OrganizationBo> list = (List<OrganizationBo>) request.getSession()
						.getAttribute(SessionConstants.SESSION_MANAGE_ORG_LIST);
					excelReturn = importUserService.importUpdateOfficialUser(uploadedFile.getPath(),
						list,
						baseBatchNum,
						searchOrgBatchNum,
						searchUserBatchNum);
					prefix = "user";
				}

				if (null != excelReturn.getExcelInfoBos() && !excelReturn.getExcelInfoBos().isEmpty()) {
					String address = request.getSession().getServletContext().getRealPath("/") + "download/";
					FileInfo fileInfo = OtherUtil.getExportPath(address, prefix);
					fileName = WriterExcelUtil.exportExcel(fileInfo, prefix, prefix, 0, excelReturn.getExcelInfoBos())
						.getName();
				}
			}
			excelReturn.setExcelName(fileName);
			excelReturn.setExcelInfoBos(null);
			return excelReturn;
		} catch (Exception e) {
			log.error("upload import to error", e);
			return null;
		} finally {
			uploadedFile.delete();
		}
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(value = "importData.html", method = RequestMethod.POST)
	@ResponseBody
	public ReturnImpl importData(HttpServletRequest request, HttpServletResponse response) {
		String importType = request.getParameter("importType");
		String[] objId = request.getParameterValues("objId");
		String loadDataPath = FileTool.BASEPATH + "/upload/";
		String fileName = DateTool.getNowDate() + ".xlsx";
		File uploadedFile = new File(loadDataPath + fileName);

		try {
			MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
			importType = multipartRequest.getParameter("importType");
			File dir = new File(loadDataPath);
			if (!dir.exists()) {
				dir.mkdirs();
			}
			CommonsMultipartFile cFile = (CommonsMultipartFile) multipartRequest.getFile("filepath");// 获取上传文件
			ReturnImpl returnImport = null;
			if (null != cFile) {
				if (!cFile.isEmpty()) {
					// 上传文件
					FileCopyUtils.copy(cFile.getBytes(), uploadedFile);
					if ("addOrganization".equals(importType)) {
						returnImport = importOrganizationService.impAddOrganization(uploadedFile.getPath(),
							objId[0],
							objId[1]);
					} else if ("updateOrganization".equals(importType)) {
						returnImport = importOrganizationService.impUpdateOrganization(uploadedFile.getPath());
					} else if ("addTempUser".equals(importType)) {
						returnImport = importUserService.impAddTempUser(uploadedFile.getPath(), orgRootId);
					} else if ("updateTempUser".equals(importType)) {
						returnImport = importUserService.impUpdateTempUser(uploadedFile.getPath());
					} else if ("inquiry".equals(importType) || "evaluate".equals(importType)
							|| "surveyEvaluate".equals(importType) || "surveyInquiry".equals(importType)) {
						OrganizationBo organizationBo = (OrganizationBo) request.getSession()
							.getAttribute(SessionConstants.SESSION_DEFAULT_ORG);
						UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
						returnImport = importSurveyTpService.impTemplet(uploadedFile.getPath(),
							objId[0],
							organizationBo.getOrgId(),
							user.getUid(),
							importType);
					} else if ("trainUser".equals(importType)) {
						returnImport = importTrainUserService.impTrainUser(uploadedFile.getPath(), objId[0], objId[1]);
					} else if ("outTrainUser".equals(importType)) {
						returnImport = importOutTrainUserService.impOutTrainUser(uploadedFile.getPath(), objId[0]);
					} else if ("outTrainUserInfo".equals(importType)) {
						returnImport = importOutTrainUserService.impOutTrainUserInfo(uploadedFile.getPath(), objId[0]);
					} else if ("trainFaceCourse".equals(importType)) {
						returnImport = importTrainFaceCourseService.impFaceCourse(uploadedFile.getPath(), objId[0]);
					} else if ("trainCheckin".equals(importType)) {
						returnImport = importTrainCheckinService.impCheckin(uploadedFile.getPath(), objId[0]);
					} else if ("trainDiplomaLevel".equals(importType)) {
						returnImport = importTrainDiplomaService.impDiplomaLevel(uploadedFile.getPath(),
							objId[0],
							objId[1]);
					} else if ("addStandardPosition".equals(importType)) {
						returnImport = importPositionOrgService.impPosition(uploadedFile.getPath(), objId[0]);
					} else if ("updateStandardPosition".equals(importType)) {
						returnImport = importPositionOrgService.updatePosition(uploadedFile.getPath());
					} else if ("addStandardEthnicGroup".equals(importType)) {
						returnImport = importPositionOrgService.impEthnicGroup(uploadedFile.getPath(), objId[0]);
					} else if ("updateStandardEthnicGroup".equals(importType)) {
						returnImport = importPositionOrgService.updateEthnicGroup(uploadedFile.getPath());
					} else if ("addBlocPosition".equals(importType)) {
						returnImport = importPosition4OrgService.impPosition(uploadedFile.getPath(), objId[0]);
					} else if ("updateBlocPosition".equals(importType)) {
						returnImport = importPosition4OrgService.updatePosition(uploadedFile.getPath());
					} else if ("addBlocEthnicGroup".equals(importType)) {
						returnImport = importPosition4OrgService.impEthnicGroup(uploadedFile.getPath(), objId[0]);
					} else if ("updateBlocEthnicGroup".equals(importType)) {
						returnImport = importPosition4OrgService.updateEthnicGroup(uploadedFile.getPath());
					} else if ("addofficialUser".equals(importType)) {
						List<OrganizationBo> list = (List<OrganizationBo>) request.getSession()
							.getAttribute(SessionConstants.SESSION_MANAGE_ORG_LIST);
						returnImport = importUserService.impAddOfficialUser(uploadedFile.getPath(), list);
					} else if ("updateofficialUser".equals(importType)) {
						List<OrganizationBo> list = (List<OrganizationBo>) request.getSession()
							.getAttribute(SessionConstants.SESSION_MANAGE_ORG_LIST);
						returnImport = importUserService.impUpdateOfficialUser(uploadedFile.getPath(), list);
					} else if ("userCredits".equals(importType)) {
						returnImport = importUserCreditsService.impUserCredits(uploadedFile.getPath(), objId[0]);
					} else if ("trainPlan".equals(importType)) {
						UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
						returnImport = importTrainClassService.impTrainClass(uploadedFile.getPath(),
							objId[0],
							user.getType());
					} else if ("trainFaceManage".equals(importType)) {
						returnImport = importTrainFaceManageService.impTrainFaceManage(uploadedFile.getPath(), objId[0]);
					} else if ("responseUser".equals(importType) || "comprehensiveUser".equals(importType)) {
						UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user");
						returnImport = importSurveyUserService.impResponseUser(uploadedFile.getPath(),
							objId[0],
							user.getUid(),
							importType);
					} else if ("userManage".equals(importType)) {
						returnImport = importUserManageService.impUserManage(uploadedFile.getPath(), objId[0], userType);
					} else if ("departmentTrain".equals(importType)) {
						OrganizationBo organizationBo = (OrganizationBo) request.getSession()
							.getAttribute(SessionConstants.SESSION_DEFAULT_ORG);
						UserInfoBo userInfoBo = (UserInfoBo) request.getSession().getAttribute("user");
						returnImport = importDepartmentTrainService.impDepartmentTrain(uploadedFile.getPath(),
							userInfoBo,
							organizationBo);
					} else if ("meetingUser".equals(importType)) {
						returnImport = importMeetingUserService.impMeetingUser(uploadedFile.getPath(),
							objId[0],
							objId[1]);
					} else if ("responseResult".equals(importType) || "comprehensiveResult".equals(importType)
							|| "inquiryResult".equals(importType)) {
						returnImport = importSurveyService.impResponseResult(uploadedFile.getPath(),
							objId[0],
							importType);
					}
				}
			}
			return returnImport;
		} catch (Exception e) {
			log.error("upload import to error", e);
			return new ReturnImpl("error");
		} finally {
			uploadedFile.delete();
		}

	}
}
