$(function(){
	//加载列表
	page(1);
	selectBottonClick(1);
});



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
	var max = $("#list_scoreDepGainList .page_max").val()?$("#list_scoreDepGainList .page_max").val():10;
	var depId = $("#depId").val(); 
	query += "&depId="+depId;
	var url = basepath+"/list/toScoreDepGainList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_scoreDepGainList").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_scoreDepGainList .page_max").change(function(){
			selectBottonClick(1);
		});
		
	});
	
}

//高级搜索
function selectBottonClick(i){
	var query = "";
	var max = $("#list_scoreDepGainList .page_max").val()?$("#list_scoreDepGainList .page_max").val():10;
	var year = $("#year").val(); 
	if(year == "全部")
		{
		year = "";
		}
	query += "&year="+year;
	var depId = $("#depId").val(); 
	query += "&depId="+depId;
	var url = basepath+"/list/toScoreDepGainList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_scoreDepGainList").load(encodeURI(url+query),function(){
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
		$("#list_scoreDepGainList .page_max").change(function(){
			selectBottonClick(1);
		});
	});
}
