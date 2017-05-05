///// Business Logic /////
function count (number, direction) {
  var result = [];
  if (direction === "up") {
    for (var i = 1; i <= number; i++) {
      result.push(testNumber(i));
    }
  } else if (direction === "down") {
    for (var i = number; i >= 1; i--) {
      result.push(testNumber(i));
    }
  }
  return result;
}

function testNumber (number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "ping-pong";
  } else if (number % 3 === 0) {
    return "ping";
  } else if (number % 5 === 0) {
    return "pong";
  } else {
    return number;
  }
}

///// Front-End Logic /////
$(function() {
  $("form.form-one").submit(function(event) {
    event.preventDefault();
  });

  $("button").click(function() {
    var input = parseInt($("input#user-number").val());
    var result = count(input, $(this)[0].name);

    $("#output").empty();
    for (var i = 0; i < result.length; i++) {
      $("#output").append("<li>" + result[i] + "</li>");
    }
  });
});
