<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>历史资源</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
	<jsp:include page="/WEB-INF/page/include/downloadData.jsp"></jsp:include>
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
										<li>历史资源</li>
									</ul>
								</div>
								<div class="y"></div>
							</div>
						</div>
					</div>
					<div class="reHeight">
						<div class="newmain">
							<div class="newmainco">
								<div class="searchblock">
									<table border="0" cellspacing="0" cellpadding="0">

										<tr>
											<td class="taR">资源名称</td>
											<td class="taL"><input type="text" class="input"
												id="name" name="name" /></td>
											<td class="taR">资源编号</td>
											<td class="taL"><input type="text" class="input" id="sn"
												name="sn" /></td>
										</tr>
										<tr>
											<td class="taR">资源类型</td>
											<td class="taL"><select class="select" id="type"
												name="type">
													<option value="">全部</option>
													<option value="1">课程</option>
													<option value="2">文档</option>
													<option value="3">案例</option>
											</select></td>
											<td class="taR">创建时间</td>
											<td class="taL"><input name="startDt" type="text"
												id="search_start_date" class="timetext" /><em
												class="mr10 ml10">到</em><input name="endDt" type="text"
												class="timetext" id="search_end_date" /></td>
										</tr>
									</table>
									<div align="right" class="mt10">
										<input name="" type="button" class="searchbutton m10"
											value="搜索" hidefocus="true" onclick="selectBottonClick(1)" />
									</div>
								</div>

								<div>
									<div class="dataTables_wrapper">
										<div class="reHeight mt10">

											<h3 class="reHeight">
												<div class="z ml12">历史资源列表</div>
												<div class="y">
													<a href="javascript:;" class="functionbutton"
														onclick="export_list()">导出</a>
													<c:if test="${sessionScope.user.type == 1}">
														<a href="javascript::" class="functionbutton"
															id="btn_delete">移除</a>
														<a href="javascript::" class="functionbutton"
															id="btn_deleteAll">删除</a>
													</c:if>
												</div>
											</h3>
										</div>
										<div class="reHeight"></div>
										<!-- 历史资源列表 -->
										<div id="list_lsResList"></div>
									</div>
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
									<div class="m10">
										是否包含下级 <label class="ml12"> <input id="isSubs"
											name="isSubs" type="radio" value="1" class="vm"
											checked="checked" /> 是
										</label> <label class="ml12"> <input id="isSubs" name="isSubs"
											type="radio" value="0" class="vm" /> 否
										</label>
									</div>
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
			var rootId = "${node.id}";
			var knoRootId = ['${knoRootId}'];
			
			//树形菜单
			function showDivKno(){
				$("#divOrg").removeClass("hidden");
				$("#divKno").toggleClass("hidden");
			}
			
				function showDivOrg()
				{
				$("#divOrg").toggleClass("hidden");
				$("#divKno").removeClass("hidden");
				}
		</script>
	<jsp:include page="/WEB-INF/page/include/script.jsp" />

	<script type="text/javascript" src="${basepath }/js/res/lsRes.js"
		charset="gbk"></script>
	<script type="text/javascript">
       
		/**
		 * 悬浮事件
		 */
		function showOrg(o){
		            //悬浮事件
			    var oId = $(o).attr("id");
				    	$.ajax({
				    		url : "toShowAllOrgName.html?orgId="+oId,
				    		type : "get",
				    		dataType : "json",
				    		success : function(pos){
				    			$(o).attr('title',pos);
				    			
				    		}
				    	});
		}
       </script>
</body>

</html>






