<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>待办事项</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
		<script>
			function closeNotice(ncId){
				 $.ajax({
					url : basepath+"/closenotice.html",
					type : "get",
					async : false,
					data : "ncId="+ncId,
					dataType : "json",
					success : function(data){
						if(data){
							alert("关闭待办事项提示成功！");
						}else{
							alert("关闭待办事项提示失败！");
						}
					}
				});
			}
		</script>
	</head>
	<body class="bg">
		<div id="dialog" class="hidden">
			<div class="blackall">&nbsp;</div>
			<div class="newwindow">
				<div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
			    <div id="dialog_content" class="cl"></div>
			</div>
		</div>
		<div class="container">
		    <!-- 导入头部文件 -->
		    <jsp:include page="/WEB-INF/page/include/header.jsp" />
		    <div class="cl">
		        <div class="newright">
		        	<div class="newrightco">
		        		<div class="listpagenav">
		        			<!-- 页面导航 -->
		                  	<div class="breadCrumbHolder pf">
		                          <div class="breadCrumb reHeight" id="breadCrumb3">
		                              <div class="z">
		                                  <ul>
		                                      <li class="first">
		                                      	<a href="${basepath }/index.html">首页</a>
		                                      </li>
		                                      <li class="last">
			                                       待办事项
			                                   </li>
		                                  </ul>
		                              </div>
		                              <div class="y"></div>
		                          </div>
		                      </div>
		                </div>
		       			
                		<div class="todolist">
                        	<dl>
                        		<dt><iframe id="frame_content"  name="frame_content" src="http://cert.exam.myctu.cn/www/command/NavigatorControl?flag=alert" width="100%" height="80px" scrolling="no" frameborder="0" ></iframe></dt>
                            	<!-- <dt>[认证&amp;考试]</dt>
                                <dd>
                                	
                                	<ul>
									<c:forEach items="${examlist}" var="exam" varStatus="st">
                                    	<li>${exam.content}</li>
									</c:forEach>
                                    </ul>
                                </dd> -->
                            </dl>
                            <dl>
                            	<dt>[资源管理]</dt>
                                <dd>
                                	<ul>
                                    	<c:forEach items="${resourcelist}" var="resource" varStatus="st">
                                    	<li>${resource.content}
                                    	&nbsp;<a href="#" onclick="closeNotice('${resource.ncId}');">点击关闭</a>
                                    	</li>
										</c:forEach>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                            	<dt>[培训班管理]</dt>
                                <dd>
                                	<ul>
                                    	<c:forEach items="${trainclasslist}" var="trainclass" varStatus="st">
                                    	<li>${trainclass.content}
                                    	&nbsp;<a href="#" onclick="closeNotice('${trainclass.ncId}');">点击关闭</a>
                                    	</li>
										</c:forEach>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                            	<dt>[培训计划]</dt>
                                <dd>
                                	<ul>
                                    	<c:forEach items="${planlist}" var="plan" varStatus="st">
                                    	<li>${plan.content}
                                    	&nbsp;<a href="#" onclick="closeNotice('${plan.ncId}');">点击关闭</a>
                                    	</li>
										</c:forEach>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                            	<dt>[培训评估]</dt>
                                <dd>
                                	<ul>
                                    	<c:forEach items="${trainplanlist}" var="trainplan" varStatus="st">
                                    	<li>${trainplan.content}
                                    	&nbsp;<a href="#" onclick="closeNotice('${trainplan.ncId}');">点击关闭</a>
                                    	</li>
										</c:forEach>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                            	<dt>[培训需求]</dt>
                                <dd>
                                	<ul>
                                    	<c:forEach items="${traindemandlist}" var="traindemand" varStatus="st">
                                    	<li>${traindemand.content}
                                    	&nbsp;<a href="#" onclick="closeNotice('${traindemand.ncId}');">点击关闭</a>
                                    	</li>
										</c:forEach>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                		<!-- 
                    	<div class="todolist">
                    		<c:forEach var="task" items="${list }" varStatus="st">
                    			<dl>
                    				<dt>${task.module.name }</dt>
                    				<dd>
                    					${task.taskContent }
                    				</dd>
                    			</dl>
                    		</c:forEach>
                        </div>
                         -->
                     </div>
	         	</div>
			                
		        <div class="newleft">
		        	<!-- 导入左侧导航 -->
		        	<c:set var="menu_sn" value="1" scope="request"></c:set>
		    		<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
		        </div>
		    </div>
		    
		</div>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
	</body>

</html>