var selectedScore = 0;

// Takes the selected score and stores the number for submission
$(".btn-scale").click(function () {
  $(".btn-scale").removeClass("active");
  $(this).addClass("active");
  selectedScore = $(this).attr("id")
})

// Changes the display to show the thank you message if a number is selected
$(".submit").click(function () {
  if (selectedScore>0) {
    score(selectedScore);
    $(".rating").addClass("hidden");
    $(".thank-you").removeClass("hidden");
  }
  else {
    alert("Please select a score.")
  }
})

// adds the selected score into the thank you message
function score(num) {
  $("#addScore").html("You selected " +
    selectedScore + " out of 5")
}
