var positionIds;
$(function(){
	//加载列表
	selectBottonClick(1); 
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


$("#name").focus(function(){
	var ms=$(this).val();
	if(ms=="输入文档名称"){
		$(this).val("");		
	}						   
});
$("#name").blur(function(){
	var ms=$(this).val();
	if(ms==""){
		$(this).val("输入文档名称");		
	}
});

var index;
//切换图片
$(".changeshow a").click(function(){
	index=$(this).index();
	if(index==1){
		$(".changeshow").addClass("changeshowdown");
	}
	else{
		$(".changeshow").removeClass("changeshowdown");
	}
})



function searchBottonClick(i){
	var max = $("#list_trainclass .page_max").val()?$("#list_trainclass .page_max").val():10;
	var query = "";
	var name = $("#name").val();
	if(name == "输入文档名称")
	{
	name = "";
	}
	query += "&name="+name;
	var url = basepath+"/list/toDocList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
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
	
	if(param == null || param == "")
	{
		$.dialog.alert("请选择删除项！");
		return;
	}
	
	//当前用户可以删除的记录是记录的机构属于用户的机构,其它情况不允许删除.
	var deleteRecord = true;
	$("input:checkbox[name=groupTypeId]:checked").each(function() {
			if ("false" == $("#contain" + $(this).val()).val()) { 
				deleteRecord = false;
			}
	});
	if (!deleteRecord) {
		$.dialog.alert("删除失败，需要删除的记录不在您的所属机构范围内!");
		return;
	}
	
	//已发布资源不允许删除.
	var flag = false;
	$("input:checkbox[name=groupTypeId]:checked").each(function() {
		if ("已发布" == $("#label" + $(this).val()).html()) {
			flag = true;
		}
	});
	if (flag) {
		$.dialog.alert("删除失败，已发布资源不允许删除!");
		return;
	}
	if(confirm('确定要删除吗 ？')){
		if(param == null || param == "")
		{
			$.dialog.alert("请选择删除项！");
		}
		else{
	$.ajax({
		url : "deleteDoc.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			if(data == null){
				alert("必须选择一个");
			}
			else{
			    alert("OK");
			    if(index==1)
				   {
					   toDocPic(1);
				   }
				else
			      {
				     selectBottonClick(1);
			      }	
			}
		}
	});
		}
	}
	
});


