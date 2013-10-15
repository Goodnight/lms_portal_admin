<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<% String pathUpload = "http://180.168.60.15:15320/resource-proxy"; 
String path = "courseware/coursewareList.html";
String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ "/" + path;
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<c:if test="${courseware.cId == null}">
        	<title>新建资源课程</title>
        	</c:if>
        	
        	<c:if test="${courseware.cId!= null}">
        	<title>修改资源课程</title>
        	</c:if>

<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div class="blackall hidden">&nbsp;</div>
<div class="treewindow">
	<div id="org_jstree1" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
</div>
		

<div class="container">
    <jsp:include page="/WEB-INF/page/include/header.jsp" />
    
   	</div>
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
		                                            	新建课程
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
		                                            <a href="${basepath }/courseware/coursewareList.html">课程列表</a>
		                                        </li>
		                                        <li class="last">
		                                            	新建课程
		                                        </li>
                                			</c:otherwise>
                                		</c:choose>
                                        
                                	</ul>
                                </div>
                                <div class="y"></div>
                            </div> 
    </div>
  </div>  
   	
   	<c:if test="${courseware.cId == null}">
   		<form  id="form_saveCourseware" name="form_saveCourseware" action="doSaveCoursewareDetails.html" method="post"  >
   		<input id="formName" type="hidden" value="form_saveCourseware" />
   	</c:if>
   	<c:if test="${courseware.cId!= null}">
   		<form  id="form_saveCoursewareUpdate" name="form_saveCourseware" action="doSaveCoursewareDetails.html" method="post" >
   		<input id="formName" type="hidden" value="form_saveCoursewareUpdate" />
   	</c:if>
   	
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
		<c:if test="${courseware.cId == null}">
        	<h2 class="png_bg">新建课程</h2>
        	</c:if>
        	
        	<c:if test="${courseware.cId!= null}">
        	<h2 class="png_bg">修改资源课程</h2>
        	</c:if>
            <div class="courseupload basic_information" style="padding-top:0">
            	
                <input name="tcid" type="hidden" value="${tc.tcId }"/>
                <input id="cId" name="cId" type="hidden" value="${courseware.cId }"/>
                <input id="rbId" name="rbId" type="hidden" value="${courseware.res.rbId}"/>
                <input name="createDt" type="hidden" value="${courseware.res.create_date }"/>
                <input name="createrId" type="hidden" value="${courseware.res.creater.uid }"/>
                <input name="coursewareUrl" id="coursewareUrl" type="hidden" value="${courseware.url }"/>
                 <input name="coursewareTypeSpId" id="coursewareTypeSpId" type="hidden" value="${courseware.type.spId }"/>
                
                <!-- <input type="hidden" name="positionIds" id="positionIds" value="" /> -->
                <input type="hidden" name="dep_Names" id="dep_Names" value="" />
                <input type="hidden" name="kno_id" id="kno_id" value="${knoId }" />
                
                <input id="outCode" name="outCode" type="hidden" value="" />
                <input id="uplodSrc" name="uplodSrc" type="hidden" value="" />
                <input id="uplodCousDG" name="uplodCousDG" type="hidden" value="" />
                <input id="uplodCousJY" name="uplodCousJY" type="hidden" value="" />
                <input id="collUrl" name="collUrl" type="hidden" value="<%=basePath%>" />
                
                <!-- 记录上传过的包 -->
                <input id="upKjb" name="upKjb" type="hidden" value="${uPlod }" />
                <input id="upKdg" name="upKdg" type="hidden" value="${uploDG }" />
                <input id="upKjy" name="upKjy" type="hidden" value="${uploJY }" />
                
                
                <!-- 测试 -->
                 <input id="uplodCourse" name="uplodCourse" type="hidden" value="" />
                                 
          <table border="0" cellspacing="15" cellpadding="15">
                	<colgroup>
                    	<col width="90" />
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<td><em>*</em>课程名称</td>
                        	<td colspan="1">
                        	<input name="name" type="text" class="input vm" maxlength="75" id="name" value="${courseware.res.name }"/>
                        	</td>
                        </tr>
                        <tr>
						    <td><em>*</em>所属分类</td>
                        	<td>
                        	<c:if test="${cId != null }">
                        	<input disabled="disabled" id="knoName" name="class_dep_name" type="text" class="input vm" value="${coursewareCategoryBo.category.name }" />
		                    <input id="knowledgeId" name="class_dep" type="hidden" value="${coursewareCategoryBo.category.kcId }"/>
		                    </c:if>
		                    <c:if test="${cId == null }">
                        	<input id="knoName" disabled="disabled" name="class_dep_name" type="text" class="input vm si" value="${knoNamePath }" />
		                    <input id="knowledgeId" name="class_dep" type="hidden" value="${knoId }"/>
		                    </c:if>
                        	<span class="vm chooseKno">选择知识分类</span>
                        	</td>
                            
                        </tr>
                        <tr>
                        <td><em>*</em>学时(小时)</td>
                        <td>
                        	<!-- 学时:页面显示的单位为小时. -->
                        	<input name="courseHourShow" type="text" class="input vm" value="" id="courseHour"/>
                        	<!-- 学时:后台数据的计算和存储单位为分钟. -->
                       	 	<input name="courseHour" type="hidden" class="input vm" value="${courseware.courseHour }" id="courseMinuteHidden"/>
                       	 	
                        </td>
                        	
                        <td><em>*</em>标签</td>
                        <td colspan="3" id="tagf"><input name="tag" type="text" class="input vm" value="${courseware.res.tag }" id="tag"/>
                        <div id="divTag"></div>
                        </td>
						</tr>
						<tr>
                        	<td>课件提供商</td>
                        	<td><input name="cwProviders" type="text" class="input vm" value="${courseware.cwProviders }"/></td>
                            <td>资源提供单位</td>
                        	<td><input name="resProviders" type="text" class="input vm" value="${courseware.resProviders }"/></td>
                        </tr>
                        <tr>
                        	<td>主讲人</td>
                        	<td><input name="speaker" type="text" class="input vm" value="${courseware.speaker }"/></td>
                       
                        	<td>主讲人所属单位</td>
                        	<td><input name="speakerProviders" type="text" class="input vm" value="${courseware.speakerProviders }"/></td>
                        </tr>
                        <tr>
                        	<td><em>*</em>适用岗位</td>
                        	<td colspan="3">
                        	
                        	<div class="cl mt4 objectstring"  id="principal_list">
		                    <c:forEach var="p" items="${courseware.position }" varStatus="st">
                        	<input class="speciallabel" name="positionIds" type="hidden" value="${p.position.pId }"/>
                        	<input class="speciallabel" name="positionNames" type="hidden" value="${p.position.name }"/>
                        	<label class="speciallabel">${p.position.name}<a href="javascript:;" onclick="removePosition(this);" class="ml6" ><img src="${basepath }/images/deletegreen.gif"/></a></label>
                        	</c:forEach>	
		                            	</div>
                        	<div><span class="vm newshowtree ml0">选择岗位</span></div>
							</td>
  
                        </tr>
                        <tr>
                        	<td colspan="4">
                            	<div><em>*</em>培训目的(大于10个字小于1000个字)</div>
                            	<div><textarea name="aim" cols="" rows="" maxlength="1000" id="aim">${courseware.res.extraInfo.aim }</textarea></div>    
                            </td>
                        </tr>
                        <tr>
                        	<td colspan="4">
                            	<div><em>*</em>培训内容(大于10个字小于1000个字)</div>
                            	<div><textarea name="content" cols="" rows=""  maxlength="1000" id="content">${courseware.res.extraInfo.content }</textarea></div>    
                            </td>
                        </tr>
                        <tr>
                       
                            <td><em>*</em>学习天数</td>
                            <c:if test="${cId != null }">
                        	<td><input name="learnDay" type="text" class="input vm w120" value="${courseware.learnDay }" id="learnDay"/></td>
                        	</c:if>
                        	<c:if test="${cId == null || courseware == null }">
                        	<td><input name="learnDay" type="text" class="input vm w120" value="100" id="learnDay"/></td>
                        	</c:if>
							<td>允许退课时间</td>
							<c:if test="${cId != null }">
                        	<td><input name="retreatClsTm" type="text" class="input vm w120" value="${courseware.retreatClsTm}" id="retreatClsTm"/>分钟</td>
                        	</c:if>
                        	<c:if test="${cId == null || courseware == null }">
                        	<td><input name="retreatClsTm" type="text" class="input vm w120" value="5" id="retreatClsTm"/>分钟</td>
                        	</c:if>
                        </tr>
                        <tr>
                        	<td>是否公开课</td>
                        	<td>
                        	<c:choose>
		                    <c:when test="${courseware.res.isPub==0 }">
                        	<em class="option"><input name="isPub" type="radio" value="1" checked="checked"/></em> 是 
                        	<em class="option choosed"><input name="isPub" type="radio" value="0"  checked="checked"/></em> 否
                        	</c:when>
		                     <c:otherwise>
		                    <em class="option choosed"><input name="isPub" type="radio" value="1" checked="checked"/></em> 是 
                        	<em class="option "><input name="isPub" type="radio" value="0" /></em> 否
		                      </c:otherwise>
		                    </c:choose>
		                    </td>
							</tr>
						
						<tr>
                        	<td>选择课程类型</td>
                        	<td>
                        	
                        	<c:choose>
		                    <c:when test="${courseware.coursewareType==1 }">
                        	<em class="option"><input name="coursewareType" type="radio" value="0"/></em> 在线课程 
                        	 <em class="option choosed"><input name="coursewareType" type="radio" value="1" checked="checked"/></em> 直播课程
                        	 </c:when>
		                     <c:otherwise>
		                     <em class="option choosed"><input name="coursewareType" type="radio" value="0" checked="checked"/></em> 在线课程
                        	 <em class="option"><input name="coursewareType" type="radio" value="1"/></em> 直播课程
		                     </c:otherwise>
		                    </c:choose>
		                    
		                    </td>
							</tr>
                        
                        
                    </tbody>
                </table>
              <h3 class="mt40">课程设置</h3>
                <table border="0" cellspacing="15" cellpadding="15"  style="border:1px dashed #ccc;margin-top:15px;margin-bottom:15px;">
                	<tbody>
                        <tr>
                        	<td width="188"><em>*</em>课件属性</td>
                        	<td width="192">
                        	<select name="propertyId" class="w120" id="propertyId" onchange="selectProperty(this),showProtyUrl(this),selectTypeShowUplod(this),selectForCourse(this)">
		                       <c:forEach items="${propertiesList }" var="p">
			                     <c:choose>
			                       <c:when test="${p.spId==courseware.property.spId }">
			                         <option value="${p.spId }" selected="selected">${p.name }</option>
			                       </c:when>
			                      <c:otherwise>
			                         <option value="${p.spId }">${p.name }</option>
			                      </c:otherwise>
			                      </c:choose>
			                      </c:forEach>
		                       </select>
                        	</td>
                        	
                            <td width="104"><em>*</em>课件类型</td>
                        	<td>
                        	<select name="typeId" class="w120" id="typeId" onchange="selectTypeShowUplod(this)">
		                    
		                    </select>
                        	</td>
                        	
                        </tr>
                        
                        <tr id="divUrl">
                        
                        </tr>
                        

                        
                        <div>
                        <jsp:include page="/WEB-INF/page/resource/demo.jsp"/>
                        </div>
                        
                    </tbody>
                </table>
                <div class="windowlast">
    			<p>
	    			 <input id="submit" name="submit" type="submit" class="step m10 vm" value="确定"/> 
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
 
