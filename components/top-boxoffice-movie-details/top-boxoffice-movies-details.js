angular.module('movieHub')
    .component('movieDetails', {
        templateUrl: 'components/top-boxoffice-movie-details/top-boxoffice-movies-details.html',
        controller: ['MovieService', function (MovieService) {
            const vm = this;

            // Retrieve the selected movie from MovieService
            vm.movie = MovieService.getSelectedMovie(); 

            if (!vm.movie) {
                // Handle the case where no movie is selected (e.g., direct URL access)
                vm.errorMessage = "No movie details available. Please select a movie from the list.";
            }
        }],
    });
