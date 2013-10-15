<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table id="sample-table-1" class="table table-striped table-bordered table-hover" width="100%">
<thead>
   	<tr>
       	<th class="center"><input name="all" id="alll" type="checkbox" value="" class="ace"/><label class="lbl"></label></th>
           <th class="classname">年度</th>
           <th>部门</th>
           <th>需求内容</th>
           <th>需求类别</th>
           <th>填写人</th>
           <th>人数</th>                                                                         
       </tr>
   </thead>
   <tbody>
     <c:forEach items="${dmdDepList.data}" var="t" varStatus="st">    
       <tr class="<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>">
           <td class="center"><c:if test="${user.type == t.creater.type }"><input name="groupTypeId" type="checkbox" value="${t.dpId}" class="ace"/><label class="lbl"></label></c:if></td>
           <td class="classname">${t.topic.year}年</td>
           <td>${t.dep.name}</td>
           <td> 
               <c:forEach items="${t.ddis}" var="list" >
                   <c:if test="${user.type == t.creater.type }"><a href="demandDepModify.html?dpId=${t.dpId}&ddiId=${list.ddiId}&flag=1">${list.dmdItem.name}</a></c:if><!-- 可以修改 -->
                   <c:if test="${user.type != t.creater.type }"><a href="demandDepModify.html?dpId=${t.dpId}&ddiId=${list.ddiId}&flag=0">${list.dmdItem.name}</a></c:if><!-- 不可修改 -->
               </c:forEach>
           </td>
           <td>${t.type.name}</td>
           <td>${t.creater.name}</td>
           <td>${t.personNums}</td>
       </tr>
     </c:forEach>
   </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${dmdDepList.page}" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${page_fn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager_bootstrap.jsp" />
