
$(function(){
	
	$(".cls_report").live("click",function(){
		var surveyId = $(this).parent().parent().attr("sId");
		var report = $(this).attr("report");
		var userid = $(this).attr("userid");
		var url = basepath + "/survey/result/report.html?report="+report+"&surveyId="+surveyId+"&userid="+userid;
		$.dialog({
			lock:true,
		    width: '700px',
		    height: '500px',
		    title : '��Ϊ����һ��',
		    content: "url:"+url
		});
	});
	
	//ɾ������
	$("#btn_delete").click(function(){
		var ids = $("input:checkbox[name=id]:checked");
		
		if(ids.length>0){
			$.dialog.confirm("��ȷ��Ҫɾ��ѡ�е���Ϊ��������",function(){
				var param = "";
				for(i=0;i<ids.length;i++){
					if($(ids[i]).attr("delete")=="1"){
						if($(ids[i]).attr("participantsNum")>0)
						{
						$.dialog.alert("������Ա���룬�޷�ɾ����");
						}else{
						param += "&id="+$(ids[i]).val();
						}
					}else{
						$.dialog.alert("ѡ�����ݰ����ѷ���ѡ�");
						return;
					}
				}
				if(param == ""){
					return;
				}
				
				$.ajax({
					url : basepath+"/behavior/delete.html",
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
						if(data==null){
							$.dialog.tips("ɾ������",2,"tips.gif");
						}else{
							$.dialog.tips("ɾ���ɹ�",2,"tips.gif");
							page(1);
						}
					},
					error:function(){
						$.dialog.tips("ɾ������",2,"tips.gif");
					}
				});
			},function(){
					
			});
		}else{
			$.dialog.alert("��ѡ��ɾ���");
		}
	});
	
	//�߼�����
	$(".searchbutton").click(function(){
		page(1);
	});
	
	//��ѯ����
	$("#search_start_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#search_end_date").datepicker("option","minDate",dt);
		}
	});
	
	$("#search_end_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#search_start_date").datepicker("option","maxDate",dt);
		}
	});
	
	$("#btn_import").click(function(){
		var url = basepath + "/behavior/upload.html";
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
});

/**
 * ���˵�����¼�
 */
function orgClick(type,id,name){
	$("#search_depid").val(id);
	page(1);
}

/**
 *��Ϊ�������б��ҳ
 */
function page(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var max = $("#list .page_max").val()?$("#list .page_max").val():10;
	var topic = $("#search_topic").val();
	var orgid = $("#search_depid").val();
	var start_date = $("#search_start_date").val();
	var end_date = $("#search_end_date").val();
	var query = "&type=2";
	if(topic!=""){
		query+="&topic="+topic;
	}
	if(orgid!=""){
		query += "&orgid="+orgid;
	}
	if(start_date!=""){
		query+="&start_date="+start_date;
	}
	if(end_date!=""){
		query+="&end_date="+end_date;
	}
	var url = basepath+"/behavior/list.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list").load(encodeURI(url+query),function(){
		$.dialog.tips('���ݼ������',1,'tips.gif');
		//ȫѡ
		bindChooseAll("cls_chooseall_est");
		//ѡ��ÿҳ��¼����
		$("#list .page_max").change(function(){
			page(1);
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