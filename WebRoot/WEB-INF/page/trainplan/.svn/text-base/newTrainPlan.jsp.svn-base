<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
    <meta http-equiv="Content-Type" content="text/xhtml; charset=utf-8" />
    <meta http-equiv="content-language" content="utf-8" />
    <title>新建培训计划</title>
	<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div class="container">
<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
  <div class="breadCrumbHolder breadCrumbPage">
    <div class="headerco">
        <div class="breadCrumb reHeight noborder" id="breadCrumb3">
           <div class="z">
            <ul>
               <li class="first"><a href="${basepath }/index.html">首页</a></li>
               <li><a href="${basepath }/trainplan/trainPlanList.html">培训计划</a></li>
               <li class="last">新建培训计划</li>
            </ul>
           </div>
           <div class="y"></div>
       </div> 
    </div>
  </div> 
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">新建培训计划</h2>
        	<form id="trainplan" action="saveTrainPlan.html" method="post">
            <div class="basic_information mt2">
                <table border="0" cellspacing="15" cellpadding="15">
                	<colgroup>
                    	<col width="100" />
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<td class="taR">年度</td>
                        	<td>
                            	<select name="year" id="yearid">
                                	<option value="${nowYear }">${nowYear }</option>
                                </select>
                            </td>
                        </tr>
                    	<tr>
                        	<td class="taR"><em>*</em>计划类型</td>
                        	<td >
                        	   <!-- 部门管理员 与 本地网管理员禁止新建正式培训计划 20130327 by LTC -->
                        	   <c:if test="${user.type!=4 && user.type!=5 }"><em class="option"><input id="planType" name="planType" type="radio" value="0" /></em>正式培训计划</c:if>
                        	   <em class="option"><input id="planType" name="planType" type="radio" value="1" /></em>临时培训计划
                        	   <div id="planType_error" class="validate_error"></div>
                        	</td>
                        </tr>
                        <!-- 20130321 by LTC 由于编号自动生成, 遂在新建时删除编号的输入 -->
                        <tr>
                        	<td class="taR"><em>*</em>名称</td>
                        	<td><input id="name" name="name" type="text" class="input vm" value="" /><div id="name_error" class="validate_error"></div></td>
                        </tr>
                        <tr>
                        	<td class="taR"><em>*</em>培训费用</td>
                        	<td><input id="cost" name="cost" type="text" class="input vm" value="" maxlength="8" /><div id="cost_error" class="validate_error"></div></td>
                        </tr>
                         <tr>
                        	<td class="taR">开始日期</td>
                        	<td><input id="startDate" name="start_date" type="text" class="input vm si" readonly="readonly" /><!--时间控件--><div id="startDate_error" class="validate_error"></div></td>
                        </tr>
                        <tr>
                        	<td class="taR">结束日期</td>
                        	<td><input id="endDate" name="end_date" type="text" class="input vm si" readonly="readonly" /><!--时间控件--><div id="endDate_error" class="validate_error"></div></td>
                        </tr>
                        <tr>
                        	<td class="taR vt" style="padding-top:0;">备注</td>
                        	<td><textarea id="remarks" name="remarks" cols="" rows="" class="input vm"></textarea>
                        		<div id="remarks_error" class="validate_error"></div>
                        	</td>
                        </tr>
                    </tbody>
                </table> 	
                	
                <div align="right" class="mr10">
                <input type="submit" class="searchbutton m10" value="确定"/>
                <a href="turnBack.html" class="step m10">返回</a></div>
            </div>
        	</form>
        </div>
    </div>
</div>

<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath }/js/trainplan/newCheck.js" charset="gbk"></script> 
</body>
</html>
