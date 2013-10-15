
/**
 * ��λ��ѵ����
 */
$(function(){
	
	var oTable1 = $('#sample-table-1').dataTable( {
		"aoColumns": [
	      { "bSortable": false },
	      null, null,null, null, null,null
		] } );
	
	$('[data-rel=tooltip]').tooltip();
	$('[data-rel=popover]').popover({html:true});
	
	//�����б�
	page(1);

	 //��ʼ����
 	$("#startDt").datepicker({
 		showOn:"button",
 		changeMonth: true,
 		buttonImage:basepath+"/images/calendar.gif",
 		buttonImageOnly:true,
 		dateFormat:"yy-mm-dd",
 		onSelect : function(dt){
 			$("#endDt").datepicker("option","minDate",dt);
 		}
 	});
 	
 	//��������
 	$("#endDt").datepicker({
 		showOn:"button",
 		changeMonth: true,
 		buttonImage:basepath+"/images/calendar.gif",
 		buttonImageOnly:true,
 		dateFormat:"yy-mm-dd",
 		onSelect : function(dt){
 			$("#startDt").datepicker("option","maxDate",dt);
 		}
 	});

	
	//ɾ����λ��ѵ����
	$("#btn_delete").click(function(){
		var ids = $("input:checkbox[name=groupTypeId]:checked");
		if(ids == null || ids == "" || ids.length == 0){
			alert("��ѡ��ɾ����");
		}
		else{
			if(confirm("ȷ��Ҫɾ��ѡ����")){
				var param = "method=remove&dpuIds=";
				for(var i=0;i<ids.length;i++){
					param += $(ids[i]).val()+",";
				}
				$.ajax({
					url : "deleteDemandPost.html",
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

/**
 * ��ҳ
 */
function page(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var name = document.getElementById("name").value;
	var topic_id = document.getElementById("topic_id").value;
	var depid = document.getElementById("dep_id").value;
	var startDt = document.getElementById("startDt").value;
	var endDt = document.getElementById("endDt").value;
	var urgentLevel = document.getElementById("urgentLevel").value;
	if(null==urgentLevel){
		urgentLevel="";
	}
	var query = "";
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
	var max = $("#list_demandPost .page_max").val()?$("#list_demandPost .page_max").val():10;
	var value ="&startDt="+startDt+"&endDt="+endDt+"&name="+name+"&urgentLevel="+urgentLevel+"&topic_id="+topic_id;
	var url = basepath+"/demand/demandPostList.html?pagefn=page&page="+i+value+query+"&max="+max+"&r="+Math.random();
	$("#list_demandPost").load(encodeURI(url),function(){
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
		$("#list_demandPost .page_max").change(function(){
			page(1);
		});	
	});
	
}
