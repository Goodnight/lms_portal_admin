<%@page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>需求参与情况</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>
<body class="bg">
	<jsp:include page="/WEB-INF/page/include/downloadData.jsp"></jsp:include>
	<div class="container">
		<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
		<input type="hidden" id="sId" value="${sId}" />
		<div class="breadCrumbHolder breadCrumbPage">
			<div class="headerco">
				<div class="breadCrumb reHeight noborder" id="breadCrumb3">
					<div class="z">
						<ul>
							<li class="first"><a href="${basepath }/index.html">首页</a></li>
							<li><a href="${basepath }/inquiry/inquiryIndex.html">培训需求</a>
							</li>
							<li class="last">${surveyName }</li>
						</ul>
					</div>
					<div class="y"></div>
				</div>
			</div>
		</div>
		<div class="content cl">
			<div class="ngreyborder changeblue2 mt20">
				<h2 class="png_bg">需求参与情况</h2>
				<div class="courseupload" style="padding-top: 20px;">
					<ul>
						<li class="now">参与人员</li>
						<!-- <li>未参与人员</li> -->
					</ul>
					<div class="mt10">
						<div>
							<div class="dataTables_wrapper">
								<div id="inquiryPersonListInfo1"></div>
							</div>
						</div>
						<div class="hidden">
							<div class="taR mr10">
								<!-- 发布屏蔽   <a href="javascript:;" class="functionbutton mailreminder">邮件提醒</a> -->
								<a id="btn_delete" class="functionbutton">删除人员</a>
							</div>
							<div class="dataTables_wrapper">
								<div id="inquiryPersonListInfo2"></div>
							</div>
						</div>
					</div>
					<div class="taR">
						<input type="button" class="functionbutton" value="导出"
							onclick="export_participateUser()" /> <a
							href="${basepath }/inquiry/inquiryIndex.html" class="back m10">关闭</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
	<script type="text/javascript"
		src="${basepath}/js/inquiry/inquiryPerson.js"></script>
</body>
</html>
