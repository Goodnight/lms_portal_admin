<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>权限移交</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>

<body class="bg">
<div id="dialog" class="hidden">
    <div class="blackall">&nbsp;</div>
    <div class="newwindow" id="choosepersonco">
        <div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
        <div id="dialog_content" class="cl scroll"></div>
    </div>
</div>

<div class="newwindow hidden" id="chooseboard">
    <div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
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
                    <td><textarea name="" cols="" rows="">说明内容</textarea></td>
                  </tr>
                </table>
                
                 <div align="right" class="mr10" >
                    <input name="" type="button" class="step m10 windowbutton" value="保存"/>
                    <input name="" type="button" class="back m10 windowbutton" value="关闭"/>
                 </div>
            </div>
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
                                    <div><input name="" type="checkbox" value="" />部门名称</div>
                                    <div><input name="" type="checkbox" value="" />部门名称</div>
                                    <div><input name="" type="checkbox" value="" />部门名称</div>
                                    <div><input name="" type="checkbox" value="" />部门名称</div>
                            </div>
                        </td>
                        <td class="vt" style="padding-top:0px;">
                            <span class="choosedepartment">选择部门</span>
                            <a href="javascript:;" class="ml13">移除</a>
                        </td>
                    </tr>
                </table>
                
                <div align="right" class="mr10" >
                    <p>
                        <input name="" type="button" class="step m10 windowbutton" value="确定"/>
                        <input name="" type="button" class="back m10 windowbutton" value="关闭"/>
                    </p>
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
                        <div class="classlist" style="border-top:0">
                            <h3 class="reHeight">
                                <div class="z ml12">我被授予的角色权限</div>
                            </h3>
                            <div class="dataTables_wrapper" style="margin-top:5px">
                                <table class="datatable" width="100%">
                                    <thead>
                                        <tr>
                                              <th class="sorting" width="100">员工编号</th>
                                              <th class="sorting" width="100">员工姓名</th>
                                              <th class="sorting" width="100">角色名称</th>
                                              <th class="sorting">已授予权限</th>
                                              <th class="sorting" width="100">管辖范围</th>
                                              <th class="sorting" width="100">移交权限</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr class="gradeA odd">
                                              <td>e00023000</td>
                                              <td>童林</td>
                                              <td>
                                                  <a href="systemAdmin.html">系统管理员</a><br/>
                                                  <a href="classCharge.html">培训班负责人</a><br/>
                                              </td>
                                              <td>资源：需求/计划-代办工作-待办事宜 权限：具备权限</td>
                                              <td>全集团</td>
                                              <td><a href="javascript:;" class="chooseperson">移交</a></td>
                                         </tr>
                                      </tbody>                                         
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
<script type="text/javascript" src="${basepath }/js/auth/authorityTransfer.js" charset="gbk"></script>
<script type="text/javascript">
    var pid="";
    var userurl = basepath + "/auth/saveManager.html";
</script>
</body>
</html>
