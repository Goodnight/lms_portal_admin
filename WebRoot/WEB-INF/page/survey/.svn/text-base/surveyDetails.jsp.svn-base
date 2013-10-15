<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>综合结果明细</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
	<jsp:include page="/WEB-INF/page/include/downloadData.jsp"></jsp:include>
	<div id="dialog" class="hidden">
		<div class="blackall">&nbsp;</div>
		<!-- 半透明背景 -->
		<div class="newwindow" id="choosepersonco">
			<!-- 关闭按钮 -->
			<div class="taR">
				<a href="javascript:;"><img class="png_bg closed"
					src="${basepath }/images/close.png" width="40" height="40" /></a>
			</div>
			<!-- 对话框内容 -->
			<div id="dialog_content" class="cl scroll"></div>
		</div>
	</div>
	<div class="container">
		<jsp:include page="/WEB-INF/page/include/header.jsp" />
		<div class="breadCrumbHolder breadCrumbPage">
			<div class="headerco">
				<div class="breadCrumb reHeight noborder" id="breadCrumb3">
					<div class="z">
						<ul>
							<li class="first"><a href="#">首页</a></li>
							<c:if test="${report == 'response' }">
								<li><a href="${basepath}/survey/index.html?type=1">反应层评估</a></li>
							</c:if>
							<c:if test="${report == 'behavior' }">
								<li><a href="${basepath}/behavior/index.html?type=2">行为层评估</a></li>
							</c:if>
							<c:if test="${report == 'comprehensive' }">
								<li><a href="${basepath}/survey/index.html?type=4">综合层评估</a></li>
							</c:if>
							<c:if test="${report == 'inquiry' }">
								<li><a href="${basepath}/inquiry/inquiryIndex.html">培训需求</a></li>
							</c:if>
							<li>${reportInfoBo.topic }</li>
							<c:if test="${report == 'behavior' }">
								<li class="last">综合结果明细</li>
							</c:if>
							<c:if test="${report != 'behavior' }">
								<li class="last">结果明细</li>
							</c:if>
						</ul>
					</div>
					<div class="y"></div>
				</div>
			</div>
		</div>
		<div class="content mt10">
			<div>
				<div>
					<div class="main pl0">
						<c:if test="${report == 'behavior' }">
							<ul style="width: 100%; margin-bottom: 0" class="dpnav2 reHeight">
								<li <c:if test="${relation eq '0' }"> class="now" </c:if>><a
									href="${basepath}/survey/result/report.html?report=behavior&surveyId=${surveyId }&relation=0">上级评估结果明细</a></li>
								<li <c:if test="${relation eq '1' }"> class="now" </c:if>><a
									href="${basepath}/survey/result/report.html?report=behavior&surveyId=${surveyId }&relation=1">平级评估结果明细</a></li>
								<li <c:if test="${relation eq '4' }"> class="now" </c:if>><a
									href="${basepath}/survey/result/report.html?report=behavior&surveyId=${surveyId }&relation=4">本人评估结果明细</a></li>
								<li <c:if test="${relation eq '2' }"> class="now" </c:if>><a
									href="${basepath}/survey/result/report.html?report=behavior&surveyId=${surveyId }&relation=2">下级评估结果明细</a></li>
								<li <c:if test="${relation eq '3' }"> class="now" </c:if>><a
									href="${basepath}/survey/result/report.html?report=behavior&surveyId=${surveyId }&relation=3">"其他"人员评估结果明细</a></li>
							</ul>
						</c:if>
						<div class="mainco">
							<div class="classlist vote">
								<div align="center" class="pt15">
									${reportInfoBo.topic }
									<!--由反应层评估结果跳转过来，标题改为反映层评估结果明细-->
								</div>
								<c:forEach var="sc" items="${reportInfoBo.reportCategories}">
									<h3>
										${sc.number }、${sc.name }
										<c:if test="${sc.avgFlag == '1'}">
											<span class="ml13">（平均分：<fmt:formatNumber
													value="${sc.avgScore }" pattern="##.##"></fmt:formatNumber>分）
											</span>
										</c:if>
									</h3>
									<c:forEach var="items" items="${sc.reportItems }">
										<dl>
											<dt>
												${items.number }、${items.question }
												<c:if test="${items.type == 3 }">
													<span class="ml13">（平均分：<fmt:formatNumber
															value="${items.avgScore }" pattern="##.##"></fmt:formatNumber>分）
													</span>
												</c:if>
											</dt>
											<c:if test="${items.type != 4}">
												<c:forEach var="reses" items="${items.reportItemRes }"
													varStatus="st">
													<dd <c:if test="${st.index%2==0}">class="grey "</c:if>>
														<span class="z">${reses.opt}、 ${reses.answer} <c:if
																test="${items.type == 3}">（${reses.score}分）</c:if></span> <span
															class="y voteunit"> <c:if
																test="${reses.percentage<=0.859}">
																<em><label style="width:${reses.percentage*442}px"><fmt:formatNumber
																			type="number" value="${reses.percentage*100}"
																			pattern="###" />%</label><i
																	style="font-style: normal; margin-left: 20px"><a class="groupadd" id="${reses.sirIds}" href="javascript:;">${reses.vote}票</a></i></em>
															</c:if> <c:if test="${reses.percentage>0.859}">
																<em><label style="width:${reses.percentage*442}px"><fmt:formatNumber
																			type="number" value="${reses.percentage*100}"
																			pattern="###" />% <i
																		style="font-style: normal; margin-left: 20px"><a class="groupadd" id="${reses.sirIds}" href="javascript:;">${reses.vote}票</a></i></label>
																</em>
															</c:if>
														</span>
													</dd>
												</c:forEach>
											</c:if>
											<c:if test="${items.type == 4}">
												<dd>
													答案：<a id="${items.item_siId }" href="#" class="viewDetail">明细</a>
													<a id="${items.item_siId }" name="${items.question }"
														href="#" class="viewCollect">汇总</a>
												</dd>
											</c:if>
										</dl>
									</c:forEach>
								</c:forEach>
								<div class="taR m10">
									<input type="button" class="step longstep"
										onclick="exportStatisticsResult('${surveyId }','${relation }','${userid }')" value="导出结果" /> <input
										type="button" class="step longstep"
										onclick="exportStatisticsAvgScore('${surveyId }','${relation }','${userid }')" value="导出平均分" /> <input
										type="button" class="back resourceDetailClose" value="关闭" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="hidden" id="dialoges">
			<!-- 半透明背景 -->
			<div class="newwindow" id="choosepersoncos">
				<!-- 关闭按钮 -->
				<div class="taR">
					<a href="javascript:;"><img class="closed"
							src="${basepath }/images/close.png" width="40" height="40" /> </a>
				</div>
				<!-- 对话框内容 -->
				<div id="dialog_contents" class="cl"></div>
				 <div align="right" class="mr3 mt3"><a href="javascript:;" class="back windowbutton vm">关闭</a></div>
			</div>
		</div>
	<jsp:include page="/WEB-INF/page/include/script.jsp" />
	<script type="text/javascript">
		$(".viewDetail").click(
				function() {
					var url = basepath
							+ "/dialog/surveyRemarkDetail.html?siId="
							+ $(this).attr("id");
					$("#dialog_content").load(url);
					$("#dialog,#dialog .newwindow,#dialog .blackall").show();

				});

		$(".viewCollect").click(
				function() {
					var url = basepath
							+ "/dialog/surveyRemarkCollect.html?siId="
							+ $(this).attr("id");
					$("#dialog_content").load(url);
					$("#dialog,#dialog .newwindow,#dialog .blackall").show();

				});

		function exportStatisticsResult(surveyId, relation, userid) {

			loadingDataStart();
			var listUrl = basepath
					+ "/survey/exportStatisticsResult.html?surveyId="
					+ surveyId + "&relation=" + relation + "&userid=" + userid;
			postDataList(encodeURI(listUrl));
		}

		function exportStatisticsAvgScore(surveyId, relation, userid) {

			loadingDataStart();
			var listUrl = basepath
					+ "/survey/exportStatisticsAvgScore.html?surveyId="
					+ surveyId + "&relation=" + relation + "&userid=" + userid;
			postDataList(encodeURI(listUrl));
		}
		
		$(".groupadd").click(
				function() {
					var sirId = $(this).attr("id");
					windowkey = true;
					$(".blackall").show();
					var url = basepath + "/survey/toReportRes.html?sirId=" + sirId + "&r=" + Math.random();
					$("#dialog_contents").load(encodeURI(url));
					$("#dialoges").show();
					$("#choosepersoncos").show();

				});
	</script>
</body>
</html>






