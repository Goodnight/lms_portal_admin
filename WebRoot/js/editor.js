$(document).ready(function () {
   //编辑*保存大类
	$("h3.editor a.change").live("click", function(){
		var dom=$(this).parent().prev();									
		if($(this).text()=="编辑"){
			$(this).text("确定");
			var string=$(dom).text();
			$(dom).html('<input id="bigName" type="text" class="input w750 focus"  maxlength="2000" value='+string+'>');
		}
		else{
			var stcId = $(this).parent().find("#stcId").val();
			var string=$(dom).find("input").val();
			var param = "method=save&stcId="+stcId+"&name="+string;
			$.ajax({
				url : "saveOrUpdateTpCategory.html",
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
	//添加大类
	$("h3.editor a.addbigitem").live("click", function(){
		var h3=$("h3.editor");
		var dom=$(this).parent().parent();
		var key=$(h3).index(dom);
		var ss=$("h3.editor").eq(key+1);
		newstr='<dl class="mt10 editor2"><dt>大类名称：<input type="text" value="" class="vm w300" maxlength="2000"/></dt><dd class="mt10 ml20"><input name="" type="button" class="bigmakesure" value="确定"/></dd></dl>';
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
				var stId = $("#stId").val();
				var sn = key+2;
				var param = "method=save&name="+inputkey+"&stId="+stId+"&sn="+sn;
				var stcId="";
				$.ajax({
					url : "saveOrUpdateTpCategory.html",
					type : "POST",
					data : param,
					async: false,
					dataType : "json",
					success : function(data){
								stcId=data;
						},
					error:function(){
						alert("删除出错");
					}
					});
				
				var string=["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
				newstr2='<h3 class="mt10 editor reHeight"><div class="z"><label>一</label>、</div><div class="z w750 edit"><input type="text" class="input w750 focus" maxlength="2000" value="'+inputkey+'"></div><div class="z"><a href="javascript:;" class="addbigitem">增加大类</a><a href="javascript:;" class="del_listone">删除</a></div></h3><dl class="mt20 editor2"><input name="" type="button" class="newaddblock" value="增加一个问题"/></dl>';
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
		var stcId = $(this).parent().find("#stcId").val();
		var param = "method=delete&stcId="+stcId;
		$.ajax({
			url : "deleteTpCategory.html",
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
		var stiId = $(this).parent().find("#stiId").val();
		var param = "method=delete&stiId="+stiId;
		$.ajax({
			url : "deleteTpItem.html",
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
	
	//预览按钮功能
	$("#previewBtn").live("click",function(){
		var dom = $('h3.editor').parent();
		var oH = $(dom).find('h3.editor');
		var h3Length = $(oH).length;
		var oDl = $(dom).find('dl.editor');
		var dlLength = $(oDl).length;
		
		//当按钮是预览状态
		if($(this).text()=="预览"){
			var editor2Qu = $('dl.editor2').find('dt').text();		
			if(editor2Qu!=""){
				alert("预览前请请确认新添加的问题");
				return false;
			}
			$(this).text("编辑");
			$(dom).find('a').addClass('hidden');
			$('.newaddblock').parent().addClass('hidden');
			//大类切换成预览状态
			for(var k=0;k<=h3Length-1;k++){
				var iH = $(oH).eq(k);
				var iClass = $(iH).find('.w750.edit input').val();
				$(iH).find('.w750.edit').empty().html(iClass);
				
			}		
			
			//各问题和答案选项切换成预览状态
			for(var i=0;i<=dlLength-1;i++){
				var iDl = $(oDl).eq(i);
				var iQuestion = $(iDl).find('dt textarea').val();
				$(iDl).find('dt .w750.edit').empty().html(iQuestion);
				
				var oDd = $(iDl).find('dd.reHeight');
				var ddLength = $(oDd).length;
				for(var j=0;j<=ddLength-1;j++){
					var iDd = $(oDd).eq(j);
					var iAnswer = $(iDd).find('textarea').val();
					var iAnswer2 = $(iDd).find('.w750.edit input').val();	
					if(iAnswer2!=null){
						var string = iAnswer+'<em>('+iAnswer2+'分)</em>';
						$(iDd).find('.w750.edit').empty().html(string);
					}else{					
						$(iDd).find('.w750.edit').empty().html(iAnswer);
					}
				}		
			}
			
		//当按钮是编辑状态
		}else if($(this).text()=="编辑"){
			$(this).text("预览");
			$(dom).find('a').removeClass('hidden');
			$('.newaddblock').parent().removeClass('hidden');
			
			//大类切换成编辑状态
			for(var k=0;k<=h3Length-1;k++){
				var iH = $(oH).eq(k);
				var iClass = $(iH).find('.w750.edit').html();
				var iClassHtml = "<input type='text' class='input w750 focus' maxlength='2000' value='"+ iClass +"'>";
				$(iH).find('.w750.edit').empty().append(iClassHtml);
				
			}		
			
			//各问题和答案选项切换成编辑状态
			for(var i=0;i<=dlLength-1;i++){
				var iDl = $(oDl).eq(i);
				var iQuestion = $(iDl).find('dt .w750.edit').html();
				var iQuestionHtml = "<textarea class='w750'>"+ iQuestion +"</textarea>";
				$(iDl).find('dt .w750.edit').empty().append(iQuestionHtml);
				
				var oDd = $(iDl).find('dd.reHeight');
				var ddLength = $(oDd).length;
				for(var j=0;j<=ddLength-1;j++){
					var iDd = $(oDd).eq(j);
					var iAnswer = $(iDd).find('.w750.edit').text();					
					var	iAnswer2=$(iDd).find("em").text();
					var a = iAnswer.split("(");
					iAnswer = a[0];
					var iAnswerHtml = "<textarea class='w750'>"+ iAnswer +"</textarea>";
					$(iDd).find('.w750.edit').empty().append(iAnswerHtml);
					if(iAnswer2!=""){
						var iAnswerHtml = "<textarea style='width:600px;margin-right:10px;' class='vm'>"+ iAnswer +"</textarea>";
						$(iDd).find('.w750.edit').empty().append(iAnswerHtml);
						iAnswer2 = iAnswer2.substr(1,iAnswer2.length-3);
						var iAnswer2Html = "<input class='focus vm' type='text' value='"+ iAnswer2 +"'>";
						$(iDd).find('.w750.edit textarea').after(iAnswer2Html);
					}
				}		
			}
		}
	});
	
	//保存按钮功能
	$("#saveBtn").live("click", function(){
		var stId = $("#stId").val();
		var dom = $(this).parent().prev();
		var domQs = $(dom).find('dl.editor');
		var kindFc = $(domQs).find(".focus").length;
		var dataBn=[];
		var dataQn =[];
		
		var stcIds = [];
		var bigNames = [];
		var stiIds=[];
		var questions=[];
		var answer = [];
		var stirIds = [];
		var score = [];
		
		//编辑状态下保存
		if ($(this).prev().text()=="预览") {
			var domBn = $(dom).find('h3');
			
			for(var i=0;i<=domBn.length-1;i++){
				var currentBn = $(domBn).eq(i);
				var bnValue = $(currentBn).find('.w750.edit input').val();
				var stcIdValue = $(currentBn).find('#stcId').val();
//				var paramB = {"id":i,"stcId":stcIdValue,"name":bnValue};
//				dataBn.push(paramB);
				stcIds.push(stcIdValue);
				bigNames.push(bnValue);		
			}

			for(var j=0;j<=domQs.length-1;j++){
				var qusText = $(domQs).eq(j).find('dt textarea').text();//问题内容
				var stiId = $(domQs).eq(j).find('#stiId').val();//问题ID
				var stcId = $(domQs).eq(j).prevAll('h3:first').find("#stcId").val();//大类ID
				var dd = $(domQs).eq(j).find('dd.reHeight');
				
				if(dd.length==0){//简答
//					var paramQ = {"stcId":stcId,"stiId":stiId,"question":qusText,"type":1};
//					dataQn.push(paramQ);
				stiIds.push(stiId);
				questions.push(qusText);
				}else{
					var kind = $(dd).find('.focus').length;
					if(kind==0){//单选多选
						for(var k=0;k<=dd.length-1;k++){
							var kAnswer = $(dd).eq(k).find('.edit textarea').text();
							var kStirId = $(dd).eq(k).find('#stirId').val();
							stirIds.push(kStirId);
							answer.push(kAnswer);
							score.push(null);
						}
//						var paramQ = {"stcId":stcId,"stiId":stiId,"question":qusText,"type":2,"stirId":stirIds,"answer":answer};
//						dataQn.push(paramQ);
					}else{//量规

						for(var k=0;k<=dd.length-1;k++){
							var kAnswer = $(dd).eq(k).find('.edit textarea').text();
							var kStirId = $(dd).eq(k).find('#stirId').val();
							var kScore = $(dd).eq(k).find('.focus').val();
							stirIds.push(kStirId);
							answer.push(kAnswer);
							score.push(kScore);
						}
//						var paramQ = {"stcId":stcId,"stiId":stiId,"question":qusText,"type":3,"stirId":stiIds,"answer":answer,"score":score};
//						dataQn.push(paramQ);
					}					
				}			
			}	
			alert("stirIds:"+stirIds+"answer:"+answer+"score:"+score);
			var param = {"method":"save","stcIds":stcIds,"bigNames":bigNames,"stiIds":stiIds,"questions":questions,"stirIds":stirIds,"answer":answer,"score":score};

			$.ajax({
				url : "updateAllTpItem.html",
				type : "POST",
				data : param,
				async: false,
				dataType : "json",
				success : function(data){
					alert(data);
				},
				error:function(){
					alert("保存出错");
				}
			});		
		//预览状态下保存
		}else{

		}
//				var iAnswer = [];
//				var iAnswer2 = [];
//				if(dd.length==0){
//					answer[j] = null;
//					stirIds[j] = null;
//					answer2[j] = null;
//				}else{						
//					for(var k=0;k<=dd.length-1;k++){
//						var kAnswer = $(dd).eq(k).find('.edit textarea').text();
//						var kStirId = $(dd).eq(k).find('#stirId').val();
//						iAnswer.push(kAnswer);
//						iStirIds.push(kStirId);
//						if($(dd).eq(k).find('.focus').length==0){
//							iAnswer2[j] = null;
//						}else{
//							var kAnswer2 = $(dd).eq(k).find('.focus').val();
//							iAnswer2.push(kAnswer2);
//						}
//					}
//					answer[j] = iAnswer;
//					stirIds[j] = iStirIds;
//					answer2[j] = iAnswer2;
//				}			
//			}	
//			alert("stcIds"+stcIds);


//			alert("stirIds"+stirIds);
			
		
	});
	
	
	$(".wolgequ").live("click", function(){				  
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
			var stiId = $(dom).next().find("#stiId").val();
			
			var anwers=[];
			var anwers2=[];
			var socres=[];
			$(dom).html(string);
			$(this).text("编辑");
			$(Udom).find("dd").find("a").hide();
			if(kind==0){
				var itirIds=[];
				for(i=0;i<oInput.length;i++){
					sdata=$(oInput).eq(i).find("textarea").val();
					var stirId = $(oInput).eq(i).next().find("#stirId").val();
					itirIds.push(stirId);
					anwers.push(sdata);
					$(oInput).eq(i).html(sdata);
					if(sdata==""){
						$(oInput).eq(i).parent().remove();	
					}	
				}
				var param = {"method":"update","question":string,"answer":anwers,"stiId":stiId,"itirIds":itirIds,"type":"1"};
				var stcId="";
				$.ajax({
					url : "updateTpItem.html",
					type : "POST",
					data : param,
					async: false,
					dataType : "json",
					success : function(data){
								stcId=data;
						},
					error:function(){
						alert("保存出错");
					}
					});
			}
			else{
				var itirIds=[];
				for(i=0;i<oInput.length;i++){
					sinput=$(oInput).eq(i).find("input").val();
					sdata=$(oInput).eq(i).find("textarea").val();
					var stirId = $(oInput).eq(i).next().find("#stirId").val();
					itirIds.push(stirId);
					anwers2.push(sdata);
					socres.push(sinput);
					$(oInput).eq(i).html(sdata+'<em>('+sinput+'分)</em>');
					if(sdata==""){
						$(oInput).eq(i).parent().remove();	
					}	
				}
				var param = {"method":"update","question":string,"answer2":anwers2,"score":socres,"stiId":stiId,"itirIds":itirIds,"type":"3"};
				var stcId="";
				$.ajax({
					url : "updateTpItem.html",
					type : "POST",
					data : param,
					async: false,
					dataType : "json",
					success : function(data){
								stcId=data;
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
		var stirId = $(this).parent().find("#stirId").val();
		var param = "method=delete&stirId="+stirId;
		$.ajax({
			url : "deleteTpItemRes.html",
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
			newstr='<dd class="reHeight"><div class="z"><label>'+str2+'</label>、</div><div class="z w750 edit"><textarea class="w750"></textarea></div><div class="z"><input type="hidden" id="stirId" value="" /><a href="javascript:;" class="nd">删除</a></div></dd>';
		}
		else{
			newstr='<dd class="reHeight"><div class="z"><label>'+str2+'</label>、</div><div class="z w750 edit"><textarea class="w750"></textarea><input type="text" value="" class="focus vm"></div><div class="z"><input type="hidden" id="stirId" value="" /><a href="javascript:;" class="nd">删除</a></div></dd>';	
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
		newstr='<dl class="mt10 editor2"><dt>问题：<input id="name" type="text" value="" class="vm w300"/></dt><dd>题型：<select id="type" name="type" class="selectchange"><option value="1">单选题</option><option value="2">多选题</option><option value="3">量规题</option><option value="4">简答题</option></select></dd><dd><div><div><label>A</label>、<input id="answer" name="answer" type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a></div><div><label>B</label>、<input id="answer" name="answer" type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a></div><div><label>C</label>、<input id="answer" name="answer" type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a></div><div><a href="javascript:;" class="newadditem1">增加一个选项</a></div></div><div class="hidden"><div><label>A</label>、<input id="answer2" name="answer2" type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a><input id="score" name="score" type="text" class="vm" value="5"/></div><div><label>B</label>、<input id="answer2" name="answer2"  type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a><input id="score" name="score" type="text" class="vm" value="4"/></div><div><label>C</label>、<input id="answer2" name="answer2" type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a><input id="score" name="score" type="text" class="vm" value="3"/></div><div><label>D</label>、<input id="answer2" name="answer2" type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a><input id="score" name="score" type="text" class="vm" value="2"/></div><div><label>E</label>、<input id="answer2" name="answer2" type="text" class="vm"/><a href="javascript:;" class="nd2">删除</a><input id="score" name="score" type="text" class="vm" value="1"/></div><div><a href="javascript:;" class="newadditem2">增加一个选项</a></div></div></dd><dd class="mt10 ml20"><input name="" type="button" class="makesure" value="确定"/></dd></dl>';
		var new_obj=$(newstr);
		new_obj.insertBefore(ss);
	});
	
	
	//增加问题的确定按钮
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
		 	
			var stcId = $(ss).prevAll().filter("h3").find("#stcId").val();
			var param = {"method":"save","question":question,"answer2":group_data,"stcId":stcId,"type":questionkindvalue,"score":score_data};
			$.ajax({
				url : "saveOrUpdateTpItem.html",
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
			newstr='<dl class="mt10 editor"><dt class="reHeight"><div class="z"><label>1</label>、</div><div class="z w750"><textarea class="w750 edit">'+question+'</textarea></div><div class="z"><input type="hidden" id="stiId" value='+itemId+' /><a href="javascript:;" class="del_listtwo">删除</a></div></dt></dl>';
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
			var stcId = $(ss).prevAll().filter("h3").find("#stcId").val();
			var param = {"method":"save","question":question,"answer2":group_data,"stcId":stcId,"type":questionkindvalue,"score":score_data};
			var stcId="";
			$.ajax({
				url : "saveOrUpdateTpItem.html",
				type : "POST",
				data : param,
				async: false,
				dataType : "json",
				success : function(data){
					itemId=data.itemId;
					stirId=data.stirId;
					},
				error:function(){
					alert("保存出错");
				}
				});
			str="A";
			code = str.charCodeAt(); 
			newstr='<dl class="mt10 editor"><dt class="reHeight"><div class="z"><label>1</label>、</div><div class="z w750"><textarea class="w750 edit">'+question+'</textarea></div><div class="z"><input type="hidden" id="stiId" value='+itemId+' /><a href="javascript:;" class="del_listtwo">删除</a></div></dt>';
			for(i=0;i<group_data.length-1;i++){
				newstr=newstr+'<dd class="reHeight"><div class="z"><label>'+String.fromCharCode(code+i)+'</label>、</div><div class="z w750 edit"><textarea style="width:600px;margin-right:10px;" class="vm">'+group_data[i]+'</textarea><input class="focus vm" type="text" value="'+score_data[i]+'"></div><div class="z"><input type="hidden" id="stirId" value='+stirId+' /><a href="javascript:;" class="nd">删除</a></div></dd>';	
			}
			newstr=newstr+'<dd><a href="javascript:;" class="newadditem">增加一个选项</a></dd></dl>';
			var new_obj=$(newstr);
			new_obj.insertBefore(ss);
		}
		else{
			
			var oInput=$(this).parent().prev().children().eq(0).find("input");
			for(i=0;i<oInput.length;i++){
				sdata=$(oInput).eq(i).val();
				if(sdata!=""){group_data.push(sdata);}
			}
			
			var stcId = $(ss).prevAll().filter("h3").find("#stcId").val();
			var param = {"method":"save","question":question,"answer":group_data,"stcId":stcId,"type":questionkindvalue};
			var itemId="";
			var stirId;
			$.ajax({
				url : "saveOrUpdateTpItem.html",
				type : "POST",
				data : param,
				async: false,
				dataType : "json",
				success : function(data){
					itemId=data.itemId;
					stirId=data.stirId;
					},
				error:function(){
					alert("保存出错");
				}
				});
			
			str="A";
			code = str.charCodeAt(); 
			newstr='<dl class="mt10 editor"><dt class="reHeight"><div class="z"><label>1</label>、</div><div class="z w750 edit"><textarea class="w750">'+question+'</textarea></div><div class="z"><input type="hidden" id="stiId" value='+itemId+' /><a href="javascript:;" class="del_listtwo">删除</a></div></dt>';
			for(i=0;i<group_data.length;i++){
				newstr=newstr+'<dd class="reHeight"><div class="z"><label>'+String.fromCharCode(code+i)+'</label>、</div><div class="z w750 edit"><textarea class="w750">'+ group_data[i] +'</textarea></div><div class="z"><input type="hidden" id="stirId" value='+stirId[i]+' /><a href="javascript:;" class="nd">删除</a></div></dd>';	
			}
			newstr=newstr+'<dd><a href="javascript:;" class="newadditem">增加一个选项</a></dd></dl>';
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
