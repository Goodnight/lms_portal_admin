<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th width="30"><input name="index" type="checkbox" value="cls_chooseitem" class="checkbox cls_chooseall"/></th>
            <th width="33%">参数分类</th>
            <th width="33%">参数名</th>
            <th width="33%">系统值</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${paramList.data }" var="p" varStatus="ps">
        <tr class="gradeA <c:out value="${ps.index%2==0?'even':'odd' }"/>">
            <td><input name="index" type="checkbox" value="${p.spId}" class="checkbox cls_chooseitem"/></td>
            <td>${p.typeName }</td>
            <td><a id="${p.spId }" href="#" class="bringId">${p.name }</a></td>
            <td>${p.spId }</td>
        </c:forEach>
    </tbody>   
</table>

<!-- 分页对象 -->
<c:set var="pager" value="${paramList.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/> 

<script type="text/javascript">
$(".bringId").live("click", function(){
console.log(123);
    var url = basepath+"/dialog/createSysParam.html?spId="+$(this).attr("id");
    $("#dialog_content").load(url);
    $("#dialog").show();
});
</script>
