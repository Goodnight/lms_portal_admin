

$(function(){
	
	//删除培训班
	$("#btn_delete").click(function(){
		if($("input:checkbox[name=cid]:checked").length>0){
			$.dialog.confirm("确定要删除选项吗？",function(){
				var url = basepath+"/trainclass/delete.html";
				var param = $.param($("input:checkbox[name=cid]:checked"));
				$.ajax({
					url : url,
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
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
			},function(){});
		}else{
			$.dialog.alert("请选择删除项！");
		}
	});
	
	$("input[name=isSub]").click(function(){
		page(1);
	});
	
	//高级搜索
	$("#btn_search").click(function(){
		page(1);
	});
	
	$(".cls_openInfo").live("click",function(){
		var tcid = $(this).attr("id");
		$("#objId").attr("value",tcid);
		var url = basepath + "/trainclass/out/showinfo.html?tcid="+tcid;
		$("#dialog_content").load(url);
		$("#dialog,#dialog .blackall,#dialog .newwindow").show();
	});
	
	$("#search_start_date").datepicker({
		showOn:"button",
		changeMonth: true,
		changeYear: true,
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
		changeYear: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#search_start_date").datepicker("option","maxDate",dt);
		}
	});
});

/**
 * 分页
 */
function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_outtrainclass .page_max").val()?$("#list_outtrainclass .page_max").val():10;
	var isSub = $("input[name=isSub]:checked").val();
	var orgid = $("#search_orgid").val();
	var name = $("#search_name").val();
	var address = $("#search_address").val();
	var level = $("#search_level").val();
	var start_date = $("#search_start_date").val();
	var end_date = $("#search_end_date").val();
	var query = "&isSub="+isSub;
	if(orgid!=""){
		query += "&orgid=" + orgid;
	}
	if(name!=""){
		query += "&name="+name;
	}
	if(address!=""){
		query += "&address="+address;
	}
	if(level!=""){
		query += "&level="+level;
	}
	if(start_date!=""){
		query+="&start_date="+start_date;
	}
	if(end_date!=""){
		query+="&end_date="+end_date;
	}
	var url = basepath+"/list/trainclass.html?pagefn=page&page="+i+"&max="+max+"&from=out&r="+Math.random();
	$("#list_outtrainclass").load(encodeURI(url+query),function(){
			bindChooseAll("cls_chooseall_out");
			$.dialog.tips('数据加载完毕',1,'tips.gif');
			$("#list_outtrainclass .page_max").change(function(){
				page(1);
			});
	});
	
}

function orgClick(type,id,name){
	$("#search_orgid").val(id);
	page(1);
}

  

