<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http//www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http//www.w3.org/1999/xhtml" lang="utf-8" xmllang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>维护管理员</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>

<body class="bg">
<div id="dialog" class="hidden">
    <!-- 半透明背景 -->
    <div class="blackall">&nbsp;</div>
    <div class="newwindow" id="choosepersonco">
        <!-- 关闭按钮 -->
        <div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
        <!-- 对话框内容 -->
        <div id="dialog_content" class="cl"></div>
    </div>
</div>

<div class="container">
<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
  <div class="breadCrumbHolder breadCrumbPage">
    <div class="headerco">
        <div class="breadCrumb reHeight noborder" id="breadCrumb3">
            <div class="z">
                <ul>
                    <li class="first">
                        <a href="#">首页</a>
                    </li>
                    <li>
                        <a href="#">权限管理</a>
                    </li>
                    <li>
                        <a href="#">管理人员列表</a>
                    </li>
                    <li class="last">维护管理员</li>
                </ul>
            </div>
            <div class="y"></div>
        </div> 
    </div>
  </div> 

  <div class="content cl">
        <div class="ngreyborder changeblue2 mt20">
            <h2 class="png_bg">维护管理员</h2>
            <form id="" action="saveManageStaff.html" method="post">
            <div class="courseupload basic_information" style="margin-top:0!important;">
            <table border="0" cellspacing="15" cellpadding="15">
                    <tbody>
                        <tr>
                            <td>角色</td>
                            <td>
                                <input name="roleName" type="hidden" value="${rb.rId }"/>${rb.name }
                                <input name="urIdName" type="hidden" value="${ur.urId }"/>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></td>
                        </tr>
                        <tr>
                            <td style="vertical-align:top">管辖范围</td>
                            <td>
                                <em class="option choosed"><input name="3" type="radio" value="${ur.user.type }" /></em>
                                <c:choose>
                                    <c:when test="${ur.user.type=='1' }">市公司</c:when>
                                    <c:when test="${ur.user.type=='2' }">省公司</c:when>
                                    <c:when test="${ur.user.type=='3' }">全集团</c:when>
                                </c:choose>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></td>
                        </tr>
                        <tr>
                            <td style="vertical-align:top">原用户</td>
                            <td>${ur.user.name }<label class="ml12"><!--(urOrgPath此处待SDK支持)--></label></td>
                        </tr>
                        <tr>
                            <td style="vertical-align:top">新用户</td>
                            <td class="objectstring" id="newpersonco">
                                <div class="mt10"><span id="btn_user" class="vm chooseperson" style="margin-left:0">选择用户</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></td>
                        </tr>
                    </tbody>
                </table>
                <div class="windowlast">
                    <p>
                        <input type="submit" onclick="submitConfirm();return false;" class="step m10 vm" value="保存" />
                        <a href="manageStaffList.html" class="back m10 vm">关闭</a>
                    </p>
                </div>
            </div>
            </form>
        </div>
    </div>
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
<script type="text/javascript" src="${basepath}/js/auth/operateAdmin.js" charset="gbk"></script>
<script type="text/javascript">
function submitConfirm(){
    var r = confirm("请确认是否移交。");
    if(r == true){
        alert("已移交");
        action="saveManageStaff.html"; 
        method="post";
        submit();
    }
    else{
        alert("未移交");
    }
}
</script>
</body>
</html>
