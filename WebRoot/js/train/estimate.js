
$(function(){
	
	//�����б�
	pageResponse(1);
	pageBehaviour(1);
	
	$(".btn_delete").click(function(){
		var url = basepath + "/trainclass/estimate/delete.html";
		var id = $(this).attr("id");
		var ids = $("#list_"+id+"_estimate input[name=id]:checked");
		if(ids.length>0){
			$.dialog.confirm("ȷ��Ҫɾ��ѡ����",function(){
				var param="";
				for(i=0;i<ids.length;i++){
					if($(ids[i]).attr("delete")=="1"){
						if($(ids[i]).attr("partinnum")>0)
							{
							$.dialog.alert("������Ա���룬�޷�ɾ����");
							}else{
								param +="&id="+$(ids[i]).val();
							}
					}else{
						$.dialog.alert("ѡ�����ݰ����ѷ���ѡ�");
						return;
					}
				}
				if(param==""){
					return;
				}
				$.ajax({
					url : url,
					type : "post",
					data : param,
					dataType : "json",
					success : function(data){
						if(data==null){
							$.dialog.tips("������Ա���룬�޷�ɾ��",2,"tips.gif");
						}else{
							$.dialog.tips("ɾ���ɹ�",2,"tips.gif");
							if(id=="response"){
								pageResponse(1);
							}else{
								pageBehaviour(1);
							}
						}
					},
					error : function(){
						$.dialog.tips("������Ա���룬�޷�ɾ��",2,"tips.gif");
					}
				});
			},function(){});
		}else{
			$.dialog.alert("��ѡ��ɾ���");
		}
	});
	
});

/**
 * ��ӳ��������ҳ
 */
function pageResponse(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var max = $("#list_response_estimate .page_max").val()?$("#list_response_estimate .page_max").val():10;
	var url = basepath+"/list/trainclassestimate.html?pagefn=pageResponse&page="+i+"&max="+max+"&type=1&tcid="+tcid+"&r="+Math.random();
	$("#list_response_estimate").load(encodeURI(url),function(){
		$.dialog.tips('���ݼ������',1,'tips.gif');
		bindChooseAll("cls_chooseall_response");
		//ѡ��ÿҳ��¼����
		$("#list_response_estimate .page_max").change(function(){
			pageResponse(1);
		});
	});
}

/**
 * ��Ϊ��������ҳ
 */
function pageBehaviour(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var max = $("#list_behaviour_estimate .page_max").val()?$("#list_behaviour_estimate .page_max").val():10;
	var url = basepath+"/list/trainclassestimate.html?pagefn=pageBehaviour&page="+i+"&max="+max+"&type=2&tcid="+tcid+"&r="+Math.random();
	$("#list_behaviour_estimate").load(encodeURI(url),function(){
		$.dialog.tips('���ݼ������',1,'tips.gif');
		bindChooseAll("cls_chooseall_behaviour");
		//ѡ��ÿҳ��¼����
		$("#list_behaviour_estimate .page_max").change(function(){
			pageBehaviour(1);
		});
	});
}

function changeStatus(obj,status,id){
	var url = basepath +"/survey/ajax/update.html";
	var param = "sId="+id+"&status="+status;
	$.ajax({
		url : url,
		type : "post",
		data : param,
		dataType : "json",
		success : function(msg){
			if("2" == status){
				$(obj).text("�ѷ���");
				$(obj).attr("onclick","javascript:changeStatus(this,'1','"+id+"');");
				$("#"+id).attr("delete","0");
			}else{
				$(obj).text("δ����");
				$(obj).attr("onclick","javascript:changeStatus(this,'2','"+id+"');");
				$("#"+id).attr("delete","1");
			}
		},
		error : function(){}
	});
}