//选择岗位搜索
var Doom;
function doublechoice(dom){
	var nn=$(dom).parent().prev().find(".jstree-checked");
	var oText=[];
	var newId=[];
	var newName=[];
	var oldId=[];
	var oSource=$(Doom).parent().prev().html();
		if(oSource!="请选择"){
			var sourcechild=$(Doom).parent().prev().children();
			for(i=0;i<sourcechild.length;i++){
				oldId[i]=$(sourcechild).eq(i).attr("id");	
			}
		}
		
		for(i=0;i<nn.length;i++){
			var ww=8;
			var key=$(nn).eq(i).attr("id");
			for(j=0;j<oldId.length;j++){
				if(key==oldId[j]){
					 ww=0;
				}
			}
			if(ww!=0){
				oText.push($(nn).eq(i).attr("name"));	
				newId.push(key);
                                newName.push($(nn).eq(i).attr("name"));
			}
		}
		
		if(oSource!="请选择"){
			for(i=0;i<oText.length;i++){
				//initCheckTree( id, selectedIds, openIds,dataType)
				newName[i] = newName[i].replace(/\s+/g, "");
				$(Doom).parent().prev().append('<input type="hidden" name="dep_ids" value="'+newId[i]+'"/><label class="speciallabel" id="'+newId[i]+'">'+oText[i]+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
				$(Doom).parent().prev().append('<input type="hidden" name="dep_Names" value="'+newName[i]+'"/>');
			}
		}
		else{
			$(Doom).parent().prev().html("");
			for(i=0;i<oText.length;i++){
				newName[i] = newName[i].replace(/\s+/g, "");
				$(Doom).parent().prev().append('<input type="hidden" name="dep_ids" value="'+newId[i]+'"/><label class="speciallabel" id="'+newId[i]+'">'+oText[i]+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
				$(Doom).parent().prev().append('<input type="hidden" name="dep_Names" value="'+newName[i]+'"/>');
			}
		}
}

//岗位树点击事件
$(document).ready(function () {	
	$(".chooseEth").click(function(){
		Doom=$(this);							 
		$(".blackall").show();
		$(function () {
			$("#org_jstree1").jstree({
				"plugins":["themes","json_data","ui"],
				"json_data":{
					"ajax" : {
						"url" : basepath+"/list/pos4jstree.html",
						"cache":false,
						"data" : function(n){
							return {
								"operation":"",
								"id":n.attr?n.attr("id"):0,
								"name":n.attr?n.attr("name"):0
							};
						}
					}
				},
				"types" : {
					
					"pos" : {
						"valid_children" : "none",
						"icon" : {
							"image" : basepath+"/images/file.png"}
					}
				
			},
			"core":{
				"initially_open":rootPosition
			}
			}).bind("select_node.jstree",function(e,data){
				var id = data.rslt.obj.attr("id");
				var name = data.rslt.obj.attr("name");
				var type = data.rslt.obj.attr("type");
				$("#eth_id").val(id); 
				ethClick(type,id,name);
			});
			
			
		});
		$(".treewindow").show();
		$('.treewindow').animate({
			right: 0
		  },200);


	});
	$(".treewindowsure").click(function(){
		//doublechoice(this);
		//simplechoice(this);
		var mm=$(this).parent().parent().width();
		if(mm<239){
			$(this).parent().parent().animate({
				right: -239
			  },200,function(){
				$(".blackall").hide();	  
			});	
		}
		else{
			$(this).parent().parent().animate({
				right: -mm-5
			  },200,function(){
				$(".blackall").hide();	  
			});		
		}
		
	});
	$(".treewindowback").click(function(){
		var mm=$(this).parent().parent().width();
		if(mm<239){
			$(this).parent().parent().animate({
				right: -239
			  },200,function(){
				$(".blackall").hide();	  
			});	
		}
		else{
			$(this).parent().parent().animate({
				right: -mm-5
			  },200,function(){
				$(".blackall").hide();	  
			});		
		}							
	});		
	$(".speciallabel a").live("click", function(){
	 	$(this).parent().remove();
	});		
	$("#objectstring .ml12,.objectstring a").live("click", function(){
		$(this).parent().remove();
	});					
	$("#newpersonbutton").live("click", function(){
		var oTable=$(this).parent().prev().find(".datatable").find("tbody").find("tr");
		if(oTable){
			for(i=0;i<oTable.length;i++){
				var oText=$(oTable).eq(i).children().eq(3).text();	
				$("#newpersonco").children().eq(0).append('<label class="speciallabel">'+oText+'<a href="javascript:;" class="ml6"><img src="../../images/deletegreen.gif" /></a></label>');
			}
		}
	});
});


//选择单个知识分类显示到文本框
function ethClick(type,id,name){
	$("#ethId").val(id);
	$("#ethName").val(name);
}


//高级搜索
function selectBottonClick(i){
	$("#list_trainclass").removeClass("hidden");
	$("#list_trainclass").attr("display","block"); 
	$("#list_trainclass").css("display","block"); 
	$("#list_docPic").addClass("hidden");
	$("#list_docPic").attr("display","none"); 
	$("#list_docPic").css("display","none"); 
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_trainclass .page_max").val()?$("#list_trainclass .page_max").val():10;
	var query = "";
	if(orgId!="" && orgId != null){
		query += "&orgId=" + orgId;
	}
	
	if(knoId!="" && knoId!= null){
		query += "&knoId=" + knoId;
	}
	var ethName = $("#ethName").val();
	if(ethName == null || ethName == "")
    {
		positionIds = "";
    }
	else if(ethName != null && ethName != "")
	{
	positionIds = $("#eth_id").val();
    }
	if(positionIds!="" && positionIds!= null){
		query += "&positionIds=" + positionIds;
	}
	
	if(jh!="" && jh != null){
		query += "&elite=" + jh;
	}
	
	if(view!="" && view != null){
		query += "&order=" + view;
	}

	if(desc!="" && desc != null){
		query += "&sort=" + desc;
	}
	
	var name = $("#name").val();
	if(name == "输入文档名称")
	{
	name = "";
	}
	query += "&name="+name;
	var sn = $("#sn").val();
	query += "&sn="+sn;
	var startTime = $("#search_start_date").val();
	query += "&startTime="+startTime;
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
	
	var url = basepath+"/list/toDocList.html?pagefn=selectBottonClick&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_trainclass").load(encodeURI(url+query),function(){
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
		$("#list_trainclass .page_max").change(function(){
			selectBottonClick(1);
		});
	});
}


//图文高级搜索
function toDocPic(i){
	$("#list_trainclass").attr("display","none"); 
	$("#list_trainclass").css("display","none"); 
	$("#list_docPic").removeClass("hidden");
	$("#list_docPic").attr("display","block"); 
	$("#list_docPic").css("display","block"); 
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_docPic .page_max").val()?$("#list_docPic .page_max").val():10;
	$("#list_trainclass").toggleClass("hidden");
	$("#list_docPic").removeClass("hidden");
	var query = "";
	if(orgId!="" && orgId!= null){
		query += "&orgId=" + orgId;
	}
	
	if(knoId!="" && knoId!= null){
		query += "&knoId=" + knoId;
	}
	
	var ethName = $("#ethName").val();
	if(ethName == null || ethName == "")
    {
		positionIds = "";
    }
	else if(ethName != null && ethName != "")
	{
	positionIds = $("#eth_id").val();
    }
	if(positionIds!="" && positionIds!= null){
		query += "&positionIds=" + positionIds;
	}
	
	if(jh!="" && jh != null){
		query += "&elite=" + jh;
	}
	
	if(view!="" && view != null){
		query += "&order=" + view;
	}

	if(desc!="" && desc != null){
		query += "&sort=" + desc;
	}
	
	var name = $("#name").val();
	if(name == "输入文档名称")
	{
	name = "";
	}
	query += "&name="+name;
	var sn = $("#sn").val();
	query += "&sn="+sn;
	var startTime = $("#search_start_date").val();
	query += "&startTime="+startTime;
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
	
	var url = basepath+"/list/toDocPicList.html?pagefn=toDocPic&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_docPic").load(encodeURI(url+query),function(){
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
		$("#list_docPic .page_max").change(function(){
			
			toDocPic(1);
		});
	});
}


