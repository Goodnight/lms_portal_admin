//��ʼ����
	$("#begin_time").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#end_time").datepicker("option","minDate",dt);
		}
	});

	//��������
	$("#end_time").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#begin_time").datepicker("option","maxDate",dt);
		}
	});
$(function(){
	$("#form_scoreDepCost").validate({
		rules : {
			projectName : {
				required : true
			},
			score : {
				required : true,
				number : true
			},
			begin_time : {
				required : true,
				isDate : true
			},
			end_time : {
				required : true,
				isDate : true
			},
			costWay_id : {
				required : true
			},
			purpose : {
				required : true
			}
		},
		messages : {
			projectName : "��ѡ��",
			score : {
				required : "��Ϊ��",
				number : "ֻ��Ϊ����"
			},
			begin_time : "��ѡ��",
			end_time : "��ѡ��",
			costWay_id : "��ѡ��",
			purpose : "��Ϊ��"
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



$(function(){
	$("#form_scoreDepGain").validate({
		rules : {
			dep_id : {
				required : true
			},
			score : {
				required : true,
				number : true
			},
			gain_type_id : {
				required : true
			}
		},
		messages : {
			dep_id : "��Ϊ��",
			score : {
				required : "��Ϊ��",
				number : "ֻ��Ϊ����"
			},
			gain_type_id : "��ѡ��"
		}
		
	});
	
});

