<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="content-language" content="utf-8" />
	<title>同步课堂详情</title>
	<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
	</head>
	<body class="bg">
		<div class="container">
		    <!-- 导入头部 -->
		    <jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
		  	<div class="content cl">
				<div class="ngreyborder changeblue2 mt20">
		        	<h2 class="png_bg">课程详情</h2>
		            <div class="coursedetails">
		            	<ul class="reHeight">
		                	<li class="pic"><img src="${basepath }/images/ex2.jpg" width="223" height="163" /></li>
		                    <li class="pl30">
		                    	<h5>${video.name }</h5><br/>
		                        课堂类型 : <br/>
		                        时间 : ${video.startTm }-${video.endTm }<br/>
								主持人 : ${video.compere.name }<br/>
								讲师 : ${video.speaker.name }
		                    </li>
		                    <li class="y mt20">
		                    	<a class="step m10" href="">浏览</a><br/>
		                        <a class="back m10" href="">点评</a><br/>
		                        <a class="back m10" href="toupdate.html?rvid=${video.vId }">修改</a><br/>
		                    </li>
		                </ul>
		            	<h3>主要内容</h3>
		                <p>${video.introduction }</p>
		                <h3>参与人员</h3>
		                <p><a href="">查看人员</a></p>
		                <h3>附件资料</h3>
		                <p><a href="">查看附件</a></p>
		            </div>
		        </div>
		        <div align="right"><a href="" class="report">举报此文档</a></div>
	   		</div>
		</div>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
	</body>
</html>