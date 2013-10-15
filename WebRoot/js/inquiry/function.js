
/**
* 删除培训需求调查
*/
$("#btn_delete").click(function(){
	if(confirm("确定要删除选项吗？")){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
		$.ajax({
			url : "deleteInquiry.html",
			type : "POST",
			data : param,
			dataType : "json",
			success : function(data){
				if(data==null){
					alert("删除出错");
				}else{
						window.location.reload();					
					 }
				},
				error:function(){
					alert("删除出错");
				}
			});
		}
	});
	
/**
 * 培训需求首页搜索功能
 */
function selectButtonClick(){
	var topic = document.getElementById("topicInput").value;
	var status = document.getElementsById("statusInput");
	var start = document.getElementsById("startTime");
	var end = document.getElementsById("endTime");
	var report = document.getElementById("reportInput").value;
	var contain = document.getElementsByName("2").value;
	var containType = "";
	
	if(topic == "输入调查主题"){
		topic = "";
	}
	
	for(var i = 0; i < contain.length;i++){
		if(contain[i].checked == "是"){
			containType = 1;
		}
		if(contain[i].checked == "否"){
			containType = 0;
		}
	}
	
	var url = "trainNeedInquiry.html?topic=" + topic+"&status=" +status + 
	"&startDate=" +start  + "&endDate=" + end + "&reportStatus=" +report + "&isContain=" +containType; 
	window.location = encodeURI(url);
}


/**
 * 复选全选 
 * @param formvalue
 */
function checkAll(formvalue) {  
    var roomids = document.getElementsByName(formvalue);  
    for (var j = 0; j < roomids.length; j++) {
        if (roomids.item(j).checked == false) { 
            roomids.item(j).checked = true;
        }else{
        	roomids.item(j).checked = false;
        }
    }
    $.uniform.update();
}  

/**
 * Dialog中Inquiry的弹窗相关
 */
$(function(){

	$("#add_dep").click(function(){
		var url = basepath+"/inquiry/selectArrangedDep.html?r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	$("#add_stu").click(function(){
		var url = basepath+"/inquiry/selectStaff.html?r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	$("#add_train").click(function(){
		var url = basepath+"/inquiry/trainClassList.html?r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	$("#slc_temp").click(function(){
		var url = basepath+"/inquiry/selectTemplate.html?r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	$("#temp_pre").click(function(){
		var url = basepath+"/inquiry/templatePreview.html?r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
});
