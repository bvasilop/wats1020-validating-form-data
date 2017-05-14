// document ready handler
$(document).on( 'ready' , function() {
  // alphanumeric validator
  $.validator.addMethod('alphanumeric', function(value, element) {
       return this.optional(element) || /^[A-Za-z][A-Za-z0-9]*$/i.test(value);
  }, "Letters, numbers, and underscores only please" );
    // define object to validate form data
  $('#order-form').validate({
    // Connect the validation object to an event handler tied to the submit button.
      submitHandler: function(form) {
            form.submit();
       },
         // validate form data with the following rules
       rules: {
         // name
      'your-name': {
              required: true,
              maxlength: 128,
              lettersonly: true
       },
        // address
       'your-address': {
              required: true,
              maxlength:500

       },
       // additional address
       'your-address2': {
              required: false,
              maxlength: 500
       },
        // city
       'your-city':{
              required: true
       },
        // state
       'your-state': {
              required: true,
              maxlength: 2

       },
        // zip code
        'your-zip':{
              required: true,
              minlength: 5,
              maxlength: 5,
              digits: true

      },
        // cardholder name
        'card-holder-name': {
          required: true,
          maxlength: 128
      },
        // card number
        'card-number': {
          required: true,
          creditcard: true
      },

        // expiration month
        'expiry-month': {
          required: true
      },

        // expiration year
        'expiry-year': {
          required: true
        },
        // three digit code
        'cvv': {
          required: true,
          maxlength: 3,
          minlength: 3,
          digits: true
        },
        // shipping
        'shipping-method':{
          required: true
        },
        // instructions
        'comments': {
          required: false,
          maxlength: 500
        }
      }
    });
      // Tooltips
      $('label span.glyphicon').tooltip();
});
