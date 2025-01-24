angular.module('movieHub').component('wishlist', {
    templateUrl: 'components/wishlist/wishlist.html',
    controller: ['WishlistService', function (WishlistService) {
        const vm = this;

        // Fetch wishlist movies
        const wishlist  = WishlistService.getWishlistMovie();

        // Normalize wishlist data
        vm.wishlist = wishlist .map(movie => {
            const posterURL =
                movie.poster || // Case 1: 'poster' key directly
                (Array.isArray(movie.images) ? movie.images[0] : null) || // Case 2: 'images' key with an array
                movie.posterURL || // Case 3: 'posterURL' key
                'default-poster.png'; // Fallback if no image is available

            return {
                ...movie,
                posterURL, // Add normalized posterURL
                description: movie.description || movie.plot || 'N/A', // Normalize description
                rating: movie.rating || 'N/A', // Normalize rating
            };
        });

        // Toggle wishlist function
        vm.toggleWishlist = function (movie) {
            movie.wishlistActive = !movie.wishlistActive;
            if (movie.wishlistActive) {
                WishlistService.addToWishlist(movie);
            } else {
                WishlistService.removeFromWishlist(movie);
            }
            vm.wishlist = WishlistService.getWishlistMovie();
            WishlistService.logWishlist(); 
        };
    }]
});
