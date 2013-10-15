<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>课程详情</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div class="container">
    <jsp:include page="/WEB-INF/page/include/header.jsp" />
       <div class="breadCrumbHolder breadCrumbPage">
  	<div class="headerco">
     	<div class="breadCrumb reHeight noborder" id="breadCrumb3">
                                <div class="z">
                                	<ul>
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
                                            课程详情
                                        </li>
                                	</ul>
                                </div>
                                <div class="y"></div>
                            </div> 
    </div>
  </div>
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">课程详情</h2>
            <div class="coursedetails">
            	<ul class="reHeight">
                	<li class="pic">
                	<c:if test="${courseware.res.pic.outCode == null || courseware.res.pic.outCode == ''}">
                    <img src="${basepath }/images/ex.jpg" width="114" height="84" />
                    </c:if>
                    <c:if test="${courseware.res.pic.outCode != null && courseware.res.pic.outCode != ''}">
                	<img src="${basepath }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${courseware.res.pic.outCode}" width="223" height="163" />
                	</c:if>
                	</li>
                	
                    <li class="pl30">
                    	<h5>${courseware.res.name }</h5>
                        <div>
                        	<div class="z w300">
                                课程编号：${courseware.res.sn }<br/>
                                创建公司 : ${courseware.res.org.name}<br/>
                                是否为公开课：<c:if test="${courseware.res.isPub == 1}">公开</c:if>
                         <c:if test="${courseware.res.isPub == 0}">非公开</c:if>
                                 <br/>
                                课件属性：${courseware.property.name }<br/>
								主讲人: ${courseware.speaker}<br/>
                               	主讲人所属单位 : ${courseware.speakerProviders}
                            </div>
                            <div class="z">
                                时间 : ${courseware.res.create_date }<br/>
                                创建人 : ${courseware.res.creater.name }<br/>
                                标签 : ${courseware.res.tag}<br/>
                                适用岗位：<c:forEach var="c" items="${courseware.position }" varStatus="st">
                                ${c.position.name }&nbsp;&nbsp;
                                </c:forEach><br/>
                                所属分类：${pos}<br/>
            <!-- 
            <c:if test="${uPlod != null && uPlod != ''}">
            	<a onclick="return false;" href="${basepath }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${uPlod}" class="red">下载课件包</a>
            </c:if> 
            -->
                                是否上传课程大纲：
                        <c:if test="${uploDG == '' || uploDG == null}">
                                <em>未上传</em>
                        </c:if>
                        <c:if test="${uploDG != '' && uploDG != null}">
                          <a href="${basepath }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${uploDG}" class="red">下载</a>
                        </c:if>
                        &nbsp;&nbsp;&nbsp;&nbsp;     
                              是否上传课程讲义：
                        <c:if test="${uploJY == '' || uploJY == null}">
                              <em>未上传</em>
                        </c:if>  
                        <c:if test="${uploJY != '' && uploJY != null}">
                              <a href="${basepath }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${uploJY}" class="red">下载</a>
                        </c:if>                     
                                <br/>                  
                            </div>
                        </div>
                    </li>
                </ul>
            	<h3>培训内容</h3>
                <p>${courseware.res.extraInfo.content }</p>
                <h3>培训目的</h3>
                <p>${courseware.res.extraInfo.aim }</p>
                <c:if test="${catalog != null }">
                <h3>课程章节</h3>
                <table width="100%" cellspacing="0" cellpadding="0" class="basic_list m10">
                  <tr>
                    <th>编号</th>
                    <th>标题</th>
                  </tr>
                  <c:forEach items="${catalog.resources }" var="c" varStatus="st">
                  <tr class='<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>'>
                    <td>${c.identifier }</td>
                    <td>${c.title }</td>
                  </tr>
                 </c:forEach> 
                </table>
                </c:if>
            </div>
        </div>
        <div class="taR mt10">
        <c:if test="${fn:contains(orgIdPath,sessionScope.defaultOrg.orgId) || orgIdPath eq sessionScope.defaultOrg.orgId}">
        	<c:if test="${isBool==true}">
        		<a target="_blank" href="${basepath }/courseware/tosaveCoursewareDetails.html?cId=${courseware.cId}&resId=${courseware.res.rbId }&sn=${courseware.res.sn}" id="btn_update" class="step ml13">修改</a>
        	</c:if>
        </c:if>
        
       <c:forEach items="${courseware.data }" var="d">
       <!-- ff808081385bcac601385bd006740033:SCORM课件 -->
       <c:if test="${d.type == 0 && courseware.type.spId == 'ff808081385bcac601385bd006740033'}">
        <a title="${d.outCode}" id="${basepath }/ctu-resource-agent?player=${scorm }&resource_id=${d.outCode}&user=${sessionScope.user.uid}&index=${courseware.url}&is_trace=false" href="javascript:;" onclick="clickshpw(this)" class="step ml13" >预览</a>
       </c:if>
       	<!-- ff808081385bcac601385bd006230031:单一入口课件 -->
       <c:if test="${d.type == 0 && courseware.type.spId == 'ff808081385bcac601385bd006230031'}">
        <a title="${d.outCode}" id="${basepath }/ctu-resource-agent?player=${simple}&resource_id=${d.outCode}&user=${sessionScope.user.uid}&index=${courseware.url}&is_trace=false" href="javascript:;" onclick="clickshpw(this)" class="step ml13" >预览</a>
       </c:if>
       	<!-- ff808081385bcac601385bd006142d3e:外链课件 , resource_id为必填参数,但是外链课件并没有有效的resource_id值 .-->
        <c:if test="${d.type == 0 && courseware.property.spId == 'ff808081385bcac601385bd005a7002e' && courseware.type.spId == 'ff808081385bcac601385bd006142d3e'}">
        <a title="${d.outCode}"  id="${basepath }/ctu-resource-agent?player=${external}&resource_id=${d.outCode}&user=${sessionScope.user.uid}&index=${courseware.url}&is_trace=false" href="javascript:;" onclick="clickshpw(this)" class="step ml13" >预览</a>
      	</c:if>
       </c:forEach>
       
        <a href="#" class="back ml13 resourceDetailClose"  >关闭</a>  </div>
    </div>
</div>
<script type="text/javascript">
	var basepath = "${basepath}";
</script>
	<script type="text/javascript">  
				/*
                 function close()
                 {
                	 window.close();
                 }
                 */
 //播放课程        
function clickshpw(obj)
{
   outCode = $(obj).attr("title"); 
   $.ajax({
 		url : basepath+"/courseware/toLookCourse.html?outCote="+outCode,
 		type : "POST",
 		data : outCode,
 		dataType : "json",
 		success : function(status){
 			if (status == "2" || status == "3") {
 				alert("资源正在解压缩，请稍后预览!");
 			}
 			if(status != "2" && status != "3" && status != "4" && status != "" && status != null)
 			{
 			alert("播放不成功");
 			}
 			if(status == "4" || status == "" || status == null)
 			{
 			id = $(obj).attr("id");
 			window.open(id,"ctu_player","channelmode=yes,fullscreen=yes,location=no,menubar=no,toolbar=no,titlebar=no");
 			}
 		}
 	});
	}
                </script>
<jsp:include page="/WEB-INF/page/include/script.jsp" />

</body>
</html>






