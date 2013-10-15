$(function(){
	//
	page(1);
	selectBottonClick(1);
	//
	$("#search_start_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#search_end_date").datepicker("option","minDate",dt);
		}
	});
	
	$("#search_end_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#search_start_date").datepicker("option","maxDate",dt);
		}
	});
	
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
	var max = $("#list_scoreDepCost .page_max").val()?$("#list_scoreDepCost .page_max").val():10;
	var query = "";
	var depId = $("#depId").val();
	query += "&depId="+depId;
	var url = basepath+"/list/toScoreDepCostList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_scoreDepCost").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_scoreDepCost .page_max").change(function(){
			selectBottonClick(1);
		});
	});
	
}

//
function selectBottonClick(i){
	var query = "";
	var max = $("#list_scoreDepCost .page_max").val()?$("#list_scoreDepCost .page_max").val():10;
	var begin_time = $("#search_start_date").val();
	query += "&begin_time="+begin_time;
	var end_time = $("#search_end_date").val();
	query += "&end_time="+end_time;
	var depId = $("#depId").val();

	//alert(depId);
	query += "&depId="+depId;
	var url = basepath+"/list/toScoreDepCostList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_scoreDepCost").load(encodeURI(url+query),function(){
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
		$("#list_scoreDepCost .page_max").change(function(){
			selectBottonClick(1);
		});
	});
}
