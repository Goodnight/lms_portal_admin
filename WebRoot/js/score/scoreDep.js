$(function(){
	//�����б�
	
	
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

/**
 * ����������¼�
 */
var orgId;
function orgClick(type,id,name,shortName,namePath){
			orgId = id;
      //����¼�
		    	$.ajax({
		    		url : "toShowAllOrg.html?orgId="+id,
		    		type : "get",
		    		dataType : "json",
		    		success : function(namepath){
		    			setNav(namepath);
		    			sechBottonClick(1);
		    		}
		    	});
}
/**
 * ���µ���
 */
function setNav(name){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+name+"</li>");
}

/**
 * ��ҳ
 */
function page(i){
	var max = $("#list_scoreDep .page_max").val()?$("#list_scoreDep .page_max").val():10;
	var url = basepath+"/list/toScoreDepList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random()+"&orgId="+orgId;
	$("#list_scoreDep").load(encodeURI(url),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_scoreDep .page_max").change(function(){
			page(1);
		});
	});
	
}

//�߼�����
function sechBottonClick(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var max = $("#list_scoreDep .page_max").val()?$("#list_scoreDep .page_max").val():10;
	var name = $("#name").val();
	var query = "";
	if(orgId!=""){
		query += "&orgId=" + orgId;
	}
	
	var name = $("#name").val();
	query += "&name="+name;
	var isChildOrg = $("input:radio[name=isChildOrg]:checked")[0].value;
	query+="&isChildOrg="+isChildOrg;
	var url = basepath+"/list/toScoreDepList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_scoreDep").load(encodeURI(url+query),function(){
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
		$("#list_scoreDep .page_max").change(function(){
			sechBottonClick(1);
		});
	});
}

