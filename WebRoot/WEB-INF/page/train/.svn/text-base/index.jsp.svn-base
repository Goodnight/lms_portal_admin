<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>培训班列表</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
	<body class="bg">
	    <jsp:include page="/WEB-INF/page/include/downloadData.jsp"></jsp:include>
	    <form id="form1">
			<input type="hidden" id="importType" name="importType"
				value="generalTrainClass" />
			<input type="hidden" id="objId" name="objId" />
		</form>
		<div class="blackall hidden"></div>
		<div id="dialog" class="hidden">
			<div class="blackall">&nbsp;</div>
			<div class="newwindow">
				<div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
			    <div id="dialog_content" class="cl"></div>
			</div>
		</div>
		<div class="container">
		    <!-- 导入头部文件 -->
		    <jsp:include page="/WEB-INF/page/include/header.jsp" />
		    <div class="cl">
		        <div class="newright">
		        	<div class="newrightco">
		        		<div class="listpagenav">
		        			<!-- 页面导航 -->
		                  	<div class="breadCrumbHolder pf">
		                          <div class="breadCrumb reHeight" id="breadCrumb3">
		                              <div class="z">
		                                  <ul>
		                                      <li class="first">
		                                      	<a href="${basepath }/index.html">首页</a>
		                                      </li>
		                                      <li>
		                                      	<a href="${basepath }/trainclass/index.html">培训班管理</a>
		                                      </li>
		                                      <li class="last">
			                                       培训班列表
			                                   </li>
		                                  </ul>
		                              </div>
		                              <div class="y"></div>
		                          </div>
		                      </div>
		                </div>
		       			<div class="reHeight">
			            	<div class="newmain">
			                	<div class="newmainco">
			                    	<div class="searchblock">
				                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
				                              <tr>
				                                <td class="taR">培训班名称</td>
				                                <td colspan="3" class="taL">
				                                	<input type="hidden" id="search_orgid" value="${sessionScope.defaultOrg.orgId }" />
				                                	<input name="classinput" type="text" class="inputtext class_name_input" value="输入培训班的名称" id="search_name" />
				                                  	<input name="input2" type="button" class="searchbutton mr10" value="搜索" hidefocus="true" />
				                                  	<span class="img">高级搜索<img src="${basepath }/images/bluearrowdown.jpg" width="10" height="11" /></span>
				                                 </td>
				                              </tr>
				                              <tr class="mt10 hidden">
				                                <td class="taR">培训方式</td>
				                                <td class="taL" colspan="3">
				                                	<label><span class="option choosed"><input name="search_way" type="radio" value="" checked="checked"/></span> 不限</label>
				                                	<c:forEach var="sp" items="${wayList}">
				                                		<label><span class="option "><input name="search_way" type="radio" value="${sp.spId }" /></span> ${sp.name }</label>
				                                	</c:forEach>
				                                </td>
				                              </tr>
				                              <tr class="mt10 hidden">
				                                <td class="taR">班主任</td>
				                                <td class="taL">
				                                	<input type="text" class="input" id="search_principle_name" readonly="readonly"/>
				                                	<input type="hidden" id="search_principle_id" value="" />
				                                	<em class="tochoose vm chooseperson">选择人员</em>
				                                	<em class="tochoose vm cleanchoose">清空</em>
				                                </td>
				                                <td class="taR">级别</td>
				                                <td class="taL">
				                                	<select id="search_level">
				                                		<option value="">不限</option>
				                                		<c:forEach items="${levelList }" var="p">
				                            				<option value="${p.spId }">${p.name }</option>
						                            	</c:forEach>
				                                	</select>
				                                </td>
				                              </tr>
				                              <tr class="mt10 hidden">
				                                <td class="taR">状态</td>
				                                <td class="taL">
				                                	<label><span class="option choosed"><input name="search_status" type="radio" value="0"  checked="checked"/></span> 不限</label>
				                                	<label><span class="option "><input name="search_status" type="radio" value="1" /></span> 新建</label>
				                                	<label><span class="option"><input name="search_status" type="radio" value="2" /></span> 实施</label>
				                                	<label><span class="option"><input name="search_status" type="radio" value="3" /></span> 完成</label>
				                                </td>
				                                <td class="taR">反应层评估</td>
				                                <td class="taL">
				                                	<label><span class="option choosed"><input name="search_response" type="radio" value="" checked="checked" /></span> 不限</label>
				                                	<label><span class="option"><input name="search_response" type="radio" value="1" /></span> 有</label>
				                                	<label><span class="option"><input name="search_response" type="radio" value="0" /></span> 无</label>
				                                </td>
				                              </tr>
				                              <tr class="mt10 hidden">
				                                <td class="taR">时间</td>
				                                <td class="taL">
				                                	<input id="search_start_date" type="text" class="timetext" />
				                                	<em class="mr10 ml10">到</em>
				                                	<input id="search_end_date" type="text" class="timetext" />
				                                </td>
				                                <td class="taR">行为层评估</td>
				                                <td class="taL">
				                                	<label><span class="option choosed"><input name="search_behaviour" type="radio" value=""  checked="checked"/></span> 不限</label>
				                                	<label><span class="option"><input name="search_behaviour" type="radio" value="1" /></span> 有</label>
				                                	<label><span class="option"><input name="search_behaviour" type="radio" value="0" /></span> 无</label>
				                                </td>
				                              </tr>
				                              <tr class="mt10 hidden">
				                                <td class="taR">是否在计划内</td>
				                                <td class="taL">
				                                	<label><span class="option choosed"><input name="search_type" type="radio" value=""  checked="checked"/></span> 不限</label>
				                                	<label><span class="option "><input name="search_type" type="radio" value="2" /></span> 是</label>
				                                	<label><span class="option"><input name="search_type" type="radio" value="0" /></span> 否</label>
				                                </td>
				                                <td class="taR">考试</td>
				                                <td class="taL">
				                                	<label><span class="option choosed"><input name="search_exam" type="radio" value="" checked="checked"/></span> 不限</label>
				                                	<label><span class="option"><input name="search_exam" type="radio" value="1" /></span> 有</label>
				                                	<label><span class="option"><input name="search_exam" type="radio" value="0"  /></span> 无</label>
				                                </td>
				                              </tr>
				                              <tr class="mt10 hidden">
				                                <td colspan="4" class="taR">
				                                	<input name="" type="button" class="searchbutton m10" value="搜索" hidefocus="true" />
				                                	<span class="img mr10">收起<img src="${basepath }/images/bluearrowup.jpg" width="10" height="11"/></span>
				                                </td>
				                              </tr>
				                            </table>
				                    </div>
			                        <div>
			                            <!-- 培训班列表 -->
			                            <div class="dataTables_wrapper">
									 		<h3 class="reHeight">
		                            			<div class="z">培训班列表</div>
												<div class="y">
													<a href="javascript:;" class="functionbutton cls_new_class">新建</a>
													<a href="javascript:;" class="functionbutton" id="leadin">导入</a>
													<a href="javascript:;" class="functionbutton" onclick="export_trainclass()">导出</a>
													<a id="btn_delete" href="javascript:;" class="functionbutton" >删除</a>
												</div>
											</h3>
											<div id="list_trainclass" style="margin-top:3px"></div>
									 	</div>
			                        </div>
			                    </div>
			                </div>
			                <div class="newlefttree">
			                	<div class="pftree">
				                	<h3>机构部门</h3>
			                        <div class="m10">
			                        	是否包含下级
			                        	<label class="ml12"><input name="isSub" type="radio" value="1" class="vm"  checked="checked"/> 是</label>
			                        	<label class="ml12"><input name="isSub" type="radio" value="0" class="vm" /> 否</label>
			                        </div>
			                        <div id="org_jstree"></div>
				                </div>
				             </div>
			                <div class="extra">
		                    	<h3><div class="extraimg"></div><div class="extraimg extraimon"></div><div class="extraimg extraimg2"></div><div class="extraimg extraimon2"></div></h3>
		                    </div>
		            	</div>
		            </div>
		        </div>
		        <div class="newleft">
		        	<!-- 导入左侧导航 -->
		        	<c:set var="menu_sn" value="6" scope="request"></c:set>
		    		<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
		        </div>
		    </div>
		    
		</div>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		<script type="text/javascript" src="${basepath }/js/train/index.js" charset="gbk"></script>
		<jsp:include page="/WEB-INF/page/include/uploadData.jsp"></jsp:include>
	</body>

</html>