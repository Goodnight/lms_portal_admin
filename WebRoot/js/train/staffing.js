/**
 * 
 */
//ȫ�ֱ���
var treeType = "";


$(function(){
	//��ʼ������
	init();
	
	//�����Ի�����
	$("#btn_assignperson").click(function(){
		var url = basepath+"/dialog/user.html?page=init&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});	
	
	$("#btn_importperson").click(function(){
		$("#dialog_content").empty();
		var url = basepath+"/dialog/staffing/importperson.html?tcid="+tcid+"&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});	

	
	//�򿪷��䲿�ŵ���
	$(".assigndep").click(function(){
		treeType = "assign";
		var elements = $(".cls_item_assigneddep");
		var ids = new Array();
		var idpaths = new Array();
		for(i=0;i<elements.length;i++){
			var id = $(elements[i]).attr("orgid");
			ids.push(id);
			var idpath = $(elements[i]).attr("idpath").split("/");
			for(j=0;j<idpath.length;j++){
				if(idpath[j]!=""){
					idpaths.push(idpath[j]);
				}
			}
		}
		initCheckTree("#new_jstree_checkbox", ids, idpaths);
	});
	
	//��������Ա��ѯ��ѡ���ŵ���
	$(".choosesearchdep").click(function(){
		treeType = "search";
		initTree("#new_jstree_checkbox",null,null,"org",function(type,id,name){
			$("#search_depname").val(name);
			$("#search_depid").val(id);
		});
	});
	
	
	//���ȷ�������ѡ�е�ָ������
	$(".treewindowsure").click(function(){
		if("assign"==treeType){
			var param = "";
			//�������ѡ�е�����
			$("#new_jstree_checkbox").jstree("get_selected").each(function(i,n){
				param += "id="+n.id + "&";
			});
			if(param!=""){
				param += "tcid="+tcid+"&operation=save&status=dep&isSub=0";
				var url = basepath+"/trainclass/setDepartment.html";
				$.ajax({
					url: url,
					type : "post",
					data : param,
					dataType : "json",
					success : function(msg){
						if(msg.code=="fail" || msg.code == "checknum"){
							$.dialog.alert(msg.content);
						}else{
							depPage(1);
							getNum();
							$.dialog.tips("�����ɹ�",2,"tips.gif");
						}
					},
					error : function(){
						$.dialog.tips("����ʧ��",2,"tips.gif");
					}
				});
			}
		}
	});
	
	$("#btn_assigndepnum").click(function(){
		var url = basepath+"/dialog/staffing/assigndepnum.html?tcid="+tcid+"&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});	
	
	//����ɾ��ѧԱ
	$(".cls_all_delete").click(function(){
		var e_ids = $("input:checkbox[name=all_student]:checked");
		if(e_ids.length>0){
			$.dialog.confirm("ȷ��Ҫɾ��ѡ����",function(){
				var ids = new Array();
				for(i=0;i<e_ids.length;i++){
					ids.push($(e_ids[i]).val());
				}
				setStudent(ids,"delete");
			},function(){});
		}else{
			$.dialog.alert("��ѡ��ɾ���");
		}
	});
	
	//������׼
	$("#btn_batchapprove").click(function(){
		var e_ids = $("input:checkbox[name=approving_student]:checked");
		if(e_ids.length>0){
			$.dialog.confirm("�Ƿ�ȷ�ϣ�",function(){
				var ids = new Array();
				for(i=0;i<e_ids.length;i++){
					ids.push($(e_ids[i]).val());
				}
				setStudent(ids,"approve");
			},function(){});
		}else{
			$.dialog.alert("��ѡ�������");
		}
	});
	
	//����ɾ������
	$("#btn_deldep").click(function(){
		var e_ids = $("input:checkbox[name=assignedDep]:checked");
		if(e_ids.length>0){
			$.dialog.confirm("ȷ��Ҫɾ��ѡ����",function(){
				var ids = new Array();
				for(i=0;i<e_ids.length;i++){
					ids.push($(e_ids[i]).val());
				}
				setDepartment(ids,"delete");
			},function(){});
		}else{
			$.dialog.alert("��ѡ��ɾ���");
		}
	});
	
	//����ɾ����������
	$("#btn_deletedepnum").click(function(){
		var e_ids = $("input:checkbox[name=assigneddepnum]:checked");
		if(e_ids.length>0){
			$.dialog.confirm("ȷ��Ҫɾ��ѡ����",function(){
				var ids = new Array();
				for(i=0;i<e_ids.length;i++){
					ids.push($(e_ids[i]).val());
				}
				setDepartment(ids,"delete");
			},function(){});
		}else{
			$.dialog.alert("��ѡ��ɾ���");
		}
	});
	
	//��ѯ����
	$("#search_start_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#search_end_date").datepicker("option","minDate",dt);
		}
	});
	
	$("#search_end_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#search_start_date").datepicker("option","maxDate",dt);
		}
	});
	
	//����ѧԱ�ĸ߼�����
	$(".search_all").click(function(){
		allPage(1);
	});
	$("#search_dep").click(function(){
		depPage(1);
	});
	$("#search_depnum").click(function(){
		assignNumPage(1);
	});
	
	$(".clearsearchdep").click(function(){
		$("#search_depid").val("");
		$("#search_depname").val("");
	});
//---------------------------LuChao
	$("#search_name").blur(function(){
		var ms=$(this).val();
		if(ms==""){
			$(this).val("������Ա����");		
		}
	});
	$("#search_name").focus(function(){
		var ms=$(this).val();
		if(ms=="������Ա����"){
			$(this).val("");		
		}						   
	});
	$("#w177_2").blur(function(){
		var ms=$(this).val();
		if(ms==""){
			$(this).val("���벿������");		
		}
	});
	$("#w177_2").focus(function(){
		var ms=$(this).val();
		if(ms=="���벿������"){
			$(this).val("");		
		}						   
	});
	$("#w177_3").blur(function(){
		var ms=$(this).val();
		if(ms==""){
			$(this).val("���벿������");		
		}
	});
	$("#w177_3").focus(function(){
		var ms=$(this).val();
		if(ms=="���벿������"){
			$(this).val("");		
		}						   
	});
//---------------------------------
	
});

