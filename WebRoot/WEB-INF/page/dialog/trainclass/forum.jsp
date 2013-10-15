<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="ngreyborder">
	<h2 class="png_bg">选择已有讨论区</h2>
   	<div class="scroll mt20 h400">   
   	 	<div class="searchblock mt20">
	        <table border="0" cellspacing="0" cellpadding="0">
	           <tr>
	             <td class="taR">讨论区名称</td>
	             <td class="taL"><input id="search_forum_name" type="text" class="input vm"/></td>
	             <td class="taR">创建人</td>
	             <td class="taL"><input id="search_create_name" type="text" class="input vm"/></td>
	             <td class="taR">标签</td>
	             <td class="taL"><input id="search_tags" type="text" class="input vm"/></td>
	           </tr>
	         </table>
       		<div align="right" class="mt10">
       			<input id="btn_search_forum" type="button" class="searchbutton m10" value="搜索" style="height:30px;"/>
       		</div>
 		</div>            
		<div id="forum_list" class="dataTables_wrapper mt20"></div> 
	</div> 
</div>
<div align="right" class="mr10"><input id="btn_ok" type="button" class="step m10 vm windowbutton" value="确定"/></div> 
<script type="text/javascript">
	$(function(){
		page(1);
		
		$("#btn_search_forum").click(function(){
			page(1);
		});
		
		$("#btn_ok").click(function(){
			var forums = $("input[name=forum]:checked");
			if(forums.length>0){
				$("#forum_name").val($(forums[0]).attr("forumname"));
				$("#forum_id").val($(forums[0]).val());
			}
		});
	});
	
	function page(i){
		$.dialog.tips('数据加载中...',600,'loading.gif');
		var max = $("#forum_list .page_max").val()?$("#forum_list .page_max").val():10;
		var forum_name = $("#search_forum_name").val();
		var create_name = $("#search_create_name").val();
		var query = "";
		if(forum_name!=""){
			query+="&forum_name="+forum_name;
		}
		if(create_name!=""){
			query+="&create_name="+create_name;
		}
		var url = basepath + "/list/forum/list.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
		$("#forum_list").load(encodeURI(url+query),function(){
			$.dialog.tips('数据加载完毕',1,'tips.gif');
			//选择每页记录数量
			$("#forum_list .page_max").change(function(){
				page(1);
			});
		});
	}
</script>