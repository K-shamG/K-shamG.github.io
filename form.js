var $form = $('form#subscripe'),
    url = 'https://script.google.com/macros/s/AKfycbz93tIyOZSaoIrVdpQLZkyFmE7P_CkVQKSkWNsfGKE0koihNzI/exec'

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