function export_trainclassstudent(){
	
	var name = $("#search_name").val();
	var depid = $("#search_depid").val();
	var sn = $("#search_sn").val();
	var mobile = $("#search_mobile").val();
	var apply_way = $("input[name=applyway]:checked").val();
	var query="&tcid="+tcid;
	if(name!=""&&name!="������Ա����"){
		query += "&name="+name;
	}
	if(sn!=""){
		query+="&sn="+sn;
	}
	if(depid!=""){
		query += "&depid=" + depid;
	}
	if(apply_way!=""){
		query+="&applyway="+apply_way;
	}
	if(mobile!=""){
		query+="&mobile="+mobile;
	}
	loadingDataStart();
	var countUrl = basepath + "/trainclassstudent/exportCount.html?r="+Math.random();
	var listUrl = basepath + "/trainclassstudent/exportList.html?r="+Math.random();
	postData(encodeURI(countUrl+query),encodeURI(listUrl+query));
}


//��ҳ����
function allPage(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var max = $("#list_allstudent .page_max").val()?$("#list_allstudent .page_max").val():10;
	var name = $("#search_name").val();
	var depid = $("#search_depid").val();
	var sn = $("#search_sn").val();
	var mobile = $("#search_mobile").val();
	var apply_way = $("input[name=applyway]:checked").val();
	var query = "";
	if(name!=""&&name!="������Ա����"){
		query += "&name="+name;
	}
	if(sn!=""){
		query+="&sn="+sn;
	}
	if(depid!=""){
		query += "&depid=" + depid;
	}
	if(apply_way!=""){
		query+="&applyway="+apply_way;
	}
	if(mobile!=""){
		query+="&mobile="+mobile;
	}
	var url = basepath+"/list/student.html?tcid="+tcid+"&from=all&pagefn=allPage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_allstudent").load(encodeURI(url+query),function(){
		$.dialog.tips('���ݼ������',1,'tips.gif');
		bindChooseAll("cls_chooseall_all");
		//ѡ��ÿҳ��¼����
		$("#list_allstudent .page_max").change(function(){
			allPage(1);
		});
	});
}

function depPage(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var max = $("#list_assigndep .page_max").val()?$("#list_assigndep .page_max").val():10;
	var url = basepath+"/list/trainclassdep.html?tcid="+tcid+"&from=dep&pagefn=depPage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_assigndep").load(encodeURI(url),function(){
		$.dialog.tips('���ݼ������',1,'tips.gif');
		bindChooseAll("cls_chooseall_dep");
		$("#list_assigndep .page_max").change(function(){
			depPage(1);
		});
	});
}

function assignNumPage(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var max = $("#list_assignnum .page_max").val()?$("#list_assignnum .page_max").val():10;
	var url = basepath+"/list/trainclassdep.html?tcid="+tcid+"&from=num&pagefn=assignNumPage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_assignnum").load(encodeURI(url),function(){
		$.dialog.tips('���ݼ������',1,'tips.gif');
		bindChooseAll("cls_chooseall_num");
		$("#list_assignnum .page_max").change(function(){
			assignNumPage(1);
		});
	});
}

