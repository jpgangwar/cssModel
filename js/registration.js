$(document).ready(function(){
 $('.datepicker').datepicker({
		todayBtn: "linked",
		keyboardNavigation: false,
		forceParse: false,
		calendarWeeks: true,
		autoclose: true,
		format: 'dd/mm/yyyy'
	});

 

});

function validate_Pan_num() {
	// debugger;
	var Pan = $("#validate-pan").val();
	var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
	if (regpan.test(Pan)) {
		$("#pan-error").hide();
		console.log('success');
		$('#validate-pan').removeClass('border-error').addClass('border-green');
		return true;
	}
	else {
		$("#pan-error").show();
		$('#validate-pan').removeClass('border-green').addClass('border-error');
		// PanNumber.focus();
		console.log('not success')
		return false;
	}
}

function only_alpha(){
	$('#a').keydown(function(e) {
      if (e.shiftKey || e.ctrlKey || e.altKey) {
        e.preventDefault();
      } else {
        var key = e.keyCode;
        if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
          e.preventDefault();
        }
      }
    });
}

