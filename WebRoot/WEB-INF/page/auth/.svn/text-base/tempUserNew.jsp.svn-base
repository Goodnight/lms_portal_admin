<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>${u==null?"新建临时帐号":"修改临时帐号" }</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div class="blackall hidden">&nbsp;</div>
<div class="treewindow" >
	<div id="user_jstree" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
</div>
<div id="dialog" class="hidden">
	<div class="blackall_new">&nbsp;</div>
	<div class="newwindow">
		<div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
	    <div id="dialog_content" class="cl scroll"></div>
	</div>
</div>
<div class="container">
    <!-- 导入头部文件 -->
    <jsp:include page="/WEB-INF/page/include/header.jsp" />
    <div class="breadCrumbHolder breadCrumbPage">
    	<div class="headerco">
	        <div class="breadCrumb reHeight noborder"  id="breadCrumb3">
	            <div class="z">
                      <ul>
                          <li class="first"><a href="${basepath }/index.html">首页</a></li>
                          <li><a href="${basepath }/user/temp/manage.html">基础数据</a></li>
                          <li class="last">${u==null?"新建临时帐号":"修改临时帐号" }</li>
                      </ul>
                  </div>
                  <div class="y"></div>
               </div>
           </div>
     </div>
     <div class="content cl">
          	<div class="ngreyborder changeblue2 mt20">
                 <h2 class="png_bg">${u==null?"新建临时帐号":"修改临时帐号" }</h2>
                 <div class="mt2 basic_information">
                 	<form id="form_tempuser" action="save.html" method="post">
                         <table border="0" cellspacing="10" cellpadding="10">
                          <tbody>
                          	<tr>
                              <td class="taR">员工部门</td>
                              <td>
                              	<input id="org_name" name="org_name" type="text" class="input vm" value="${u==null?dep.name:u.org.name }" readonly="readonly" />
                              	<input id="org_id"  type="hidden" name="orgId" value="${u==null?dep.orgId:u.org.orgId }"/>
                              	<span id="org" class="vm newshowtree choosedep">选择部门</span>
                              </td>
                          </tr>
                           	  <!-- 新建/修改页面编号未避免调用接口导致自增不予以显示 20130410 by LTC -->
                           	  <input type="hidden" name="oriSn" value="${u.sn }" />
                           	  <input type="hidden" name="uid" value="${u.uid }"/>
                           	  <input type="hidden" name="isTemporary" value="1"/>
                              <tr>
                                  <td class="taR"><em>*</em>用户姓名</td>
                                  <td><input name="name" type="text" class="input vm si" value="${u.name }"/><!--非空字符--></td>
                              </tr>
                              <tr>
                                  <td class="taR"><em>*</em>性别</td>
                                  <td>
                                  	<select id="gender" name="gender" >
                              		<option value="0" ${u.gender==0?"selected=selected":"" }>女</option>
                              		<option value="1" ${u.gender==1?"selected=selected":"" }>男</option>
                              	</select>
                                  </td>
                              </tr>
                              <tr>
                              	<td class="taR vt">有效日期</td>
                              	<td>
                              		<input type="text" class="input vm cls_date" name="expire_date" value="" readonly="readonly" />
                              	</td>
                              </tr>
                              <tr>
                                  <td class="taR vt">可使用模块</td>
                                  <td>
                                  	<div id="menu_list" class="z choosecontent cl mt4 objectstring">
                                  		<c:forEach var="p" items="${permitList }">
		                                  		<label class="speciallabel">
		                                  			${p.menu.name }
		                                  			<input type="hidden" name="mid" value="${p.menu.mId }"/>
		                                  			<a href="#" class="ml6"><img src="${basepath }/images/deletegreen.gif" /></a>
		                                  		</label>
		                                  	</c:forEach>
                                  	</div>
                      				<div class="z"><span id="stumenu" class="vm newshowtree">选择权限</span></div>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR"><em>*</em>手机号码</td>
                                  <td>
                                  	<input id="old_mobile" type="hidden" value="${u.mobile }" />
                                  	<input id="mobile" name="mobile" type="text" class="input vm si" value="${u.mobile }"/><!--13位手机数字-->
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR"><em>*</em>电子邮箱</td>
                                  <td>
                                  	<input id="old_email" type="hidden" value="${u.email }" />
                                  	<input id="email" name="email" type="text" class="input vm si" value="${u.email }"/><!--电子邮箱格式字符-->
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR vt">备注</td>
                                  <td><textarea name="remake" cols="" rows="" class="w300">${u.remake }</textarea></td>
                              </tr>
                          </tbody>
                      </table>
                      <div align="right" class="mr10">
                      	<!-- 发布屏蔽  <input type="submit" class="step m10 vm" value="确定" /> -->
                      	<a href="${basepath }/user/temp/manage.html" class="back m10 vm">关闭</a>
                      </div>
                     </form>
                 </div>
             </div>
           </div>
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath}/js/demand/newblock.js" charset="gbk"></script>
<script type="text/javascript">
	$(function(){
		var treeType = '';
		$("#form_tempuser").validate({
			rules : {
				sn : {
					required : true
				},
				name : {
					required : true
				},
				mobile : {
					required : true,
					number : true
				},
				email : {
					required :true,
					email : true
				}
			},
			messages : {
				sn : "请输入员工编号",
				name : "请输入员工名称",
				mobile : {
					required : "请输入手机号码",
					number : "请输入正确的手机号码"
				},
				email : {
					required : "请输入Email",
					email : "请输入正确的Email格式"
				}
			}			
		});
		
		$("#form_tempuser").submit(function(){
			var re = true;
			var old_mobile = $("#old_mobile").val();
			var old_email = $("#old_email").val();
			var mobile = $("#mobile").val();
			var email = $("#email").val();
			if(old_email != email){
				$.ajax({
					url : basepath+"/user/validate.html",
					type : "get",
					async : false,
					data : "type=email&value="+email,
					dataType : "json",
					success : function(data){
						//true是已经存在
						re = !data;
					}
				});
			}
			
			if(!re){
				$.dialog.alert("Email已经存在!");
				return false;
			}
			if(old_mobile != mobile){
				$.ajax({
					url : basepath+"/user/validate.html",
					type : "get",
					async : false,
					data : "type=mobile&value="+mobile,
					dataType : "json",
					success : function(data){
						//data为true是已经存在
						re = !data;
					}
				});
			}
			
			if(!re){
				$.dialog.alert("Mobile已经存在!");
			}
			return re;
		});
		
		$(".newshowtree").click(function(){
			treeType = $(this).attr("id");
			if(treeType == "org"){
				initTree("#user_jstree",[],[],treeType,function(type, id, name){
					if("org" == type){
						$("#"+treeType+"_id").val("");
						$("#"+treeType+"_name").val("");
					}else{
						$("#"+treeType+"_id").val(id);
						$("#"+treeType+"_name").val(name);
					}
				});
			}
			if(treeType == "stumenu"){
				initCheckTree("#user_jstree",[],[],treeType);
			}
			
		});
		
		$(".treewindowsure").click(function(){
			if(treeType == "stumenu"){
				$("#user_jstree").jstree("get_selected").each(function(i,n){
					addChoosedItem("menu_list","mid",$(n).attr("name"),n.id);
				});
			}
		});
		
	});
</script>
</body>
</html>
