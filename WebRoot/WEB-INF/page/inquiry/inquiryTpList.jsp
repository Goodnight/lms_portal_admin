<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ include file="/WEB-INF/page/include/taglibs.jsp" %>
<table width="100%" id="sample-table-1" class="table table-striped table-bordered table-hover" >
	<thead>
    	<tr>
        	<th><input name="" type="checkbox" value="" class="ace"/><span class="lbl"></span></th>
            <th>模板主题</th>
            <th>创建时间</th>
            <th>状态</th>
            <th><c:choose><c:when test="${surveyType==1}">设置需求模版问题</c:when><c:otherwise>设置评估模版问题</c:otherwise></c:choose></th>
            <th>模板预览</th>
        </tr>
    </thead>
    <tbody>    
    <c:forEach items="${inquiryTpList.data}" var="t" varStatus="st">    
        <tr class="<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>">
          	<td><c:if test="${fn:indexOf(t.org.idPath,userOrgId) != -1 && t.status == 1}"><input name="groupTypeId" type="checkbox" value="${t.stId}" class="ace"/><span class="lbl"></span></c:if></td>
            <td>
                <!-- 测试页面取值 --><input type="hidden" value="${t.org.idPath }" /><input type="hidden" value="${userOrgId }" /> 
                <c:if test="${fn:indexOf(t.org.idPath,userOrgId) != -1 }"><a href="inquiryTpUpdate.html?surveyType=${surveyType}&stId=${t.stId}" target="_blank">${t.name}</a></c:if>
                <c:if test="${fn:indexOf(t.org.idPath,userOrgId) == -1 }">${t.name}</c:if>
            </td>
            <td>${t.create_date}</td>
            <td><input id="surveyType" type="hidden" value="${surveyType }" />
            <!-- 判断当前用户管辖范围Id是否为当前记录所属范围IdPath的子串 -->
            <c:if test="${fn:indexOf(t.org.idPath,userOrgId) == -1 }">
                <c:choose>
                    <c:when test="${t.status==1}">未发布</c:when>
                    <c:otherwise>已发布</c:otherwise>
                </c:choose>
            </c:if>
            <!-- 为子串时拥有编辑权限 -->
            <c:if test="${fn:indexOf(t.org.idPath,userOrgId) != -1 }">
                <c:choose>
            	   <c:when test="${t.status==1}">
            	       <a id="${t.stId}" href="updateInquiryTpStatus.html?surveyType=${surveyType}&stId=${t.stId}&status=2" status="2" class="changeStatus">未发布</a>
            	   </c:when>
            	   <c:otherwise>
            	       <a id="${t.stId}" href="updateInquiryTpStatus.html?surveyType=${surveyType}&stId=${t.stId}&status=1" status="1" class="changeStatus">已发布</a>
            	   </c:otherwise>
                </c:choose>
            </c:if>
            </td>
            <td>
            		 <c:if test="${t.status==1}">
            		 		<c:if test="${fn:indexOf(t.org.idPath,userOrgId) == -1 }">设置</c:if><!-- 不为子串不具有操作权限 -->
				                <c:if test="${fn:indexOf(t.org.idPath,userOrgId) != -1 }"><!-- 为子串具有操作权限 -->
				                    <a href="inquiryTpAllItemList.html?surveyType=${surveyType}&stId=${t.stId}">设置</a>
				                </c:if>
            		 </c:if>
            		 <c:if test="${t.status==2}">
            		 	设置
            		 </c:if>
            		 
            </td>
            <td><a href="javascript:a('${t.stId}');" id="" >预览</a></td>
        </tr>
   	 </c:forEach>
    </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${inquiryTpList.page}" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${page_fn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager_bootstrap.jsp" />
<script type="text/javascript">
$(".changeStatus").click(function(){
    var bool = confirm("是否确定改变发布状态?");
    var surveyType = $("#surveyType").val();
    var stId = $(this).attr("id");
    var status = $(this).attr("status");
    if(!bool){ //否
        $(this).attr("href","#");
    }
    else{      //是
        if(status == '2'){
            $(this).attr("href","updateInquiryTpStatus.html?surveyType="+ surveyType +"&stId="+ stId +"&status=2");
        }
        if(status == '1'){
            $(this).attr("href","updateInquiryTpStatus.html?surveyType="+ surveyType +"&stId="+ stId +"&status=1");
        }
    }
});
$(function() {
	$('table th input:checkbox').on('click' , function(){
		var that = this;
		$(this).closest('table').find('tr > td:first-child input:checkbox')
		.each(function(){
			this.checked = that.checked;
			$(this).closest('tr').toggleClass('selected');
		});
			
	});
});
</script>
			