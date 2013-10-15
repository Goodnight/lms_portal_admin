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
		<h2 class="png_bg">行为数据一览</h2>
		<div class="courseupload pt15">
			<div>
				<div class="dataTables_wrapper mt10" style="padding-bottom: 0">
					<table class="datatable" width="100%">
						<thead>
							<tr>
								<th rowspan="2">分类</th>
								<th rowspan="2">自评</th>
								<th rowspan="2">AVG</th>
								<th colspan="${fn:length(list[0].otherAssessment)}">观察者</th>
							</tr>
							<tr>
								<c:forEach var="user" items="${list}" begin="0" end="0">
									<c:forEach var="otherAssessment"
										items="${user.otherAssessment}">
										<td>${otherAssessment.name}</td>
									</c:forEach>
								</c:forEach>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="au" items="${list}" varStatus="st">
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
			</div>
		</div>
	</div>
	<p class="mt10">注：M：上级，S：自己，C：同事，D：下级，O：其他。</p>
	<jsp:include page="/WEB-INF/page/include/script.jsp" />
</body>

</html>










