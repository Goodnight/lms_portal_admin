<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>无标题文档</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
	<div class="ngreyborder changeblue2 mt20">
		<h2 class="png_bg">具体行为数据</h2>
		<div class="courseupload pt15">
			<form action="${basepath}/survey/detail/schedule.html" method="post">
				<div class="cl pl10 pr10">
					<div class="z">
						具体数据行为<select id="category" name="category">
							<c:forEach var="surveyCategoryList" items="${surveyCategoryList}">
								<option
									<c:if test="${icId eq surveyCategoryList.icId}">selected="selected"</c:if>
									value="${surveyCategoryList.icId} ">${surveyCategoryList.name}</option>
							</c:forEach>
						</select>
					</div>
					<div class="y" id="chartchoice">
						图表 <label class="ml12"><input id="type" name="type"
							<c:if test="${type=='1'}">checked="checked"</c:if> type="radio"
							value="1" class="vm mr5" />一览表</label><label class="ml12"><input
							id="type" name="type" type="radio"
							<c:if test="${type=='2'}">checked="checked"</c:if> value="2"
							class="vm mr5" />柱状图</label>
					</div>
				</div>
				<div class="taR cl">
					<input name="" type="submit" class="searchbutton m10" value="查询"
						hidefocus="true" style="height: 30px;" /><input name=""
						type="button" class="searchbutton m10" value="清空" hidefocus="true"
						style="height: 30px;" /> <input type="hidden" id="userid"
						name="userid" value="${userid }" /> <input type="hidden"
						id="surveyId" name="surveyId" value="${surveyId }" />
				</div>
			</form>

			<div>
				<div
					class="dataTables_wrapper mt10 <c:if test="${type!='1'}">hidden</c:if>"
					style="padding-bottom: 0">
					<table class="datatable" width="100%">
						<thead>
							<tr>
								<th rowspan="2">题目</th>
								<th rowspan="2">自评</th>
								<th rowspan="2">AVG</th>
								<th colspan="${fn:length(surveyReportBos[0].otherAssessment)}">观察者</th>
							</tr>
							<tr>
								<c:forEach var="user" items="${surveyReportBos}" begin="0"
									end="0">
									<c:forEach var="otherAssessment"
										items="${user.otherAssessment}">
										<td>${otherAssessment.name}</td>
									</c:forEach>
								</c:forEach>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="au" items="${surveyReportBos}" varStatus="st">
								<tr
									class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
									<td>${au.name}</td>
									<td>${au.selfAssessment}</td>
									<td><c:if test="${au.avgAssessment != 'NaN'}">${au.avgAssessment}</c:if></td>
									<c:forEach var="otherAssessment" items="${au.otherAssessment}">
										<td>${otherAssessment.score}</td>
									</c:forEach>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>

				<div
					class="dataTables_wrapper mt10 <c:if test="${type!='2'}">hidden</c:if>"
					style="padding-bottom: 0">
					<table class="datatable" width="100%">
						<thead>
						</thead>
						<tbody>
							<c:forEach var="list" items="${surveyHistogramBos }">
								<tr class="gradeA odd">
									<td rowspan="6" align="left" width="20%">${list.name}</td>
									<td width="20%">总量：${list.totalScore}</td>
									<td></td>
								</tr>
								<tr class="gradeA even">
									<td>S分数：${list.selfScore }</td>
									<td class="taL pl10"><span class="voteunit2"><em
											style="width: ${list.selfScore/list.totalScore*100}%"><label>&nbsp;</label></em></span></td>
								</tr>
								<tr class="gradeA odd">
									<td>M分数：${list.mAvgScore}</td>
									<td class="taL pl10"><span class="voteunit2"><em
											style="width: ${list.mAvgScore/list.totalScore*100}%"><label>&nbsp;</label></em></span></td>
								</tr>
								<tr class="gradeA even">
									<td>D分数：${list.dAvgScore}</td>
									<td class="taL pl10"><span class="voteunit2"><em
											style="width: ${list.dAvgScore/list.totalScore*100}%"><label>&nbsp;</label></em></span></td>
								</tr>
								<tr class="gradeA odd">
									<td>C分数：${list.cAvgScore}</td>
									<td class="taL pl10"><span class="voteunit2"><em
											style="width: ${list.cAvgScore/list.totalScore*100}%"><label>&nbsp;</label></em></span></td>
								</tr>
								<tr class="gradeA even">
									<td>O分数：${list.oAvgScore}</td>
									<td class="taL pl10"><span class="voteunit2"><em
											style="width: ${list.oAvgScore/list.totalScore*100}%"><label>&nbsp;</label></em></span></td>
								</tr>
							</c:forEach>
						</tbody>

					</table>

				</div>

			</div>
		</div>
	</div>
	<jsp:include page="/WEB-INF/page/include/script.jsp" />
</body>


</html>









