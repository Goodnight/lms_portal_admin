<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<thead>
    	<tr>
            <th width="30" class="pl10" ><input name="" type="checkbox" value="cls_item_out" class="checkbox cls_chooseall_out"/></th>
            <th width="200" class="sorting">培训班名称</th>
            <th width="100" class="sorting">开始时间</th>
            <th width="100" class="sorting">结束时间</th>
            <th width="100" class="sorting">培训时长</th>
            <th width="100">组织机构</th>
            <th width="100">培训地点</th>
            <th width="100">培训信息</th>
        </tr>
    </thead>
    <tbody>
    	<c:forEach var="tc" items="${list.data }" varStatus="st">
   			<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	          <td class="pl10"><input name="cid" type="checkbox" value="${tc.tcId }" class="checkbox cls_item_out"/></td>
	          <td><a href="${basepath }/trainclass/out/new.html?tcid=${tc.tcId}" target="_blank">${tc.name }</a></td>
	          <td>${tc.start_date }</td>
	          <td>${tc.end_date }</td>
	          <td>${tc.trainDuration }天</td>
	          <td>${tc.dep.name}</td>
	          <td>${tc.address }</td>
	          <td><a class="cls_openInfo" href="#" id="${tc.tcId }">信息</a></td>
	        </tr>
    	</c:forEach>
    </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>

