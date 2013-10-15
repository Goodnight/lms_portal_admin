/**
 * 
 */
$(function(){
	//加载列表
	onlinePage(1);
	livePage(1);
	facePage(1);
	docPage(1);
	
	$("#add_online").click(function(){
		var url = basepath+"/dialog/onlineCourse.html?tcid="+tcid+"&cwtype=0&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	$("#add_live").click(function(){
		var url = basepath+"/dialog/onlineCourse.html?tcid="+tcid+"&cwtype=1&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	$("#add_doc").click(function(){
		var url = basepath+"/dialog/doc.html?tcid="+tcid+"&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	$("#new_doc").click(function(){
		var x=$(this).offset().left;
		var y=$(this).offset().top;
		$(".previewco").css("left",x+25);
		$(".previewco").css("top",y);
		$(".previewco").show();
	});
	
	/**
	 * 打开导入对话框
	 */
	$("#import_doc,#import_face").click(function(){
		var url = basepath+"/common/upload.html";
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
	
	//批量删除培训班下的在线课程
	$("#btn_delete_online,#btn_delete_live").click(function(){
			var list = $(this).attr("list");
			var ids = $("#"+list+" input:checkbox[name=onlineRes]:checked");
			var param = "method=remove&trids=";
			if(ids.length>0){
				$.dialog.confirm("是否删除选项？",function(){
					for(n=0;n<ids.length;n++){
						param += $(ids[n]).val()+",";
					}
					$.ajax({
						url : "setCourse.html",
						type : "POST",
						data : param,
						dataType : "json",
						success : function(data){
							if(data==null){
								$.dialog.tips("删除出错",2,"tips.gif");
							}else{
								$.dialog.tips("删除成功",2,"tips.gif");
								if(list == "list_onlinecourse"){
									onlinePage(1);
								}else{
									livePage(1);
								}
							}
						},
						error : function(){
							$.dialog.tips("删除出错",2,"tips.gif");
						}
					});					
				},function(){});
			}else{
				$.dialog.alert("请选择删除项！");
			}
	});
	
	$("#btn_delete_face").click(function(){
		var ids = $("input:checkbox[name=face]:checked");
		var param = "method=remove&trids=";
		if(ids.length>0){
			$.dialog.confirm("是否删除选项？",function(){
				for(n=0;n<ids.length;n++){
					param +=$( ids[n]).val()+",";
				}
				$.ajax({
					url : "setCourse.html",
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
						if(data==null){
							$.dialog.tips("删除出错",2,"tips.gif");
						}else{
							$.dialog.tips("删除成功",2,"tips.gif");
							facePage(1);
						}
					},
					error : function(){
						$.dialog.tips("删除出错",2,"tips.gif");
					}
				});
			},function(){});
		}else{
			$.dialog.alert("请选择删除项！");
		}
	});
	
	//批量删除培训班下的文档
	$("#btn_delete_doc").click(function(){
			var ids = $("input:checkbox[name=docRes]:checked");
			var param = "method=remove&trids=";
			if(ids.length>0){
				$.dialog.confirm("是否删除选项？",function(){
					for(n=0;n<ids.length;n++){
						param +=$( ids[n]).val()+",";
					}
					$.ajax({
						url : "setCourse.html",
						type : "POST",
						data : param,
						dataType : "json",
						success : function(data){
							if(data==null){
								$.dialog.tips("删除出错",2,"tips.gif");
							}else{
								$.dialog.tips("删除成功",2,"tips.gif");
								docPage(1);
							}
						},
						error : function(){
							$.dialog.tips("删除出错",2,"tips.gif");
						}
					});
				},function(){});
			}else{
				$.dialog.alert("请选择删除项！");
			}
	});
	
	$("#btn_prev").click(function(){
		window.location.href="information.html?tcid="+tcid;
	});
	
	$("#btn_next").click(function(){
		window.location.href="staffing.html?tcid="+tcid;
	});
	
	$("#btn_back").click(function(){
		window.location.href="index.html";
	});
	
});

/**
 * 培训班中的在线课程列表分页函数
 * 如果只是加载列表用$().load(url,fn)方法;
 * url是请求地址，fn是回调函数
 *	pagefn是分页回调函数名称，page是需要跳转到的页码, r是随机数防止页面缓存
 */
function onlinePage(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_onlinecourse .page_max").val()?$("#list_onlinecourse .page_max").val():10;
	var url = basepath+"/list/trainresource/onlinecourse.html?tcid="+tcid+"&cwtype=0&pagefn=onlinePage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_onlinecourse").load(encodeURI(url),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		bindChooseAll("cls_chooseall");
		$("#list_onlinecourse .page_max").change(function(){
			onlinePage(1);
		});
	});
}

function livePage(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_live .page_max").val()?$("#list_live .page_max").val():10;
	var url = basepath+"/list/trainresource/onlinecourse.html?tcid="+tcid+"&cwtype=1&pagefn=onlinePage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_live").load(encodeURI(url),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		bindChooseAll("cls_chooseall");
		$("#list_live .page_max").change(function(){
			livePage(1);
		});
	});
}

function facePage(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_face .page_max").val()?$("#list_face .page_max").val():10;
	var url = basepath+"/list/trainresource/face.html?tcid="+tcid+"&pagefn=facePage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_face").load(encodeURI(url),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		bindChooseAll("cls_chooseall_face");
		$("#list_face .page_max").change(function(){
			facePage(1);
		});
	});
	
}

/**
 * 培训班中的文档列表分页函数
 */
function docPage(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_doc .page_max").val()?$("#list_doc .page_max").val():10;
	var url = basepath+"/list/trainresource/doc.html?tcid="+tcid+"&pagefn=docPage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_doc").load(encodeURI(url),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		bindChooseAll("cls_chooseall_doc");
		$("#list_doc .page_max").change(function(){
			docPage(1);
		});
	});
}

//播放课程点击事件
function clickshpw(obj){
   outCode = $(obj).attr("class"); 
   $.ajax({
 		url : basepath+"/courseware/toLookCourse.html?outCote="+outCode,
 		type : "POST",
 		data : outCode,
 		dataType : "json",
 		success : function(status){
 			if (status == "2" || status == "3") {
 				alert("资源正在解压缩，请稍后预览!");
 			}
 			if(status != "2" && status != "3" && status != "4" && status != "" && status != null)
 			{
 			alert("播放不成功");
 			}
 			if(status == "4" || status == "" || status == null)
 			{
 			id = $(obj).attr("id");
 			window.open(id,"ctu_player","channelmode=yes,fullscreen=yes,location=no,menubar=no,toolbar=no,titlebar=no");
 			}
 		}
 	});
}

function init(){
	onlinePage(1);
	livePage(1);
	facePage(1);
	docPage(1);
}

