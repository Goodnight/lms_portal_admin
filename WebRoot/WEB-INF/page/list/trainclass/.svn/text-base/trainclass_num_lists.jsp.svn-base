<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table cellspacing="0" cellpadding="0" class="basic_list">
	<thead>
		<tr>
			<th>课程编号</th>
			<th>课程名称</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach var="ts" items="${list.data }" varStatus="st">
			<tr class="grey">
				<td>${ts.course.res.sn}</td>
				<td>${ts.course.res.name}</td>
			</tr>
		</c:forEach>
	</tbody>
</table>

<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp" />