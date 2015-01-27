$(document).ready(function(){
    $("#sun-table").hide();

    //to create default dates in the fill in area
	var date_today = moment().format("YYYY-MM-DD");
	var date_weekago = moment(date_today).subtract(7, 'days').format("YYYY-MM-DD");

 	$("#start-date-val").val(date_weekago);
 	$("#end-date-val").val(date_today);

	//upon clicking display button, reveal sun table
    $(".search-submit").click(function(){
  		$("#sun-table").show();

	});

});