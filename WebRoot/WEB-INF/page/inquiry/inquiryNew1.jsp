<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title><c:if test="${flag == '0' }">新建需求调查</c:if> <c:if
		test="${flag == '1' }">修改需求调查</c:if></title>
<jsp:include page="/WEB-INF/page/include/css_bootstrap.jsp"></jsp:include>
</head>
<body class="bg">
	<form id="form1" class="hide">
		<input type="hidden" id="importType" name="importType" value="surveyInquiry" />
		<input type="hidden" id="objId" name="objId" value="1" />
	</form>
	<input id="sId" type="hidden" value="${sId}" />
	<!-- 对话框 -->
	<div id="dialog" class="hide">
		<div class="blackall_new">&nbsp;</div>
		<!-- 半透明背景 -->
		<div class="newwindow inquiry" id="choosepersonco">
			<!-- 关闭按钮 -->
			<div class="taR">
				<a href="javascript:;"><img class="png_bg closed"
					src="${basepath }/images/close.png" width="40" height="40" /></a>
			</div>
			<!-- 对话框内容 -->
			<div id="dialog_content" class="cl"></div>
		</div>
	</div>
	<div class="blackall hide">&nbsp;</div>
	<div class="treewindow">
		<div id="org_jstree" class="demo treedemo"></div>
		<div class="mt10 pull-right" >
			<input name="1" type="button" class="btn btn-info btn-small step mr5 vm treewindowsure"
				value="确定" />&nbsp;<a href="javascript:;" class="btn btn-small mr5 back vm treewindowback">取消</a>
		</div>
	</div> 
	<div class="newwindow tp hide" id="chooseboard">
		<div class="taR">
			<a href="javascript:;"><img class="png_bg closed"
				src="${basepath}/images/close.png" width="40" height="40" /></a>
		</div>
		<div class="scroll">
			<div class="ngreyborder changeblue2 mt20">
				<h5 class="png_bg">模板列表</h5>
				<div class="searchblock mt40">
					<table width="100%">
						<tr>
							<td width="100" class="taR">模板名称</td>
							<td class="taL"><input type="text" class="input" id="tlName"
								name="tlName" /></td>
						</tr>
						<tr>
							<td colspan="2" class="taR"><input type="button"
								class="btn btn-info btn-small searchbutton m10" value="搜索" onclick="page1(1)" /></td>
						</tr>
					</table>
				</div>
				<div>
					<div id="list_inquiryTpList" class="pd5"></div>
					<div align="right" class="mr10">
						<input name="" type="button" class="btn btn-info btn-small step m10 windowbutton"
							value="确定" onclick="getTpInfo()" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="newwindow hidden" id="release">
		<div class="taR">
			<a href="javascript:;"><img class="png_bg closed"
				src="${basepath }/images/close.png" width="40" height="40" /></a>
		</div>
		<div class="ngreyborder changeblue2 mt20">
			<h2 class="png_bg">发布模板</h2>
			<div class="basic_information mt2">
				<div>发布内容放这里</div>
				<div align="right" class="mr10">
					<p>
						<input name="" type="button" class="step m10" value="保存" /><input
							name="" type="button" class="step m10 windowbutton2" value="发布" /><input
							name="" type="button" class="back m10 windowbutton2" value="关闭" />
					</p>
					<p>模板可编辑。点击发布,模板方可使用</p>
				</div>
			</div>
		</div>
	</div>
	<div>
		<jsp:include page="/WEB-INF/page/include/header_bootstrap.jsp"></jsp:include>
		<div class="row-fluid">
			<div id="breadcrumbs" class="pfb">
						<ul class="breadcrumb offset1">
							<li class="first">
								<i class="icon-home"></i> 
								<a href="${basepath }/index.html">首页</a><span class="divider"><i class="icon-angle-right"></i></span></li>
							<li><a href="${basepath }/inquiry/inquiryIndex.html">培训需求</a><span class="divider"><i class="icon-angle-right"></i></span>
							</li>
							<li class="last"><c:if test="${flag == '0' }">新建需求调查</c:if>
								<c:if test="${flag == '1' }">修改需求调查</c:if></li>
						</ul>
			</div>
			<br>
			<br>
			<br>
			<br>

			

		<div class="content cl">
			<div class="ngreyborder changeblue2 mt37">
				<h5 class="png_bg">
					<c:if test="${flag == '0' }">新建需求调查</c:if>
					<c:if test="${flag == '1' }">修改需求调查</c:if>
				</h5>
				<form id="inquiry" action="saveInquiry.html" method="post">
				    <input name="status" type="hidden" value="${inquiry.status }" />
					<input id="itId" name="stId" type="hidden"
						value="${inquiry.template.stId}" /> <input id="sId" name="sId"
						type="hidden" value="${inquiry.sId}" />
					<div class="courseupload basic_information pl50 pr50"
						style="padding-top: 10px">
						<table border="0" cellspacing="15" cellpadding="15">
							<colgroup>
								<col width="90" />
							</colgroup>
							<tbody>
								<!-- ----------------------------------------------------------------------------------------------- -->
								<c:if test="${isModify=='1' || isModify==null }">
									<tr>
										<td><em>*</em>主题</td>
										<td colspan="3"><input id="topic" name="topic"
											type="text" class="input vm" value="${inquiry.topic}" /><input
											name="oriName" type="hidden" value="${inquiry.topic }" />
											<div id="topic_error"></div>
											</td>
											
									</tr>
									<tr>
										<td class="w150"><em>*</em>开始时间</td>
										<td><input id="startDate" name="startDate" type="text"
											class="input vm si" value="${inquiry.startDt}"
											readonly="readonly" />
											<div id="startDate_error"></div>
											</td>
										<td class="w150"><em>*</em>结束时间</td>
										<td><input id="endDate" name="endDate" type="text"
											class="input vm si" value="${inquiry.endDt}"
											readonly="readonly" />
											<div id="endDate_error"></div>
											</td>
									</tr>
									<tr>
										<td><em>*</em>选择模板</td>
										<td ><input id="tpName" name="tpName"
											type="text" class="input vm si"
											value="${inquiry.template.name}" readonly="readonly" />&nbsp;&nbsp; <!-- <span class="vm"
											id="leadin">导入模板</span></td> -->
											<div id="tpName_error">
										</td>
										<td colspan="2" class="vat">
											<span
											class="btn btn-small btn-info" onclick="page1(1)">选择模板</span>
										</td>
									</tr>
								</c:if>

								<!-- ----------------------------------------------------------------------------------------------- -->
								<!-- 20130320禁止修改时isModify=0上半部分不允许修改下半部分可以修改 by LTC -->
								<c:if test="${isModify=='0' }">
									<tr>
										<td><em>*</em>主题</td>
										<td colspan="3"><input id="topic" name="topic"
											type="text" class="input vm" value="${inquiry.topic}"
											readonly="readonly" /><input name="oriName" type="hidden"
											value="${inquiry.topic }" /></td>
									</tr>
									<tr>
										<c:if test="${isDate==null || isDate!='1' }">
											<td class="w150"><em>*</em>开始时间</td>
											<td><input name="startDate" type="text"
												class="input vm si" value="${inquiry.startDt}"
												readonly="readonly" /></td>
											<td class="w150"><em>*</em>结束时间</td>
											<td><input name="endDate" type="text"
												class="input vm si" value="${inquiry.endDt}"
												readonly="readonly" /></td>
										</c:if>
										<c:if test="${isDate=='1' }">
											<td class="w150"><em>*</em>开始时间</td>
											<td><input id="startDate" name="startDate" type="text"
												class="input vm si" value="${inquiry.startDt}"
												readonly="readonly" /></td>
											<td class="w150"><em>*</em>结束时间</td>
											<td><input id="endDate" name="endDate" type="text"
												class="input vm si" value="${inquiry.endDt}"
												readonly="readonly" /></td>
										</c:if>
									</tr>
									<tr>
										<td><em>*</em>选择模板</td>
										<td colspan="3"><input id="tpName" name="tpName"
											type="text" class="input vm si"
											value="${inquiry.template.name}" readonly="readonly" /></td>
									</tr>
								</c:if>
								<!-- ----------------------------------------------------------------------------------------------- -->

								<tr>
									<td colspan="4"><div
											style="height: 1px; line-height: 1px; font-size: 1px; border-top: 1px dashed #ccc;"></div></td>
								</tr>
								<tr>
									<td style="vertical-align: middle">参与部门&nbsp;</td>
									<td class="objectstring" colspan="3" id="newpersonco2">
										<div class="reHeight" style="padding-top: 5px">
											<c:forEach items="${listDep}" var="dep">
												<label class="unitlabel">${dep.dep.name} <!-- 20130330 修改删除未参与人员流程 by LTC -->
													<a href="javascript:deleteDep('${dep.sadId}');" class="ml6"><img src="${basepath}/images/deletegreen.gif" /></a>
													<input type="hidden" id="depIds" name="depIds"
													value="${dep.dep.orgId}" /></label>
											</c:forEach>
										</div>
										<div class="">
											<span id="apply_dep" class="btn btn-small btn-info chooseOrg"
												style="margin-left: 0"><i class="icon-plus"></i> 部门</span>
										</div>
									</td>
								</tr>
								<tr>
									<td colspan="4"><div
											style="height: 1px; line-height: 1px; font-size: 1px; border-top: 1px dashed #ccc;"></div></td>
								</tr>
								<tr>
									<td style="vertical-align: middle">参与人员&nbsp;</td>
									<td class="objectstring" colspan="3" id="newpersonco">
										<div class="reHeight" style="padding-top: 5px">
											<c:forEach items="${listUser}" var="user">
												<label class="speciallabel">${user.user.name} <!-- 20130330 修改删除未参与人员流程 by LTC -->
													<a href="javascript:deleteUser('${user.sauId}');" class="ml6"><img src="${basepath}/images/deletegreen.gif" /></a>
													<input type="hidden" id="userIds" name="userIds"
													value="${user.user.uid}" /><input type="hidden"
													id="userNames" name="userNames" value="${user.user.name}" /></label>
											</c:forEach>
										</div>
										<div class="">
											<span id="btn_user" class="btn btn-small btn-info"><i class="icon-plus"></i> 人员</span>
											<!-- 发布屏蔽  或<span id="btn_leadin" class="vm leadin">导入人员</span> -->
										</div>
									</td>
								</tr>
								<tr>
									<td colspan="4"><div
											style="height: 1px; line-height: 1px; font-size: 1px; border-top: 1px dashed #ccc;">
											<input name="pageNo" type="hidden" value="${pageNo }" />
										</div></td>
								</tr>
								<tr>
									<td style="vertical-align: middle">参与培训班&nbsp;</td>
									<td class="objectstring" colspan="3" id="newpersonco1">
										<div class="reHeight" style="padding-top: 5px">
											<c:forEach items="${listClass}" var="cl">
												<label class="speciallabel">${cl.tc.name} <!-- 20130330 修改删除未参与人员流程 by LTC -->
													<a href="javascript:deleteClass('${cl.sacId}');" class="ml6"><img src="${basepath}/images/deletegreen.gif" /></a>
													<input type="hidden" id="classIds" name="classIds"
													value="${cl.tc.tcId}" /></label>
											</c:forEach>
										</div>
										<div class="">
											<span id="btn_trainClass" class="btn btn-small btn-info" style="margin-left: 0"><i class="icon-plus"></i> 培训班</span>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div align="right" class="mr10">
							<input type="submit" class="btn btn-small btn-info" value="确定" /> 
							<a
								href="#" class="back allclose btn btn-small">关闭</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	</div> 
	<jsp:include page="/WEB-INF/page/include/script_bootstrap.jsp"></jsp:include>
	<script type="text/javascript"
		src="${basepath}/js/inquiry/inquiryNew_bootstrap.js" charset="gbk"></script>
	<jsp:include page="/WEB-INF/page/include/upload.jsp"></jsp:include>
	<script type="text/javascript">
		$(".addStaff").live("click", function() {
			$(this).attr("id", "btn_user");
			$("#btn_leadin").attr("class", "");
		});

		$("#btn_leadin").live("click", function() {
			$(this).attr("class", "leadin");
			$(".addStaff").attr("id", "");
		});
	</script>
</body>
</html>
