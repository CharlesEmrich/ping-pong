///// Business Logic /////


///// Front-End Logic /////
$(function() {
  $("form.form-one").submit(function(event) {
    event.preventDefault();
    var input = $("input#user-number").val();

    $("#output").text(input);
  });
});
