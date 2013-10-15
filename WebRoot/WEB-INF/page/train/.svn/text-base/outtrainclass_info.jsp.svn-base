<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

<div>
	<div class="ngreyborder h470">
		<h2 class="png_bg">培训信息</h2>
		<div class="scroll h400 mt20">
			<div class="searchblock m10">
				<table>
					<tr>
						<td class="taR">培训班名称</td>
						<td class="taL">${tc.name }</td>
					</tr>
					<tr>
						<td class="taR">员工姓名</td>
						<td class="taL"><input id="search_username" type="text"
							class="input" /> <input id="search_tcid" type="hidden"
							value="${tc.tcId }"></td>
						<td class="taR">员工编号</td>
						<td class="taL"><input id="search_usersn" type="text"
							class="input" /></td>
						<td><input id="btn_search" type="button"
							class="searchbutton mr10" value="搜索" hidefocus="true" /></td>
					</tr>
				</table>
			</div>
			<h3 class="reHeight mr10 mt20">
				<div class="y">
					<a href="#" class="functionbutton" id="outTrainInfo">导入</a><a
					href="javascript:;" class="functionbutton" onclick="exportStudentst()" >导出</a>
				</div>
			</h3>
			<div></div>
			<div id="list_trainclassinfo" class="dataTables_wrapper mt10"></div>

		</div>
		<div class="taR m10">
			<input type="button"  class="step mr10 vm save_ok"  value="保存"/>
			<a href="#" class="step mr10  cls_ok">确定</a>
		</div>
	</div>
</div>

<script type="text/javascript">
	$("#outTrainInfo").live("click",function() {
		var tcid = $("#objId").val();
		var url = basepath+ "/trainclass/exportOutTrainUserInfoTemplet.html?tcid="+ tcid + "&r=" + Math.random();
		$("#downLoad").attr("href", url);
		$(".blackall").show();
		$("#dialog").hide();
		$("#leadinco").show();
	});

	$(function() {
		pageInfo(1);

		$(".cls_ok").click(function() {
			$("#dialog").hide();
		});
		$(".save_ok").click(function() {
			ajaxSave();
		});
	});

	$("#btn_search").click(function() {
		pageInfo(1);
	});

	function pageInfo(i) {
		$.dialog.tips('数据加载中...', 600, 'loading.gif');
		var max = $("#list_trainclassinfo .page_max").val() ? $(
				"#list_trainclassinfo .page_max").val() : 10;
		var tcid = $("#search_tcid").val();
		var username = $("#search_username").val();
		var usersn = $("#search_usersn").val();
		var query = "";
		if (tcid != "") {
			query += "&tcid=" + tcid;
		}
		if (username != "") {
			query += "&user_name=" + username;
		}
		if (usersn != "") {
			query += "&user_sn=" + usersn;
		}
		var url = basepath
				+ "/list/outtrainclass/info.html?pagefn=pageInfo&page=" + i
				+ "&max=" + max + "&r=" + Math.random();
		$("#list_trainclassinfo").load(encodeURI(url + query), function() {
			bindChooseAll("cls_chooseall_out");
			$.dialog.tips('数据加载完毕', 1, 'tips.gif');
			$("#list_trainclassinfo .page_max").change(function() {
				pageInfo(1);
			});
		});
	}
	
	
    function exportStudentst(){
		
    	$("#dialog").hide();
		loadingStart();
		var tcid = $("#search_tcid").val();
		var username = $("#search_username").val();
		var usersn = $("#search_usersn").val();
		var query = "";
		if (tcid != "") {
			query += "&tcid=" + tcid;
		}
		if (username != "") {
			query += "&user_name=" + username;
		}
		if (usersn != "") {
			query += "&user_sn=" + usersn;
		}
		
		var countUrl = basepath + "/dispatchtrainclass/exportStudentCount.html?r="+Math.random();
		var listUrl = basepath + "/dispatchtrainclass/exportStudentList.html?r="+Math.random();
		postCount(encodeURI(countUrl+query),encodeURI(listUrl+query));
	}
	function ajaxSave(){
		var url = basepath + "/trainclass/budget/save.html";
		if($("#list_trainclassinfo input[name='id']").length>0){
			var objs = $("#list_trainclassinfo input[name='score'],#list_trainclassinfo input[name='budgetTrain'],#list_trainclassinfo input[name='budgetBoard'],#list_trainclassinfo input[name='budgetOther']");
			for(i=0;i<objs.length;i++){
				if(isNaN($(objs[i]).val())){
					$.dialog.alert("请输入数字格式");
					$(objs[i]).attr("style","color:red");
					$(objs[i]).focus();
					return false;
				}else{
					$(objs[i]).attr("style","");
				}
			}
			var param = $.param($("#list_trainclassinfo input[name='id']"))
			+"&"+$.param($("#list_trainclassinfo input[name='score']"))
			+"&"+$.param($("#list_trainclassinfo input[name='examLevel']"))
			+"&"+$.param($("#list_trainclassinfo input[name='budgetTrain']"))
			+"&"+$.param($("#list_trainclassinfo input[name='budgetBoard']"))
			+"&"+$.param($("#list_trainclassinfo input[name='budgetOther']"))
			+"&"+$.param($("#list_trainclassinfo input:checkbox[name=extraTrain]:checked"));
			$.dialog.tips('数据加载中.....',30,'loading.gif');
			$.ajax({
				url : url,
				async : false,
				type : "post",
				data : param,
				dataType : "json",
				success : function(re){
					$.dialog.tips('数据保存成功',2,'tips.gif');
				},
				error : function(){
					$.dialog.tips('数据保存失败',2,'tips.gif');
				}
			});
		}
	}
    
    
</script>