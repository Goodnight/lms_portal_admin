

$(function(){
	//加载列表
	upPage(1);
	assignPage(1);
	
	$(".chooseperson").live("click",function(){
		var tcdid = $(this).attr("id");
		var url = basepath+"/trainclass/uptrainclass/shownumdialog.html?tcdid="+tcdid+"&r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
	//高级搜索
	$("#btn_search").click(function(){
		upPage(1);
	});
	
	$("#btn_num_search").click(function(){
		assignPage(1);
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
});

/**
 * 分页
 */
function upPage(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_uptrainclass .page_max").val()?$("#list_uptrainclass .page_max").val():10;
	var name = $("#search_name").val();
	var start_date = $("#search_start_date").val();
	var end_date = $("#search_end_date").val();
	var query = "";
	if(name!=""&&name!="输入培训班的名称"){
		query += "&name="+name;
	}
	if(start_date!=""){
		query+="&start_date="+start_date;
	}
	if(end_date!=""){
		query+="&end_date="+end_date;
	}
	var url = basepath+"/list/trainclass.html?from=up&pagefn=upPage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_uptrainclass").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//选择每页记录数量
		$("#list_uptrainclass .page_max").change(function(){
			upPage(1);
		});
	});
	
}

function assignPage(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_assignednum .page_max").val()?$("#list_assignednum .page_max").val():10;
	var name = $("#search_num_name").val();
	var start_date = $("#search_num_start_date").val();
	var end_date = $("#search_num_end_date").val();
	var query = "";
	if(name!=""&&name!="输入培训班的名称"){
		query += "&name="+name;
	}
	if(start_date!=""){
		query+="&start_date="+start_date;
	}
	if(end_date!=""){
		query+="&end_date="+end_date;
	}
	var url = basepath+"/list/trainclassdep.html?from=up&pagefn=assignPage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_assignednum").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//选择每页记录数量
		$("#list_assignednum .page_max").change(function(){
			assignPage(1);
		});
	});
	
}


  

