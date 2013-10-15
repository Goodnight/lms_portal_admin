<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable">
       <thead>
           <tr>
               <th width="30" class="pl10" ><input name="" type="checkbox" value="cls_allstitem"  class="checkbox cls_chooseall_all"/></th>
               <th width="150" class="sorting">员工编号</th>
               <th width="150" class="sorting">员工姓名</th>
               <th width="150" class="sorting">部门</th>
               <th width="150" class="sorting">参与方式</th>
               <th width="150">手机号码</th>
               <th width="200">Email</th>
           </tr>
       </thead>
       <tbody>
           <c:forEach items="${list.data }" var="stu" varStatus="st">
           		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	               	<td class="pl10"><input type="checkbox" name="all_student" class="cls_allstitem" value="${stu.tcsId }"/></td>
	                <td>${stu.student.sn }</td>
	            	<td>${stu.student.name }</td>
	                <td>${stu.student.org.name }</td>
	                <td>
	                	<c:choose>
	                		<c:when test="${stu.applyWay==0 }">个人报名</c:when>
	                		<c:when test="${stu.applyWay==1 }">直接指定</c:when>
	                		<c:when test="${stu.applyWay==2 }">指定部门</c:when>
	                		<c:when test="${stu.applyWay==3 }">名额指派</c:when>
	                	</c:choose>
	                </td>
	                <td>${stu.student.mobile }</td>
	                <td>${stu.student.email }</td>
            	</tr>
          </c:forEach>
       </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
