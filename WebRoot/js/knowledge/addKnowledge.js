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
				name : "��Ϊ��",
				codeShort : "��Ϊ��"
			}
			
		});
	});