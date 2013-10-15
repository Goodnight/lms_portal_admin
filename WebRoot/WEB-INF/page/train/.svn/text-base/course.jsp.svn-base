<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>课程设置</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
	</head>
	<body class="bg">
		<form id="form1">
			<input type="hidden" id="importType" name="importType"
				value="trainFaceCourse" />
			<input type="hidden" id="objId" name="objId" value="${tcid}" />
		</form>
		<div class="previewco hidden">
			<div align="right" class="mt10 mr10">
				<img src="${basepath }/images/deletegrey.gif" width="13" height="13" />
			</div>
			<a target="_blank" href="${basepath }/doc/tosaveDocDetails.html?tcid=${tcid}">新建文档</a>
			<a target="_blank" href="${basepath }/case/tosaveCaseDocDetails.html?tcid=${tcid}">新建案例</a>
		</div>
		<div id="dialog" class="hidden">
			<div class="blackall_new">
				&nbsp;
			</div>
			<div class="newwindow" id="choosepersonco">
				<div class="taR">
					<a href="javascript:;"><img class="png_bg closebutton"
							src="${basepath }/images/close.png" width="40" height="40" /> </a>
				</div>
				<div id="dialog_content" class="cl"></div>
			</div>
		</div>

		<div class="blackall hidden">
			&nbsp;
		</div>


		<div class="container">
			<!-- 导入头部 -->
			<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
			<div class="breadCrumbHolder breadCrumbPage">
				<div class="headerco">
					<div class="breadCrumb reHeight noborder" id="breadCrumb3">
						<div class="z">
							<ul>
								<li class="first">
									<a href="${basepath }/index.html">首页</a>
								</li>
								<li>
									<a href="${basepath }/trainclass/index.html">培训班管理</a>
								</li>
								<li>
									${tc.name }
								</li>
								<li class="last">
									课程设置
								</li>
							</ul>
						</div>
						<div class="y"></div>
					</div>
				</div>
			</div>
			<div class="content">
				<ul class="window_nav">
					<li class="basic">
						<a href="information.html?tcid=${tcid }" class="green png_bg">基本信息</a>
					</li>
					<li class="course">
						<a href="course.html?tcid=${tcid }" class="png_bg">课程设置</a>
					</li>
					<li class="person">
						<a href="staffing.html?tcid=${tcid }" class="grey png_bg">人员设置</a>
					</li>
					<li class="sameclass">
						<a href="videoclass.html?tcid=${tcid }" class="grey png_bg">同步课堂</a>
					</li>
					<li class="examadmin">
						<a href="examination.html?tcid=${tcid }" class="grey png_bg">考试管理</a>
					</li>
					<li class="evaluate">
						<a href="estimate.html?tcid=${tcid }" class="grey png_bg">评估设置</a>
					</li>
					<c:choose>
		            	<c:when test="${trainClass.way.name eq '在线' }">
		            		<li class="faceadmin"><a href="bbs.html?tcid=${tcid }" class="grey png_bg">讨论区管理</a></li>
		            		<li class="discuss"><a href="statistics.html?tcid=${tcid }" class="grey png_bg">培训统计</a></li>
		            	</c:when>
		            	<c:otherwise>
		            		<li class="faceadmin"><a href="facecourse.html?tcid=${tcid }" class="grey png_bg">面授管理</a></li>
		            		<li class="discuss"><a href="bbs.html?tcid=${tcid }" class="grey png_bg">讨论区管理</a></li>
		            		<li class="trainsta"><a href="statistics.html?tcid=${tcid }" class="grey png_bg">培训统计</a></li>
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
				<div class="window coursesetting">
					<ul id="tabs" class="dpnav reHeight">
						<li id="tab_online" ${tag eq "online"?"class='now'":"" }>
							在线课程
						</li>
						<li id="tab_live" ${tag eq "live"?"class='now'":"" }>
							直播课程
						</li>
						<li id="tab_face" ${tag eq "face"?"class='now'":"" }>
							面授课程
						</li>
						<li id="tab_doc" ${tag eq "doc"?"class='now'":"" }>
							文档/案例
						</li>
					</ul>
					<div id="buttons" class="pr">
						<span id="btn_online"
							class='creatadd ${tag eq "online"?"":"hidden" }'> <a
							id="add_online" href="#" class="functionbutton" hidefocus="true">添加</a><a target="_blank"
							href="${basepath }/courseware/tosaveCoursewareDetails.html?tcid=${tcid}"
							class="functionbutton">新建</a><a id="btn_delete_online" list="list_onlinecourse" href="#"
							class="functionbutton">删除</a> </span>
						<span id="btn_live" class='creatadd ${tag eq "live"?"":"hidden" }'
							style="margin-left: 844px"> <a id="add_live" href="#"
							class="functionbutton" hidefocus="true">添加</a><a
							id="btn_delete_live" list="list_live" href="#" class="functionbutton">删除</a> </span>
						<span id="btn_face" class='creatadd ${tag eq "face"?"":"hidden" }''>
							<a href="${basepath }/facecourse/new.html?tcid=${tcid}"
							class="functionbutton">新建</a><a id="leadin" href="#"
							class="functionbutton leadin" hidefocus="true">导入</a><a
							id="btn_delete_face" href="#" class="functionbutton">删除</a> </span>
						<span id="btn_doc" class='creatadd ${tag eq "doc"?"":"hidden" }''>
							<a id="add_doc" href="#" class="functionbutton" hidefocus="true">添加</a><a
							id="new_doc" href="#" class="functionbutton">新建</a><a
							id="btn_delete_doc" href="#" class="functionbutton">删除</a> </span>
					</div>
					<div id="contents">
						<!-- 在线课程列表 -->
						<div class='${tag eq "online"?"":"hidden" } dataTables_wrapper'>
							<div id="list_onlinecourse"></div>
						</div>

						<!-- 直播课程 -->
						<div class='${tag eq "live"?"":"hidden" } dataTables_wrapper'>
							<div id="list_live"></div>
						</div>

						<!-- 面授课程 -->
						<div class='${tag eq "face"?"":"hidden" } dataTables_wrapper''>
							<div id="list_face"></div>
						</div>

						<!-- 文档列表 -->
						<div class='${tag eq "doc"?"":"hidden" } dataTables_wrapper''>
							<div id="list_doc"></div>
						</div>

					</div>
				</div>
				<div class="windowlast">
					<p>
						<a href="information.html?tcid=${tcid }" class="step vm"
							hidefocus="true">上一步</a>
						<a href="staffing.html?tcid=${tcid }" class="step ml30 vm"
							hidefocus="true">下一步</a>
						<a href="#" class="back ml30 allclose" hidefocus="true">关闭</a>
					</p>
				</div>
			</div>
		</div>
		<script type="text/javascript">
	var tcid = "${tcid}";
</script>
		<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
		<script type="text/javascript" src="${basepath }/js/train/course.js"
			charset="gbk"></script>
		<jsp:include page="/WEB-INF/page/include/upload.jsp"></jsp:include>
	</body>

</html>






