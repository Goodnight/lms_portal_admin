/**
 * 新建会议中的弹窗相关
 */

$(function(){
	$("#meeting").validate({
		
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		
		
		rules:{
			name : {
				required : true
			},
			start_date : {
				required : true
			},
			end_date : {
				required : true
			},
			master : {
				required : true
			},
			teacher : {
				required : true
			},
			maxAttend : {
				required : true,
				number : true,
				range:[0,500],
				digits : true
			}
		},
		messages:{
			name : "请输入会议名称",
			start_date : "请输入会议开始日期",
			end_date : "请输入会议结束日期",
			master : "请输入会议主持人",
			teacher : "请输入会议讲师",
			maxAttend : {
				required : "请输入最大参会人数",
				number : "请输入数字内容",
				range: "最大参会人数为500人!",
				digits : "请输入整数"
			}
		}
	});
	
	$(".chooseperson").click(function(){
		
		
		$('#master_name').removeClass('error');
		$('#master_name_error').html('');
		
		var id = $(this).attr("id");
		var url = basepath+"/dialog/user.html?from=choose&html_name="+id+"_name&html_id="+id+"_id&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	$(".chooseperson1").click(function(){
		
		$('#teacher_name').removeClass('error');
		$('#teacher_name_error').html('');
		
		
		var id = $(this).attr("id");
		var url = basepath+"/dialog/user.html?from=choose&html_name="+id+"_name&html_id="+id+"_id&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
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
			$('#startDate').removeClass('error');
			$('#startDate_error').html('');
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
			$('#endDate').removeClass('error');
			$('#endDate_error').html('');
		}
	});
});
