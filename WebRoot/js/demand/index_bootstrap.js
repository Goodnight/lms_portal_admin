/**
 * �����ռ�ʱ����ҳ
 */
$(document).ready(function() {
	
	var oTable1 = $('#datatable1').dataTable( {
		"aoColumns": [
	      { "bSortable": false },
	      null, null,null, null, null
		] } );

	//�����б�
	page(1);
	
	//ɾ�������ռ���
	$("#btn_delete").click(function(){
		var ids = $("input:checkbox[name=groupTypeId]:checked");
		if(ids == null || ids == "" || ids.length == 0){
			alert("��ѡ��ɾ����");
		}
		else{
			if(confirm("ȷ��Ҫɾ��ѡ����")){	
				var param = "method=remove&dtIds=";
				for(var i=0;i<ids.length;i++){
					param += $(ids[i]).val()+",";
				}
				$.ajax({
					url : basepath+"/demand/deleteTopic.html",
					type : "POST",
					data : param,
					dataType : "JSON",
					success : function(data){
						if(data.code == 'error'){
							alert("�������ռ�ʱ��������ѵ�������, �޷�ɾ��!");
						}
						page(1);					
					},
					error:function(XMLHttpRequest, textStatus, errorThrown){
						alert("ɾ������!");
						page(1);
					}
				});
			}
		}
	});	
});

/**
 * ��ҳ
 */
function page(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var max = $("#list_demandTopic .page_max").val()?$("#list_demandTopic .page_max").val():10;
	var dep_id = document.getElementById("dep_id").value;
	var isChildDep = $("input:radio[name=isChildDep]:checked").val();
	var value ="&dep_id="+dep_id+"&isChildDep="+isChildDep;
	var url = basepath+"/list/demandTopicList.html?pagefn=page&page="+i+value+"&max="+max+"&r="+Math.random();
	$("#list_demandTopic").load(encodeURI(url),function(){
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
		$("#list_demandTopic .page_max").change(function(){
			page(1);
		});
	});
	
}
function orgClick(type,id,name){
	$("#dep_id").val(id);page(1);
}
