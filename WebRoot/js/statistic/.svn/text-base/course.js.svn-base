/**
 * 课程学习信息统计
 */
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
			var type=$(nn).eq(i).attr("type");
			for(j=0;j<oldId.length;j++){
				if(key==oldId[j]){
					 ww=0;
				}
			}
			if(ww!=0){
				oText.push($(nn).eq(i).attr('name'));	
				newId.push(key);
				newName.push($(nn).eq(i).attr('name'));
			}
		}
		
		if(oSource!="请选择"){
			for(i=0;i<oText.length;i++){
				
				newName[i] = newName[i].replace(/\s+/g, "");
				if(type=="kno"){
					$(Doom).parent().prev().append('<label class="unitlabel" id="'+newId[i]+'">'+oText[i]+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a><input type="hidden" id="knoId" name="knoId" value="'+newId[i]+'"/></label>');
				}else{
					$(Doom).parent().prev().append('<label class="unitlabel" id="'+newId[i]+'">'+oText[i]+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a><input type="hidden" id="depIds" name="depIds" value="'+newId[i]+'"/><input type="hidden" id="depIds" name="depNames" value="'+newName[i]+'"/></label>');
				}
			}
		}
		else{
			$(Doom).parent().prev().html("");
			for(i=0;i<oText.length;i++){
				newName[i] = newName[i].replace(/\s+/g, "");
				if(type=="kno"){
					$(Doom).parent().prev().append('<label class="unitlabel" id="'+newId[i]+'">'+oText[i]+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a><input type="hidden" id="knoId" name="knoId" value="'+newId[i]+'"/></label>');
				}else{
					$(Doom).parent().prev().append('<label class="unitlabel" id="'+newId[i]+'">'+oText[i]+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a><input type="hidden" id="depIds" name="depIds" value="'+newId[i]+'"/><input type="hidden" id="depIds" name="depNames" value="'+newName[i]+'"/></label>');
				}
			}
		}
}

$(function(){
	//page(1);
	
	$(".btn_search").click(function(){
		page(1);
	});
	
	$(".btn_clean").click(function(){
		window.location = basepath + "/statistic/course.html";
	});
	
	$("#objectstring .ml12,.objectstring a").live("click", function(){
		$(this).parent().remove();
	});	
	
	//多选人员
	$(".newpersonbutton").live("click", function(){
		//遍历数据列表中<tr>标签内容并取值
		var oTable=$(this).parent().parent().find("#datatable1").find("tbody").find("tr");
		if(oTable){
			for(i=0;i<oTable.length;i++){
				var oText=$(oTable).eq(i).children().eq(3).text();
				var id=$(oTable).eq(i).children().eq(0).find("input").attr("id");
				//监听并显示选中结果
				$("#newpersonco").children().eq(0).append('<label class="speciallabel">'+oText+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a><input type="hidden" id="userIds" name="userIds" value="'+id+'" /></label>');
			}
		}
		$("#dialog").hide();
	});
	
	//多选课程
	$(".newcoursebutton").live("click", function(){
		//遍历数据列表中<tr>标签内容并取值
		var oTable=$(this).parent().parent().find("#datatable1").find("tbody").find("tr");
		if(oTable){
			for(i=0;i<oTable.length;i++){
				var oText=$(oTable).eq(i).children().eq(2).text();
				var id=$(oTable).eq(i).children().eq(0).find("input").attr("id");
				//监听并显示选中结果
				$(".classcourse").children().eq(0).append('<label class="speciallabel">'+oText+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a><input type="hidden" id="classIds" name="classIds" value="'+id+'" /></label>');
			}
		}
		$("#dialog").hide();
	});
	
	$(".neworgbutton").live("click",function(){
		var oTable=$(this).parent().parent().find("#list_related").find("table").find("tbody").find("tr");
		if(oTable){
			for(i=0;i<oTable.length;i++){
				if ($(oTable).eq(i).children().eq(0).find("input").attr('checked') == 'checked') {
					var oText=$(oTable).eq(i).children().eq(2).text();
					var id=$(oTable).eq(i).children().eq(0).find("input").val();
					//监听并显示选中结果
					$(".classtrain").children().eq(0).append('<label class="speciallabel">'+oText+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a><input type="hidden" id="trainclassids" name="trainclassids" value="'+id+'" /></label>');
				}
			}
		}
		$("#dialog").hide();
	});
	//打开选择人员对话框
	$("#btn_user").click(function(){
		var url = basepath+"/dialog/user.html?page=userPage&r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
	$(".chooseOrg").click(function(){
		Doom=$(this);							 
		$(".blackall").show();
		$(function () {
			$("#org_jstree").jstree({
				"plugins":["themes","json_data","ui","checkbox"],
				"json_data":{
					"ajax" : {
						"url" : basepath+"/list/org4jstree.html",
						"cache":false,
						"data" : function(n){
							return {
								"operation":"",
								"id":n.attr?n.attr("id"):0
							};
						}
					}
				},
				"checkbox":{
					"two_state" : true,
					override_ui : true
				}
			}).bind("select_node.jstree",function(e,data){
				var id = data.rslt.obj.attr("id");
				var name = data.rslt.obj.text();
				var type = data.rslt.obj.attr("type");
			});
			
			
		});
		var treewidth=$(".treewindow").css("width");
		treewidth=parseInt(treewidth);
		$(".treewindow").css("right",-treewidth);
		$(".treewindow").show();
		$('.treewindow').animate({
			right: 0
		  },200);
	});
	
	$(".chooseKno").click(function(){
		Doom=$(this);							 
		$(".blackall").show();
		$(function () {
			$("#org_jstree").jstree({
				"plugins":["themes","json_data","ui","checkbox"],
				"json_data":{
					"ajax" : {
						"url" : basepath+"/knowledge/knowledge4jstree.html",
						"cache":false,
						"data" : function(n){
							return {
								"operation":"",
								"id":n.attr?n.attr("id"):0
							};
						}
					}
				},
				"checkbox":{
					"two_state" : true,
					override_ui : true
				}
			}).bind("select_node.jstree",function(e,data){
				var id = data.rslt.obj.attr("id");
				var name = data.rslt.obj.text();
				var type = data.rslt.obj.attr("type");
			});
		});
		var treewidth=$(".treewindow").css("width");
		treewidth=parseInt(treewidth);
		$(".treewindow").css("right",-treewidth);
		$(".treewindow").show();
		$('.treewindow').animate({
			right: 0
		  },200);
	});
	
	$(".treewindowsure").click(function(){
		doublechoice(this);
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
	
	$(".addClass").click(function(){
		var url = basepath+"/dialog/onlineCourse.html?cwtype=0&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	
	//打开选择已有培训班的对话框
	$("#btn_chooseclass").click(function(){
		var url = basepath+"/trainclass/dialog/orgclass.html?r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
});

//显示标签
function toAddTag(id){
	var url = basepath+"/courseware/selectTagForKnowledge.html?kcId="+id+"&r="+Math.random();
	$("#divTag").empty();
	$("#divTag").load(encodeURI(url));
}

$('#btn_courseform_submit').on('click', function () {
	var d = $('#courseForm').serialize();
	var url = 'course/addreport.html';
	var flag=1;
	if($('#search_start_date').val()>$('#search_end_date').val()){
		flag=0;
		alert('开始日期不能大于结束日期！');
	}
	if($('#report').val()=="3"){
		if($('#search_start_date').val()!="" && $('#search_end_date').val()=="" ){
			flag=0;
			alert('请选择结束日期！');
		}else if($('#search_start_date').val()=="" && $('#search_end_date').val()!=""){
			flag=0;
			alert('请选择开始日期！');
		}else if($('#search_start_date').val()=="" && $('#search_end_date').val()==""){
			flag=0;
			alert('请选择开始结束日期！');
		}
	}
	if(flag==1){
		$.post(url, d, function(data) {
			if(data=='1'){
				alert('添加成功！');
				page(1);
			}else{
				alert("添加失败！请重新添加！");
			}
		});
	}

});
$('#btn_delform_submit').on('click', function () {
	var d = $('#delForm').serialize();
	var url = 'course/delreport.html';
	var delid=d.split('&');
	if(delid==""){
		alert("请选择要删除的内容！");
	}else{
		var sure=confirm("确认删除吗？");
		if(sure){
			$.post(url, d, function() {
				page(1);
			});
		}else{
		}
	}

});

$("#course_pager .page_max").change(function(){
	page(1);
});

function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');

	var page_max = $("#course_pager .page_max").val();
	var max = page_max ? page_max : 10;

	var url = basepath + "/statistic/course.html";

	
	var form = $('#pagerForm');
	form.attr('action', url);
	form.find('#max').val(max);
	form.find('#page').val(i);
	
	form.submit();
}			
