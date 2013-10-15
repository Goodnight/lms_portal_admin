<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable">
	<thead>
    	<tr>
        	<th width="20" >
        		<input name="" type="checkbox" value="cls_item_user" class="checkbox cls_chooseall_user"/>
        	</th>
            <th class="sorting" width="100">员工编号</th>
            <th class="sorting" width="200">员工姓名</th>
            <th class="sorting" width="100">EHR匹配</th>
            <th class="sorting" width="100">用工性质</th>
            <th class="sorting" width="100">岗位</th>
            <th width="200">部门变更</th>
     		<th width="100">培训档案</th>
            <th width="100">密码重置</th>
            <th width="100">状态</th>
    	</tr>
	</thead>
    <tbody>
    	<c:forEach items="${list.data }" var="u" varStatus="st">
    		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	        	<td><input name="id" type="checkbox" value="${u.uid }" class="checkbox cls_item_user"/></td>
	          	<td id="sn_id_${u.uid }" >${u.sn}</td>
	          	<td><a href="new.html?uid=${u.uid }">${u.name }</a></td>
	          	<td>
	          		<c:choose>
	          			<c:when test="${u.ehrStatus==0 }">未同步</c:when>
	          			<c:otherwise>已同步</c:otherwise>
	          		</c:choose>
	          	</td>
	          	<td>${u.empNature.name }</td>
	          	<td>${u.post.name }</td>
	          	<td>
	          		<c:choose>
	          			<c:when test="${u.org==null }">
	          				<a href="javascript:changedep('${u.uid }');">设置部门</a>
	          			</c:when>
	          			<c:otherwise>	          			
	          				<a href="javascript:changedep('${u.uid }');" title="${u.depNamePath }">${u.org.name }</a>
	          			</c:otherwise>
	          		</c:choose>
	          	</td>
	          	  <script type="text/javascript">
	          				function changedep(uid){
	          					var url = "changedep.html?uid="+uid+"&old_dep="+$('#old_dep').val();
	          					window.open(url,"newPage");
	          				}
	          				
				</script>
	          <!--	<td><a href="#" uid="${u.uid }" usn="${u.sn}" class="cls_updateSn" >重置</a></td>-->
	          	<td><a href="${basepath}/user/documetForAll.html?op=cours&uid=${u.uid }" target="blank">查看</a></td>
	          	<td><a href="#" uid="${u.uid }" usn="${u.sn}" class="cls_resetpwd">重置</a></td>
	          	<td>
	          		<c:if test="${u.status == '0' }"><a href="javascript:;" status="${u.status }" uid="${u.uid }" class="cls_changestatus">无效</a></c:if>
	          		<c:if test="${u.status == '1' }"><a href="javascript:;" status="${u.status }" uid="${u.uid }" class="cls_changestatus">有效</a></c:if>
	          		<!-- <c:if test="${u.status == '0' }">无效</c:if>
	          		<c:if test="${u.status == '1' }">有效</c:if>  -->
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
