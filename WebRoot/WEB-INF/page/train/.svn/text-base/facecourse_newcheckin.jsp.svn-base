<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>新建考勤情况</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
	<body class="bg">
		<form id="form1">
			<input type="hidden" id="importType" name="importType" value="trainCheckin" />
			<input type="hidden" id="objId" name="objId" value="${tcid}" />
		</form>
		<div class="blackall hidden"></div>

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
									<a href="${basepath }/trainclass/facecourse.html?tcid=${tcid}">面授管理</a>
								</li>
								<li class="last">
									新建考勤情况
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
						考勤情况
					</h2>
					<ul class="png_bg mt40">
						<li class="now">
							查询
						</li>
					</ul>
					<table border="0" cellspacing="50" cellpadding="50" class="ml20">
					<form id="query_form">
						<tr>
							<td width="100" style="vertical-align: top">
								考勤日期：
							</td>
							<td class="timemaker taL" colspan="3">
								<input type="hidden" id="query_checkin_date"
									value="${dateList[0] }" />
								<c:forEach var="d" items="${dateList }" varStatus="st">
									<a id="${d }" href="#"
										class="cls_choosedate mr10 ${st.index==0?'timechoosed':'' }">${d
										}</a>
								</c:forEach>
							</td>
						</tr>
						<tr>
							<td>
								员工编号：
							</td>
							<td width="200" class="taL">
								<input type="text" class="input" id="query_user_sn"
									style="border: 1px solid;" />
							</td>
							<td width="100">
								员工姓名：
							</td>
							<td class="taL">
								<input type="text" class="input" id="query_user_name"
									style="border: 1px solid;" />
							</td>
						</tr>
					</form>
					</table>
					<div align="right">
						<input id="btn_query" type="button" class="searchbutton m10" value="搜索" />
					</div>
					<div class="basic_information mt2">
						<div class="reHeight mr10">
							<p class="y">
								<a href="javascript:;" class="functionbutton leadin">导入</a>
								<a href="javascript:;" class="functionbutton leadout">导出</a>
							</p>
						</div>
					</div>
					<div id="list_newcheckin" class="dataTables_wrapper"
						style="margin-top: 3px"></div>
					<div align="right" class="mr10">
						<input type="button" value="保存" class="back ml30 vm" id="btn_save" />
						<a href="${basepath }/trainclass/facecourse.html?tcid=${tcid}"
							class="step m10">返回</a>
					</div>
				</div>
			</div>
		</div>
		<script type="text/javascript">
	var tcid = "${tcid}";
</script>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		<script type="text/javascript"
			src="${basepath }/js/train/checkin_new.js" charset="gbk"></script>
		<jsp:include page="/WEB-INF/page/include/upload.jsp"></jsp:include>
	</body>

</html>