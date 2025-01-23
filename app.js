// Define the main module
angular.module('movieHub', [
    'ngRoute', 
    'navbar',
    'carousel',
    'footer',
    'movies',
    'topBoxOffice',
    'moviesCarousel'
])

// Configure routes
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/welcome.html', 
            controller: 'WelcomeController'
        })
        .when('/sign-in', {
            templateUrl: 'components/auth/sign-in.html',
            controller: 'AuthController'
        })
        .when('/sign-up', {
            templateUrl: 'components/auth/sign-up.html',
            controller: 'AuthController'
        })
        .when('/navbar', {
            template: '<navbar></navbar>'
        })
        .when('/movie-details', {
            template: '<movie-details></movie-details>'
        })
        .when('/movies-carousel-moviedetails', {
            template: '<movies-carousel-moviedetails></movies-carousel-moviedetails>'
        })
        .otherwise({
            redirectTo: '/'
        });
}])

// Define WelcomeController
.controller('WelcomeController', ['$scope', '$location', function ($scope, $location) {
    console.log('WelcomeController initialized for MovieHub!');

    // Function to navigate to the Navbar component
    $scope.goToNavbar = function () {
        $location.path('/navbar');
    };

    // Functions for navigating to Sign In and Sign Up
    $scope.navigateToSignIn = function () {
        $location.path('/sign-in');
    };

    $scope.navigateToSignUp = function () {
        $location.path('/sign-up');
    };

    $scope.navigateSignIn = function () {
        $location.path('/sign-in');
    };

    $scope.navigateSignUp = function () {
        $location.path('/sign-up');
    };


}])

// AuthController for Sign In and Sign Up
.controller('AuthController', ['$scope', '$location', function ($scope, $location) {
    console.log('AuthController initialized for MovieHub!');

    // Placeholder for any logic related to authentication
    $scope.signIn = function () {
        console.log('Sign In functionality triggered!');
    };

    $scope.signUp = function () {
        console.log('Sign Up functionality triggered!');
    };
}]);
