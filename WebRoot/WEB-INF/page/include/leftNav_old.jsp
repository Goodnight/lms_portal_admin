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
		<c:forEach var="menu" items="${list }">
			<c:if test="${menu.upId eq '0'}">
				<c:choose>
					<c:when test="${menu_sn eq menu.sn }">
						<div class="greyborder smallblue">&nbsp;</div>
						<div class="leftunit ${fn:length(menu.name)>4?'cl':''} unithover2 reHeight" style="display: <c:out value="${sessionScope.user.type != '1' && menu.sn == '4'?'none':'' }"/>">
							<div class="z" style="display: <c:out value="${sessionScope.user.type != '1' && menu.sn == '4'?'none':'' }"/>">
								<div class="png${menu.sn }w"></div>
								<div class="png${menu.sn }w hidden"></div>
							</div>
							<div class="y ${fn:length(menu.name)>4?'specialy':''}" style="display: <c:out value="${sessionScope.user.type != '1' && menu.sn == '4'?'none':'' }"/>">${menu.name }</div>
							<c:if test="${!menu.leaf }">
								<div class="nextunit ${fn:length(menu.name)>4?'bw':''}" style="display:none;">
									<c:forEach var="sub" items="${list }">
										<c:if test="${sub.upId eq menu.mId }">
											<a href="${basepath }${sub.url}">${sub.name }</a>
										</c:if>
									</c:forEach>
								</div>
							</c:if>
						</div>
					</c:when>
					
					<c:otherwise>
						<div class="greyborder">&nbsp;</div>
						<div class="leftunit ${fn:length(menu.name)>4?'cl':''} reHeight" style="display: <c:out value="${sessionScope.user.type != '1' && menu.sn == '4'?'none':'' }"/>">
							<div class="z" style="display: <c:out value="${sessionScope.user.type != '1' && menu.sn == '4'?'none':'' }"/>">
								<div class="png${menu.sn }"></div>
								<div class="png${menu.sn }w hidden"></div>
							</div>
							<div class="y ${fn:length(menu.name)>4?'specialy':''}" style="display: <c:out value="${sessionScope.user.type != '1' && menu.sn == '4'?'none':'' }"/>">${menu.name }</div>
							<c:if test="${!menu.leaf }">
								<div class="nextunit ${fn:length(menu.name)>4?'bw':''}" style="display:none;">
									<c:forEach var="sub" items="${list }">
										<c:if test="${sub.upId eq menu.mId }">
											<a href="${basepath }${sub.url}">${sub.name }</a>
										</c:if>
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