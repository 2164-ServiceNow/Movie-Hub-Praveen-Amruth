angular.module('movieHub').service('WishlistService', function () {
    console.log('WishlistService initialized');
    let wishlist = [];

    this.addToWishlistWish = function (movie) {
        if (!wishlist.find(item => item.id === movie.id)) {
            wishlist.push(movie);
            console.log('Movie added to wishlist:', movie);
        }
    };

    this.addToWishlist = function (movie) {
        if (!wishlist.includes(movie)) {
            wishlist.push(movie);
            console.log('Movie added to wishlist:', movie);
        }
    };

    this.removeFromWishlistWish = function (movie) {
        const index = wishlist.findIndex(item => item.id === movie.id);
        if (index > -1) {
            wishlist.splice(index, 1);
        }
        console.log('Movie removed from wishlist:', movie);
    };

    this.removeFromWishlist = function (movie) {
        wishlist = wishlist.filter(item => item !== movie);
        console.log('Movie removed from wishlist:', movie);
    };

    this.getWishlistMovie = function () {
        return wishlist;
    };

    // New method to log the entire wishlist
    this.logWishlist = function () {
        console.log('Current Wishlist:', wishlist);
    };
});
