
/**
* 管理人员列表
*/
var user_id;
var flag; //区分org 1与menu 0的标记
$(function(){
	page(1);
	
	$("#rollco").focus(function(){
		var old = $(this).val();
		if(old == "输入角色名称"){
			$(this).val("");
		}
	});
	
	$("#rollco").blur(function(){
		var old = $(this).val();
		if(old == ""){
			$(this).val("输入角色名称");
		}
	});
	
	$("#searchButton").click(function(){
		page(1);
	});
	
	$("#clearFlush").click(function(){
		$("#authorizePerson_name").val("");
		$("#authorizePerson_id").val("");
	});
	
	$(".chooseperson").click(function(){
		var id = $(this).attr("id");
		var url = basepath+"/dialog/user.html?from=choose&html_name="+id+"_name&html_id="+id+"_id&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	$(".cls_ok").live("click",function(){
		$(".blackall").hide();
	});
	
	//开始日期
	$("#startTimeId").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#endTimeId").datepicker("option","minDate",dt);
		}
	});
	
	//结束日期
	$("#endTimeId").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#startTimeId").datepicker("option","maxDate",dt);
		}
	});
						
	//权限移除
	$("#btn_delete").click(function(){
		var param = $.param($("input:checkbox[name=index]:checked"));
		if(param == null || param == ""){
			alert("请选择删除项");
		}
		else{
			if(confirm("确定要删除选项吗？")){			
				$.ajax({
					url : "deleteStaff.html",
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
						if(data == null){
							alert("删除出错");
						}else{
							page(1);
						}
					},
					error:function(){
						alert("删除出错");
					}
				});
			}
		}
	});	
	
	$(".adminshowtree").live("click",function(){
		var nowflag = $(this).attr("flag");
		flag = nowflag;
		if(flag==1){   //当为机构树时			
			//////////////////////////////////
//			var operateuid = $(this).attr("id"); //从页面获取当前登录用户的id
//			//alert("uid="+operateuid);
//			var rootId;
//			$.ajax({
//				  url : basepath+"/auth/adminshowtree.html",      //请求接口 返回rootId
//				  type : "get",
//				  async: false,
//				  data : "operateuid="+operateuid,
//				  dataTye : "json",
//				  success : function(data){
//					  rootId = $.parseJSON(data.content);
//					  //alert("rootId="+rootId);
//				  },
//				  error:function(){
//					  alert("error");		
//				  }
//			});
			//////////////////////////////////取管辖范围而不是其上级 20130401 LMSWD-2038@顾梅伊帆确认修改 by LTC
			
			var uid = $(this).attr("id");
			var elements = $(".cls_"+uid);
			user_id = uid;
			var ids = new Array();
			var idpaths = new Array();
			for(i=0;i<elements.length;i++){
				var id = $(elements[i]).attr("orgid");
				ids.push(id);
				var idpath = $(elements[i]).attr("idpath").split("/");
				for(j=0;j<idpath.length;j++){
					if(idpath[j]!=id){
						idpaths.push(idpath[j]);
					}
				}
			}
			
			var url = basepath+"/list/org4jstree.html";
			$("#new_jstree_checkbox").jstree({
				"plugins":["themes","json_data","ui","types","checkbox"],
				"json_data":{
					"ajax" : {
						"url" : url,
						"cache":false,
						"data" : function(n){
							return {
								"operation":"",
								"id":n.attr?n.attr("id"):0   //缺省:根节点id
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
					"initially_select" : ids
				},
				"core":{
					"initially_open" : idpaths
				},
				"checkbox":{
					"two_state" : true,
					override_ui : true
				}
			});
		}
		if(flag==0){  //当为菜单树时
			var uid = $(this).attr("id");
			var elements = $(".cls_"+uid);
			user_id = uid;
			var ids = new Array();
			var idpaths = new Array();
			for(i=0;i<elements.length;i++){
				var id = $(elements[i]).attr("mid");
				ids.push(id);
				var idpath = $(elements[i]).attr("idpath").split("/");
				for(j=0;j<idpath.length;j++){
					if(idpath[j]!=id){
						idpaths.push(idpath[j]);
					}
				}
			}
			initMenuCheckTree("#new_jstree_checkbox", ids, idpaths);
		}
	});
	
	//点击确定后添加选中
	$(".treewindowsure").click(function(){
		if(flag==1){  //保存机构
			var param = "&user_id="+user_id;
			//获得树中选中的内容
			$("#new_jstree_checkbox").jstree("get_selected").each(function(i,n){
				param += "&org_id="+n.id;
			});
			var url = basepath+"/auth/saveUserOrg.html";
			$.ajax({
				url: url,
				type : "post",
				data : param,
				dataType : "json",
				success : function(msg){
					page(1);
					$.dialog.tips("操作成功",2,"tips.gif");
				},
				error : function(){
					$.dialog.tips("操作失败",2,"tips.gif");
				}
			});
		}
		if(flag==0){  //保存菜单
			var param = "";
			//获得树中选中的内容
			$("#new_jstree_checkbox").jstree("get_selected").each(function(i,n){
				param += "menu_ids="+n.id + "&";
			});
			if(param!=""){
				param += "&user_id="+user_id;
				var url = basepath+"/auth/saveUserMenu.html";
				$.ajax({
					url: url,
					type : "post",
					data : param,
					dataType : "json",
					success : function(msg){
						page(1);
						$.dialog.tips("操作成功",2,"tips.gif");
					},
					error : function(){
						$.dialog.tips("操作失败",2,"tips.gif");
					}
				});
			}
		}
	});
});

var sign = "";
function orgClick(type,id,name){
	if(type=="dep"){
		sign = 1;
		$("#search_orgDepId").val(id);
		page(1);
		setNav(name);
	}
	else{
		sign = 0;
		$("#search_orgDepId").val(id);
		page(1);
		setNav(name);
	}
}

/**
 * 更新导航
 */
function setNav(name){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+name+"</li>");
}

function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var query = "&ischilddep=0";
	var max = $("#list_managestafflist .page_max").val()?$("#list_managestafflist .page_max").val():10;
	var orgDepId = $("#search_orgDepId").val();
	if(orgDepId != null && orgDepId !=""){
		query += "&orgDepId="+orgDepId;
		query += "&sign="+sign;
	}
	else{
		var orgDepOriId = $("#orgDepOriId").val();
		query += "&orgDepId="+orgDepOriId;
		query += "&sign=0";
	}
	var roleId = $("#rollco").val();
	if(roleId != null && roleId != ""){
		if(roleId == "输入角色名称"){
			roleId = "";
		}
		query += "&roleId="+roleId;
	}
	var sn = $("#snId").val();
	if(sn != null && sn != ""){
		query += "&sn="+sn;
	}
	var name = $("#nameId").val();
	if(name != null && name != ""){
		query += "&name="+name;
	}
	var authorizePerson = $("#authorizePerson_id").val();
	if(authorizePerson != null && authorizePerson != ""){
		query += "&authorizePerson="+authorizePerson;
	}
	var startTime = $("#startTimeId").val();
	if(startTime != null && startTime != ""){
		query += "&startTime="+startTime;
	}
	var endTime = $("#endTimeId").val();
	if(endTime != null && endTime != ""){
		query += "&endTime="+endTime;
	}

	var url = basepath+"/list/auth/manageStaffList.html?pagefn=page&page="+i+"&max="+max+"&r="+Math.random();
	$("#list_managestafflist").load(encodeURI(url+query),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
		ununiformedChooseAll("cls_chooseall");
		//选择每页记录数量
		$("#list_managestafflist .page_max").change(function(){
			page(1);
		});
	});
}
