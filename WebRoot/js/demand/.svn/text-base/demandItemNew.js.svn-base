/**
 * 新建需求收集项
 */
$(function(){
	$("#demandItemNew").validate({
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		rules:{
			sn : {
				required:true,
				digits:true 
			},
			name : {
				required:true 
			},
			status : {
				required:true
			}
		},
		messages:{
			sn : {
				required: "请输入编号!",
				digits: "请输入整数!"
			},
			name : {
				required: "请输入名称!"
			},
			status : {
				required : "请选择状态!"
			}
		}
	});
});
