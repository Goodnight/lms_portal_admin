<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="UTF-8" xml:lang="UTF-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="content-language" content="UTF-8" />
<title>向当前培训计划中添加培训班</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div class="blackall hidden">&nbsp;</div>
<div class="treewindow" >
    <div id="new_org_jstree" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
</div>

<div id="dialog" class="hidden">
	<div class="blackall">&nbsp;</div>
	<div class="newwindow" id="choosepersonco">
		<div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
		<div id="dialog_content" class="cl"></div>
	</div>
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
                        <a href="${basepath }/trainplan/trainPlanList.html">培训计划</a>
                    </li>
                    <li class="last">添加培训班</li>
                </ul>
            </div>
            <div class="y"></div>
        </div> 
    </div>
  </div> 
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">添加培训班</h2>
			<form id="trainplanclass" action="saveTrainClass.html" method="post">
            <div class="basic_information mt2">
              		<table border="0" cellspacing="15" cellpadding="15">
                	<tbody>
                    	<tr>
                        	<td><em>*</em>名称：</td>
                            <td colspan="3"><input name="name" type="text" class="input vm" /><input name="id" type="hidden" value="${p.tpId }"/></td>
                        </tr>
                        <tr>
                        	<td><em>*</em>预期举办时间：</td>
                            <td>
                            	<label><input name="expectStartQuarter" type="radio" value="1" class="vm mr5"/>第一季度</label>
                            	<label><input name="expectStartQuarter" type="radio" value="2" class="vm mr5"/>第二季度</label>
                            	<label><input name="expectStartQuarter" type="radio" value="3" class="vm mr5"/>第三季度</label>
                            	<label><input name="expectStartQuarter" type="radio" value="4" class="vm mr5"/>第四季度</label>
                            </td>
                            <!-- 20130407 计划中培训班编号修改为自动生成 by LTC -->
                        </tr>
                        <tr>
                        	<td><em>*</em>培训级别：</td>
                            <td>
                            	<select id="class_level" name="class_level">
                            		<c:forEach items="${levelList }" var="p">
	                            		<c:choose>
	                            			<c:when test="${p.spId==trainClass.level.spId }">
	                            				<option value="${p.spId }" selected="selected">${p.name }</option>
	                            			</c:when>
	                            			<c:otherwise>
	                            				<option value="${p.spId }">${p.name }</option>
	                            			</c:otherwise>
	                            		</c:choose>
	                            	</c:forEach>
                                </select>
                            </td>
                            <td><em>*</em>培训形式：</td>
                            <td>
                            	<select id="class_way" name="class_way">
                                	<c:forEach items="${wayList }" var="p">
	                            		<c:choose>
	                            			<c:when test="${p.spId==trainClass.way.spId }">
	                            				<option value="${p.spId }" selected="selected">${p.name }</option>
	                            			</c:when>
	                            			<c:otherwise>
	                            				<option value="${p.spId }">${p.name }</option>
	                            			</c:otherwise>
	                            		</c:choose>
	                            	</c:forEach>
                                </select>
                            </td>
                        </tr>
                        <tr>
                        	<td><em>*</em>培训类别：</td>
                            <td>
                            	<select id="trainObjectTypeId" name="trainObjectTypeId">
                                	<c:forEach items="${trainObjectTypeList }" var="p">
	                            		<c:choose>
	                            			<c:when test="${p.spId==trainClass.trainObjectType.spId }">
	                            				<option value="${p.spId }" selected="selected">${p.name }</option>
	                            			</c:when>
	                            			<c:otherwise>
	                            				<option value="${p.spId }">${p.name }</option>
	                            			</c:otherwise>
	                            		</c:choose>
	                            	</c:forEach>
                                </select>
                            </td>
                            <td><em>*</em>期数：</td>
                            <td><input name="timesNum" type="text" maxlength="5"  /></td>
                        </tr>
                        <tr>
                        	<td>地点：</td>
                            <td colspan="3"><input name="address" type="text" maxlength="15"  /></td>
                        </tr>
                        <tr>
                        	<td><em>*</em>每期天数：</td>
                            <td><input name="trainDuration" type="text" maxlength="5"  /></td>
                            <td><em>*</em>每期人数：</td>
                            <td><input name="attendNum" type="text" maxlength="5"  /></td>
                        </tr>
                        <tr>
                        	<td><em>*</em>主办部门：</td>
                            <td>
                                <div id="class_dep_name" style="float:left">${trainClass.dep.namepath }${trainClass.dep.name }</div>
                                <input id="class_dep_id" name="class_dep" type="hidden" value="${trainClass.dep.orgId }"/>
                                <span id="class_dep" class="vm newshowtree choosedep">选择部门</span>
                                <div id="class_dep_id_error" class="validate_error"></div>
                            </td>
                        </tr>
                        <tr>
                            <td><em>*</em>班主任：</td>
                            <td>
                                <div class="cl mt4 objectstring"  id="principal_list">
                                   <c:forEach var="p" items="${trainClass.principal }">
                                       <label class="speciallabel">
                                           <input type="hidden" name="principal" value="${p.teacher.uid }"/>
                                           <input type="hidden" name="principal_name" value="${p.teacher.name }"/>
                                           <a href="#" class="ml6"><img src="${basepath }/images/deletegreen.gif" /></a>
                                       </label>
                                   </c:forEach>
                                </div>
                                <div>&nbsp;&nbsp;<span id="principal" class="vm info_chooseperson ml0">&nbsp;选择人员</span></div>
                                <div id="principal_error" class="validate_error"></div>
                            </td>
                        </tr>
                        <tr>
                        	<td><em>*</em>培训开始日期：</td>
                            <td><input id="start_date" name="start_date" type="text" class="input vm si" readonly="readonly" /></td>
                            <td><em>*</em>培训结束日期：</td>
                            <td><input id="end_date" name="end_date" type="text" class="input vm si" readonly="readonly" /></td>
                        </tr>
                        <tr>
                        	<td>培训计费方式：</td>
                            <td colspan="3">
                           		 <c:forEach items="${chargeWayList }" var="chargeWay">
                                    <c:choose>
                                        <c:when test="${(trainClass==null && chargeWay.spId eq '1') || chargeWay.spId eq trainClass.charge_way.spId }">
                                            <em class="option choosed"><input name="charge_way" type="radio" value="${chargeWay.spId }" checked="checked"/></em>${chargeWay.name }　　
                                        </c:when>
                                        <c:otherwise>
                                            <em class="option"><input name="charge_way" type="radio" value="${chargeWay.spId }"/></em>${chargeWay.name }　　
                                        </c:otherwise>
                                    </c:choose>
                                </c:forEach>
                            </td>
                        </tr>
                        <tr>
                        	<td>培训费用预算：</td>
                            <td><input name="budget_train" type="text" maxlength="8"  /></td>
                            <td>食宿费用预算：</td>
                            <td><input name="budget_board" type="text" maxlength="8" /></td>
                        </tr>
                        <tr>
                        	<td class="vt"><em>*</em>培训对象</td>
                            <td colspan="3"><textarea name="trainObeject" class="lengthRestrict" cols="" rows="" ></textarea></td>
                        </tr>
                        <tr>
                        	<td class="vt"><em>*</em>培训内容</td>
                            <td colspan="3"><textarea name="content" class="lengthRestrict" cols="" rows="" ></textarea></td>
                        </tr>
                        <tr>
                        	<td class="vt"><em>*</em>培训目的</td>
                            <td colspan="3"><textarea name="planPurpose" class="lengthRestrict" cols="" rows="" ></textarea></td>
                        </tr>
                    </tbody>
                </table> 	
                <div align="right" class="mr10">
                <input id="formSubmit" type="submit" class="step m10 vm" value="确定"/>
                <a href="viewPlanClass.html?id=${p.tpId}" class="back vm">关闭</a>
                </div>
            </div>
            </form> 
        </div>
    </div>
</div>

<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
<script type="text/javascript" src="${basepath}/js/demand/newblock.js" charset="gbk"></script>
<script type="text/javascript" src="${basepath }/js/train/information.js" charset="gbk"></script>
<script type="text/javascript">
    var id = "${p.tpId}";
   // $("textarea.lengthRestrict").live("keydown", function(){
    //     if(this.value.length > 60) {
     //       alert("请不要超过最大长度!");
     //       this.value=this.value.substring(0,(max-1));
    //        return;
    //    }
  //  });
</script>
</body>
</html>
