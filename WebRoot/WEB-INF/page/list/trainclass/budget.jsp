<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
       <thead>
           <tr>
           		<th>员工编号</th>
               <th>员工姓名</th>
               <th>成绩</th>
               <th>考核等级</th>
               <th>培训费用</th>
               <th>食宿费用</th>
               <th>其他费用</th>
           </tr>
       </thead>
       <tbody>
           <c:forEach items="${list.data }" var="stu" varStatus="st">
           		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
           			<td>${stu.student.sn}</td>
	            	<td>${stu.student.name }</td>
	                <td>
	                	<input type="text" name="score" value="${stu.score }" />
	                </td>
	                <td>
	                	<input type="text" name="examLevel" value="${stu.examLevel }" />
	                </td>
	                <td>
	                	<input type="hidden" name="id" value="${stu.tcsId }" />
	                	<input type="text" class="" name="budgetTrain" value="${stu.budgetTrain }"/>
	                </td>
	                <td>
	                	<input type="text" class="" name="budgetBoard" value="${stu.budgetBoard }"/>
	                
	                </td>
	                <td>
	                	<input type="text" class="" name="budgetOther" value="${stu.budgetOther }"/>
	                
	                </td>
            	</tr>
          </c:forEach>
       </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>