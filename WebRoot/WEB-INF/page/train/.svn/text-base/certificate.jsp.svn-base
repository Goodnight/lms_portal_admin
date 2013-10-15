<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>证书发布</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
	<body class="bg">
		<div class="blackall hidden">
			&nbsp;
		</div>
		<form id="form1">
			<input type="hidden" id="importType" name="importType"
				value="trainDiplomaLevel" />
			<input type="hidden" id="objId" name="objId" value="${tcid}" />

		</form>
		

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
									${tc.name }
								</li>
								<li class="last">
									证书发布
								</li>
							</ul>
						</div>
						<div class="y"></div>
					</div>
				</div>
			</div>
			<div class="content">
				<ul class="window_nav">
					<li class="basic">
						<a href="information.html?tcid=${tcid }" class="green png_bg">基本信息</a>
					</li>
					<li class="course">
						<a href="course.html?tcid=${tcid }" class="green png_bg">课程设置</a>
					</li>
					<li class="person">
						<a href="staffing.html?tcid=${tcid }" class="green png_bg">人员设置</a>
					</li>
					<li class="sameclass">
						<a href="videoclass.html?tcid=${tcid }" class="green png_bg">同步课堂</a>
					</li>
					<li class="examadmin">
						<a href="examination.html?tcid=${tcid }" class="green png_bg">考试管理</a>
					</li>
					<li class="evaluate">
						<a href="estimate.html?tcid=${tcid }" class="green png_bg">评估设置</a>
					</li>
					<c:choose>
						<c:when test="${tc.way.name eq '在线' }">
							<li class="faceadmin">
								<a href="#" class="green png_bg">面授管理</a>
							</li>
						</c:when>
						<c:otherwise>
							<li class="faceadmin">
								<a href="facecourse.html?tcid=${tcid }" class="green png_bg">面授管理</a>
							</li>
						</c:otherwise>
					</c:choose>
					<li class="discuss">
						<a href="bbs.html?tcid=${tcid }" class="green png_bg">讨论区管理</a>
					</li>
					<li class="trainsta">
						<a href="statistics.html?tcid=${tcid }" class="green png_bg">培训统计</a>
					</li>
					<li class="certificate">
						<a href="certificate.html?tcid=${tcid }" class="png_bg">证书发布</a>
					</li>
				</ul>
				<div class="window sclassroom">
					<!-- 建设中提示 -->
			        <div style="text-align:center;font-size:20px" class="hidden">
			        	功能完善中，请等待...
			        </div>
					<div class="">
						<div class=" searchblock pl30 ml30 mt20" style="margin-bottom: 0">
							<form id="diploma_new"
								action="${basepath }/trainclass/diploma/save.html" method="post"
								enctype="multipart/form-data">
								<table border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td class="taR">
											证书编号
										</td>
										<td class="taL">
											<input id="sn" name="sn" type="text" class="input" />
											<input type="hidden" name="tcid" value="${tcid }" />
										</td>
									</tr>
									<tr>
										<td class="taR">
											证书名称
										</td>
										<td class="taL">
											<input id="name" name="name" type="text" class="input" />
										</td>
									</tr>
									<tr>
										<td class="taR">
											证书有效期
										</td>
										<td class="taL">
											<label class="autowidth">
												<span class="option"><input name="valid" type="radio"
														value="0" /> </span> 永久有效
											</label>
											<label class="autowidth">
												<span class="option choosed"><input name="valid"
														type="radio" value="1" checked="checked"/> </span> 选择日期
											</label>
											<input id="effective_date" name="effective_date" type="text"
												class="timetext cls_date" />
											<div id="effective_date_error"></div>
										</td>
									</tr>
									<tr>
										<td class="taR">
											选择模板
										</td>
										<td class="taL">
											<input id="image" name="image" type="file" />
										</td>
									</tr>
									<tr>
										<td class="taR"></td>
										<td class="taL">
											<input type="submit" class="searchbutton m10" value="新建证书" />
										</td>
									</tr>
								</table>
							</form>
						</div>
						<div>
							<div class="dataTables_wrapper">
								<h2>
									选择证书
								</h2>
								<div id="list_dip"></div>
							</div>
						</div>
						<div class="searchblock mt20">
							<table border="0" cellspacing="0" cellpadding="0" class="ml30">
								<tr>
									<td colspan="6" class="taL" style="font-size: 14px">
										查询
									</td>
								</tr>
								<tr>
									<td class="taR">
										员工编号
									</td>
									<td class="taL">
										<input id="search_sn" type="text" class="input" />
									</td>
									<td class="taR">
										员工姓名
									</td>
									<td class="taL">
										<input id="search_username" type="text" class="input" />
									</td>
									<td class="taR">
										发布状态
									</td>
									<td class="taL">
										<select id="search_status" class="select">
											<option value="">
												不限
											</option>
											<option value="1">
												发布
											</option>
											<option value="0">
												未发布
											</option>
										</select>
									</td>
								</tr>
							</table>
							<div class="taR">
								<input id="btn_search" type="button" class="searchbutton m10" value="搜索"
									hidefocus="true" />
							</div>
						</div>
						<div class="mr10 ml12 mt20 taR">
							<span> <a href="#" class="functionbutton" id="leadin">导入证书级别</a>
								<input type="button" id="publish"
									class="cls_publish functionbutton" value="发布证书" /> <input
									type="button" id="cancel" class="cls_publish functionbutton"
									value="取消发布" /> </span>
						</div>
						<div>
							<div class="dataTables_wrapper">
								<h2>
									学员列表
								</h2>
								<div id="list_user"></div>
							</div>
							<table border="0" cellspacing="0" cellpadding="0" class="mt4 ml20">
								<tr>
									<td>
										操作流程：
									</td>
									<td class="taL">
										第一步，为需要发放证书的员工选择级别，或导入证书级别
									</td>
								</tr>
								<tr>
									<td></td>
									<td class="taL">
										第二步，勾选需发布证书的员工
									</td>
								</tr>
								<tr>
									<td></td>
									<td class="taL">
										第三步，点击“发布证书”按钮，选择或导入证书模板，发布证书
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<div class="windowlast">
					<p>
						<input name="" type="button" class="step vm" value="上一步"
							hidefocus="true"
							onClick="location.href='statistics.html?tcid=${tcid}'" />
						<input name="" type="button" class="step vm cls_close_window" value="完成"
							hidefocus="true" onclick="javascript:;" />
						<a href="#" class="back ml30 vm allclose" hidefocus="true">关闭</a>
					</p>

				</div>
			</div>

		</div>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		<jsp:include page="/WEB-INF/page/include/upload.jsp"></jsp:include>
		<script type="text/javascript">
	$(function() {
		dipPage(1);
		userPage(1);

		$("#btn_search").click(function(){
			userPage(1);
		});

		$("#diploma_new").validate({
			rules : {
				sn : {
					required : true
				},
				name : {
					required : true
				},
				image : {
					required : true
				}
			},
			messages : {
				sn : "不能为空",
				name : "不能为空",
				image : "模板不能为空"
			}
		});
		
		$("#diploma_new").submit(function(){
			var valid = $("input[name=valid]:checked").val();
			var effective_date = $("#effective_date").val();
			if(valid=="1" && effective_date==""){
				$("#effective_date_error").html('<label style="width:100px" for="class_dep_id" generated="true" class="error">请选择有效日期</label>');
				return false;
			}
		});
		
		$(".btn_delete_diploma").live("click",function(){
			var dipid = $(this).attr("dipid");
			$.dialog.confirm("是否要删除？",function(){
				var url = basepath+"/trainclass/diploma/delete.html";
				$.ajax({
					url : url,
					type : "post",
					data : "dipId="+dipid,
					dataType : "json",
					success : function(data){
						if(data.code=="success"){
							dipPage(1);
						}else{
							$.dialog.alert("删除失败！");
						}
					},
					error:function(){
						$.dialog.alert("删除失败！");
					}
				});
			},function(){});
		});

		$(".cls_view_diploma").live("click", function() {
			var url = $(this).attr("url");
			$.dialog({
				lock : true,
				width : '700px',
				height : '500px',
				title : '证书模板',
				content : "<image src='"+url+"' width='650px'/>"
			});
		});

		$(".cls_publish").click(function() {
			var type = $(this).attr("id");
			var users = $("input[name=dipuser_id]:checked");
			if (users.length > 0) {
				$.dialog.confirm("确定要操作吗？",function(){
					var param = "";
					if ("publish" == type) {
						param += "&verify=1";
					} else {
						param += "&verify=0";
					}
					for (i = 0; i < users.length; i++) {
						if ($(users[i]).attr("level") != "") {
							param += "&uid=" + $(users[i]).val();
						}
					}
					var url = basepath + "/trainclass/diploma/publish.html";
					$.ajax({
						url : url,
						type : "post",
						data : param,
						dataType : "json",
						success : function(re) {
							userPage(1);
						},
						error : function() {
						}
					});
				},function(){});
			}else{
				$.dialog.alert("请选择学员！");
			}
		});

		//重写编辑事件
		$(".forsetup2").die();
		$(".forsetup2").live("click", function() {
			var verify = $(this).attr("verify");
			if (verify == "1") {
				$.dialog.alert("证书已经发布");
				return;
			}
			$(this).hide();
			$(this).prev().hide();
			$(this).next().show();
		});

		//重写选项确定事件
		$(".select_setup2 img")
				.live(
						"click",
						function() {
							var level = $(this).prev().val();
							var text = "";
							if (level == "1") {
								text = "优秀";
							}
							if (level == "2") {
								text = "良好";
							}
							if (level == "3") {
								text = "一般";
							}
							if(level == ""){
								text = "无证书";
							}
							$(this).parent().prev().prev().text(text);
							$(this).parent().hide();
							$(this).parent().prev().show();
							$(this).parent().prev().prev().show();

							//提交数据
							var url = basepath
									+ "/trainclass/diplomauser/update.html";
							var tcpid = $(this).attr("id");
							var student_id = $(this).attr("student_id");
							var did = $("input[name=diploma_id]:checked").val();
							if (level!=""&&(did == null || did == "")) {
								$.dialog.alert("请选择证书");
								return;
							}
							if(level == ""){
								did = "";
							}
							$.ajax({
								url : url,
								type : "post",
								data : "student_id=" + student_id
										+ "&tc_id=${tcid}&tcpId=" + tcpid
										+ "&diploma_id=" + did + "&level="
										+ level,
								dataType : "json",
								success : function(re) {
									userPage(1);
								},
								error : function() {
								}
							});
						});
	});

	function dipPage(i) {
		$.dialog.tips('数据加载中...', 600, 'loading.gif');
		var max = $("#list_dip .page_max").val() ? $("#list_dip .page_max").val() : 10;
		var url = basepath
				+ "/trainclass/diploma/list.html?pagefn=dipPage&page=" + i
				+ "&max=" + max + "&r=" + Math.random();
		$("#list_dip").load(encodeURI(url), function() {
			$.dialog.tips('数据加载完毕', 1, 'tips.gif');
			$("#list_dip .page_max").change(function() {
				dipPage(1);
			});
		});
	}

	function userPage(i) {
		$.dialog.tips('数据加载中...', 600, 'loading.gif');
		var max = $("#list_user .page_max").val() ? $("#list_user .page_max").val() : 10;
		var sn = $("#search_sn").val();
		var username = $("#search_username").val();
		var status = $("#search_status").val();
		var query = "";
		if(sn!=""){
			query+="&sn="+sn;
		}
		if(username!=""){
			query+="&username="+username;
		}
		if(status!=""){
			query+="&status="+status;
		}
		var url = basepath
				+ "/trainclass/diplomauser/list.html?pagefn=userPage&page="
				+ i + "&max=" + max + "&tcid=${tcid}&r=" + Math.random();
		$("#list_user").load(encodeURI(url+query), function() {
			$.dialog.tips('数据加载完毕', 1, 'tips.gif');
			bindChooseAll("cls_chooseall");
			$("#list_user .page_max").change(function() {
				userPage(1);
			});
		});
		
	}
	function init(){
		dipPage(1);
		userPage(1);
	}
</script>
	</body>

</html>






