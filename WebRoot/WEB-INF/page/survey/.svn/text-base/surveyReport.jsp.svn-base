<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="UTF-8" xml:lang="UTF-8">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=gbk" />
    <meta http-equiv="content-language" content="gbk" />
    <title>评估报告</title>
    <jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>

<body class="bg">
<div class="blackall hidden">&nbsp;</div>
<div class="newwindow hidden" id="choosepersonco">
    <div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
    <img src="${basepath }/images/ex14.jpg" width="486" height="279" />
</div>
<div class="newwindow hidden" id="choosegroup">
    <div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
    <img src="${basepath }/images/ex15.jpg"/>
</div>

<div class="container">
    <!-- 导入头部的JSP文件 -->
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
                        <c:if test="${surveyType == '1' }"><a href="${basepath }/survey/index.html?type=1">反应层评估</a></c:if>
                        <c:if test="${surveyType == '2' }"><a href="${basepath }/behavior/index.html?type=2">行为层评估</a></c:if>
                        <c:if test="${surveyType == '3' }"><a href="${basepath }/survey/index.html?type=3">LPI测评</a></c:if>
                        <c:if test="${surveyType == '4' }"><a href="${basepath }/survey/index.html?type=4">综合评估</a></c:if>
                    </li>
                    <li class="last">${src.survey.topic }评估报告</li>
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
                          <div align="center" class="pt15"><a href="javascript:;">${src.survey.topic }评估报告</a> </div>
                          <h3>一、人员参与情况</h3>
                          <table class="content">
                              <tr>
                                 <td>本次评估一共有${userNum }人，共${participantsNum }人已参与。</td>
                                 <td class="taL"><!-- <img src="${basepath }/images/ex13.jpg" /> --></td>
                              </tr>
                          </table> 
                          <h3>二、本次评估总平均分是<span id="showSumAvgScore" class="ml13"></span></h3>
                          <h3>三、大类评估情况<!-- <a href="javascript:;" class="showpic chooseperson" style="margin-left:12px" >显示大类柱形图</a> --></h3>
                          <table class="mt20 ml20">
                              <tr>
                                  <td class="taL pr10" style="vertical-align:top">
                                      <ul>
                                          <c:forEach items="${survey.reportCategories }" var="sc">
                                              <li>${sc.name }：<c:if test="${sc.avgScore==null }">无平均分</c:if><c:if test="${sc.avgScore!=null }"><fmt:formatNumber type="number" value="${sc.avgScore }" maxFractionDigits="2"/></c:if></li>  
                                          </c:forEach>
                                      </ul>
                                  </td>
                                  <td class="taL hidden"><img src="${basepath }/images/ex14.jpg" /></td>
                              </tr>
                          </table>
                          <h3>四、每题平均分</h3>
                          <div class="dataTables_wrapper mt10" style="padding-bottom:0">
                              <table class="datatable" width="100%">
                                  <thead>
                                      <tr>
                                          <th>大类</th>
                                          <th>小题</th>
                                          <th>平均分</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <c:set value="0" var="count" /> <!-- 计数器 -->
                                      <c:set value="0" var="sumScore" /> <!-- 计分器 -->
                                      <c:forEach items="${survey.reportCategories }" var="scp">
                                          <c:if test="${scp.avgScore!=null }"> <!-- 仅当大类有总平均分时才显示 -->
                                              <tr class="gradeA odd">
                                                  <td>${scp.name }</td>
                                                  <td><!-- <a href="javascript:;" class="groupadd">显示分类下柱形图</a> --></td>
                                                  <td><fmt:formatNumber type="number" value="${scp.avgScore }" maxFractionDigits="2"/></td>
                                              </tr>
                                          </c:if>
                                          <c:forEach items="${scp.reportItems }" var="si" varStatus="sit">
                                              <c:if test="${si.type == 3 }"> <!-- 量规题 -->
                                                  <tr class="gradeA <c:out value="${sit.index%2==0?'even':'odd' }"/>">
                                                      <td></td>
                                                      <td>${si.question }</td>
                                                      <td><fmt:formatNumber type="number" value="${si.avgScore }" maxFractionDigits="2"/></td>
                                                      <c:set value="${count + 1}" var="count" /> <!-- 每循环至此一次,记小题数+1 -->
                                                      <c:set value="${sumScore + si.avgScore}" var="sumScore" /> <!-- 小题总分数累加 -->
                                                  </tr>
                                              </c:if>
                                          </c:forEach>
                                      </c:forEach>
                                      <c:if test="${count!=0 && sumScore!=0 }"><input id="sumAvgScore" type="hidden" value="${sumScore/count }" /></c:if>
                                  </tbody>
                              </table>
                          </div>
                          <form id="survey_report_form" action="${basepath }/survey/saveSurveyReport.html" method="POST">
                              <input name="surveyId" type="hidden" value="${surveyId }" /> <!-- 报告所属评估ID -->
                              <input name="surveyType" type="hidden" value="${surveyType }" /> <!-- 报告所属评估TYPE -->
                              <!-- flag为1表示新建,为0表示修改 -->
                              <c:if test="${src.summary==null && src.experience==null  }"><input name="flag" type="hidden" value="1" /></c:if>
                              <c:if test="${src.summary!=null || src.experience!=null  }"><input name="flag" type="hidden" value="0" /><input name="srcId" type="hidden" value="${src.srcId }" /></c:if>
                              <h3>五、开放式问题总结</h3>
                              <div><textarea name="summary" cols="" rows="" class="w685 ml12 mt10">${src.summary }</textarea></div>
                              <h3>六、本次培训中的经验与不足</h3>
                              <div><textarea name="experience" cols="" rows="" class="w685 ml12 mt10">${src.experience }</textarea></div>
                              <div class="taR m10">
                                  <input type="submit" class="step mr10" value="保存" />
                                  <input type="button" class="step mr10" value="导出" />
                                  <input type="button" class="back resourceDetailClose" value="关闭"  />
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
   </div>    
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript">
$(document).ready(function(){
    var sumAvgScore = $("#sumAvgScore").val();
    if(null!=sumAvgScore){
        var amount = parseFloat(sumAvgScore).toFixed(2); //取两位
        $("#showSumAvgScore").text("（平均分："+amount+"分）"); //页面加载完成后将总平均分获取
    }else{
        $("#showSumAvgScore").text("无平均分");
    }    
});
</script>
</body>
</html>
