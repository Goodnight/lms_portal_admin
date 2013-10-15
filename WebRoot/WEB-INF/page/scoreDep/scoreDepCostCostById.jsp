<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>查看积分兑换申请详情</title>
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
                                            <a href="${basepath }/rewardScoreDep/scoreDepList.html">集团积分</a>
                                        </li>
                                        <li class="last">
                                                                                                                查看积分兑换申请详情
                                        </li>
                                	</ul>
                                </div>
                                <div class="y"></div>
                            </div> 
    </div>
  </div>
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">积分兑换申请</h2>
        	<!-- 部门Id -->        	
        	<input id="depId" name="depId" type="hidden" value="${scoreDepCost.dep.orgId}"/>
        	<input id="sdcId" name="sdcId" type="hidden" value="${scoreDepCost.sdcId}"/>
        	<input id="score" name="score" type="hidden" value="${scoreDepCost.score}"/>
             
            <div class="basic_information mt2">
                <div>
                	<table border="0" cellspacing="15" cellpadding="15" width="90%">
                	<colgroup>
                    	<col width="150" />
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<td><em>*</em>申请使用积分部门</td>
                        	<td>${scoreDepCost.dep.name }</td>
                        </tr>
                         <tr>
                         	<td><em>*</em>项目名称</td>
                            <td>${scoreDepCost.projectName }</td>
                        </tr>
                        <tr>
                            <td><em>*</em>所需兑换积分</td>
                            <td>${scoreDepCost.score }</td>
                        </tr>
                        <tr>
                        	<td><em>*</em>使用时间</td>
                           	<td>${scoreDepCost.begin_time }　到　${scoreDepCost.end_time }</td>
                        </tr>
                        <tr>
                        	<td>参与人员</td>
                        	<td>
                        	<c:forEach items="${scoreDepCost.list}" var="users"> 
                        	 ${users.user.name}&nbsp;&nbsp;
                        	</c:forEach>
                        	</td>
                        </tr>
                        <tr>
                        	<td><em>*</em>兑换形式</td>
                            <td>${scoreDepCost.costWay.name }</td>
                        </tr>
                        <tr>
                        	<td><em>*</em>主要目的</td>
                            <td>${scoreDepCost.purpose }</td>
                        </tr>
                        <tr>
                        	<td>主要内容</td>
                            <td>${scoreDepCost.content }</td>
                        </tr>
                        <tr>
                        	<td>备注</td>
                            <td>${scoreDepCost.remarks }</td>
                        </tr>
                    </tbody>
                </table>
                <div class="mt10 taR"><c:if test="${scoreDepCost.stauts == 0 }"><input name="" type="button" value="批准"  class="step vm m10" id="btn_pz" /><input name="" type="button" value="不批准" class="step vm m10" id="btn_bpz" /></c:if><a href="javascript:history.go(-1)" class="back vm m10">关闭</a></div>	
                </div>
            </div>
        </div>
        
    </div>
</div>

<script type="text/javascript">
	var basepath = "${basepath}";
</script>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath }/js/score/applyScoreById.js" charset="gbk"></script>
</body>

</html>