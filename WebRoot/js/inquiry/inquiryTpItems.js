
$(function(){

	page(1);

	$("#btn_delete").click(function(){
		if(confirm("ȷ��Ҫɾ��ѡ����")){
			var ids = $("input:checkbox[name=groupTypeId]:checked");
			var param = "method=remove&itIds=";
			for(var i=0;i<ids.length;i++){
				param += $(ids[i]).val()+",";
			}
			$.ajax({
				url : "deleteInquiryTp.html",
				type : "POST",
				data : param,
				dataType : "json",
				success : function(data){
						page(1);		
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
					alert("error");
				}
			});
		}
	});	
});

/**
 * ��ҳ
 */
function page(i){
	var stId = document.getElementById("stId").value;
	var max = $("#list_item .page_max").val()?$("#list_item .page_max").val():10;
	var value ="&stId="+stId;
	var url = basepath+"/inquiry/inquiryTpAllItem.html?pagefn=page&page="+i+value+"&max="+max+"&r="+Math.random();
	$("#list_item").load(encodeURI(url),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		//ѡ��ÿҳ��¼����
		$("#list_item .page_max").change(function(){
			page(1);
		});
	});	
}
