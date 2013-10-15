
$(function(){
	//跳转首页时，把知识分类树加载
	var idarry =  idpath.split("/");
	
	var idarrys=idarry;
	if(idarry==""||idarry==null){
		idarrys=0;
	}
	$("#kno_jjjstree").jstree({
		"plugins":["themes","json_data","types","ui"],
		"json_data":{
			"ajax" : {
				"url" : basepath+"/knowledge/knowledge4jstree.html",
				"cache":false,
				"data" : function(n){
					return {
						"operation":"",
						"id":n.attr?n.attr("id"):"root_0",
								"name":n.attr?n.attr("name"):0,
										"namePath":n.attr?n.attr("name"):0,
												"idPath":n.attr?n.attr("idPath"):0
					};
				}
			}
		},
		"types" : {
			
				"kno" : {
					"valid_children" : "none",
					"icon" : {
						"image" : basepath+"/images/file.png"}
				}
			
		},
		"ui":{
			"initially_select":idarry
		},
		"core":{
			"initially_open":idarrys
		}
	}).bind("select_node.jstree",function(e,data){
		var id = data.rslt.obj.attr("id");
		var type = data.rslt.obj.attr("type");
		var name = data.rslt.obj.attr("name");
		var namePath = data.rslt.obj.attr("namePath");
		var idPath = data.rslt.obj.attr("idPath");
		orgClick(type,id);
	});
	
});



/**
 * 知识分类树点击事件
 */
