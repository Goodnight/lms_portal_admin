
var dep_id; //��Ϊȫ�����Ա�����һ�μ���Id
var first_search_depId; //���ε�½��Cookieʱʹ��
/**
 * ������ѵ����
 */
$(function(){
	
	$('#datatable1').dataTable( {
		"aoColumns": [
	      { "bSortable": false },
	      null, null,null,null, null,null
		] } );
	
	$("#searchButton").click(function(){
		if(null==dep_id || dep_id==""){
			first_search_depId = $("#orgDepOriId").val();
		}
		page(1);
	});
	
	$('[data-rel=tooltip]').tooltip();
	$('[data-rel=popover]').popover({html:true});
	
	//ɾ��������ѵ����
	$("#btn_delete").click(function(){
		var ids = $("input:checkbox[name=groupTypeId]:checked");
		if(ids == null || ids == "" || ids.length == 0){
			bootbox.alert("��ѡ��ɾ����");
		}
		else{
			bootbox.confirm("ȷ��Ҫɾ��ѡ����", function (){
				var param = "method=remove&dpIds=";
				for(var i=0;i<ids.length;i++){
					param += $(ids[i]).val()+",";
				}
				$.ajax({
					url : "deleteDemandDep.html",
					type : "POST",
					data : param,
					dataType : "text",
					success : function(data){
						page(1);					
					},
					error:function(){
						bootbox.alert("ɾ������!!");
					}
				});
			});

		}
	});
});

function orgClick(type,id,name){
	$("#dep_id").val(id);
    $(".newDemandDep").attr("href","demandDepNew.html?orgDepId="+id);
	if(type=="dep"){
		$("#depOrOrgType").val("1");
		setNav(name);
	}else{
		$("#depOrOrgType").val("0");
		setNav(name);
	}
	page(1);
}

/**
 * ���µ���
 */
function setNav(name){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+name+"</li>");
}

/**
 * ����
 */
function exportList(){	
	var isChildDep = $("input:radio[name=isChildDep]:checked").val();
	dep_id_click = document.getElementById("dep_id").value;
	var oriDepId = $("#oriDepId").val(); //��ȡ������������ѡ���ŵ�Id
	if(null!=oriDepId && oriDepId!="" && dep_id != oriDepId){ //��������������ѡ����Id��������ȫ��dep_id���ظ�ʱ
		dep_id = oriDepId;  //��λ��֮ǰ������Ĳ���Id��
	}
	else{
		dep_id = dep_id_click; //�ظ�ʱ�������ಿ�����ľ���ڵ��Id���м���
	}
	if(null==dep_id || dep_id==""){   //ִ������dep_id��ȻΪ��ʱ
		dep_id = first_search_depId;  //���ε�½ʱʹ��
	}
	var type = document.getElementById("type").value;
	var year = document.getElementById("year").value;
	var item_id = document.getElementById("item_id").value;
	var query ="&type="+type+"&year="+year+"&item_id="+item_id+"&dep_id="+dep_id+"&isChildDep="+isChildDep;
	
	loadingDataStart();
	var countUrl = basepath + "/demand/exportCount.html?r="+Math.random();
	var listUrl = basepath + "/demand/exportList.html?r="+Math.random();
	postData(encodeURI(countUrl+query),encodeURI(listUrl+query));
	
}

/**
 * ��ҳ
 */
function page(i){	
	$.dialog.tips('���ݼ�����...',600,'loading.gif');
	var isChildDep = $("input:radio[name=isChildDep]:checked").val();
	var max = $("#list_demandDep .page_max").val()?$("#list_demandDep .page_max").val():10;
	dep_id_click = document.getElementById("dep_id").value;
	var oriDepId = $("#oriDepId").val(); //��ȡ������������ѡ���ŵ�Id
	if(null!=oriDepId && oriDepId!="" && dep_id != oriDepId){ //��������������ѡ����Id��������ȫ��dep_id���ظ�ʱ
		dep_id = oriDepId;  //��λ��֮ǰ������Ĳ���Id��
	}
	else{
		dep_id = dep_id_click; //�ظ�ʱ�������ಿ�����ľ���ڵ��Id���м���
	}
	if(null==dep_id || dep_id==""){   //ִ������dep_id��ȻΪ��ʱ
		dep_id = first_search_depId;  //���ε�½ʱʹ��
	}
	var depOrOrgType = document.getElementById("depOrOrgType").value;
	var type = document.getElementById("type").value;
	var year = document.getElementById("year").value;
	var item_id = document.getElementById("item_id").value;
	var value ="&type="+type+"&year="+year+"&item_id="+item_id+"&dep_id="+dep_id+"&isChildDep="+isChildDep+"&depOrOrgType="+depOrOrgType;
	var url = basepath+"/demand/demandDepList.html?pagefn=page&page="+i+value+"&max="+max+"&r="+Math.random();
	$("#list_demandDep").load(encodeURI(url),function(){
		$.dialog.tips('���ݼ������',1,'tips.gif');
		$(".cls_chooseall").click(function(){
			if($(this).attr("checked")){
				$(".cls_chooseitem").attr("checked",true);
			}else{
				$(".cls_chooseitem").attr("checked",false);
			}
			$.uniform.update();
		});
		$(".cls_checkbox").uniform();
		//ѡ��ÿҳ��¼����
		$("#list_demandDep .page_max").change(function(){
			page(1);
		});		
	});
}

//ȫѡ��ѡ
function checkAll(formvalue) {  
    var roomids = document.getElementsByName(formvalue);  
    for (var j = 0; j < roomids.length; j++) {
        if (roomids.item(j).checked == false) { 
            roomids.item(j).checked = true;
        }else{
        	roomids.item(j).checked = false;
        }
    }
    $.uniform.update();
}
