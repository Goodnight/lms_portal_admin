$(function(){
	//加载列表
	documetForGainScore(1);
	selectScoreGain(1);
});

/**
 * 分页奖励积分
 */
function documetForGainScore(i){
	var url = basepath+"/documt/documetForGainScore.html?pagefn=documetForGainScore&page="+i+"&max=10&r="+Math.random();
	$("#list_documentForGainScore").load(encodeURI(url),function(){
	});
	$("#yearTwoScore").attr("display","none"); 
	$("#yearTwoScore").css("display","none");
}

/**
 * 分页高级搜索奖励积分
 */
function selectScoreGain(i){
	var query = "";
	var gainYear = $("#gainScoreYear").val();
	if(gainYear != "" || gainYear != null)
	{
		query += "&gainScoreYear="+gainYear;
	}
	var url = basepath+"/documt/documetForGainScore.html?pagefn=selectScoreGain&page="+i+"&max=10&r="+Math.random();
	$("#list_documentForGainScore").load(encodeURI(url+query),function(){
	});
	$("#yearTwoScore").attr("display","none"); 
	$("#yearTwoScore").css("display","none");
}

/**
 * 分页兑换积分
 */
function documetForCostScore(i){
	$("#yearTwoScore").show();
	var url = basepath+"/documt/documetForCostScore.html?pagefn=documetForCostScore&page="+i+"&max=10&r="+Math.random();
	$("#list_documentForCostScore").load(encodeURI(url),function(){
	});
}

/**
 * 分页高级搜索兑换积分
 */
function selectScoreCost(i){
	var query = "";
	var costYear = $("#costScoreYear").val();
	if(costYear != "" || costYear != null)
	{
		query += "&costScoreYear="+costYear;
	}
	
	var url = basepath+"/documt/documetForCostScore.html?pagefn=selectScoreCost&page="+i+"&max=10&r="+Math.random();
	$("#list_documentForCostScore").load(encodeURI(url+query),function(){
	});
}
