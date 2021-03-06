<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th width="30"><input name="index" type="checkbox" value="cls_chooseitem" class="checkbox cls_chooseall"/></th>
            <th>角色名称</th>
            <th>类型</th>
            <th>机构名称</th>
            <th>创建人</th>
            <th class="sorting">创建时间</th>
            <th>修改人</th>
            <th class="sorting">修改时间</th>
            <th>权限</th>
            <th>角色用户</th> 
        </tr>  
    </thead>
    <tbody>
         <c:forEach items="${roleManageList.data }" var="rm" varStatus="rms">

         <tr class="gradeA <c:out value="${rms.index%2==0?'even':'odd' }"/>"> 
             <td>
                <c:choose>
                    <c:when test="${rm.type!=1}">
                        <input name="index" type="checkbox" value="${rm.rId}" class="checkbox cls_chooseitem"/>
                    </c:when>
                </c:choose>
             </td>
             <td><!-- 初始角色不能修改、删除 -->
                <c:if test="${user.type == 1 && rm.type!=1}"><a id="${rm.rId}" href="#" class="bringId">${rm.name}</a></c:if>
                <c:if test="${user.type != 1 || rm.type==1}">${rm.name}</c:if>
             </td>
             <td>
             <c:if test="${rm.type == 0}">
                                   临时角色
             </c:if>
             <c:if test="${rm.type == 1}">
                                   初始角色
             </c:if>
             <c:if test="${rm.type == 2}">
                                   自定义角色
             </c:if>
             </td>
             <td>${rm.org.name}</td>
             <td>${rm.creater.name}</td>
             <td>${rm.createDt}</td>
             <td>${rm.updater.name}</td>
             <td>${rm.updateDt}</td>
             <td><!-- 初始角色不能修改、删除 -->
                <c:if test="${user.type == 1 && rm.type!=1}"><a id="${rm.rId}" href="#" class="authCheck">查看</a></c:if>
                <c:if test="${user.type != 1 || rm.type==1}"><a id="${rm.rId}" href="#" class="authCheckOnly">查看</a></c:if>
             </td>
             <td>
                <a id="${rm.rId }" href="#" class="checkAuthUser">查看</a>
             </td>
         </tr>

         </c:forEach> 
    </tbody>
</table>

<!-- 分页对象 -->
<c:set var="pager" value="${roleManageList.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/> 

<script type="text/javascript">
$(".bringId").click(function(){
    var url = basepath+"/dialog/roleSelfDefine.html?rId="+$(this).attr("id");
    $("#dialog_content").load(url);
    $("#dialog").show();
    $(".newwindow").show();
});

$(".authCheck").click(function(){
    var url = basepath+"/dialog/authManage.html?rId="+$(this).attr("id");
    $("#dialog_content").load(url);
    $("#dialog").show();
    $(".newwindow").show();
});

$(".authCheckOnly").click(function(){
    var url = basepath+"/dialog/authManage.html?rId="+$(this).attr("id")+"&symbol=ban";
    $("#dialog_content").load(url);
    $("#dialog").show();
    $(".newwindow").show();
});

$(".checkAuthUser").click(function(){
    var url = basepath+"/dialog/checkAuthUser.html?rId="+$(this).attr("id");
    $("#dialog_content").load(url);
    $("#dialog").show();
    $(".newwindow").show();
});
</script> 
        