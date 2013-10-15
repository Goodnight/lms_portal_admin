$(document).ready(function () {	
	$("h3.editor").live("mouseover", function(){
		$(this).find("a").show();
		
	});
	$("h3.editor").live("mouseout", function(){
		string=$(this).find("a").eq(0).text();
		if(string=="编辑"){$(this).find("a").hide();}									 
	});
	$("dl.editor").live("mouseover", function(){
		$(this).find("dt").find("a").show();	
		$(this).find(".reHeight").find("a").show();	
	});
	$("dl.editor").live("mouseout", function(){
		string=$(this).find(".edit").text();
		if(string=="编辑"){$(this).find("a").hide();}									 
	});
	$("h3.editor a.change").live("click", function(){
		var dom=$(this).parent().prev();									
		if($(this).text()=="编辑"){
			$(this).text("确定");
			var string=$(dom).text();
			$(dom).html('<input id="bigName" type="text" class="input w750 focus" value='+string+'>');
		}
		else{
			var icId = $(this).parent().find("#icId").val();
			var string=$(dom).find("input").val();
			var param = "method=save&icId="+icId+"&name="+string;
			$.ajax({
				url : "saveOrUpdateCategory.html",
				type : "POST",
				data : param,
				dataType : "json",
				success : function(data){
					},
				error:function(){
					alert("保存出错");
				}
				});
			$(dom).html(string);
			$(this).text("编辑");
		}
	});	
	$("h3.editor a.addbigitem").live("click", function(){
		var h3=$("h3.editor");
		var dom=$(this).parent().parent();
		var key=$(h3).index(dom);
		var ss=$("h3.editor").eq(key+1);
		newstr='<dl class="mt10 editor2"><dt>大类名称：<input type="text" value="" class="vm w300"/></dt><dd class="mt10 ml20"><input name="" type="button" class="bigmakesure" value="确定"/></dd></dl>';
		var new_obj=$(newstr);
		if(ss.length!=0){
			new_obj.insertBefore(ss);
		}
		else{
			var gfather=$("h3.editor").parent();
			$(new_obj).appendTo(gfather);
		}
		$(".bigmakesure").live("click", function(){
			var inputkey=$(this).parent().prev().find("input").val();
			
			if(inputkey==""){$(this).parent().parent().remove();return false;}
			else{
				var sId = $("#sId").val();
				var sn = key+2;
				var param = "method=save&name="+inputkey+"&sId="+sId+"&sn="+sn;
				var icId="";
				$.ajax({
					url : "saveOrUpdateCategory.html",
					type : "POST",
					data : param,
					async: false,
					dataType : "json",
					success : function(data){
								icId=data;
						},
					error:function(){
						alert("删除出错");
					}
					});
				
				var string=["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
				newstr2='<h3 class="mt10 editor reHeight"><div class="z"><label>一</label>、</div><div class="z w750">'+inputkey+'</div><div class="z"><input id="icId" type="hidden" value='+icId+' /><a href="javascript:;" class="hidden change">编辑</a><a href="javascript:;" class="hidden addbigitem">增加大类</a><a href="javascript:;" class="hidden del_listone">删除</a></div></h3><dl class="mt20 editor2"><input name="" type="button" class="newaddblock" value="增加一个问题"/></dl>';
				var new_obj2=$(newstr2);
				if(ss.length!=0){
					new_obj2.insertBefore(ss);
				}
				else{
					var gfather=$("h3.editor").parent();
					$(new_obj2).appendTo(gfather);
				}
				var oLabel=$("h3.editor").find("label");
				for(i=0;i<oLabel.length;i++){
					$(oLabel).eq(i).html(string[i]);		
				}
				$(this).parent().parent().remove();
			}
		});
	});
	$(".del_listone").live("click", function(){
		var icId = $(this).parent().find("#icId").val();
		var sId = $('#sId').val();
		var param = "method=delete&icId="+icId+"&sId="+sId;
		$.ajax({
			url : "deleteCategory.html",
			type : "POST",
			data : param,
			dataType : "json",
			success : function(data){
		
				},
			error:function(){
				alert("删除出错");
			}
			});
		var dom=$(this).parent().parent();
		for(i=0;i<1000;i++){
			var classname=$(dom).next().attr("class");
			if(classname==undefined || classname=="mt10 editor reHeight"){
				$(dom).remove();
				var oLabel=$("h3.editor").find("label");
				var string=["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
				for(i=0;i<oLabel.length;i++){
					$(oLabel).eq(i).html(string[i]);		
				}
				return false;
			}
			else{
			
				$(dom).next().remove();
			}
		}
		
	});	
	$(".del_listtwo").live("click", function(){
		var iiId = $(this).parent().find("#iiId").val();
		var sId = $('#sId').val();
		var param = "method=delete&iiId="+iiId+"&sId="+sId;
		$.ajax({
			url : "deleteItem.html",
			type : "POST",
			data : param,
			dataType : "json",
			success : function(data){
		
				},
			error:function(){
				alert("删除出错");
			}
			});
		$(this).parent().parent().parent().remove();
	});	
	$(".edit").live("click", function(){				  
		var dom=$(this).parent().prev();
		var Udom=$(this).parent().parent().parent();
		var oInput=$(Udom).find("dd").find("div.w750");
		if($(this).text()=="编辑"){
			$(this).text("确定");
			$(Udom).find(".newadditem").hide();
			var kind=$(Udom).find("em").length;
			if(kind==0){
				var string=$(dom).text();
				$(dom).html('<textarea class="w750">'+string+'</textarea>');
				$(Udom).find("a").show();
				for(i=0;i<oInput.length;i++){
					sdata=$(oInput).eq(i).text();
					$(oInput).eq(i).html('<textarea class="w750">'+sdata+'</textarea>');
				}
			}
			else{
				var oarry={};
				for(i=0;i<kind;i++){
					oarry[i]=$(Udom).find("em").eq(i).text();
				}
				$(Udom).find("em").remove();
				var string=$(dom).text();
				$(dom).html('<textarea class="w750">'+string+'</textarea>');
				$(Udom).find("a").show();
				for(i=0;i<oInput.length;i++){
					sdata=$(oInput).eq(i).text();
					$(oInput).eq(i).html('<textarea style="width:600px;margin-right:10px;" class="vm">'+sdata+'</textarea><input class="focus vm" type="text" value='+oarry[i].substr(1,oarry[i].length-3)+'>');
				}
			}
			
		}
		else{
			var kind=$(Udom).find(".focus").length;
			var string=$(dom).find("textarea").val();
			var iiId = $(dom).next().find("#iiId").val();
			
			var anwers=[];
			var anwers2=[];
			var socres=[];
			$(dom).html(string);
			$(this).text("编辑");
			$(Udom).find("dd").find("a").hide();
			if(kind==0){
				var iirIds=[];
				for(i=0;i<oInput.length;i++){
					sdata=$(oInput).eq(i).find("textarea").val();
					var iirId = $(oInput).eq(i).next().find("#iirId").val();
					iirIds.push(iirId);
					anwers.push(sdata);
					$(oInput).eq(i).html(sdata);
					if(sdata==""){
						$(oInput).eq(i).parent().remove();	
					}	
				}
				var param = {"method":"update","question":string,"answer":anwers,"iiId":iiId,"iirIds":iirIds,"type":"1"};
				var icId="";
				$.ajax({
					url : "updateItem.html",
					type : "POST",
					data : param,
					async: false,
					dataType : "json",
					success : function(data){
								icId=data;
						},
					error:function(){
						alert("保存出错");
					}
					});
			}
			else{
				var iirIds=[];
				for(i=0;i<oInput.length;i++){
					sinput=$(oInput).eq(i).find("input").val();
					sdata=$(oInput).eq(i).find("textarea").val();
					var iirId = $(oInput).eq(i).next().find("#iirId").val();
					iirIds.push(iirId);
					anwers2.push(sdata);
					socres.push(sinput);
					$(oInput).eq(i).html(sdata+'<em>('+sinput+'分)</em>');
					if(sdata==""){
						$(oInput).eq(i).parent().remove();	
					}	
				}
				var param = {"method":"update","question":string,"answer2":anwers2,"score":socres,"iiId":iiId,"iirIds":iirIds,"type":"3"};
				var icId="";
				$.ajax({
					url : "updateItem.html",
					type : "POST",
					data : param,
					async: false,
					dataType : "json",
					success : function(data){
								icId=data;
						},
					error:function(){
						alert("保存出错");
					}
					});
			}
			str="A";
			code = str.charCodeAt();
			Olabel=$(Udom).find("dd").find("label");
			for(i=0;i<Olabel.length;i++){
			$(Olabel).eq(i).html(String.fromCharCode(code+i));	
		}
		}
								
	});	
	$(".nd").live("click", function(){
		str="A";
		code = str.charCodeAt();
		var ss=$(this).parent().parent().parent();
		$(this).parent().parent().remove();
		ss=$(ss).find("dd").find("label");
		for(i=0;i<ss.length;i++){
			$(ss).eq(i).html(String.fromCharCode(code+i));	
		}
		var iirId = $(this).parent().find("#iirId").val();
		var sId = $('#sId').val();
		var param = "method=delete&iirId="+iirId+"&sId="+sId;
		$.ajax({
			url : "deleteItemRes.html",
			type : "POST",
			data : param,
			dataType : "json",
			success : function(data){
		
				},
			error:function(){
				alert("删除出错");
			}
			});
	});
	$(".nd2").live("click", function(){
		var numberkey=$(this).parent().parent().find(".nd2");
		if(numberkey.length<3){
			alert("选项个数需大于等于2个");
			return false;
		}
		str="A";
		code = str.charCodeAt();
		var ss=$(this).parent().parent();
		$(this).parent().remove();
		ss=$(ss).find("label");
		for(i=0;i<ss.length;i++){
			$(ss).eq(i).html(String.fromCharCode(code+i));	
		}
	});
	$(".newadditem").live("click", function(){
		var ss=$(this).parent();
		var kind=$(ss).prev().find(".focus");
		str="A";
		code = str.charCodeAt(); 
		ss2=$(ss).siblings() ;
		thislength=$(ss2).length;
		str2 = String.fromCharCode(code+thislength-1);
		if(kind.length==0){
			newstr='<dd class="reHeight"><div class="z"><label>'+str2+'</label>、</div><div class="z w750"><textarea class="w750"></textarea></div><div class="z"><input type="hidden" id="iirId" value="" /><a href="javascript:;" class="nd">删除</a></div></dd>';
		}
		else{
			newstr='<dd class="reHeight"><div class="z"><label>'+str2+'</label>、</div><div class="z w750"><textarea class="w750"></textarea><input type="text" value="" class="focus vm"></div><div class="z"><input type="hidden" id="iirId" value="" /><a href="javascript:;" class="nd">删除</a></div></dd>';	
		}
		var new_obj=$(newstr);
		new_obj.insertBefore(ss);
	});
	$(".newadditem1").live("click", function(){
		var ss=$(this).parent();
		str="A";
		code = str.charCodeAt(); 
		ss2=$(ss).siblings() ;
		thislength=$(ss2).length;
		str2 = String.fromCharCode(code+thislength);
		newstr='<div><label>'+str2+'</label>、<input id="answer" name="answer" type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a></div>';
		var new_obj=$(newstr);
		new_obj.insertBefore(ss);
	});
	$(".newadditem2").live("click", function(){
		var ss=$(this).parent();
		str="A";
		code = str.charCodeAt(); 
		ss2=$(ss).siblings() ;
		thislength=$(ss2).length;
		str2 = String.fromCharCode(code+thislength);
		newstr='<div><label>'+str2+'</label>、<input id="answer2" name="answer2" type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a><input id="socre" name="score" type="text" class="vm" value="0" /></div>';
		var new_obj=$(newstr);
		new_obj.insertBefore(ss);
	});
	$(".newaddblock").live("click", function(){
		var ss=$(this).parent();
		newstr='<dl class="mt10 editor2"><dt>问题：<input id="name" type="text" value="" class="vm w300"/></dt><dd>题型：<select id="type" name="type" class="selectchange"><option value="1">单选题</option><option value="2">多选题</option><option value="3">量规题</option><option value="4">简答题</option></select></dd><dd><div><div><label>A</label>、<input id="answer" name="answer" type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a></div><div><label>B</label>、<input id="answer" name="answer" type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a></div><div><label>C</label>、<input id="answer" name="answer" type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a></div><div><a href="javascript:;" class="newadditem1">增加一个选项</a></div></div><div class="hidden"><div><label>A</label>、<input id="answer2" name="answer2" type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a><input id="score" name="score" type="text" class="vm" value="5"/></div><div><label>B</label>、<input id="answer2" name="answer2"  type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a><input id="score" name="score" type="text" class="vm" value="4"/></div><div><label>C</label>、<input id="answer2" name="answer2" type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a><input id="score" name="score" type="text" class="vm" value="3"/></div><div><a href="javascript:;" class="newadditem2">增加一个选项</a></div></div></dd><dd class="mt10 ml20"><input name="" type="button" class="makesure" value="确定"/></dd></dl>';
		var new_obj=$(newstr);
		new_obj.insertBefore(ss);
	});
	
	$(".makesure").live("click", function(){
		var ss=$(this).parent().parent();
		var group_data=[];
		var score_data=[];
		var question=$(this).parent().parent().find("dt").find("input").val();
		if(question==""){$(this).parent().parent().remove();return false;}
		
		var oSelect=$(this).parent().parent().find("select");
		var questionkind=$(".selectchange option:selected").text();
		var questionkindvalue=$(".selectchange option:selected").val();
		if(questionkind=="简答题"){
		 	
			var icId = $(ss).prevAll().filter("h3").find("#icId").val();
			var param = {"method":"save","question":question,"answer2":group_data,"icId":icId,"type":questionkindvalue,"score":score_data};
			$.ajax({
				url : "saveOrUpdateItem.html",
				type : "POST",
				data : param,
				async: false,
				dataType : "json",
				success : function(data){
					itemId=data.itemId;
					},
				error:function(){
					alert("保存出错");
				}
				});
			newstr='<dl class="mt10 editor"><dt class="reHeight"><div class="z"><label>1</label>、</div><div class="z w750">'+question+'</div><div class="z"><input type="hidden" id="iiId" value='+itemId+' /><a href="javascript:;" class="hidden edit">编辑</a><a href="javascript:;" class="hidden del_listtwo">删除</a></div></dt></dl>';
			var new_obj=$(newstr);
			new_obj.insertBefore(ss);
		 }
		else if(questionkind=="量规题"){
			var oInput=$(this).parent().prev().children().eq(1).find("input");
			for(i=0;i<oInput.length;i++){
				sdata=$(oInput).eq(i).val();
				if(i%2==0){
					if(sdata!=""){group_data.push(sdata);}
				}
				else{
					score_data.push(sdata);	
				}
			}
			var icId = $(ss).prevAll().filter("h3").find("#icId").val();
			var param = {"method":"save","question":question,"answer2":group_data,"icId":icId,"type":questionkindvalue,"score":score_data};
			var iirId;
			$.ajax({
				url : "saveOrUpdateItem.html",
				type : "POST",
				data : param,
				async: false,
				dataType : "json",
				success : function(data){
					itemId=data.itemId;
					iirId=data.iirId;
					},
				error:function(){
					alert("保存出错");
				}
				});
			str="A";
			code = str.charCodeAt(); 
			newstr='<dl class="mt10 editor"><dt class="reHeight"><div class="z"><label>1</label>、</div><div class="z w750">'+question+'</div><div class="z"><input type="hidden" id="iiId" value='+itemId+' /><a href="javascript:;" class="hidden edit">编辑</a><a href="javascript:;" class="hidden del_listtwo">删除</a></div></dt>';
			for(i=0;i<group_data.length;i++){
				newstr=newstr+'<dd class="reHeight"><div class="z"><label>'+String.fromCharCode(code+i)+'</label>、</div><div class="z w750">'+group_data[i]+'<em>('+score_data[i]+'分)</em>'+'</div><div class="z"><input type="hidden" id="iirId" value='+iirId[i]+' /><a href="javascript:;" class="nd hidden">删除</a></div></dd>';	
			}
			newstr=newstr+'<dd><a href="javascript:;" class="newadditem hidden">增加一个选项</a></dd></dl>';
			var new_obj=$(newstr);
			new_obj.insertBefore(ss);
		}
		else{
			
			var oInput=$(this).parent().prev().children().eq(0).find("input");
			for(i=0;i<oInput.length;i++){
				sdata=$(oInput).eq(i).val();
				if(sdata!=""){group_data.push(sdata);}
			}
			
			var icId = $(ss).prevAll().filter("h3").find("#icId").val();
			var param = {"method":"save","question":question,"answer":group_data,"icId":icId,"type":questionkindvalue};
			var itemId="";
			var iirId;
			$.ajax({
				url : "saveOrUpdateItem.html",
				type : "POST",
				data : param,
				async: false,
				dataType : "json",
				success : function(data){
					itemId=data.itemId;
					iirId=data.iirId;
					},
				error:function(){
					alert("保存出错");
				}
				});
			
			str="A";
			code = str.charCodeAt(); 
			newstr='<dl class="mt10 editor"><dt class="reHeight"><div class="z"><label>1</label>、</div><div class="z w750">'+question+'</div><div class="z"><input type="hidden" id="iiId" value='+itemId+' /><a href="javascript:;" class="hidden edit">编辑</a><a href="javascript:;" class="hidden del_listtwo">删除</a></div></dt>';
			for(i=0;i<group_data.length;i++){
				newstr=newstr+'<dd class="reHeight"><div class="z"><label>'+String.fromCharCode(code+i)+'</label>、</div><div class="z w750">'+group_data[i]+'</div><div class="z"><input type="hidden" id="iirId" value='+iirId[i]+' /><a href="javascript:;" class="nd hidden">删除</a></div></dd>';	
			}
			newstr=newstr+'<dd><a href="javascript:;" class="newadditem hidden">增加一个选项</a></dd></dl>';
			var new_obj=$(newstr);
			new_obj.insertBefore(ss);
		}
		var sLabel=$(ss).parent().parent().find("dt").find("label");
		for(i=0;i<sLabel.length;i++){
			$(sLabel).eq(i).text(i+1);	
		}
		$(this).parent().parent().remove();
	});
	$(".selectchange").live("change", function(){
		var this_item = $(this).find("option:selected").text();
		$(this).parent().next().children().hide();
		if(this_item=="量规题"){
			$(this).parent().next().children().eq(1).show();
		}
		else if(this_item=="单选题" || this_item=="多选题" ){
			$(this).parent().next().children().eq(0).show();
		}
	});
});
