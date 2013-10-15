<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
       <thead>
           <tr>
               <th width="30" class="pl10" ></th>
               <th>证书编号</th>
               <th>证书名称</th>
               <th>证书有效期</th>
               <th>模板</th>
               <th></th>
           </tr>
       </thead>
       <tbody>
           <c:forEach items="${list.data }" var="d" varStatus="st">
           		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	               	<td class="pl10"><input type="radio" name="diploma_id" class="cls_allstitem" value="${d.dipId }"/></td>
	                <td>${d.sn }</td>
	            	<td>${d.name }</td>
	                <td>${d.effective_date==null?'永久有效':d.effective_date }</td>
	                <td><a href="javascript:;" class="cls_view_diploma" url="${basepath }/trainclass/diploma/view.html?did=${d.dipId}" >查看</a></td>
            		<td><a href="javascript:;" class="btn_delete_diploma" dipid="${d.dipId }">删除</a></td>
            	</tr>
          </c:forEach>
       </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
