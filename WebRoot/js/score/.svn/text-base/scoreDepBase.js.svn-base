$(function(){
	//加载列表
	page(1);
	
});

/**
 * 
 */
function page(i){
	var max = $("#list_scoreDepBaseList .page_max").val()?$("#list_scoreDepBaseList .page_max").val():10;
	var query = "";
	var depId = $("#depId").val();
	query += "&depId="+depId;
	var url = basepath+"/list/toScoreBaseDepList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_scoreDepBaseList").load(encodeURI(url+query),function(){
	});
}


//高级搜索
function sechBottonClick(i){
	var max = $("#list_scoreDepBaseList .page_max").val()?$("#list_scoreDepBaseList .page_max").val():10;
	var year = $("#year").val();
	var query = "";
	if(year == "全部")
		{
		year = "";
		}
	query += "&year="+year;
	var depId = $("#depId").val();
	query += "&depId="+depId;
	var url = basepath+"/list/toScoreBaseDepList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_scoreDepBaseList").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_scoreDepBaseList .page_max").change(function(){
			sechBottonClick(1);
		});
	});
}