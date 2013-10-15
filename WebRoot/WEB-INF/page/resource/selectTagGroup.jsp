<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

          <select class="select" id="tagGroupId" name="tagGroupId">
          <option></option>
          <c:forEach items="${tagGroupList.data }" var="t">
          <option value="${t.tagGpId }">${t.name }
          </option>
          </c:forEach>
          </select>
                <jsp:include page="/WEB-INF/page/include/script.jsp" />


