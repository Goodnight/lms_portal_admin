<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<%
	String[] ind = new String[]{"一",  "二", "三", "四", "五", "六", "七","八", "九","十", "十一" };
	String[] zimu = new String[]{"A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K" };
	int i = 0;
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
		<meta http-equiv="content-language" content="gbk" />
		<c:if test="${surveyType == '1' }"><title>培训需求模板列表</title></c:if><c:if test="${surveyType == '2' }"><title>评估模板列表</title></c:if>
		<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
	</head>
	<body class="bg">
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
                       <c:if test="${surveyType == '1' }"><a href="${basepath }/inquiry/inquiryTpIndex.html?surveyType=1">培训需求模板</a></c:if>
                       <c:if test="${surveyType == '2' }"><a href="${basepath }/inquiry/inquiryTpIndex.html?surveyType=2">评估模板</a></c:if>
                        </li>
                        <li class="last">
                       <c:if test="${surveyType == '1' }">调查问题列表</c:if>
                       <c:if test="${surveyType == '2' }">评估问题列表</c:if>
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
				   <c:if test="${surveyType == '1' }">调查问题列表</c:if>
                   <c:if test="${surveyType == '2' }">评估问题列表</c:if>
				</h2>
				<div class="courseupload" style="padding-top:20px">
					<ul>
						<li class="now">
							设置题序
						</li>
						<li>
							<a href="javascript:;">编辑内容</a>
						</li>
					</ul>
					<div>
						<form action="saveInquiryTpItemAsc.html" method="post">
						<input type="hidden" name="surveyType" value="${surveyType}" />
							<input type="hidden" id="stId" name="stId" value="${stId}" />
							<div>
							    <!-- 调查问题列表-设置题序 -->
								<div id="list_item"></div>
								<div align="right" class="mr10">
									<input type="submit" class="step m10 vm" value="保存"/>
									<a href="inquiryTpIndex.html?surveyType=${surveyType}" class="back m10 vm">关闭</a>
								</div>
							</div>
						</form>
						<div class="hidden">
							<div class="basic_information mt20" style="padding-top:0;">
								<div>
									<div align="center" class="pt15">
										${itb.name}
									</div>
									<div>
									<%int questionSn = 0; %>
										<c:forEach items="${listInfo}" var="listCategory"
											varStatus="st">
											<h3 class="mt10 editor reHeight">
											
												<div class="z">
													<label>
														<%=ind[i++]%>
													</label>
													、
												</div>
												<div class="z w750">
													${listCategory.name}
												</div>
												<div class="z">
													<input id="stcId" type="hidden" value="${listCategory.stcId}"/>
													<a href="javascript:;" class="hidden change">编辑</a><a
														href="javascript:;" class="hidden addbigitem">增加大类</a>
													<a href="javascript:;" class="hidden del_listone">删除</a>
												</div>
											</h3>
											<c:forEach items="${listCategory.items}" var="listItems"
												varStatus="st1">
												<%questionSn++; %>
												<dl class="mt10 editor">
													<dt class="reHeight">
														<div class="z">
															<label><%=questionSn %></label>
															、
														</div>
														<div class="z w750">${listItems.question}</div>
														<div class="z">
															<input type="hidden" id="stiId" value="${listItems.stiId}" />
															<a href="javascript:;" class="hidden edit">编辑</a>
															<a href="javascript:;" class="hidden del_listtwo">删除</a>
														</div>
													</dt>
													<%
														int j = 0;
													%>
													
														<c:choose>
															<c:when test="${listItems.type==1}">
																<c:forEach items="${listItems.reses}" var="listReses"
																	varStatus="st2">
																	<dd class="reHeight">
																		<div class="z">
																			<label>
																				<%=zimu[j++]%>
																			</label>
																			、
																		</div>
																		<div class="z w750">${listReses.answer}</div>
																		<div class="z">
																			<input type="hidden" id="stirId" value="${listReses.stirId}" />
																			<a href="javascript:;" class="nd hidden">删除</a>
																		</div>
																	</dd>
																</c:forEach>
															</c:when>
															<c:when test="${listItems.type==2}">
																<c:forEach items="${listItems.reses}" var="listReses"
																	varStatus="st2">
																	<dd class="reHeight">
																		<div class="z">
																			<label>
																				<%=zimu[j++]%>
																			</label>
																			、
																		</div>
																		<div class="z w750">${listReses.answer}</div>
																		<div class="z">
																		<input type="hidden" id="stirId" value="${listReses.stirId}" />
																			<a href="javascript:;" class="nd hidden">删除</a>
																		</div>
																	</dd>
																</c:forEach>
															</c:when>
															<c:when test="${listItems.type==3}">
																<c:forEach items="${listItems.reses}" var="listReses"
																	varStatus="st2">
																	<dd class="reHeight">
																		<div class="z">
																			<label>
																				<%=zimu[j++]%>
																			</label>
																			、
																		</div>
																		<div class="z w750">${listReses.answer}<em>(${listReses.score}分)</em></div>
																		<div class="z">
																			<input type="hidden" id="stirId" value="${listReses.stirId}" />
																			<a href="javascript:;" class="nd hidden">删除</a>
																		</div>
																	</dd>
																</c:forEach>
															</c:when>
															<c:otherwise>
																<c:forEach items="${listItems.reses}" var="listReses"
																	varStatus="st2">
																</c:forEach>
															</c:otherwise>
														</c:choose>
													<dd>
														<c:if test="${listItems.type != 4 }"><a href="javascript:;" class="newadditem hidden">增加一个选项</a></c:if>
													</dd>
												</dl>
											</c:forEach>
											<dl class="mt20 editor2">
												<input name="" type="button" class="newaddblock" value="增加一个问题" />
											</dl>
										</c:forEach>
									</div>
								</div>
							</div>
							<div align="right" class="mr10">
								<a href="inquiryTpIndex.html?surveyType=${surveyType}" class="back m10 vm">关闭</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
		<jsp:include page="/WEB-INF/page/include/script_1.jsp"></jsp:include>
		<script type="text/javascript" src="${basepath }/js/editor.js" charset="utf-8"></script>
		<script type="text/javascript" src="${basepath}/js/inquiry/inquiryTpItems.js" charset="gbk"></script>
	</body>
</html>
