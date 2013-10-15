var returnkey="0";
var dataindex;
var return_data=[[],[],[]];
var data=[];
var windowkey=false;
var oncekey=false;
var departmentDom;
function setData(olddata){
 	data[dataindex]=olddata;
	return data[dataindex];
}
function setPath(givendate){
	if(givendate==""){return false;}
	temp=givendate.split(">");
	var cwo='<div class="fleft mn_others">';
	for(i=1;i<=temp.length-1;i++){
		for(j=0;j<data.length;j++){
			if(data[j].cid==temp[i]){
				if(data[j].childkey==1){
					 if(i==temp.length-1){cwo=cwo+'<div class="mn_unit"><div class="fleft mnw"><a href="javascript:void(null)" cid='+data[j].cid+' class="unit_name2">'+data[j].name+'</a></div></div>';}
					else{cwo=cwo+'<div class="mn_unit"><div class="fleft mnw"><a href="javascript:void(null)" cid='+data[j].cid+' class="unit_name2">'+data[j].name+'</a></div></div>';}
				}
				else{
					cwo=cwo+'<div class="mn_unit"><div class="fleft mnw"><a href="javascript:void(null)" cid='+data[j].cid+' class="unit_name">'+data[j].name+'</a></div></div>';	
				}
			}	
		}
	}
	cwo=cwo+'</div>';
	$(".mn_all").eq(dataindex).after(cwo); 
}
function setPath_and_Tab(givendate){
	if(givendate==""){return false;}
	temp=givendate.split(">");
	var cwo='<div class="fleft mn_others">';
	for(i=1;i<=temp.length-1;i++){
		for(j=0;j<data.length;j++){
			if(data[j].cid==temp[i]){
				if(data[j].childkey==1){
					 if(i==temp.length-1){
						newdata='<div class="subtab"><ul>';
						for(z=0;z<data.length;z++){
							if(data[z].parentid==data[j].cid){
								newdata=newdata+'<li><a cid='+data[z].cid+' href="javascript:void(null)" class="normal">'+data[z].name+'</a></li>';	
							}
						}
						newdata=newdata+'</ul></div>';
						$("#subtab").html("");
						$("#subtab").html(newdata);
					}
					cwo=cwo+'<div class="mn_unit"><div class="fleft mnw"><a href="javascript:void(null)" cid='+data[j].cid+' class="unit_name">'+data[j].name+'</a></div></div>';
				}
				else{
					cwo=cwo+'<div class="mn_unit"><div class="fleft mnw"><a href="javascript:void(null)" cid='+data[j].cid+' class="unit_name">'+data[j].name+'</a></div></div>';	
				}
			}	
		}
	}
	cwo=cwo+'</div>';
	$(".mn_all").eq(dataindex).after(cwo); 
}

