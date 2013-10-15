
/**
 * 直线经理首页查询添加删除
 */
setOrgData(0);
$(function(){
	page(1);
	
	$("#page_max").change(function(){
		page(1);
	});
	
	$("#searchButton").click(function(){
		page(1);
	});
	
	$(".chooseperson").click(function(){
		var id = $(this).attr("id");
		var url = basepath+"/dialog/user.html?from=choose&html_name="+id+"_name&html_id="+id+"_id&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	//打开选择人员对话框
	$("#addManager").click(function(){
		var url = basepath+"/dialog/user.html?page=page&r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
		
	//权限移除
	$("#btn_delete").click(function(){
		if(confirm("确定要删除选项吗？")){
			var param = $.param($("input:checkbox[name=index]:checked"));
			$.ajax({
				url : "deleteLineManager.html",
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
	});	
});

function orgClick(type,id,name){
	if(type=="dep"){
		$("#search_orgid").val(id);
		page(1);
		setNav(name);
	}
}

/**
 * 更新导航
 */
function setNav(name){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+name+"</li>");
}

function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var query = "&ischilddep=0";
	var max = $("#list_linemanagerlist.page_max").val()?$("#list_linemanagerlist.page_max").val():10;
	var orgid = $("#search_orgid").val();
	if(orgid != null && orgid !=""){
		query += "&orgid="+orgid;
	}
	var sn = $("#snId").val();
	if(sn != null && sn != ""){
		query += "&sn="+sn;
	}
	var name = $("#nameId").val();
	if(name != null && name != ""){
		query += "&name="+name;
	}
	var accreditor = $("#accreditor_id").val();
	if(accreditor != null && accreditor != ""){
		query += "&accreditor="+accreditor;
	}
	var accredit_time = $("#timeId").val();
	if(accredit_time != null && accredit_time != ""){
		query += "&accredit_time="+accredit_time;
	}
	var isSub = $("#subId").val();
	if(isSub != null && isSub != ""){
		query += "&isSub="+isSub;
	}

	var url = basepath+"/list/auth/lineManagerList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_linemanagerlist").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		bindChooseAll("cls_chooseall");
		//选择每页记录数量
		$("#list_linemanagerlist.page_max").change(function(){
			page(1);
		});
	});
}
