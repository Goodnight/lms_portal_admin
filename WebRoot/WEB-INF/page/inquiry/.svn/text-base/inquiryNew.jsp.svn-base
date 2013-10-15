<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>无标题文档</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
<!--[if IE 6]>
<script src="js/DD_belatedPNG_0.0.8a-min.js"></script>
<script>
  DD_belatedPNG.fix('.png_bg,.option,.searchbutton');
</script>
<![endif]-->
</head>
<body class="bg">

<div class="blackall hidden">&nbsp;</div>
<div class="newwindow hidden" id="leadinco">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath}/images/close.png" width="40" height="40" /></a></div>
    <div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">导入模板</h2>
            <div class="basic_information w90p">
              <div class="pt20">导入模板：<input name="" type="file" /> <a href="" class="ml30">下载导入模板 <img src="${basepath}/images/download.png" width="16" height="16" class="vm"/></a></div>
                <div class="m10 taR "><input type="button" class="step releasebutton" value="确定"/></div>
            </div>
    </div>
</div>
<div class="newwindow hidden" id="chooseboard">
	<div class="taR"><a href="javascript:;"><img class="png_bg closeTp" src="${basepath}/images/close.png" width="40" height="40" /></a></div>
    <div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">模板列表</h2>
            <div class="basic_information mt2">
            	<div id="list_inquiryTpList"></div>
                 <div align="right" class="mr10" ><input name="" type="button" class="step m10 " value="确定" onclick="getTpInfo()"/></div>
            </div>
        </div>
</div>
<div class="newwindow hidden" id="release">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath}/images/close.png" width="40" height="40" /></a></div>
    <div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">发布模板</h2>
            <div class="basic_information mt2">
            	 <div>发布内容放这里</div>
                 <div align="right" class="mr10" >
                 	<p><input name="" type="button" class="step m10" value="保存"/><input name="" type="button" class="step m10 windowbutton2" value="发布"/><input name="" type="button" class="back m10 windowbutton2" value="关闭"/></p>
                    <p>模板可编辑。点击发布,模板方可使用</p>
                </div>
            </div>
        </div>
</div>
<div class="container">
  <jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">新建需求调查</h2>
					<form id="inquiry" action="saveInquiry.html" method="post">
						<div class="courseupload basic_information">
							<ul class="window_nav newnav">
								<li class="basic">
									<a href="updateInquiryIndex.html?iqId=${inquiry.iqId}"
										class="png_bg">基本信息</a>
								</li>
								<li class="course">
									<a href="inquiryAimInfo.html?iqId=${inquiry.iqId}"
										class="grey png_bg">安排人员</a>
								</li>
							</ul>
							<input id="itId" name="itId" type="hidden"
								value="${inquiry.template.itId}" />
							<input id="iqId" name="iqId" type="hidden"
								value="${inquiry.iqId}" />
							<table border="0" cellspacing="15" cellpadding="15" class="mt40">
								<colgroup>
									<col width="90" />
								</colgroup>
								<tbody>
									<tr>
										<td class="taR">
											<em>*</em>主题
										</td>
										<td colspan="3">
											<input id="topic" name="topic" type="text" class="input vm"
												value="${inquiry.topic}" />
										</td>
									</tr>
									<tr>
										<td class="taR">
											<em>*</em>开始时间
										</td>
										<td>
											<input id="startDate" name="startDate" type="text"
												class="input vm time " value="${inquiry.startDate}" />
										</td>
										<td class="taR">
											<em>*</em>结束时间
										</td>
										<td>
											<input id="endDate" name="endDate" type="text"
												class="input vm time" value="${inquiry.endDate}" />
										</td>
									</tr>
									<tr>
										<td class="taR">
											<em>*</em>选择模板
										</td>
										<td colspan="3">
											<input id="tpName" name="tpName" type="text"
												class="input vm si" value="${inquiry.template.name}" />
											<span class="vm " onclick="page(1)">选择模板</span> 或
											<span class="vm" id="leadin">导入模板</span>
										</td>
									</tr>
								</tbody>
							</table>
							<div align="right" class="mr10">
								<input type="submit" class="step m10 vm" value="下一步" />
								<a href="inquiryIndex.html" class="back m10 vm">关闭</a>
							</div>
						</div>
					</form>
				</div>
    </div>
</div>

<jsp:include page="/WEB-INF/page/include/script_1.jsp"></jsp:include>
<script type="text/javascript" src="${basepath}/js/inquiry/inquiryNew.js" charset="gbk"></script>
</body>

</html>






    