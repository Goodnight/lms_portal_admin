var Doom;
function doublechoice(dom){
	var nn=$(dom).parent().prev().find(".jstree-checked");
	var oText=[];
	var newId=[];
	var newName=[];
	var oldId=[];
	var oSource=$(Doom).parent().prev().html();
		if(oSource!="��ѡ��"){
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
		
		if(oSource!="��ѡ��"){
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
	//���������ύ��֤.
	$("#form_saveDoc").submit(function() {
		
		if ($("#name").val() != null && $("#name").val() != "") {
		var repeatFlag = false;
		$.ajax({url:basepath+"/doc/checkNameRepeat.html",type:"POST",async:false, data:{name:$("#name").val(),docType:"0",r:Math.random()}, success: function(result){
			 repeatFlag = result;
		 }});
		 if (repeatFlag) {
			 alert("�Ѵ��ڵ��ĵ�����!");
			 return false;
		 }
		}
		
		//��������ǿ�.
		if ($("#knoName").val() == null || $("#knoName").val() == "") {
			alert("��ѡ����������!");
			return false;
		}
		
		//���ø�λ�ǿ�.
		var dep_idsArray = $("input[name='dep_ids']"); //�������޸�ҳ���������λ.
		var positionArray = $("input[name='positionIds']");//�޸�ҳ������и�λ.
		if ((dep_idsArray == null || dep_idsArray.length == 0) && (positionArray == null || positionArray.length == 0)) {
			alert("��ѡ�����ø�λ!");
			return false;
		}
		
		//�ĵ������ǿ�.
		var b = $("#bbb").val();
		if(b==null || b=="")
		{
		var upDoc = $("#uplodDocddd").val();
		if(upDoc == null || upDoc == "")
		{
			alert("�����ϴ��ĵ�����");
			return false;
		}
	}
		
		if (uploading || uploading1) {
			alert("��Դδ�ϴ���ɣ����Ժ󱣴�!");
			return false;
		}
	});
	
	//�޸ı����ύ��֤.
	$("#form_saveDocUpdate").submit(function() {
		
		if ($("#name").val() != null && $("#name").val() != "") {
		var repeatFlag = false;
		$.ajax({url:basepath+"/doc/checkNameRepeatUpdate.html",type:"POST",async:false, data:{name:$("#name").val(),id:$("#dId").val(),docType:"0",r:Math.random()}, success: function(result){
			 repeatFlag = result;
		 }});
		 if (repeatFlag) {
			 alert("�Ѵ��ڵ��ĵ�����!");
			 return false;
		 }
		}
		
		//��������ǿ�.
		if ($("#knoName").val() == null || $("#knoName").val() == "") {
			alert("��ѡ����������!");
			return false;
		}
		
		//���ø�λ�ǿ�.
		var dep_idsArray = $("input[name='dep_ids']"); //�������޸�ҳ���������λ.
		var positionArray = $("input[name='positionIds']");//�޸�ҳ������и�λ.
		if ((dep_idsArray == null || dep_idsArray.length == 0) && (positionArray == null || positionArray.length == 0)) {
			alert("��ѡ�����ø�λ!");
			return false;
		} 
		
		//�ĵ������ǿ�.
		var b = $("#bbb").val();
		if(b==null || b=="")
		{
		var upDoc = $("#uplodDocddd").val();
		if(upDoc == null || upDoc == "")
		{
			alert("�����ϴ��ĵ�����");
			return false;
		}
	}
		
		if (uploading || uploading1) {
			alert("��Դδ�ϴ���ɣ����Ժ󱣴�!");
			return false;
		}
	});
	
	//ѡ��֪ʶ���࣬��ѡ
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
	
	
	//ѡ���׼��λ����ѡ
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
			}).bind("select_node.jstree",function(e,data){
				var id = data.rslt.obj.attr("id");
				var name = data.rslt.obj.text();
				var type = data.rslt.obj.attr("type");
			}).bind("check_node.jstree",function(e,data) {//��ѡ��ѡ���¼�����,չ���˽ڵ��������ӽڵ�.
				if (data.rslt.obj.attr("id") > 10) {//�ж��Ƿ��Ǹ��ڵ�,�Ǹ��ڵ���д˴���.
					$('#org_jstree1').jstree("open_all", "#"+data.rslt.obj.attr("id"));
				}
			}).bind("uncheck_node.jstree",function(e,data) {//��ѡ��ȡ��ѡ���¼�����,�����˽ڵ��������ӽڵ�.
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


//ѡ�񵥸�֪ʶ������ʾ���ı���
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

//����ѡ��õ�֪ʶ���࣬��ʾ��ǩ
function toAddTag(id){
	var url = basepath+"/doc/selectTagForDoc.html?kcId="+id+"&r="+Math.random();
	$("#divTag").empty();
	$("#divTag").load(encodeURI(url));

}