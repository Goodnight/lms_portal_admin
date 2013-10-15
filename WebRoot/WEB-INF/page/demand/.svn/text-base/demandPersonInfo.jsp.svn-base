<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>员工培训需求详情</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>
<body class="bg">
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
                        <a href="${basepath }/demand/demandPersonIndex.html">员工培训需求</a>
                    </li>
                    <li class="last">
                     查看详情
                    </li>
                </ul>
            </div>
            <div class="y"></div>
        </div> 
        </div>
    </div>              
    <div class="content cl">
        <div class="ngreyborder changeblue2 mt20">
            <h2>员工培训需求项</h2>
                <div class="basic_information mt2" style="padding-top:20px">
                <table border="0" cellspacing="15" cellpadding="15" style="margin-top:0">
                    <tbody>
                        <tr>
                            <td width="50%">年度</td>
                            <td width="50%" align="center">${dpb.topic.year}</td>
                        </tr>
                        <tr>
                            <td>迫切性</td>
                            <td>
                                <c:if test="${dpb.urgentLevel==1}"> 一般</c:if>
                                <c:if test="${dpb.urgentLevel==0}"> 不迫切</c:if>
                                <c:if test="${dpb.urgentLevel==2||dpb.urgentLevel==''}">迫切</c:if>
                            </td>
                        </tr>
                        <tr>
                            <td>业务发展所需提升性培训</td>
                            <td>${dpb.businessTrain}</td>
                        </tr>
                        <tr>
                            <td>职业发展所需提升性培训</td>
                            <td>${dpb.professionTrain}</td>
                        </tr>
                    </tbody>
                </table>
            <h3>员工培训需求项</h3>
                <table border="0" cellspacing="15" cellpadding="15" style="margin-top:0">
                    <c:forEach items="${dpb.dpis}" var="dp" >
                          <tr class="grey">
                              <td>${dp.dmdItem.name}</td>
                              <td>${dp.trainContent}</td>
                          </tr>
                    </c:forEach>
                </table>
            </div>
        </div>
        <div align="right" class="m10"><a href="demandPersonIndex.html" class="back vm">关闭</a></div>
    </div>
</div>              
</body>
</html>
