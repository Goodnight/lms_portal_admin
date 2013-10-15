var dep_type = "";
$(function(){
	$("#form_scoreUser").validate({
		rules : {
			user_id : {
				required : true
			},
			score : {
				required : true,
//				number : true
				digits : true
			},
			gain_type_id : {
				required : true
			}
		},
		messages : {
			user_id : "不能为空",
			score : {
				required : "积分不为空",
//				number : "只能为数字"
				digits : "只能为正整数"
			},
			gain_type_id : "请选择"
			
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
