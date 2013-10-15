
/**
* 角色人员管理列表
*/

$(function(){
	page(1);
	
	$("#searchButton").click(function(){
		page(1);
	});
	
	$(".chooseperson").click(function(){
		var id = $(this).attr("id");
		var url = basepath+"/dialog/user.html?from=choose&html_name="+id+"_name&html_id="+id+"_id&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
});

function page(i){
	var query = "";
	var roleId = $("#roleId").val();
	if(roleId != null && roleId != ""){
		query+= "&roleId="+roleId;
	}
	var sn = $("#snId").val();
	if(sn != null && sn != ""){
		query += "&sn="+sn;
	}
	var name = $("#nameId").val();
	if(name != null && name != ""){
		query += "&name="+name;
	}
	var url = basepath+"/list/auth/roleStaffList.html?pagefn=page&page="+i+"&r="+Math.random();
	$("#list_roleStaffList").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		//权限移除
		$(".btn_delete").click(function(){
			if(confirm("确定要删除选项吗？")){
				var param = $.param($("input:checkbox[name=index]:checked"));
				$.ajax({
					url : "deleteStaff.html",
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
						if(data == null){
							alert("删除出错");
						}else{
							page(1);
						}
					},
					error:function(){
						alert("删除出错");
					}
				});
			}
		});
	});
}
