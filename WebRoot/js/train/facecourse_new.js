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
			name : "请输入面授课堂名称",
			classHour : {
				required : "请输入学时",
				number : "请输入数字"
			},
			aim : "请输入培训班目的",
			content : "请输入培训内容",
			class_dep_name:"请选择知识分类"
		}
	});
	
	$("#face_form").submit(function(){
		var flag = true;
		if($("#classHour").val()<=0)
		{
			var html = '<label class="error" for="classHour" generated="true">请输入正数</label>';
			$("#classHour").addClass('error');
			$("#classHour").after(html);
			flag = false;
		}
		if($("#speaker_id").val()==""&&$("#teacherName").val()==""){
			var teacherType = $("input[name=teacherType]:checked").val();
			if(teacherType == "0"){
				$(".speaker_error").html('<label for="speaker_id" generated="true" class="error">请选择讲师</label>');
			}else{
				$(".speaker_error").html('<label for="speaker_id" generated="true" class="error">请填写讲师</label>');
			}
			flag = false;
		}else{
			$(".speaker_error").html("");
		}
		if($("input[name=dep_Names]").length<=0){
			$("#position_error").html('<label for="position" generated="true" class="error">请选择岗位</label>');
			flag = false;
		}else{
			$("#position_error").html('');
		}
		return flag;
	});
	
	//报名开始日期
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
	
	//报名结束日期
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
	
	//打开选择人员对话框
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
		//获得树中选中的内容
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


