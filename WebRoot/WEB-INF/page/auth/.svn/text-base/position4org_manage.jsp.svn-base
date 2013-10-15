<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>集团/省岗位管理</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
	<div class="blackall hidden">&nbsp;</div>
	<div id="dialog" class="hidden">
		<div class="blackall">&nbsp;</div>
		<div class="newwindow">
			<div class="taR">
				<a href="javascript:;"><img class="png_bg closebutton"
					src="${basepath }/images/close.png" width="40" height="40" /></a>
			</div>
			<div id="dialog_content" class="cl scroll"></div>
		</div>
	</div>
	<div class="container">
		<!-- 导入头部文件 -->
		<jsp:include page="/WEB-INF/page/include/header.jsp" />
		<div class="cl">
			<div class="newright">
				<div class="newrightco">
					<div class="listpagenav">
						<!-- 页面导航 -->
						<div class="breadCrumbHolder pf">
							<div class="breadCrumb reHeight" id="breadCrumb3">
								<div class="z">
									<ul>
										<li class="first"><a href="${basepath }/index.html">首页</a></li>
										<li><a href="#">基础数据</a></li>
										<li class="last">集团/省岗位管理</li>
									</ul>
								</div>
								<div class="y"></div>
							</div>
						</div>
					</div>
					<div class="reHeight">
						<div class="newmain">
							<div class="newmainco">
								<div id="detail_position">&nbsp;</div>
							</div>
						</div>
						<div class="newlefttree">
							<div class="pftree">
								<ul class="listnav reHeight">
									<li class="now">岗位树</li>
									<li>层级树</li>
								</ul>
								<div>
									<div>
										<div id="pos_jstree"></div>
									</div>
									<div class="hidden">
										<div id="pos4org_level_tree"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="extra">
							<h3>
								<div class="extraimg"></div>
								<div class="extraimg extraimon"></div>
								<div class="extraimg extraimg2"></div>
								<div class="extraimg extraimon2"></div>
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div class="newleft">
				<!-- 导入左侧导航 -->
				<c:set var="menu_sn" value="3" scope="request"></c:set>
				<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
			</div>
		</div>

	</div>
	<jsp:include page="/WEB-INF/page/include/script.jsp" />
	<jsp:include page="/WEB-INF/page/include/download.jsp"></jsp:include>
	<script type="text/javascript">
     

	$(function(){
		$("#pos_jstree").jstree({
			"plugins":["themes","json_data","types","ui","cookies","crrm","dnd"],
			"json_data":{
				"ajax" : {
					"url" : basepath+"/list/pos4org.html",
					"cache":false,
					"data" : function(n){
						return {
							"operation":"",
							"id":n.attr?n.attr("id"):-1
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
		}).bind("select_node.jstree",function(e,data){
			var id = data.rslt.obj.attr("id");
			var type = data.rslt.obj.attr("type");
			var name = data.rslt.obj.attr("name");
			var shortName = data.rslt.obj.attr("shortName");
			var namePath = data.rslt.obj.attr("namePath");
			posClick(type,id);
		}).bind("loaded.jstree",function(e,data){ 
			   data.inst.select_node($(this).find("li:first"));
		       data.inst.open_node($(this).find("li:first")); 
		}).bind("move_node.jstree", function (e, data) {
			data.rslt.o.each(function (i) {
				$.ajax({
					async : false,
					type: 'POST',
					url: basepath+"/position4org/move.html",
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
		
		/**
		 * 省岗位层级树
		 */
		$("#pos4org_level_tree").jstree({
			"plugins":["themes","json_data","types","ui","cookies","crrm","dnd"],
			"json_data":{
				"ajax" : {
					"url" : basepath+"/list/pos4orgtreelevel.html",
					"cache":false,
					"data" : function(n){
						return {
							"operation":"",
							"id":n.attr?n.attr("id"):-1,
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
		}).bind("select_node.jstree",function(e,data){
			var id = data.rslt.obj.attr("id");
			var type = data.rslt.obj.attr("type");
			var name = data.rslt.obj.attr("name");
			var namePath = data.rslt.obj.attr("namePath");
			posClick(type,id,name,namePath);
		}).bind("loaded.jstree",function(e,data){ 
			data.inst.open_node($(this).find("li:first"));
			data.inst.select_node($(this).find("li:first"));
		}).bind("move_node.jstree", function (e, data) {
			data.rslt.o.each(function (i) {
				$.ajax({
					async : false,
					type: 'POST',
					url: basepath+"/position4org/move.html",
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
	
	function posClick(type,id){
		var url = basepath + "/position4org/detail.html?type="+type+"&pid="+id;
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
		if(type == "blocPosition"){
			obj.href = basepath + "/position4org/exportBlocPositionList.html?poId="+poId;
		} else{
			obj.href = basepath + "/position4org/exportBlocEthnicGroupList.html?poId="+poId;
		}       
    }
	
	function export_ethnicGroup(poId){
		
		 loadingStart();
		 var countUrl = basepath + "/position4org/exportEthnicGroupCount.html?poId="+poId;
		 var listUrl = basepath + "/position4org/exportEthnicGroupList.html?poId="+poId;
		 postCount(countUrl,listUrl);
	}	
	
	
	function export_position(poId){
		
		 loadingStart();
		 var countUrl = basepath + "/position4org/exportPositionCount.html?poId="+poId;
		 var listUrl = basepath + "/position4org/exportPositionList.html?poId="+poId;
		 postCount(countUrl,listUrl);
	}


	
</script>
</body>

</html>








