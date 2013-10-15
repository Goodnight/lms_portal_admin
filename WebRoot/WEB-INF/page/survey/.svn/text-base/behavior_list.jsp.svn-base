<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
  <thead>
    <tr>
      <th width="30" class="pl10" ><input name="input3" type="checkbox" value="cls_item_est" class="checkbox cls_chooseall_est"/></th>
      <th class="sorting">评估主题</th>
      <th class="sorting">开始时间</th>
      <th class="sorting">结束时间</th>
      <th>设置问题</th>
      <th>评估发布状态</th>
      <th>已参与情况</th>
      <%--<th>个人评估汇总</th>--%>
      <th>综合结果明细</th>    
    </tr>
  </thead>
  <tbody>
  	<c:forEach var="b" items="${list.data }" varStatus="st">
  		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	      <td class="pl10">
	      	<c:choose>
	      		<c:when test="${b.status==1 }">
			      	<input id="${b.sId }" delete="1" name="id" type="checkbox" value="${b.sId }" participantsNum="${b.participantsNum }" class="checkbox cls_item_est"/>
	      		</c:when>
	      		<c:otherwise>
	      			<input id="${b.sId }" delete="0" name="id" type="checkbox" value="${b.sId }" participantsNum="${b.participantsNum }" class="checkbox cls_item_est"/>
	      		</c:otherwise>
	      	</c:choose>
	      </td>
	      <td>
	          <!-- LMSWD-1401 20130510 by LTC -->
              <!-- 1.已发布： 只能修改人员 -->
              <c:if test="${b.status==2 }"><a href="new.html?type=2&sid=${b.sId }&symbol=1">${b.topic }</a></c:if>
              <!-- 2.未发布 && 有人参与： 只能修改开始结束时间 和 参与人员 -->
              <c:if test="${b.status==1 && b.participantsNum!=0 }"><a href="new.html?type=2&sid=${b.sId }&symbol=2">${b.topic }</a></c:if>
              <!-- 3.未发布 && 无人参与： 皆可修改 -->
              <c:if test="${b.status==1 && b.participantsNum==0 }"><a href="new.html?type=2&sid=${b.sId }&symbol=3">${b.topic }</a></c:if>
	      </td>
	      <td>${b.startDt }</td>
	      <td>${b.endDt }</td>
	      <td><a id="${b.sId }" href="javascript:getBelongIds('${b.sId }');" class="preview2">设置</a></td>
	      <td>
           	<c:choose>
           		<c:when test="${b.status==1 }">
           			<a href="#" onclick="javascript:changeStatus(this,2,'${b.sId}')" >未发布</a>
           		</c:when>
           		<c:otherwise>
           			<a href="#" onclick="javascript:changeStatus(this,1,'${b.sId}')">已发布</a>
           		</c:otherwise>
           	</c:choose>
           </td>
	      <td><a href="${basepath }/behavior/viewParticipate.html?sId=${b.sId }&flag=behavior">${b.participantsNum==null?0:b.participantsNum }</a></td><%--
          <td><a href="#" target="_blank">个人评估汇总</a></td>--%><td>
          <a href="${basepath}/survey/result/report.html?report=behavior&surveyId=${b.sId }&relation=0" target="_blank">综合结果明细</a></td>          
     </tr>
  	</c:forEach>
  </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>

<script type="text/javascript">
function getBelongIds(sId){
    $.ajax({
        url : basepath + "/behavior/getBelongIds.html",
        type : "GET",
        data : "sId="+sId,
        dataType : "JSON",
        success : function(data){
            if(null!=data[0]){
                $("#upLevelTp").attr("href",basepath+"/survey/inquiryAllItemList.html?sId="+data[0]+"&type=2");
            }
            if(null!=data[1]){
                $("#equalLevelTp").attr("href",basepath+"/survey/inquiryAllItemList.html?sId="+data[1]+"&type=2");
            }
            if(null!=data[2]){
                $("#downLevelTp").attr("href",basepath+"/survey/inquiryAllItemList.html?sId="+data[2]+"&type=2");
            }
            if(null!=data[3]){
                $("#elseTp").attr("href",basepath+"/survey/inquiryAllItemList.html?sId="+data[3]+"&type=2");
            }
            if(null!=data[4]){
                $("#selfTp").attr("href",basepath+"/survey/inquiryAllItemList.html?sId="+data[4]+"&type=2");
            }
        },
        error:function(){
            alert("error");
        }
    });
}
</script>
