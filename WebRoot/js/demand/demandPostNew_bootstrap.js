/**
 * 岗位培训需求新建
 */
$(function(){
	
	$('#datatable2').dataTable( {
		"aoColumns": [
	      { "bSortable": false },
	      null, null
		] } );
	
	//打开选择人员对话框
	$(".chooseperson").click(function(){
		var uid = $(this).attr("id");
		var url = basepath+"/list/demandUserList1.html?pagefn=page&r="+Math.random()+"&uid="+uid;
		$("#dialog_content").html("");
		$("#dialog_content").load(url);
		$("#dialog").show();
	});

	$("#submit1").click(function(){
		if($("#userIds").length==0){
			alert("请选择人员");
			return false;
		}
		if($("#post_id").val()==""){
			alert("请选择岗位");
			return false;
		}
	});
	
	//新建时的表单验证
	$("#saveDemandPost").validate({
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		rules:{
			urgentLevel : {
				required : true
			},
			businessTrain : {
				required : true,
				maxlength : 2000
			},
			professionTrain : {
				required : true,
				maxlength : 2000
			}
		},
		messages:{
			urgentLevel : {
				required : "请选择迫切性!"
			},
			businessTrain : {
				required : "请输入业务发展所需提升性培训!",
				maxlength : "最大长度为2000!"
			},
			professionTrain : {
				required : "请输入职业发展所需提升性培训!",
				maxlength : "最大长度为2000!"
			}
		}
	});
	
	//修改时的表单验证
	$("#saveDemandPostModify").validate({
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		rules:{
			businessTrain : {
				required : true,
				maxlength : 2000
			},
			professionTrain : {
				required : true,
				maxlength : 2000
			}
		},
		messages:{
			businessTrain : {
				required : "请输入业务发展所需提升性培训!",
				maxlength : "最大长度为2000!"
			},
			professionTrain : {
				required : "请输入职业发展所需提升性培训!",
				maxlength : "最大长度为2000!"
			}
		}
	});
});
