<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
   <thead>
        <tr>
            <th width="30"><input name="index" type="checkbox" class="checkbox cls_chooseall"/></th>
            <th>编号</th>
            <th>姓名</th>
            <th width="100">授权人</th>
            <th class="sorting" width="100">授权时间</th>
            <th>管辖范围</th>
            <th>删除</th>
         </tr>        
   </thead>
   <tbody>
       <c:forEach items="${roleStaffList.data }" var="rs" varStatus="rss">
       <tr class="gradeA <c:out value="${rss.index%2==0?'even':'odd' }"/>"> 
           <td><input name="index" type="checkbox" value="${rs.urId}" class="checkbox cls_chooseitem"/></td>
           <td>${rs.user.sn}</td>
           <td>${rs.user.name}</td>
           <td>${rs.authorizePerson.name}</td>
           <td>${rs.authorizedTime}</td>
           <td> 
               <c:choose>
                   <c:when test="${rs.user.type=='1' }">市管理</c:when>
                   <c:when test="${rs.user.type=='2' }">省管理</c:when>
                   <c:when test="${rs.user.type=='3' }">全集团</c:when>
               </c:choose>
           </td>
           <td><a href="javascript:;" class="btn_delete">删除</a></td>
       </tr>
       </c:forEach>
   </tbody>   
</table>

<!-- 分页对象 -->
<c:set var="pager" value="${roleStaffList.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>
