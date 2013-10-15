
$(function(){
	
});

/**
 * 
 */
var orgId;
function orgClick(type,id,name,shortName,namePath){
			orgId = id;
			$("#objId").attr("value",orgId);
		    	$.ajax({
		    		url : "toShowAllOrg.html?orgId="+id,
		    		type : "get",
		    		dataType : "json",
		    		success : function(namepath){
		    			setNav(namepath);
		    			sechBottonClick(1);
		    		}
		    	});
}

/**
 * 
 */
function setNav(namepath){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+namepath+"</li>");
}


//
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


//璺宠浆鏂板缓绉垎椤甸潰
$("#btn_toAdd").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if(param == "")
	{
	alert("没有选中员工！");
	}
	if(param != "")
		{
	$.ajax({
		type : "POST",
		data : param,
		dataType : "json",
		complete : function(data){
			location.href = "toScoreUserAvg.html?groupTypeId="+param;
			}
		}
	);}
});



/**
 * 鍒嗛〉
 */
function page(i){
	sechBottonClick(i);
	/*
	var max = $("#list_scoreUser .page_max").val()?$("#list_scoreUser .page_max").val():10;
	var url = basepath+"/list/toScoreUserList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_scoreUser").load(encodeURI(url),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_scoreUser .page_max").change(function(){
			page(1);
		});
	});
	*/
}


function sechBottonClick(i){
	var max = $("#list_scoreUser .page_max").val()?$("#list_scoreUser .page_max").val():10;
	var query = "";
	var name = $("#name").val();
	if(name != ""){
	query += "&name=" + name;
	}
	if(orgId!=""){
		query += "&orgId=" + orgId;
	}
	var isChildOrg = $("input:radio[name=isChildOrg]:checked")[0].value;
	query+="&isChildOrg="+isChildOrg;
	var url = basepath+"/list/toScoreUserList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_scoreUser").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_scoreUser .page_max").change(function(){
			sechBottonClick(1);
		});
	});
}