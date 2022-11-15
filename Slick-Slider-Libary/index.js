$(document).ready(function() {
    $('.image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bx bx-left-arrow-alt'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='bx bx-right-arrow-alt'></i></button>",


        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});
// arrows là button để chuyển slide