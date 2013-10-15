<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th width="30" class="pl10" >
            	<input name="" type="checkbox" value="cls_choose_item_doc" class="checkbox cls_chooseall_doc" />
            </th>
            <th width="100">编号</th>
            <th width="300">名称</th>
            <th width="200">创建公司</th>
            <th width="150">类型</th>
            <th width="100">预览</th>
        </tr>
    </thead>
    <tbody>
    	<c:forEach items="${list.data }" var="res" varStatus="st">
   			<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
     			<td class="pl10"><input name="docRes" type="checkbox" value="${res.trId }" class="checkbox cls_choose_item_doc" /></td>
              	<td>${res.resDoc.res.sn }</td>
              	<td>${res.resDoc.res.name }</td>
              	<td>${res.resDoc.res.org.name }</td>
              	<td>
              		<c:if test="${res.resDoc.res.dc.docType==0 }">文档</c:if>
              		<c:if test="${res.resDoc.res.dc.docType==1 }">案例</c:if>
              	</td>
              	<td>
              	<c:if test="${res.resDoc.res.dc.docType==0 }"><a title="${res.resDoc.data[0].outCode }" id="${basepath }/ctu-resource-agent?user=${sessionScope.user.uid }&resource_id=${res.resDoc.data[0].outCode }&player=document&is_trace=false" href="javascript:;" onclick="clickshpw(this)" >预览</a></c:if>
              	<c:if test="${res.resDoc.res.dc.docType==1 }"><a title="${res.resDoc.data[0].outCode }" id="${basepath }/ctu-resource-agent?user=${sessionScope.user.uid }&resource_id=${res.resDoc.data[0].outCode }&player=example&is_trace=false" href="javascript:;" onclick="clickshpw(this)" >预览</a></c:if>
              	</td>
     		</tr>
    	</c:forEach>
    </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>
<script type="text/javascript">  
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