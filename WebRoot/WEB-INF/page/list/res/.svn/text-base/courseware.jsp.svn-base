<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" %>
<%
	String pathUpload = "http://180.168.60.15:15320/resource-proxy";
%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<thead>
		<tr>

			<th width="30"><input name="all" id="alll" type="checkbox"
				value="" class="checkbox cls_checkbox cls_chooseall" /></th>
			<th width="70">课程编号</th>
			<th width="150">课程名称</th>
			<th width="110">创建公司</th>
			<th id="asdq" class="sorting" width="70">学时</th>
			<th class="sorting" width="70">状态</th>
			<th id="asd" class="sorting" width="70">平均分</th>
			<th id="asd" class="sorting" width="100">学习人数</th>
			<th id="asd"  class="sorting" width="70">分享</th>
			<th id="asd"  class="sorting" width="70">评论</th>
			<th width="70">预览</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach items="${coursewareList.data }" var="cou" varStatus="st">

			<tr
				class='<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>'>
				<td><input name="groupTypeId" type="checkbox"
					value="${cou.cId }" class="checkbox cls_checkbox cls_chooseitem" />
					<input id="elite${cou.cId }" name="elite" type="hidden" value="${cou.res.elite }"/><!-- 解决已是精品记录的重复设置精品问题. -->
					<input id="contain${cou.cId}" name="contain" type="hidden" value="${fn:contains(cou.res.org.idPath, sessionScope.defaultOrg.orgId)}"><!-- 当前用户可以删除的记录是记录的机构属于用户的机构,其它情况不允许删除 -->
				</td>
				<td>${cou.res.sn}</td>
				<td><a target="_blank"
					href="${basepath }/courseware/coursewareDetails.html?cId=${cou.cId}&resId=${cou.res.rbId }&sn=${cou.res.sn }"
					title="${cou.res.sn }">${cou.res.name }</a></td>
				<!-- 悬浮事件显示创建公司的namePath -->
				<td id="${cou.res.org.orgId }" onmousemove="showOrg(this)"
					title="12345">${cou.res.org.name}</td>
				<td><fmt:formatNumber value="${cou.courseHour / 60}"
						pattern="##.##" minFractionDigits="2"></fmt:formatNumber></td>
				<td>
					<!-- user.type 1:集团管理员,2:省管理员,3:市管理员,4:部门管理员,5:本地网管理员； -->
					<!-- fn:contains(cou.res.org.idPath, sessionScope.defaultOrg.orgId)，当前记录的idPath包含有当前用户默认权限的orgId，则有编辑status的权限. -->
					<c:if
						test="${sessionScope.user.type == 1}">
						<c:if test="${cou.res.org.level==sessionScope.user.type}">
						<c:if test="${cou.res.status==0}">
							<label id="label${cou.cId }" class="forsetup">未发布</label>
						</c:if>
						<c:if test="${cou.res.status==1}">
							<label id="label${cou.cId }" class="forsetup">已发布</label>
						</c:if>
						<c:if test="${cou.res.status==2}">
							<label id="label${cou.cId }" class="forsetup">已提交</label>
						</c:if>
						<c:if test="${cou.res.status==3}"> 
							<label id="label${cou.cId }" class="forsetup">省不批准</label>
						</c:if>
						</c:if>
						<c:if test="${cou.res.org.level!=sessionScope.user.type}">
							<c:if test="${cou.res.status==0}">
								<label id="label${cou.cId }">未发布</label>
							</c:if>
							<c:if test="${cou.res.status==1}">
								<label id="label${cou.cId }">已发布</label>
							</c:if>
							<c:if test="${cou.res.status==2}">
								<label id="label${cou.cId }">已提交</label>
							</c:if>
							<c:if test="${cou.res.status==3}">
								<label id="label${cou.cId }">省不批准</label>
							</c:if>
						</c:if>
					</c:if>
					 <c:if
						test="${(sessionScope.user.type == 2 || sessionScope.user.type == 3)}">
						<c:if test="${fn:contains(cou.res.org.idPath, sessionScope.defaultOrg.orgId) && cou.res.org.level>=sessionScope.user.type }">
							<c:if test="${cou.res.status==0}">
								<label id="label${cou.cId }" class="forsetup">未发布</label>
							</c:if>
							<c:if test="${cou.res.status==1}">
								<label id="label${cou.cId }" class="forsetup">已发布</label>
							</c:if>
							<c:if test="${cou.res.status==2}">
								<label id="label${cou.cId }" class="forsetup">已提交</label>
							</c:if>
							<c:if test="${cou.res.status==3}">
								<label id="label${cou.cId }" class="forsetup">省不批准</label>
							</c:if>
						</c:if>
						<c:if test="${!fn:contains(cou.res.org.idPath, sessionScope.defaultOrg.orgId) || cou.res.org.level<sessionScope.user.type }">
							<c:if test="${cou.res.status==0}">
								<label id="label${cou.cId }">未发布</label>
							</c:if>
							<c:if test="${cou.res.status==1}">
								<label id="label${cou.cId }">已发布</label>
							</c:if>
							<c:if test="${cou.res.status==2}">
								<label id="label${cou.cId }">已提交</label>
							</c:if>
							<c:if test="${cou.res.status==3}">
								<label id="label${cou.cId }">省不批准</label>
							</c:if>
						</c:if>
					</c:if>
					 <c:if
						test="${sessionScope.user.type != 1 && sessionScope.user.type != 2 && sessionScope.user.type != 3}">
							<c:if test="${cou.res.status==0}">
								<label id="label${cou.cId }">未发布</label>
							</c:if>
							<c:if test="${cou.res.status==1}">
								<label id="label${cou.cId }">已发布</label>
							</c:if>
							<c:if test="${cou.res.status==2}">
								<label id="label${cou.cId }">已提交</label>
							</c:if>
							<c:if test="${cou.res.status==3}">
								<label id="label${cou.cId }">省不批准</label>
							</c:if>
						</c:if>
					
					<span class="select_setup"> <!-- 集团管理员 --> <c:if
							test="${sessionScope.user.type == 1}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${cou.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="1" <c:if test="${cou.res.status==1}">selected="selected"</c:if>>已发布</option>
							</select>
						</c:if> <!-- 省级管理员 --> <c:if test="${sessionScope.user.type == 2}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${cou.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="1" <c:if test="${cou.res.status==1}">selected="selected"</c:if>>已发布</option>
								<option value="3" <c:if test="${cou.res.status==3}">selected="selected"</c:if>>省不批准</option>
							</select>
						</c:if> <!-- 市级管理员 --> <c:if test="${sessionScope.user.type == 3}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${cou.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="2" <c:if test="${cou.res.status==2}">selected="selected"</c:if>>已提交</option>
							</select>
						</c:if> <!-- LMSWD-1272 状态切换时，不要“打钩”，直接选择后，就弹出提示“是否改变状态” --> <img
						class="vm hidden" src="${basepath }/images/right.png" width="15"
						height="12" id="${cou.cId }" />
						<c:forEach items="${cou.data }" var="d">
							<c:if test="${d.type == 0}">
								<input type="hidden" value="${d.outCode}" id="clickshpwId${d.outCode}"/>
							</c:if>
						</c:forEach>
						<input id="publish" type="hidden" value="${cou.publish}"><!-- 是否可以发布的必要条件. -->
						</span>
				</td>
				<td>${cou.res.stat.score }</td>
				<td><span id="learning${cou.cId }">${cou.res.stat.learning
						}</span></td>
				<td>${cou.res.stat.share }</td>
				<td>${cou.res.stat.comment }</td>
				<td><c:forEach items="${cou.data }" var="d">
						<!-- ff808081385bcac601385bd006740033:SCORM课件 -->
						<c:if test="${d.type == 0 && cou.type.spId == 'ff808081385bcac601385bd006740033'}">
							<a class="${d.outCode}"
								id="${basepath }/ctu-resource-agent?player=${scorm }&resource_id=${d.outCode}&user=${sessionScope.user.uid}&index=${cou.url}&is_trace=false"
								href="javascript:;" onclick="clickshpw(this)">预览</a>
						</c:if>
						<!-- ff808081385bcac601385bd006230031:单一入口课件 -->
						<c:if  test="${d.type == 0 && cou.type.spId == 'ff808081385bcac601385bd006230031'}">
							<a class="${d.outCode}"
								id="${basepath }/ctu-resource-agent?player=${simple}&resource_id=${d.outCode}&user=${sessionScope.user.uid}&index=${cou.url}&is_trace=false"
								href="javascript:;" onclick="clickshpw(this)">预览</a>
						</c:if>
						<!-- ff808081385bcac601385bd006142d3e:外链课件 , resource_id为必填参数,但是外链课件并没有有效的resource_id值,.-->
						<c:if test="${d.type == 0 && cou.property.spId == 'ff808081385bcac601385bd005a7002e' && cou.type.spId == 'ff808081385bcac601385bd006142d3e'}">
							<a id="${basepath }/ctu-resource-agent?player=${external}&resource_id=${d.outCode}&user=${sessionScope.user.uid}&index=${cou.url}&is_trace=false"
								href="javascript:;" onclick="clickshpw(this)">预览</a>
						</c:if>
					</c:forEach>
				 	
						</td>
			</tr>

		</c:forEach>
	</tbody>
</table>
<c:set var="pager" value="${coursewareList.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>

