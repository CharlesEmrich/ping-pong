///// Business Logic /////
function countUp (number) {
  var result = [];

  for (var i = 1; i <= number; i++) {
    result.push(i);
  }
  return result;
}

///// Front-End Logic /////
$(function() {
  $("form.form-one").submit(function(event) {
    event.preventDefault();
    var input = $("input#user-number").val();

    $("#output").text(countUp(input));
  });
});
