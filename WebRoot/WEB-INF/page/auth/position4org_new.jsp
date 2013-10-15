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
	<div class="blackall hidden">&nbsp;</div>
	<div class="treewindow" >
		<div id="position_jstree" class="demo treedemo"></div>
	    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
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
                    <li><a href="${basepath }/position4org/manage.html">集团/省岗位管理</a></li>
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
        	<h2 class="png_bg">
        		<c:choose>
					<c:when test="${post==null && type eq 'eth' }">新建族群</c:when>
					<c:when test="${post==null && type eq 'pos' }">新建岗位</c:when>
					<c:when test="${post!=null && type eq 'eth' }">修改族群</c:when>
					<c:when test="${post!=null && type eq 'pos' }">修改岗位</c:when>
				</c:choose>
        	</h2>
            <div class="basic_information"  style="padding-top:10px;">
            	<form id="form_new" action="${basepath }/position4org/save.html" method="post">
            		<c:choose>
            			<c:when test="${type eq 'eth' }">
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
                                        	<div id="sn_error" class="validate_error"></div>
                                        	<input id="poId" name="poId" type="hidden"  value="${post.poId }"/>
                                        	<input name="leaf" type="hidden" value="false" />
											<c:if test="${post==null }">
	                                        	<input id="upId" name="upId" type="hidden"  value="${upId }"/>
												<input name="org_id" type="hidden"  value="${orgId }"/>
											</c:if>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><em>*</em>名称</td>
                                        <td><input id="name" name="name" type="text" class="input vm" value="${post.name }" />
                                        <input id="old_name" type="hidden" value="${post.name }"/>
                                        	<div id="name_error" class="validate_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><em>*</em>岗位标识</td>
                                        <td>
                                        	<select name="postID_id">
                                          		<c:forEach var="item" items="${postIDList }">
                                       				<option value="${item.spId }" ${post.postID.spId eq item.spId?"selected=selected":"" }>${item.name }</option>
                                       			</c:forEach>
                                      		</select>
                                    	</td>
                                    </tr>
                                    <tr>
                                        <td><em>*</em>基准岗位</td>
                                        <td>
                                        	<input id="post_name" name="post_name" type="text" class="input vm" value="${post.position.name }"/>
                                        	<input id="post_id" name="position_id" type="hidden" value="${post.position.pId }" />
                                        	<span class="vm newshowtree choose_statndardPosition">${type eq 'eth'?'选择基准岗位':'选择基准岗位' }</span>
                                        	<span class="vm cleanChoose">清除所选</span>
                                        	<div id="post_name_error" class="validate_error"></div>
                                        </td>
                                    </tr>
                                     <tr>
                                        <td>显示顺序</td>
                                        <td><input name=" sortNo" type="text" class="input vm" value=""/></td>
                                    </tr>
                                    <tr>
                                        <td class="vt" style="padding-top:0;"><em>*</em>工作特性</td>
                                        <td><textarea id="describes" name="describes" cols="" rows="">${post.describes }</textarea>
                                        	<div id="describes_error" class="validate_error"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table> 	
            			</c:when>
            			<c:otherwise>
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
                                        	<div id="sn_error" class="validate_error"></div>
                                        	<input id="poId" name="poId" type="hidden"  value="${post.poId }"/>
                                        	<input name="leaf" type="hidden" value="true" />
											<c:if test="${post==null }">
	                                        	<input id="upId" name="upId" type="hidden"  value="${upId }"/>
												<input name="org_id" type="hidden"  value="${orgId }"/>
											</c:if>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><em>*</em>名称</td>
                                        <td><input id="name" name="name" type="text" class="input vm" value="${post.name }" />
                                        <input id="old_name" type="hidden" value="${post.name }"/>
                                        	<div id="name_error" class="validate_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><em>*</em>层级</td>
                                        <td>
                                       		<select name="level_id">
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
                                        	<select name="postID_id">
                                          		<c:forEach var="item" items="${postIDList }">
                                       				<option value="${item.spId }" ${post.postID.spId eq item.spId?"selected=selected":"" }>${item.name }</option>
                                       			</c:forEach>
                                      		</select>
                                    	</td>
                                    </tr>
                                    <tr>
                                        <td><em>*</em>基准岗位</td>
                                        <td>
                                        	<input id="post_name" name="post_name" type="text" class="input vm" value="${post.position.name }"/>
                                        	<input id="post_id" name="position_id" type="hidden" value="${post.position.pId }" />
                                        	<span class="vm newshowtree choose_statndardPosition">选择基准岗位</span>
                                        	<span class="vm cleanChoose">清除所选</span>
                                        	<div id="post_name_error" class="validate_error"></div>
                                        </td>
                                    </tr>
                                     <tr>
                                        <td>显示顺序</td>
                                        <td><input name=" sortNo" type="text" class="input vm" /></td>
                                    </tr>
                                    <tr>
                                        <td class="vt" style="padding-top:0;"><em>*</em>职责/角色描述</td>
                                        <td><textarea id="describes" name="describes" cols="" rows="">${post.describes }</textarea>
                                        	<div id="describes_error" class="validate_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="vt" style="padding-top:0;"><em>*</em>任职基本条件</td>
                                        <td><textarea id="require_basic" name="require_basic" cols="" rows="">${post.require_basic }</textarea>
                                        	<div id="require_basic_error" class="validate_error"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="vt" style="padding-top:0;"><em>*</em>任职关键条件</td>
                                        <td><textarea id="require_critical" name="require_critical" cols="" rows="">${post.require_critical }</textarea>
                                        	<div id="require_critical_error" class="validate_error"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table> 	
            			</c:otherwise>
            		</c:choose>
               		
       					<div align="right">
       						<input type="submit" class="step vm m10" value="确定" />
       						<a href="${basepath }/position4org/manage.html" class="back m10 vm">关闭</a>
       					</div>
               	</form>
            </div>
        </div>
    </div>
    
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath}/js/demand/newblock.js" charset="gbk"></script>
<script type="text/javascript">
	$(function(){
		$("#form_new").validate({
			errorPlacement: function(error, element) {
				var id = $(element).attr("id");
				error.appendTo( $("#"+id+"_error") );
			},
			rules:{
				sn:{
					required:true
				},
				name:{
					required:true,
					maxlength:100
				},
				describes:{
					required:true,
					maxlength:1000
				},
				require_basic:{
					required:true,
					maxlength:1000
				},
				require_critical:{
					required:true,
					maxlength:1000
				},
				post_name:{
					required:true
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
				require_basic:{
					required:"请输入任职基本条件",
					maxlength:"字符长度超过1000个字"
				},
				require_critical:{
					required:"请输入任职关键条件",
					maxlength:"字符长度超过1000个字"
				},
				post_name:{
					required:"请选择基准岗位"
				}
			}
		});
	
		$("#form_new").submit(function(){
			var re = false;
			var pId = $("#poId").val();
			var sn = $("#sn").val();
			var name=$("#name").val();
			var old_name=$("#old_name").val();
			if(pId==null || pId == ""){
				$.ajax({
					url : basepath+"/position4org/validate.html",
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
			if(re == 'true'){
				$.dialog.alert("编号已经存在!");
				return false;
			}
			return true;
		});
	
		var pageType = '${type}';
		$(".choose_statndardPosition").click(function(){
			$("#post_name").removeClass("error");
			$("#post_name_error").html("");
			initTree("#position_jstree",null,rootPosition,"pos",function(type,id,name,namePath){
			//	if(pageType == type){ //LMSWD-3352
					$("#post_id").val(id);
					$("#post_name").val(name);
			//	}
			});
		});
		
		$(".cleanChoose").click(function(){
		    $("#post_name").val("");
		    $("#post_id").val("");
		});
	});
</script>
</body>

</html>







