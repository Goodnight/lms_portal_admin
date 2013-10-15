
$(function(){
		$("#form_department").validate({
			rules : {
				sn : {
					required :true
				},
				name : {
					required :true
				},
				shortName : {
					required :true
				}
			},
			messages : {
				sn : "请输入部门编号",
				name : "请输入部门名称",
				shortName : "请输入部门简称"
			}
		});
		
		$(".cls_org_type").click(function(){
			if($(this).val()=="org"){
				var upid = $("#orgid").val();
				window.location.href = basepath+ "/organization/new.html?upid="+ upid;
			}
			if($(this).val()=="dep"){
				var orgid = $("#upid").val();
				window.location.href = basepath + "/department/new.html?orgid="+orgid+"&upid=0";
			}
		});
});
