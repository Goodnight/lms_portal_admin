<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table cellspacing="0" cellpadding="0" class="basic_list">
	<thead>
		<tr>
			<th>课程编号</th>
			<th>课程名称</th>
			<th>开始学习时间</th>
			<th>上次学习时间</th>
			<th>学习次数</th>
			<th>学习时长</th>
			<th>学习进度</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach var="ts" items="${list.data }" varStatus="st">
			<tr class="grey">
				<td>${ts.course.res.sn}</td>
				<td>${ts.course.res.name}</td>
				<td>${ts.start_time}<!--<br /> ${tc.sn} -->
				</td>
				<td>${ts.last_time}<!--<br /> ${tc.sn} -->
				</td>
				<td>${ts.times}</td>
				<td>${ts.hour}:${ts.minute}:${ts.second }</td>
				<td>
					<c:if test="${ts.percent>=100}">
						100.0
					</c:if>
					<c:if test="${ts.percent<100}">${ts.percent}</c:if>
				%</td>
			</tr>
		</c:forEach>
	</tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp" />
