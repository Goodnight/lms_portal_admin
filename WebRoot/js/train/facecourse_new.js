/**
 * 
 */
$(function(){
	
	$("#face_form").validate({
		rules : {
			name : {
				required : true
			},
			classHour :{
				required : true,
				number : true
			},
			aim : {
				required : true
			},
			content : {
				required : true
			},
			class_dep_name:{
				required : true
			}
		},
		messages : {
			name : "���������ڿ�������",
			classHour : {
				required : "������ѧʱ",
				number : "����������"
			},
			aim : "��������ѵ��Ŀ��",
			content : "��������ѵ����",
			class_dep_name:"��ѡ��֪ʶ����"
		}
	});
	
	$("#face_form").submit(function(){
		var flag = true;
		if($("#classHour").val()<=0)
		{
			var html = '<label class="error" for="classHour" generated="true">����������</label>';
			$("#classHour").addClass('error');
			$("#classHour").after(html);
			flag = false;
		}
		if($("#speaker_id").val()==""&&$("#teacherName").val()==""){
			var teacherType = $("input[name=teacherType]:checked").val();
			if(teacherType == "0"){
				$(".speaker_error").html('<label for="speaker_id" generated="true" class="error">��ѡ��ʦ</label>');
			}else{
				$(".speaker_error").html('<label for="speaker_id" generated="true" class="error">����д��ʦ</label>');
			}
			flag = false;
		}else{
			$(".speaker_error").html("");
		}
		if($("input[name=dep_Names]").length<=0){
			$("#position_error").html('<label for="position" generated="true" class="error">��ѡ���λ</label>');
			flag = false;
		}else{
			$("#position_error").html('');
		}
		return flag;
	});
	
	//������ʼ����
	$("#startTime").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		minDate : trainStartDt,
		maxDate : trainEndDt,
		onSelect : function(dt){
			$("#endTime").datepicker("option","minDate",dt);
		}
	});
	
	//������������
	$("#endTime").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		minDate : trainStartDt,
		maxDate : trainEndDt,
		onSelect : function(dt){
			$("#startTime").datepicker("option","maxDate",dt);
		}
	});
	
	//��ѡ����Ա�Ի���
	$(".chooseteacher").click(function(){
		var person_type = $(this).attr("id");
		var url = basepath+"/dialog/user.html?from=choose&html_name="+person_type+"_name&html_id="+person_type+"_id&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	$(".newshowtree").click(function(){
		initCheckTree("#new_jstree_checkbox",null,rootPosition,"pos");
	});
	
	$(".treewindowsure").click(function(){
		var names = "";
		var ids = "";
		//�������ѡ�е�����
		$("#new_jstree_checkbox").jstree("get_checked").each(function(i,n){
			addChoosedItem("post_list","position",$(n).attr("name"),n.id);
		});
	});
	
	$("input[name=teacherType]").click(function(){
		var v = $(this).val();
		if(v=="0"){
			$(".inner").removeClass("hidden");
			$(".outter").addClass("hidden");
		}else{
			$(".inner").addClass("hidden");
			$(".outter").removeClass("hidden");
		}
	});
	$("#classHour").bind('keyup', function() {
		$("#classHour").removeClass('error');
		$("label [for='classHour']").remove();
	});
});


