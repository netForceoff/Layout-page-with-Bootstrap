$('.directions-blocks').slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }

    ]
});

$('.directions-blocks_2').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }

    ]
});

$('.comments_blocks').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

$(document).ready(function() {
    $( ".icon-menu" ).click(function(){ 
     $( ".top-nav_menu_mobile" ).slideToggle(); 
    });
});