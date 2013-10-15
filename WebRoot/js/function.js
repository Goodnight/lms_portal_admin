/**
 * 
 */
$(function(){
	//日历选择控件
	//将需要设置为日历控件的class加入cls_date类名
	$.datepicker.setDefaults( $.datepicker.regional[ "zh-CN" ] );
	$(".cls_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd"
	});
	$(".ui-datepicker-trigger").addClass("ml13");
	$(".ui-datepicker-trigger").addClass("vm");	
	
	//js validate 只能输入字母和数字
	jQuery.validator.addMethod("sn", function(value, element) { 
		  return this.optional(element) || /[_a-zA-Z]/.test(value) || !isNaN(value); 
		}, "请输入数字和字母");
	
	//查询条件验证
	$("#query_form").validate({
		rules : {
			sn : {
				sn : true
			},
			dialog_search_sn : {
				sn : true
			},
			search_user_sn : {
				sn : true
			},
			mobile : {
				number : true
			}
		},
		messages : {
			mobile : {
				number : "请输入数字"
			}
		}
	});
	
	/**
	 * 关闭弹窗
	 */
	$(".closebutton,#dialog .closed").live("click",function(){
		$("#dialog").hide();
	});

//	$("#importButton").live("click",function(){
////		$("#dialogImport").show();
//		$("#dialogImport").css('visibility', 'visible');
//	});
	
	$(".closeDownLoadDialog,.windowDownLoadDialog").live("click",function(){
		$("#dialogDownLoad").hide();
	});
	
	$(".closeImportDialog,.windowImportDialog").live("click",function(){
		$("#dialogImport").css('visibility', 'hidden');
	});
	
	$(".closeResultDialog,.windowResultDialog").live("click",function(){
		$("#dialogResult").hide();
	});
	/**
	 * 关闭窗口
	 */
	$(".cls_close_window").click(function(){
		$.dialog.confirm("保存成功，是否关闭窗口?",function(){
			window.close();
		},function(){});
	});
	
	jQuery.validator.addMethod("isDate", function(value, element){
		var ereg = /^(\d{1,4})(-|\/)(\d{1,2})(-|\/)(\d{1,2})$/;
		var r = value.match(ereg);
		if (r == null) {
			return false;
		}
		var d = new Date(r[1], r[3] - 1, r[5]);
		var result = (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[5]);
		return this.optional(element) || (result);
	}, "请输入正确的日期");
	
	/**
	 * 机构和部门的JSTree
	 */
	$("#org_jstree").jstree({
		"plugins":["themes","json_data","types","ui","cookies"],
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
			"initially_select":userdepid
		},
		"core":{
			"initially_open":userdeppath
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
	
	/**
	 * 公司树
	 */
	$("#org_jstree_org").jstree({
		"plugins":["themes","json_data","types","ui","cookies"],
		"json_data":{
			"ajax" : {
				"url" : basepath+"/list/org4jstree.html",
				"cache":false,
				"data" : function(n){
					return {
						"operation":"",
						"type" : "2",
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
			"initially_select":userdepid
		},
		"core":{
			"initially_open":userdeppath
		}
	}).bind("select_node.jstree",function(e,data){
		var id = data.rslt.obj.attr("id");
		var idPath = data.rslt.obj.attr("idPath");
		var type = data.rslt.obj.attr("type");
		var name = data.rslt.obj.attr("name");
		var shortName = data.rslt.obj.attr("shortName");
		var namePath = data.rslt.obj.attr("namePath");
		orgClick(type,id,idPath,name,shortName,namePath);
	});
	
	/**
	 * 部门树
	 */
	$("#org_jstree_dep").jstree({
		"plugins":["themes","json_data","types","ui","cookies"],
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
			"initially_select":userdepid
		},
		"core":{
			"initially_open":userdeppath
		}
	}).bind("select_node.jstree",function(e,data){
		var id = data.rslt.obj.attr("id");
		var type = data.rslt.obj.attr("type");
		var name = data.rslt.obj.attr("name");
		var shortName = data.rslt.obj.attr("shortName");
		var namePath = data.rslt.obj.attr("namePath");
		orgClick(type,id,name,shortName,namePath);
	});
	
	//指定部门中的树带checkbox
	$("#org_jstree_checkbox").jstree({
		"plugins":["themes","json_data","ui","types","checkbox"],
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
			"initially_select":userdepid
		},
		"core":{
			"initially_open":userdeppath
		},
		"checkbox":{
			"two_state":true
		}
	});
	
	/**
	 * 族群和岗位的JSTree
	 */
	$("#eth_jstree").jstree({
		"plugins":["themes","json_data","types","ui","cookies","crrm","dnd"],
		"json_data":{
			"ajax" : {
				"url" : basepath+"/list/pos4jstree.html",
				"cache":false,
				"data" : function(n){
					return {
						"operation":"",
						"id":n.attr?n.attr("id"):0,
						"namePath":n.attr?n.attr("namePath"):0
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
				}
			}
		},
		"core":{
			"initially_open":rootPosition
		},
		"crrm" : { 
			"move" : {
				"check_move" : function (m) { 
					var p = this._get_parent(m.o);
					if(!p) return false;
					p = p == -1 ? this.get_container() : p;
					if(p === m.np) return true;
					if(p[0] && m.np[0] && p[0] === m.np[0]) return true;
					return false;
				}
			}
		},
		"dnd" : {
			"drop_target" : false,
			"drag_target" : false
		}
	}).bind("select_node.jstree",function(e,data){
		var id = data.rslt.obj.attr("id");
		var type = data.rslt.obj.attr("type");
		var name = data.rslt.obj.attr("name");
		var namePath = data.rslt.obj.attr("namePath");
		ethClick(type,id,name,namePath);
	});
	
	/**
	 * 基准岗位层级树
	 */
	$("#pos_level_tree").jstree({
		"plugins":["themes","json_data","types","ui","cookies","crrm","dnd"],
		"json_data":{
			"ajax" : {
				"url" : basepath+"/list/postreelevel.html",
				"cache":false,
				"data" : function(n){
					return {
						"operation":"",
						"id":n.attr?n.attr("id"):0,
						"type":n.attr?n.attr("type"):''
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
				}
			}
		},
		"crrm" : { 
			"move" : {
				"check_move" : function (m) { 
					var p = this._get_parent(m.o);
					if(!p) return false;
					p = p == -1 ? this.get_container() : p;
					if(p === m.np) return true;
					if(p[0] && m.np[0] && p[0] === m.np[0]) return true;
					return false;
				}
			}
		}
	}).bind("loaded.jstree",function(e,data){ 
		   data.inst.select_node($(this).find("li:first")); 
	       data.inst.open_node($(this).find("li:first")); 
	}).
	bind("select_node.jstree",function(e,data){
		var id = data.rslt.obj.attr("id");
		var type = data.rslt.obj.attr("type");
		var name = data.rslt.obj.attr("name");
		var namePath = data.rslt.obj.attr("namePath");
		if(type != "level"){
		ethClick(type,id,name,namePath);
	    }
 }).bind("move_node.jstree", function (e, data) {
		data.rslt.o.each(function (i) {
			$.ajax({
				async : false,
				type: 'POST',
				url: basepath+"/position/move.html",
				data : { 
					"operation" : "move_node", 
					"id" : $(this).attr("id").replace("node_",""), 
					"ref" : data.rslt.cr === -1 ? 1 : data.rslt.np.attr("id").replace("node_",""), 
					"position" : data.rslt.o.index() + i,
					"oldPosition" : $(this).attr("position")
				},
				success : function (r) {
					if(r==null) {
						$.jstree.rollback(data.rlbk);
					}
					else {

					}
					$("#analyze").click();
				}
			});
		});
	});

	//20130424 每个页面加载版本信息
//	$.ajax({
//		type: 'GET',
//		url: basepath+"/footer.html",
//		dataType : "HTML",
//		success : function (html) {
//			$("body").append(html);
//		}
//	});
});

/**
 * 知识分类的JSTree
 */
$("#kno_jstree").jstree({
	"plugins":["themes","json_data","types","ui","cookies"],
	"json_data":{
		"ajax" : {
			"url" : basepath+"/knowledge/knowledge4jstree.html",
			"cache":false,
			"data" : function(n){
				return {
					"operation":"",
					"id":n.attr?n.attr("id"):"root_0",
							"name":n.attr?n.attr("name"):0,
									"namePath":n.attr?n.attr("name"):0,
											"idPath":n.attr?n.attr("idPath"):0
											
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
	var type = data.rslt.obj.attr("type");
	var name = data.rslt.obj.attr("name");
	var namePath = data.rslt.obj.attr("namePath");
	var idPath = data.rslt.obj.attr("idPath");
	orgClick(type,id,idPath,name,namePath);
});

/*
$("#kno_jjjstree").jstree({
	"plugins":["themes","json_data","types","ui","cookies"],
	"json_data":{
		"ajax" : {
			"url" : basepath+"/knowledge/knowledge4jstree.html",
			"cache":false,
			"data" : function(n){
				return {
					"operation":"",
					"id":n.attr?n.attr("id"):"root_0",
							"name":n.attr?n.attr("name"):0,
									"namePath":n.attr?n.attr("name"):0,
											"idPath":n.attr?n.attr("idPath"):0
											
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
	},
	"ui":{
		"initially_select":knoRootId //默认选中根节点.
	}
}).bind("select_node.jstree",function(e,data){
	var id = data.rslt.obj.attr("id");
	var type = data.rslt.obj.attr("type");
	var name = data.rslt.obj.attr("name");
	var namePath = data.rslt.obj.attr("namePath");
	var idPath = data.rslt.obj.attr("idPath");
	knoClick(type,id,idPath,name,namePath);
}).bind("init.jstree",function(){  //加载知识分类树的初始化事件处理.
	selectBottonClick(1); //查询根节点"全部"的分页数据.
});
*/
/**
 * 设置全选,并将样式设置成uniform的样式
 * cls	是触发选项的class，子选项的class是触发选项的value
 */
function bindChooseAll(cls,notUniform){
	if(!notUniform){
		$("."+cls).uniform();		
	}
	var v = $("."+cls).val();
	if(!notUniform){
		$("."+v).uniform();
	}
	$("."+cls).click(function(){
		if($(this).attr("checked")){
			$("."+v).attr("checked",true);
		}else{
			$("."+v).attr("checked",false);
		}
		if(!notUniform){
			$.uniform.update();
		}
	});
}

/**
 * 设置全选，并不采用uniform样式
 * @param cls
 */
function ununiformedChooseAll(cls){
	var v = $("."+cls).val();

	$("."+cls).click(function(){
		if($(this).attr("checked")){
			$("."+v).attr("checked",true);
		}else{
			$("."+v).attr("checked",false);
		}
	});
}

/**
 * 生成带checkbox的树
 * @param id 需要生成树的DIV的id; 
 * @param selectedIds 需要被选中的id数组;
 * @param openIds 需要打开的id数组
 * @param dataType 树中请求数据的类型: 部门：org/dep, 岗位族群：eth/post, 知识分类：kno;
 */
function initCheckTree( id, selectedIds, openIds,dataType){
	var url = basepath+"/list/org4jstree.html";
	var rootid= "0";
	if("org" == dataType || "dep" == dataType){
		url = basepath+"/list/org4jstree.html";
	}
	if("eth" == dataType){
		url = basepath+"/list/eth4jstree.html";
	}
	if("pos" == dataType ){
		url = basepath + "/list/pos4jstree.html";
	}
	if("kno" == dataType){
		rootid = "root_0";
		url = basepath+"/knowledge/knowledge4jstree.html";
	}
	if("stumenu" == dataType){
		url = basepath + "/list/menu/stulist.html";
	}
	$(id).jstree({
		"plugins":["themes","json_data","ui","types","checkbox"],
		"json_data":{
			"ajax" : {
				"url" : url,
				"cache":false,
				"data" : function(n){
					return {
						"operation":"",
						"id":n.attr?n.attr("id"):rootid
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
			"initially_select" : selectedIds
		},
		"core":{
			"initially_open" : openIds
		},
		"checkbox":{
			"two_state" : true,
			override_ui : true
		}
	});
}

/**
 * 生成树
 * @param id 需要生成树的DIV的id; 
 * @param selectedIds 需要被选中的id数组;
 * @param openIds 需要打开的id数组
 * @param dataType 树中请求数据的类型: 部门：org/dep, 岗位：p4o, 基准岗位：pos, 知识分类：kno;
 * @param callback 回调函数 args：type，id，name
 */
function initTree( id, selectedIds, openIds,dataType,callback){
	var url;
	var type = "";
	var rootid = "-1";
	if("org" == dataType || "dep" == dataType){
		url = basepath+"/list/org4jstree.html";
	}
	if("org_only" == dataType){
		url = basepath+"/list/org4jstree.html";
		type = "2";
	}
	if("dep_only" == dataType){
		url = basepath+"/list/org4jstree.html";
		type = "3";
	}
	if("p4o" == dataType ){
		url = basepath+"/list/pos4org.html";
	}
	if("pos" == dataType ){
		url = basepath + "/list/pos4jstree.html";
	}
	if("kno" == dataType){
		rootid = "root_0";
		url = basepath+"/knowledge/knowledge4jstree.html";
	}
	$(id).jstree({
		"plugins":["themes","json_data","types","ui","cookies"],
		"json_data":{
			"ajax" : {
				"url" : url,
				"cache":false,
				"data" : function(n){
					return {
						"operation":"",
						"type" : type,
						"id":n.attr?n.attr("id"):rootid
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
			"initially_select" : selectedIds
		},
		"core":{
			"initially_open" : openIds
		}
	}).bind("select_node.jstree",function(e,data){
		var id = data.rslt.obj.attr("id");
		var type = data.rslt.obj.attr("type");
		var name = data.rslt.obj.attr("name");
		var namePath = data.rslt.obj.attr("namePath");
		callback(type,id,name,namePath);
	});
}


//针对菜单树 type:menu
function initMenuCheckTree( id, selectedIds, openIds){
//	alert(selectedIds);
//	alert(openIds);
	var url = basepath+"/list/menu4jstree.html";
	$(id).jstree({
		"plugins":["themes","json_data","ui","checkbox"],
		"json_data":{
			"ajax" : {
				"url" : url,
				"cache":false,
				"data" : function(n){
					return {
						"operation":"",
						"id":n.attr?n.attr("id"):0
					};
				}
			}
		},
		"ui":{
			"initially_select" : selectedIds
		},
		"core":{
			"initially_open" : openIds
		},
		"checkbox":{
			override_ui : true
		}
	});
}

/**
 * 添加多选框
 * @param div_id	用于存放多选框的div的id
 * @param input_name 多选框中存放需要提交的数据的input的name,后台通过这个name获取值
 * @param name 多选框显示的名称：如部门名称、岗位名称、人员名称
 * @param id 多选框的值，即存放在input中的value：如部门id，岗位id，人员id
 */
function addChoosedItem(div_id,input_name,name,id){
	var mm=$("#"+div_id).find("input[name='"+input_name+"']");
	for(var i=0;i<mm.length;i++){
		var mm_key=$(mm).eq(i).val();
		if(id == mm_key){
			return false;
		}
	}
	$("#"+div_id).append('<label class="speciallabel">'
			+name
			+'<input type="hidden" name="'+input_name+'" value="'+id+'"/>'
			+'<input type="hidden" name="'+input_name+'_name" value="'+name+'"/>'
			+'<a href="#;" class="ml6">'
			+'<img src="'+basepath +'/images/deletegreen.gif" /></a></label>');
}


/**
 * 判断是否登录，如果没有登录则调用返回的callback脚本
 */


function openWindow(file) {

	$("#filepath").attr("value","");
	validateForm();
	var addUrl=basepath+"/template/"+file;
	$("#downLoad").attr("href",addUrl);
	$("#dialogImport").css('visibility', 'visible');
}

function checkLogin(data){
	if(data.notlogin){
		eval(data.callback);
	}
}
window.onerror = function(){
  return true;
};

function changeManageOrg(obj){
	var orgId = $(obj).val();
	$.ajax({
		url: basepath+"/changeManageOrg.html?orgId="+orgId+"&r="+Math.random(),
		type : "get",
		success :function(re){
			window.location.reload();
		}
	});
}