function searchid(indata){
	var temp="0";
	for(i=indata.length-1;i>=0;i--){
		temp=temp+">"+indata[i].cid;
	}
	return temp;
}
function getKey(){
	return returnkey;	
}
function sortdata(a,b){
	return a.sortid-b.sortid;
}
function getid(id,array,data){
	for(i=0;i<data.length;i++){
		if(data[i].cid==id){
			if(data[i].parentid!=0){
				array.push(data[i]);
				getid(data[i].parentid,array,data);
			}
			else{array.push(data[i]);}
			return false;
		}	
	}
}
function addco1(dom,clickobj,t){
	var dom_l=$(clickobj).offset().left;
	var dom_t=$(clickobj).offset().top;
	if($(dom).find("tr").length>12){
		dom='<div class="m1_window"><div class="searchline m10"><input type="button" class="button2 vm" name="" style="margin-right:0px;"><input type="text" class="input vm" name=""></div><a href="javascript:;" class="window_arrow window_arrow_up"></a><div class="window_area">'+dom+'</div><a href="javascript:;" class="window_arrow window_arrow_down"></a></div>';
	}
	else{
		dom='<div class="m1_window">'+dom+'</div>';	
	}
	var cw=$(dom).appendTo(".container"); 
	var h=$(cw).height();
	var w=$(cw).width();
	$(cw).attr("width",w);
	$(cw).find(".window_arrow").width(w);
	$(cw).find(".input").width(w-42);
	cw[0].style.left=dom_l-4+'px';
	cw[0].style.top=dom_t+t+'px';
	$(cw[0]).show();
}
function addco2(dom,clickobj){
	if($(dom).find("tr").length>12){
		dom='<div class="m2_window"><div class="searchline m10"><input type="button" class="button2 vm" name="" style="margin-right:0px;"><input type="text" class="input vm" name=""></div><a href="javascript:;" class="window_arrow window_arrow_up"></a><div class="window_area">'+dom+'</div><a href="javascript:;" class="window_arrow window_arrow_down"></a></div>';
	}
	else{
		dom='<div class="m2_window">'+dom+'</div>';	
	}
	var cw=$(dom).appendTo(".container"); 
	var dom_l=$(clickobj).offset().left;
	var dom_t=$(clickobj).offset().top;
	var h=$(cw).height();
	var w2=$(cw).width();
	$(cw).attr("width",w2);
	$(cw).find(".window_arrow").width(w2);
	$(cw).find(".input").width(w2-42);
	var w=$(cw).prev().width();
	cw[0].style.left=dom_l+w+'px';
	cw[0].style.top=dom_t+'px';
	$(cw).show();
}
function dataClean(){
	$(".mn_others").remove();	
}
function dataset(olddata,clickobj){
	var tdata=[];
	newdata='<table border="0" cellspacing="0" cellpadding="0" class="mn_table">';
	for(i=0;i<olddata.length;i++)
		{
			var ss=$(clickobj).attr("cid");
			if(ss==olddata[i].parentid)
				{
				tdata.push(olddata[i]);
				}
		}
	tdata.sort(sortdata);
	for(i=0;i<tdata.length;i++){
		if(tdata[i].childkey==1)
			{
				newdata=newdata+'<tr class="next" cid='+tdata[i].cid+'><td>'+tdata[i].name+'</td><td class="tdimg" valign="middle"><img src="'+basepath+'/images/m_arrow_3.gif" width="4" height="7" /></td></tr>';
			}
		else{newdata=newdata+'<tr cid='+tdata[i].cid+' class="nonext"><td>'+tdata[i].name+'</td><td class="tdimg" valign="middle"></td></tr>';}
	}
	newdata=newdata+'</table>';
	return newdata;
}
function backjson(olddata,clickobj){
	var tdata=[];
	for(i=0;i<olddata.length;i++)
		{
			var ss=$(clickobj).attr("cid");
			if(ss==olddata[i].parentid)
				{
				tdata.push(olddata[i]);
				}
		}
	tdata.sort(sortdata);
	return tdata;
}
function SecondTab(olddata){
	newdata='<div class="subtab"><ul>';
	for(i=0;i<olddata.length;i++){
		newdata=newdata+'<li><a cid='+olddata[i].cid+' href="javascript:void(null)" class="normal">'+olddata[i].name+'</a></li>';
	}
	newdata=newdata+'</ul></div>';
	$(".subTab").eq(dataindex).html("");
	$(".subTab").eq(dataindex).html(newdata);
}
$(document).ready(function () {
	$(".bta").attr("cid","0");
	var key;
	
	var sheight=$(window).height();
	$(".left_nav").height((sheight-72));
	$(".mn_table tr").live("mouseover", function(){
		if($(this).parents(".m1_window").length>0){
			if($(".m2_window").length>0){
				return false;
			}	
		}									 
		$(this).addClass("bg_blue");
		
		var next=$(this).parents(".m2_window").next().length;
		if(next==0){
			var child=$(this).children().eq(1).children().length;
			if(child==0){return false;}
			else{
				var obj=$(this);
				cwo=dataset(data[dataindex],obj);
				addco2(cwo,obj);
			}
		}
		else{
			$(this).parents(".m2_window").next().remove();
			var child=$(this).children().eq(1).children().length;
			if(child==0){return false;}
			else{
				var obj=$(this);
				cwo=dataset(data[dataindex],obj);
				addco2(cwo,obj);
			}
		}
	});
	$(".mn_table tr").live("mouseout", function(){
		$(this).removeClass("bg_blue");
	});
	$(".m1_window,.m2_window").live("mouseout", function(ev){
		var nextdom=$(this).next();
		var nextcss=$(ev.relatedTarget).closest(nextdom);	
		if(nextcss.length==0){
			$(this).next().remove();	
		}

	});
	$(".mn_all .bta").live("mouseover", function(){
			$(".container > .m1_window").remove();							 
			$(".container > .m2_window").remove();								 
			var obj=$(this);
			dataindex=$(".mn_all .bta").index(obj);
			cwo=dataset(data[dataindex],obj);
			addco1(cwo,obj,24);
			
				
	});	
	$(".navall").live("click", function(){
		dataindex=$(".navall").index(this);
		$(".message_nav").eq(dataindex).find(".mn_others").remove();
		return_data[dataindex] = null;
		returnkey="0";
		$(".mn_all").eq(dataindex).removeClass("greybg");
		var obj=$(this).parent().next();
		var tabdata=backjson(data[dataindex],obj);
		SecondTab(tabdata);
	});
	$(".bto").live("mouseover", function(){
			var newobj=$(this).parents(".message_nav");	
			dataindex=$(".message_nav").index(newobj);
			$(".container > .m1_window").remove();							 
			$(".container > .m2_window").remove();	
			var obj=$(this);
			cwo=dataset(data[dataindex],obj);
			addco1(cwo,obj,24);
				
	});	
	$(document).click(function(){
		$(".container > .m1_window").remove();	
		$(".container > .m2_window").remove();				   
	});
	$(".mn_table tr").live("click", function(){
		$(".message_nav").eq(dataindex).find(".mn_others").remove();
		var obj=$(this);
		var tabdata=backjson(data[dataindex],obj);
		SecondTab(tabdata);
		var tdata=[];
		var ss=$(this).attr("cid");
		getid(ss,tdata,data[dataindex]);
		var cwo='<div class="fleft mn_others">';
		var string='<div>全部';
		var lastcid;
		var lastname;
		for(i=tdata.length-1;i>-1;i--){
			string+='/'+tdata[i].name;
			if(i==0){
				lastcid=tdata[i].cid;
				lastname = tdata[i].name;
			}	
			if(tdata[i].childkey==1){
				if(i==0){cwo=cwo+'<div class="mn_unit"><div class="fleft mnw"><a href="javascript:void(null)" cid='+tdata[i].cid+' class="unit_name">'+tdata[i].name+'</a></div><div class="fleft bto" cid='+tdata[i].cid+'><img src="'+basepath+'/images/m_arrow_2.gif" width="7" height="4" /></div></div>';}
				else{cwo=cwo+'<div class="mn_unit"><div class="fleft mnw"><a href="javascript:void(null)" cid='+tdata[i].cid+' class="unit_name">'+tdata[i].name+'</a></div><div class="fleft bto" cid='+tdata[i].cid+'><img src="'+basepath+'/images/m_arrow_2.gif" width="7" height="4" /></div></div>';}
			}else{
				cwo=cwo+'<div class="mn_unit"><div class="fleft mnw"><a href="javascript:void(null)" cid='+tdata[i].cid+' class="unit_name">'+tdata[i].name+'</a></div></div>';
			}	
		}
		cwo=cwo+'</div>';
		$(".mn_all").eq(dataindex).after(cwo); 
		$(".mn_all").eq(dataindex).removeClass("greybg");
		returnkey=searchid(tdata);
//		var mm="{"+dataindex+','+lastcid+"}";
		var temp_data = [];
		temp_data["id"] = lastcid;
		temp_data["name"] = lastname;
//		return_data.push(mm);
		if(!windowkey || return_data[dataindex] == null || oncekey){
			return_data[dataindex] = [];
		}
		return_data[dataindex].push(temp_data);
		if(windowkey){
			if(oncekey){
				string+='<a href="javascript:;" class="ml12"><img src="'+basepath+'/images/deletegreen.gif" /></a></div>';
				//$("#objectstring").html(string);
				$(".message_nav").eq(dataindex).parent().parent().prev().prev().children().eq(1).html(string);
			}else{
				var string2=$(".message_nav").eq(dataindex).parent().parent().prev().prev().children().eq(1).html();
				string2+=string+'<a href="javascript:;" class="ml12"><img src="'+basepath+'/images/deletegreen.gif" /></a></div>';
				$(".message_nav").eq(dataindex).parent().parent().prev().prev().children().eq(1).html(string2);
			}
		}
	});
	$(".unit_name").live("click", function(){
		var newobj=$(this).parents(".message_nav");	
		dataindex=$(".message_nav").index(newobj);
		$(".message_nav").eq(dataindex).find(".mn_others").remove();
		
		var obj=$(this);
		var tabdata=backjson(data[dataindex],obj);
		SecondTab(tabdata);
		var tdata=[];
		var ss=$(this).attr("cid");
		getid(ss,tdata,data[dataindex]);
		var cwo='<div class="fleft mn_others">';
		var string='<div>全部';
		var lastcid;
		var lastname;
		for(i=tdata.length-1;i>-1;i--){
			string+='/'+tdata[i].name;
			if(i==0){
				lastcid=tdata[i].cid;
				lastname = tdata[i].name;
			}	
			if(tdata[i].childkey==1){
				if(i==0){cwo=cwo+'<div class="mn_unit"><div class="fleft mnw"><a href="javascript:void(null)" cid='+tdata[i].cid+' class="unit_name">'+tdata[i].name+'</a></div><div class="fleft bto" cid='+tdata[i].cid+'><img src="'+basepath+'/images/m_arrow_2.gif" width="7" height="4" /></div></div>';}
				else{cwo=cwo+'<div class="mn_unit"><div class="fleft mnw"><a href="javascript:void(null)" cid='+tdata[i].cid+' class="unit_name">'+tdata[i].name+'</a></div><div class="fleft bto" cid='+tdata[i].cid+'><img src="'+basepath+'/images/m_arrow_2.gif" width="7" height="4" /></div></div>';}
			}else{
				cwo=cwo+'<div class="mn_unit"><div class="fleft mnw"><a href="javascript:void(null)" cid='+tdata[i].cid+' class="unit_name">'+tdata[i].name+'</a></div></div>';
			}	
		}
		cwo=cwo+'</div>';
		$(".mn_all").eq(dataindex).after(cwo); 
		$(".mn_all").eq(dataindex).removeClass("greybg");
		returnkey=searchid(tdata);
//		var mm="{"+dataindex+','+lastcid+"}";
		var temp_data = [];
		temp_data["id"] = lastcid;
		temp_data["name"] = lastname;
//		return_data.push(mm);
		if(!windowkey || return_data[dataindex] == null || oncekey){
			return_data[dataindex] = [];
		}
		return_data[dataindex].push(temp_data);
		if(windowkey){
			if(oncekey){
				string+='<a href="javascript:;" class="ml12"><img src="'+basepath+'/images/deletegreen.gif" /></a></div>';
				$(".message_nav").eq(dataindex).parent().parent().prev().prev().children().eq(1).html(string);
			}else{
				var string2=$(".message_nav").eq(dataindex).parent().parent().prev().prev().children().eq(1).html();
				string2+=string+'<a href="javascript:;" class="ml12"><img src="'+basepath+'/images/deletegreen.gif" /></a></div>';
				$(".message_nav").eq(dataindex).parent().parent().prev().prev().children().eq(1).html(string2);
			}
		}
	});
	$("#text").click(function(){
		$(".mn_others").eq(dataindex).remove();					  
		var mm=$(this).val();
		initialize(mm);
	});
	
	$("#objectstring .ml12").live("click", function(){
		$(this).parent().remove();
	});
	
	$("#dialog .closed,#dialog .windowbutton").live("click", function(){
		var departmentString=$("#dialog_content").html();
		$(departmentDom).attr('string',departmentString);
	});
	
	$(".window_arrow_up").live("mouseover", function(){												 
		var oW=$(this).next();
		var oTable=$(oW).find("table");
		$(oW).css("position","relative");
		$(oTable).css("position","absolute");
		if(oTable[0].style.top==""){
			oTable[0].style.top=0;
		}
		timer=setInterval(function(){
			if(parseInt(oTable[0].style.top)>-1){return false;}
			oTable[0].style.top=oTable[0].offsetTop+3+'px';
		},30);
	});
	$(".window_arrow_up").live("mouseout", function(){
		clearInterval(timer);
	});
	$(".m2_window .window_arrow").live("mouseover", function(){
		$(this).parents(".m2_window").next().remove();														 
	});
	$(".window_arrow_down").live("mouseover", function(){
													   
		var oW=$(this).prev();
		var oTable=$(oW).find("table");
		$(oW).css("position","relative");
		$(oTable).css("position","absolute");
		var oTable_h=$(oTable).height();
		timer=setInterval(function(){
			if((parseInt(oTable[0].style.top))<-oTable[0].offsetHeight+200){return false;}
			oTable[0].style.top=oTable[0].offsetTop-3+'px';
		},30);
	});
	$(".window_arrow_down").live("mouseout", function(){
		clearInterval(timer);
	});
	$(".m1_window .input,.m2_window .input").live("click", function(ev){
		var oEvent=ev||event;
		oEvent.stopPropagation(); 					  
	})	
	$(".m1_window .input,.m2_window .input").live("keyup", function(ev){
		var window_parent=$(this).parent().parent()	;														
		var oEvent=ev||event;
		var oTr=$(window_parent).find("tr");
		var searchkey=$(this).val();
		if(oEvent.keyCode==13){
			$(oTr).hide();
			for(i=0;i<oTr.length;i++){
				var mm=$(oTr[i]).children().eq(0).text();
				if(mm.indexOf(searchkey)>-1){
					$(oTr[i]).show();	
				}
			}
			$(window_parent).find("table").css("top",0);
			var w=$(window_parent).find("table").width();
			$(window_parent).find(".window_arrow").width(w);
			$(window_parent).find(".input").width(w-42);
		}
		if(oEvent.keyCode==8){
			if(searchkey==""){
				$(oTr).show();
				$(window_parent).find("table").css("top",0);
				var w=$(window_parent).attr("width");
				$(window_parent).find(".window_arrow").width(w);
				$(window_parent).find(".input").width(w-42);
			}
			
		}
		
	});
	$(".windowtreebutton").live("click", function(){
		var oUnit=$(this).parents("#windowtree2").find(".mn_unit");
		var oText="";
		for(i=0;i<oUnit.length;i++){
			var Utext=$(oUnit).eq(i).text();
			if(i!=oUnit.length-1){
				oText=oText+Utext+'/';
			}
			else{
				oText=oText+Utext;
			}
			
		}
		if(oText){
			$(".choosedepartment2").parent().prev().append('<div>'+oText+'<a class="ml6" href="javascript:;"><img src="'+basepath+'/images/deletegreen.gif"></a></div>');
		}
	});

});

