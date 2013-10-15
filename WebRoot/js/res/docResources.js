$(function(){
	//加载列表
	onlinePage(1);
	
	$("#page_max").change(function(){
		page(1);
	});
	
	$("#add_courseware").click(function(){
		var url = basepath+"/dialog/onlineCoursewareByDocList.html?rdId="+rdId+"&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	$("#add_doc").click(function(){
		var url = basepath+"/dialog/onlineDocByDocList.html?rdId="+rdId+"&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	$("#add_caseDoc").click(function(){
		var url = basepath+"/dialog/onlineCaseDocByDocList.html?rdId="+rdId+"&r="+Math.random();
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
					url : "setDoc.html",
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
	var url = basepath+"/list/resource/onlineResourseDoc.html?rdId="+rdId+"&pagefn=onlinePage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_onlineDoc").load(encodeURI(url),function(){
		$(".cls_item_online").uniform();
		bindChooseAll();
	});
	
}

//批量删除
$("#btn_delete").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if(confirm('确定要删除吗 ？')){
	$.ajax({
		url : "deleteCourseware.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			    alert("OK");
				window.location.reload();					
			}
		}
	);
	}
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







  

