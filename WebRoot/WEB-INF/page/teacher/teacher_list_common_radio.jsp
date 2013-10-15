<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table border="0" cellspacing="0" cellpadding="0" width="100%">
     	<colgroup>
         	<col width="25%" />
         	<col width="25%" />
             <col width="25%" />
         	<col width="25%" />       
     	</colgroup>
     	<thead>
         	<tr>
             	<th></th>
                 <th>所在部门</th>
             	<th>员工编号</th>
             	<th>员工姓名</th>
             </tr>
         </thead>
         <tbody>
         	<c:forEach var="t" items="${list.data }" varStatus="st">
         		<tr class="<c:out value="${st.index%2==0?'grey':'' }" />">
             		<td>
             			<input type="radio" name="uid" value="${t.teacher.uid }" />
             			<input type="hidden" id="${t.teacher.uid }" value="${t.teacher.name }" />
             		</td>
                 	<td>${t.teacher.org.name }</td>
                 	<td>${t.teacher.sn }</td>
             		<td>${t.teacher.name }</td>
	             </tr>
         	</c:forEach>
         </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>