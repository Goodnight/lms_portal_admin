<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="urf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<c:choose>
       		<c:when test="${video==null }"> 
       			<title>新建同步课堂</title>
       		</c:when>
       		<c:otherwise> 
       			<title>修改同步课堂</title>
       		</c:otherwise>
       	</c:choose>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
	<body class="bg">
		<div id="dialog" class="hidden">
			<div class="blackall">&nbsp;</div>
			<div class="newwindow" id="choosepersonco">
				<div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
			    <div id="dialog_content" class="cl"></div>
			</div>
		</div>
		<div class="container">
		    <!-- 导入头部 -->
		    <jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
		    <div class="breadCrumbHolder breadCrumbPage">
			  	<div class="headerco">
			     	<div class="breadCrumb reHeight noborder" id="breadCrumb3">
		                   <div class="z">
		                   	<ul>
		                           <li class="first">
		                               <a href="${basepath }/index.html">首页</a>
		                           </li>
		                           <li>
		                               <a href="${basepath }/trainclass/index.html">培训班管理</a>
		                           </li>
		                           <li>${tc.name }</li>
		                           <li class="last">
		                               ${video==null?"新建同步课堂":"修改同步课堂" }
		                           </li>
		                   	</ul>
		                   </div>
		                   <div class="y"></div>
			      </div> 
			    </div>
			  </div>
		  	<div class="content cl">
				<div class="ngreyborder changeblue2 mt20">
					<c:choose>
			       		<c:when test="${video==null }"> 
			       			<h2 class="png_bg">新建同步课堂</h2>
			       		</c:when>
			       		<c:otherwise> 
			       			<h2 class="png_bg">修改同步课堂</h2>
			       		</c:otherwise>
			       	</c:choose>
		            <div class="basic_information mt2">
		            	<form id="videoclass_form" action="save.html" method="post">
		               	<table border="0" cellspacing="15" cellpadding="15">
		                	<colgroup>
		                    	<col width="100" />
		                    </colgroup>
		                	<tbody>
		                    	<tr>
		                        	<td class="taR"><em>＊</em>课堂名称</td>
		                        	<td >
		                        		<input id="tcid" type="hidden" name="tcid" value="${tc.tcId }"/>
		                        		<input type="hidden" name="vId" value="${video.vId }"/>
		                        		<input id="name"  name="name" type="text" class="input vm" value="${video.name }" ${bool?"disabled":"" }/>
		                        		<div id="name_error"></div>
		                        	</td>
		                        </tr>
		                        <tr>
		                        	<td class="vt taR" style="padding-top:0;">课堂介绍</td>
		                            <td><textarea name="introduction" cols="" rows="" ${bool?"disabled":"" } >${video.introduction }</textarea></td>
		                        </tr>
		                        <tr>
		                        	<!--使用时间控件-->
		                        	<td class="taR"><em>＊</em>课堂开始时间</td>
		                            <td>
		                            	<input id="${!bool?'startTm':'' }" name="startTm" type="text"  class="input vm" style="width:100px" value="${fn:substring(video.startTm,0,10) }" ${bool?"disabled":"" }/> 
		                            	&nbsp;&nbsp;
		                            	<select id="startHour" name="startHour" class="w50" ${bool?'disabled':'' }>
		                            		<c:forEach var="h" begin="0" end="23">
		                            			<c:choose>
		                            				<c:when test="${video.startHour==h }">
		                            					<option value="${h }" selected="selected">${h }</option>
		                            				</c:when>
		                            				<c:otherwise>
		                            					<option value="${h }">${h }</option>
		                            				</c:otherwise>
		                            			</c:choose>
		                            		</c:forEach>
		                            	</select> 时
		                            	<select id="startMinute" name="startMinute" class="w50 ml12" ${bool?'disabled':'' }>
		                            		<c:forEach var="h" begin="0" end="59">
		                            			<c:choose>
		                            				<c:when test="${video.startMinute==h }">
		                            					<option value="${h }" selected="selected">${h }</option>
		                            				</c:when>
		                            				<c:otherwise>
		                            					<option value="${h }">${h }</option>
		                            				</c:otherwise>
		                            			</c:choose>
		                            		</c:forEach>
		                            	</select> 分
		                            	<select id="startSecond" name="startSecond" class="w50 ml12" ${bool?'disabled':'' }>
		                            		<c:forEach var="h" begin="0" end="59">
		                            			<c:choose>
		                            				<c:when test="${video.startSecond==h }">
		                            					<option value="${h }" selected="selected">${h }</option>
		                            				</c:when>
		                            				<c:otherwise>
		                            					<option value="${h }">${h }</option>
		                            				</c:otherwise>
		                            			</c:choose>
		                            		</c:forEach>
		                            	</select> 秒
		                            	<div id="startTm_error"></div>
		                            </td>
		                           </tr>
		                           <tr>
		                           	<td class="taR"><em>＊</em>课堂结束时间</td>
		                           	<td>
		                            	<input id="${!bool?'endTm':'' }" name="endTm" type="text" class="input vm" style="width:100px" value="${fn:substring(video.endTm,0,10) }" ${bool?"disabled":"" }/>
		                            	&nbsp;&nbsp;
		                            	<select id="endHour" name="endHour" class="w50" ${bool?'disabled':'' }>
		                            		<c:forEach var="h" begin="0" end="23">
		                            			<c:choose>
		                            				<c:when test="${video.endHour==h }">
		                            					<option value="${h }" selected="selected">${h }</option>
		                            				</c:when>
		                            				<c:otherwise>
		                            					<option value="${h }">${h }</option>
		                            				</c:otherwise>
		                            			</c:choose>
		                            		</c:forEach>
		                            	</select> 时
		                            	<select id="endMinute" name="endMinute" class="w50 ml12" ${bool?'disabled':'' }>
		                            		<c:forEach var="h" begin="0" end="59">
		                            			<c:choose>
		                            				<c:when test="${video.endMinute==h }">
		                            					<option value="${h }" selected="selected">${h }</option>
		                            				</c:when>
		                            				<c:otherwise>
		                            					<option value="${h }">${h }</option>
		                            				</c:otherwise>
		                            			</c:choose>
		                            		</c:forEach>
		                            	</select> 分
		                            	<select id="endSecond" name="endSecond" class="w50 ml12" ${bool?'disabled':'' }>
		                            		<c:forEach var="h" begin="0" end="59">
		                            			<c:choose>
		                            				<c:when test="${video.endSecond==h }">
		                            					<option value="${h }" selected="selected">${h }</option>
		                            				</c:when>
		                            				<c:otherwise>
		                            					<option value="${h }">${h }</option>
		                            				</c:otherwise>
		                            			</c:choose>
		                            		</c:forEach>
		                            	</select> 秒
		                            	<div id="endTm_error"></div>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td class="taR"><em>＊</em>课堂类型${video.isPub}</td>
		                            <td>
		                            	<c:choose>
		                            		<c:when test="${video.isPub!=null }">
				                            	<input id="isPub" name="isPub" type="radio" ${bool?"disabled":"" } value="1" ${bool?"disabled":"" }  <c:out value="${video.isPub==1?'checked=checked':'' }" /> /> 公开 
				                            	<input id="isPub" name="isPub" type="radio" ${bool?"disabled":"" }  value="0"  <c:out value="${video.isPub==0?'checked=checked':'' }" /> /> 非公开
		                            		</c:when>
		                            		<c:otherwise>
		                            			<input id="isPub" name="isPub" type="radio" ${bool?"disabled":"" } value="1"  /> 公开 
				                            	<input id="isPub" name="isPub" type="radio" ${bool?"disabled":"" } value="0"  checked="checked"  /> 非公开
		                            		</c:otherwise>
		                            	</c:choose>
		                            	<div id="isPub_error"></div>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td class="taR"><em>＊</em>主持人</td>
		                            <td>
		                            	<input id="compereId" name="compereId" type="hidden" value="${video.compere.uid }" />
		                            	<input id="compereName" name="compereName" type="text" class="input vm" value="${video.compere.name }" readonly="readonly" ${bool?"disabled":"" } />
		                            	<span id="compere" class="vm ${!bool?'chooseperson':''}">选择人员</span>
		                            	<span class="vm ${!bool?'cls_clear':''}" type="compere">清除人员</span>
		                            	<div id="compereName_error"></div>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td class="taR"><em>＊</em>主讲人</td>
		                            <td>
		                            	<input id="speakerId" name="speakerId" type="hidden" value="${video.speaker.uid }" />
		                            	<input id="speakerName" name="speakerName" type="text" class="input vm" value="${video.speaker.name }" readonly="readonly" ${bool?"disabled":"" } />
		                            	<span id="speaker" class="vm ${!bool?'chooseperson':''}">选择人员</span>
		                            	<span class="vm ${!bool?'cls_clear':''}" type="speaker">清除人员</span>
		                            	<div id="speakerName_error"></div>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td class="taR"><em>＊</em>最大参加人数</td>
		                            <td>
		                            	<input id="maxAttend" name="maxAttend" type="text" class="input vm w80" value="${video!=null?video.maxAttend:tc.attendNum }" ${bool?"disabled":"" } /><!--只能输入数字-->
		                            	<em style="color:grey;font-size:12px">培训班人数: ${tc.attendNum }</em>
		                            	<input id="tc_attendNum" type="hidden" value="${tc.attendNum }" />
		                            </td>
		                        </tr>
		                    </tbody>
		                </table> 	
		                <div align="right" class="mr100">
		                    <input type="hidden" id = bools name =bools value="${bool}" />
		                	<input name="" type="submit" class="searchbutton m10" value="确定"/>
		                	<input id="btn_cancel" name="" type="button" class="step m10" value="取消"/>
		                </div>
		            	</form>
		            </div>
		        </div>
		    </div>
		</div>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		
		<script type="text/javascript">
			var tcid="${tcid}";
			var trainStartDt = "${tc.start_date }";
			var trainEndDt = "${tc.end_date }";
			
			
			$("#videoclass_form").submit(function(){
				var endDate = $("#endTm").val();
				var end_hour = parseFloat($("#endHour").val());
				var end_minute = parseFloat($("#endMinute").val());
				var end_second = parseFloat($("#endSecond").val());
				
				
				var startDate = $("#startTm").val();
				var start_hour = parseFloat($("#startHour").val());
				var start_minute =parseFloat( $("#startMinute").val());
				var start_second = parseFloat($("#startSecond").val());
				
				
				if(endDate==startDate&&end_hour<start_hour){
					alert("会议结束时间不能小于会议开始时间");
					return false;
				}else if(endDate==startDate&&end_hour==start_hour&&end_minute<start_minute){
					alert("会议结束时间不能小于会议开始时间");
					return false;
				}else if(endDate==startDate&&end_hour==start_hour&&end_minute==start_minute){
					if(end_second<start_second){
						alert("会议结束时间不能小于会议开始时间");
						return false;
					}
				}
				
				return true;
			});
			
			
		</script>
		
		
		
		<script type="text/javascript" src="${basepath }/js/train/videoclass_new.js" charset="gbk"></script>
		
	</body>

</html>