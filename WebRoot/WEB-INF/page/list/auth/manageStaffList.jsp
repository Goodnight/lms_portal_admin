<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable datatable3">
   <thead>
        <tr>
            <th width="20" rowspan="2"><input name="index" type="checkbox" value="cls_chooseitem" class="cls_chooseall"/></th>
            <th rowspan="2">编号</th>
            <th rowspan="2" width="70">姓名</th>
            <th rowspan="2" width="70">授权人</th>
            <th rowspan="2">授权时间</th>
            <th colspan="2">权限范围</th>
            <th colspan="2">功能授权</th>
            <th rowspan="2">移交</th>
        </tr>
        <tr class="sheight">
            <th width="40">级别</th>
            <th>机构</th>
            <th width="40">角色</th>
            <th>模块</th> 
        </tr>
   </thead>
   <tbody>   
       <c:forEach items="${manageStaffList.data }" var="ms" varStatus="mss">
       <tr class="gradeA <c:out value="${mss.index%2==0?'even':'odd' }"/>"> 
           <td><!-- 管理员自己不能删除自己 20130401 by LTC -->
               <c:if test="${user.uid != ms.admin.uid }">
                   <input name="index" type="checkbox" value="${ms.aaId}" class="cls_chooseitem"/>
               </c:if>
           </td>
           <td><c:if test="${ms.admin.sn == null }">${mss.index+1 }</c:if>${ms.admin.sn }</td>
           <td><a href="javascript:;" title="${ms.admin.org.name }">${ms.admin.name}</a></td>
           <td>${ms.authorizePerson.name}</td>
           <td>${ms.authorized_time}</td>
           <td>
               <div>
               <label id="dep_name">
                   <c:choose>
                   		<c:when test="${ms.admin.type=='5' }">本地网（县级）</c:when>
                   		<c:when test="${ms.admin.type=='4' }">部门管理</c:when>
                       	<c:when test="${ms.admin.type=='3' }">市管理</c:when>
                       	<c:when test="${ms.admin.type=='2' }">省管理</c:when>
                       	<c:when test="${ms.admin.type=='1' }">集团管理员</c:when>
                   </c:choose>
               </label>
               <!-- 当前登陆用户为集团管理员 -->
               <c:if test="${user.type == '1' }">
                    <c:if test="${user.uid != ms.admin.uid }"> <!-- 权限管理中，管理员自己不能修改自己的管理权限范围 20130228 -->
                        <a href="javascript:;" class="ml12 forsetup2"><img src="${basepath }/images/post_12.png" width="12" height="12" /></a>
                        <span class="select_setup2">  
                            <select id="depId${ms.admin.uid }" name="depName">
               		           <option value="5" ${ms.admin.type=='5'?'selected=selected':'' }>本地网（县级）</option>
                               <option value="4" ${ms.admin.type=='4'?'selected=selected':'' }>部门管理</option>
               		           <option value="3" ${ms.admin.type=='3'?'selected=selected':'' }>市管理</option>
                               <option value="2" ${ms.admin.type=='2'?'selected=selected':'' }>省管理</option>
                               <option value="1" ${ms.admin.type=='1'?'selected=selected':'' }>集团管理员</option>
                            </select>
                        <a href="javascript:saveType('${ms.admin.uid }');"><img class="vm" src="${basepath }/images/right.png" width="15" height="12" /></a>
                        </span>
                    </c:if>
               </c:if>
               <!-- ----------------------------------------------------------------------------------------- -->
               <!-- 当前登陆用户为省管理员 -->
               <c:if test="${user.type == '2' }">
                    <c:if test="${user.uid != ms.admin.uid }"> <!-- 权限管理中，管理员自己不能修改自己的管理权限范围 20130228 -->
                        <a href="javascript:;" class="ml12 forsetup2"><img src="${basepath }/images/post_12.png" width="12" height="12" /></a>
                        <span class="select_setup2">  
                            <select id="depId${ms.admin.uid }" name="depName">
                               <option value="5" ${ms.admin.type=='5'?'selected=selected':'' }>本地网（县级）</option>
                               <option value="4" ${ms.admin.type=='4'?'selected=selected':'' }>部门管理</option>
                               <option value="3" ${ms.admin.type=='3'?'selected=selected':'' }>市管理</option>
                               <option value="2" ${ms.admin.type=='2'?'selected=selected':'' }>省管理</option>
                            </select>
                        <a href="javascript:saveType('${ms.admin.uid }');"><img class="vm" src="${basepath }/images/right.png" width="15" height="12" /></a>
                        </span>
                    </c:if>
               </c:if>
               <!-- ----------------------------------------------------------------------------------------- -->
               <!-- 当前登陆用户为市管理员 -->
               <c:if test="${user.type == '3' }">
                    <c:if test="${user.uid != ms.admin.uid }"> <!-- 权限管理中，管理员自己不能修改自己的管理权限范围 20130228 -->
                        <a href="javascript:;" class="ml12 forsetup2"><img src="${basepath }/images/post_12.png" width="12" height="12" /></a>
                        <span class="select_setup2">  
                            <select id="depId${ms.admin.uid }" name="depName">
                               <option value="5" ${ms.admin.type=='5'?'selected=selected':'' }>本地网（县级）</option>
                               <option value="4" ${ms.admin.type=='4'?'selected=selected':'' }>部门管理</option>
                               <option value="3" ${ms.admin.type=='3'?'selected=selected':'' }>市管理</option>
                            </select>
                        <a href="javascript:saveType('${ms.admin.uid }');"><img class="vm" src="${basepath }/images/right.png" width="15" height="12" /></a>
                        </span>
                    </c:if>
               </c:if>
               <!-- ----------------------------------------------------------------------------------------- -->
               <!-- 当前登陆用户为部门管理员 -->
               <c:if test="${user.type == '4' }">
                    <c:if test="${user.uid != ms.admin.uid }"> <!-- 权限管理中，管理员自己不能修改自己的管理权限范围 20130228 -->
                        <a href="javascript:;" class="ml12 forsetup2"><img src="${basepath }/images/post_12.png" width="12" height="12" /></a>
                        <span class="select_setup2">  
                            <select id="depId${ms.admin.uid }" name="depName">
                               <option value="5" ${ms.admin.type=='5'?'selected=selected':'' }>本地网（县级）</option>
                               <option value="4" ${ms.admin.type=='4'?'selected=selected':'' }>部门管理</option>
                            </select>
                        <a href="javascript:saveType('${ms.admin.uid }');"><img class="vm" src="${basepath }/images/right.png" width="15" height="12" /></a>
                        </span>
                    </c:if>
               </c:if>
               <!-- ----------------------------------------------------------------------------------------- -->
               <!-- 当前登陆用户为本地网（县级）员 -->
               <c:if test="${user.type == '5' }">
                    <c:if test="${user.uid != ms.admin.uid }"> <!-- 权限管理中，管理员自己不能修改自己的管理权限范围 20130228 -->
                        <a href="javascript:;" class="ml12 forsetup2"><img src="${basepath }/images/post_12.png" width="12" height="12" /></a>
                        <span class="select_setup2">  
                            <select id="depId${ms.admin.uid }" name="depName">
                               <option value="5" ${ms.admin.type=='5'?'selected=selected':'' }>本地网（县级）</option>
                            </select>
                        <a href="javascript:saveType('${ms.admin.uid }');"><img class="vm" src="${basepath }/images/right.png" width="15" height="12" /></a>
                        </span>
                    </c:if>
               </c:if>
               </div>
           </td>       
           <td>
               <div class="pr">
                   <div>
                       <c:forEach items="${ms.listUs }" var="orgTree"> <!-- 管理范围机构树 -->
                            <label>${orgTree.org.name}</label><br/>
                            <input id="root_${ms.admin.uid }" type="hidden" value="${ms.admin.org.upId }" /> 
                            <input class="cls_${ms.admin.uid }" type="hidden" orgid="${orgTree.org.orgId }" idpath="${orgTree.org.idPath }" />
                       </c:forEach>
                   </div>
                   <c:if test="${user.uid != ms.admin.uid }"> <!-- 权限管理中，管理员自己不能修改自己的管理权限范围 20130228 -->
                        <div class="pricon">
                            <a href="javascript:;" id="${ms.admin.uid }" flag="1" class="adminshowtree"><img src="${basepath }/images/post_12.png" width="12" height="12" /></a><img class="vm hidden" src="${basepath }/images/right.png" width="15" height="12" />
                        </div>
                   </c:if>
               </div>
           </td>  
           <td>
             <div class="pr lh1">
               <div>
                 <c:forEach var="l" items="${ms.listRrb}">
                 	<c:if test="${l.role.type!=4}">
                   <label id="role_name">${l.role.name }</label><br/>
                   </c:if>
                 </c:forEach>
               </div>
               <c:if test="${user.uid != ms.admin.uid }"> <!-- 权限管理中，管理员自己不能修改自己 20130228 -->
                   <div class="pricon t0">
                       <a href="javascript:;"><img id="${ms.admin.uid}" class="btn_addRoles" src="${basepath }/images/post_12.png" width="12" height="12" /></a>
                       <img class="vm hidden" src="${basepath }/images/right.png" width="15" height="12" />
                   </div>
               </c:if>
             </div>
           </td>
             <td>
               <a id="${ms.admin.uid}" href="javascript:;" class="changeAuthority">查看</a> <!-- 菜单模块权限 -->
           </td>             
           <td>
               <!-- LMSWD-2658 管理员需要可以移交自己的权限 by LTC 20130517-->
               <a id="${ms.admin.uid }" href="javascript:;" class="transferStaff">移交</a>
           </td>
       </tr>
       </c:forEach>
   </tbody>   
