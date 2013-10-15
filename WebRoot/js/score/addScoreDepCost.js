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
			orgName : {
				required : true
			},
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
			orgName : "����Ϊ��",
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
	$(".chooseperson111").click(function(){
		var id = $(this).attr("id");
		var url = basepath+"/dialog/user.html?from=choose&html_name="+id+"_name&html_id="+id+"_id&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	//��ѡ����Ա�Ի���
	$("#btn_user").click(function(){
		var url = basepath+"/dialog/user.html?page=userPage&r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog").show();
		
	});
	$(".newpersonbutton").live("click", function(){
		
		var oTable=$(this).parent().parent().find("#datatable1").find("tbody").find("tr");
		if(oTable){
			for(i=0;i<oTable.length;i++){
				var oText=$(oTable).eq(i).children().eq(3).text();
				var sn=$(oTable).eq(i).children().eq(2).text();
				var orgName=$(oTable).eq(i).children().eq(1).text();
				var id=$(oTable).eq(i).children().eq(0).find("input").attr("id");	
				$("#newpersonco").children().eq(0).append('<label class="speciallabel">'+'<a href="#" title="'+sn+orgName+'" class="noclass">'+oText+'</a>'+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a><input type="hidden" id="userIds" name="userIds" value="'+id+'" /><input type="hidden" id="userNames" name="userNames" value="'+oText+'" /></label>');
			}
		}
		$("#dialog").hide();

	});
});
