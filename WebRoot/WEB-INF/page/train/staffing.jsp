<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/xhtml; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>人员设置</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
	<jsp:include page="/WEB-INF/page/include/downloadData.jsp"></jsp:include>
	<form id="form1">
		<input type="hidden" id="importType" name="importType"
			value="trainUser" /> <input type="hidden" id="objId" name="objId"
			value="${tcid }" /> <input type="hidden" id="objId" name="objId"
			class="objId" />
	</form>
	<div class="blackall hidden">&nbsp;</div>

	<div class="treewindow">
		<div id="new_jstree_checkbox" class="demo treedemo"></div>
		<div align="right" class="mt10">
			<input name="" type="button" class="step mr10 vm treewindowsure"
				value="确定" /> <a href="javascript:;" class="back vm treewindowback">取消</a>
		</div>
	</div>
	<!--<!-- 对话框 -->
	<div id="dialog" class="hidden">
		<!-- 半透明背景 -->
		<div class="blackall_new">&nbsp;</div>
		<div class="newwindow" id="choosepersonco">
			<!-- 关闭按钮 -->
			<div class="taR">
				<a href="javascript:;"><img class="png_bg closebutton"
					src="${basepath }/images/close.png" width="40" height="40" /> </a>
			</div>
			<!-- 对话框内容 -->
			<div id="dialog_content" class="cl"></div>
		</div>
	</div>
	<div class="container">
		<!-- 导入头部 -->
		<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
		<div class="breadCrumbHolder breadCrumbPage">
			<div class="headerco">
				<div class="breadCrumb reHeight noborder" id="breadCrumb3">
					<div class="z">
						<ul>
							<li class="first"><a href="${basepath }/index.html">首页</a></li>
							<li><a href="${basepath }/trainclass/index.html">培训班管理</a></li>
							<li>${tc.name }</li>
							<li class="last">人员设置</li>
						</ul>
					</div>
					<div class="y"></div>
				</div>
			</div>
		</div>
		<div class="content">
			<ul class="window_nav">
				<li class="basic"><a href="information.html?tcid=${tcid }"
					class="green png_bg">基本信息</a></li>
				<li class="course"><a href="course.html?tcid=${tcid }"
					class="green png_bg">课程设置</a></li>
				<li class="person"><a href="staffing.html?tcid=${tcid }"
					class="png_bg">人员设置</a></li>
				<li class="sameclass"><a href="videoclass.html?tcid=${tcid }"
					class="grey png_bg">同步课堂</a></li>
				<li class="examadmin"><a href="examination.html?tcid=${tcid }"
					class="grey png_bg">考试管理</a></li>
				<li class="evaluate"><a href="estimate.html?tcid=${tcid }"
					class="grey png_bg">评估设置</a></li>
				<c:choose>
					<c:when test="${tc.way.name eq '在线' }">
						<li class="faceadmin"><a href="bbs.html?tcid=${tcid }"
							class="grey png_bg">讨论区管理</a></li>
						<li class="discuss"><a href="statistics.html?tcid=${tcid }"
							class="grey png_bg">培训统计</a></li>
					</c:when>
					<c:otherwise>
						<li class="faceadmin"><a href="facecourse.html?tcid=${tcid }"
							class="grey png_bg">面授管理</a></li>
						<li class="discuss"><a href="bbs.html?tcid=${tcid }"
							class="grey png_bg">讨论区管理</a></li>
						<li class="trainsta"><a href="statistics.html?tcid=${tcid }"
							class="grey png_bg">培训统计</a></li>
					</c:otherwise>
				</c:choose>
				<!-- 
					<c:choose>
						<c:when test="${tc.isGrantCertificate==1 }">
							<li class="certificate">
								<a href="certificate.html?tcid=${tcid }" class="grey png_bg">证书发布</a>
							</li>
						</c:when>
						<c:otherwise>
							<li class="certificate">
								<a href="#" class="grey png_bg">证书发布</a>
							</li>
						</c:otherwise>
					</c:choose>
					 -->
			</ul>
			<div class="window">
				<dl class="checkperson">
					<dt>查看参加人员</dt>
					<dd>
						<label> 培训班总人数 <a id="num_classnum" href="#"></a>
						</label> <label> 总共参加人员 <a id="num_all" href="javascript:show(1);"></a>
						</label> <label> 直接指定人员 <a id="num_direct" href="#"></a>
						</label> <label> 名额指派 <a id="num_depnum" href="#"></a>
						</label>
					</dd>
					<dd>
						<label> 指定部门 <a id="num_dep" href="#"></a>
						</label> <label> 通过审批 <a id="num_approved" href="#"></a>
						</label> <label> 待审批人员 <a id="num_approving"
							href="javascript:show(4);"></a>
						</label>
					</dd>
				</dl>
				<ul class="dpnav reHeight">
					<li class="now">所有人员</li>
					<li>指定部门</li>
					<li>部门名额指派</li>
					<li>审批</li>
					<!-- 
                <li>临时账号</li>
                 -->
				</ul>
				<span></span>
				<div class="cls_list">
					<div class="pt">
						<div class="searchperson reHeight">
							<div class="searchblock">
								<table width="100%" border="0" cellspacing="0" cellpadding="0">
									<colgroup>
										<col width="100" />
									</colgroup>
									<tr>
										<td class="taR">员工姓名</td>
										<td colspan="3" class="taL"><input id="search_name"
											name="" type="text" class="w177 input vm" value="输入人员姓名" />
											<input name="" type="button" class="search_all searchbutton"
											value="搜索" hidefocus="true" /> <span class="img ml12">高级搜索<img
												src="${basepath }/images/bluearrowdown.jpg" width="10"
												height="11" />
										</span></td>
									</tr>
									<tr class="mt10 hidden">
										<td class="taR">员工编号</td>
										<td class="taL"><input id="search_sn" name="" type="text"
											class="input" /></td>
										<td class="taR">手机号码</td>
										<td class="taL"><input id="search_mobile" name=""
											type="text" class="input" /></td>
									</tr>
									<tr class="mt10 hidden">
										<td class="taR">所属部门</td>
										<td class="taL" colspan="3"><input type="text"
											id="search_depname" value="" class="input"
											readonly="readonly" /> <input type="hidden" id="search_depid"
											value="" /> <em
											class="tochoose vm newshowtree choosesearchdep">选择部门</em> <em
											class="tochoose vm clearsearchdep">清除部门</em></td>
									</tr>
									<tr class="mt10 hidden">
										<td class="taR">指定方式</td>
										<td class="taL" colspan="3"><label class="autowidth">
												<span class="option choosed"><input name="applyway"
													type="radio" value="" checked="checked" /> </span>不限
										</label> <label class="autowidth"> <span class="option "><input
													name="applyway" type="radio" value="1" /> </span> 直接指定
										</label> <label class="autowidth"> <span class="option"><input
													name="applyway" type="radio" value="2" /> </span> 指定部门
										</label> <label class="autowidth"> <span class="option"><input
													name="applyway" type="radio" value="3" /> </span> 名额指派
										</label> <label class="autowidth"> <span class="option"><input
													name="applyway" type="radio" value="0" /> </span> 个人报名
										</label></td>
									</tr>
									<tr class="mt10 hidden">
										<td colspan="4" class="taR"><input type="button"
											class="search_all searchbutton m10" value="搜索"
											hidefocus="true" /> <span class="hidden img">收起<img
												src="${basepath }/images/bluearrowup.jpg" width="10"
												height="11" />
										</span></td>
									</tr>
								</table>
							</div>
							<div class="taR">
								<a href="javascript:;" class="functionbutton mr10 vm"
									id="btn_assignperson">指定</a> <a href="javascript:;"
									class="functionbutton mr10 vm" id="leadin">导入</a> <input
									type="button" class="functionbutton mr10 vm" value="导出"
									onclick="export_trainclassstudent()" /> <a href="javascript:;"
									class="functionbutton mr10 vm cls_all_delete">删除</a>
							</div>
						</div>
						<br />
						<!-- 所有人员列表 -->
						<div class="dataTables_wrapper">
							<div id="list_allstudent"></div>
						</div>
					</div>
					<div class="pt hidden">
						<div class="searchperson reHeight">
							<span class="z"> <input name="" type="button"
								class="spb vm" /><input name="" type="text"
								class="w177 input vm" value="输入部门名称" id="w177_3" /> <input
								id="search_dep" type="button" class="searchbutton ml13"
								value="搜索" hidefocus="true" />
							</span>
						</div>
						<div class="taR">
							<input id="btn_assigndep"
								class="functionbutton mr10 groupadd newshowtree assigndep"
								type="button" value="添加" /> <input id="btn_deldep"
								class="functionbutton mr10" type="button" value="删除" />
						</div>
						<br />
						<!-- 指定部门 -->
						<div class="dataTables_wrapper">
							<div id="list_assigndep"></div>
						</div>
					</div>
					<div class="pt hidden">
						<div class="searchperson reHeight">
							<span class="z"><input name="" type="button"
								class="spb vm" /><input name="" type="text"
								class="w177 input vm" value="输入部门名称" id="w177_2" /> <input
								id="search_depnum" type="button" class="searchbutton ml13"
								value="搜索" hidefocus="true" /> </span>
						</div>
						<div class="taR">
							<input type="button" class="functionbutton mr10 vm"
								id="btn_assigndepnum" value="指派" /> <input type="button"
								class="functionbutton mr10 vm" id="btn_deletedepnum" value="删除" />
						</div>
						<br />
						<!-- 部门指派人数 -->
						<div class="dataTables_wrapper">
							<div id="list_assignnum"></div>
						</div>
					</div>
					<div class="pt hidden">
						<div class="searchperson reHeight">
							<span class="z"> <input name="" type="button"
								class="spb vm" /><input name="" type="text"
								class="w177 input vm" value="输入人员编号、姓名或手机号码" id="w177" /> <input
								id="" type="button" class="searchbutton ml13" value="搜索"
								hidefocus="true" />
							</span>
						</div>
						<div class="taR">
							<input id="btn_batchapprove" class="functionbutton mr10"
								type="button" value="批量批准" />
						</div>
						<br />
						<!-- 报名审核列表 -->
						<div class="dataTables_wrapper">
							<div id="list_approving"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="windowlast">
				<p>
					<a href="${basepath }/trainclass/course.html?tcid=${tcid}"
						class="step vm" hidefocus="true">上一步</a> <a
						href="${basepath }/trainclass/videoclass.html?tcid=${tcid}"
						class="step ml30 vm" hidefocus="true">下一步</a> <a href="#"
						class="back ml30 vm allclose" hidefocus="true">关闭</a>
				</p>
			</div>
		</div>
	</div>
	<script type="text/javascript">
		var tcid = "${tcid}";
		var pid = "${tcid}";
		var userurl = "${basepath}/trainclass/addstudent.html";
	</script>
	<jsp:include page="/WEB-INF/page/include/script.jsp" />
	<script type="text/javascript" src="${basepath}/js/demand/newblock.js"
		charset="gbk"></script>
	<script type="text/javascript" src="${basepath }/js/train/staffing.js"
		charset="gbk"></script>
	<jsp:include page="/WEB-INF/page/include/upload.jsp"></jsp:include>
</body>

</html>






