/**
 * 
 */
var orgId ;
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
	$(".btn_clean").click(function(){
		window.location = basepath + "/statistic/trainclass.html";
	});
});

function orgClick(type, id, name,shortName,namePath,idpath){
	$("#search_depidpath").val(idpath);
	$("#search_depid").val(id);
	$("#search_depname").val(name);
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

$('#btn_trainclassform_submit').on('click', function () {
	var trainTSpId_obj = $('#trainTSpId');
	var trainTSpName_obj = $('#trainTSpName');
	trainTSpName_obj.val(trainTSpId_obj.find("option:selected").text());
	
	var levelSpid_obj = $('#levelSpid');
	var levelSpName_obj = $('#levelSpName');
	levelSpName_obj.val(levelSpid_obj.find("option:selected").text());
	
	var waySpId_obj = $('#waySpId');
	var waySpName_obj = $('#waySpName');
	waySpName_obj.val(waySpId_obj.find("option:selected").text());

	var suborg_obj = document.getElementsByName("suborg");
	var i = 0;
	for(; i < suborg_obj.length; i++){ if(suborg_obj[i].checked){ break; } };
	$('#sub_org').val(suborg_obj[i].value);

	var trainCName=$('#trainCName').val();
	var d = $('#trainclassForm').serialize();
	var url = 'trainclass/addreport.html';
	
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
		if(orgId==""){
			alert("请先选择机构！");
		}else{
			$.post(url, d, function(data) {
				var urlarray=d.split("&");
				var pos=urlarray[0].indexOf("=");
				if(urlarray[0].substring(pos+1)!=""){				
					if(data=='1'){
						alert('添加成功！');
						page(1);
					}else{
						alert("添加失败！请重新添加！");
					}
				}else{
					alert("请先选择机构！");
				}
			});
		}
	}
});

$('#btn_delform_submit').on('click', function () {
	var d = $('#delForm').serialize();
	var url = 'trainclass/delreport.html';
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

$("#trainclass_pager .page_max").change(function(){
	page(1);
});


function page(i){
	$.dialog.tips('数据加载中...',600,'loading.gif');
	var page_max = $("#trainclass_pager .page_max").val();
	var max = page_max ? page_max : 10;

	var url = basepath + "/statistic/trainclass.html";

	var form = $('#pagerForm');
	form.attr('action', url);
	form.find('#max').val(max);
	form.find('#page').val(i);
	form.find('#orgId').val(orgId);
	
	form.submit();
}		