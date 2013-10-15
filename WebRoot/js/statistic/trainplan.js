/**
 * 
 */
var orgId ;
var year;
var name;
var planType;
var suborg;
var flag;
function SetCookie(name,value)//
{
    var Days = 30; //此 cookie 将被保存 30 天
    var exp  = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name)        
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return unescape(arr[2]); return null;

}
function deleteCookie(name) 
{ 
 	 var exp = new Date();
     exp.setTime(exp.getTime() - 1);
     var cval=getCookie(name);
     if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
} 
if(flag!=1){
	SetCookie("jstree_select","");
}
if(orgId!=""){
var suborg_value=getCookie("suborg_value");
$(":radio[name='suborg'][value="+suborg_value+"]").attr("checked",true);
$("#org_new_jstree").jstree({
	"plugins":["themes","json_data","types","ui","cookies"],
	"themes":{"url":basepath+"/css/style.css"},
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
}else{
$("#org_new_jstree").jstree({
	"plugins":["themes","json_data","types","ui"],
	"themes":{"url":basepath+"/css/style.css"},
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

}

$(function(){
	
	$("#nameid").focus(function(){
		var old = $(this).val();
		if(old == "输入培训计划的名称"){
			$(this).val("");
		}
	});
	
	$("#nameid").blur(function(){
		var old = $(this).val();
		if(old == ""){
			$(this).val("输入培训计划的名称");
		}
	});
	
});

function orgClick(type, id, name,shortName,namePath,idpath){
	$("#search_orgid").val(id);
	if (id !== orgId) {
		setNav(name);
		orgId = id;
		SetCookie("suborg_value",$("input[name='suborg']:checked").val());
		SetCookie("jstree_select",id);
		page(1);
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

