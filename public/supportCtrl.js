var app = angular.module('textSupport');

app.controller('supportCtrl', function($scope, $firebase){

	ref = new Firebase('https://textsupport666.firebaseio.com/numbers');
	var sync = $firebase(ref);
	var itemsArray = sync.$asArray();
	$scope.items = itemsArray;

	console.log(itemsArray);

});