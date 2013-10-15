//开始日期
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

	//结束日期
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
			projectName : "请选择",
			score : {
				required : "不为空",
				number : "只能为数字"
			},
			begin_time : "请选择",
			end_time : "请选择",
			costWay_id : "请选择",
			purpose : "不为空"
		}
		
	});
	
	
	
	//打开选择人员对话框
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
			dep_id : "不为空",
			score : {
				required : "不为空",
				number : "只能为数字"
			},
			gain_type_id : "请选择"
		}
		
	});
	
});

