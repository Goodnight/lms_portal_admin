

$(function(){
		//�޸�֪ʶ����
		$("#btn_up").click(function(){
			var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
			$.ajax({
				url : "doSaveKnowledgeCategory.html",
				type : "POST",
				data : param,
				dataType : "json",
				success : function(data){
					
					
				}
			}
			);
		});
});
