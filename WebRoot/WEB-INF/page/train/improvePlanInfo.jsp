<%@page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
    <div class="scroll">
        <div class="ngreyborder changeblue2">
        <h2 class="png_bg">${improve.user.name }个人改进计划</h2>
        <div class="basic_information mt2">
        <table border="0" cellspacing="10" cellpadding="10">
          <tr>
            <td width="20%">培训班编号</td>
            <td width="30%" class="answer">${improve.tc.sn }</td>
            <td width="20%">培训班名称</td>
            <td width="30%" class="answer">${improve.tc.name }</td>
          </tr>
          <tr>
            <td>培训开始日期</td>
            <td class="answer">${improve.tc.start_date }</td>
            <td>培训结束日期</td>
            <td class="answer">${improve.tc.end_date }</td>
          </tr>
          <tr>
            <td>填表人</td>
            <td class="answer">${improve.user.name }</td>
            <td>填表日期</td>
            <td class="answer">${improve.create_date }</td>
          </tr> 
          <tr>
            <td colspan="4" class="taL">通过培训。您的主要收获是（请列出三条）</td>    
          </tr>
          <tr>
            <td colspan="4" class="taL">${improve.content1 }</td>    
          </tr>
          <tr>
            <td colspan="4" class="taL">培训后。您计划在工作的哪些方面进行改进（请列出不多于三条）</td>  
          </tr>
          <tr>
            <td colspan="4" class="answer">${improve.content2 }</td> 
          </tr>
          <tr>
            <td colspan="4" class="taL">为了取得良好的改进效果，您认为除了自身努力以外，还需要哪些方面的支撑（请列出三条）</td>  
          </tr>
          <tr>
            <td colspan="4"  class="taL">${improve.content3 }</td>   
          </tr>
        </table>
        </div>
        <div class="taR m10"><a class="step mr10 cls_close" href="#">关闭</a></div>
    </div> 
</div>
<script type="text/javascript">
<!--
	$(function(){
		$(".cls_close").click(function(){
			$("#dialog").hide();
		});
	});
//-->
</script>
