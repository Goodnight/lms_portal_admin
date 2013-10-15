<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>资源管理课程</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
	<body class="bg">
	<jsp:include page="/WEB-INF/page/include/downloadData.jsp"></jsp:include>
	<form id="query_form" name="query_form" action="">
	</form>
	<!-- 弹出选择岗位树 -->
	<div class="blackall hidden">&nbsp;</div>
<div class="treewindow">
	<div id="org_jstree1" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
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
												<a href="${basepath }/courseware/coursewareList.html">培训资源</a>
											</li>
											<li class="last">
												课程列表
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
										<ul class="dpnav2 m10 reHeight">
											<li class="now">
												课程
											</li>
											<li>
												<a href="${basepath }/doc/docList.html?docType=0">文档</a>
											</li>
											<li>
												<a href="${basepath }/case/caseDocList.html?docType=1">案例</a>
											</li>
										</ul>
										<table border="0" cellspacing="0" cellpadding="0">
											<input name="noticeOrgId" type="hidden" class="inputtext"
														value="${noticeOrgId }" id="noticeOrgId" />
											<input name="noticeStatus" type="hidden" class="inputtext"
														value="${noticeStatus }" id="noticeStatus" />
											<tr>
												<td class="taR">
													课程名称
												</td>
												<td colspan="3" class="taL">
													<input name="name" type="text" class="inputtext"
														value="输入课程名称" id="name" />
													<input name="input2" type="button"
														class="searchbutton mr10" value="搜索" hidefocus="true"
														 id="btn_selCourseware"/>
													<span class="img">高级搜索<img
															src="${basepath}/images/bluearrowdown.jpg" width="10"
															height="11" />
													</span>
												</td>
											</tr>
											<tr class="mt10 hidden">
												<td class="taR">
													课程编号
												</td>
												<td class="taL">
													<input name="sn" type="text" id="sn" value="" class="input" />

												</td>

												<td class="taR">
													课件属性
												</td>
												<td class="taL">
													<select name="propertyId" class="select" id="propertyId">
														<option value="">
															所有课件
														</option>
														<c:forEach items="${propertiesList }" var="p">
															<option value="${p.spId }">
																${p.name }
															</option>
														</c:forEach>
													</select>
												</td>
											</tr>

											<tr class="mt10 hidden">
												<td class="taR">
													标签
												</td>
												<td class="taL" colspan="3">
													<input name="tag" type="text" class="input" id="tag" />
												</td>
											</tr>
											<tr class="mt10 hidden">
												<td class="taR">
													类型
												</td>
												<td class="taL" colspan="3">
													<select name="coursewareType" class="select" id="coursewareType">
														<option value="">
															全部
														</option>
														<option value="0">
															在线课程
														</option>
														<option value="1"> 
															直播课程
														</option>
													</select>
												</td>
											</tr>
											<tr class="mt10 hidden">
												<td class="taR">适用岗位</td>
                                                 <td class="taL" colspan="3">
                                                 <input type="hidden" name="eth_id" id="eth_id" value="" />
                                                 <input id="ethName" name="class_dep_name" type="text" class="input vm si" value="" />
		                                         <input id="ethId" name="class_dep" type="hidden" value=""/>
                                                 <span class="tochoose chooseEth">选择岗位</span>
                                                 </td>
											</tr>

											<tr class="mt10 hidden">
												<td class="taR">
													创建时间
												</td>
												<td class="taL" colspan="3">
													<input id="search_start_date" type="text" class="timetext"
														name="startDt" />
													<em class="mr10 ml10">到</em>
													<input id="search_end_date" type="text" class="timetext"
														name="endDt" />
												</td>
											</tr>
											<tr class="mt10 hidden">
												<td class="taR">
													发布状态
												</td>
												<td class="taL" colspan="3">												
													<select name="status" class="select" id="status">
														<option value="">
															全部
														</option>
														<option value="0">
															未发布
														</option>
														<option value="2">
														          已提交
														</option>
														<option value="1">
															已发布
														</option>
														<option value="3">
															省不批准
														</option>
													</select>
													
													
												</td>
											</tr>
										</table>
										<div align="right" class="mt10 hidden">
											<input name="" type="button" class="searchbutton m10"
												value="搜索" hidefocus="true" id="btn_selAllCours"/>
											<span class="img mr10">收起<img
													src="${basepath }/images/bluearrowup.jpg" width="10"
													height="11" />
											</span>
										</div>
									</div>
									<div class="sortblock">
										<dl>
											<dt>
												排序：
											</dt>
											<dd id="pX">
												<a id="createDt" href="javascript:;" onclick="sj(1,this)">按上传时间</a><span>|</span><a id="score" href="javascript:;" onclick="sj(1,this)">按平均分</a><span>|</span><a id="learning" href="javascript:;" onclick="sj(1,this)">按学习人数</a><span>|</span><a id="share" href="javascript:;" onclick="sj(1,this)">按分享数</a><span>|</span><a id="comment" href="javascript:;" onclick="sj(1,this)">按评论数</a>
											</dd>
										</dl>
										<dl>
											<dt>
												规则：
											</dt>
											<dd id="gZ">
												<a id="desc" href="javascript:;" onclick="zd(1,this)">最高</a><span>|</span><a id="asc" href="javascript:;" onclick="zd(1,this)">最低</a>
											</dd>
										</dl>
										<dl>
											<dt>
												内容：
											</dt>
											<dd id="nR">
												<a href="javascript:;" id="" onclick="seachJHClick(1,this)">全部</a><span>|</span><a href="javascript:;" id="1" onclick="seachJHClick(1,this)">精品</a>
											</dd>
										</dl>
									</div>
									<input type="hidden" id="orgId" value="${sessionScope.defaultOrg.orgId }"/>
									<input type="hidden" id="userId" value="${sessionScope.user.type }"/>
									<div>
										<div class="dataTables_wrapper">
											<div class="reHeight mt20">
												<div class="z">
												<div class="changeshow cl">
												<a href="javascript:;" id="couList"></a>
												<a href="javascript:;"  id="couPicList"></a>
												</div>
													
												</div>
												<div class="y">
												<!-- user.type 1:集团管理员,2:省管理员,3:市管理员,4:部门管理员,5:本地网管理员； -->
												<c:if test="${sessionScope.user.type == 1}">
													<a href="javascript:;" class="functionbutton" id="btn_jh">精品</a><a
														href="javascript:;" class="functionbutton" id="btn_ls">历史</a>
														</c:if>
														<c:if test="${sessionScope.user.type != 4 && sessionScope.user.type != 5}">
															<a id="btn_add" href="javascript:;" class="functionbutton">新建</a>
														<a href="javascript:;" class="functionbutton" id="btn_dc" onclick="export_courseware()">导出</a>
														<a href="javascript:;" class="functionbutton" id="btn_delete">删除</a>
														</c:if>
												</div>
											</div>
												<div class="reHeight">
													
												</div>
												<a>${userd}</a>
												<input type="hidden" value="${alertCou }"/>
												<!-- 课件列表 -->
												<div id="list_trainclass"></div>
												<!-- 课件图文列表 -->
												<div id="list_courswarePic"></div>
												
												
	             	
										</div>
									</div>
								</div>
							</div>
							
							<div class="newlefttree">
								<div class="pftree">
                                    <ul class="listnav reHeight">
                                <li  onclick="showDivKno()">组织机构</li>
                                <li class="now" id="btnOrg" onclick="showDivOrg()">知识分类</li>
                            </ul>
                               <div>
                               <!--  -->   
                               <div id="divOrg" class="hidden">
									<div class="m10">
										是否包含下级
										<label class="ml12">
											<input id="isSub" name="isSub" type="radio" value="1" class="vm"  checked="checked"/>
											是
										</label>
										<label class="ml12">
											<input id="isSub" name="isSub" type="radio" value="0" class="vm"/>
											否
										</label>
									</div>
									<div id="org_jstree_org"></div>
								</div>
                             <!--  -->  
                                 
							</div>
							
							<!-- zhishi -->
							<div id="divKno">
								<div class="m10">
										是否包含下级
										<label class="ml12">
											<input id="isSubs" name="isSubs" type="radio" value="1" class="vm"  checked="checked"/>
											是
										</label>
										<label class="ml12">
											<input id="isSubs" name="isSubs" type="radio" value="0" class="vm"/>
											否
										</label>
									</div>
                                <div id="kno_jjjstree"></div>
                             </div> 
                             
							 
                            <!-- zhishi -->
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
		        	<c:set var="menu_sn" value="11" scope="request"></c:set>
		    		<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
		        </div>
			</div>
		</div>
		<script type="text/javascript">
			var basepath = "${basepath}";

			var url = "${url}";
			var knoRootId = ['${knoRootId}'];
			var rootPosition = ["${sessionScope.rootposition}"];
			//树形菜单
			function showDivKno(){
				$("#divOrg").removeClass("hidden");
				$("#divKno").toggleClass("hidden");
			}
			
				function showDivOrg()
				{
				$("#divOrg").toggleClass("hidden");
				$("#divKno").removeClass("hidden");
				}
				
				//当页面加载时,判断是否是从新建或修改页面保存之后重定向到此列表页面，如果是则关闭此页面.
				window.onload = function(){
					if ('${param.closeSelf}' == 'true') {
						//alert("保存成功!");
						window.close();
					} 
				};
		</script>
		
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		<script type="text/javascript">
			var rootId = "${node.id}";
			
		</script>
		
		
		
		<script type="text/javascript" src="${basepath }/js/res/courseware.js" charset="gbk"></script>
        <script type="text/javascript">	
        
		/**
 * 悬浮事件
 */
function showOrg(o){
            //悬浮事件
	    var oId = $(o).attr("id");
		    	$.ajax({
		    		url : "toShowAllOrgName.html?orgId="+oId,
		    		type : "get",
		    		dataType : "json",
		    		success : function(namepath){
		    			$(o).attr('title',namepath);
		    			
		    		}
		    	});
}
</script>
	</body>

</html>






