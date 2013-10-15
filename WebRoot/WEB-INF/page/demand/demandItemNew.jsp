<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title><c:if test="${dmdItem.dtId==null}">新建需求收集项</c:if><c:if test="${dmdItem.dtId!=null}">修改需求收集项</c:if></title>
<jsp:include page="/WEB-INF/page/include/css_bootstrap.jsp"></jsp:include>
</head>
<body class="bg">

<jsp:include page="/WEB-INF/page/include/header_bootstrap.jsp"></jsp:include>
<div class="row-fluid">
			<div id="breadcrumbs" class="pfb">
						<ul class="breadcrumb offset1">
							<li class="first">
								<i class="icon-home"></i> 
								<a href="${basepath }/index.html">首页</a><span class="divider"><i class="icon-angle-right"></i></span></li>
							<li><a href="${basepath }/demand/demandItemIndex.html">需求收集项</a><span class="divider"><i class="icon-angle-right"></i></span>
							</li>
							<li class="last"> <c:if test="${dmdItem.dtId==null}">新建需求收集项</c:if><c:if test="${dmdItem.dtId!=null}">修改需求收集项</c:if></li>
						</ul>
			</div>
			
            <div class="y"></div>
            <br>
			<br>
			<br>
			<br>
			<br>
			<br>

  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
			<c:if test="${dmdItem.dtId==null}">
        	<h2 class="png_bg">新建需求收集项</h2>
        	</c:if>
        	<c:if test="${dmdItem.dtId!=null}">
        	<h2 class="png_bg">修改需求收集项</h2>
        	</c:if>
        	<form id="demandItemNew" action="saveItem.html" method="post">
        	<input type="hidden" name ="dtId" value="${dmdItem.dtId}"/>
            <div class="basic_information mt2 pl50">
                <table border="0" cellspacing="15" cellpadding="15">
                	<tbody>
                        <tr>
                        	<td class="w150"><em>*</em>编号</td>
                            <td colspan="3"><input id="sn" type="text" name="sn" class="input vm si" value="${dmdItem.sn}" maxlength="30" /><input id="sn_old" name="sn_old" type="hidden" value="${dmdItem.sn }"/><div id="sn_error" class="validate_error"></div></td>
                        </tr>
                        <tr>
                        	<td><em>*</em>名称</td>
                            <td colspan="3"><input id="name" type="text" name="name" class="input vm si" value="${dmdItem.name}" maxlength="30" /><div id="name_error" class="validate_error"></div></td>   
                        </tr>
                        <tr>
                        	<td><em>*</em>有效状态</td>
                        	<c:if test="${dmdItem.status == 1 }">
                                <td colspan="3">
                                		<label class="option choosed" style="display: inline-block;"><input  name="status" type="radio" value="1" class="ace" checked="checked"/><label class="lbl"> 有效</label></label>
                                        <label class="option" style="display: inline-block;"><input name="status" type="radio" value="0" class="ace" /><label class="lbl"> 无效</label></label>
                                </td>
                            </c:if>
                            <c:if test="${dmdItem.status == 0 }">
                                <td colspan="3">
                                <label class="option " style="display: inline-block;"><input  name="status" type="radio" value="1" class="ace"/><label class="lbl"> 有效</label></label>
                                        <label class="option choosed" style="display: inline-block;"><input name="status" type="radio" value="0" class="ace" checked="checked" /><label class="lbl"> 无效</label></label>
                               </td>
                            </c:if>
                            <c:if test="${null == dmdItem.status }">
                                <td colspan="3">
                                    <label class="option" style="display: inline-block;"><input  name="status" type="radio" value="1" class="ace"/><label class="lbl"> 有效</label></label>
                                    <label class="option" style="display: inline-block;"><input name="status" type="radio" value="0" class="ace" /><label class="lbl"> 无效</label></label>
                              
                                    <div id="status_error" class="validate_error"></div>
                                </td>
                            </c:if>
                        </tr>
                    </tbody>
                </table>
                <div align="right" class="mr100">
                	<input type="submit" class="btn btn-small btn-info step" value="确定"/>
                	<a href="#" class="btn btn-small back allclose">关闭</a>
                </div>
            </div>
            </form>
        </div>
    </div>
</div>
<jsp:include page="/WEB-INF/page/include/script_bootstrap.jsp"></jsp:include>
<script type="text/javascript" src="${basepath}/js/demand/demandItemNew.js" charset="gbk"></script>
</body>
</html>
   