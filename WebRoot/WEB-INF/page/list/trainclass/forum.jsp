<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
<thead>
   	<tr>
       	  <th width="30"></th>
             <th class="sorting">讨论区名称</th>
             <th class="sorting" >创建时间</th>
             <th class="sorting" >创建人</th>
             <th class="sorting" >标签</th>
       </tr>
     </thead>
     <tbody>
     	<c:forEach var="f" items="${list.data }" varStatus="st">
     		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	     		<td>
	     			<input name="forum" type="radio" value="${f.tcfId }" forumname="${f.name }" forumstatus="f.status" class="checkbox"/>
	     		</td>
	           	<td>${f.name }</td>
	           	<td>${f.create_time }</td>
	           	<td>${f.creator.name }</td>
	           	<td></td>
	        </tr>
     	</c:forEach>
     </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>