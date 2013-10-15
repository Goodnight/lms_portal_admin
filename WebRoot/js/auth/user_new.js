var treeType;
var sn_type = 0;//默认自动生成
$(function(){
	
	 jQuery.validator.addMethod("phone", function(value, element) {
		   var tel=/^(^0\d{2}-?\d{8}$)|(^0\d{3}-?\d{7}$)|(^\(0\d{2}\)-?\d{8}$)|(^\(0\d{3}\)-?\d{7}$)$/;
		 
		  return this.optional(element) || (tel.test(value));
		  });
	 jQuery.validator.addMethod("alnum", function(value, element) {
		   var tel=/^[a-zA-Z0-9]+$/;
		 
		  return this.optional(element) || (tel.test(value));
		  });
	 

	
	$("#form_user").validate({
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		rules : {
			sn : {
				required : true
			},
			name : {
				required : true,
				maxlength : 40
			},
			bir : {
				required : true,
				isDate : true
			},
			workDate : {
				required : true,
				isDate : true
			},
			mobile : {
				required : true,
				number : true,
				maxlength : 11
			},
			email : {
				required :true,
				email : true
			},
			certificateCode : {
				required :true,
				maxlength : 20,
				alnum:true
			},
			contact : {
				maxlength : 15,
				phone:true
			}
		},
		messages : {
			sn : "请输入员工编号",
			name : {
				required : "请输入员工名称",
				maxlength : "输入最大长度为40个字符"
			},
			bir : {
				required : "请输入出生日期"
			},
			workDate : {
				required : "请输入入职日期"
			},
			mobile : {
				required : "请输入手机号码",
				number : "请输入正确的手机号码",
				maxlength : "请输入正确的手机号码"
			},
			email : {
				required : "请输入Email",
				email : "请输入正确的Email格式"
			},
			certificateCode : {
				required : "请输入证件编号",
				maxlength : "最大输入长度为20个字符",
				alnum:"只能输入数字和字母！"
			},
			contact : {
				maxlength : "最大输入长度为15个字符",
				phone:"请输入正确的电话号码"
					
			}
		}
		
	});
	
	$("#form_user").submit(function(){
		var re = true;
		var org_name = $("#org_name").val();
		var empNatureId = $("#empNatureId").val();
		var certificateTypeId = $("#certificateTypeId").val();
		var old_certificateCode = $("#old_certificateCode").val();
		var certificateCode = $("#certificateCode").val();
		var old_mobile = $("#old_mobile").val();
		var old_email = $("#old_email").val();
		var old_sn = $("#oldSn").val();
		var sn = $("#oriSn").val();
		var mobile = $("#mobile").val();
		var email = $("#email").val();
		var birth = $("#bir").val();
		if(sn_type==1){
			if(sn==null||sn==''){
				$('#sn_error').show();
				return false;
			}
		}else{
			if(old_sn==null||old_sn==''){//此判断是新建时，因新建时old_sn为空 SN自动生成 
				$("#oriSn").val('');
			}else{
				if(sn==null||sn==''){
					$('#sn_error').show();
					return false;
				}
			}
		}
		if(old_sn != sn){
			$.ajax({
				url : basepath+"/user/validate.html",
				type : "get",
				async : false,
				data : "type=sn&value="+sn,
				dataType : "json",
				success : function(data){
					//true是已经存在
					re = !data;
				}
			});
		}		
		if(!re){
			$.dialog.alert("该账号已经存在!");
			return false;
		}
		
		if(old_email != email){
			$.ajax({
				url : basepath+"/user/validate.html",
				type : "get",
				async : false,
				data : "type=email&value="+email,
				dataType : "json",
				success : function(data){
					//true是已经存在
					re = !data;
				}
			});
		}		
		if(!re){
			$.dialog.alert("Email已经存在!");
			return false;
		}
		
		if(old_mobile != mobile){
			$.ajax({
				url : basepath+"/user/validate.html",
				type : "get",
				async : false,
				data : "type=mobile&value="+mobile,
				dataType : "json",
				success : function(data){
					//true是已经存在
					re = !data;
				}
			});
		}		
		if(!re){
			$.dialog.alert("Mobile已经存在!");
			return false;
		}
		
		//验证证件号码唯一
		if(old_certificateCode != certificateCode){
			$.ajax({
				url : basepath+"/user/validate.html",
				type : "get",
				async : false,
				data : "type=certificateCode&value="+certificateCode,
				dataType : "json",
				success : function(data){
					//true是已经存在
					re = !data;
				}
			});
		}		
		if(!re){
			$.dialog.alert("证件号码已经存在!");
			return false;
		}
		
		
		
		
		
		if(certificateTypeId == "usre_certificate_type_0"){
			$.dialog.alert("请选择证件类型");
			return false;
		}
		if(empNatureId == "user_empnature_0"){
			$.dialog.alert("请选择用工性质");
			return false;
		}
		if(org_name==null ||org_name == ""){
			$.dialog.alert("请选择员工部门");
			return false;
		}
		return re;
		
		
	});
	
	$("#certificateTypeId").change(function(){
		if($(this).find('option:selected').text() == "请选择"){
			$("#certificateCode").val("");
			$("#certificateCode").attr("disabled",true);
		}else{
			$("#certificateCode").attr("disabled",false);
		}
	});
	
	//maxDate 16*365=5840 days
	$("#bir").datepicker({
	      	changeMonth: true,
	      	changeYear: true,
	      	showOn:"button",
			changeMonth: true,
			buttonImage:basepath+"/images/calendar.gif",
			buttonImageOnly:true,
			dateFormat:"yy-mm-dd",
			maxDate : "-5840d",
			yearRange:'-80',
			onSelect : function(dt){
				$("#workDate").datepicker("option","minDate",dt);
			}
	});
	
	$("#workDate").datepicker({
      	changeMonth: true,
      	changeYear: true,
      	showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		yearRange:'-64',
		dateFormat:"yy-mm-dd"
	});

	$(".newshowtree").click(function(){
		treeType = $(this).attr("id");
		var idpath = $("#idpath").val();
		var id = $("#org_id").val();
		var idpaths = idpath.substr(1,idpath.length);
		
		var idarry =idpaths.split("/");
		initTree("#user_jstree",id,idarry,treeType,function(type, id, name){
			if("pos" == type || "dep" == type){
				$("#"+treeType+"_id").val(id);
				$("#"+treeType+"_name").val(name);
			}
			if("org" == type){
				$("#"+treeType+"_id").val("");
				$("#"+treeType+"_name").val("");
			}
		});
	});

	$("#postLock").click(function(){
		var val = $(this).text();
		var uid = $(this).attr("uid");
		var lock = "";
		if(val == "已锁定"){
			lock = "0";
		}else{
			lock = "1";
		}
		$.ajax({
			url : basepath+"/user/lockpost.html",
			type : 'post',
			data : 'uid='+uid+"&postLock="+lock,
			dataType : 'json',
			success : function(re){
				if(lock == "0"){
					$("#postLock").text("未锁定");
				}else{
					$("#postLock").text("已锁定");
				}
			},
			error : function(){}
		});
	});
	
	loadSecondCategory();
	$("#tech_category_upid").change(function(){
		loadSecondCategory();
	});	
});

/**
 * 加载技术业务分类二级列表
 */
function loadSecondCategory(){
	$("#second_tech_category").empty();
	$.ajax({
		url : basepath+"/user/getsecondcategory.html",
		type : "get",
		data : "upid="+$("#tech_category_upid").val(),
		dataType : "json",
		success : function(list){
			var choosed = $("#tech_category_id").val();
			for(i=0;i<list.length;i++){
				if(list[i].id == choosed){
					$("#second_tech_category").append("<option value='"+list[i].id+"' selected='selected'>"+list[i].name+"</option>");
				}else{
					$("#second_tech_category").append("<option value='"+list[i].id+"'>"+list[i].name+"</option>");
				}
			}
		}
	});	
}
/***添加SN生成和修改模块 LuChao****/
function upSn(type){
	if(type==1){
		$('._sn').show();
		sn_type = 1;
	}else{
		$('._sn').hide();
		sn_type = 0;
	}
}




