<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<thead>
       	<tr>
              <th width="20"><input name="" type="checkbox" value="cls_item_est" class="checkbox cls_chooseall_est"/></th>
              <th width="120">员工编号</th>
              <th width="120">员工姓名</th>
              <th width="200">所属部门</th>
              <th width="120">手机号码</th>
              <th width="200">邮箱</th>
          </tr>
    </thead>
	<tbody>
      		<c:forEach var="u" items="${list.data }" varStatus="st">
       		<tr class="${st.index%2==0?'greyA even':'greyA odd' }">
       			<td><input name="auid" type="checkbox" value="${u.sauId }" class="checkbox cls_item_est"/></td>
                   <td><c:if test="${u.user.sn==null }">${st.index+1 }</c:if><c:if test="${u.user.sn!=null }">${u.user.sn }</c:if></td>
                   <td>${u.user.name }</td>
                   <td>${u.user.org.name }</td>
                   <td>${u.user.mobile }</td>
                   <td>${u.user.email }</td>
	       </tr>
       </c:forEach>
   </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
