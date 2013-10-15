<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>
	<c:choose>
		<c:when test="${post==null && type eq 'eth' }">新建族群</c:when>
		<c:when test="${post==null && type eq 'pos' }">新建岗位</c:when>
		<c:when test="${post!=null && type eq 'eth' }">修改族群</c:when>
		<c:when test="${post!=null && type eq 'pos' }">修改岗位</c:when>
	</c:choose>
</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div id="dialog" class="hidden">
	<div class="blackall">&nbsp;</div>
	<div class="newwindow" id="choosepersonco">
		<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
		    <div id="dialog_content" class="cl scroll"></div>
		</div>
	</div>
<div class="container">
    <!-- 导入头部 -->
    <jsp:include page="/WEB-INF/page/include/header.jsp" />
    <div class="breadCrumbHolder breadCrumbPage">
    	<div class="headerco">
        <div class="breadCrumb reHeight noborder" id="breadCrumb3">
            <div class="z">
                <ul>
                    <li class="first"><a href="${basepath }/index.html">首页</a></li>
                    <li>基础数据</li>
                    <li><a href="${basepath }/position/manage.html">基准岗位管理</a></li>
                    <li class="last">
                    	<c:choose>
							<c:when test="${post==null && type eq 'eth' }">新建族群</c:when>
							<c:when test="${post==null && type eq 'pos' }">新建岗位</c:when>
							<c:when test="${post!=null && type eq 'eth' }">修改族群</c:when>
							<c:when test="${post!=null && type eq 'pos' }">修改岗位</c:when>
						</c:choose>
                    </li>
                </ul>
            </div>
            <div class="y"></div>
        </div>
        </div>
    </div>
    <div class="content cl">
        <div class="ngreyborder changeblue2 mt40">
	       	<h2 class="png_bg" >
	       		<c:choose>
					<c:when test="${post==null && type eq 'eth' }">新建族群</c:when>
					<c:when test="${post==null && type eq 'pos' }">新建岗位</c:when>
					<c:when test="${post!=null && type eq 'eth' }">修改族群</c:when>
					<c:when test="${post!=null && type eq 'pos' }">修改岗位</c:when>
				</c:choose>
	       	</h2>
	           <div class="basic_information"  style="padding-top:10px;">
	           	<form id="pos_form" action="${basepath }/position/save.html" method="post">
	           		<c:choose>
	           			<c:when test="${type eq 'eth' }">
	           				<!-- 族群 -->
	           				<table border="0" cellspacing="15" cellpadding="15">
	                               <colgroup>
	                                   <col width="100" />
	                               </colgroup>
	                               <tbody>
	                                   <tr>
	                                       <td><em>*</em>编号</td>
	                                       <td>
	                                       	<c:choose>
	                                       		<c:when test="${post==null }">
		                                        	<input id="sn" name="sn" type="text" class="input vm" value="${post.sn}" />
	                                       		</c:when>
	                                       		<c:otherwise>
	                                       			${post.sn }
	                                       			<input id="sn" name="sn" type="hidden"  value="${post.sn }" />
	                                       		</c:otherwise>
	                                       	</c:choose>
	                                       	<input id="pId" name="pId" type="hidden" value="${post.pId }" />
	                                       	<input name="leaf" type="hidden" value="false" />
	                                       	<input name="type" type="hidden" value="-1" />
	                                       	<c:if test="${post==null }">
	                                       		<input name="upId" type="hidden" value="${upId }" />
	                                       	</c:if>
	                                       </td>
	                                   </tr>
	                                   <tr>
	                                       <td><em>*</em>名称</td>
	                                       <td>
	                                       	<input id="name" name="name" type="text" class="input vm" value="${post.name }" />
	                                       	<input id="old_name" type="hidden" value="${post.name }"/>
	                                       </td>
	                                   </tr>
	                                   <tr>
	                                       <td><em>*</em>岗位标识</td>
	                                       <td>
	                                       	<select name="postId">
	                                         		<c:forEach var="item" items="${postIDList }">
	                                      				<option value="${item.spId }" ${post.postID.spId eq item.spId?"selected=selected":"" }>${item.name }</option>
	                                      			</c:forEach>
	                                     		</select>
	                                   	</td>
	                                   </tr>
	                                   <tr>
	                                       <td>显示顺序</td>
	                                       <td><input name=" sortNo" type="text" class="input vm"  value="${post.sortNo }"/></td>
	                                   </tr>
	                                   <tr>
	                                       <td class="vt" style="padding-top:0;"><em>*</em>工作特性</td>
	                                       <td><textarea name="describes" cols="" rows="">${post.describes }</textarea></td>
	                                   </tr>
	                               </tbody>
	                           </table> 	
	           			</c:when>
	           			<c:otherwise>
	           				<!-- 岗位 -->
	           				<table border="0" cellspacing="15" cellpadding="15">
	                               <colgroup>
	                                   <col width="100" />
	                               </colgroup>
	                               <tbody>
	                                   <tr>
	                                       <td><em>*</em>编号</td>
	                                       <td>
	                                       	<c:choose>
	                                       		<c:when test="${post==null }">
		                                        	<input id="sn" name="sn" type="text" class="input vm" value="${post.sn }" />
	                                       		</c:when>
	                                       		<c:otherwise>
	                                       			${post.sn }
	                                       			<input id="sn" name="sn" type="hidden"  value="${post.sn }" />
	                                       		</c:otherwise>
	                                       	</c:choose>
	                                       	<input id="pId" name="pId" type="hidden" value="${post.pId }" />
	                                       	<input name="leaf" type="hidden" value="true" />
	                                       	<input name="type" type="hidden" value="0" />
	                                       	<c:if test="${post==null }">
	                                       		<input name="upId" type="hidden" value="${upId }" />
	                                       	</c:if>
	                                       </td>
	                                   </tr>
	                                   <tr>
	                                       <td><em>*</em>名称</td>
	                                       <td>
	                                       	<input id="name" name="name" type="text" class="input vm" value="${post.name }" />
	                                       	<input id="old_name" type="hidden" value="${post.name }"/>
	                                       </td>
	                                   </tr>
	                                   <tr>
	                                       <td><em>*</em>层级</td>
	                                       <td>
	                                       		<select name="levelId">
	                                       			<c:forEach var="item" items="${levelList }">
	                                       				<option value="${item.spId }" ${post.level.spId eq item.spId?"selected=selected":"" }>${item.name }</option>
	                                       			</c:forEach>
	                                       		</select>
	                                       </td>
	                                   </tr>
	                                   <tr>
	                                       <td><em>*</em>是否经营类岗位</td>
	                                       <td>
	                                           <input type="hidden" value="${post.isOperate }" /><!-- 测试取值 -->
	                                           <c:if test="${null==post.isOperate || post.isOperate=='1' }">
	                                               <em class="option choosed"><input name="isOperate" type="radio" value="1" checked="checked"/></em> 是 
                                                   <em class="option"><input name="isOperate" type="radio" value="0" /></em> 否
                                               </c:if>
	                                           <c:if test="${post.isOperate=='0' }">
                                                   <em class="option"><input name="isOperate" type="radio" value="1" /></em> 是 
                                                   <em class="option choosed"><input name="isOperate" type="radio" value="0" checked="checked" /></em> 否
                                               </c:if>
	                                       </td>
	                                   </tr>
	                                   <tr>
	                                       <td><em>*</em>岗位标识</td>
	                                       <td>
	                                       	<select name="postId">
	                                         		<c:forEach var="item" items="${postIDList }">
	                                      				<option value="${item.spId }" ${post.postID.spId eq item.spId?"selected=selected":"" }>${item.name }</option>
	                                      			</c:forEach>
	                                     		</select>
	                                   	</td>
	                                   </tr>
	                                   <tr>
	                                       <td>显示顺序</td>
	                                       <td><input name=" sortNo" type="text" class="input vm"  value="${post.sortNo }"/></td>
	                                   </tr>
	                                   <tr>
	                                   		<td>岗位等级</td>
	                                   		<td>
	                                   			<c:forEach var="name" items="${gradeNames }">
	                                   				<c:set var="in" value="false" scope="request"></c:set>
	                                   				<c:forEach var="pg" items="${postGrades }">
	                                   					<c:if test="${name eq pg.name }">
	                                   						<c:set var="in" value="true" scope="request"></c:set>
	                                   					</c:if>
	                                   				</c:forEach>
	                                   				<input type="checkbox" name="postGrade" value="${name }" ${in?'checked=checked':'' }/>${name }
	                                   			</c:forEach>
	                                   		</td>
	                                   </tr>
	                                   <tr>
	                                       <td class="vt" style="padding-top:0;"><em>*</em>职责/角色描述</td>
	                                       <td><textarea name="describes" cols="" rows="">${post.describes }</textarea></td>
	                                   </tr>
	                                   <tr>
	                                       <td class="vt" style="padding-top:0;"><em>*</em>任职基本条件</td>
	                                       <td><textarea name="basicCondition" cols="" rows="">${post.basicCondition }</textarea></td>
	                                   </tr>
	                                   <tr>
	                                       <td class="vt" style="padding-top:0;"><em>*</em>任职关键条件</td>
	                                       <td><textarea name="keyCondition" cols="" rows="">${post.keyCondition }</textarea></td>
	                                   </tr>
	                               </tbody>
	                           </table> 	
	           			</c:otherwise>
	           		</c:choose>
	     					<div align="right">
	     						<input name="" type="submit" class="step vm m10" value="确定" />
	     						<a href="${basepath }/position/manage.html" class="back m10 vm">关闭</a>
	     					</div>
	              	</form>
	           </div>
	       </div>
    </div>
    
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript">
	$(function(){
		
		$("#pos_form").validate({
			rules:{
				sn:{
					required:true,
					maxlength:50
				},
				name:{
					required:true,
					maxlength:50
				},
				describes:{
					required:true,
					maxlength:1000
				},
				basicCondition:{
					required:true,
					maxlength:1000
				},
				keyCondition:{
					required:true,
					maxlength:1000
				}
			},
			messages:{
				sn:{
					required:"请输入编号",
					maxlength:"编号长度太长"
				},
				name:{
					required:"请输入名称",
					maxlength:"名称长度太长"
				},
				describes:{
					required:"请输入工作特性(职责/角色描述)",
					maxlength:"字符长度超过1000个字"
				},
				basicCondition:{
					required:"请输入任职基本条件",
					maxlength:"字符长度超过1000个字"
				},
				keyCondition:{
					required:"请输入任职关键条件",
					maxlength:"字符长度超过1000个字"
				}
			}
		});
		
		
		
		$("#pos_form").submit(function(){
			var re = false;
			var pId = $("#pId").val();
			var sn = $("#sn").val();
			var name = $("#name").val();
			var old_name = $("#old_name").val();
			if(pId==null || pId == ""){
				$.ajax({
					url : basepath+"/position/validate.html",
					type : "get",
					async : false,
					data : {
						"sn":sn
					},
					dataType : "html",
					success : function(data){
						//true是已经存在
						re = data;
					}
				});
			}
			 if(re=='true'){
				$.dialog.alert("编号已经存在!");
				return false;
			  }
			 if(name!=old_name){
				$.ajax({
					url : basepath+"/position/validate.html",
					type : "get",
					async : false,
				    data:"name="+encodeURI(encodeURI(name)),  
					success : function(data){
						//true是已经存在
						re = data;
						
					}
				});
			 }
			if(re){
				$.dialog.alert("名称已经存在!");
				return false;
			}
			return true;
	  });
	});
</script>
</body>

</html>







