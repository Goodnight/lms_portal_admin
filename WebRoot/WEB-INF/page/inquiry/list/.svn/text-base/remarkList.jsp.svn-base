<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>        
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th width="20%">用户姓名</th>
            <th>回答内容</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${remarkDetail.data }" var="rd" varStatus="rds">
        <tr class="gradeA <c:out value="${rds.index%2==0?'even':'odd' }"/>"> 
            <td>${rd.replyer.name }</td>
            <td>${rd.remark }</td>
        </tr>
        </c:forEach>
    </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${remarkDetail.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pageFn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>
