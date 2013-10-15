<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>部门变更</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div class="blackall hidden">&nbsp;</div>
<div class="treewindow" >
	<div id="changeOrg_tree" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="#" class="back vm treewindowback">取消</a></div>                    
</div>
<div id="dialog" class="hidden">
	<div class="blackall_new">&nbsp;</div>
	<div class="newwindow" id="choosepersonco">
		<div class="taR"><a href="#"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
	    <div id="dialog_content" class="cl scroll"></div>
	</div>
</div>
<div class="container">
    <jsp:include page="/WEB-INF/page/include/header.jsp" />
    <div class="breadCrumbHolder breadCrumbPage">
    	<div class="headerco">
	        <div class="breadCrumb reHeight noborder"  id="breadCrumb3">
	            <div class="z">
	                <ul>
	                    <li class="first"><a href="${basepath }/index.html">首页</a></li>
	                    <li>基础数据</li>
	                    <li><a href="${basepath }/user/list.html">员工信息</a></li>
	                    <li class="last">
	                    	部门变更 - ${user.name }
	                    </li>
	                </ul>
	            </div>
	            <div class="y"></div>
	        </div>
        </div>
    </div>
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">部门变更 - ${user.name }</h2>
            <div class="courseupload basic_information">
            	<ul>
                	<li class="now">部门变更</li>
                </ul>
                <div>
                	<div>
                    	<form action="changedep/save.html" method="post">
	                        <table border="0" cellspacing="15" cellpadding="15">
		                        <colgroup>
		                            <col width="90" />
		                        </colgroup>
		                        <tbody>
		                            <tr>
		                                <td class="taR">部门</td>
		                                <td>
		                                	<input id="old_dep" name="old_dep" type="hidden" value="${old_dep}" />
		                                	<input type="hidden" name="uid" value="${user.uid }" />
		                                	<input id="dep_name" type="text" class="input vm" value="${user.org.name }" />
		                                	<input id="dep_id" type="hidden" name="orgId" value="${user.org.orgId }" />
		                                	<span id="changedep" class="vm newshowtree">选择部门</span>
		                                </td>
		                            </tr>
		                        </tbody>
	                        </table>
	                        <div align="right" class="mr10">
	                        	<input type="submit" class="step m10 vm" value="确定"/>
	                        	<a href="${basepath }/user/list.html" class="back m10 vm">关闭</a>
	                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath}/js/demand/newblock.js" charset="gbk"></script>
<script type="text/javascript">
	$(function(){
		initTree("#changeOrg_tree",[],[],"org",function(type,id,name){
			if(type == 'dep'){
				$("#dep_name").val(name);
				$("#dep_id").val(id);
			}

		});
		
	});
</script>
</body>
</html>
