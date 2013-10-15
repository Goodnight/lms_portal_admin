<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
		<colgroup>
        	<col width="130" />
            <col width="200" />
            <col width="200" />
            <col width="200" />
            <col width="200" />
        </colgroup>
    	<thead>
        	<tr>
	            <th></th>
	            <th>编号</th>
	            <th>名称</th>
	            <th>类型</th>
	            <th>创建公司</th>
            </tr>
        </thead>
        <tbody>
        	<c:forEach items="${list.data }" var="c" varStatus="st">
        		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
                <td><input name="rdId" type="checkbox" onclick="add(this)" value="${c.dId }"/></td>
                <td>${c.res.sn }</td>
              	<td>${c.res.name }</td>
              	<td>
              		<c:if test="${c.res.dc.docType==0 }">文档</c:if>
              		<c:if test="${c.res.dc.docType==1 }">案例</c:if>
              	</td>
              	<td>${c.res.org.name }</td>
             </tr>
        	</c:forEach>
         </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>		