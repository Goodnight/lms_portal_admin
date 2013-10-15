<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<thead>
		<tr>
			<th>用户姓名</th>
		</tr>
	</thead>
	<tbody>


		<c:forEach items="${srBo.data }" var="r" varStatus="st">
			<tr class="gradeA odd">
				<td>${r.replyer.name }</td>
			</tr>
		</c:forEach>
	</tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${srBo.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp" />

