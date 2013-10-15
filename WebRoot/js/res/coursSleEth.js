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




$(document).ready(function () {	
	$(".chooseEth").click(function(){
		Doom=$(this);							 
		$(".blackall").show();
		$(function () {
			$("#org_jstree1").jstree({
				"plugins":["themes","json_data","ui"],
				"json_data":{
					"ajax" : {
						"url" : basepath+"/list/eth4jstree.html",
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
					
					"kno" : {
						"valid_children" : "none",
						"icon" : {
							"image" : basepath+"/images/file.png"}
					}
				
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
		  },2000);


	});
	$(".treewindowsure").click(function(){
		//doublechoice(this);
		//simplechoice(this);
		var mm=$(this).parent().parent().width();
		if(mm<239){
			$(this).parent().parent().animate({
				right: -239
			  },2000,function(){
				$(".blackall").hide();	  
			});	
		}
		else{
			$(this).parent().parent().animate({
				right: -mm-5
			  },2000,function(){
				$(".blackall").hide();	  
			});		
		}
		
	});
	$(".treewindowback").click(function(){
		var mm=$(this).parent().parent().width();
		if(mm<239){
			$(this).parent().parent().animate({
				right: -239
			  },2000,function(){
				$(".blackall").hide();	  
			});	
		}
		else{
			$(this).parent().parent().animate({
				right: -mm-5
			  },2000,function(){
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
