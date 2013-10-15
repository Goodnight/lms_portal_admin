$(function(){
	pageCheckin(1);
	pageBudget(1);
	
	$("#btn_budget_save").click(function(){
		saveBudget();
	});
	
	$("#btn_bill_save").click(function(){
		saveBill();
	});
	
	$("#btn_search_checkin").click(function(){
		pageCheckin(1);
	});
	
	$("#btn_budget_query").click(function(){
		pageBudget(1);
	});
	
	$(".cls_all1").click(function(){
		if($(this).attr("checked")){
			$(".cls_ck1").attr("checked",true);
		}else{
			$(".cls_all1").attr("checked",false);
			$(".cls_ck1").attr("checked",false);
			$(".cls_ck2").attr("checked",false);
		}
		$.uniform.update();
	});
	
	$(".cls_all2").click(function(){
		if($(this).attr("checked")){
			$(".cls_all1").attr("checked",true);
			$(".cls_ck1").attr("checked",true);
			$(".cls_ck2").attr("checked",true);
		}else{
			$(".cls_ck2").attr("checked",false);
		}
		$.uniform.update();
	});
	
	$(".cls_ck1").click(function(){
		if(!$(this).attr("checked")){
			$(this).parent().parent().parent().next().children().first().children().first().children().first().attr("checked",false);
			$.uniform.update();
		}
	});
	
	$(".cls_ck2").click(function(){
		if($(this).attr("checked")){
			$(this).parent().parent().parent().prev().children().first().children().first().children().first().attr("checked",true);
			$.uniform.update();
		}
	});
});

function export_inventoryList(tcid){
	
	loadingStart();
	var query = "&tcid="+tcid;
	var listUrl = basepath + "/trainclass/exportInventoryList.html?r="+Math.random();
	postList(encodeURI(listUrl+query));
}

function pageCheckin(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_checkin .page_max").val()?$("#list_checkin .page_max").val():10;
	var sn = $("#query_sn").val();
	var name = $("#query_name").val();
	var applyWay = $("input[name=applyWay]:checked").val();
	var hasImprove = $("input[name=hasImprove]:checked").val();
	var status = $("input[name=status]:checked").val();
	var query = "";
	if(sn!=""){
		query+="&sn="+sn;
	}
	if(name!=""){
		query+="&name="+name;
	}
	if(applyWay!=null && applyWay!=""){
		query+="&applyWay="+applyWay;
	}
	if(hasImprove!=null && hasImprove!=""){
		query+="&hasImprove="+hasImprove;
	}
	if(status!=""){
		query+="&status="+status;
	}
	var url = basepath+"/list/trainclass/checkin.html?tcid="+tcid+"&pagefn=pageCheckin&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_checkin").load(url+encodeURI(query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//选择每页记录数量
		$("#list_checkin .page_max").change(function(){
			pageCheckin(1);
		});
	});
}

function searchBudget(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_budget .page_max").val()?$("#list_budget .page_max").val():10;
	var user_sn = $("#query_budget_sn").val();
	var user_name = $("#query_budget_name").val();
	var param = "";
	if(user_sn!=""){
		param += "&user_sn="+user_sn;
	}
	if(user_name!=""){
		param += "&user_name="+user_name;
	}
	var url = basepath+"/list/trainclass/budget.html?tcid="+tcid+"&pagefn=pageBudget&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_budget").load(url+encodeURI(param),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//选择每页记录数量
		$("#list_budget .page_max").change(function(){
			pageBudget(1);
		});
	});
}

function pageBudget(i){
	//保存费用信息
	saveBudget();
	searchBudget(i);
}

/**
 * 保存费用
 */
function saveBudget(){
	var url = basepath + "/trainclass/budget/save.html";
	if($("#list_budget input[name='id']").length>0){
		var objs = $("#list_budget input[name='score'],#list_budget input[name='budgetTrain'],#list_budget input[name='budgetBoard'],#list_budget input[name='budgetOther']");
		for(i=0;i<objs.length;i++){
			if(isNaN($(objs[i]).val())){
				$.dialog.alert("请输入数字格式");
				$(objs[i]).attr("style","color:red");
				$(objs[i]).focus();
				return false;
			}else{
				$(objs[i]).attr("style","");
			}
		}
		var param = $.param($("#list_budget input[name='id']"))
		+"&"+$.param($("#list_budget input[name='score']"))
		+"&"+$.param($("#list_budget input[name='examLevel']"))
		+"&"+$.param($("#list_budget input[name='budgetTrain']"))
		+"&"+$.param($("#list_budget input[name='budgetBoard']"))
		+"&"+$.param($("#list_budget input[name='budgetOther']"));
		$.ajax({
			url : url,
			async : false,
			type : "post",
			data : param,
			dataType : "json",
			success : function(re){
				$.dialog.tips('数据保存成功',2,'tips.gif');
			},
			error : function(){
				$.dialog.tips('数据保存失败',2,'tips.gif');
			}
		});
	}
}

/**
 * 保存清单
 */
function saveBill(){
	var url = basepath + "/trainclass/bill/save.html";
	//if($("input[name=spId]:checked").length>0){
		var param = "tcid="+tcid+"&"+$.param($("input[name=spId]:checked"));
		for(i=0;i<$("input[name=spId]:checked").length;i++){
			var spId = $($("input[name=spId]:checked")[i]).val();
			if($("#"+spId).attr("checked")){
				param += "&isComplete=1";
			}else{
				param += "&isComplete=0";
			}
		}
		$.ajax({
			url : url,
			type : "post",
			data : param,
			dataType : "json",
			success : function(data){
				$.dialog.tips('数据保存成功',2,'tips.gif');
			},
			error : function(){
				$.dialog.tips('数据保存失败',2,'tips.gif');
			}
		});
	//}
}

//设置状态
function changeStatus(obj,v,id,type){
	if("enrol"==type){
		$.ajax({
			url : basepath+"/trainclass/checkin/changeStatus.html",
			type : "get",
			data : "stuid="+id+"&status="+v,
			dataType : "json",
			success : function(re){
				$.dialog.tips('修改成功',2,'tips.gif');
				if("1"==v){
					$(obj).text("未报到");
					$(obj).attr("onclick","javascript:changeStatus(this,2,'"+id+"','enrol')");
				}else{
					$(obj).text("已报到");
					$(obj).attr("onclick","javascript:changeStatus(this,1,'"+id+"','enrol')");
				}
			},
			error : function(){
				$.dialog.tips('修改失败',2,'tips.gif');
			}
		});
	}else if("enhance"==type){
		if("1"==v){
			$(obj).text("有");
			$(obj).attr("onclick","javascript:changeStatus(this,2,'"+id+"','enhance')");
		}else{
			$(obj).text("否");
			$(obj).attr("onclick","javascript:changeStatus(this,1,'"+id+"','enhance')");
		}
	}else{}
}