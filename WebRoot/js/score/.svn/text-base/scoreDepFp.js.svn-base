var dialogType;
$(function(){
	$("#form_scoreDep").validate({
		rules : {
			depName : {
				required : true
			},
			score : {
				required : true,
//				number : true,
				digits : true
			}
		},
		messages : {
			depName : "不能为空",
			score : {
				required : "不为空",
//				number : "只能为数字",
				digits : "只能为正整数"
			}
		}
		
	});
	
	
	$("#form_scoreDep").submit(function(){
		var flag = true;
		if($("input[name=dep_ids]").length<=0){
			$("#principal_error").html('<label for="principal" generated="true" class="error">请选择部门</label>');
			flag = false;
			}else{
				$("#principal_error").html('');
			}
	return flag;
});
	
});



$(function(){
	$("#form_scoreDepGain").validate({
		rules : {
			depNameGain : {
				required : true
			},
			score : {
				required : true,
//				number : true,
				digits : true
			},
			gainType : {
				required : true
			}
			
		},
		messages : {
			depNameGain : "不为空",
			score : {
				required : "不为空",
//				number : "只能为数字",
				digits : "只能为正整数"
			},
			gain_type_id : "请选择"
		}
		
	});
	
	$("#form_scoreDepGain").submit(function(){
		var flag = true;
		if($("input[name=dep_ids]").length<=0){
			$("#principal2_error").html('<label for="principal" generated="true" class="error">请选择部门</label>');
			flag = false;
			}else{
				$("#principal2_error").html('');
			}
	return flag;
});
	
});

