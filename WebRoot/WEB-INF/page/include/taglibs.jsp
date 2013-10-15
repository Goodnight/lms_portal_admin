<%@ page trimDirectiveWhitespaces="true" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<c:set var="SERVER" value="http://${pageContext.request.serverName}:${pageContext.request.serverPort}" />
<c:set var="basepath" value="${pageContext.request.contextPath}" />
<c:set var="path" value="${SERVER}${pageContext.request.contextPath}" />
<c:set var="requestURL" value="${pageContext.request.requestURL}" />
<c:set var="portal_sutdent_url" value="http://student.lms.myctu.cn" scope="request"/>