function orgClick(type,id){
	var url = "";
	if(type=="kno"){
		url = basepath+"/knowledge/detail.html?kcId="+id+"&r="+Math.random();
	}
	
	//点击移动时
	$("#detail_org").load(encodeURI(url),function(){
		$(".choosedepartment").click(function(){ 
			var x=$(this).offset().left;
			var y=$(this).offset().top;
			$(".moveKnoledge").css("left",x);
			$(".moveKnoledge").css("top",y);
			$(".moveKnoledge").css("position","absolute");
			$(".moveKnoledge").css("z-index","9999");
			$(".moveKnoledge").show();
			
			$("#moveChoosed").jstree({
				/*
				"plugins":["themes","json_data","ui"],
				"json_data":{
					"ajax" : {
						"url" : basepath+"/knowledge/knowledge4jstree.html",
						"data" : function(n){
							return {
								"operation":"",
								"id":n.attr?n.attr("id"):0
							};
						}
					}
				}
				*/
				"plugins":["themes","json_data","types","ui","core"],
				"json_data":{
					"ajax" : {
						"url" : basepath+"/knowledge/knowledge4jstree.html",
						"cache":false,
						"data" : function(n){
							return {
								"operation":"",
								"id":n.attr?n.attr("id"):"root_0",
										"name":n.attr?n.attr("name"):0,
												"namePath":n.attr?n.attr("name"):0,
														"idPath":n.attr?n.attr("idPath"):0
														
							};
						}
					}
				},
				"types" : {
					
						"kno" : {
							"valid_children" : "none",
							"icon" : {
								"image" : basepath+"/images/file.png"}
						}
					
				},
				"core":{
					"initially_open":knoRootId  //默认展开根节点下的子节点.
				}
			}).bind("select_node.jstree",function(e,data){
				var id = data.rslt.obj.attr("id");
				var type = data.rslt.obj.attr("type");
				knowledgeClick(type,id,name);
			});
		 });
		
		$(".moveKnoledge a").click(function(){
			$(".moveKnoledge").hide();							  
		});
		
		//点击弹出选择知识分类的大框
		$(".chooseMove").click(function(){
			$(".blackall").show();
			$("#move").show();
		});
		$("#closeMove").click(function(){
			$(".blackall").hide();
			$("#move").hide();	
			$(".leftKno").hide();
			$(".rightKno").hide();
		});
		
		//点击弹出左边选择知识分类框
		$(".moveTeam").click(function(){
		 	var x=$(this).offset().left;
			var y=$(this).offset().top;
			$(".leftKno").css("left",x);
			$(".leftKno").css("top",y);
			$(".leftKno").css("position","absolute");
			$(".leftKno").css("z-index","9999");
			$(".leftKno").show();
			$(".moveTeamChoosede").jstree({
				/*
				"plugins":["themes","json_data","ui"],
				"json_data":{
					"ajax" : {
						"url" : basepath+"/knowledge/knowledge4jstree.html",
						"data" : function(n){
							return {
								"operation":"",
								"id":n.attr?n.attr("id"):0
							};
						}
					}
				}
				*/
				"plugins":["themes","json_data","types","ui","core"],
				"json_data":{
					"ajax" : {
						"url" : basepath+"/knowledge/knowledge4jstree.html",
						"cache":false,
						"data" : function(n){
							return {
								"operation":"",
								"id":n.attr?n.attr("id"):"root_0",
										"name":n.attr?n.attr("name"):0,
												"namePath":n.attr?n.attr("name"):0,
														"idPath":n.attr?n.attr("idPath"):0
														
							};
						}
					}
				},
				"types" : {
					
						"kno" : {
							"valid_children" : "none",
							"icon" : {
								"image" : basepath+"/images/file.png"}
						}
					
				},
				"core":{
					"initially_open":knoRootId  //默认展开根节点下的子节点.
				}
			}).bind("select_node.jstree",function(e,data){
				var id = data.rslt.obj.attr("id");
				var name = data.rslt.obj.attr("name");
				var type = data.rslt.obj.attr("type");
				add(type,id,name);
			});

			
		 });
		$(".leftKno a").click(function(){
			$(".leftKno").hide();							  
		});
		
		
		//点击弹出右边选择知识分类框
		$(".moveTeamToRightMove").click(function(){
		 	var x=$(this).offset().left;
			var y=$(this).offset().top;
			$(".rightKno").css("left",x);
			$(".rightKno").css("top",y);
			$(".rightKno").css("position","absolute");
			$(".rightKno").css("z-index","9999");
			$(".rightKno").show();
			$(".rightToMoveForKnoledge").jstree({
				/*
				"plugins":["themes","json_data","ui"],
				"json_data":{
					"ajax" : {
						"url" : basepath+"/knowledge/knowledge4jstree.html",
						"data" : function(n){
							return {
								"operation":"",
								"id":n.attr?n.attr("id"):0
							};
						}
					}
				}
				*/
				"plugins":["themes","json_data","types","ui","core"],
				"json_data":{
					"ajax" : {
						"url" : basepath+"/knowledge/knowledge4jstree.html",
						"cache":false,
						"data" : function(n){
							return {
								"operation":"",
								"id":n.attr?n.attr("id"):"root_0",
										"name":n.attr?n.attr("name"):0,
												"namePath":n.attr?n.attr("name"):0,
														"idPath":n.attr?n.attr("idPath"):0
														
							};
						}
					}
				},
				"types" : {
					
						"kno" : {
							"valid_children" : "none",
							"icon" : {
								"image" : basepath+"/images/file.png"}
						}
					
				},
				"core":{
					"initially_open":knoRootId  //默认展开根节点下的子节点.
				}
			}).bind("select_node.jstree",function(e,data){
				var id = data.rslt.obj.attr("id");
				var name = data.rslt.obj.attr("name");
				var type = data.rslt.obj.attr("type");
				addToRight(type,id,name);
				
			});

			
		 });
		$(".rightKno a").click(function(){
			$(".rightKno").hide();							  
		});
		
	});
	
}


/**
 * 选中的知识分类添加到左边列表中
 */
function add(type,id,name){
	var newTr = "<tr><td><input type='a' class='removebutton' id='"+id+"' name='choosedKnowledge' onclick='remove(this)'/></td>"
						+"<input type='hidden' name='kcIdOne' value='"+id+"'/>"
						+"<td>"+name+"</td>"
                        +"</td></tr>";
	$("#choosedKnowledge").append($(newTr));

}


/**
 * 选中的知识分类添加到右边列表中
 */
