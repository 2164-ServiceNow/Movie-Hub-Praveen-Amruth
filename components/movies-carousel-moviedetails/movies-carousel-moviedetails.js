angular.module('moviesCarousel')
    .component('moviesCarouselMoviedetails', {
        templateUrl: 'components/movies-carousel-moviedetails/movies-carousel-moviedetails.html',
        controller: ['$rootScope', 'MovieService', '$location', function ($rootScope, MovieService, $location) {
            const vm = this;
            vm.loading = true;

            // Fetch the selected movie from the MovieService
            vm.$onInit = function () {
                vm.movie = MovieService.getSelectedMovie();
                if (!vm.movie) {
                    $location.path('/'); // If no movie is selected, redirect to the home page
                }
                vm.loading = false;
            };
        }]
    });
