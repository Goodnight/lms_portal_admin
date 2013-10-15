<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
 	<thead>
     	<tr>
         	<th width="150"  class="sorting">培训班编号</th>
             <th width="150" class="sorting">培训班名称</th>
             <th width="150" class="sorting">主办部门</th>
             <th width="300">时间</th>
             <th width="100" class="sorting">参加人数</th>
             <th width="100">分配指派</th>
         </tr>
     </thead>
     <tbody>
         <c:forEach var="t" items="${list.data }" varStatus="st">
  			<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	           	<td>${t.tc.sn }</td>
	           	<td>${t.tc.name }</td>
	           	<td>${t.tc.dep.name }</td>
	           	<td>${t.tc.start_date } - ${t.tc.end_date }</td>
				<td>${t.tc.attendNum }</td>
	           	<td>
	           		<a id="${t.tcdId }" href="javascript:;" class="chooseperson">
	           			<span>${t.distribution_num }</span>/<span>${t.num }</span>
	           		</a>
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