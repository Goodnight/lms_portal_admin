$(function(){
	//加载列表
	selectBottonClick(1);
	
});

//高级搜索
function selectBottonClick(i){
	var query = "";
	var year = $("#year").val();
	if(year == "全部")
		{
		year = "";
		}
	query += "&year="+year; 
	var gainType = $("input:radio[name=gainType]:checked").val();
	if(null==gainType){
		gainType="";
	}
	query += "&gainType="+gainType;
	var uid = $("#uid").val();
	query += "&uid="+uid;
	var url = basepath+"/list/toScoreUserGainList.html?pagefn=page&page="+i+"&r="+Math.random();
	$("#list_scoreUserGain").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
	});
}

//全选反选
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
 * 分页
 */
function page(i){
	var query = "";
	var uid = $("#uid").val();
	query += "&uid="+uid;
	var url = basepath+"/list/toScoreUserGainList.html?pagefn=page&page="+i+"&r="+Math.random();
	$("#list_scoreUserGain").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
	});
	
}

$("#leadin").click(function(){
	var url = basepath+"/rewardScoreUserGain/toUplodScoreUserGain.html?r="+Math.random();
	$("#showFire").load(encodeURI(url));
	$("#leadinco").show();
});
