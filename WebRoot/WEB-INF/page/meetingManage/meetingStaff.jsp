<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>新建会议 - 安排人员</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>
<body class="bg">
	<form id="form1">
		<input type="hidden" id="importType" name="importType"
			value="meetingUser" /> <input type="hidden" id="objId" name="objId"
			value="${mb.mId }" /> <input type="hidden" id="objId" name="objId"
			class="objId" /> 
	</form>
	<div class="blackall hidden">&nbsp;</div>
	<!-- 对话框 -->
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
			<div id="dialog_content" class="cl"></div>
		</div>
	</div>
	<div class="container">
		<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
		<div class="breadCrumbHolder breadCrumbPage">
			<div class="headerco">
				<div class="breadCrumb reHeight noborder" id="breadCrumb3">
					<div class="z">
						<ul>
							<li class="first"><a href="${basepath }/index.html">首页</a></li>
							<li><a
								href="${basepath }/meetingManage/meetingManageList.html">会议管理</a>
							</li>
							<li class="last">安排人员 - ${mb.name }</li>
						</ul>
					</div>
					<div class="y"></div>
				</div>
			</div>
		</div>
		<div class="content cl">
			<div class="ngreyborder changeblue2 mt10">
				<h2 class="png_bg">新建会议 - 安排人员</h2>
				<div class="courseupload">
					<ul class="window_nav newnav"
						style="margin-top: -10px; # margin-top: 20px;">
						<li class="basic"><a href="meetingInfo.html?mId=${mb.mId }"
							class="green png_bg">基本信息</a></li>
						<li class="course"><a href="#" class="png_bg">安排人员</a></li>
					</ul>
					<div class="mt60 newsearch" style="padding-top: 30px">
						<input id="page_mId" type="hidden" value="${mb.mId }" />
						<div class="ml20">
							<label class="ml30 mr10">员工编号： <input name="sn"
								type="text" class="inputtext" id="snId" /></label> <label
								class="ml13 mr10">员工姓名： <input name="name" type="text"
								class="inputtext" id="nameId" /></label> <input id="searchButton"
								class="searchbutton ml30" type="button" value="搜索" />
						</div>
					</div>
					<div class="taR mr10 mt20" style="border: 0;">
						<a id="selectStaff" href="javascript:;"
							class="functionbutton">添加</a> <a href="javascript:;"
							class="functionbutton" id="leadin">导入</a> <a href="javascript:;"
							class="functionbutton" id="deleteStaff">删除</a>
					</div>
					<div class="dataTables_wrapper" style="padding-bottom: 0">
						<!-- 会议安排人员列表 -->
						<div id="list_mtstafflist"></div>
					</div>
					<div align="right" class="mr10">
						<a href="meetingManageList.html" class="step m10 vm">关闭</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<input id="maxAtt" name="maxAtt" type="hidden" value="${mb.maxAttend }"/>
	<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
	<script type="text/javascript">
		var pid = "${mb.mId}";
		var userurl = basepath + "/meetingManage/saveStaff.html";
		$(function() {
			$("#orgDepTree").jstree({
				"plugins" : [ "themes", "json_data", "types", "ui" ],
				"json_data" : {
					"ajax" : {
						"url" : basepath + "/list/org4jstree.html",
						"cache" : false,
						"data" : function(n) {
							return {
								"operation" : "",
								"id" : n.attr ? n.attr("id") : 0
							};
						}
					}
				},
				"types" : {
					"types" : {
						"pos" : {
							"valid_children" : "none",
							"icon" : {
								"image" : basepath + "/images/file.png"
							}
						},
						"dep" : {
							"valid_children" : "none",
							"icon" : {
								"image" : basepath + "/images/file.png"
							}
						}
					}
				},
				"ui" : {
					"initially_select" : userdepid
				},
				"core" : {
					"initially_open" : userdeppath
				}
			}).bind("select_node.jstree", function(e, data) {
				var id = data.rslt.obj.attr("id");
				var type = data.rslt.obj.attr("type");
				var name = data.rslt.obj.attr("name");
				orgClick(type, id, name);
			});

			$(".ui_close").live('click', function() {
				page(1);
				parent.closedialog();
			});
		});
	</script>
	<script type="text/javascript" src="${basepath }/js/meeting/staff.js"
		charset="gbk"></script>
	<jsp:include page="/WEB-INF/page/include/upload.jsp"></jsp:include>
</body>
</html>
