<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
       <thead>
           <tr>
               <th width="150" class="sorting">员工编号</th>
               <th width="150" class="sorting">员工姓名</th>
               <th width="150" >
               		第一次
               		<input type="checkbox" name="first_all" value="one" class="chooseall">
               		全到
               </th>
               <th width="150">
               		第二次
               		<input type="checkbox" name="second_all" value="two" class="chooseall">
               		全到
               </th>
               <th width="150">
               		第三次
               		<input type="checkbox" name="third_all" value="three" class="chooseall"/>
               		全到
               </th>
           </tr>
       </thead>
       <tbody>
           <c:forEach items="${stuList.data }" var="student" varStatus="st">
	           	<c:set var="in" value="0" scope="request"></c:set>
	           	<c:set var="check"  scope="request"></c:set>
	           	<c:forEach var="check" items="${checkList }" varStatus="i">
	           		<c:if test="${student.tcsId eq check.student.tcsId }">
	           			<c:set var="in" value="1" scope="request"></c:set>
	           			<c:set value="${check }" var="check" scope="request"></c:set>
	           		</c:if>
	           	</c:forEach>
           
           		<c:choose>
           			<c:when test="${in eq '1' }">
           				<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
			                <td>
			                	${student.student.sn }
			                	<input type="hidden" name="id" value="${student.tcsId }" />
			                </td>
			            	<td>${student.student.name }</td>
			                <td>
		               			<input class="cls_one cls_radio_one" type="radio" name="${student.tcsId }_one" value="1" ${check.timeSlot1==1?'checked=checked':'' }/>到勤
			                	<input class="cls_one" type="radio" name="${student.tcsId }_one"  value="0" ${check.timeSlot1==0?'checked=checked':'' }/>缺勤
			                	<input class="cls_one cls_one_not" type="radio" name="${student.tcsId }_one"  value="-1" ${check.timeSlot1==-1?'checked=checked':'' }/>不记
			                </td>
			                <td>
		               			<input class="cls_two cls_radio_two" type="radio" name="${student.tcsId }_two" value="1" ${check.timeSlot2==1?'checked=checked':'' }/>到勤
			                	<input class="cls_two" type="radio" name="${student.tcsId }_two" value="0" ${check.timeSlot2==0?'checked=checked':'' }/>缺勤
			                	<input class="cls_two  cls_two_not" type="radio" name="${student.tcsId }_two" value="-1" ${check.timeSlot2==-1?'checked=checked':'' }/>不记
			                </td>
			                <td>
		               			<input class="cls_three cls_radio_three" type="radio" name="${student.tcsId }_three" value="1" ${check.timeSlot3==1?'checked=checked':'' }/>到勤
			                	<input class="cls_three" type="radio" name="${student.tcsId }_three" value="0" ${check.timeSlot3==0?'checked=checked':'' }/>缺勤
			                	<input class="cls_three  cls_three_not" type="radio" name="${student.tcsId }_three" value="-1" ${check.timeSlot3==-1?'checked=checked':'' }/>不记
			                </td>
		            	</tr>
           			</c:when>
           			<c:otherwise>
           				<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
			                <td>
			                	${student.student.sn }
			                	<input type="hidden" name="id" value="${student.tcsId }" />
			                </td>
			            	<td>${student.student.name }</td>
			                <td>
		               			<input type="radio" name="${student.tcsId }_one" value="1" class="cls_one cls_radio_one"/>到勤
			                	<input type="radio" name="${student.tcsId }_one"  value="0" class="cls_one"/>缺勤
			                	<input type="radio" name="${student.tcsId }_one"  value="-1" class="cls_one  cls_one_not" checked="checked"/>不记
			                </td>
			                <td>
		               			<input type="radio" name="${student.tcsId }_two" value="1" class="cls_two cls_radio_two"/>到勤
			                	<input type="radio" name="${student.tcsId }_two" value="0" class="cls_two"/>缺勤
			                	<input type="radio" name="${student.tcsId }_two" value="-1" class="cls_two  cls_two_not" checked="checked"/>不记
			                </td>
			                <td>
		               			<input type="radio" name="${student.tcsId }_three" value="1" class="cls_three cls_radio_three"/>到勤
			                	<input type="radio" name="${student.tcsId }_three" value="0" class="cls_three"/>缺勤
			                	<input type="radio" name="${student.tcsId }_three" value="-1" class="cls_three  cls_three_not" checked="checked"/>不记
			                </td>
		            	</tr>
           			</c:otherwise>
           		</c:choose>
           	</c:forEach>
       </tbody>
</table>
<c:set var="pager" value="${stuList.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
