/* Custom JS validation exercise */
//create document handler
$(document).on('ready', function(){
//alphanumeric validator
  $.validator.addMethod( "alphanumeric", function( value, element ) {
	return this.optional( element ) || /^\w+$/i.test( value );
},
"Letters, numbers, and underscores only please" );

    // Form validation
    $('#order-form').validate({
        submitHandler: function(form) {
            // If form is valid, submit it!
            form.submit();
        },
        rules: {
            "your-name": {
                required: true,
                maxlength: 128
            },
            "your-state": {
                required: true,
                maxlength: 2
            },
            "your-zip": {
                required: true,
                maxlength: 5,
                digits: true
            },
            "card-holder-name": {
                required: true,
                maxlength: 128
            },
            "card-number": {
                required: true,
                creditcard: true
            },
            "cvv": {
                required: true,
                maxlength: 3,
                digits: true
            }
        }
    });
    // Tooltips
    $('label span.glyphicon').tooltip();
});
