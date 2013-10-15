	

$(function(){
	depPage(1);
	userPage(1);
	trainClassPage(1);
	$("#btn_assigndep").click(function(){
		var sId=$("#sId").val();
		var url = basepath+"/inquiry/assigndep.html?sId="+sId+"&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	//删除
	$("#btn_deleteDep").click(function(){
		if(confirm("确定要删除选项吗？")){
			
			var ids = $("input:checkbox[name=iadId]:checked");
			
			var param = "method=removeDep&itIds=";
			
			for(var i=0;i<ids.length;i++){
				param += $(ids[i]).val()+",";
			}
			$.ajax({
				url : basepath+"/inquiry/deleteInquiryAimDep.html",
				type : "GET",
				data : param,
				dataType : "json",
				success : function(data){
					depPage(1);		
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
					alert("error");
				}
			});
		}
	});
	//打开选择人员对话框
	$("#btn_user").click(function(){
		var url = basepath+"/dialog/user.html?page=userPage&r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	//删除
	$("#btn_deleteUser").click(function(){
		if(confirm("确定要删除选项吗？")){
			
			var ids = $("input:checkbox[name=iauId]:checked");
			
			var param = "method=removeUser&itIds=";
		
			for(var i=0;i<ids.length;i++){
				param += $(ids[i]).val()+",";
			}
			$.ajax({
				url : "deleteInquiryAimUser.html",
				type : "POST",
				data : param,
				dataType : "json",
				success : function(data){
					userPage(1);		
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
					alert("error");
				}
			});
		}
	});
	$("#btn_trainClass").click(function(){
		var sId=$("#sId").val();
		var url = basepath+"/inquiry/getTrainClass.html?page=trainClassPage&sId="+sId+"&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	//删除
	$("#btn_deleteTrainClass").click(function(){
		if(confirm("确定要删除选项吗？")){
			
			var ids = $("input:checkbox[name=iacId]:checked");
			
			var param = "method=removeClass&itIds=";
		
			for(var i=0;i<ids.length;i++){
				param += $(ids[i]).val()+",";
			}
			$.ajax({
				url : "deleteInquiryAimClass.html",
				type : "POST",
				data : param,
				dataType : "json",
				success : function(data){
					userPage(1);		
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
					alert("error");
				}
			});
		}
	});
});
function depPage(i){
	var sId=$("#sId").val();
	var url = basepath+"/inquiry/inquiryAimDepList.html?sId="+sId+"&page_dep=page_dep&page="+i+"&r="+Math.random();
	$("#list_inquiryAimDep").load(encodeURI(url),function(){
	});
}
function userPage(i){
	var sId=$("#sId").val();
	var url = basepath+"/inquiry/inquiryAimUserList.html?sId="+sId+"&page_user=page_user&page="+i+"&r="+Math.random();
	$("#list_inquiryAimUser").load(encodeURI(url),function(){
	});
}
function trainClassPage(i){
	var sId=$("#sId").val();
	
	var url = basepath+"/inquiry/inquiryAimTrainClassList.html?sId="+sId+"&page_trainclass=page_trainclass&page="+i+"&r="+Math.random();
	$("#list_inquiryAimTrainClass").load(encodeURI(url),function(){
	});
}