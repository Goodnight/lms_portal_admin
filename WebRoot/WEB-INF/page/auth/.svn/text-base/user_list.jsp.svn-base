<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>员工信息列表</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" /></head>
<%
 if(request.getAttribute("error")=="error"){
  	String show = "<script language='javascript' type='text/javascript'>alert('保存失败')</script>";
  	out.println(show);
 }
%>

<body class="bg">
    <jsp:include page="/WEB-INF/page/include/swfUploadAddOrUpdate.jsp"></jsp:include>
    <jsp:include page="/WEB-INF/page/include/downloadData.jsp"></jsp:include>
	<div id="dialog" class="hidden">
		<div class="blackall">&nbsp;</div>
		<div class="newwindow">
			<div class="taR">
				<a href="javascript:;"><img class="png_bg closebutton"
					src="${basepath }/images/close.png" width="40" height="40" /> </a>
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
										<li class="first"><a href="${basepath }/index.html">首页</a>
										</li>
										<li><a href="#">基础数据</a></li>
										<li class="last">员工信息列表</li>
									</ul>
								</div>
								<div class="y"></div>
							</div>
						</div>
					</div>
					<div class="reHeight">
						<div class="newmain">
							<div class="newmainco">
								<form id="query_form" action="#">
									<div class="searchblock">
										<ul class="dpnav2 m10">
											<li class="now">查询</li>
										</ul>
										<table border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td class="taR">员工编号</td>
												<td class="taL"><input id="sn" name="sn" type="text"
													class="input" /> <input type="hidden" id="search_orgid"
													value="" /></td>
												<td class="taR">员工姓名</td>
												<td class="taL"><input id="name" type="text"
													class="input" /></td>
											</tr>
											<tr>
												<td class="taR">手机号码</td>
												<td class="taL"><input id="mobile"
													name="mobile" type="text" class="input" /></td>
												<td class="taR">邮箱</td>
												<td class="taL"><input id="mail" type="text"
													class="input" /></td>
												<td class="taR">身份证号码</td>
												<td class="taL"><input id="cate" type="text"
													class="input" /></td>
											</tr>
											<tr>
												<td class="taR">帐号状态</td>
												<td class="taL"><select id="status" class="select">
														<option value="">不限</option>
														<option value="1">有效</option>
														<option value="0">无效</option>
												</select></td>
												<td class="taR">用工性质</td>
												<td class="taL"><select id="empNature" name="empNature"
													class="select">
														<option value="">不限</option>
														<c:forEach var="sp" items="${empNatureList }">
															<option value="${sp.spId }">${sp.name }</option>
														</c:forEach>
												</select></td>
											</tr>
										</table>
										<div align="right" class="mt10">
											<input name="" type="button" class="searchbutton m10" value="搜索" hidefocus="true" />
											<input id="orgDepOriId" type="hidden" value="${orgDepOriId }" />	
										</div>
									</div>
								</form>
								<div class="classlist">
									<!-- 员工列表 -->
									<div class="dataTables_wrapper">
										<h3 class="reHeight">
											<div class="z">员工信息列表</div>
											<div class="y">
												<input id="link_new" type="button" class="functionbutton" value="新建" /> 
												<input type="button" class="functionbutton" value="导入" onclick="openWindow('officialAddUser.xlsx')" />
												<input type="button" class="functionbutton" value="导出" onclick="export_user()"/>
												<input id="btn_delete" type="button" class="functionbutton" value="删除" />
											</div>
										</h3>
										<div id="list_user" style="margin-top: 3px"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="newlefttree">
							<div class="pftree">
								<h3>机构部门</h3>
								<div class="m10">
									<input id="old_dep" type="hidden" value="${old_dep}" />
									是否包含下级 <label class="ml12"> <input name="ischilddep"
										type="radio" value="0" class="vm" checked="checked" /> 是
									</label> <label class="ml12"> <input name="ischilddep"
										type="radio" value="1" class="vm" /> 否
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
				<c:set var="menu_sn" value="3" scope="request"></c:set>
				<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
			</div>
		</div>
	</div>
	<jsp:include page="/WEB-INF/page/include/script.jsp" />
	<script type="text/javascript">
		var user_depid = "${sessionScope.user.org.orgId}";
		var old_dep= $('#old_dep').val();
		var idarrys = 9002;
		var opener = idarrys;
		if(old_dep!=null&&old_dep!=""&&old_dep.length>0)
		{
			var idarrys =  old_dep.split("/");
			for(var i=0;i<idarrys.length;i++){
				if(idarrys[i]==null||idarrys[i]==""){
					idarrys[i] = 0;
				}
			}
			var opener = idarrys[idarrys.length-1];
		}
		
		var _URL = basepath + "/user/importAddList.html";
	</script>
	<script type="text/javascript" src="${basepath }/js/auth/user.js" charset="gbk"></script>
	<script type="text/javascript" src="${basepath }/js/ajaxfileupload.js"></script>
	<script type="text/javascript" src="${basepath }/js/jquery.form.js"></script>	
</body>
</html>
