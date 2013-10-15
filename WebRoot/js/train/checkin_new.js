$(function(){
	page(1);
	
	$(".cls_choosedate").click(function(){
		$(".cls_choosedate").removeClass("timechoosed");
		$(this).addClass("timechoosed");
		$("#query_checkin_date").val($(this).attr("id"));
		page(1);
	});
	
	$("#btn_save").click(function(){
		saveCheckin();
	});
	
	$("#btn_query").click(function(){
		page(1);
	});
});

function export_page(){
	
	var user_name = $("#query_user_name").val();
	var user_sn = $("#query_user_sn").val();
	var query = "&tcid="+tcid;
	if(user_name!=""){
		query += "&user_name="+user_name;
	}
	if(user_sn!=""){
		query += "&user_sn="+user_sn;
	}
	var url = basepath+"/trainclass/exportTrainCheckinResult.html?r="+Math.random();
	$("#query_form").attr("action",encodeURI(url+query));
	$("#query_form").attr("method","post");
	$("#query_form").submit();
}


function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_newcheckin .page_max").val()?$("#list_newcheckin .page_max").val():10;
	var check_date = $("#query_checkin_date").val();
	var user_name = $("#query_user_name").val();
	var user_sn = $("#query_user_sn").val();
	var query = "&tcid="+tcid+"&checkinDate="+check_date;
	if(user_name!=""){
		query += "&user_name="+user_name;
	}
	if(user_sn!=""){
		query += "&user_sn="+user_sn;
	}
	var url = basepath+"/list/trainclass/newcheckin.html?&pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_newcheckin").load(url+encodeURI(query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//选择每页记录数量
		$("#list_newcheckin .page_max").change(function(){
			page(1);
		});
		
		$(".chooseall").click(function(){
			var type = $(this).val();
			if($(this).attr("checked")){
				$(".cls_"+type).attr("checked",false);
				$(".cls_radio_"+type).attr("checked","checked");
			}else{
				$(".cls_"+type).attr("checked",false);
				$(".cls_"+type+"_not").attr("checked","checked");
			}
		});
	});
}



/**
 * 保存考勤信息
 */
function saveCheckin(){
	if($("input[name=id]").length>0){
		var url = basepath + "/trainclass/checkin/save.html";
		var param = $.param($("input[name=id]"))+"&"+$.param($(".cls_one:checked"))+"&"+$.param($(".cls_two:checked"))+"&"+$.param($(".cls_three:checked"));
		param += "&checkinDate="+$("#query_checkin_date").val();
//		alert(param);
		$.ajax({
			url : url,
			type : "post",
			data : param,
			dataType : "json",
			success : function(){
				$.dialog.tips('数据保存成功',2,'tips.gif');
			},
			error : function(){
				$.dialog.tips('数据保存失败',2,'tips.gif');
			}
		});
	}
}
