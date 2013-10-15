 
/**
* ��ɫ������ع���
*/

$(document).ready(function(){
	$("#rollco").attr("disabled",true);
	$("#uniform-rollco").attr("disabled",true);
	$("#uniform-rollco").addClass("disabled");
});

$(function(){
	page(1);
		
	$("#searchButton").click(function(){
		page(1);
	});
	
	$(".clearBoth").click(function(){
		$("#rollco").val("");
		$("#roleName").val("");
	});
	
	$(".clearSelfDefine").click(function(){
		$("#roleName").val("");
	});
	
	$(".clearOriginal").click(function(){
		$("#rollco").val("");
	});
	
	//�����Զ����ɫ����
	$("#newDefine").click(function(){
		var url = basepath+"/dialog/roleSelfDefine.html";
		$("#dialog_content").load(url);
		$("#dialog,#dialog .blackall,.newwindow").show();
	});
	
	//Ȩ���Ƴ�
	$("#btn_delete").click(function(){
		var param = $.param($("input:checkbox[name=index]:checked"));
		if(param == null || param == ""){
			alert("��ѡ��ɾ����");
		}
		else{		
			if(confirm("ȷ��Ҫɾ��ѡ����")){
				$.ajax({
					url : "deleteRole.html",
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
						if(data.code == 'success')
						{
							page(1);
						}
						else if(data.code == 'key')
						{
							alert("��ɫ�����й���Ա���޷�ɾ��!");
						}
						else
						{
							alert("ɾ������");
						}
					},
					error:function(){
						alert("ɾ������");
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
 * ���µ���
 */
function setNav(name){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+name+"</li>");
}

function page(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var query = "";
	var max = $("#list_roleManageList .page_max").val()?$("#list_roleManageList .page_max").val():10;
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
	var name = $("#rollco").val();
	if(name != null && name != ""){
		query += "&name="+name;
	}
	var roleName = $("#roleName").val();
	if(roleName !="" && roleName != null){
		query += "&name="+roleName;
	}
	var type = $("input:radio[name=type]:checked").val();
	if(type !="" && type != null){
		query += "&type="+type;
	}

	var url = basepath+"/list/auth/roleManageList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_roleManageList").load(encodeURI(url+query),function(){
		$.dialog.tips('���ݼ������',1,'tips.gif');
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		//ѡ��ÿҳ��¼����
		$("#list_roleManageList .page_max").change(function(){
			page(1);
		});		
	});
}
