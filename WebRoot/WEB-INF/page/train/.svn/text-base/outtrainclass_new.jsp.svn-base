<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="content-language" content="utf-8" />
	<c:choose>
		<c:when test="${trainClass==null }">
			<title>新建外派培训班</title>
		</c:when>
		<c:otherwise>
			<title>修改外派培训班</title>
		</c:otherwise>
	</c:choose>
	<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
	<div class="blackall hidden">&nbsp;</div>
	<div class="treewindow" >
		<div id="new_org_jstree" class="demo treedemo"></div>
	    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
	</div>
	<div id="dialog" class="hidden">
		<div class="blackall_new">&nbsp;</div>
		<div class="newwindow">
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
                               <li class="first"><a href="${basepath }/index.html">首页</a></li>
                               <li><a href="${basepath }/trainclass/out/list.html">外派培训班管理</a></li>
                               <c:choose>
									<c:when test="${trainClass==null }">
										<li class="last">新建外派培训班</li>
									</c:when>
									<c:otherwise>
										<li class="last">修改外派培训班</li>
									</c:otherwise>
								</c:choose>
                       		</ul>
                     </div>
                     <div class="y"></div>
                 </div> 
		    </div>
		  </div>
		<div class="content cl">
			<div class="ngreyborder changeblue2 mt20">
				<c:choose>
					<c:when test="${trainClass==null }">
						<h2 class="png_bg">新建外派培训班</h2>
					</c:when>
					<c:otherwise>
						<h2 class="png_bg">修改外派培训班</h2>
					</c:otherwise>
				</c:choose>
				<div class="basic_information mt20">
	            	<ul class="window_nav ml0">
	                    <c:choose>
	            			<c:when test="${trainClass!=null }">
	            				<li class="basic"><a href="#" class="png_bg">基本信息</a></li>
	                    		<li class="course"><a href="${basepath }/trainclass/out/setting.html?tcid=${trainClass.tcId}" class="grey png_bg">安排人员</a></li>
	            			</c:when>
	            			<c:otherwise>
	            				<li class="basic"><a href="#" class="png_bg">基本信息</a></li>
	                    		<li class="course"><a href="#" class="grey png_bg">安排人员</a></li>
	            			</c:otherwise>
	            		</c:choose>
	                </ul>
	                <form id="out_form" action="doSaveClass.html" method="post">
		                <table border="0" cellspacing="15" cellpadding="15" class="mt40">
		                	<colgroup>
		                    	<col width="80" />
		                        <col width="400" />
		                        <col width="100" />
		                        <col width="320" />
		                    </colgroup>
		                	<tbody>
		                    	<tr>
		                        	<td><em>*</em>培训班名称</td>
		                        	<td >
		                        		<input id="name" name="name" type="text" class="input vm" value="${trainClass.name }"/>
		                        		<input id="tcId" type="hidden" name="tcId" value="${trainClass.tcId }" />
		                        		<div id="name_error" class="validate_error"></div>
		                        	</td>
		                            <td class="taR">培训时长</td>
		                            <td><input name="trainDuration" type="text" class="input vm w80" value="${trainClass.trainDuration }"/> 天 <!--只能输入数字--></td>
		                        </tr>
		                        <tr>
		                        	<td><em>*</em>培训时间</td>
		                            <td colspan="3">
		                            	<input id="start_date" readonly="readonly" name="start_date" type="text" class="input vm si" value="${trainClass.start_date }"/> 
		                            	到 
		                            	<input id="end_date" readonly="readonly" name="end_date" type="text" class="input vm si" value="${trainClass.end_date }"/><!--时间控件-->
		                            	<div id="start_date_error" class="validate_error"></div>
		                            	<div id="end_date_error" class="validate_error"></div>
		                            </td>                            
		                        </tr>
		                        <tr>
		                        	<td>培训级别</td>
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
		                            <td>培训地点类别</td>
		                            <td>
		                            	<select id="class_type" name="addressType">
		                                	<c:forEach items="${addressTypeList }" var="p">
			                            		<c:choose>
			                            			<c:when test="${p.spId==trainClass.addressType.spId }">
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
		                        	<td><em>*</em>主办单位</td>
		                            <td colspan="3">
		                            	<input id="dep_name" name="dep_name" type="text" class="input vm si" value="${trainClass.dep.name }" readonly="readonly"/>
		                            	<input id="dep_id" name="class_dep" type="hidden" value="${trainClass.dep.orgId }"/>
		                            	<span class="vm newshowtree choosedepartment">选择部门</span>
		                            	<div id="dep_name_error"></div>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td class="vt">培训目标</td>
		                            <td colspan="3"><textarea name="purpose" cols="" rows="">${trainClass.purpose }</textarea></td>
		                        </tr>
		                        <tr>
		                        	<td class="vt">培训内容</td>
		                            <td colspan="3"><textarea name="content" cols="" rows="">${trainClass.content }</textarea></td>
		                        </tr>
		                        <tr>
		                            <td>培训地点</td>
		                            <td colspan="3"><input name="address" type="text" class="input vm" value="${trainClass.address }"/></td>
		                        </tr>
		                    </tbody>
		                </table> 	
		                <div align="right" class="mr10">
	           				<input type="submit"  class="step mr10 vm"  value="保存"/>
	           				<input name="close" type="button" class="back vm cls_close"  value="关闭"/>
		                </div>
		               </form>
	            </div>
			</div>
		</div>
	</div>
	<jsp:include page="/WEB-INF/page/include/script.jsp" />
	<script type="text/javascript" src="${basepath}/js/demand/newblock.js" charset="gbk"></script>
	<script type="text/javascript" src="${basepath }/js/train/outtrainclass_new.js" charset="gbk"></script>
</body>
</html>