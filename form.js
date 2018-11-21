var $form = $('form#subscripe'),
    url = 'https://script.google.com/macros/s/AKfycbwQlG_RJV75lTthcQ2H_xu46Ej49GGhw9AJLSjTq6h_YNiDw3c/exec'

$('#contact-form-button').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
