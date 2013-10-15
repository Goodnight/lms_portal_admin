$(function(){
	//加载列表
	onlinePage(1);
	
	$("#page_max").change(function(){
		page(1);
	});
	
	$("#add_courseware").click(function(){
		var url = basepath+"/dialog/onlineCoursewareByCaseDocList.html?rdId="+rdId+"&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	$("#add_doc").click(function(){
		var url = basepath+"/dialog/onlineDocByCaseDocList.html?rdId="+rdId+"&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	$("#add_caseDoc").click(function(){
		var url = basepath+"/dialog/onlineCaseDocByCaseDocList.html?rdId="+rdId+"&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	//批量删除资源课程下的关联资源
	$("#btn_delete_online").click(function(){
		if(confirm("确定要删除选项吗？")){
			var ids = $("input:checkbox[name=onlineRes]:checked");
			var param = "method=remove&rdIds=";
			if(ids.length>0){
				for(n=0;n<ids.length;n++){
					param += $(ids[n]).val()+",";
				}
				$.ajax({
					url : "setCaseDoc.html",
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
						if(data!=null){
							onlinePage(1);
						}else{
							alert("移除出错");
						}
					},
					error : function(){
						alert("移除出错");
					}
				});
			}
		}
		
	});
});

function bindChooseAll(){
	$(".cls_chooseall").click(function(){
		var cls = $(this).val();
		if($(this).attr("checked")){
			$("."+cls).attr("checked",true);
		}else{
			$("."+cls).attr("checked",false);
		}
		$(".cls_item_online").uniform();
		$.uniform.update();
	});
	
}

function onlinePage(i){
	var max = $("#page_max").val();
	var url = basepath+"/list/resource/onlineResourseCaseDocList.html?rdId="+rdId+"&pagefn=onlinePage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_onlineCaseDoc").load(encodeURI(url),function(){
		$(".cls_item_online").uniform();
		bindChooseAll();
	});
	
}








  

