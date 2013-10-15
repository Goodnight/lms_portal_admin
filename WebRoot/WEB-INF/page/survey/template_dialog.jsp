<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="ngreyborder changeblue2">
        	<h2 class="png_bg">选择模板</h2>
      
        	
        	<div class="scroll" style="height:400px;">
        	  	 <div class="searchblock m10 mt20">
                    	<table>
                        	<tr>
                            	<td class="taR">模板名称</td>
                                <td class="taL"><input type="text" class="input" id="tp_name" name="tp_name"/></td>
                                <td class="taR">模板类别</td>
                                <td class="taL"><select id="tp_type" name="tp_type"><option value="">请选择</option><option value="21">反应层评估</option><option value="22">行为层评估</option><option value="23">综合评估</option><option value="24">LPI测评</option><option value="25">通用满意度调查</option></select></td>
                                <td><input name="input2" type="button" class="searchbutton mr10" value="搜索" hidefocus="true" onclick="tpPage(1)" /></td>
                            </tr>
                        </table>
                    </div>
            	<div id="tplist" class="dataTables_wrapper mt40" ></div>
            </div>
            <div align="right" class="mr10" >
            	<input id="btn_template_ok" type="button" class="step m10" value="确定"/>
            </div>
</div>
<script type="text/javascript">
	var html_id = "${html_id}";
	var html_name = "${html_name}";
	$(function(){
		tpPage(1);
		
		$("#btn_template_ok").click(function(){
			var id = $("input[name=tpid]:checked").first().val();
			var name = $("input[name=tpid]:checked").first().parent().next().text();
			var tpmode = $("input[name=tpmode]:checked").val();
			if(tpmode=="1"){
				$(".cls_tpid").each(function(i,n){
					$(n).val(id);
				});
				$(".cls_tpname").each(function(i,n){
					$(n).val(name);
				});
			}else{
				$("#"+html_id).val(id);
				$("#"+html_name).val(name);
			}
			
			$("#dialog").hide();
		});
	});
	
	function tpPage(i){
		$.dialog.tips('数据加载中...',600,'loading.gif');
		var tp_name = $("#tp_name").val();
		tp_name = $.trim(tp_name);
		var tp_type = $("#tp_type").val();
		tp_name = encodeURI(tp_name);
		var param = "&tp_name="+tp_name+"&tp_type="+tp_type;
		var max = $("#tplist .page_max").val()?$("#tplist .page_max").val():10;
		var url = basepath + "/survey/dialog/list/template.html?pagefn=tpPage&page="+i+param+"&max="+max+"&r="+Math.random();
		$("#tplist").load(url,function(){
			$.dialog.tips('数据加载完毕',1,'tips.gif');
			//选择每页记录数量
			$("#tplist .page_max").change(function(){
				tpPage(1);
			});
		});
	}
</script>