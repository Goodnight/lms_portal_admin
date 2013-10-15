<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
    <%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title><c:if test="${dmdTopic.startDt == null }">新建需求收集时间</c:if><c:if test="${dmdTopic.startDt != '' && dmdTopic.startDt != null }">修改需求收集时间</c:if></title>
<jsp:include page="/WEB-INF/page/include/css_bootstrap.jsp"></jsp:include>
</head>
<body class="bg">
<div>
<jsp:include page="/WEB-INF/page/include/header_bootstrap.jsp"></jsp:include>
<div class="row-fluid">
			<div id="breadcrumbs" class="pfb">
						<ul class="breadcrumb offset1">
							<li class="first">
								<i class="icon-home"></i> 
								<a href="${basepath }/index.html">首页</a><span class="divider"><i class="icon-angle-right"></i></span></li>
							<li><a href="${basepath }/demand/demandTopicIndex.html">需求收集时间</a><span class="divider"><i class="icon-angle-right"></i></span>
							</li>
							<li class="last"><c:if test="${dmdTopic.startDt == null }">新建需求收集时间</c:if><c:if test="${dmdTopic.startDt != '' && dmdTopic.startDt != null }">修改需求收集时间</c:if>
						</ul>
			</div>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
  
  <div class="content cl">
	<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg"><c:if test="${dmdTopic.startDt == null }">新建需求收集时间</c:if>
        	<c:if test="${dmdTopic.startDt != '' && dmdTopic.startDt != null }">修改需求收集时间</c:if><!--如果是从修改进入，请修改标题为修改需求时间--></h2>
        	<form id="dmdTopicNew" action="saveTopic.html" method="post">
        	<input type="hidden" name ="dtId" value="${dmdTopic.dtId}"/>
            <div class="basic_information mt2">
                <table border="0" cellspacing="15" cellpadding="15">
                	<colgroup>
                    	<col width="170" />
                        <col width="400" />
                        <col width="85" />
                        <col width="320" />
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<td class="taR"><em>*</em>年度</td>
                        	<td colspan="3">
                            	<select id="year" name="year" ${isBool?'disabled':'' }><option value="${dmdTopic.year }" ></option></select>
                            </td>
                        </tr>
                        <tr>
                        	<td class="taR"><em>*</em>生效日期</td>
                            <td colspan="3"><input id="${isBool?'':'startDt' }" name="startDt" type="text" class="input vm time" value="${dmdTopic.startDt}" ${isBool?'disabled':'' } readonly="readonly" /><!--时间控件--><div id="startDt_error" class="validate_error"></div></td>                            
                        </tr>
                        <tr>
                        	<td class="taR"><em>*</em>失效日期</td>
                            <td colspan="3"><input id="${isBool?'':'endDt' }" name="endDt" type="text" class="input vm time" value="${dmdTopic.endDt}" ${isBool?'disabled':'' } readonly="readonly" /><!--时间控件--><div id="endDt_error" class="validate_error"></div></td>   
                        </tr>
                        <tr>
                        	<td class="vt taR" style="padding-top:0px">备注</td>
                            <td colspan="3">
                                <div><textarea name="remark" cols="" rows="" class="input vm" ${isBool?'disabled':'' }>${dmdTopic.remark}</textarea></div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                <div align="right" class="mr100">${isBool?'':'<input type="submit" class="step m10 btn btn-small btn-info"  value="确定"/>' }<a href="demandTopicIndex.html" class="back btn btn-small">返回</a></div>
            </div>
             </form>
        </div>
    </div>
</div>
<jsp:include page="/WEB-INF/page/include/script_bootstrap.jsp"></jsp:include>
<script type="text/javascript" src="${basepath }/js/demand/demandTopic.js"  ></script>
</body>
</html>
