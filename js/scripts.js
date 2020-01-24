$(document).ready(function() {
    $("form#some-form").submit(function(event) {
    var someInput = $("input#some-input").val();
  
    $(".some-stuff").text(someInput);


    // $("#salim").show();

    event.preventDefault();
  });

});