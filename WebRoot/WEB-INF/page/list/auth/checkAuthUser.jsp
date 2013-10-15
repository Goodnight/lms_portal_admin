<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th>员工编号</th>
            <th>员工姓名</th>
            <th>所属部门</th>
            <th>手机号码</th>
            <th>邮箱</th> 
         </tr>
     </thead>
     <tbody>
        <c:forEach items="${urbList.data }" var="ur" varStatus="st">
            <tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
                <td>${ur.user.sn }</td>
                <td>${ur.user.name }</td>
                <td>${ur.user.org.name }</td>
                <td>${ur.user.mobile }</td>
                <td>${ur.user.email }</td>
            </tr>
        </c:forEach>
     </tbody>
</table>
<div class="reHeight pager">
    <!-- 分页对象 -->
    <c:set var="pager" value="${urbList.page }" scope="request"></c:set>
    <!-- 分页回调函数 -->
    <c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
    <jsp:include page="/WEB-INF/page/list/pager.jsp"/>
</div>
