<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>直线经理列表</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>

<body class="bg">
<div id="dialog" class="hidden">
    <div class="blackall">&nbsp;</div>
    <div class="newwindow" id="choosepersonco">
        <div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
        <div id="dialog_content" class="cl"></div>
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
                        <div class="breadCrumbHolder">
                            <div class="breadCrumb reHeight" id="breadCrumb3">
                                <div class="z">
                                    <ul>
                                        <li class="first">
                                            <a href="${basepath }/index.html">首页</a>
                                        </li>
                                        <li>
                                            <a href="${basepath }/auth/lineManagerList.html">直线经理</a>
                                        </li>
                                        <li class="last"></li>
                                    </ul>
                                </div>
                                <div class="y"></div>
                            </div>
                        </div>
                        </div>
                        <div class="reHeight">
                        <div class="newmain">
                        <div class="newmainco">
                        <div class="searchblock pt15">
                                <ul class="dpnav2 m10">
                                    <li class="now">查询</li>
                                </ul>
                                <table border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td class="taR">直线经理编号</td>
                                        <td class="taL">
                                            <input type="hidden" id="search_orgid" value=""/>
                                            <input name="sn" id="snId" type="text" class="input"/>
                                        </td>
                                        <td class="taR">直线经理姓名</td>
                                        <td class="taL"><input name="name" id="nameId" type="text" class="input"/></td>
                                      </tr>
                                      <tr>
                                        <td class="taR">授权人</td>
                                        <td class="taL">
                                            <input id="accreditor_name" name="accreditor" type="text" value="${lm.accreditor.name }" />
                                            <input id="accreditor_id" name="accreditor_name" type="hidden" value="${lm.accreditor.uid }"/>
                                            <span id="accreditor" class="tochoose vm chooseperson">选择授权人</span>
                                        </td>
                                        <td class="taR">授权时间</td>
                                        <td class="taL"><input name="accredit_time" id="timeId" type="text" class="timetext cls_date"/></td>
                                      </tr>
                                      <tr>
                                        <td class="taR">包含子机构</td>
                                        <td class="taL" colspan="3">
                                            <select name="isSub" id="subId" class="select">
                                                <option value="1">包含</option>
                                                <option value="0">不包含</option>  
                                            </select>
                                        </td>
                                      </tr>
                            </table>
                            <div align="right" class="mt10">
                                <input id="searchButton" type="button" class="searchbutton m10" value="搜索"/>
                            </div>
                        </div>
                            <!-- 直线经理列表 -->
                            <div class="dataTables_wrapper">
                            <h3 class="reHeight">
                                <div class="z">直线经理列表</div>
                                <div class="y">
                                    <a href="javascript:;" id="addManager" class="functionbutton">添加</a>
                                    <a href="#" class="functionbutton leadout">导出</a>
                                    <a id="btn_delete" href="javascript:;" class="functionbutton" >权限移除</a>
                                </div>
                            </h3>
                            <div id="list_linemanagerlist"></div>
                        </div>
                    </div>
                </div>
            <div class="newlefttree">
               <div class="pftree">
                   <h3>机构部门</h3>
                   <div class="m10">
                                                                              是否包含下级
                       <label class="ml12"><input name="1" type="radio" value="" class="vm" checked="checked" /> 是</label>
                       <label class="ml12"><input name="1" type="radio" value="" class="vm" /> 否</label>
                   </div>
                   <div id="org_jstree"></div>
               </div>
            </div>
            <div class="extra">
                <h3><div class="extraimg"></div><div class="extraimg extraimon"></div><div class="extraimg extraimg2"></div><div class="extraimg extraimon2"></div></h3>
            </div>
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
<script type="text/javascript">
    var lmId = "${lm.lmId}";
    var pid="";
    var userurl = basepath + "/auth/saveManager.html";
</script>
<script type="text/javascript" src="${basepath }/js/auth/lineManager.js" charset="gbk"></script>
</body>
</html>
