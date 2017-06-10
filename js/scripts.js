$(document).ready(function() {
  var yes = parseInt(prompt("ARE YOU READY TO FIND YOUR DREAM VACATION? (just type yes)"));
  $("#blanks form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var ageInput = $("input#age").val();
    var hobbyInput = $("select#hobby").val();
    var weatherInput = $("select#weather").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".age").text(ageInput);
    $(".hobby").text(hobbyInput);
    $(".weather").text(weatherInput);

    $("#confirmation").show();
    $("#emptyForm").hide();
    event.preventDefault();

    $("#match").show();
    $("#emptyForm").hide();
    event.preventDefault();


    var hobby = parseInt($("input#hobby").val());
    var weather = $("select#weather").val();
    if (weather === 'Snow' && hobby === Skiing) {
      match = 'Vail, Colorado';
    }
    if (hobby === 'Reading' && weather === Rain) {
      match = 'Portland, Oregon';
    }
    if (hobby === 'Surfing' && weather === Sunshine) {
      match = 'Hawaii';
    }

    $("#result").empty().append(match);
    $("#match").show()


  });
});
