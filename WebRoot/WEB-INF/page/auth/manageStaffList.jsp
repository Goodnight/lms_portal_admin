<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>管理人员列表</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>

<body class="bg">
<form id="form1">
	<input type="hidden" id="importType" name="importType" value="userManage" />
	<input type="hidden" id="objId" name="objId" value="${user.uid }" />
</form>
<div class="blackall hidden">
			&nbsp;
</div>
<div id="dialog" class="hidden">
    <!-- 半透明背景 -->
    <div class="blackall">&nbsp;</div>
    <div class="newwindow" id="choosepersonco">
        <!-- 关闭按钮 -->
        <div class="taR"><a href="javascript:;"><img id="btn_closeRole" class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
        <!-- 对话框内容 -->
        <div id="dialog_content" class="cl"></div>
    </div>
</div>

<div class="treewindow" >
    <h2>管理范围</h2>
    <div id="new_jstree_checkbox" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
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
                                            <a href="${basepath }/auth/manageStaffList.html">权限管理</a>
                                        </li>
                                        <li>
                                            <a href="${basepath }/auth/manageStaffList.html">管理人员列表</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="y"></div>
                            </div>
                        </div>
                        </div>
                        <div class="reHeight">
                        <div class="newmain">
                        <div class="newmainco">
                        <div class="searchblock">
                              <ul class="dpnav2 m10 reHeight">
                                  <li class="now">查询</li>
                              </ul>
                              <table border="0" cellspacing="0" cellpadding="0">
                              <tr>
                              <input type="hidden" id="search_orgDepId" value=""/>
                              <!--
                                <td class="taR">角色</td>
                                <td class="taL">
                                
                                <select id="rollco" name="roleName" class="select">
                                    <option value="">全部</option>
                                    <c:forEach items="${roleList }" var="r">
                                        <c:choose>
                                            <c:when test="${r.rId == rb.rId}">
                                                <option value="${r.rId }" selected="selected">${r.name }</option>
                                            </c:when>
                                            <c:otherwise>
                                                <option value="${r.rId }">${r.name }</option>
                                            </c:otherwise>
                                        </c:choose>
                                    </c:forEach>
                                </select>
                                <input id="rollco" name="roleName" type="text" class="inputtext" value="输入角色名称" />
                                </td>
                                -->
                                <td class="taR">编号</td>
                                <td class="taL"><input id="snId" type="text" class="input" value=""/></td>
                                <td class="taR">姓名</td>
                                <td class="taL"><input id="nameId" type="text" class="input" value=""/></td>
                              </tr>
                              <tr>
                                <td class="taR">授权人</td>
                                <td class="taL">
                                    <input id="orgDepOriId" type="hidden" value="${orgDepOriId }" />
                                    <input id="authorizePerson_name" name="authorizePerson" type="text" value="${ur.authorizePerson.name }" class="input" />
                                    <input id="authorizePerson_id" name="authorizePerson_name" type="hidden" value="${ur.authorizePerson.uid }"/>
                                    <span id="authorizePerson" class="tochoose vm chooseperson">选择授权人</span>
                                    <span id="clearFlush" class="tochoose vm">重置</span>
                                </td>
                                <td class="taR">授权时间</td>
                                <td class="taL" colspan="3"><input name="authorizedTime" id="startTimeId" type="text" class="input vm si"/><em>-</em><input id="endTimeId" type="text" class="input vm si"/></td>
                              </tr>
                            </table>
                            <div align="right" class="mt10">
                                <input id="searchButton" type="button" class="searchbutton m10" value="搜索"/>
                            </div>
                        </div>
                        <div>
                            <!-- 管理人员列表 -->
                            <div class="dataTables_wrapper">
                            <h3 class="reHeight">
                                <div class="z style="font-size:14px">管理人员列表</div>
                                <div class="y">
                                    <a id="leadin" href="javascript:;" class="functionbutton">导入</a>
                                    <a href="newManageStaff.html" class="functionbutton">新增管理员</a>
                                    <a id="btn_delete" href="javascript:;" class="functionbutton">管理员删除</a>
                                </div>
                            </h3>    
                                <div id="list_managestafflist" style="width:100%;overflow-x:auto;"></div>
                            </div>
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
<script type="text/javascript" src="${basepath}/js/demand/newblock.js" charset="gbk"></script>
<script type="text/javascript" src="${basepath }/js/auth/lineStaff.js" charset="gbk"></script>
<jsp:include page="/WEB-INF/page/include/upload.jsp"></jsp:include>

<!--<script type="text/javascript">
    var pid="${rb.rId}";
    var userurl = basepath + "/auth/saveStaff.html";
</script> -->
</body>
</html>
