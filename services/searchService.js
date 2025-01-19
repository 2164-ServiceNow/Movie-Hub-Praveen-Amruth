angular.module('movieHub')
    .service('SearchService', ['$rootScope', function ($rootScope) {
        let searchQuery = '';

        return {
            setQuery: function (query) {
                searchQuery = query;
                console.log(query);
                $rootScope.$broadcast('searchQueryUpdated', query);
            },
            getQuery: function () {
                return searchQuery;
            }
        };
    }]);
