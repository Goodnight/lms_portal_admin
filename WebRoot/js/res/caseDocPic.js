setPosData(0);
$(function(){
	//加载列表
	page(1);

	
	$("#name").focus(function(){
		var ms=$(this).val();
		if(ms=="输入案例名称"){
			$(this).val("");		
		}						   
	});
	$("#name").blur(function(){
		var ms=$(this).val();
		if(ms==""){
			$(this).val("输入案例名称");		
		}
	});
	
	
	//查询日期
	$("#search_start_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#search_end_date").datepicker("option","minDate",dt);
		}
	});
	
	$("#search_end_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#search_start_date").datepicker("option","maxDate",dt);
		}
	});
	
});

	
	//下拉改变状态
	$(".forsetup").live("click", function(){
		$(this).hide();
		$(this).next().show();
	})
	$(".select_setup img").live("click", function(t,id){
		
		t = $(this).prev().val();
		id = $(this).attr("id");
		var url = basepath +"/case/updateCaseDoc.html";
		var param = "dId="+id+"&status="+t;
		if(confirm('确定要改变发布状态吗 ？')){
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
		if(mm == 0)
		{
			mm = "未发布";
		}
		if(mm == 1)
		{
			mm = "已发布";
		}
		if(mm == 2)
		{
			mm = "已提交";
		}
		if(mm == 3)
		{
			mm = "省不批准";
		}
		$(this).parent().prev().text(mm);
		$(this).parent().hide();
		$(this).parent().prev().show();
		}
		
	})
	
	//添加精华资源
	$("#btn_jh").click(function(){
		var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
		if(confirm('确定要归类为精品资源吗 ？')){
		$.ajax({
			url : "doSaveCaseDocRes.html",
			type : "POST",
			data : param,
			dataType : "json",
			success : function(data){
				alert("OK");
				page(1);					
			}
		}
		);
		}
	});
	
	//添加历史资源
	$("#btn_ls").click(function(){
		var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
		if(confirm('确定要归类为历史资源吗 ？')){
		$.ajax({
			url : "doSaveCaseDocByLs.html",
			type : "POST",
			data : param,
			dataType : "json",
			success : function(data){
				alert("OK");
				page(1);					
			}
		}
		);
		}
	});



function searchBottonClick(i){
	var max = $("#list_trainclass .page_max").val()?$("#list_trainclass .page_max").val():10;
	var query = "";
	var name = $("#name").val();
	if(name == "输入案例名称")
	{
	name = "";
	}
	query += "&name="+name;
	var url = basepath+"/list/toCaseDocPicList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_trainclass").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_trainclass .page_max").change(function(){
			searchBottonClick(1);
		});
	});
}


//批量删除
$("#btn_delete").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if(confirm('确定要删除吗 ？')){
	$.ajax({
		url : "deleteCaseDocPic.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			    alert("OK");
				window.location.reload();					
			}
		}
	);
	}
});


/**
 * 机构树点击事件
 */
var orgId;
var knoId;
function orgClick(type,id,name){
			resetSearch();
		    if(type == "" || type == null)
		    {
			orgId = "";
			knoId = "";
		    }
		    if(type == "org")
		    {
			orgId = id;
			knoId = "";
			
		    }
		    if(type == "kno")
		    {
			orgId = "";
			knoId = id;
		    }
      //点击事件
		    	$.ajax({
		    		url : "toShowAllOrg.html?orgId="+id,
		    		type : "get",
		    		dataType : "json",
		    		success : function(namepath){
		    			setNav(namepath);
		    			selectBottonClick(1);
		    		}
		    	});
}

/**
 * 更新导航
 */
function setNav(name){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+name+"</li>");
}


