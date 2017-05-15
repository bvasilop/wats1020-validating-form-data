// Document ready handler
$(document).on("ready", function(){
    // Form validation
    // alphanumeric validator
  $.validator.addMethod("alphanumeric", function(value, element) {
       return this.optional(element) || /^[A-Za-z][A-Za-z0-9]*$/i.test(value);
  }, "Letters, numbers, and underscores only please" );
  // define object to validate form data
    $("#order-form").validate({
      // Connect the validation object to an event handler tied to the submit button.
        submitHandler: function(form) {
            // If valid, then submit
            form.submit();
        },
        // validate form data with the following rules
        rules:
            // name
            {
              "your-name": {
                  required: true,
                  maxlength: 128,
              },
              // additional address no more than 500 characters
              "your-address2": {
                required: false,
                maxlength: 500
              },

              // city
              "your-city":{
                required: true
              },

              // state no more than two letters
              "your-state": {
                  required: true,
                  maxlength: 2
              },
              // zip code no more or less  than 5 digits
              "your-zip": {
                  required: true,
                  maxlength: 5,
                  minlength:5,
                  digits: true
              },
              // cardholder name no more than 128 characters
              "card-holder-name": {
                  required: true,
                  maxlength: 128
              },
              // card number
              "card-number": {
                  required: true,
                  creditcard: true
              },
              // expiration month
              "expiry-month": {
                  required: true
              },

              // expiration year
              "expiry-year": {
                  required: true
              },

            // three digit code no more or less than 3 digits
              "cvv": {
                  required: true,
                  minlength:3,
                  maxlength: 3,
                  digits: true
              },
               // optional additional instructions
              "comments": {
                required: false,
                  maxlength: 500
              }
           }
    });
    // Tooltips
    $('label span.glyphicon').tooltip();
});
