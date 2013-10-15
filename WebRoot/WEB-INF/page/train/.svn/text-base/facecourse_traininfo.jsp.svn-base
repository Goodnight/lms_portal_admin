<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>面授管理</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
	<form id="form1">
		<input type="hidden" id="importType" name="importType"
			value="trainFaceManage" /> <input type="hidden" id="objId"
			name="objId" value="${tcid }" />

	</form>
	<div class="blackall hidden">&nbsp;</div>
	<div id="dialog" class="hidden">
		<div class="blackall">&nbsp;</div>
		<div class="newwindow">
			<!-- 查看改进计划弹窗 -->
			<div class="taR">
				<a href="javascript:;"><img class="png_bg closebutton"
					src="${basepath }/images/close.png" width="40" height="40" /></a>
			</div>
			<div id="dialog_content"></div>
		</div>
	</div>
	<div class="container">
		<jsp:include page="/WEB-INF/page/include/header.jsp" />
		<div class="breadCrumbHolder breadCrumbPage">
			<div class="headerco">
				<div class="breadCrumb reHeight noborder" id="breadCrumb3">
					<div class="z">
						<ul>
							<li class="first"><a href="${basepath }/index.html">首页</a></li>
							<li><a href="${basepath }/trainclass/index.html">培训班管理</a></li>
							<li>${tc.name }</li>
							<li class="last">面授管理</li>
						</ul>
					</div>
					<div class="y"></div>
				</div>
			</div>
		</div>

		<div class="content">
			<ul class="window_nav">
				<li class="basic"><a href="information.html?tcid=${tcid }"
					class="green png_bg">基本信息</a></li>
				<li class="course"><a href="course.html?tcid=${tcid }"
					class="green png_bg">课程设置</a></li>
				<li class="person"><a href="staffing.html?tcid=${tcid }"
					class="green png_bg">人员设置</a></li>
				<li class="sameclass"><a href="videoclass.html?tcid=${tcid }"
					class="green png_bg">同步课堂</a></li>
				<li class="examadmin"><a href="examination.html?tcid=${tcid }"
					class="green png_bg">考试管理</a></li>
				<li class="evaluate"><a href="estimate.html?tcid=${tcid }"
					class="green png_bg">评估设置</a></li>
				<c:choose>
					<c:when test="${tc.way.name eq '在线' }">
						<li class="faceadmin"><a href="#" class="png_bg">面授管理</a></li>
					</c:when>
					<c:otherwise>
						<li class="faceadmin"><a href="facecourse.html?tcid=${tcid }"
							class="png_bg">面授管理</a></li>
					</c:otherwise>
				</c:choose>
				<li class="discuss"><a href="bbs.html?tcid=${tcid }"
					class="grey png_bg">讨论区管理</a></li>
				<li class="trainsta"><a href="statistics.html?tcid=${tcid }"
					class="grey png_bg">培训统计</a></li>
				<!-- 
				<c:choose>
					<c:when test="${tc.isGrantCertificate==1 }">
						<li class="certificate"><a
							href="certificate.html?tcid=${tcid }" class="grey png_bg">证书发布</a></li>
					</c:when>
					<c:otherwise>
						<li class="certificate"><a href="#" class="grey png_bg">证书发布</a></li>
					</c:otherwise>
				</c:choose>
				 -->
			</ul>
			<div class="window sclassroom">
				<!-- 建设中提示 -->
				<div style="text-align: center; font-size: 20px" class="hidden">
					功能完善中，请等待...</div>
				<div class="">
					<ul class="dpnav reHeight">
						<li ${tag eq "info"?"class='now'":"" }>面授培训信息</li>
						<li ${tag eq "base"?"class='now'":"" }>基本信息</li>
						<li ${tag eq "bill"?"class='now'":"" }>准备清单</li>
					</ul>
					<div></div>
					<div>
						<div class='${tag eq "info"?"":"hidden" }'>
							<!-- 员工考勤情况 -->
							<div class="searchblock">
								<table border="0" cellspacing="0" cellpadding="0" width="100%">
									<tr>
										<td colspan="4" class="taL"
											style="font-size: 14px; padding-left: 30px">查询</td>
									</tr>
									<tr>
										<td class="taR" width="100">员工编号</td>
										<td class="taL" width="350"><input id="query_sn"
											type="text" class="input" /></td>
										<td class="taR">员工姓名</td>
										<td class="taL"><input id="query_name" type="text"
											class="input" /></td>
									</tr>
									<tr>
										<td class="taR">报到情况</td>
										<td class="taL"><label class="autowidth"><span
												class="option choosed"><input name="status"
													type="radio" value="" checked="checked" /></span> 不限</label> <label
											class="autowidth"><span class="option"><input
													name="status" type="radio" value="2" /></span> 已报到</label> <label
											class="autowidth"><span class="option"><input
													name="status" type="radio" value="1" /></span> 未报到</label></td>
										<td class="taR">改进计划</td>
										<td class="taL"><label class="autowidth"><span
												class="option choosed"><input name="hasImprove"
													type="radio" value="" checked="checked" /></span> 不限</label> <label
											class="autowidth"><span class="option"><input
													name="hasImprove" type="radio" value="1" /></span> 有</label> <label
											class="autowidth"><span class="option"><input
													name="hasImprove" type="radio" value="0" /></span> 无</label></td>
									</tr>
									<tr>
										<td class="taR">参与方式</td>
										<td class="taL" colspan="3"><label class="autowidth"><span
												class="option choosed"><input name="applyWay"
													type="radio" value="" checked="checked" /></span> 不限</label> <label
											class="autowidth"><span class="option"><input
													name="applyWay" type="radio" value="1" /></span> 直接指定</label> <label
											class="autowidth"><span class="option "><input
													name="applyWay" type="radio" value="2" /></span> 部门指派</label> <label
											class="autowidth"><span class="option"><input
													name="applyWay" type="radio" value="0" /></span> 人员报名</label> <label
											class="autowidth"><span class="option"><input
													name="applyWay" type="radio" value="3" /></span> 部门名额指派</label> <label
											class="autowidth"><span class="option"><input
													name="applyWay" type="radio" value="4" /></span> 临时账号指定</label></td>
									</tr>
									<tr>
										<td colspan="4" class="taR"><input
											id="btn_search_checkin" type="button"
											class="searchbutton m10" value="搜索" hidefocus="true" /></td>
									</tr>
								</table>
							</div>
							<div>
								<div class="mr10 ml12 mt20">
									<span>学员面授培训信息</span> <span class="y"> <a
										href="${basepath }/trainclass/checkin/new.html?tcid=${tcid}"
										class="functionbutton">新建考勤情况</a>
									</span>
								</div>
								<div id="list_checkin" class="dataTables_wrapper mt10"
									style="margin-top: 3px"></div>
							</div>
						</div>

						<!-- 员工费用  -->
						<div class='${tag eq "base"?"":"hidden" }'>
							<div class="searchblock">
								<table border="0" cellspacing="0" cellpadding="0">
									<colgroup>
										<col width="100" />
										<col width="150" />
										<col width="100" />
										<col width="150" />
									</colgroup>
									<tr>
										<td colspan="4" class="taL"
											style="font-size: 14px; padding-left: 30px">查询</td>
									</tr>
									<tr>
										<td class="taR">员工编号</td>
										<td class="taL"><input id="query_budget_sn" type="text"
											class="input" /></td>
										<td class="taR">员工姓名</td>
										<td class="taL"><input id="query_budget_name" type="text"
											class="input" /></td>
										<td class="taR"><input id="btn_budget_query"
											type="button" class="searchbutton m10" value="搜索"
											hidefocus="true" /></td>
									</tr>
								</table>
							</div>
							<div class="searchblock mt20">
								<table border="0" cellspacing="0" cellpadding="0">
									<colgroup>
										<col width="100" />
									</colgroup>
									<tr>
										<td class="taR">开始日期</td>
										<td class="taL">${tc.start_date }</td>
									</tr>
									<tr>
										<td class="taR">结束日期</td>
										<td class="taL">${tc.end_date }</td>
									</tr>
									<tr>
										<td class="taR">培训内容</td>
										<td class="taL">${tc.content }</td>
									</tr>
									<tr>
										<td class="taR">培训目的</td>
										<td class="taL">${tc.purpose }</td>
									</tr>
									<tr>
										<td class="taR">地点</td>
										<td class="taL">${tc.address }</td>
									</tr>
									<tr>
										<td class="taR">主办单位</td>
										<td class="taL" colspan="3">${tc.dep.name }</td>
									</tr>
								</table>
							</div>
							<div class="mr10 ml12 mt20 taR">
								<span><a id="leadin" href="#" class="functionbutton">导入</a></span>
								<span><a id="btn_budget_save" href="javascript:;"
									class="functionbutton">保存</a></span>
							</div>
							<div id="list_budget" class="dataTables_wrapper"
								style="margin-top: 3px"></div>
						</div>

						<!-- 设备 -->
						<div class='${tag eq "bill"?"":"hidden" }'>
							<div class="searchblock">
								<table border="0" cellspacing="0" cellpadding="0">
									<colgroup>
										<col width="100" />
										<col width="150" />
										<col width="100" />
										<col width="150" />
										<col width="100" />
									</colgroup>
									<tr>
										<td class="taL">培训班编号</td>
										<td class="taL">${tc.sn }</td>
										<td class="taL">培训班名称</td>
										<td class="taL">${tc.name }</td>
									</tr>
									<tr>
										<td class="taL">培训内容</td>
										<td class="taL">${tc.content }</td>
										<td class="taL">培训人数</td>
										<td class="taL">${tc.attendNum }</td>
									</tr>
									<tr>
										<td class="taL">培训开始日期</td>
										<td class="taL">${tc.start_date }</td>
										<td class="taL">培训结束日期</td>
										<td class="taL">${tc.end_date }</td>
									</tr>
								</table>
							</div>
							<div>
								<div class="taR mt20 mr10">
									<a id="btn_bill_save" href="#" class="functionbutton"
										hidefocus="true">保存</a> <a
										href="${basepath }/trainclass/facecourse.html?tag=bill&tcid=${tcid}"
										class="functionbutton" hidefocus="true">重置</a>
										<a href="javascript:;" class="functionbutton" hidefocus="true" onclick="export_inventoryList('${tcid}')">导出</a>
								</div>
								<form id="form_bill">
									<table width="100%" border="0" cellspacing="0" cellpadding="0"
										class="mt10">
										<thead>
											<tr>
												<th>序号</th>
												<th>标准准备清单项目</th>
												<th><input name="" type="checkbox" value=""
													class="vm checkbox cls_all1" />本次培训应准备</th>
												<th><input name="" type="checkbox" value=""
													class="vm checkbox cls_all2" />当前准备完成否</th>
											</tr>
										</thead>
										<tbody>
											<c:forEach var="sp" items="${spList }" varStatus="st">
												<c:set var="in" value="0" scope="request"></c:set>
												<c:set var="f" scope="request"></c:set>
												<c:forEach var="f" items="${billList }">
													<c:if test="${sp.spId eq f.detail.spId }">
														<c:set var="in" value="1" scope="request"></c:set>
														<c:set var="f" value="${f }" scope="request"></c:set>
													</c:if>
												</c:forEach>
												<c:choose>
													<c:when test="${in eq '1' }">
														<tr class="${st.index%2==0?'grey':'' }">
															<td>${st.index+1 }</td>
															<td>${sp.name }</td>
															<td><input name="spId" type="checkbox"
																value="${sp.spId }" class="vm checkbox cls_ck1"
																checked="checked" /></td>
															<td><input id="${sp.spId }" name="ready"
																type="checkbox" value="${sp.spId }"
																class="vm checkbox cls_ck2"
																${f.isComplete==1?'checked=checked':'' } /></td>
														</tr>
													</c:when>
													<c:otherwise>
														<tr class="${st.index%2==0?'grey':'' }">
															<td>${st.index+1 }</td>
															<td>${sp.name }</td>
															<td><input name="spId" type="checkbox"
																value="${sp.spId }" class="vm checkbox cls_ck1" /></td>
															<td><input id="${sp.spId }" name="ready"
																type="checkbox" value="${sp.spId }"
																class="vm checkbox cls_ck2" /></td>
														</tr>
													</c:otherwise>
												</c:choose>
											</c:forEach>
										</tbody>
									</table>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="windowlast">
				<p>
					<input name="" type="button" class="step vm" value="上一步"
						hidefocus="true"
						onClick="location.href='estimate.html?tcid=${tcid}'" /> <input
						name="" type="button" class="step vm" value="下一步"
						hidefocus="true" onClick="location.href='bbs.html?tcid=${tcid }'" />
					<a href="#" class="back ml30 vm allclose" hidefocus="true">关闭</a>
				</p>
			</div>
		</div>
	</div>
	<jsp:include page="/WEB-INF/page/include/script.jsp" />
	<script type="text/javascript">
		var tcid = "${tcid}";
	</script>
	<script type="text/javascript"
		src="${basepath }/js/train/facecourse_traininfo.js" charset="gbk"></script>
		<jsp:include page="/WEB-INF/page/include/download.jsp"></jsp:include>
		<jsp:include page="/WEB-INF/page/include/upload.jsp"></jsp:include>
</body>
</html>
