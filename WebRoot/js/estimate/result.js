/**
 * 
 */
$(function(){
	page(1);
	
	$(".cls_report").live("click",function(){
		var surveyId = $(this).parent().parent().attr("surveyId");
		var report = $(this).attr("report");
		var userid = $(this).attr("userid");
		var url = basepath + "/survey/result/report.html?report="+report+"&surveyId="+surveyId+"&userid="+userid;
		$.dialog({
			lock:true,
		    width: '700px',
		    height: '500px',
		    title : '行为数据一览',
		    content: "url:"+url
		});
	});
	
});

//高级搜索
$(".searchbutton").click(function(){
	page(1);
});


function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var objectSn = $("#objectSn").val();
	var objectName = $("#objectName").val();
	var max = $("#list .page_max").val()?$("#list .page_max").val():10;
	var url = basepath + "/survey/result/detail.html?page="+i+"&max="+max+"&sid="+sid+"&r="+Math.random()+"&objectSn="+objectSn+"&objectName="+objectName;
	$("#detail_list").load(url,function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//选择每页记录数量
		$("#list .page_max").change(function(){
			page(1);
		});
	});
}

/*function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list .page_max").val()?$("#list .page_max").val():10;
	var url = basepath + "/survey/result/list.html?page="+i+"&max="+max+"&sid="+sid+"&r="+Math.random();
	$("#detail_list").load(url,function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//选择每页记录数量
		$("#list .page_max").change(function(){
			page(1);
		});
	});
}*/