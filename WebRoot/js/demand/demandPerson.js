
/**
 * 员工培训需求
 */
var first_search_depId; //初次登陆无Cookie时使用
$(function(){
	
	$("#searchButton").click(function(){
		var judgeId = document.getElementById("dep_id").value;
		if(null==judgeId || judgeId==""){
			first_search_depId = $("#orgDepOriId").val();
		}
		page(1);
	});

	//删除员工培训需求
	$("#btn_delete").click(function(){
		if(confirm("确定要删除选项吗？")){
			var ids = $("input:checkbox[name=groupTypeId]:checked");
			var param = "method=remove&dpuIds=";
			for(var i=0;i<ids.length;i++){
				param += $(ids[i]).val()+",";
			}
			$.ajax({
				url : "deleteDemandPerson.html",
				type : "POST",
				data : param,
				dataType : "json",
				success : function(data){
						page(1);		
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
					alert("error");
				}
			});
		}
	});
	
});

/**
 * 分页
 */
function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var sn = document.getElementById("sn").value;
	var name = document.getElementById("name").value;
	var urgentLevel = $("input:radio[id=urgentLevel]:checked").val();
	if(null==urgentLevel){
		urgentLevel="";
	}
	var depid = document.getElementById("dep_id").value;
	var year = document.getElementById("year").value;
	var category = $("input:radio[id=category]:checked").val();
	if(null==category){
		category="";
	}
	if(null==depid || depid==""){   //执行至此dep_id仍然为空时
		depid = first_search_depId;  //初次登陆时使用
	}
	var value ="&sn="+sn+"&name="+name+"&urgentLevel="+urgentLevel+"&year="+year+"&dep_id="+depid+"&category="+category;
	var max = $("#list_demandPerson .page_max").val()?$("#list_demandPerson .page_max").val():10;
	var url = basepath+"/demand/demandPersonList.html?pagefn=page&page="+i+value+"&max="+max+"&r="+Math.random();
	$("#list_demandPerson").load(encodeURI(url),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		//选择每页记录数量
		$("#list_demandPerson .page_max").change(function(){
			page(1);
		});			
	});
	
}

function orgClick(type,id,name){
	$("#dep_id").val(id);page(1);
	setNav(name);
}

/**
 * 更新导航
 */
function setNav(name){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+name+"</li>");
}

function export_userTrain(){
	 
	var sn = document.getElementById("sn").value;
	var name = document.getElementById("name").value;
	var urgentLevel = $("input:radio[id=urgentLevel]:checked").val();
	if(null==urgentLevel){
		urgentLevel="";
	}
	var depid = document.getElementById("dep_id").value;
	var year = document.getElementById("year").value;
	var category = $("input:radio[id=category]:checked").val();
	if(null==category){
		category="";
	}
	if(null==depid || depid==""){   //执行至此dep_id仍然为空时
		depid = first_search_depId;  //初次登陆时使用
	}
	var query ="&sn="+sn+"&name="+name+"&urgentLevel="+urgentLevel+"&year="+year+"&dep_id="+depid+"&category="+category;
	loadingDataStart();
	var countUrl = basepath + "/usertrain/exportCount.html?r="+Math.random();
	var listUrl = basepath + "/usertrain/exportList.html?r="+Math.random();
	postData(encodeURI(countUrl+query),encodeURI(listUrl+query));
}



  

