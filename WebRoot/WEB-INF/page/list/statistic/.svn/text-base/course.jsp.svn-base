<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th>课程编号</th>
            <th>课程名称</th>
            <th>所属机构</th>
            <th>学习总人数</th>
            <th>学习总次数</th>
            <th>学习总时长</th>
            <th>平均学习时长</th>
            <th>完成人数</th>
            <th>完成率</th>
        </tr>
    </thead>
    <tbody>
         <c:forEach items="${list.data }" var="r" varStatus="st">
         	<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
             <td><c:if test="${r.sn == null }">${st.index }</c:if>${r.sn }</td>
             <td>${r.name }</td>
             <td>${r.depName }</td>
             <td><c:if test="${r.totalPerson == null}">0人</c:if>${r.totalPerson }</td>
             <td><c:if test="${r.totalTime == null}">0次</c:if>${r.totalTime }</td>
             <td><c:if test="${r.totalLength == null}">0小时</c:if>${r.totalLength }</td>
             <td><c:if test="${r.averageLength == null}">0小时</c:if>${r.averageLength }</td>
             <td><c:if test="${r.completePerson == null}">0人</c:if>${r.completePerson }</td>
             <td><c:if test="${r.completionRate == null}">0%</c:if>${r.completionRate }</td>
            </tr>
         </c:forEach>
    </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/> 
