<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>修改岗位培训需求</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>
<body class="bg">

<div id="dialog" class="hidden">
	<div class="blackall">&nbsp;</div>
	<div class="newwindow" id="choosepersonco">
		<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
	    <div id="dialog_content" class="cl scroll"></div>
	</div>
</div>
<div class="treewindow">
    <div class="demo treedemo" id="eth_jstree"></div>
    <div align="right" class="mt10"><input type="button" value="确定" class="step mr10 vm treewindowsure" name=""><a class="back vm treewindowback" href="javascript:;">取消</a></div>                    
</div>
<div class="container">
  <jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
  <div class="breadCrumbHolder breadCrumbPage">
  	<div class="headerco">
     	<div class="breadCrumb reHeight noborder" id="breadCrumb3">
                                <div class="z">
                                	<ul>
                                        <li class="first">
                                            <a href="${basepath }/index.html">首页</a>
                                        </li>
                                        <li>
                                            <a href="${basepath }/demand/demandPostIndex.html">岗位培训需求列表</a>
                                        </li>
                                        <li class="last">
                                          修改岗位培训需求
                                        </li>
                                	</ul>
                                </div>
                                <div class="y"></div>
                            </div> 
    </div>
  </div> 
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">修改岗位培训需求</h2>
        	<form id="saveDemandPostModify" action="saveDemandPost.html" method="post" ><!-- 修改表单非空验证排除Radio by LTC 20130321 -->
        	<input type="hidden" name ="dpId" value="${dpId}"/>
            <div class="basic_information mt2">
                <!-- 20130321 保存原有创建人Id by LTC -->
                <input name="createrId" type="hidden" value="${dmdPost.creater.uid }" />
                <table border="0" cellspacing="15" cellpadding="15">
                	<colgroup>
                    	<col width="220" />
                        <col width="300" />
                        <col width="85" />
                        <col width="400" />
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<td><em>*</em>年度</td>
                        	<td>
                            	<select id="topic_id" name="topic_id" >
                                    <c:forEach items="${listTopic}" var="item" >
                                        <c:choose>
                                            <c:when test="${item.dtId == dmdPost.topic.dtId}">
                                                <option value="${item.dtId}">${item.year}</option>
                                            </c:when>
                                            <c:otherwise>
                                                <option value="${item.dtId}">${item.year}</option>
                                            </c:otherwise>
                                        
                                        </c:choose>
                                    </c:forEach>
                                </select>
                            </td>
                            <td><em>*</em>岗位</td>
                        	<td>
                        	   <div class="vm z">
                        	       <label class="unitlabel" id="${dmdPost.position.pId}">${dmdPost.position.name}<a href="javascript:;" class="ml6"><img src="${basepath }/images/deletegreen.gif" /></a></label>
                        	       <input type="hidden" id="post_id" name="post_id" value="${dmdPost.position.pId}"/>
                        	   </div>
                        	   <div class="z"><span class="vm newshowtree1">选择岗位</span></div>
                            </td>
                        </tr>
                        <tr>
                        	<td><em>*</em>迫切性</td>
                        	<td colspan="3">
                        	   <input name="originLevel" type="hidden" value="${dmdPost.urgentLevel }" />
                        	   <c:if test="${dmdPost.urgentLevel == 2 }">
                        	       <em class="option choosed"><input name="urgentLevel" type="radio" value="2" /></em> 迫切 
                        	       <em class="option"><input name="urgentLevel" type="radio" value="1" /></em> 一般
                        	       <em class="option"><input name="urgentLevel" type="radio" value="0" /></em> 不迫切
                        	   </c:if>
                        	   <c:if test="${dmdPost.urgentLevel == 1 }">
                                   <em class="option"><input name="urgentLevel" type="radio" value="2" /></em> 迫切
                                   <em class="option choosed"><input name="urgentLevel" type="radio" value="1" /></em> 一般
                                   <em class="option"><input name="urgentLevel" type="radio" value="0" /></em> 不迫切
                               </c:if>
                               <c:if test="${dmdPost.urgentLevel == 0 }">
                                   <em class="option"><input name="urgentLevel" type="radio" value="2" /></em> 迫切
                                   <em class="option"><input name="urgentLevel" type="radio" value="1" /></em> 一般
                                   <em class="option choosed"><input name="urgentLevel" type="radio" value="0" /></em> 不迫切
                               </c:if>
                        	 </td>
                        </tr>
                        <tr>
                          <td colspan="4"><div style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></div></td>
                        </tr>
                        <tr>
                        	<td style="vertical-align:top"><em>*</em>选择员工</td>
                            <td class="objectstring" colspan="3"  id="newpersonco">
                           	<div class="reHeight" style="padding-top:5px">
                           		 <c:forEach items="${dmdPost.users}" var="userDmd" varStatus="st">
                            	  <label class="speciallabel">${userDmd.name}<a href="javascript:;" class="ml6"><img src="${basepath}/images/deletegreen.gif" /></a>
                            	  <input id="userIds" type="hidden" name="userIds" value="${userDmd.uid}" />
                            	  <input id="userNames" type="hidden" name="userNames" value="${userDmd.name }" /></label>
                           		 </c:forEach>
                           	</div>
                               <div class="mt10"><span id="${user.uid }" class="vm chooseperson" style="margin-left:0">增加员工</span></div>
                           </td>                           
                        </tr>
                        <tr>
                          <td colspan="4"><div style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></div></td>
                        </tr>
                        <tr>
                        	<td ></td>
                            <td colspan="3"><label class="w50">项目</label><label class="w177" style="display:inline-block;text-align:center;">需要提高的内容</label><label class="w120" style="display:inline-block;text-align:center;">所需培训</label></td>   
                        </tr>
                        <tr>
                        	<td valign="middle">员工绩效要求</td>
                            <td colspan="3">
                            <%int i =0; %>
                           <c:forEach items="${dmdPost.dpis}" var="dp" varStatus="st" >
                               <div>
                              	<label class="w50"><%=++i %></label>
                                  <label class="w177" style="display:inline-block">
                                  	<select name="dmd_item_ids" class="w177">
                                    <c:forEach items="${dmdItemList}" var="item" > 
                                   		<c:choose>
                               		 		<c:when test="${item.dtId eq dp.dmdItem.dtId}">
                               					 <option selected="selected" value="${dp.dmdItem.dtId}">${dp.dmdItem.name}</option>
                               		 		</c:when>
                               		 		<c:otherwise>
                               					 <option value="${item.dtId}">${item.name}</option>
                               		 		</c:otherwise>
                               		 	</c:choose>
                               		</c:forEach>
                              		</select>
                                  </label>
                              	<label class="w120" style="display:inline-block"><input  name="trainContents" type="text" class="input vm si" value="${dp.trainContent}" /></label>
                             </div>
                             </c:forEach>
                           	 <c:forEach items="${listSize}" var="i" varStatus="st" >
                            	<div>
                                	<label class="w50"><%=++i %></label>
                                    <label class="w177" style="display:inline-block">
                                    	<select name="dmd_item_ids" class="w177">
                                    	<option value="">请选择</option>
		                                    <c:forEach items="${dmdItemList}" var="item" >
		                               		<c:choose>
                                                 <c:when test="${item.dtId==dp.dmdItem.dtId}">
                                                     <option value="${item.dtId}">${item.name}</option>
                                                 </c:when>
                                                 <c:otherwise>
                                                     <option value="${item.dtId}" >${item.name}</option>
                                                 </c:otherwise>
                                            </c:choose>
		                               		</c:forEach>
                                		</select>
                                    </label>
                                	<label class="w120" style="display:inline-block"><input name="trainContents" type="text" class="input vm si" /></label>
                               </div>
                               </c:forEach>
                           </td>   
                        </tr>
                        <tr>
                          <td colspan="4"><div style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></div></td>
                        </tr>
                        <tr>
                        	<td class="vt"><em>*</em>业务发展所需提升性培训</td>
                            <td colspan="3">
                                <div>
                                  <textarea id="businessTrain" name="businessTrain" cols="" rows="" maxlength="2000">${dmdPost.businessTrain}</textarea>
                                  <div id="businessTrain_error" class="validate_error"></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                          <td colspan="4"><div style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></div></td>
                        </tr>
                        <tr>
                        	<td class="vt"><em>*</em>职业发展所需提升性培训</td>
                            <td colspan="3">
                                <div>
                                    <textarea id="professionTrain" name="professionTrain" cols="" rows="" maxlength="2000">${dmdPost.professionTrain}</textarea>
                                    <div id="professionTrain_error" class="validate_error"></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                          <td colspan="4"><div style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></div></td>
                        </tr>
                    </tbody>
                </table>
              <div align="right" class="mr100"><input id="submit1" type="submit" class="step m10 vm" value="保存"/><a href="#" class="back vm allclose">关闭</a></div>
            </div>
            </form>
        </div>
    </div>
</div>
<jsp:include page="/WEB-INF/page/include/script_1.jsp"></jsp:include>
<script type="text/javascript" src="${basepath}/js/demand/demandPostNew.js" charset="gbk"></script>
<script type="text/javascript" src="${basepath}/js/demand/jstreePost.js" charset="gbk"></script>
</body>
</html>
    