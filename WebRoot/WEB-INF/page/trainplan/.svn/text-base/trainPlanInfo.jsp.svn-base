<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="ngreyborder changeblue2 mt20">
   	<h2 class="png_bg">培训计划详情</h2>
    <div class="basic_information mt10">
        <table border="0" cellspacing="15" cellpadding="15">
         	<colgroup>
             	<col width="100" />
            </colgroup>
         	<tbody>                		
             	<tr>
                    <td class="taR">计划类型</td>
                 	<td>
                 	   <c:if test="${p.planType == '0'}">
               	            <em class="option choosed"><input name=" planType" type="radio" value="1" /></em>正式培训计划 　
                   	   </c:if>	
               	       <c:if test="${p.planType == '1'}">　
               	            <em class="option choosed"><input name=" planType" type="radio" value="0" /></em>临时培训计划 
               	       </c:if>
               	    </td>
                    <td class="taR">
                        <c:if test="${status == '0' }"><a href="modifyTrainPlan.html?id=${p.tpId }" class="searchbutton" style="padding:3px 0 0 0;height:28px">修改</a></c:if>
                    </td>
                </tr>
                <tr>
                	<td class="taR">编号</td>
                    <td>${p.sn }</td>
                </tr>
                <tr>
                    <td class="taR">名称</td>
                    <td>${p.name }</td>
                </tr>
                <tr>
               	    <td class="taR">培训费用</td>
                  	<td>${p.cost }</td>
                </tr>
                <tr>
               	<td class="taR">日期</td>
                  	<td>${p.start_date }到 ${p.end_date }</td>
                </tr>
                <tr>
               	<td class="taR">备注</td>
                    <td colspan="3">${p.remarks }</td>
                </tr>
            </tbody>
        </table>
        
    </div>
	
</div>
<div class="taR"><input id="close" type="button" class="back m10 windowbutton" value="关闭"/></div>
<script type="text/javascript">
$(function(){
    //关闭弹出窗口
    $("#close").click(function(){
        $("#dialog").hide();
    });
});
</script>

       
