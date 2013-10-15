<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
  <head>
    <title>登录失败</title>
	<jsp:include page="/WEB-INF/page/include/css.jsp" />
  </head>
  
  <body class="bg">
  	<div class="container">
		    <div class="content cl">
				<div class="ngreyborder changeblue2 mt20">
		        	<div style="text-align:center;font-size:16px;padding:20px 0">登录失败，没有获得SSO用户信息or用户无效</div>
		        </div>
		        <div  align="right"><a href="#" onclick="javascript:window.history.go(-1);" class="step m10">返回</a></div>
		    </div>
	</div>
  </body>
</html>
