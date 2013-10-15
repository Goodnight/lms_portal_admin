
$(function(){
	orgClick("org",orgid);
});

/**
 * 机构树点击事件
 */
function orgClick(type,id){
	
	var url = "";
	url = basepath+"/organization/detail.html?orgid="+id+"&r="+Math.random();
		
	$.dialog.tips('数据加载中...',600,'loading.gif');
	$("#detail_org").load(encodeURI(url),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
	});
	
}

function exportOnclick(search_orgId){
	
	$("#branch").hide();
	$("#downloaddiv").hide();
	$("#loading img").attr("src",basepath+"/images/loading.gif");
	$("#loading span").text("正在导出中，请稍后");
	$("#loading").show();
	if(search_orgId == "9002"){
		export_department(9002);
	} else {
		export_department(search_orgId);
	}
}

$(".chooseleadout").live("click", function() {
	var search_orgId = $(this).attr("deptId");
	exportOnclick(search_orgId);
});

function export_list(){
	var obj = $("input[name='objId']");
	var search_orgId = $(obj[0]).val();
	var type = $(obj[1]).val();
	if(type==0){
		$("#loading").hide();
		$("#branch").show();
	} else{
		export_department(search_orgId);
	}
}

function export_department(search_orgId){
	
	var url = basepath+"/list/exportOrganizationList.html?orgId="+search_orgId;
	$.post(encodeURI(url), function(date){
		$("#loading").hide();
    	$("#downloada").attr("href",basepath+"/download/"+date);
    	$("#downloaddiv").show();
	});
}

/**
 * 所有的机构和部门的JSTree
 */
$("#org_jstree_all").jstree({
	"plugins":["themes","json_data","types","ui","cookies"],
	"json_data":{
		"ajax" : {
			"url" : basepath+"/list/org4jstree.html",
			"cache":false,
			"data" : function(n){
				return {
					"operation":"",
					"type":"1",
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
		"initially_select":9002
	},
	"core":{
		"initially_open":9002
	}	
}).bind("select_node.jstree",function(e,data){
	var id = data.rslt.obj.attr("id");
	var type = data.rslt.obj.attr("type");
	orgClick(type,id);
});