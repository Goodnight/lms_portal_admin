<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
       <thead>
           <tr>
               <th></th>
               <th width="250" class="sorting">模板名称</th>
               <th width="150" class="sorting">创建部门</th>
               <th width="150" class="sorting">备注</th>
               <th width="150" class="sorting">创建时间</th>
               <th>评估模板类型<br></th>
           </tr>
       </thead>
       <tbody>
           <c:forEach items="${list.data }" var="tp" varStatus="st">
           		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	               	<td><input type="radio" name="tpid"  value="${tp.stId }"/></td>
	                <td>${tp.name }</td>
	            	<td>${tp.creater.org.name }</td>
	                <td><a href="#"  class="detailaction">详情</a></td>
	                <td>${tp.create_date }</td>
	                <td>
	                	<c:choose>
		                	<c:when test="${tp.type==2}">评估模版</c:when>
		                	<c:when test="${tp.type==1}">调查模版</c:when>
		                	<c:when test="${tp.type==21}">反应层评估模板</c:when>
		                	<c:when test="${tp.type==22}">行为层评估模板</c:when>
		                	<c:when test="${tp.type==23}">综合评估模板</c:when>
		                	<c:when test="${tp.type==24}">LPI评估模板</c:when>
		                	<c:when test="${tp.type==25}">通用性满意度调查模板</c:when>
              			</c:choose>
	                </td>
            	</tr>
            	<tr class="hidden">
            		<td colspan="7">${tp.remark }</td>
            	</tr>
          </c:forEach>
       </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
