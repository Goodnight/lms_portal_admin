$(function(){
	
	
	$("input[name=isSave]").live("click", function() {
		
		var isIndex = $("input[name=isSave]").index(this);
		if(isIndex == 0){
			swfu.setUploadURL(basepath+"/user/importAddList.html");
		} else {
			swfu.setUploadURL(basepath+"/user/importUpdateList.html");
		}
	});
	

	/**
	 * 机构和部门的JSTree
	 */
	$("#org_jstree").jstree({
		"plugins":["themes","json_data","types","ui"],
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
		"types" : {
			"types" : {
				"pos" : {
					"valid_children" : "none",
					"icon" : {
						"image" : basepath+"/images/file.png"}
				},
				"dep" : {
					"valid_children" : "none",
					"icon" : {
						"image" : basepath+"/images/file.png"}
				}
			}
		},
		"ui":{
			"initially_select":opener
		},
		"core":{
			"initially_open":idarrys
		}
	}).bind("select_node.jstree",function(e,data){
		var id = data.rslt.obj.attr("id");
		var type = data.rslt.obj.attr("type");
		var name = data.rslt.obj.attr("name");
		var shortName = data.rslt.obj.attr("shortName");
		var namePath = data.rslt.obj.attr("namePath");
		var idpath = data.rslt.obj.attr("idpath");
		orgClick(type,id,name,shortName,namePath,idpath);
	});
	
	$("#link_new").click(function(){
		window.location.href = basepath + "/user/new.html?depid="+$("#search_orgid").val();;
	});
	
	
	//删除人员
	$("#btn_delete").click(function(){
		if($("input:checkbox[name=id]:checked").length>0){
			$.dialog.confirm("确定要删除选项吗？",function(){
				var param = $.param($("input:checkbox[name=id]:checked"));
				$.ajax({
					url : "delete.html",
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
						if(data==null||data.code=="fail"){
							$.dialog.tips("删除出错",2,"tips.gif");
						}else{
							$.dialog.tips("删除成功",2,"tips.gif");
							page(1);
						}
					},
					error:function(){
						$.dialog.tips("删除出错",2,"tips.gif");
					}
				});
			},function(){
				
			});
		}else{
			$.dialog.alert("请选择删除项！");
		}
	});
	
	//高级搜索
	$(".searchbutton").click(function(){
		page(1);
	});
	
	$("input[name=ischilddep]").click(function(){
		page(1);
	});
	
	$(".cls_resetpwd").live("click",function(){
		var uid = $(this).attr("uid");
		var usn = $(this).attr("usn");
		$.dialog.confirm("确定要重置密码吗？",function(){
			$.ajax({
				url : "resetpwd.html",
				type : "POST",
				data : "uid="+uid+"&usn="+usn,
				dataType : "json",
				success : function(data){
					if(data==null){
						$.dialog.tips("重置失败",2,"tips.gif");
					}else{
						$.dialog.tips("重置成功",2,"tips.gif");
					}
				},
				error:function(){
					$.dialog.tips("重置失败",2,"tips.gif");
				}
			});
		},function(){});
		
	});
	
	$(".cls_changestatus").live("click",function(){
		var uid = $(this).attr("uid");
		var status = $(this).attr("status"); //当前状态
		var that = this;
		if("0"==status){
			status = "1";
		}else{
			status = "0";
		}
		
		$.dialog.confirm("确定要改变用户状态吗？",function(){
			$.ajax({
				url : "changestatus.html",
				type : "POST",
				data : "uid="+uid+"&status="+status,
				dataType : "json",
				success : function(data){
					if(data==null){
						$.dialog.tips("修改失败",2,"tips.gif");
					}else{
						if("0"==status){
							$(that).attr("status","0");
							$(that).text("无效");
						}else{
							$(that).attr("status","1");
							$(that).text("有效");
						}
						$.dialog.tips("修改成功",2,"tips.gif");
					}
				},
				error:function(){
					$.dialog.tips("修改失败",2,"tips.gif");
				}
			});
		},function(){});
	});
	
/***LuChao 修改SN **/	
	$(".cls_updateSn").live("click",function(){
		var uid = $(this).attr("uid");
		var usn = $("#sn_id_"+uid).text();
		var html = "";
		html +='<table border="0" cellspacing="0" cellpadding="0">';
		html +='<tr><td class="taR">原SN：</td><td class="taL">'+usn+'</td></tr>';
		html +='<tr><td class="taR">新SN：</td><td class="taL"><input id="sn_up" name="sn_up" type="text" class="input" value="E" /></td></tr>';
		html +='<tr><td class="taR"></td><td class="taL" id="sn_error"></td></tr>';
		html +='</table>';

		$.dialog({
		    lock: true,
		    title: '修改SN',
		    content: html,
		    ok: function () {
		    	updateSn(uid);
		        return true;
		    }
		});
	});
	
});


function export_user(){
	 
	var orgid = $("#search_orgid").val();
	var sn = $("#sn").val();
	var name = $("#name").val();
	var status = $("#status").val();
	var emp = $("#empNature").val();
	var mobile = $("#mobile").val();
	var mail = $("#mail").val();//邮箱
	var cate = $("#cate").val();//身份证
	var ischilddep = $("input[name='ischilddep']:checked").val();
	var query = "";
	if(sn != ""){
		query += "&sn="+sn;
	}
	if(orgid!=""){
		query += "&orgid=" + orgid;
	}
	if(status != ""){
		query += "&status="+status;
	}
	if(name != ""){
		query += "&name="+name;
	}
	if(emp!=""){
		query += "&emp="+emp;
	}
	if(mobile!=""){
		query+="&mobile="+mobile;
	}
	if(mail!=""){
		query += "&mail="+mail;
	}
	if(cate!=""){
		query += "&cate="+cate;
	}
	if(ischilddep!=""){
		query += "&ischilddep="+ischilddep;
	}
	
	loadingDataStart();
	var countUrl = basepath + "/user/exportCount.html?r="+Math.random();
	var listUrl = basepath + "/user/exportList.html?r="+Math.random();
	postData(encodeURI(countUrl+query),encodeURI(listUrl+query));
}


