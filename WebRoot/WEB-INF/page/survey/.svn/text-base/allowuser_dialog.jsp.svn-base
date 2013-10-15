<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="scroll">
	<div class="ngreyborder">
		<h2 class="png_bg">
			指定上下级人员
		</h2>

		<div class="choosedcourse mt40">
			<div class="taR mr10">
				<input type="button" class="functionbutton" id="dlgbtn_chooseperson" value="添加"/>
           		<input type="button" class="functionbutton" id="dlgbtn_delete" value="删除" />
			</div>
			<div id="allowlist" class="dataTables_wrapper" style="margin-top:3px"></div>
		</div>
	</div>
	<div class="makesure taR">
		<input type="button" value="确定" class="step cls_ok">
	</div>
</div>
<script type="text/javascript">
	var auid = "${auid}";
	var sid = "${sid}";
	$(function(){
		allowPage(1);
		
		$("#dlgbtn_chooseperson").click(function(){
			pid = auid;
			userurl = basepath+"/survey/allowuser/add.html?type=2&sid="+sid+"&auId="+auid;
			var url = basepath+"/dialog/user.html?page=back&close=false&r="+Math.random();
			$("#dialog_content").load(url);
		});
		
		$("#dlgbtn_delete").click(function(){
			var param = $.param($("input:checkbox[name=auid]:checked"));
			$.ajax({
				url : basepath+"/survey/allowuser/delete.html",
				type : "post",
				data : param,
				dataType : "json",
				success : function(data){
					if(data==null){
						$.dialog.tips("删除出错",2,"tips.gif");
					}else{
						$.dialog.tips("删除成功",2,"tips.gif");
						allowPage(1);
					}
				},
				error : function(){
					$.dialog.tips("删除出错",2,"tips.gif");
				}
			});
		});
		
		$(".cls_ok").click(function(){
			$.dialog.tips("添加成功",2,"tips.gif");
			page(1);
			$("#dialog").hide();
		});
		
		
	});
	
	function back(p){
		var url = basepath+"/survey/allowuser/dialog.html?auid="+auid+"&sid="+sid+"&r="+Math.random();
		$("#dialog_content").load(url);
	}
	
	function allowPage(i){
		$.dialog.tips('数据加载中...',600,'loading.gif');
		var max = $("#allowlist .page_max").val()?$("#allowlist .page_max").val():10;
		var url = basepath+"/survey/allowuser/list.html?type=2&pagefn=allowPage&page="+i+"&max="+max+"&id="+auid+"&r="+Math.random();
		$("#allowlist").load(url,function(){
			$.dialog.tips('数据加载完毕',1,'tips.gif');
			//全选
			bindChooseAll("cls_allow_all");
			//选择每页记录数量
			$("#allowlist .page_max").change(function(){
				allowPage(1);
			});
			//改变上下级关系
			$(".changerel").change(function(){
				var sauid = $(this).attr("id");
				var rel = $(this).val();
				$.ajax({
					url : basepath+"/survey/allowuser/update.html",
					type : "post",
					data : "&sauid="+sauid+"&rel="+rel,
					dataType : "json",
					success : function(data){},
					error : function(){}
				});
			});
		});
	}
</script>