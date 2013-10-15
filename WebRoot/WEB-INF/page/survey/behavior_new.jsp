<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<c:choose>
			<c:when test="${b!=null }">
				<title>修改行为层评估</title>
			</c:when>
			<c:otherwise>
				<title>新建行为层评估</title>
			</c:otherwise>
		</c:choose>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
	<body class="bg">
		<form id="form1">
			<input type="hidden" id="importType" name="importType" value="surveyEvaluate" />
			<input type="hidden" id="objId" name="objId" value="2" />
		</form>
		<div class="blackall hidden">
			&nbsp;
		</div>
		<div id="dialog" class="hidden">
			<div class="blackall_new">
				&nbsp;
			</div>
			<div class="newwindow">
				<div class="taR">
					<a href="javascript:;"><img class="png_bg closebutton"
							src="${basepath }/images/close.png" width="40" height="40" /> </a>
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
									<a href="${basepath }/behavior/index.html?type=2">行为层评估</a>
								</li>
								<li class="last">
									<c:choose>
										<c:when test="${b!=null }">修改行为层评估</c:when>
										<c:otherwise>新建行为层评估</c:otherwise>
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
					<h2 class="png_bg">
						<c:choose>
							<c:when test="${b!=null }">修改行为层评估</c:when>
							<c:otherwise>新建行为层评估</c:otherwise>
						</c:choose>
					</h2>
					<div class="courseupload2 basic_information">
						<ul class="window_nav newnav">
							<c:choose>
								<c:when test="${b!=null }">
									<li class="basic">
										<a href="#" class="png_bg">基本信息</a>
									</li>
									<li class="course">
										<a
											href="${basepath }/behavior/setting.html?type=2&sid=${b.sId}&symbol=${symbol}"
											class="grey png_bg">安排人员</a>
									</li>
								</c:when>
								<c:otherwise>
									<li class="basic">
										<a href="#" class="png_bg">基本信息</a>
									</li>
									<li class="course">
										<a href="#" class="grey png_bg">安排人员</a>
									</li>
								</c:otherwise>
							</c:choose>
						</ul>
						<form id="survey_form" action="${basepath }/behavior/save.html" method="post">
						<input name="symbol" type="hidden" value="${symbol }" />
                        <input name="status" type="hidden" value="${b.status }" />
						    <!-- LMSWD-1401 20130510 by LTC -->
                            <!-- 1.已发布： 只能修改人员 -->
                            <c:if test="${symbol == '1' }">
							<table border="0" cellspacing="15" cellpadding="15" class="mt40">
								<colgroup>
									<col width="90" />
								</colgroup>
								<tbody>
									<tr>
										<td class="taR">
											<em>*</em>评估主题
										</td>
										<td colspan="3">
											<input id="upId" name="upId" type="hidden" value="${b.upId}"/>
											<input id="topic" name="topic" type="text" class="input vm"
												value="${b.topic }" readonly="readonly" />
											<div id="topic_error"></div>
										</td>
									</tr>
									<tr>
										<td class="taR">
											<em>*</em>开始时间
										</td>
										<td>
											<input name="startDt" type="text" class="timetext" value="${b.startDt }" readonly="readonly" />
										</td>
										<td class="taR">
											<em>*</em>结束时间
										</td>
										<td>
											<input name="endDt" type="text" class="timetext" value="${b.endDt }" readonly="readonly" />
										</td>
									</tr>
									<tr>
										<td class="taR">
											培训班名称
										</td>
										<td colspan="3">
											<input id="class_name" name="tcName" type="text" class="input vm"
												value="${b.trainclass.name }" readonly="readonly" />
											<input id="class_id" name="tcid" type="hidden"
												class="input vm" value="${b.trainclass.tcId }" />
										</td>
									</tr>
									<tr>
										<td class="taR"></td>
										<td colspan="3">
										<input type="hidden" value="${isSameMode}"/>
											<em class="option ${isSameMode?'choosed':''}"><input name="tpmode"
													type="radio" value="1" checked="${isSameMode?'checked':''}" /> </em>
											上级、平级、下级、自己都使用统一模板
											<em class="option ${isSameMode?'':'choosed'}"><input name="tpmode" type="radio"
													value="0" checked="${isSameMode?'':'checked'}"/> </em> 分别上级、平级、下级、自己指定不同的模板
										</td>
									</tr>
									<tr>
										<td class="taR">
											<em>*</em>选择上级模板
										</td>
										<td colspan="3">
											<input id="upper_tpid" name="upper_tp" type="hidden"
												class="cls_tpid" value="${b.behavior['0'].stId }" />
											<input id="upper_tpname" type="text"
												class="input vm si cls_tpname"
												value="${b.behavior['0'].name }" readonly="readonly"/>
											<!-- 或
											<span class="vm" id="leadin">导入模板</span> -->
										</td>
									</tr>
									<tr>
										<td class="taR">
											<em>*</em>选择平级模板
										</td>
										<td colspan="3">
											<input id="equal_tpid" name="equal_tp" type="hidden"
												class="cls_tpid" value="${b.behavior['1'].stId }" />
											<input id="equal_tpname" type="text"
												class="input vm si cls_tpname"
												value="${b.behavior['1'].name }" readonly="readonly"/>
											<!-- 或
											<span class="vm" id="leadin">导入模板</span> -->
										</td>
									</tr>
									<tr>
										<td class="taR">
											<em>*</em>选择下级模板
										</td>
										<td colspan="3">
											<input id="lower_tpid" name="lower_tp" type="hidden"
												class="cls_tpid" value="${b.behavior['2'].stId }" />
											<input id="lower_tpname" type="text"
												class="input vm si cls_tpname"
												value="${b.behavior['2'].name }" readonly="readonly"/>
											<!-- 或
											<span class="vm" id="leadin">导入模板</span> -->
										</td>
									</tr>
									<tr>
										<td class="taR">
											<em>*</em>选择本人模板
										</td>
										<td colspan="3">
											<input id="self_tpid" name="self_tp" type="hidden"
												class="cls_tpid" value="${b.behavior['4'].stId }" />
											<input id="self_tpname" type="text"
												class="input vm si cls_tpname"
												value="${b.behavior['4'].name }" readonly="readonly"/>
											<!-- 或
											<span class="vm" id="leadin">导入模板</span> -->
										</td>
									</tr>
									<tr>
										<td class="taR">
											<em>*</em>选择其他模板
										</td>
										<td colspan="3">
											<input id="other_tpid" name="other_tp" type="hidden"
												class="cls_tpid" value="${b.behavior['3'].stId }" />
											<input id="other_tpname" type="text"
												class="input vm si cls_tpname"
												value="${b.behavior['3'].name }" readonly="readonly"/>
											<!-- 或
											<span class="vm" id="leadin">导入模板</span> -->
										</td>
									</tr>
								</tbody>
							</table>
							</c:if>
							<!-- 2.未发布 && 有人参与： 只能修改开始结束时间 和 参与人员 -->
                            <c:if test="${symbol == '2' }">
                            <table border="0" cellspacing="15" cellpadding="15" class="mt40">
                                <colgroup>
                                    <col width="90" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>评估主题
                                        </td>
                                        <td colspan="3">
                                        	<!-- 培训班内评估不可以添加或删除人员 |LMSWD-3469|by LuChao -->
		                        			<input id="upId" name="upId" type="hidden" value="${b.upId}"/>
                                            <input id="topic" name="topic" type="text" class="input vm"
                                                value="${b.topic }" readonly="readonly" />
                                            <div id="topic_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>开始时间
                                        </td>
                                        <td>
                                            <input id="startDt" name="startDt" type="text" class="timetext" value="${b.startDt }" readonly="readonly" />
                                            <div id="startDt_error"></div>
                                        </td>
                                        <td class="taR">
                                            <em>*</em>结束时间
                                        </td>
                                        <td>
                                            <input id="endDt" name="endDt" type="text" class="timetext" value="${b.endDt }" readonly="readonly" />
                                            <div id="endDt_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            培训班名称
                                        </td>
                                        <td colspan="3">
                                            <input id="class_name" name="tcName" type="text" class="input vm"
                                                value="${b.trainclass.name }" readonly="readonly" />
                                            <input id="class_id" name="tcid" type="hidden"
                                                class="input vm" value="${b.trainclass.tcId }" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR"></td>
                                        <td colspan="3">
                                        <input type="hidden" value="${isSameMode}"/>
                                            <em class="option ${isSameMode?'choosed':''}"><input name="tpmode"
                                                    type="radio" value="1" checked="${isSameMode?'checked':''}" /> </em>
                                            上级、平级、下级、自己都使用统一模板
                                            <em class="option ${isSameMode?'':'choosed'}"><input name="tpmode" type="radio"
                                                    value="0" checked="${isSameMode?'':'checked'}" /> </em> 分别上级、平级、下级、自己指定不同的模板
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>选择上级模板
                                        </td>
                                        <td colspan="3">
                                            <input id="upper_tpid" name="upper_tp" type="hidden"
                                                class="cls_tpid" value="${b.behavior['0'].stId }" />
                                            <input id="upper_tpname" type="text"
                                                class="input vm si cls_tpname"
                                                value="${b.behavior['0'].name }" readonly="readonly"/>
                                            <!-- 或
                                            <span class="vm" id="leadin">导入模板</span> -->
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>选择平级模板
                                        </td>
                                        <td colspan="3">
                                            <input id="equal_tpid" name="equal_tp" type="hidden"
                                                class="cls_tpid" value="${b.behavior['1'].stId }" />
                                            <input id="equal_tpname" type="text"
                                                class="input vm si cls_tpname"
                                                value="${b.behavior['1'].name }" readonly="readonly"/>
                                            <!-- 或
                                            <span class="vm" id="leadin">导入模板</span> -->
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>选择下级模板
                                        </td>
                                        <td colspan="3">
                                            <input id="lower_tpid" name="lower_tp" type="hidden"
                                                class="cls_tpid" value="${b.behavior['2'].stId }" />
                                            <input id="lower_tpname" type="text"
                                                class="input vm si cls_tpname"
                                                value="${b.behavior['2'].name }" readonly="readonly"/>
                                            <!-- 或
                                            <span class="vm" id="leadin">导入模板</span> -->
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>选择本人模板
                                        </td>
                                        <td colspan="3">
                                            <input id="self_tpid" name="self_tp" type="hidden"
                                                class="cls_tpid" value="${b.behavior['4'].stId }" />
                                            <input id="self_tpname" type="text"
                                                class="input vm si cls_tpname"
                                                value="${b.behavior['4'].name }" readonly="readonly"/>
                                            <!-- 或
                                            <span class="vm" id="leadin">导入模板</span> -->
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>选择其他模板
                                        </td>
                                        <td colspan="3">
                                            <input id="other_tpid" name="other_tp" type="hidden"
                                                class="cls_tpid" value="${b.behavior['3'].stId }" />
                                            <input id="other_tpname" type="text"
                                                class="input vm si cls_tpname"
                                                value="${b.behavior['3'].name }" readonly="readonly"/>
                                            <!-- 或
                                            <span class="vm" id="leadin">导入模板</span> -->
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </c:if>
                            <!-- 3.未发布 && 无人参与： 皆可修改 || 新建-->
                            <c:if test="${symbol == '3' || b == null}">
                            <table border="0" cellspacing="15" cellpadding="15" class="mt40">
                                <colgroup>
                                    <col width="90" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>评估主题
                                        </td>
                                        <td colspan="3">
                                        	<!-- 培训班内评估不可以添加或删除人员 |LMSWD-3469|by LuChao -->
		                        			<input id="upId" name="upId" type="hidden" value="${b!=null?b.upId:'0'}"/>
                                            <input id="topic" name="topic" type="text" class="input vm"
                                                value="${b.topic }" />
                                            <div id="topic_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>开始时间
                                        </td>
                                        <td>
                                            <input id="startDt" name="startDt" type="text" class="timetext" value="${b.startDt }" readonly="readonly" />
                                            <div id="startDt_error"></div>
                                        </td>
                                        <td class="taR">
                                            <em>*</em>结束时间
                                        </td>
                                        <td>
                                            <input id="endDt" name="endDt" type="text" class="timetext" value="${b.endDt }" readonly="readonly" />
                                            <div id="endDt_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            培训班名称
                                        </td>
                                        <td colspan="3">
                                            <input id="class_name" name="tcName" type="text" class="input vm"
                                                value="${b.trainclass.name }" readonly="readonly" />
                                            <input id="class_id" name="tcid" type="hidden"
                                                class="input vm" value="${b.trainclass.tcId }" />
                                            <span class="vm cls_choose_class">选择培训班</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR"></td>
                                        <td colspan="3">
                                        <input type="hidden" value="${isSameMode}"/>
                                            <em class="option ${isSameMode?'choosed':''}"><input name="tpmode"
                                                    type="radio" value="1" checked="${isSameMode?'checked':''}"  /> </em>
                                            上级、平级、下级、自己都使用统一模板
                                            <em class="option ${isSameMode?'':'choosed'}"><input name="tpmode" type="radio"
                                                    value="0" checked="${isSameMode?'':'checked'}"/> </em> 分别上级、平级、下级、自己指定不同的模板
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>选择上级模板
                                        </td>
                                        <td colspan="3">
                                            <input id="upper_tpid" name="upper_tp" type="hidden"
                                                class="cls_tpid" value="${b.behavior['0'].stId }" />
                                            <input id="upper_tpname" type="text" name="upper_tpname"
                                                class="input vm si cls_tpname"
                                                value="${b.behavior['0'].name }" readonly="readonly"/>
                                            <span id="upper" class="vm cls_choose_tp">选择模板</span> <!-- 或
                                            <span class="vm" id="leadin">导入模板</span> -->
                                            <div id="upper_tpname_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>选择平级模板
                                        </td>
                                        <td colspan="3">
                                            <input id="equal_tpid" name="equal_tp" type="hidden"
                                                class="cls_tpid" value="${b.behavior['1'].stId }" />
                                            <input id="equal_tpname" type="text" name="equal_tpname"
                                                class="input vm si cls_tpname"
                                                value="${b.behavior['1'].name }" readonly="readonly"/>
                                            <span id="equal" class="vm cls_choose_tp">选择模板</span> <!-- 或
                                            <span class="vm" id="leadin">导入模板</span> -->
                                            <div id="equal_tpname_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>选择下级模板
                                        </td>
                                        <td colspan="3">
                                            <input id="lower_tpid" name="lower_tp" type="hidden"
                                                class="cls_tpid" value="${b.behavior['2'].stId }" />
                                            <input id="lower_tpname" type="text" name="lower_tpname"
                                                class="input vm si cls_tpname"
                                                value="${b.behavior['2'].name }" readonly="readonly"/>
                                            <span id="lower" class="vm cls_choose_tp">选择模板</span> <!-- 或
                                            <span class="vm" id="leadin">导入模板</span> -->
                                            <div id="lower_tpname_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>选择本人模板
                                        </td>
                                        <td colspan="3">
                                            <input id="self_tpid" name="self_tp" type="hidden"
                                                class="cls_tpid" value="${b.behavior['4'].stId }" />
                                            <input id="self_tpname" type="text" name="self_tpname"
                                                class="input vm si cls_tpname"
                                                value="${b.behavior['4'].name }" readonly="readonly"/>
                                            <span id="self" class="vm cls_choose_tp">选择模板</span> <!-- 或
                                            <span class="vm" id="leadin">导入模板</span> -->
                                            <div id="self_tpname_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>选择其他模板
                                        </td>
                                        <td colspan="3">
                                            <input id="other_tpid" name="other_tp" type="hidden"
                                                class="cls_tpid" value="${b.behavior['3'].stId }" />
                                            <input id="other_tpname" type="text" name="other_tpname"
                                                class="input vm si cls_tpname"
                                                value="${b.behavior['3'].name }" readonly="readonly"/>
                                            <span id="other" class="vm cls_choose_tp">选择模板</span> <!-- 或
                                            <span class="vm" id="leadin">导入模板</span> -->
                                            <div id="other_tpname_error"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </c:if>
							<div align="right" class="mr10">
								<input id="sid" type="hidden" name="sId" value="${b.sId }" />
								<input id="stype" type="hidden" name="type" value="2" />
								<input type="submit" class="step mr10 vm" value="下一步" />
								<input type="reset" class="back ml10 vm" value="重置" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		<script type="text/javascript"
			src="${basepath }/js/estimate/survey_new.js" charset="GBK"></script>
		<jsp:include page="/WEB-INF/page/include/upload.jsp"></jsp:include>
	</body>
</html>