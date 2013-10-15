/**
 * Ȩ�޹��� - ����/ά������Ա
 */

$(function(){
	
	$("#newUserRoles").validate({
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		rules:{
			userId : {
				required : true
			},
			depIds : {
				required : true
			},
			levelType : {
				required : true
			},
			roleIds : {
				required : true
			}
		},
		messages:{
			userId : "��ѡ��ָ���û�",
			depIds : "��ѡ��ָ������",
			levelType : "��ѡ���Ͻ����",
			roleIds : "��ѡ��ָ����ɫ"
		}
	});
	
	$("#objectstring .ml12,.objectstring a").live("click", function(){
		$(this).parent().remove();
	});	
	$(".newpersonbutton").live("click", function(){
		var id = $("input[name=uid]:checked").val();
        var name = $("#"+id).val();
        if(name!=null&&name!=""&&name!=undefined){
	        $("#newpersonco").children().eq(0).html("");
	        $("#newpersonco").children().eq(0).append('<label class="speciallabel">'+name+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a><input type="hidden" id="userId" name="userId" value="'+id+'" /></label>');
        }
    	$("#dialog").hide();
		$(".blackall").hide();
	});

	/////////////////////20130304 Start////////////////////////
	//�������ӽ�ɫ����
	$(".btn_role").click(function(){
		var url = basepath+"/auth/obtainRoleList.html?orgRoleId="+$(this).attr("id");
		$("#dialog_content").load(url);
		$("#dialog,#dialog .blackall,#dialog .roleInfo").show();
	});
	
	//�������ӽ�ɫ����
	$(".addRoles").live("click", function(){
		//���������б���<tr>��ǩ���ݲ�ȡֵ
        var oTable=$(this).parent().parent().find("#dataTableRole").find("tbody").find("tr");
		if(oTable){
			for(i=0;i<oTable.length;i++){
				var oText=$(oTable).eq(i).children().eq(1).text();
				var id=$(oTable).eq(i).children().eq(0).find("input").attr("id");
				//��������ʾѡ�н��
				if($(oTable).eq(i).children().eq(0).find("input").attr("checked") == "checked"){
					$("#newroleco").children().eq(0).append('<label class="speciallabel">'+oText+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a><input type="hidden" id="roleIds" name="roleIds" value="'+id+'" /></label>');
				}
			}
		}
		$("#dialog").hide();
		$(".blackall").hide();
	});
	/////////////////////20130304 End////////////////////////
	
	$(".showAuth").live("click", function(){
		var oTable=$(this).parent().parent().find("#datatable").find("tbody").find("tr");
		if(oTable){
			for(i=0;i<oTable.length;i++){
				var oText=$(oTable).eq(i).children().eq(0).text();
				var id=$(oTable).eq(i).children().eq(0).find("input").attr("id");
				var inquiry=$(oTable).eq(i).children().eq(1).find("input").attr("value");
				var add=$(oTable).eq(i).children().eq(2).find("input").attr("value");
				var modify=$(oTable).eq(i).children().eq(3).find("input").attr("value");
				var del=$(oTable).eq(i).children().eq(4).find("input").attr("value");
				$("#newmenuco").children().eq(0).append('<label class="speciallabel">'
															+oText+'<a href="javascript:;" class="ml6"><img src="'
															+basepath+'/images/deletegreen.gif" /></a><input type="hidden" id="menuIds" name="menuIds" value="'
															+id+'" /><input type="hidden" id="inquiryVal" name="inquiryVal" value="'
															+inquiry+'" /><input type="hidden" id="addVal" name="addVal" value="'
															+add+'" /><input type="hidden" id="modifyVal" name="modifyVal" value="'
															+modify+'" /><input type="hidden" id="delVal" name="delVal" value="'
															+del+'" /></label>');
			}
		}
		$("#dialog").hide();
		$(".blackall").hide();
	});
	
	//��ѡ����Ա�Ի���
	$("#btn_user").click(function(){
		var url = basepath+"/dialog/userRoleRadio.html";
		$("#dialog_content").load(url);
		$("#dialog,#dialog .blackall,#dialog .newwindow").show();
	});
	
	/**
	 * dep_type���ڱ�ǵ�ǰѡ������ĸ�����ѡ��ť
	 * ����ѡ���ź�� dep_type+id �� dep_type+name���и�ֵ
	 */ 
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
					"override_ui" : true
				},
//				"ui":{
//				"initially_select":userdepid //Ĭ��ѡ���û����ڻ���
//				},
				"core":{
					"initially_open":userdeppath
				}
			}).bind("select_node.jstree",function(e,data){
				var id = data.rslt.obj.attr("id");
				var name = data.rslt.obj.text("name");
				var type = data.rslt.obj.attr("type");
				var namePath = data.rslt.obj.attr("namePath");
			});			
		});
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
	
	$(".treewindowsure_").click(function(){
		doublechoice_(this);
		var mm=$(this).parent().parent().width();
		if(mm<239){
			$(this).parent().parent().animate({
				right: -239
			  },200,function(){
				$(".blackall_new").hide();	  
			});	
		}
		else{
			$(this).parent().parent().animate({
				right: -mm-5
			  },200,function(){
				$(".blackall_new").hide();	  
			});		
		}
	});
	$(".treewindowback_").click(function(){
		var mm=$(this).parent().parent().width();
		if(mm<239){
			$(this).parent().parent().animate({
				right: -239
			  },200,function(){
				$(".blackall_new").hide();	  
			});	
		}
		else{
			$(this).parent().parent().animate({
				right: -mm-5
			  },200,function(){
				$(".blackall_new").hide();	  
			});		
		}							
	});
	
