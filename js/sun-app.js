$(document).ready(function(){
	// The results table is hidden on document load
    $("#sun-table").hide();

    //to create default dates in the fill in area
	var date_today = moment().format("YYYY-MM-DD");
	var date_weekago = moment(date_today).subtract(7, 'days').format("YYYY-MM-DD");

 	$("#start-date-val").val(date_weekago);
 	$("#end-date-val").val(date_today);

	//upon clicking display button, reveal sun table
    $(".search-submit").click(function(){
  		$("#sun-table").show();

  		// loop to get each date listed in a range
		// var start_date = document.getElementById("start-date-val").value;
		// var end_date = document.getElementById("end-date-val").value;

		// var testdate = moment(start_date);
		// var testdate2 = moment(end_date);

		// while (testdate <= testdate2) {
		//   // alert(testdate);
		//   var testdate = testdate.add(1, 'days');
		// }
	});





});

