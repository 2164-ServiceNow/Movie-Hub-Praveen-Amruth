angular.module('movieHub')
    .service('MovieService', function () {
        let selectedMovie = null;

        // Set the selected movie
        this.setSelectedMovie = function (movie) {
            if (movie && typeof movie === 'object') {
                selectedMovie = movie;
            } else {
                console.error('Invalid movie object passed to MovieService');
            }
        };

        // Get the selected movie
        this.getSelectedMovie = function () {
            return selectedMovie;
        };
    });
