<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/xhtml; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>培训班基本信息</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>	
	</head>
	<body class="bg">
		<div class="blackall hidden">&nbsp;</div>
		<div class="treewindow" >
			<div id="new_org_jstree" class="demo treedemo"></div>
		    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
		</div>
		<div id="dialog" class="hidden">
			<div class="blackall_new" >&nbsp;</div>
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
                                   <c:if test="${trainClass.tcId!=null }">
	                                   <li>${trainClass.name }</li>
                                   </c:if>
                                   <li class="last">
                                       	基本信息
                                   </li>
                           	</ul>
                           </div>
                           <div class="y"></div>
			      </div> 
			    </div>
			 </div>
		    <div class="content">
		    	<c:choose>
		    		<c:when test="${trainClass.tcId!=null }">
		    			<ul class="window_nav">
				            <li class="basic"><a href="information.html?tcid=${tcid }" class="png_bg">基本信息</a></li>
				            <li class="course"><a href="course.html?tcid=${tcid }" class="grey png_bg">课程设置</a></li>
				            <li class="person"><a href="staffing.html?tcid=${tcid }" class="grey png_bg">人员设置</a></li>
				            <li class="sameclass"><a href="videoclass.html?tcid=${tcid }" class="grey png_bg">同步课堂</a></li>
				            <li class="examadmin"><a href="examination.html?tcid=${tcid }" class="grey png_bg">考试管理</a></li>
				            <li class="evaluate"><a href="estimate.html?tcid=${tcid }" class="grey png_bg">评估设置</a></li>
				            <c:choose>
				            	<c:when test="${trainClass.way.name eq '在线' }">
				            		<li class="faceadmin"><a href="bbs.html?tcid=${tcid }" class="grey png_bg">讨论区管理</a></li>
				            		<li class="discuss"><a href="statistics.html?tcid=${tcid }" class="grey png_bg">培训统计</a></li>
				            	</c:when>
				            	<c:otherwise>
				            		<li class="faceadmin"><a href="facecourse.html?tcid=${tcid }" class="grey png_bg">面授管理</a></li>
				            		<li class="discuss"><a href="bbs.html?tcid=${tcid }" class="grey png_bg">讨论区管理</a></li>
				            		<li class="trainsta"><a href="statistics.html?tcid=${tcid }" class="grey png_bg">培训统计</a></li>
				            	</c:otherwise>
				            </c:choose>
				            
				            <!-- 
				            <c:choose>
                   				<c:when test="${trainClass.isGrantCertificate==1 }">
                   					<li class="certificate"><a href="certificate.html?tcid=${tcid }" class="grey png_bg">证书发布</a></li>
                   				</c:when>
                   				<c:otherwise>
                   					<li class="certificate"><a href="#" class="grey png_bg">证书发布</a></li>
                   				</c:otherwise>
                   			</c:choose>
                   			-->
				        </ul>
		    		</c:when>
		    		<c:otherwise>
		    			<ul class="window_nav">
				            <li class="basic"><a href="#" class="png_bg">基本信息</a></li>
				            <li class="course"><a href="#" class="grey png_bg">课程设置</a></li>
				            <li class="person"><a href="#" class="grey png_bg">人员设置</a></li>
				            <li class="sameclass"><a href="#" class="grey png_bg">同步课堂</a></li>
				            <li class="examadmin"><a href="#" class="grey png_bg">考试管理</a></li>
				            <li class="evaluate"><a href="#" class="grey png_bg">评估设置</a></li>
				            <li class="faceadmin"><a href="#" class="grey png_bg">面授管理</a></li>
				            <li class="discuss"><a href="#" class="grey png_bg">讨论区管理</a></li>
				            <li class="trainsta"><a href="#" class="grey png_bg">培训统计</a></li>
				            <!-- 
				            <li class="certificate"><a href="#" class="grey png_bg">证书发布</a></li>
				            -->
				        </ul>
		    		</c:otherwise>
		    	</c:choose>
		        
		        <form id="information" action="doSaveClass.html" method="post">
			    	<div class="window basic_information">
			        	<h2>基本信息</h2>
			            <table border="0" cellspacing="7" cellpadding="7">
			            	<colgroup>
		                    	<col width="150" />
		                        <col width="320" />
		                        <col width="110" />
		                        <col width="320" />
		                    </colgroup>
		                	<tbody>
		                		<c:if test="${trainClass.relatedTcId ne '1' }">
			                		<tr>
			                        	<td class="t1em">已有培训班</td>
			                        	<td colspan="3">
			                        		<input id="" name="" type="text" class="input vm" value="${relateClass.name }" readonly="readonly"/>
			                        		<input id="upClass" type="hidden" name="relatedTcId" value="${trainClass.relatedTcId }"/>
			                        		<c:if test="${trainClass.tcId==null || trainClass.tcId eq '' }">
				                        		<span class="vm" id="btn_chooseclass">选择已有培训班</span>
			                        		</c:if>
			                        	</td>
			                        </tr>
		                        </c:if>
		                        <tr>
		                        	<td><em>＊</em>培训班名称</td>
		                            <td colspan="3">
		                            	<input id="class_id" name="tcId" type="hidden" value="${trainClass.tcId }"/>
		                        		<input id="class_sn" name="sn" type="hidden" value="${trainClass.sn }"/>
		                            	<input id="name" name="name" type="text" class="input vm" value="${trainClass.name }"/>
		                            	<div id="name_error" class="validate_error"></div>
		                            </td>
		                        </tr>
		                        <tr>
		                            <td><em>＊</em>培训方式</td>
		                            <td colspan="3" id="face" >　
		                            	<c:forEach items="${wayList }" var="p" varStatus="st">
		                            		<c:choose>
		                            			<c:when test="${(trainClass==null && p.spId eq '0') || p.spId eq trainClass.way.spId  }">
		                            				<em class="option  choosed"><input id="class_way" name="class_way" type="radio" value="${p.spId }" checked="checked"/></em>${p.name }　　
		                            			</c:when>
		                            			<c:otherwise>
		                            				<em class="option"><input id="class_way" name="class_way" type="radio" value="${p.spId }"/></em>${p.name }　　
		                            			</c:otherwise>
		                            		</c:choose>
		                            	</c:forEach>
		                            	<div id="class_way_error" class="validate_error"></div>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td><em>＊</em>主办部门</td>
		                            <td colspan="3">
		                            	<div id="class_dep_name" style="float:left">${trainClass.dep.namepath }${trainClass.dep.name }</div>
		                            	<input id="class_dep_id" name="class_dep" type="hidden" value="${trainClass.dep.orgId }"/>
		                            	<span id="class_dep" class="vm newshowtree choosedep ${trainClass==null?'ml0':'' }">选择部门</span>
		                            	<div id="class_dep_id_error" class="validate_error"></div>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td><em>＊</em>培训级别</td>
		                            <td colspan="3">
		                            	<select id="class_level" name="class_level">
		                            		<c:forEach items="${levelList }" var="p">
			                            		<c:choose>
			                            			<c:when test="${p.spId eq trainClass.level.spId }">
			                            				<option value="${p.spId }" selected="selected">${p.name }</option>
			                            			</c:when>
			                            			<c:otherwise>
			                            				<option value="${p.spId }">${p.name }</option>
			                            			</c:otherwise>
			                            		</c:choose>
			                            	</c:forEach>
		                                </select>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td><em>＊</em>培训类别</td>
		                            <td>
		                            	<select id="class_type" name="addressType">
		                                	<c:forEach items="${trainTypeList }" var="p">
			                            		<c:choose>
			                            			<c:when test="${p.spId eq trainClass.addressType.spId }">
			                            				<option value="${p.spId }" selected="selected">${p.name }</option>
			                            			</c:when>
			                            			<c:otherwise>
			                            				<option value="${p.spId }">${p.name }</option>
			                            			</c:otherwise>
			                            		</c:choose>
			                            	</c:forEach>
		                                </select>
		                            </td>
		                            <td><em>＊</em>培训内容类别</td>
		                            <td>
		                            	<select id="class_content_type" name="trainContentTypeId">
		                                	<c:forEach items="${trainContentTypeList }" var="p">
			                            		<c:choose>
			                            			<c:when test="${p.spId eq trainClass.trainContentType.spId }">
			                            				<option value="${p.spId }" selected="selected">${p.name }</option>
			                            			</c:when>
			                            			<c:otherwise>
			                            				<option value="${p.spId }">${p.name }</option>
			                            			</c:otherwise>
			                            		</c:choose>
			                            	</c:forEach>
		                                </select>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td class="t1em">培训地点</td>
		                            <td colspan="3">
		                            	<input id="address" name="address" type="text" class="input vm" value="${trainClass.address }"/>
		                            	<div id="address_error"></div>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td><em>＊</em>班主任</td>
		                            <td colspan="3">
		                            	<div class="cl mt4 objectstring"  id="principal_list">
		                            		<c:forEach var="p" items="${principleList }">
		                                  		<label class="speciallabel">
		                                  			${p.teacher.name }
		                                  			<input type="hidden" name="principal" value="${p.teacher.uid }"/>
		                                  			<input type="hidden" name="principal_name" value="${p.teacher.name }"/>
		                                  			<a href="#" class="ml6"><img src="${basepath }/images/deletegreen.gif" /></a>
		                                  		</label>
		                                  	</c:forEach>
		                            	</div>
		                            	<div><span id="principal" class="vm info_chooseperson ml0">选择人员</span></div>
		                            	<div id="principal_error" class="validate_error"></div>
		                            </td>
		                         </tr>
		                         <tr>
		                            <td class="t1em">培训教练</td>
		                            <td colspan="3">
		                            	<div class="cl mt4 objectstring"  id="trainer_list">
		                            		<c:forEach var="trainer" items="${teacherList }">
		                                  		<label class="speciallabel">
		                                  			${trainer.teacher.name }
		                                  			<input type="hidden" name="trainer" value="${trainer.teacher.uid }"/>
		                                  			<input type="hidden" name="trainer_name" value="${teacher.trainer.name }"/>
		                                  			<a href="#" class="ml6"><img src="${basepath }/images/deletegreen.gif" /></a>
		                                  		</label>
		                                  	</c:forEach>
		                            	</div>
		                            	<span id="trainer" class="vm info_chooseperson ml0">选择人员</span>
		                            </td>
		                        </tr>
		                        <tr class="hidden">
		                        	<td class="t1em">是否有证书</td>
		                        	<td colspan="3">
		                        		<c:choose>
		                        			<c:when test="${trainClass.isGrantCertificate==1 }">
		                        				<em class="option "><input type="radio"  name="isGrantCertificate" value="0" /></em> 否　　
		                        				<em class="option choosed"><input type="radio"  name="isGrantCertificate" value="1" checked="checked"/></em> 是
		                        			</c:when>
		                        			<c:otherwise>
		                        				<em class="option choosed"><input type="radio"  name="isGrantCertificate" value="0" checked="checked"/></em> 否　　
		                        				<em class="option"><input type="radio"  name="isGrantCertificate" value="1"/></em> 是
		                        			</c:otherwise>
		                        		</c:choose>
		                        	</td>
		                        </tr>
		                    	<tr>
		                    		<td class="t1em">允许在线报名</td>
		                        	<td  colspan="2" id="online">
		                        		<c:choose>
		                        			<c:when test="${trainClass.if_online==1 }">
		                        				<em class="option choosed" ><input name="if_online" type="radio" value="1" checked="checked"/></em> 是　　
		                        				<em class="option"><input name="if_online" type="radio" value="0" /></em> 否
		                        			</c:when>
		                        			<c:otherwise>
		                        				<em class="option" ><input name="if_online" type="radio" value="1"/></em> 是　　
		                        				<em class="option choosed"><input name="if_online" type="radio" value="0"  checked="checked"/></em> 否
		                        			</c:otherwise>
		                        		</c:choose>
		                        	</td>
		                        </tr>
		                        </tbody>
		                </table>
		                <table style="border:1px dashed #ccc;margin-left:29px;" class="${trainClass.if_online==1?'':'hidden' } online"  cellspacing="7" cellpadding="7"  width="90%">
		                        <tr>
			                        <td>
	                            		<div class="z w155">报名是否需要审批</div>
	                                	<div class="z w685">
	                                		<c:choose>
			                        			<c:when test="${trainClass.isAllowAudit==1 }">
			                        				<em class="option choosed"><input name="isAllowAudit" type="radio" value="1" checked="checked"/></em> 否　　
			                        				<em class="option"><input name="isAllowAudit" type="radio" value="0" /></em> 是　　
			                        			</c:when>
			                        			<c:otherwise>
			                        				<em class="option"><input name="isAllowAudit" type="radio" value="1"/></em> 否　　
			                        				<em class="option choosed"><input name="isAllowAudit" type="radio" value="0"  checked="checked"/></em> 是
			                        			</c:otherwise>
			                        		</c:choose>
	                                	</div>
	                            	</td>
		                        </tr>
		                        <tr>
		                           <td>
                            	   	<div class="z w155"><em>＊</em>报名时间</div>
                                    <div class="z w685">
                                    	<input id="apply_start_date" name="apply_start_date" type="text" class="input vm time" value="${trainClass.apply_start_date }" />　到　
		                        		<input id="apply_end_date" name="apply_end_date" type="text" class="input vm time" value="${trainClass.apply_end_date }"/>
                                    	<div id="apply_date_error"></div>
                                    </div>
                                  </td>
		                        </tr>
		                        <tr>
		                        	<td>
		                        	  <div class="z w155"><em>＊</em>报名部门</div>
		                              <div class="objectstring z w685">
		                                  <div class="cl mt4" id="apply_dep_list">
		                                  	<c:forEach var="dep" items="${trainClass.apply_dep }">
		                                  		<label class="speciallabel">
		                                  			${dep.name }
		                                  			<input type="hidden" name="apply_dep" value="${dep.orgId }"/>
		                                  			<input type="hidden" name="apply_dep_name" value="${dep.name }"/>
		                                  			<a href="#" class="ml6"><img src="${basepath}/images/deletegreen.gif" /></a>
		                                  		</label>
		                                  	</c:forEach>
		                                  </div>
		                                  <div><span id="apply_dep" class="vm newshowtree choosedep ml0">选择部门</span></div>
		                              </div>
		                              <div id="applyDep_error"></div>
		                            </td>
		                        </tr>
				         </table>
		                <table  cellspacing="7" cellpadding="7">
		                <colgroup>
		                    	<col width="150" />
		                        <col width="320" />
		                        <col width="110" />
		                        <col width="320" />
		                    </colgroup>
		                    <tbody>
		                    	<tr>
		                        	<td><em>＊</em>发布时间</td>
		                            <td colspan="3">
		                            	<input id="publish_date" name="publish_date" type="text" class="input vm time" value="${trainClass.publish_date }" />
		                            	<div id="publish_date_error"></div>
		                            </td>
		                        </tr>
		                    	<tr>
		                        	<td><em>＊</em>培训时间</td>
		                            <td colspan="3">
		                            	<input id="start_date" name="start_date" type="text" class="input vm time" value="${trainClass.start_date }" />
		                            	　到　
		                            	<input id="end_date" name="end_date" type="text" class="input vm time" value="${trainClass.end_date }"/>
		                            	<div id="start_date_error"></div>
		                            	<div id="end_date_error"></div>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td><em>＊</em>参加人数</td>
		                        	<td colspan="3">
		                        		<input type="hidden" id="class_num" value="" />
		                        		<input id="attendNum" name="attendNum" type="text" class="input vm si" value="${trainClass.attendNum }"/>
		                        		<div id="attendNum_error"></div>
		                        	</td>
		                       	</tr>  
		                    
		                        <tr>
		                        	<td class="vt"><em>＊</em>培训目的</td>
		                            <td colspan="3">
		                                <div class="within">＊1000字以内</div> 
		                                <div><textarea id="purpose" name="purpose" cols="" rows="">${trainClass.purpose }</textarea></div>
		                                <div id="purpose_error"></div>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td class="vt"><em>＊</em>培训内容</td>
		                            <td colspan="3">
		                                <div class="within">＊1000字以内</div> 
		                                <div><textarea id="content" name="content" cols="" rows="">${trainClass.content }</textarea></div>
		                                <div id="content_error"></div>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td class="t1em vt">讲师简介</td>
		                            <td colspan="3"><textarea name="teacherIntro" cols="" rows="">${trainClass.teacherIntro }</textarea></td>
		                        </tr>
	                    	</tbody>
	                	</table>
			            <h2>培训费用</h2>
			            <table border="0" cellspacing="7" cellpadding="7">
		                	<colgroup>
		                    	<col width="110" />
		                        <col width="400"/>
		                        <col width="100"/>
		                        <col/>
		                    </colgroup>
		                	<tbody>
		                    	<tr>
		                        	<td class="t1em">培训计费方式</td>
		                            <td colspan="3" class="pl30">
		                            	<c:forEach items="${chargeWayList }" var="p">
		                            		<c:choose>
		                            			<c:when test="${(trainClass==null && p.spId eq '1') || p.spId eq trainClass.charge_way.spId }">
		                            				<em class="option choosed"><input name="charge_way" type="radio" value="${p.spId }" checked="checked"/></em>${p.name }　　
		                            			</c:when>
		                            			<c:otherwise>
		                            				<em class="option"><input name="charge_way" type="radio" value="${p.spId }"/></em>${p.name }　　
		                            			</c:otherwise>
		                            		</c:choose>
		                            	</c:forEach>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td class="t1em">培训费用预算</td>
		                            <td class="pl30">
		                            	<input id="budget_train" name="budget_train" type="text" class="input vm si" value='<fmt:formatNumber value="${trainClass.budget_train}" pattern="#0.00"/>'/>
		                            	<div id="budget_train_error"></div>
		                            </td>
		                            <td>食宿费用预算</td>
		                            <td>
		                            	<input id="budget_board" name="budget_board" type="text" class="input vm si" value='<fmt:formatNumber value="${trainClass.budget_board}" pattern="#0.00"/>' />
		                            	<div id="budget_board_error"></div>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td class="t1em">预算总额</td>
		                        	<td>
		                        		<input id="budget_total" type="text" name="budget_total" class="input vm si" value='<fmt:formatNumber value="${trainClass.budget_total}" pattern="#0.00"/>' />
		                        		<div id="budget_total_error"></div>
		                        	</td>
		                        </tr>
		                    </tbody>
			            </table>
			            <h2 class='<c:out value="${trainClass.way.name eq '在线'?'hidden':'' }" /> faceco'>面授培训班报到设置</h2>
			            <table border="0" cellspacing="7" cellpadding="7" class="faceco <c:out value="${trainClass.way.name=='在线'?'hidden':'' }" />">
		                	<colgroup>
		                    	<col width="110" />
		                        <col width="450"/>
		                    </colgroup>
		                	<tbody>
		                    	<tr>
		                        	<td class="t1em">报到时间</td>
		                            <td colspan="3">
		                            	<input id="enrol_start_date" name="enrol_start_date" type="text" class="input vm time" value="${trainClass.enrol_start_date }"/>　到　
		                            	<input id="enrol_end_date" name="enrol_end_date" type="text" class="input vm time"  value="${trainClass.enrol_end_date }"/>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td class="t1em">报到地点</td>
		                            <td colspan="3">
		                            	<input id="class_address" name="enrol_address" type="text" class="input vm si" value="${trainClass.enrol_address }"/>
		                            </td>
		                        </tr>
		                        <tr>
		                        	<td class="t1em">报到联系人</td>
		                            <td>
		                            	<input id="class_linkman_name" name="linkman" type="text" class="input vm si" value="${trainClass.linkman }"/>
		                            </td>
		                        </tr>
		                    </tbody>
			            </table>
			        </div>
			        <div class="windowlast">
			    		<p>
				    		<input name="_next" type="submit" class="step m10 vm longstep"  value="保存并下一步"/>
				    		<a id="closeMe" class="back m10 vm" href="#" >关闭</a>
				    		<!--  <a id="allclose" class="back m10 vm" href="${basepath}/trainclass/index.html" >关闭</a>-->
			    		</p>
			    	</div>
		    	</form>
		    </div>
		</div>
		<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
		<script type="text/javascript">
		    var tcid = "${trainClass.tcId}";
		    $("#class_num").val('');
		    if(tcid!=null&&tcid!="")
		    {
		    	getNumOldABC();
		    }
		  //获取已参加人员数量 为验证修改培训班人数时 不能小于已参加人数
		    function getNumOldABC(){
	    		var url = basepath+"/trainclass/getNumAll.html?r="+Math.random();
	    		var param = "tcid="+tcid;
	    		$.ajax({
	    			url : url,
	    			type : "get",
	    			data : param,
	    			dataType : "json",
	    			success : function(re){
	    				$("#class_num").val(re.all);
	    			},
	    			error : function(){
	    				
	    			}
	    		});
		    }
		</script>
		<script type="text/javascript" src="${basepath}/js/demand/newblock.js" charset="gbk"></script>
		<script type="text/javascript" src="${basepath }/js/train/information.js" charset="gbk"></script>
	</body>
</html>