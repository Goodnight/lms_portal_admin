/**
 * 
 */
$(function(){
	page(1);
	
	$("#btn_search").click(function(){
		page(1);
	});
	
	//�����Ի�����
	$("#btn_chooseperson").click(function(){
		var url = basepath+"/dialog/user.html?page=page&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});	
	
	$("#btn_delete").click(function(){
		var e_ids = $("input:checkbox[name=all_student]:checked");
		if(e_ids.length>0){
			$.dialog.confirm("ȷ��Ҫɾ��ѡ����",function(){
				var url = basepath+"/trainclass/setStudent.html";
				var param= "";
				for(i=0;i<e_ids.length;i++){
					param += "id="+$(e_ids[i]).val()+"&";
				}
				param += "type=delete";
				$.ajax({
					url : url,
					type : "post",
					data : encodeURI(param),
					dataType : "json",
					success : function(msg){
						$.dialog.tips("�����ɹ�",2,"tips.gif");
						page(1);
					},
					error : function(){
						$.dialog.tips("��������",2,"tips.gif");
					}
				});
			},function(){});
		}else{
			$.dialog.alert("��ѡ��ɾ���");
		}
	});
});



function page(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var max = $("#list .page_max").val()?$("#list .page_max").val():10;
	var sn = $("#search_user_sn").val();
	var name = $("#search_user_name").val();
	var mobile = $("#search_user_mobile").val();
	var query = "";
	if(name!=""&&name!="������Ա����"){
		query += "&name="+name;
	}
	if(sn!=""){
		query+="&sn="+sn;
	}
	if(mobile!=""){
		query+="&mobile="+mobile;
	}
	var url = basepath+"/list/student.html?tcid="+tcid+"&from=out&pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list").load(encodeURI(url+query),function(){
		$.dialog.tips('���ݼ������',1,'tips.gif');
		bindChooseAll("cls_chooseall_all");
		//ѡ��ÿҳ��¼����
		$("#list .page_max").change(function(){
			page(1);
		});
	});
}