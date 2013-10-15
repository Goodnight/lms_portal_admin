<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>会议管理列表</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
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
<!-- 导入头部文件 --> 
<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
<div class="cl">
    <div class="newright">
        <div class="newrightco">
            <div class="listpagenav">
            <!-- 页面导航 -->
                <div class="breadCrumbHolder pf">
                <div class="breadCrumb reHeight" id="breadCrumb3">
                    <div class="z">
                        <ul>
                            <li class="first">
                                <a href="${basepath }/index.html">首页</a>
                            </li>
                            <li><a href="${basepath }/meetingManage/meetingManageList.html">会议管理列表</a></li>
                        </ul>
                    </div>
                    <div class="y"></div>
                </div>
              </div>
            </div>
            <div class="reHeight">
                <div class="newmain">
                    <div class="newmainco">
                        <div class="searchblock pt15">
                            <ul class="dpnav2 m10 reHeight">
                                <li class="now">查询</li>
                            </ul>
                            <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td class="taR">会议名称</td>
                                <td class="taL">
                                    <input type="hidden" id="search_orgDepId" value=""/>
                                    <input id="orgDepOriId" type="hidden" value="${orgDepOriId }" />
                                    <input name="mt_name" type="text" class="inputtext" id="mt_nameid" value="输入会议名称"/>
                                </td>
                                <td class="taR">起止时间</td>
                                <td class="taL" colspan="3">
                                    <input name="startdate" type="text" class="timetext cls_date" value="" id="startdateid"/>
                                    <em>到</em>
                                    <input name="enddate" type="text" class="timetext cls_date" value="" id="enddateid"/>
                                </td>
                          </tr>
                          <tr>
                              <td class="taR">主持人</td>
                              <td class="taL">
                                  <input id="master_name" name="master" type="text" disabled="disabled" value="${mb.master.name }" />
                                  <input id="master_id" name="master_name" type="hidden" value="${mb.master.uid }"/>
                                  <span id="master" class="tochoose vm chooseperson">选择主持人</span>
                                  <span id="clear_master" class="tochoose vm">重置</span>
                              </td>
                              <td class="taR">会议发布状态</td>
                              <td class="taL">
                                  <select name="mt_pub" class="select" id="mt_pubid">
                                      <option value="">全部</option>
                                      <option value="1">发布</option>
                                      <option value="0">未发布</option>
                                  </select>
                              </td>
                          </tr>
                        </table>
                        <div align="right" class="mt10">
                            <input id="selectButton" type="button" class="searchbutton m10" value="搜索"/>
                        </div>                           
                    </div>

                    <div>
                    <!-- 会议管理列表 -->
				 	<div class="dataTables_wrapper">
                          <h3 class="reHeight">
                              <div class="z ml13">会议列表</div>
                              <div class="y">
                                <a class="functionbutton" href="newMeeting.html" >新建</a>
                                <!-- 发布屏蔽 <a class="functionbutton" href="javascript:;" >邮件提醒</a>-->
                                <a id="btn_delete" href="javascript:;" class="functionbutton" >删除</a>
                              </div>
                          </h3>
					      <div id="list_mtmanagelist"></div>
				 	</div>
			        </div>
                    </div>
                </div>
                <div class="newlefttree">
                   <div class="pftree">
                       <h3>机构部门</h3>
                       <div class="m10">
                                                                                  是否包含下级
                           <label class="ml12"><input name="isSub" type="radio" value="1" class="vm" checked="checked" /> 是</label>
                           <label class="ml12"><input name="isSub" type="radio" value="0" class="vm" /> 否</label>
                       </div>
                       <div id="org_jstree"></div>
                   </div>
                </div>
                <div class="extra">
                    <h3><div class="extraimg"></div><div class="extraimg extraimon"></div><div class="extraimg extraimg2"></div><div class="extraimg extraimon2"></div></h3>
                </div>
            </div>
        </div>
    </div>
    <div class="newleft">
        <!-- 导入左侧导航 -->
        <c:set var="menu_sn" value="2" scope="request"></c:set>
        <jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
    </div>
</div>
</div>

<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
<script type="text/javascript" src="${basepath }/js/meeting/function.js" charset="gbk"></script>
<script src="${basepath }/js/lhgdialog.min.js?self=true&skin=idialog"></script>
<script type="text/javascript">
var mId = "${mb.mId}";
var dialog2;
function closedialog(){
    dialog2.close();
}
$(function(){
    $(document).bind('click', function(event){
        var target = event.target,$target = $(target);
        if ($target.hasClass('runcode')) {
            dialog2 = $.dialog({
            width: '1024px',
            height: 500,
            content: 'url:'+$(target).attr('url'),
            title: ''
        });
        };
    });
});
</script>
</body>
</html>
