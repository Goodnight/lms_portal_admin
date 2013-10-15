<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>岗位课程体系</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
		
		
	</head>
	<body class="bg">
	<div class="blackall hidden">&nbsp;</div>
<div class="newwindow hidden" id="choosepersonco" style="width:714px;margin: -260px 0 0 -357px;">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
    <div class="scroll" style="overflow-x:hidden">
    	
    </div>
</div>
		<div class="container">
			<jsp:include page="/WEB-INF/page/include/header.jsp" />
			<div class="cl">
				<div class="newright">
					<div class="newrightco">
						<div class="listpagenav">
							<div class="breadCrumbHolder pf">
								<div class="breadCrumb reHeight" id="breadCrumb3">
									<div class="z">
										<ul>
											<li class="first">
                                            <a href="${basepath }/">首页</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">岗位体系</a>
                                        </li>
                                        <li class="last">
                                                                                                                      岗位课程体系
                                        </li>
										</ul>
									</div>
									<div class="y"></div>
								</div>
							</div>
						</div>
						<div class="reHeight">
							<div class="newmain">
								<div class="newmainco">
									<div class="searchblock">
									
									<input type="hidden" id="ddd" value="${ueditorUrlPath }"/>
									
									<!-- 第一次进入页面得到第一个岗位栏目ID -->
									<input type="hidden" id="firstId" value="${firstId}"/>
			                                <ul class="m10 reHeight newjoblist" style="width:97%">
			                                <c:forEach items="${gainPosList }" var="g" varStatus="st" >
			                                   <li id="${g.spId }" class='<c:out value="${st.index==0?'now':'' }"/>'>${g.name }</li>
			                                </c:forEach>
			                                </ul>
			                                <span></span>
			                                <div>
			                                </div>
			                        </div>
			                        <div class="ngreyborder changeblue2 m10 w97p">
                            	
                            	<div class="dataTables_wrapper hidden" id="btn_bj">
                            		<input type="hidden" id="positionIntroId" value=""/>
                            		
                                	<div class="mt10 ml12 pr" style="overflow:auto;"><textarea id="myEditor" style="width:97%"></textarea></div>
                                	<div class="taR mt10"><input type="button" value="保存" id="btn_save" class="step vm m10" name=""><a class="back m10 vm chooseperson" href="javascript:;">预览</a></div>
                                </div>
                        		
                        		
               			  </div>
								</div>
							</div>
							
							<div class="newlefttree">
								<div class="pftree">
                                    <ul class="listnav reHeight">
                                <li>岗位族群</li>
                            </ul>
                               <div>
                               <div>
									<div id="eth_jstree"></div>
								</div>
                                 
							</div>							
                                </div>
                            </div> 
                            <div class="extra">
								<h3>
									<div class="extraimg"></div>
									<div class="extraimg extraimon"></div>
									<div class="extraimg extraimg2"></div>
									<div class="extraimg extraimon2"></div>
								</h3>
							</div>
						</div>
					</div>
				</div>
				<div class="newleft">
		        	<!-- 导入左侧导航 -->
		        	<c:set var="menu_sn" value="14" scope="request"></c:set>
		    		<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
		        </div>
			</div>
		</div>
		<script type="text/javascript">
			var basepath = "${basepath}";
			var rootPosition = ["${sessionScope.rootposition}"];
		</script>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
	<script type="text/javascript" src="${basepath }/ueditor/editor_config.js"></script>
        <script type="text/javascript" src="${basepath }/ueditor/editor_all.js"></script>	
<script type="text/javascript">
    var editor = new UE.ui.Editor();
    editor.render("myEditor");
    //1.2.4以后可以使用一下代码实例化编辑器
    //UE.getEditor('myEditor')
    </script>
    <script type="text/javascript" src="${basepath }/js/orgPos/orgPos.js" charset="gbk"></script>
    
	</body>

</html>






