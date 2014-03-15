require(['lib/mediator', 'lib/backend', 'lib/jquery-1.11.0.min.js'], function(mediator, backend) {

	// decide what you want to do depending on the backend signal_name
	mediator.subscribe('backend_message', function(signal_name, data) {
		console.log('signal received from backend: ' + signal_name +
				', with this data: ' + data);
		switch (signal_name) {
			case 'version_provided':
				document.querySelector('#data').innerHTML = data['version'];
				break;

			default:
				document.querySelector('#signal_name').innerHTML = 'Unknown signal';
		}
	});
/* TODO */
	// send our first message to the backend
	mediator.publish('send_backend', 'frontend_loaded',
									'ubuntu-phone-clock is running!!');
	$('#close').click(function() {
		 document.title = 'close';
	});

	$('#minimize').click(function() {
		 document.title = 'minimize';
	});

	$('.clock-settings input, .btn-close, .buttons div, #close, #minimize, #confirm, #pallet-color span, #settings, .classic, #hide, .t24, .t12, #alarm, .custom, input[type=range]').mouseenter(function() {
		document.title = 'disable_drag';
	}).mouseleave(function() {
		document.title = 'enable_drag';
	});
});