//	$(".addRoleAuthority").click(function(){
//		var uId=$("#userId").val();
//		if(uId==null){
//			alert("����ѡ���ɫ");
//			return;
//		}
//		var type = 0; //�½�����Ա����ģ��Ȩ��,������ύ,type=1
//	    var url = basepath+"/dialog/addManage.html?uId="+uId;
//		 $.get(url, function(date){
//				if(date==null || date==""){
//					alert("�鿴ʧ��");
//				}else{
//					  var url = basepath+"/dialog/authManage.html?rId="+date+"&type="+type;
//					  $("#dialog_content").load(url);
//					  $("#dialog,#dialog .newwindow,#dialog .blackall").show();
//				}
//		});	
//	    
//	    $("#dialog_content").load(url);
//	    $("#dialog").show();
//	    $(".newwindow").show();
//	});
	
	///20130322 �ִ�ʦЭ���޸��½�ʱ��ѡ���߼�////////
	$("#levelTop em.option").click(function(){
		$(".greynouse").hide();
		$(".greynouse").next().show();
		var thisIndex=$("#levelTop em.option").index(this); //��ǰ�����Radio
		var prevDoom=$(".greynouse").parent().prev();
		var divIndex=$(prevDoom).attr("divindex"); //����µ�Radioʱ����֮ǰ�ı�ʶ
		if(divIndex){
			if(thisIndex!=divIndex){
				$(prevDoom).html(""); //��ǰ��֮ǰ����,�������仯,�����ѡ 
			}
			$(prevDoom).attr("divindex",thisIndex);	 //���½���ǰ�ı�ʶ�����´α仯ʱ�жϵ�����
		}
		else{
			$(prevDoom).attr("divindex",thisIndex);	
		}
	});
	
});

function doublechoice_(dom){
	var nn=$(dom).parent().prev().find(".jstree-checked");
	var oText=[];
	var newId=[];
	var newName=[];
	var oldId=[];
	var sourcechild=$(Doom).parent().prev().children();
	for(var i=0;i<sourcechild.length;i++){
		oldId[i]=$(sourcechild).eq(i).attr("id");	
	}	
	for(var i=0;i<nn.length;i++){
		var ww=8;
		var key=$(nn).eq(i).attr("id");
		for(var j=0;j<oldId.length;j++){
			if(key==oldId[j]){
				 ww=0;
			}
		}
		if(ww!=0){
			var oNewName = $(nn).eq(i).attr("name"); 
			oText.push(oNewName);	
			newId.push(key);
			newName.push(oNewName);
		}
	}
	for(var i=0;i<oText.length;i++){
		newName[i] = newName[i].replace(/\s+/g, "");
		$(Doom).parent().prev().append('<input type="hidden" id="Ids" name="Ids" value="'+newId[i]+'"/><label class="speciallabel" id="'+newId[i]+'">'+oText[i]+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
		$(Doom).parent().prev().append('<input type="hidden" id="Names" name="Names" value="'+newName[i]+'"/>');
	}
}


function doublechoice(dom){
	var nn=$(dom).parent().prev().find(".jstree-checked");
	var oText=[];
	var newId=[];
	var newName=[];
	var oldId=[];
	var oSource=$(Doom).parent().prev().html();
	var sourcechild=$(Doom).parent().prev().children();
	for(i=0;i<sourcechild.length;i++){
		oldId[i]=$(sourcechild).eq(i).attr("id");	
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
			var oNewName1 = $(nn).eq(i).attr("namePath");
			var oNewName2 = $(nn).eq(i).attr("name"); 
			var oNewName = oNewName1 + oNewName2;
			oText.push(oNewName);	
			newId.push(key);
			newName.push(oNewName);
		}
	}
	for(i=0;i<oText.length;i++){
		newName[i] = newName[i].replace(/\s+/g, "");
		$(Doom).parent().prev().append('<input type="hidden" id="depIds" name="depIds" value="'+newId[i]+'"/><label class="speciallabel" id="'+newId[i]+'">'+oText[i]+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
		$(Doom).parent().prev().append('<input type="hidden" id="depNames" name="depNames" value="'+newName[i]+'"/>');
	}
}

//ɾ���û���ǩ
function deleteUser(rId,id){
	var param = "method=remove&Ids="+id+"&rId="+rId;
	$.ajax({
		url : "deleteUser.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			alert("deleted");			
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			alert("error");
		}
	});
}

//ɾ����Ͻ��Χ��ǩ
function deleteDep(rId,id){
	var param = "method=remove&Ids="+id+"&rId="+rId;
	$.ajax({
		url : "deleteDep.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
			alert("deleted");			
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			alert("error");
		}
	});
}
