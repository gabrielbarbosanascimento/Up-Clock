require(['lib/mediator', 'lib/backend', 'lib/jquery-1.8.3.js'], function(mediator, backend) {

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
									'ubuntu-phone-clock running on');
	$('#close').click(function() {
		 mediator.publish('send_backend', 'quit', 'quit');
	});

	$('#minimize').click(function() {
		 mediator.publish('send_backend', 'minimize', 'minimize');
	});

	$('#close, #minimize, #confirm, #pallet-color span, #settings, .classic, #hide, .t24, .t12').mouseenter(function() {
		mediator.publish('send_backend', 'disable_drag', 'disable_drag');
	}).mouseleave(function() {
		mediator.publish('send_backend', 'enable_drag', 'enable_drag');
	});
});
