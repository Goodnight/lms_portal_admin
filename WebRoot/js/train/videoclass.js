/**
 * 
 */
$(function(){
	//�����б�
	page(1);
	
	$("#btn_delete").click(function(){
		var cks = $("input:checkbox[name=resourceId]:checked");
		if(cks.length>0){
			$.dialog.confirm("ȷ��Ҫɾ��ѡ����",function(){
				var params = "";
				for(i=0;i<cks.length;i++){
					//ͨ��delete�����ж��Ƿ����ɾ��
					if($(cks[i]).attr("delete")=="1"){
						params += "rid="+$(cks[i]).val()+"&vid="+$(cks[i]).parent().parent().next().val()+"&";
					}else{
						$.dialog.alert("ѡ�����ݰ����ѷ���ѡ�");
						return;
					}
				}
				if(params==""){
					return;
				}
				var url = basepath + "/videoclass/delete.html";
				$.ajax({
					url : url,
					type : "post",
					data : params,
					dataType : "json",
					success : function(msg){
						checkLogin(msg);
						if(msg==null){
							$.dialog.tips("ɾ������",2,"tips.gif");
						}else{
							$.dialog.tips("ɾ���ɹ�",2,"tips.gif");
							page(1);
						}
					},
					error : function(){
						$.dialog.tips("ɾ������",2,"tips.gif");
					}
				});
			},function(){
				
			});
		}else{
			$.dialog.alert("��ѡ��ɾ���");
		}
	});
});

/**
 * ��ҳ����
 * @param i	ҳ��
 */
function page(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var max = $("#list_videoclass .page_max").val()?$("#list_videoclass .page_max").val():10;
	var url = basepath+"/list/trainresource/videoclass.html?tcid="+tcid+"&pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_videoclass").load(encodeURI(url),function(){
		$.dialog.tips('���ݼ������',1,'tips.gif');
		$("#list_videoclass .page_max").change(function(){
			page(1);
		});
		bindChooseAll("cls_chooseall");
		$(".chooseperson").click(function(){
			var vid = $(this).attr("vid");
			var url = basepath+"/trainclass/dialog/videouser.html?vid="+vid+"&r="+Math.random();
			$("#dialog_content").load(encodeURI(url));
			$("#dialog").show();
		});
	});
}

/**
 * �ı�ͬ�����õķ���״̬
 */
function changeStatus(obj,t,id){
	var url = basepath +"/videoclass/ajax/update.html";
	var param = "vId="+id+"&status="+t;
	$.ajax({
		url : url,
		type : "post",
		data : param,
		dataType : "json",
		success : function(msg){
			if(0==t){
				$(obj).text("δ����");
				$("#"+id).attr("delete","1");
				$(obj).attr("onclick","javascript:changeStatus(this,1,'"+id+"');");
			}else{
				$(obj).text("�ѷ���");
				$("#"+id).attr("delete","0");
				$(obj).attr("onclick","javascript:changeStatus(this,0,'"+id+"');");
			}
		},
		error : function(){}
	});
	
}

