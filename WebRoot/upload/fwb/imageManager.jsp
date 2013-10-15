<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title></title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
		<script type="text/javascript" src="${basepath }/ueditor/editor_config.js"></script>
        <script type="text/javascript" src="${basepath }/ueditor/editor_all.js"></script>
	</head>
	<body class="bg">
	
		
		
<script type="text/javascript">
    var editor = new UE.ui.Editor();
    editor.render("myEditor");
    //1.2.4以后可以使用一下代码实例化编辑器
    //UE.getEditor('myEditor')
</script>
	</body>

</html>






