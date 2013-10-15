/**
	 * pid �� userurl�ǵ�����Ҫ�Ĳ���
	 * pid�ǵ�ǰ������id��userurl�����������û���url
	 */
var pid ="";
var userurl = "";

$(function(){
	
	$("#survey_form").validate({
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		rules:{
			topic : {
				required : true
			},
			startDt : {
				required : true
			},
			endDt : {
				required : true
			},
			normal_tpname :{
				required : true
			},
			upper_tpname :{
				required : true
			},
			equal_tpname :{
				required : true
			},
			lower_tpname :{
				required : true
			},
			self_tpname :{
				required : true
			},
			other_tpname :{
				required : true
			}
		},
		messages:{
			topic:"�����������",
			startDt : "�����뿪ʼ����",
			endDt : "�������������",
			normal_tpname: "��ѡ��ģ��",
			upper_tpname: "��ѡ��ģ��",
			equal_tpname: "��ѡ��ģ��",
			lower_tpname: "��ѡ��ģ��",
			self_tpname: "��ѡ��ģ��",
			other_tpname: "��ѡ��ģ��"
		}
	});
	/*$("#survey_form").submit(function(){
		var participantsNum = $("#participantsNum").val();
		var status = $("#status").val();
		if(status==2){
			alert("�Ѿ����������޸ģ���");
			return false;
		}
		if(participantsNum>0){
			alert("�Ѿ����˲μ�����,ֻ���޸Ŀ�ʼ����ʱ�䣡��");
			$("#normal_tpid").val("");
			$("#class_id").val("");
		}
	});
	*/
	/**
	 * ��ģ��ѡ��Ի���
	 */
	$(".cls_choose_tp").click(function(){
		
		$('#normal_error').html('');
		$('#common_error').html('');
		var id = $(this).attr("id");
		var url = basepath + "/survey/dialog/choose/template.html?html_id="+id+"_tpid&html_name="+id+"_tpname&r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog,#dialog .blackall,#dialog .newwindow").show();
		
		$('#normal_tpname').removeClass('error');
		$('#normal_tpname_error').html('');
	});
	
	//ѡ����ѵ��
	$(".cls_choose_class").click(function(){
		var url = basepath+"/survey/dialog/trainclass.html?html_id=class_id&html_name=class_name&r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	$(".cls_ok").live("click",function(){
		$("#class_name").focus();
	});
	
	//��ѵ�࿪ʼ����
	$("#startDt").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		minDate: new Date($("#tcStartDate").val()),
		onSelect : function(dt){
			$("#endDt").datepicker("option","minDate",dt);
			$('#startDt').removeClass('error');
			$('#startDt_error').html('');
		}
	});
	
	//��ѵ���������
	$("#endDt").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#startDt").datepicker("option","maxDate",dt);
			$('#endDt').removeClass('error');
			$('#endDt_error').html('');
		}
	});
	
	//ɾ������
	$("#btn_delete").click(function(){
		if($("input:checkbox[name=auid]:checked").length>0){
			$.dialog.confirm("��ȷ��Ҫɾ��ѡ�е���Ա��",function(){
				var param = $.param($("input:checkbox[name=auid]:checked"));
				$.ajax({
					url : basepath+"/survey/aimuser/delete.html",
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
		}
	});
	
	//�߼�����
	$(".searchbutton").click(function(){
		page(1);
	});
	
	$("#btn_import").click(function(){
		var url = basepath + "/behavior/upload.html";
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
	
	$("#btn_chooseperson").click(function(){
		pid = $("#sid").val();
		var type = $("#stype").val();
		var url = basepath+"/dialog/user.html?page=page&r="+Math.random();
		if("1"==type || "3"==type || "4"==type){
			userurl = basepath+"/survey/allowuser/add.html?type="+type;
		}else if("2"==type){
			userurl = basepath+"/survey/aimuser/add.html";
		}else{
			
		}
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
	
	//�ж��Ƿ�ѡ����ѵ�࣬�Ӷ���������ȵ����Ƿ���Ч
	$("#class_name").blur(function(){
		var v = $(this).val();
		if(""==v){
			$(".cls_tr_common").hiden();
		}else{
			$(".cls_tr_common").show();
		}
	});
});

/**
 *�����б��ҳ
 */
function page(i){
	var sid = $("#sid").val();
	if(null!=sid&&""!=sid){
		$.dialog.tips('���ݼ�����...',600,'loading.gif');
		var type = $("#stype").val();
		var max = $("#aulist .page_max").val()?$("#aulist .page_max").val():10;
		var user_sn = $("#search_user_sn").val();
		var user_name = $("#search_user_name").val();
		var user_mobile = $("#search_user_mobile").val();
		var query = "&type="+$("#search_type").val();
		if(user_sn!=""){
			query+="&user_sn="+user_sn;
		}
		if(user_name!=""){
			query+="&user_name="+user_name;
		}
		if(user_mobile!=""){
			query+="&user_mobile="+user_mobile;
		}
		var url;
		if("1"==type||"3"==type||"4"==type){
			url = basepath+"/survey/allowuser/list.html?type="+type+"&pagefn=page&page="+i+"&max="+max+"&id="+sid+"&r="+Math.random();
		}else if("2"==type){
			url = basepath+"/survey/aimuser/list.html?pagefn=page&page="+i+"&max="+max+"&sid="+sid+"&r="+Math.random();
		}
		$("#aulist").load(encodeURI(url+query),function(){
			$.dialog.tips('���ݼ������',1,'tips.gif');
			//ȫѡ
			bindChooseAll("cls_chooseall_est");
			//ѡ��ÿҳ��¼����
			$("#aulist .page_max").change(function(){
				page(1);
			});
			
			$(".appointbutton").click(function(){
				var auid = $(this).attr("id");
				var url = basepath+"/survey/allowuser/dialog.html?auid="+auid+"&sid="+sid+"&r="+Math.random();
				$("#dialog_content").load(url);
				$("#dialog").show();
			});
		});
	}
	
}