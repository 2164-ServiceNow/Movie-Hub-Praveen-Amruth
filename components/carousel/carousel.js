angular.module('carousel', [])
    .component('carousel', {
        templateUrl: 'components/carousel/carousel.html',
        controller: ['$interval', function ($interval) {
            console.log('carousel component initialized');
            const vm = this;

            // List of images for the carousel
            vm.slides = [
                { id: 1, src: 'assets/images/banner-1.avif', alt: 'Slide 1' },
                { id: 2, src: 'assets/images/banner-2.avif', alt: 'Slide 2' },
                { id: 3, src: 'assets/images/banner-1.avif', alt: 'Slide 3' },
                { id: 4, src: 'assets/images/banner-2.avif', alt: 'Slide 4' }
            ];

            // Current slide index
            vm.currentSlide = 0;

            // Function to switch to the next slide
            vm.nextSlide = function () {
                vm.currentSlide = (vm.currentSlide + 1) % vm.slides.length;
            };

            // Auto-rotate slides every 2 seconds
            const slideInterval = $interval(vm.nextSlide, 2000);

            // Cleanup interval when component is destroyed
            vm.$onDestroy = function () {
                $interval.cancel(slideInterval);
            };
        }]
    });
