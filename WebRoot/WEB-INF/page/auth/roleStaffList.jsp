<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>角色人员管理</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>

<body class="bg">
<div id="dialog" class="hidden">
    <div class="blackall">&nbsp;</div>
    <div class="newwindow" id="choosepersonco">
        <div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
        <div id="dialog_content"></div>
    </div>
</div>

<div class="container">
<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
    <div class="content">
    <jsp:include page="/WEB-INF/page/include/leftNav.jsp"></jsp:include>
        <div class="rightco">
            <div>
                <div class="main pl0">
                    <div class="mainco">
                        <div class="breadCrumbHolder">
                            <div class="breadCrumb reHeight" id="breadCrumb3">
                                <div class="z">
                                    <ul>
                                        <li class="first">
                                            <a href="${basepath }/index.html">首页</a>
                                        </li>
                                        <li>
                                            <a href="${basepath }/auth/roleManagement.html">权限管理</a>
                                        </li>
                                        <li>
                                            <a href="${basepath }/auth/manageStaffList.html">管理人员列表</a>
                                        </li>
                                        <li class="last">
                                            ${rb.name}
                                        </li>
                                    </ul>
                                </div>
                                <div class="y"></div>
                            </div>
                        </div>
                        <div class="searchblock">
                            <ul class="dpnav2 m10 reHeight">
                                <li class="now">查询</li>
                            </ul>
                            <table border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td class="taR">角色</td>
                                    <td class="taL">${rb.name}</td>
                                    <td class="taR">编号</td>
                                    <td class="taL"><input id="snId" type="text" class="input" value=""/></td>
                                    <td class="taR">姓名</td>
                                    <td class="taL"><input id="nameId" type="text" class="input" value=""/></td>
                               </tr>
                            </table>
                            <div align="right" class="mt10">
                                <input id="searchButton" type="button" class="searchbutton m10" value="搜索"/>
                            </div>
                        </div>
                        
                        <div class="classlist">
                            <h3 class="reHeight">
                                <div class="z">角色人员管理列表</div>
                                <div class="y mr5">
                                    <input id="roleId" type="hidden" value="${rb.rId }"/>
                                </div>
                            </h3>
                            <div class="dataTables_wrapper">
                                <!-- 权限管理 - 角色人员管理列表 -->         
                                <div id="list_roleStaffList"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
<script type="text/javascript" src="${basepath }/js/auth/roleStaff.js" charset="gbk"></script>
<script type="text/javascript">
    var pid="${rb.rId}";
    var userurl = basepath + "/auth/saveStaff.html";
</script>
</body>
</html>

