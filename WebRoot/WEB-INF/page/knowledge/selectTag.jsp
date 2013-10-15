<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

<form id="form_addTagForKno" action="addTagForKno.html" method="post">
     <input name="kcId" type="hidden" value="${kcId }"/>
<div class="reHeight">
    	<div class="z" style="margin-top:4px">选标签</div>
    	<div class="z">
                <select  id="tagGroupId" name="tagGroupId">
                <c:forEach items="${tagGroupList.data }" var="tagGroup">
                 <option value="${tagGroup.tagGpId }">${tagGroup.name }</option>
                 
                </c:forEach>
                </select>
        </div>
        <div class="z"><input type="text" class="vm input w224 ml6" id="tagname" name="tagname"/></div>
       
        <div class="z"><input name="input2" type="button" class="searchbutton" value="搜索" hidefocus="true" onclick="selectBottonClick(1)"/></div>
    </div>
    
            <!-- 标签列表 -->
            <div id="onlineTagList_list"></div>
                    
    
             <div class="taR">
             <input name="_next" type="submit" class="step m10 vm" value="确定"/>
             <input name="" type="button" class="back vm windowbutton m10"  onclick="closed()" value="关闭" hidefocus="true"/>
             </div>
   </form>
   <jsp:include page="/WEB-INF/page/include/script.jsp" />
   <script type="text/javascript">
	var kcId = "${kcId}";
</script>

<script type="text/javascript">
    $(function(){
		//初始化列表
		page();
		
		
	});
    
    $("#form_addTagForKno").submit(function(){
		if($("input[name=groupId]:checked").length<=0){
			alert("请选择标签");
			return false;
		}
	});
	
		 //查询全部
	function page(){
	var url = basepath +"/knowledge/getTagForTagList.html?r="+Math.random();
    $("#onlineTagList_list").load(encodeURI(url));
    {
    	$.uniform.update();
    	$(".selector").uniform();
    }
		
}
	
	 //高级搜索
	function selectBottonClick(){
	var query = "";
	var tagname = $("#tagname").val();
	query += "&tagname="+tagname;
	var tagGroupId = $("#tagGroupId").val();
	
	query += "&tagGroupId="+tagGroupId;
	
	var url = basepath +"/knowledge/getTagForTagList.html?r="+Math.random();
    $("#onlineTagList_list").load(encodeURI(url+query));
    {
    	$.uniform.update();
    	$(".selector").uniform();
    }
		
}
</script>