//高级搜索
function selectBottonClick(i){
	var max = $("#list_trainclass .page_max").val()?$("#list_trainclass .page_max").val():10;
	var query = "";
	if(orgId!=""){
		query += "&orgId=" + orgId;
	}

	if(knoId!=""){
		query += "&knoId=" + knoId;
	}
	
	var positionIds = "";
	if(return_data.length>0 && return_data[0]!=null && return_data[0].length>0){
		positionIds = return_data[0][0]["id"];
	}
	if(positionIds!=""){
		query += "&positionIds=" + positionIds;
	}
	
	var name = $("#name").val();
	if(name == "输入案例名称")
	{
	name = "";
	}
	query += "&name="+name;
	var sn = $("#sn").val();
	query += "&sn="+sn;
	var startTime = $("#search_start_date").val();
	query += "&startTimet="+startTime;
	var endTime = $("#search_end_date").val();
	query += "&endTime="+endTime;
	var tag = $("#tag").val();
	query += "&tag="+tag;
	var status = $("#status").val();
	if(status == "请选择")
		{
		status = "";
		}
	query += "&status="+status;
	
	var isChildOrg = $("input:radio[name=isSub]:checked")[0].value;
	query+="&isChildOrg="+isChildOrg;
	var url = basepath+"/list/toCaseDocPicList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_trainclass").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_trainclass .page_max").change(function(){
			selectBottonClick(1);
		});
	});
}


//搜索精华课程
function seachJHClick(i,obj){
	var jh = $(obj).attr("id");
	var max = $("#list_trainclass .page_max").val()?$("#list_trainclass .page_max").val():10;
	var url = basepath+"/list/toCaseDocPicList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random()+"&elite="+jh;
	$("#list_trainclass").load(encodeURI(url),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_trainclass .page_max").change(function(){
			seachJHClick(1,this);
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
	var max = $("#list_trainclass .page_max").val()?$("#list_trainclass .page_max").val():10;
	var url = basepath+"/list/toCaseDocPicList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_trainclass").load(encodeURI(url),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_trainclass .page_max").change(function(){
			page(1);
		});
	});
	
}

function ll(i){
	var max = $("#list_trainclass .page_max").val()?$("#list_trainclass .page_max").val():10;
	var url = basepath+"/list/toCaseDocPicList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random() + "&order=stat.view";
	
	$("#list_trainclass").load(encodeURI(url),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_trainclass .page_max").change(function(){
			ll(1);
		});
	});
}

function xz(i){
	var max = $("#list_trainclass .page_max").val()?$("#list_trainclass .page_max").val():10;
	var url = basepath+"/list/toCaseDocPicList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random() + "&order=stat.download";
	
	$("#list_trainclass").load(encodeURI(url),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_trainclass .page_max").change(function(){
			xz(1);
		});
	});
}

function fx(i){
	var max = $("#list_trainclass .page_max").val()?$("#list_trainclass .page_max").val():10;
	var url = basepath+"/list/toCaseDocPicList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random() + "&order=stat.share";
	
	$("#list_trainclass").load(encodeURI(url),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_trainclass .page_max").change(function(){
			fx(1);
		});
	});
}

function pl(i){
	var max = $("#list_trainclass .page_max").val()?$("#list_trainclass .page_max").val():10;
	var url = basepath+"/list/toCaseDocPicList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random() + "&order=stat.comment";
	
	$("#list_trainclass").load(encodeURI(url),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_trainclass .page_max").change(function(){
			pl(1);
		});
	});
}

function zg(i){
	var max = $("#list_trainclass .page_max").val()?$("#list_trainclass .page_max").val():10;
	var url = basepath+"/list/toCaseDocPicList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random() + "&order=createDt" + "&sort=desc";
	
	$("#list_trainclass").load(encodeURI(url),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_trainclass .page_max").change(function(){
			zg(1);
		});
	});
}

function zd(i){
	var max = $("#list_trainclass .page_max").val()?$("#list_trainclass .page_max").val():10;
	var url = basepath+"/list/toCaseDocPicList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random() + "&order=createDt" + "&sort=Asc";
	
	$("#list_trainclass").load(encodeURI(url),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		$("#list_trainclass .page_max").change(function(){
			zd(1);
		});
	});
}

//点击标签改变样式
$("#pX a").click(function(){
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
})

$("#gZ a").click(function(){
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
})

$("#nR a").click(function(){
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
})

/**
 * 重置查询条件
 */
function resetSearch(){
	$("#search_dep_id").val("");
	$("#name").val("");
	$("#sn").val("");
	$("#startTime").val("");
	$("#endTime").val("");
	$("#tag").val("");
	$("#suits").val("");
	$("#status").val("");
}
  

