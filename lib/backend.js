define(['lib/mediator'], function(mediator) {

    mediator.subscribe('send_backend', function(signal_name, data) {
        var title = document.querySelector('title');
        title.innerHTML = 'null';
        var message = {'signal': signal_name, 'data': data};
        title.innerHTML = JSON.stringify(message);
    });

    return {
        // should only be used by the python backend
        _receive_message: function(signal_name, data_string) {
          var data = JSON.parse(data_string);
          mediator.publish('backend_message', signal_name, data);
        }
    };

});
