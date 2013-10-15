/**
 * ��λ��ѵ�����½�
 */
$(function(){
	
	$('#datatable2').dataTable( {
		"aoColumns": [
	      { "bSortable": false },
	      null, null
		] } );
	
	//��ѡ����Ա�Ի���
	$(".chooseperson").click(function(){
		var uid = $(this).attr("id");
		var url = basepath+"/list/demandUserList1.html?pagefn=page&r="+Math.random()+"&uid="+uid;
		$("#dialog_content").html("");
		$("#dialog_content").load(url);
		$("#dialog").show();
	});

	$("#submit1").click(function(){
		if($("#userIds").length==0){
			alert("��ѡ����Ա");
			return false;
		}
		if($("#post_id").val()==""){
			alert("��ѡ���λ");
			return false;
		}
	});
	
	//�½�ʱ�ı���֤
	$("#saveDemandPost").validate({
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		rules:{
			urgentLevel : {
				required : true
			},
			businessTrain : {
				required : true,
				maxlength : 2000
			},
			professionTrain : {
				required : true,
				maxlength : 2000
			}
		},
		messages:{
			urgentLevel : {
				required : "��ѡ��������!"
			},
			businessTrain : {
				required : "������ҵ��չ������������ѵ!",
				maxlength : "��󳤶�Ϊ2000!"
			},
			professionTrain : {
				required : "������ְҵ��չ������������ѵ!",
				maxlength : "��󳤶�Ϊ2000!"
			}
		}
	});
	
	//�޸�ʱ�ı���֤
	$("#saveDemandPostModify").validate({
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		rules:{
			businessTrain : {
				required : true,
				maxlength : 2000
			},
			professionTrain : {
				required : true,
				maxlength : 2000
			}
		},
		messages:{
			businessTrain : {
				required : "������ҵ��չ������������ѵ!",
				maxlength : "��󳤶�Ϊ2000!"
			},
			professionTrain : {
				required : "������ְҵ��չ������������ѵ!",
				maxlength : "��󳤶�Ϊ2000!"
			}
		}
	});
});
