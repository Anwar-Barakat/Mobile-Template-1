$(window).on('load', function() {
    $('.loading').fadeOut(2500);
});



$(document).ready(function() {
    // Navbar Shrink
    $(window).on('scroll', function() {

        if ($(this).scrollTop() > 90) {
            $('.navbar').addClass('navbar-shrink');
        } else {
            $('.navbar').removeClass('navbar-shrink');

        }
    });






    // video Popup : 
    const videoSrc = $('#player_01').attr('src');

    $('.video-play-btn,.video-popup').on('click', function() {

        if ($('.video-popup').hasClass('open')) {

            $('.video-popup').removeClass('open');
            $('#player_01').attr('src', '');

        } else {
            $('.video-popup').addClass('open');
            if ($('#player_01').attr('src') == '') {
                $('#player_01').attr('src', videoSrc);
            }
        }
    });






    // Owl Carousal Features:
    $('.features-carousel').owlCarousel({

        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });







    // Owl Carousal ScreenShot:
    $('.screenshots-carousel').owlCarousel({

        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });






    // Owl Carousal testimonials:
    $('.testimonials-carousel').owlCarousel({

        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });






    // Owl Carousal team:
    $('.team-carousel').owlCarousel({

        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });





    // Scrolling - scrollIt

    $.scrollIt({
        topOffset: -50
    });




    // Navbar Collapse : 
    $('.nav-link').on('click', function() {

        $('.navbar-collapse').collapse('hide')
    });






    // Moon theme : 
    function toggleTheme() {

        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click", function() {
        $('body').toggleClass('dark');
        if ($('body').hasClass('dark')) {
            localStorage.setItem("Anwar", "dark");
        } else {
            localStorage.setItem("Anwar", "light");

        }
        updateIcon();
    });

    function updateIcon() {
        if ($('body').hasClass('dark')) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        } else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");

        }
    }
});