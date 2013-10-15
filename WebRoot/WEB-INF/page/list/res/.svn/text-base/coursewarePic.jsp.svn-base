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
		<c:forEach items="${coursewareList.data }" var="cou" varStatus="c">
			<c:choose>
				<c:when test="${c.index%2==0 }">
					<tr>
						<td class="dottedleft">
							<ul class="unit">
								<li>
									<div class="mt4">
										<c:if
											test="${cou.res.pic.outCode == null || cou.res.pic.outCode == ''}">
											<img src="${basepath }/images/ex.jpg" width="114" height="84" />
										</c:if>
										<c:if
											test="${cou.res.pic.outCode != null && cou.res.pic.outCode != ''}">
											<img
												src="${basepath }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${cou.res.pic.outCode}"
												width="114" height="84" />
										</c:if>
									</div>
									<div class="mt4">
										<input name="groupTypeId" type="checkbox" value="${cou.cId }"
											class="checkbox cls_checkbox cls_chooseitem" />
											<input id="elite${cou.cId }" name="elite" type="hidden" value="${cou.res.elite }"/>
									</div>
								</li>
								<li class="pl10 mt4">
									<p>
										<em>编号</em>${cou.res.sn }<br /> <em>名称</em><a target="_blank"
											href="${basepath }/courseware/coursewareDetails.html?cId=${cou.cId}&resId=${cou.res.rbId }&sn=${cou.res.sn}"><c:choose>
												<c:when test="${fn:length(cou.res.name) > 10}">
													<c:out value="${fn:substring(cou.res.name, 0, 10)}......" />
												</c:when>
												<c:otherwise>
													<c:out value="${cou.res.name}" />
												</c:otherwise>
											</c:choose></a><br /> <em>创建公司</em><em style="color: black;"
											id="${cou.res.org.orgId }" onmousemove="showOrg(this)"
											title="12345"><c:choose>
												<c:when test="${fn:length(cou.res.org.name) > 7}">
													<c:out
														value="${fn:substring(cou.res.org.name, 0, 7)}......" />
												</c:when>
												<c:otherwise>
													<c:out value="${cou.res.org.name}" />
												</c:otherwise>
											</c:choose></em> <em>公开</em>
										<c:out value="${cou.res.isPub==1?'公开':'非公开' }" />
										<br /> <em>状态</em>
										<!-- user.type 1:集团管理员,2:省管理员,3:市管理员,4:部门管理员,5:本地网管理员； -->
					<!-- fn:contains(cou.res.org.idPath, sessionScope.defaultOrg.orgId)，当前记录的idPath包含有当前用户默认权限的orgId，则有编辑status的权限. -->
					 <c:if
						test="${(sessionScope.user.type == 1 || sessionScope.user.type == 2 || sessionScope.user.type == 3) && fn:contains(cou.res.org.idPath, sessionScope.defaultOrg.orgId)&& cou.res.org.level>=sessionScope.user.type}">
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
					</c:if> <c:if
						test="${(sessionScope.user.type != 1 && sessionScope.user.type != 2 && sessionScope.user.type != 3) || (!fn:contains(cou.res.org.idPath, sessionScope.defaultOrg.orgId) || cou.res.org.level<sessionScope.user.type )}">
						<c:if test="${cou.res.status==0}">
							<label>未发布</label>
						</c:if>
						<c:if test="${cou.res.status==1}">
							<label>已发布</label>
						</c:if>
						<c:if test="${cou.res.status==2}">
							<label>已提交</label>
						</c:if>
						<c:if test="${cou.res.status==3}">
							<label>省不批准</label>
						</c:if>
					</c:if> <span class="select_setup"> <!-- 集团管理员 --> <c:if
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
						</c:if>  <img class="vm hidden" src="${basepath }/images/right.png"
											width="15" height="12" id="${cou.cId }" /></span> <em>平均分</em>${cou.res.stat.score
										}<em> 学时</em>
										<fmt:formatNumber value="${cou.courseHour/60 }"
											pattern="##.##" minFractionDigits="2"></fmt:formatNumber>
										<br /> <em>学习次数</em>${cou.res.stat.view } <em>分享</em>${cou.res.stat.share
										} <em>评论</em>${cou.res.stat.comment } <em>预览</em>

										<c:forEach items="${cou.data }" var="d">
											<c:if
												test="${d.type == 0 && cou.type.spId == 'ff808081385bcac601385bd006740033'}">

												<a class="${d.outCode}"
													id="${basepath }/ctu-resource-agent?&player=${scorm }&resource_id=${d.outCode}&user=${sessionScope.user.uid }&index=${cou.url}&is_trace=false"
													href="javascript:;" onclick="clickshpw(this)">预览</a>
											</c:if>
											<c:if
												test="${d.type == 0 && cou.type.spId != 'ff808081385bcac601385bd006740033'}">
												<a class="${d.outCode}"
													id="${basepath }/ctu-resource-agent?&player=${simple}&resource_id=${d.outCode}&user=${sessionScope.user.uid }&index=${cou.url}&is_trace=false"
													href="javascript:;" onclick="clickshpw(this)">预览</a>
											</c:if>

										</c:forEach>
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
										test="${cou.res.pic.outCode == null || cou.res.pic.outCode == ''}">
										<img src="${basepath }/images/ex.jpg" width="114" height="84" />
									</c:if>
									<c:if
										test="${cou.res.pic.outCode != null && cou.res.pic.outCode != ''}">
										<img
											src="${basepath }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${cou.res.pic.outCode}"
											width="114" height="84" />
									</c:if>
								</div>

								<div class="mt4">
									<input name="groupTypeId" type="checkbox" value="${cou.cId }"
										class="checkbox cls_checkbox cls_chooseitem" />
								</div>
							</li>
							<li class="pl10 mt4">
								<p>
									<em>编号</em>${cou.res.sn }<br /> <em>名称</em><a target="_blank"
										href="${basepath }/courseware/coursewareDetails.html?cId=${cou.cId}&resId=${cou.res.rbId }&sn=${cou.res.sn}"><c:choose>
											<c:when test="${fn:length(cou.res.name) > 10}">
												<c:out value="${fn:substring(cou.res.name, 0, 10)}......" />
											</c:when>
											<c:otherwise>
												<c:out value="${cou.res.name}" />
											</c:otherwise>
										</c:choose></a><br /> <em>创建公司</em><em style="color: black;"
										id="${cou.res.org.orgId }" onmousemove="showOrg(this)"
										title="12345"><c:choose>
											<c:when test="${fn:length(cou.res.org.name) > 7}">
												<c:out value="${fn:substring(cou.res.org.name, 0, 7)}......" />
											</c:when>
											<c:otherwise>
												<c:out value="${cou.res.org.name}" />
											</c:otherwise>
										</c:choose></em> <em>公开</em>
									<c:out value="${cou.res.isPub==1?'公开':'非公开' }" />
									<br /> <em>状态</em>
									<!-- user.type 1:集团管理员,2:省管理员,3:市管理员,4:部门管理员,5:本地网管理员； -->
					<!-- fn:contains(cou.res.org.idPath, sessionScope.defaultOrg.orgId)，当前记录的idPath包含有当前用户默认权限的orgId，则有编辑status的权限. -->
			 <c:if
						test="${(sessionScope.user.type == 1 || sessionScope.user.type == 2 || sessionScope.user.type == 3) && fn:contains(cou.res.org.idPath, sessionScope.defaultOrg.orgId)&& cou.res.org.level>=sessionScope.user.type}">
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
					</c:if> <c:if
						test="${(sessionScope.user.type != 1 && sessionScope.user.type != 2 && sessionScope.user.type != 3) || (!fn:contains(cou.res.org.idPath, sessionScope.defaultOrg.orgId) || cou.res.org.level<sessionScope.user.type )}">
						<c:if test="${cou.res.status==0}">
							<label>未发布</label>
						</c:if>
						<c:if test="${cou.res.status==1}">
							<label>已发布</label>
						</c:if>
						<c:if test="${cou.res.status==2}">
							<label>已提交</label>
						</c:if>
						<c:if test="${cou.res.status==3}">
							<label>省不批准</label>
						</c:if>
					</c:if> <span class="select_setup"> <!-- 集团管理员 --> <c:if
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
						</c:if>  <img class="vm hidden" src="${basepath }/images/right.png"
										width="15" height="12" id="${cou.cId }" /></span> <em>平均分</em>${cou.res.stat.score
									}<em> 学时</em>
									<fmt:formatNumber value="${cou.courseHour/60 }" pattern="##.##"
										minFractionDigits="2"></fmt:formatNumber>
									<br /> <em>学习次数</em><span id="learning${cou.cId }">${cou.res.stat.learning
										}</span> <em>分享</em>${cou.res.stat.share } <em>评论</em>${cou.res.stat.comment
									} <em>预览</em>
									<c:forEach items="${cou.data }" var="d">
										<c:if
											test="${d.type == 0 && cou.type.spId == 'ff808081385bcac601385bd006740033'}">
											<a class="${d.outCode}"
												id="${basepath }/ctu-resource-agent?&player=${scorm }&resource_id=${d.outCode}&user=${sessionScope.user.uid }&index=${cou.url}"
												href="javascript:;" onclick="clickshpw(this)">预览</a>
										</c:if>
										<c:if
											test="${d.type == 0 && cou.type.spId != 'ff808081385bcac601385bd006740033'}">
											<a class="${d.outCode}"
												id="${basepath }/ctu-resource-agent?&player=${simple}&resource_id=${d.outCode}&user=${sessionScope.user.uid }&index=${cou.url}"
												href="javascript:;" onclick="clickshpw(this)">预览</a>
										</c:if>

									</c:forEach>
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
<c:set var="pager" value="${coursewareList.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
<script type="text/javascript">
	var user = "${user}";
</script>
