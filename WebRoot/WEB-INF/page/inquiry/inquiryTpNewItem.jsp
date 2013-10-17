<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<% String[] ind = new String[]{"一","二","三","四","五","六","七","八","九","十","十一"};
  int i=0;
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>设置问题</title>
<jsp:include page="/WEB-INF/page/include/css_bootstrap.jsp"></jsp:include>

</head>
<body class="bg">

 <jsp:include page="/WEB-INF/page/include/header_bootstrap.jsp"></jsp:include>
 <div class="row-fluid">
			<div id="breadcrumbs" class="pfb">
						<ul class="breadcrumb offset1">
							<li class="first">
								<i class="icon-home"></i> 
								<a href="${basepath }/index.html">首页</a><span class="divider"><i class="icon-angle-right"></i></span></li>
							<li>
								<c:if test="${surveyType == '1' }"><a href="${basepath }/inquiry/inquiryTpIndex.html?surveyType=1">培训需求模板</a><span class="divider"><i class="icon-angle-right"></i></span></c:if>
	                      	 	<c:if test="${surveyType == '2' }"><a href="${basepath }/inquiry/inquiryTpIndex.html?surveyType=2">评估模板</a><span class="divider"><i class="icon-angle-right"></i></span></c:if>
							</li>
							<li class="last">
								设置问题
                       		</li>
						</ul>
				</div>
           <div class="y"></div>
       </div> 
    </div>
  </div> 
  <div class="content cl">
  	<br/>
  	<br/>
   	<br/>
	<br/>
   	<br/>
    <br/>
		<div class="ngreyborder changeblue2 mt20">
        	<h5 class="png_bg">设置问题</h5>
        	<form id="newTemplate" action="saveInquiryTpItem.html" name="form1" method="post">
        	<input type="hidden" name="surveyType" value="<%=request.getParameter("surveyType")%>" />
        	<input type="hidden" name="stId" value="${stId}"/>
            <div class="courseupload basic_information">
             <div class="widget-main">
				
				<div class="row-fluid">
            <div id="fuelux-wizard" class="row-fluid hidden">
					  <ul class="wizard-steps">
						<li data-target="#step1" class="complete" ><a href="inquiryTpUpdate.html?surveyType=${surveyType}&stId=${stId}" class="green png_bg"><span class="step">1</span> <span class="title">基本信息</span></a></li>
						<li data-target="#step2" class="active"><a href="inquiryTpNewItem.html?surveyType=${surveyType}&stId=${stId}" class="yellow png_bg"><span class="step">2</span> <span class="title">设置问题</span></a></li>
					  </ul>
					</div>
					<hr />
				<table border="0" cellspacing="15" cellpadding="15" class="mt40 ml150">
                	<tbody>
                    	<tr>
                        	<td>
                        	    <%int j = 0;%> <!-- 所有问题大类下的题目统一题序 20130401 by LTC -->
                            	<c:forEach items="${list}" var="listCategory" varStatus="st">
									<div>
									   <c:if test="${!'' eq listCategory.name}">
									   		<%=ind[i++]%>、${listCategory.name}
									   </c:if>
									</div>
									<c:forEach items="${listCategory.items}" var="listItems" varStatus="st1">
									    <%j++;%>
										<div class="bug_number">
											&nbsp;&nbsp;<%=j%>. ${listItems.question}
										</div>
										<c:choose>
											<c:when test="${listItems.type==1}">
											<c:forEach items="${listItems.reses}" var="listReses" varStatus="st2">
												<div class="pl20 bug_number"><input name="a_${st1.count}" type="radio" value="" class="ace vm mr5"/><label class="lbl">${listReses.answer}</label></div>
											</c:forEach>
											</c:when>
											<c:when test="${listItems.type==2}">
											<c:forEach items="${listItems.reses}" var="listReses" varStatus="st2">
												<div class="pl20 bug_number"><input name="b_${st1.count}" type="checkbox" value="" class="ace vm mr5"/><label class="lbl">${listReses.answer}</label></div>
											</c:forEach>
											</c:when>
											<c:when test="${listItems.type==3}">
											<c:forEach items="${listItems.reses}" var="listReses" varStatus="st2">
												<div class="pl20 bug_number"><input name="c_${st1.count}" type="radio" value="" class="ace vm mr5"/>${listReses.answer}(${listReses.score}分)</div>
											</c:forEach>
											</c:when>
											<c:otherwise>
												<c:forEach items="${listItems.reses}" var="listReses" varStatus="st2">
													<div class="pl20 bug_number"><textarea name="d_${st1.count}" cols="" rows="" class="w750 ml20">${listReses.answer}</textarea></div>
												</c:forEach>
											</c:otherwise>
										</c:choose>
									</c:forEach>									
								</c:forEach>
                           	</td>
                        </tr>
                        <tr>
                            <td colspan="5"><div id="line_hr" class="hide" style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></div></td>
                        </tr>
                        <c:if test="${list == null || itb.status!=2}">
                         <tr>
                        	<td class="w150"><!-- <em>*</em> -->所属分类：<select class="vb" name="categoryId">
                        		<option value="">请选择</option>
                        		<c:forEach items="${list}" var="listCategory" varStatus="st">
                        			<option value="${listCategory.stcId}">${listCategory.name}</option>
                        		</c:forEach>
                        	</select>
                        	<span class="btn btn-mini btn-info vm nextshow">新增</span></td>
                        </tr>
                        
                        <tr class="hide"> 
                        	<td><em>*</em>分类名称：<input name="categoryName" type="text" class="input vb vm si" value="" />&nbsp;<span class="btn btn-mini btn-info vm prevshow">返回</span></td>
                        </tr>
                        <input type="hidden" name="cateNullId" value="${list[0].stcId}" />
                        <tr>
                        	<td>
                            	<div><em>*</em>问题：</div>
                                <div><textarea name="question" cols="" rows=""></textarea></div>
                           	</td>
                        </tr>
                        
                        <tr> 
                        	<td><em>*</em>题型：<select name="type" id="select">
                        	  <option value="1">单选题</option>
                        	  <option value="2">多选题</option>
                        	  <option value="3">量规题</option>
                        	  <option value="4">简答题</option>
                       	  </select></td>
                        </tr>
                        <tr>
                        	<td>
                            	<div>
                            		<div>备选项：</div>
                            		<div><em class="z w50 black">A</em>&nbsp;<input maxlength="1000" name="answer" type="text" class="w500"/><a href="javascript:;" class="deletree ml12">删除</a></div>
                                    <div><em class="z w50 black">B</em>&nbsp;<input maxlength="1000" name="answer" type="text" class="w500"/><a href="javascript:;" class="deletree ml12">删除</a></div>
                                    <div><em class="z w50 black">C</em>&nbsp;<input maxlength="1000" name="answer" type="text" class="w500"/><a href="javascript:;" class="deletree ml12">删除</a></div>
                                    <div><em class="z w50 black">D</em>&nbsp;<input maxlength="1000" name="answer" type="text" class="w500"/><a href="javascript:;" class="deletree ml12">删除</a></div>
                                    <div><a href="javascript:;" id="additem">增加一项</a></div>
                            	</div>
                            </td>
                        </tr>
                        <tr id="point" class="hide">
                        	<td>
                            	<div>
                            		<div>备选项：</div>
                            		<div><em class="z w50 black">A</em>&nbsp;<input maxlength="1000" name="answer2" type="text" class="w500"/><a href="javascript:;" class="deletree ml12">删除</a><input name="score" type="text" class="ml12" value="5"/></div>
                                    <div><em class="z w50 black">B</em>&nbsp;<input maxlength="1000" name="answer2" type="text" class="w500"/><a href="javascript:;" class="deletree ml12">删除</a><input name="score" type="text" class="ml12" value="4"/></div>
                                    <div><em class="z w50 black">C</em>&nbsp;<input maxlength="1000" name="answer2" type="text" class="w500"/><a href="javascript:;" class="deletree ml12">删除</a><input name="score" type="text" class="ml12" value="3" /></div>
                                    <div><em class="z w50 black">D</em>&nbsp;<input maxlength="1000" name="answer2" type="text" class="w500"/><a href="javascript:;" class="deletree ml12">删除</a><input name="score" type="text" class="ml12" value="2" /></div>
                                    <div><em class="z w50 black">E</em>&nbsp;<input maxlength="1000" name="answer2" type="text" class="w500"/><a href="javascript:;" class="deletree ml12">删除</a><input name="score" type="text" class="ml12" value="1" /></div>
                                    <div><a href="javascript:;" id="additem2">增加一项</a></div>
                            	</div>
                            </td>
                        </tr>
                        </c:if>
                    </tbody>
                </table>
                <div align="right" class="mr10">
                	<p>
                		<c:if test="${list==null || itb.status!=2 }">
                	   <input name="" type="submit"  class="btn btn-small btn-warning step vm mr10" value="下一题" hidefocus="true" />
                	   <input name="" type="button" class="btn btn-small btn-info step vm mr10"  value="完成"  id="finishs" onclick="" />
                	   </c:if>
                	   <a href="#" class="btn btn-small back vm mr10 allclose" hidefocus="true" >关闭</a>
                    </p>
                    <p class="mt4">系统自动保存数据</p>
                </div>
            </div>
            </form>
        </div>
    </div>