</table>

<!-- 分页对象 -->
<c:set var="pager" value="${manageStaffList.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>

<script type="text/javascript">
//点击弹出添加角色对话框
$(".btn_addRoles").click(function(){
	var id = $(this).attr("id");
	var url = basepath+"/auth/toSelectRole.html?uId="+id+"&r="+Math.random();
	$("#dialog_content").load(encodeURI(url));
	$("#dialog,#dialog .newwindow,#dialog .blackall").show();
});

$(".transferStaff").click(function(){    //移交
    var id = $(this).attr("id");
    var url = basepath+"/dialog/userAuth.html?urId="+id+"&r="+Math.random();
    $("#dialog_content").load(encodeURI(url));
    $("#dialog,#dialog .newwindow,#dialog .blackall").show();
});

$(".changeAuthority").click(function(){  //修改菜单模块权限
	 var id = $(this).attr("id");
	 var url = basepath+"/dialog/addManage.html?uId="+id;
	 $.get(url, function(date){
			if(date==null || date==""){
				alert("查看失败");
			}else{
				  var url = basepath+"/dialog/authManage.html?rId="+date;
				  $("#dialog_content").load(url);
				  $("#dialog,#dialog .newwindow,#dialog .blackall").show();
			}
	});	

  
});

$(".forsetup2").click(function(){
    $(this).hide();
    $(this).prev().hide();
    $(this).next().show();
});

