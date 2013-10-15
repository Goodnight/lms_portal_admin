$(function(){
	
	$.datepicker.setDefaults( $.datepicker.regional[ "zh-CN" ] );
	$(".cls_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd"
	});
	$(".ui-datepicker-trigger").addClass("ml13");
	$(".ui-datepicker-trigger").addClass("vm");	
	
	$(".closebutton,#dialog .closed").click(function(){
		$("#dialog").hide();
	});
	
	//加载列表
	selectForCoursByYear(1);
});

//查询日期
$("#search_start_date").datepicker({
	showOn:"button",
	changeMonth: true,
	buttonImage:basepath+"/images/calendar.gif",
	buttonImageOnly:true,
	changeYear:true,
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
	changeYear:true,
	dateFormat:"yy-mm-dd",
	onSelect : function(dt){
		$("#search_start_date").datepicker("option","maxDate",dt);
	}
});

/**
 * 分页
 */
function documetForCours(i){
	var url = basepath+"/documt/documetForCoursList.html?pagefn=documetForCours&page="+i+"&max=10&r="+Math.random();
	$("#list_documetForCourse").load(encodeURI(url),function(){
	});
	
}


/**
 * 分页根据时间高级搜索在线课程
 */
function selectForCoursByYear(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_documetForCourse .page_max").val()?$("#list_documetForCourse .page_max").val():10;
	var query = "";
	var startDate = $("#search_start_date").val();
	if(startDate!=""){
		query+="&startDate="+startDate;
	}
	var endDate = $("#search_end_date").val();
	if(endDate!=""){
		query+="&endDate="+endDate;
	}
	var startDate = $("#search_start_date").val();
	if(startDate!=""){
		query+="&startDate="+startDate;
	}
	var coursewareType = $("#coursewareType").val();
	var uid = $("#uid").val();
	query += "&coursewareType="+coursewareType;
	var url = basepath+"/documents/documetForCoursList.html?pagefn=selectForCoursByYear&page="+i+"&uid="+uid+"&max="+max+"&r="+Math.random();
	$("#list_documetForCourse").load(encodeURI(url+query),function(){
		
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//变更每页记录数量
		$("#list_documetForCourse .page_max").change(function(){
		});
	});
}