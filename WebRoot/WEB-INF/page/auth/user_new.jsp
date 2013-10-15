<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="content-language" content="utf-8" />
	<title>${u==null?"新建员工":"修改员工" }</title>
	<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<%
 if(request.getAttribute("error")=="error"){
  String show = "<script language='javascript' type='text/javascript'>alert('保存失败')</script>";
  out.println(show);
 }
%>
<body class="bg">
<div class="blackall hidden">&nbsp;</div>
<div class="treewindow" >
	<div id="user_jstree" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
</div>
<div id="dialog" class="hidden">
	<div class="blackall_new">&nbsp;</div>
	<div class="newwindow" id="choosepersonco">
		<div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
	    <div id="dialog_content" class="cl scroll"></div>
	</div>
</div>
<div class="container">
    <jsp:include page="/WEB-INF/page/include/header.jsp" />
    <div class="breadCrumbHolder breadCrumbPage">
    	<div class="headerco">
	        <div class="breadCrumb reHeight noborder"  id="breadCrumb3">
	            <div class="z">
	                <ul>
	                    <li class="first"><a href="${basepath }/index.html">首页</a></li>
	                    <li>基础数据</li>
	                    <li><a href="${basepath }/user/list.html">员工信息</a></li>
	                    <li class="last">
	                    	<c:choose>
								<c:when test="${u==null}">新建员工</c:when>
								<c:otherwise>修改员工</c:otherwise>
							</c:choose>
	                    </li>
	                </ul>
	            </div>
	            <div class="y"></div>
	        </div>
        </div>
    </div>
    <div class="content cl">
          	<div class="ngreyborder changeblue2 mt20">
                  <h2 class="png_bg">${u==null?"新建员工":"修改员工" }</h2>
                  <div class="courseupload basic_information" style="padding-top:10px;">
						<form id="form_user" action="save.html" method="post">
                          <table border="0" cellspacing="10" cellpadding="10">
                          <tbody>
                          	<c:if test="${u==null}">
	                             <tr>
	                             		<td class="taR">账号生成方式</td>
	                             		<td>
	                             		&nbsp;&nbsp;&nbsp;&nbsp;
	                             					<em class="option choosed" ><input name="selectSn" type="radio" checked="checked" onclick="upSn(0)" /></em> 自动生成　　
			                        				<em class="option"><input name="selectSn" type="radio" onclick="upSn(1)" /></em> 手动填写
	                             		</td>
	                             </tr>
                             </c:if>
                             <tr class="_sn ${u==null?'hidden':''}">
                             		<td class="taR"><em>*</em>账号</td>
                             		<td>
                             			<input type="hidden" id="oldSn" name="oldSn" value="${u.sn }"/> 
                             			<input id="oriSn" name="oriSn" type="text" class="input vm" value="${u==null?'':u.sn}" onkeyup="$('#sn_error').hide();" />
                             			<label class="error hidden" id="sn_error">请输入账号</label>
                             		</td>
                             </tr>
                          	<tr>
                                  <td class="taR"><em>*</em>员工部门</td>
                                  <td>
                                  	<input id="org_name" name="org_name" type="text" class="input vm" value="${u==null?dep.name:u.org.name }" readonly="readonly" />
                                  	<input type="hidden" id="org_id" name="orgId" value="${u==null?dep.orgId:u.org.orgId }"/><!-- 新建时从左侧筛选树获得部门Id, 修改时通过User对象获取 -->
                                  	<input type="hidden" id="idpath" name="idpath" value="${u==null?dep.idPath:u.org.idPath }" />
                                  	<span id="org" class="vm newshowtree choosedep">选择部门</span>
                                  </td>
                              </tr>                          
                              <!-- <td class="taR"><em>*</em>员工编号</td>--> <!-- 自动生成不予显示 20130410 by LTC -->
                              <!-- <input type="hidden" name="oriSn" value="${u.sn }" />  -->
                              	  <input type="hidden"  name="uid" value="${u.uid }"/>
                              <tr>
                                  <td class="taR"><em>*</em>员工姓名</td>
                                  <td>
                                  	<input id="name" name="name" type="text" class="input vm" value="${u.name }"/>
                                  	<div id="name_error"></div>	
                                  </td>
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
                                  <td class="taR">民族</td>
                                  <td>
                                  	<select name="folkId">	
                                  			<option value="" >请选择</option>
                                  		<c:forEach var="sp" items="${folkList }">
                                  			<option value="${sp.spId }" <c:out value="${u.folk.spId eq sp.spId?'selected=selected':''}"/>>${sp.name }</option>
                                  		</c:forEach>
                                  	</select>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR"><em>*</em>政治面貌</td>
                                  <td>
                                  	<select id="political" name="politicalId" >
                                  		<c:forEach var="sp" items="${politicalList }">
                                  			<option value="${sp.spId }" <c:out value="${u.political.spId eq sp.spId?'selected=selected':''}"/>>${sp.name }</option>
                                  		</c:forEach>
                                  	</select>
                                  	<div id="political_error"></div>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR"><em>*</em>职务类别</td>
                                  <td>
                                  	<select name="jobTypeId">
                                  		<c:forEach var="item" items="${jobTypeList }">
                                 		    <option value="${item.spId }" <c:out value="${item.spId==u.jobType.spId?'selected=selected':'' }"/>>${item.name }</option>
                                  		</c:forEach>
                                  	</select>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR"><em>*</em>用工性质</td>
                                  <td>
                                  	<select name="empNatureId" id="empNatureId">
                                  		<c:forEach var="item" items="${empNatureList }">
                                 		    <option value="${item.spId }" <c:out value="${item.spId==u.empNature.spId?'selected=selected':'' }"/>>${item.name }</option>
                                  		</c:forEach>
                                  	</select>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR">职务</td>
                                  <td>
                                  	<select name="jobId">
                                  		<c:forEach var="sp" items="${jobList }">
                                  	        <option value="${sp.spId }" <c:out value="${u.job.spId eq sp.spId?'selected=selected':''}"/>>${sp.name }</option>
                                  		</c:forEach>
                                  	</select>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR">技术业务等级</td>
                                  <td>
                                  	<select name="techGradeId" class="">
                                  			<option value="" >请选择</option>
                                  		<c:forEach var="item" items="${techGradeList }">
                                 		    <option value="${item.spId }" <c:out value="${item.spId==u.techGrade.spId?'selected=selected':'' }"/>>${item.name }</option>
                                  		</c:forEach>
                                  	</select>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR">技术业务种类</td>
                                  <td>
                                  	<select id="tech_category_upid" name="" class="">
                                  			<option value="" >请选择</option>
                                   		<c:forEach var="item" items="${techCategoryList }">
                               			    <option value="${item.spId }" <c:out value="${item.spId==u.techCategory.upId?'selected=selected':'' }"/>>${item.name }</option>
                                  		</c:forEach>
                                  	</select>
                                  	<input type="hidden" id="tech_category_id" value="${u.techCategory.spId }"/>
                                  	<select id="second_tech_category" name="techCategoryId" class=" ml13">
                                  			<option value="" >请选择</option>
                                  	</select>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR">岗位</td>
                                  <td>
                                  	<input id="p4o_name" type="text" class="input vm " value="${u.post.name}" readonly="readonly" />
                                  	<input id="p4o_id" name="postId" type="hidden" class="input vm " value="${u.post.poId }"/>
                                  	<span id="p4o" class="vm newshowtree">选择岗位</span>
                                  	&nbsp;&nbsp;
                      				<c:if test="${u!=null }">
                      					<c:choose>
                      						<c:when test="${u.postLock==1 }">
                      							<span id="postLock" uid="${u.uid }">已锁定</span>
                      						</c:when>
                      						<c:otherwise>
                      							<span id="postLock" uid="${u.uid }">未锁定</span>
                      						</c:otherwise>
                      					</c:choose>
                      				</c:if>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR">毕业院校</td>
                                  <td><input name="academy" type="text" class="input vm " value="${u.academy }"/></td>
                              </tr>
                              <tr>
                                  <td class="taR">所学专业</td>
                                  <td><input name="professional" type="text" class="input vm " value="${u.professional }"/></td>
                              </tr>
                              <tr>
                                  <td class="taR"><em>*</em>学历</td>
                                  <td>
                                  	<select name="educationId" class="">
                                  		<c:forEach var="item" items="${educationList }">
                                 		    <option value="${item.spId }" <c:out value="${item.spId==u.education.spId?'selected=selected':'' }"/>>${item.name }</option>
                                  		</c:forEach>
                                  	</select>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR">学位</td>
                                  <td>
                                  	<select name="degreeId" class="">
                                  			<option value="" >请选择</option>
                                  		<c:forEach var="sp" items="${degreeList }">
                                  			<option value="${sp.spId }" <c:out value="${u.degree.spId eq sp.spId?'selected=selected':''}"/>>${sp.name }</option>
                                  		</c:forEach>
                                  	</select>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR"><em>*</em>出生日期</td>
                                  <td>
                                  	<input id="bir" name="bir" type="text" class="input vm" value="${u.bir }" readonly="readonly" />
                                  	<div id="bir_error"></div>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR"><em>*</em>入职时间</td>
                                  <td>
                                  	<input id="workDate" name="workDate" type="text" class="input vm" value="${u.workDate }" readonly="readonly" />
                                  	<div id="workDate_error"></div>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR"><em>*</em>证件类型</td>
                                  <td>
                                  	<select id="certificateTypeId" name="certificateTypeId" class="">
                                  		<c:forEach var="sp" items="${certificateTypeList }">
                                  			<option value="${sp.spId }" <c:out value="${u.certificateType.spId eq sp.spId?'selected=selected':''}"/>>${sp.name }</option>
                                  		</c:forEach>
                                  	</select>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR"><em>*</em>证件编号</td>
                                  <td>
                                  <input id="old_certificateCode" type="hidden" value="${u.certificateCode }" />
                                  <input id="certificateCode" name="certificateCode" type="text" class="input vm " value="${u.certificateCode }"/>
                                  <div id="certificateCode_error"></div>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR">联系电话</td>
                                  <td><input id="contact" name="contact" type="text" class="input vm " value="${u.contact }"/>
                                  	<div id="contact_error"></div>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR"><em>*</em>手机号码</td>
                                  <td>
                                  	<input id="old_mobile" type="hidden" value="${u.mobile }" />
                                  	<input id="mobile" name="mobile" type="text" class="input vm " value="${u.mobile }"/>
                                  	<div id="mobile_error"></div>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR"><em>*</em>电子邮箱</td>
                                  <td>
                                  	<input id="old_email" type="hidden" value="${u.email }" />
                                  	<input id="email" name="email" type="text" class="input vm " value="${u.email }"/>
                                  	<div id="email_error"></div>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="taR vt">备注</td>
                                  <td><textarea name="remake" cols="" rows="" class="">${u.remake }</textarea></td>
                              </tr>
                          </tbody>
                      </table>
                      <div align="right" class="mr10">
                      	<input type="submit" class="step m10 vm" value="确定"/>
                      	<a href="${basepath }/user/list.html" class="back m10 vm">关闭</a>
                      </div>
                  	</form>
                  </div>
              </div>
    </div>
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath}/js/demand/newblock.js" charset="gbk"></script>
<script type="text/javascript" src="${basepath }/js/auth/user_new.js" charset="gbk"></script>
</body>

</html>