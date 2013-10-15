 var   spstatus=0;//gaoxinlong 0：代表表单中的选项没有选中  1：代表下面的选项有被选中


/**
 * 
 */
$(function(){
	//加载列表
	onlinePage(1);
	applyCostPage(1);
});

/**
 * 个人奖励申请审批列表
 */
function onlinePage(i){
	var max = $("#list_onlineApplyScore .page_max").val()?$("#list_onlineApplyScore .page_max").val():10;
	var query = "";
	var uid = $("#uid").val();
	query += "&uid="+uid;
	var url = basepath+"/list/score/toScoreUserApplyList.html?pagefn=onlinePage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_onlineApplyScore").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				spstatus=1;  //gaoxinlong
				$(".cls_chooseitem").attr("checked",true);
			}else{
				spstatus=0;  //gaoxinlong
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_onlineApplyScore .page_max").change(function(){
			onlinePage(1);
		});
	});
	
}

//批准
$("#btn_pzGain").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if(param==null||param==""){
		spstatus=0;
	}else{
		spstatus=1;
	}
	if(spstatus==1){
		
		 if(confirm('确定要批准吗 ？')){//gaoxinlong
				$.ajax({
					url : "updateScoreUserGain.html",
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
						alert("OK");
						onlinePage(1);
						
					}
				}
				);
				}	
		
	}else {
		alert("没有选中任何列表项！");
	}
	
});

//不批准
$("#btn_bpzGain").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if(param==null||param==""){
		spstatus=0;
	}else{
		spstatus=1;
	}
	if(spstatus==1){//gaoxinlong
	if(confirm('确定要不批准吗 ？')){
	$.ajax({
		url : "updateScoreUserGainForNo.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			alert("OK");
			onlinePage(1);
			
		}
	}
	);
	}
	}else{
		
		alert("没有选中任何列表项！");//gaoxinlong
	}
});

//个人奖励申请审批高级搜索
function selectBottonClickByG(i){
	var max = $("#list_onlineApplyScore .page_max").val()?$("#list_onlineApplyScore .page_max").val():10;
	var query = "";
	var year = $("#year").val();
	query += "&year="+year;
	var stauts = $("#stauts").val();
	query += "&stauts="+stauts;
	var gainType = $("#gain_type_id").val();
	query += "&gainType="+gainType;
	var uid = $("#uid").val();
	query += "&uid="+uid;
	var url = basepath+"/list/score/toScoreUserApplyList.html?pagefn=onlinePage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_onlineApplyScore").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				spstatus=1;//gaoxinnlong
				$(".cls_chooseitem").attr("checked",true);
			}else{
				spstatus=0;  //gaoxinlong
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_onlineApplyScore .page_max").change(function(){
			selectBottonClickByG(1);
		});
	});
}


//个人兑换申请审批列表
function applyCostPage(i){

	var max = $("#list_onlineApplyCostScore .page_max").val()?$("#list_onlineApplyCostScore .page_max").val():10;
	var query = "";
	var uid = $("#uid").val();
	query += "&uid="+uid;
	var url = basepath+"/list/score/toScoreUserCostApplyList.html?pagefn=applyCostPage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_onlineApplyCostScore").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				spstatus=1;//gaoxinnlong
				$(".cls_chooseitem").attr("checked",true);
			}else{
				spstatus=0;  //gaoxinlong
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_onlineApplyCostScore .page_max").change(function(){
			applyCostPage(1);
		});
	});
}

//批准
$("#btn_pzCost").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	var scId = $("input:checkbox[name=groupTypeId]:checked").attr("id");
	var uid = $("#uid").val();
	if(spstatus==1){//gaoxinlong
	if(confirm('确定要批准吗 ？')){
	$.ajax({
		url : "updateScoreUserCost.html?scId="+scId+"&uid="+uid,
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			alert("OK");
			applyCostPage(1);
			
		}
	}
	);
	}
	}else{
		
		alert("没有选中任何列表项！");//gaoxinlong
	}
	
});

//不批准
$("#btn_bpzCost").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if(spstatus==1){//gaoxinlong
	if(confirm('确定要不批准吗 ？')){
	$.ajax({
		url : "updateScoreUserCostForNo.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			alert("OK");
			applyCostPage(1);
			
		}
	}
	);
	}
	}else{
		alert("没有选中任何列表项！");//gaoxinlong
		
	}
});

//个人奖励申请审批高级搜索
function selectBottonClick(i){
	var max = $("#list_onlineApplyCostScore .page_max").val()?$("#list_onlineApplyCostScore .page_max").val():10;
	var query = "";
	var year = $("#yearTwo").val();
	query += "&year="+year;
	var stauts = $("#sta").val();
	query += "&stauts="+stauts;
	var costWay = $("#costWay_id").val();
	query += "&costWay="+costWay;
	var uid = $("#uid").val();
	query += "&uid="+uid;
	var url = basepath+"/list/score/toScoreUserCostApplyList.html?pagefn=onlinePage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_onlineApplyCostScore").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			spstatus=1;//gaoxinnlong
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				spstatus=0;//gaoxinlong
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_onlineApplyCostScore .page_max").change(function(){
			selectBottonClick(1);
		});
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

