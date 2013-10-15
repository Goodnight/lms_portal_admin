<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<br/>
<table  class="datatable"  width="100%">
<tbody>
   	<tr>
       	<th></th>
       	<th>培训计划</th>
       	<th>培训班编号</th>
        <th>培训班名称</th>
        <th>预期举办时间</th>
        <th>每期人数</th>
        <th>实施状态</th>
    </tr>
    <c:forEach var="tc" items="${list.data }" varStatus="st">
    	<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	    	<td>
	    		<input name="planedclass" type="radio" value="${tc.tcId}" class="checkbox"}"/>
	    	</td>
	    	<td>${tc.plan.name }</td>
	       	<td>${tc.sn }</td>
	        <td>${tc.name }</td>
	        <td>${tc.start_date }</td>
	        <td>${tc.attendNum }</td>
	        <td>
	        	<c:if test="${tc.status == 0}">不限</c:if>
	        	<c:if test="${tc.status == 1}">新建</c:if>
	        	<c:if test="${tc.status == 2}">实施</c:if>
	        	<c:if test="${tc.status == 3}">完成</c:if>
	        	<c:if test="${tc.status == 4}">计划中</c:if>
	        </td>
	    </tr>
    </c:forEach>
</tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>