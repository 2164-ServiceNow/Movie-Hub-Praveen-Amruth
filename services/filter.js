angular.module('movieHub')
    .service('FilterService', ['$rootScope', function ($rootScope) {
        let selectedFilter = ''; // To store the current filter selection

        return {
            // Function to set the selected filter and broadcast an update
            setFilter: function (filter) {
                selectedFilter = filter;
                console.log('Filter Updated:', filter);
                $rootScope.$broadcast('filterUpdated', filter);
            },

            // Function to get the current selected filter
            getFilter: function () {
                return selectedFilter;
            }
        };
    }]);
