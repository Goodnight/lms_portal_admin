
/**
* ɾ����ѵ�������
*/
$("#btn_delete").click(function(){
	if(confirm("ȷ��Ҫɾ��ѡ����")){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
		$.ajax({
			url : "deleteInquiry.html",
			type : "POST",
			data : param,
			dataType : "json",
			success : function(data){
				if(data==null){
					alert("ɾ������");
				}else{
						window.location.reload();					
					 }
				},
				error:function(){
					alert("ɾ������");
				}
			});
		}
	});
	
/**
 * ��ѵ������ҳ��������
 */
function selectButtonClick(){
	var topic = document.getElementById("topicInput").value;
	var status = document.getElementsById("statusInput");
	var start = document.getElementsById("startTime");
	var end = document.getElementsById("endTime");
	var report = document.getElementById("reportInput").value;
	var contain = document.getElementsByName("2").value;
	var containType = "";
	
	if(topic == "�����������"){
		topic = "";
	}
	
	for(var i = 0; i < contain.length;i++){
		if(contain[i].checked == "��"){
			containType = 1;
		}
		if(contain[i].checked == "��"){
			containType = 0;
		}
	}
	
	var url = "trainNeedInquiry.html?topic=" + topic+"&status=" +status + 
	"&startDate=" +start  + "&endDate=" + end + "&reportStatus=" +report + "&isContain=" +containType; 
	window.location = encodeURI(url);
}


/**
 * ��ѡȫѡ 
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
 * Dialog��Inquiry�ĵ������
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
