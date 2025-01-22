angular.module('movieHub')
    .service('SearchService', ['$rootScope', function ($rootScope) {
        let searchQuery = ''; // To store the current search query

        return {
            // Function to set the search query and broadcast an update
            setQuery: function (query) {
                searchQuery = query;
                console.log('Search Query Updated:', query);
                $rootScope.$broadcast('searchQueryUpdated', query);
            },

            // Function to get the current search query
            getQuery: function () {
                return searchQuery;
            }
        };
    }]);
