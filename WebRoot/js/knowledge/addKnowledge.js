$(function(){
		$("#form_saveKnowledge").validate({
			rules : {
				name : {
					required : true
				},
				codeShort : {
					required : true
				}
			},
			messages : {
				name : "不为空",
				codeShort : "不为空"
			}
			
		});
	});