<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
 <table id="datatable1"  class="table table-striped table-bordered table-hover" width="100%">
   	<thead>
       	<tr>
           	<th><input name="all" id="alll" type="checkbox" value=""  class="ace" /><span class="lbl"></span></th>
               <th class="classname">编号</th>
               <th>需求项名称</th>
               <th>状态</th>
               <th>创建人</th>
               <th>创建时间</th>
           </tr>
       </thead>
       <tbody> 
       <c:forEach items="${dmdItemList.data }" var="t" varStatus="st">   
           <tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
               <td><c:if test="${t.status==0}"><input name="groupTypeId" type="checkbox" value="${t.dtId}" class="ace"/><span class="lbl"></span></c:if></td>
               <td class="classname">${t.sn}</td>
               <td><a href="demandItemNew.html?id=${t.dtId}" target="_blank" >${t.name}</a></td>
               <td>
               <c:choose>
               	    <c:when test="${t.status==1}">有效</c:when>
               	    <c:otherwise>无效</c:otherwise>
               </c:choose>
               </td>
               <td>${t.creater.name}</td>
               <td>${t.createDate}</td>
           </tr>
           </c:forEach>
       </tbody>
   </table>
			
 	<!-- 分页对象 -->
 	<c:set var="pager" value="${dmdItemList.page }" scope="request"></c:set>
 	<!-- 分页回调函数 -->
 	<c:set var="pageFn" value="${page_fn }" scope="request"></c:set>
 	<jsp:include page="/WEB-INF/page/list/pager_bootstrap.jsp"/>
