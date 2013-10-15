<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable">
    <thead>
        <tr>
            <th width="30" class="pl10" >
            	<input name="" type="checkbox" value="cls_item_approving" class="checkbox cls_chooseall_approving" />
            </th>
            <th width="300" class="sorting">员工编号</th>
            <th width="400" class="sorting">员工姓名</th>
            <th width="200">所属部门</th>
            <th width="100">操作</th>
        </tr>
    </thead>
    <tbody>
    	<c:forEach var="s" items="${list.data }" varStatus="st">
    		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	            <td class="pl10"><input name="approving_student" type="checkbox" value="${s.tcsId }" class="checkbox cls_item_approving" /></td>
	            <td>${s.student.sn }</td>
	            <td>${s.student.name }</td>
	            <td>${s.student.org.name }</td>
	            <td>
	            	<a sid="${s.tcsId }" href="#" class="cls_approve">批准</a>
	            	<a sid="${s.tcsId }" href="#" class="ml13 cls_reject">不批准</a>
	            </td>
        	</tr>
    	</c:forEach>
    </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
