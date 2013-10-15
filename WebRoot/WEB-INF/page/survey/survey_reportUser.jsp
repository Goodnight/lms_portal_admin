<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

<div class="" id="choosegroup">
	<div class="ngreyborder mt10" style="background:#fff;">
		<h2 class="png_bg">用户列表</h2>
		<div class="scroll h400 mt20">
			<div class="choosedcourse" style="margin-top:20px;">
				<div id="list_users" class=""></div>
			</div>
		</div>

	</div>
</div>
<script type="text/javascript">
	var close = "${param.close}";
		userpage(1);
	function userpage(i){
		$.dialog.tips('数据加载中...',600,'loading.gif');
		var max = $("#list_users .page_max").val()?$("#list_users .page_max").val():10;
		var sirId = "${sirId}";
		var query = "";
		if(sirId!=null&&sirId!=""){
			query+="&sirId="+sirId;
		}
		var url = basepath + "/survey/reportRes.html?pagefn=userpage&page="+i+"&max="+max+"&r="+Math.random()+query;
		$("#list_users").load(encodeURI(url),function(){
			$.dialog.tips('数据加载完毕',1,'tips.gif');
			$("#list_users .page_max").change(function(){
				userpage(1);
			});
		});
		
	}
</script>