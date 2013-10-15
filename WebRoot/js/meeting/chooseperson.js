/**
 * �½������еĵ������
 */

$(function(){
	$("#meeting").validate({
		
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		
		
		rules:{
			name : {
				required : true
			},
			start_date : {
				required : true
			},
			end_date : {
				required : true
			},
			master : {
				required : true
			},
			teacher : {
				required : true
			},
			maxAttend : {
				required : true,
				number : true,
				range:[0,500],
				digits : true
			}
		},
		messages:{
			name : "�������������",
			start_date : "��������鿪ʼ����",
			end_date : "����������������",
			master : "���������������",
			teacher : "��������齲ʦ",
			maxAttend : {
				required : "���������λ�����",
				number : "��������������",
				range: "���λ�����Ϊ500��!",
				digits : "����������"
			}
		}
	});
	
	$(".chooseperson").click(function(){
		
		
		$('#master_name').removeClass('error');
		$('#master_name_error').html('');
		
		var id = $(this).attr("id");
		var url = basepath+"/dialog/user.html?from=choose&html_name="+id+"_name&html_id="+id+"_id&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	$(".chooseperson1").click(function(){
		
		$('#teacher_name').removeClass('error');
		$('#teacher_name_error').html('');
		
		
		var id = $(this).attr("id");
		var url = basepath+"/dialog/user.html?from=choose&html_name="+id+"_name&html_id="+id+"_id&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	//��ʼ����
	$("#startDate").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#endDate").datepicker("option","minDate",dt);
			$('#startDate').removeClass('error');
			$('#startDate_error').html('');
		}
	});
	
	//��������
	$("#endDate").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#startDate").datepicker("option","maxDate",dt);
			$('#endDate').removeClass('error');
			$('#endDate_error').html('');
		}
	});
});
