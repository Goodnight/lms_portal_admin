<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<thead>
    	<tr>
        	  <th width="20">
        	  	<input name="input" type="checkbox" value="cls_chooseitem" class="checkbox cls_chooseall"/>
        	  </th>
        	  <th class="sorting" width="200">培训班编号</th>
              <th class="sorting" width="400" >培训班名称</th>
              <th class="sorting" width="150" >主办部门</th>
              <th class="sorting" width="200" >时间</th>
              <th class="sorting" width="100" >培训方式</th>
              <th class="sorting" width="90">状态</th>
              <!-- 
              <th class="sorting" width="100">考试</th>
              <th class="sorting" width="100">评估</th>
              <th width="100"></th>
               -->
        </tr>
      </thead>
      <tbody>
      	<c:forEach var="t" items="${list.data }" varStatus="st">
	  		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	     		<td>
	     			<c:choose>
	     				<c:when test="${t.status==1||t.status==4 }">
		     				<input name="cid" type="checkbox" value="${t.tcId }" class="checkbox cls_chooseitem" delete="1"/>
	     				</c:when>
	     				<c:otherwise>
	     					<input name="cid" type="checkbox" value="${t.tcId }" class="checkbox cls_chooseitem" delete="0"/>
	     				</c:otherwise>
	     			</c:choose>
	     		</td>
	     		<td>${t.sn }</td>
	           <td>${t.name}</td>
	           <td>${t.dep.name }</td>
	           <td>${t.start_date } 到${t.end_date }</td>
	           <td>${t.way.name }</td>
	           <td>
	           		<c:choose>
	           			<c:when test="${t.status==1 || t.status==4 }">新建</c:when>
	           			<c:when test="${t.status==2 }">实施</c:when>
	           			<c:when test="${t.status==3 }">完成</c:when>
	           			<c:otherwise>不限</c:otherwise>
	           		</c:choose>
	           </td>
	           <!-- 
	           <td>无</td>
	           <td><a href="${basepath }/trainclass/estimate.html?tcid=${t.tcId }">评估</a></td>
	           <td><a href="${bbsUrl }${t.tcId }" target="_blank">讨论区</a></td>
	            -->
	      	</tr>
		</c:forEach>
   </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>