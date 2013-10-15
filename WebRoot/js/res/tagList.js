$(function(){
	//加载列表
	page(1);

	$("#btn_add").click(function(){
		var url = basepath+"/tag/toAddTag.html?&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#choosegroup").show();
	});
	
	function closed()
	{
		$("#choosegroup").hide();
		$(".blackall").hide();
		}
	
});

//下拉改变分类
$(".forsetup").live("click", function(){
	$(this).hide();
	$(this).next().show();
})
$(".select_setup img").live("click", function(t,id){
	
	t = $(this).prev().val();
	id = $(this).attr("id");
	var url = basepath+"/tag/updateDoc.html";
	var param = "tagId="+id+"&tagGroupId="+t;
	if(confirm('确定要改变标签分类吗 ？')){
	$.ajax({
		url : url,
		type : "post",
		data : param,
		dataType : "json",
		success : function(msg){
			
		},
		error : function(){}
	});
	var mm=$(this).prev().val();
	if(mm == 1)
	{
		mm = "a";
	}
	if(mm == 2)
	{
		mm = "b";
	}
	$(this).parent().prev().text(mm);
	$(this).parent().hide();
	$(this).parent().prev().show();
	}
	
})

/**
 * 机构树点击事件
 */
var knoId;
function orgClick(type,id,idPath,name,namePath){
	knoId = id;	
	setNav(name);
	selectBottonClick(1);
}

/**
 * 更新导航
 */
function setNav(namePath){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+namePath+"</li>");
}




//高级搜索
function selectBottonClick(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_tagList .page_max").val()?$("#list_tagList .page_max").val():10;
	var query = "";
	
	if(knoId == null)
	{
		knoId = "";
	}
	if(knoId!=""){
		query += "&knoId=" + knoId;
	}
	
	var name = $("#tagname").val();
	if(name != "")
	{
	query += "&name="+name;
	}
	
	var tagGroupId = $("#tagGroupId").val();
	if(tagGroupId == null)
	{
		tagGroupId = "";
	}
	if(tagGroupId != "")
	{
	query += "&tagGroupId="+tagGroupId;
	}
	
//	var trainClassId = $("#trainClassId").val();
//	if(trainClassId == null)
//	{
//		trainClassId = "";
//	}
//	if(trainClassId != "")
//	{
//	query += "&trainClassId="+trainClassId;
//	}
//	var trainPlanId = $("#trainPlanId").val();
//	if(trainPlanId == null)
//	{
//		trainPlanId = "";
//	}
//	if(trainPlanId != "")
//	{
//	query += "&trainPlanId="+trainPlanId;
//	}
	
	var createType = $("input:radio[name=createType]:checked").val();
	if(null==createType){
		createType="";
	}
	query += "&createType="+createType;
	var url = basepath+"/list/toTagList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_tagList").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		$(".cls_checkbox").uniform();
		$("#list_tagList .page_max").change(function(){
			selectBottonClick(1);
		});
	});
}

//全选反选
function checkAll(formvalue) {  
    var roomids = document.getElementsByName(formvalue);  
    for (var j = 0; j < roomids.length; j++) {  
        if (roomids.item(j).checked == false) {  
            roomids.item(j).checked = true;
            
        }  
        else{
        	roomids.item(j).checked = false; 
        }
    } 
    $.uniform.update();
}  

function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_tagList .page_max").val()?$("#list_tagList .page_max").val():10;
	var url = basepath+"/list/toTagList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_tagList").load(encodeURI(url),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		$(".cls_checkbox").uniform();
		$("#list_tagList .page_max").change(function(){
			page(1);
		});
	});
	
}

//批量删除
$("#btn_delete").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if(confirm('确定要删除吗 ？')){
		if(param == null || param == "")
		{
			$.dialog.alert("请选择删除项！");
		}
		else{
	$.ajax({
		url : "deleteTag.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			    alert("OK");
			    selectBottonClick(1);					
			}
		}
	);
		}
	}
});



