
$(function(){
	
	//删除评估
	$("#btn_delete").click(function(){
		var ids = $("input:checkbox[name=id]:checked");
		if(ids.length>0){
			$.dialog.confirm("你确定要删除选中的评估吗？",function(){
				var param = "";
				for(i=0;i<ids.length;i++){
					if($(ids[i]).attr("delete")==1){
						if($(ids[i]).attr("partinnum")>0)
						{
						$.dialog.alert("已有人员参与，无法删除！");
						}else{
						param += "&id="+$(ids[i]).val();
						}
					}else{
						$.dialog.alert("选中内容包含已发布选项！");
						return;
					}
				}
				if(param == ""){
					return;
				}
				$.ajax({
					url : basepath+"/survey/delete.html",
					type : "POST",
					data : param + "&rq=ajax&rqtp=json",
					dataType : "json",
					success : function(data){
						checkLogin(data);
						if(data==null){
							$.dialog.tips("删除出错",2,"tips.gif");
						}else{
							$.dialog.tips("删除成功",2,"tips.gif");
							page(1);
						}
					},
					error:function(){
						$.dialog.tips("删除出错",2,"tips.gif");
					}
				});
			},function(){
					
			});
		}else{
			$.dialog.alert("请选择删除项！");
		}
	});
	
	//高级搜索
	$(".searchbutton").click(function(){
		page(1);
	});
	
	//查询日期
	$("#search_start_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#search_end_date").datepicker("option","minDate",dt);
		}
	});
	
	$("#search_end_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#search_start_date").datepicker("option","maxDate",dt);
		}
	});
	
	$("#btn_import").click(function(){
		var url = basepath + "/behavior/upload.html";
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
});

/**
 * 树菜单点击事件
 */
function orgClick(type,id,name){
	$("#search_depid").val(id);
	page(1);
}

/**
 *评估列表分页
 */
function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list .page_max").val()?$("#list .page_max").val():10;
	var orgid = $("#search_depid").val();
	var topic = $("#search_topic").val();
	var start_date = $("#search_start_date").val();
	var end_date = $("#search_end_date").val();
	var query = "&type="+$("#search_type").val();
	if(orgid!=""){
		query += "&orgid="+orgid;
	}
	if(topic!=""){
		query+="&topic="+topic;
	}
	if(start_date!=""){
		query+="&start_date="+start_date;
	}
	if(end_date!=""){
		query+="&end_date="+end_date;
	}
	var url = basepath+"/survey/list.html?rq=ajax&pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//全选
		bindChooseAll("cls_chooseall_est");
		//选择每页记录数量
		$("#list .page_max").change(function(){
			page(1);
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