
/**
 * Ա����ѵ����
 */
var first_search_depId; //���ε�½��Cookieʱʹ��
$(function(){
	
	$("#searchButton").click(function(){
		var judgeId = document.getElementById("dep_id").value;
		if(null==judgeId || judgeId==""){
			first_search_depId = $("#orgDepOriId").val();
		}
		page(1);
	});

	//ɾ��Ա����ѵ����
	$("#btn_delete").click(function(){
		if(confirm("ȷ��Ҫɾ��ѡ����")){
			var ids = $("input:checkbox[name=groupTypeId]:checked");
			var param = "method=remove&dpuIds=";
			for(var i=0;i<ids.length;i++){
				param += $(ids[i]).val()+",";
			}
			$.ajax({
				url : "deleteDemandPerson.html",
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
	});
	
});

/**
 * ��ҳ
 */
function page(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var sn = document.getElementById("sn").value;
	var name = document.getElementById("name").value;
	var urgentLevel = $("input:radio[id=urgentLevel]:checked").val();
	if(null==urgentLevel){
		urgentLevel="";
	}
	var depid = document.getElementById("dep_id").value;
	var year = document.getElementById("year").value;
	var category = $("input:radio[id=category]:checked").val();
	if(null==category){
		category="";
	}
	if(null==depid || depid==""){   //ִ������dep_id��ȻΪ��ʱ
		depid = first_search_depId;  //���ε�½ʱʹ��
	}
	var value ="&sn="+sn+"&name="+name+"&urgentLevel="+urgentLevel+"&year="+year+"&dep_id="+depid+"&category="+category;
	var max = $("#list_demandPerson .page_max").val()?$("#list_demandPerson .page_max").val():10;
	var url = basepath+"/demand/demandPersonList.html?pagefn=page&page="+i+value+"&max="+max+"&r="+Math.random();
	$("#list_demandPerson").load(encodeURI(url),function(){
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
		$("#list_demandPerson .page_max").change(function(){
			page(1);
		});			
	});
	
}

function orgClick(type,id,name){
	$("#dep_id").val(id);page(1);
	setNav(name);
}

/**
 * ���µ���
 */
function setNav(name){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+name+"</li>");
}

function export_userTrain(){
	 
	var sn = document.getElementById("sn").value;
	var name = document.getElementById("name").value;
	var urgentLevel = $("input:radio[id=urgentLevel]:checked").val();
	if(null==urgentLevel){
		urgentLevel="";
	}
	var depid = document.getElementById("dep_id").value;
	var year = document.getElementById("year").value;
	var category = $("input:radio[id=category]:checked").val();
	if(null==category){
		category="";
	}
	if(null==depid || depid==""){   //ִ������dep_id��ȻΪ��ʱ
		depid = first_search_depId;  //���ε�½ʱʹ��
	}
	var query ="&sn="+sn+"&name="+name+"&urgentLevel="+urgentLevel+"&year="+year+"&dep_id="+depid+"&category="+category;
	loadingDataStart();
	var countUrl = basepath + "/usertrain/exportCount.html?r="+Math.random();
	var listUrl = basepath + "/usertrain/exportList.html?r="+Math.random();
	postData(encodeURI(countUrl+query),encodeURI(listUrl+query));
}



  

