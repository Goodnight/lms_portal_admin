$(function(){
	//加载列表
	selectBottonClick(1);
	
	//查询日期
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

//高级搜索
function selectBottonClick(i){
	var query = "";
	var begin_time = $("#search_start_date").val();
	query += "&begin_time="+begin_time;
	var end_time = $("#search_end_date").val();
	query += "&end_time="+end_time;
	var costWay_id = $("input:radio[name=costType]:checked").val();
	if(null==costWay_id){
		costWay_id="";
	}
	query += "&costWay_id="+costWay_id;
	var uid = $("#uid").val();
	query += "&uid="+uid;
	var url = basepath+"/list/toScoreUserCostList.html?pagefn=page&page="+i+"&r="+Math.random();
	$("#list_scoreUserCost").load(encodeURI(url+query),function(){
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
	var url = basepath+"/list/toScoreUserCostList.html?pagefn=page&page="+i+"&r="+Math.random();
	$("#list_scoreUserCost").load(encodeURI(url),function(){
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
