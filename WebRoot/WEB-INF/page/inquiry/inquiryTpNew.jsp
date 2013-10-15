<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<c:if test="${surveyType == '1' }"><title>新建培训需求模板</title></c:if><c:if test="${surveyType == '2' }"><title>新建评估模板</title></c:if>
<jsp:include page="/WEB-INF/page/include/css_bootstrap.jsp"></jsp:include>
</head>
<body class="bg">
<div class="blackall hidden">&nbsp;</div>
<div class="newwindow hidden" id="leadinco">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath}/images/close.png" width="40" height="40" /></a></div>
    <div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">导入模板</h2>
            <div class="basic_information w90p">
              <div class="pt20">导入模板：<input name="" type="file" /> <a href="" class="ml30">下载导入模板 <img src="${basepath}/images/download.png" width="16" height="16" class="vm"/></a></div>
                <div class="m10 taR "><input type="button" class="step releasebutton" value="确定"/></div>
            </div>
    </div>
</div>
<div class="newwindow hidden" id="release">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath}/images/close.png" width="40" height="40" /></a></div>
    <div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">发布模板</h2>
            <div class="basic_information mt2">
            	 <div>发布内容放这里</div>
                 <div align="right" class="mr10" >
                 	<p><input name="" type="button" class="step m10" value="保存"/><input name="" type="button" class="step m10 windowbutton2" value="发布"/><input name="" type="button" class="back m10 windowbutton2" value="关闭"/></p>
                    <p>模板可编辑。点击发布,模板方可使用</p>
                </div>
            </div>
        </div>
</div>
<div>
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
								<c:if test="${surveyType == '1' }">新建培训需求模板</c:if>
                       			<c:if test="${surveyType == '2' }">新建评估模板</c:if>
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
        	<h2 class="png_bg"><c:if test="${surveyType == '1' }">新建培训需求模板</c:if><c:if test="${surveyType == '2' }">新建评估模板</c:if></h2>
        	<form id="inquiryTp" action="saveInquiryTp.html" method="post">
        	<input type="hidden" name="surveyType" value="${surveyType}" />
            <div class="basic_information">
            <div class="widget-main">
				
				<div class="row-fluid">
            <div id="fuelux-wizard" class="row-fluid hidden">
					  <ul class="wizard-steps">
						<li data-target="#step1" class="active" ><span class="step">1</span> <span class="title">基本信息</span></li>
						<li data-target="#step2" class=""><span class="step">2</span> <span class="title">设置问题</span></li>
					  </ul>
					</div>
					<hr />
                <table border="0" cellspacing="15" cellpadding="15" class="mt40">
                
                	<colgroup>
                    	<col width="90" />
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<td class="taR w150"><em>*</em>模板名称：</td>
                        	<td colspan="3"><input id="name" name="name" type="text" class="input vm" value="" /></td>
                        </tr>
                        <c:if test="${surveyType == '2'}">
                         <tr>
                        	<td class="taR"><em>*</em>模板类型</td>
                        	<td colspan="3">
								<select name="TPtype">
									<option value="21">反应层评估</option>
									<option value="22">行为层评估</option>
									<option value="23">综合评估</option>
									<option value="24">LPI评估</option>
									<option value="25">通用性满意度调查</option>
								</select>
							</td> <!-- LINJJ too young too simple sometimes naive =_=  --> 
                        </tr> 
                        </c:if>
                        <tr>
                        	<td class="taR vt">备注：</td>
                            <td colspan="3"><textarea name="remark" cols="" rows=""></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <div align="right" class="mr10"><input type="submit"" class="btn btn-small btn-info step m10" value="下一步"/><a href="#" class="btn btn-small back m10 vm allclose">关闭</a></div>
            </div>
             </form>
        </div>
    </div>
    
</div>
<jsp:include page="/WEB-INF/page/include/script_bootstrap.jsp"></jsp:include>
<script type="text/javascript">
$("#inquiryTp").validate({
		rules:{
			name : {
				required : true,
				maxlength : 120
			}
		},
		messages:{
			name : {
				required : "请输入名称！",
				maxlength : "字符数量不能超过120"
			}
		}
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






