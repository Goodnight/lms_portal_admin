$(function(){
	//�����б�
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
	//����ɾ����Դ�γ��µĹ�����Դ
	$("#btn_delete_online").click(function(){
		if(confirm("ȷ��Ҫɾ��ѡ����")){
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
							alert("�Ƴ�����");
						}
					},
					error : function(){
						alert("�Ƴ�����");
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

//����ɾ��
$("#btn_delete").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if(confirm('ȷ��Ҫɾ���� ��')){
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



//ȫѡ��ѡ
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







  