var dialoghtml = '<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="100" style="vertical-align:top">已选对象</td><td class="taL" id="objectstring"></td></tr><tr><td colspan="2" style="padding-top:10px"><hr /></td></tr><tr><td>待选区域</td><td style="text-align:left"><div class="message_nav z"><div class="fleft mn_all greybg"><div class="fleft mnw"><a href="javascript:void(null)" class="navall">全部</a></div><div class="fleft bta"><img src="'+basepath+'/images/m_arrow_1.gif" width="7" height="4" /></div></div><div class="clr"></div><div class="m1_window"></div></div></td></tr><tr><td class="taR" colspan="2"><input name="" type="button" class="step vm windowbutton cls_button_choosetree_ok"   value="确定" hidefocus="true"/><input name="" type="button" class="back vm windowbutton m10"   value="关闭" hidefocus="true"/></td></tr></table>';
function setOrgData(i){
	$.ajax({
		url : basepath+"/list/department.html?t=json&r="+Math.random(),
		type : "get",
		async : false,
		dataType : "json",
		success : function(obj){
			data[i] = obj;
		}
	});
}

function setKnoData(i){	
	$.ajax({
		url : basepath+"/list/knowledge.html?t=json&r="+Math.random(),
		type : "get",
		async : false,
		dataType : "json",
		success : function(obj){
			data[i] = obj;
		}
	});
}

function setEthData(i){
	$.ajax({
		url : basepath+"/list/ethnicity.html?t=json&r="+Math.random(),
		type : "get",
		async : false,
		dataType : "json",
		success : function(obj){
			data[i] = obj;
		}
	});
}

function setPosData(i){
	$.ajax({
		url : basepath+"/list/position.html?t=json&r="+Math.random(),
		type : "get",
		async : false,
		dataType : "json",
		success : function(obj){
			data[i] = obj;
		}
	});
}
