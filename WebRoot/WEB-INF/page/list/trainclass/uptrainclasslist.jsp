<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<colgroup>
		<col width="100"/>
        <col width="130" />
        <col width="124" />
        <col width="150" />
        <col width="70" />
        <col width="80" />
        <col width="100" />
        <col width="100" />
    </colgroup>
	<thead>
    	<tr>
    		<th class="sorting">培训班编号</th>
        	<th class="sorting">培训班名称</th>
            <th class="sorting">主办部门</th>
            <th class="sorting">时间</th>
            <th>培训方式</th>
            <th>状态</th>
            <th>考试</th>
            <th>评估</th>
        </tr>
    </thead>
    <tbody>
    	<c:forEach var="tc" items="${list.data }" varStatus="st">
    		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
    			<td>${tc.sn }</td>
	          <td>${tc.name }</td>
	          <td>${tc.dep.name }</td>
	          <td>${tc.start_date }到${tc.end_date }</td>
	          <td>${tc.way.name }</td>
	          <td>
	          	<c:if test="${tc.status == 0}">不限</c:if>
	        	<c:if test="${tc.status == 1}">新建</c:if>
	        	<c:if test="${tc.status == 2}">实施</c:if>
	        	<c:if test="${tc.status == 3}">完成</c:if>
	        	<c:if test="${tc.status == 4}">计划中</c:if>
	          </td>
	          <td>
	         	 ——
	          </td>
	  
	          <td>	<c:choose>
						<c:when test="${tc.hasResponse==0 || tc.hasResponse==null}">
						<c:choose>
						<c:when test="${tc.hasBehavior==1}">
							有
						</c:when>
						 <c:otherwise>
	           			 	   无
	           		    </c:otherwise>
						</c:choose>
						</c:when>
						<c:when test="${tc.hasResponse==1}">
								有
						</c:when>
						<c:otherwise>
	           			    无 
	           		    </c:otherwise>
					</c:choose></td>
	      
	        </tr>
    	</c:forEach>
    </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>