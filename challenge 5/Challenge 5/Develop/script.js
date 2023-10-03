$(function () {
  // Display current date in the header
  var currentDayEl = $("#currentDay");
  currentDayEl.text(dayjs().format("dddd, MMMM D"));

  // Get the current hour in 24-hour format
  var currentHour = dayjs().format("H");

  // Add a click event listener to save buttons
  $(".saveBtn").on("click", function () {
      var timeBlockId = $(this).parent().attr("id");
      var userInput = $(this).siblings(".description").val();
      localStorage.setItem(timeBlockId, userInput);
  });

  //  apply past, present, or future class
  $(".time-block").each(function () {
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

      if (timeBlockHour < currentHour) {
          $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
          $(this).addClass("present");
      } else {
          $(this).addClass("future");
      }

      // Retrieve and display user input from local storage
      var savedUserInput = localStorage.getItem($(this).attr("id"));
      if (savedUserInput) {
          $(this).find(".description").val(savedUserInput);
      }
  });
});
