<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table border="0" cellspacing="0" cellpadding="0" width="100%">
         	<colgroup>
             	<col width="80" />
                 <col width="50" />
                 <col width="200" />
                 <col width="200" />
                 <col width="200" />
                 <col width="150" />
             </colgroup>
             	<thead>
                 	<tr>
                     	<th>&nbsp;</th>
                     	<th class="taL"></th>
                     	<th>文档编号</th>
                         <th>文档名称</th>
                         <th>创建公司</th>
                         <th>主要内容</th>
                     </tr>
                 </thead>
                 <tbody>
                 	<c:forEach items="${docList.data }" var="d" varStatus="st">
                 		<tr class='<c:out value="${st.index%2==0?'grey':'' }" />'>
	                        <td class="taL"><input class="cls_chooseDoc" name="rdId" type="checkbox" value="${d.rdId }" onclick="add(this)"/></td>
	                        <td>${d.sn }</td>
	                        <td>${d.name }</td>
	                        <td>${d.creater.dep.org.name }</td>
	                        <td>${d.content }</td>
	                     </tr>
                 	</c:forEach>
                 </tbody>
    			 </table>
           		<div class="reHeight pager">
	             	<c:set var="pager" value="${docList.page }" scope="request"></c:set>
	             	<c:set var="pageFn" value="${page_fn }" scope="request"></c:set>
	             	<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
              	</div>