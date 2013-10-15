$(function(){
	
	//加载列表
//	page(1);
	
	//选择每页记录数量
	$("#page_max").change(function(){
		page(1);
	});
	
	$(".ban").live("click",function(){
		alert("临时账号管理, 只能在部门下新建, 不能在公司下新建!");
	});
	
	//删除培训班
	$("#btn_delete").click(function(){
		if($("input:checkbox[name=id]:checked").length>0){
			$.dialog.confirm("确定要删除选项吗？",function(){
				var param = $.param($("input:checkbox[name=id]:checked"));
				$.ajax({
					url : "delete.html",
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
});


function export_count(){
	var orgid = $("#search_orgid").val();
	var sn = $("#sn").val();
	var name = $("#name").val();
	var status = $("#status").val();
	var ischilddep = $("input[name='ischilddep']:checked").val();
	var query = "";
	if(sn != ""){
		query += "&sn="+sn;
	}
	if(orgid!=""){
		query += "&orgid=" + orgid;
	}
	if(status != ""){
		query += "&status="+status;
	}
	if(name != ""){
		query += "&name="+name;
	}
	if(ischilddep!=""){
		query += "&ischilddep="+ischilddep;
	}
	var url = basepath+"/list/exportTempUsersCount.html?r="+Math.random();
	$.post(encodeURI(url+query), function(date){
		if(date>=10000){
			$.dialog.alert("检索的范围过大，超过导出限制，请缩小范围后再导出",null);
		}else{
			export_page();
		}
	});
}

/**
 * 分页
 */
function export_page(){
	
	var orgid = $("#search_orgid").val();
	var sn = $("#sn").val();
	var name = $("#name").val();
	var status = $("#status").val();
	var ischilddep = $("input[name='ischilddep']:checked").val();
	var query = "";
	if(sn != ""){
		query += "&sn="+sn;
	}
	if(orgid!=""){
		query += "&orgid=" + orgid;
	}
	if(status != ""){
		query += "&status="+status;
	}
	if(name != ""){
		query += "&name="+name;
	}
	if(ischilddep!=""){
		query += "&ischilddep="+ischilddep;
	}
	var url = basepath+"/list/exportTempUsers.html?r="+Math.random();
	$("#query_form").attr("action",encodeURI(url+query));
	$("#query_form").attr("method","post");
	$("#query_form").submit();
}


/**
 * 分页
 */
function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_tempuser .page_max").val()?$("#list_tempuser .page_max").val():10;
	var orgid = $("#search_orgid").val();
	var sn = $("#sn").val();
	var name = $("#name").val();
	var status = $("#status").val();
	var ischilddep = $("input[name='ischilddep']:checked").val();
	var query = "";
	if(sn != ""){
		query += "&sn="+sn;
	}
	if(orgid!=""){
		query += "&orgid=" + orgid;
	}
	if(status != ""){
		query += "&status="+status;
	}
	if(name != ""){
		query += "&name="+name;
	}
	if(ischilddep!=""){
		query += "&ischilddep="+ischilddep;
	}
	var url = basepath+"/list/tempuser.html?rq=ajax&from=user_list&pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_tempuser").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//全选
		bindChooseAll("cls_chooseall_user");
		//变更每页记录数量
		$("#list_tempuser .page_max").change(function(){
			page(1);
		});
	});
	
}

/**
 * 点击公司树节点事件
 * @param type	节点类型：公司 or 部门
 * @param id		公司或者部门id
 * @param name 公司或者部门名称
 */
function orgClick(type,id,name){
	$("#search_orgid").val(id);
	page(1);
	if(type == "org"){
		$("#link_new").attr("href","#");
		$("#link_new").attr("class","functionbutton ban");
	}
	if(type == "dep"){
		$("#link_new").attr("href",basepath+"/user/temp/new.html");
		$("#link_new").attr("class","functionbutton");
	}
}
