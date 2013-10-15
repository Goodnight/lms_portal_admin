<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>部门分配积分</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">

	<!-- 选择部门 -->
	<div class="blackall hidden">&nbsp;</div>
	<div class="treewindow">
		<div id="org_jstree1" class="demo treedemo"></div>
		<div align="right" class="mt10">
			<input name="" type="button" class="step mr10 vm treewindowsure"
				value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a>
		</div>
	</div>

	<!-- 弹窗 -->
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
		<jsp:include page="/WEB-INF/page/include/header.jsp" />
		<div class="breadCrumbHolder breadCrumbPage">
			<div class="headerco">
				<div class="breadCrumb reHeight noborder" id="breadCrumb3">
					<div class="z">
						<ul>
							<li class="first"><a href="${basepath }/">首页</a></li>
							<li><a href="${basepath }/rewardScoreDep/scoreDepList.html">集团积分</a>
							</li>
							<li class="last">部门分配积分</li>
						</ul>
					</div>
					<div class="y"></div>
				</div>
			</div>
		</div>
		<div class="content cl">
			<div class="ngreyborder changeblue2 mt20">
				<h2 class="png_bg">分配积分</h2>
				<div class="courseupload basic_information">
					<ul>
						<li class="now">基础积分</li>
						<li>奖励积分</li>
					</ul>
					<div>

						<form id="form_scoreDep" action="doSaveScoreDep.html"
							method="post">
							
							<table border="0" cellspacing="15" cellpadding="15">

								<tbody>
									<tr>
										<td><em>*部门名称 </em></td>
										<td></td>
										<td><span class="tochoose chooseDep">选择部门</span>
										<div id="principal_error" class="validate_error"></div></td>

									</tr>
									<tr>
										<td><em>*</em>基本积分</td>
										<td><input name="score" type="text" id="score" /></td>
									</tr>
									<tr>
										<td>有效期</td>
										<td>1年</td>
									</tr>
								</tbody>
							</table>
							<div class="taR">
								<input name="_next" type="submit" class="step m10 vm" value="确定" />
								<a href="${basepath }/rewardScoreDep/scoreDepList.html"
									class="back m10 vm">关闭</a>
							</div>
						</form>


						<form id="form_scoreDepGain" action="doSaveScoreDepGain.html"
							method="post" class="hidden">
							<table border="0" cellspacing="15" cellpadding="15">
								<tbody>
									<tr>
										<td><em>*</em>被奖励的部门</td>
										<td></td>
										<td><span class="tochoose chooseDepForGain">选择部门</span>
										<div id="principal2_error" class="validate_error"></div></td></td>

									</tr>
									<tr>
										<td><em>*</em>奖励积分数值</td>
										<td><input type="text" name="score" id="score" /></td>
									</tr>
									<tr>
										<td>有效期</td>
										<td>2年</td>
									</tr>
									<tr>
										<td><em>*</em>奖励类别</td>
										<td><select id="gain_type_id" name="gain_type_id">
												<c:forEach items="${gainTypeList }" var="g">


													<option value="${g.spId }">${g.name }</option>


												</c:forEach>
										</select></td>
									</tr>
									<tr>
										<td>奖励原因</td>
										<td><textarea name="rewardReason" cols="" rows=""></textarea></td>
									</tr>
								</tbody>
							</table>
							<div class="taR">
								<input name="_next" type="submit" class="step m10 vm" value="确定" />
								<a href="${basepath }/rewardScoreDep/scoreDepList.html"
									class="back m10 vm">关闭</a>
							</div>
						</form>


					</div>
				</div>
			</div>

		</div>
	</div>

	<script type="text/javascript">
	var basepath = "${basepath}";
</script>
	<script type="text/javascript">
		    var depId = "${depId}";
		</script>

	<jsp:include page="/WEB-INF/page/include/script.jsp" />
	<script type="text/javascript"
		src="${basepath }/js/score/scoreDepFp.js" charset="gbk"></script>
	<script type="text/javascript"
		src="${basepath }/js/score/blockScoreDep.js" charset="gbk"></script>
	
</body>

</html>