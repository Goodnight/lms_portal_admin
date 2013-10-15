<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>考试管理</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div class="blackall hidden">&nbsp;</div>
<div class="container">
    <jsp:include page="/WEB-INF/page/include/header.jsp" />
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
                         考试管理
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
            <li class="sameclass"><a href="videoclass.html?tcid=${tcid }" class="green png_bg">同步课堂</a></li>
            <li class="examadmin"><a href="examination.html?tcid=${tcid }" class="png_bg">考试管理</a></li>
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
    	<div class="window sclassroom p0 ">
            <div class="basic_information">
            	<h2>考试管理</h2>
               	<div class="sclassroom ">
		        	 <iframe id="frame_content"  name="frame_content" src="${examURL }/www/command/TrainingClassDeptControlNew?action=listtest&tc_deptid=${tc.creater.org.orgId}&tc_id=${tcid }&CurrentResourceID=12404" width="100%" height="0" scrolling="no" frameborder="0"></iframe>
		        	<!-- 
		        			<iframe width="100%" src="http://bank.exam.myctu.cn/www/command/TrainingClassDeptControlNew?action=listtest&tc_deptid=${tc.dep.orgId}&tc_id=${tcid }&CurrentResourceID=12404" id="passageFrame" name="win" scrolling="no" frameborder="no"></iframe>
		    		 -->
		    	</div>
		    	
		    	<!-- 建设中提示 -->
		        <div style="text-align:center;font-size:20px" class="hidden">
		        	功能完善中，请等待...
		        </div>
		        
            </div>
        </div>
        
        
        
      <div class="windowlast">
        	<p>
        		<a class="step vm" href="videoclass.html?tcid=${tcid}">上一步</a>
	        	<a class="step vm" href="estimate.html?tcid=${tcid}" style="margin-left:10px">下一步</a>
	        	<a href="#" class="back ml30 vm allclose" >关闭</a>
	        </p>
            
    	</div>
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath }/js/autoHeight.js"></script>	
</body>

</html>







