$(function(){
	//�����б�
	page(1);

	$("#btn_add").click(function(){
		var url = basepath+"/tag/toAddTag.html?&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#choosegroup").show();
	});
	
	function closed()
	{
		$("#choosegroup").hide();
		$(".blackall").hide();
		}
	
});

//�����ı����
$(".forsetup").live("click", function(){
	$(this).hide();
	$(this).next().show();
})
$(".select_setup img").live("click", function(t,id){
	
	t = $(this).prev().val();
	id = $(this).attr("id");
	var url = basepath+"/tag/updateDoc.html";
	var param = "tagId="+id+"&tagGroupId="+t;
	if(confirm('ȷ��Ҫ�ı��ǩ������ ��')){
	$.ajax({
		url : url,
		type : "post",
		data : param,
		dataType : "json",
		success : function(msg){
			
		},
		error : function(){}
	});
	var mm=$(this).prev().val();
	if(mm == 1)
	{
		mm = "a";
	}
	if(mm == 2)
	{
		mm = "b";
	}
	$(this).parent().prev().text(mm);
	$(this).parent().hide();
	$(this).parent().prev().show();
	}
	
})

/**
 * ����������¼�
 */
var knoId;
function orgClick(type,id,idPath,name,namePath){
	knoId = id;	
	setNav(name);
	selectBottonClick(1);
}

/**
 * ���µ���
 */
function setNav(namePath){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+namePath+"</li>");
}




//�߼�����
function selectBottonClick(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var max = $("#list_tagList .page_max").val()?$("#list_tagList .page_max").val():10;
	var query = "";
	
	if(knoId == null)
	{
		knoId = "";
	}
	if(knoId!=""){
		query += "&knoId=" + knoId;
	}
	
	var name = $("#tagname").val();
	if(name != "")
	{
	query += "&name="+name;
	}
	
	var tagGroupId = $("#tagGroupId").val();
	if(tagGroupId == null)
	{
		tagGroupId = "";
	}
	if(tagGroupId != "")
	{
	query += "&tagGroupId="+tagGroupId;
	}
	
//	var trainClassId = $("#trainClassId").val();
//	if(trainClassId == null)
//	{
//		trainClassId = "";
//	}
//	if(trainClassId != "")
//	{
//	query += "&trainClassId="+trainClassId;
//	}
//	var trainPlanId = $("#trainPlanId").val();
//	if(trainPlanId == null)
//	{
//		trainPlanId = "";
//	}
//	if(trainPlanId != "")
//	{
//	query += "&trainPlanId="+trainPlanId;
//	}
	
	var createType = $("input:radio[name=createType]:checked").val();
	if(null==createType){
		createType="";
	}
	query += "&createType="+createType;
	var url = basepath+"/list/toTagList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_tagList").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$.dialog.tips('���ݼ������',1,'tips.gif');
		$(".cls_checkbox").uniform();
		$("#list_tagList .page_max").change(function(){
			selectBottonClick(1);
		});
	});
}

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

function page(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var max = $("#list_tagList .page_max").val()?$("#list_tagList .page_max").val():10;
	var url = basepath+"/list/toTagList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_tagList").load(encodeURI(url),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$.dialog.tips('���ݼ������',1,'tips.gif');
		$(".cls_checkbox").uniform();
		$("#list_tagList .page_max").change(function(){
			page(1);
		});
	});
	
}

//����ɾ��
$("#btn_delete").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if(confirm('ȷ��Ҫɾ���� ��')){
		if(param == null || param == "")
		{
			$.dialog.alert("��ѡ��ɾ���");
		}
		else{
	$.ajax({
		url : "deleteTag.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			    alert("OK");
			    selectBottonClick(1);					
			}
		}
	);
		}
	}
});



