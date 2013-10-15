<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>
    <c:if test="${flag == 'response' }">反应层评估参与情况</c:if>
    <c:if test="${flag == 'behavior' }">行为层评估参与情况</c:if>
    <c:if test="${flag == 'lpi' }">LPI测评参与情况</c:if>
    <c:if test="${flag == 'comprehensive' }">综合评估参与情况</c:if>
</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<jsp:include page="/WEB-INF/page/include/downloadData.jsp"></jsp:include>
<div class="container">
<jsp:include page="/WEB-INF/page/include/header.jsp" />
  <div class="breadCrumbHolder breadCrumbPage">
    <div class="headerco">
        <div class="breadCrumb reHeight noborder" id="breadCrumb3">
           <div class="z">
               <ul>
                   <li class="first">
                       <a href="${basepath }/index.html">首页</a>
                   </li>
                   <li>
                       <c:if test="${flag == 'response' }"><a href="${basepath }/survey/index.html?type=1">反应层评估</a></c:if>
                       <c:if test="${flag == 'behavior' }"><a href="${basepath }/behavior/index.html?type=2">行为层评估</a></c:if>
                       <c:if test="${flag == 'lpi' }"><a href="${basepath }/behavior/index.html?type=3">LPI测评</a></c:if>
                       <c:if test="${flag == 'comprehensive' }"><a href="${basepath }/survey/index.html?type=4">综合评估</a></c:if>
                       <c:if test="${flag == null }"><a href="#">评估</a></c:if>
                   </li>
                   <li class="last">
                        <c:if test="${flag == 'response' }">反应层评估参与情况</c:if>
                        <c:if test="${flag == 'behavior' }">行为层评估参与情况</c:if>
                        <c:if test="${flag == 'lpi' }">LPI测评参与情况</c:if>
                        <c:if test="${flag == 'comprehensive' }">综合评估参与情况</c:if>
                        <c:if test="${flag == null }">评估参与情况</c:if>
                   </li>
               </ul>
           </div>
           <div class="y"></div>
      </div> 
    </div>
  </div>
  <div class="content cl">
   <input type="hidden" id="sId" value="${sId}"/>
        <div class="ngreyborder changeblue2 mt20">
            <h2 class="png_bg">
                <c:if test="${flag == 'response' }">反应层评估参与情况</c:if>
                <c:if test="${flag == 'behavior' }">行为层评估参与情况</c:if>
                <c:if test="${flag == 'lpi' }">LPI测评参与情况</c:if>
                <c:if test="${flag == 'comprehensive' }">综合评估参与情况</c:if>
            </h2>
            <div class="courseupload pt15">
                <ul id="courseuploadTab">
                    <li class="now">已参与人员</li>
                    <li>未参与人员</li>
                </ul>
                <div>
                    <div>
                        <div class="dataTables_wrapper mt10" style="padding-bottom:0">
                            <div id = "inquiryPersonListInfo1"></div>
                        </div>
                    </div>
                    <div class="hidden">
                        <div class="taR" style="margin-right:12px;"><%--<a href="javascript:;" class="functionbutton mailreminder">邮件提醒</a></div>--%>
                        <div class="dataTables_wrapper mt10" style="padding-bottom:0">
                            <div id = "inquiryPersonListInfo2"></div>
                        </div>
                    </div>
                </div>
             
            </div>
               <div class="taR">
                <input type="button" class="functionbutton" value="导出" onclick="export_participateUser()" id="outportButton" />
                <input type=button value=关闭 onclick="window.history.back()" class="back m10" />
                </div>
        </div>
    </div>
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript">
	var flag = "${flag}";
	
	$('#courseuploadTab').on('click', 'li', function () {
		var o = $(this);
		if (o.index() == 0) {
			$('#outportButton').show();
		} else {
			$('#outportButton').hide();
		}
	});

</script>
<script type="text/javascript" src="${basepath}/js/estimate/surveyPerson.js" ></script>
</body>
</html>
