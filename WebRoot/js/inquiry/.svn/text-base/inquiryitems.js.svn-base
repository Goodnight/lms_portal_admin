
$(function(){
	//加载列表
	page(1);	
});

/**
 * 分页
 */
function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_item .page_max").val()?$("#list_item .page_max").val():10;
	var sId = document.getElementById("sId").value;
	var value ="&sId="+sId;
	var url = basepath+"/inquiry/inquiryAllItem.html?pagefn=page&page="+i+value+"&max="+max+"&r="+Math.random();
	$("#list_item").load(encodeURI(url),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_item .page_max").change(function(){
			page(1);
		});
	});	
}
