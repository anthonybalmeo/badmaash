app.controller('MainCtrl', ['$scope','$routeParams','$rootScope','$timeout','$location', 'badmaashService', '$anchorScroll', '$window', function($scope, $routeParams, $rootScope, $timeout, $location, badmaashService, $anchorScroll, $window){

	$rootScope.random = Math.floor(Math.random() * 2) + 1;
	$rootScope.hours = false;
	$rootScope.navigationLink = '';
	$rootScope.active = false;
	$rootScope.footerShow = false;
	$rootScope.atHome = true;
	$rootScope.badmaashAbout = badmaashService.PageList[0];
	$rootScope.badmaashMenu = badmaashService.PageList[1];
	$rootScope.badmaashHome = badmaashService.PageList[2];
	$rootScope.badmaashPress = badmaashService.PageList[3];
	$rootScope.badmaashContact = badmaashService.PageList[4];
	$rootScope.badmaashReservation = badmaashService.PageList[5];
	$rootScope.headerVal = 0;

	$scope.checkNav = function(client) {
		$location.path(client);
		console.log($location.path(client).$$absUrl)
	};

	$scope.showPopup = function() {
		$rootScope.hours = true;
	}
	$scope.closePopup = function() {
		$rootScope.hours = false;
	}

	$scope.setHeaderActive = function(num) {

		if($rootScope.headerVal >=1 || $rootScope.headerVal <= 5) 
			{
				$rootScope.headerVal = num;
				return true;
			}
		else 
			{
				$rootScope.headerVal = 0;
				return false;
			}		
	}
	$scope.scrollTop = function () {
		$('body', 'html').animate({scrollTop: 0}, 300);
	}

	$scope.scrollto = function (section) {

		// $('body', 'html').animate({scrollTop: ( $('#'+section).offset().top-110 ) }, 300);
	}

	$scope.toggleTopMenu = function() {
		if($('#sideMenu').hasClass('navShow')){
			$('#sideMenu').removeClass('navShow');
		}
		else
			$('#sideMenu').addClass('navShow');	
	}
	$scope.openMenu = function(type) {
		$window.open('food-menu/'+type+'.pdf', '_blank');
	}
	
}]);


app.controller('AboutCtrl', ['$scope', '$routeParams', '$rootScope', '$timeout', '$route', '$sce', '$window', function($scope, $routeParams, $rootScope, $timeout, $route, $sce, $window){
	 $scope.$route = $route.current.$$route.originalPath;
     $scope.$route = $scope.$route.substring(1,$scope.$route.length);
      $rootScope.navigationLink = $scope.$route;

      	$rootScope.active = true;
      	$rootScope.footerShow = true;
      	$rootScope.atHome = false;



      // if($rootScope.atHome == false)
      	$timeout(function(){ $('body', 'html').animate({scrollTop: ( $('#'+$rootScope.navigationLink).offset().top-130 ) }, 300); }, 200 ); 
      	
    
}]);
app.controller('MenuCtrl', ['$scope', '$routeParams', '$rootScope', '$timeout', '$route', '$sce', '$window', function($scope, $routeParams, $rootScope, $timeout, $route, $sce, $window){
	$scope.$route = $route.current.$$route.originalPath;
    $scope.$route = $scope.$route.substring(1,$scope.$route.length);
    $rootScope.navigationLink = $scope.$route;

    if($rootScope.navigationLink == 'menu'){
    	$rootScope.active = true;
    	$rootScope.footerShow = true;
    	$rootScope.atHome = false;
    	 $window.scrollTo(0,0);
    }

    $scope.bombay = $rootScope.badmaashMenu.foodMenu.bombay;
    $scope.tandoori = $rootScope.badmaashMenu.foodMenu.tandoori;
    $scope.foodPorn = $rootScope.badmaashMenu.foodMenu.foodPorn;
    $scope.samosas = $rootScope.badmaashMenu.foodMenu.samosas;
    $scope.condiments = $rootScope.badmaashMenu.foodMenu.condiments;
    $scope.traditional = $rootScope.badmaashMenu.foodMenu.traditional;
}]);
app.controller('PressCtrl', ['$scope', '$routeParams', '$rootScope', '$timeout', '$route', '$sce', '$window', function($scope, $routeParams, $rootScope, $timeout, $route, $sce, $window){
	 $scope.$route = $route.current.$$route.originalPath;
     $scope.$route = $scope.$route.substring(1,$scope.$route.length);
      $rootScope.navigationLink = $scope.$route;

      if($rootScope.navigationLink == 'press'){
      	$rootScope.active = true;
      	$rootScope.footerShow = true;
      	$rootScope.atHome = false;
      	 $window.scrollTo(0,0);
      }
    
}]);
app.controller('ContactCtrl', ['$scope', '$routeParams', '$rootScope', '$timeout', '$route', '$sce', '$window', function($scope, $routeParams, $rootScope, $timeout, $route, $sce, $window){
	 $scope.$route = $route.current.$$route.originalPath;
     $scope.$route = $scope.$route.substring(1,$scope.$route.length);
      $rootScope.navigationLink = $scope.$route;

     if($rootScope.navigationLink == 'contact'){
         $rootScope.active = true;
         $rootScope.footerShow = true;
         $rootScope.atHome = false;
          $window.scrollTo(0,0);
     }
}]);

app.controller('ReservationCtrl', ['$scope', '$routeParams', '$rootScope', '$timeout', '$route', '$sce', '$window', function($scope, $routeParams, $rootScope, $timeout, $route, $sce, $window){
	 $scope.$route = $route.current.$$route.originalPath;
     $scope.$route = $scope.$route.substring(1,$scope.$route.length);
      $rootScope.navigationLink = $scope.$route;

     if($rootScope.navigationLink == 'reservation'){
         $rootScope.active = true;
         $rootScope.footerShow = true;
         $rootScope.atHome = false;
          $window.scrollTo(0,0);
     }
}]);

app.controller('FormCtrl', function ($scope, $http) {
    
    $scope.data = {
        name: "default",
        email: "default",
        subject: "default",
        message: "default"
    };

    $scope.formData = {};
    $scope.submission = false;

    var param = function(data) {
        var returnString = '';
        for (d in data){
            if (data.hasOwnProperty(d))
               returnString += d + '=' + data[d] + '&';
        }
        // Remove last ampersand and return
        return returnString.slice( 0, returnString.length - 1 );
  };

  $scope.submitForm = function() {
  	
    $http({
    method : 'POST',
    url : 'process.php',
    data : param($scope.formData), // pass in data as strings
    headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
  })
    .success(function(data) {
      if (!data.success) {
       // if not successful, bind errors to error variables
       $scope.errorName = data.errors.name;
       $scope.errorEmail = data.errors.email;
       $scope.errorTextarea = data.errors.message;
       $scope.submissionMessage = data.messageError;
       $scope.submission = true; //shows the error message
      } else {
      // if successful, bind success message to message
       $scope.submissionMessage = data.messageSuccess;
       $scope.formData = {}; // form fields are emptied with this line
       $scope.submission = true; //shows the success message
      }
     });
   };
    
});
