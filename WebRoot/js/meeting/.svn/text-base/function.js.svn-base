
/**
 * 会议管理首页分页、批量删除、高级搜索
 */

$(function(){
	page(1);
	
	$("#mt_nameid").focus(function(){
		var old = $(this).val();
		if(old == "输入会议名称"){
			$(this).val("");
		}
	});
	
	$("#mt_nameid").blur(function(){
		var old = $(this).val();
		if(old == ""){
			$(this).val("输入会议名称");
		}
	});
	
	$("#page_max").change(function(){
		page(1);
	});
	
	$("#selectButton").click(function(){
		page(1);
	});
	
	$("#clear_master").click(function(){
		$("#master_name").val("");
		$("#master_id").val("");
	});
	
	$(".chooseperson").click(function(){
		var id = $(this).attr("id");
		var url = basepath+"/dialog/user.html?from=choose&html_name="+id+"_name&html_id="+id+"_id&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
		
	/**
	 * 会议管理删除功能  
	 */

	$("#btn_delete").click(function(){
		var ids = $("input:checkbox[name=mt_index]:checked");
		if(ids == null || ids == "" || ids.length == 0){
			alert("请选择删除项");
		}
		else{
			if(confirm("确定要删除选项吗？")){
				var param = "method=remove&mId=";
				if(ids.length>0){
					for(n=0;n<ids.length;n++){
						param += $(ids[n]).val()+",";
					}
					$.ajax({
						url : basepath+"/meetingManage/deleteMeeting.html",
						type : "POST",
						data : param,
						dataType : "json",
						success : function(data){
							if(data!=null){
								page(1);
							}else{
								alert("移除出错");
							}
						},
						error : function(){
							alert("移除出错");
						}
					});
				}
			}
		}	
	});
	
});

var sign = "";
function orgClick(type,id,name){
	if(type=="dep"){
		sign = 1;
		$("#search_orgDepId").val(id);
		page(1);
		setNav(name);
	}
	else{
		sign = 0;
		$("#search_orgDepId").val(id);
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
	var max = $("#list_mtmanagelist .page_max").val()?$("#list_mtmanagelist .page_max").val():10;
	var orgDepId = $("#search_orgDepId").val();
	if(orgDepId != null && orgDepId !=""){
		query += "&orgDepId="+orgDepId;
		query += "&sign="+sign;
	}
	else{
		var orgDepOriId = $("#orgDepOriId").val();
		query += "&orgDepId="+orgDepOriId;
		query += "&sign=0";
	}
	var mt_name = document.getElementById("mt_nameid").value;
	if(mt_name != null && mt_name != "" && mt_name != "输入会议名称"){
		query += "&name="+mt_name;
	}
	var mt_pub = document.getElementById("mt_pubid").value;
	if(mt_pub != null && mt_pub != ""){
		query += "&status="+mt_pub;
	}
	var start_date = document.getElementById("startdateid").value;
	if(start_date != null && start_date != ""){
		query += "&start_date="+start_date;
	}
	var end_date = document.getElementById("enddateid").value;
	if(end_date != null && end_date != ""){
		query += "&end_date="+end_date;
	}
	var master_id = document.getElementById("master_id").value;
	if(master_id != null && master_id != ""){
		query += "&master_id="+master_id;
	}
	var isSub = $("input:radio[name=isSub]:checked").val();
	if(isSub != null && isSub != ""){
		query += "&isSub="+isSub;
	}
	var url = basepath+"/list/meetingManage/meetingManageList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_mtmanagelist").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		bindChooseAll("cls_chooseall");
		//选择每页记录数量
		$("#list_mtmanagelist .page_max").change(function(){
			page(1);
		});
	});
}
