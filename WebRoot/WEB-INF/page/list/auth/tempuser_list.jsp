<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<thead>
    	<tr>
        	<th width="20" >
        		<input name="" type="checkbox" value="cls_item_user" class="checkbox cls_chooseall_user"/>
        	</th>
            <th width="100">用户编号</th>
            <th width="100">用户姓名</th>
            <th width="100">手机号码</th>
            <th width="100">有效时间</th>
            <th width="100">用户权限</th>
            <!-- 发布屏蔽  <th width="100">密码重置</th> -->
            <th width="100">帐号状态</th>
    	</tr>
	</thead>
    <tbody>
    	<c:forEach items="${list.data }" var="u" varStatus="st">
    		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	        	<td><input name="id" type="checkbox" value="${u.uid }" class="checkbox cls_item_user"/></td>
	          	<td>${u.sn }</td>
	          	<td><a href="new.html?uid=${u.uid }">${u.name }</a></td>
	          	<td>${u.mobile }</td>
	          	<td>${u.expire_date }</td>
	          	<td></td>
	          	<!-- 发布屏蔽 <td>重置</td> -->
	          	<td>
	          		<c:choose>
	          			<c:when test="${u.status==0 }">无效</c:when>
	          			<c:otherwise>有效</c:otherwise>
	          		</c:choose>
	          	</td>
	      </tr>
    	</c:forEach>
    </tbody>
</table>
 <!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>