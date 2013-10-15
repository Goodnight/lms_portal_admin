/**
 * 
 */
$(function(){
	
	$("#videoclass_form").validate({
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		rules : {
			name : {
				required : true,
				maxlength:50
				
			},
			sn : {
				required : true
			},
//			tag : {
//				required : true
//			},
			startTm : {
				required : true
			},
			endTm : {
				required : true
			},
			compereName : {
				required : true
			},
			speakerName : {
				required : true
			},
			maxAttend : {
				required : true,
				number :true,
				min : $("#tc_attendNum").val()
			}
		},
		messages : {
			name : {
				required:"������ͬ����������",
				maxlength:"���Ƶ���󳤶Ȳ��ܳ���50"
			},
			sn : "������ͬ�����ñ��",
//			tag : "�������ǩ",
			startTm : "�����뿪ʼʱ��",
			endTm : "���������ʱ��",
			compereName : "��ѡ��������",
			speakerName : "��ѡ��������",
			maxAttend : {
				required : "���������μ�����",
				number : "����������",
				min : "��������С����ѵ������"
			}
		}
	});
	
	//��ѡ����Ա�Ի���
	$(".chooseperson").click(function(){
		var person_type = $(this).attr("id");
		var url = basepath+"/dialog/user.html?from=choose&html_name="+person_type+"Name&html_id="+person_type+"Id&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	//��ѵ�࿪ʼ����
	$("#startTm").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		minDate : trainStartDt,
		onSelect : function(dt){
			$("#endTm").datepicker("option","minDate",dt);
		}
	});
	
	//��ѵ���������
	$("#endTm").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		maxDate : trainEndDt,
		onSelect : function(dt){
			$("#startTm").datepicker("option","maxDate",dt);
		}
	});
	
	$(".cls_clear").click(function(){
		var t = $(this).attr("type");
		$("#"+t+"Name").val("");
		$("#"+t+"Id").val("");
	});
	
	$("#btn_cancel").click(function(){
		var tcid = $("#tcid").val();
		window.location.href = basepath+"/trainclass/videoclass.html?tcid="+tcid;
	});
});

