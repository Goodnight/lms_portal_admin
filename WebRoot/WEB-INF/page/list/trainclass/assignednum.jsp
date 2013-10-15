<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable">
    <thead>
        <tr>
            <th width="30" class="pl10" >
            	<input name="" type="checkbox" value="cls_item_num" class="checkbox cls_chooseall_num" />
            </th>
            <th width="500" class="sorting">部门名称</th>
            <th width="500" class="sorting">分派人数</th>
        </tr>
    </thead>
    <tbody>
    	<c:forEach var="item" items="${list.data }" varStatus="st">
    		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	            <td class="pl10"><input name="assigneddepnum" type="checkbox" value="${item.tcdId }" class="checkbox cls_item_num" /></td>
	            <td>${item.dep.name }</td>
	            <td>${item.num }</td>
	        </tr>
    	</c:forEach>
    </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
