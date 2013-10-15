/**
 * 培训计划中的培训班分页/搜索等
 */

$(function(){
	page(1);
	
	$("#nameid").focus(function(){
		var old = $(this).val();
		if(old == "请输入培训班名称"){
			$(this).val("");
		}
	});
	
	$("#nameid").blur(function(){
		var old = $(this).val();
		if(old == ""){
			$(this).val("请输入培训班名称");
		}
	});
	
	$("#searchButton").click(function(){
		page(1);
	});
	
	$("#clean").click(function(){
		$("#class_dep_name").text("");
		$("#class_dep_id").val("");
	});
	
});

function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_trainPlanClass .page_max").val()?$("#list_trainPlanClass .page_max").val():10;
	var tpid = $("#tpid").val();
	var query = "";
	var name = $("#nameid").val();
	if(name != null && name != "" && name!="请输入培训班名称"){
		query += "&name="+name;
	}
	var dep_id = $("#class_dep_id").val();
	if(dep_id != null && dep_id != ""){
		query += "&dep_id="+dep_id;
	}
	var status = $("#statusid").val();
	if(status != null && status != ""){
		query += "&status="+status;
	}
	var dep_contain = $("#dep_containid").val();
	if(dep_contain != null && dep_contain !=""){
		query += "&dep_contain="+dep_contain;
	}
	
	var ban = $("#ban").val();
	if(ban != null && ban != ""){
		query += "&ban="+ban;
	}

	var url = basepath+"/list/trainclass.html?from=plan&tpid="+tpid+"&pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_trainPlanClass").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		bindChooseAll("cls_chooseall_trainplan",true);
		//选择每页记录数量
		$("#list_trainPlanClass .page_max").change(function(){
			page(1);
		});
	});
}

/**
 * 批量删除 
 */

$(function(){
	$("#tpc_delete").click(function(){
		var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
		if(param == null || param == ""){
			alert("请选择删除项");
		}
		else{
			if(confirm("确定要删除选项吗？")){
				$.ajax({
					url : "deleteTrainClass.html",
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
