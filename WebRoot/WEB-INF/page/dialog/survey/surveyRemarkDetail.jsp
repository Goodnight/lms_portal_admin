<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>       
<div class="ngreyborder changeblue2 mt20">
    <h2 class="png_bg">用户回答列表</h2>
    <input id="siId" type="hidden" value="${siId }" />
    <div class="dataTables_wrapper">
        <div id = "remarkList" style = "margin-top: 30px;"></div>
        <div class="m10 taR "><input type="button" class="back windowbutton" value="关闭" /></div>
    </div>
</div>

<script type="text/javascript">
$(function(){
    page(1);
});
function page(i){
	var name = "${sessionScope.user.name}";
	if(name==null||""==name){
		alert("页面已过期，请重新登录！");
		history.go(0);
		return false;
	}
    var siId = $("#siId").val();
    var max = $("#remarkList .page_max").val()?$("#remarkList .page_max").val():10;
    $.dialog.tips('数据加载中...',600,'loading.gif');
    var url = basepath+"/survey/remarkList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random()+"&siId="+siId+"&type=1";
    $("#remarkList").load(encodeURI(url),function(){
        $.dialog.tips('数据加载完毕',1,'tips.gif');
        bindChooseAll("cls_chooseall");
        $("#remarkList .page_max").change(function(){
            page(1);
        });
    });
}
</script>
    