<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<c:choose><c:when test="${surveyType==1}">培训需求模版</c:when><c:otherwise>培训评估模版</c:otherwise></c:choose>