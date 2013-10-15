/**
 * 需求收集时间首页
 */
$(document).ready(function() {
	
	var oTable1 = $('#datatable1').dataTable( {
		"aoColumns": [
	      { "bSortable": false },
	      null, null,null, null, null
		] } );

	//加载列表
	page(1);
	
	//删除需求收集项
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
					url : basepath+"/demand/deleteTopic.html",
					type : "POST",
					data : param,
					dataType : "JSON",
					success : function(data){
						if(data.code == 'error'){
							alert("该需求收集时间已与培训需求关联, 无法删除!");
						}
						page(1);					
					},
					error:function(XMLHttpRequest, textStatus, errorThrown){
						alert("删除出错!");
						page(1);
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
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_demandTopic .page_max").val()?$("#list_demandTopic .page_max").val():10;
	var dep_id = document.getElementById("dep_id").value;
	var isChildDep = $("input:radio[name=isChildDep]:checked").val();
	var value ="&dep_id="+dep_id+"&isChildDep="+isChildDep;
	var url = basepath+"/list/demandTopicList.html?pagefn=page&page="+i+value+"&max="+max+"&r="+Math.random();
	$("#list_demandTopic").load(encodeURI(url),function(){
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
		$("#list_demandTopic .page_max").change(function(){
			page(1);
		});
	});
	
}
function orgClick(type,id,name){
	$("#dep_id").val(id);page(1);
}
