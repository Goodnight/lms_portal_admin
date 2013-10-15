<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<thead>
		<tr>
			<th width="20"><input type="checkbox" value="cls_allow_item" class="cls_allow_all"/></th>
			<th>员工编号</th>
			<th>员工姓名</th>
			<th>所属部门</th>
			<th>被评估者</th>
			<th>关系设置</th>
			<th>指定人</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach var="au" items="${list.data }" varStatus="st">
			<tr class="${st.index%2==0?'greyA even':'greyA odd' }">
				<td><input type="checkbox" name="auid" class="cls_allow_item" value="${au.sauId }"/></td>
				<td><c:if test="${au.user.sn==null }">${st.index+1 }</c:if><c:if test="${au.user.sn!=null }">${au.user.sn }</c:if></td>
				<td>${au.user.name }</td>
				<td>${au.user.org.name }</td>
				<td>${au.aim.objectName }</td>
				<c:if test="${au.aim.objectSn!=au.user.sn }">
				<td>
					<select id="${au.sauId }" class="changerel">
						<option value=""></option>
						<option value="0" ${au.relation==0?'selected=selected':'' }>上级</option>
						<option value="1" ${au.relation==1?'selected=selected':'' }>平级</option>
						<option value="2" ${au.relation==2?'selected=selected':'' }>下级</option>
						<option value="3" ${au.relation==3?'selected=selected':'' }>其他</option>
					</select>
				</td>
				</c:if>
				<c:if test="${au.aim.objectSn==au.user.sn }"><td> </td></c:if>
				<td>${au.creater.name }</td>
			</tr>
		</c:forEach>
	</tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>