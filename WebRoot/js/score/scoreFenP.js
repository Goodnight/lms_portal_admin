var dep_type = "";
$(function(){
	$("#form_scoreUser").validate({
		rules : {
			user_id : {
				required : true
			},
			score : {
				required : true,
//				number : true
				digits : true
			},
			gain_type_id : {
				required : true
			}
		},
		messages : {
			user_id : "����Ϊ��",
			score : {
				required : "���ֲ�Ϊ��",
//				number : "ֻ��Ϊ����"
				digits : "ֻ��Ϊ������"
			},
			gain_type_id : "��ѡ��"
			
		}
		
	});
	
	//��ѡ����Ա�Ի���
	$(".chooseperson").click(function(){
		var id = $(this).attr("id");
		var url = basepath+"/dialog/user.html?from=choose&html_name="+id+"_name&html_id="+id+"_id&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
});
