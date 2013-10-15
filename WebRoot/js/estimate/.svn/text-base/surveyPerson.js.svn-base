/**
 * 培训需求调查参与情况
 */
$(function(){
	//加载列表
	page(1);
	page2(1);
	
	//未参与人员删除
	$("#btn_delete").click(function(){
		var ids = $("input:checkbox[name=cls_user]:checked");
		if(ids == null || ids == "" || ids.length == 0){
			alert("Please Choose the Items to Delete!");
		}
		else{
			if(confirm("Do You Really Want to Delete These Checked Items?")){
				var param = "method=remove&userId=";
				if(ids.length>0){
					for(n=0;n<ids.length;n++){
						param += $(ids[n]).val()+",";
					}
					$.ajax({
						url : basepath+"/inquiry/deleteNotAttendedUser.html",
						type : "POST",
						data : param,
						dataType : "json",
						success : function(data){
							page(1);
						},
						error : function(){
							alert("删除出错");
						}
					});
				}
			}
		}	
	});
});

/**
 * 分页
 */
function page(i){ //未参与
	var max = $("#inquiryPersonListInfo2 .page_max").val()?$("#inquiryPersonListInfo2 .page_max").val():10;
	var sId = $("#sId").val();
	var flagU = "&flagU="+flag;
	var value ="&status="+0+"&sId="+sId+flagU;
	var url = basepath+"/survey/inquiryPersonListInfo.html?pagefn=page&page="+i+value+"&max="+max+"&r="+Math.random();
	$("#inquiryPersonListInfo2").load(encodeURI(url),function(){
		bindChooseAll("cls_chooseall");
		//选择每页记录数量
		$("#inquiryPersonListInfo2 .page_max").change(function(){
			page(1);
		});
	});	
}
function page2(i){ //已参与
	var max = $("#inquiryPersonListInfo1 .page_max").val()?$("#inquiryPersonListInfo1 .page_max").val():10;
	var sId = $("#sId").val();
	var flagU = "&flagU="+flag;
	var value ="&status="+1+"&sId="+sId+flagU;
	var url = basepath+"/survey/inquiryPersonListInfoIn.html?pagefn=page&page="+i+value+"&max="+max+"&r="+Math.random();
	$("#inquiryPersonListInfo1").load(encodeURI(url),function(){
		//选择每页记录数量
		$("#inquiryPersonListInfo1 .page_max").change(function(){
			page2(1);
		});
	});
}

function export_participateUser(){
	
	var sId = $("#sId").val();
	var query ="&status="+1+"&sId="+sId;
	loadingDataStart();
	var countUrl = basepath + "/surveyallowuser/exportCount.html?r=" + Math.random();
	var listUrl = basepath + "/surveyallowuser/exportList.html?r=" + Math.random();
	postData(encodeURI(countUrl + query), encodeURI(listUrl + query));
}