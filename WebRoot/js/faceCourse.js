
function searchBottonClick(){
	var name = document.getElementById("doucementinput").value;
	
	if(name!=null)
		{
		window.location = "faceCourseList.html?name=" + name;
		}
}

function del()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	  var boxes = document.getElementsByName("groupTypeId");
		var groupTypeId = new Array();
		for ( var i = 0; i < boxes.length; i++) {
			if (boxes[i].checked) {
				groupTypeId[i] = boxes[i].value;
			}
			
		}
		var url = "deleteCourseware.html?ids="+groupTypeId;
    }
  }
xmlhttp.open("POST",url,true);

}

//批量删除

//高级搜索
function selectBottonClick(){
	var name = document.getElementById("courseinput").value;
	var bianhao = document.getElementById("bianhao").value;
	var guanjianzi = document.getElementById("guanjianzi").value;
	var duixiang = document.getElementById("duixiang").value;
	var startTime = document.getElementById("startTime").value;
	var endTime = document.getElementById("endTime").value;
	var status = document.getElementById("status").value;
	if(status == "请选择")
		{
		status = "";
		}
	var url = "faceCourseList.html?name=" + name + "&sn=" + bianhao + "&tag=" + guanjianzi + "&suit=" + duixiang +"&createDt=" + startTime + "&tocreateDt=" + endTime + "&status=" + status;
	window.location = encodeURI(url);
}

//全选反选
function checkAll(formvalue) {  
    var roomids = document.getElementsByName(formvalue);  
    for (var j = 0; j < roomids.length; j++) {  
        if (roomids.item(j).checked == false) {  
            roomids.item(j).checked = true;
            
        }  
        else{
        	roomids.item(j).checked = false; 
        }
    }  
}  







  

