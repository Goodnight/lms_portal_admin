<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ 
	include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="ngreyborder2 mt10 changeblue2">
    	<h2 class="png_bg">选择分配的部门、组</h2>
        <div class="courseupload2 ngreyborder reHeight" style="padding-top:20px">
        	<ul>
            	<li class="now">部门指定</li>
                <li>选择岗位</li>
            </ul>
        </div>
        <div class="cl" style="width:95%;margin:0 auto;">
        	<div>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                	<tr><td width="100" style="vertical-align:top">已选对象</td><td class="taL" id="objectstring"></td></tr>
                	<tr><td colspan="2" style="padding-top:10px"><hr /></td></tr>
                	<tr><td>待选区域</td><td style="text-align:left"><div class="message_nav z clbg"><div class="fleft mn_all greybg"><div class="fleft mnw"><a href="javascript:void(null)" class="navall">全部</a></div><div class="fleft bta"><img src="${basepath }/images/m_arrow_1.gif" width="7" height="4" /></div></div><div class="clr"></div><div class="m1_window"></div></div></td></tr>
                	<tr><td class="taR" colspan="2"><input id="btn_dep_ok" name="" type="button" class="step vm "   value="确定" hidefocus="true"/><input name="" type="button" class="back vm  m10 cls_close"   value="关闭" hidefocus="true"/></td></tr>
                </table>
            </div>
            <div class="hidden">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                	<tr><td width="100" style="vertical-align:top">已选对象</td><td class="taL" id="objectstring"></td></tr>
                	<tr><td colspan="2" style="padding-top:10px"><hr /></td></tr>
                	<tr><td>待选区域</td><td style="text-align:left"><div class="message_nav z clbg"><div class="fleft mn_all greybg"><div class="fleft mnw"><a href="javascript:void(null)" class="navall">全部</a></div><div class="fleft bta"><img src="${basepath }/images/m_arrow_1.gif" width="7" height="4" /></div></div><div class="clr"></div><div class="m1_window"></div></div></td></tr>
                	<tr><td class="taR" colspan="2"><input id="btn_pos_ok" name="" type="button" class="step vm windowbutton"   value="确定" hidefocus="true"/><input name="" type="button" class="back vm windowbutton m10 cls_close"   value="关闭" hidefocus="true"/></td></tr></table>
            </div>
        </div> 
</div>
    <script type="text/javascript">
    	var tcid="${tcid}";
    	$(function(){
    		//$(".cls_ifsub").uniform();
    		windowkey=true;
			oncekey = false;
			setOrgData(0);
			setPosData(1);
			$(".bta").attr("cid","0");
    		
    		//切换标签
    		$(".courseupload2 li").click(function(){
				var index=$(this).parent().children().index(this);
				$(this).siblings().removeClass("now");
				$(this).addClass("now");
				$(this).parent().parent().next().children().hide();
				$(this).parent().parent().next().children().eq(index).show();
			});
			
			//确定部门选择
			$("#btn_dep_ok").click(function(){
				var param = "";
				if(return_data[0]!=null && return_data[0].length>0){
					for(i=0;i<return_data[0].length;i++){
						param += "id="+return_data[0][i]["id"]+"&";
					}
				}
				param += "tcid="+tcid+"&operation=save&status=dep&isSub=0";
				var url = basepath+"/trainclass/setDepartment.html";
				$.ajax({
					url: url,
					type : "post",
					data : param,
					dataType : "json",
					success : function(msg){
						depPage(1);
						$("#dialog").hide();
					},
					error : function(){
					
					}
				});
				
			});
			
			//取消选择
			$(".cls_close").click(function(){
				$("#dialog").hide();
			});
    	});
    	
    </script>