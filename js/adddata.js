$(document).ready(function(){
	var NOB_id = 1;
	$('#submit-btn').click(function(e){
		e.preventDefault();
		var amt = $('#Amount').val();
		var amtType = $(".amt-type option:selected").val();
		if(amt == '' || amtType == ''){
			console.log('Not');
		}else{
			// debugger
			$('.myTable tr:last').before("<tr><td class='NOB_id'>" +NOB_id+"</td><td class='price'>" + amt + "</td><td>"+ amtType +"</td></tr>");
			NOB_id+=1
			calculateSum();
			console.log('success');
		}
		console.log(amt);
		console.log(amtType);
		
		
	})

})

function calculateSum() {
var sum = 0;
    $(".price").each(function() {
    	var value = parseInt($(this).text());

        if(!isNaN(value) && value.length != 0) {
        	sum += parseFloat(value);
    	}

    });

$('#total-amt').text(sum);
document.getElementById("total-amt").value = sum; 
console.log(sum);   
};