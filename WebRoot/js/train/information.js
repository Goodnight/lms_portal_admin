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
			name : "请输入培训班名称",
			class_way : "请选择培训方式",
			class_dep_id : "请输入主办部门",
			publish_date : "请输入发布时间",
			start_date : "请输入培训开始日期",
			end_date : "请输入培训结束日期",
			timesNum : {
				required : "请输入期数",
				number : "请输入数字"
			},
			attendNum : {
				required : "请输入参加人数",
				number : "请输入数字",
				digits : "请输入整数"
			},
			purpose : {
				required : "请输入培训目的",
				minlength : "字符数量不能少于10",
				maxlength : "字符数量不能超过1000"
			},
			content : {
				required : "请输入培训内容",
				minlength : "字符数量不能少于10",
				maxlength : "字符数量不能超过1000"
			},
			train_object : "请输入培训对象",
			budget_train : {
				number : "请输入数字",
				min : "请输入合理的数值",
				max : "请输入合理的数值"
			},
			budget_board : {
				number : "请输入数字",
				min : "请输入合理的数值",
				max : "请输入合理的数值"
			},
			budget_total : {
				number : "请输入数字",
				min : "请输入合理的数值",
				max : "请输入合理的数值"
			}
		}
	});
	
	$("#information").submit(function(){
		var flag = true;
		if($("#class_dep_id").val()==""){
			$("#class_dep_id_error").html('<label for="class_dep_id" generated="true" class="error">请选择主办部门</label>');
			flag = false;
		}else{
			$("#class_dep_id_error").html("");
		}
		if($("input[name=principal]").length<=0){
			$("#principal_error").html('<label for="principal" generated="true" class="error">请选择班主任</label>');
			flag = false;
		}else{
			$("#principal_error").html('');
		}
		var ifOnline = $("input[name=if_online]:checked").val();
		if(ifOnline=="1"){
			if($("#apply_start_date").val()==""){
				$("#apply_date_error").html('<label for="class_dep_id" generated="true" class="error">请选择报名开始时间</label>');
				flag = false;
			}else{
				$("#apply_date_error").html('');
			}
			if($("#apply_end_date").val()==""){
				$("#apply_date_error").html('<label for="class_dep_id" generated="true" class="error">请选择报名结束时间</label>');
				flag = false;
			}else{
				$("#apply_date_error").html('');
			}
			if($("input[name=apply_dep]").length<=0){
				$("#applyDep_error").html('<label for="class_dep_id" generated="true" class="error">请选择报名部门</label>');
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
	
	//多选树确定
	$(".treewindowsure").click(function(){
		if(dep_type == "apply_dep"){
			$("#new_org_jstree").jstree("get_selected").each(function(i,n){
				addChoosedItem("apply_dep_list","apply_dep",$(n).attr("namePath")+"/"+$(n).attr("name"),n.id);
			});
		}
	});
	
	//移除已选报名部门
	$(".rm_apply_dep").live("click",function(){
		$(this).parent().remove();
	});
	
	//打开选择人员对话框
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
	
	//打开选择计划中的培训班对话框
	$("#planedclass").click(function(){
		var url = basepath+"/trainclass/dialog/planedclass.html?r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
	//打开选择已有培训班的对话框
	$("#btn_chooseclass").click(function(){
		var url = basepath+"/trainclass/dialog/relatedclass.html?r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
	//发布时间
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
	
	//报名开始日期
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
	
	//报名结束日期
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
	
	//培训班开始日期
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
	
	//培训班结束日期
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
	
	//报到开始日期
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
	
	//报到结束日期
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
				required : "请输入培训班名称",
				maxlength : "名称最大长度为30个字符"
			},
			sn : {
				required : "请输入培训班编号"
			},
			trainObeject : {
				required : "请输入培训对象",
				minlength : "输入内容最小长度为10个字符",
				maxlength : "输入内容最大长度为1000个字符"
			},
			expectStartQuarter : "请输入培训班季度",
			class_dep : "请输入培训班部门",
			principal : "请输入培训班班主任",
			class_way : "请选择培训方式",
			class_dep_name : "请输入主办部门",
			publish_date : "请输入发布时间",
			start_date : "请输入培训开始日期",
			end_date : "请输入培训结束日期",
			timesNum : {
				required : "请输入期数",
				number : "请输入数字",
				digits : "请输入整数"
			},
			attendNum : {
				required : "请输入每期人数",
				number : "请输入数字",
				digits : "请输入整数"
			},
			budget_train : {
				number : "请输入数字",
				min : "请输入大于0的数"
			},
			budget_board : {
				number : "请输入数字",
				min : "请输入大于0的数"
			},
			trainDuration : {
				required : "请输入每期天数",
				number : "请输入数字",
				digits: "请输入正整数"
			},
			planPurpose : {
				required : "请输入培训目的",
				minlength : "输入内容最小长度为10个字符",
				maxlength : "输入内容最大长度为1000个字符"
			},
			content : {
				required : "请输入培训内容",
				minlength : "输入内容最小长度为10个字符",
				maxlength : "输入内容最大长度为1000个字符"
			},
			train_object : "请输入培训对象"
		}
	});
	
	$("#trainplanclass").submit(function(){
		var flag = true;
		if($("#class_dep_id").val()==""){
			$("#class_dep_id_error").html('<label for="class_dep_id" generated="true" class="error">请选择主办部门</label>');
			flag = false;
		}else{
			$("#class_dep_id_error").html("");
		}
		if($("input[name=principal]").length<=0){
			$("#principal_error").html('<label for="principal" generated="true" class="error">请选择班主任</label>');
			flag = false;
		}else{
			$("#principal_error").html('');
		}
		return flag;
	});

	$("#closeMe").on("click", function(){

			alert("close = "+close);
		// if(confirm("数据未保存，确定要关闭吗?")){ 
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
			$('#attendNum_error').html('<label class="error">修改人数不能小于已参加人数</label>');
			$(this).addClass('error');
		}
	});
});

function orgClick(type,id,name,namePath){
		$("#"+dep_type+"_id").val(id);
		$("#"+dep_type+"_name").text(namePath+name);
		$("#class_dep").removeClass("ml0");
}
