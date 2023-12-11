// Display current day
$(document).ready(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM D YYYY"));


  //update block classes past, present, future

  const currentTime = dayjs().hour();
  // console.log(currentTime);

  $(".time-block").each(function () {
    //select all HTML with class .time-block and iterate over each
    const blockHour = parseInt($(this).attr("id").split("-")[2]);
    // extract the hour from id of the current timeblock ,split extract third part,
    //converted to integer using parseInt
    if (blockHour < currentTime) {
      $(this).removeClass("present future").addClass("past");
    } else if (blockHour === currentTime) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });

  // Retrieve data from local storage
  // Persist events between refreshes of a page
  const localStorageData = JSON.parse(localStorage.getItem('data')) ||[];
  // console.log(localStorageData);
  

  const today = dayjs().format("DD-MM-YYYY");

  const todayDataIndex = localStorageData.findIndex(function (element) {
    return element.date === today;
  });

  if (todayDataIndex >= 0) {
    const todayData = localStorageData[todayDataIndex];

    // Populate data from local storage to textarea
    for (let i = 9; i < 18; i++) {
      $(`#textarea-${i}`).val(todayData.data[i]);
    }
  }

  // Save data to local storage
  $(".saveBtn").on("click", function () {
    var hour = $(this).data("hour");
    var textareaId = `textarea-${hour}`;
    var textValue = $("#" + textareaId)
      .val()
      .trim();

    if (textValue === "") {
      // Do nothing if textarea value is empty
      return;
    }

    if (todayDataIndex >= 0) {
      // Update existing entry
      const todayData = localStorageData[todayDataIndex];
      todayData.data[hour] = textValue;
    } else {
      // Create a new entry for today
      const todayData = {
        date: today,
        data: {
          [hour]: textValue,
        },
      };
      localStorageData.push(todayData);
    }

    // Save data back to local storage
    localStorage.setItem("data", JSON.stringify(localStorageData));
  });
});

