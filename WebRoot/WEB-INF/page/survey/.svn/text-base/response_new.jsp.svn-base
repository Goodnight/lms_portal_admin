<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<c:choose>
			<c:when test="${su!=null }"><title>修改反应层评估</title></c:when>
			<c:otherwise><title>新建反应层评估</title></c:otherwise>
		</c:choose>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
	<body class="bg">
		<form id="form1">
			<input type="hidden" id="importType" name="importType" value=surveyEvaluate />
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
									<a href="${basepath }/survey/index.html?type=1">反应层评估</a>
								</li>
								<li class="last">
									<c:choose>
										<c:when test="${su!=null }">修改反应层评估</c:when>
										<c:otherwise>新建反应层评估</c:otherwise>
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
							<c:when test="${su!=null }">修改反应层评估</c:when>
							<c:otherwise>新建反应层评估</c:otherwise>
						</c:choose>
					</h2>
					<div class="basic_information mt20">
						<ul class="window_nav ml0">
							<c:choose>
								<c:when test="${su!=null }">
									<li class="basic">
										<a href="javascript:;" class="png_bg">基本信息</a>
									</li>
									<li class="course">
										<a href="${basepath }/survey/setting.html?type=1&sid=${su.sId}&symbol=${symbol}" class="grey png_bg">安排人员</a>
									</li>
								</c:when>
								<c:otherwise>
									<li class="basic">
										<a href="javascript:;" class="png_bg">基本信息</a>
									</li>
									<li class="course">
										<a href="javascript:;" class="grey png_bg">安排人员</a>
									</li>
								</c:otherwise>
							</c:choose>
						</ul>
						<form id="survey_form" action="${basepath}/survey/save.html" method="post">
						<input name="symbol" type="hidden" value="${symbol }" />
						<!-- LMSWD-1401 by LTC 20130509 -->
						    <!-- 1.已发布： 只能修改人员 -->
						    <c:if test="${symbol == '1' }">
							<table border="0" cellspacing="15" cellpadding="15" class="mt40">
								<tbody>
									<tr>
										<td class="taR">
											<em>*</em>评估主题
										</td>
										<td colspan="3">
											<!-- 培训班内评估不可以添加或删除人员 |LMSWD-3469|by LuChao -->
		                        			<input id="upId" name="upId" type="hidden" value="${su.upId}"/>
											<input id="topic" name="topic" type="text" class="input vm"
												value="${su.topic }" readonly="readonly" />
												<div id="topic_error"></div>
										</td>
									</tr>
									<tr>
										<td class="taR">
											<em>*</em>开始时间
										</td>
										<td>
											<input name="startDt" type="text"
												class="timetext" value="${su.startDt }" readonly="readonly"/>
										</td>
										<td class="taR">
											<em>*</em>结束时间
										</td>
										<td>
											<input name="endDt" type="text"
												class="timetext" value="${su.endDt }" readonly="readonly"/>
										</td>
									</tr>
									<tr>
										<td class="taR">
											培训班名称
										</td>
										<td colspan="3">
											<input id="class_name" name="trainClassName" type="text" class="input vm"
												value="${trainClassName }" readonly="readonly" />
											<input id="class_id" name="tcid" type="hidden"
												class="input vm" value="${tc.tcId }" />
										</td>
									</tr>
									<tr>
										<td class="taR">
											<em>*</em>选择模板
										</td>
										<td colspan="3">
											<input name="tptype" type="radio" value="normal"
												class="models" checked="checked" />
											普通模板
											<input id="normal_tpid" name="templateId" type="hidden"
												value="${su.template.stId }" />
											<input id="normal_tpname" name="" type="text"
												class="input vm si ml12" value="${su.template.name }" readonly="readonly"/>
											<!-- <span class="vm" id="leadin">导入模板</span> -->
										</td>
									</tr>
									<tr class="hidden ">
										<td class="taR">
											&nbsp;
										</td>
										<td colspan="3">
											<input id="rd_common" name="tptype" type="radio" value="common"
												class="models"/>
											通用满意度调查
											<input id="common_tpid" name="common_templateId"
												type="hidden" />
											<input id="common_tpname" name="" type="text"
												class="input vm si ml12" readonly="readonly"/>
											<span id="common" class="vm cls_choose_tp">选择模板</span>
										</td>
									</tr>
									<tr class="hidden">
										<td class="taR">
											满意度调查讲师评估
										</td>
										<td colspan="3">
											<em class="option choosed"><input name="5" type="radio"
													value="" /> </em> 全部讲师
											<em class="option ml12"><input name="5" type="radio"
													value="" /> </em>
											<input name="" type="text" class="input vm si ml12" />
											<span class="vm chooseboard">指定讲师</span><em
												class="option ml12"><input name="5" type="radio"
													value="" /> </em> 无需评估
										</td>
									</tr>
									<tr class="hidden">
										<td class="taR">
											满意度调查课程评估
										</td>
										<td colspan="3">
											<em class="option choosed"><input name="5" type="radio"
													value="" /> </em> 全部课程
											<em class="option ml12"><input name="5" type="radio"
													value="" /> </em>
											<input name="" type="text" class="input vm si ml12" />
											<span class="vm chooseboard">指定课程</span><em
												class="option ml12"><input name="5" type="radio"
													value="" /> </em> 无需评估
										</td>
									</tr>
								</tbody>
							</table>
							</c:if>
							<!-- 2.未发布 && 有人参与： 只能修改开始结束时间 和 参与人员 -->
                            <c:if test="${symbol == '2' }">
                            <table border="0" cellspacing="15" cellpadding="15" class="mt40">
                                <tbody>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>评估主题
                                        </td>
                                        <td colspan="3">
                                        	<!-- 培训班内评估不可以添加或删除人员 |LMSWD-3469|by LuChao -->
		                        			<input id="upId" name="upId" type="hidden" value="${su.upId}"/>
                                            <input id="topic" name="topic" type="text" class="input vm"
                                                value="${su.topic }" readonly="readonly" />
                                                <div id="topic_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>开始时间
                                        </td>
                                        <td>
                                            <input id="startDt" name="startDt" type="text"
                                                class="timetext" value="${su.startDt }" readonly="readonly"/>
                                                <div id="startDt_error"></div>
                                        </td>
                                        <td class="taR">
                                            <em>*</em>结束时间
                                        </td>
                                        <td>
                                            <input id="endDt" name="endDt" type="text"
                                                class="timetext" value="${su.endDt }" readonly="readonly"/>
                                                <div id="endDt_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            培训班名称
                                        </td>
                                        <td colspan="3">
                                            <input id="class_name" name="trainClassName" type="text" class="input vm"
                                                value="${trainClassName }" readonly="readonly" />
                                            <input id="class_id" name="tcid" type="hidden"
                                                class="input vm" value="${tc.tcId }" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>选择模板
                                        </td>
                                        <td colspan="3">
                                            <input name="tptype" type="radio" value="normal"
                                                class="models" checked="checked" />
                                            普通模板
                                            <input id="normal_tpid" name="templateId" type="hidden"
                                                value="${su.template.stId }" />
                                            <input id="normal_tpname" name="" type="text"
                                                class="input vm si ml12" value="${su.template.name }" readonly="readonly"/>
                                            <!-- <span class="vm" id="leadin">导入模板</span> -->
                                        </td>
                                    </tr>
                                    <tr class="hidden ">
                                        <td class="taR">
                                            &nbsp;
                                        </td>
                                        <td colspan="3">
                                            <input id="rd_common" name="tptype" type="radio" value="common"
                                                class="models"/>
                                            通用满意度调查
                                            <input id="common_tpid" name="common_templateId"
                                                type="hidden" />
                                            <input id="common_tpname" name="" type="text"
                                                class="input vm si ml12" readonly="readonly"/>
                                            <span id="common" class="vm cls_choose_tp">选择模板</span>
                                        </td>
                                    </tr>
                                    <tr class="hidden">
                                        <td class="taR">
                                            满意度调查讲师评估
                                        </td>
                                        <td colspan="3">
                                            <em class="option choosed"><input name="5" type="radio"
                                                    value="" /> </em> 全部讲师
                                            <em class="option ml12"><input name="5" type="radio"
                                                    value="" /> </em>
                                            <input name="" type="text" class="input vm si ml12" />
                                            <span class="vm chooseboard">指定讲师</span><em
                                                class="option ml12"><input name="5" type="radio"
                                                    value="" /> </em> 无需评估
                                        </td>
                                    </tr>
                                    <tr class="hidden">
                                        <td class="taR">
                                            满意度调查课程评估
                                        </td>
                                        <td colspan="3">
                                            <em class="option choosed"><input name="5" type="radio"
                                                    value="" /> </em> 全部课程
                                            <em class="option ml12"><input name="5" type="radio"
                                                    value="" /> </em>
                                            <input name="" type="text" class="input vm si ml12" />
                                            <span class="vm chooseboard">指定课程</span><em
                                                class="option ml12"><input name="5" type="radio"
                                                    value="" /> </em> 无需评估
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </c:if>
                            <!-- 3.未发布 && 无人参与： 皆可修改 || 新建-->
                            <c:if test="${symbol == '3' || su == null}">
                            <table border="0" cellspacing="15" cellpadding="15" class="mt40">
                                <tbody>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>评估主题
                                        </td>
                                        <td colspan="3">
                                        	<!-- 培训班内评估不可以添加或删除人员 |LMSWD-3469|by LuChao -->
		                        			<input id="upId" name="upId" type="hidden" value="${su!=null?su.upId:'0'}"/>
                                            <input id="topic" name="topic" type="text" class="input vm"
                                                value="${su.topic }" />
                                                <div id="topic_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>开始时间
                                        </td>
                                        <td>
                                            <input id="startDt" name="startDt" type="text"
                                                class="timetext" value="${su.startDt }" readonly="readonly"/>
                                                <div id="startDt_error"></div>
                                        </td>
                                        <td class="taR">
                                            <em>*</em>结束时间
                                        </td>
                                        <td>
                                            <input id="endDt" name="endDt" type="text"
                                                class="timetext" value="${su.endDt }" readonly="readonly"/>
                                                <div id="endDt_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            培训班名称
                                        </td>
                                        <td colspan="3">
                                            <input id="class_name" name="trainClassName" type="text" class="input vm"
                                                value="${trainClassName }" readonly="readonly" />
                                            <input id="class_id" name="tcid" type="hidden"
                                                class="input vm" value="${tc.tcId }" />
                                            <span class="vm cls_choose_class">选择培训班</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="taR">
                                            <em>*</em>选择模板
                                        </td>
                                        <td colspan="3">
                                            <input name="tptype" type="radio" value="normal"
                                                class="models" checked="checked" />
                                            普通模板
                                            <input id="normal_tpid" name="templateId" type="hidden"
                                                value="${su.template.stId }" />
                                            <input id="normal_tpname" name="" type="text"
                                                class="input vm si ml12" value="${su.template.name }" readonly="readonly"/>
                                            <span id="normal" class="vm cls_choose_tp">选择模板</span>
                                            <!-- <span class="vm" id="leadin">导入模板</span> -->
                                        </td>
                                    </tr>
                                    <tr class="hidden ">
                                        <td class="taR">
                                            &nbsp;
                                        </td>
                                        <td colspan="3">
                                            <input id="rd_common" name="tptype" type="radio" value="common"
                                                class="models"/>
                                            通用满意度调查
                                            <input id="common_tpid" name="common_templateId"
                                                type="hidden" />
                                            <input id="common_tpname" name="" type="text"
                                                class="input vm si ml12" readonly="readonly"/>
                                            <span id="common" class="vm cls_choose_tp">选择模板</span>
                                        </td>
                                    </tr>
                                    <tr class="hidden">
                                        <td class="taR">
                                            满意度调查讲师评估
                                        </td>
                                        <td colspan="3">
                                            <em class="option choosed"><input name="5" type="radio"
                                                    value="" /> </em> 全部讲师
                                            <em class="option ml12"><input name="5" type="radio"
                                                    value="" /> </em>
                                            <input name="" type="text" class="input vm si ml12" />
                                            <span class="vm chooseboard">指定讲师</span><em
                                                class="option ml12"><input name="5" type="radio"
                                                    value="" /> </em> 无需评估
                                        </td>
                                    </tr>
                                    <tr class="hidden">
                                        <td class="taR">
                                            满意度调查课程评估
                                        </td>
                                        <td colspan="3">
                                            <em class="option choosed"><input name="5" type="radio"
                                                    value="" /> </em> 全部课程
                                            <em class="option ml12"><input name="5" type="radio"
                                                    value="" /> </em>
                                            <input name="" type="text" class="input vm si ml12" />
                                            <span class="vm chooseboard">指定课程</span><em
                                                class="option ml12"><input name="5" type="radio"
                                                    value="" /> </em> 无需评估
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </c:if>
							<div align="right" class="mr10">
								<input id="sid" type="hidden" name="sId" value="${su.sId }" />
								<input id="participantsNum" type="hidden" name="participantsNum" value="${su.participantsNum }" />
								<input id="status" type="hidden" name="status" value="${su.status}" />
								<input id="stype" type="hidden" name="type" value="1" />
								<input type="submit" class="step mr10 vm"  value="下一步" />
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