var channels_remove = function(id) {
    bootbox.confirm("Are you sure you want to remove this channel?", function(result) {
        if (result === true) {
            window.location = '/manager/channels/remove/' + id;
        }
    });
};
