<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>会议详情</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>
<body class="bg" style="overflow-x:auto">
<!-- 对话框 -->
<div id="dialog" class="hidden">
    <div class="blackall_new">&nbsp;</div>
    <!-- 半透明背景 -->
    <div class="newwindow" id="choosepersonco">
        <!-- 关闭按钮 -->
        <div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
        <!-- 对话框内容 -->
        <div id="dialog_content" class="cl"></div>
    </div>
</div> 
<div class="container">
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
                       <a href="${basepath }/meetingManage/meetingManageList.html">会议管理</a>
                   </li>
                   <li class="last">修改会议 - ${mb.name }</li>
            </ul>
           </div>
           <div class="y"></div>
       </div> 
    </div>
  </div>
  <div class="content cl">
  	
		<div class="ngreyborder changeblue2 mt20">
		
        	<h2 class="png_bg">修改会议信息</h2>
        	
        	<form id="meeting" action="saveModifiedMeeting.html?mId=${mb.mId }" method="post">
            <div class="courseupload basic_information">
            	<ul class="window_nav newnav">
                    <li class="basic"><a href="meetingInfo.html?mId=${mb.mId }" class="png_bg">基本信息</a></li>
                    <li class="course"><a href="turnStaff.html?mId=${mb.mId }" class="grey png_bg">安排人员</a></li>
                </ul>
                <table border="0" cellspacing="15" cellpadding="15" class="mt40">
                	<colgroup>
                    	<col width="90" />
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<td width="87" class="taR"><em>*</em>会议名称</td>
                        	
                        	<td width="679">
                        		<input id="name" name="name" type="text" class="input vm" value="${mb.name}" ${bool?'disabled':'' } />
                        	
                        	<div id="name_error" class="validate_error"></div>
                        	</td>
                        </tr>
                        <tr>
                        	<td class="taR"><em>*</em>开始时间</td>
                            <td><input id="${bool?'':'startDate2' }" name="start_date" type="text" class="timetext ${bool?'':'cls_date' }" ${bool?'disabled':'' } value="${mb.start_date}"/>
                            <select id="start_hour" name="start_hour" class="w50 ml12" ${bool?'disabled':'' }>
                            	<option>${mb.start_hour}</option>
                            	<option>00</option>
                            	<option>01</option>
                            	<option>02</option>
                            	<option>03</option>
                            	<option>04</option>
                            	<option>05</option>
                            	<option>06</option>
                            	<option>07</option>
                            	<option>08</option>
                            	<option>09</option>
                            	<option>10</option>
                            	<option>11</option>
                            	<option>12</option>
                            	<option>13</option>
                            	<option>14</option>
                            	<option>15</option>
                            	<option>16</option>
                            	<option>17</option>
                            	<option>18</option>
                            	<option>19</option>
                            	<option>20</option>
                            	<option>21</option>
                            	<option>22</option>
                            	<option>23</option>
                            </select> 时
                            <select name="start_minute" id="start_minute" class="w50 ml12" ${bool?'disabled':'' }>
                                <option>${mb.start_minute}</option>
                                <option>00</option>
                            	<option>05</option>
                            	<option>10</option>
                            	<option>15</option>
                            	<option>20</option>
                            	<option>25</option>
                            	<option>30</option>
                            	<option>35</option>
                            	<option>40</option>
                            	<option>45</option>
                            	<option>50</option>
                            	<option>55</option>
                            </select> 分
                            <select name="start_second" id="start_second" class="w50 ml12" ${bool?'disabled':'' }>
                            	<option>${mb.start_second}</option>
                            	<option>00</option>
                            	<option>05</option>
                            	<option>10</option>
                            	<option>15</option>
                            	<option>20</option>
                            	<option>25</option>
                            	<option>30</option>
                            	<option>35</option>
                            	<option>40</option>
                            	<option>45</option>
                            	<option>50</option>
                            	<option>55</option>
                            </select> 秒
                             <div id="startDate_error" class="validate_error"></div>
                            </td>  
						</tr>
						
                        <tr>
                        	<td class="taR"><em>*</em>结束时间</td>
                            <td><input id="${bool?'':'endDate2' }" name="end_date" type="text" class="timetext ${bool?'':'cls_date' }" ${bool?'disabled':'' } value="${mb.end_date}" />
                            <select name="end_hour" id="end_hour" class="w50 ml12" ${bool?'disabled':'' }>
                            	<option>${mb.end_hour}</option>
                            	<option>00</option>
                            	<option>01</option>
                            	<option>02</option>
                            	<option>03</option>
                            	<option>04</option>
                            	<option>05</option>
                            	<option>06</option>
                            	<option>07</option>
                            	<option>08</option>
                            	<option>09</option>
                            	<option>10</option>
                            	<option>11</option>
                            	<option>12</option>
                            	<option>13</option>
                            	<option>14</option>
                            	<option>15</option>
                            	<option>16</option>
                            	<option>17</option>
                            	<option>18</option>
                            	<option>19</option>
                            	<option>20</option>
                            	<option>21</option>
                            	<option>22</option>
                            	<option>23</option>
                            </select> 时
                            <select name="end_minute" id="end_minute" class="w50 ml12" ${bool?'disabled':'' }>
                                <option>${mb.end_minute}</option>
                                <option>00</option>
                            	<option>05</option>
                            	<option>10</option>
                            	<option>15</option>
                            	<option>20</option>
                            	<option>25</option>
                            	<option>30</option>
                            	<option>35</option>
                            	<option>40</option>
                            	<option>45</option>
                            	<option>50</option>
                            	<option>55</option>
                            </select> 分
                            <select name="end_second" id="end_second" class="w50 ml12" ${bool?'disabled':'' }>
                                <option>${mb.end_second}</option>
                                <option>00</option>
                            	<option>05</option>
                            	<option>10</option>
                            	<option>15</option>
                            	<option>20</option>
                            	<option>25</option>
                            	<option>30</option>
                            	<option>35</option>
                            	<option>40</option>
                            	<option>45</option>
                            	<option>50</option>
                            	<option>55</option>
                            </select> 秒
                            <div id="endDate_error" class="validate_error"></div>
                          </td>
                        </tr>
                        <tr>
                        	<td class="taR"><em>*</em>主持人</td>
                            <td>
                                <input id="master_name" name="master" type="text" value="${mb.master.name }"  ${bool?'disabled':'' }/>
		                        <input id="master_id" name="master_name" type="hidden" value="${mb.master.uid }" />
                            	<span id="master" class="vm ${!bool?'chooseperson':''}">选择主持人</span>
                            	<div id="master_name_error" class="validate_error"></div>
                            </td>
                        </tr>
                        <tr>
                        	<td class="taR"><em>*</em>讲师</td>
                            <td>
                                <input id="teacher_name" name="teacher" type="text" value="${mb.teacher.name }" ${bool?'disabled':'' } />
		                        <input id="teacher_id" name="teacher_name" type="hidden" value="${mb.teacher.uid }" />
                            	<span id="teacher" class="vm ${!bool?'chooseperson1':''}">选择讲师</span>
                            	<div id="teacher_name_error" class="validate_error"></div>
                            </td>
                        </tr>
                        <tr>
                        	<td class="taR"><em>*</em>最大参会人员数</td>
                            <td><input id="maxAttend" name="maxAttend" type="text" class="input vm si"  value="${mb.maxAttend}" ${bool?'disabled':'' } /><em> 最多500人</em>
                             <div id="maxAttend_error" class="validate_error"></div>
                             <input id="bools" name="bools" type="hidden" value="${bool}"/>
                            </td>
                        </tr>
                        <tr>
                        	<td class="taR vt">备注</td>
                            <td><textarea name="remarks" cols="" rows="" ${bool?'disabled':'' } >${mb.remarks}</textarea></td>
                            
                        </tr>
                    </tbody>
                </table>
                <div align="right" class="mr10">
                	 <input type="submit" class="step m10" value="保存"/>
                	 <a class="back m10 vm" href="${basepath }/meetingManage/meetingManageList.html" >返回</a>
                </div>
			</div>
			</form>
        </div>
    </div>
