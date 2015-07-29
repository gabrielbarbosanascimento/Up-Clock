define(['lib/js/mediator'], function(mediator) {

    return {
        // should only be used by the python backend
        _receive_message: function(signal_name, data_string) {
          var data = JSON.parse(data_string);
          mediator.publish('backend_message', signal_name, data);
        }
    };

});
