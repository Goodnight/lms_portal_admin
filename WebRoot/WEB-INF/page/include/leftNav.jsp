<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="leftnav3">
	<div class="changecloumn2">
		<img src="${basepath }/images/arrowl.jpg" width="7" height="10" />
		<img src="${basepath }/images/arrowr.jpg" width="7" height="10" class="hidden" />
	</div>
	<div>
		<c:set var="menu_sn" value="${requestScope.menu_sn }" scope="request"></c:set>
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
						<div class="greyborder smallblue">&nbsp;</div>
						<div class="leftunit cl unithover2 reHeight">
							<div class="z">
								<div class="png${menu.sn }w"></div>
								<div class="png${menu.sn }w hidden"></div>
							</div>
							<div class="y specialy">${menu.name }</div>
							<c:if test="${!menu.leaf }">
								<div class="nextunit bw">
									<c:forEach var="sub" items="${list }">
										<c:forEach var="um_inner" items="${userMenuList }">
											<c:if test="${sub.upId eq menu.mId && sub.mId eq um_inner.mId }">
												<a href="${basepath }${sub.url}">${sub.name }</a>
											</c:if>
										</c:forEach>
									</c:forEach>
								</div>
							</c:if>
						</div>
					</c:when>
					
					<c:otherwise>
						<div class="greyborder">&nbsp;</div>
						<div class="leftunit reHeight">
							<div class="z">
								<div class="png${menu.sn }"></div>
								<div class="png${menu.sn }w hidden"></div>
							</div>
							<div class="y specialy">${menu.name }</div>
							<c:if test="${!menu.leaf }">
								<div class="nextunit bw">
									<c:forEach var="sub" items="${list }">
										<c:forEach var="um_inner" items="${userMenuList }">
											<c:if test="${sub.upId eq menu.mId && sub.mId eq um_inner.mId }">
												<a href="${basepath }${sub.url}">${sub.name }</a>
											</c:if>
										</c:forEach>
									</c:forEach>
								</div>
							</c:if>
						</div>
					</c:otherwise>
				</c:choose>
			</c:if>
		</c:forEach>
		<div class="greyborder lastline">&nbsp;</div>
	</div>
</div>