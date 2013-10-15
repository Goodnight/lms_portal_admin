/**
 * 培训档案 - 培训班
 */
var year; 
var way; //培训方式:在线/混合/面授

$(function(){
	page(1); //普通培训班
	$("#classButton").click(function(){
		page(1);
	});
	
	$("#outClassButton").click(function(){
		outpage(1);
	});
	
	$('.train-type').on('click', '.filter_type_item', function () {
		var o = $(this);
		way = o.find('a').attr('data-value');
		o.addClass('active').siblings().removeClass('active');
		page(1);
	});
});

function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#classList .page_max").val()?$("#classList .page_max").val():10;
	var query = "";
	year = $("#chooseYear").val();
	if(year != null && year != ""){
		query += "&year="+year;
	}
	if(null!=way && way!=""){
		query += "&way="+way;
	}
	var uid = $("#uid").val();
	var url = basepath+"/documents/documetForClassList.html?pagefn=page&page="+i+"&max="+max+"&uid="+uid+"&r="+Math.random();
	$("#classList").load(encodeURI(url+query),function(){
		
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//变更每页记录数量
		$("#classList .page_max").change(function(){
			page(1);
		});
	});
}

function outpage(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#classWPList .page_max").val()?$("#classWPList .page_max").val():10;
	var query = "";
	var outyear = $("#chooseYearTab").val();
	if(outyear != null && outyear != ""){
		query += "&year="+outyear;
	}
	var uid = $("#uid").val();
	var url = basepath+"/documents/documetForOutClassList.html?pagefn=outpage&page="+i+"&max="+max+"&uid="+uid+"&r="+Math.random();
	$("#classWPList").load(encodeURI(url+query),function(){
		
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//变更每页记录数量
		$("#classWPList .page_max").change(function(){
			outpage(1);
		});
	});
}
