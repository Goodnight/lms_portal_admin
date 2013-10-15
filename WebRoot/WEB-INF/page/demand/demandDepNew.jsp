<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title><c:if test="${flag == '1' }">修改部门培训需求</c:if><c:if test="${flag == '0' }">查看部门培训需求</c:if></title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>
<body class="bg">
<div class="blackall hidden">&nbsp;</div>
<div class="treewindow"  >
    <div id="org_jstree1" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
</div>
<div id="dialog" class="hidden">
    <div class="blackall">&nbsp;</div>
    <div class="newwindow" id="choosepersonco">
        <div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
        <div id="dialog_content" class="cl scroll"></div>
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
                         <a href="${basepath }/demand/demandDepIndex.html">部门培训需求</a>
                     </li>
                     <li class="last">
                        <c:if test="${flag == '1' }">修改部门培训需求</c:if><c:if test="${flag == '0' }">查看部门培训需求</c:if>
                     </li>
                 </ul>
             </div>
             <div class="y"></div>
         </div> 
    </div>
  </div> 
  <div class="content cl">
        <div class="ngreyborder changeblue2 mt20">
            <h2 class="png_bg"><c:if test="${flag == '1' }">修改部门培训需求</c:if><c:if test="${flag == '0' }">查看部门培训需求</c:if></h2>
        	    <form id="demandDepNew" action="saveDmdDep.html" method="post">
        	    <input type="hidden" name ="dpId" value="${dpId}"/>
        	    <input type="hidden" name ="ddiId" value="${ddiId}"/>
                <div class="basic_information mt2">
                <table border="0" cellspacing="15" cellpadding="15">
                	<colgroup>
                    	<col width="100" />
                        <col width="300" />
                        <col width="70" />
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<td class="taR"><em>*</em>年度</td>
                        	<td>
                            	<select id="topic_id" name="topic_id" >
                                    <c:forEach items="${listTopic}" var="item" >
                                        <option value="${item.dtId}">${item.year}</option>
                                    </c:forEach>
                                </select>
                            </td>
                            <td class="taR"><em>*</em>部门</td><input name="dmdDepIdModify" type="hidden" value="${dmdDep.dep.orgId }" />
                            <td><div class="vm z">
                                    <label class="unitlabel" id="${dmdDep.dep.orgId }">${dmdDep.dep.name }
                                    <a href="javascript:;" class="ml6"><img src="${basepath }/images/deletegreen.gif" /></a></label>
                                </div>
                                <c:if test="${flag == '1' }"><div class="z"><span class="vm newshowtree">选择部门</span></div></c:if>
                            </td>
                        </tr>
                        <tr>
                            <td class="taR"><em>*</em>需求类别</td>
                            <td><input name="oriTypeId" type="hidden" value="${dmdDep.type.spId }" />
                                <c:if test="${flag == '1' }">
                                     <c:forEach items="${list}" var="bo">
                          	             <em class="option <c:if test="${dmdDep.type.spId==bo.spId}" > choosed </c:if>" ><input name="type_id_modify" type="radio" value="${bo.spId}" /></em>${bo.name}
   							         </c:forEach>
   							    </c:if>
   							    <c:if test="${flag == '0' }">
                                     <c:forEach items="${list}" var="bo">
                                         <c:if test="${dmdDep.type.spId==bo.spId}" ><em class="option choosed" ><input name="type_id_modify" type="radio" value="${bo.spId}" /></em>${bo.name}</c:if>
                                     </c:forEach>
   							    </c:if>
                            </td>   
                        </tr>
                        <tr>
                        	<td height="47"><em>*</em>培训需求内容</td>
                            <td colspan="3">
                                <c:choose>
	                                <c:when test="${null==dmdDep.ddis}">
		                                <select id="dmd_item_id" name="dmd_item_id">
		                            		<option value="" >请选择</option>
		                               		<c:forEach items="${dmdItemList}"  var="item" >
			                                <option value="${item.dtId}">${item.name}</option>
		                               		</c:forEach>
		                                </select>
	                                </c:when>
                                	<c:otherwise>
		                            	<c:forEach items="${dmdDep.ddis}"  var="ddis" >
		                            	<select name="dmd_item_id">
		                            	
		                               		<c:forEach items="${dmdItemList}"  var="item" >
		                               		 <c:choose>
			                                     <c:when test="${item.dtId==ddis.dmdItem.dtId}">
			                                     	<option value="${item.dtId}" selected="selected" >${item.name}</option>
			                                     </c:when>
			                                     <c:otherwise><option value="${item.dtId}" >${item.name}</option></c:otherwise>
			                                 </c:choose>
		                               		
		                               		</c:forEach>
		                                </select>
		                                </c:forEach>
                               		 </c:otherwise>
                           	 	</c:choose>
                            </td> 
                        </tr>
                        <tr>
                        	<td class="taR vt"><em>*</em>培训目标</td>
                            <td colspan="3">
                                <c:if test="${flag == '1' }">
                                    <textarea id="trainAim" name="trainAim" cols="" rows="" >${dmdDep.trainAim}</textarea>
                                </c:if>
                                <c:if test="${flag == '0' }">
                                    <textarea id="trainAim" name="trainAim" cols="" rows="" readonly="readonly">${dmdDep.trainAim}</textarea>
                                </c:if>
                            </td>
                        </tr>
                        <tr>
                        	<td class="taR vt"><em>*</em>培训对象</td>
                            <td colspan="3">
                                <c:if test="${flag == '1' }">
                                    <textarea id="trainObject" name="trainObject" cols="" rows="">${dmdDep.trainObject}</textarea>
                                </c:if>
                                <c:if test="${flag == '0' }">
                                    <textarea id="trainObject" name="trainObject" cols="" rows="" readonly="readonly" >${dmdDep.trainObject}</textarea>
                                </c:if>
                            </td>
                        </tr>
                        <tr>
                        	<td class="taR"><em>*</em>培训人数</td>
                            <td colspan="3">
                                <c:if test="${flag == '1' }">
                                    <input type="text" class="input vm w80" name="personNums" id="personNums" value="${dmdDep.personNums}"/><!--只能输入数字-->
                                </c:if>
                                <c:if test="${flag == '0' }">
                                    <input type="text" class="input vm w80" name="personNums" id="personNums" value="${dmdDep.personNums}" readonly="readonly" />
                                </c:if>
                            </td>   
                        </tr>
                        <tr>
                        	<td class="taR vt"><div>备注</div></td>
                            <td colspan="3">
                                <c:if test="${flag == '1' }">
                                    <textarea name="remark" cols="" rows="">${dmdDep.remark}</textarea>
                                </c:if>
                                <c:if test="${flag == '0' }">
                                    <textarea name="remark" cols="" rows="" readonly="readonly" >${dmdDep.remark}</textarea>
                                </c:if>
                            </td>          
                        </tr>
                    </tbody>
                </table>
                <div align="right" class="mr100">
                    <c:if test="${flag == '1' }"><input  type="submit" class="step m10" value="确定"/></c:if>
                    <a href="demandDepIndex.html" class="back mt10">返回</a>
                </div>
            </div>
            </form>           
            </div>
        </div>
    </div>    
<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
<script type="text/javascript" src="${basepath}/js/demand/demandDepNew.js" charset="gbk"></script>
<script type="text/javascript" src="${basepath}/js/demand/newblock.js" charset="gbk"></script>
</body>
</html>
