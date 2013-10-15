<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>无标题文档</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
<link href="${basepath}/css/festival.css" rel="stylesheet" type="text/css" />
<!--[if IE 6]>
<script src="js/DD_belatedPNG_0.0.8a-min.js"></script>
<script>
  DD_belatedPNG.fix('.png_bg,.option');
</script>
<![endif]-->
</head>
<body class="bg">
<div id="dialog" class="hidden">
<div class="blackall ">&nbsp;</div>
<div class="newwindow " id="release">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath}/images/close.png" width="40" height="40" /></a></div>
    <div class="ngreyborder changeblue2 mt20">
    	<div class="scroll h450">
        	<div id="list_inquiryTpItemList"></div>
        </div>
    </div>
</div>
</div>
<div class="newwindow hidden" id="leadinco">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath}/images/close.png" width="40" height="40" /></a></div>
    <div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">导入培训需求模板</h2>
            <div class="basic_information w90p">
              <div class="pt20">导入培训需求模板：<input name="" type="file" /> <a href="" class="ml30">下载导入模板 <img src="${basepath}/images/download.png" width="16" height="16" class="vm"/></a></div>
                <div class="m10 taR "><input type="button" class="step windowbutton" value="确定" /></div>
            </div>
    </div>
</div>
<div class="newwindow hidden" id="leadinco2">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath}/images/close.png" width="40" height="40" /></a></div>
    <div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">导入结果明细</h2>
            <div class="basic_information w90p">
              <div class="pt20">导入结果明细：<input name="" type="file" /> <a href="" class="ml30">下载导入模板 <img src="${basepath}/images/download.png" width="16" height="16" class="vm"/></a></div>
                <div class="m10 taR "><input type="button" class="step windowbutton" value="确定" /></div>
            </div>
    </div>
</div>
<div class="container">
    <jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
    <div class="content">
    	<jsp:include page="/WEB-INF/page/include/leftNav.jsp"></jsp:include>
        <div class="rightco">
        	<div>
            	<div class="main pl0">
                	<div class="mainco">
                    	<div class="searchblock pt15">
                                <ul class="dpnav2 m10">
                                	<li class="now">查询</li>
                                </ul>
                                <table border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td class="taR">模板名称</td>
                                <td class="taL"><input type="text" class="input" id="name"/></td>
                                <td class="taR">调查发布状态</td>
                                <td class="taL">
	                                <select id="status" class="select">
	                                	<option value="">请选择</option>
	                                	<option value="1">未发布</option>
	                                	<option value="2">已发布</option>
	                                </select>
                                </td>
                              </tr>
                              <tr>
                                <td class="taR">创建时间</td>
                                <td class="taL" colspan="3"><input id="creatDt" type="text" class="input vm time cls_date"/></td>
                              </tr>
                            </table>
							<div align="right" class="mt10"><input name="" type="button" class="searchbutton m10" value="搜索" onclick="page(1)" /></div>
                            
                        </div>
                        <div class="classlist">
                        	<h3 class="reHeight">
                            	<div class="z ml12">培训需求模板列表</div>
                                <div class="y"><a href="inquiryTpNew.html" class="functionbutton" target="_blank">新建</a><a href="javascript:;" class="functionbutton" id="leadin">导入</a><a id="btn_delete" class="functionbutton">删除</a></div>
                            </h3>
                            <div id="list_inquiryTp"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
<jsp:include page="/WEB-INF/page/include/script_1.jsp"></jsp:include>
<script type="text/javascript" src="${basepath}/js/inquiry/inquiryTp.js" charset="gbk"></script>
</body>

</html>








