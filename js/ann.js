var app = angular.module('myApp', []);

app.controller('personCtrl', function($scope, $location, $http, $timeout, $interval) {
	$scope.myUrl = $location.absUrl();

	$scope.myHeader = "how are you?";
	$timeout(function() {
		$scope.myHeader = "Hi i am fine and you?";
	}, 2000);

	$scope.theTime = new Date().toLocaleTimeString();
	$interval(function() {
		$scope.theTime = new Date().toLocaleTimeString();
	}, 2000);

    

    $http({
        method : "GET",
        url : "welcome.html"
	    }).then(function mySucces(response) {
	        $scope.myWelcome = response.data;
	    }, function myError(response) {
	        $scope.myWelcome = response.statusText;
	    });
});
