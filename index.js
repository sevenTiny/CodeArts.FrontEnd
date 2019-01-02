$(document).ready(function(){
	$("#bt_POST").click(function(){
		var i=0;
		window.setInterval(function(){
			i++;
			var post=$.ajax({
				url:'http://47.93.112.245/SecondDefault.ashx?TaskID=3003',
				type:'POST', 
				async:true, 
				data:JSON.stringify({
					Name:"I am a greatness hacker !",
					Grouping:"shit "+i+" tick !!!",
					Duty:"one two three",
					Phone:"911",
					Email:"hacker.gmail",
					Address:"California.1st corner",
					Operator:"admin"
				}),
			    timeout:5000,
			    dataType:'json',
			    beforeSend:function(data){
			    	
			    },
			    success:function(data,textStatus,jqXHR){
			    	console.log(JSON.stringify(data));
			    	$("#result_post").html(JSON.stringify(data));
			    },
			    error:function(xhr,textStatus){
			    	$("#result_post").html(JSON.stringify(data));
			    },
			    complete:function(){
			    	
			    }
			});
		},1);
	});

	$("#bt_GET").click(function(){
		var name=$("#t_arg").val();
		$.ajax({
			url:'http://47.93.112.245/Default.ashx?TaskID=4047&name='+name+'&number=&cartype=&spn=&Flag=0',
			type:'GET', 
			async:true, 
			data:{},
		    timeout:5000,
		    dataType:'json',
		    beforeSend:function(data){
		    	
		    },
		    success:function(data,textStatus,jqXHR){
		    	console.log(JSON.stringify(data));
		    	$("#result_get").html(JSON.stringify(data));
		    },
		    error:function(xhr,textStatus){
		    	$("#result_get").html(JSON.stringify(data));
		    },
		    complete:function(){
		    	
		    }
		});
	});
})