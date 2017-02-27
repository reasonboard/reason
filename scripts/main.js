$(document).ready(function() {
    $.fn.editable.defaults.mode = 'inline';
    $.fn.editable.defaults.ajaxOptions = {
        type: "PUT"
    };
    $('.editable').each(function() {
        $(this).editable();
    });
});
