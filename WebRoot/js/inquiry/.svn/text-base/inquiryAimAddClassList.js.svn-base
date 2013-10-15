$(document).ready(function(){
	//加载列表
	page(1);
	//
	$("#addTrainClass").click(function(){
		var sId=$("#sId").val();
		var ids = $("input:checkbox[name=trianClassId]:checked");
		var param = "method=remove&sId="+sId+"&ids=";	
		for(var i=0;i<ids.length;i++){
			param += $(ids[i]).val()+",";
			var oText = $(ids[i]).parent().parent().parent().parent().find("#className").text();
			$("#newpersonco1").children().eq(0).append('<label class="speciallabel">'+oText+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a><input type="hidden" id="classIds" name="classIds" value="'+$(ids[i]).val()+'" /></label>');
		}
		$("#dialog").hide();
	});
	
});

/**
 * 分页
 */
function page(i){
	var status = document.getElementById("statusTrainClass").value;
	var depId = $("#oriDepId").val();
	var name = document.getElementById("name").value;
	var value ="&status="+status+"&name="+name+"&depId="+depId;
	var url = basepath+"/inquiry/inquiryTrainClassList.html?pagefn=page&page="+i+value+"&r="+Math.random();
	$("#listTrainClass").load(encodeURI(url),function(){
		$(".chooseall").click(function(){
			if($(this).attr("checked")){
				$(".chooseitem").attr("checked",true);
			}else{
				$(".chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
	});	
}
