<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>员工积分分配</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">

<div id="dialog" class="hidden">
			<div class="blackall">&nbsp;</div>
			<div class="newwindow" id="choosepersonco">
				<div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
			    <div id="dialog_content" class="cl"></div>
			</div>
		</div>
		
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
                                                                                                       员工积分分配
                                        </li>
                                	</ul>
                                </div>
                                <div class="y"></div>
                            </div> 
    </div>
  </div>
  
  <form id="form_scoreUser" action="doSaveScoreUserAvg.html" method="post">
  <div class="content cl">
  
		<div class="ngreyborder changeblue2 mt20">
		
        	<h2 class="png_bg">员工奖励积分分配</h2>
            <div class="courseupload basic_information">
            	
                <div>
                	 
                	<table border="0" cellspacing="15" cellpadding="15">
                	<tbody>
                    	<tr>
                        	<td class="taR"><em>*</em>获奖人</td>
                          
                            
                            <td>${pos }</td>
                        </tr>
                        
                        
                        <tr>
                            <td class="taR"><em>*</em>奖励积分数值</td>
                            <td><input type="text" name="score" id="score"/></td>
                        </tr>
                        <tr>
                            <td class="taR">有效期</td>
                            <td>4年</td>
                        </tr>
                        <tr>
                        	<td class="taR"><em>*</em>奖励类别</td>
                            <td>
                            	<select id="gain_category_id" name="gain_category_id">
		                      <c:forEach items="${gainTypeList }" var="g">
			                  
			                   
			                     <option value="${g.spId }">${g.name }</option>
			               
			                     
			                   </c:forEach>
		                     </select>
                            </td>
                        </tr>
                        <tr>
                        	<td class="taR vt">奖励原因</td>
                            <td><textarea name="rewardReason" cols="" rows=""></textarea></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        <input type="hidden" id="items" name="items" value="${items }"/>
        <div class="taR">
	                            <input name="_next" type="submit" class="step m10 vm" value="确定"/>
				    			<a href="${basepath }/rewardScoreUser/scoreUserList.html" class="back m10 vm">关闭</a>
			    			</div>
    </div>
    </form>
</div>
<script type="text/javascript">
	var basepath = "${basepath}";
</script>

<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath }/js/score/scoreFenP.js" charset="gbk"></script>
</body>

</html>