<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<thead>
		<tr>
			<th width="30"><input name="" type="checkbox" value=""
				class="checkbox cls_checkbox cls_chooseall" /></th>
			<th width="100">案例编号</th>
			<th class="sorting" width="240">案例名称</th>
			<th class="sorting" width="180">创建公司</th>
			<th class="sorting" width="70">状态</th>
			<th class="sorting" width="70">浏览</th>
			<th class="sorting" width="70">下载</th>
			<th class="sorting" width="70">分享</th>
			<th class="sorting" width="70">评论</th>
			<th class="sorting" width="70">公开</th>
			<th class="sorting" width="70">预览</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach items="${caseDocList.data }" var="caseDoc" varStatus="st">
			<tr
				class='<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>'>
				<td><input name="groupTypeId" type="checkbox"
					value="${caseDoc.dId }"
					class="checkbox cls_checkbox cls_chooseitem" />
					<input id="elite${caseDoc.dId }" name="elite" type="hidden" value="${caseDoc.res.elite }"/>
					<input id="contain${caseDoc.dId}" name="contain" type="hidden" value="${fn:contains(caseDoc.res.org.idPath, sessionScope.defaultOrg.orgId)}"><!-- 当前用户可以删除的记录是记录的机构属于用户的机构,其它情况不允许删除 -->
					</td>
				<td>${caseDoc.res.sn}</td>
				<td><a
					href="${basepath }/case/caseDocDetails.html?dId=${caseDoc.dId}&rpId=${caseDoc.res.rbId}&sn=${caseDoc.res.sn}"
					target="_blank" title="${caseDoc.res.sn}">${caseDoc.res.name }</a></td>
				<td id="${caseDoc.res.org.orgId }" onmousemove="showOrg(this)"
					title="12345">${caseDoc.res.org.name}</td>
				<td>  
					<!-- user.type 1:集团管理员,2:省管理员,3:市管理员,4:部门管理员,5:本地网管理员 --> 
					<!-- fn:contains(cou.res.org.idPath, sessionScope.defaultOrg.orgId)，当前记录的idPath包含有当前用户默认权限的orgId，则有编辑status的权限. -->
					<c:if
						test="${sessionScope.user.type == 1}">
						<c:if test="${caseDoc.res.org.level==sessionScope.user.type}">
						<c:if test="${caseDoc.res.status==0}">
							<label id="label${caseDoc.dId }" class="forsetup">未发布</label>
						</c:if>
						<c:if test="${caseDoc.res.status==1}">
							<label id="label${caseDoc.dId }" class="forsetup">已发布</label>
						</c:if>
						<c:if test="${caseDoc.res.status==2}">
							<label id="label${caseDoc.dId }" class="forsetup">已提交</label>
						</c:if>
						<c:if test="${caseDoc.res.status==3}"> 
							<label id="label${caseDoc.dId }" class="forsetup">省不批准</label>
						</c:if>
						</c:if>
						<c:if test="${caseDoc.res.org.level!=sessionScope.user.type}">
							<c:if test="${caseDoc.res.status==0}">
								<label id="label${caseDoc.dId }">未发布</label>
							</c:if>
							<c:if test="${caseDoc.res.status==1}">
								<label id="label${caseDoc.dId }">已发布</label>
							</c:if>
							<c:if test="${caseDoc.res.status==2}">
								<label id="label${caseDoc.dId }">已提交</label>
							</c:if>
							<c:if test="${caseDoc.res.status==3}">
								<label id="label${caseDoc.dId }">省不批准</label>
							</c:if>
						</c:if>
					</c:if>
					 <c:if
						test="${(sessionScope.user.type == 2 || sessionScope.user.type == 3)}">
						<c:if test="${fn:contains(caseDoc.res.org.idPath, sessionScope.defaultOrg.orgId) && caseDoc.res.org.level>=sessionScope.user.type }">
							<c:if test="${caseDoc.res.status==0}">
								<label id="label${caseDoc.dId }" class="forsetup">未发布</label>
							</c:if>
							<c:if test="${caseDoc.res.status==1}">
								<label id="label${caseDoc.dId }" class="forsetup">已发布</label>
							</c:if>
							<c:if test="${caseDoc.res.status==2}">
								<label id="label${caseDoc.dId }" class="forsetup">已提交</label>
							</c:if>
							<c:if test="${caseDoc.res.status==3}">
								<label id="label${caseDoc.dId }" class="forsetup">省不批准</label>
							</c:if>
						</c:if>
						<c:if test="${!fn:contains(caseDoc.res.org.idPath, sessionScope.defaultOrg.orgId) || caseDoc.res.org.level<sessionScope.user.type }">
							<c:if test="${caseDoc.res.status==0}">
								<label id="label${caseDoc.dId }">未发布</label>
							</c:if>
							<c:if test="${caseDoc.res.status==1}">
								<label id="label${caseDoc.dId }">已发布</label>
							</c:if>
							<c:if test="${caseDoc.res.status==2}">
								<label id="label${caseDoc.dId }">已提交</label>
							</c:if>
							<c:if test="${caseDoc.res.status==3}">
								<label id="label${caseDoc.dId }">省不批准</label>
							</c:if>
						</c:if>
					</c:if>
					 <c:if
						test="${sessionScope.user.type != 1 && sessionScope.user.type != 2 && sessionScope.user.type != 3}">
							<c:if test="${caseDoc.res.status==0}">
								<label id="label${caseDoc.dId }">未发布</label>
							</c:if>
							<c:if test="${caseDoc.res.status==1}">
								<label id="label${caseDoc.dId }">已发布</label>
							</c:if>
							<c:if test="${caseDoc.res.status==2}">
								<label id="label${caseDoc.dId }">已提交</label>
							</c:if>
							<c:if test="${caseDoc.res.status==3}">
								<label id="label${caseDoc.dId }">省不批准</label>
							</c:if>
						</c:if>
					
					<span class="select_setup"> <!-- 集团管理员 --> <c:if
							test="${sessionScope.user.type == 1}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${caseDoc.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="1" <c:if test="${caseDoc.res.status==1}">selected="selected"</c:if>>已发布</option>
							</select>
						</c:if> <!-- 省级管理员 --> <c:if test="${sessionScope.user.type == 2}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${caseDoc.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="1" <c:if test="${caseDoc.res.status==1}">selected="selected"</c:if>>已发布</option>
								<option value="3" <c:if test="${caseDoc.res.status==3}">selected="selected"</c:if>>省不批准</option>
							</select>
						</c:if> <!-- 市级管理员 --> <c:if test="${sessionScope.user.type == 3}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${caseDoc.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="2" <c:if test="${caseDoc.res.status==2}">selected="selected"</c:if>>已提交</option>
							</select>
						</c:if> <img class="vm hidden" src="${basepath }/images/right.png"
						width="15" height="12" id="${caseDoc.dId }" /></span>
				</td>
				<td>${caseDoc.res.stat.view }</td>
				<td>${caseDoc.res.stat.download }</td>
				<td>${caseDoc.res.stat.share }</td>
				<td>${caseDoc.res.stat.comment }</td>
				<td><c:out value="${caseDoc.res.isPub==0?'非公开':'公开' }" /></td>
				<td>
				<%-- <a target="_blank"
					href="${basepath }/ctu-resource-agent?user=${sessionScope.user.uid }&resource_id=${caseDoc.data[0].outCode }&player=example">预览</a> --%>
					
				<a title="${caseDoc.data[0].outCode }"  id="${basepath }/ctu-resource-agent?user=${sessionScope.user.uid }&resource_id=${caseDoc.data[0].outCode }&player=example&is_trace=false" href="javascript:;" onclick="clickshpw(this)" >预览</a>		
					</td>
			</tr>
		</c:forEach>

	</tbody>
</table>
<c:set var="pager" value="${caseDocList.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
<script type="text/javascript">  
function clickshpw(obj)
{
   outCode = $(obj).attr("title"); 
   $.ajax({
 		url : basepath+"/courseware/toLookCourse.html?outCote="+outCode,
 		type : "POST",
 		data : outCode,
 		dataType : "json",
 		success : function(status){
 			if (status == "2" || status == "3") {
 				alert("资源正在解压缩，请稍后预览!");
 			}
 			if(status != "2" && status != "3" && status != "4" && status != "" && status != null)
 			{
 			alert("播放不成功");
 			}
 			if(status == "4" || status == "" || status == null)
 			{
 			id = $(obj).attr("id");
 			window.open(id,"ctu_player","channelmode=yes,fullscreen=yes,location=no,menubar=no,toolbar=no,titlebar=no");
 			}
 		}
 	});
	}
</script>