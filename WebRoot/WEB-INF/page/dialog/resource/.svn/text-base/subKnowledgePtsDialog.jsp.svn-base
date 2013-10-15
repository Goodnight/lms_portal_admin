<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="cl">
    <input id="knoId" type="hidden" name="knoId" value="${knoId }"/>
    
    <div class="y" style="width:770px;">
        <div class="ngreyborder changeblue2 h470">
        <h2 class="png_bg">${upKp.name }</h2>
        <form id="" action="${basepath }/knowledgePoint/saveKnowledgePoint.html" method="post">
        <div class="basic_information mt2">
            <input name="kp_Id" type="hidden" value="${upKp.kpId }"/>
            <!-- 动态加载新建表单 -->
            <div id="list_newSubKnowledgePts"></div>
        </div>
        <div class="taR m10"><input type="submit" class="step mr10 windowbutton" value="确定"/></div>
        </form>
        </div>
    </div>
</div>

<script type="text/javascript">
$(function(){
    
    $(".step").click(function(){
        alert("新子知识点已添加");
    });
        knoClick();
});

function knoClick(){
    var url = "";
    var knoId = $("#knoId").val();
        url = basepath+"/list/knowledgePoint/newKnowledgePts.html?knoId="+knoId+"&r="+Math.random();
        $("#list_newSubKnowledgePts").load(encodeURI(url));
}
</script>
