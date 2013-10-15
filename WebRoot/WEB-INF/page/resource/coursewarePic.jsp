<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>资源课程图文</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
	<body class="bg">
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
                                                                                                        课程图文列表
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
									<div class="searchblock">
										<table border="0" cellspacing="0" cellpadding="0">
											
											<tr>
												<td class="taR">课程名称</td>
                                <td colspan="3" class="taL"><input name="name" type="text" class="inputtext" value="输入课程名称" id="name" />
                                  <input name="input2" type="button" class="searchbutton mr10" value="搜索" hidefocus="true" onclick="selectBottonClick(1)"/><span class="img">高级搜索<img src="${basepath }/images/bluearrowdown.jpg" width="10" height="11" /></span></td>
                              </tr>
                              <tr class="mt10 hidden">
                                <td class="taR">课程编号</td>
                                <td class="taL"><input name="sn" type="text" id="sn" value="" class="input" /></td>
                           
                                <td class="taR">课件属性</td>
                                <td class="taL">
                                    	<select name="propertyId" class="select" id="propertyId">
                                        <option value="">所有课件</option>
                                    	<c:forEach items="${propertiesList }" var="p">
                                    	 <option value="${p.spId }">${p.name }</option>
                                    	</c:forEach>
                                       </select>
									</td>
									</tr>
                              <tr class="mt10 hidden">
								 <td class="taR">标签</td>
                                <td class="taL" colspan="3"><input name="tag" type="text" id="tag" value="" class="input" /></td>
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
                                <td class="taL" colspan="3"><input type="text" class="input" /><span class="tochoose newshowtree">选择岗位</span></td>
                              </tr>
                              <tr class="mt10 hidden">
                                <td class="taR">创建时间</td>
                               <td class="taL" colspan="3"><input  name="startTime" type="text"  class="timetext" value="" id="search_start_date"/><em class="mr10 ml10">到</em><input name="endTime" type="text"  class="timetext" value="" id="search_end_date"/></td>
                                </tr>
                              <tr class="mt10 hidden">
                                <td class="taR">发布状态</td>
                                <td class="taL" colspan="3">
                                    	<select name="status" class="select" id="status">
                                    	    <option value="">全部</option>
                                            <option value="0">未发布</option>
                                            <option value="2">已提交</option>
                                            <option value="1">已发布</option>
                                            <option value="3">省不批准</option>
                                       </select>
                                  </td>
											</tr>
										</table>
										<div align="right" class="mt10 hidden">
											<input name="" type="button" class="searchbutton m10"
												value="搜索" hidefocus="true" onclick="selectBottonClick(1)" />
											<span class="img mr10">收起<img
													src="${basepath }/images/bluearrowup.jpg" width="10"
													height="11" />
											</span>
										</div>
									</div>
									<div class="sortblock">
										<dl>
                            	<dt>排序：</dt>
                                <dd><a href="javascript:;" onclick="sj(1)">按上传时间</a><span>|</span><a href="javascript:;" onclick="pj(1)">按平均分</a><span>|</span><a href="javascript:;" onclick="cs(1)">按学习次数</a><span>|</span><a href="javascript:;" onclick="fx(1)">按分享数</a><span>|</span><a href="javascript:;" onclick="pl(1)">按评论数</a></dd>
                            </dl>
                            <dl>
                            	<dt>规则：</dt>
                                <dd><a href="javascript:;" onclick="zg(1)">最高</a><span>|</span><a href="javascript:;" onclick="zd(1)">最低</a></dd>
                            </dl>
                            <dl>
                            	<dt>内容：</dt>
                                <dd><a href="javascript:;" id="" onclick="seachJHClick(1,this)">全部</a><span>|</span><a href="javascript:;" id="1" onclick="seachJHClick(1,this)">精品</a></dd>
                            </dl>
                            <dl>
											<dt>
												类型：
											</dt>
											<dd>
												<a href="javascript:;" id="">全部</a><span>|</span><a href="javascript:;" id="0">在线课程</a><span>|</span><a href="javascript:;" id="1">直播课程</a>
											</dd>
										</dl>
									</div>
									
									<div>
										<div class="dataTables_wrapper">
											<div class="reHeight mt20">
												<div class="z">
													<em>
													<a href="coursewareList.html"><img src="${basepath }/images/list.jpg" width="26" height="22" /></a><img src="${basepath }/images/picturenow.jpg" width="27" height="22"/>
													</em>
													<em class="hidden"><a href="javascript:;"><img
																src="${basepath }/images/list.jpg" width="26"
																height="22" />
													</a>
													<img src="${basepath }/images/picturenow.jpg" width="27"
															height="22" />
													</em>
												</div>
												<div class="z">
												<input name="" type="checkbox" value="" class="checkbox ml13" onclick="checkAll('groupTypeId')"/>全选
												</div>
												<div class="y">
													<a href="javascript:;" class="functionbutton" id="btn_jh">精品</a>
													<a href="javascript:;" class="functionbutton" id="btn_ls">历史</a>
													<a href="tosaveCoursewareDetails.html" class="functionbutton">新建</a>
													<a href="javascript:;" class="functionbutton leadout">导出</a>
													<a href="javascript:;"  class="functionbutton" id="btn_delete">删除</a>
												</div>
											</div>
											
												<div class="reHeight">
													
													
												</div>
												
											
												
												<!-- 课程图片列表 -->
                                                <div id="list_trainclass"></div>	
											
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
                               <div class="hidden" id="divOrg">
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
									<input id="orgName" name="orgName" type="hidden" value="${orgName}"/>
									<div id="org_jstree"></div>
								</div>
                             <!--  -->  
                                 
							</div>
							
							<!-- zhishi -->
							<div id="divKno">
                                <div id="kno_jstree"></div>
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
			var knoRootId = ['${knoRootId}'];
			
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
		</script>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		<script type="text/javascript">
			var rootId = "${node.id}";
		</script>
		
		<script type="text/javascript" src="${basepath }/js/res/coursewarePic.js" charset="gbk"></script>
		
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






