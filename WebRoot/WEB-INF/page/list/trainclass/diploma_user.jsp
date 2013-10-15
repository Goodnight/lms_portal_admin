<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
       <thead>
           <tr>
               <th width="30" class="pl10" ><input name="" type="checkbox" value="cls_allstitem" class="checkbox cls_chooseall"/></th>
               <th>员工编号</th>
               <th>员工姓名</th>
               <th>发证日期</th>
               <th>有效期</th>
               <th>证书编号</th>
               <th>证书级别</th>
               <th>发布状态</th>
           </tr>
       </thead>
       <tbody>
           <c:forEach items="${list.data }" var="d" varStatus="st">
           		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	               	<td class="pl10"><input type="checkbox" level="${d.level }" name="dipuser_id" class="cls_allstitem" value="${d.tcpId }"/></td>
	                <td>${d.student.sn }</td>
	            	<td>${d.student.name }</td>
	            	<td>${d.verify_time }</td>
	                <td>${d.diploma!=null&&d.diploma.effective_date==null?'永久有效':d.diploma.effective_date }</td>
	                <td>${d.diploma.sn }</td>
	                <td>
	                	<div>
							<label>
								<c:choose>
									<c:when test="${d.level==1 }">优秀</c:when>
									<c:when test="${d.level==2 }">良好</c:when>
									<c:when test="${d.level==3 }">一般</c:when>
									<c:otherwise>无证书</c:otherwise>
								</c:choose>
							</label>
							<a href="javascript:;" verify="${d.isVerify }"  class="ml12 forsetup2"><img src="${basepath }/images/post_12.png" width="12" height="12" /></a>
							<span class="select_setup2">
								<select >
									<option value="">无证书</option>
									<option value="1" >优秀</option>
									<option value="2" >良好</option>
									<option value="3" >一般</option>
								</select>
								<img id="${d.tcpId }" student_id="${d.student.uid }" class="vm" src="${basepath }/images/right.png" width="15" height="12" />
							</span>
						</div>
	                </td>
	                <td>
	                	<c:choose>
	                		<c:when test="${d.isVerify==0 }">未发布</c:when>
	                		<c:otherwise>已发布</c:otherwise>
	                	</c:choose>
	                </td>
            	</tr>
          </c:forEach>
       </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
