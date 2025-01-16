// Define the main module
angular.module('movieHub', ['ngRoute', 'navbar'])

    // Configure routes
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<h1>Welcome to MovieHub</h1><p>Your movie hub is here!</p>'
            })
            .when('/movies', {
                template: '<h1>Movies List</h1><p>Here, you can browse all the movies.</p>'
            })
            .when('/search', {
                template: '<h1>Search Movies</h1><p>Search for movies by title.</p>'
            })
            .when('/watchlist', {
                template: '<h1>Your Watchlist</h1><p>Manage your favorite movies here.</p>'
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
