<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>积分维护</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">

    <!-- 选择部门弹窗 -->
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
                                            <a href="${basepath }/rewardScoreDep/scoreDepList.html">集团积分</a>
                                        </li>
                                        <li class="last">
                                                                                                                积分维护
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
                	<li class="now w140">部门积分兑换</li>
                    <li class="w140">部门积分奖励</li>
                </ul>
                <div>
                
                
                <form id="form_scoreDepCost" action="doSaveScoreDepCost.html" method="post">
            
                	<table border="0" cellspacing="15" cellpadding="15" width="90%">
                	<colgroup>
                    	<col width="150" />
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<td><em>*</em>申请使用积分部门</td>
                        	<input id="dep_id" name="dep_id" type="hidden" class="input vm" value="${depId }"/>
                        	<td><input type="text" class="input vm" value="${depName }" readonly="readonly"/></td>
                        </tr>
                         <tr>
                         	<td><em>*</em>项目名称</td>
                            <td><input name="projectName" type="text" class="input vm" id="projectName"/></td>
                        </tr>
                        <tr>
                            <td height="30"><em>*</em>所需兑换积分</td>
                          <td><input name="score" type="text" class="input vm" id="score"/></td>
                        </tr>
                        <tr>
                        	<td><em>*</em>使用时间</td>
                           	<td><input name="begin_time" type="text" class="timetext  cls_date" id="begin_time"/>　到　<input name="end_time" type="text" class="timetext  cls_date" id="end_time"/></td>
                        </tr>
                        <tr>
                        	<td>参与人员</td>
                           	<td>
                           	<input id="scoreUser_name"  name="scoreUser_name" type="text" class="input vm si" value="${user.name }" />
		                    <input id="scoreUser_id" name="user_id" type="hidden" value="${user.uid }"/>
                           	<span id="scoreUser" class="vm chooseperson">选择人员</span></td>
                        </tr>
                        <tr>
                        	<td><em>*</em>兑换形式</td>
                            <td>
                            <select name="costWay_id" id="costWay_id">
		                      <c:forEach items="${rewardCostList }" var="r">
			                  
			                   
			                     <option value="${r.spId }">${r.name }</option>
			               
			                     
			                   </c:forEach>
		                     </select>
                            </td>
                        </tr>
                        
                        <tr>
                        	<td style="vertical-align:top"><em>*</em>主要目的</td>
                            <td><textarea name="purpose" cols="" rows="" id="purpose"></textarea></td>
                        </tr>
                        <tr>
                        	<td style="vertical-align:top">主要内容</td>
                            <td><textarea name="content" cols="" rows=""></textarea></td>
                        </tr>
                        <tr>
                        	<td style="vertical-align:top">备注</td>
                            <td><textarea name="remarks" cols="" rows=""></textarea></td>
                        </tr>
                    </tbody>
                </table>
                 <div class="taR">
	                            <input name="_next" type="submit" class="step m10 vm" value="确定"/>
	    						<a href="${basepath }/rewardScoreDep/scoreDepList.html" class="back m10 vm">关闭</a>
	    					</div>
                </form>
                
                
                
                
                <form id="form_scoreDepGain" action="doSaveScoreDepGain.html" method="post" class="hidden">
                	<table border="0" cellspacing="15" cellpadding="15">
                	<tbody>
                    	<tr>
                        	<td><em>*</em>被奖励的部门</td>
                        	<input id="dep_id" name="dep_id" type="hidden" class="input vm" value="${depId }"/>
                            <td><input type="text" value="${depName}" readonly="readonly"/></td>
                        </tr>
                        <tr>
                            <td><em>*</em>奖励积分数值</td>
                            <td><input type="text" name="score" id="score"/></td>
                        </tr>
                        <tr>
                            <td>有效期</td>
                            <td>2年</td>
                        </tr>
                        <tr>
                        	<td><em>*</em>奖励类别</td>
                            <td>
                            	<select id="gain_type_id" name="gain_type_id">
		                      <c:forEach items="${gainTypeList }" var="g">
			                  
			                   
			                     <option value="${g.spId }">${g.name }</option>
			               
			                     
			                   </c:forEach>
		                     </select>
                            </td>
                        </tr>
                        <tr>
                        	<td style="vertical-align:top">奖励原因</td>
                            <td><textarea name="rewardReason" cols="" rows=""></textarea></td>
                        </tr>
                    </tbody>
                </table>
                 <div class="taR">
	                            <input name="_next" type="submit" class="step m10 vm" value="确定"/>
	    						<a href="${basepath }/rewardScoreDep/scoreDepList.html" class="back m10 vm">关闭</a>
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
	var depId = "${depId}";
	var depName = "${depName}";
</script>

<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath }/js/score/scoreDepWH.js" charset="gbk"></script>
</body>

</html>