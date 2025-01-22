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
                template: '<navbar></navbar>'
            })
            .when('/movie-details', {
                template: '<movie-details></movie-details>',
            })
            .when('/movies-carousel-moviedetails', {
                template: '<movies-carousel-moviedetails></movies-carousel-moviedetails>',
            })
            .otherwise({
                redirectTo: '/'
            });
    }])

    // Define a main controller (optional, for app-wide logic)
    .controller('MainController', ['$scope', function ($scope) {
        $scope.appName = 'MovieHub';
        console.log('MainController initialized for MovieHub!');
    }]);
