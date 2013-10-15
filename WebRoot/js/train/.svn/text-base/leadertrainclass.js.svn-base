
$(function(){
	page(1);
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
	
});

/**
 * 分页
 */
function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_leadertrainclass .page_max").val()?$("#list_leadertrainclass .page_max").val():10;
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
	var url = basepath+"/list/trainclass.html?from=leader&pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_leadertrainclass").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		$("#list_leadertrainclass .page_max").change(function(){
			page(1);
		});
	});
	
}



  

