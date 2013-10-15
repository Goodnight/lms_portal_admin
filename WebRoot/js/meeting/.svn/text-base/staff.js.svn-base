
/**
 * 分页
 */
setOrgData(0);
$(function(){
	page(1);
	
	$("#searchButton").click(function(){
		page(1);
	});
	
	$("#page_max").change(function(){
		page(1);
	});
	
	/**
	* 删除会议人员安排
	*/

	$("#deleteStaff").click(function(){
			if(confirm("确定要删除选项吗？")){
				var ids = $("input:checkbox[name=staffIndex]:checked");
				var param = "method=remove&maId=";
				if(ids.length>0){
					for(n=0;n<ids.length;n++){
						param += $(ids[n]).val()+",";
					}
					$.ajax({
						url : basepath+"/meetingManage/deleteStaff.html",
						type : "POST",
						data : param,
						dataType : "json",
						success : function(data){
							if(data!=null){
								page(1);
							}else{
								alert("移除出错");
							}
						},
						error : function(){
							alert("移除出错");
						}
					});
				}
			}		
	});
	
	//打开选择人员对话框
	$("#selectStaff").click(function(){
		var url = basepath+"/dialog/user.html?page=page&r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog,#dialog .blackall,#dialog .newwindow").show();
	});
	
	$(".cls_ok").click(function(){
		alert("haha");
	});
});

function page(i){
	var query = "";
	var max = $("#list_mtstafflist .page_max").val()?$("#list_mtstafflist .page_max").val():10;
	var page_mId = $("#page_mId").val();
	if(page_mId != null && page_mId != ""){
		query += "&page_mId="+page_mId;
	}
	var staffSn = document.getElementById("snId").value;
	if(staffSn != null && staffSn != ""){
		query += "&sn="+staffSn;
	}
	var staffName = document.getElementById("nameId").value;
	if(staffName != null && staffName != ""){
		query += "&name="+staffName;
	}
	var url = basepath+"/list/meetingManage/meetingStaffList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_mtstafflist").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		bindChooseAll("cls_chooseall");
		//选择每页记录数量
		$("#list_mtstafflist .page_max").change(function(){
			page(1);
		});
	});
}

