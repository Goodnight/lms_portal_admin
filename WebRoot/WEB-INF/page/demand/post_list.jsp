<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 <%@include file="/WEB-INF/page/include/taglibs.jsp"%>   

	
    <div class="reHeight">
    	<div class="z" style="margin-top:4px">岗位名称</div>
        <div class="z"><input type="text" id="postName" name="postName" class="vm input w224 ml6" /></div>
        <div class="z ml12"><input name="input2" type="button" class="searchbutton" value="搜索" onclick="page(1)" /></div>
    </div>
    <div class="dataTables_wrapper" style="padding-bottom:0">
                             <div id="list_demandPostList"></div>   
                            </div>
    <div class="taR"><input id="submit1" name="" type="button" class="step vm windowbutton windowtreebutton"   value="确定" hidefocus="true"/><input name="" type="button" class="back vm windowbutton m10"   value="关闭" hidefocus="true"/></div>

<script type="text/javascript" src="${basepath}/js/demand/demandPostList.js" charset="utf-8"></script>