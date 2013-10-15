<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>   
 <table class="datatable" width="100%">
    <thead>
    <tr>
           <th>员工编号</th>
           <th>员工姓名</th>
           <th>授权方式</th>
           <th>所属机构</th>
       </tr>
     </thead>
     <tbody>
       <c:forEach items="${attend.data}" var="list" varStatus="st">
        <tr class="<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>">
            <td>${list.user.sn}</td>
            <td><a href="#">${list.user.name}</a></td>
            <td>
  <%--               <c:if test="${list.way == 0 }">直接指定</c:if>
                <c:if test="${list.way == 1 }">部门指定</c:if>
                <c:if test="${list.way == 2 }">培训班指定</c:if> --%>
            </td>
            <td>${list.user.org.name }</td>
         </tr>
        </c:forEach>
        </tbody>                                    
 </table>
<div class="cl">
<!-- 分页对象 -->
<c:set var="pager" value="${attend.page}" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${page_fn}" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp" />
</div>
