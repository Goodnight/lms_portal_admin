
/**
 * �鿴�ϼ�
 */
$(function(){
	
	uppage(1);
	
	$("#nameid").focus(function(){
		var old = $(this).val();
		if(old == "������ѵ�ƻ�������"){
			$(this).val("");
		}
	});
	
	$("#nameid").blur(function(){
		var old = $(this).val();
		if(old == ""){
			$(this).val("������ѵ�ƻ�������");
		}
	});
	
	$("#searchUpButton").click(function(){
		uppage(1);
	});
});
	
var sign = "";
function orgClick(type,id,name){
	if(type=="dep"){
		sign = 1;
		$("#search_orgDepId").val(id);
		uppage(1);
		setNav(name);
	}
	else{
		sign = 0;
		$("#search_orgDepId").val(id);
		uppage(1);
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

function uppage(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var query = "&ischilddep=0";
	var max = $("#list_upTrainPlanList .page_max").val()?$("#list_upTrainPlanList .page_max").val():10;
	var sname = $("#nameid").val();
	if(sname != null && sname != "" && sname!="������ѵ�ƻ�������"){
		query += "&name="+sname;
	}
	var syear = $("#yearid").val();
	if(syear != null && syear != ""){
		query += "&year="+syear;
	}
	var orgDepId = $("#search_orgDepId").val();
	if(orgDepId != null && orgDepId !=""){
		query += "&orgDepId="+orgDepId;
		//query += "&sign="+sign;
	}
	else{
		var orgDepOriId = $("#orgDepOriId").val();
		query += "&orgDepId="+orgDepOriId;
		//query += "&sign=0";
	}
	
	var url = basepath+"/list/trainplan.html?from=up&pagefn=uppage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_upTrainPlanList").load(encodeURI(url+query),function(){
		$.dialog.tips('���ݼ������',1,'tips.gif');
		bindChooseAll("cls_chooseall_trainplan");
		//ѡ��ÿҳ��¼����
		$("#list_upTrainPlanList .page_max").change(function(){
			uppage(1);
		});
	});
}