<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@
include file="/WEB-INF/page/include/taglibs.jsp"%>
		<div class="navbar navbar-inverse navbar-fixed-top">
		  <div class="navbar-inner">
		   <div class="container-fluid">


			  <a class="brand" href="#"><small><i class="icon-leaf"></i> 中国电信</small> </a>
			  
			  <ul class="nav ace-nav pull-right">
				  	<li class="hidden-480" style="background-color: #438eb9;font-size:14px;color:#fff">
				  	<span><small>反馈：021-33846066</small> 或Email:service@myctu.cn</span>
				  	</li>
					<li class="selectHead hidden-480" style="background-color: #438eb9;color:#fff">
					&nbsp;机构:
						<select onchange="javascript:changeManageOrg(this);">
							<c:forEach var="org" items="${sessionScope.manageOrgList }">
								<option value="${org.orgId }" ${org.orgId eq sessionScope.defaultOrg.orgId?"selected='selected'":"" }>${org.name }</option>
							</c:forEach>
						</select>
						&nbsp;
					</li>
					<li class="user-profile hidden-480" style="background-color: #438eb9;">
						<a class="user-menu dropdown-toggle" href="#" data-toggle="dropdown">
							
							<span id="user_info">
								<small>${sessionScope.user.name }</small> 
								<c:choose>
									<c:when test="${sessionScope.user.type==0 }">学员</c:when>
									<c:when test="${sessionScope.user.type==5 }">本地网管理员</c:when>
									<c:when test="${sessionScope.user.type==4 }">部门管理员</c:when>
									<c:when test="${sessionScope.user.type==3 }">市管理员</c:when>
									<c:when test="${sessionScope.user.type==2 }">省管理员</c:when>
									<c:when test="${sessionScope.user.type==1 }">集团管理员</c:when>
								</c:choose>
							</span>
							<i class="icon-caret-down"></i>
						</a>
						<ul id="user_menu" class="pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-closer">
							<li><a href="http://www.myctu.cn"><i class="icon-home"></i> 网大首页</a></li>
							<li><a href="${basepath }/tostudent.html"><i class="icon-user"></i> 学生系统</a></li>
							<li class="divider"></li>
							<li><a href="${basepath }/mylogout.html"><i class="icon-off"></i> 点击退出</a></li>
						</ul>
					</li>

			  </ul><!--/.ace-nav-->

		   </div><!--/.container-fluid-->
		  </div><!--/.navbar-inner-->
		</div><!--/.navbar-->