function saveThisForm(){
    var formName = $("#formName").val();
    //jQuery 表单提交
    $("#"+formName).ajaxSubmit(function(message){
        // 对于表单提交成功后处理，message为提交页面saveReport.htm的返回内容
        window.opener = null; //为了不出现提示框 
        window.close(); //关闭窗口
    });
    return false; //必须返回false，否则表单会自己再做一次提交操作，并且页面跳转  
}

 $(window).load(function(){
	 //alert('${courseware.url}');
	 //谭件属性：非标准课件.
	 if ($("#propertyId").val() == 'ff808081385bcac601385bd005a7002e') {
		 $("#propertyId").change();
	 }
	 
	 //课件类型 ：单一入口课件.
	 if ($("#coursewareTypeSpId").val() == 'ff808081385bcac601385bd006230031') {
		 alert("单一入口课件加载成功!");//用来触发上传框的显示,不弹此对话框或使用$.dialog.alert()都会导致应该显示的上传框而不显示.   （待解决.）
		 $("#typeId").change();
	 }
	
 }); 
 
		    var cId = "${cId}";
		    var resId = "${resId}";
		    var knoRootId = ['${knoRootId}'];
		    //选择属性联动效果
		    function selectForCourse(t)
		    {
		     var valu = $(t).val();
		     if(valu == "ff808081385bcac601385bd00581002d")
		     {
		     	$("#uplodZipp").show();
		     	$("#uplodDG").show();
		     	$("#uplodJY").show();
		     	$("#divScromBag").show();
		     	$("#divNoScromBag").addClass("hidden");
		     }
		     
		    }
		    
		    
		  	//选择类型联动效果
		    function selectTypeShowUplod(p)
		    {
		     var type = $(p).val();
		    
		     if(type != "ff808081385bcac601385bd006230031")
		     {
		     	$("#uplodZipp").hide();
		     	$("#uplodDG").hide();
		     	$("#uplodJY").hide();
		     }
		     //课件类型：单一入口课件
		     if(type == "ff808081385bcac601385bd006230031")
		     {
		     	$("#uplodZipp").show();
		     	$("#uplodDG").show();
		     	$("#uplodJY").show();
		     	$("#divScromBag").addClass("hidden");
		     	$("#divNoScromBag").removeClass("hidden");
		     }
		    }
		  
		  //保存成功弹出消息
		  function sub()
		  {
			  alert("保存成功");
		  }
		  
		  //移除适用岗位.
		    function removePosition(arg) {
		    	$(arg).parent().prev().val("");        //positionIds 适用岗位ID置空.
		    	$(arg).parent().prev().prev().val(""); //positionNames 适用岗位名称置空.
		    }		
		</script>

<script type="text/javascript" src="${basepath }/js/res/addCourseware.js" charset="gbk"></script>
<script type="text/javascript" src="${basepath }/js/res/blockCours.js" charset="gbk"></script>
<script type="text/javascript">
var rootPosition = ["${sessionScope.rootposition}"];
</script>
</body>
</html>
