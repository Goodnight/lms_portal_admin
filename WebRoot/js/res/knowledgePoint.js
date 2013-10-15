$(function(){
	page(1);
	
	$("#searchButton").click(function(){
		page(1);
	});
	
	//新增知识点
	$("#newKnowledgePoint").click(function(){
		if (knoId == undefined || knoId == '0' || knoId == '') {
			alert("请选择知识分类!");
			return;
		}
		
		var url = basepath+"/dialog/createKnowledgePoint.html?knoId="+knoId;
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
	//删除知识点
	$("#btn_delete").click(function(){
		var param = $.param($("input:checkbox[name=index]:checked"));
		if(param == null || param == "" || param.length == 0)
		{
			$.dialog.alert("请选择删除项！");
			return;
		}
		if(confirm("确定要删除选项吗？")){
			$.ajax({
				url : basepath+"/knowledgePoint/deleteKnowledgePoint.html",
				type : "POST",
				data : param,
				dataType : "json",
				success : function(data){
					if(data == null){
						alert("删除失败，请先删除子知识点!");
					}else{
						page(1);
					}
				},
				error:function(){
					$.dialog.alert("请选择删除项！");
				}
			});
		} 
	});
});

//分页
function export_knowledgepoint(){
	
	var query = "";
	if(orgId!=""){
		query += "&orgId=" + orgId;
	}
	
	if(knoId !="" || knoId !=null){
		query += "&knoId=" + knoId;
	}
	var isChildOrg = $("input:radio[name=isSub]:checked")[0].value;
	query+="&isChildOrg="+isChildOrg;
	var name = $("#name").val();
	if(name != "")
	{
		query += "&name=" + name;
	}
	loadingDataStart();
	var countUrl = basepath + "/knowledgePoint/exportCount.html?r="+Math.random();
	var listUrl = basepath + "/knowledgePoint/exportList.html?r="+Math.random();
	postData(encodeURI(countUrl+query),encodeURI(listUrl+query));
	
}

//分页
function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	$("#kId").attr("value","");
	var query = "";
	var max = $("#list_knowledgepointlist.page_max").val()?$("#list_knowledgepointlist.page_max").val():10;
	if(orgId!=""){
		query += "&orgId=" + orgId;
	}
	
	if(knoId !="" || knoId !=null){
		query += "&knoId=" + knoId;
	}
	var isChildOrg = $("input:radio[name=isSub]:checked")[0].value;
	query+="&isChildOrg="+isChildOrg;
	var isChildKno = $("input:radio[name=isSubs]:checked")[0].value;
	query += "&isChildKnowledge=" + isChildKno;
	var name = $("#name").val();
	if(name != "")
	{
		query += "&name=" + name;
	}
	var url = basepath+"/list/knowledgePoint/knowledgePointList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_knowledgepointlist").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		bindChooseAll("cls_chooseall");
		//选择每页记录数量
		$("#list_knowledgepointlist.page_max").change(function(){
			page(1);
		}); 
	});
}

//机构数点击事件
var orgId;
var knoId;
function orgClick(type,id,name,namePath){
		    if(type == "" || type == null)
		    {
			orgId = "";
			knoId = "";
		    }
		    if(type == "org")
		    {
			orgId = id;
			knoId = "";	
 			$("#newKnowledgePoint").css("display","none");
	    			setNav(name);
	    		    page(1);
		    }
		    if(type == "kno")
		    {
				    $("#newKnowledgePoint").attr("display","block"); 
					$("#newKnowledgePoint").show(); 
			orgId = "";
			if(name == "所有分类")
			{
				knoId = "";
			}
			else{
			knoId = id;
			}
			setNav(namePath);
		    page(1);
		   
		    }
		    	
}

/**
 * 更新导航
 */
function setNav(namePath){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+namePath+"</li>");
}
