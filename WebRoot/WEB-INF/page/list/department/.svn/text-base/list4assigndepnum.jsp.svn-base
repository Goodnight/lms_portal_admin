<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@  include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<thead>
    	<tr>
        	<th><input type="checkbox" class="checkbox cls_chooseall_depnum" value="cls_item_depnum"/></th>
            <th>部门名称</th>
            <th>分配人数</th>
        </tr>
      </thead>
      <tbody>
	      	<c:forEach var="dep" items="${list.data }" varStatus="st">
	      		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
		        	<td><input id="${dep.depId }" type="checkbox" class="checkbox cls_item_depnum" /></td>
		            <td>${dep.name }</td>
		            <td><input type="text" style="border:1px solid;"/></td>
		         </tr>
	      	</c:forEach>
       </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pageFn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>