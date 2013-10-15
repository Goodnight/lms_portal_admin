/**
 * �½���ѵ�������
 */  
var dep_type = "";
var Doom;
$(function(){		
	$('#datatable2').dataTable( {
		"aoColumns": [
	      { "bSortable": false },
	      null, null,null
		] } );
	$('#datatable1').dataTable( {
		"aoColumns": [
	      { "bSortable": false },
	      null, null,null
		] } );
	$('#datatable3').dataTable( {
		"aoColumns": [
	      { "bSortable": false },
	      null, null,null
		] } );
	$('#datatable4').dataTable( {
		"aoColumns": [
	      null,
	      null, null,null
		] } );
	
	$(".newpersonbutton").live("click", function(){
	
		var oTable=$(this).parent().parent().find("#datatable1").find("tbody").find("tr");
		if(oTable){
			for(i=0;i<oTable.length;i++){
				var oText=$(oTable).eq(i).children().eq(3).text();
				var sn=$(oTable).eq(i).children().eq(2).text();
				var orgName=$(oTable).eq(i).children().eq(1).text();
				var id=$(oTable).eq(i).children().eq(0).find("input").attr("id");	
				$("#newpersonco").children().eq(0).append('<label class="speciallabel">'+'<a href="#" title="'+sn+orgName+'" class="noclass">'+oText+'</a>'+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a><input type="hidden" id="userIds" name="userIds" value="'+id+'" /><input type="hidden" id="userNames" name="userNames" value="'+oText+'" /></label>');
			}
		}
		$("#dialog").hide();

	});
	//�����б�
	$("#inquiry").validate({
		
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
			
		},
		rules:{
			topic : {
				required : true,
				maxlength : 30
			},
			tpName : {
				required : true
			},
			startDate :{
				required : true
			},
			endDate : {
				required : true
			}
		},
		messages:{
			topic : {
				required : "����������!",
				maxlength : "���ƹ���,����������!"
			},
			tpName : {
				required : "��ѡ��ģ�棡"
			},
			startDate : {
				required : "�����뿪ʼʱ��!"
			},
			endDate : {
				required : "���������ʱ��!"
			}
		}
	});
	
	//��ʼ����
	$("#startDate").datepicker({
		showOn:"button",
		changeMonth: true,
		changeYear: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#endDate").datepicker("option","minDate",dt);
			$('#startDate').removeClass('error');
			$('#startDate_error').html('');
		}
	});
	
	//��������
	$("#endDate").datepicker({
		showOn:"button",
		changeMonth: true,
		changeYear: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#startDate").datepicker("option","maxDate",dt);
			$('#endDate').removeClass('error');
			$('#endDate_error').html('');
		}
	});

	$(".closeTp").click(function(){
		$(this).parent().parent().parent().hide();
		$(".blackall").hide();
		
	});
	//��ѡ����Ա�Ի���
	$("#btn_user").click(function(){
		$(".inquiry").show();
		var url = basepath+"/dialog/user.html?page=userPage&r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog").show();

	});
	//
	$("#btn_trainClass").click(function(){
		var sId=$("#sId").val();
		var url = basepath+"/inquiry/getTrainClass.html?page=trainClassPage&sId="+sId+"&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
		$(".inquiry").show();
		
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
//					"initially_select":userdepid //Ĭ��ѡ���û����ڻ���
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
		  },2000);
	});
	$(".treewindowsure").click(function(){
		doublechoice(this);
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
});

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
		$(Doom).parent().prev().append('<input type="hidden" id="depIds" name="depIds" value="'+newId[i]+'"/><label class="unitlabel" id="'+newId[i]+'">'+oText[i]+'<a href="javascript:;" class="ml6"><img src="'+basepath+'/images/deletegreen.gif" /></a></label>');
		$(Doom).parent().prev().append('<input type="hidden" id="depIds" name="depNames" value="'+newName[i]+'"/>');
	}
}

function getTpInfo(){
	var param ="";
	if( $("input:radio[name=radio]:checked").length==0){
		alert("��ѡ��ģ��");
		return false;
	}
	var ids = $("input:radio[name=radio]");
	var names = $("input:hidden[name=tpNames]");
	for(var i=0;i<ids.length;i++){
		if($(ids[i]).attr("checked")){
			$("#itId").val($(ids[i]).val());
			$("#tpName").val($(names[i]).val());
		}
	}
	$(".tp").hide();
}
function a(){
	var url = basepath+"/inquiry/inquiryAddTpList.html?r="+Math.random();
	$("#list_inquiryTpList").load(encodeURI(url),function(){
	});
	$(".blackall").show();
	$("#chooseboard").show();
	
}
/**
 * ��ҳ
 */
function page1(i){	
	
	$('#tpName').removeClass('error');
	$('#tpName_error').html('');
	
	$(".blackall").show();
	$("#chooseboard").show();
	var tlname=$("#tlName").val();
	var max = $("#list_inquiryTpList .page_max").val()?$("#list_inquiryTpList .page_max").val():10;
	var url = basepath+"/inquiry/inquiryAddTpList.html?tlname="+tlname+"&pagefn=page1&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_inquiryTpList").load(encodeURI(url),function(){
		//$.uniform.update();
		//ѡ��ÿҳ��¼����
		$("#list_inquiryTpList .page_max").change(function(){
			page1(1);
		});
	});	
}

function trainClassPage(i){
	var sId=$("#sId").val();
	var url = basepath+"/inquiry/inquiryAimTrainClassList.html?sId="+sId+"&page_trainclass=page_trainclass&page="+i+"&r="+Math.random();
	$("#list_inquiryAimTrainClass").load(encodeURI(url),function(){
	});
}
function deleteUser(id){
	var param = "method=remove&itIds="+id;
	$.ajax({
		url : "deleteInquiryAimUser.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
						
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			alert("error");
		}
	});
}
function deleteDep(id){
	var param = "method=remove&itIds="+id;
	$.ajax({
		url : "deleteInquiryAimDep.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
						
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			alert("error");
		}
	});
}
function deleteClass(id){
	var param = "method=remove&itIds="+id;
	$.ajax({
		url : "deleteInquiryAimClass.html",
		type : "POST",
		data : param,
		dataType : "json",
		success : function(data){
						
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			alert("error");
		}
	});
}
