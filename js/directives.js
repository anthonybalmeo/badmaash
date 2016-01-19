app.directive('header', ['$timeout', '$rootScope', '$window', function($timeout, $rootScope, $window){
	return{
		restrict: 'A',
		templateUrl: 'partials/header.html',
		link: function($scope, element, attrs, controller) {
			$scope.toggleMenu = function() {				
				$('#sideMenu').toggleClass('navShow');
			};
			$(window).scroll( function(){
		    	
		        /* Check the location of each desired element */
		        if($(window).scrollTop() > 70)
		        {
		        	$('.caret').addClass('show');
		        }
		        else
		        	$('.caret').removeClass('show');
		    
		    });
		}
	};
	
}]);

app.directive('homeMenu', ['$timeout', '$rootScope', function($timeout, $rootScope){
	return{
		restrict: 'A',
		templateUrl: 'partials/menu.html',	
	};	
}]);


app.directive('aboutus', ['$timeout', '$rootScope', function($timeout, $rootScope){
	return{
		restrict: 'A',
		templateUrl: 'views/about-us.html',	
	};	
}]);
app.directive('menu', ['$timeout', '$rootScope', function($timeout, $rootScope){
	return{
		restrict: 'A',
		templateUrl: 'views/menu.html',	
	};	
}]);
app.directive('press', ['$timeout', '$rootScope', function($timeout, $rootScope){
	return{
		restrict: 'A',
		templateUrl: 'views/press.html',	
	};	
}]);
app.directive('contact', ['$timeout', '$rootScope', function($timeout, $rootScope){
	return{
		restrict: 'A',
		templateUrl: 'views/contact.html',	
	};	
}]);
app.directive('reservation', ['$timeout', '$rootScope', function($timeout, $rootScope){
	return{
		restrict: 'A',
		templateUrl: 'views/reservation.html',	
	};	
}]);

app.directive('main', ['$timeout', '$rootScope', function($timeout, $rootScope){
	return{
		restrict: 'A',
		templateUrl: 'views/main.html',
		link: function($scope, element, attrs, controller) {
			 /* Every time the window is scrolled ... */
		    
		}
	};
}]);


app.directive('footer', ['$timeout', '$rootScope', function($timeout, $rootScope){
	return{
		restrict: 'A',
		templateUrl: 'partials/footer.html',
		link: function($scope, element, attrs, controller) {
			$scope.year = (new Date).getFullYear();
		}
	};
	
}]);


  app.directive('scrollTo', function ($location, $anchorScroll) {
    return function(scope, element, attrs) {
    element.bind('click', function(event) {
			event.stopPropagation();
			scope.$on('$locationChangeStart', function(ev) {
			  ev.preventDefault();
			});
			var location = attrs.scrollTo;
			console.log(location);
			console.log($location.hash(location));
			$location.hash(location);
			$anchorScroll();
		});
	};
  });

  app.directive('opentable', function($compile) {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
    	 var html = "https://secure.opentable.com/frontdoor/default.aspx?rid=104173&restref=104173&bgcolor=F6F6F3&titlecolor=0F0F0F&subtitlecolor=0F0F0F&btnbgimage=https://secure.opentable.com/frontdoor/img/ot_btn_red.png&otlink=FFFFFF&icon=dark&mode=wide&hover=1";
    	 // var compiled = $compile(html)(scope);
     	
   }
 };
});


