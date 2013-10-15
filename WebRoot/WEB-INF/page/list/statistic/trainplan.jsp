<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th>机构名称</th>
            <th>年度</th>
            <th>计划类型</th>
            <th>编号</th>
            <th>培训计划名称</th>
            <th>计划培训班数</th>
            <th>完成培训班数</th>
            <th>计划内培训班完成率</th>
        </tr>
    </thead>
    <tbody>
         <c:forEach items="${list.data }" var="r" varStatus="st">
         	<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
            	<td>${r.departmentName }</td>
                <td>${r.year }</td>
                <td>
                	<c:choose>
                		<c:when test="${r.planType==0 }">正式</c:when>
                		<c:when test="${r.planType==1 }">临时</c:when>
                	</c:choose>
                </td>
                <td>${r.sn }</td>
                <td>${r.name }</td>
                <td>${r.trainClassNum }</td>
                <td>${r.num }</td>
                <td>${r.completionRate }</td>
            </tr> 
         </c:forEach>
    </tbody>
</table>

<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/> 
