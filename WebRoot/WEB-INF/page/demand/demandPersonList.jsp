<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table width="100%" id="sample-table-1" class="table table-striped table-bordered table-hover datatable">
   	<thead>
       	<tr>
            <th class="classname">需求类别</th>
            <th>员工编号</th>
            <th>员工姓名</th>
            <th>部门名称</th>
            <th>岗位</th>
            <th>填写时间</th>
            <th>迫切性</th>
            <th>查看详情</th>
        </tr>
       </thead>
       <tbody>    
      	 <c:forEach items="${dmdPersonList.data}" var="t" varStatus="st">   
           <tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
               <td class="classname"><c:if test="${t.category == 0 }">年度</c:if><c:if test="${t.category == 1 }">平时</c:if></td>
               <td>${t.creater.sn}</td>
               <td><a href="#">${t.creater.name}</a></td>
               <td>${t.creater.org.name}</td>
               <td>${t.creater.benchmarkPost.name}</td>
               <td>${t.createTm}</td>
               <td>
                <c:choose>
                	<c:when test="${t.urgentLevel==2}">迫切</c:when>
                	<c:when test="${t.urgentLevel==1}">一般</c:when>
                	<c:otherwise>不迫切</c:otherwise>
                </c:choose>
               </td>
               <td><a href="getDemandInfo.html?dpId=${t.dpId }">查看详情</a></td>
           </tr>
           </c:forEach>
       </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${dmdPersonList.page}" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${page_fn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager_bootstrap.jsp" />
