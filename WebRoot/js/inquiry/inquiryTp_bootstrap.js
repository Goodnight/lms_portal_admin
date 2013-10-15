
/**
 * 培训需求模板
 */

$(function(){
	//加载列表
	page(1);
	


	//开始日期
	$("#creatDt").datepicker();
	
	$('#filepath').ace_file_input({
		no_file:"",
		btn_choose:'浏览',
		btn_change:'更换',
		droppable:false,
		onchange:null,
		thumbnail:false //| true | large
		//whitelist:'gif|png|jpg|jpeg'
		//blacklist:'exe|php'
		//onchange:''
		//
	});
	
	var oTable1 = $('#sample-table-1').dataTable( {
		"aoColumns": [
	      { "bSortable": false },
	      null, null,null, null, null
		] } );
	
	
	$('[data-rel=tooltip]').tooltip();
	$('[data-rel=popover]').popover({html:true});
	
	//删除需求模板
	$("#btn_delete").click(function(){
		var ids = $("input:checkbox[name=groupTypeId]:checked");
		if(ids == null || ids == "" || ids.length == 0){
			$.dialog.alert("请选择删除项...");
		}
		else{
			if(confirm("确定要删除选项吗？")){
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
		}
	});
	
});

function a(stId){
	var url = basepath+"/inquiry/inquiryTpItemList.html?stId="+stId+"&r="+Math.random();
	$("#list_inquiryTpItemList").load(encodeURI(url),function(){
	});
	$("#dialog .blackall,#dialog,#dialog .newwindow").show();
}
/**
 * 分页
 */
function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var status = document.getElementById("status").value;
	var name = document.getElementById("name").value;
	var creatDt = document.getElementById("creatDt").value;
	var surveyType = document.getElementById("surveyType").value;
	var value ="&status="+status+"&name="+name+"&creatDt="+creatDt+"&surveyType="+surveyType;
	var max = $("#list_inquiryTp .page_max").val()?$("#list_inquiryTp .page_max").val():10;
	var url = basepath+"/inquiry/inquiryTpList.html?pagefn=page&page="+i+"&max="+max+value+"&r="+Math.random();
	$("#list_inquiryTp").load(encodeURI(url),function(){
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
		$("#list_inquiryTp .page_max").change(function(){
			page(1);
		});
	});
}
