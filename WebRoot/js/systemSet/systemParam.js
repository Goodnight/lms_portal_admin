$(function(){
	page(1);
	
	$("#searchButton").click(function(){
		page(1);
	});
	
	//新增系统参数弹窗
	$("#newParam").click(function(){
		var url = basepath+"/dialog/createSysParam.html";
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
	//删除系统参数
	$("#btn_delete").click(function(){
		var param = $.param($("input:checkbox[name=index]:checked"));
		if(param == null || param == ""){
			alert("请选择删除项");
		}
		else{
			if(confirm("确定要删除选项吗？")){	
				$.ajax({
					url : basepath+"/systemParam/deleteSystemParam.html",
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
						if(data == null){
							alert("删除出错");
						}else{
							page(1);
						}
					},
					error:function(){
						alert("删除出错");
					}
				});
			}
		}
	});
});

function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var query = "&ischilddep=0";
	var max = $("#list_paramList .page_max").val()?$("#list_paramList .page_max").val():25;
	var param_Name = $("#param_Name").val();
	if(param_Name != null && param_Name != ""){
		query += "&param_Name="+param_Name;
	}
	var param_Type = $("#param_Type").val();
	if(param_Type != null && param_Type != ""){
		query += "&param_Type="+param_Type;
	}
	var url = basepath+"/list/systemParam/systemParamList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_paramList").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		bindChooseAll("cls_chooseall");
		//选择每页记录数量
		$("#list_paramList .page_max").change(function(){
			page(1);
		});
	});
}
