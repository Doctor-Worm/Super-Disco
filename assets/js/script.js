// Current Date in header
var time = moment().format('dddd, MMMM Do');
$('#currentDay').text(time);


// list of each time block's text in storage, getItem, and restore to screen
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));


// set background colors according to current time
function adjustTimeBlocks() {
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
})
};


// Iterate through saved tasks array and create task elements on the page
function loadTime() {
for (i = 0; i < localStorage.length; i++) {
    var blockText = localStorage.getItem(localStorage.key[i]);
    if (!blockText) {
        return false
    } else {
    $(this).find('.description').val(localStorage.getItem(localStorage.key[i]));
    }
    }
};


// Button text was clicked
$(".saveBtn").on("click", function() {
    var text = $(this).siblings('.description').val().trim();
    var hour = $(this).parent().attr('id');
    console.log(text);
    console.log(hour);

    localStorage.setItem(hour, text);
});


adjustTimeBlocks();

loadTime();