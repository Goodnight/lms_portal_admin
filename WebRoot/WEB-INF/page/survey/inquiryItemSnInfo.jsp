<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<%
	String[] ind = new String[]{"一", "二","三", "四", "五", "六", "七", "八", "九","十","十一"};
	String[] zimu = new String[]{"A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K" };
	int i = 0;
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
		<meta http-equiv="content-language" content="gbk" />
		<title>调查问题列表</title>
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
                   
                       <c:if test="${param.type == '1' }"><a href="${basepath }/survey/index.html?type=1">反应层评估</a></c:if>
                       <c:if test="${param.type == '2' }"><a href="${basepath }/behavior/index.html?type=2">行为层评估</a></c:if>
                       <c:if test="${param.type== '3' }"><a href="${basepath }/behavior/index.html?type=3">LPI测评</a></c:if>
                       <c:if test="${param.type == '4' }"><a href="${basepath }/survey/index.html?type=4">综合评估</a></c:if><%--
                  
                        <a href="${basepath }/survey/index.html?type=4">培训评估</a>
                    --%></li>
                    <li class="last">设置问题</li>
                </ul>
            </div>
            <div class="y"></div>
        </div> 
    </div>
    </div>
		<div class="content cl">
			<div class="ngreyborder changeblue2 mt20">
				<h2 class="png_bg">
					调查问题列表
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
						<form action="saveInquiryItemAsc.html" method="post">
							<input type="hidden" id="sId" name="sId" value="${sId}" />
							<input type="hidden" id="type" name="type" value="${param.type}" />
							<div>
								<div class="dataTables_wrapper">
									<div id="list_item"></div>
								</div>
								<div align="right" class="mr10">
									<c:if test="${bool!=true}">
									<input type="submit" class="step m10 vm" value="保存"/>
									</c:if>
									<input type=button value=关闭 class="back resourceDetailClose" />
									<%--<a href="${basepath }/survey/index.html?&type=${param.type}" class="back m10 vm">关闭</a>
								--%></div>
							</div>
						</form>
						<div class="hidden">
							<div class="basic_information mt20">
								<div>
									<div align="center" class="pt15">
										${itb.topic}
									</div>
									<div>
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
												<c:if test="${bool!=true}">
												<div class="z">
													<input id="icId" type="hidden" value="${listCategory.icId}"/>
													<a href="javascript:;" class="hidden change">编辑</a><a
														href="javascript:;" class="hidden addbigitem">增加大类</a>
													<a href="javascript:;" class="hidden del_listone">删除</a>
												</div>
												</c:if>
											</h3>
											<c:forEach items="${listCategory.items}" var="listItems"
												varStatus="st1">
												<dl class="mt10 editor">
													<dt class="reHeight">
														<div class="z">
															<label>${st1.count}</label>
															、
														</div>
														<div class="z w750">${listItems.question}</div>
														<c:if test="${bool!=true}">
														<div class="z">
															<input type="hidden" id="iiId" value="${listItems.siId}" />
															<a href="javascript:;" class="hidden edit">编辑</a><a
																href="javascript:;" class="hidden del_listtwo">删除</a>
														</div>
														</c:if>
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
																		<c:if test="${bool!=true}">
																		<div class="z">
																			<input type="hidden" id="iirId" value="${listReses.sirId}" />
																			<a href="javascript:;" class="nd hidden">删除</a>
																		</div>
																		</c:if>
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
																		<c:if test="${bool!=true}">
																		<div class="z">
																		<input type="hidden" id="iirId" value="${listReses.sirId}" />
																			<a href="javascript:;" class="nd hidden">删除</a>
																		</div>
																		</c:if>
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
																		<c:if test="${bool!=true}">
																		<div class="z">
																			<input type="hidden" id="iirId" value="${listReses.sirId}" />
																			<a href="javascript:;" class="nd hidden">删除</a>
																		</div>
																		</c:if>
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
													<c:if test="${bool!=true}">
														<a href="javascript:;"  class="newadditem hidden">增加一个选项</a>
														</c:if>
													</dd>
												</dl>
											</c:forEach>
											<dl class="mt20 editor2">
												<input name="" type="button" ${bool?'disabled':'' } class="newaddblock" value="增加一个问题" />
											</dl>
										</c:forEach>
									</div>
								</div>
							</div>
							<div align="right" class="mr10">
								<input type="button" value="关闭" class="back resourceDetailClose" />
								<%--<a href="${basepath }/survey/index.html?&type=${param.type}" class="back m10 vm">关闭</a>
							--%></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
		
		<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
		<script type="text/javascript" src="${basepath }/js/editor_1.js" charset="utf-8"></script>
		<script type="text/javascript" src="${basepath}/js/inquiry/inquiryitems.js" charset="gbk"></script>
	</body>
</html>
