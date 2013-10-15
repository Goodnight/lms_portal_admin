<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>培训评估设置</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
	<form id="form1">
		<input type="hidden" id="importType" name="importType"
			value=responseResult /> <input type="hidden" id="objId" name="objId" />
	</form>
	<div class="blackall hidden">&nbsp;</div>
	<div class="container">
		<!-- 导入的头部 -->
		<jsp:include page="/WEB-INF/page/include/header.jsp" />
		<div class="breadCrumbHolder breadCrumbPage">
			<div class="headerco">
				<div class="breadCrumb reHeight noborder" id="breadCrumb3">
					<div class="z">
						<ul>
							<li class="first"><a href="${basepath }/index.html">首页</a></li>
							<li><a href="${basepath }/trainclass/index.html">培训班管理</a></li>
							<li>${tc.name }</li>
							<li class="last">评估设置</li>
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
					class="green png_bg">人员设置</a></li>
				<li class="sameclass"><a href="videoclass.html?tcid=${tcid }"
					class="green png_bg">同步课堂</a></li>
				<li class="examadmin"><a href="examination.html?tcid=${tcid }"
					class="green png_bg">考试管理</a></li>
				<li class="evaluate"><a href="estimate.html?tcid=${tcid }"
					class="png_bg">评估设置</a></li>
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
       					<li class="certificate"><a href="certificate.html?tcid=${tcid }" class="grey png_bg">证书发布</a></li>
       				</c:when>
       				<c:otherwise>
       					<li class="certificate"><a href="#" class="grey png_bg">证书发布</a></li>
       				</c:otherwise>
       			</c:choose>
       			 -->
			</ul>
			<div class="window sclassroom">
				<!-- 建设中提示 -->
				<div style="text-align: center; font-size: 20px" class="hidden">
					功能完善中，请等待...</div>
				<div class="">
					<ul class="dpnav reHeight">
						<li class="now">反应层评估</li>
						<li class="">行为层评估</li>
					</ul>
					<div></div>
					<div>
						<div>
							<!-- 反应层评估列表 -->
							<div class="pr taR" style="margin-right: 20px;">
								<span> <a
									" href="${basepath }/trainclass/response/new.html?tcid=${tcid}"
									class="functionbutton">新建</a> <input type="button"
									class="functionbutton leadin" value="导入评估结果" /> <input
									id="response" class="functionbutton btn_delete" type="button"
									value="删除" /> <!-- 
					            		<input id="btn_notice" type="button" class="functionbutton mailreminder hidden" value="邮件提醒" />
					            		 -->
								</span>
							</div>
							<div id="list_response_estimate" class="dataTables_wrapper"
								style="margin-top: 3px"></div>
						</div>
						<div class="hidden">
							<!-- 行为层评估 -->
							<div class="pr taR" style="margin-right: 20px;">
								<span> <a
									href="${basepath }/trainclass/behavior/new.html?tcid=${tcid}"
									class="functionbutton">新建</a> <input id="behavior"
									class="functionbutton btn_delete" type="button" value="删除" />
									<!-- <input id="btn_notice" type="button" class="functionbutton mailreminder hidden" value="邮件提醒" /> -->
								</span>
							</div>
							<div id="list_behaviour_estimate" class="dataTables_wrapper"
								style="margin-top: 3px"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="windowlast">
				<p>
					<a class="step vm" href="examination.html?tcid=${tcid}">上一步</a>
					<c:choose>
						<c:when test="${tc.way.name eq '在线' }">
							<a class="step vm ml30" href="statistics.html?tcid=${tcid }">下一步</a>
						</c:when>
						<c:otherwise>
							<a class="step vm ml30" href="facecourse.html?tcid=${tcid}">下一步</a>
						</c:otherwise>
					</c:choose>
					<a href="#" class="back ml30 vm allclose">关闭</a>
				</p>

			</div>
		</div>

	</div>
	<script type="text/javascript">
		var tcid = "${tcid}";
	</script>
	<jsp:include page="/WEB-INF/page/include/script.jsp" />
	<script type="text/javascript" src="${basepath }/js/train/estimate.js"
		charset="gbk"></script>
	<jsp:include page="/WEB-INF/page/include/upload.jsp"></jsp:include>
</body>

</html>