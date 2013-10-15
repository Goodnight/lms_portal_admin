
$(function(){
	$("#addTagForm").validate({
		rules : {
			tagnames : {
				required : true
			}
		},
		messages : {
			tagnames : "标签名不能为空"
		}
	});

	//新建标签时，标签名打空格出现逗号
function rTrim(str)
{
   var iLength;

   iLength = str.length;
   if (str.charAt(iLength - 1) == " " || str.charAt(iLength - 1) ==",")
   {
    str = str.substring(0, iLength - 1);
    str = rTrim(str); 
   }
   return str;
}
$("#tagf input").keyup(function(ev){
	var oEvent=ev||event;
	if(oEvent.keyCode==32){
		var mm=$(this).val();
		mm=rTrim(mm);   
		mm+=",";
		$(this).val(mm);
	}							  
})	

	});