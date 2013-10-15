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
		<c:forEach items="${caseDocList.data }" var="caseDocPic"
			varStatus="cp">
			<c:choose>
				<c:when test="${cp.index%2==0 }">
					<tr>
						<td class="dottedleft">
							<ul class="unit">
								<li>
									<div class="mt4">
										<c:if
											test="${caseDocPic.res.pic.outCode == null || caseDocPic.res.pic.outCode == ''}">
											<img src="${basepath }/images/ex.jpg" width="114" height="84" />
										</c:if>
										<c:if
											test="${caseDocPic.res.pic.outCode != null && caseDocPic.res.pic.outCode != ''}">
											<img
												src="${basepath }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${caseDocPic.res.pic.outCode}"
												width="114" height="84" />
										</c:if>
									</div>
									<div class="mt4">
										<input name="groupTypeId" type="checkbox"
											value="${caseDocPic.dId }"
											class="checkbox cls_checkbox cls_chooseitem" />
											<input id="elite${caseDocPic.dId }" name="elite" type="hidden" value="${caseDocPic.res.elite }"/>
									</div>
								</li>
								<li class="pl10 mt4">
									<p>
										<em>编号</em>${caseDocPic.res.sn }<br /> <em>名称|${caseDoc.res.org.level}</em><a
											target="_blank"
											href="${basepath }/case/caseDocDetails.html?dId=${caseDocPic.dId}&rpId=${caseDocPic.res.rbId}&sn=${caseDocPic.res.sn}"><c:choose>
												<c:when test="${fn:length(caseDocPic.res.name) > 10}">
													<c:out
														value="${fn:substring(caseDocPic.res.name, 0, 10)}......" />
												</c:when>
												<c:otherwise>
													<c:out value="${caseDocPic.res.name}" />
												</c:otherwise>
											</c:choose></a><br /> <em>创建公司</em><em style="color: black;"
											id="${caseDocPic.res.org.orgId }" onmousemove="showOrg(this)"
											title="12345"><c:choose>
												<c:when test="${fn:length(caseDocPic.res.org.name) > 7}">
													<c:out
														value="${fn:substring(caseDocPic.res.org.name, 0, 7)}......" />
												</c:when>
												<c:otherwise>
													<c:out value="${caseDocPic.res.org.name}" />
												</c:otherwise>
											</c:choose></em><br /> <span>浏览</span>${caseDocPic.res.stat.view }<span>下载</span>${caseDocPic.res.stat.download
										}<span>分享</span>${caseDocPic.res.stat.share }<span>评论</span>${caseDocPic.res.stat.comment
										}<br /> <em>状态</em>
										<!-- user.type 1:集团管理员,2:省管理员,3:市管理员,4:部门管理员,5:本地网管理员 --> 
					<!-- fn:contains(cou.res.org.idPath, sessionScope.defaultOrg.orgId)，当前记录的idPath包含有当前用户默认权限的orgId，则有编辑status的权限. -->
					<c:if
						test="${(sessionScope.user.type == 1 || sessionScope.user.type == 2 || sessionScope.user.type == 3) && fn:contains(caseDocPic.res.org.idPath, sessionScope.defaultOrg.orgId) && caseDocPic.res.org.level>=sessionScope.user.type}">
						<c:if test="${caseDocPic.res.status==0}">
							<label id="label${caseDocPic.dId }" class="forsetup">未发布</label>
						</c:if>
						<c:if test="${caseDocPic.res.status==1}">
							<label id="label${caseDocPic.dId }" class="forsetup">已发布</label>
						</c:if>
						<c:if test="${caseDocPic.res.status==2}">
							<label id="label${caseDocPic.dId }" class="forsetup">已提交</label>
						</c:if>
						<c:if test="${caseDocPic.res.status==3}">
							<label id="label${caseDocPic.dId }" class="forsetup">省不批准</label>
						</c:if>
					</c:if> <c:if
						test="${(sessionScope.user.type == 1 || sessionScope.user.type == 2 || sessionScope.user.type == 3) &&(!fn:contains(caseDocPic.res.org.idPath, sessionScope.defaultOrg.orgId) || caseDocPic.res.org.level<sessionScope.user.type )}">
						<c:if test="${caseDocPic.res.status==0}">
							<label>未发布</label>
						</c:if>
						<c:if test="${caseDocPic.res.status==1}">
							<label>已发布</label>
						</c:if>
						<c:if test="${caseDocPic.res.status==2}">
							<label>已提交</label>
						</c:if>
						<c:if test="${caseDocPic.res.status==3}">
							<label>省不批准</label>
						</c:if>
					</c:if> <span class="select_setup"> <!-- 集团管理员 --> <c:if
							test="${sessionScope.user.type == 1}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${caseDocPic.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="1" <c:if test="${caseDocPic.res.status==1}">selected="selected"</c:if>>已发布</option>
							</select>
						</c:if> <!-- 省级管理员 --> <c:if test="${sessionScope.user.type == 2}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${caseDocPic.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="1" <c:if test="${caseDocPic.res.status==1}">selected="selected"</c:if>>已发布</option>
								<option value="3" <c:if test="${caseDocPic.res.status==3}">selected="selected"</c:if>>省不批准</option>
							</select>
						</c:if> <!-- 市级管理员 --> <c:if test="${sessionScope.user.type == 3}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${caseDocPic.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="2" <c:if test="${caseDocPic.res.status==2}">selected="selected"</c:if>>已提交</option>
							</select>
						</c:if>  <img class="vm hidden" src="${basepath }/images/right.png"
											width="15" height="12" id="${caseDocPic.dId }" /></span> <em>公开</em>
										<c:out value="${caseDocPic.res.isPub==0?'非公开':'公开' }" />
										<em>预览</em> <a target="_blank"
											href="${basepath }/ctu-resource-agent?user=${sessionScope.user.uid }&resource_id=${caseDocPic.data[0].outCode }&player=example">预览</a>
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
										test="${caseDocPic.res.pic.outCode == null || caseDocPic.res.pic.outCode == ''}">
										<img src="${basepath }/images/ex.jpg" width="114" height="84" />
									</c:if>
									<c:if
										test="${caseDocPic.res.pic.outCode != null && caseDocPic.res.pic.outCode != ''}">
										<img
											src="${basepath }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${caseDocPic.res.pic.outCode}"
											width="114" height="84" />
									</c:if>
								</div>
								<div class="mt4">
									<input name="groupTypeId" type="checkbox"
										value="${caseDocPic.dId }"
										class="checkbox cls_checkbox cls_chooseitem" />
								</div>
							</li>
							<li class="pl10 mt4">
								<p>
									<em>编号</em>${caseDocPic.res.sn }<br /> <em>名称</em><a
										target="_blank"
										href="${basepath }/case/caseDocDetails.html?dId=${caseDocPic.dId}&rpId=${caseDocPic.res.rbId}&sn=${caseDocPic.res.sn}"><c:choose>
											<c:when test="${fn:length(caseDocPic.res.name) > 10}">
												<c:out
													value="${fn:substring(caseDocPic.res.name, 0, 10)}......" />
											</c:when>
											<c:otherwise>
												<c:out value="${caseDocPic.res.name}" />
											</c:otherwise>
										</c:choose></a><br /> <em>创建公司</em><em style="color: black;"
										id="${caseDocPic.res.org.orgId }" onmousemove="showOrg(this)"
										title="12345"><c:choose>
											<c:when test="${fn:length(caseDocPic.res.org.name) > 7}">
												<c:out
													value="${fn:substring(caseDocPic.res.org.name, 0, 7)}......" />
											</c:when>
											<c:otherwise>
												<c:out value="${caseDocPic.res.org.name}" />
											</c:otherwise>
										</c:choose></em><br /> <span>浏览</span>${caseDocPic.res.stat.view }<span>下载</span>${caseDocPic.res.stat.download
									}<span>分享</span>${caseDocPic.res.stat.share }<span>评论</span>${caseDocPic.res.stat.comment
									}<br /> <em>状态</em>
									<!-- user.type 1:集团管理员,2:省管理员,3:市管理员,4:部门管理员,5:本地网管理员 --> 
					<!-- fn:contains(cou.res.org.idPath, sessionScope.defaultOrg.orgId)，当前记录的idPath包含有当前用户默认权限的orgId，则有编辑status的权限. -->
					<c:if
						test="${(sessionScope.user.type == 1 || sessionScope.user.type == 2 || sessionScope.user.type == 3) && fn:contains(caseDoc.res.org.idPath, sessionScope.defaultOrg.orgId) && caseDoc.res.org.level>=sessionScope.user.type}">
						<c:if test="${caseDocPic.res.status==0}">
							<label id="label${caseDocPic.dId }" class="forsetup">未发布</label>
						</c:if>
						<c:if test="${caseDocPic.res.status==1}">
							<label id="label${caseDocPic.dId }" class="forsetup">已发布</label>
						</c:if>
						<c:if test="${caseDocPic.res.status==2}">
							<label id="label${caseDocPic.dId }" class="forsetup">已提交</label>
						</c:if>
						<c:if test="${caseDocPic.res.status==3}">
							<label id="label${caseDocPic.dId }" class="forsetup">省不批准</label>
						</c:if>
					</c:if> <c:if
						test="${(sessionScope.user.type == 1 || sessionScope.user.type == 2 || sessionScope.user.type == 3) &&(!fn:contains(caseDoc.res.org.idPath, sessionScope.defaultOrg.orgId) || caseDoc.res.org.level<sessionScope.user.type )}">
						<c:if test="${caseDocPic.res.status==0}">
							<label>未发布</label>
						</c:if>
						<c:if test="${caseDocPic.res.status==1}">
							<label>已发布</label>
						</c:if>
						<c:if test="${caseDocPic.res.status==2}">
							<label>已提交</label>
						</c:if>
						<c:if test="${caseDocPic.res.status==3}">
							<label>省不批准</label>
						</c:if>
					</c:if> <span class="select_setup"> <!-- 集团管理员 --> <c:if
							test="${sessionScope.user.type == 1}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${caseDocPic.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="1" <c:if test="${caseDocPic.res.status==1}">selected="selected"</c:if>>已发布</option>
							</select>
						</c:if> <!-- 省级管理员 --> <c:if test="${sessionScope.user.type == 2}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${caseDocPic.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="1" <c:if test="${caseDocPic.res.status==1}">selected="selected"</c:if>>已发布</option>
								<option value="3" <c:if test="${caseDocPic.res.status==3}">selected="selected"</c:if>>省不批准</option>
							</select>
						</c:if> <!-- 市级管理员 --> <c:if test="${sessionScope.user.type == 3}">
							<select name="status" class="selectStatus" id="status">
								<option value="0" <c:if test="${caseDocPic.res.status==0}">selected="selected"</c:if>>未发布</option>
								<option value="2" <c:if test="${caseDocPic.res.status==2}">selected="selected"</c:if>>已提交</option>
							</select>
						</c:if>  <img class="vm hidden" src="${basepath }/images/right.png"
										width="15" height="12" id="${caseDocPic.dId }" /></span> <em>公开</em>
									<c:out value="${caseDocPic.res.isPub==0?'非公开':'公开' }" />
									<em>预览</em> <a target="_blank"
										href="${basepath }/ctu-resource-agent?user=${sessionScope.user.uid }&resource_id=${caseDocPic.data[0].outCode }&player=example&is_trace=false">预览</a>
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
<c:set var="pager" value="${caseDocList.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
<script type="text/javascript">
	var user = "${user}";
</script>