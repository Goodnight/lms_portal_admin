
/**
 * ��ѵ����ģ��
 */

$(function(){
	//�����б�
	page(1);
	


	//��ʼ����
	$("#creatDt").datepicker();
	
	$('#filepath').ace_file_input({
		no_file:"",
		btn_choose:'���',
		btn_change:'����',
		droppable:false,
		onchange:null,
		thumbnail:false //| true | large
		//whitelist:'gif|png|jpg|jpeg'
		//blacklist:'exe|php'
		//onchange:''
		//
	});
	
	var oTable1 = $('#sample-table-1').dataTable( {
		"aoColumns": [
	      { "bSortable": false },
	      null, null,null, null, null
		] } );
	
	
	$('[data-rel=tooltip]').tooltip();
	$('[data-rel=popover]').popover({html:true});
	
	//ɾ������ģ��
	$("#btn_delete").click(function(){
		var ids = $("input:checkbox[name=groupTypeId]:checked");
		if(ids == null || ids == "" || ids.length == 0){
			$.dialog.alert("��ѡ��ɾ����...");
		}
		else{
			if(confirm("ȷ��Ҫɾ��ѡ����")){
				var param = "method=remove&itIds=";
				for(var i=0;i<ids.length;i++){
					param += $(ids[i]).val()+",";
				}
				$.ajax({
					url : "deleteInquiryTp.html",
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

function a(stId){
	var url = basepath+"/inquiry/inquiryTpItemList.html?stId="+stId+"&r="+Math.random();
	$("#list_inquiryTpItemList").load(encodeURI(url),function(){
	});
	$("#dialog .blackall,#dialog,#dialog .newwindow").show();
}
/**
 * ��ҳ
 */
function page(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var status = document.getElementById("status").value;
	var name = document.getElementById("name").value;
	var creatDt = document.getElementById("creatDt").value;
	var surveyType = document.getElementById("surveyType").value;
	var value ="&status="+status+"&name="+name+"&creatDt="+creatDt+"&surveyType="+surveyType;
	var max = $("#list_inquiryTp .page_max").val()?$("#list_inquiryTp .page_max").val():10;
	var url = basepath+"/inquiry/inquiryTpList.html?pagefn=page&page="+i+"&max="+max+value+"&r="+Math.random();
	$("#list_inquiryTp").load(encodeURI(url),function(){
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
		$("#list_inquiryTp .page_max").change(function(){
			page(1);
		});
	});
}
