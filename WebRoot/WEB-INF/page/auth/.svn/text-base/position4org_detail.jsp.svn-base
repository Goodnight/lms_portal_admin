<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/page/include/taglibs.jsp"%>
<jsp:include page="/WEB-INF/page/include/uploadOrUpdate.jsp"></jsp:include>
<div style="margin: 5px">
	<div class="ngreyborder changeblue2">
		<h2 class="png_bg">
			<c:choose>
				<c:when test="${type eq 'eth' }">省岗位族群</c:when>
				<c:otherwise>省岗位</c:otherwise>
			</c:choose>
		</h2>
		<div class="basic_information mt10">
			<table border="0" cellspacing="15" cellpadding="15">
				<colgroup>
					<col width="100" />
				</colgroup>
				<tbody>
					<tr>
						<td>编号</td>
						<td>${post.sn }</td>
					</tr>
					<tr>
						<td>名称</td>
						<td>${post.name }</td>
					</tr>
					<c:choose>
						<c:when test="${type eq 'eth' }">
							<tr>
								<td>岗位标识</td>
								<td>${post.postID.name }</td>
							</tr>
							<tr>
								<td>工作特性</td>
								<td>${post.describes }</td>
							</tr>
						</c:when>
						<c:otherwise>
							<tr>
								<td>基准岗位</td>
								<td>${post.position.name }</td>
							</tr>
							<tr>
								<td>层级</td>
								<td>${post.level.name }</td>
							</tr>
						</c:otherwise>
					</c:choose>

				</tbody>
			</table>
			<c:if test="${type eq 'pos' }">
				<h3>职责/角色描述</h3>
				<table cellspacing="15" cellpadding="15" border="0">
					<tr>
						<td>${post.describes }</td>
					</tr>
				</table>
				<h3>岗位标识</h3>
				<table cellspacing="15" cellpadding="15" border="0">
					<tr>
						<td>${post.postID.name }</td>
					</tr>
				</table>
				<h3>基本任职条件</h3>
				<table cellspacing="15" cellpadding="15" border="0">
					<tr>
						<td>${post.require_basic }</td>
					</tr>
				</table>
				<h3>关键任职条件</h3>
				<table cellspacing="15" cellpadding="15" border="0">
					<tr>
						<td>${post.require_critical }</td>
					</tr>
				</table>
			</c:if>
		</div>
	</div>
</div>

<div align="right">
	<c:if
		test="${sessionScope.user.type == 1 || sessionScope.user.type == 2 }">
		<form id="form1">
			<c:choose>
				<c:when test="${type eq 'eth' }">
					<a
						href="${basepath }/position4org/new.html?type=eth&upid=${post.poId}&orgid=${post.org.orgId}"
						class="step m10">新建族群</a>
					<a
						href="${basepath }/position4org/new.html?type=pos&upid=${post.poId}&orgid=${post.org.orgId}"
						class="step m10">新建岗位</a>
					<a
						href="${basepath }/position4org/update.html?type=eth&pid=${post.poId}"
						class="step m10">修改</a>
					<c:if test="${isLeaf == false}">
					<a id="btn_delete" href="javascript:;"
						class="step m10">删除</a>
					</c:if>
					<a href="#" class="step m10" id="leadin" onclick="changeImportType('addBlocEthnicGroup')">导入族群</a>
					<a href="#" class="step m10" id="leadin" onclick="changeImportType('addBlocPosition')">导入岗位</a>
					<a href="#" class="step m10" onclick="export_ethnicGroup(${post.poId})">导出族群</a>
					<a href="#" class="step m10" onclick="export_position(${post.poId})">导出岗位</a>
					<input type="hidden" id="importType" name="importType"
						value="blocEthnicGroup" />
					<input type="hidden" id="objId" name="objId" value="${post.poId}" />
				</c:when>
				<c:otherwise>
					<a
						href="${basepath }/position4org/new.html?type=pos&upid=${post.poId}&orgid=${post.org.orgId}"
						class="step m10">新建</a>
					<a
						href="${basepath }/position4org/update.html?type=pos&pid=${post.poId}"
						class="step m10">修改</a>
					<a id="btn_delete" href="javascript:;"
						class="step m10">删除</a>
					<a href="#" class="step m10" onclick="export_position(${post.poId})">导出岗位</a>
					<input type="hidden" id="importType" name="importType"
						value="position" />
					<input type="hidden" id="objId" name="objId" value="${post.poId}" />
				</c:otherwise>
			</c:choose>
		</form>
	</c:if>
</div>
<script type="text/javascript">

	$(function(){
		$("#btn_delete").click(function(){
			$.dialog.confirm("确定要删除选项吗？",function(){
				$.get(encodeURI("${basepath }/position4org/delete.html?pid=${post.poId}"), function(date){
						 if(date==null ||date==""){
							 alert("删除失败");
						 }else if(date=="error_user"){
							 alert("此岗位下有用户关联无法删除!");
						 }else if(date=="error_exm"){
							 alert("此岗位下有岗位认证等级无法删除!");
						 }else{
							 location.href="${basepath }/position4org/manage.html";
						 }
				});
			},function(){});
		});
	});
	
	
</script>
<script type="text/javascript" src="${basepath }/js/function.js" charset="gbk"></script>
<script type="text/javascript" src="${basepath }/js/activity.js" charset="gbk"></script>
