<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="ngreyborder changeblue2 mt20">
    <h2 class="png_bg">省审核市培训计划</h2>
    <div class="basic_information mt10">
        <table border="0" cellspacing="15" cellpadding="15">
            <colgroup>
                <col width="100" />
            </colgroup>
            <tbody>
                <tr>
                    <td class="taR">计划类型</td>
                    <td >
                    <c:if test="${p.planType == 0 }">
                    <em class="option choosed"><input name=" planType" type="radio" value="0" /></em> 正式培训计划　
                    </c:if> 
                    <c:if test="${p.planType == 1}">　
                    <em class="option choosed"><input name=" planType" type="radio" value="1" /></em> 临时培训计划
                    </c:if>
                    </td>
                </tr>
                <tr>
                    <td class="taR">计划名称</td>
                    <td>${p.name }</td>
                </tr>
                <tr>
                    <td class="taR">计划编号</td>
                    <td>${p.sn }</td>
                </tr>
                 <tr>
                    <td class="taR">开始日期</td>
                    <td>${p.start_date }</td>
                </tr>
                <tr>
                    <td class="taR">结束日期</td>
                    <td>${p.end_date }</td>
                </tr>
                <tr>
                    <td class="taR vt" style="padding-top:0;">备注</td>
                    <td>${p.remarks }</td>
                </tr>
            </tbody>
        </table>    
        <div align="right" class="mr10"><input id="close" type="button" class="back m10 windowbutton" value="关闭"/></div>
    </div>
</div>
      
<script type="text/javascript">
$(function(){
    //关闭弹出窗口
    $("#close").click(function(){
        $("#dialog").hide();
    });
});
</script>
