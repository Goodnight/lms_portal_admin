<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
 <table class="datatable" width="100%">
                	<thead>
                    	<tr>
                        	<th>奖励类别</th>
                            <th>奖励积分数值</th>
                            <th>奖励时间</th>
                            <th>有效期</th>
                            <th>是否有效</th>
                        </tr>
						</thead>
                        <tbody>
                         <c:forEach items="${scoreDepGainList.data }" var="sd" varStatus="st">
                         <tr class='<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>'>
                        	<td>${sd.gainType.name }</td>
                        	<td>${sd.score }</td>
                            <td>${sd.gain_time }</td>
                            <td>${sd.end_time }</td>
                            <td>有效</td>
                        </tr>
                       </c:forEach>
                    </tbody>
                 </table>
	             	<c:set var="pager" value="${scoreDepGainList.page }" scope="request"></c:set>
	             	<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
	             	<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
              	<div align="right" class="mr10"><a href="${basepath }/rewardScoreDep/scoreDepList.html" class="back m10">关闭</a></div>