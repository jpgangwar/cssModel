$(document).ready(function(){
	$('.fetch-user-data').hide();

	$("#Start-log").click(function(){

		$.post('http://qa.filingmantra.com/users/sign_in',
		 {'user': 
		 {'login':'jp.gangwar1989@gmail.com','password':'1234'}
		}, 
		 function(data, resp) {
        	// debugger;
        	console.log(resp);
			if(resp == "success"){
				console.log(status);
				$('.fetch-user-data').show();
			}
		});

	});

	$('.myTable').hide();
	$(".fetch-user-data").click(function(){
		$.get('http://qa.filingmantra.com/data.txt',
		 function(data, resp) {
        	// debugger;
 	       	// console.log(data);
 	       	// debugger;
 	       	$('#Start-log').hide('slow');
 	       	$('.myTable').show('slow');
 	       	var obj = JSON.parse(data)["data"];
 	       	console.log(obj);
 	        var fetchData_array = [];
 	        for (i = 0; i < obj.length; i++) {
				var id = obj[i][0];
				var Name = obj[i][2];
				var mobile = obj[i][3];
				var status = obj[i][6];
				var imgUrl = "http://qa.filingmantra.com/uploads/lead/pan/"+id+"/pan.jpeg"
				
				$('.myTable tr:last').before("<tr><td>" +id+"</td><td>" + Name + "</td><td>"+ mobile +"</td><td>"+ status +"</td><td><button class='btnDelete btn btn-danger btn-xs'><a href=" + imgUrl + " target='_blank'>Show</button></td></tr>");
				console.log(id);
				console.log(Name);
				console.log(mobile);
				console.log(status);
			}
		});  
	});
});