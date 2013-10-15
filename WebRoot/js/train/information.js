/**
 * 
 */
var dep_type = "";

$(function(){	
	//$.metadata.setType("attr", "validate");
	$("#information").validate({
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		rules:{
			name : {
				required : true
			},
			class_way : {
				required : true
			},
			class_dep_id : {
				required : true
			},
			publish_date : {
				required : true,
				isDate : true
			},
			start_date : {
				required : true,
				isDate : true
			},
			end_date : {
				required : true,
				isDate : true
			},
			timesNum : {
				required : true,
				number : true
			},
			attendNum : {
				required : true,
				number : true,
				digits : true
			},
			purpose : {
				required : true,
				minlength : 10,
				maxlength:1000
			},
			content : {
				required : true,
				minlength : 10,
				maxlength : 1000
			},
			train_object : {
				required : true
			},
			budget_train:{
				number : true,
				min : 0,
				max : 1000000000000000000000
			},
			budget_board : {
				number : true,
				min : 0,
				max : 1000000000000000000000
			},
			budget_total : {
				number : true,
				min : 0,
				max : 1000000000000000000000
			}

		},
		messages:{
			name : "��������ѵ������",
			class_way : "��ѡ����ѵ��ʽ",
			class_dep_id : "���������첿��",
			publish_date : "�����뷢��ʱ��",
			start_date : "��������ѵ��ʼ����",
			end_date : "��������ѵ��������",
			timesNum : {
				required : "����������",
				number : "����������"
			},
			attendNum : {
				required : "������μ�����",
				number : "����������",
				digits : "����������"
			},
			purpose : {
				required : "��������ѵĿ��",
				minlength : "�ַ�������������10",
				maxlength : "�ַ��������ܳ���1000"
			},
			content : {
				required : "��������ѵ����",
				minlength : "�ַ�������������10",
				maxlength : "�ַ��������ܳ���1000"
			},
			train_object : "��������ѵ����",
			budget_train : {
				number : "����������",
				min : "�������������ֵ",
				max : "�������������ֵ"
			},
			budget_board : {
				number : "����������",
				min : "�������������ֵ",
				max : "�������������ֵ"
			},
			budget_total : {
				number : "����������",
				min : "�������������ֵ",
				max : "�������������ֵ"
			}
		}
	});
	
	$("#information").submit(function(){
		var flag = true;
		if($("#class_dep_id").val()==""){
			$("#class_dep_id_error").html('<label for="class_dep_id" generated="true" class="error">��ѡ�����첿��</label>');
			flag = false;
		}else{
			$("#class_dep_id_error").html("");
		}
		if($("input[name=principal]").length<=0){
			$("#principal_error").html('<label for="principal" generated="true" class="error">��ѡ�������</label>');
			flag = false;
		}else{
			$("#principal_error").html('');
		}
		var ifOnline = $("input[name=if_online]:checked").val();
		if(ifOnline=="1"){
			if($("#apply_start_date").val()==""){
				$("#apply_date_error").html('<label for="class_dep_id" generated="true" class="error">��ѡ������ʼʱ��</label>');
				flag = false;
			}else{
				$("#apply_date_error").html('');
			}
			if($("#apply_end_date").val()==""){
				$("#apply_date_error").html('<label for="class_dep_id" generated="true" class="error">��ѡ��������ʱ��</label>');
				flag = false;
			}else{
				$("#apply_date_error").html('');
			}
			if($("input[name=apply_dep]").length<=0){
				$("#applyDep_error").html('<label for="class_dep_id" generated="true" class="error">��ѡ��������</label>');
				flag = false;
			}else{
				$("#applyDep_error").html('');
			}
		}
		return flag;
	});
	
	$(".choosedep").click(function(){
		$('#applyDep_error').html('');
		dep_type = $(this).attr("id");
		if(dep_type == "apply_dep"){
			initCheckTree("#new_org_jstree", null, userdeppath,"org");
		}else{
			initTree("#new_org_jstree", null, userdeppath, "org", orgClick);
		}
	});
	
	//��ѡ��ȷ��
	$(".treewindowsure").click(function(){
		if(dep_type == "apply_dep"){
			$("#new_org_jstree").jstree("get_selected").each(function(i,n){
				addChoosedItem("apply_dep_list","apply_dep",$(n).attr("namePath")+"/"+$(n).attr("name"),n.id);
			});
		}
	});
	
	//�Ƴ���ѡ��������
	$(".rm_apply_dep").live("click",function(){
		$(this).parent().remove();
	});
	
	//��ѡ����Ա�Ի���
	$(".info_chooseperson").click(function(){
		var id = $(this).attr("id");
		if(id == 'principal')
		{
			$("#principal_error").html('');
		}
		var url = basepath+"/dialog/user.html?from=multi&list="+id+"_list&name="+id+"&r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
	//��ѡ��ƻ��е���ѵ��Ի���
	$("#planedclass").click(function(){
		var url = basepath+"/trainclass/dialog/planedclass.html?r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
	//��ѡ��������ѵ��ĶԻ���
	$("#btn_chooseclass").click(function(){
		var url = basepath+"/trainclass/dialog/relatedclass.html?r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
	//����ʱ��
	$("#publish_date").datepicker({
		showOn:"button",
		changeMonth: true,
		changeYear: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		maxDate:$("#apply_start_date").val()==""?$("#start_date").val():$("#apply_start_date").val(),
		onSelect : function(dt){
			$("#apply_start_date").datepicker("option","minDate",dt);
			$("#apply_end_date").datepicker("option","minDate",$("#apply_start_date").val()==""?dt:$("#apply_start_date").val());
			$("#start_date").datepicker("option","minDate",$("#apply_end_date").val()==""?dt:$("#apply_end_date").val());
			$("#end_date").datepicker("option","minDate",$("#start_date").val()==""?dt:$("#start_date").val());
			$('#publish_date').removeClass('error');
			$('#publish_date_error').html('');
		}
	});
	
	//������ʼ����
	$("#apply_start_date").datepicker({
		showOn:"button",
		changeMonth: true,
		changeYear: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		minDate:$("#publish_date").val(),
		maxDate:$("#apply_end_date").val()==""?$("#start_date").val():$("#apply_end_date").val(),
		onSelect : function(dt){
			$("#publish_date").datepicker("option","maxDate",dt);
			$("#apply_end_date").datepicker("option","minDate",dt);
			$("#start_date").datepicker("option","minDate",$("#apply_end_date").val()?dt:$("#apply_end_date").val());
			$("#end_date").datepicker("option","minDate",$("#start_date").val()==""?dt:$("#start_date").val());
			$('#apply_start_date').removeClass('error');
			$('#apply_date_error').html('');
		}
	});
	
	//������������
	$("#apply_end_date").datepicker({
		showOn:"button",
		changeMonth: true,
		changeYear: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		minDate:$("#apply_start_date").val()==""?$("#publish_date").val():$("#apply_start_date").val(),
		maxDate:$("#start_date").val(),
		onSelect : function(dt){
			$("#publish_date").datepicker("option","maxDate",$("#apply_start_date").val()==""?dt:$("#apply_start_date").val());
			$("#apply_start_date").datepicker("option","maxDate",dt);
			$("#start_date").datepicker("option","minDate",dt);
			$("#end_date").datepicker("option","minDate",$("#start_date").val()==""?dt:$("#start_date").val());
			$('#apply_end_date').removeClass('error');
			$('#apply_date_error').html('');
		}
	});
	
	//��ѵ�࿪ʼ����
	$("#start_date").datepicker({
		showOn:"button",
		changeMonth: true,
		changeYear: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		minDate:$("#apply_end_date").val()==""?$("#publish_date").val():$("#apply_end_date").val(),
		maxDate:$("#end_date").val(),
		onSelect : function(dt){
			$("#publish_date").datepicker("option","maxDate",$("#apply_start_date").val()==""?dt:$("#apply_start_date").val());
			$("#apply_start_date").datepicker("option","maxDate",$("#apply_end_date").val()==""?dt:$("#apply_end_date").val());
			$("#apply_end_date").datepicker("option","maxDate",dt);
			$("#end_date").datepicker("option","minDate",dt);
			$("#enrol_start_date").datepicker("option","maxDate",dt);
			$("#enrol_end_date").datepicker("option","maxDate",dt);
			$('#start_date').removeClass('error');
			$('#start_date_error').html('');
		}
	});
	
	//��ѵ���������
	$("#end_date").datepicker({
		showOn:"button",
		changeMonth: true,
		changeYear: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		minDate:$("#start_date").val(),
		onSelect : function(dt){
			$("#publish_date").datepicker("option","maxDate",$("#apply_start_date").val()==""?dt:$("#apply_start_date").val());
			$("#apply_start_date").datepicker("option","maxDate",$("#apply_end_date").val()==""?dt:$("#apply_end_date").val());
			$("#apply_end_date").datepicker("option","maxDate",$("#start_date").val()?dt:$("#start_date").val());
			$("#start_date").datepicker("option","maxDate",dt);
			$('#end_date').removeClass('error');
			$('#end_date_error').html('');
		}
	});
	
	//������ʼ����
	$("#enrol_start_date").datepicker({
		showOn:"button",
		changeMonth: true,
		changeYear: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		maxDate:$("#start_date").val(),
		onSelect : function(dt){
			$("#enrol_end_date").datepicker("option","minDate",dt);
		}
	});
	
	//������������
	$("#enrol_end_date").datepicker({
		showOn:"button",
		changeMonth: true,
		changeYear: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		maxDate:$("#start_date").val(),
		onSelect : function(dt){
			$("#enrol_start_date").datepicker("option","maxDate",dt);
		}
	});
	
	$("#trainplanclass").validate({
		rules:{
			name : {
				required : true,
				maxlength : 30
			},
			sn : {
				required : true
			},
			expectStartQuarter : {
				required : true
			},
			trainObeject : {
				required : true,
				minlength : 10,
				maxlength : 1000
			},
			class_dep : {
				required : true
			},
			principal : {
				required : true
			},
			class_way : {
				required : true
			},
			class_dep_name : {
				required : true
			},
			publish_date : {
				required : true
			},
			start_date : {
				required : true
			},
			end_date : {
				required : true
			},
			timesNum : {
				required : true,
				number : true,
				digits : true
			},
			attendNum : {
				required : true,
				number : true,
				digits : true
			},
			planPurpose : {
				required : true,
				minlength : 10,
				maxlength : 1000
			},
			content : {
				required : true,
				minlength : 10,
				maxlength : 1000
			},
			train_object : {
				required : true
			},
			budget_train : {
				number : true,
				min:0
			},
			budget_board : {
				number : true,
				min:0
			},
			trainDuration : {
				required : true,
				number : true,
				digits : true
			}
		},
		messages:{
			name : {
				required : "��������ѵ������",
				maxlength : "������󳤶�Ϊ30���ַ�"
			},
			sn : {
				required : "��������ѵ����"
			},
			trainObeject : {
				required : "��������ѵ����",
				minlength : "����������С����Ϊ10���ַ�",
				maxlength : "����������󳤶�Ϊ1000���ַ�"
			},
			expectStartQuarter : "��������ѵ�༾��",
			class_dep : "��������ѵ�ಿ��",
			principal : "��������ѵ�������",
			class_way : "��ѡ����ѵ��ʽ",
			class_dep_name : "���������첿��",
			publish_date : "�����뷢��ʱ��",
			start_date : "��������ѵ��ʼ����",
			end_date : "��������ѵ��������",
			timesNum : {
				required : "����������",
				number : "����������",
				digits : "����������"
			},
			attendNum : {
				required : "������ÿ������",
				number : "����������",
				digits : "����������"
			},
			budget_train : {
				number : "����������",
				min : "���������0����"
			},
			budget_board : {
				number : "����������",
				min : "���������0����"
			},
			trainDuration : {
				required : "������ÿ������",
				number : "����������",
				digits: "������������"
			},
			planPurpose : {
				required : "��������ѵĿ��",
				minlength : "����������С����Ϊ10���ַ�",
				maxlength : "����������󳤶�Ϊ1000���ַ�"
			},
			content : {
				required : "��������ѵ����",
				minlength : "����������С����Ϊ10���ַ�",
				maxlength : "����������󳤶�Ϊ1000���ַ�"
			},
			train_object : "��������ѵ����"
		}
	});
	
	$("#trainplanclass").submit(function(){
		var flag = true;
		if($("#class_dep_id").val()==""){
			$("#class_dep_id_error").html('<label for="class_dep_id" generated="true" class="error">��ѡ�����첿��</label>');
			flag = false;
		}else{
			$("#class_dep_id_error").html("");
		}
		if($("input[name=principal]").length<=0){
			$("#principal_error").html('<label for="principal" generated="true" class="error">��ѡ�������</label>');
			flag = false;
		}else{
			$("#principal_error").html('');
		}
		return flag;
	});

	$("#closeMe").on("click", function(){

			alert("close = "+close);
		// if(confirm("����δ���棬ȷ��Ҫ�ر���?")){ 
			window.opener=null;
			window.open('','_self');
			alert("window.close"+window.close);
			window.close();
		 //}
	});
	
	$("#attendNum").live("keyup", function(){
		$('#attendNum_error').html('');
		$(this).removeClass('error');
		var class_num = $("#class_num").val();
		var attend_num =$(this).val();
		if(class_num==null||class_num=='') return;
		
		if(parseInt(attend_num)<parseInt(class_num))
		{
			$('#attendNum_error').html('<label class="error">�޸���������С���Ѳμ�����</label>');
			$(this).addClass('error');
		}
	});
});

function orgClick(type,id,name,namePath){
		$("#"+dep_type+"_id").val(id);
		$("#"+dep_type+"_name").text(namePath+name);
		$("#class_dep").removeClass("ml0");
}