//点击高级搜索
$("#btn_selDoc").click(function(){

	if(index==1)
	   {
		   toDocPic(1);
	   }
	else
      {
	     selectBottonClick(1);
      }
   
});

//点击高级搜索
$("#btn_selAllDoc").click(function(){
   if(index==1)
   {
	     toDocPic(1);
   }
   else
   {
	   selectBottonClick(1);
   }
});


//搜索精华课程
var jh;
function seachJHClick(i,obj){
	var query = "";
	jh = $(obj).attr("id");
	query += "&elite=" + jh;
	
	if(knoId!="" && knoId!= null){
		query += "&knoId=" + knoId;
	}
	
	if(orgId!="" && orgId!= null){
		query += "&orgId=" + orgId;
	}
	
	var name = $("#name").val();
	if(name == "输入文档名称")
	{
	name = "";
	}
	query += "&name="+name;
	
	if(view!="" && view != null){
		query += "&order=" + view;
	}
	
	if(desc!="" && desc != null){
		query += "&sort=" + desc;
	}
	
	if(index==1)
	   {
		$("#list_trainclass").attr("display","none"); 
		$("#list_trainclass").css("display","none"); 
		$.dialog.tips('数据加载中...',600,'loading.gif');
		var max = $("#list_docPic .page_max").val()?$("#list_docPic .page_max").val():10;
		var url = basepath+"/list/toDocPicList.html?pagefn=toDocPic&page="+i+"&max="+max+"&r="+Math.random();
		$("#list_docPic").load(encodeURI(url+query),function(){
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
			$("#list_docPic .page_max").change(function(){
				seachJHClick(1,this);
			});
		});
	   }
	else
	   {
		$("#list_docPic").toggleClass("hidden");
		$("#list_docPic").attr("display","none"); 
		$("#list_docPic").css("display","none"); 
		$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_trainclass .page_max").val()?$("#list_trainclass .page_max").val():10;
	var url = basepath+"/list/toDocList.html?pagefn=selectBottonClick&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_trainclass").load(encodeURI(url+query),function(){
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
		$("#list_trainclass .page_max").change(function(){
			seachJHClick(1,this);
		});
	});
	   }
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


//点击新建按钮跳转页面
$("#btn_add").click(function(){
	var param = knoId;
	if(param == "0" || param == "" || param == null){
		alert("请选择一个知识分类！");
	}
	else{
		$.ajax({
			type : "POST",
			data : param,
			dataType : "json",
			complete : function(data){
				var nw = window.open("about:blank","");
				nw.location = basepath+"/doc/tosaveDocDetails.html?knoId="+knoId;
			}
		});
    }
});

