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
                    <div style="text-align:center;font-size:16px;padding:20px 0">您输入的需求调查名称存在重名! 请返回重新操作!</div>
                </div>
                <div align="right">
                    <c:if test="${null!= sId && sId !='' }"><a href="${basepath }/inquiry/updateInquiryIndex.html?sId=${sId }" class="step m10">返回</a></c:if>
                    <c:if test="${null== sId || sId =='' }"><a href="${basepath }/inquiry/inquiryNew.html" class="step m10">返回</a></c:if>
                </div>
            </div>
    </div>
  </body>
</html>