$(".select_setup2 img").click(function(){
    var mm=$(this).prev().val();
    $(this).parent().parent().prev().prev().text(mm);
    $(this).parent().parent().hide();
    $(this).parent().parent().prev().show();
    $(this).parent().parent().prev().prev().show();
});
       
//保存管辖范围
function saveType(uid){
    var depId = $("#depId"+uid).val();
    var depName = $("#depId"+uid).find('option:selected').text();
    var param = "method=save&uid="+uid+"&depId="+depId;
    $.ajax({
        url : basepath+"/auth/saveType.html",
        type : "POST",
        data : param,
        dataType : "json",
        success : function(data){
            alert("保存成功");
            $("#dep_name"+uid).text(depName); 
            page(1);   
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
            alert("error");
        }
    });
    
    //当修改用户级别时自动将其原来所辖部门信息清空以避免逻辑混乱
    var clearParam = "org_id="+""+"&user_id="+uid;
    $.ajax({
        url: basepath+"/auth/saveUserOrg.html",
        type : "post",
        data : clearParam,
        dataType : "json",
        success : function(msg){
            page(1);
            $.dialog.tips("操作成功",2,"tips.gif");
        },
        error : function(){
            $.dialog.tips("操作失败",2,"tips.gif");
        }
    }); 
}

//保存用户角色
function saveRole(urId){
    var rId = $("#roleId"+urId).val();
    var roleName = $("#roleId"+urId).find('option:selected').text();
    var param = "method=save&urId="+urId+"&rId="+rId;
    $.ajax({
        url : basepath+"/auth/saveRole.html",
        type : "POST",
        data : param,
        dataType : "json",
        success : function(data){
            alert("保存成功"); 
            $("#role_name"+urId).text(roleName);
            page(1);          
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
            alert("error");
        }
    });
}
</script>
