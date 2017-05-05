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

//NOTE: The initial description asks for "ping-pong" but the example displays "pingpong." If the latter is acceptable, a different testNumber function is possible:
// function testNumberAnotherWay (number) {
//   var result = "";
//   if (number % 3 === 0) {
//     result += "ping";
//   }
//   if (number % 5 === 0) {
//     result += "pong";
//   }
//   if (number % 3 !== 0 && number % 5 !== 0) {
//     return number;
//   }
//   return result;
// }

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
      if (result[i] === "ping") {
        $("#output").append("<li class='ping'>" + result[i] + "</li>");
      } else if (result[i] === "pong") {
        $("#output").append("<li class='pong'>" + result[i] + "</li>");
      } else if (result[i] === "ping-pong") {
        $("#output").append("<li class='ping pong'>" + result[i] + "</li>");
      } else {
        $("#output").append("<li class=''>" + result[i] + "</li>");
      }
    }
    $(".well").slideUp();
    $(".well").slideDown();
  });
});
