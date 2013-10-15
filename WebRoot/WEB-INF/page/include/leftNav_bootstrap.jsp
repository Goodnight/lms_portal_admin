<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

		<div id="sidebar" style="margin-top:45px;">
				<div id="sidebar-shortcuts">
					<div id="sidebar-shortcuts-large">
					<p>
					
						<a href="http://www.myctu.cn" class="btn btn-small btn-success tooltip-success" data-rel="tooltip" title="" data-placement="bottom"  data-original-title="网大首页"><i class="icon-home"></i></a>
						<span class="btn btn-small btn-info tooltip-info"data-rel="tooltip" title="" data-placement="right"  data-original-title="反馈：021-33846066 或Email:service@myctu.cn"><i class="icon-pencil"></i></span>
						<a href="/lms_portal_admin/tostudent.html" class="btn btn-small btn-warning tooltip-warning" data-rel="tooltip" title="" data-original-title="学生系统" data-placement="bottom"><i class="icon-user"></i></a>
						<a href="/lms_portal_admin/mylogout.html" class="btn btn-small btn-danger tooltip-error" data-rel="tooltip" title="" data-placement="bottom"  data-original-title="退出"><i class="icon-off"></i></a>
					</p>
					</div>
					<div id="sidebar-shortcuts-mini">
						<span class="btn btn-success"></span>
						<span class="btn btn-info"></span>
						<span class="btn btn-warning"></span>
						<span class="btn btn-danger"></span>
					</div>
				</div><!-- #sidebar-shortcuts -->
				<ul class="nav nav-list">
				<c:set var="menu_sn" value="${requestScope.menu_sn }" scope="request"></c:set>
				<c:set var="menu_url" value="${requestScope.menu_url }" scope="request"></c:set>
				<c:set var="list" value="${applicationScope.context_menuList }" scope="request"></c:set>
				<c:set var="userMenuList" value="${sessionScope.userMenuList }" scope="request"></c:set>
				<c:forEach var="menu" items="${list }">
					<c:set var="show" value="${false}" scope="request"></c:set>
					<c:forEach var="um" items="${userMenuList }">
						<c:if test="${menu.mId eq um.upId }">
							<c:set var="show" value="${true}" scope="request"></c:set>
						</c:if>
					</c:forEach>
					<c:if test="${menu.upId eq '0' && show }">
						<c:choose>
							<c:when test="${menu_sn eq menu.sn }">				
								<li class="active open">
								  <a href="#" class="dropdown-toggle">
									<i class="icon-${menu.sn }"></i>
									<span>${menu.name }</span>
									<b class="arrow icon-angle-down"></b>
								  </a>
								  <c:if test="${!menu.leaf }">
								   <ul class="submenu">
								   <c:forEach var="sub" items="${list }">
										<c:forEach var="um_inner" items="${userMenuList }">
											<c:if test="${sub.upId eq menu.mId && sub.mId eq um_inner.mId }">
												<c:choose>
													<c:when test="${menu_url eq sub.url }">
														<li class="active"><a href="${basepath }${sub.url}"><i class="icon-double-angle-right"></i>${sub.name }</a></li>
													</c:when>
													<c:otherwise>
														<li><a href="${basepath }${sub.url}"><i class="icon-double-angle-right"></i>${sub.name }</a></li>
													</c:otherwise>
												</c:choose>
											</c:if>
										</c:forEach>
									</c:forEach>
								  </ul>
								  </c:if>
								</li>
							</c:when>
							<c:otherwise>
								<li>
								  <a href="#" class="dropdown-toggle">
									<i class="icon-${menu.sn }"></i>
									<span>${menu.name }</span>
									<b class="arrow icon-angle-down"></b>
								  </a>
								  <c:if test="${!menu.leaf }">
								   <ul class="submenu">
								   <c:forEach var="sub" items="${list }">
										<c:forEach var="um_inner" items="${userMenuList }">
											<c:if test="${sub.upId eq menu.mId && sub.mId eq um_inner.mId }">
												<li><a href="${basepath }${sub.url}"><i class="icon-double-angle-right"></i>${sub.name }</a></li>
											</c:if>
										</c:forEach>
									</c:forEach>
								  </ul>
								  </c:if>
								</li>
							</c:otherwise>
				</c:choose>
			</c:if>
		</c:forEach>

				</ul><!--/.nav-list-->

				<div id="sidebar-collapse"><i class="icon-double-angle-left"></i></div>
			</div><!--/#sidebar-->



	