</div>
<jsp:include page="/WEB-INF/page/include/script_bootstrap.jsp"></jsp:include>
<script type="text/javascript">
$(document).ready(function () {	
       $("#newTemplate").validate({
        rules:{
            categoryId : {
            //    required : true,
                maxlength : 20
            },
            question : {
                required : true
            },
            type : {
                required : true
            },
            optionCount : {
                digits : true,
                required : true
            }
        },
        messages:{
            categoryId : {
            //    required : "请输入所属分类",
                maxlength : "分类名称最大长度为20"
            },
            question : "请输入问题",
            type : "请输入题型",
            optionCount : {
                required : "请输入最多选择多少项",
                digits: "请输入整数"
            } 
        }
    });
       var reg1 =  /^\d+$/;
    $("#newTemplate").submit(function(){
    	var flag = true;
    	var scores = $("input[name='score']");
    	for(var i=0;i<scores.length;i++){
    		if(!(/(^[1-9]\d*$)/.test(scores[i].value))){
    			$(scores[i]).after('<label for="class_dep_id" generated="true" class="error">请输入正整数</label>');
    			flag = false;
    		}
    	}
		return flag;
	});
	$("#finishs").click(function(){
	   $("form").first().attr("action","saveInquiryTpItemOver.html?method=post").submit();
	});
});
		var $validation = false;
	$('#fuelux-wizard').ace_wizard().on('change' , function(e, info){
		if(info.step == 1 && $validation) {
			if(!$('#validation-form').valid()) return false;
		}
	}).on('finished', function(e) {
		bootbox.dialog("Thank you! Your information was successfully saved!", [{
			"label" : "OK",
			"class" : "btn-small btn-primary",
			}]
		);
	});
</script>
</body>
</html>
    