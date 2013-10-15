<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
       <thead>
           <tr>
               <th></th>
               <th width="150" class="sorting">模板名称</th>
               <th width="150" class="sorting">创建部门</th>
               <th width="150" class="sorting">备注</th>
               <th width="150" class="sorting">创建时间</th>
           </tr>
       </thead>
       <tbody>
           <c:forEach items="${list.data }" var="tp" varStatus="st">
           		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	               	<td class="pl10"><input type="radio" name="tpid"  value="${tp.stId }"/></td>
	                <td>${tp.name }</td>
	            	<td>${tp.creator }</td>
	                <td>${tp.remark }</td>
	                <td>${tp.createTm }</td>
            	</tr>
          </c:forEach>
       </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
