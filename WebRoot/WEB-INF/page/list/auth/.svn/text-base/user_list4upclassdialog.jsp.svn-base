<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
     	<colgroup>
         	<col width="25%" />
         	<col width="25%" />
             <col width="25%" />
         	<col width="25%" />       
     	</colgroup>
     	<thead>
         	<tr>
             	<th></th>
                 <th>部门名称</th>
             	<th>员工编号</th>
             	<th>员工姓名</th>
             </tr>
         </thead>
         <tbody>
         	<c:forEach var="u" items="${list.data }" varStatus="st">
         		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	             	<td><input type="checkbox"  id="${u.uid }" username="${u.name }" value="添加"  onclick="add(this)"/></td>
	                 <td>${u.org.name }</td>
	                 <td>${u.sn }</td>
	             	<td>${u.name }</td>
	             </tr>
         	</c:forEach>
         </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>