<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
	<meta http-equiv="Content-Type" content="text/xhtml; charset=utf-8" />
	<meta http-equiv="content-language" content="utf-8" />
	<title>修改培训计划</title>
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
               <li class="last">修改培训计划</li>
            </ul>
           </div>
           <div class="y"></div>
       </div> 
    </div>
  </div> 
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">修改培训计划</h2>
        	<form id="trainplan" action="modifyAndSave.html?id=${p.tpId }" method="post">
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
                                	<option value="${p.year }">${p.year }</option>
                                	<c:if test="${p.year != nowYear }">
                                	    <option value="${nowYear }">${nowYear }</option>
                                	</c:if>
                                </select>
                            </td>
                        </tr>
                    	<tr>
                        	<td class="taR"><em>*</em>计划类型</td>
                        	<td>
                        	<c:if test="${p.planType == '0'}">
                        	   <em class="option choosed"><input id="pType" name="pType" type="radio" value="1" /></em>正式培训计划                      	   
                        	</c:if>	
                        	<c:if test="${p.planType == '1'}">　
                        	   <em class="option choosed"><input id="pType" name="pType" type="radio" value="0" /></em>临时培训计划 
                        	</c:if>
                        	<div id="pType_error" class="validate_error"></div>
                        	</td>
                        </tr>
                        <tr>
                        	<td class="taR"><em>*</em>编号</td>
                        	<td><input id="sn" name="sn" type="text" class="input vm" value="${p.sn }" readonly="readonly" /><div id="sn_error" class="validate_error"></div></td>
                        </tr>
                        <tr>
                        	<td class="taR"><em>*</em>名称</td>
                        	<td><input id="name" name="name" type="text" class="input vm" value="${p.name }" maxlength="30" /><div id="name_error" class="validate_error"></div></td>
                        </tr>
                        <tr>
                        	<td class="taR"><em>*</em>培训费用</td>
                        	<td><input id="cost" name="cost" type="text" class="input vm" value="${p.cost }"/><div id="cost_error" class="validate_error"></div></td>
                        </tr>
                         <tr>
                        	<td class="taR">开始日期</td>
                        	<td><input id="startDate" name="start_date" type="text" class="input vm si" value="${p.start_date }" readonly="readonly" /><!--时间控件--><div id="startDate_error" class="validate_error"></div></td>
                        </tr>
                        <tr>
                        	<td class="taR">结束日期</td>
                        	<td><input id="endDate" name="end_date" type="text" class="input vm si" value="${p.end_date }" readonly="readonly" /><!--时间控件--><div id="endDate_error" class="validate_error"></div></td>
                        </tr>
                        <tr>
                        	<td class="taR vt" style="padding-top:0;">备注</td>
                        	<td>
                        		<textarea name="remarks" cols="" rows="" class="input vm">${p.remarks }</textarea>
                        	</td>
                        </tr>
                    </tbody>
                </table> 	
                	
                <div align="right" class="mr10">
                <input type="submit" class="searchbutton m10" value="确定"/></a>
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
