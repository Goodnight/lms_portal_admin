<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>奖励积分申请详细信息</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div class="container">
    <jsp:include page="/WEB-INF/page/include/header.jsp" />
  <form action="doSaveScoreUserC.html" method="post">
      <div class="breadCrumbHolder breadCrumbPage">
  	<div class="headerco">
     	<div class="breadCrumb reHeight noborder" id="breadCrumb3">
                                <div class="z">
                                	<ul>
                                        <li class="first">
                                            <a href="${basepath }/">首页</a>
                                        </li>
                                        <li>
                                            <a href="${basepath }/rewardScoreUser/scoreUserList.html">员工积分</a>
                                        </li>
                                        <li class="last">
                                                                                                       奖励积分申请详细信息
                                        </li>
                                	</ul>
                                </div>
                                <div class="y"></div>
                            </div> 
    </div>
  </div>
  <div class="content cl">
  
		<div class="ngreyborder changeblue2 mt20">
		
        	<h2 class="png_bg">申请详细信息</h2>
            <div class="basic_information mt10">
           
                <table border="0" cellspacing="15" cellpadding="15">
                                <tbody>
                                 <c:if test="${scoreUserGain.gainCategory.spId eq '402882f03878d25a013878e8856c0004'}">
                                    <tr>
                                        <td>类型</td>
                                        <td >${scoreUserGain.gainType.name}</td>
                                    </tr>
                                    <tr>
                                        <td>课程名称</td>
                                        <td>${scoreUserGain.coursewareName}</td>
                                    </tr>
                                    <tr>
                                        <td>时间</td>
                                        <td>${scoreUserGain.gain_time}</td>
                                    </tr>
                                     <tr>
                                        <td>地点</td>
                                        <td>${scoreUserGain.adress}</td>
                                    </tr>
                                    <tr>
                                        <td>授课时长</td>
                                        <td>${scoreUserGain.times}</td>
                                    </tr>
                                    <tr>
                                        <td>是否为集团培训师</td>
                                        <td>
                                        <c:if test="${scoreUserGain.trainStatus == 0}">
                                                                                                                  否
                                        </c:if>
                                        <c:if test="${scoreUserGain.trainStatus == 1}">
                                                                                                                  是
                                        </c:if>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>奖励积分数值</td>
                                        <td>${scoreUserGain.score}</td>
                                    </tr>
                                    <tr>
                                        <td>奖励时间</td>
                                        <td>${scoreUserGain.gain_time}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>奖励类别</td>
                                        <td>${scoreUserGain.gainCategory.name }</td>
                                    </tr>
                                    <tr>
                                        <td>奖励原因</td>
                                        <td>${scoreUserGain.rewardReason }</td>
                                    </tr>
                             </c:if>      
                                    <c:if test="${scoreUserGain.gainCategory.spId eq '402882f03878d25a013878e884c10003'}">
									<tr>
                                        <td>类型</td>
                                        <td >${scoreUserGain.gainType.name }</td>
                                    </tr>
                                    <tr>
                                        <td>课程名称</td>
                                        <td>${scoreUserGain.coursewareName}</td>
                                    </tr>
                                    <tr>
                                        <td>时间</td>
                                        <td>${scoreUserGain.gain_time}</td>
                                    </tr>
                                    <tr>
                                        <td>课时</td>
                                        <td>${scoreUserGain.times}</td>
                                    </tr>
                                    <tr>
                                        <td>素材形式</td>
                                        <td>${scoreUserGain.form}</td>
                                    </tr>
                                    <tr>
                                        <td>参与人员</td>
                                        <td>${scoreUserGain.persons}</td>
                                    </tr>
                                    <tr>
                                        <td>工作量</td>
                                        <td>${scoreUserGain.works}</td>
                                    </tr>
                                    <tr>
                                        <td>奖励积分数值</td>
                                        <td>${scoreUserGain.score}</td>
                                    </tr>
                                    <tr>
                                        <td>奖励时间</td>
                                        <td>${scoreUserGain.gain_time}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>奖励类别</td>
                                        <td>${scoreUserGain.gainCategory.name }</td>
                                    </tr>
                                    <tr>
                                        <td>奖励原因</td>
                                        <td>${scoreUserGain.rewardReason}</td>
                                    </tr>
                                    </c:if>
                                </tbody>
                            </table> 	
                
            </div>
        </div>
        <div class="taR">
				    			<a href="${basepath }/rewardScoreUser/scoreUserApplyCostList.html?uid=${uid}" class="back m10 vm">关闭</a>
			    			</div>
    </div>
    </form>
</div>
<script type="text/javascript">
	var basepath = "${basepath}";
</script>
<script type="text/javascript">
	var sugId = "${sugId}";
	var uid = "${uid}";
</script>
<jsp:include page="/WEB-INF/page/include/script.jsp" />

</body>

</html>