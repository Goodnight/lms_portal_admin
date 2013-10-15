<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>申请积分兑换</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">

<!-- 选择部门 -->
<div class="treewindow">
	<div id="org_jstree1" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
</div>

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
        	<h2 class="png_bg">申请积分兑换</h2>
            <div class="courseupload basic_information">
            	
                <div>
                
                
                <form id="form_scoreDepCost" action="${basepath }/rewardScoreDepCost/doAddScoreDepCost.html" method="post">
                	<table border="0" cellspacing="15" cellpadding="15" width="90%">
                	<colgroup>
                    	<col width="150" />
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<td><em>*</em>部门名称</td>
                            <td>
                            <input id="depId" name="depId" type="hidden" value="${depId}"/>
                            <input name="orgName" id="orgName" type="text" class="vm input" value="${orgName}" readonly="readonly"/>
                            </td>
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
									<td style="vertical-align: top">参与人员</td>
									<td class="objectstring" colspan="3" id="newpersonco">
										<div class="reHeight" style="padding-top: 5px">
											<c:forEach items="${listUser}" var="user">
												<label class="speciallabel">${user.user.name} <!-- 20130330 修改删除未参与人员流程 by LTC -->
													<!--<a href="javascript:deleteUser('${user.sauId}');" class="ml6"><img src="${basepath}/images/deletegreen.gif" /></a> -->
													<input type="hidden" id="userIds" name="userIds"
													value="${user.user.uid}" /><input type="hidden"
													id="userNames" name="userNames" value="${user.user.name}" /></label>
											</c:forEach>
										</div>
										<div class="mt10">
											<span id="btn_user" class="vm m10 mr10 addStaff">增加人员</span>
											<!-- 发布屏蔽  或<span id="btn_leadin" class="vm leadin">导入人员</span> -->
										</div>
									</td>
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
	    						<a href="${basepath }/rewardScoreDep/scoreDepList.html" name="_back" class="back m10 vm">关闭</a>
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

<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath }/js/score/addScoreDepCost.js" charset="gbk"></script>
<script type="text/javascript" src="${basepath }/js/score/blockScoreDep.js" charset="gbk"></script>
</body>

</html>