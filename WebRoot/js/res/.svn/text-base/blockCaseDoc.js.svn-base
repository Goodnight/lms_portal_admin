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
	$("#form_saveCaseDoc").submit(function() {
		if ($("#name").val() != null && $("#name").val() != "") {
		var repeatFlag = false;
		$.ajax({url:basepath+"/doc/checkNameRepeatUpdate.html",type:"POST",async:false, data:{name:$("#name").val(),id:$("#dId").val(),docType:"1",r:Math.random()}, success: function(result){
			 repeatFlag = result;
		 }});
		 if (repeatFlag) {
			 alert("已存在的案例名称!");
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
		
		//案例附件非空.
		var b = $("#bbb").val();
		if(b==null || b=="")
		{
		var upDoc = $("#uplodDocddd").val();
		if(upDoc == null || upDoc == "")
		{
			alert("必须上传案例附件");
			return false;
		}
		}
		
		if (uploading || uploading1) {
			alert("资源未上传完成，请稍后保存!");
			return false;
		}
	});
	
	//修改表单提交验证.
	$("#form_saveCaseDocUpdate").submit(function() {
		if ($("#name").val() != null && $("#name").val() != "") {
		var repeatFlag = false;
		$.ajax({url:basepath+"/doc/checkNameRepeatUpdate.html",type:"POST",async:false, data:{name:$("#name").val(),id:$("#dId").val(),docType:"1",r:Math.random()}, success: function(result){
			 repeatFlag = result;
		 }});
		 if (repeatFlag) {
			 alert("已存在的案例名称!");
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
		
		//案例附件非空.
		var b = $("#bbb").val();
		if(b==null || b=="")
		{
		var upDoc = $("#uplodDocddd").val();
		if(upDoc == null || upDoc == "")
		{
			alert("必须上传案例附件");
			return false;
		}
		}
		
		if (uploading || uploading1) {
			alert("资源未上传完成，请稍后保存!");
			return false;
		}
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
								"namePath":n.attr?n.attr("name"):0
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
				var id = data.rslt.obj.attr("id");
				var name = data.rslt.obj.text();
				var type = data.rslt.obj.attr("type");
			}).bind("check_node.jstree",function(e,data) {//复选框选中事件处理,展开此节点下所有子节点.
				if (data.rslt.obj.attr("id") > 10) {//判断是否是根节点,非根节点进行此处理.
					$('#org_jstree1').jstree("open_all", "#"+data.rslt.obj.attr("id"));
				}
			}).bind("uncheck_node.jstree",function(e,data) {//复选框取消选中事件处理,收缩此节点下所有子节点.
			    $('#org_jstree1').jstree("close_all", "#"+data.rslt.obj.attr("id"));
			}) ;
			
			
		});
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


//根据选择好的知识分类显示标签
function toAddTag(id){
	var url = basepath+"/case/selectTagForCaseDoc.html?kcId="+id+"&r="+Math.random();
	$("#divTag").empty();
	$("#divTag").load(encodeURI(url));

}