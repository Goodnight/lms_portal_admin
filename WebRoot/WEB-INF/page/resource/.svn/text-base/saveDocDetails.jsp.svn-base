<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<c:if test="${doc.dId == null}">
		        	<title>新建资源文档</title>
		</c:if>
		<c:if test="${doc.dId!= null}">
		        	<title>修改资源文档</title>
		</c:if>
		<style type="text/css">
			#choosepersonco,#choosegroup{height:auto;width:620px;margin:-200px 0 0 -310px;}
		</style>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
<body class="bg">
<!-- 选择树形菜单对话框 -->
<div class="blackall hidden">&nbsp;</div>
<div class="treewindow">
	<div id="org_jstree1" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
</div>
		
<div class="container">
    <jsp:include page="/WEB-INF/page/include/header.jsp" />
  	
       <div class="breadCrumbHolder breadCrumbPage">
  	<div class="headerco">
     	<div class="breadCrumb reHeight noborder" id="breadCrumb3">
                                <div class="z">
                                	<ul>
                                		<c:choose>
                                			<c:when test="${tc!=null }">
                                				<li class="first">
		                                            <a href="${basepath }/">首页</a>
		                                        </li>
		                                        <li>
		                                            <a href="${basepath }/trainclass/index.html">培训班管理</a>
		                                        </li>
		                                        <li>${tc.name }</li>
		                                        <li>
		                                            	课程设置
		                                        </li>
		                                        <li class="last">
		                                            	新建文档
		                                        </li>
                                			</c:when>
                                			<c:otherwise>
                                				<li class="first">
		                                            <a href="${basepath }/">首页</a>
		                                        </li>
		                                        <li>
		                                            <a href="${basepath }/courseware/coursewareList.html">培训资源</a>
		                                        </li>
		                                        <li>
		                                            <a href="${basepath }/doc/docList.html">文档列表</a>
		                                        </li>
		                                        <li class="last">
		                                            	新建文档
		                                        </li>
                                			</c:otherwise>
                                		</c:choose>
                                        
                                	</ul>
                                </div>
                                <div class="y"></div>
                            </div> 
    </div>
  </div>  
        <c:if test="${doc.dId == null}">
		        		<form id="form_saveDoc" name="form_saveDoc" action="doSaveDocDetails.html" method="post" onsubmit="return saveThisForm();" >
		        		<input id="formName" type="hidden" value="form_saveDoc" />
		</c:if>
		<c:if test="${doc.dId!= null}">
		        		<form id="form_saveDocUpdate" name="form_saveDoc" action="doSaveDocDetails.html" method="post" onsubmit="return saveThisForm();" >
		        		<input id="formName" type="hidden" value="form_saveDocUpdate" />
		</c:if>
   
  		<div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
		<c:if test="${doc.dId == null}">
        	<h2 class="png_bg">新建文档</h2>
        	</c:if>
        	
        	<c:if test="${doc.dId!= null}">
        	<h2 class="png_bg">修改文档</h2>
        	</c:if>
            <div class="courseupload basic_information" style="padding-top:0">
            	
                <input type="hidden" name="tcid" value="${tc.tcId }"/>
                <input id="dId" name="dId" type="hidden" value="${doc.dId }"/>
                <input id="rpId" name="rpId" type="hidden" value="${doc.res.pic.rpId }"/>
				<input name="createDt" type="hidden" value="${doc.res.create_date }"/>
				<input name="createrId" type="hidden" value="${doc.res.creater.uid }"/>
				<input name="docType" type="hidden" value="${doc.docType }"/>
				<!-- <input type="hidden" name="dep_ids" id="dep_ids" value="" /> -->
				<input type="hidden" name="dep_Names" id="dep_Names" value="" />
                <input type="hidden" name="kno_id" id="kno_id" value="${knoId }" />
                <input id="outCode" name="outCode" type="hidden" value="" />
                <input id="uplodSrc" name="uplodSrc" type="hidden" value="" />
          <table border="0" cellspacing="15" cellpadding="15">
                	<colgroup>
                    	<col width="100" />
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<td><em>*</em>名称</td>
                        	<td colspan="1"><input name="name" type="text" class="input vm" maxlength="75" id="name" value="${doc.res.name }"/></td>
                        </tr>
                        <tr>
                            <td><em>*</em>所属分类</td>
                        	<td>
                        	<c:if test="${dId != null }">
                        	<input disabled="disabled" id="knoName" name="class_dep_name" type="text" class="input vm" value="${docCategoryBo.category.name }" />
		                    <input id="knowledgeId" name="class_dep" type="hidden" value="${docCategoryBo.category.kcId }"/>
		                    </c:if>
		                    <c:if test="${dId == null}">
                        	<input disabled="disabled" id="knoName" name="class_dep_name" type="text" class="input vm si" value="${knoNamePath }" />
		                    <input id="knowledgeId" name="class_dep" type="hidden" value="${knoId }"/>
		                    </c:if>
                        	<span class="vm chooseKno">选择知识分类</span>
                        	</td>
                        </tr>
						<tr>
						 <td><em>*</em>标签</td>
                        <td colspan="1" id="tagf">
                       <input name="tag" type="text" class="input vm" value="${doc.res.tag }" id="tag"/><div id="divTag" align="left"></div>
                        </td>
						</tr>
                        
						
                        <tr>
                        	<td><em>*</em>是否公开</td>
                        	<td>
                        	<c:choose>
		                    <c:when test="${doc.res.isPub==0 }">
                        	<em class="option"><input name="isPub" type="radio" value="1"/></em> 是
                        	 <em class="option choosed"><input name="isPub" type="radio" value="0" checked="checked"/></em> 否
                        	 </c:when>
		                     <c:otherwise>
		                     <em class="option choosed"><input name="isPub" type="radio" value="1" checked="checked"/></em> 是
                        	 <em class="option "><input name="isPub" type="radio" value="0" /></em> 否
		                     </c:otherwise>
		                    </c:choose>
		                    </td>
                            <td><em>*</em>允许下载</td>
                        	<td>
                        	<c:choose>
		                    <c:when test="${doc.isDownload==1 }">
                        	<em class="option choosed"><input name="isDownload" type="radio" value="1" checked="checked"/></em> 是
                        	 <em class="option"><input name="isDownload" type="radio" value="0" /></em> 否
                        	 </c:when>
		                     <c:otherwise>
		                     <em class="option"><input name="isDownload" type="radio" value="1" /></em> 是
                        	 <em class="option choosed"><input name="isDownload" type="radio" value="0" checked="checked"/></em> 否
		                     </c:otherwise>
		                    </c:choose>
                        	 </td>
                        </tr>
                        <tr>
                        	<td><em>*</em>适用岗位</td>
                        	<td colspan="3">
                        	<div class="cl mt4 objectstring"  id="principal_list">
                        	<c:forEach var="p" items="${doc.positions }" varStatus="st">
                        	<input class="speciallabel" name="positionIds" type="hidden" value="${p.position.pId }"/>
                        	<input class="speciallabel" name="positionNames" type="hidden" value="${p.position.name }"/>
                        	<label class="speciallabel">${p.position.name}<a href="javascript:;" onclick="removePosition(this);" class="ml6"><img src="${basepath }/images/deletegreen.gif" /></a></label>
                        	</c:forEach>
                        	</div>
                        	<div><span class="vm newshowtree ml0">选择岗位</span></div>
							</td>                          
                        </tr>
                        <tr>
                       
                        	<td colspan="4">
                            	<div><em>*</em>培训目的(大于10个字小于1000个字)</div>
                            	<div><textarea name="aim" cols="" rows="" maxlength="1000" id="aim">${doc.res.extraInfo.aim }</textarea></div>    
                            </td>
                        </tr>
                        <tr>
                        	<td colspan="4">
                            	<div><em>*</em>培训内容(大于10个字小于1000个字)</div>
                            	<div><textarea name="content" cols="" rows="" maxlength="1000" id="content">${doc.res.extraInfo.content }</textarea></div>    
                            </td>
                        </tr>
                        <tr>
                        	<td colspan="4">
                            	<div>备注</div>
                            	<div><textarea name="remark" cols="" rows="" maxlength="400" id="remark">${doc.res.extraInfo.remark }</textarea></div>    
                            </td>
                        </tr>
                      
                       <div>
                          <jsp:include page="/WEB-INF/page/resource/demoTwo.jsp" />
                       </div> 
                       
                    </tbody>
                </table>
                <input id="bbb" type="hidden" value="${b }"/>
                <div class="windowlast">
    			<p>
    			<input name="_next" type="submit" class="step m10 vm"   value="确定" />
    			<c:choose>
	    				<c:when test="${tc!=null }">
	    					<a href="#" class="back m10 vm allclose">关闭</a>
	    				</c:when>
	    				<c:otherwise>
			    			<a href="#" class="back m10 vm allclose">关闭</a>
	    				</c:otherwise>
	    			</c:choose>
    			</p>
    		</div>
            </div>
            
        </div>
        
    </div>
    </form>
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript">
/*     function saveThisForm(){
    	alert(2);
        var formName = $("#formName").val();
        //jQuery 表单提交
        $("#"+formName).ajaxSubmit(function(message){
            // 对于表单提交成功后处理，message为提交页面saveReport.htm的返回内容
            window.opener = null; //为了不出现提示框 
            window.close(); //关闭窗口
        });
        return false; //必须返回false，否则表单会自己再做一次提交操作，并且页面跳转  
    } */
    
            var knoRootId = ['${knoRootId}'];
		    var dId = "${dId}";
		    var rpId = "${rpId}";
		    
		    //移除适用岗位.
		    function removePosition(arg) {
		    	$(arg).parent().prev().val("");        //positionIds 适用岗位ID置空.
		    	$(arg).parent().prev().prev().val(""); //positionNames 适用岗位名称置空.
		    }
		</script>

<script type="text/javascript" src="${basepath }/js/res/addDoc.js" charset="gbk"></script>
<script type="text/javascript" src="${basepath }/js/res/blockDoc.js" charset="gbk"></script>
<script type="text/javascript">
var rootPosition = ["${sessionScope.rootposition}"];
</script>
</body>
</html>
