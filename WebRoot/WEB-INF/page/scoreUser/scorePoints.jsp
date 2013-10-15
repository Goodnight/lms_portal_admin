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
  
  <form action="doSaveScoreUserC.html" method="post">
  <div class="content cl">
  
		<div class="ngreyborder changeblue2 mt20">
		
        	<h2 class="png_bg">申请详细信息</h2>
            <div class="courseupload basic_information">
            	
                <div>
                	 
                	<table border="0" cellspacing="15" cellpadding="15">
                	<tbody>
                    	<tr>
                        	<td class="taR">获奖人</td>
                            <td>${userName}</td>
                        </tr>
                        <tr>
                            <td class="taR"><em>*</em>奖励积分数值</td>
                            <td>${scoreUserGain.score}</td>
                        </tr>
                        <tr>
                            <td class="taR">有效期</td>
                            <td>${scoreUserGain.end_time}</td>
                        </tr>
                        <tr>
                        	<td class="taR">奖励类别</td>
                            <td>${scoreUserGain.gainCategory.name}</td>
                        </tr>
                        <tr>
                        	<td class="taR vt">奖励原因</td>
                            <td>${scoreUserGain.rewardReason}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
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