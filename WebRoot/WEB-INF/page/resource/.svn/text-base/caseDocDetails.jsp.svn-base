<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>案例详情</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div class="container">
    <jsp:include page="/WEB-INF/page/include/css.jsp" />
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
                                            <a href="${basepath }/case/caseDocList.html">案例列表</a>
                                        </li>
                                        <li class="last">
                                            案例详情
                                        </li>
                                	</ul>
                                </div>
                                <div class="y"></div>
                            </div> 
    </div>
  </div>
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">案例详情</h2>
            <div class="coursedetails">
            	<ul class="reHeight">
                	<li class="pic">
                	<c:if test="${caseDoc.res.pic.outCode == null || caseDoc.res.pic.outCode == ''}">
                    <img src="${basepath }/images/ex.jpg" width="114" height="84" />
                    </c:if>
                    <c:if test="${caseDoc.res.pic.outCode != null && caseDoc.res.pic.outCode != ''}">
                	<img src="${basepath }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${caseDoc.res.pic.outCode}" width="223" height="163" />
                	</c:if>
                	</li>
                    <li class="pl30">
                    	<h5>${caseDoc.res.name }</h5>
                        <div>
                        	<div class="z w300">
                                案例编号：${caseDoc.res.sn }<br/>
                                创建公司 : ${caseDoc.res.org.name}<br/>       
                                是否公开：<c:if test="${caseDoc.res.isPub ==1}">公开</c:if>
                     <c:if test="${caseDoc.res.isPub ==0}">非公开</c:if>
                                <br/>
                                创建时间：${caseDoc.res.create_date }<br/>
              <c:if test="${caseDoc.isDownload == 1 }">
                               	附件：<a href="${basepath }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${b}&player=example" class="red">下载</a>
                               	</c:if>
                        </div>
                            <div class="z">
                                所属分类：${pos}<br/>
                                关键字 : ${caseDoc.res.tag }<br/>
                                适用岗位：<c:forEach var="c" items="${caseDoc.positions }" varStatus="st">
                                ${c.position.name }&nbsp;&nbsp;
                                </c:forEach><br/>
                                创建人 : ${caseDoc.res.creater.name }
                          </div>
                        </div>
                    </li>
                </ul>
           	  <h3>培训内容</h3>
                <p>${caseDoc.res.extraInfo.content }</p>
                <h3>备注</h3>
                <p>${caseDoc.res.extraInfo.remark }</p>				
          </div>
        </div>
        <div class="taR mt10">
        <c:if test="${fn:contains(orgIdPath,sessionScope.defaultOrg.orgId) || orgIdPath eq sessionScope.defaultOrg.orgId}">
	        <c:if test="${isBool==true}">
	        	<a target="_blank" href="${basepath }/case/tosaveCaseDocDetails.html?dId=${caseDoc.dId}&rpId=${caseDoc.res.pic.rpId}&sn=${caseDoc.res.sn}" class="step ml13">修改</a>
	        </c:if>
        </c:if>
        <%-- <a target="_blank" href="${basepath }/ctu-resource-agent?user=${sessionScope.user.uid }&resource_id=${caseDoc.data[0].outCode }&player=example" class="step ml13" >预览</a> --%>
        <a title="${caseDoc.data[0].outCode }"  id="${basepath }/ctu-resource-agent?user=${sessionScope.user.uid }&resource_id=${caseDoc.data[0].outCode }&player=example&is_trace=false" href="javascript:;" onclick="clickshpw(this)" class="step ml13" >预览</a>
        <a href="#" class="back ml13 resourceDetailClose">关闭</a></div>
    </div>
</div>

<script type="text/javascript">
	var basepath = "${basepath}";
	
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






