<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>外派培训班列表</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
	<form id="form1">
		<input type="hidden" id="importType" name="importType"
			value="outTrainUserInfo" /> <input type="hidden" id="objId"
			name="objId" />
	</form>
	<div class="blackall hidden"></div>
	<div id="dialog" class="hidden">
		<div class="blackall">&nbsp;</div>
		<div class="newwindow">
			<div class="taR">
				<a href="javascript:;"><img class="png_bg closebutton"
					src="${basepath }/images/close.png" width="40" height="40" /></a>
			</div>
			<div id="dialog_content" class="cl"></div>
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
										<li class="first"><a href="${basepath }/index.html">首页</a>
										</li>
										<li><a href="${basepath }/trainclass/out/list.html">外派班管理</a>
										</li>
										<li class="last">外派培训班列表</li>
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
									<ul class="dpnav2 m10">
										<li class="now">查询</li>
									</ul>
									<table border="0" cellspacing="0" cellpadding="0">
										<tr>
											<td class="taR">培训班名称</td>
											<td class="taL"><input type="text" id="search_name"
												class="input" /> <!-- 默认机构条件是当前管辖范围的机构 --> <input
												type="hidden" id="search_orgid"
												value="${sessionScope.defaultOrg.orgId }" /></td>
										</tr>
										<tr>
											<td class="taR">培训地点类别</td>
											<td class="taL"><select id="search_address">
													<option value="">不限</option>
													<c:forEach items="${addressTypeList }" var="p">
														<option value="${p.spId }">${p.name }</option>
													</c:forEach>
											</select></td>
											<td class="taR">培训级别</td>
											<td class="taL"><select id="search_level"
												name="class_level">
													<option value="">不限</option>
													<c:forEach items="${levelList }" var="p">
														<option value="${p.spId }">${p.name }</option>
													</c:forEach>
											</select></td>
										</tr>
										<tr>
											<td class="taR">开始时间</td>
											<td class="taL"><input id="search_start_date"
												type="text" class="timetext" /></td>
											<td class="taR">结束时间</td>
											<td class="taL"><input id="search_end_date" type="text"
												class="timetext" /></td>
										</tr>
									</table>
									<div align="right" class="mt10">
										<input id="btn_search" type="button" class="searchbutton m10"
											value="搜索" hidefocus="true" />
									</div>
								</div>
								<div>
									<!-- 外派培训班列表 -->
									<div class="dataTables_wrapper">
										<h3 class="reHeight">
											<div class="z">外派培训班列表</div>
											<div class="y">
												<a href="new.html" class="functionbutton">新建</a> <a
													id="btn_delete" href="javascript:;" class="functionbutton">删除</a>
											</div>
										</h3>
										<div id="list_outtrainclass" style="margin-top: 3px"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="newlefttree">
							<div class="pftree">
								<h3>机构部门</h3>
								<div class="m10">
									是否包含下级 <label class="ml12"><input name="isSub"
										type="radio" value="1" class="vm" checked="checked" /> 是</label> <label
										class="ml12"><input name="isSub" type="radio"
										value="0" class="vm" /> 否</label>
								</div>
								<div id="org_jstree"></div>
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
				<c:set var="menu_sn" value="6" scope="request"></c:set>
				<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
			</div>
		</div>

	</div>
	<jsp:include page="/WEB-INF/page/include/script.jsp" />
	<script type="text/javascript"
		src="${basepath }/js/train/outtrainclass.js" charset="gbk"></script>
	<jsp:include page="/WEB-INF/page/include/upload.jsp"></jsp:include>
	<jsp:include page="/WEB-INF/page/include/download.jsp"></jsp:include>
</body>

</html>