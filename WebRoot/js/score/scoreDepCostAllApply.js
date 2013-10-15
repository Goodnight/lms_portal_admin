$(function(){
	
	selectBottonClick(1);
	
});


//
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

/**
 *分页
 */
function page(i){
	var url = basepath+"/list/toScoreDepCostAllApplyList.html?pagefn=page&page="+i+"&r="+Math.random();
	$("#list_scoreDepCostAllApply").load(encodeURI(url),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
	});
	
}

//批准
$("#btn_pz").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if(confirm('确定要批准吗？')){
	$.ajax({
		url : "updateScoreDep.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			alert("OK");
			page(1);
			
		}
	}
	);
	}
});

//
$("#btn_bpz").click(function(){
	var param = $.param($("input:checkbox[name=groupTypeId]:checked"));
	if(confirm('确定要不批准吗？')){
	$.ajax({
		url : "updateScoreDepForNo.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			alert("OK");
			page(1);
			
		}
	}
	);
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


//选择部门
$(document).ready(function () {	
	$(".chooseDep").click(function(){
		Doom=$(this);							 
		$(".blackall").show();
		$(function () {
			$("#org_jstree1").jstree({
				"plugins":["themes","json_data","ui"],
				"json_data":{
					"ajax" : {
						"url" : basepath+"/list/org4jstree.html",
						"cache":false,
						"data" : function(n){
							return {
								"operation":"",
								"type" : "3",
								"id":n.attr?n.attr("id"):0
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
				"initially_open":userdepid
			}
			}).bind("select_node.jstree",function(e,data){
				var id = data.rslt.obj.attr("id");
				var name = data.rslt.obj.attr("name");
				var type = data.rslt.obj.attr("type");
				$("#dep_id").val(id); 
				depClick(type,id,name);
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
function depClick(type,id,name){
	$("#depId").val(id);
	$("#depName").val(name);
}


//
function selectBottonClick(i){
	var query = "";
	var year = $("#year").val();
	if(year == "全部")
		{
		year = "";
		}
	query += "&year="+year;
	var status = $("input:radio[name=status]:checked").val();
	if(null==status){
		status="";
	}
	query += "&statusScore="+status;
	var depId = $("#depId").val();
	var depName = $("#depName").val();
	if(depName==null || depName == ""){
		depId="";
	}
	if(depId!=""){
		query += "&depId=" + depId;
	}
	var url = basepath+"/list/toScoreDepCostAllApplyList.html?pagefn=page&page="+i+"&r="+Math.random();
	$("#list_scoreDepCostAllApply").load(encodeURI(url+query),function(){
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
	});
}
