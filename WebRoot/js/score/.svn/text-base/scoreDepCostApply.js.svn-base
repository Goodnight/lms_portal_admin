$(function(){
	page(1);
	selectBottonClick(1);
});



//全选
function checkAll(formvalue) {  
    var roomids = document.getElementsByName(formvalue);  
    for (var j = 0; j < roomids.length; j++) {  
        if (roomids.item(j).checked == false) {  
            roomids.item(j).checked = true;
            
        }  
        else{
        	roomids.item(j).checked = false; 
        }
    }  
    $.uniform.update();
}  

/**
 * 
 */
function page(i){
	var query = "";
	var max = $("#list_scoreDepCostApply .page_max").val()?$("#list_scoreDepCostApply .page_max").val():10;
	var depId = $("#depId").val();
	query += "&depId="+depId;
	var url = basepath+"/list/toScoreDepCostApplyList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_scoreDepCostApply").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		$(".cls_checkbox").uniform();
		$("#list_scoreDepCostApply .page_max").change(function(){
			selectBottonClick(1);
		});
	});
	
}

//批准
$("#btn_pz").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	var scDepId = $("input:checkbox[name=groupTypeId]:checked").attr("id");
	var depId = $("#depId").val();
	if(confirm('确定要批准吗？')){
	$.ajax({
		url : basepath+"/rewardScoreDepCost/updateScoreDep.html?depId="+depId+"&score="+scDepId,
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			alert("OK");
			page(1);
			
		}
	}
	);
	}
});

//
$("#btn_bpz").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if(confirm('确定要不批准吗？')){
	$.ajax({
		url : basepath+"/rewardScoreDepCost/updateScoreDepForNo.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			alert("OK");
			page(1);
			
		}
	}
	);
	}
});


//
function selectBottonClick(i){
	var query = "";
	var max = $("#list_scoreDepCostApply .page_max").val()?$("#list_scoreDepCostApply .page_max").val():10;
	var year = $("#year").val(); 
	if(year == "全部")
		{
		year = "";
		}
	query += "&year="+year;
	var depId = $("#depId").val();
	query += "&depId="+depId;
	var url = basepath+"/list/toScoreDepCostApplyList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_scoreDepCostApply").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		$(".cls_checkbox").uniform();
		$("#list_scoreDepCostApply .page_max").change(function(){
			selectBottonClick(1);
		});
	});
}
