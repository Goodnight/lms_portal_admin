<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table width="100%" border="0" cellspacing="0" cellpadding="0"
	class="resouce_picture_table mt4">
	<colgroup>
		<col width="50%" />
		<col width="50%" />

	</colgroup>

	<tbody>
		<c:forEach items="${docList.data }" var="doc" varStatus="d">
			<c:choose>
				<c:when test="${d.index%2==0 }">
					<tr>
						<td class="dottedleft">
							<ul class="unit">
								<li>
									<div class="mt4">
										<c:if
											test="${doc.res.pic.outCode == null || doc.res.pic.outCode == ''}">
											<img src="${basepath }/images/ex.jpg" width="114" height="84" />
										</c:if>
										<c:if
											test="${doc.res.pic.outCode != null && doc.res.pic.outCode != ''}">
											<img
												src="${basepath }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${doc.res.pic.outCode}"
												width="114" height="84" />
										</c:if>
									</div>
									<div class="mt4">
										<input name="groupTypeId" type="checkbox"
											class="checkbox cls_checkbox cls_chooseitem"
											value="${doc.dId }" />
											<input id="elite${doc.dId }" name="elite" type="hidden" value="${doc.res.elite }"/>
									</div>
								</li>
								<li class="pl10 mt4">
									<p>
										<em>编号</em>${doc.res.sn }<br /> <em>名称</em><a target="_blank"
											href="${basepath }/doc/docDetails.html?dId=${doc.dId }&rpId=${doc.res.rbId}&sn=${doc.res.sn}"><c:choose>
												<c:when test="${fn:length(doc.res.name) > 10}">
													<c:out value="${fn:substring(doc.res.name, 0, 10)}......" />
												</c:when>
												<c:otherwise>
													<c:out value="${doc.res.name}" />
												</c:otherwise>
											</c:choose></a><br /> <em>创建公司</em><em style="color: black;"
											id="${doc.res.org.orgId }" onmousemove="showOrg(this)"
											title="12345"><c:choose>
												<c:when test="${fn:length(doc.res.org.name) > 7}">
													<c:out
														value="${fn:substring(doc.res.org.name, 0, 7)}......" />
												</c:when>
												<c:otherwise>
													<c:out value="${doc.res.org.name}" />
												</c:otherwise>
											</c:choose></em><br /> <span>浏览</span>${doc.res.stat.view }<span>下载</span>${doc.res.stat.download
										}<span>分享</span>${doc.res.stat.share }<span>评论</span>${doc.res.stat.comment
										}<br /> <em>状态</em>
										<!-- user.type 1:集团管理员,2:省管理员,3:市管理员,4:部门管理员,5:本地网管理员 --> 
					<!-- fn:contains(cou.res.org.idPath, sessionScope.defaultOrg.orgId)，当前记录的idPath包含有当前用户默认权限的orgId，则有编辑status的权限. -->
					<c:if
						test="${(sessionScope.user.type == 1 || sessionScope.user.type == 2 || sessionScope.user.type == 3 ) && fn:contains(doc.res.org.idPath, sessionScope.defaultOrg.orgId) && doc.res.org.level>=sessionScope.user.type}">
						<c:if test="${doc.res.status==0}">
							<label id="label${doc.dId }" class="forsetup">未发布</label>
						</c:if>
						<c:if test="${doc.res.status==1}">
							<label id="label${doc.dId }" class="forsetup">已发布</label>
						</c:if>
						<c:if test="${doc.res.status==2}">
							<label id="label${doc.dId }" class="forsetup">已提交</label>
						</c:if>
						<c:if test="${doc.res.status==3}">
							<label id="label${doc.dId }" class="forsetup">省不批准</label>
						</c:if>
				</c:if> <c:if
						test="${(sessionScope.user.type == 1 || sessionScope.user.type == 2 || sessionScope.user.type == 3 ) && (!fn:contains(doc.res.org.idPath, sessionScope.defaultOrg.orgId) || doc.res.org.level<sessionScope.user.type )}">
						<c:if test="${doc.res.status==0}">
							<label>未发布</label>
						</c:if>
						<c:if test="${doc.res.status==1}">
							<label>已发布</label>
						</c:if>
						<c:if test="${doc.res.status==2}">
							<label>已提交</label>
						</c:if>
						<c:if test="${doc.res.status==3}">
							<label>省不批准</label>
						</c:if>
					</c:if> <span class="select_setup"> <!-- 集团管理员 --> <c:if
							test="${sessionScope.user.type == 1}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${doc.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="1" <c:if test="${doc.res.status==1}">selected="selected"</c:if>>已发布</option>
							</select>
						</c:if> <!-- 省级管理员 --> <c:if test="${sessionScope.user.type == 2}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${doc.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="1" <c:if test="${doc.res.status==1}">selected="selected"</c:if>>已发布</option>
								<option value="3" <c:if test="${doc.res.status==3}">selected="selected"</c:if>>省不批准</option>
							</select>
						</c:if> <!-- 市级管理员 --> <c:if test="${sessionScope.user.type == 3}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${doc.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="2" <c:if test="${doc.res.status==2}">selected="selected"</c:if>>已提交</option>
							</select>
						</c:if><img class="vm hidden" src="${basepath }/images/right.png"
											width="15" height="12" id="${doc.dId }" /></span> <em>公开</em>
										<c:out value="${doc.res.isPub==0?'非公开':'公开' }" />
										<em>预览</em> <a target="_blank"
											href="${basepath }/ctu-resource-agent?user=${sessionScope.user.uid }&resource_id=${doc.data[0].outCode }&player=document&is_trace=false">预览</a>
									</p>
								</li>
							</ul>
						</td>
				</c:when>
				<c:otherwise>
					<td>
						<ul class="unit">
							<li>
								<div class="mt4">
									<c:if
										test="${doc.res.pic.outCode == null || doc.res.pic.outCode == ''}">
										<img src="${basepath }/images/ex.jpg" width="114" height="84" />
									</c:if>
									<c:if
										test="${doc.res.pic.outCode != null && doc.res.pic.outCode != ''}">
										<img
											src="${basepath }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${doc.res.pic.outCode}"
											width="114" height="84" />
									</c:if>
								</div>
								<div class="mt4">
									<input name="groupTypeId" type="checkbox"
										class="checkbox cls_checkbox cls_chooseitem"
										value="${doc.dId }" />
								</div>
							</li>
							<li class="pl10 mt4">
								<p>
									<em>编号</em>${doc.res.sn }<br /> <em>名称</em><a target="_blank"
										href="${basepath }/doc/docDetails.html?dId=${doc.dId }&rpId=${doc.res.rbId}&sn=${doc.res.sn}"><c:choose>
											<c:when test="${fn:length(doc.res.name) > 10}">
												<c:out value="${fn:substring(doc.res.name, 0, 10)}......" />
											</c:when>
											<c:otherwise>
												<c:out value="${doc.res.name}" />
											</c:otherwise>
										</c:choose></a><br /> <em>创建公司</em><em style="color: black;"
										id="${doc.res.creater.org.orgId }" onmousemove="showOrg(this)"
										title="12345"><c:choose>
											<c:when test="${fn:length(doc.res.org.name) > 7}">
												<c:out value="${fn:substring(doc.res.org.name, 0, 7)}......" />
											</c:when>
											<c:otherwise>
												<c:out value="${doc.res.org.name}" />
											</c:otherwise>
										</c:choose></em><br /> <span>浏览</span>${doc.res.stat.view }<span>下载</span>${doc.res.stat.download
									}<span>分享</span>${doc.res.stat.share }<span>评论</span>${doc.res.stat.comment
									}<br /> <em>状态</em>
									<!-- user.type 1:集团管理员,2:省管理员,3:市管理员,4:部门管理员,5:本地网管理员 --> 
					<!-- fn:contains(cou.res.org.idPath, sessionScope.defaultOrg.orgId)，当前记录的idPath包含有当前用户默认权限的orgId，则有编辑status的权限. -->
					<c:if
						test="${(sessionScope.user.type == 1 || sessionScope.user.type == 2 || sessionScope.user.type == 3 ) && fn:contains(doc.res.org.idPath, sessionScope.defaultOrg.orgId) && doc.res.org.level>=sessionScope.user.type}">
						<c:if test="${doc.res.status==0}">
							<label id="label${doc.dId }" class="forsetup">未发布</label>
						</c:if>
						<c:if test="${doc.res.status==1}">
							<label id="label${doc.dId }" class="forsetup">已发布</label>
						</c:if>
						<c:if test="${doc.res.status==2}">
							<label id="label${doc.dId }" class="forsetup">已提交</label>
						</c:if>
						<c:if test="${doc.res.status==3}">
							<label id="label${doc.dId }" class="forsetup">省不批准</label>
						</c:if>
					</c:if> <c:if
						test="${(sessionScope.user.type == 1 || sessionScope.user.type == 2 || sessionScope.user.type == 3 ) && (!fn:contains(doc.res.org.idPath, sessionScope.defaultOrg.orgId) || doc.res.org.level<sessionScope.user.type )}">
						<c:if test="${doc.res.status==0}">
							<label>未发布</label>
						</c:if>
						<c:if test="${doc.res.status==1}">
							<label>已发布</label>
						</c:if>
						<c:if test="${doc.res.status==2}">
							<label>已提交</label>
						</c:if>
						<c:if test="${doc.res.status==3}">
							<label>省不批准</label>
						</c:if>
					</c:if> <span class="select_setup"> <!-- 集团管理员 --> <c:if
							test="${sessionScope.user.type == 1}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${doc.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="1" <c:if test="${doc.res.status==1}">selected="selected"</c:if>>已发布</option>
							</select>
						</c:if> <!-- 省级管理员 --> <c:if test="${sessionScope.user.type == 2}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${doc.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="1" <c:if test="${doc.res.status==1}">selected="selected"</c:if>>已发布</option>
								<option value="3" <c:if test="${doc.res.status==3}">selected="selected"</c:if>>省不批准</option>
							</select>
						</c:if> <!-- 市级管理员 --> <c:if test="${sessionScope.user.type == 3}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${doc.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="2" <c:if test="${doc.res.status==2}">selected="selected"</c:if>>已提交</option>
							</select>
						</c:if> <img class="vm hidden" src="${basepath }/images/right.png"
										width="15" height="12" id="${doc.dId }" /></span> <em>公开</em>
									<c:out value="${doc.res.isPub==0?'非公开':'公开' }" />
									<em>预览</em> <a target="_blank"
										href="${basepath }/ctu-resource-agent?user=${sessionScope.user.uid }&resource_id=${doc.data[0].outCode }&player=document">预览</a>
								</p>
							</li>
						</ul>
					</td>
					</tr>
				</c:otherwise>
			</c:choose>
		</c:forEach>
	</tbody>
</table>
<c:set var="pager" value="${docList.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
<script type="text/javascript">
	var user = "${user}";
</script>