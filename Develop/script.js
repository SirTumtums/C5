// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  let saveBtn = $(".saveBtn")
  let text = $("textarea")
   
  saveBtn.on('click', function(){
    console.log($(this)) //this appears to attach itself to button element...
		// this variable grabs all the siblings/like elements with the description class 
		let textValue = $(this).siblings('.description').val()
		console.log(textValue)
		// this variable selects the parent element of this with corresponding id 
		let textTime = $(this).parent().attr("id")
		console.log(textTime)
		localStorage.setItem(textTime, textValue)
	})

  // stores the values saved in textarea to local storage
$("#hour-5 .description").val(localStorage.getItem("hour-5"))
$("#hour-3 .description").val(localStorage.getItem("hour-6"))
$("#hour-4 .description").val(localStorage.getItem("hour-7"))
$("#hour-8 .description").val(localStorage.getItem("hour-8"))
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-1 .description").val(localStorage.getItem("hour-1"))
$("#hour-2 .description").val(localStorage.getItem("hour-2"))
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
	let currentTime = dayjs().format('h')
	let textTime = $(this).parent().attr("id")
	let schTime = document.querySelectorAll("textarea")

  console.log(schTime.length)
	console.log(currentTime)
	console.log(schTime)
//loop to apply past, present, and future classes
	for (let i = 0; i < schTime.length; i++){
		if (schTime[i] === currentTime) {
			$(schTime).addClass('present');
	console.log(schTime.i)

  console.log(schTime[i].dataset.hour)
}}		

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  let displayTime = dayjs().format('MMM D, YYYY, hh:mm:ss a' )
	$('#currentDay').text(displayTime);
