/**
 * 
 */
$(function(){
	page(1);
	
	$("#btn_search").click(function(){
		page(1);
	});
	
	//弹出对话框函数
	$("#btn_chooseperson").click(function(){
		var url = basepath+"/dialog/user.html?page=page&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});	
	
	$("#btn_delete").click(function(){
		var e_ids = $("input:checkbox[name=all_student]:checked");
		if(e_ids.length>0){
			$.dialog.confirm("确定要删除选项吗？",function(){
				var url = basepath+"/trainclass/setStudent.html";
				var param= "";
				for(i=0;i<e_ids.length;i++){
					param += "id="+$(e_ids[i]).val()+"&";
				}
				param += "type=delete";
				$.ajax({
					url : url,
					type : "post",
					data : encodeURI(param),
					dataType : "json",
					success : function(msg){
						$.dialog.tips("操作成功",2,"tips.gif");
						page(1);
					},
					error : function(){
						$.dialog.tips("操作出错",2,"tips.gif");
					}
				});
			},function(){});
		}else{
			$.dialog.alert("请选择删除项！");
		}
	});
});



function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list .page_max").val()?$("#list .page_max").val():10;
	var sn = $("#search_user_sn").val();
	var name = $("#search_user_name").val();
	var mobile = $("#search_user_mobile").val();
	var query = "";
	if(name!=""&&name!="输入人员姓名"){
		query += "&name="+name;
	}
	if(sn!=""){
		query+="&sn="+sn;
	}
	if(mobile!=""){
		query+="&mobile="+mobile;
	}
	var url = basepath+"/list/student.html?tcid="+tcid+"&from=out&pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		bindChooseAll("cls_chooseall_all");
		//选择每页记录数量
		$("#list .page_max").change(function(){
			page(1);
		});
	});
}