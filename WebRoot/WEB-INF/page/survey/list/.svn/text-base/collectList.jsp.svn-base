<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>        
	<div
		style="margin: 30px 0 20px 30px;; font-size: 14px; font-weight: bold;">
		<c:forEach items="${remarkDetail.data }" var="res" begin="0" end="0">
		${res.item.question} 
		</c:forEach>
	</div>
	<div class="dataTables_wrapper">
		<c:forEach items="${remarkDetail.data }" var="rd" varStatus="rds">
			<div>${rd.replyer.name } : <c:out value="${(remarkDetail.page.no-1)*10+rds.index+1}"/> : ${rd.remark }</div>
		</c:forEach>
	</div>
<!-- 分页对象 -->
<c:set var="pager" value="${remarkDetail.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>