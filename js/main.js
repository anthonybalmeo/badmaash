var app = angular.module('badmaash',['ngAnimate', 'ngSanitize', 'ngRoute'] );



app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	// ALL APP ROUTING IS HANDLED HERE
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainCtrl'
		})
		.when('/main', {
			templateUrl: 'views/home.html',
			controller: 'MainCtrl'
		})
		.when('/about-us', {
			templateUrl: 'views/about-us.html',
			controller: 'AboutCtrl'
		})
		.when('/menu', {
			templateUrl: 'views/about-us.html',
			controller: 'AboutCtrl'
		})
		.when('/press', {
			templateUrl: 'views/about-us.html',
			controller: 'AboutCtrl'
		})
		.when('/info', {
			templateUrl: 'views/about-us.html',
			controller: 'AboutCtrl'
		})
		.when('/reservation', {
			templateUrl: 'views/about-us.html',
			controller: 'AboutCtrl'
		})

		
		.otherwise({
			redirectTo: '/'
		});
		// $locationProvider.html5Mode(true);
		
}]);

