
/**
 * ��ѵ�������
 */
$(function(){
	//�����б�
	page(1);
	//��ʼ����

	$('#startDate').daterangepicker();

	
	//��������
//	$("#endDate").daterangepicker();	

	var oTable1 = $('#sample-table-1').dataTable( {
		"aoColumns": [
	      { "bSortable": false },
	      null, null,null, null, null,null,null
		] } );
	
	//ɾ����ѵ�������
	$("#btn_delete").click(function(){
		var ids = $("input:checkbox[name=groupTypeId]:checked");
		if(ids == null || ids == "" || ids.length == 0){
			bootbox.alert("��ѡ��ɾ����");
		}
		else{
		bootbox.confirm("ȷ��Ҫɾ��ѡ����",function(result){
			if(result == true){
				var param = "method=remove&iIds=";
				for(var i=0;i<ids.length;i++){
					if($(ids[i]).attr("delete")=="1"){
						if($(ids[i]).attr("partinnum")>0)
							{
							bootbox.alert("������Ա���룬�޷�ɾ����");
							}else{
								param += $(ids[i]).val()+",";
							}
					}else{
						bootbox.alert("ѡ�����ݰ����ѷ���ѡ�");
						return;
					}
				}
				$.ajax({
					url : "deleteInquiry.html",
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
							page(1);		
					},
					error : function(){
						//$.dialog.tips("",2,"tips.gif");
					}
				});
			}
		});
	
		}
	});
});

function a(itId){
	var url = basepath+"/inquiry/inquiryTpItemList.html?itId="+itId+"&r="+Math.random();
	$("#list_inquiryTpItemList").load(encodeURI(url),function(){
	});
	$("#dialog").show();
	
}
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
	var status = document.getElementById("status").value;
	var topic = document.getElementById("topic").value;
	var startDate = document.getElementById("startDate").value;
//	var endDate = document.getElementById("endDate").value;
	var max = $("#inquiryList .page_max").val()?$("#inquiryList .page_max").val():10;
//	var value ="&status="+status+"&topic="+topic+"&startDate="+startDate+"&endDate="+endDate;
	var value ="&status="+status+"&topic="+topic+"&startDate="+startDate;
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
	var url = basepath+"/inquiry/inquiryList.html?pagefn=page&page="+i+value+query+"&max="+max+"&r="+Math.random();
	$("#inquiryList").load(encodeURI(url),function(){
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
		$("#inquiryList .page_max").change(function(){
			page(1);
		});
	});	
	
	


}