function addToRight(type,id,name){
	$("#choosedKnowledgeToRight").html("");
	
	var newTr = "<tr><td><input type='button' class='removebutton' id='"+id+"' name='choosedKnowledgeToRight' onclick='remove(this)'/></td>"
						+"<input type='hidden' name='kcIdTwo' value='"+id+"'/>"
						+"<td>"+name+"</td>"
                        +"</td></tr>";
	$("#choosedKnowledgeToRight").append($(newTr));

}

//移除选择好的知识分类
function remove(obj){
	var cbList = $("input:checkbox[name=cId]:checked");
	for(i=0;i<cbList.length;i++){
		var cb = cbList[i];
		if($(cb).val()==$(obj).attr("id")){
			$(cb).attr("checked",false);
			$(cb).attr("disabled",false);
		}
	}
	$(obj).parent().parent().remove();
	$.uniform.update();
}



/**
 * 知识分类移动树
 */
function knowledgeClick(type,id,name){
	var kcId = $("#kcId").val();
	var url = "";
	if(type=="kno"){
		url = basepath+"/knowledge/move.html";
	}
	if(confirm('确定要移动吗 ？')){
	$.ajax({
		url : url,
		type : "post",
		data : "kcId="+kcId+"&upId="+id,
		dataType : "json",
		success : function(re){
			alert("ok");
			window.location.reload();
			orgClick(type,id);
		}
	});
	}
	$(".moveKnoledge").hide();
}



/**
 * 知识分类批量移动
 */
$("#btn_moveTeam").click(function(){
	var left = $.param($("input[name=kcIdOne]"));
	var right = $.param($("input[name=kcIdTwo]"));
	var url = basepath+"/knowledge/moveTeamForKnowledge.html";
	if(confirm('确定要移动吗 ？')){
	$.ajax({
		url : url,
		type : "post",
		data : left+"&"+right,
		dataType : "json",
		success : function(re){
			alert("ok");
			window.location.reload();
		}
	});
	}
	$(".leftKno").hide();
	$(".rightKno").hide();
});


//批量移除
function deleteAbility(id){
var param = id;
if(confirm('确定要删除吗 ？')){
$.ajax({
	url : "delete.html?kcId="+id,
	type : "POST",
	data : param,
	dataType : "json",
	success : function(data){
		if(data == null){
			alert("必须选择一个");
		}
		else if(data.code == 'success'){
		    alert("删除成功!");
			window.location.reload();	
		} else {
			alert("删除失败!");
		}
	}
});
}
}


//跳转修改标签窗口
function toUpdateKnowledge(id){
	var url = basepath+"/knowledge/toUpdate.html?kcId="+id+"&r="+Math.random();
	$("#dialog_content").load(encodeURI(url));
	$("#dialog").show();
}


//关闭修改或新增标签窗口
function closedUpdateWindow(){
	$(".blackall").hide();
	$("#dialog_content").children().remove();
	$("#dialog").hide();
	}

//跳转新增标签窗口
function toAddKnowledge(id){
	var url = basepath+"/knowledge/toAddKnowledge.html?kcId="+id+"&r="+Math.random();
	$("#dialog_content").load(encodeURI(url));
	$("#dialog").show();
}


//弹出选择标签框
function selectTag(id){
	var url = basepath+"/knowledge/toSelectTag.html?kcId="+id;
	$("#selectTag").load(encodeURI(url));
	$(".blackall").hide();
	$("#windowtree2").show();
}

//关闭标签框
function closed(){
	$(".blackall").hide();
	$("#dialog_content").children().remove();
	}



//删除知识分类下的标签
function deleteTag(id,tId){
	if(confirm('确定要删除吗 ？')){
		if (id == null || id == "" || tId == null || tId == "") {
			$.dialog.alert("请选择删除项！");
		} else {
			$.ajax({
				url : basepath + "/knowledge/deleteTag.html",
				type : "POST",
				data : "kcId="+id+"&tagId="+tId,
				dataType : "json",
				success : function(data){
					alert("OK");
					window.location.reload();
				}
			});
		}
	}
}


