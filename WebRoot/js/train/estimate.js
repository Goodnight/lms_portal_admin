
$(function(){
	
	//加载列表
	pageResponse(1);
	pageBehaviour(1);
	
	$(".btn_delete").click(function(){
		var url = basepath + "/trainclass/estimate/delete.html";
		var id = $(this).attr("id");
		var ids = $("#list_"+id+"_estimate input[name=id]:checked");
		if(ids.length>0){
			$.dialog.confirm("确定要删除选项吗？",function(){
				var param="";
				for(i=0;i<ids.length;i++){
					if($(ids[i]).attr("delete")=="1"){
						if($(ids[i]).attr("partinnum")>0)
							{
							$.dialog.alert("已有人员参与，无法删除！");
							}else{
								param +="&id="+$(ids[i]).val();
							}
					}else{
						$.dialog.alert("选中内容包含已发布选项！");
						return;
					}
				}
				if(param==""){
					return;
				}
				$.ajax({
					url : url,
					type : "post",
					data : param,
					dataType : "json",
					success : function(data){
						if(data==null){
							$.dialog.tips("已有人员参与，无法删除",2,"tips.gif");
						}else{
							$.dialog.tips("删除成功",2,"tips.gif");
							if(id=="response"){
								pageResponse(1);
							}else{
								pageBehaviour(1);
							}
						}
					},
					error : function(){
						$.dialog.tips("已有人员参与，无法删除",2,"tips.gif");
					}
				});
			},function(){});
		}else{
			$.dialog.alert("请选择删除项！");
		}
	});
	
});

/**
 * 反映层评估分页
 */
function pageResponse(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_response_estimate .page_max").val()?$("#list_response_estimate .page_max").val():10;
	var url = basepath+"/list/trainclassestimate.html?pagefn=pageResponse&page="+i+"&max="+max+"&type=1&tcid="+tcid+"&r="+Math.random();
	$("#list_response_estimate").load(encodeURI(url),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		bindChooseAll("cls_chooseall_response");
		//选择每页记录数量
		$("#list_response_estimate .page_max").change(function(){
			pageResponse(1);
		});
	});
}

/**
 * 行为层评估分页
 */
function pageBehaviour(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_behaviour_estimate .page_max").val()?$("#list_behaviour_estimate .page_max").val():10;
	var url = basepath+"/list/trainclassestimate.html?pagefn=pageBehaviour&page="+i+"&max="+max+"&type=2&tcid="+tcid+"&r="+Math.random();
	$("#list_behaviour_estimate").load(encodeURI(url),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		bindChooseAll("cls_chooseall_behaviour");
		//选择每页记录数量
		$("#list_behaviour_estimate .page_max").change(function(){
			pageBehaviour(1);
		});
	});
}

function changeStatus(obj,status,id){
	var url = basepath +"/survey/ajax/update.html";
	var param = "sId="+id+"&status="+status;
	$.ajax({
		url : url,
		type : "post",
		data : param,
		dataType : "json",
		success : function(msg){
			if("2" == status){
				$(obj).text("已发布");
				$(obj).attr("onclick","javascript:changeStatus(this,'1','"+id+"');");
				$("#"+id).attr("delete","0");
			}else{
				$(obj).text("未发布");
				$(obj).attr("onclick","javascript:changeStatus(this,'2','"+id+"');");
				$("#"+id).attr("delete","1");
			}
		},
		error : function(){}
	});
}