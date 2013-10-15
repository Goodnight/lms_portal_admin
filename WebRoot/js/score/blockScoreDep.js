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
				$(Doom).parent().prev().append('<label class="speciallabel" id="'+newId[i]+'">'+oText[i]+'<input type="hidden" name="dep_ids" value="'+newId[i]+'"/><input type="hidden" name="dep_Names" value="'+newName[i]+'"/><a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
			}
		}
		else{
			$(Doom).parent().prev().html("");
			for(i=0;i<oText.length;i++){
				newName[i] = newName[i].replace(/\s+/g, "");
				$(Doom).parent().prev().append('<label class="speciallabel" id="'+newId[i]+'">'+oText[i]+'<input type="hidden" name="dep_ids" value="'+newId[i]+'"/><input type="hidden" name="dep_Names" value="'+newName[i]+'"/><a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
			}
		}
}

$(document).ready(function () {	
	//部门基础积分选择部门弹框
	$(".chooseDep").click(function(){
		Doom=$(this);							 
		$(".blackall").show();
		$(function () {
			var url = basepath+"/list/org4jstree.html";
			$("#org_jstree1").jstree({
				"plugins":["themes","json_data","ui","types","checkbox","cookies"],
				"json_data":{
					"ajax" : {
						"url" : url,
						"cache":false,
						"data" : function(n){
							return {
								"operation":"",
								"id":n.attr?n.attr("id"):0   //缺省:根节点id
							};
						}
					}
				},
				"types" : {
					"types" : {
						"pos" : {
							"valid_children" : "none",
							"icon" : {
								"image" : basepath+"/images/file.png"}
						},
						"dep" : {
							"valid_children" : "none",
							"icon" : {
								"image" : basepath+"/images/file.png"}
						}
					}
				},
				"core":{
					"initially_open" : userdepid
				},
				"checkbox":{
					"two_state" : true,
					override_ui : true
				}
			});
			
			
		});
		$(".treewindow").show();
		$('.treewindow').animate({
			right: 0
		  },200);


	});
	$(".treewindowsure").click(function(){
		doublechoice(this);
		$("#principal_error").html('');
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
	
	//选择单个机构显示到文本框
	function depClick(type,id,name){
		$("#depId").val(id);
		$("#depName").val(name);
	}
	
	
	//选择单个显示到文本框
	function depForGainClick(type,id,name){
		$("#dep_idGain").val(id);
		$("#depNameGain").val(name);
	}
	
	
	//部门奖励积分选择部门弹框
	$(".chooseDepForGain").click(function(){
		Doom=$(this);							 
		$(".blackall").show();
		$(function () {
			var url = basepath+"/list/org4jstree.html";
			$("#org_jstree1").jstree({
				"plugins":["themes","json_data","ui","types","checkbox","cookies"],
				"json_data":{
					"ajax" : {
						"url" : url,
						"cache":false,
						"data" : function(n){
							return {
								"operation":"",
								"id":n.attr?n.attr("id"):0   //缺省:根节点id
							};
						}
					}
				},
				"types" : {
					"types" : {
						"pos" : {
							"valid_children" : "none",
							"icon" : {
								"image" : basepath+"/images/file.png"}
						},
						"dep" : {
							"valid_children" : "none",
							"icon" : {
								"image" : basepath+"/images/file.png"}
						}
					}
				},
				"core":{
					"initially_open" : userdepid
				},
				"checkbox":{
					"two_state" : true,
					override_ui : true
				}
			});
			
			
		});
		$(".treewindow").show();
		$('.treewindow').animate({
			right: 0
		  },200);


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