//排序
var view;
function ll(i,obj){
	var query = "";
	view = $(obj).attr("id");
	query += "&order=" + view;
	
	if(knoId!="" && knoId!= null){
		query += "&knoId=" + knoId;
	}
	
	if(orgId!="" && orgId!= null){
		query += "&orgId=" + orgId;
	}
	
	var name = $("#name").val();
	if(name == "输入文档名称")
	{
	name = "";
	}
	query += "&name="+name;
	
	if(jh!="" && jh != null){
		query += "&elite=" + jh;
	}
	
	if(desc!="" && desc != null){
		query += "&sort=" + desc;
	}
	
	if(index==1)
	   {
		$("#list_trainclass").attr("display","none"); 
		$("#list_trainclass").css("display","none");
		$.dialog.tips('数据加载中...',600,'loading.gif');
		var max = $("#list_docPic .page_max").val()?$("#list_docPic .page_max").val():10;
		var url = basepath+"/list/toDocPicList.html?pagefn=toDocPic&page="+i+"&max="+max+"&r="+Math.random();
		$("#list_docPic").load(encodeURI(url+query),function(){
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
			$("#list_docPic .page_max").change(function(){
				ll(1,this);
			});
		});
	   }
	else
	{
	$("#list_docPic").toggleClass("hidden");
	$("#list_docPic").attr("display","none"); 
	$("#list_docPic").css("display","none"); 
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_trainclass .page_max").val()?$("#list_trainclass .page_max").val():10;
	var url = basepath+"/list/toDocList.html?pagefn=selectBottonClick&page="+i+"&max="+max+"&r="+Math.random();
	
	$("#list_trainclass").load(encodeURI(url+query),function(){
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
		$("#list_trainclass .page_max").change(function(){
			ll(1,this);
		});
	});
	}
}

var desc;
function zd(i,obj){
	var query = "";
	desc = $(obj).attr("id");
	query += "&sort=" + desc;
	
	if(knoId!="" && knoId!= null){
		query += "&knoId=" + knoId;
	}
	
	if(orgId!="" && orgId!= null){
		query += "&orgId=" + orgId;
	}
	
	var name = $("#name").val();
	if(name == "输入文档名称")
	{
	name = "";
	}
	query += "&name="+name;
	
	if(jh!="" && jh != null){
		query += "&elite=" + jh;
	}
	
	if(view!="" && view != null){
		query += "&order=" + view;
	}
	
	if(index==1)
	   {
		$("#list_trainclass").attr("display","none"); 
		$("#list_trainclass").css("display","none");
		$.dialog.tips('数据加载中...',600,'loading.gif');
		var max = $("#list_docPic .page_max").val()?$("#list_docPic .page_max").val():10;
		var url = basepath+"/list/toDocPicList.html?pagefn=toDocPic&page="+i+"&max="+max+"&r="+Math.random();
		$("#list_docPic").load(encodeURI(url+query),function(){
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
			$("#list_docPic .page_max").change(function(){
				zd(1,this);
			});
		});
	   }
	else
	{
	$("#list_docPic").toggleClass("hidden");
	$("#list_docPic").attr("display","none"); 
	$("#list_docPic").css("display","none"); 
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_trainclass .page_max").val()?$("#list_trainclass .page_max").val():10;
	var url = basepath+"/list/toDocList.html?pagefn=selectBottonClick&page="+i+"&max="+max+"&r="+Math.random();
	
	$("#list_trainclass").load(encodeURI(url+query),function(){
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
		$("#list_trainclass .page_max").change(function(){
			zd(1,this);
		});
	});
	}
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

//添加精华资源
$("#btn_jh").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if(param == null || param == "")
	{
		$.dialog.alert("请选择要归类为精品资源！");
		return;
	}
	
	//精华的不允许再次设置为精华.
	var flag = false;
	$("input:checkbox[name=groupTypeId]:checked").each(function() {
		if ("1" == $("#elite" + $(this).val()).val()) {//1:精华,0:非精华,  已存在的精华记录.
			flag = true;
		}
	});
	if (flag) {
		$.dialog.alert("设置精华失败，选中记录中存在已经是精华的记录!");
		return;
	}
	
	if(confirm('确定要归类为精品资源吗 ？')){
	$.ajax({
		url : "doSaveDocRes.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			if(data == null){
				alert("添加失败");
			}else{
			alert("OK");
			if(index==1)
			   {
				$("#list_trainclass").attr("display","none"); 
				$("#list_trainclass").css("display","none");
				toDocPic(1);
			   }
			else
			{
			$("#list_docPic").toggleClass("hidden");
			$("#list_docPic").attr("display","none"); 
			$("#list_docPic").css("display","none"); 
			selectBottonClick(1);
			}
			
			}
		},
		error:function(){
			alert("非公开文档不能归类为精品资源");
		}
	});
}
});



