/**
 * 
 */
$(function(){
	$("#standard_pos_jstree").jstree({
		"plugins":["themes","json_data","types","ui","cookies","crrm","dnd"],
		"json_data":{
			"ajax" : {
				"url" : basepath+"/list/pos4jstree.html",
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

	}).bind("select_node.jstree",function(e,data){
		var id = data.rslt.obj.attr("id");
		var type = data.rslt.obj.attr("type");
		var name = data.rslt.obj.attr("name");
		var shortName = data.rslt.obj.attr("shortName");
		var namePath = data.rslt.obj.attr("namePath");
		if(type != "level"){
			ethClick(type,id);
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
});
function ethClick(type,id){
	var url = basepath+"/position/detail.html?pid="+id+"&type="+type+"&r="+Math.random();
	$.dialog.tips('数据加载中...',600,'loading.gif');
	$("#detail_position").load(encodeURI(url),function(){
		$.dialog.tips('数据加载完毕',1,'tips.gif');
	});
	
}

function changeImportType(type){
    $("#importType").attr("value",type);
}

function changeExportType(obj,type){
	$("#importType").attr("value",type);
	var poId = $("#objId").val();
	if(type == "standardPosition"){
		obj.href = basepath + "/position/exportStandardPositionList.html?poId="+poId;
	} else{
		obj.href = basepath + "/position/exportStandardEthnicGroupList.html?poId="+poId;
	}
}

