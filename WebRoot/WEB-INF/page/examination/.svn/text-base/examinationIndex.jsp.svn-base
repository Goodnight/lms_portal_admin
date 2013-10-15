<%@ page language="java" contentType="text/html; charset=utf-8"
   %>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>考试管理</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>


</head>
<body class="bg">

<div class="container">
	<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
	
    <div class="cl">
    	<div class="newright">
        	<div class="newrightco">
            	<!--
            		<iframe width="100%"  scrolling="no" frameborder="0" src="${requestScope.url}"  id="passageFrame" name="win" height="2000"></iframe>
            	-->
            	<iframe id="frame_content"  name="frame_content" src="${requestScope.url}" width="100%" height="0" scrolling="no" frameborder="0"></iframe>
            </div>
        </div>
    	<div class="newleft">
        	<c:set var="menu_sn" value="${menu_sn}" scope="request"></c:set>
        	<jsp:include page="/WEB-INF/page/include/leftNav.jsp"></jsp:include>
        </div>

        
        
    </div> 
    
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
<script type="text/javascript" src="${basepath }/js/autoHeight.js"></script>
</body>

</html>






