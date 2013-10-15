<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%><%@include file="/WEB-INF/page/include/taglibs.jsp"%>
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
  DD_belatedPNG.fix('.png_bg,.option');
</script>
<![endif]-->
</head>
<body class="bg">
<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">培训详情</h2>
            <div class="basic_information mt2">
            	<h3 class="mt20">培训需求</h3>
                <table border="0" cellspacing="15" cellpadding="15" style="margin-top:0">
                	<tbody>
          <tr>
            <td>年度</td>
            <td>${dmdPost.topic.year}</td>
          </tr>
          <tr>
            <td>迫切性</td>
            <td> <c:choose>
              <c:when test="${dmdPost.urgentLevel==1}">迫切</c:when>
              <c:otherwise>一般</c:otherwise>
              </c:choose></td>
          </tr>
          <tr>
                        	<td style="vertical-align:top">人员信息</td>
                            <td class="objectstring" colspan="3" id="newpersonco">
                            
                                    	<div class="reHeight" style="padding-top:5px">
                                    	<c:forEach items="${dmdPost.users}"  var="user" varStatus="st" >  
                                    	<label class="speciallabel">${user.name}</label>
                                    	</c:forEach>
                                    	</div>
                                    </td>                           
                        </tr>
          <tr>
            <td>业务发展所需提升性培训</td>
            <td>${dmdPost.businessTrain}</td>
          </tr>
          <tr>
            <td>职业发展所需提升性培训</td>
            <td>${dmdPost.professionTrain}</td>
          </tr>
          </tbody>
          </table>
          <h3>培训需求项</h3>
          <table border="0" cellspacing="15" cellpadding="15" style="margin-top:0">
                	<tbody>
            <c:forEach items="${dmdPost.dpis}"  var="dp" varStatus="st" >     	
          <tr>
            <td>${dp.dmdItem.name}</td>
            <td>${dp.trainContent}</td>
          </tr>
          </c:forEach> 
                    </tbody>
                </table>
                <div align="right" class="mr100"></div>
            </div>
        </div>
</body>
<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
</html>






    