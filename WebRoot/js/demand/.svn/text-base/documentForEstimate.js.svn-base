$(function(){
	//加载列表
	documetForEstimate(1);	
});



//分页根据名字高级搜索调查评估
function selectForEstimateByName(i){
	var query = "";
	var topic = $("#topic").val();
	if(topic != "" || topic != null)
	{
		query += "&topic="+topic;
	}
	var uid = $("#uid").val();
	var url = basepath+"/documents/documetForEstimateList.html?pagefn=selectForEstimateByName&page="+i+"&max=10&uid="+uid+"&r="+Math.random();
	$("#list_documetForEstimate").load(encodeURI(url+query),function(){
	});
}


/**
 * 分页
 */
function documetForEstimate(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_documetForEstimate .page_max").val()?$("#list_documetForEstimate .page_max").val():10;
	var uid = $("#uid").val();
	var url = basepath+"/documents/documetForEstimateList.html?pagefn=documetForEstimate&page="+i+"&max="+max+"&uid="+uid+"&r="+Math.random();
	$("#list_documetForEstimate").load(encodeURI(url),function(){
		
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//变更每页记录数量
		$("#list_documetForEstimate .page_max").change(function(){
			documetForEstimate(1);
		});
	});
	
}



/**
 * 分页根据年份高级搜索调查评估
 */
function selectForEstimate(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_documetForEstimate .page_max").val()?$("#list_documetForEstimate .page_max").val():10;
	var query = "";
	var year = $("#estYear").val();
	if(year != "" || year != null)
	{
		query += "&year="+year;
	}
	var uid = $("#uid").val();
	var url = basepath+"/documents/documetForEstimateList.html?pagefn=selectForEstimate&page="+i+"&max="+max+"&uid="+uid+"&r="+Math.random();
	$("#list_documetForEstimate").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//变更每页记录数量
		$("#list_documetForEstimate .page_max").change(function(){
			selectForEstimate(1);
		});
	});
}