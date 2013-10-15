<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>权限分配列表</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>

<body class="bg">
<div class="newwindow hidden" id="chooseboard">
    <div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
    <div class="ngreyborder changeblue2 mt20">
            <h2 class="png_bg">修改角色</h2>
            <div class="basic_information mt2">
                <table border="0" cellspacing="10" cellpadding="10">
                  <tr>
                    <td class="taR">资源编号</td>
                    <td><input name="" type="text" class="input vm si" value="23432"/></td>
                  </tr>
                  <tr>
                    <td class="taR">资源名称</td>
                    <td><input name="" type="text" class="input vm si" value="系统管理员角色"/></td>
                  </tr>
                  <tr>
                    <td class="vt taR" style="padding-top:0">说明</td>
                    <td><textarea name="" cols="" rows="">sdfsdafds</textarea></td>
                  </tr>
                </table>
                
                 <div align="right" class="mr10" ><input name="" type="button" class="step m10 windowbutton" value="保存"/><input name="" type="button" class="back m10 windowbutton" value="关闭"/></div>
            </div>
        </div>
</div>

<div id="dialog" class="hidden">
    <div class="blackall">&nbsp;</div>
    <div class="newwindow" id="choosepersonco">
        <div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
        <div id="dialog_content" class="cl scroll"></div>
    </div>
</div>

<div class="newwindow hidden" id="choosegroup">
    <div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
    <div class="ngreyborder changeblue2 mt20">
            <h2 class="png_bg">指定管辖部门</h2>
            <div class="basic_information mt2">
                <table>
                    <tr>
                        <td colspan="2">管辖部门列表</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="choosecontent">
                                    <div><input name="" type="checkbox" value="" />指定部门</div>
                                    <div><input name="" type="checkbox" value="" />指定部门</div>
                                    <div><input name="" type="checkbox" value="" />指定部门</div>
                                    <div><input name="" type="checkbox" value="" />指定部门</div>
                            </div>
                        </td>
                        <td class="vt" style="padding-top:0px;"><span class="choosedepartment">选择部门</span><br/><a href="javascript:;" class="ml13">移除</a></td>
                    </tr>
                </table>
                 <div></div>
                 <div align="right" class="mr10" >
                    <p><input name="" type="button" class="step m10 windowbutton" value="确定"/><input name="" type="button" class="back m10 windowbutton" value="关闭"/></p>
                </div>
            </div>
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
                        <div class="searchblock pt15">
                                <ul class="dpnav2 m10">
                                    <li class="now">查询</li>
                                </ul>
                                <table border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td class="taR">员工编号</td>
                                <td class="taL"><input type="text" class="input"/></td>
                                <td class="taR">员工姓名</td>
                                <td class="taL"><input type="text" class="input"/></td>
                              </tr>
                              <tr>
                                <td class="taR">角色名称</td>
                                <td class="taL" colspan="3">
                                    <select name="" class="select">
                                        <option vlaue="">系统管理员</option>        
                                    </select>
                                </td>
                              </tr>
                            </table>
                            <div align="right" class="mt10">
                                <input name="" type="button" class="searchbutton m10" value="搜索" hidefocus="true" />
                            </div>
                        </div>
                        <div class="classlist">
                            <h3 class="reHeight">
                                <div class="z">已授予权限人员列表</div>
                                <div class="y">
                                    <a href="" class="functionbutton">分配权限</a>
                                    <a href="" class="functionbutton">清除权限</a></div>
                            </h3>
                            <div class="dataTables_wrapper">
                                <div class="reHeight">
                                <div class="dataTables_length"><label class="reHeight"><div class="z pt10">每页显示</div><div class="selector z" id="uniform-undefined"><span style="-moz-user-select: none;">10</span><select size="1" style="opacity: 0;"><option value="10" selected="selected">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></div><div class="z pt10">条</div></label></div>
                                </div>
                                <table class="datatable" width="100%">
                                    <thead>
                                        <tr>
                                              <th class="pl5"><input name="input" type="checkbox" value="" class="checkbox"/></th>
                                              <th>员工编号</th>
                                              <th>员工姓名</th>
                                              <th>角色名称</th>
                                              <th>已授予权限</th>
                                              <th>管辖范围</th>
                                              <th>指定管辖范围</th>
                                              <th>移交权限</th>
                                              <th>修改权限</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr class="gradeA odd">
                                            <td class="pl5"><input name="input" type="checkbox" value="" class="checkbox"/></td>
                                             <td>E00230000</td>
                                              <td><a href="">张三</a></td>
                                              <td><a href="javascript:;" class="chooseboard">系统管理员</a></td>
                                              <td>资源：需求/计划-代办工作-待办事宜 权限：具备权限</td>
                                              <td>全集团</td>
                                              <td><a href="javascript:;" class="groupadd">指定</a></td>
                                              <td><a href="javascript:;" class="chooseperson">移交</a></td>
                                              <td><a href="authorityAllocation.html">修改</a></td>
                                         </tr>
                                         <tr class="gradeA even">
                                            <td class="pl5"><input name="input" type="checkbox" value="" class="checkbox"/></td>
                                             <td>E00230000</td>
                                              <td><a href="">张三</a></td>
                                              <td><a href="javascript:;" class="chooseboard">系统管理员</a></td>
                                              <td>资源：需求/计划-代办工作-待办事宜 权限：具备权限</td>
                                              <td>全集团</td>
                                              <td><a href="javascript:;" class="groupadd">指定</a></td>
                                              <td><a href="javascript:;" class="chooseperson">移交</a></td>
                                              <td><a href="authorityAllocation.html">修改</a></td>
                                          </tr>
                                    </table>
                                <div class="cl">
                                    <div class="dataTables_info">显示总共58条中的1-10条</div>
                                    <div class="dataTables_paginate paging_full_numbers"><span class="first paginate_button paginate_button_disabled">第一页</span><span class="previous paginate_button paginate_button_disabled">前一页</span><span><span class="paginate_active">1</span><span class="paginate_button">2</span><span class="paginate_button">3</span><span class="paginate_button">4</span><span class="paginate_button">5</span></span><span class="next paginate_button">后一页</span><span class="last paginate_button">最后页</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
</body>
</html>
