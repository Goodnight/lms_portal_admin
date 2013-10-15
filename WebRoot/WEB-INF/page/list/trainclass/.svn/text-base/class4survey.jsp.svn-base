<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<thead>
    	<tr>
        	  <th width="20"></th>
              <th class="sorting" width="400" >培训班名称</th>
              <th class="sorting" width="200" >时间</th>
              <th class="sorting" width="100" >培训方式</th>
              <th class="sorting" width="90">状态</th>
        </tr>
      </thead>
      <tbody>
      	<c:forEach var="t" items="${list.data }" varStatus="st">
	  		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	     		<td>
     				<input name="cid" type="radio" value="${t.tcId }" class="checkbox cls_chooseitem" />
     				<input type="hidden" id="${t.tcId }" value="${t.name }" />
	     		</td>
	           <td>${t.name}</td>
	           <td>${t.start_date } 到${t.end_date }</td>
	           <td>${t.way.name }</td>
	           <td>
	           		<c:choose>
	           			<c:when test="${t.status==1 }">新建</c:when>
	           			<c:when test="${t.status==2 }">实施</c:when>
	           			<c:when test="${t.status==3 }">完成</c:when>
	           			<c:when test="${t.status==4 }">计划</c:when>
	           			<c:otherwise>不限</c:otherwise>
	           		</c:choose>
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