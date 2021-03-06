<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>员工积分维护</title>
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
                                                                                                       员工积分维护
                                        </li>
                                	</ul>
                                </div>
                                <div class="y"></div>
                            </div> 
    </div>
  </div>
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">积分维护</h2>
            <div class="courseupload basic_information">
            	<ul>
                	<li class="now w140">员工积分兑换</li>
                    <li class="w140">员工奖励积分分配</li>
                </ul>
                <div>
                
                		<form id="form_scoreUserCost" action="doSaveScoreUserCost.html" method="post">
	                		<table border="0" cellspacing="15" cellpadding="15">
			                	<colgroup>
		                        	<col width="10%" />
		                        	<col width="20%" />
		                            <col width="10%" />
		                        	<col width="25%" />       
		                    	</colgroup>
                                <tbody>
                                    <tr>
                                        <td class="taR">员工姓名</td>
                                        <input id="uid" name="uid" type="hidden" value="${uid}"/>
                                        <td><input name="iname" id="iname" type="text" class="vm input" value="${userName}" readonly="readonly"/></td>
                                        <td class="taR">部门</td>
                                        <input id="orgId" name="orgId" type="hidden" value="${orgId }"/>
                                        <td><input name="name" type="text" class="vm input" value="${orgName }" readonly="readonly"/></td>
                                    </tr>
                                    <tr>
                                        <td class="taR"><em>*</em>项目名称</td>
                                        <td><input name="projectName" type="text" class="vm input" id="projectName"/></td>
                                        <td class="taR">地点</td>
                                        <td><input name="address" type="text" class="vm input" /></td>
                                    </tr>
                                    <tr>
                                        <td class="taR"><em>*</em>使用时间</td>
										<td><input name="begin_time" type="text" id="search_start_date" class="timetext  cls_date" id="begin_time"/>到<input name="end_time" id="search_end_date" type="text" class="timetext  cls_date" id="end_time"/></td>
										
										 <td class="taR">
										 部门积分
										 <c:if test="${depTotalUsableScore != null}">
										 <em id="dmscore">${depTotalUsableScore}</em>
										 </c:if>
										 <c:if test="${depTotalUsableScore == null}">
										 <em id="dmscore">0</em>
										 </c:if>
										 </td>
                                        <td>员工积分
                                        <c:if test="${scoreUser.totalUsableScore != null}">
                                        <em id="psscore">${scoreUser.totalUsableScore}</em>
                                         <input  name="totalScore" type="hidden" value="${scoreUser.totalUsableScore}"/>
                                        </c:if>
                                        <c:if test="${scoreUser.totalUsableScore == null}">
                                        <em id="psscore">0</em>
                                        </c:if>
                                        </td>
                                    </tr>
                                     <tr>
                                       <td class="taR"><em>*</em>使用积分范围</td>
                                        <td>
                                        <select name="costScope_id" id="costScope_id" onChange="change()">
		                      <c:forEach items="${rewardCostRangeTypeList }" var="r">
			                     <option value="${r.spId }">${r.name }</option>
			                   </c:forEach>
		                     </select>
										</td>
                                        <td class="taR"><em>*</em>兑换积分</td>
                                        <td><input name="score" type="text" class="vm input" id="score"/></td>
                                    </tr>
                                    <tr>
                                        <td class="taR">主要目的</td>
                                        <td colspan="3"><input name="purposea" type="text" class="vm input" /></td>
                                    </tr>
                                     <tr>
                                        <td class="taR"><em>*</em>兑换形式</td>
                                        <td colspan="3">
                                        <select name="costWay_id" id="costWay_id">
		                      <c:forEach items="${rewardCostList }" var="r">
			                  
			                   
			                     <option value="${r.spId }">${r.name }</option>
			               
			                     
			                   </c:forEach>
		                     </select>
		                     </td>
                                    </tr>
                                    <tr>
                                        <td class="taR vt">主要内容</td>
                                        <td colspan="3"><textarea name="content" cols="" rows=""></textarea></td>
                                    </tr>
                                    <tr>
                                        <td class="taR vt">备注说明</td>
                                        <td colspan="3"><textarea name="remarks" cols="" rows=""></textarea></td>
                                    </tr>
                                </tbody>
                            </table> 	
                            
                            <div class="taR">
	                            <input name="_next" type="submit" class="step m10 vm" value="确定"/>
				    			<a href="${basepath }/rewardScoreUser/scoreUserList.html" class="back m10 vm">关闭</a>
			    			</div>
                        </form>
                            
                            
                         <form id="form_scoreUserGain" action="doSaveScoreUserGain.html" method="post" class="hidden">  
                         <!-- 选择人员弹窗 -->
                         <div id="dialog" class="hidden">
			<div class="blackall">&nbsp;</div>
			<div class="newwindow" id="choosepersonco">
				<div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
			    <div id="dialog_content" class="cl"></div>
			</div>
		</div>
		                	<table border="0" cellspacing="15" cellpadding="15" >
		                		<tbody>
			                    	<tr>
			                        	<td class="taR">获奖人</td>
			                            <input id="scoreUser_id" type="hidden" name="user_id" value="${uid}"/>
                                        <td><input id="scoreUser_name"  name="scoreUser_name" type="text" class="vm input" value="${userName}" readonly="readonly"/></td>
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
	                        <div class="taR">
	                            <input name="_next" type="submit" class="step m10 vm" value="确定"/>
	    						<a href="${basepath }/rewardScoreUser/scoreUserList.html" class="back m10 vm">关闭</a>
	    					</div>
                 		</form>
                 
                </div>
            </div>
        </div>
       
    </div>
</div>
<script type="text/javascript">
	var basepath = "${basepath}";
</script>

<script type="text/javascript">
</script>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath }/js/score/scoreWH.js" charset="gbk"></script>
</body>

</html>