$(function(){
	$("#trainplan").validate({
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		rules:{
			name : {
				required : true,
				maxlength : 30
			},
			sn : {
				required : true
			},
			planType : {
				required : true
			},
			cost : {
				number : true,
				required : true,
				min : 0
			},
			remarks:{
				maxlength : 400
			}
		},
		messages:{
			name : {
				required : "��������ѵ�ƻ�����",
				maxlength : "�����Ϊ30���ַ�"
			},
			sn : {
				required : "��������ѵ�ƻ����"
			},
			planType : "��ѡ��ƻ�����",
			cost : {
				number : "��������������",
				required : "��������ѵ����",
				min : "��ѵ���ò���Ϊ����"
			},
			remarks:{
				maxlength : "��󳤶Ȳ��ܳ���400"
			}
		}
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
		}
	});	
});
