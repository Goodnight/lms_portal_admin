/**
 * 新建/修改岗位培训需求 - 基准岗位树
 */	
var Doom;
function doublechoice(dom){
	var nn=$(dom).parent().prev().find(".jstree-checked");
	var oText=[];
	var newId=[];
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
				oText.push($(nn).eq(i).text());	
				newId.push(key);
			}
		}
		
		if(oSource!="请选择"){
			for(i=0;i<oText.length;i++){
				$(Doom).parent().prev().append('<label class="unitlabel" id="'+newId[i]+'">'+oText[i]+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
			}
		}
		else{
			$(Doom).parent().prev().html("");
			for(i=0;i<oText.length;i++){
				$(Doom).parent().prev().append('<label class="unitlabel" id="'+newId[i]+'">'+oText[i]+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
			}
		}
}
$(document).ready(function () {	
	$("#objectstring .ml12,.objectstring a").live("click", function(){
		$(this).parent().remove();
	});					
	$("#newpersonbutton").live("click", function(){
		var oTable=$(this).parent().parent().find(".datatable").find("tbody").find("tr");
		if(oTable){
			for(i=0;i<oTable.length;i++){
				var oText=$(oTable).eq(i).children().eq(3).text();
				var id=$(oTable).eq(i).children().eq(0).find("input").attr("id");	
				$("#newpersonco").children().eq(0).append('<label class="speciallabel">'+oText+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a><input type="hidden" id="userIds" name="userIds" value="'+id+'" /><input type="hidden" id="userNames" name="userNames" value="'+oText+'" /></label>');
			}
		}
		$("#dialog").hide();
		$(".blackall").hide();
	});
	/*树形*/
	$(".newshowtree1").click(function(){
		Doom=$(this);							 
		$(".blackall").show();
		/**
		 * 族群和岗位的JSTree
		 */
		$("#eth_jstree").jstree({
			"plugins":["themes","json_data","ui"],
			"json_data":{
				"ajax" : {
					"url" : basepath+"/list/pos4jstree.html",
					"data" : function(n){
						return {
							"operation":"",
							"id":n.attr?n.attr("id"):0
						};
					}
				}
			}
		}).bind("select_node.jstree",function(e,data){
			var id = data.rslt.obj.attr("id");
			var type = data.rslt.obj.attr("type");
			var name = data.rslt.obj.attr("name");
			$("#post_id").val(id);
			$("#post_name").val(name);
			$(Doom).parent().prev().html("");
			if(id!=10){
				$(Doom).parent().prev().append('<label class="unitlabel" id="'+id+'">'+name+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
			}
			
		});
			
		$(".treewindow").show();
		$('.treewindow').animate({
			right: 0
		  },200);


	});
	$(".treewindowsure").click(function(){
		//doublechoice(this);
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
	$(".unitlabel a").live("click", function(){
	 	$(this).parent().remove();
	});			
});
