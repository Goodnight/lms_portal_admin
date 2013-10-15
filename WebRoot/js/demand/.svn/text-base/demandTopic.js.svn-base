 jQuery(function($){    
    selectYear('year',new Date().getFullYear(),10);   
 
$("#dmdTopicNew").validate({
	errorPlacement: function(error, element) {
		var id = $(element).attr("id");
		error.appendTo( $("#"+id+"_error") );
	},
	rules:{
		startDt : {
			required : true
		},
		endDt : {
			required : true
		}
	},
	messages:{
		startDt : "Please Enter Start Date!",
		endDt : "Please Enter End Date!"
	}
});
        
//开始日期
$("#startDt").datepicker({
	showOn:"button",
	changeMonth: true,
	changeYear:true,
	buttonImage:basepath+"/images/calendar.gif",
	buttonImageOnly:true,
	dateFormat:"yy-mm-dd",
	onSelect : function(dt){
		$("#endDt").datepicker("option","minDate",dt);
	}
});

//结束日期
$("#endDt").datepicker({
	showOn:"button",
	changeMonth: true,
	changeYear:true,
	buttonImage:basepath+"/images/calendar.gif",
	buttonImageOnly:true,
	dateFormat:"yy-mm-dd",
	onSelect : function(dt){
		$("#startDt").datepicker("option","maxDate",dt);
     		}
     	});
   });    


 function selectYear(target,start,setup){   
    var targetValue=$('#'+target).val();  
   if(targetValue==null||targetValue==""){     
        //default load  
       $('#'+target).children().remove();
       for(i=start;i<start+setup;i++){      
    	   $('#'+target).append($("<option value='"+i+"'>"+i+"</option>"));     
       }  
    }else{  
    startYear=getReduce(targetValue,0);  
    lastYear=getSum(start,setup);  
        $('#'+target).children().remove();   
        for(j=startYear;j<lastYear;j++){      
        $('#'+target).append($("<option value='"+j+"'>"+j+"</option>"));   
        }  
        //currect in the select year  
        $('select option').each(     
          function(i){      
           if($(this).val() == targetValue){     
            $(this).attr("selected","selected");     
           }     
          }     
         );  
    }  
  }     
    
 function getSum(a,b){     
 return parseInt(a)+parseInt(b);     
  }     
       
 function getReduce(a,b){     
 return parseInt(a)-parseInt(b);     
  }
 