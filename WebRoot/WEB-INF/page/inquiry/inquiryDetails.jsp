<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<%
    String[] ind = new String[]{"一","二", "三", "四", "五", "六", "七","八", "九","十","十一"};
    String[] zimu = new String[]{"A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K" };
    int i = 0;
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>调查结果明细</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>
<body class="bg">
<!-- 对话框 -->
<div id="dialog" class="hidden">
    <div class="blackall">&nbsp;</div>
    <!-- 半透明背景 -->
    <div class="newwindow" id="choosepersonco">
        <!-- 关闭按钮 -->
        <div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
        <!-- 对话框内容 -->
        <div id="dialog_content" class="cl scroll"></div>
    </div>
</div> 
<div class="container">
	<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>    
	<div class="breadCrumbHolder breadCrumbPage">
    <div class="headerco">
        <div class="breadCrumb reHeight noborder" id="breadCrumb3">
            <div class="z">
                <ul>
                    <li class="first">
                        <a href="${basepath }/index.html">首页</a>
                    </li>
                    <li>
                        <a href="${basepath }/inquiry/inquiryIndex.html">培训需求</a>
                    </li>
                    <li class="last">调查结果明细</li>
                </ul>
            </div>
            <div class="y"></div>
        </div> 
    </div>
    </div>
    <div class="content">
        <div>
        	<div>
            	<div class="main pl0">
                	<div class="mainco">
                        <div class="classlist  vote">
							<div align="center" class="pt15">${survey.topic }的调查结果明细</div>
							<!-- 第一层问题大类 -->
                            <c:forEach items="${survey.categories }" var="sc">
                            <h3><%=ind[i++]%>、${sc.name }<span class="ml13"><c:if test="${si.type == 3 }"><span class="ml13">（平均分：${sc.avgScore }分）</span></c:if></span></h3>
                                <!-- 第二层问题小类 -->
                                <c:forEach items="${sc.items }" var="si" varStatus="sit">
                                    <dl>
                            	        <dt>${sit.count}、${si.question }<c:if test="${si.type == 3 }"><span class="ml13">（平均分：${si.avgScore }分）</span></c:if></dt>
                            	        <% int j = 0; %>
                            	        <!-- 第三层问题答案 -->
                            	        <c:if test="${si.type == 4 }"><dd>答案：<a id="${si.siId }" href="javascript:;" class="viewDetail">明细</a>&nbsp;&nbsp;<a id="${si.siId }" href="javascript:;" class="viewAll">汇总</a></dd></c:if>
                            	        <c:forEach items="${si.reses }" var="sr">
                            	            <dd class="gradeA <c:out value="${sr.sn%2==0?'odd':'even' }"/>">	
                                                <c:if test="${si.type != 4 }"><%=zimu[j++]%>、 ${sr.answer }<c:if test="${si.type == 3 }">（${sr.score }分）</c:if></c:if>
                                                <c:choose>
                                                    <c:when test="${empty si.voteCount }">
                                                        <span class="y voteunit"><em><label style="width:0px;margin-right:35px;">0%</label>0票</em></span>
                                                    </c:when>
                                                    <c:when test="${si.voteCount == '0' }">
                                                        <span class="y voteunit"><em><label style="width:0px;margin-right:35px;">0%</label>0票</em></span>
                                                    </c:when>
                                                    <c:otherwise>
                                                        <span class="y voteunit"><em><label style="width:${sr.vote/si.voteCount*442}px;margin-right:35px;"><fmt:formatNumber type="number" value="${sr.vote/si.voteCount*100}" maxFractionDigits="2"/>%</label>${sr.vote }票</em></span>
                                                    </c:otherwise>
                                                </c:choose>
                                            </dd>
                                        </c:forEach>
                                    </dl>
                                </c:forEach>
                            </c:forEach>
                            <div class="taR m10">
                                <!-- 发布屏蔽  
                                <input type="button" class="step longstep leadout" value="导出结果" />
                                <input type="button" class="step longstep leadout" value="导出平均分" />
                                -->
                                <a href="${basepath }/inquiry/inquiryIndex.html" class="back" type="button allclose">关闭</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
<script type="text/javascript">
$(".viewDetail").click(function(){   //明细
    var url = basepath+"/dialog/inquiryRemarkDetail.html?siId="+$(this).attr("id");
    $("#dialog_content").load(url);
    $("#dialog").show();
    $(".newwindow").show();
});

$(".viewAll").click(function(){     //汇总 2013032 by LTC
    var url = basepath+"/dialog/inquiryRemarkAll.html?siId="+$(this).attr("id");
    $("#dialog_content").load(url);
    $("#dialog").show();
    $(".newwindow").show();
});
</script> 
</body>
</html>
   