<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>系统参数</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>
<body class="bg">
<div id="dialog" class="hidden">
    <div class="blackall">&nbsp;</div>
    <div class="newwindow" id="leadinco" style="width:500px;margin-left:-250px;">
        <div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
        <div id="dialog_content"></div>
    </div>
</div>
<div class="container">
<!-- 导入头部文件 -->
<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
    <div class="cl">
        <div class="newright">
            <div class="newrightco">
                <div class="listpagenav">
                        <div class="breadCrumbHolder pf">
                                <div class="breadCrumb reHeight" id="breadCrumb3">
                                    <div class="z">
                                        <ul>
                                            <li class="first"><a href="${basepath }/index.html">首页</a></li>
                                            <li><a href="${basepath }/systemParam/systemParamIndex.html">系统设置</a></li>
                                            <li class="last"><a href="${basepath }/systemParam/systemParamIndex.html">系统参数</a></li>
                                        </ul>
                                    </div>
                                    <div class="y"></div>
                                </div>
                            </div>
                        </div>
                <div class="searchblock">
                    <ul class="dpnav2 m10 reHeight">
                        <li class="now">查询</li>
                    </ul>
                    <table border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td class="taR">参数名</td>
                            <td class="taL"><input id="param_Name" type="text" class="input" value=""/></td>
                            <td class="taR">参数分类</td>
                            <td class="taL">
                                <select id="param_Type" class="select">
                                    <option value="">全部</option>
                                    <c:forEach items="${paramList }" var="p">
                                        <option value="${p.spId }">${p.name }</option>
                                    </c:forEach>
                                </select>
                            </td>
                            
                        </tr>
                        <tr>
                            <td colspan="4" class="taR"><input id="searchButton" type="button" class="searchbutton m10" value="搜索"/></td>
                        </tr>
                       
                    </table>
                </div>
                <div>
                    <!-- 系统参数列表  -->
                    <div class="dataTables_wrapper">
                        <h3 class="reHeight">
                        <div class="z" style="font-size:14px">参数列表</div>
                        <div class="y">
                            <a id="newParam" href="javascript:;" class="functionbutton leadin">新建</a>
                            <a id="btn_delete" href="javascript:;" class="functionbutton">删除</a>
                        </div>
                        </h3>
                        <div id="list_paramList"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="newleft">
            <!-- 导入左侧导航 -->
            <c:set var="menu_sn" value="15" scope="request"></c:set>
            <jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
        </div>     
    </div>    
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
<script type="text/javascript" src="${basepath }/js/systemSet/systemParam.js" charset="gbk"></script>
<script type="text/javascript">
if (!window.console || !console.firebug){
    var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml","group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
    window.console = {};
    for (var i = 0; i < names.length; ++i)
    window.console[names[i]] = function(){};
}  
</script>
</body>
</html>
