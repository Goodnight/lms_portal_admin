<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<c:forEach var="node" items="${nodes }">
	<c:choose>
		<c:when test="${fn:length(node.subs)>0 }">
			<li>
				<span onclick="${clickName }('${node.type }','${node.id }','${node.name }')">${node.name }</span>
				<ul>
					<c:set var="nodes" value="${node.subs }" scope="request"></c:set>
					<c:set var="clickName" value="${clickName }" scope="request"></c:set>
					<jsp:include page="/WEB-INF/page/list/auth/node.jsp"></jsp:include>
				</ul>
			</li>
		</c:when>
		<c:otherwise>
			<li><span onclick="${clickName }('${node.type }','${node.id }','${node.name }')">${node.name }</span></li>
		</c:otherwise>
	</c:choose>
</c:forEach>