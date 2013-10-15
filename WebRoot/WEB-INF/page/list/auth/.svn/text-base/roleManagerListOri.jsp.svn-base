<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th width="30"><input name="index" type="hidden" class="checkbox cls_chooseall"/></th>
              <th>角色名称</th>
              <th>类型</th>
              <th>创建人</th>
              <th class="sorting">创建时间</th>
              <th>修改人</th>
              <th class="sorting">修改时间</th>
              <th>权限</th>
              <th>角色用户</th>   
    </thead>
    <tbody>
         <c:forEach items="${roleManageList.data }" var="rm" varStatus="rms">
         <tr class="gradeA <c:out value="${rms.index%2==0?'even':'odd' }"/>"> 
             <td><input name="index" type="hidden" value="${rm.rId}" class="checkbox cls_chooseitem"/></td>
             <td>
                 <a href="javascript:;" class="roleSelfDefine">${rm.name}</a>
                 <input id="rId" type="hidden" value="${rm.rId }"/>
             </td>
             <td>${rm.type.name}</td>
             <td>${rm.creater.name}</td>
             <td>${rm.createDt}</td>
             <td>${rm.updater.name}</td>
             <td>${rm.updateDt}</td>
             <td><a href="javascript:;" class="authCheck">查看</a></td>
             <td><a href="javascript:;" class="userCheck">查看</a></td>       
         </c:forEach>   
    </tbody>      
</table>
<div class="cl">
    <div class="dataTables_length z">
        <div class="z pt10">每页</div>
        <div class="selector z" id="uniform-undefined"><span style="-moz-user-select: none;">10</span><select size="1" style="opacity: 0;"><option value="10" selected="selected">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></div>
        <div class="z pt10">条</div>
        <div class="z m10">|</div>
        <div class="z pt10">共10条</div>
        <div class="z m10">|</div>
        <div class="z pt10">当前1-10条</div>
    </div>
    <c:set var="pager" value="${roleManageList.page }" scope="request"></c:set>
    <c:set var="pagefn" value="${pagefn }" scope="request"></c:set>
    <jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
</div>
