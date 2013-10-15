<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!-- 
	负责跳转到登录页面
 -->
<c:choose>
	<c:when test="${param.href!=null }">
		<script type="text/javascript">
			window.top.location = "${basepath}/index.jsp?href=${param.href}";
		</script>
	</c:when>
	<c:otherwise>
		<script type="text/javascript">
			var url = window.location.href;
			window.top.location = "${basepath}/index.jsp?href=" + encodeURI(url);
		</script>
	</c:otherwise>
</c:choose>
