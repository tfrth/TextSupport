var app = angular.module('textSupport', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl: 'home.html',
		controller: 'homeCtrl'
	})

	.when('/support', {
		templateUrl: 'support.html',
		controller: 'supportCtrl'
	});

});
