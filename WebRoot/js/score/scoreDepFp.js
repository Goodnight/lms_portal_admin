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
			depName : "����Ϊ��",
			score : {
				required : "��Ϊ��",
//				number : "ֻ��Ϊ����",
				digits : "ֻ��Ϊ������"
			}
		}
		
	});
	
	
	$("#form_scoreDep").submit(function(){
		var flag = true;
		if($("input[name=dep_ids]").length<=0){
			$("#principal_error").html('<label for="principal" generated="true" class="error">��ѡ����</label>');
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
			depNameGain : "��Ϊ��",
			score : {
				required : "��Ϊ��",
//				number : "ֻ��Ϊ����",
				digits : "ֻ��Ϊ������"
			},
			gain_type_id : "��ѡ��"
		}
		
	});
	
	$("#form_scoreDepGain").submit(function(){
		var flag = true;
		if($("input[name=dep_ids]").length<=0){
			$("#principal2_error").html('<label for="principal" generated="true" class="error">��ѡ����</label>');
			flag = false;
			}else{
				$("#principal2_error").html('');
			}
	return flag;
});
	
});

