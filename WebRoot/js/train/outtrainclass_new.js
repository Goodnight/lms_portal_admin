/**
 * 
 */
$(function(){
	
	jQuery.validator.addMethod("numb", function(value, element) {
		   var tel=/^\d{0,8}\.{0,1}(\d{1,2})?$/;
		   
		  return this.optional(element) || (tel.test(value));
		  });
	
	
	$("#out_form").validate({
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		rules : {
			name : {
				required:true,
				maxlength:50
			},
			start_date : {
				required : true
			},
			end_date : {
				required : true
			},
			dep_name:{
				required:true
			},
			trainDuration:{
				number : true,
				numb : true
			}
		},
		messages : {
			name  : {
				required:"请输入外派培训班名称",
				maxlength:"名称长度不能超过50"
				
			},
			start_date : "请输入开始时间",
			end_date : "请输入结束时间",
			dep_name : "请选主办择部门",
			trainDuration:{
				number : "请输入数字",
				numb: "请输入正确的数字,小数点后最多两位"
			}
		}
	});
	
	$("#out_form").submit(function(){
//		var name = $("#name").val();
//		var tcid = $("#tcId").val();
		var flag = true;
		var tion = $("input[name=trainDuration]").val();
		if(isNaN(tion)||parseInt(tion)<=0){
			$("input[name=trainDuration]").after('<label for="trainDuration" generated="true" class="error">时长需是正数</label>');
			flag = false;
		}
//		$.ajax({
//			url : basepath + "/trainclass/checkName.html",
//			type : "get",
//			async : false,
//			data : "name="+encodeURI(name)+"&tcid="+tcid,
//			dataType : "json",
//			success : function(n){
//				if(n!="" && n>0){
//					flag = false;
//					$("#name_error").html('<label for="name" generated="true" class="error">名称已经使用</label>');
//				}
//			}
//		});
		return flag;
	});
	
	//培训班开始日期
	$("#start_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#end_date").datepicker("option","minDate",dt);
		}
	});
	
	//培训班结束日期
	$("#end_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#start_date").datepicker("option","maxDate",dt);
		}
	});
	
	$(".cls_close").click(function(){
		window.location.href = basepath+"/trainclass/out/list.html";
	});
	
	$(".choosedepartment").click(function(){
		initTree("#new_org_jstree", userdepid, userdeppath, "org", orgClick);
	});
	
});

function orgClick(type,id,name,namePath){
	$("#dep_id").val(id);
	$("#dep_name").val(namePath+"/"+name);
}