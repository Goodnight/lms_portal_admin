
var dep_id; //设为全局用以保存上一次检索Id
var first_search_depId; //初次登陆无Cookie时使用
/**
 * 部门培训需求
 */
$(function(){
	
	$('#datatable1').dataTable( {
		"aoColumns": [
	      { "bSortable": false },
	      null, null,null,null, null,null
		] } );
	
	$("#searchButton").click(function(){
		if(null==dep_id || dep_id==""){
			first_search_depId = $("#orgDepOriId").val();
		}
		page(1);
	});
	
	$('[data-rel=tooltip]').tooltip();
	$('[data-rel=popover]').popover({html:true});
	
	//删除部门培训需求
	$("#btn_delete").click(function(){
		var ids = $("input:checkbox[name=groupTypeId]:checked");
		if(ids == null || ids == "" || ids.length == 0){
			bootbox.alert("请选择删除项");
		}
		else{
			bootbox.confirm("确定要删除选项吗？", function (){
				var param = "method=remove&dpIds=";
				for(var i=0;i<ids.length;i++){
					param += $(ids[i]).val()+",";
				}
				$.ajax({
					url : "deleteDemandDep.html",
					type : "POST",
					data : param,
					dataType : "text",
					success : function(data){
						page(1);					
					},
					error:function(){
						bootbox.alert("删除出错!!");
					}
				});
			});

		}
	});
});

function orgClick(type,id,name){
	$("#dep_id").val(id);
    $(".newDemandDep").attr("href","demandDepNew.html?orgDepId="+id);
	if(type=="dep"){
		$("#depOrOrgType").val("1");
		setNav(name);
	}else{
		$("#depOrOrgType").val("0");
		setNav(name);
	}
	page(1);
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
 * 导出
 */
function exportList(){	
	var isChildDep = $("input:radio[name=isChildDep]:checked").val();
	dep_id_click = document.getElementById("dep_id").value;
	var oriDepId = $("#oriDepId").val(); //获取保存内容中所选部门的Id
	if(null!=oriDepId && oriDepId!="" && dep_id != oriDepId){ //当保存内容中所选部门Id存在且与全局dep_id不重复时
		dep_id = oriDepId;  //定位在之前所保存的部门Id下
	}
	else{
		dep_id = dep_id_click; //重复时按点击左侧部门树的具体节点的Id进行检索
	}
	if(null==dep_id || dep_id==""){   //执行至此dep_id仍然为空时
		dep_id = first_search_depId;  //初次登陆时使用
	}
	var type = document.getElementById("type").value;
	var year = document.getElementById("year").value;
	var item_id = document.getElementById("item_id").value;
	var query ="&type="+type+"&year="+year+"&item_id="+item_id+"&dep_id="+dep_id+"&isChildDep="+isChildDep;
	
	loadingDataStart();
	var countUrl = basepath + "/demand/exportCount.html?r="+Math.random();
	var listUrl = basepath + "/demand/exportList.html?r="+Math.random();
	postData(encodeURI(countUrl+query),encodeURI(listUrl+query));
	
}

/**
 * 分页
 */
function page(i){	
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var isChildDep = $("input:radio[name=isChildDep]:checked").val();
	var max = $("#list_demandDep .page_max").val()?$("#list_demandDep .page_max").val():10;
	dep_id_click = document.getElementById("dep_id").value;
	var oriDepId = $("#oriDepId").val(); //获取保存内容中所选部门的Id
	if(null!=oriDepId && oriDepId!="" && dep_id != oriDepId){ //当保存内容中所选部门Id存在且与全局dep_id不重复时
		dep_id = oriDepId;  //定位在之前所保存的部门Id下
	}
	else{
		dep_id = dep_id_click; //重复时按点击左侧部门树的具体节点的Id进行检索
	}
	if(null==dep_id || dep_id==""){   //执行至此dep_id仍然为空时
		dep_id = first_search_depId;  //初次登陆时使用
	}
	var depOrOrgType = document.getElementById("depOrOrgType").value;
	var type = document.getElementById("type").value;
	var year = document.getElementById("year").value;
	var item_id = document.getElementById("item_id").value;
	var value ="&type="+type+"&year="+year+"&item_id="+item_id+"&dep_id="+dep_id+"&isChildDep="+isChildDep+"&depOrOrgType="+depOrOrgType;
	var url = basepath+"/demand/demandDepList.html?pagefn=page&page="+i+value+"&max="+max+"&r="+Math.random();
	$("#list_demandDep").load(encodeURI(url),function(){
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
		$("#list_demandDep .page_max").change(function(){
			page(1);
		});		
	});
}

//全选反选
function checkAll(formvalue) {  
    var roomids = document.getElementsByName(formvalue);  
    for (var j = 0; j < roomids.length; j++) {
        if (roomids.item(j).checked == false) { 
            roomids.item(j).checked = true;
        }else{
        	roomids.item(j).checked = false;
        }
    }
    $.uniform.update();
}
