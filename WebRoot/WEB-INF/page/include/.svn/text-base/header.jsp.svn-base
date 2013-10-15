<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@
include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="pf_header">
    	<div class="pf">
			<div class="header reHeight">
				<div class="z"><a href="${basepath }/index.html"><img src="${basepath }/images/logo.gif" width="88" height="28" /></a></div>
				
                <ul class="y reHeight">
                        <li class="mr mt2"><a href="${basepath }/tostudent.html">学生</a></li>
                        <li class="mr line"><a href="#"><img src="${basepath }/images/line.gif" width="1" height="11" /></a></li>
                        <li class="hover">管理员</li>
                        <li class="mt3"><a href="http://www.myctu.cn"><img src="${basepath }/images/home.gif" width="15" height="13" />网大首页</a></li>
                        <a href="${basepath }/mylogout.html">点击退出</a>
                    </ul>
                <div class="y mt10 mr10">
						<a>${sessionScope.user.name } <span style="margin:0 5px"><img width="1" height="11" src="${basepath }/images/line.gif"></span>（${sessionScope.user.org.name } ) <span style="margin:0 5px"><img width="1" height="11" src="${basepath }/images/line.gif"></span> 
							<c:choose>
								<c:when test="${sessionScope.user.type==0 }">学员</c:when>
								<c:when test="${sessionScope.user.type==5 }">本地网管理员</c:when>
								<c:when test="${sessionScope.user.type==4 }">部门管理员</c:when>
								<c:when test="${sessionScope.user.type==3 }">市管理员</c:when>
								<c:when test="${sessionScope.user.type==2 }">省管理员</c:when>
								<c:when test="${sessionScope.user.type==1 }">集团管理员</c:when>
							</c:choose>
							<span style="margin:0 5px"><img width="1" height="11" src="${basepath }/images/line.gif"></span>
							机构:
							<select onchange="javascript:changeManageOrg(this);">
								<c:forEach var="org" items="${sessionScope.manageOrgList }">
									<option value="${org.orgId }" ${org.orgId eq sessionScope.defaultOrg.orgId?"selected='selected'":"" }>${org.name }</option>
								</c:forEach>
							</select>
						</a>
				</div>
				<div class="y" style="color:#fff;margin:6px 15px 0 0;font-size:14px;">反馈：021-33846066 或  Email:service@myctu.cn</div>
			</div>
	</div>
</div>