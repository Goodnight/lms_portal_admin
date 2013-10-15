
/**
 * 培训计划首页分页
 */

$(function(){
	
	page(1);
	
	$("#nameid").focus(function(){
		var old = $(this).val();
		if(old == "输入培训计划的名称"){
			$(this).val("");
		}
	});
	
	$("#nameid").blur(function(){
		var old = $(this).val();
		if(old == ""){
			$(this).val("输入培训计划的名称");
		}
	});
	
	$("#searchButton").click(function(){
		page(1);
	});
		
	$("#trainplan").validate({
		rules:{
			name : {
				required : true
			},
			sn : {
				required : true
			},
			cost : {
				required : true,
				number : true
			}
		},
		messages:{
			name : "请输入培训计划名称",
			sn : "请输入培训计划编号",
			cost : {
				required : "请输入培训计划费用",
				number : "请输入数字内容"
			}
		}
	});
	
});

var sign = "";
function orgClick(type,id,name){
	if(type=="dep"){
		sign = 1;
		$("#search_orgDepId").val(id);
		page(1);
		setNav(name);
	}
	else{
		sign = 0;
		$("#search_orgDepId").val(id);
		page(1);
		setNav(name);
	}
}
	
function export_planTrainClass(planId){
	
	var query = "&plan_id="+planId;
	loadingDataStart();
	var countUrl = basepath + "/plantrainclass/exportCount.html?r=" + Math.random();
	var listUrl = basepath + "/plantrainclass/exportList.html?r=" + Math.random();
	postData(encodeURI(countUrl + query), encodeURI(listUrl + query));
}


/**
 * 更新导航
 */
function setNav(name){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+name+"</li>");
}

function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var query = "&ischilddep=0";
	var max = $("#list_trainPlanList .page_max").val()?$("#list_trainPlanList .page_max").val():10;
	var sname = $("#nameid").val();
	if(sname != null && sname != "" && sname!="输入培训计划的名称"){
		query += "&name="+sname;
	}
	var syear = $("#yearid").val();
	if(syear != null && syear != ""){
		query += "&year="+syear;
	}
	
	var planType = $("#planTypeid").val();
	if(planType != null && planType != ""){
		query += "&planType="+planType;
	}
	
	var status = $("input:radio[name=status]:checked").val();
	if(status != null && status !=""){
		query += "&status="+status;
	}
	
	var isSub = $("input:radio[name=isSub]:checked").val();
	if(isSub != null && isSub !=""){
		query += "&isSub="+isSub;
	}
	
	var orgDepId = $("#search_orgDepId").val();
	if(orgDepId != null && orgDepId !=""){
		query += "&orgDepId="+orgDepId;
		query += "&sign="+sign;
	}
	else{
		var orgDepOriId = $("#orgDepOriId").val();
		query += "&orgDepId="+orgDepOriId;
		query += "&sign=0";
	}
	var url = basepath+"/list/trainplan.html?from=trainplan&pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_trainPlanList").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		bindChooseAll("cls_chooseall_trainplan");
		//选择每页记录数量
		$("#list_trainPlanList .page_max").change(function(){
			page(1);
		});
	});		
}

/**
 * 批量删除 
 */
$(function(){
	$("#btn_delete").click(function(){
		var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
		if(param == null || param == ""){
			alert("请选择删除项");
		}
		else{
			if(confirm("确定要删除选项吗？")){
				$.ajax({
					url : "deleteTrainPlan.html",
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
						page(1);
						var d = $.parseJSON(data.content);
						if(d.succeed === false){
							alert(d.msg);
							page(1);
						}
					},
					error:function(){
						alert("删除出错");
					}
				});
			}
		}
	});
});