function approvingPage(i){
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var max = $("#list_approving .page_max").val()?$("#list_approving .page_max").val():10;
	var url = basepath+"/list/student.html?tcid="+tcid+"&from=approving&pagefn=approvingPage&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_approving").load(encodeURI(url),function(){
		$.dialog.tips('���ݼ������',1,'tips.gif');
		bindChooseAll("cls_chooseall_approving");
		$("#list_approving .page_max").change(function(){
			approvingPage(1);
		});
		//��׼
		$(".cls_approve").click(function(){
			var id = $(this).attr("sid");
			var ids = [id];
			setStudent(ids,"approve");
		});
		
		//�ܾ�
		$(".cls_reject").click(function(){
			var id = $(this).attr("sid");
			var ids = [id];
			setStudent(ids,"reject");
		});
		
	});
}

//��ʼ������
function init(){
	//�������
	getNum();
	
	//�����б�
	allPage(1);
	depPage(1);
	assignNumPage(1);
	approvingPage(1);
}

//����ѧ����Ϣ��������׼���ܾ���ɾ������
//ids��ѡ�е�checkboxԪ�����飬type�ǲ����������ƣ�����approve��reject��delete
function setStudent(ids,type){
	var url = basepath+"/trainclass/setStudent.html";
	var param= "";
	for(i=0;i<ids.length;i++){
		param += "id="+ids[i]+"&";
	}
	param += "type="+type+"&tcid="+tcid;
	$.ajax({
		url : url,
		type : "post",
		data : encodeURI(param),
		dataType : "json",
		success : function(msg){
			if(msg.code=="checknum"){
				$.dialog.alert(msg.content);
			}else{
				$.dialog.tips("�����ɹ�",2,"tips.gif");
				getNum();
				allPage(1);
				approvingPage(1);
			}
		},
		error : function(){
			$.dialog.tips("��������",2,"tips.gif");
		}
	});
}

//���ò���
function setDepartment(ids,type){
	var url = basepath+"/trainclass/setDepartment.html";
	var param= "";
	if(ids!=null&&ids.length>0){
		for(i=0;i<ids.length;i++){
			param += "id="+ids[i]+"&";
		}
		param += "tcid="+tcid+"&operation="+type;
		$.ajax({
			url : url,
			type : "post",
			data : encodeURI(param),
			dataType : "json",
			success : function(msg){
				if(msg.code=="checknum"){
					$.dialog.alert(msg.content);
				}else{
					$.dialog.tips("�����ɹ�",2,"tips.gif");
					getNum();
					depPage(1);
					assignNumPage(1);
				}
			},
			error : function(){
				$.dialog.tips("��������",2,"tips.gif");
			}
		});
	}
}

//�ı�ָ���������Ƿ�����ӻ���
function changeDepSub(obj,isSub){
	$.dialog.confirm("�Ƿ�ִ�в�����",function(){
		var url = basepath+"/trainclass/setDepartment.html";
		var param = "tcid="+tcid+"&id="+$(obj).attr("id")+"&isSub="+isSub+"&operation=update";
		$.ajax({
			url : url,
			type : "post",
			data : encodeURI(param),
			dataType : "json",
			success : function(msg){
				
				if(msg.code=="checknum"){
					$.dialog.alert(msg.content);
				}else{
				if(isSub==0){
					$(obj).text("��");
					$(obj).attr("onclick","javascript:changeDepSub(this,1)");
				}else{
					$(obj).text("��");
					$(obj).attr("onclick","javascript:changeDepSub(this,0)");
				}
				//�������
				getNum();
				
				//�����б�
				allPage(1);
				depPage(1);
				assignNumPage(1);
				approvingPage(1);
				}
			},
			error : function(){
				$.dialog.tips("��������",2,"tips.gif");
			}
		});
	},function(){});
}


//��ѯ������Ա����������
function getNum(){
	var url = basepath+"/trainclass/getStudentNum.html?r="+Math.random();
	var param = "tcid="+tcid;
	$.ajax({
		url : url,
		type : "get",
		data : param,
		dataType : "json",
		success : function(re){
			$("#num_classnum").text(re.classnum);
			$("#num_all").text(re.all);
			$("#num_direct").text(re.direct);
			$("#num_depnum").text(re.depnum);
			$("#num_dep").text(re.dep);
			$("#num_approved").text(re.approved);
			$("#num_approving").text(re.approving);
			$(".objId").attr("value",re.classnum-re.all);
		},
		error : function(){
			
		}
	});
	
}

//�����Ա������ʾ��Ӧ���б�
function show(i){
	$(".dpnav").children().removeClass("now");
	$(".cls_list").children().hide();
	$(".dpnav").children().eq(i-1).addClass("now");
	$(".cls_list").children().eq(i-1).show();
}