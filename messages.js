(function () {
	//toastr options
	toastr.options = {
  	'showDuration': '1000',
  	'hideDuration': '1000',
  	'timeOut': '8000',
  	'progressBar': true,
  	'positionClass': 'toast-bottom-right'
	};
	
	//First, we will hide the messages, you can do it with CSS, but in this example, I will use only JavaScript.
	$('.zone-messages .message').css('display', 'none');
	
	var messageElement;
	$('.zone-messages .message').each(function () {
		messageElement = $(this);
		if(messageElement.hasClass('message-Information')){
			toastr.success(messageElement.html());
		} else if(messageElement.hasClass('message-Warning')){
			toastr.warning(messageElement.html());
		} else if(messageElement.hasClass('message-Error')){
			toastr.error(messageElement.html());
		}
	});
} ());
