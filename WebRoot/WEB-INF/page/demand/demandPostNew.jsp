<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>新建岗位培训需求</title>
<jsp:include page="/WEB-INF/page/include/css_bootstrap.jsp"></jsp:include>
</head>
<body class="bg">
<div class="blackall hide">&nbsp;</div>
<div class="treewindow"  >
	<div id="eth_jstree" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="btn btn-info btn-mini step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="btn btn-mini back vm treewindowback">取消</a></div>                    
</div>
<div class="newwindow hide" id="leadinco">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
    <div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">导入模板</h2>
            <div class="basic_information w90p">
              <div class="pt20">导入模板：<input name="" type="file" /> <a href="" class="ml30">下载导入模板 <img src="${basepath }/images/download.png" width="16" height="16" class="vm"/></a></div>
                <div class="m10 taR "><input type="button" class="step releasebutton" value="确定"/></div>
            </div>
    </div>
</div>
<div id="dialog" class="hide">	
<div class="blackall_new">&nbsp;</div>		
<div class="newwindow" id="choosepersonco">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
    <div id="dialog_content" class="cl scroll"></div>
</div>
</div>
<div class="newwindow hide" id="leadinco">
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
<div class="row-fluid">
			<div id="breadcrumbs" class="pfb">
						<ul class="breadcrumb offset1">
							<li class="first">
								<i class="icon-home"></i> 
								<a href="${basepath }/index.html">首页</a><span class="divider"><i class="icon-angle-right"></i></span></li>
							<li><a href="${basepath }/demand/demandPostIndex.html">岗位培训需求列表</a><span class="divider"><i class="icon-angle-right"></i></span>
							</li>
							<li class="last">新建岗位培训需求</li>
						</ul>
			</div>
  
            <div class="y"></div>
        </div> 
			<br>
			<br>
			<br>
			<br>  
			<br>
			<br>       	
    <div class="content cl">
        <div class="ngreyborder changeblue2 mt20">
            <h2 class="png_bg">新建岗位培训需求</h2>
                <form id="saveDemandPost" action="saveDemandPost.html" method="post" >
                <div class="reHeight" >
                	<div class="basic_information mt2" style="padding-top:0">
               		<input type="hidden" id="post_name" name="post_name" value=""/>
                	<input type="hidden" id="post_id" name="post_id" value=""/>
                <div class="courseupload basic_information pl50 pr50"
						style="padding-top: 10px">
                <table border="0" cellspacing="15" cellpadding="15">
                	<colgroup>
                    	<col width="220" />
                        <col width="300" />
                        <col width="85" />
                        <col width="400" />
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<td><em>*</em>年度</td>
                        	<td>
                            	<select id="topic_id" name="topic_id" >
                                    <c:forEach items="${listTopic}" var="item" >
                                        <option value="${item.dtId}">${item.year}</option>
                                    </c:forEach>
                                </select>
                            </td>
                            <td><em>*</em>岗位</td>
                            <td>
                               <div class="vm z"></div>
                               <div class="z"><span class="btn btn-small btn-info vm newshowtree1">选择岗位</span></div>
                            </td>
                        </tr>
                        <tr>
                        	<td><em>*</em>迫切性</td>
                        	<td colspan="3">
                        	   <label class="option"><input id="urgentLevel" name="urgentLevel" type="radio" value="2" class="ace"/><label class="lbl"> 迫切 </label></label>
                        	   <label class="option"><input id="urgentLevel" name="urgentLevel" type="radio" value="1" class="ace"/><label class="lbl"> 一般</label></label>
                        	   <label class="option"><input id="urgentLevel" name="urgentLevel" type="radio" value="0" class="ace"/><label class="lbl"> 不迫切</label></label>
                        	   <div id="urgentLevel_error" class="validate_error"></div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4"><div style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></div></td>
                        </tr>
                        <tr>
                           <td style="vertical-align:top"><em>*</em>选择员工</td>
                           <td class="objectstring" colspan="3"  id="newpersonco">
                           	    <div class="reHeight" style="padding-top:5px">
                           	    </div>
                                <div class=""><span id="${user.uid }" class="btn btn-small btn-info vm chooseperson" style="margin-left:0">增加员工</span></div>
                           </td>                            
                        </tr>
                        <tr>
                            <td colspan="4"><div style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></div></td>
                        </tr>
                        <tr>
                        	<td ></td>
                            <td colspan="3"><label class="w28" style="display:inline-block">项目</label><label class="w177" style="display:inline-block;text-align:center;">需要提高的内容</label><label class="w120" style="display:inline-block;text-align:center;">所需培训</label></td>   
                        </tr>
                        <tr>
                        	<td valign="middle">员工绩效需求</td>
                            <td colspan="3"> <%int i =0; %>
                            	<c:forEach items="${listSize}"  var="i" varStatus="st" >
                            	<div>
                                	<label class="w28" style="display:inline-block"><%=++i %></label>
                                    <label class="w177" style="display:inline-block">
                                    	<select name="dmd_item_ids" class="w177">
                                    	<option value="">请选择</option>
		                                     <c:forEach items="${dmdItemList}"  var="item" >
		                               		<option value="${item.dtId}" >${item.name}</option>
		                               		</c:forEach>
                                		</select>
                                    </label>
                                	<label class="w120" style="display:inline-block"><input name="trainContents" type="text" class="input vm si" /></label>
                               </div>
                               </c:forEach>
                           </td>   
                        </tr>
                        <tr>
                          <td colspan="4"><div style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></div></td>
                        </tr>
                        <tr>
                        	<td class="vt"><em>*</em>业务发展所需提升性培训</td>
                            <td colspan="3">
                                <div>
                                  <textarea id="businessTrain" name="businessTrain" cols="" rows="" maxlength="2000"></textarea>
                                  <div id="businessTrain_error" class="validate_error"></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4"><div style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></div></td>
                        </tr>
                        <tr>
                        	<td class="vt"><em>*</em>职业发展所需提升性培训</td>
                            <td colspan="3">
                                <div><textarea id="professionTrain" name="professionTrain" cols="" rows="" maxlength="2000"></textarea></div>
                                <div id="professionTrain_error" class="validate_error"></div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4"><div style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></div></td>
                        </tr>
                    </tbody>
                </table>
              <div align="right" class="mr100"><input id="submit1" type="submit" class="btn btn-small btn-info step m10 vm" value="保存"/><a href="#" class="btn btn-small back vm allclose">关闭</a></div>
            </div>
                </div>
                </form>                
            </div>
            </div>
        </div>              
    </div>     
<jsp:include page="/WEB-INF/page/include/script_bootstrap.jsp"></jsp:include>
<script type="text/javascript" src="${basepath}/js/demand/demandPostNew.js" charset="gbk"></script>
<script type="text/javascript" src="${basepath}/js/demand/jstreePost.js" charset="gbk"></script>
</body>
</html>
