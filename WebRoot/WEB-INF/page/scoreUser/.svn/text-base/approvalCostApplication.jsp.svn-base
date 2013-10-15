<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>审批积分申请</title>
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
                                                                                                       审批积分申请
                                        </li>
                                	</ul>
                                </div>
                                <div class="y"></div>
                            </div> 
    </div>
  </div>
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">员工积分申请审批</h2>
            <div class="courseupload">
            	
                <div>
                    <div>
                    
                    	<ul class="png_bg mt40">
                            <li class="now">查询</li>
                        </ul>
                        <input type="hidden" id="uid" name="uid" value="${uid}"/>
                        <div class="choosedcourse basic_list" style="background:transparent;border:0;">	
                                <div class="mt20">
                                    <div class="mt10"><span class="ml13">年度：<select name="year" class="select" id="yearTwo">
                                            <option value="">全部</option>
                                        	<option>2007</option>
                                            <option>2008</option>
                                            <option>2009</option>
                                            <option>2010</option>
                                            <option>2011</option>
                                            <option>2012</option>
                                            <option>2013</option>
                                            <option>2014</option>
                                            <option>2015</option>
                                            <option>2016</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                    </select></span><span class="ml13">审批状态：<select name="stauts" class="select" id="sta"><option value="">全部</option><option value="0">未审批</option><option value="1">已通过</option><option value="2">未通过</option></select></span>
                                    <span class="ml13">兑换形式：
                                    <select name="costWay_id" id="costWay_id" class="select">
                                    <option value="">全部</option>
                                    <c:forEach items="${costList }" var="c">
                                    <option value="${c.spId }">${c.name}</option>
                                    </c:forEach>
                                    
                                    </select>
                                    </span></div>
                                </div>
                                <div align="right"><input type="button" class="searchbutton m10" value="搜索" onclick="selectBottonClick(1)"/></div>
                             </div>
                             
                        <div class="mt10">
                            <div class="reHeight">
                                <p class="y mr10"><a href="javascript:;" class="functionbutton" id="btn_pzCost">批准</a><a href="javascript:;" class="functionbutton" id="btn_bpzCost">不批准</a></p>
                            </div>
                         
              <div class="dataTables_wrapper mt10" style="padding-bottom:0">
                            
                               <!-- 个人兑换积分审批列表 -->
		                <div id="list_onlineApplyCostScore"></div>
        </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
	var basepath = "${basepath}";
</script>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath }/js/score/applyScore.js" charset="gbk"></script>
<input id="uid" name="uid" type="hidden" value="${uid}"/>
</body>

</html>