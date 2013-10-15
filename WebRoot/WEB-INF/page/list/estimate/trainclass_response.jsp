<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!-- 用于培训班中显示的反映层评估列表 -->
<table class="datatable" width="100%">
	<colgroup>
         <col width="20" />
         <col width="100" />
         <col width="100" />
         <col width="100" />
         <col width="60" />
         <col width="100" />
         <col width="120" /> 
         <col width="100" />
         <col width="100" />               
    </colgroup>
    <thead>
        <tr>
            <th><input name="" type="checkbox" value="cls_item_response" class="checkbox cls_chooseall_response" /></th>
            <th>评估主题</th>
            <th>开始时间</th>
            <th>结束时间</th>
            <th>设置问题</th>
            <th>发布状态</th>
            <th>参与情况</th>
            <th>结果明细</th>
            <th>评估报告</th>
        </tr>
    </thead>
    <tbody>
    	<c:forEach var="sc" items="${list.data }" varStatus="st">
    		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	            <td>
	            	<c:choose>
	            		<c:when test="${sc.survey.status==1 }">
	            			<input id="${sc.survey.sId }" name="id" type="checkbox" value="${sc.survey.sId }" delete="1" partinnum="${sc.survey.participantsNum}" class="checkbox cls_item_response" />
	            		</c:when>
	            		<c:otherwise>
	            			<input id="${sc.survey.sId }" name="id" type="checkbox" value="${sc.survey.sId }" delete="0" partinnum="${sc.survey.participantsNum}" class="checkbox cls_item_response" />
	            		</c:otherwise>
	            	</c:choose>
	            </td>
	            <td>
	               <!-- LMSWD-1401 by LTC 20130510 -->
                   <!-- 已发布 -->
                   <c:if test="${sc.survey.status==2 }">
                       <a href="${basepath }/trainclass/response/new.html?sid=${sc.survey.sId}&tcid=${sc.objectId}&symbol=1">${sc.survey.topic }</a>
                   </c:if>
                   <!-- 未发布 且 参与人数不为零 -->
                   <c:if test="${sc.survey.status==1 && sc.survey.participantsNum!=0 }">
                       <a href="${basepath }/trainclass/response/new.html?sid=${sc.survey.sId}&tcid=${sc.objectId}&symbol=2">${sc.survey.topic }</a>
                   </c:if>
                   <!-- 未发布且参与人数为零 -->
                   <c:if test="${sc.survey.status==1 && sc.survey.participantsNum==0 }">
                       <a href="${basepath }/trainclass/response/new.html?sid=${sc.survey.sId}&tcid=${sc.objectId}&symbol=3">${sc.survey.topic }</a>
                   </c:if>
	            </td>
	            <td>${sc.survey.startDt }</td>
	            <td>${sc.survey.endDt }</td>
	            <td><a href="${basepath }/survey/inquiryAllItemList.html?sId=${sc.survey.sId}&type=1" class="previewbutton" target="_black">设置</a></td>
	            <td>
	            	<c:choose>
	            		<c:when test="${sc.survey.status==1 }">
	            			<a href="#" onclick="javascript:changeStatus(this,2,'${sc.survey.sId}')" >未发布</a>
	            		</c:when>
	            		<c:otherwise>
	            			<a  href="#" onclick="javascript:changeStatus(this,1,'${sc.survey.sId}')" >已发布</a>
	            		</c:otherwise>
	            	</c:choose>
	            </td>
	            <td><a href="${basepath }/survey/viewParticipate.html?sId=${sc.survey.sId}&flag=response">${sc.survey.participantsNum==null?0:sc.survey.participantsNum }/${sc.survey.userNum==null?0:sc.survey.userNum }</a>
	            </td>
	            <td>
	            <a href="${basepath}/survey/result/report.html?report=response&surveyId=${sc.survey.sId}" target="_blank">查看明细</a>
	            </td>
	            <td><a href="${basepath }/survey/turnToSurveyReport.html?surveyId=${sc.survey.sId }&surveyType=${sc.survey.type}&participantsNum=${sc.survey.participantsNum }&userNum=${sc.survey.userNum }" target="_blank">评估报告</a></td>
	        </tr>
    	</c:forEach>
    </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