function export_count(){
	var orgid = $("#search_orgid").val();
	var sn = $("#sn").val();
	var name = $("#name").val();
	var status = $("#status").val();
	var emp = $("#empNature").val();
	var mobile = $("#mobile").val();
	var ischilddep = $("input[name='ischilddep']:checked").val();
	var query = "";
	if(sn != ""){
		query += "&sn="+sn;
	}
	if(orgid!=""){
		query += "&orgid=" + orgid;
	}
	if(status != ""){
		query += "&status="+status;
	}
	if(name != ""){
		query += "&name="+name;
	}
	if(emp!=""){
		query += "&emp="+emp;
	}
	if(mobile!=""){
		query+="&mobile="+mobile;
	}
	if(ischilddep!=""){
		query += "&ischilddep="+ischilddep;
	}
	var url = basepath+"/list/exportUserCount.html?r="+Math.random();
	$.post(encodeURI(url+query), function(date){
		if(date>=10000){
			$("#loading img").attr("src",basepath+"/images/alert.gif");
			$("#loading span").text("检索的范围过大，超过导出限制，请缩小范围后再导出");
		}else{
			export_page();
		}
	});
}

function export_page(){
	var orgid = $("#search_orgid").val();
	var sn = $("#sn").val();
	var name = $("#name").val();
	var status = $("#status").val();
	var emp = $("#empNature").val();
	var mobile = $("#mobile").val();
	var ischilddep = $("input[name='ischilddep']:checked").val();
	var query = "";
	if(sn != ""){
		query += "&sn="+sn;
	}
	if(orgid!=""){
		query += "&orgid=" + orgid;
	}
	if(status != ""){
		query += "&status="+status;
	}
	if(name != ""){
		query += "&name="+name;
	}
	if(emp!=""){
		query += "&emp="+emp;
	}
	if(mobile!=""){
		query+="&mobile="+mobile;
	}
	if(ischilddep!=""){
		query += "&ischilddep="+ischilddep;
	}
	var url = basepath+"/list/exportUser.html?r="+Math.random();
	$.post(encodeURI(url+query), function(date){
		$("#loading").hide();
    	$("#downloada").attr("href",basepath+"/download/"+date);
    	$("#downloaddiv").show();
	});
}

/**
 * 分页
 */
function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var max = $("#list_user .page_max").val()?$("#list_user .page_max").val():10;
	var orgid = $("#search_orgid").val();
	if(null==orgid || orgid==""){
		orgid = $("#orgDepOriId").val();
	}
	var sn = $("#sn").val();
	var name = $("#name").val();
	var status = $("#status").val();
	var emp = $("#empNature").val();
	var mobile = $("#mobile").val();
	var mail = $("#mail").val();//邮箱
	var cate = $("#cate").val();//身份证
	var ischilddep = $("input[name='ischilddep']:checked").val();
	var query = "";
	if(sn != ""){
		query += "&sn="+sn;
	}
	if(orgid!=""){
		query += "&orgid=" + orgid;
	}
	if(status != ""){
		query += "&status="+status;
	}
	if(name != ""){
		query += "&name="+name;
	}
	if(emp!=""){
		query += "&emp="+emp;
	}
	if(mobile!=""){
		query+="&mobile="+mobile;
	}
	if(ischilddep!=""){
		query += "&ischilddep="+ischilddep;
	}
	if(mail!=""){
		query += "&mail="+mail;
	}
	if(cate!=""){
		query += "&cate="+cate;
	}
	var url = basepath+"/list/user.html?from=user_list&pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_user").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		//全选
		bindChooseAll("cls_chooseall_user");
		//变更每页记录数量
		$("#list_user .page_max").change(function(){
			page(1);
		});
	});
	
}

/**
 * 点击公司树节点事件
 * @param type	节点类型：公司 or 部门
 * @param id		公司或者部门id
 * @param name 公司或者部门名称
 */
function orgClick(type,id,name,a,b,idpath){
	if(type == "dep"){
		$("#link_new").show();
	}else{
		$("#link_new").hide();
	}
	$("#search_orgid").val(id);
	$('#old_dep').val(idpath);
	page(1);
}
function updateSn(uid){
	var sn = $("#sn_up").val();
	$.ajax({
		url : "updateSn.html",
		type : "POST",
		data : "uid="+uid+"&usn="+sn,
		dataType : "json",
		success : function(data){
			if(data==0){
				$.dialog.tips("重置失败",2,"tips.gif");
			}else if(data==2){
				alert("SN重复，请重新设置");
			}else{
				$.dialog.tips("重置成功",2,"tips.gif");
				$("#sn_id_"+uid).text(sn);
			}
		},
		error:function(){
			$.dialog.tips("重置失败",2,"tips.gif");
		}
	});
}
/*function changeSn(){
	var sn_up = $("#sn_up").val();
	var sn_up2 = $("#sn_up2").val();
	if(sn_up != sn_up2){
		$("#sn_error").text("<span color='red'>两次输入SN不一样<span/>");
	}
}*/

