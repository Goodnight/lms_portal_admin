<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="z w176">
 	<div class="companylist w164 h455 newtree2">
     		<div class="creatlesson">
     			<div class="pr"><h2 class="png_bg organize_h2">组织部门</h2></div>
         	</div>
			<div id="dialog_orgtree" class="demo mt20"></div>   
    </div>
</div>
<div class="y w750">
	<div class="scroll">
	<div class="ngreyborder" style="background:#fff;">
		<h2 class="png_bg">选择分配的培训班</h2>
	     <div class="searchblock mt40">
				  <table cellspacing="0" cellpadding="0" border="0">
					  <tbody><tr>
					  	<input type="hidden" id="dialog_search_org" value="" />
						<td class="taR">培训班名称</td>
						<td class="taL"><input id="class_Name" type="text" class="input" name=""></td>
						<td class="taR">培训班状态</td>
						<td class="taL"><select id="class_status"><option value="0">全部</option><option value="1">新建</option><option value="2"> 实施</option><option value="3">完成</option></select></td>
					  </tr>
			  </tbody></table>
					<div align="right" class="m10"><input id="dialogSearch" type="button" hidefocus="true" value="搜索" class="searchbutton" name=""></div>
		  </div>
	     <div class="choosedcourse">
	        <!-- 培训计划列表 -->
	        <div id="list_related" class="dataTables_wrapper"></div>
	         <div class="makesure">
	        	<input type="button" class="step cls_ok neworgbutton" value="确定"/><a href="javascript:;" class="back m10 cls_close" >关闭</a>
	        </div>
	     </div>	     
	</div>
	</div>
</div>
<script type="text/javascript">
	$(function(){
		//加载培训班
		relatePage(1);
		initTree("#dialog_orgtree",null,null,"org",function (type,id,name){
			$("#dialog_search_org").val(id);
			relatePage(1);
		});
		
		//设置已选择的培训计划id和name
		$(".cls_ok").click(function(){
			$("#dialog").hide();
		});
		
		
		$("#list_related").on("click", '.cls_chooseall', function(){
			var checked = $(this).attr("checked");
			var items = $('#list_related').find('.cls_chooseitem');
			
			for (var i = 0; i < items.length; i++) {
				(checked == "checked") ? $(items[i]).attr('checked', 'checked') : $(items[i]).removeAttr('checked');
			}
			
		});
		
		//关闭弹窗
		$(".cls_close").click(function(){
			$("#dialog").hide();
		});
		
		//搜索
		$("#dialogSearch").click(function(){
			relatePage(1);
        });
        
        //清空
        $("#dialogClear").click(function(){
            $("#plan_Name").val("");
            $("#class_status").val("0");
            $("#class_Name").val("");
        });
		
	});
	
	//分页
	function relatePage(i){
		$.dialog.tips('数据加载中...',600,'loading.gif');
		var max = $("#list_related .page_max").val()?$("#list_related .page_max").val():10;
	    var query = "";
		
	    var neworgid = $("#dialog_search_org").val();
	    if(neworgid!=""){
			query += "&orgid=" + neworgid;
		}
		var status = $("#class_status").val();
	    if(status!="" && status!="0"){
			query += "&status=" + status;
		}
	    var class_Name = $("#class_Name").val();
	    if(class_Name != null && class_Name != ""){
	        query += "&name="+class_Name;
	    }
		var url = basepath+"/list/trainclass.html?from=stastic&pagefn=relatePage&max="+max+"&page="+i+"&r="+Math.random();
		$("#list_related").load(encodeURI(url+query),function(){
			$.dialog.tips('数据加载完毕',1,'tips.gif');
			//全选
			//变更每页记录数量
			$("#list_related .page_max").change(function(){
				relatePage(1);
			});
		});
	}
</script>