<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<c:choose>
			<c:when test="${f==null }">
				<title>新建面授课程</title>
			</c:when>
			<c:otherwise>
				<title>修改面授课程</title>
			</c:otherwise>
		</c:choose>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
	<body class="bg">
		<div class="blackall hidden">
			&nbsp;
		</div>
		
		<!-- 知识分类树 LH-->
		<div class="treewindow">
			<div id="org_jstree1" class="demo treedemo"></div>
		    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
		</div>
		<!-- 知识分类树LH -->
		
		
		<div id="dialog" class="hidden">
			<div class="blackall_new">
				&nbsp;
			</div>
			<div class="newwindow">
				<div class="taR">
					<a href="javascript:;"><img class="png_bg closebutton"
							src="${basepath }/images/close.png" width="40" height="40" />
					</a>
				</div>
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
									<a href="${basepath }/index.html">首页</a>
								</li>
								<li>
									<a href="${basepath }/trainclass/index.html">培训班管理</a>
								</li>
								<li>
									<a href="#">${tc.name }</a>
								</li>
								<li>
									<a
										href="${basepath }/trainclass/course.html?tag=face&tcid=${tc.tcId}">课程设置</a>
								</li>
								<li class="last">
									<c:choose>
										<c:when test="${f==null }"> 新建面授课程</c:when>
										<c:otherwise> 修改面授课程</c:otherwise>
									</c:choose>
								</li>
							</ul>
						</div>
						<div class="y"></div>
					</div>
				</div>
			</div>
			<div class="content cl">
				<div class="ngreyborder changeblue2 mt20">
					<c:choose>
						<c:when test="${f==null }">
							<h2 class="png_bg">
								新建面授课程
							</h2>
						</c:when>
						<c:otherwise>
							<h2 class="png_bg">
								修改面授课程
							</h2>
						</c:otherwise>
					</c:choose>
					<div class="basic_information mt2">
						<form id="face_form" action="${basepath }/facecourse/save.html"
							method="post">
							<table border="0" cellspacing="15" cellpadding="15">
								<tbody>
									<tr>
										<td>
											<em>*</em>课程名称
										</td>
										<td>
											<input type="hidden" name="cId" value="${f.cId }" />
											<input type="hidden" name="tcid" value="${tc.tcId }" />
											<input id="name" name="name" type="text" class="input vm"
												maxlength="50" value="${f.name }" />
										</td>
									</tr>
									<tr>
										<td>
											<em>*</em>学时 (小时)
										</td>
										<td>
											<input id="classHour" name="classHour" type="text"
												class="input vm si" style="width: 60px"
												value="${f.classHour/60 }" />
											<!--非空数字-->
										</td>
									</tr>
									<tr>
										<td>
											<em>*</em>讲师
										</td>
										<td>
											<c:choose>
			                        			<c:when test="${f!=null&&f.teacherType==1 }">
			                        				<em class="option "><input type="radio"  name="teacherType" value="0" /></em> 内部讲师　　
			                        				<em class="option choosed"><input type="radio"  name="teacherType" value="1" checked="checked"/></em> 外部讲师
			                        			</c:when>
			                        			<c:otherwise>
			                        				<em class="option choosed"><input type="radio"  name="teacherType" value="0" checked="checked"/></em> 内部讲师　　
			                        				<em class="option"><input type="radio"  name="teacherType" value="1"/></em> 外部讲师
			                        			</c:otherwise>
			                        		</c:choose>
										</td>
									</tr>
									<tr class="${f!=null&&f.teacherType==1?'':'hidden' } outter">
										<td></td>
										<td>
			                        		<input id="teacherName" name="teacherName" class="input vm si" maxlength="255" value="${f.teacherName }" title="手动输入"/>
											<div class="speaker_error" style="float:left"></div>
										</td>
									</tr>
									<tr class="${f!=null&&f.teacherType==1?'hidden':'' } inner">
										<td></td>
										<td>
											<div style="float:left">
												<input id="speaker_name" name="speakerName" type="text"
													class="input vm si" value="${f.speaker.name }" readonly="readonly"/>
												<input id="speaker_id" type="hidden" name="speakerId"
													value="${f.speaker.uid }" />
												<span id="speaker" class="vm chooseteacher">选择讲师</span>
											</div>
											<div class="speaker_error" style="float:left"></div>
										</td>
									</tr>
									<tr>
										<td colspan="2">
											<div class="z w155">
												<em>＊</em>适用岗位
											</div>
											<div class="objectstring z">
												<div class="cl mt4" id="post_list">
													<c:forEach var="p" items="${f.positions }">
														<label class="speciallabel">
															${p.position.name }
															<input type="hidden" name="position"
																value="${p.position.pId }" />
															<input type="hidden" name="position_name"
																value="${p.position.name }" />
															<a href="#" class="ml6"><img
																	src="${basepath }/images/deletegreen.gif" />
															</a>
														</label>
													</c:forEach>
												</div>
												<div>
													<span class="vm newshowtree choosepos ml0">选择岗位</span>
												</div>
											</div>
											<div id="position_error" style="float:left"></div>
										</td>
									</tr>
									
									<tr>
									    <td><em>*</em>所属分类</td>
			                        	<td>
			                        	<input id="knoName" readonly="readonly" name="class_dep_name" type="text" class="input vm si" value="${knoNamePath}" />
					                    <input id="knowledgeId" name="class_dep" type="hidden" value="${knoId}"/>
			                        	<span class="vm chooseKno">选择知识分类</span>
			                        	</td>
			                            
			                        </tr>
									
									
									<tr>
										<td>
											授课地址
										</td>
										<td>
											<input type="text" name="address" class="input vm"
												maxlength="150" value="${f.address }" />
										</td>
									</tr>
									<tr>
										<td>
											开始时间
										</td>
										<td>
											<input id="startTime" name="startTime" type="text"
												class="input vm time" style="width: 100px"
												value="${fn:substring(f.startTime,0,10) }" />
											<select name="startHour" class="w50">
												<c:forEach var="h" begin="0" end="23">
													<c:choose>
														<c:when test="${f.startHour==h }">
															<option value="${h }" selected="selected">
																${h }
															</option>
														</c:when>
														<c:otherwise>
															<option value="${h }">
																${h }
															</option>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</select>
											时
											<select name="startMinute" class="w50 ml12">
												<c:forEach var="h" begin="0" end="59">
													<c:choose>
														<c:when test="${f.startMinute==h }">
															<option value="${h }" selected="selected">
																${h }
															</option>
														</c:when>
														<c:otherwise>
															<option value="${h }">
																${h }
															</option>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</select>
											分
										</td>
									</tr>
									<tr>
										<td>
											结束时间
										</td>
										<td>
											<input id="endTime" name="endTime" type="text"
												class="input vm time" style="width: 100px"
												value="${fn:substring(f.endTime,0,10) }" />
											<select name="endHour" class="w50 ">
												<c:forEach var="h" begin="0" end="23">
													<c:choose>
														<c:when test="${f.endHour==h }">
															<option value="${h }" selected="selected">
																${h }
															</option>
														</c:when>
														<c:otherwise>
															<option value="${h }">
																${h }
															</option>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</select>
											时
											<select name="endMinute" class="w50 ml12">
												<c:forEach var="h" begin="0" end="59">
													<c:choose>
														<c:when test="${f.endMinute==h }">
															<option value="${h }" selected="selected">
																${h }
															</option>
														</c:when>
														<c:otherwise>
															<option value="${h }">
																${h }
															</option>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</select>
											分
										</td>
									</tr>
									<tr>
										<td class="vt">
											<em>*</em>培训目标
										</td>
										<td>
											<textarea id="aim" name="aim" cols="" rows="">${f.aim }</textarea>
											<!--非空字符-->
										</td>
									</tr>
									<tr>
										<td class="vt">
											<em>*</em>主要内容
										</td>
										<td>
											<textarea id="content" name="content" cols="" rows="">${f.content }</textarea>
											<!--非空字符-->
										</td>
									</tr>
								</tbody>
							</table>
							<div align="right" class="mr10">
								<input type="submit" class="step m10 vm" value="确定" />
								<a
									href="${basepath }/trainclass/course.html?tag=face&tcid=${tc.tcId}"
									class="back vm">关闭</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		<script type="text/javascript" src="${basepath}/js/demand/newblock.js"
			charset="gbk"></script>
		<script type="text/javascript">
			var trainStartDt = "${tc.start_date }";
			var trainEndDt = "${tc.end_date }";
		</script>
		<script type="text/javascript"
			src="${basepath }/js/train/facecourse_new.js" charset="gbk"></script>
			
<script type="text/javascript" src="${basepath }/js/res/blockCours.js" charset="gbk"></script>
	</body>

</html>






