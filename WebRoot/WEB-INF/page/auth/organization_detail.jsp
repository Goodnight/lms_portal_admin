<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<form id="form1">
	<input type="hidden" id="importType" name="importType"
		value="addOrganization" />
	<input type="hidden" id="objId" name="objId" value="${org.orgId }" />
	<input type="hidden" id="objId" name="objId" value="${org.type }" />
	<input type="hidden" id="type" name="type" value="${org.type}" />
</form>
<div style="margin: 5px">
	<div class="ngreyborder changeblue2">
		<h2 class="png_bg">
			机构管理
		</h2>
		<div class="basic_information mt10">
			<table border="0" cellspacing="15" cellpadding="15">
				<colgroup>
					<col width="100" />
				</colgroup>
				<tbody>
					<tr>
						<td>
							机构类型
						</td>
						<td>
							<c:choose>
								<c:when test="${org.type==1 }">部门</c:when>
								<c:otherwise>公司</c:otherwise>
							</c:choose>
						</td>
					</tr>
					<tr>
						<td>
							编号
						</td>
						<td>
							${org.sn }
						</td>
					</tr>
					<tr>
						<td>
							名称
						</td>
						<td>
							${org.name }
						</td>
					</tr>
					<tr>
						<td>
							员工总数
						</td>
						<td>
							${org.employeeTotal }
						</td>
					</tr>
					<!-- <tr>
						<td>
							是否有子机构
						</td>
						<td></td>
					</tr> -->
					<c:if test="${org.type != '1' }"> <!-- 20130411 当不是部门时显示简称(因为新建部门是简称不可填) by LTC -->
					<tr>
						<td>
							简称
						</td>
						<td>
							${org.shortName }
						</td>
					</tr>
					</c:if>
					<tr>
						<td>
							通讯地址
						</td>
						<td>
							${org.address }
						</td>
					</tr>
					<tr>
						<td>
							电话
						</td>
						<td>
							${org.tel }
						</td>
					</tr>
					<tr>
						<td>
							传真
						</td>
						<td>
							${org.fax }
						</td>
					</tr>
					<tr>
						<td>
							邮编
						</td>
						<td>
							${org.zipCode }
						</td>
					</tr>
					<tr>
						<td>
							联系人
						</td>
						<td>
							${org.linkMan }
						</td>
					</tr>
					<tr>
						<td>
							备注
						</td>
						<td>
							${org.remark }
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>

<div align="right">
	<a href="${basepath }/organization/new.html?upid=${org.orgId }"
		class="step m10">新建</a>
	<a href="${basepath }/organization/update.html?orgid=${org.orgId }"
		class="step m10">修改</a>
	<c:if test="${org.leaf == true}">
		<c:if test="${org.employeeTotal == 0}">
		<a id="btn_delete" href="javascript:;"
		class="step m10">删除</a>
		</c:if>
	</c:if>
	<a href="javascript:;" class="step m10 leadin">导入</a>
	<a href="javascript:;" class="step m10" id="chooseleadout">导出</a>
</div>
<jsp:include page="/WEB-INF/page/include/uploadOrUpdate.jsp"></jsp:include>
<jsp:include page="/WEB-INF/page/include/download.jsp"></jsp:include>
<script type="text/javascript">
	$(function(){
		$("#btn_delete").click(function(){
			$.dialog.confirm("确定要删除选项吗？",function(){
				$.get(encodeURI("${basepath }/organization/delete.html?orgid=${org.orgId }"), function(date){
					if(date==null || date ==""){
						 alert("删除失败!");
					}else{
						 location.href="${basepath }/organization/manage.html";
					}
				});
			},function(){});
		});
	});
</script>