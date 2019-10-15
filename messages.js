(function () {
	// Toastr options
	toastr.options = {
		'showDuration': '1000',
		'hideDuration': '1000',
		'timeOut': '8000',
		'progressBar': true,
		'positionClass': 'toast-bottom-right'
	};
	
	// Convert html messages to toastr notifications
	var messageElement;
	$('.zone-messages .message').each(function () {
		messageElement = $(this);
		if(messageElement.hasClass('message-Information')) {
			toastr.success(messageElement.html());
		} else if(messageElement.hasClass('message-Warning')) {
			toastr.warning(messageElement.html());
		} else if(messageElement.hasClass('message-Error')) {
			toastr.error(messageElement.html());
		}
	});
} ());
