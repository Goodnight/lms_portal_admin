
//批准
$("#btn_pz").click(function(){
	var depId = $("#depId").val();
	var sdcId = $("#sdcId").val();
	var score = $("#score").val();
	if(confirm('确定要批准吗 ？')){
	$.ajax({
		url : basepath+"/rewardScoreDepCost/updateScoreDepById.html?depId="+depId+"&sdcId="+sdcId+"&score="+score,
		type : "POST",
		data : null,
		dataType : "json",
		success : function(data){
			alert("OK");
		}
	}
	);
	}
});

//不批准
$("#btn_bpz").click(function(){
	var sdcId = $("#sdcId").val();
	if(confirm('确定要不批准吗 ？')){
	$.ajax({
		url : basepath+"/rewardScoreDepCost/updateScoreDepForNoById.html?sdcId="+sdcId,
		type : "POST",
		data : null,
		dataType : "json",
		success : function(data){
			alert("OK");
		}
	}
	);
	}
});