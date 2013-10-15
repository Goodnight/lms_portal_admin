/**
 * 
 */
$(function(){
	//加载列表
	page(1);
	
	$("#btn_delete").click(function(){
		var cks = $("input:checkbox[name=resourceId]:checked");
		if(cks.length>0){
			$.dialog.confirm("确定要删除选项吗？",function(){
				var params = "";
				for(i=0;i<cks.length;i++){
					//通过delete属性判断是否可以删除
					if($(cks[i]).attr("delete")=="1"){
						params += "rid="+$(cks[i]).val()+"&vid="+$(cks[i]).parent().parent().next().val()+"&";
					}else{
						$.dialog.alert("选中内容包含已发布选项！");
						return;
					}
				}
				if(params==""){
					return;
				}
				var url = basepath + "/videoclass/delete.html";
				$.ajax({
					url : url,
					type : "post",
					data : params,
					dataType : "json",
					success : function(msg){
						checkLogin(msg);
						if(msg==null){
							$.dialog.tips("删除出错",2,"tips.gif");
						}else{
							$.dialog.tips("删除成功",2,"tips.gif");
							page(1);
						}
					},
					error : function(){
						$.dialog.tips("删除出错",2,"tips.gif");
					}
				});
			},function(){
				
			});
		}else{
			$.dialog.alert("请选择删除项！");
		}
	});
});

/**
 * 分页函数
 * @param i	页码
 */
function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_videoclass .page_max").val()?$("#list_videoclass .page_max").val():10;
	var url = basepath+"/list/trainresource/videoclass.html?tcid="+tcid+"&pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_videoclass").load(encodeURI(url),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		$("#list_videoclass .page_max").change(function(){
			page(1);
		});
		bindChooseAll("cls_chooseall");
		$(".chooseperson").click(function(){
			var vid = $(this).attr("vid");
			var url = basepath+"/trainclass/dialog/videouser.html?vid="+vid+"&r="+Math.random();
			$("#dialog_content").load(encodeURI(url));
			$("#dialog").show();
		});
	});
}

/**
 * 改变同步课堂的发布状态
 */
function changeStatus(obj,t,id){
	var url = basepath +"/videoclass/ajax/update.html";
	var param = "vId="+id+"&status="+t;
	$.ajax({
		url : url,
		type : "post",
		data : param,
		dataType : "json",
		success : function(msg){
			if(0==t){
				$(obj).text("未发布");
				$("#"+id).attr("delete","1");
				$(obj).attr("onclick","javascript:changeStatus(this,1,'"+id+"');");
			}else{
				$(obj).text("已发布");
				$("#"+id).attr("delete","0");
				$(obj).attr("onclick","javascript:changeStatus(this,0,'"+id+"');");
			}
		},
		error : function(){}
	});
	
}

