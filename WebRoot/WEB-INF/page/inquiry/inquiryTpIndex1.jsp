<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%><%@include
	file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
		<meta http-equiv="content-language" content="gbk" />
		<c:if test="${surveyType == '1' }">
			<title>培训需求模板列表</title>
		</c:if>
		<c:if test="${surveyType == '2' }">
			<title>评估模板列表</title>
		</c:if>
		<jsp:include page="/WEB-INF/page/include/css_bootstrap.jsp"></jsp:include>

		
	</head>
	<body class="bg">
				<jsp:include page="/WEB-INF/page/include/header_bootstrap.jsp"></jsp:include>
		<form id="form1" class="hide">
			<input type="hidden" id="importType" name="importType" value="${surveyType == '1'?'inquiry':'evaluate' }" />
			<input type="hidden" id="objId" name="objId" value="${surveyType}" />
		</form>
		<div class="blackall hide">
			&nbsp;
		</div>

		<div id="dialog" class="hide">
			<div class="blackall ">
				&nbsp;
			</div>
			<div class="newwindow" id="release">
				<div class="taR">
					<a href="javascript:;"><img class="png_bg closed"
							src="${basepath}/images/close.png" width="40" height="40" /> </a>
				</div>
				<div class="ngreyborder changeblue2 mt20">
					<div class="scroll h450">
						<div id="list_inquiryTpItemList"></div>
					</div>
				</div>
			</div>
		</div>

		<%-- <div class="newwindow hidden" id="leadinco2">
			<div class="taR">
				<a href="javascript:;"><img class="png_bg closed"
						src="${basepath }/images/close.png" width="40" height="40" /> </a>
			</div>
			<div class="ngreyborder changeblue2 mt20">
				<h2 class="png_bg">
					导入结果明细
				</h2>
				<div class="basic_information w90p">
					<div class="pt20">
						导入结果明细：
						<input id="filepath" name="filepath" type="file" />
						<a href="" class="ml30">下载导入模板 <img
								src="${basepath }/images/download.png" width="16" height="16"
								class="vm" /> </a>
					</div>
					<div class="m10 taR ">
						<input type="button" class="step windowbutton" value="确定" />
					</div>
				</div>
			</div>
		</div> --%>
	<div class="container-fluid" id="main-container">
			<c:set var="menu_sn" value="10" scope="request"></c:set>
			<c:if test="${surveyType == '2' }">
				<c:set var="menu_sn" value="8" scope="request"></c:set>				
			</c:if>
			<c:set var="menu_url" value="/inquiry/inquiryTpIndex.html?surveyType=1" scope="request"></c:set>
			<jsp:include page="/WEB-INF/page/include/leftNav_bootstrap.jsp"></jsp:include>
			<div id="main-content" class="clearfix">				
				<div id="breadcrumbs" class="pfb">
					<ul class="breadcrumb">
						<li class="first">
							<i class="icon-home"></i> 
							<a href="${basepath }/index.html">首页</a><span class="divider"><i class="icon-angle-right"></i></span>
						</li>
						<li>
							<a href="${basepath }/inquiry/inquiryTpIndex.html?surveyType=<%=request.getParameter("surveyType")%>"><jsp:include
														page="serveyType.jsp" /></a><span class="divider"><i class="icon-angle-right"></i></span>
						</li>
						<li class="last"><jsp:include page="serveyType.jsp" />列表
						</li>
					</ul>
				</div>
				<div class="y"></div>
	
						<input type="hidden" id="surveyType" name="surveyType"
							value="<%=request.getParameter("surveyType")%>" />

			<div class="clearfix newmain">
              <div class="">
             		 <div class="page-right">
							<ul class="nav nav-tabs">
								<li class="active"><a>查询</a></li>
							</ul>
							<br>
							<table border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td class="taR">
										模板名称&nbsp;
									</td>
									<td class="taL">
										<input id="name" type="text" class="input inputType" />
									</td>
									<td class="taR">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<jsp:include page="serveyType.jsp" />发布状态&nbsp;
									</td>
									<td class="taL">
										<select id="status" class="select">
											<option value="">
												全部
											</option>
											<option value="1">
												未发布
											</option>
											<option value="2">
												已发布
											</option>
										</select>
									</td>
								</tr>
								<tr>
									<td class="taR">
										创建时间&nbsp;
									</td>
									<td class="taL" colspan="3">
									<div class="input-prepend inputType">
										<span class="add-on"><i class="icon-calendar"></i></span>
										<input id="creatDt" type="text" class="input vm time span2" />
									 </div>
										
									</td>
								</tr>
							</table>
							<div align="right" class="mt10">
								<label class="btn btn-info btn-small" onclick="page(1)" hidefocus="true" /><i class="icon-search"></i> 搜索</label>
							</div>

						
					
              		 
               			<div class="row-fluid">
                        			<div class="span6">
                        				<div class="blue"><h4><jsp:include page="serveyType.jsp" />列表</h4></div>
                        			</div>

								<div class="span6">
                        			<div class="tableButton pull-right">
									<a href="inquiryTpNew.html?surveyType=${surveyType}"
										class="btn btn-small btn-success" target="_blank">新建</a>
									<a href="javascript:;"
										class="btn btn-small btn-warning" id="leadin">导入</a>
									<a id="btn_delete"
										 class="btn btn-small btn-danger">删除</a>
									</div>
								</div>
						</div>								

						<div class="dataTables_wrapper">
								<div id="list_inquiryTp"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
		
		<jsp:include page="/WEB-INF/page/include/upload_bootstrap.jsp"></jsp:include>
		<jsp:include page="/WEB-INF/page/include/script_bootstrap.jsp"></jsp:include>
		<script type="text/javascript"
			src="${basepath}/js/inquiry/inquiryTp_bootstrap.js" charset="gbk"></script>
		
	</body>
</html>