</div>


<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
<script type="text/javascript" src="${basepath }/js/meeting/chooseperson.js" charset="gbk"></script>
<script type="text/javascript">
	//开始日期
	$("#startDate2").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#endDate2").datepicker("option","minDate",dt);
			$('#startDate').removeClass('error');
			$('#startDate_error').html('');
		}
	});
	
	//结束日期
	$("#endDate2").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#startDate2").datepicker("option","maxDate",dt);
			$('#endDate').removeClass('error');
			$('#endDate_error').html('');
		}
	});
	
	var mId = "${mb.mId}";
	$(".uibox_close").live('click',function(){
        parent.closedialog();
    });
	
	
	$("#meeting").submit(function(){
		var endDate = $("#endDate").val();
		var end_hour = $("#end_hour").val();
		var end_minute = $("#end_minute").val();
		var end_second = $("#end_second").val();
		
		
		var startDate = $("#startDate").val();
		var start_hour = $("#start_hour").val();
		var start_minute = $("#start_minute").val();
		var start_second = $("#start_second").val();
		
		if(endDate<startDate){
			alert("会议结束时间不能小于会议开始时间");
			return false;
		}
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
			if(end_second==start_second){
				alert("会议结束时间不能等于会议开始时间");
				return false;
			}
		}
		
		return true;
	});
</script>
</body>
</html>
