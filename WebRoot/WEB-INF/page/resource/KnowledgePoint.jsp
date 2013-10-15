<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>知识点管理</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>

<body class="bg">
	<jsp:include page="/WEB-INF/page/include/downloadData.jsp"></jsp:include>
	<div id="dialog" class="hidden">
		<div class="blackall">&nbsp;</div>
		<div class="newwindow" id="choosepersonco">
			<div class="taR">
				<a href="javascript:;"><img class="png_bg closebutton"
					src="${basepath }/images/close.png" width="40" height="40" /></a>
			</div>
			<div id="dialog_content" class="cl"></div>
		</div>
	</div>

	<div class="container">
		<!-- 导入头部文件 -->
		<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
		<div class="cl">
			<div class="newright">
				<div class="newrightco">
					<div class="listpagenav">
						<div class="breadCrumbHolder pf">
							<div class="breadCrumb reHeight" id="breadCrumb3">
								<div class="z">
									<ul>
										<li class="first"><a href="${basepath }/">首页</a></li>
										<li><a
											href="${basepath }/courseware/coursewareList.html?coursewareType=0">培训资源</a>
										</li>
										<li class="last">知识点</li>
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
									<ul class="dpnav2 m10 reHeight">
										<li class="now">查询</li>
									</ul>
									<table border="0" cellspacing="0" cellpadding="0">
										<tr>
											<td class="taR">知识点名称</td>
											<td class="taL"><input name="name" type="text"
												class="inputtext" id="name" /> <input name="kId"
												type="hidden" id="kId" /></td>

										</tr>
									</table>
									<div align="right" class="mt10">
										<input id="searchButton" type="button"
											class="searchbutton m10" value="搜索" />
									</div>
								</div>
								<div>
									<div class="dataTables_wrapper">
										<h3 class="reHeight">
											<div class="z" style="font-size:14px">知识点列表</div>
											<div class="y">

												<a id="newKnowledgePoint" href="javascript:;"
													class="functionbutton addClass">新建</a> <a href="#"
													class="functionbutton" onclick="export_knowledgepoint()">导出</a>
												<a id="btn_delete" href="javascript:;"
													class="functionbutton">删除</a>
											</div>
										</h3>
										<div id="list_knowledgepointlist"></div>
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
									<div id="kno_jstree"></div>
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
	<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
	<script type="text/javascript">
			var rootId = "${node.id}";
		</script>
	<script type="text/javascript"
		src="${basepath }/js/res/knowledgePoint.js" charset="gbk"></script>

</body>
</html>
