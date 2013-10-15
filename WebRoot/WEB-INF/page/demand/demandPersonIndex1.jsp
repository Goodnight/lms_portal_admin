<%@page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>员工培训需求</title>
<jsp:include page="/WEB-INF/page/include/css_bootstrap.jsp"></jsp:include>
</head>
<body class="bg">
<<<<<<< .mine
<div class="blackall hidden">&nbsp;</div>
<div class="newwindow hidden" id="leadinco">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
    <div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">导入培训班</h2>
            <div class="basic_information w90p">
              <div class="pt20">导入培训班：<input name="" type="file" /> <a href="" class="ml30">下载导入模板 <img src="${basepath }/images/download.png" width="16" height="16" class="vm"/></a></div>
                <div class="m10 taR "><input type="button" class="step windowbutton" value="确定" /></div>
            </div>
    </div>
</div>
	<jsp:include page="/WEB-INF/page/include/header_bootstrap.jsp"></jsp:include>
	    <c:set var="menu_sn" value="10" scope="request"></c:set>
	    <c:set var="menu_url" value="/demand/demandPersonIndex.html" scope="request"></c:set>
        <jsp:include page="/WEB-INF/page/include/leftNav_bootstrap.jsp"></jsp:include>  
    <div id="main-content" class="clearfix">
    	<div id="breadcrumbs" class="pfb">
        	
            <ul class="breadcrumb">
                <li class="first">
                   <i class="icon-home"></i>  
                   <a href="${basepath }/index.html">首页</a><span class="divider"><i class="icon-angle-right"></i></span>
                </li>
                <li><a href="${basepath }/demand/demandPersonIndex.html">员工培训需求</a></li>
             </ul>
         </div>
                                    <div class="y"></div>
                             

       <div class="clearfix newmain">
			
              <div class="newmainco">
              <div class="page-right">
                   <ul class="nav nav-tabs">
                      <li class="active"><a>查询</a></li>
                  </ul>
                  <br />
                                    <input type="hidden" id="dep_id" name="dep_id"/>
                                <table border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td class="taR">员工编号&nbsp;</td>
                                    <td class="taL "><div class="inputType"><input  id="sn" type="text" class="input"/></div></td>
                                    <td class="taR">&nbsp;&nbsp;&nbsp;员工姓名&nbsp;</td>
                                    <td class="taL"><div class="inputType"><input id="name" type="text" class="input"/></div></td>
                                    <td class="taR">&nbsp;&nbsp;&nbsp;类别&nbsp;</td>
                                    <td class="taL">
                                        <label class="option" style="display: inline-block;"><input id="category" name="13" type="radio" value="0" class="ace" /><label class="lbl"> 年度</label></label>
                                        <label class="option" style="display: inline-block;"><input id="category" name="13" type="radio" value="1" class="ace" /><label class="lbl"> 平时</label></label>
                                        <label class="option choosed" style="display: inline-block;"><input id="category" name="13" type="radio" value="" class="ace"  /><label class="lbl"> 不限</label></label>
                                    </td>
                                </tr>
                              	<tr>
                                <td class="taR">年度</td>
                                <td class="taL">
                                	<select id="year" class="select">
                                        <option value="">全部</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                     </select>
                                </td>
                                <td class="taR">迫切性&nbsp;</td>
                                <td class="taL">
                                    <label class="option" style="display: inline-block;"><input id="urgentLevel" type="radio" value="2" class="ace" /><label class="lbl">  迫切</label></label>
                                    <label class="option" style="display: inline-block;"><input id="urgentLevel" type="radio" value="1" class="ace"/><label class="lbl">  一般</label></label>
                                    <label class="option" style="display: inline-block;"><input id="urgentLevel" type="radio" value="0" class="ace"/><label class="lbl">  不迫切</label></label>
                                    <label class="option choosed" style="display: inline-block;"><input id="urgentLevel" type="radio" value="" class="ace"/><label class="lbl">  不限</label></label>
                                </td>
                              </tr>
                                </table>
                                <div class="taR">
                                    <label id="searchButton" type="button" class="btn btn-info btn-small searchbutton m10"  hidefocus="true" /><i class="icon-search"></i> 搜索</label>
                                    <input id="orgDepOriId" type="hidden" value="${orgDepOriId }" /><!-- 初登录时获得所管辖范围 -->
                                </div>
                       
                        <div>
                        <div class="row-fluid">
                        			<div class="span6">
                        				<div class="blue"><h4>员工培训需求列表</h4></div>
                        			</div>
                        			</div>
                            <div class="dataTables_wrapper">

                                <!-- 发布屏蔽  <div class="y"><a href="#" class="functionbutton leadout">导出</a></div> -->
                               <div id="list_demandPerson"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="newlefttree">
                    	<div class="pftree">
                        	<h3>机构部门</h3>
                            <div class="m10">是否包含下级<label class="ml12" ><input name="isChildDep" type="radio" value="1" class="ace vm" checked="checked" /><label class="lbl"> 是</label></label><label class="ml12"><input name="isChildDep" type="radio" value="0" class="ace vm" /><label class="lbl"> 否</label></label></div>
                    		<div id="org_jstree"></div>
