<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th width="30"><input name="index" type="checkbox" value="cls_chooseitem" class="checkbox cls_chooseall"/></th>
            <th>编号</th>
            <th>名称</th>
            <th>创建公司</th>
            <th>父知识点全路径</th>
            <th>子知识点</th>
        </tr>
    </thead>
    <tbody>
         <c:forEach items="${knowledgePointList.data }" var="kp" varStatus="kps">
         <tr class="gradeA <c:out value="${kps.index%2==0?'even':'odd' }"/>">
             <td><input name="index" type="checkbox" value="${kp.kpId}" class="checkbox cls_chooseitem"/></td>
             <td>${kp.sn }</td>
             <td><a id="${kp.kpId}" class="toUpdate" href="javascript:;">${kp.name }</a></td>
             <td>${kp.creatCorp.name }</td>
             <td>${kp.namePath }</td>
             <td><a id="${kp.kpId}" href="javascript:;" class="checkSub">查看</a>/<a id="${kp.kpId}" href="#" class="newSub">新建</a></td>
         </c:forEach>
    </tbody>
</table>

<!-- 分页对象 -->
<c:set var="pager" value="${knowledgePointList.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/> 

<script type="text/javascript">
//查看子知识点
$(".checkSub").click(function(){
	$("#kId").attr("value",$(this).attr("id"));
    var url = basepath+"/list/knowledgePoint/checkSubList.html?kpId="+$(this).attr("id");
    $("#list_knowledgepointlist").load(encodeURI(url),function(){
        bindChooseAll("cls_chooseall");
    });
});

//新增子知识点
$(".newSub").click(function(){
    var url = basepath+"/dialog/newSubKnowledgePoint.html?kpId="+$(this).attr("id");
    $("#dialog_content").load(url);
    $("#dialog").show();
});

//修改知识点
$(".toUpdate").click(function(){
    var url = basepath+"/knowledgePoint/toUpdateKnowledgePoint.html?knoPointId="+$(this).attr("id");
    $("#dialog_content").load(url);
    $("#dialog").show();
});
</script> 
