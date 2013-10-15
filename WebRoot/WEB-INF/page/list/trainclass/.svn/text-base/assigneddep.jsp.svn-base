<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable">
    <thead>
        <tr>
            <th width="30" class="pl10" >
            	<input name="" type="checkbox" value="cls_item_assigneddep" class="checkbox cls_chooseall_dep" />
            </th>
            <th width="370" class="sorting">部门组名称</th>
            <th width="350" class="sorting">部门组类型</th>
            <th width="250">是否包含子部门</th>
        </tr>
    </thead>
    <tbody>
    	<c:forEach var="item" items="${list.data }" varStatus="st">
    		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	            <td class="pl10">
	            	<input name="assignedDep" type="checkbox" orgid="${item.dep.orgId }" idpath="${item.dep.idPath }" value="${item.tcdId }" class="checkbox cls_item_assigneddep" />
	            </td>
	            <td>${item.dep.name }</td>
	            <td>部门</td>
	            <td>
	            	<c:choose>
	            		<c:when test="${item.isSub==0 }">
	            			<a id="${item.tcdId }" href="#" onclick="javascript:changeDepSub(this,1)">否</a>
	            		</c:when>
	            		<c:otherwise>
			            	<a id="${item.tcdId }" href="#" onclick="javascript:changeDepSub(this,0)">是</a>
	            		</c:otherwise>
	            	</c:choose>
	            </td>
	        </tr>
    	</c:forEach>
        
    </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
