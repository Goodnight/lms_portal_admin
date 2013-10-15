<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
  <thead>
    <tr>
      <th>员工编号</th>
      <th>员工姓名</th>
      <th>行为数据</th>
      <th>行为柱状图</th>
      <th>行为排名</th>
     <!--  <th>百分位排名</th> -->
      <th>具体行为数据</th>
    </tr>
  </thead>
  <tbody>
  	<c:forEach var="au" items="${list.data }" varStatus="st">
  		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>" id="${au.saId }" surveyId="${au.survey.sId}">
	      <td>${au.objectSn }</td>
	      <td>${au.objectName }</td>
	      <td><a href="#" class="cls_report" report="all" userid="${au.objectId }">行为数据一览</a></td>
	      <td><a href="#" class="cls_report" report="column" userid="${au.objectId }" >行为柱状图</a></td>
	      <td><a href="#" class="cls_report" report="ranking" userid="${au.objectId }" >行为排名</a></td>
	      <%-- <td><a href="#" class="cls_report" report="percent" userid="${au.user.uid }">百分位排名</a></td> --%>
	      <td><a href="#" class="cls_report" report="detail" userid="${au.objectId }" >具体行为数据</a></td>
	    </tr>
  	</c:forEach>
  </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>