=======
	<jsp:include page="/WEB-INF/page/include/downloadData.jsp"></jsp:include>
	<div class="container">
		<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
		<div class="cl">
			<div class="newright">
				<div class="newrightco">
					<div class="listpagenav">
						<div class="breadCrumbHolder pf">
							<div class="breadCrumb reHeight" id="breadCrumb3">
								<div class="z">
									<ul>
										<li class="first"><a href="${basepath }/index.html">首页</a>
										</li>
										<li><a href="${basepath }/demand/demandPersonIndex.html">员工培训需求</a></li>
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
										<li class="now">查询</li>
									</ul>
									<input type="hidden" id="dep_id" name="dep_id" />
									<table border="0" cellspacing="0" cellpadding="0">
										<tr>
											<td class="taR">员工编号</td>
											<td class="taL"><input id="sn" type="text" class="input" /></td>
											<td class="taR">员工姓名</td>
											<td class="taL"><input id="name" type="text"
												class="input" /></td>
											<td class="taR">类别</td>
											<td class="taL"><label><span class="option"><input
														id="category" name="13" type="radio" value="0" /></span> 年度</label> <label><span
													class="option"><input id="category" name="13"
														type="radio" value="1" /></span> 平时</label> <label><span
													class="option choosed"><input id="category"
														name="13" type="radio" value="" /></span> 不限</label></td>
										</tr>
										<tr>
											<td class="taR">年度</td>
											<td class="taL"><select id="year" class="select">
													<option value="">全部</option>
													<option value="2013">2013</option>
													<option value="2012">2012</option>
													<option value="2011">2011</option>
													<option value="2010">2010</option>
													<option value="2009">2009</option>
													<option value="2008">2008</option>
													<option value="2007">2007</option>
													<option value="2006">2006</option>
													<option value="2005">2005</option>
													<option value="2004">2004</option>
													<option value="2003">2003</option>
											</select></td>
											<td class="taR">迫切性</td>
											<td class="taL"><label><span class="option"><input
														id="urgentLevel" type="radio" value="2" /></span> 迫切</label> <label><span
													class="option"><input id="urgentLevel" type="radio"
														value="1" /></span> 一般</label> <label class="autowidth"><span
													class="option"><input id="urgentLevel" type="radio"
														value="0" /></span> 不迫切</label> <label><span
													class="option choosed"><input id="urgentLevel"
														type="radio" value="" /></span> 不限</label></td>
										</tr>
									</table>
									<div class="taR">
										<input id="searchButton" type="button"
											class="searchbutton m10" value="搜索" hidefocus="true" /> <input
											id="orgDepOriId" type="hidden" value="${orgDepOriId }" />
										<!-- 初登录时获得所管辖范围 -->
									</div>
								</div>
								<div>
									<div class="dataTables_wrapper mt20">
										<h3 class="reHeight">
											<div class="z" style="font-size: 14px;">员工培训需求列表</div>
											<div class="y">
												<input type="button" class="functionbutton" value="导出"
													onclick="export_userTrain()" />
											</div>
										</h3>
										<div id="list_demandPerson"></div>
									</div>
								</div>
							</div>
>>>>>>> .r12636
						</div>
<<<<<<< .mine
                    </div>
                    <div class="extra">
                    	<h3><div class="extraimg"></div><div class="extraimg extraimon"></div><div class="extraimg extraimg2"></div><div class="extraimg extraimon2"></div></h3>
                    </div>
                </div>
            </div>
        </div>
 
</div>
</div>
<jsp:include page="/WEB-INF/page/include/script_bootstrap.jsp"></jsp:include>
<script type="text/javascript" src="${basepath}/js/demand/demandPerson_bootstrap.js" charset="gbk"></script>
=======
						<div class="newlefttree">
							<div class="pftree">
								<h3>机构部门</h3>
								<div class="m10">
									是否包含下级<label class="ml12"><input name="isChildDep"
										type="radio" value="1" class="vm" checked="checked" /> 是</label><label
										class="ml12"><input name="isChildDep" type="radio"
										value="0" class="vm" /> 否</label>
								</div>
								<div id="org_jstree"></div>
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
				<c:set var="menu_sn" value="10" scope="request"></c:set>
				<jsp:include page="/WEB-INF/page/include/leftNav.jsp"></jsp:include>
			</div>
		</div>
	</div>
	<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
	<script type="text/javascript"
		src="${basepath}/js/demand/demandPerson.js" charset="gbk"></script>
>>>>>>> .r12636
</body>
</html>
