<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table id="datatable2"  class="table table-striped table-bordered table-hover" width="100%">

     	<thead>
         	<tr>
             	<th class="center">
             		<label>
             		<input type="checkbox" class="dialog_user_chooseall"/>
             		<span class="lbl"></span>
             		</label>
             	</th>
                 <th>所在部门</th>
             	<th>员工编号</th>
             	<th>员工姓名</th>
             </tr>
         </thead>
         <tbody>
         	<c:forEach var="user" items="${list.data }" varStatus="st">
         		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
             		<td class="center"><label><input type="checkbox" name="userid" username="${user.name }" usersn="${user.sn }" value="${user.uid }" class="cls_dlg_user"/><span class="lbl"></span></label></td>
                 	<td>${user.org.name }</td>
                 	<td>${user.sn }</td>
             		<td>${user.name }</td>
	             </tr>
         	</c:forEach>
         </tbody>
</table>
 	<!-- 分页对象 -->
	<c:set var="pager" value="${list.page }" scope="request"></c:set>
	<!-- 分页回调函数 -->
	<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
	<jsp:include page="/WEB-INF/page/list/pager_bootstrap.jsp"/>
