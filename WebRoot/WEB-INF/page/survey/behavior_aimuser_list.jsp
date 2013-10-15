<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
<tbody>
   	<tr>
       	<th width="20"><input name="" type="checkbox" value="cls_item_est"  class="cls_chooseall_est"/></th>
       	<th>员工编号</th>
        <th>员工姓名</th>
        <th>所属部门</th>
        <th>手机号码</th>
        <th>邮箱</th>
        <th>上级</th>
        <th>平级</th>
        <th>下级</th>
        <th>其他</th>
        <th>操作</th>
     </tr>
       <c:forEach var="u" items="${list.data }" varStatus="st">
       		<tr class="${st.index%2==0?'greyA even':'greyA odd' }">
		       	<td><input name="auid" type="checkbox" value="${u.saId }" class="cls_item_est"/></td>
	       		<td><c:if test="${u.objectSn==null }">${st.index+1 }</c:if><c:if test="${u.objectSn!=null }">${u.objectSn }</c:if></td>
	           	<td>${u.objectName }</td>
	           	<td></td>
	           	<td></td>
	           	<td></td>
	           	<td><c:if test="${u.upperUserNum==null }">0人</c:if><c:if test="${u.upperUserNum!=null }">${u.upperUserNum }人</c:if></td>
                <td><c:if test="${u.sameUserNum==null }">0人</c:if><c:if test="${u.sameUserNum!=null }">${u.sameUserNum }人</c:if></td>
                <td><c:if test="${u.underUserNum==null }">0人</c:if><c:if test="${u.underUserNum!=null }">${u.underUserNum }人</c:if></td>
                <td><c:if test="${u.otherUserNum==null }">0人</c:if><c:if test="${u.otherUserNum!=null }">${u.otherUserNum }人</c:if></td>
                <td><a id="${u.saId }" href="javascript:;" class="appointbutton">指定</a></td>
	       </tr>
       </c:forEach>
   </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
