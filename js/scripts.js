$(document).ready(function() {
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

    $("#review").show();
    $("#emptyForm").hide();
    event.preventDefault();

  });
});

   var age = parseInt($("input#age").val());
   var gender = $("select#gender").val();
   var match = 'Justin Timberlake';
   if (hobby === 'sking' && weather === snow) {
     match = 'Vail, Colorado';
   }
   if (gender === 'female' && age >= 30) {
     match = 'Nicole Kidman';
   }
   if (gender === 'female' && age < 30) {
     match = 'Miley Cyrus';
   }

   $("#result").empty().append(match);
   $("#match").show()
