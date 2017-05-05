///// Business Logic /////
function countUp (number) {
  var result = [];

  for (var i = 1; i <= number; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      result.push("ping-pong")
    } else if (i % 3 === 0) {
      result.push("ping");
    } else if (i % 5 === 0) {
      result.push("pong");
    } else {
      result.push(i);
    }
  }
  return result;
}

///// Front-End Logic /////
$(function() {
  $("form.form-one").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#user-number").val());

    $("#output").text(countUp(input));
  });
});
