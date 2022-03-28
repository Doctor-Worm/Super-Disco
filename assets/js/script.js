// Current Date in header
var time = moment().format('dddd, MMMM Do');
$('#currentDay').text(time);


// var timeBlock = $('.time-block');

// cycle through all time-blocks and add id to each
// var timeBlock = $('.time-block');
// for (i = 0; i < timeBlock.length; i++) {
//     console.log(timeBlock.value);
// }
// check to see if each time-block row is past, present, or future and set background color accordingly


// description text was clicked
// $(".description").on("click", "textarea", function() {
//     var text = $(this).text().trim();



// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };


// var auditTime = function() {
//     // get date from task element
//     var date = $('.time-block').find("id").text().trim();
//     // ensure it worked
//     console.log(date);
// }
// auditTime();
    // remove any old classes from element
    // $(timeBlock).removeClass("list-group-item-warning list-group-item-danger");
  
    // apply new class if task is near/over due date
    // if (moment().isAfter(time)) {
//     //   $(taskEl).addClass("list-group-item-danger");
//     }
//     else if (Math.abs(moment().diff(time, "days")) <= 2) {
//       $(taskEl).addClass("list-group-item-warning");
//     }
//   };

// set background colors according to current time
$('.time-block').each(function() {
    var currentTime = moment().hour();
    var id = parseInt($(this).attr('id').split('hour')[1]);
    console.log(currentTime);
    console.log(id);


    if (currentTime < id) {
        console.log("isBefore")
        $(this).find('.description').addClass('future');
        $(this).find('.description').removeClass('past');
        $(this).find('.description').removeClass('present');
    }
    else if (currentTime > id) {
        console.log("isAfter")
        $(this).find('.description').addClass('past');
        $(this).find('.description').removeClass('present');
        $(this).find('.description').removeClass('future');
    } 
    else {
        console.log("Present")
        $(this).find('.description').addClass('present');
        $(this).find('.description').removeClass('past');
        $(this).find('.description').removeClass('future');
    }
});

  $('.saveBtn').click(function() {
      console.log('push');
  });