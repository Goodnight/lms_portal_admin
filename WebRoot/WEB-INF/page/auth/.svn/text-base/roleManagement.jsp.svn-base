<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="UTF-8" xml:lang="UTF-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="content-language" content="UTF-8" />
<title>角色管理</title>
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
<!-- 导入头部文件 -->
<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
<div class="cl">
    <div class="newright">
        <div class="newrightco">
            <div class="listpagenav">
            <!-- 页面导航 -->
                        <div class="breadCrumbHolder pf">
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
                                            <a href="${basepath }/auth/roleManagement.html">角色管理列表</a>
                                        </li>
                                        <li class="last"></li>
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
                                <table border="0" cellspacing="0" cellpadding="0" width="80%">
                              <tr>
                                <td class="taR">角色类型</td>
                                <td class="taL" id="roll">
                                    <input type="hidden" id="search_orgDepId" value=""/>
                                    <input id="orgDepOriId" type="hidden" value="${orgDepOriId }" />
                                    <label>
                                        <span class="option choosed">
                                            <input name="type" id="typeId" class="clearBoth" type="radio" value="" />
                                        </span>全部
                                    </label>
                                    <label class="autowidth">
                                        <span class="option">
                                            <input name="type" id="typeId" type="radio" class="clearSelfDefine" value="1" />
                                        </span> 初始角色
                                    </label>
                                    <label class="autowidth">
                                        <span class="option">
                                            <input name="type" id="typeId" type="radio" class="clearOriginal" value="2" />
                                        </span> 自定义角色
                                    </label>
                                </td>
                                
                                <td class="taR">角色名称</td>
                                <td class="taL">
                                <!--  
                                <select id="rollco" name="name" class="select">
                                    <option value="">全部</option>
                                    <c:forEach items="${roleList }" var="r">
                                        <c:choose>
                                            <c:when test="${r.rId == rb.rId}">
                                                <option value="${r.name }" selected="selected">${r.name }</option>
                                            </c:when>
                                            <c:otherwise>
                                                <option value="${r.name }">${r.name }</option>
                                            </c:otherwise>
                                        </c:choose>
                                    </c:forEach>
                                </select>
                                 -->
                                <input type="text" class="input" id="roleName" value="" maxlength="50" /></td>
                              </tr>
                            </table>
                            <div align="right" class="mt10">
                                <input id="searchButton" type="button" class="searchbutton m10" value="搜索"/>
                            </div>   
                        </div>
                            <!--  角色管理列表 -->
                            <div class="dataTables_wrapper">
                            <h3 class="reHeight">
                                <div class="z">角色列表</div>
                                <div class="y mr5">
                                <!-- 20130304 修改为各级管理员均可新建删除 -->
                                <!-- 20130517 又TM改回来了 -->
                                <c:if test="${user.type==1 }">
                                    <a href="javascript:;" id="newDefine" class="functionbutton chooseboard">新增自定义</a>
                                    <a id="btn_delete" href="javascript:;" class="functionbutton" >删除</a>
                                </c:if>
                                </div>
                            </h3>
                                <div id="list_roleManageList"></div>
                            </div>
                        </div>
                    </div>
                <div class="newleft">
                <!-- 导入左侧导航 -->
                <c:set var="menu_sn" value="12" scope="request"></c:set>
                <jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
                </div>
             </div>
        </div>
<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
<script type="text/javascript" src="${basepath }/js/auth/roleManage.js" charset="gbk"></script>
<script type="text/javascript">
    var rId = "${rb.rId}";
</script>
</body>
</html>
