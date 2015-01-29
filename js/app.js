
function suntimesController($scope,$http) {

  var start_date = document.getElementById("start-date-val").value;
  var end_date = document.getElementById("end-date-val").value;


  // HTTP test to get single JSON object information; hard coded lat and lng; using start date value from DOM
  $http.get("http://api.sunrise-sunset.org/json", 
	 { params: {
	 	lat: "36.7201600",  
		lng: "-4.4203400", 
		date: start_date } })
  .success(function(response) {$scope.sundates = response;});

// wanted to get this GET request method to work on click...
// $scope.getsundata = function($scope,$http) {
//    $http.get("http://api.sunrise-sunset.org/json", 
//        { params: {
//          lat: "36.7201600",  
//          lng: "-4.4203400", 
//          date: "2015-01-01" } })
//        .success(function(response) {$scope.sundates = response;});
//     };
}
