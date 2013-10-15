<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>无标题文档</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
	<div class="ngreyborder changeblue2 mt20">
		<h2 class="png_bg">行为柱状图</h2>
		<div class="courseupload pt15">
			<div>
				<div class="dataTables_wrapper mt10" style="padding-bottom: 0">
					<table class="datatable" width="100%">
						<thead>
						</thead>
						<tbody>
							<c:forEach var="list" items="${list }">
								<tr class="gradeA odd">
									<td rowspan="6" align="left" width="20%">${list.name}<br />总题数：${list.totalTopic} 
									</td>
									<td width="20%">总量：${list.totalScore} </td>
									<td></td>
								</tr>
								<tr class="gradeA even">
									<td>S分数：${list.selfScore }</td>
									<td class="taL pl10"><span class="voteunit2"><em
											style="width: ${list.selfScore/list.totalScore*100}%"><label>&nbsp;</label></em></span></td>
								</tr>
								<tr class="gradeA odd">
									<td>M分数：${list.mAvgScore}</td>
									<td class="taL pl10"><span class="voteunit2"><em
											style="width: ${list.mAvgScore/list.totalScore*100}%"><label>&nbsp;</label></em></span></td>
								</tr>
								<tr class="gradeA even">
									<td>D分数：${list.dAvgScore}</td>
									<td class="taL pl10"><span class="voteunit2"><em
											style="width: ${list.dAvgScore/list.totalScore*100}%"><label>&nbsp;</label></em></span></td>
								</tr>
								<tr class="gradeA odd">
									<td>C分数：${list.cAvgScore}</td>
									<td class="taL pl10"><span class="voteunit2"><em
											style="width: ${list.cAvgScore/list.totalScore*100}%"><label>&nbsp;</label></em></span></td>
								</tr>
								<tr class="gradeA even">
									<td>O分数：${list.oAvgScore}</td>
									<td class="taL pl10"><span class="voteunit2"><em
											style="width: ${list.oAvgScore/list.totalScore*100}%"><label>&nbsp;</label></em></span></td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	<p class="mt10">注：M：上级，S：自己，C：同事，D：下级，O：其他。</p>
	<jsp:include page="/WEB-INF/page/include/script.jsp" />
</body>
</html>












