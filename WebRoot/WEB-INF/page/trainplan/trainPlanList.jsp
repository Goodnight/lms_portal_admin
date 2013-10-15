<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/xhtml; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>培训计划列表</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
		
	</head>
	<body class="bg">
	    <jsp:include page="/WEB-INF/page/include/downloadData.jsp"></jsp:include>
		<form id="form1">
			<input type="hidden" id="importType" name="importType"
				value="trainPlan" />
			<input type="hidden" id="objId" name="objId" />
		</form>
		<div id="dialog" class="hidden">
			<div class="blackall">
				&nbsp;
			</div>
			<div class="newwindow planInfo" id="choosepersonco">
				<div class="taR">
					<a href="javascript:;"><img class="png_bg closebutton"
							src="${basepath }/images/close.png" width="40" height="40" />
					</a>
				</div>
				<div id="dialog_content"></div>
			</div>
		</div>

		<div class="blackall hidden">
			&nbsp;
		</div>
		<div class="container">
			<!-- 导入头部的JSP文件 -->
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
											<li class="first">
												<a href="${basepath }/index.html">首页</a>
											</li>
											<li>
												<a href="${basepath }/trainplan/trainPlanList.html">培训计划列表</a>
											</li>
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
											<li class="now">
												查询
											</li>
										</ul>
										<table border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td class="taR">
													计划名称
												</td>
												<td class="taL">
													<input type="hidden" id="search_orgDepId" value="" />
													<input name="name" type="text" class="inputtext"
														id="nameid" value="输入培训计划的名称" />
												</td>
												<td class="taR">
													年度
												</td>
												<td class="taL">
													<select name="year" class="select" id="yearid">
														<option value="">
															全部
														</option>
														<option value="2008">
															2008
														</option>
														<option value="2009">
															2009
														</option>
														<option value="2010">
															2010
														</option>
														<option value="2011">
															2011
														</option>
														<option value="2012">
															2012
														</option>
														<option value="2013">
															2013
														</option>
													</select>
												</td>
											</tr>
											<tr>
												<td class="taR">
													计划类型
												</td>
												<td class="taL">
													<select name="palnType" class="select" id="planTypeid">
														<option value="">
															全部
														</option>
														<option value="0">
															正式
														</option>
														<option value="1">
															临时
														</option>
													</select>
												</td>

												<td class="taR">
													发布状态
												</td>
												<td class="taL">
													<label class="autowidth">
														<span class="option choosed"><input name="status" type="radio" value="" /> </span>全部
													</label>
													<label class="autowidth">
														<span class="option"><input name="status" type="radio" value="1" id="statusid" /> </span>已发布
													</label>
													<label class="autowidth">
														<span class="option"><input name="status" type="radio" value="0" id="statusid" /> </span>未发布
													</label>
													<label class="autowidth">
                                                        <span class="option"><input name="status" type="radio" value="2" id="statusid" /> </span>已提交
                                                    </label>
                                                    <label class="autowidth">
                                                        <span class="option"><input name="status" type="radio" value="3" id="statusid" /> </span>省不批准
                                                    </label>
												</td>
											</tr>
										</table>
										<div align="right" class="mt10">
											<input id="searchButton" type="button"
												class="searchbutton m10" value="搜索" />
										</div>
									</div>

									<div>
										<!-- 培训计划列表首页 -->
										<div class="dataTables_wrapper">
											<h3 class="reHeight">
												<div class="z">
													培训计划列表
												</div>
												<div class="y">
													<a href="newTrainPlan.html" class="functionbutton">新建</a>
													<input id="btn_delete" type="button" class="functionbutton"
														value="删除" />
												</div>
											</h3>
											<div id="list_trainPlanList"></div>
											<div style="color:#6f6f6f;margin-top:-20px;">注：<br><span class="mr5">•</span>  点击培训班信息列中的数字，进入培训班新建和查看页面。 <br> 		 <span class="mr5">•</span> 培训计划发布后，培训班管理中将生成该计划中的培训班。 <br><span class="mr5">•</span> 只列出管辖范围内的培训计划。<br><span class="mr5">•</span> 已发布临时计划不能删除。
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="newlefttree">
								<div class="pftree">
									<input id="orgDepOriId" type="hidden" value="${orgDepOriId }" />
									<h3>
										机构部门
									</h3>
									<div class="m10">
										是否包含下级
										<label class="ml12">
											<input id="isSub" name="isSub" type="radio" value="1" class="vm" />
											是
										</label>
										<label class="ml12">
											<input id="isSub" name="isSub" type="radio" value="0" class="vm"
												checked="checked" />
											否
										</label>
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
					<c:set var="menu_sn" value="7" scope="request"></c:set>
					<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
				</div>
			</div>
		</div>
		<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
		<script type="text/javascript"
			src="${basepath }/js/trainplan/trainplan.js" charset="gbk"></script>
		<jsp:include page="/WEB-INF/page/include/upload.jsp"></jsp:include>
	</body>
</html>
