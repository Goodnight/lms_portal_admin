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
				required : "请输入培训计划名称",
				maxlength : "最长长度为30个字符"
			},
			sn : {
				required : "请输入培训计划编号"
			},
			planType : "请选择计划类型",
			cost : {
				number : "请输入数字内容",
				required : "请输入培训费用",
				min : "培训费用不能为负数"
			},
			remarks:{
				maxlength : "最大长度不能超过400"
			}
		}
	});
	
	//开始日期
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
	
	//结束日期
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
