<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    	<thead>
        	<tr>
            	<th></th>
            	<th>课程编号</th>
                <th>课程名称</th>
                <th>创建公司</th>
                <th>学时</th>
            </tr>
        </thead>
        <tbody>
        	<c:forEach items="${list.data }" var="c" varStatus="st">
        		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	                <td><input class="cls_chooseCourse" name="cId" type="checkbox" onclick="add(this)" value="${c.cId }"/></td>
	                <td>${c.res.sn }</td>
	                <td>${c.res.name }</td>
	                <td>${c.res.org.name }</td>
	                <td><fmt:formatNumber value="${c.courseHour / 60}" pattern="##.##" minFractionDigits="2"></fmt:formatNumber></td>
	             </tr>
        	</c:forEach>
         </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>		
