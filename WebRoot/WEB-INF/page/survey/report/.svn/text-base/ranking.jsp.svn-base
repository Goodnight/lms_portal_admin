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
		<h2 class="png_bg">行为排名</h2>
		<div class="courseupload pt15">
			<div>
				<div class="dataTables_wrapper mt10" style="padding-bottom: 0">
					<table class="datatable" width="100%">
						<thead>
							<tr>
								<th width="40%">问题</th>
								<th width="30%">所属行为</th>
								<th width="15%">自评</th>
								<th width="15%">观察员</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="list" items="${list }">
								<tr class="gradeA odd">
									<td>${list.question }</td>
									<td>${list.category }</td>
									<td>${list.selfAssessment }</td>
									<td>${list.avgAssessment }&nbsp;${list.flag}</td>
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

