///// Business Logic /////
function count (number, direction) {
  var result = [];

  if (direction === "up") {
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
  } else if (direction === "down") {
    for (var i = number; i >= 1; i--) {
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
  }

  return result;
}

///// Front-End Logic /////
$(function() {
  $("form.form-one").submit(function(event) {
    event.preventDefault();
  });

  $("button").click(function() {
    var input = parseInt($("input#user-number").val());
    $("#output").text(count(input, $(this)[0].name));
  });
});
