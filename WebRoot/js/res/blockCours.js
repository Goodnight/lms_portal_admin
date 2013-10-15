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
				$(Doom).parent().prev().append('<input type="hidden" name="dep_ids" value="'+newId[i]+'"/><label class="speciallabel" id="'+newId[i]+'">'+oText[i]+'<a href="javascript:;" onclick="removePosition(this);" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
				$(Doom).parent().prev().append('<input type="hidden" name="dep_Names" value="'+newName[i]+'"/>');
			}
		}
		else{
			$(Doom).parent().prev().html("");
			for(i=0;i<oText.length;i++){
				newName[i] = newName[i].replace(/\s+/g, "");
				$(Doom).parent().prev().append('<input type="hidden" name="dep_ids" value="'+newId[i]+'"/><label class="speciallabel" id="'+newId[i]+'">'+oText[i]+'<a href="javascript:;" onclick="removePosition(this);" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
				$(Doom).parent().prev().append('<input type="hidden" name="dep_Names" value="'+newName[i]+'"/>');
			}
		}
}




$(document).ready(function () {	
	//新增表单提交验证.

	$("#form_saveCourseware").submit(function() {
		var validate=$("#form_saveCourseware").valid();

		//检查课程名称是否重复.    --此处的验证,写在jquery.validate中,导致表单的提交按钮需要点击两次，才能完成表单提交，第一次的提交触发只是触发"名称的重复检查" TODO.
		if ($("#name").val() != null && $("#name").val() != "") {
			var repeatFlag = false;
			$.ajax({url:basepath+"/courseware/checkNameRepeat.html",type:"POST",async:false, data:{name:$("#name").val(),r:Math.random()}, success: function(result){
				 repeatFlag = result;
			 }});
			 if (repeatFlag) {
				 alert("已存在的课程名称!");
				 return false;
			 }
		}
		
		
		//所属分类非空.
		if ($("#knoName").val() == null || $("#knoName").val() == "") {
			alert("请选择所属分类!");
			return false;
		}
		
		//适用岗位非空.
		var dep_idsArray = $("input[name='dep_ids']"); //新增，修改页面的新增岗位.
		var positionArray = $("input[name='positionIds']");//修改页面的已有岗位.
		if ((dep_idsArray == null || dep_idsArray.length == 0) && (positionArray == null || positionArray.length == 0)) {
			alert("请选择适用岗位!");
			return false;
		} 
		 
		if (uploading || uploading1 || uploading2 || uploading3) {
			alert("资源未上传完成，请稍后保存!");
			return false;
		}
		return validate;
		 $("#form_saveCourseware").ajaxSubmit(function(message){
		        // 对于表单提交成功后处理，message为提交页面saveReport.htm的返回内容
		        window.opener = null; //为了不出现提示框 
		        window.close(); //关闭窗口
		    });
		    return false; //必须返回false，否则表单会自己再做一次提交操作，并且页面跳转  
	});
	//修改表单提交验证.
	$("#form_saveCoursewareUpdate").submit(function() {
		var validate=$("#form_saveCourseware").valid();

		//检查课程名称是否重复.    --此处的验证,写在jquery.validate中,导致表单的提交按钮需要点击两次，才能完成表单提交，第一次的提交触发只是触发"名称的重复检查" TODO.
		if ($("#name").val() != null && $("#name").val() != "") {
		var repeatFlag = false;
		$.ajax({url:basepath+"/courseware/checkNameRepeatUpdate.html",type:"POST",async:false, data:{name:$("#name").val(),id:$("#cId").val(),r:Math.random()}, success: function(result){
			 repeatFlag = result;
		 }});
		 if (repeatFlag) {
			 alert("已存在的课程名称!");
			 return false;
		 }
		}
		 
		//所属分类非空.
		if ($("#knoName").val() == null || $("#knoName").val() == "") {
			alert("请选择所属分类!");
			return false;
		}
		
		//适用岗位非空.
		var dep_idsArray = $("input[name='dep_ids']"); //新增，修改页面的新增岗位.
		var positionArray = $("input[name='positionIds']");//修改页面的已有岗位.
		if ((dep_idsArray == null || dep_idsArray.length == 0) && (positionArray == null || positionArray.length == 0)) {
			alert("请选择适用岗位!");
			return false;
		} 
		
		if (uploading || uploading1 || uploading2 || uploading3) {
			alert("资源未上传完成，请稍后保存!");
			return false;
		}
		   return validate;
		  $("#form_saveCoursewareUpdate").ajaxSubmit(function(message){
		        // 对于表单提交成功后处理，message为提交页面saveReport.htm的返回内容
		        window.opener = null; //为了不出现提示框 
		        window.close(); //关闭窗口
		    });
		    return false; //必须返回false，否则表单会自己再做一次提交操作，并且页面跳转  
	});
	
	//选择知识分类，单选
	$(".chooseKno").click(function(){
		Doom=$(this);							 
		$(".blackall").show();
		$(function () {
			$("#org_jstree1").jstree({
				"plugins":["themes","json_data","ui"],
				"json_data":{
					"ajax" : {
						"url" : basepath+"/knowledge/knowledge4jstree.html",
						"cache":false,
						"data" : function(n){
							return {
								"operation":"",
								"id":n.attr?n.attr("id"):0,
								"name":n.attr?n.attr("name"):0,
								"namePath":n.attr?n.attr("namePath"):0
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
				"initially_open":knoRootId
			}
			}).bind("select_node.jstree",function(e,data){
				var id = data.rslt.obj.attr("id");
				var name = data.rslt.obj.attr("name");
				var type = data.rslt.obj.attr("type");
				var namePath = data.rslt.obj.attr("namePath");
				$("#kno_id").val(id); 
				orgClick(type,id,name,namePath);
				toAddTag(id);
			});
			
			
		});
		$(".treewindow").show();
		$('.treewindow').animate({
			right: 0
		  },1000);


	});
	$(".treewindowsure").click(function(){
		//doublechoice(this);
		//simplechoice(this);
		var mm=$(this).parent().parent().width();
		if(mm<239){
			$(this).parent().parent().animate({
				right: -239
			  },1000,function(){
				$(".blackall").hide();	  
			});	
		}
		else{
			$(this).parent().parent().animate({
				right: -mm-5
			  },1000,function(){
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
	
	
	//选择基准岗位，多选
	$(".newshowtree").click(function(){
		Doom=$(this);							 
		$(".blackall").show();
		$(function () {
			$("#org_jstree1").jstree({
				"plugins":["themes","json_data","checkbox","ui"],
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
				},
				"core":{
					"initially_open":rootPosition 
				} 
				
			}).bind("select_node.jstree",function(e,data){//选中节点的名称事件处理.
				//$('#org_jstree1').jstree("toggle_node", "#"+data.rslt.obj.attr("id"));
				var id = data.rslt.obj.attr("id");
				var name = data.rslt.obj.text();
				var type = data.rslt.obj.attr("type");
				//$("#dep_id").val(id); 
				//$(Doom).parent().prev().html("");
				//$(Doom).parent().prev().append('<label class="speciallabel" id="'+id+'">'+name+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
			}).bind("check_node.jstree",function(e,data) {//复选框选中事件处理,展开此节点下所有子节点.
				if (data.rslt.obj.attr("id") > 10) {//判断是否是根节点,非根节点进行此处理.
					$('#org_jstree1').jstree("open_all", "#"+data.rslt.obj.attr("id"));
				}
				//$('#org_jstree1').jstree("toggle_node", "#"+data.rslt.obj.attr("id"));
			}).bind("uncheck_node.jstree",function(e,data) {//复选框取消选中事件处理,收缩此节点下所有子节点.
			    $('#org_jstree1').jstree("close_all", "#"+data.rslt.obj.attr("id"));
				//$('#org_jstree1').jstree("toggle_node", "#"+data.rslt.obj.attr("id"));
			}) ;
		}) ;
		$(".treewindow").show();
		$('.treewindow').animate({
			right: 0
		  },200);
	 

	});
	$(".treewindowsure").click(function(){
	doublechoice(this);
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
function orgClick(type,id,name,namePath){
	$("#knowledgeId").val(id);
	if(namePath == "" || namePath == null)
	{
	$("#knoName").val(name);
	}
	if(namePath != "" && namePath != null)
	{
	$("#knoName").val(namePath);
	}
}


//根据选择好的知识分类，显示标签
function toAddTag(id){
	var url = basepath+"/courseware/selectTagForKnowledge.html?kcId="+id+"&r="+Math.random();
	$("#divTag").empty();
	$("#divTag").load(encodeURI(url));

}
