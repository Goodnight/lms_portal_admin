<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
     	<thead>
         	<tr>
             	<th></th>
                 <th>所在部门</th>
             	<th>员工编号</th>
             	<th>员工姓名</th>
             </tr>
         </thead>
         <tbody>
         	<c:forEach var="vu" items="${list.data }" varStatus="st">
         		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
             		<td><input type="button" id="${vu.vuId }"  class="removebutton" onclick="remove(this);"/></td>
                 	<td>${vu.user.org.name }</td>
                 	<td>${vu.user.sn }</td>
             		<td>${vu.user.name }</td>
	             </tr>
         	</c:forEach>
         </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>
