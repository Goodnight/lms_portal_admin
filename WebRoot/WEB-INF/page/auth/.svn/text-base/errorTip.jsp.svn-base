<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
  <head>
    <title>无效操作</title>
    <jsp:include page="/WEB-INF/page/include/css.jsp" />
  </head>
  
  <body class="bg">
    <div class="container">
            <!-- 导入头部文件 -->
            <jsp:include page="/WEB-INF/page/include/header.jsp" />
            <div class="content cl">
                <div class="ngreyborder changeblue2 mt20">
                    <div style="text-align:center;font-size:16px;padding:20px 0">
                        <c:if test="${type == 'sn' }">角色编号输入为空, 请重新新建!</c:if>
                        <c:if test="${type == 'name' }">角色名称输入为空, 请重新新建!</c:if>
                    </div>
                </div>
                <div  align="right"><a href="${basepath }/auth/roleManagement.html" class="step m10">返回</a></div>
            </div>
    </div>
  </body>
</html>
