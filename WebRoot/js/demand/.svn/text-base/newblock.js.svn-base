var Doom;
var aDoom;
function doublechoice(dom){
	var nn=$(dom).parent().prev().find("input:checked");
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
			var key=$(nn).eq(i).parent().attr("id");
			for(j=0;j<oldId.length;j++){
				if(key==oldId[j]){
					 ww=0;
				}
			}
			if(ww!=0){
				oText.push($(nn).eq(i).next().text());	
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
function simplechoice(dom){
	var nn=$(dom).parent().prev().find("input:checked");
	var newId=$(nn).parent().attr("id");
	var oText=$(nn).next().text();
	var oSource=$(Doom).parent().prev().html();
	//$(Doom).parent().prev().html("");
	//$(Doom).parent().prev().append('<label class="unitlabel" id="'+newId+'">'+oText+'<a href="javascript:;" class="ml6"><img src="../../images/deletegreen.gif" /></a></label>')
}
function orgClick(type,id,name,namePath){
	$("#dep_id").val(id); 
	$(Doom).parent().prev().html("");
	$(Doom).parent().prev().append('<label class="unitlabel" id="'+id+'">'+name+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
	
}
$(document).ready(function () {	
	$(".newshowtree").click(function(){
		Doom=$(this);							 
		$(".blackall").show();
		$(function () {
			$("#org_jstree1").jstree({
				"plugins":["themes","json_data","ui"],
				"json_data":{
					"ajax" : {
						"url" : basepath+"/list/org4jstree.html",
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
				var name = data.rslt.obj.attr("name");
				var type = data.rslt.obj.attr("type");
				var namePath = data.rslt.obj.attr("namePath");
				$("#dep_id").val(id);
				$(Doom).parent().prev().html("");
				$(Doom).parent().prev().append('<label class="unitlabel" id="'+id+'">'+name+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a><input type="hidden" id="dep_id" name="dep_id" value="'+id+'" /></label>');
			});
			
			
		});
		$(".treewindow").show();
		$('.treewindow').animate({
			right: 0
		  },200);


	});
	$(".adminshowtree").live("click",function(){
		aDoom=$(this);
		var index=$(aDoom).parents("td").index();
		var olabel=$(aDoom).parents("td").find("label");
		var sdata=[];
		for(i=0;i<olabel.length;i++){
			var key=$(olabel).eq(i).attr("cid");
			sdata.push(key);	
		}
		
		if(index==6){
			$(".treewindow").find("h2").text("管理范围"); //部门树
			$(function () {
				$("#org_jstree1").jstree({
					"plugins":["themes","json_data","ui"],
					"json_data":{
						"ajax" : {
							"url" : basepath+"/list/org4jstree.html",
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
					var name = data.rslt.obj.attr("name");
					var type = data.rslt.obj.attr("type");
					$("#dep_id").val(id); 
					$(Doom).parent().prev().html("");
					$(Doom).parent().prev().append('<label class="unitlabel" id="'+id+'">'+name+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
				});				
			});
		}
		else{
			$(".treewindow").find("h2").text("权限模块");	//菜单树
			$(function () {
				$("#org_jstree1").jstree({
					"plugins":["themes","json_data","ui"],
					"json_data":{
						"ajax" : {
							"url" : basepath+"/list/menu4jstree.html",
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
					var name = data.rslt.obj.attr("name");
					var type = data.rslt.obj.attr("type"); 
					$(Doom).parent().prev().html("");
					$(Doom).parent().prev().append('<label class="unitlabel" id="'+id+'">'+name+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
				});				
			});
		}
		$(".blackall").show();
		$(".treewindow").show();
		$('.treewindow').animate({
			right: 0
		  },200);
	});
	$(".treewindowsure").click(function(){
		//doublechoice(this);
		//simplechoice(this);
//		var oInput=$(Doom).prev();
//		if($(oInput)[0].tagName=="INPUT"){
//			checkLength($(oInput)[0]);
//		}
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
	$(".adminok").click(function(){
		var string="";
		for(i=0;i<exdata.length;i++){
			string+='<label cid='+exdata[i].cid+'>'+exdata[i].name+'</label><br/>';
		}
		$(aDoom).parent().prev().html();
		$(aDoom).parent().prev().html(string);
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
	$("#objectstring .ml12,.objectstring a").live("click", function(){
		$(this).parent().remove();
	});					
	$("#newpersonbutton").live("click", function(){
		var oTable=$(this).parent().prev().find(".datatable").find("tbody").find("tr");
		if(oTable){
			for(i=0;i<oTable.length;i++){
				var oText=$(oTable).eq(i).children().eq(3).text();	
				$("#newpersonco").children().eq(0).append('<label class="speciallabel">'+oText+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
			}
		}
	});
});
