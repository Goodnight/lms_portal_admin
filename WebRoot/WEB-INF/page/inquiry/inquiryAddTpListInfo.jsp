<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table id="datatable4" class="table table-striped table-bordered table-hover" width="100%">
<thead>
	<tr>
    	<th>选择</th>
    	<th>模板名称</th>
        <th>状态</th>
        <th>创建时间</th>
    </tr>
</thead>
<tbody>

    <c:forEach items="${inquiryTpList.data}" var="item" varStatus="st">
    <input name="tpNames" type="hidden" value="${item.name}" />
    <tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>"> 
   	<td><label><input name="radio" type="radio" value="${item.stId}" /><span class="lbl"></span></label></td>
   	<td><a href="javascript:;" class="releasebutton">${item.name}</a></td>
    <td>
    <c:choose>
  	<c:when test="${item.status==1}">
  		<a href="#">未发布</a>
  	</c:when>
  	<c:otherwise>
   		已发布
   	</c:otherwise>
    </c:choose>
    </td>
    <td>${item.create_date}</td>
    </tr>
    </c:forEach>
    <tr>
    <td colspan="4">
<!-- 分页对象 -->
<c:set var="pager" value="${inquiryTpList.page}" scope="request"></c:set>
<!-- 分页回调函数 --> <c:set var="pageFn" value="${page_fn}" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager_bootstrap.jsp" />	
</td>
</tr>
</tbody>
</table>
                 