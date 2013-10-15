<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="ngreyborder changeblue2 mt20">
    <h2 class="png_bg">用户回答汇总</h2>
    <div style="margin:30px 0 20px 30px;;font-size:14px;font-weight:bold;">您对本电子课程还有更好的建议吗？</div>
    <div class="scroll advice">
        <c:forEach items="${remarkAll.data }" var="ra" varStatus="ras">
            <div>${ra.replyer.name }：${ras.index+1 }：${ra.remark }</div>
        </c:forEach>
    </div>
    <div class="m10 taR "><input type="button" class="back windowbutton" value="关闭" /></div>
</div>
