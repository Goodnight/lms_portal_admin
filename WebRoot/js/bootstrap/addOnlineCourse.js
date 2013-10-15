/*
 * JS For Mulugl Page at 2013.6.06...
 * Function For Datas Transport and Deal with Datas.
 */

$(document).ready(function() {

	var data1 = [{"cid":1,"kc_name":"火影忍者疾风传","type":"所有","source":"","s-status":0,"ups":9,"creatTime":100,"k-status":2,"comments":3,"students":10,"hour":2345,"relative":6,"class":"热血"},
				{"cid":2,"kc_name":"哈尔的移动城堡","type":"所有","source":"","s-status":1,"ups":100,"creatTime":100,"k-status":1,"comments":6,"students":20,"hour":3653,"relative":5,"class":"幻想"},
				{"cid":3,"kc_name":"萤火虫","type":"所有","source":"","s-status":2,"ups":9,"creatTime":100,"k-status":0,"comments":8,"students":7,"hour":6752,"relative":4,"class":"温馨"},
				{"cid":4,"kc_name":"世界第一初恋","type":"所有","source":"","s-status":0,"ups":5,"creatTime":100,"k-status":1,"comments":9,"students":40,"hour":452,"relative":3,"class":"CP"},
				{"cid":5,"kc_name":"海贼王","type":"所有","source":"","s-status":1,"ups":100,"creatTime":100,"k-status":1,"comments":14,"students":50,"hour":500,"relative":7,"class":"热血"},
				{"cid":6,"kc_name":"元气少女缘结神","type":"所有","source":"","s-status":2,"ups":88,"creatTime":100,"k-status":1,"comments":16,"students":10,"hour":2345,"relative":5,"class":"动作"},
				{"cid":7,"kc_name":"某科学的超电磁炮","type":"所有","source":"","s-status":0,"ups":5,"creatTime":100,"k-status":2,"comments":46,"students":10,"hour":7689,"relative":9,"class":"热血"},
				{"cid":8,"kc_name":"犬夜叉","type":"所有","source":"","s-status":1,"ups":4,"creatTime":100,"k-status":2,"comments":15,"students":26,"hour":8465,"relative":1,"class":"热血"},
				{"cid":9,"kc_name":"死神","type":"所有","source":"","s-status":2,"ups":4,"creatTime":100,"k-status":2,"comments":80,"students":11,"hour":3948,"relative":2,"class":"热血"},
				{"cid":10,"kc_name":"千与千寻","type":"所有","source":"","s-status":0,"ups":88,"creatTime":100,"k-status":1,"comments":100,"students":12,"hour":8375,"relative":3,"class":"热血"},
				{"cid":2,"kc_name":"花名未闻","type":"所有","source":"","s-status":1,"ups":100,"creatTime":100,"k-status":0,"comments":90,"students":3,"hour":6375,"relative":4,"class":"热血"},
				{"cid":4,"kc_name":"悬崖上的金鱼姬","type":"所有","source":"","s-status":2,"ups":78,"creatTime":100,"k-status":0,"comments":0,"students":15,"hour":1754,"relative":5,"class":"热血"},
				{"cid":11,"kc_name":"幽灵公主","type":"所有","source":"","s-status":0,"ups":78,"creatTime":100,"k-status":0,"comments":0,"students":55,"hour":8856,"relative":6,"class":"热血"},
				{"cid":12,"kc_name":"我的妹妹不可能这么可爱","type":"所有","source":"","s-status":1,"ups":22,"creatTime":100,"k-status":2,"comments":88,"students":10,"hour":7777,"relative":7,"class":"热血"},
				{"cid":13,"kc_name":"樱男高校男公关部","type":"所有","source":"","s-status":2,"ups":33,"creatTime":100,"k-status":2,"comments":30,"students":19,"hour":8888,"relative":8,"class":"热血"},
				{"cid":14,"kc_name":"多啦A梦","type":"所有","source":"","s-status":0,"ups":100,"creatTime":99,"k-status":2,"comments":30,"students":89,"hour":2222,"relative":4,"class":"热血"},
				{"cid":15,"kc_name":"樱桃小丸子","type":"所有","source":"","s-status":1,"ups":100,"creatTime":11,"k-status":1,"comments":30,"students":33,"hour":1111,"relative":0,"class":"热血"},
				{"cid":16,"kc_name":"刀剑神域","type":"所有","source":"","s-status":2,"ups":100,"creatTime":45,"k-status":1,"comments":30,"students":149,"hour":9999,"relative":11,"class":"网游"}];


	var label_data = [{'lid':1,'name':'路飞'},{'lid':2,'name':'山治'},{'lid':3,'name':'娜美'},{'lid':4,'name':'罗宾'},
				  {'lid':5,'name':'乔巴'},{'lid':6,'name':'布鲁克'},{'lid':7,'name':'索隆'},{'lid':8,'name':'弗兰奇'},];

    var i = 2 ;

	$(document).on('click', '#file_up_add', function(){
		
		i += 1;
		
		text = "<div class='row-fluid'><div class='span10'><input type='file' id='id-input-file-content-" + i +"' /></div>" +
			   "<div class='span2'><button class='btn btn-small btn-info'><i class='icon-upload-alt'></i> 上传</button></div></div>";


		$('.file_field').append(text);


		$('#id-input-file-content-'+ i).ace_file_input({
			no_file:'请上传zip格式文件。',
			btn_choose:'浏览',
			btn_change:'更换',
			droppable:false,
			onchange:null,
			thumbnail:false //| true | large
		});
	});

	$(document).on('click', '#data_up_add', function(){
		
		i += 1;
		
		var text = "<div class='row-fluid'><div class='span10'><input type='file' id='id-input-file-data-" + i +"' /></div>" +
			   "<div class='span2'><button class='btn btn-small btn-info'><i class='icon-upload-alt'></i> 上传</button></div></div>";


		$('.data_field').append(text);


		$('#id-input-file-data-'+ i).ace_file_input({
			no_file:'',
			btn_choose:'浏览',
			btn_change:'更换',
			droppable:false,
			onchange:null,
			thumbnail:false //| true | large
		});
	});


	$(document).on('click','#button_add_label',function  () {

		$('.label_area').toggle();
	});


	for (var j = label_data.length - 1; j >= 0; j--) {

		var label_text = "<span id='label_id_" + label_data[j].lid + "' class='label label-large label-yellow arrowed-in'>" + label_data[j].name + "</span>&nbsp;&nbsp;";

		$('.label_area p').append(label_text);

	};

	for (var k = data1.length - 1; k >= 0; k--) {

			var option_text = "<option value='option_" + data1[k].cid + "'>" + data1[k].kc_name + "</option>";
			$('#xg_kc').append(option_text);
		};

});

