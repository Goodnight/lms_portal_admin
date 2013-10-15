<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<thead>
		<tr>
			<th width="25"><input name="all" id="alll" type="checkbox"
				value="" class="checkbox cls_checkbox cls_chooseall" /></th>
			<th width="sorting">资源编号</th>
			<th class="sorting" width="30%">资源名称</th>
			<th class="sorting">资源类型</th>
			<th class="sorting" width="20%">创建机构</th>
			<th class="sorting">分享</th>
			<th class="sorting">评论</th>
			<th class="sorting">预览</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach items="${lsResList.data }" var="sc" varStatus="st">
			<tr
				class='<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>'>
				<td><input name="groupTypeId" type="checkbox"
					value="${sc.rbId }" class="checkbox cls_checkbox cls_chooseitem" /></td>
				<td>${sc.sn }</td>
				<td><c:if test="${sc.type ==1 }">
						<a target="_blank"
							href="${basepath }/courseware/coursewareDetails.html?cId=&resId=${sc.rbId }&sn=${sc.sn }&his=1"
							title="${sc.sn }"> ${sc.name }</a>
					</c:if> <c:if test="${sc.type ==2}">
						<a target="_blank"
							href="${basepath }/doc/docDetails.html?dId=&rpId=${sc.rbId}&sn=${sc.sn }&his=1"
							title="${sc.sn }">${sc.name}</a>
					</c:if> <c:if test="${sc.type ==3}">
						<a
							href="${basepath }/case/caseDocDetails.html?dId=&rpId=${sc.rbId}&sn=${sc.sn }&his=1"
							target="_blank" title="${sc.sn }">${sc.name}</a>
					</c:if></td>
				<td><c:if test="${sc.type ==1 }">
                                  			课程
                                  		</c:if> <c:if test="${sc.type ==2}">
                                  			文档
                                  		</c:if> <c:if test="${sc.type ==3}">
                                  			案例
                                  		</c:if></td>
				<td id="${sc.creater.org.orgId }" onmousemove="showOrg(this)"
					title="12345">${sc.org.name }</td>
				<td>${sc.stat.share }</td>
				<td>${sc.stat.comment }</td>
				<td><c:if test="${sc.type ==1}">
						<c:forEach items="${sc.cw.data }" var="d">
							<!-- ff808081385bcac601385bd006740033:SCORM课件 -->
							<c:if
								test="${d.type == 0 && sc.cw.type.spId == 'ff808081385bcac601385bd006740033'}">
								<a title="${d.outCode}"
									id="${basepath }/ctu-resource-agent?player=scorm&resource_id=${d.outCode}&user=${sessionScope.user.uid}&index=${sc.cw.url}&is_trace=false"
									href="javascript:;" onclick="clickshpw(this)">预览</a>
							</c:if>
							<!-- ff808081385bcac601385bd006230031:单一入口课件 -->
							<c:if
								test="${d.type == 0 && sc.cw.type.spId == 'ff808081385bcac601385bd006230031'}">
								<a title="${d.outCode}"
									id="${basepath }/ctu-resource-agent?player=simple&resource_id=${d.outCode}&user=${sessionScope.user.uid}&index=${sc.cw.url}&is_trace=false"
									href="javascript:;" onclick="clickshpw(this)">预览</a>
							</c:if>
							<!-- ff808081385bcac601385bd006142d3e:外链课件 , resource_id为必填参数,但是外链课件并没有有效的resource_id值,.-->
							<c:if
								test="${d.type == 0 && sc.cw.property.spId == 'ff808081385bcac601385bd005a7002e' && sc.cw.type.spId == 'ff808081385bcac601385bd006142d3e'}">
								<a title="${d.outCode}"
									id="${basepath }/ctu-resource-agent?player=external&resource_id=${d.outCode}&user=${sessionScope.user.uid}&index=${cou.url}&is_trace=false"
									href="javascript:;" onclick="clickshpw(this)">预览</a>
							</c:if>
						</c:forEach>

					</c:if> <c:if test="${sc.type ==2}">
						<a title="${sc.dc.data[0].outCode }"
							id="${basepath }/ctu-resource-agent?user=${sessionScope.user.uid }&resource_id=${sc.dc.data[0].outCode }&player=document&is_trace=false"
							href="javascript:;" onclick="clickshpw(this)">预览</a>
					</c:if> <c:if test="${sc.type ==3}">
						<a title="${sc.dc.data[0].outCode }"
							id="${basepath }/ctu-resource-agent?user=${sessionScope.user.uid }&resource_id=${sc.dc.data[0].outCode }&player=example&is_trace=false"
							href="javascript:;" onclick="clickshpw(this)">预览</a>
					</c:if></td>


			</tr>
		</c:forEach>
	</tbody>
</table>
<c:set var="pager" value="${lsResList.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
