<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http//www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http//www.w3.org/1999/xhtml" lang="utf-8" xmllang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>新增管理员</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>

<body class="bg">
<div class="blackall_new hidden">&nbsp;</div>
<div class="treewindow_">
	<div id="menu_jstree" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure_" value="确定" /><a href="javascript:;" class="back vm treewindowback_">取消</a></div>                    
</div>
<div id="dialog" class="hidden">
    <!-- 半透明背景 -->
    <div class="blackall">&nbsp;</div>
    <div class="newwindow roleInfo" id="choosepersonco">
        <!-- 关闭按钮 -->
        <div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
        <!-- 对话框内容 -->
        <div id="dialog_content" class="cl"></div>
    </div>
</div>
<div class="blackall hidden">&nbsp;</div>
<div class="treewindow" >
    <div id="org_jstree" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="1" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
</div>

<div class="container">
<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
  <div class="breadCrumbHolder breadCrumbPage">
    <div class="headerco">
        <div class="breadCrumb reHeight noborder" id="breadCrumb3">
            <div class="z">
                <ul>
                    <li class="first">
                        <a href="${basepath }/index.html">首页</a>
                    </li>
                    <li>
                        <a href="${basepath }/auth/manageStaffList.html">管理人员列表</a>
                    </li>
                    <li class="last">新增管理员</li>
                </ul>
            </div>
            <div class="y"></div>
        </div> 
    </div>
  </div> 
  <div class="content cl">
        <div class="ngreyborder changeblue2 mt20">
            <h2 class="png_bg">新增管理员</h2>
            <form id="newUserRoles" action="saveManageStaff.html" method="post">
            <div class="courseupload basic_information" style="margin-top:0!important;">
            <table border="0" cellspacing="15" cellpadding="15">
                    <tbody>
                        <tr>
                            <td style="vertical-align:top">指定用户</td>
                            <td class="objectstring" id="newpersonco">
                                <div></div>
                                <div><span id="btn_user" class="vm" style="margin-left:0">增加用户</span></div>
                                <div id="userId_error" class="validate_error"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="vertical-align:top">管辖级别</td>
                            <td id="levelTop"><!-- 20130322 修改单选框逻辑对下方选择机构限制 -->
                                <c:choose>
                                    <c:when test="${user.type == 1 }">
                                        <em class="option"><input id="levelType" name="levelType" type="radio" value="1" /></em> 全集团 
                                        <em class="option"><input id="levelType" name="levelType" type="radio" value="2" /></em> 省 
                                        <em class="option"><input id="levelType" name="levelType" type="radio" value="3" /></em> 市
                                        <em class="option"><input id="levelType" name="levelType" type="radio" value="5" /></em> 本地网（县级）
                                        <em class="option"><input id="levelType" name="levelType" type="radio" value="4" /></em> 部门管理
                                    </c:when>
                                    
                                    <c:when test="${user.type == 2 }">
                                        <em class="option"><input id="levelType" name="levelType" type="radio" value="2" /></em> 省 
                                        <em class="option"><input id="levelType" name="levelType" type="radio" value="3" /></em> 市
                                        <em class="option"><input id="levelType" name="levelType" type="radio" value="5" /></em> 本地网（县级）
                                        <em class="option"><input id="levelType" name="levelType" type="radio" value="4" /></em> 部门管理
                                    </c:when>
                                    
                                    <c:when test="${user.type == 3 }">
                                        <em class="option"><input id="levelType" name="levelType" type="radio" value="3" /></em> 市
                                        <em class="option"><input id="levelType" name="levelType" type="radio" value="5" /></em> 本地网（县级）
                                        <em class="option"><input id="levelType" name="levelType" type="radio" value="4" /></em> 部门管理
                                    </c:when>
                                    
                                    <c:when test="${user.type == 4 }">
                                        <em class="option"><input id="levelType" name="levelType" type="radio" value="5" /></em> 本地网（县级）
                                        <em class="option"><input id="levelType" name="levelType" type="radio" value="4" /></em> 部门管理
                                    </c:when>
                                    
                                    <c:when test="${user.type == 5 }">
                                        <em class="option"><input id="levelType" name="levelType" type="radio" value="5" /></em> 本地网（县级）
                                    </c:when>
                                </c:choose>
                                <div id="levelType_error" class="validate_error"></div>
                            </td>
                        </tr>
                        <tr>
                            <td style="vertical-align:top">机构</td>
                            <td class="objectstring" colspan="3" id="newdepco">
                                <div></div>
                                <div><em class="greynouse vm ml0">选择机构</em><span class="vm chooseOrg" style="margin-left:0;display:none">选择机构</span></div>
                                <div id="depIds_error" class="validate_error"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>选择角色</td>
                            <td class="objectstring" id="newroleco">
                                <div></div>
                                <div><span class="vm btn_role" style="margin-left:0" id="${orgRoleId }">选择角色</span></div>
                                <div id="roleIds_error" class="validate_error"></div>
                            </td>
                        </tr>
                          <tr>
                            <td style="vertical-align:top">分配模块</td>
                            <td class="objectstring"  id="newmenuco">
                                <div></div>
                                <div><span class="vm addRoleAuthority" style="margin-left:0" >选择模块</span></div>
                            </td>
                     
                        </tr>
                        <tr>
                            <td colspan="2" style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></td>
                        </tr>
                        <!--  
                        <tr><td style="vertical-align:top">权限分配</td></tr>
                        <tr>
                            <td colspan="2" style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></td>
                        </tr>
                        <tr>
                            <td style="vertical-align:top">分配角色</td>
                            <td>
                                <select id="roleId" name="roleName">
                                    <option value="">--</option>
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
                            </td>
                        </tr>
                        <tr>
                            <td style="vertical-align:top">分配模块</td>
                            <td class="objectstring" id="newmenuco">
                                <div class="mt10"><span id="${rb.rId }" class="vm addRoleAuthority" style="margin-left:0">选择模块</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></td>
                        </tr>
                        <tr><td colspan="2">注：权限分配时，“分配角色”与“分配模块”至少选择其一，才能保存成功。</td></tr>
                        -->
                    </tbody>
                </table>
                <div class="windowlast">
                <p>
                    <input type="submit" class="step m10 vm" value="保存" />
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
	//选择基准岗位，多选
	$(".addRoleAuthority").click(function(){
		Doom=$(this);							 
		$(".blackall_new").show();
		$(function () {
			$("#menu_jstree").jstree({
				"plugins":["themes","json_data","checkbox","ui"],
				"json_data":{
					"ajax" : {
						"url" : basepath+"/list/menu4jstree.html",
						"data" : function(n){
							return {
								"operation":"",
								"id":n.attr?n.attr("id"):0
							};
						}
					}
				},
				"core":{
					"initially_open":rootPosition
				}
			}).bind("select_node.jstree",function(e,data){//选中节点的名称事件处理.

			}).bind("check_node.jstree",function(e,data) {//复选框选中事件处理,展开此节点下所有子节点.
				if (data.rslt.obj.attr("id") > 10) {//判断是否是根节点,非根节点进行此处理.
					$('#menu_jstree').jstree("open_all", "#"+data.rslt.obj.attr("id"));
				}
			}).bind("uncheck_node.jstree",function(e,data) {//复选框取消选中事件处理,收缩此节点下所有子节点.
			    $('#menu_jstree').jstree("close_all", "#"+data.rslt.obj.attr("id"));
			}) ;
			
			
		});
		$(".treewindow_").show();
		$('.treewindow_').animate({
			right: 0
		  },200);


	});
</script>
</body>
</html>