//添加历史资源
$("#btn_ls").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if(confirm('确定要归类为历史资源吗 ？')){
	$.ajax({
		url : "doSaveDocByLs.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			if(data == null){
				alert("添加失败");
			}else{
			alert("OK");
			if(index==1)
			   {
				$("#list_trainclass").attr("display","none"); 
				$("#list_trainclass").css("display","none");
				toDocPic(1);
			   }
			else
			{
			$("#list_docPic").toggleClass("hidden");
			$("#list_docPic").attr("display","none"); 
			$("#list_docPic").css("display","none"); 
			selectBottonClick(1);	
			}
			
			
			}
		},
		error:function(){
			alert("不能归类为历史资源");
		}
	});
}
});


//下拉改变状态
$(".forsetup").live("click", function(){
	$(this).hide();
	$(this).next().show();
})

//LMSWD-1272 状态切换时，不要“打钩”，直接选择后，就弹出提示“是否改变状态”  --begin.
$(".selectStatus").live("change", function(t,id){
	t = $(this).next().prev().val();
	id = $(this).next().attr("id");
	var url = basepath +"/doc/updateDoc.html";
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
	var mm=$(this).next().prev().val();
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

$(".select_setup img").live("click", function(t,id){
	
	t = $(this).prev().val();
	id = $(this).attr("id");
	var url = basepath +"/doc/updateDoc.html";
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
//LMSWD-1272 状态切换时，不要“打钩”，直接选择后，就弹出提示“是否改变状态” --end.

/**
 * 机构树点击事件
 */
var orgId;
var knoId;
var orgIdpath;
function orgClick(type,id,idPath,name,namePath){
	        var userOrgId = $("#orgId").val();
	        var userId = $("#userId").val();
	        var orgIdpath = idPath;
			resetSearch();
		    if(type == "" || type == null)
		    {
			orgId = "";
			knoId = "";
		    }
		    if(type == "org")
		    {
			orgId = id;
			if(knoId != null && knoId != "" && knoId != "undefined")
			{
			knoId = knoId;
			}
	    			setNav(name);
	    			if(index==1)
					   {
						   toDocPic(1);
					   }
					else
				      {
					     selectBottonClick(1);
				      }
		    }
		    
		    if(userId != "1")
		    {
		    if(orgIdpath.indexOf(userOrgId) < 0 )
	    	{
	    	  $("#btn_dc").attr("display","none"); 
	    	  $("#btn_dc").css("display","none"); 
	    	  $("#btn_delete").attr("display","none"); 
	    	  $("#btn_delete").css("display","none"); 
	    	}
		    else if(orgIdpath.indexOf(userOrgId) >= 0 )
	    	{
	    	  $("#btn_dc").attr("display",""); 
	    	  $("#btn_dc").css("display",""); 
	    	  $("#btn_delete").attr("display",""); 
	    	  $("#btn_delete").css("display",""); 
	    	}
		    }
}



//知识分类树点击事件
function knoClick(type,id,idPath,name,namePath){
	var userOrgId = $("#orgId").val();
    var userId = $("#userId").val();
	resetSearch();
    if(type == "" || type == null)
    {
	orgId = "";
	knoId = "";
    }
    if(type == "kno")
    {
    	if(orgId != null && orgId != "")
		{
    		orgId = orgId;
		}
	knoId = id;
	setNav(name);
	if(index==1)
	   {
		   toDocPic(1);
	   }
	else
   {
	     selectBottonClick(1);
   }
    }
    if(userId != "1")
    {
    if(orgIdpath.indexOf(userOrgId) < 0 )
	{
	  $("#btn_dc").attr("display","none"); 
	  $("#btn_dc").css("display","none"); 
	  $("#btn_delete").attr("display","none"); 
	  $("#btn_delete").css("display","none"); 
	}
    else if(orgIdpath.indexOf(userOrgId) >= 0 )
	{
	  $("#btn_dc").attr("display",""); 
	  $("#btn_dc").css("display",""); 
	  $("#btn_delete").attr("display",""); 
	  $("#btn_delete").css("display",""); 
	}
    }
}


/**
 * 更新导航
 */
function setNav(name){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+name+"</li>");
}



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
