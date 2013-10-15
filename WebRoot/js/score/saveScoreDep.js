
$(function(){
	scoreDep();
	scoreDepGain();
});



function scoreDep(){
	var url = basepath+"/rewardScoreDep/toSaveScoreDep.html?depId="+depId;
	$("#score_dep").load(encodeURI(url));
	
}

function scoreDepGain(){
	var url = basepath+"/rewardScoreDepGain/toSaveScoreDepGainByIdGain.html?sdId="+sdId;
	$("#score_gain").load(encodeURI(url));
	
}


