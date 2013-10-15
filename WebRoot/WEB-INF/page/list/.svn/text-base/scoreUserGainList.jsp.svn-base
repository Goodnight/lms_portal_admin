<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
 <table class="datatable" width="100%">
                	<thead>
                                    	<tr>
                        	<th>奖励方式</th>
                        	<th>奖励类别</th>
                            <th>奖励积分数值</th>
                            <th>奖励生效时间</th>
                            <th>有效截止时间</th>
                        </tr>
						</thead>
						<tbody>
                        <c:forEach items="${scoreUserGainList.data }" var="sc" varStatus="st">   
                        <tr class='<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>'>
                       		<td>${sc.gainType.name }</td>
                            <td>${sc.gainCategory.name }</td>
                        	<td>${sc.score }</td>
                        	<td>${sc.gain_time }</td>
                            <td>${sc.end_time }</td>
                        </tr>
                        </c:forEach>
            
                 
                    </tbody>
                 </table>
	             	<c:set var="pager" value="${scoreUserGainList.page }" scope="request"></c:set>
	             	<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
	             	<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
              	<div align="right" class="mr10"><a href="${basepath }/rewardScoreUser/scoreUserList.html" class="back m10">关闭</a></div>