<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

<form action="doUpdateTag.html" method="post">
       <input name="tagId" type="hidden" value="${tagId }"/>
       <select class="select" id="tagGroupId" name="tagGroupId">
           <c:forEach items="${tagGroupList.data }" var="t">
             <option value="${t.tagGpId }">${t.name }</option>
           </c:forEach>
       </select>
       <button name="_next" class="imgright ml12" type="submit">
           <img src="${basepath }/images/right.png" width="15" height="12" />
       </button>
                <jsp:include page="/WEB-INF/page/include/script.jsp" />
                
                <script type="text/javascript">
                   var tagId = "${tagId}";
                </script>
</form>

