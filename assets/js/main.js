$(document).ready(function () {
  
  function init() {
    displayTime();
    updateRowColor();
    
    
    $('#hour9 .description').val(localStorage.getItem('hour9'));
		$('#hour10 .description').val(localStorage.getItem('hour10'));
		$('#hour11 .description').val(localStorage.getItem('hour11'));
		$('#hour12 .description').val(localStorage.getItem('hour12'));
		$('#hour13 .description').val(localStorage.getItem('hour13'));
		$('#hour14 .description').val(localStorage.getItem('hour14'));
		$('#hour15 .description').val(localStorage.getItem('hour15'));
		$('#hour16 .description').val(localStorage.getItem('hour16'));
		$('#hour17 .description').val(localStorage.getItem('hour17'));
		$('#hour18 .description').val(localStorage.getItem('hour18'));
   
  }

  function displayTime() {
		$('#currentDay').text(moment().format('dddd, MMMM Do YYYY, HH:mm:ss'));
	}
	setInterval(displayTime, 1000);
  
  function saveTask() {
    showSaved();
    let task = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');
    localStorage.setItem(time, task)
  }
    
  function showSaved() {
    $("#saved").show().delay(300).fadeOut();
  }

  function updateRowColor() {
		let currentHour = moment().hour();
		console.log(currentHour);
		$('.time-block').each(function () {
			let hour = $(this).attr('data-time');
			hour = parseInt(hour, 10);
			if (currentHour > hour) {
				$(this).addClass('past');
			};
			if (currentHour === hour) {
				$(this).addClass('present');
			};
			if (currentHour < hour) {
				$(this).addClass('future');
			};
		});
	};

  $(".saveBtn").on("click", saveTask);
  init();
});


