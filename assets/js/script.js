// Display current day
$(document).ready(function () {
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  });
  


const localStorageData = [
  {
    date: "08-12-2023",
    data: {
      9: "text at 9AM",
      10: "text at 9AM",
      11: "text at 9AM",
      12: "text at 9AM",
      13: "text at 9AM",
      14: "text at 9AM",
      15: "text at 9AM",
      16: "text at 9AM",
      17: "text at 9AM",
    },
    date: "09-12-2023",
    data: {
      9: "text at 9AM",
      10: "text at 9AM",
      11: "text at 9AM",
      12: "text at 9AM",
      13: "text at 9AM",
      14: "text at 9AM",
      15: "text at 9AM",
      16: "text at 9AM",
      17: "text at 9AM",
    },
    date: "10-12-2023",
    data: {
      9: "text at 9AM",
      10: "text at 9AM",
      11: "text at 9AM",
      12: "text at 9AM",
      13: "text at 9AM",
      14: "text at 9AM",
      15: "text at 9AM",
      16: "text at 9AM",
      17: "text at 9AM",
    },
  },
];

const today = dayjs().format("DD-MM-YYYY"); //09-12-2023

//Populating today data from local storage for different date
const todayDataIndex = localStorageData.findIndex(function (element) {
  return element.date === today;
});

if (todayDataIndex < 0) {
  const todayData = localStorageData[todayDataIndex];
  //.....
  //const data9am = todayData.data[9];
  //show data9am - data5pm to the textarea of each time
  
  for(let i = 9; i < 18; i++){
      $(`#time-block-` + i).val(todayData.data[i]);

  }
}

//Save data to local storage
// Add click event listener
//      In event click listener
//      Get the value of the textarea that correspond with the button that the user click
//      if todayDataIndex exist
//                   const todayData = localStorageData[todayDataIndex];
//                  todayData.data[time] value of the textarea
//                  localStorageData[todayDataIndex] = todayData
//                  localStorage.setItem('data', localStorageData)
//      else
//          const todayData = {
    //          date: '10-12-2023',
//              data: {}
//  }
//                  todayData.data[time] value of the textarea
//                  localStorageData[todayDataIndex] = todayData
//                  localStorage.setItem('data', localStorageData)



