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
                template: '<carousel></carousel>'
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
