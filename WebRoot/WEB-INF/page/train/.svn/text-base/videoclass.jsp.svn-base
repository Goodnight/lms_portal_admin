<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>同步课堂</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
	<body class="bg">
		<!-- 对话框 -->
		<div id="dialog" class="hidden">
			<div class="blackall">&nbsp;</div>
			<div class="newwindow" id="choosepersonco">
				<div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
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
                                  <li class="first">
                                      <a href="${basepath }/index.html">首页</a>
                                  </li>
                                  <li>
                                      <a href="${basepath }/trainclass/index.html">培训班管理</a>
                                  </li>
                                  <li>${tc.name }</li>
                                  <li class="last">
                                      同步课堂
                                  </li>
                          	</ul>
                          </div>
                          <div class="y"></div>
			      </div> 
			    </div>
			  </div>
		  	<div class="content">
		        <ul class="window_nav">
		            <li class="basic"><a href="information.html?tcid=${tcid }" class="green png_bg">基本信息</a></li>
		            <li class="course"><a href="course.html?tcid=${tcid }" class="green png_bg">课程设置</a></li>
		            <li class="person"><a href="staffing.html?tcid=${tcid }" class="green png_bg">人员设置</a></li>
		            <li class="sameclass"><a href="videoclass.html?tcid=${tcid }" class="png_bg">同步课堂</a></li>
		            <li class="examadmin"><a href="examination.html?tcid=${tcid }" class="grey png_bg">考试管理</a></li>
		            <li class="evaluate"><a href="estimate.html?tcid=${tcid }" class="grey png_bg">评估设置</a></li>
		            <c:choose>
		            	<c:when test="${tc.way.name eq '在线' }">
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
           					<li class="certificate"><a href="certificate.html?tcid=${tcid }" class="grey png_bg">证书发布</a></li>
           				</c:when>
           				<c:otherwise>
           					<li class="certificate"><a href="#" class="grey png_bg">证书发布</a></li>
           				</c:otherwise>
           			</c:choose>
           			 -->
		        </ul>
		    	<div class="window sclassroom">
		   	  		<ul class="dpnav reHeight">
		                <li class="now">同步课堂</li>
		            </ul>
					<div class="pr">
		            	<span class="creatadd">
		            		<a href="${basepath }/videoclass/new.html?tcid=${tcid }" id="creatlesson"  class="functionbutton">新建</a>
		            		<a href="javascript:;" id="btn_delete"  class="functionbutton">删除</a>
		            	</span>
		        	</div>
		        	<!-- 同步课堂列表 -->
		        	<div class="dataTables_wrapper">
				            <div id="list_videoclass"></div>
				 	</div>
		        </div>
		        <div class="windowlast">
		        	<p>
			        	<a href="${basepath }/trainclass/staffing.html?tcid=${tcid}" class="step vm" >上一步</a>
		        		<a href="${basepath }/trainclass/examination.html?tcid=${tcid }" class="step ml30 vm">下一步</a>
		        		<a href="#"  class="back ml30 vm allclose" >关闭</a>
		        	</p>
		    	</div>
		    </div>
		</div>
		<script type="text/javascript">
			var tcid="${tcid}";
		</script>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		<script type="text/javascript" src="${basepath }/js/train/videoclass.js" charset="gbk"></script>
	</body>

</html>