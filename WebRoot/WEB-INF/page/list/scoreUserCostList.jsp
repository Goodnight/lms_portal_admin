<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
                <thead>
                    	<tr>
                        	<th>兑换方式</th>
                            <th>项目名称</th>
                        	<th>兑换类别</th>
                            <th>积分数值</th>
                            <th>积分类型</th>
                            <th>使用时间</th>
                        </tr>
						</thead>
						<tbody>
                       <c:forEach items="${scoreUserCostList.data }" var="sc" varStatus="st">   
                       <tr class='<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>'>
                            <td>${sc.costType.name }</td>
                            <td>${sc.projectName }</td>
                        	<td>${sc.costWay.name }</td>
                        	<td>${sc.score }</td>
                            <td>个人积分</td>
                            <td>${sc.begin_time } 到 ${sc.end_time }</td>
                        </tr>
                     </c:forEach>
                    </tbody>
                 </table>
	             	<c:set var="pager" value="${scoreUserCostList.page }" scope="request"></c:set>
	             	<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
	             	<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
              	<div align="right" class="mr10"><a href="${basepath }/rewardScoreUser/scoreUserList.html" class="back m10">返回</a></div>