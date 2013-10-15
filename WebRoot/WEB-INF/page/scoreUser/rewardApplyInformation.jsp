<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>员工积分兑换申请详情信息</title>
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
                                                                                                       员工积分兑换申请详情信息
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
                <table border="0" cellspacing="15" cellpadding="15"  width="60%">
                <colgroup>
                        	<col width="25%" />
                        	<col width="25%" />
                            <col width="25%" />
                        	<col width="25%" />       
                    	</colgroup>
                                <tbody>
                                    <tr>
                                        <td class="taR">申请人</td>
                                        <td>${scoreUserCost.user.name }</td>
                                        <td class="taR">部门</td>
                                        <td>${orgName }</td>	
                                    </tr>
                                    <tr>
                                        <td class="taR">项目名称</td>
                                        <td>${scoreUserCost.projectName }</td>
                                        <td class="taR">地点</td>
                                        <td>${scoreUserCost.address }</td>	
                                    </tr>
                                    <tr>
                                        <td class="taR">开始时间</td>
                                        <td>${scoreUserCost.begin_time }</td>
                                        <td class="taR">结束时间</td>
                                        <td>${scoreUserCost.end_time }</td>
                                    </tr>
                                     <tr>
                                       <td class="taR">使用积分范围</td>
                                        <td>${scoreUserCost.costScope.name }</td>
                                        <td class="taR">兑换积分</td>
                                        <td>${scoreUserCost.score }</td>
                                    </tr>
                                    <tr>
                                        <td class="taR">主要目的</td>
                                        <td colspan="3">${scoreUserCost.purpose }</td>
                                    </tr>
                                     <tr>
                                        <td class="taR">兑换形式</td>
                                        <td colspan="3">${scoreUserCost.costWay.name }</td>
                                    </tr>
                                    <tr>
                                        <td class="taR">主要内容</td>
                                        <td>${scoreUserCost.content }</td>
                                    </tr>
                                    <tr>
                                        <td class="taR">备注说明</td>
                                        <td>${scoreUserCost.remarks }</td>
                                    </tr>
                                </tbody>
                            </table> 	
                
            </div>
        </div>
        <div align="right">
<!--         <input name="" type="button" class="step vm m10" value="批准" /> -->
<!--         <input name="" type="button" class="step vm m10" value="不批准" /> -->
        <a href="${basepath }/rewardScoreUser/scoreUserByForCostList.html?uid=${uid}" class="back m10 vm">关闭</a></div>
    </div>
    
</div>

<script type="text/javascript">
		    var uid = "${uid}";
		    var sucId = "${sucId}";
		</script>
<script type="text/javascript">
	var basepath = "${basepath}";
</script>
<jsp:include page="/WEB-INF/page/include/script.jsp" />

</body>

</html>