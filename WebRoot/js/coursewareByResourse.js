/**
 * 
 */
$(function(){
	//�����б�
	onlinePage(1);
	docPage(1);
});


function onlinePage(i){
	var url = basepath+"/courseware/courseware/onlineCourse.html?cId="+cId+"&pagefn=onlinePage&page="+i+"&r="+Math.random();
	$("#list_onlinecourse").load(encodeURI(url),function(){
		$("input:checkbox").uniform();
	});
	
}

//��ѵ���е��ĵ��б��ҳ����
function docPage(i){
	var url = basepath+"/courseware/courseware/courseware.html?cId="+cId+"&pagefn=docPage&page="+i+"&r="+Math.random();
	$("#list_doc").load(encodeURI(url),function(){
		$("input:checkbox").uniform();
	});
}