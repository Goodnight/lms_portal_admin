
/**
 * 岗位培训需求
 */
$(function(){
	
	var oTable1 = $('#sample-table-1').dataTable( {
		"aoColumns": [
	      { "bSortable": false },
	      null, null,null, null, null,null
		] } );
	
	$('[data-rel=tooltip]').tooltip();
	$('[data-rel=popover]').popover({html:true});
	
	//加载列表
	page(1);

	 //开始日期
 	$("#startDt").datepicker({
 		showOn:"button",
 		changeMonth: true,
 		buttonImage:basepath+"/images/calendar.gif",
 		buttonImageOnly:true,
 		dateFormat:"yy-mm-dd",
 		onSelect : function(dt){
 			$("#endDt").datepicker("option","minDate",dt);
 		}
 	});
 	
 	//结束日期
 	$("#endDt").datepicker({
 		showOn:"button",
 		changeMonth: true,
 		buttonImage:basepath+"/images/calendar.gif",
 		buttonImageOnly:true,
 		dateFormat:"yy-mm-dd",
 		onSelect : function(dt){
 			$("#startDt").datepicker("option","maxDate",dt);
 		}
 	});

	
	//删除岗位培训需求
	$("#btn_delete").click(function(){
		var ids = $("input:checkbox[name=groupTypeId]:checked");
		if(ids == null || ids == "" || ids.length == 0){
			alert("请选择删除项");
		}
		else{
			if(confirm("确定要删除选项吗？")){
				var param = "method=remove&dpuIds=";
				for(var i=0;i<ids.length;i++){
					param += $(ids[i]).val()+",";
				}
				$.ajax({
					url : "deleteDemandPost.html",
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

/**
 * 更新导航
 */
function setNav(name){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+name+"</li>");
}

/**
 * 分页
 */
function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var name = document.getElementById("name").value;
	var topic_id = document.getElementById("topic_id").value;
	var depid = document.getElementById("dep_id").value;
	var startDt = document.getElementById("startDt").value;
	var endDt = document.getElementById("endDt").value;
	var urgentLevel = document.getElementById("urgentLevel").value;
	if(null==urgentLevel){
		urgentLevel="";
	}
	var query = "";
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
	var max = $("#list_demandPost .page_max").val()?$("#list_demandPost .page_max").val():10;
	var value ="&startDt="+startDt+"&endDt="+endDt+"&name="+name+"&urgentLevel="+urgentLevel+"&topic_id="+topic_id;
	var url = basepath+"/demand/demandPostList.html?pagefn=page&page="+i+value+query+"&max="+max+"&r="+Math.random();
	$("#list_demandPost").load(encodeURI(url),function(){
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
		$("#list_demandPost .page_max").change(function(){
			page(1);
		});	
	});
	
}
