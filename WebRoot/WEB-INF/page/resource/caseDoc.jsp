<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>资源管理案例</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
	<!-- 弹出选择岗位树 -->
	<jsp:include page="/WEB-INF/page/include/downloadData.jsp"></jsp:include>
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
										<li class="last">案例列表</li>
									</ul>
								</div>
								<div class="y"></div>
							</div>
						</div>
					</div>
					<div class="reHeight">
						<div class="newmain">
							<div class="newmainco">
								<ul class="dpnav2 m10 reHeight">
									<li><a href="${basepath }/courseware/coursewareList.html">课程</a></li>
									<li><a href="${basepath }/doc/docList.html?docType=0">文档</a></li>
									<li class="now">案例</li>
								</ul>
								<div class="searchblock">
									<table border="0" cellspacing="0" cellpadding="0">

										<tr>
											<td class="taR">案例名称</td>
											<td colspan="3" class="taL"><input name="name"
												type="text" class="inputtext" value="输入案例名称" id="name" /> <input
												name="input2" type="button" class="searchbutton mr10"
												value="搜索" hidefocus="true" id="btn_selDoc" /><span
												class="img">高级搜索<img
													src="${basepath }/images/bluearrowdown.jpg" width="10"
													height="11" /></span></td>
										</tr>
										<tr class="mt10 hidden">
											<td class="taR">编号</td>
											<td class="taL" colspan="3"><input name="sn" type="text"
												value="" id="sn" class="input" /></td>
										</tr>

										<tr class="mt10 hidden">
											<td class="taR">创建时间</td>
											<td class="taL" colspan="3"><input name="startTime"
												type="text" class="timetext" id="search_start_date" /><em
												class="mr10 ml10">到</em><input name="endTime" type="text"
												class="timetext" id="search_end_date" /></td>
										</tr>
										<tr class="mt10 hidden">
											<td class="taR">标签</td>
											<td class="taL" colspan="3"><input name="tag"
												type="text" id="tag" value="" class="input" /></td>
										</tr>
										<tr class="mt10 hidden">
											<td class="taR">适用岗位</td>
											<td class="taL" colspan="3"><input type="hidden"
												name="eth_id" id="eth_id" value="" /> <input id="ethName"
												name="class_dep_name" type="text" class="input vm si"
												value="" /> <input id="ethId" name="class_dep"
												type="hidden" value="" /> <span class="tochoose chooseEth">选择岗位</span>
											</td>
										</tr>
										<tr class="mt10 hidden">
											<td class="taR">发布状态</td>
											<td class="taL" colspan="3">
												<div class="z">
													<select name="status" class="select" id="status">
														<option value="">全部</option>
														<option value="0">未发布</option>
														<option value="2">已提交</option>
														<option value="1">已发布</option>
														<option value="3">省不批准</option>
													</select>
												</div>

											</td>
										</tr>
									</table>
									<div align="right" class="mt10 hidden">
										<input name="" type="button" class="searchbutton m10"
											value="搜索" hidefocus="true" id="btn_selAllDoc" /> <span
											class="img mr10">收起<img
											src="${basepath }/images/bluearrowup.jpg" width="10"
											height="11" />
										</span>
									</div>
								</div>
								<div class="sortblock">
									<dl>
										<dt>排序：</dt>
										<dd id="pX">
											<a id="view" href="javascript:;" onclick="ll(1,this)">按浏览数</a><span>|</span><a
												id="download" href="javascript:;" onclick="ll(1,this)">按下载数</a><span>|</span><a
												id="share" href="javascript:;" onclick="ll(1,this)">按分享数</a><span>|</span><a
												id="comment" href="javascript:;" onclick="ll(1,this)">按评论数</a>
										</dd>
									</dl>
									<dl>
										<dt>规则：</dt>
										<dd id="gZ">
											<a id="desc" href="javascript:;" onclick="zd(1,this)">最高</a><span>|</span><a
												id="asc" href="javascript:;" onclick="zd(1,this)">最低</a>
										</dd>
									</dl>
									<dl>
										<dt>内容：</dt>
										<dd id="nR">
											<a href="javascript:;" id="" onclick="seachJHClick(1,this)">全部</a><span>|</span><a
												href="javascript:;" id="1" onclick="seachJHClick(1,this)">精品</a>
										</dd>
									</dl>
								</div>
								<input type="hidden" id="orgId"
									value="${sessionScope.defaultOrg.orgId }" /> <input
									type="hidden" id="userId" value="${sessionScope.user.type }" />
								<div>
									<div class="dataTables_wrapper">
										<div class="reHeight mt20">
											<div class="z">
												<div class="changeshow cl">
													<a href="javascript:;" onclick="selectBottonClick(1)"></a><a
														href="javascript:;" onclick="toDocPic(1)"></a>
												</div>
											</div>
											<div class="y">
												<c:if test="${sessionScope.user.type == 1}">
													<a href="javascript:;" class="functionbutton" id="btn_jh">精品</a>
													<a href="javascript:;" class="functionbutton" id="btn_ls">历史</a>
												</c:if>
												<c:if
													test="${sessionScope.user.type != 4 && sessionScope.user.type != 5}">
													<a id="btn_add" href="javascript:;" class="functionbutton">新建</a>
													<a id="btn_dc" href="javascript:;" class="functionbutton"
														onclick="export_case()">导出</a>
													<a href="javascript:;" class="functionbutton"
														id="btn_delete">删除</a>
												</c:if>

											</div>
										</div>
										<div class="reHeight"></div>

										<!-- 悬浮事件显示创建公司的namePath -->
										<div id="div_namepath" title=""></div>

										<!-- 案例列表 -->
										<div id="list_trainclass"></div>
										<!-- 案例图文列表 -->
										<div id="list_docPic"></div>
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
									<div class="hidden" id="divOrg">
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
			var knoRootId = ['${knoRootId}'];
			var rootPosition = ["${sessionScope.rootposition}"];
			
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
				
				//当页面加载时,判断是否是从新建或修改页面保存之后重定向到此列表页面，如果是则关闭此页面.
				window.onload = function(){
					if ('${param.closeSelf}' == 'true') {
						//alert("保存成功!");
						window.close();
					} 
				};
		</script>
	<jsp:include page="/WEB-INF/page/include/script.jsp" />
	<script type="text/javascript">
			var rootId = "${node.id}";
			
		</script>

	<script type="text/javascript" src="${basepath }/js/res/caseDoc.js"
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
		    		success : function(namepath){
		    			$(o).attr('title',namepath);
		    			
		    		}
		    	});
}

</script>

</body>

</html>






