<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>资源管理课程</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
<jsp:include page="/WEB-INF/page/include/script.jsp" />

</head>
<body class="bg">
	<form id="query_form" name="query_form" action=""></form>
	<!-- 弹出选择岗位树 -->
	<div class="blackall hidden">&nbsp;</div>
	<div class="treewindow">
		<div id="org_jstree1" class="demo treedemo"></div>
		<div align="right" class="mt10">
			<input name="" type="button" class="step mr10 vm treewindowsure"
				value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a>
		</div>
	</div>
	<div class="container">
		<jsp:include page="/WEB-INF/page/include/header.jsp" />
		<div class="cl">
			<div class="newright">
				<div class="newrightco">
					<div class="listpagenav">
						<div class="breadCrumbHolder pf">
							<div class="breadCrumb reHeight" id="breadCrumb3">
								<div class="z">
									<ul>
										<li class="first"><a href="${basepath }/">首页</a></li>
										<li><a href="${basepath }/courseware/coursewareList.html">培训资源</a>
										</li>
										<li class="last">课程列表</li>
									</ul>
								</div>
								<div class="y"></div>
							</div>
						</div>
					</div>
					<div class="reHeight">
						<div class="newmain">
							<div class="newmainco">
								<ul class="dpnav m10 reHeight">
									<li class="now" id="courseware">课程</li>
									<li id="doc">文档</li>
									<li id="caseDoc">案例</li>
								</ul>
								<div id="resourceList">
									<jsp:include page="/WEB-INF/page/resource/courseware.jsp" />
								</div>

							</div>
						</div>

						<div class="newlefttree">
							<div class="pftree">
								<ul class="listnav reHeight">
									<li onclick="showDivKno()">组织机构</li>
									<li class="now" id="btnOrg" onclick="showDivOrg()">知识分类</li>
								</ul>
								<div>
									<!--  -->
									<div id="divOrg" class="hidden">
										<div class="m10">
											是否包含下级 <label class="ml12"> <input id="isSub"
												name="isSub" type="radio" value="1" class="vm"
												checked="checked" /> 是
											</label> <label class="ml12"> <input id="isSub" name="isSub"
												type="radio" value="0" class="vm" /> 否
											</label>
										</div>
										<div id="org_jstree_org"></div>
									</div>
									<!--  -->

								</div>

								<!-- zhishi -->
								<div id="divKno">
									<div id="kno_jjjstree"></div>
								</div>


								<!-- zhishi -->
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
				<c:set var="menu_sn" value="11" scope="request"></c:set>
				<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
			</div>
		</div>
	</div>
	<script type="text/javascript">
		var basepath = "${basepath}";

		var url = "${url}";
		var knoRootId = [ '${knoRootId}' ];
		var rootPosition = [ "${sessionScope.rootposition}" ];
		//树形菜单
		function showDivKno() {
			$("#divOrg").removeClass("hidden");
			$("#divKno").toggleClass("hidden");
		}

		function showDivOrg() {
			$("#divOrg").toggleClass("hidden");
			$("#divKno").removeClass("hidden");
		}
		$("#courseware").live("click", function() {
			var url = "../courseware/courseware.html";
			$("#resourceList").load(url, function() {
				
			});
		});
		$("#doc").live("click", function() {
			var url = "../doc/docList.html?docType=0";
			$("#resourceList").load(url, function() {

			});
		});
		$("#caseDoc").live("click", function() {
			var url = "../case/caseDocList.html?docType=1";
			$("#resourceList").load(encodeURI(url), function() {

			});
		});

		//当页面加载时,判断是否是从新建或修改页面保存之后重定向到此列表页面，如果是则关闭此页面.
		window.onload = function() {
				if(knoRootId == null || knoRootId=='' ){
					knoRootId=0;
				}
			if ('${param.closeSelf}' == 'true') {
				//alert("保存成功!");
				window.close();
			}
			
			//加载知识分类树
			$("#kno_jjjstree")
					.jstree(
							{
								"plugins" : [ "themes", "json_data", "types",
										"ui", "cookies" ],
								"json_data" : {
									"ajax" : {
										"url" : basepath
												+ "/knowledge/knowledge4jstree.html",
										"cache" : false,
										"data" : function(n) {
											return {
												"operation" : "",
												"id" : n.attr ? n.attr("id")
														: "root_0",
												"name" : n.attr ? n
														.attr("name") : 0,
												"namePath" : n.attr ? n
														.attr("name") : 0,
												"idPath" : n.attr ? n
														.attr("idPath") : 0

											};
										}
									}
								},
								"types" : {

									"kno" : {
										"valid_children" : "none",
										"icon" : {
											"image" : basepath
													+ "/images/file.png"
										}
									}

								},
								"core" : {
									"initially_open" : knoRootId
								},
								"ui" : {
									"initially_select" : knoRootId
								//默认选中根节点.
								}
							}).bind("select_node.jstree", function(e, data) {
								var id = data.rslt.obj.attr("id");
								var type = data.rslt.obj.attr("type");
								var name = data.rslt.obj.attr("name");
								var namePath = data.rslt.obj.attr("namePath");
								var idPath = data.rslt.obj.attr("idPath");
								knoClick(type, id, idPath, name, namePath);
					}).bind("init.jstree", function() { //加载知识分类树的初始化事件处理.
			 });
		};
	</script>


	<script type="text/javascript">
		var rootId = "${node.id}";
	</script>




	<script type="text/javascript">
		/**
		 * 悬浮事件
		 */
		function showOrg(o) {
			//悬浮事件
			var oId = $(o).attr("id");
			$.ajax({
				url : "toShowAllOrgName.html?orgId=" + oId,
				type : "get",
				dataType : "json",
				success : function(namepath) {
					$(o).attr('title', namepath);

				}
			});
		}
	</script>
</body>

</html>






