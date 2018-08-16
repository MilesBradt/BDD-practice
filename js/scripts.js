// Specs
// - A year is not a leap year if it is not divisible by 4
// - A year is a leap year if it is divisible ny 4
// - A year is not a leap year if it is divisible by 100
// - A year is a leap year if it is divisible by 400


var leapYear = function(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};



$(document).ready(function() {
  $("form#leap-year").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
