<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>新建机构</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div class="container">
    <jsp:include page="/WEB-INF/page/include/header.jsp" />
    <div class="breadCrumbHolder breadCrumbPage">
    	<div class="headerco">
        <div class="breadCrumb reHeight noborder" id="breadCrumb3">
            <div class="z">
                <ul>
                    <li class="first"><a href="${basepath }/index.html">首页</a></li>
                    <li>基础数据</li>
                    <li><a href="${basepath }/organization/manage.html">机构管理</a></li>
                    <li class="last">
                    	新建机构
                    </li>
                </ul>
            </div>
            <div class="y"></div>
        </div>
        </div>
    </div>
  	<div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">新建机构</h2>
            <div class="basic_information mt10">
            	<form id="form_organization" action="${basepath }/organization/save.html" method="post">
                <table border="0" cellspacing="15" cellpadding="15">
                                <colgroup>
                                    <col width="100" />
                                </colgroup>
                                <tbody>
                                	<tr>
                                		<td>所属机构</td>
                                		<td>${org.name }</td>
                                	</tr>
                                    <tr>
                                        <td><em>*</em>编号</td>
                                        <td >
                                        	<input id="sn" name="sn" type="text" class="input vm" />
                                        	<input id="upid" type="hidden" name="upId" value="${org.orgId }"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><em>*</em>名称</td>
                                        <td><input id="name" name="name" type="text" class="input vm" /></td>
                                    </tr>
                                    <tr>
                                        <td>机构类别</td>
                                        <td>
                                          <c:if test="${org.type != 1 }">
                                        	<input name="type" type="radio" value="0" checked="checked" class="cls_org_type"/> 公司
                                          </c:if> 
                                        	<input name="type" type="radio" value="1" ${org.type==1?"checked":"" } class="cls_org_type"/> 部门
                                        </td>
                                    </tr>
                                    
	                                     <tr>	
	                                        <td><em>*</em>简称</td>
	                                        <td><input id="shortName" name="shortName" type="text"  class="input vm" ${org.type==1?"disabled":"" }/></td>
	                                    </tr>
                                    
                                    <tr>
                                        <td>通信地址</td>
                                        <td><input id="address" name="address" type="text" class="input vm" /></td>
                                    </tr>
                                    <tr>
                                        <td>邮政编码</td>
                                        <td><input id="zipCode" name="zipCode" type="text" class="input vm" /></td>
                                    </tr>
                                    <tr>
                                        <td>电话</td>
                                        <td><input id="tel" name="tel" type="text" class="input vm" /></td>
                                    </tr>
                                    <tr>
                                        <td>传真</td>
                                        <td><input id="fax" name="fax" type="text" class="input vm" /></td>
                                    </tr>
                                    
                                    <tr>
                                        <td>联系人</td>
                                        <td><input id="linkMan" name="linkMan" type="text" class="input vm" /></td>
                                    </tr>
                                    <tr>
                                        <td class="vt" style="padding-top:0;">备注</td>
                                        <td><textarea name="remark" cols="" rows=""></textarea></td>
                                    </tr>
                                </tbody>
                            </table> 	
					        <div align="right">
					        	<input name="" type="submit" class="step vm m10" value="确定" />
					        	<a href="${basepath }/organization/manage.html" class="back m10 vm">关闭</a>
					        </div>
                	</form>
            </div>
        </div>
    </div>
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath }/js/auth/organization_new.js" charset="gbk"></script>
</body>

</html>






