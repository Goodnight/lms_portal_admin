<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>新建部门培训需求</title>
<jsp:include page="/WEB-INF/page/include/css_bootstrap.jsp"></jsp:include>
</head>
<body class="bg">
<div class="blackall hide">&nbsp;</div>
<div class="treewindow"  >
	<div id="org_jstree1" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="btn btn-info btn-small step mr5 vm treewindowsure" value="确定" /><a href="javascript:;" class="btn btn-small mr5 back vm treewindowback">取消</a></div>                    
</div>
<div id="dialog" class="hide">
    <div class="blackall">&nbsp;</div>
    <div class="newwindow" id="choosepersonco">
        <div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
        <div id="dialog_content" class="cl scroll"></div>
    </div>
</div>

<jsp:include page="/WEB-INF/page/include/header_bootstrap.jsp"></jsp:include>
  <div class="row-fluid">
			<div id="breadcrumbs" class="pfb">
						<ul class="breadcrumb offset1">
							<li class="first">
								<i class="icon-home"></i> 
								<a href="${basepath }/index.html">首页</a><span class="divider"><i class="icon-angle-right"></i></span></li>
							<li>
								<a href="${basepath }/demand/demandDepIndex.html">部门培训需求</a><span class="divider"><i class="icon-angle-right"></i></span>
							</li>
							<li class="last">
								新建部门培训需求
                       		</li>
						</ul>
				</div>
           <div class="y"></div>
       </div> 
 
   
  <div class="content cl">
  <br/>
  	<br/>
   	<br/>
	<br/>
   	<br/>
    <br/>
        <div class="ngreyborder changeblue2 mt20">
            <h2 class="png_bg">新建部门培训需求</h2>
                <form id="demandDepNew" action="saveDmdDep.html" method="post"> 
                
                <div class="reHeight">
            	<div class="basic_information mt2" >
                <table border="0" cellspacing="15" cellpadding="15">
                	<colgroup>
                    	<col width="100" />
                        <col width="300" />
                        <col width="70" />
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<td class="taR w150"><em>*</em>年度</td>
                        	<td>
                                <select id="topic_id" name="topic_id" >
                                    <c:forEach items="${listTopic}" var="item" >
                                        <option value="${item.dtId}">${item.year}</option>
                                    </c:forEach>
                                </select>        
                            </td>
                            <td class="taR"><em>*</em>部门</td>
                            <td><div class="vm z">
                            <label class="unitlabel" id="${orgDepId }">${orgDepName }
                            <input name="orgDepIdDefault" type="hidden" value="${orgDepId }" />
                            <a href="javascript:;" class="ml6"><img src="${basepath }/images/deletegreen.gif" /></a></label></div>
                            <div class="z"><span class="btn btn-mini btn-info vm newshowtree">选择部门</span></div></td>
                        </tr>
                        <tr>
                            <td class="taR"><em>*</em>需求类别</td>
                            <td><%int i=0; %>
                            <c:forEach items="${list}" var="bo">
                            <%i++; 
                            if(i==2){
                            %>
                          	  <label class="options checked"><input name="type_id" type="radio"  value="${bo.spId}" checked="checked" class="ace" /><label class="lbl">${bo.name}</label></label>
                          	  <%}else{ %>
                          	   <label class="options"><input name="type_id" type="radio" class="ace"  value="${bo.spId}" /><label class="lbl">${bo.name}</label></label>
                          	  <%} %>
   							</c:forEach>
                             </td>   
                        </tr>
                        <tr>
                        	<td class="taR" height="47"><em>*</em>培训需求内容</td>
                            <td colspan="3">
                           	  <select id="dmd_item_id" name="dmd_item_id" >
                                	<option value="" >请选择</option>
                               		<c:forEach items="${dmdItemList}" var="item" >
	                                <option value="${item.dtId}">${item.name}</option>
                               		</c:forEach>
                              </select>
                            </td> 
                        </tr>
                        <tr>
                        	<td class="taR vt"><em>*</em>培训目标</td>
                            <td colspan="3"><textarea  id="trainAim" name="trainAim" cols="" rows=""></textarea></td>
                        </tr>
                        <tr>
                        	<td class="taR vt"><em>*</em>培训对象</td>
                            <td colspan="3"><textarea id="trainObject" name="trainObject" cols="" rows=""></textarea></td>
                        </tr>
                        <tr>
                        	<td class="taR"><em>*</em>培训人数</td>
                            <td colspan="3"><input type="text" class="input vm w80" name="personNums" id="personNums" /><!--只能输入数字--></td>   
                        </tr>
                        <tr>
                        	<td class="taR vt">备注</td>
                            <td colspan="3"><textarea name="remark" cols="" rows=""></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <div align="right" class="mr100"><input type="submit" class="btn btn-small btn-info step m10" value="确定"/><a href="demandDepIndex.html" class="btn btn-small back vm">返回</a></div>
            </div>
                </div>
            </form>                  
        </div>
    </div>
</div>
<jsp:include page="/WEB-INF/page/include/script_bootstrap.jsp"></jsp:include>
<script type="text/javascript" src="${basepath}/js/demand/demandDepNew.js" charset="gbk"></script>
<script type="text/javascript" src="${basepath}/js/demand/newblock.js" charset="gbk"></script>
</body>
</html>
    