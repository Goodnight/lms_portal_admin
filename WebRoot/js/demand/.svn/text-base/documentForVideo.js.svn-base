/**
 * 培训档案 - 同步课程
 */
$(function(){
	page(1);
	
});



function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var query = "";
	var max = $("#videoList .page_max").val()?$("#videoList .page_max").val():10;
	var year = $("#chooseYear").val();
	if(year != null && year != ""){
		query += "&year="+year;
	}
	var uid = $("#uid").val();
	var url = basepath+"/documents/documetForVideoList.html?pagefn=page&page="+i+"&uid="+uid+"&max="+max+"&r="+Math.random();
	$("#videoList").load(encodeURI(url+query) ,function(){
		
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//变更每页记录数量
		$("#videoList .page_max").change(function(){
			page(1);
		});
	});
}
