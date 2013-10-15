

$(function(){

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
	

	
	//删除培训班
	$("#btn_delete").click(function(){
		var ids = $("input:checkbox[name=groupTypeId]:checked");
		if(ids == null || ids == "" || ids.length == 0){
			alert("请选择删除项");
		}
		else{
			if(confirm("确定要删除选项吗？")){
				var param = "method=remove&dtIds=";
				for(var i=0;i<ids.length;i++){
					param += $(ids[i]).val()+",";
				}
				$.ajax({
					url : basepath+"/demand/deleteItem.html",
					type : "POST",
					data : param,
					dataType : "JSON",
					success : function(data){
						if(data.code == 'error'){
							alert("该需求收集项已与培训需求关联, 无法删除!");
						}
						page(1);
					},
					error:function(){
						alert("删除出错!!!");
					}
				});
			}
		}
	});
	
});

/**
 * 分页
 */
function page(i){
	var name = document.getElementById("dmdItemName").value;
	var status = $("input:radio[name=status]:checked").val();
	if(null==status){
		status="";
	}
	var max = $("#list_demandItem .page_max").val()?$("#list_demandItem .page_max").val():10;
	var isChildDep = $("input:radio[name=isChildDep]:checked").val();
	var dep_id = document.getElementById("dep_id").value;
	var startDt = document.getElementById("startDt").value;
	var endDt = document.getElementById("endDt").value;
	var value ="&name="+name+"&startDt="+startDt+"&endDt="+endDt+"&status="+status+"&dep_id="+dep_id+"&isChildDep="+isChildDep;
	var url = basepath+"/list/demandItemList.html?pagefn=page&page="+i+value+"&max="+max+"&r="+Math.random();
	$("#list_demandItem").load(encodeURI(url),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_demandItem .page_max").change(function(){
			page(1);
		});
	});
	
}
function orgClick(type,id,name){
	$("#dep_id").val(id);page(1);
}

function searchBottonClick(){
	var name = document.getElementById("classinput").value;
	if(name!=null){
		window.location = "demandItemIndex.html?name=" + name;
	}
}


